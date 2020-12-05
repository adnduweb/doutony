// Class Definition
var KTform = function() {
    var _buttonSpinnerClasses = 'spinner spinner-right spinner-white pr-15';


    var _handleFormUser = function() {

        var form = KTUtil.getById('kt_apps_fichecompte-personnel_form');

        var formSubmitUrl = KTUtil.attr(form, 'action');
        var formSubmitButton = $('.kt_form_submit_utilisateurs');

        if (!form) {
            return;
        }

        const passwordMeter = document.getElementById('passwordMeter');

        const randomNumber = function(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        };

        FormValidation
            .formValidation(
                form, {
                    fields: {
                        username: {
                            validators: {
                                notEmpty: {
                                    message: _LANG_.champs_is_required
                                }
                            }
                        },
                        firstname: {
                            validators: {
                                notEmpty: {
                                    message: _LANG_.champs_is_required
                                }
                            }
                        },
                        lastname: {
                            validators: {
                                notEmpty: {
                                    message: _LANG_.champs_is_required
                                }
                            }
                        },
                        email: {
                            validators: {
                                notEmpty: {
                                    message: _LANG_.email_is_required
                                },
                                emailAddress: {
                                    message: _LANG_.the_value_is_not_address_valid
                                }
                            }
                        },
                        password: {
                            validators: {
                                different: {
                                    message: _LANG_.password_cannot_be_the_same_as_username,
                                    compare: () => {
                                        return form.querySelector('[name="username"]').value;
                                    }
                                }
                            }
                        },
                        pass_confirm: {
                            validators: {
                                identical: {
                                    compare: function() {
                                        return form.querySelector('[name="password"]').value;
                                    },
                                    message: _LANG_.password_not_ecal_pass_confirm,
                                }
                            }
                        }
                    },
                    plugins: {
                        trigger: new FormValidation.plugins.Trigger(),
                        bootstrap: new FormValidation.plugins.Bootstrap(),
                        submitButton: new FormValidation.plugins.SubmitButton(),
                        passwordStrength: new FormValidation.plugins.PasswordStrength({
                            field: 'password',
                            message: _LANG_.the_password_is_weak,
                            minimalScore: 3,
                            onValidated: function(valid, message, score) {
                                switch (score) {
                                    case 0:
                                        passwordMeter.style.width = randomNumber(1, 20) + '%';
                                        passwordMeter.style.backgroundColor = '#ff4136';
                                        break;
                                    case 1:
                                        passwordMeter.style.width = randomNumber(20, 40) + '%';
                                        passwordMeter.style.backgroundColor = '#ff4136';
                                        break;
                                    case 2:
                                        passwordMeter.style.width = randomNumber(40, 60) + '%';
                                        passwordMeter.style.backgroundColor = '#ff4136';
                                        break;
                                    case 3:
                                        passwordMeter.style.width = randomNumber(60, 80) + '%';
                                        passwordMeter.style.backgroundColor = '#ffb700';
                                        break;
                                    case 4:
                                        passwordMeter.style.width = '100%';
                                        passwordMeter.style.backgroundColor = '#19a974';
                                        break;
                                    default:
                                        break;
                                }
                            },
                        }),
                    }
                }
            )
            .on('core.form.valid', function() {
                $(form).submit();
            })
            .on('core.form.invalid', function(response) {

                if (response.error == true) {
                    $(form).before(response.message);
                }
            });
    }

    // Public Functions
    return {
        init: function() {
            _handleFormUser();
            //_handleFormSignup();
        }
    };
}();

// Class Initialization
jQuery(document).ready(function() {
    KTform.init();
});

$(document).on("click", '.generer_mot_passe', function(e) {
    $.post(baseController + "/getPassword", {
            [crsftoken]: $('meta[name="X-CSRF-TOKEN"]').attr('content'),
        },
        function(response, status) {
            //csrf_hash = response.csrf_token;

            if (response.error == false) {
                $('.pass_confirm').val('');
                $('.datapassword').val('');
                $('#password').html('');
                $('.datapassword').val(response.success.password);
                $('.pass_confirm').val(response.success.password);
                $('#password').html(response.success.password);
            }
        });
});

$('.show-password').click(function() {
    if ($(this).prev('input').prop('type') == 'password') {
        //Si c'est un input type password
        $(this).prev('input').prop('type', 'text');
        $(this).html('<i class="far fa-eye-slash"></i>');
    } else {
        //Sinon
        $(this).prev('input').prop('type', 'password');
        $(this).html('<i class="far fa-eye"></i>');
    }
});

var input_phone = document.querySelector("#phone"),
    errorMsgPhoneFixe = document.querySelector(".invalid-feedback-phone");
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
    hiddenInput: "full_phone",
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

var input_phone_mobile = document.querySelector("#phone_mobile"),
    errorMsgPhoneMobile = document.querySelector(".invalid-feedback-phone_mobile");




// initialise plugin
var iti_phoneMobile = intlTelInput(input_phone_mobile, {
    initialCountry: "auto",
    geoIpLookup: function(callback) {
        $.get('https://ipinfo.io', function() {}, "jsonp").always(function(resp) {
            var countryCode = (resp && resp.country) ? resp.country : "";
            callback(countryCode);
        });
    },
    hiddenInput: "full_phone_mobile",
    utilsScript: utils
});

var resetPhoneMobile = function() {
    input_phone_mobile.classList.remove("error");
    errorMsgPhoneMobile.innerHTML = "";
    errorMsgPhoneMobile.classList.add("hide");
    //validMsg.classList.add("hide");
};

// on blur: validate
input_phone_mobile.addEventListener('blur', function() {
    resetPhoneMobile();
    if (input_phone_mobile.value.trim()) {
        if (!iti_phoneMobile.isValidNumber()) {
            input_phone_mobile.classList.add("error");
            var errorCode = iti_phoneMobile.getValidationError();
            errorMsgPhoneMobile.innerHTML = errorMap[errorCode];
            errorMsgPhoneMobile.classList.remove("hide");
        }
    }
});
input_phone_mobile.addEventListener("countrychange", function(e, countryData) {
    //var currentMask = e.currentTarget.placeholder;
    var currentMask = $(this).attr('placeholder').replace(/[0-9+]/ig, '9');
    $(this).attr('placeholder', currentMask);

    $(input_phone_mobile).inputmask({ mask: currentMask, keepStatic: true });
});
input_phone_mobile.addEventListener('change', resetPhoneMobile);
input_phone_mobile.addEventListener('keyup', resetPhoneMobile);