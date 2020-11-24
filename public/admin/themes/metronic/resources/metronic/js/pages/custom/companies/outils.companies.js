var form = document.querySelector("#kt_apps_companies_forms");
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