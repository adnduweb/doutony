/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 36);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/metronic/js/pages/custom/fiche/page.outils.fiche.js":
/*!***********************************************************************!*\
  !*** ./resources/metronic/js/pages/custom/fiche/page.outils.fiche.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Class Definition
var KTform = function () {
  var _buttonSpinnerClasses = 'spinner spinner-right spinner-white pr-15';

  var _handleFormUser = function _handleFormUser() {
    var form = KTUtil.getById('kt_apps_fichecompte-personnel_form');
    var formSubmitUrl = KTUtil.attr(form, 'action');
    var formSubmitButton = $('.kt_form_submit_utilisateurs');

    if (!form) {
      return;
    }

    var passwordMeter = document.getElementById('passwordMeter');

    var randomNumber = function randomNumber(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    };

    FormValidation.formValidation(form, {
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
              compare: function compare() {
                return form.querySelector('[name="username"]').value;
              }
            }
          }
        },
        pass_confirm: {
          validators: {
            identical: {
              compare: function compare() {
                return form.querySelector('[name="password"]').value;
              },
              message: _LANG_.password_not_ecal_pass_confirm
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
          onValidated: function onValidated(valid, message, score) {
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
          }
        })
      }
    }).on('core.form.valid', function () {
      $(form).submit();
    }).on('core.form.invalid', function (response) {
      if (response.error == true) {
        $(form).before(response.message);
      }
    });
  }; // Public Functions


  return {
    init: function init() {
      _handleFormUser(); //_handleFormSignup();

    }
  };
}(); // Class Initialization


jQuery(document).ready(function () {
  KTform.init();
});
$(document).on("click", '.generer_mot_passe', function (e) {
  $.post(baseController + "/getPassword", _defineProperty({}, crsftoken, $('meta[name="X-CSRF-TOKEN"]').attr('content')), function (response, status) {
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
$('.show-password').click(function () {
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
    errorMsgPhoneFixe = document.querySelector(".invalid-feedback-phone"); //intlTelInput(input_mobile);
// here, the index maps to the error code returned from getValidationError - see readme

var errorMap = ["Invalid number", "Invalid country code", "Too short", "Too long", "Invalid number"]; // initialise plugin

var iti_phoneFixe = intlTelInput(input_phone, {
  initialCountry: "auto",
  allowDropdown: true,
  geoIpLookup: function geoIpLookup(callback) {
    $.get('https://ipinfo.io', function () {}, "jsonp").always(function (resp) {
      var countryCode = resp && resp.country ? resp.country : "";
      callback(countryCode);
    });
  },
  hiddenInput: "full_phone",
  utilsScript: utils
});

var resetPhoneFixe = function resetPhoneFixe() {
  input_phone.classList.remove("error");
  errorMsgPhoneFixe.innerHTML = "";
  errorMsgPhoneFixe.classList.add("hide"); //validMsg.classList.add("hide");
}; // on blur: validate


input_phone.addEventListener('blur', function () {
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
input_phone.addEventListener("countrychange", function (e, countryData) {
  //var currentMask = e.currentTarget.placeholder;
  var currentMask = $(this).attr('placeholder').replace(/[0-9+]/ig, '9');
  $(this).attr('placeholder', currentMask);
  $(input_phone).inputmask({
    mask: currentMask,
    keepStatic: true
  });
});
input_phone.addEventListener('change', resetPhoneFixe);
input_phone.addEventListener('keyup', resetPhoneFixe);
var input_phone_mobile = document.querySelector("#phone_mobile"),
    errorMsgPhoneMobile = document.querySelector(".invalid-feedback-phone_mobile"); // initialise plugin

var iti_phoneMobile = intlTelInput(input_phone_mobile, {
  initialCountry: "auto",
  geoIpLookup: function geoIpLookup(callback) {
    $.get('https://ipinfo.io', function () {}, "jsonp").always(function (resp) {
      var countryCode = resp && resp.country ? resp.country : "";
      callback(countryCode);
    });
  },
  hiddenInput: "full_phone_mobile",
  utilsScript: utils
});

var resetPhoneMobile = function resetPhoneMobile() {
  input_phone_mobile.classList.remove("error");
  errorMsgPhoneMobile.innerHTML = "";
  errorMsgPhoneMobile.classList.add("hide"); //validMsg.classList.add("hide");
}; // on blur: validate


input_phone_mobile.addEventListener('blur', function () {
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
input_phone_mobile.addEventListener("countrychange", function (e, countryData) {
  //var currentMask = e.currentTarget.placeholder;
  var currentMask = $(this).attr('placeholder').replace(/[0-9+]/ig, '9');
  $(this).attr('placeholder', currentMask);
  $(input_phone_mobile).inputmask({
    mask: currentMask,
    keepStatic: true
  });
});
input_phone_mobile.addEventListener('change', resetPhoneMobile);
input_phone_mobile.addEventListener('keyup', resetPhoneMobile);

/***/ }),

/***/ 36:
/*!*****************************************************************************!*\
  !*** multi ./resources/metronic/js/pages/custom/fiche/page.outils.fiche.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Applications/MAMP/htdocs/spreadci4/public/admin/themes/metronic/resources/metronic/js/pages/custom/fiche/page.outils.fiche.js */"./resources/metronic/js/pages/custom/fiche/page.outils.fiche.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL21ldHJvbmljL2pzL3BhZ2VzL2N1c3RvbS9maWNoZS9wYWdlLm91dGlscy5maWNoZS5qcyJdLCJuYW1lcyI6WyJLVGZvcm0iLCJfYnV0dG9uU3Bpbm5lckNsYXNzZXMiLCJfaGFuZGxlRm9ybVVzZXIiLCJmb3JtIiwiS1RVdGlsIiwiZ2V0QnlJZCIsImZvcm1TdWJtaXRVcmwiLCJhdHRyIiwiZm9ybVN1Ym1pdEJ1dHRvbiIsIiQiLCJwYXNzd29yZE1ldGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJhbmRvbU51bWJlciIsIm1pbiIsIm1heCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsIkZvcm1WYWxpZGF0aW9uIiwiZm9ybVZhbGlkYXRpb24iLCJmaWVsZHMiLCJ1c2VybmFtZSIsInZhbGlkYXRvcnMiLCJub3RFbXB0eSIsIm1lc3NhZ2UiLCJfTEFOR18iLCJjaGFtcHNfaXNfcmVxdWlyZWQiLCJmaXJzdG5hbWUiLCJsYXN0bmFtZSIsImVtYWlsIiwiZW1haWxfaXNfcmVxdWlyZWQiLCJlbWFpbEFkZHJlc3MiLCJ0aGVfdmFsdWVfaXNfbm90X2FkZHJlc3NfdmFsaWQiLCJwYXNzd29yZCIsImRpZmZlcmVudCIsInBhc3N3b3JkX2Nhbm5vdF9iZV90aGVfc2FtZV9hc191c2VybmFtZSIsImNvbXBhcmUiLCJxdWVyeVNlbGVjdG9yIiwidmFsdWUiLCJwYXNzX2NvbmZpcm0iLCJpZGVudGljYWwiLCJwYXNzd29yZF9ub3RfZWNhbF9wYXNzX2NvbmZpcm0iLCJwbHVnaW5zIiwidHJpZ2dlciIsIlRyaWdnZXIiLCJib290c3RyYXAiLCJCb290c3RyYXAiLCJzdWJtaXRCdXR0b24iLCJTdWJtaXRCdXR0b24iLCJwYXNzd29yZFN0cmVuZ3RoIiwiUGFzc3dvcmRTdHJlbmd0aCIsImZpZWxkIiwidGhlX3Bhc3N3b3JkX2lzX3dlYWsiLCJtaW5pbWFsU2NvcmUiLCJvblZhbGlkYXRlZCIsInZhbGlkIiwic2NvcmUiLCJzdHlsZSIsIndpZHRoIiwiYmFja2dyb3VuZENvbG9yIiwib24iLCJzdWJtaXQiLCJyZXNwb25zZSIsImVycm9yIiwiYmVmb3JlIiwiaW5pdCIsImpRdWVyeSIsInJlYWR5IiwiZSIsInBvc3QiLCJiYXNlQ29udHJvbGxlciIsImNyc2Z0b2tlbiIsInN0YXR1cyIsInZhbCIsImh0bWwiLCJzdWNjZXNzIiwiY2xpY2siLCJwcmV2IiwicHJvcCIsImlucHV0X3Bob25lIiwiZXJyb3JNc2dQaG9uZUZpeGUiLCJlcnJvck1hcCIsIml0aV9waG9uZUZpeGUiLCJpbnRsVGVsSW5wdXQiLCJpbml0aWFsQ291bnRyeSIsImFsbG93RHJvcGRvd24iLCJnZW9JcExvb2t1cCIsImNhbGxiYWNrIiwiZ2V0IiwiYWx3YXlzIiwicmVzcCIsImNvdW50cnlDb2RlIiwiY291bnRyeSIsImhpZGRlbklucHV0IiwidXRpbHNTY3JpcHQiLCJ1dGlscyIsInJlc2V0UGhvbmVGaXhlIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiaW5uZXJIVE1MIiwiYWRkIiwiYWRkRXZlbnRMaXN0ZW5lciIsInRyaW0iLCJpc1ZhbGlkTnVtYmVyIiwiZXJyb3JDb2RlIiwiZ2V0VmFsaWRhdGlvbkVycm9yIiwiY291bnRyeURhdGEiLCJjdXJyZW50TWFzayIsInJlcGxhY2UiLCJpbnB1dG1hc2siLCJtYXNrIiwia2VlcFN0YXRpYyIsImlucHV0X3Bob25lX21vYmlsZSIsImVycm9yTXNnUGhvbmVNb2JpbGUiLCJpdGlfcGhvbmVNb2JpbGUiLCJyZXNldFBob25lTW9iaWxlIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMs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QWtCLENBQUMxRSxLQUFuQixDQUF5QmdFLElBQXpCLEVBQUosRUFBcUM7QUFDakMsUUFBSSxDQUFDWSxlQUFlLENBQUNYLGFBQWhCLEVBQUwsRUFBc0M7QUFDbENTLHdCQUFrQixDQUFDZixTQUFuQixDQUE2QkcsR0FBN0IsQ0FBaUMsT0FBakM7QUFDQSxVQUFJSSxTQUFTLEdBQUdVLGVBQWUsQ0FBQ1Qsa0JBQWhCLEVBQWhCO0FBQ0FRLHlCQUFtQixDQUFDZCxTQUFwQixHQUFnQ2xCLFFBQVEsQ0FBQ3VCLFNBQUQsQ0FBeEM7QUFDQVMseUJBQW1CLENBQUNoQixTQUFwQixDQUE4QkMsTUFBOUIsQ0FBcUMsTUFBckM7QUFDSDtBQUNKO0FBQ0osQ0FWRDtBQVdBYyxrQkFBa0IsQ0FBQ1gsZ0JBQW5CLENBQW9DLGVBQXBDLEVBQXFELFVBQVNqQyxDQUFULEVBQVlzQyxXQUFaLEVBQXlCO0FBQzFFO0FBQ0EsTUFBSUMsV0FBVyxHQUFHbkcsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRRixJQUFSLENBQWEsYUFBYixFQUE0QnNHLE9BQTVCLENBQW9DLFVBQXBDLEVBQWdELEdBQWhELENBQWxCO0FBQ0FwRyxHQUFDLENBQUMsSUFBRCxDQUFELENBQVFGLElBQVIsQ0FBYSxhQUFiLEVBQTRCcUcsV0FBNUI7QUFFQW5HLEdBQUMsQ0FBQ3dHLGtCQUFELENBQUQsQ0FBc0JILFNBQXRCLENBQWdDO0FBQUVDLFFBQUksRUFBRUgsV0FBUjtBQUFxQkksY0FBVSxFQUFFO0FBQWpDLEdBQWhDO0FBQ0gsQ0FORDtBQU9BQyxrQkFBa0IsQ0FBQ1gsZ0JBQW5CLENBQW9DLFFBQXBDLEVBQThDYyxnQkFBOUM7QUFDQUgsa0JBQWtCLENBQUNYLGdCQUFuQixDQUFvQyxPQUFwQyxFQUE2Q2MsZ0JBQTdDLEUiLCJmaWxlIjoiL2RldmVsb3BtZW50L2pzL3BhZ2VzL2N1c3RvbS9maWNoZS9wYWdlLm91dGlscy5maWNoZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMzYpO1xuIiwiLy8gQ2xhc3MgRGVmaW5pdGlvblxudmFyIEtUZm9ybSA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBfYnV0dG9uU3Bpbm5lckNsYXNzZXMgPSAnc3Bpbm5lciBzcGlubmVyLXJpZ2h0IHNwaW5uZXItd2hpdGUgcHItMTUnO1xuXG5cbiAgICB2YXIgX2hhbmRsZUZvcm1Vc2VyID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIGZvcm0gPSBLVFV0aWwuZ2V0QnlJZCgna3RfYXBwc19maWNoZWNvbXB0ZS1wZXJzb25uZWxfZm9ybScpO1xuXG4gICAgICAgIHZhciBmb3JtU3VibWl0VXJsID0gS1RVdGlsLmF0dHIoZm9ybSwgJ2FjdGlvbicpO1xuICAgICAgICB2YXIgZm9ybVN1Ym1pdEJ1dHRvbiA9ICQoJy5rdF9mb3JtX3N1Ym1pdF91dGlsaXNhdGV1cnMnKTtcblxuICAgICAgICBpZiAoIWZvcm0pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHBhc3N3b3JkTWV0ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFzc3dvcmRNZXRlcicpO1xuXG4gICAgICAgIGNvbnN0IHJhbmRvbU51bWJlciA9IGZ1bmN0aW9uKG1pbiwgbWF4KSB7XG4gICAgICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpICsgbWluKTtcbiAgICAgICAgfTtcblxuICAgICAgICBGb3JtVmFsaWRhdGlvblxuICAgICAgICAgICAgLmZvcm1WYWxpZGF0aW9uKFxuICAgICAgICAgICAgICAgIGZvcm0sIHtcbiAgICAgICAgICAgICAgICAgICAgZmllbGRzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VybmFtZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRvcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90RW1wdHk6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IF9MQU5HXy5jaGFtcHNfaXNfcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBmaXJzdG5hbWU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0b3JzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdEVtcHR5OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBfTEFOR18uY2hhbXBzX2lzX3JlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgbGFzdG5hbWU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0b3JzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdEVtcHR5OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBfTEFOR18uY2hhbXBzX2lzX3JlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgZW1haWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0b3JzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdEVtcHR5OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBfTEFOR18uZW1haWxfaXNfcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW1haWxBZGRyZXNzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBfTEFOR18udGhlX3ZhbHVlX2lzX25vdF9hZGRyZXNzX3ZhbGlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgcGFzc3dvcmQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0b3JzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpZmZlcmVudDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogX0xBTkdfLnBhc3N3b3JkX2Nhbm5vdF9iZV90aGVfc2FtZV9hc191c2VybmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBhcmU6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZm9ybS5xdWVyeVNlbGVjdG9yKCdbbmFtZT1cInVzZXJuYW1lXCJdJykudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgcGFzc19jb25maXJtOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdG9yczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZGVudGljYWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBhcmU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmb3JtLnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwicGFzc3dvcmRcIl0nKS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBfTEFOR18ucGFzc3dvcmRfbm90X2VjYWxfcGFzc19jb25maXJtLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBwbHVnaW5zOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmlnZ2VyOiBuZXcgRm9ybVZhbGlkYXRpb24ucGx1Z2lucy5UcmlnZ2VyKCksXG4gICAgICAgICAgICAgICAgICAgICAgICBib290c3RyYXA6IG5ldyBGb3JtVmFsaWRhdGlvbi5wbHVnaW5zLkJvb3RzdHJhcCgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3VibWl0QnV0dG9uOiBuZXcgRm9ybVZhbGlkYXRpb24ucGx1Z2lucy5TdWJtaXRCdXR0b24oKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkU3RyZW5ndGg6IG5ldyBGb3JtVmFsaWRhdGlvbi5wbHVnaW5zLlBhc3N3b3JkU3RyZW5ndGgoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkOiAncGFzc3dvcmQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IF9MQU5HXy50aGVfcGFzc3dvcmRfaXNfd2VhayxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW5pbWFsU2NvcmU6IDMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25WYWxpZGF0ZWQ6IGZ1bmN0aW9uKHZhbGlkLCBtZXNzYWdlLCBzY29yZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHNjb3JlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFzc3dvcmRNZXRlci5zdHlsZS53aWR0aCA9IHJhbmRvbU51bWJlcigxLCAyMCkgKyAnJSc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFzc3dvcmRNZXRlci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2ZmNDEzNic7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFzc3dvcmRNZXRlci5zdHlsZS53aWR0aCA9IHJhbmRvbU51bWJlcigyMCwgNDApICsgJyUnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkTWV0ZXIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNmZjQxMzYnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkTWV0ZXIuc3R5bGUud2lkdGggPSByYW5kb21OdW1iZXIoNDAsIDYwKSArICclJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXNzd29yZE1ldGVyLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjZmY0MTM2JztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXNzd29yZE1ldGVyLnN0eWxlLndpZHRoID0gcmFuZG9tTnVtYmVyKDYwLCA4MCkgKyAnJSc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFzc3dvcmRNZXRlci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2ZmYjcwMCc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFzc3dvcmRNZXRlci5zdHlsZS53aWR0aCA9ICcxMDAlJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXNzd29yZE1ldGVyLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjMTlhOTc0JztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApXG4gICAgICAgICAgICAub24oJ2NvcmUuZm9ybS52YWxpZCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICQoZm9ybSkuc3VibWl0KCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLm9uKCdjb3JlLmZvcm0uaW52YWxpZCcsIGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG5cbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuZXJyb3IgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAkKGZvcm0pLmJlZm9yZShyZXNwb25zZS5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBQdWJsaWMgRnVuY3Rpb25zXG4gICAgcmV0dXJuIHtcbiAgICAgICAgaW5pdDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBfaGFuZGxlRm9ybVVzZXIoKTtcbiAgICAgICAgICAgIC8vX2hhbmRsZUZvcm1TaWdudXAoKTtcbiAgICAgICAgfVxuICAgIH07XG59KCk7XG5cbi8vIENsYXNzIEluaXRpYWxpemF0aW9uXG5qUXVlcnkoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xuICAgIEtUZm9ybS5pbml0KCk7XG59KTtcblxuJChkb2N1bWVudCkub24oXCJjbGlja1wiLCAnLmdlbmVyZXJfbW90X3Bhc3NlJywgZnVuY3Rpb24oZSkge1xuICAgICQucG9zdChiYXNlQ29udHJvbGxlciArIFwiL2dldFBhc3N3b3JkXCIsIHtcbiAgICAgICAgICAgIFtjcnNmdG9rZW5dOiAkKCdtZXRhW25hbWU9XCJYLUNTUkYtVE9LRU5cIl0nKS5hdHRyKCdjb250ZW50JyksXG4gICAgICAgIH0sXG4gICAgICAgIGZ1bmN0aW9uKHJlc3BvbnNlLCBzdGF0dXMpIHtcbiAgICAgICAgICAgIC8vY3NyZl9oYXNoID0gcmVzcG9uc2UuY3NyZl90b2tlbjtcblxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmVycm9yID09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgJCgnLnBhc3NfY29uZmlybScpLnZhbCgnJyk7XG4gICAgICAgICAgICAgICAgJCgnLmRhdGFwYXNzd29yZCcpLnZhbCgnJyk7XG4gICAgICAgICAgICAgICAgJCgnI3Bhc3N3b3JkJykuaHRtbCgnJyk7XG4gICAgICAgICAgICAgICAgJCgnLmRhdGFwYXNzd29yZCcpLnZhbChyZXNwb25zZS5zdWNjZXNzLnBhc3N3b3JkKTtcbiAgICAgICAgICAgICAgICAkKCcucGFzc19jb25maXJtJykudmFsKHJlc3BvbnNlLnN1Y2Nlc3MucGFzc3dvcmQpO1xuICAgICAgICAgICAgICAgICQoJyNwYXNzd29yZCcpLmh0bWwocmVzcG9uc2Uuc3VjY2Vzcy5wYXNzd29yZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xufSk7XG5cbiQoJy5zaG93LXBhc3N3b3JkJykuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgaWYgKCQodGhpcykucHJldignaW5wdXQnKS5wcm9wKCd0eXBlJykgPT0gJ3Bhc3N3b3JkJykge1xuICAgICAgICAvL1NpIGMnZXN0IHVuIGlucHV0IHR5cGUgcGFzc3dvcmRcbiAgICAgICAgJCh0aGlzKS5wcmV2KCdpbnB1dCcpLnByb3AoJ3R5cGUnLCAndGV4dCcpO1xuICAgICAgICAkKHRoaXMpLmh0bWwoJzxpIGNsYXNzPVwiZmFyIGZhLWV5ZS1zbGFzaFwiPjwvaT4nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICAvL1Npbm9uXG4gICAgICAgICQodGhpcykucHJldignaW5wdXQnKS5wcm9wKCd0eXBlJywgJ3Bhc3N3b3JkJyk7XG4gICAgICAgICQodGhpcykuaHRtbCgnPGkgY2xhc3M9XCJmYXIgZmEtZXllXCI+PC9pPicpO1xuICAgIH1cbn0pO1xuXG52YXIgaW5wdXRfcGhvbmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Bob25lXCIpLFxuICAgIGVycm9yTXNnUGhvbmVGaXhlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbnZhbGlkLWZlZWRiYWNrLXBob25lXCIpO1xuLy9pbnRsVGVsSW5wdXQoaW5wdXRfbW9iaWxlKTtcblxuLy8gaGVyZSwgdGhlIGluZGV4IG1hcHMgdG8gdGhlIGVycm9yIGNvZGUgcmV0dXJuZWQgZnJvbSBnZXRWYWxpZGF0aW9uRXJyb3IgLSBzZWUgcmVhZG1lXG52YXIgZXJyb3JNYXAgPSBbXCJJbnZhbGlkIG51bWJlclwiLCBcIkludmFsaWQgY291bnRyeSBjb2RlXCIsIFwiVG9vIHNob3J0XCIsIFwiVG9vIGxvbmdcIiwgXCJJbnZhbGlkIG51bWJlclwiXTtcblxuLy8gaW5pdGlhbGlzZSBwbHVnaW5cbnZhciBpdGlfcGhvbmVGaXhlID0gaW50bFRlbElucHV0KGlucHV0X3Bob25lLCB7XG4gICAgaW5pdGlhbENvdW50cnk6IFwiYXV0b1wiLFxuICAgIGFsbG93RHJvcGRvd246IHRydWUsXG4gICAgZ2VvSXBMb29rdXA6IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gICAgICAgICQuZ2V0KCdodHRwczovL2lwaW5mby5pbycsIGZ1bmN0aW9uKCkge30sIFwianNvbnBcIikuYWx3YXlzKGZ1bmN0aW9uKHJlc3ApIHtcbiAgICAgICAgICAgIHZhciBjb3VudHJ5Q29kZSA9IChyZXNwICYmIHJlc3AuY291bnRyeSkgPyByZXNwLmNvdW50cnkgOiBcIlwiO1xuICAgICAgICAgICAgY2FsbGJhY2soY291bnRyeUNvZGUpO1xuICAgICAgICB9KTtcbiAgICB9LFxuICAgIGhpZGRlbklucHV0OiBcImZ1bGxfcGhvbmVcIixcbiAgICB1dGlsc1NjcmlwdDogdXRpbHNcbn0pO1xuXG52YXIgcmVzZXRQaG9uZUZpeGUgPSBmdW5jdGlvbigpIHtcbiAgICBpbnB1dF9waG9uZS5jbGFzc0xpc3QucmVtb3ZlKFwiZXJyb3JcIik7XG4gICAgZXJyb3JNc2dQaG9uZUZpeGUuaW5uZXJIVE1MID0gXCJcIjtcbiAgICBlcnJvck1zZ1Bob25lRml4ZS5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcbiAgICAvL3ZhbGlkTXNnLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xufTtcblxuLy8gb24gYmx1cjogdmFsaWRhdGVcbmlucHV0X3Bob25lLmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCBmdW5jdGlvbigpIHtcbiAgICByZXNldFBob25lRml4ZSgpO1xuICAgIGlmIChpbnB1dF9waG9uZS52YWx1ZS50cmltKCkpIHtcbiAgICAgICAgaWYgKCFpdGlfcGhvbmVGaXhlLmlzVmFsaWROdW1iZXIoKSkge1xuICAgICAgICAgICAgaW5wdXRfcGhvbmUuY2xhc3NMaXN0LmFkZChcImVycm9yXCIpO1xuICAgICAgICAgICAgdmFyIGVycm9yQ29kZSA9IGl0aV9waG9uZUZpeGUuZ2V0VmFsaWRhdGlvbkVycm9yKCk7XG4gICAgICAgICAgICBlcnJvck1zZ1Bob25lRml4ZS5pbm5lckhUTUwgPSBlcnJvck1hcFtlcnJvckNvZGVdO1xuICAgICAgICAgICAgZXJyb3JNc2dQaG9uZUZpeGUuY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XG4gICAgICAgIH1cbiAgICB9XG59KTtcbmlucHV0X3Bob25lLmFkZEV2ZW50TGlzdGVuZXIoXCJjb3VudHJ5Y2hhbmdlXCIsIGZ1bmN0aW9uKGUsIGNvdW50cnlEYXRhKSB7XG4gICAgLy92YXIgY3VycmVudE1hc2sgPSBlLmN1cnJlbnRUYXJnZXQucGxhY2Vob2xkZXI7XG4gICAgdmFyIGN1cnJlbnRNYXNrID0gJCh0aGlzKS5hdHRyKCdwbGFjZWhvbGRlcicpLnJlcGxhY2UoL1swLTkrXS9pZywgJzknKTtcbiAgICAkKHRoaXMpLmF0dHIoJ3BsYWNlaG9sZGVyJywgY3VycmVudE1hc2spO1xuXG4gICAgJChpbnB1dF9waG9uZSkuaW5wdXRtYXNrKHsgbWFzazogY3VycmVudE1hc2ssIGtlZXBTdGF0aWM6IHRydWUgfSk7XG59KTtcbmlucHV0X3Bob25lLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHJlc2V0UGhvbmVGaXhlKTtcbmlucHV0X3Bob25lLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgcmVzZXRQaG9uZUZpeGUpO1xuXG52YXIgaW5wdXRfcGhvbmVfbW9iaWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwaG9uZV9tb2JpbGVcIiksXG4gICAgZXJyb3JNc2dQaG9uZU1vYmlsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW52YWxpZC1mZWVkYmFjay1waG9uZV9tb2JpbGVcIik7XG5cblxuXG5cbi8vIGluaXRpYWxpc2UgcGx1Z2luXG52YXIgaXRpX3Bob25lTW9iaWxlID0gaW50bFRlbElucHV0KGlucHV0X3Bob25lX21vYmlsZSwge1xuICAgIGluaXRpYWxDb3VudHJ5OiBcImF1dG9cIixcbiAgICBnZW9JcExvb2t1cDogZnVuY3Rpb24oY2FsbGJhY2spIHtcbiAgICAgICAgJC5nZXQoJ2h0dHBzOi8vaXBpbmZvLmlvJywgZnVuY3Rpb24oKSB7fSwgXCJqc29ucFwiKS5hbHdheXMoZnVuY3Rpb24ocmVzcCkge1xuICAgICAgICAgICAgdmFyIGNvdW50cnlDb2RlID0gKHJlc3AgJiYgcmVzcC5jb3VudHJ5KSA/IHJlc3AuY291bnRyeSA6IFwiXCI7XG4gICAgICAgICAgICBjYWxsYmFjayhjb3VudHJ5Q29kZSk7XG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgaGlkZGVuSW5wdXQ6IFwiZnVsbF9waG9uZV9tb2JpbGVcIixcbiAgICB1dGlsc1NjcmlwdDogdXRpbHNcbn0pO1xuXG52YXIgcmVzZXRQaG9uZU1vYmlsZSA9IGZ1bmN0aW9uKCkge1xuICAgIGlucHV0X3Bob25lX21vYmlsZS5jbGFzc0xpc3QucmVtb3ZlKFwiZXJyb3JcIik7XG4gICAgZXJyb3JNc2dQaG9uZU1vYmlsZS5pbm5lckhUTUwgPSBcIlwiO1xuICAgIGVycm9yTXNnUGhvbmVNb2JpbGUuY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XG4gICAgLy92YWxpZE1zZy5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcbn07XG5cbi8vIG9uIGJsdXI6IHZhbGlkYXRlXG5pbnB1dF9waG9uZV9tb2JpbGUuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIGZ1bmN0aW9uKCkge1xuICAgIHJlc2V0UGhvbmVNb2JpbGUoKTtcbiAgICBpZiAoaW5wdXRfcGhvbmVfbW9iaWxlLnZhbHVlLnRyaW0oKSkge1xuICAgICAgICBpZiAoIWl0aV9waG9uZU1vYmlsZS5pc1ZhbGlkTnVtYmVyKCkpIHtcbiAgICAgICAgICAgIGlucHV0X3Bob25lX21vYmlsZS5jbGFzc0xpc3QuYWRkKFwiZXJyb3JcIik7XG4gICAgICAgICAgICB2YXIgZXJyb3JDb2RlID0gaXRpX3Bob25lTW9iaWxlLmdldFZhbGlkYXRpb25FcnJvcigpO1xuICAgICAgICAgICAgZXJyb3JNc2dQaG9uZU1vYmlsZS5pbm5lckhUTUwgPSBlcnJvck1hcFtlcnJvckNvZGVdO1xuICAgICAgICAgICAgZXJyb3JNc2dQaG9uZU1vYmlsZS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcbiAgICAgICAgfVxuICAgIH1cbn0pO1xuaW5wdXRfcGhvbmVfbW9iaWxlLmFkZEV2ZW50TGlzdGVuZXIoXCJjb3VudHJ5Y2hhbmdlXCIsIGZ1bmN0aW9uKGUsIGNvdW50cnlEYXRhKSB7XG4gICAgLy92YXIgY3VycmVudE1hc2sgPSBlLmN1cnJlbnRUYXJnZXQucGxhY2Vob2xkZXI7XG4gICAgdmFyIGN1cnJlbnRNYXNrID0gJCh0aGlzKS5hdHRyKCdwbGFjZWhvbGRlcicpLnJlcGxhY2UoL1swLTkrXS9pZywgJzknKTtcbiAgICAkKHRoaXMpLmF0dHIoJ3BsYWNlaG9sZGVyJywgY3VycmVudE1hc2spO1xuXG4gICAgJChpbnB1dF9waG9uZV9tb2JpbGUpLmlucHV0bWFzayh7IG1hc2s6IGN1cnJlbnRNYXNrLCBrZWVwU3RhdGljOiB0cnVlIH0pO1xufSk7XG5pbnB1dF9waG9uZV9tb2JpbGUuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgcmVzZXRQaG9uZU1vYmlsZSk7XG5pbnB1dF9waG9uZV9tb2JpbGUuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCByZXNldFBob25lTW9iaWxlKTsiXSwic291cmNlUm9vdCI6IiJ9