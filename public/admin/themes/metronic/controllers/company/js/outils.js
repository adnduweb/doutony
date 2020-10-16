var form = document.querySelector("#kt_apps_user_add_user_form");
var input_phone_fixe = document.querySelector("#phone_fixe"),
    errorMsgPhoneFixe = document.querySelector(".invalid-feedback-phone_fixe");
//intlTelInput(input_mobile);

// here, the index maps to the error code returned from getValidationError - see readme
var errorMap = ["Invalid number", "Invalid country code", "Too short", "Too long", "Invalid number"];


// initialise plugin
var iti_phoneFixe = intlTelInput(input_phone_fixe, {
    initialCountry: "auto",
    geoIpLookup: function(callback) {
        $.get('https://ipinfo.io', function() {}, "jsonp").always(function(resp) {
            var countryCode = (resp && resp.country) ? resp.country : "";
            callback(countryCode);
        });
    },
    hiddenInput: "full_phone_fixe",
    utilsScript: "/Admin/Bnudle/node_modules/intl-tel-input/build/js/utils.js?1562189064761"
});

var resetPhoneFixe = function() {
    input_phone_fixe.classList.remove("error");
    errorMsgPhoneFixe.innerHTML = "";
    errorMsgPhoneFixe.classList.add("hide");
    //validMsg.classList.add("hide");
};

// on blur: validate
input_phone_fixe.addEventListener('blur', function() {
    resetPhoneFixe();
    if (input_phone_fixe.value.trim()) {
        if (!iti_phoneFixe.isValidNumber()) {
            input_phone_fixe.classList.add("error");
            var errorCode = iti_phoneFixe.getValidationError();
            errorMsgPhoneFixe.innerHTML = errorMap[errorCode];
            errorMsgPhoneFixe.classList.remove("hide");
        }
    }
});
input_phone_fixe.addEventListener("countrychange", function() {
    var currentMask = $(this).attr('placeholder').replace(/[0-9+]/ig, '9');
    $(this).attr('placeholder', currentMask);

    $(input_phone_fixe).inputmask({ mask: currentMask, keepStatic: true });
});
input_phone_fixe.addEventListener('change', resetPhoneFixe);
input_phone_fixe.addEventListener('keyup', resetPhoneFixe);

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
    utilsScript: "/Admin/Bnudle/node_modules/intl-tel-input/build/js/utils.js?1562189064761"
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
input_phone_mobile.addEventListener("countrychange", function() {
    var currentMask = $(this).attr('placeholder').replace(/[0-9+]/ig, '9');
    $(this).attr('placeholder', currentMask);

    $(input_phone_mobile).inputmask({ mask: currentMask, keepStatic: true });
});
input_phone_mobile.addEventListener('change', resetPhoneMobile);
input_phone_mobile.addEventListener('keyup', resetPhoneMobile);