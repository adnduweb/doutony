$(document).on("click", '.generer_mot_passe', function(e) {
    $.post(basePath + segementAdmin + "/sp-admin-ajax", {
            ajax: true,
            controller: 'AdminUserController',
            action: 'getPassword',
            module: false,
            value: null,
            name_module: false
        },
        function(response, status) {
            csrf_hash = response.csrf_token;

            if (status == 'success') {
                $('.pass_confirm').val('');
                $('.datapassword').val('');
                $('#password').html('');
                $('.datapassword').val(response.password);
                $('.pass_confirm').val(response.password);
                $('#password').html(response.password);
            }
        });
});


$('.unmask').on('click', function() {
    if ($(this).prev('input').attr('type') == 'password')
        changeType($(this).prev('input'), 'text');
    else
        changeType($(this).prev('input'), 'password');
    return false;
});

/* 
  function from : https://gist.github.com/3559343
  Thank you bminer!
*/
// x = élément du DOM, type = nouveau type à attribuer
function changeType(x, type) {
    if (x.prop('type') == type)
        return x; // ça serait facile.
    try {
        // Une sécurité d'IE empêche ceci
        return x.prop('type', type);
    } catch (e) {
        // On tente de recréer l'élément
        // En créant d'abord une div
        var html = $("<div>").append(x.clone()).html();
        var regex = /type=(\")?([^\"\s]+)(\")?/;
        // la regex trouve type=text ou type="text"
        // si on ne trouve rien, on ajoute le type à la fin, sinon on le remplace
        var tmp = $(html.match(regex) == null ?
            html.replace(">", ' type="' + type + '">') :
            html.replace(regex, 'type="' + type + '"'));

        // on rajoute les vieilles données de l'élément
        tmp.data('type', x.data('type'));
        var events = x.data('events');
        var cb = function(events) {
            return function() {
                //Bind all prior events
                for (i in events) {
                    var y = events[i];
                    for (j in y) tmp.bind(i, y[j].handler);
                }
            }
        }(events);
        x.replaceWith(tmp);
        setTimeout(cb, 10); // On attend un peu avant d'appeler la fonction
        return tmp;
    }
}


var form = document.querySelector("#kt_apps_user_add_user_form");
var input_mobile = document.querySelector("#mobile"),
    input_phone = document.querySelector("#phone"),
    errorMsgMobile = document.querySelector(".invalid-feedback-mobile"),
    errorMsgPhone = document.querySelector(".invalid-feedback-phone");
//intlTelInput(input_mobile);

// here, the index maps to the error code returned from getValidationError - see readme
var errorMap = ["Invalid number", "Invalid country code", "Too short", "Too long", "Invalid number"];



// initialise plugin
var iti_mobile = intlTelInput(input_mobile, {
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

var resetMobile = function() {
    input_mobile.classList.remove("error");
    errorMsgMobile.innerHTML = "";
    errorMsgMobile.classList.add("hide");
    //validMsg.classList.add("hide");
};

// on blur: validate
input_mobile.addEventListener('blur', function() {
    resetMobile();
    if (input_mobile.value.trim()) {
        if (!iti_mobile.isValidNumber()) {
            input_mobile.classList.add("error");
            var errorCode = iti_mobile.getValidationError();
            errorMsgMobile.innerHTML = errorMap[errorCode];
            errorMsgMobile.classList.remove("hide");
        }
    }
});
input_mobile.addEventListener("countrychange", function() {
    var currentMask = $(this).attr('placeholder').replace(/[0-9+]/ig, '9');
    $(this).attr('placeholder', currentMask);
    $(input_mobile).inputmask({ mask: currentMask, keepStatic: true });
});
// on keyup / change flag: resetMobile
input_mobile.addEventListener('change', resetMobile);
input_mobile.addEventListener('keyup', resetMobile);

form.addEventListener('submit', function(event) {
    if (iti_mobile.isValidNumber() == false) {
        event.preventDefault();
        event.stopPropagation();
    }
    form.classList.add('was-validated');
}, false);


// initialise plugin
var iti_phone = intlTelInput(input_phone, {
    initialCountry: "auto",
    geoIpLookup: function(callback) {
        $.get('https://ipinfo.io', function() {}, "jsonp").always(function(resp) {
            var countryCode = (resp && resp.country) ? resp.country : "";
            callback(countryCode);
        });
    },
    hiddenInput: "full_phone",
    utilsScript: utils
});

var resetPhone = function() {
    input_phone.classList.remove("error");
    errorMsgPhone.innerHTML = "";
    errorMsgPhone.classList.add("hide");
    //validMsg.classList.add("hide");
};

// on blur: validate
input_phone.addEventListener('blur', function() {
    resetPhone();
    if (input_phone.value.trim()) {
        if (!iti_phone.isValidNumber()) {
            input_phone.classList.add("error");
            var errorCode = iti_phone.getValidationError();
            errorMsgPhone.innerHTML = errorMap[errorCode];
            errorMsgPhone.classList.remove("hide");
        }
    }
});
input_phone.addEventListener("countrychange", function() {
    console.log('cxvhghdd');
    var currentMask = $(this).attr('placeholder').replace(/[0-9+]/ig, '9');
    $(this).attr('placeholder', currentMask);
    $(input_phone).inputmask({ mask: currentMask, keepStatic: true });
});

input_phone.addEventListener('change', resetPhone);
input_phone.addEventListener('keyup', resetPhone);



$(document).on("click", '.deleteSession', function(e) {
    var session_en_cours = $(this).data('session_en_cours');
    var id = $(this).attr('id')
    $.post(basePath + segementAdmin + "/sp-admin-ajax", {
            ajax: true,
            controller: 'AdminUserController',
            action: 'deleteSession',
            module: false,
            value: session_en_cours,
            name_module: false
        },
        function(response, status) {
            csrf_hash = response.csrf_token;
            $("#" + id).css('display', 'none');
            // console.log(id);
            if (status == 'success') {
                $.notify({
                    title: _LANG_.deleted + "!",
                    message: response.message
                }, {
                    type: response.type,
                    placement: {
                        from: 'bottom',
                        align: 'center'
                    },
                });
            }
        });
});