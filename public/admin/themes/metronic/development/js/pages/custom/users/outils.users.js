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
/******/ 	return __webpack_require__(__webpack_require__.s = 53);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/metronic/js/pages/custom/users/outils.users.js":
/*!******************************************************************!*\
  !*** ./resources/metronic/js/pages/custom/users/outils.users.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Class Definition
var KTform = function () {
  var _buttonSpinnerClasses = 'spinner spinner-right spinner-white pr-15';

  var _handleFormUser = function _handleFormUser() {
    if ($('#kt_apps_user_edit_user_form').length) {
      var form = KTUtil.getById('kt_apps_user_edit_user_form');
    } else {
      var form = KTUtil.getById('kt_apps_user_create_user_form');
    }

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
        company_id: {
          validators: {
            notEmpty: {
              message: _LANG_.champs_is_required
            }
          }
        },
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
        //https://github.com/formvalidation/formvalidation.io/blob/master/examples/validating-international-phone-numbers/index.html
        phoneNumber: {
          validators: {
            callback: {
              message: 'The phone number is not valid',
              callback: function callback(value, validator, $field) {
                return value === '' || intlTelInput('isValidNumber');
              }
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

function createUsername() {
  var fname = $('#kt_apps_user_create_user_form input[name=firstname]').val().substring(0, 1).toLowerCase();
  var lname = $('#kt_apps_user_create_user_form input[name=lastname]').val().toLowerCase();
  var username = fname + lname + Math.floor(Math.random() * (10000 + 1) + 1000);
  $('#kt_apps_user_create_user_form input[name=username]').val(username);
}

$('#kt_apps_user_create_user_form input[name=firstname]').on('keyup', createUsername);
$('#kt_apps_user_create_user_form input[name=lastname]').on('keyup', createUsername);
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
$(document).on("click", '.deleteSession', function (e) {
  var _$$post2;

  var session_en_cours = $(this).data('session_en_cours');
  var id = $(this).attr('id');
  $.post(baseController + "/deleteSession", (_$$post2 = {}, _defineProperty(_$$post2, crsftoken, $('meta[name="X-CSRF-TOKEN"]').attr('content')), _defineProperty(_$$post2, "value", session_en_cours), _$$post2), function (response, status) {
    csrf_hash = response.csrf_token;
    $("#" + id).css('display', 'none'); // console.log(id);

    if (status == 'success') {
      $.notify({
        title: _LANG_.deleted + "!",
        message: response.message
      }, {
        type: response.type,
        placement: {
          from: 'bottom',
          align: 'center'
        }
      });
    }
  });
});

/***/ }),

/***/ 53:
/*!************************************************************************!*\
  !*** multi ./resources/metronic/js/pages/custom/users/outils.users.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Applications/MAMP/htdocs/spreadci4/public/admin/themes/metronic/resources/metronic/js/pages/custom/users/outils.users.js */"./resources/metronic/js/pages/custom/users/outils.users.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL21ldHJvbmljL2pzL3BhZ2VzL2N1c3RvbS91c2Vycy9vdXRpbHMudXNlcnMuanMiXSwibmFtZXMiOlsiS1Rmb3JtIiwiX2J1dHRvblNwaW5uZXJDbGFzc2VzIiwiX2hhbmRsZUZvcm1Vc2VyIiwiJCIsImxlbmd0aCIsImZvcm0iLCJLVFV0aWwiLCJnZXRCeUlkIiwiZm9ybVN1Ym1pdFVybCIsImF0dHIiLCJmb3JtU3VibWl0QnV0dG9uIiwicGFzc3dvcmRNZXRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyYW5kb21OdW1iZXIiLCJtaW4iLCJtYXgiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJGb3JtVmFsaWRhdGlvbiIsImZvcm1WYWxpZGF0aW9uIiwiZmllbGRzIiwiY29tcGFueV9pZCIsInZhbGlkYXRvcnMiLCJub3RFbXB0eSIsIm1lc3NhZ2UiLCJfTEFOR18iLCJjaGFtcHNfaXNfcmVxdWlyZWQiLCJ1c2VybmFtZSIsImZpcnN0bmFtZSIsImxhc3RuYW1lIiwiZW1haWwiLCJlbWFpbF9pc19yZXF1aXJlZCIsImVtYWlsQWRkcmVzcyIsInRoZV92YWx1ZV9pc19ub3RfYWRkcmVzc192YWxpZCIsInBob25lTnVtYmVyIiwiY2FsbGJhY2siLCJ2YWx1ZSIsInZhbGlkYXRvciIsIiRmaWVsZCIsImludGxUZWxJbnB1dCIsInBhc3N3b3JkIiwiZGlmZmVyZW50IiwicGFzc3dvcmRfY2Fubm90X2JlX3RoZV9zYW1lX2FzX3VzZXJuYW1lIiwiY29tcGFyZSIsInF1ZXJ5U2VsZWN0b3IiLCJwYXNzX2NvbmZpcm0iLCJpZGVudGljYWwiLCJwYXNzd29yZF9ub3RfZWNhbF9wYXNzX2NvbmZpcm0iLCJwbHVnaW5zIiwidHJpZ2dlciIsIlRyaWdnZXIiLCJib290c3RyYXAiLCJCb290c3RyYXAiLCJzdWJtaXRCdXR0b24iLCJTdWJtaXRCdXR0b24iLCJwYXNzd29yZFN0cmVuZ3RoIiwiUGFzc3dvcmRTdHJlbmd0aCIsImZpZWxkIiwidGhlX3Bhc3N3b3JkX2lzX3dlYWsiLCJtaW5pbWFsU2NvcmUiLCJvblZhbGlkYXRlZCIsInZhbGlkIiwic2NvcmUiLCJzdHlsZSIsIndpZHRoIiwiYmFja2dyb3VuZENvbG9yIiwib24iLCJzdWJtaXQiLCJyZXNwb25zZSIsImVycm9yIiwiYmVmb3JlIiwiaW5pdCIsImpRdWVyeSIsInJlYWR5IiwiZSIsInBvc3QiLCJiYXNlQ29udHJvbGxlciIsImNyc2Z0b2tlbiIsInN0YXR1cyIsInZhbCIsImh0bWwiLCJzdWNjZXNzIiwiY3JlYXRlVXNlcm5hbWUiLCJmbmFtZSIsInN1YnN0cmluZyIsInRvTG93ZXJDYXNlIiwibG5hbWUiLCJjbGljayIsInByZXYiLCJwcm9wIiwic2Vzc2lvbl9lbl9jb3VycyIsImRhdGEiLCJpZCIsImNzcmZfaGFzaCIsImNzcmZfdG9rZW4iLCJjc3MiLCJub3RpZnkiLCJ0aXRsZSIsImRlbGV0ZWQiLCJ0eXBlIiwicGxhY2VtZW50IiwiZnJvbSIsImFsaWduIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2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bnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA1Myk7XG4iLCIvLyBDbGFzcyBEZWZpbml0aW9uXHJcbnZhciBLVGZvcm0gPSBmdW5jdGlvbigpIHtcclxuICAgIHZhciBfYnV0dG9uU3Bpbm5lckNsYXNzZXMgPSAnc3Bpbm5lciBzcGlubmVyLXJpZ2h0IHNwaW5uZXItd2hpdGUgcHItMTUnO1xyXG5cclxuXHJcbiAgICB2YXIgX2hhbmRsZUZvcm1Vc2VyID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgaWYgKCQoJyNrdF9hcHBzX3VzZXJfZWRpdF91c2VyX2Zvcm0nKS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdmFyIGZvcm0gPSBLVFV0aWwuZ2V0QnlJZCgna3RfYXBwc191c2VyX2VkaXRfdXNlcl9mb3JtJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdmFyIGZvcm0gPSBLVFV0aWwuZ2V0QnlJZCgna3RfYXBwc191c2VyX2NyZWF0ZV91c2VyX2Zvcm0nKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBmb3JtU3VibWl0VXJsID0gS1RVdGlsLmF0dHIoZm9ybSwgJ2FjdGlvbicpO1xyXG4gICAgICAgIHZhciBmb3JtU3VibWl0QnV0dG9uID0gJCgnLmt0X2Zvcm1fc3VibWl0X3V0aWxpc2F0ZXVycycpO1xyXG5cclxuICAgICAgICBpZiAoIWZvcm0pIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgcGFzc3dvcmRNZXRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYXNzd29yZE1ldGVyJyk7XHJcblxyXG4gICAgICAgIGNvbnN0IHJhbmRvbU51bWJlciA9IGZ1bmN0aW9uKG1pbiwgbWF4KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkgKyBtaW4pO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIEZvcm1WYWxpZGF0aW9uXHJcbiAgICAgICAgICAgIC5mb3JtVmFsaWRhdGlvbihcclxuICAgICAgICAgICAgICAgIGZvcm0sIHtcclxuICAgICAgICAgICAgICAgICAgICBmaWVsZHM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29tcGFueV9pZDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdG9yczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdEVtcHR5OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IF9MQU5HXy5jaGFtcHNfaXNfcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJuYW1lOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0b3JzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90RW1wdHk6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogX0xBTkdfLmNoYW1wc19pc19yZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmlyc3RuYW1lOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0b3JzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90RW1wdHk6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogX0xBTkdfLmNoYW1wc19pc19yZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFzdG5hbWU6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRvcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3RFbXB0eToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBfTEFOR18uY2hhbXBzX2lzX3JlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbWFpbDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdG9yczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdEVtcHR5OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IF9MQU5HXy5lbWFpbF9pc19yZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW1haWxBZGRyZXNzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IF9MQU5HXy50aGVfdmFsdWVfaXNfbm90X2FkZHJlc3NfdmFsaWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vaHR0cHM6Ly9naXRodWIuY29tL2Zvcm12YWxpZGF0aW9uL2Zvcm12YWxpZGF0aW9uLmlvL2Jsb2IvbWFzdGVyL2V4YW1wbGVzL3ZhbGlkYXRpbmctaW50ZXJuYXRpb25hbC1waG9uZS1udW1iZXJzL2luZGV4Lmh0bWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGhvbmVOdW1iZXI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRvcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnVGhlIHBob25lIG51bWJlciBpcyBub3QgdmFsaWQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24odmFsdWUsIHZhbGlkYXRvciwgJGZpZWxkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWUgPT09ICcnIHx8IGludGxUZWxJbnB1dCgnaXNWYWxpZE51bWJlcicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFzc3dvcmQ6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRvcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaWZmZXJlbnQ6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogX0xBTkdfLnBhc3N3b3JkX2Nhbm5vdF9iZV90aGVfc2FtZV9hc191c2VybmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcGFyZTogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZvcm0ucXVlcnlTZWxlY3RvcignW25hbWU9XCJ1c2VybmFtZVwiXScpLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXNzX2NvbmZpcm06IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRvcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZGVudGljYWw6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcGFyZTogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZm9ybS5xdWVyeVNlbGVjdG9yKCdbbmFtZT1cInBhc3N3b3JkXCJdJykudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IF9MQU5HXy5wYXNzd29yZF9ub3RfZWNhbF9wYXNzX2NvbmZpcm0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBwbHVnaW5zOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyaWdnZXI6IG5ldyBGb3JtVmFsaWRhdGlvbi5wbHVnaW5zLlRyaWdnZXIoKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9vdHN0cmFwOiBuZXcgRm9ybVZhbGlkYXRpb24ucGx1Z2lucy5Cb290c3RyYXAoKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3VibWl0QnV0dG9uOiBuZXcgRm9ybVZhbGlkYXRpb24ucGx1Z2lucy5TdWJtaXRCdXR0b24oKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFzc3dvcmRTdHJlbmd0aDogbmV3IEZvcm1WYWxpZGF0aW9uLnBsdWdpbnMuUGFzc3dvcmRTdHJlbmd0aCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZDogJ3Bhc3N3b3JkJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IF9MQU5HXy50aGVfcGFzc3dvcmRfaXNfd2VhayxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbmltYWxTY29yZTogMyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uVmFsaWRhdGVkOiBmdW5jdGlvbih2YWxpZCwgbWVzc2FnZSwgc2NvcmUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHNjb3JlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkTWV0ZXIuc3R5bGUud2lkdGggPSByYW5kb21OdW1iZXIoMSwgMjApICsgJyUnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFzc3dvcmRNZXRlci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2ZmNDEzNic7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFzc3dvcmRNZXRlci5zdHlsZS53aWR0aCA9IHJhbmRvbU51bWJlcigyMCwgNDApICsgJyUnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFzc3dvcmRNZXRlci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2ZmNDEzNic7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFzc3dvcmRNZXRlci5zdHlsZS53aWR0aCA9IHJhbmRvbU51bWJlcig0MCwgNjApICsgJyUnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFzc3dvcmRNZXRlci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2ZmNDEzNic7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFzc3dvcmRNZXRlci5zdHlsZS53aWR0aCA9IHJhbmRvbU51bWJlcig2MCwgODApICsgJyUnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFzc3dvcmRNZXRlci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2ZmYjcwMCc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFzc3dvcmRNZXRlci5zdHlsZS53aWR0aCA9ICcxMDAlJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkTWV0ZXIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyMxOWE5NzQnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgLm9uKCdjb3JlLmZvcm0udmFsaWQnLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICQoZm9ybSkuc3VibWl0KCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5vbignY29yZS5mb3JtLmludmFsaWQnLCBmdW5jdGlvbihyZXNwb25zZSkge1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5lcnJvciA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJChmb3JtKS5iZWZvcmUocmVzcG9uc2UubWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFB1YmxpYyBGdW5jdGlvbnNcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgaW5pdDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIF9oYW5kbGVGb3JtVXNlcigpO1xyXG4gICAgICAgICAgICAvL19oYW5kbGVGb3JtU2lnbnVwKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufSgpO1xyXG5cclxuLy8gQ2xhc3MgSW5pdGlhbGl6YXRpb25cclxualF1ZXJ5KGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcclxuICAgIEtUZm9ybS5pbml0KCk7XHJcbn0pO1xyXG5cclxuJChkb2N1bWVudCkub24oXCJjbGlja1wiLCAnLmdlbmVyZXJfbW90X3Bhc3NlJywgZnVuY3Rpb24oZSkge1xyXG4gICAgJC5wb3N0KGJhc2VDb250cm9sbGVyICsgXCIvZ2V0UGFzc3dvcmRcIiwge1xyXG4gICAgICAgICAgICBbY3JzZnRva2VuXTogJCgnbWV0YVtuYW1lPVwiWC1DU1JGLVRPS0VOXCJdJykuYXR0cignY29udGVudCcpLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZnVuY3Rpb24ocmVzcG9uc2UsIHN0YXR1cykge1xyXG4gICAgICAgICAgICAvL2NzcmZfaGFzaCA9IHJlc3BvbnNlLmNzcmZfdG9rZW47XHJcblxyXG4gICAgICAgICAgICBpZiAocmVzcG9uc2UuZXJyb3IgPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgICQoJy5wYXNzX2NvbmZpcm0nKS52YWwoJycpO1xyXG4gICAgICAgICAgICAgICAgJCgnLmRhdGFwYXNzd29yZCcpLnZhbCgnJyk7XHJcbiAgICAgICAgICAgICAgICAkKCcjcGFzc3dvcmQnKS5odG1sKCcnKTtcclxuICAgICAgICAgICAgICAgICQoJy5kYXRhcGFzc3dvcmQnKS52YWwocmVzcG9uc2Uuc3VjY2Vzcy5wYXNzd29yZCk7XHJcbiAgICAgICAgICAgICAgICAkKCcucGFzc19jb25maXJtJykudmFsKHJlc3BvbnNlLnN1Y2Nlc3MucGFzc3dvcmQpO1xyXG4gICAgICAgICAgICAgICAgJCgnI3Bhc3N3b3JkJykuaHRtbChyZXNwb25zZS5zdWNjZXNzLnBhc3N3b3JkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG59KTtcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVVzZXJuYW1lKCkge1xyXG4gICAgdmFyIGZuYW1lID0gJCgnI2t0X2FwcHNfdXNlcl9jcmVhdGVfdXNlcl9mb3JtIGlucHV0W25hbWU9Zmlyc3RuYW1lXScpLnZhbCgpLnN1YnN0cmluZygwLCAxKS50b0xvd2VyQ2FzZSgpO1xyXG5cclxuICAgIHZhciBsbmFtZSA9ICQoJyNrdF9hcHBzX3VzZXJfY3JlYXRlX3VzZXJfZm9ybSBpbnB1dFtuYW1lPWxhc3RuYW1lXScpLnZhbCgpLnRvTG93ZXJDYXNlKCk7XHJcbiAgICB2YXIgdXNlcm5hbWUgPSBmbmFtZSArIGxuYW1lICsgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDEwMDAwICsgMSkgKyAxMDAwKTtcclxuICAgICQoJyNrdF9hcHBzX3VzZXJfY3JlYXRlX3VzZXJfZm9ybSBpbnB1dFtuYW1lPXVzZXJuYW1lXScpLnZhbCh1c2VybmFtZSk7XHJcbn1cclxuXHJcbiQoJyNrdF9hcHBzX3VzZXJfY3JlYXRlX3VzZXJfZm9ybSBpbnB1dFtuYW1lPWZpcnN0bmFtZV0nKS5vbigna2V5dXAnLCBjcmVhdGVVc2VybmFtZSk7XHJcbiQoJyNrdF9hcHBzX3VzZXJfY3JlYXRlX3VzZXJfZm9ybSBpbnB1dFtuYW1lPWxhc3RuYW1lXScpLm9uKCdrZXl1cCcsIGNyZWF0ZVVzZXJuYW1lKTtcclxuXHJcblxyXG4kKCcuc2hvdy1wYXNzd29yZCcpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgaWYgKCQodGhpcykucHJldignaW5wdXQnKS5wcm9wKCd0eXBlJykgPT0gJ3Bhc3N3b3JkJykge1xyXG4gICAgICAgIC8vU2kgYydlc3QgdW4gaW5wdXQgdHlwZSBwYXNzd29yZFxyXG4gICAgICAgICQodGhpcykucHJldignaW5wdXQnKS5wcm9wKCd0eXBlJywgJ3RleHQnKTtcclxuICAgICAgICAkKHRoaXMpLmh0bWwoJzxpIGNsYXNzPVwiZmFyIGZhLWV5ZS1zbGFzaFwiPjwvaT4nKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy9TaW5vblxyXG4gICAgICAgICQodGhpcykucHJldignaW5wdXQnKS5wcm9wKCd0eXBlJywgJ3Bhc3N3b3JkJyk7XHJcbiAgICAgICAgJCh0aGlzKS5odG1sKCc8aSBjbGFzcz1cImZhciBmYS1leWVcIj48L2k+Jyk7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuXHJcblxyXG5cclxuJChkb2N1bWVudCkub24oXCJjbGlja1wiLCAnLmRlbGV0ZVNlc3Npb24nLCBmdW5jdGlvbihlKSB7XHJcbiAgICB2YXIgc2Vzc2lvbl9lbl9jb3VycyA9ICQodGhpcykuZGF0YSgnc2Vzc2lvbl9lbl9jb3VycycpO1xyXG4gICAgdmFyIGlkID0gJCh0aGlzKS5hdHRyKCdpZCcpXHJcbiAgICAkLnBvc3QoYmFzZUNvbnRyb2xsZXIgKyBcIi9kZWxldGVTZXNzaW9uXCIsIHtcclxuICAgICAgICAgICAgW2Nyc2Z0b2tlbl06ICQoJ21ldGFbbmFtZT1cIlgtQ1NSRi1UT0tFTlwiXScpLmF0dHIoJ2NvbnRlbnQnKSxcclxuICAgICAgICAgICAgdmFsdWU6IHNlc3Npb25fZW5fY291cnMsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBmdW5jdGlvbihyZXNwb25zZSwgc3RhdHVzKSB7XHJcbiAgICAgICAgICAgIGNzcmZfaGFzaCA9IHJlc3BvbnNlLmNzcmZfdG9rZW47XHJcbiAgICAgICAgICAgICQoXCIjXCIgKyBpZCkuY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coaWQpO1xyXG4gICAgICAgICAgICBpZiAoc3RhdHVzID09ICdzdWNjZXNzJykge1xyXG4gICAgICAgICAgICAgICAgJC5ub3RpZnkoe1xyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBfTEFOR18uZGVsZXRlZCArIFwiIVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IHJlc3BvbnNlLm1lc3NhZ2VcclxuICAgICAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiByZXNwb25zZS50eXBlLFxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlbWVudDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmcm9tOiAnYm90dG9tJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ246ICdjZW50ZXInXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbn0pOyJdLCJzb3VyY2VSb290IjoiIn0=