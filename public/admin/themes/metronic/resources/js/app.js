require('./bootstrap');
window.KTPortlet = require('../metronic/js/components/portlet.js');
require('./builder');
require('select2');
require('nestable2');

import * as intlTelInput from 'intl-tel-input/build/js/intlTelInput.js';
import * as utils from 'intl-tel-input/build/js/utils.js?1562189064761';
window.utils = utils;
window.intlTelInput = intlTelInput;
import Cropper from 'cropperjs';
window.Cropper = Cropper;

import * as CodeMirror from 'codemirror';

// Make CodeMirror available globally so the modes' can register themselves.
window.CodeMirror = CodeMirror

if (!CodeMirror.modeURL) CodeMirror.modeURL = '../mode/%N/%N.js'

var loading = {}

function splitCallback(cont, n) {
    var countDown = n
    return function() {
        if (--countDown === 0) cont()
    }
}

function ensureDeps(mode, cont) {
    var deps = CodeMirror.modes[mode].dependencies
    if (!deps) return cont()
    var missing = []
    for (var i = 0; i < deps.length; ++i) {
        if (!CodeMirror.modes.hasOwnProperty(deps[i])) missing.push(deps[i])
    }
    if (!missing.length) return cont()
    var split = splitCallback(cont, missing.length)
    for (i = 0; i < missing.length; ++i) CodeMirror.requireMode(missing[i], split)
}

CodeMirror.requireMode = function(mode, cont) {
    if (typeof mode !== 'string') mode = mode.name
    if (CodeMirror.modes.hasOwnProperty(mode)) return ensureDeps(mode, cont)
    if (loading.hasOwnProperty(mode)) return loading[mode].push(cont)

    var file = CodeMirror.modeURL.replace(/%N/g, mode)

    var script = document.createElement('script')
    script.src = file
    var others = document.getElementsByTagName('script')[0]
    var list = loading[mode] = [cont]

    CodeMirror.on(script, 'load', function() {
        ensureDeps(mode, function() {
            for (var i = 0; i < list.length; ++i) list[i]()
        })
    })

    others.parentNode.insertBefore(script, others)
}

CodeMirror.autoLoadMode = function(instance, mode) {
    if (CodeMirror.modes.hasOwnProperty(mode)) return

    CodeMirror.requireMode(mode, function() {
        instance.setOption('mode', instance.getOption('mode'))
    })
}

export default CodeMirror;

// Valdiation Form
(function() {
    'use strict';
    window.addEventListener('load', function() {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('kt-form');
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function(form) {
            form.addEventListener('submit', function(event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();

// // custom select2
$('#kt_datatable_search_status').select2();
$('#kt_datatable_search_type').select2();

/********************************************
 * Thème Metronic
 *******************************************/

var KTselect2 = {
    init: function() {
        $(".kt-selectpicker").select2({
            placeholder: _LANG_.choisissez_select,
            allowClear: true,
            escapeMarkup: function(markup) { return markup; },
            noneSelectedText: _LANG_.choisissez_select,
            language: {
                noResults: function() {
                    return _LANG_.no_result;
                }
            }
        })
    }
};
jQuery(document).ready(function() {
    KTselect2.init();
});

// // ClipBoard 
var KTClipboardDemo = {
    init: function() {
        new ClipboardJS("[data-clipboard=true]").on("success", function(e) {
            e.clearSelection(), alert(_LANG_.text_copied)
        })
    }
};
jQuery(document).ready(function() {
    KTClipboardDemo.init();
});

"use strict";
var KTKBootstrapTouchspin = {
    init: function() {
        $(".kt_qty").TouchSpin({
                buttondown_class: "btn btn-secondary",
                buttonup_class: "btn btn-secondary",
                verticalbuttons: !0,
                verticalup: '<i class="la la-plus"></i>',
                verticaldown: '<i class="la la-minus"></i>',
                min: 0,
                max: 100000,
            }),
            $(".kt_carrier").TouchSpin({
                buttondown_class: "btn btn-secondary",
                buttonup_class: "btn btn-secondary",
                verticalbuttons: !0,
                verticalup: '<i class="la la-plus"></i>',
                verticaldown: '<i class="la la-minus"></i>',
                min: 0,
                max: 100000,
            }),
            $(".kt_price").TouchSpin({
                buttondown_class: "btn btn-secondary",
                buttonup_class: "btn btn-secondary",
                min: 0,
                max: 1000000,
                // step: .1,
                decimals: 6,
                forcestepdivisibility: "none",
                // boostat: 5,
                // maxboostedstep: 10
            })
    }
};
jQuery(document).ready(function() {
    KTKBootstrapTouchspin.init()
});

/********************************************
 * Internationalization phone
 *******************************************/
if ($('div.phone_international').length) {
    console.log('dfgdfgdfgdf');
    $(".phone_international").each(function(i) {
        var id = $(this).attr('id');
        var input_phone = document.querySelector("#" + id),
            errorMsgPhoneFixe = document.querySelector(".invalid-feedback-" + id);
        //intlTelInput(input_mobile);

        // here, the index maps to the error code returned from getValidationError - see readme
        var errorMap = ["Invalid number", "Invalid country code", "Too short", "Too long", "Invalid number"];

        // initialise plugin
        var iti_phoneFixe = intlTelInput(input_phone, {
            initialCountry: "auto",
            allowDropdown: true,
            geoIpLookup: function(callback) {
                $.get('https://ipinfo.io', function() {}, "jsonp").always(function(resp) {
                    var countryCode = (resp && resp.country) ? resp.country : "";
                    callback(countryCode);
                });
            },
            hiddenInput: "full_" + id,
            utilsScript: utils
        });

        var resetPhoneFixe = function() {
            input_phone.classList.remove("error");
            errorMsgPhoneFixe.innerHTML = "";
            errorMsgPhoneFixe.classList.add("hide");
            //validMsg.classList.add("hide");
        };

        // on blur: validate
        input_phone.addEventListener('blur', function() {
            resetPhoneFixe();
            if (input_phone.value.trim()) {
                if (!iti_phoneFixe.isValidNumber()) {
                    input_phone.classList.add("error");
                    var errorCode = iti_phoneFixe.getValidationError();
                    errorMsgPhoneFixe.innerHTML = errorMap[errorCode];
                    errorMsgPhoneFixe.classList.remove("hide");
                }
            }
        });
        input_phone.addEventListener("countrychange", function(e, countryData) {
            //var currentMask = e.currentTarget.placeholder;
            var currentMask = $(this).attr('placeholder').replace(/[0-9+]/ig, '9');
            $(this).attr('placeholder', currentMask);

            $(input_phone).inputmask({ mask: currentMask, keepStatic: true });
        });
        input_phone.addEventListener('change', resetPhoneFixe);
        input_phone.addEventListener('keyup', resetPhoneFixe);

    });
}


var KTInputmask = {
    init: function() {
        $(".currency").inputmask("9.999999", {
            placeholder: "1.000000",
            autoUnmask: !0
        });
        if ($('div.phone_international').length) {
            $(".phone_international").each(function(i) {
                var id = $(this).attr("id");

                //Todo a voir dans les autres pays
                if ($("#" + id).val() != '') {
                    var currentMask = $("#" + id).attr('placeholder').replace(/[0-9+]/ig, '9');
                    $("#" + id).inputmask({ mask: currentMask, keepStatic: true });
                }
            });
        }

    }
};
jQuery(document).ready(function() {
    KTInputmask.init()
});

var KTBootstrapMaxlength = {
    init: function() {
        $(".line3").maxlength({
            warningClass: "label label-warning label-rounded label-inline",
            limitReachedClass: "label label-success label-rounded label-inline"
        })
    }
};
jQuery(document).ready(function() {
    KTBootstrapMaxlength.init()
});


//Settings Notify
$.notifyDefaults({
    animate: {
        enter: 'animate__animated animate__slideInDown animate__fadeInDown',
        exit: 'animate__animated animate__fadeInDown animate__fadeOutUp animate__slideOutUp'
    },
    placement: {
        from: 'top',
        align: 'right'
    }
});

// Service serviceWorker
if ('serviceWorker' in navigator) {
    // Only call navigator.serviceWorker.register() if that's true.

    navigator.serviceWorker.register('/service-worker.js').then(function(registration) {
        console.log('ServiceWorker registration successful with scope:', registration.scope);
    }).catch(function(error) {
        console.log('ServiceWorker registration failed:', error);
    });

}

/********************************************
 * Controle et securise de l'envoir des données en Ajax
 *******************************************/

$.ajaxSetup({
    headers: {
        'X-CSRF-TOKEN': $('meta[name="X-CSRF-TOKEN"]').attr('content')
    },
    beforeSend: function(jqXHR, settings) {

        var params = settings.url.indexOf('?');
        if (params <= 0)
            settings.url = settings.url + '?time=' + $.now();
        else
            settings.url = settings.url + '&time=' + $.now();

        if (env == 'development') {
            // console.log(jqXHR);
            // console.log(settings);
        }
    },
    complete: function(jqXHR, settings) {

        // Update CSRF hash
        if (jqXHR.status == 200) {
            $('meta[name="X-CSRF-TOKEN"]').attr('content', jqXHR.responseJSON.[crsftoken]);
            $('input[name="' + crsftoken + '"]').attr('value', jqXHR.responseJSON.[crsftoken]);
        }

    },
    error: function(xhr, ajaxOptions, thrownError) {
        //console.log(xhr);
        var code = xhr.responseJSON.error.code == 0 ? xhr.status : xhr.responseJSON.error.code;
        $('meta[name="X-CSRF-TOKEN"]').attr('content', xhr.responseJSON.[crsftoken]);
        $('input[name="' + crsftoken + '"]').attr('value', xhr.responseJSON.[crsftoken]);
        $.notify({
            title: 'Erreur',
            //message: 'Code: ' + xhr.status + ' <br> Message: ' + xhr.responseJSON.message
            message: 'Code: ' + code + ' <br> Message: ' + xhr.responseJSON.error.message
        }, {
            type: (code == 500) ? 'danger' : 'warning',
            placement: {
                from: 'top',
                align: 'right'
            },
        });
    }
});

// set your delay here, 2 seconds as an example...
var my_delay = 5000;

// call your ajax function when the document is ready...
$(function() {
    //callAjax();
});

/**
 * function that processes your ajax calls...
 **/
function callAjax() {
    $.ajax({
        type: 'POST',
        url: basePath + segementAdmin + "/sp-admin-ajax",
        data: {
            ajax: true,
            controller: 'AdminAjaxController',
            action: 'authcheck',
            module: false
        },
        dataType: "json",
        success: function(response) {

            if (response.check.auth_check == false) {
                toastr.options = {
                    "closeButton": false,
                    "debug": false,
                    "onHidden": function() {
                        window.location.reload();
                    },
                    "newestOnTop": false,
                    "progressBar": true,
                    "positionClass": "toast-top-right",
                    "preventDuplicates": true,
                    "showDuration": "300",
                    "hideDuration": "20000",
                    "timeOut": "20000",
                    "extendedTimeOut": "20000",
                    "showEasing": "swing",
                    "hideEasing": "linear",
                    "showMethod": "fadeIn",
                    "hideMethod": "fadeOut"
                };
                toastr.warning(_LANG_.redirection_device_after_logout, _LANG_.attention, 6000, "X");
            } else {
                $('.kt-notification-info').html(response.activityLogInfo);
                $('#activityLogInfoNbre').html(response.activityLogInfoNbre);
                KTApp.block('.kt-notification-info', {
                    overlayColor: "#000000",
                    type: "spinner",
                    state: "brand",
                    opacity: .05,
                    size: "lg"
                }), setTimeout(function() {
                    KTApp.unblock('.kt-notification-info')
                }, 2e3)
                setTimeout(callAjax, my_delay);
            }

            // Notifications
            if (response.check.notifications.event) {
                $('#topbar_notifications_events').html(response.check.notifications.event.html);
            }
            if (response.check.notifications.countNotif != '0') {
                $('.notification_bout').addClass('notification_bout_active');
                $('#countNotif').html(response.check.notifications.countNotif);
                $('.kt-pulse__ring').css('display', 'block');
            } else {
                $('.notification_bout').removeClass('notification_bout_active');
                $('.kt-pulse__ring').css('display', 'none');
            }
        }
    });
}

jQuery(document).ready(function() {

    let selectedTab = window.location.hash;

    if (selectedTab) {

        $('.nav-link[href="' + window.location.href + '"]').trigger('click').addClass('active');
        $('.tab-pane').removeClass('active');
        $(selectedTab).tab('show');
    }

    $(document).on("click", '.nav-tabs a', function(e) {

        $('.tab-pane').removeClass('active');
        var href = $(this).attr('href');
        var hash = this.hash;
        $(hash).tab('show');

    });
});

/***************************
 * Enregistrer les settings du User
 **************************/

$(document).on("click", "#kt_aside_toggle", function(e) {
    e.preventDefault();
    var kt_aside = $(this).attr('data-kt_aside');
    var id = $(this).attr('data-id');
    $.ajax({
        type: 'POST',
        url: baseController + "/ajax/ktAsideUser",
        data: {
            [crsftoken]: $('meta[name="X-CSRF-TOKEN"]').attr('content'),
            aside: kt_aside
        },
        dataType: "json",
        success: function(result, status, xhr) {
            //some one ...
        }
    })
});


$(document).on("click", ".deleterowKtdatatable", function(e) {
    e.preventDefault();
    var id = $(this).data('id');
    var checkbox = "";
    $('.checkbox.checkbox-single>input').each(function() {
        if ($(this).val() == id) {
            checkbox = $(this);
        }
    });
    checkbox.trigger("click");

});


/*****************************************************
 * LANGUAGE
 *****************************************************/

var tab_langs = ".lang_tabs";
var tab_lang = ".lang_tab";
var lang_fields = ".kt-form";

$(document).ready(function() {
    initTabLangs();
    $(tab_langs).hide();
    if ($(tab_langs).find(tab_lang).length == 1) $(tab_langs).hide();
    else $(tab_langs).first().show();

});

function initTabLangs() {
    var $tab_langs = $(tab_langs);
    var $tab_lang = $(tab_lang);

    var langDefault = $tab_langs.data("dft-lang");
    afficheLang(langDefault);
    $(document).on('click', tab_lang, function() {
        afficheLang($(this).data("lang"));
    });
}

function afficheLang(lang) {
    // mettre l'onglet à active
    $(tab_langs).find($(tab_lang)).removeClass("active btn-success").addClass("btn-primary");
    $(tab_langs).find($(tab_lang)).each(function() {
        if ($(this).data("lang") == lang)
            $(this).addClass("active btn-success");
    });
    // afficher les bons champs
    $(lang_fields).find("input.lang,textarea.lang, .textarea.lang").each(function() {
        if ($(this).attr('data-iso_lang') == lang) {
            $(this).show();
        } else {
            $(this).hide();
        }

    });
}


/*****************************************************
 * FUNCTION
 *****************************************************/
/**
 * 
 * Fonction In Array
 */
$.checkValue = function(value, arr) {

    var status = false;

    for (var i = 0; i < arr.length; i++) {
        var name = arr[i];
        if (name == value) {
            status = true;
            break;
        }
    }
    return status;
}