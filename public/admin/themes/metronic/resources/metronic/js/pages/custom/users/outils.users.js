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

function createUsername() {
    var fname = $('#kt_apps_user_create_user_form input[name=firstname]').val().substring(0, 1).toLowerCase();

    var lname = $('#kt_apps_user_create_user_form input[name=lastname]').val().toLowerCase();
    var username = fname + lname + Math.floor(Math.random() * (10000 + 1) + 1000);
    $('#kt_apps_user_create_user_form input[name=username]').val(username);
}

$('#kt_apps_user_create_user_form input[name=firstname]').on('keyup', createUsername);
$('#kt_apps_user_create_user_form input[name=lastname]').on('keyup', createUsername);


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



$(document).on("click", '.deleteSession', function(e) {
    var session_en_cours = $(this).data('session_en_cours');
    var id = $(this).attr('id')
    $.post(baseController + "/deleteSession", {
            [crsftoken]: $('meta[name="X-CSRF-TOKEN"]').attr('content'),
            value: session_en_cours,
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