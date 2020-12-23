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
/******/ 	return __webpack_require__(__webpack_require__.s = 52);
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

/***/ 52:
/*!************************************************************************!*\
  !*** multi ./resources/metronic/js/pages/custom/users/outils.users.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Applications/MAMP/htdocs/spreadci4/public/admin/themes/metronic/resources/metronic/js/pages/custom/users/outils.users.js */"./resources/metronic/js/pages/custom/users/outils.users.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL21ldHJvbmljL2pzL3BhZ2VzL2N1c3RvbS91c2Vycy9vdXRpbHMudXNlcnMuanMiXSwibmFtZXMiOlsiS1Rmb3JtIiwiX2J1dHRvblNwaW5uZXJDbGFzc2VzIiwiX2hhbmRsZUZvcm1Vc2VyIiwiJCIsImxlbmd0aCIsImZvcm0iLCJLVFV0aWwiLCJnZXRCeUlkIiwiZm9ybVN1Ym1pdFVybCIsImF0dHIiLCJmb3JtU3VibWl0QnV0dG9uIiwicGFzc3dvcmRNZXRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyYW5kb21OdW1iZXIiLCJtaW4iLCJtYXgiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJGb3JtVmFsaWRhdGlvbiIsImZvcm1WYWxpZGF0aW9uIiwiZmllbGRzIiwiY29tcGFueV9pZCIsInZhbGlkYXRvcnMiLCJub3RFbXB0eSIsIm1lc3NhZ2UiLCJfTEFOR18iLCJjaGFtcHNfaXNfcmVxdWlyZWQiLCJ1c2VybmFtZSIsImZpcnN0bmFtZSIsImxhc3RuYW1lIiwiZW1haWwiLCJlbWFpbF9pc19yZXF1aXJlZCIsImVtYWlsQWRkcmVzcyIsInRoZV92YWx1ZV9pc19ub3RfYWRkcmVzc192YWxpZCIsInBhc3N3b3JkIiwiZGlmZmVyZW50IiwicGFzc3dvcmRfY2Fubm90X2JlX3RoZV9zYW1lX2FzX3VzZXJuYW1lIiwiY29tcGFyZSIsInF1ZXJ5U2VsZWN0b3IiLCJ2YWx1ZSIsInBhc3NfY29uZmlybSIsImlkZW50aWNhbCIsInBhc3N3b3JkX25vdF9lY2FsX3Bhc3NfY29uZmlybSIsInBsdWdpbnMiLCJ0cmlnZ2VyIiwiVHJpZ2dlciIsImJvb3RzdHJhcCIsIkJvb3RzdHJhcCIsInN1Ym1pdEJ1dHRvbiIsIlN1Ym1pdEJ1dHRvbiIsInBhc3N3b3JkU3RyZW5ndGgiLCJQYXNzd29yZFN0cmVuZ3RoIiwiZmllbGQiLCJ0aGVfcGFzc3dvcmRfaXNfd2VhayIsIm1pbmltYWxTY29yZSIsIm9uVmFsaWRhdGVkIiwidmFsaWQiLCJzY29yZSIsInN0eWxlIiwid2lkdGgiLCJiYWNrZ3JvdW5kQ29sb3IiLCJvbiIsInN1Ym1pdCIsInJlc3BvbnNlIiwiZXJyb3IiLCJiZWZvcmUiLCJpbml0IiwialF1ZXJ5IiwicmVhZHkiLCJlIiwicG9zdCIsImJhc2VDb250cm9sbGVyIiwiY3JzZnRva2VuIiwic3RhdHVzIiwidmFsIiwiaHRtbCIsInN1Y2Nlc3MiLCJjcmVhdGVVc2VybmFtZSIsImZuYW1lIiwic3Vic3RyaW5nIiwidG9Mb3dlckNhc2UiLCJsbmFtZSIsImNsaWNrIiwicHJldiIsInByb3AiLCJzZXNzaW9uX2VuX2NvdXJzIiwiZGF0YSIsImlkIiwiY3NyZl9oYXNoIiwiY3NyZl90b2tlbiIsImNzcyIsIm5vdGlmeSIsInRpdGxlIiwiZGVsZXRlZCIsInR5cGUiLCJwbGFjZW1lbnQiLCJmcm9tIiwiYWxpZ24iXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJI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QUF4Qiw0Q0FDU0MsU0FEVCxFQUNxQnZFLENBQUMsQ0FBQywyQkFBRCxDQUFELENBQStCTSxJQUEvQixDQUFvQyxTQUFwQyxDQURyQixzQ0FFZThFLGdCQUZmLGNBSUksVUFBU3RCLFFBQVQsRUFBbUJVLE1BQW5CLEVBQTJCO0FBQ3ZCZSxhQUFTLEdBQUd6QixRQUFRLENBQUMwQixVQUFyQjtBQUNBeEYsS0FBQyxDQUFDLE1BQU1zRixFQUFQLENBQUQsQ0FBWUcsR0FBWixDQUFnQixTQUFoQixFQUEyQixNQUEzQixFQUZ1QixDQUd2Qjs7QUFDQSxRQUFJakIsTUFBTSxJQUFJLFNBQWQsRUFBeUI7QUFDckJ4RSxPQUFDLENBQUMwRixNQUFGLENBQVM7QUFDTEMsYUFBSyxFQUFFbkUsTUFBTSxDQUFDb0UsT0FBUCxHQUFpQixHQURuQjtBQUVMckUsZUFBTyxFQUFFdUMsUUFBUSxDQUFDdkM7QUFGYixPQUFULEVBR0c7QUFDQ3NFLFlBQUksRUFBRS9CLFFBQVEsQ0FBQytCLElBRGhCO0FBRUNDLGlCQUFTLEVBQUU7QUFDUEMsY0FBSSxFQUFFLFFBREM7QUFFUEMsZUFBSyxFQUFFO0FBRkE7QUFGWixPQUhIO0FBVUg7QUFDSixHQXBCTDtBQXFCSCxDQXhCRCxFIiwiZmlsZSI6Ii9kZXZlbG9wbWVudC9qcy9wYWdlcy9jdXN0b20vdXNlcnMvb3V0aWxzLnVzZXJzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA1Mik7XG4iLCIvLyBDbGFzcyBEZWZpbml0aW9uXHJcbnZhciBLVGZvcm0gPSBmdW5jdGlvbigpIHtcclxuICAgIHZhciBfYnV0dG9uU3Bpbm5lckNsYXNzZXMgPSAnc3Bpbm5lciBzcGlubmVyLXJpZ2h0IHNwaW5uZXItd2hpdGUgcHItMTUnO1xyXG5cclxuXHJcbiAgICB2YXIgX2hhbmRsZUZvcm1Vc2VyID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgaWYgKCQoJyNrdF9hcHBzX3VzZXJfZWRpdF91c2VyX2Zvcm0nKS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdmFyIGZvcm0gPSBLVFV0aWwuZ2V0QnlJZCgna3RfYXBwc191c2VyX2VkaXRfdXNlcl9mb3JtJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdmFyIGZvcm0gPSBLVFV0aWwuZ2V0QnlJZCgna3RfYXBwc191c2VyX2NyZWF0ZV91c2VyX2Zvcm0nKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBmb3JtU3VibWl0VXJsID0gS1RVdGlsLmF0dHIoZm9ybSwgJ2FjdGlvbicpO1xyXG4gICAgICAgIHZhciBmb3JtU3VibWl0QnV0dG9uID0gJCgnLmt0X2Zvcm1fc3VibWl0X3V0aWxpc2F0ZXVycycpO1xyXG5cclxuICAgICAgICBpZiAoIWZvcm0pIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgcGFzc3dvcmRNZXRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYXNzd29yZE1ldGVyJyk7XHJcblxyXG4gICAgICAgIGNvbnN0IHJhbmRvbU51bWJlciA9IGZ1bmN0aW9uKG1pbiwgbWF4KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkgKyBtaW4pO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIEZvcm1WYWxpZGF0aW9uXHJcbiAgICAgICAgICAgIC5mb3JtVmFsaWRhdGlvbihcclxuICAgICAgICAgICAgICAgIGZvcm0sIHtcclxuICAgICAgICAgICAgICAgICAgICBmaWVsZHM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29tcGFueV9pZDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdG9yczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdEVtcHR5OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IF9MQU5HXy5jaGFtcHNfaXNfcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJuYW1lOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0b3JzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90RW1wdHk6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogX0xBTkdfLmNoYW1wc19pc19yZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmlyc3RuYW1lOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0b3JzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90RW1wdHk6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogX0xBTkdfLmNoYW1wc19pc19yZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFzdG5hbWU6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRvcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3RFbXB0eToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBfTEFOR18uY2hhbXBzX2lzX3JlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbWFpbDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdG9yczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdEVtcHR5OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IF9MQU5HXy5lbWFpbF9pc19yZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW1haWxBZGRyZXNzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IF9MQU5HXy50aGVfdmFsdWVfaXNfbm90X2FkZHJlc3NfdmFsaWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0b3JzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlmZmVyZW50OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IF9MQU5HXy5wYXNzd29yZF9jYW5ub3RfYmVfdGhlX3NhbWVfYXNfdXNlcm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBhcmU6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmb3JtLnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwidXNlcm5hbWVcIl0nKS52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFzc19jb25maXJtOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0b3JzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWRlbnRpY2FsOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBhcmU6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZvcm0ucXVlcnlTZWxlY3RvcignW25hbWU9XCJwYXNzd29yZFwiXScpLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBfTEFOR18ucGFzc3dvcmRfbm90X2VjYWxfcGFzc19jb25maXJtLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgcGx1Z2luczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmlnZ2VyOiBuZXcgRm9ybVZhbGlkYXRpb24ucGx1Z2lucy5UcmlnZ2VyKCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvb3RzdHJhcDogbmV3IEZvcm1WYWxpZGF0aW9uLnBsdWdpbnMuQm9vdHN0cmFwKCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Ym1pdEJ1dHRvbjogbmV3IEZvcm1WYWxpZGF0aW9uLnBsdWdpbnMuU3VibWl0QnV0dG9uKCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkU3RyZW5ndGg6IG5ldyBGb3JtVmFsaWRhdGlvbi5wbHVnaW5zLlBhc3N3b3JkU3RyZW5ndGgoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQ6ICdwYXNzd29yZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBfTEFOR18udGhlX3Bhc3N3b3JkX2lzX3dlYWssXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW5pbWFsU2NvcmU6IDMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblZhbGlkYXRlZDogZnVuY3Rpb24odmFsaWQsIG1lc3NhZ2UsIHNjb3JlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChzY29yZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXNzd29yZE1ldGVyLnN0eWxlLndpZHRoID0gcmFuZG9tTnVtYmVyKDEsIDIwKSArICclJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkTWV0ZXIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNmZjQxMzYnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkTWV0ZXIuc3R5bGUud2lkdGggPSByYW5kb21OdW1iZXIoMjAsIDQwKSArICclJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkTWV0ZXIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNmZjQxMzYnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkTWV0ZXIuc3R5bGUud2lkdGggPSByYW5kb21OdW1iZXIoNDAsIDYwKSArICclJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkTWV0ZXIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNmZjQxMzYnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkTWV0ZXIuc3R5bGUud2lkdGggPSByYW5kb21OdW1iZXIoNjAsIDgwKSArICclJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkTWV0ZXIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNmZmI3MDAnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgNDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkTWV0ZXIuc3R5bGUud2lkdGggPSAnMTAwJSc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXNzd29yZE1ldGVyLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjMTlhOTc0JztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgIC5vbignY29yZS5mb3JtLnZhbGlkJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAkKGZvcm0pLnN1Ym1pdCgpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAub24oJ2NvcmUuZm9ybS5pbnZhbGlkJywgZnVuY3Rpb24ocmVzcG9uc2UpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuZXJyb3IgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICQoZm9ybSkuYmVmb3JlKHJlc3BvbnNlLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBQdWJsaWMgRnVuY3Rpb25zXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBfaGFuZGxlRm9ybVVzZXIoKTtcclxuICAgICAgICAgICAgLy9faGFuZGxlRm9ybVNpZ251cCgpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn0oKTtcclxuXHJcbi8vIENsYXNzIEluaXRpYWxpemF0aW9uXHJcbmpRdWVyeShkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcbiAgICBLVGZvcm0uaW5pdCgpO1xyXG59KTtcclxuXHJcbiQoZG9jdW1lbnQpLm9uKFwiY2xpY2tcIiwgJy5nZW5lcmVyX21vdF9wYXNzZScsIGZ1bmN0aW9uKGUpIHtcclxuICAgICQucG9zdChiYXNlQ29udHJvbGxlciArIFwiL2dldFBhc3N3b3JkXCIsIHtcclxuICAgICAgICAgICAgW2Nyc2Z0b2tlbl06ICQoJ21ldGFbbmFtZT1cIlgtQ1NSRi1UT0tFTlwiXScpLmF0dHIoJ2NvbnRlbnQnKSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGZ1bmN0aW9uKHJlc3BvbnNlLCBzdGF0dXMpIHtcclxuICAgICAgICAgICAgLy9jc3JmX2hhc2ggPSByZXNwb25zZS5jc3JmX3Rva2VuO1xyXG5cclxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmVycm9yID09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICAkKCcucGFzc19jb25maXJtJykudmFsKCcnKTtcclxuICAgICAgICAgICAgICAgICQoJy5kYXRhcGFzc3dvcmQnKS52YWwoJycpO1xyXG4gICAgICAgICAgICAgICAgJCgnI3Bhc3N3b3JkJykuaHRtbCgnJyk7XHJcbiAgICAgICAgICAgICAgICAkKCcuZGF0YXBhc3N3b3JkJykudmFsKHJlc3BvbnNlLnN1Y2Nlc3MucGFzc3dvcmQpO1xyXG4gICAgICAgICAgICAgICAgJCgnLnBhc3NfY29uZmlybScpLnZhbChyZXNwb25zZS5zdWNjZXNzLnBhc3N3b3JkKTtcclxuICAgICAgICAgICAgICAgICQoJyNwYXNzd29yZCcpLmh0bWwocmVzcG9uc2Uuc3VjY2Vzcy5wYXNzd29yZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxufSk7XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVVc2VybmFtZSgpIHtcclxuICAgIHZhciBmbmFtZSA9ICQoJyNrdF9hcHBzX3VzZXJfY3JlYXRlX3VzZXJfZm9ybSBpbnB1dFtuYW1lPWZpcnN0bmFtZV0nKS52YWwoKS5zdWJzdHJpbmcoMCwgMSkudG9Mb3dlckNhc2UoKTtcclxuXHJcbiAgICB2YXIgbG5hbWUgPSAkKCcja3RfYXBwc191c2VyX2NyZWF0ZV91c2VyX2Zvcm0gaW5wdXRbbmFtZT1sYXN0bmFtZV0nKS52YWwoKS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgdmFyIHVzZXJuYW1lID0gZm5hbWUgKyBsbmFtZSArIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICgxMDAwMCArIDEpICsgMTAwMCk7XHJcbiAgICAkKCcja3RfYXBwc191c2VyX2NyZWF0ZV91c2VyX2Zvcm0gaW5wdXRbbmFtZT11c2VybmFtZV0nKS52YWwodXNlcm5hbWUpO1xyXG59XHJcblxyXG4kKCcja3RfYXBwc191c2VyX2NyZWF0ZV91c2VyX2Zvcm0gaW5wdXRbbmFtZT1maXJzdG5hbWVdJykub24oJ2tleXVwJywgY3JlYXRlVXNlcm5hbWUpO1xyXG4kKCcja3RfYXBwc191c2VyX2NyZWF0ZV91c2VyX2Zvcm0gaW5wdXRbbmFtZT1sYXN0bmFtZV0nKS5vbigna2V5dXAnLCBjcmVhdGVVc2VybmFtZSk7XHJcblxyXG5cclxuJCgnLnNob3ctcGFzc3dvcmQnKS5jbGljayhmdW5jdGlvbigpIHtcclxuICAgIGlmICgkKHRoaXMpLnByZXYoJ2lucHV0JykucHJvcCgndHlwZScpID09ICdwYXNzd29yZCcpIHtcclxuICAgICAgICAvL1NpIGMnZXN0IHVuIGlucHV0IHR5cGUgcGFzc3dvcmRcclxuICAgICAgICAkKHRoaXMpLnByZXYoJ2lucHV0JykucHJvcCgndHlwZScsICd0ZXh0Jyk7XHJcbiAgICAgICAgJCh0aGlzKS5odG1sKCc8aSBjbGFzcz1cImZhciBmYS1leWUtc2xhc2hcIj48L2k+Jyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vU2lub25cclxuICAgICAgICAkKHRoaXMpLnByZXYoJ2lucHV0JykucHJvcCgndHlwZScsICdwYXNzd29yZCcpO1xyXG4gICAgICAgICQodGhpcykuaHRtbCgnPGkgY2xhc3M9XCJmYXIgZmEtZXllXCI+PC9pPicpO1xyXG4gICAgfVxyXG59KTtcclxuXHJcblxyXG5cclxuXHJcbiQoZG9jdW1lbnQpLm9uKFwiY2xpY2tcIiwgJy5kZWxldGVTZXNzaW9uJywgZnVuY3Rpb24oZSkge1xyXG4gICAgdmFyIHNlc3Npb25fZW5fY291cnMgPSAkKHRoaXMpLmRhdGEoJ3Nlc3Npb25fZW5fY291cnMnKTtcclxuICAgIHZhciBpZCA9ICQodGhpcykuYXR0cignaWQnKVxyXG4gICAgJC5wb3N0KGJhc2VDb250cm9sbGVyICsgXCIvZGVsZXRlU2Vzc2lvblwiLCB7XHJcbiAgICAgICAgICAgIFtjcnNmdG9rZW5dOiAkKCdtZXRhW25hbWU9XCJYLUNTUkYtVE9LRU5cIl0nKS5hdHRyKCdjb250ZW50JyksXHJcbiAgICAgICAgICAgIHZhbHVlOiBzZXNzaW9uX2VuX2NvdXJzLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZnVuY3Rpb24ocmVzcG9uc2UsIHN0YXR1cykge1xyXG4gICAgICAgICAgICBjc3JmX2hhc2ggPSByZXNwb25zZS5jc3JmX3Rva2VuO1xyXG4gICAgICAgICAgICAkKFwiI1wiICsgaWQpLmNzcygnZGlzcGxheScsICdub25lJyk7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGlkKTtcclxuICAgICAgICAgICAgaWYgKHN0YXR1cyA9PSAnc3VjY2VzcycpIHtcclxuICAgICAgICAgICAgICAgICQubm90aWZ5KHtcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogX0xBTkdfLmRlbGV0ZWQgKyBcIiFcIixcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiByZXNwb25zZS5tZXNzYWdlXHJcbiAgICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogcmVzcG9uc2UudHlwZSxcclxuICAgICAgICAgICAgICAgICAgICBwbGFjZW1lbnQ6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnJvbTogJ2JvdHRvbScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduOiAnY2VudGVyJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG59KTsiXSwic291cmNlUm9vdCI6IiJ9