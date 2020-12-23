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
/******/ 	return __webpack_require__(__webpack_require__.s = 40);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/metronic/js/pages/custom/login/login-4.js":
/*!*************************************************************!*\
  !*** ./resources/metronic/js/pages/custom/login/login-4.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // Class Definition

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var KTLogin = function () {
  var _buttonSpinnerClasses = 'spinner spinner-right spinner-white pr-15';

  var _handleFormSignin = function _handleFormSignin() {
    var form = KTUtil.getById('kt_login_singin_form');
    var formSubmitUrl = KTUtil.attr(form, 'action');
    var formSubmitButton = KTUtil.getById('kt_login_singin_form_submit_button');

    if (!form) {
      return;
    }

    FormValidation.formValidation(form, {
      fields: {
        login: {
          validators: {
            notEmpty: {
              message: _LANG_.username_is_required
            }
          }
        },
        password: {
          validators: {
            notEmpty: {
              message: _LANG_.password_is_required
            }
          }
        }
      },
      plugins: {
        trigger: new FormValidation.plugins.Trigger(),
        submitButton: new FormValidation.plugins.SubmitButton(),
        //defaultSubmit: new FormValidation.plugins.DefaultSubmit(), // Uncomment this line to enable normal button submit after form validation
        bootstrap: new FormValidation.plugins.Bootstrap({//	eleInvalidClass: '', // Repace with uncomment to hide bootstrap validation icons
          //	eleValidClass: '',   // Repace with uncomment to hide bootstrap validation icons
        })
      }
    }).on('core.form.valid', function () {
      // Show loading state on button
      KTUtil.btnWait(formSubmitButton, _buttonSpinnerClasses, "Please wait"); // Simulate Ajax request

      setTimeout(function () {
        KTUtil.btnRelease(formSubmitButton);
      }, 2000); // Form Validation & Ajax Submission: https://formvalidation.io/guide/examples/using-ajax-to-submit-the-form

      FormValidation.utils.fetch(formSubmitUrl, {
        headers: {
          //'X-Requested-With': 'XMLHttpRequest',
          'X-CSRF-TOKEN': $('meta[name="X-CSRF-TOKEN"]').attr('content')
        },
        method: 'POST',
        dataType: 'json',
        params: {
          login: form.querySelector('[name="login"]').value,
          password: form.querySelector('[name="password"]').value,
          remember: form.querySelector('[name="remember"]').value
        }
      }).then(function (response) {
        // Return valid JSON
        // Release button
        KTUtil.btnRelease(formSubmitButton);
        $('meta[name="X-CSRF-TOKEN"]').attr('content', response.token);

        if (response && _typeof(response) === 'object' && response.status && response.status == 'success') {
          Swal.fire({
            html: response.message,
            icon: "success",
            buttonsStyling: false,
            //confirmButtonText: _LANG_.close,
            showConfirmButton: false,
            timer: 1500,
            customClass: {
              confirmButton: "btn font-weight-bold btn-light-primary"
            }
          }).then(function () {
            KTUtil.scrollTop();
            window.location.href = response.redirect;
          });
        } else {
          Swal.fire({
            html: response.message,
            icon: "error",
            buttonsStyling: false,
            confirmButtonText: _LANG_.close,
            customClass: {
              confirmButton: "btn font-weight-bold btn-light-primary"
            }
          }).then(function () {
            KTUtil.scrollTop();
          });
        }
      });
    }).on('core.form.invalid', function () {
      Swal.fire({
        text: "Sorry, looks like there are some errors detected, please try again tttttt.",
        icon: "error",
        buttonsStyling: false,
        confirmButtonText: _LANG_.close,
        customClass: {
          confirmButton: "btn font-weight-bold btn-light-primary"
        }
      }).then(function () {
        KTUtil.scrollTop();
      });
    });
  };

  var _handleFormForgot = function _handleFormForgot() {
    var form = KTUtil.getById('kt_login_forgot_form');
    var formSubmitUrl = KTUtil.attr(form, 'action');
    var formSubmitButton = KTUtil.getById('kt_login_forgot_form_submit_button');

    if (!form) {
      return;
    }

    FormValidation.formValidation(form, {
      fields: {
        email: {
          validators: {
            notEmpty: {
              message: _LANG_.email_is_required
            },
            emailAddress: {
              message: _LANG_.the_value_is_not_address_valid
            }
          }
        }
      },
      plugins: {
        trigger: new FormValidation.plugins.Trigger(),
        submitButton: new FormValidation.plugins.SubmitButton(),
        //defaultSubmit: new FormValidation.plugins.DefaultSubmit(), // Uncomment this line to enable normal button submit after form validation
        bootstrap: new FormValidation.plugins.Bootstrap({//	eleInvalidClass: '', // Repace with uncomment to hide bootstrap validation icons
          //	eleValidClass: '',   // Repace with uncomment to hide bootstrap validation icons
        })
      }
    }).on('core.form.valid', function () {
      // Show loading state on button
      KTUtil.btnWait(formSubmitButton, _buttonSpinnerClasses, _LANG_.loading_wait); // Simulate Ajax request

      setTimeout(function () {
        KTUtil.btnRelease(formSubmitButton);
      }, 2000); // Form Validation & Ajax Submission: https://formvalidation.io/guide/examples/using-ajax-to-submit-the-form

      FormValidation.utils.fetch(formSubmitUrl, {
        headers: {
          //'X-Requested-With': 'XMLHttpRequest',
          'X-CSRF-TOKEN': $('meta[name="X-CSRF-TOKEN"]').attr('content')
        },
        method: 'POST',
        dataType: 'json',
        params: {
          email: form.querySelector('[name="email"]').value
        }
      }).then(function (response) {
        // Return valid JSON
        // Release button
        KTUtil.btnRelease(formSubmitButton);
        $('meta[name="X-CSRF-TOKEN"]').attr('content', response.token);

        if (response && _typeof(response) === 'object' && response.status && response.status == 'success') {
          Swal.fire({
            html: response.message,
            icon: "success",
            buttonsStyling: false,
            //confirmButtonText: _LANG_.close,
            showConfirmButton: false,
            timer: 1500,
            customClass: {
              confirmButton: "btn font-weight-bold btn-light-primary"
            }
          }).then(function () {
            KTUtil.scrollTop();
            window.location.href = response.redirect;
          });
        } else {
          Swal.fire({
            html: response.message,
            icon: "error",
            buttonsStyling: false,
            confirmButtonText: _LANG_.close,
            customClass: {
              confirmButton: "btn font-weight-bold btn-light-primary"
            }
          }).then(function () {
            KTUtil.scrollTop();
          });
        }
      });
    }).on('core.form.invalid', function () {
      Swal.fire({
        text: _LANG_.sorry_looks_like_errors_detected,
        icon: "error",
        buttonsStyling: false,
        confirmButtonText: _LANG_.close,
        customClass: {
          confirmButton: "btn font-weight-bold btn-light-primary"
        }
      }).then(function () {
        KTUtil.scrollTop();
      });
    });
  };

  var _handleFormResetForgot = function _handleFormResetForgot() {
    var form = KTUtil.getById('kt_login_reset_forgot_form');
    var formSubmitUrl = KTUtil.attr(form, 'action');
    var formSubmitButton = KTUtil.getById('kt_login_reset_forgot_form_submit_button');

    if (!form) {
      return;
    }

    var passwordMeter = document.getElementById('passwordMeter');
    var passwordMeter2 = document.getElementById('passwordMeter2');

    var randomNumber = function randomNumber(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    };

    FormValidation.formValidation(form, {
      fields: {
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
            notEmpty: {
              message: 'le champs est requis'
            }
          }
        },
        pass_confirm: {
          validators: {
            notEmpty: {
              message: 'le champs est requis'
            },
            identical: {
              compare: function compare() {
                return form.querySelector('[name="password"]').value;
              },
              message: 'Le mot de passe et la confirmation ne sont pas les mêmes'
            }
          }
        }
      },
      plugins: {
        trigger: new FormValidation.plugins.Trigger(),
        submitButton: new FormValidation.plugins.SubmitButton(),
        //defaultSubmit: new FormValidation.plugins.DefaultSubmit(), // Uncomment this line to enable normal button submit after form validation
        bootstrap: new FormValidation.plugins.Bootstrap({//	eleInvalidClass: '', // Repace with uncomment to hide bootstrap validation icons
          //	eleValidClass: '',   // Repace with uncomment to hide bootstrap validation icons
        }),
        tpasswordStrength: new FormValidation.plugins.PasswordStrength({
          field: 'password',
          message: 'Le mot de passe est très falble',
          minimalScore: 3,
          onValidated: function onValidated(valid, message, score) {
            console.log(score);
            console.log(message);

            switch (score) {
              case 0:
                passwordMeter.style.width = randomNumber(1, 20) + '%';
                passwordMeter.style.backgroundColor = '#ff4136';

              case 1:
                passwordMeter.style.width = randomNumber(20, 40) + '%';
                passwordMeter.style.backgroundColor = '#ff4136';
                break;

              case 2:
                passwordMeter.style.width = randomNumber(40, 60) + '%';
                passwordMeter.style.backgroundColor = '#ff4136';

                message: 'bon';

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
      // Show loading state on button
      KTUtil.btnWait(formSubmitButton, _buttonSpinnerClasses, _LANG_.loading_wait); // Simulate Ajax request

      setTimeout(function () {
        KTUtil.btnRelease(formSubmitButton);
      }, 2000); // Form Validation & Ajax Submission: https://formvalidation.io/guide/examples/using-ajax-to-submit-the-form

      FormValidation.utils.fetch(formSubmitUrl, {
        headers: {
          //'X-Requested-With': 'XMLHttpRequest',
          'X-CSRF-TOKEN': $('meta[name="X-CSRF-TOKEN"]').attr('content')
        },
        method: 'POST',
        dataType: 'json',
        params: {
          token: form.querySelector('[name="token"]').value,
          email: form.querySelector('[name="email"]').value,
          password: form.querySelector('[name="password"]').value,
          pass_confirm: form.querySelector('[name="pass_confirm"]').value
        }
      }).then(function (response) {
        // Return valid JSON
        // Release button
        KTUtil.btnRelease(formSubmitButton);
        $('meta[name="X-CSRF-TOKEN"]').attr('content', response.token);

        if (response && _typeof(response) === 'object' && response.status && response.status == 'success') {
          Swal.fire({
            html: response.message,
            icon: "success",
            buttonsStyling: false,
            //confirmButtonText: _LANG_.close,
            showConfirmButton: false,
            timer: 1500,
            customClass: {
              confirmButton: "btn font-weight-bold btn-light-primary"
            }
          }).then(function () {
            KTUtil.scrollTop();
            window.location.href = response.redirect;
          });
        } else {
          Swal.fire({
            text: _LANG_.sorry_looks_like_errors_detected,
            icon: "error",
            buttonsStyling: false,
            confirmButtonText: _LANG_.close,
            customClass: {
              confirmButton: "btn font-weight-bold btn-light-primary"
            }
          }).then(function () {
            KTUtil.scrollTop();
          });
        }
      });
    }).on('core.form.invalid', function () {
      Swal.fire({
        text: _LANG_.sorry_looks_like_errors_detected,
        icon: "error",
        buttonsStyling: false,
        confirmButtonText: _LANG_.close,
        customClass: {
          confirmButton: "btn font-weight-bold btn-light-primary"
        }
      }).then(function () {
        KTUtil.scrollTop();
      });
    });
  }; // var _handleFormSignup = function() {
  //     // Base elements
  //     var wizardEl = KTUtil.getById('kt_login');
  //     var form = KTUtil.getById('kt_login_signup_form');
  //     var wizardObj;
  //     var validations = [];
  //     if (!form) {
  //         return;
  //     }
  //     // Init form validation rules. For more info check the FormValidation plugin's official documentation:https://formvalidation.io/
  //     // Step 1
  //     validations.push(FormValidation.formValidation(
  //         form, {
  //             fields: {
  //                 fname: {
  //                     validators: {
  //                         notEmpty: {
  //                             message: 'First name is required'
  //                         }
  //                     }
  //                 },
  //                 lname: {
  //                     validators: {
  //                         notEmpty: {
  //                             message: 'Last Name is required'
  //                         }
  //                     }
  //                 },
  //                 phone: {
  //                     validators: {
  //                         notEmpty: {
  //                             message: 'Phone is required'
  //                         }
  //                     }
  //                 },
  //                 email: {
  //                     validators: {
  //                         notEmpty: {
  //                             message: 'Email is required'
  //                         },
  //                         emailAddress: {
  //                             message: 'The value is not a valid email address'
  //                         }
  //                     }
  //                 }
  //             },
  //             plugins: {
  //                 trigger: new FormValidation.plugins.Trigger(),
  //                 bootstrap: new FormValidation.plugins.Bootstrap()
  //             }
  //         }
  //     ));
  //     // Step 2
  //     validations.push(FormValidation.formValidation(
  //         form, {
  //             fields: {
  //                 address1: {
  //                     validators: {
  //                         notEmpty: {
  //                             message: 'Address is required'
  //                         }
  //                     }
  //                 },
  //                 postcode: {
  //                     validators: {
  //                         notEmpty: {
  //                             message: 'Postcode is required'
  //                         }
  //                     }
  //                 },
  //                 city: {
  //                     validators: {
  //                         notEmpty: {
  //                             message: 'City is required'
  //                         }
  //                     }
  //                 },
  //                 state: {
  //                     validators: {
  //                         notEmpty: {
  //                             message: 'State is required'
  //                         }
  //                     }
  //                 },
  //                 country: {
  //                     validators: {
  //                         notEmpty: {
  //                             message: 'Country is required'
  //                         }
  //                     }
  //                 }
  //             },
  //             plugins: {
  //                 trigger: new FormValidation.plugins.Trigger(),
  //                 bootstrap: new FormValidation.plugins.Bootstrap()
  //             }
  //         }
  //     ));
  //     // Initialize form wizard
  //     wizardObj = new KTWizard(wizardEl, {
  //         startStep: 1, // initial active step number
  //         clickableSteps: false // to make steps clickable this set value true and add data-wizard-clickable="true" in HTML for class="wizard" element
  //     });
  //     // Validation before going to next page
  //     wizardObj.on('beforeNext', function(wizard) {
  //         validations[wizard.getStep() - 1].validate().then(function(status) {
  //             if (status == 'Valid') {
  //                 wizardObj.goNext();
  //                 KTUtil.scrollTop();
  //             } else {
  //                 Swal.fire({
  //                     text: "Sorry, looks like there are some errors detected, please try again kkkkkk.",
  //                     icon: "error",
  //                     buttonsStyling: false,
  //                     confirmButtonText: _LANG_.close,
  //                     customClass: {
  //                         confirmButton: "btn font-weight-bold btn-light-primary"
  //                     }
  //                 }).then(function() {
  //                     KTUtil.scrollTop();
  //                 });
  //             }
  //         });
  //         wizardObj.stop(); // Don't go to the next step
  //     });
  //     // Change event
  //     wizardObj.on('change', function(wizard) {
  //         KTUtil.scrollTop();
  //     });
  // }
  // Public Functions


  return {
    init: function init() {
      _handleFormSignin();

      _handleFormForgot();

      _handleFormResetForgot(); //_handleFormSignup();

    }
  };
}(); // Class Initialization


jQuery(document).ready(function () {
  KTLogin.init();
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
});

/***/ }),

/***/ 40:
/*!*******************************************************************!*\
  !*** multi ./resources/metronic/js/pages/custom/login/login-4.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Applications/MAMP/htdocs/spreadci4/public/admin/themes/metronic/resources/metronic/js/pages/custom/login/login-4.js */"./resources/metronic/js/pages/custom/login/login-4.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL21ldHJvbmljL2pzL3BhZ2VzL2N1c3RvbS9sb2dpbi9sb2dpbi00LmpzIl0sIm5hbWVzIjpbIktUTG9naW4iLCJfYnV0dG9uU3Bpbm5lckNsYXNzZXMiLCJfaGFuZGxlRm9ybVNpZ25pbiIsImZvcm0iLCJLVFV0aWwiLCJnZXRCeUlkIiwiZm9ybVN1Ym1pdFVybCIsImF0dHIiLCJmb3JtU3VibWl0QnV0dG9uIiwiRm9ybVZhbGlkYXRpb24iLCJmb3JtVmFsaWRhdGlvbiIsImZpZWxkcyIsImxvZ2luIiwidmFsaWRhdG9ycyIsIm5vdEVtcHR5IiwibWVzc2FnZSIsIl9MQU5HXyIsInVzZXJuYW1lX2lzX3JlcXVpcmVkIiwicGFzc3dvcmQiLCJwYXNzd29yZF9pc19yZXF1aXJlZCIsInBsdWdpbnMiLCJ0cmlnZ2VyIiwiVHJpZ2dlciIsInN1Ym1pdEJ1dHRvbiIsIlN1Ym1pdEJ1dHRvbiIsImJvb3RzdHJhcCIsIkJvb3RzdHJhcCIsIm9uIiwiYnRuV2FpdCIsInNldFRpbWVvdXQiLCJidG5SZWxlYXNlIiwidXRpbHMiLCJmZXRjaCIsImhlYWRlcnMiLCIkIiwibWV0aG9kIiwiZGF0YVR5cGUiLCJwYXJhbXMiLCJxdWVyeVNlbGVjdG9yIiwidmFsdWUiLCJyZW1lbWJlciIsInRoZW4iLCJyZXNwb25zZSIsInRva2VuIiwic3RhdHVzIiwiU3dhbCIsImZpcmUiLCJodG1sIiwiaWNvbiIsImJ1dHRvbnNTdHlsaW5nIiwic2hvd0NvbmZpcm1CdXR0b24iLCJ0aW1lciIsImN1c3RvbUNsYXNzIiwiY29uZmlybUJ1dHRvbiIsInNjcm9sbFRvcCIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsInJlZGlyZWN0IiwiY29uZmlybUJ1dHRvblRleHQiLCJjbG9zZSIsInRleHQiLCJfaGFuZGxlRm9ybUZvcmdvdCIsImVtYWlsIiwiZW1haWxfaXNfcmVxdWlyZWQiLCJlbWFpbEFkZHJlc3MiLCJ0aGVfdmFsdWVfaXNfbm90X2FkZHJlc3NfdmFsaWQiLCJsb2FkaW5nX3dhaXQiLCJzb3JyeV9sb29rc19saWtlX2Vycm9yc19kZXRlY3RlZCIsIl9oYW5kbGVGb3JtUmVzZXRGb3Jnb3QiLCJwYXNzd29yZE1ldGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInBhc3N3b3JkTWV0ZXIyIiwicmFuZG9tTnVtYmVyIiwibWluIiwibWF4IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwicGFzc19jb25maXJtIiwiaWRlbnRpY2FsIiwiY29tcGFyZSIsInRwYXNzd29yZFN0cmVuZ3RoIiwiUGFzc3dvcmRTdHJlbmd0aCIsImZpZWxkIiwibWluaW1hbFNjb3JlIiwib25WYWxpZGF0ZWQiLCJ2YWxpZCIsInNjb3JlIiwiY29uc29sZSIsImxvZyIsInN0eWxlIiwid2lkdGgiLCJiYWNrZ3JvdW5kQ29sb3IiLCJpbml0IiwialF1ZXJ5IiwicmVhZHkiLCJjbGljayIsInByZXYiLCJwcm9wIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FB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QUNIO0FBQ0osR0FWRDtBQVlILENBZkQsRSIsImZpbGUiOiIvZGV2ZWxvcG1lbnQvanMvcGFnZXMvY3VzdG9tL2xvZ2luL2xvZ2luLTQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDQwKTtcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuLy8gQ2xhc3MgRGVmaW5pdGlvblxyXG52YXIgS1RMb2dpbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgdmFyIF9idXR0b25TcGlubmVyQ2xhc3NlcyA9ICdzcGlubmVyIHNwaW5uZXItcmlnaHQgc3Bpbm5lci13aGl0ZSBwci0xNSc7XHJcblxyXG4gICAgdmFyIF9oYW5kbGVGb3JtU2lnbmluID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdmFyIGZvcm0gPSBLVFV0aWwuZ2V0QnlJZCgna3RfbG9naW5fc2luZ2luX2Zvcm0nKTtcclxuICAgICAgICB2YXIgZm9ybVN1Ym1pdFVybCA9IEtUVXRpbC5hdHRyKGZvcm0sICdhY3Rpb24nKTtcclxuICAgICAgICB2YXIgZm9ybVN1Ym1pdEJ1dHRvbiA9IEtUVXRpbC5nZXRCeUlkKCdrdF9sb2dpbl9zaW5naW5fZm9ybV9zdWJtaXRfYnV0dG9uJyk7XHJcblxyXG4gICAgICAgIGlmICghZm9ybSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBGb3JtVmFsaWRhdGlvblxyXG4gICAgICAgICAgICAuZm9ybVZhbGlkYXRpb24oXHJcbiAgICAgICAgICAgICAgICBmb3JtLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmllbGRzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvZ2luOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0b3JzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90RW1wdHk6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogX0xBTkdfLnVzZXJuYW1lX2lzX3JlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXNzd29yZDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdG9yczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdEVtcHR5OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IF9MQU5HXy5wYXNzd29yZF9pc19yZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgcGx1Z2luczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmlnZ2VyOiBuZXcgRm9ybVZhbGlkYXRpb24ucGx1Z2lucy5UcmlnZ2VyKCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Ym1pdEJ1dHRvbjogbmV3IEZvcm1WYWxpZGF0aW9uLnBsdWdpbnMuU3VibWl0QnV0dG9uKCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vZGVmYXVsdFN1Ym1pdDogbmV3IEZvcm1WYWxpZGF0aW9uLnBsdWdpbnMuRGVmYXVsdFN1Ym1pdCgpLCAvLyBVbmNvbW1lbnQgdGhpcyBsaW5lIHRvIGVuYWJsZSBub3JtYWwgYnV0dG9uIHN1Ym1pdCBhZnRlciBmb3JtIHZhbGlkYXRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9vdHN0cmFwOiBuZXcgRm9ybVZhbGlkYXRpb24ucGx1Z2lucy5Cb290c3RyYXAoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9cdGVsZUludmFsaWRDbGFzczogJycsIC8vIFJlcGFjZSB3aXRoIHVuY29tbWVudCB0byBoaWRlIGJvb3RzdHJhcCB2YWxpZGF0aW9uIGljb25zXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL1x0ZWxlVmFsaWRDbGFzczogJycsICAgLy8gUmVwYWNlIHdpdGggdW5jb21tZW50IHRvIGhpZGUgYm9vdHN0cmFwIHZhbGlkYXRpb24gaWNvbnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgLm9uKCdjb3JlLmZvcm0udmFsaWQnLCBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBTaG93IGxvYWRpbmcgc3RhdGUgb24gYnV0dG9uXHJcbiAgICAgICAgICAgICAgICBLVFV0aWwuYnRuV2FpdChmb3JtU3VibWl0QnV0dG9uLCBfYnV0dG9uU3Bpbm5lckNsYXNzZXMsIFwiUGxlYXNlIHdhaXRcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gU2ltdWxhdGUgQWpheCByZXF1ZXN0XHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIEtUVXRpbC5idG5SZWxlYXNlKGZvcm1TdWJtaXRCdXR0b24pO1xyXG4gICAgICAgICAgICAgICAgfSwgMjAwMCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gRm9ybSBWYWxpZGF0aW9uICYgQWpheCBTdWJtaXNzaW9uOiBodHRwczovL2Zvcm12YWxpZGF0aW9uLmlvL2d1aWRlL2V4YW1wbGVzL3VzaW5nLWFqYXgtdG8tc3VibWl0LXRoZS1mb3JtXHJcbiAgICAgICAgICAgICAgICBGb3JtVmFsaWRhdGlvbi51dGlscy5mZXRjaChmb3JtU3VibWl0VXJsLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLydYLVJlcXVlc3RlZC1XaXRoJzogJ1hNTEh0dHBSZXF1ZXN0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ1gtQ1NSRi1UT0tFTic6ICQoJ21ldGFbbmFtZT1cIlgtQ1NSRi1UT0tFTlwiXScpLmF0dHIoJ2NvbnRlbnQnKSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvZ2luOiBmb3JtLnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwibG9naW5cIl0nKS52YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFzc3dvcmQ6IGZvcm0ucXVlcnlTZWxlY3RvcignW25hbWU9XCJwYXNzd29yZFwiXScpLnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZW1lbWJlcjogZm9ybS5xdWVyeVNlbGVjdG9yKCdbbmFtZT1cInJlbWVtYmVyXCJdJykudmFsdWVcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfSkudGhlbihmdW5jdGlvbihyZXNwb25zZSkgeyAvLyBSZXR1cm4gdmFsaWQgSlNPTlxyXG4gICAgICAgICAgICAgICAgICAgIC8vIFJlbGVhc2UgYnV0dG9uXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIEtUVXRpbC5idG5SZWxlYXNlKGZvcm1TdWJtaXRCdXR0b24pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAkKCdtZXRhW25hbWU9XCJYLUNTUkYtVE9LRU5cIl0nKS5hdHRyKCdjb250ZW50JywgcmVzcG9uc2UudG9rZW4pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UgJiYgdHlwZW9mIHJlc3BvbnNlID09PSAnb2JqZWN0JyAmJiByZXNwb25zZS5zdGF0dXMgJiYgcmVzcG9uc2Uuc3RhdHVzID09ICdzdWNjZXNzJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBTd2FsLmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaHRtbDogcmVzcG9uc2UubWVzc2FnZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb246IFwic3VjY2Vzc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9jb25maXJtQnV0dG9uVGV4dDogX0xBTkdfLmNsb3NlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd0NvbmZpcm1CdXR0b246IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZXI6IDE1MDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXN0b21DbGFzczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpcm1CdXR0b246IFwiYnRuIGZvbnQtd2VpZ2h0LWJvbGQgYnRuLWxpZ2h0LXByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KS50aGVuKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgS1RVdGlsLnNjcm9sbFRvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSByZXNwb25zZS5yZWRpcmVjdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgU3dhbC5maXJlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGh0bWw6IHJlc3BvbnNlLm1lc3NhZ2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uOiBcImVycm9yXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBidXR0b25zU3R5bGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogX0xBTkdfLmNsb3NlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tQ2xhc3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maXJtQnV0dG9uOiBcImJ0biBmb250LXdlaWdodC1ib2xkIGJ0bi1saWdodC1wcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSkudGhlbihmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEtUVXRpbC5zY3JvbGxUb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAub24oJ2NvcmUuZm9ybS5pbnZhbGlkJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICBTd2FsLmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiU29ycnksIGxvb2tzIGxpa2UgdGhlcmUgYXJlIHNvbWUgZXJyb3JzIGRldGVjdGVkLCBwbGVhc2UgdHJ5IGFnYWluIHR0dHR0dC5cIixcclxuICAgICAgICAgICAgICAgICAgICBpY29uOiBcImVycm9yXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiBfTEFOR18uY2xvc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgY3VzdG9tQ2xhc3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvbjogXCJidG4gZm9udC13ZWlnaHQtYm9sZCBidG4tbGlnaHQtcHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSkudGhlbihmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICBLVFV0aWwuc2Nyb2xsVG9wKCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIF9oYW5kbGVGb3JtRm9yZ290ID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdmFyIGZvcm0gPSBLVFV0aWwuZ2V0QnlJZCgna3RfbG9naW5fZm9yZ290X2Zvcm0nKTtcclxuICAgICAgICB2YXIgZm9ybVN1Ym1pdFVybCA9IEtUVXRpbC5hdHRyKGZvcm0sICdhY3Rpb24nKTtcclxuICAgICAgICB2YXIgZm9ybVN1Ym1pdEJ1dHRvbiA9IEtUVXRpbC5nZXRCeUlkKCdrdF9sb2dpbl9mb3Jnb3RfZm9ybV9zdWJtaXRfYnV0dG9uJyk7XHJcblxyXG4gICAgICAgIGlmICghZm9ybSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBGb3JtVmFsaWRhdGlvblxyXG4gICAgICAgICAgICAuZm9ybVZhbGlkYXRpb24oXHJcbiAgICAgICAgICAgICAgICBmb3JtLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmllbGRzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVtYWlsOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0b3JzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90RW1wdHk6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogX0xBTkdfLmVtYWlsX2lzX3JlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbWFpbEFkZHJlc3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogX0xBTkdfLnRoZV92YWx1ZV9pc19ub3RfYWRkcmVzc192YWxpZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgcGx1Z2luczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmlnZ2VyOiBuZXcgRm9ybVZhbGlkYXRpb24ucGx1Z2lucy5UcmlnZ2VyKCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Ym1pdEJ1dHRvbjogbmV3IEZvcm1WYWxpZGF0aW9uLnBsdWdpbnMuU3VibWl0QnV0dG9uKCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vZGVmYXVsdFN1Ym1pdDogbmV3IEZvcm1WYWxpZGF0aW9uLnBsdWdpbnMuRGVmYXVsdFN1Ym1pdCgpLCAvLyBVbmNvbW1lbnQgdGhpcyBsaW5lIHRvIGVuYWJsZSBub3JtYWwgYnV0dG9uIHN1Ym1pdCBhZnRlciBmb3JtIHZhbGlkYXRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9vdHN0cmFwOiBuZXcgRm9ybVZhbGlkYXRpb24ucGx1Z2lucy5Cb290c3RyYXAoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9cdGVsZUludmFsaWRDbGFzczogJycsIC8vIFJlcGFjZSB3aXRoIHVuY29tbWVudCB0byBoaWRlIGJvb3RzdHJhcCB2YWxpZGF0aW9uIGljb25zXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL1x0ZWxlVmFsaWRDbGFzczogJycsICAgLy8gUmVwYWNlIHdpdGggdW5jb21tZW50IHRvIGhpZGUgYm9vdHN0cmFwIHZhbGlkYXRpb24gaWNvbnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgLm9uKCdjb3JlLmZvcm0udmFsaWQnLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIC8vIFNob3cgbG9hZGluZyBzdGF0ZSBvbiBidXR0b25cclxuICAgICAgICAgICAgICAgIEtUVXRpbC5idG5XYWl0KGZvcm1TdWJtaXRCdXR0b24sIF9idXR0b25TcGlubmVyQ2xhc3NlcywgX0xBTkdfLmxvYWRpbmdfd2FpdCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gU2ltdWxhdGUgQWpheCByZXF1ZXN0XHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIEtUVXRpbC5idG5SZWxlYXNlKGZvcm1TdWJtaXRCdXR0b24pO1xyXG4gICAgICAgICAgICAgICAgfSwgMjAwMCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gRm9ybSBWYWxpZGF0aW9uICYgQWpheCBTdWJtaXNzaW9uOiBodHRwczovL2Zvcm12YWxpZGF0aW9uLmlvL2d1aWRlL2V4YW1wbGVzL3VzaW5nLWFqYXgtdG8tc3VibWl0LXRoZS1mb3JtXHJcbiAgICAgICAgICAgICAgICBGb3JtVmFsaWRhdGlvbi51dGlscy5mZXRjaChmb3JtU3VibWl0VXJsLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLydYLVJlcXVlc3RlZC1XaXRoJzogJ1hNTEh0dHBSZXF1ZXN0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ1gtQ1NSRi1UT0tFTic6ICQoJ21ldGFbbmFtZT1cIlgtQ1NSRi1UT0tFTlwiXScpLmF0dHIoJ2NvbnRlbnQnKSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVtYWlsOiBmb3JtLnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwiZW1haWxcIl0nKS52YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfSkudGhlbihmdW5jdGlvbihyZXNwb25zZSkgeyAvLyBSZXR1cm4gdmFsaWQgSlNPTlxyXG4gICAgICAgICAgICAgICAgICAgIC8vIFJlbGVhc2UgYnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgS1RVdGlsLmJ0blJlbGVhc2UoZm9ybVN1Ym1pdEJ1dHRvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnbWV0YVtuYW1lPVwiWC1DU1JGLVRPS0VOXCJdJykuYXR0cignY29udGVudCcsIHJlc3BvbnNlLnRva2VuKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlICYmIHR5cGVvZiByZXNwb25zZSA9PT0gJ29iamVjdCcgJiYgcmVzcG9uc2Uuc3RhdHVzICYmIHJlc3BvbnNlLnN0YXR1cyA9PSAnc3VjY2VzcycpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgU3dhbC5maXJlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGh0bWw6IHJlc3BvbnNlLm1lc3NhZ2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uOiBcInN1Y2Nlc3NcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbnNTdHlsaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uZmlybUJ1dHRvblRleHQ6IF9MQU5HXy5jbG9zZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dDb25maXJtQnV0dG9uOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVyOiAxNTAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tQ2xhc3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maXJtQnV0dG9uOiBcImJ0biBmb250LXdlaWdodC1ib2xkIGJ0bi1saWdodC1wcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSkudGhlbihmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEtUVXRpbC5zY3JvbGxUb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gcmVzcG9uc2UucmVkaXJlY3Q7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFN3YWwuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBodG1sOiByZXNwb25zZS5tZXNzYWdlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogXCJlcnJvclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6IF9MQU5HXy5jbG9zZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1c3RvbUNsYXNzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvbjogXCJidG4gZm9udC13ZWlnaHQtYm9sZCBidG4tbGlnaHQtcHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLnRoZW4oZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBLVFV0aWwuc2Nyb2xsVG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLm9uKCdjb3JlLmZvcm0uaW52YWxpZCcsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgU3dhbC5maXJlKHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiBfTEFOR18uc29ycnlfbG9va3NfbGlrZV9lcnJvcnNfZGV0ZWN0ZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogXCJlcnJvclwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbnNTdHlsaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogX0xBTkdfLmNsb3NlLFxyXG4gICAgICAgICAgICAgICAgICAgIGN1c3RvbUNsYXNzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpcm1CdXR0b246IFwiYnRuIGZvbnQtd2VpZ2h0LWJvbGQgYnRuLWxpZ2h0LXByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pLnRoZW4oZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgS1RVdGlsLnNjcm9sbFRvcCgpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBfaGFuZGxlRm9ybVJlc2V0Rm9yZ290ID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdmFyIGZvcm0gPSBLVFV0aWwuZ2V0QnlJZCgna3RfbG9naW5fcmVzZXRfZm9yZ290X2Zvcm0nKTtcclxuICAgICAgICB2YXIgZm9ybVN1Ym1pdFVybCA9IEtUVXRpbC5hdHRyKGZvcm0sICdhY3Rpb24nKTtcclxuICAgICAgICB2YXIgZm9ybVN1Ym1pdEJ1dHRvbiA9IEtUVXRpbC5nZXRCeUlkKCdrdF9sb2dpbl9yZXNldF9mb3Jnb3RfZm9ybV9zdWJtaXRfYnV0dG9uJyk7XHJcblxyXG4gICAgICAgIGlmICghZm9ybSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBwYXNzd29yZE1ldGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Bhc3N3b3JkTWV0ZXInKTtcclxuICAgICAgICBjb25zdCBwYXNzd29yZE1ldGVyMiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYXNzd29yZE1ldGVyMicpO1xyXG5cclxuICAgICAgICBjb25zdCByYW5kb21OdW1iZXIgPSBmdW5jdGlvbihtaW4sIG1heCkge1xyXG4gICAgICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpICsgbWluKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBGb3JtVmFsaWRhdGlvblxyXG4gICAgICAgICAgICAuZm9ybVZhbGlkYXRpb24oXHJcbiAgICAgICAgICAgICAgICBmb3JtLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmllbGRzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVtYWlsOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0b3JzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90RW1wdHk6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogX0xBTkdfLmVtYWlsX2lzX3JlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbWFpbEFkZHJlc3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogX0xBTkdfLnRoZV92YWx1ZV9pc19ub3RfYWRkcmVzc192YWxpZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFzc3dvcmQ6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRvcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3RFbXB0eToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnbGUgY2hhbXBzIGVzdCByZXF1aXMnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXNzX2NvbmZpcm06IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRvcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3RFbXB0eToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnbGUgY2hhbXBzIGVzdCByZXF1aXMnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZGVudGljYWw6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcGFyZTogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZm9ybS5xdWVyeVNlbGVjdG9yKCdbbmFtZT1cInBhc3N3b3JkXCJdJykudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdMZSBtb3QgZGUgcGFzc2UgZXQgbGEgY29uZmlybWF0aW9uIG5lIHNvbnQgcGFzIGxlcyBtw6ptZXMnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgcGx1Z2luczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmlnZ2VyOiBuZXcgRm9ybVZhbGlkYXRpb24ucGx1Z2lucy5UcmlnZ2VyKCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Ym1pdEJ1dHRvbjogbmV3IEZvcm1WYWxpZGF0aW9uLnBsdWdpbnMuU3VibWl0QnV0dG9uKCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vZGVmYXVsdFN1Ym1pdDogbmV3IEZvcm1WYWxpZGF0aW9uLnBsdWdpbnMuRGVmYXVsdFN1Ym1pdCgpLCAvLyBVbmNvbW1lbnQgdGhpcyBsaW5lIHRvIGVuYWJsZSBub3JtYWwgYnV0dG9uIHN1Ym1pdCBhZnRlciBmb3JtIHZhbGlkYXRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9vdHN0cmFwOiBuZXcgRm9ybVZhbGlkYXRpb24ucGx1Z2lucy5Cb290c3RyYXAoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9cdGVsZUludmFsaWRDbGFzczogJycsIC8vIFJlcGFjZSB3aXRoIHVuY29tbWVudCB0byBoaWRlIGJvb3RzdHJhcCB2YWxpZGF0aW9uIGljb25zXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL1x0ZWxlVmFsaWRDbGFzczogJycsICAgLy8gUmVwYWNlIHdpdGggdW5jb21tZW50IHRvIGhpZGUgYm9vdHN0cmFwIHZhbGlkYXRpb24gaWNvbnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRwYXNzd29yZFN0cmVuZ3RoOiBuZXcgRm9ybVZhbGlkYXRpb24ucGx1Z2lucy5QYXNzd29yZFN0cmVuZ3RoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkOiAncGFzc3dvcmQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ0xlIG1vdCBkZSBwYXNzZSBlc3QgdHLDqHMgZmFsYmxlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbmltYWxTY29yZTogMyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uVmFsaWRhdGVkOiBmdW5jdGlvbih2YWxpZCwgbWVzc2FnZSwgc2NvcmUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhzY29yZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cobWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChzY29yZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXNzd29yZE1ldGVyLnN0eWxlLndpZHRoID0gcmFuZG9tTnVtYmVyKDEsIDIwKSArICclJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkTWV0ZXIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNmZjQxMzYnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXNzd29yZE1ldGVyLnN0eWxlLndpZHRoID0gcmFuZG9tTnVtYmVyKDIwLCA0MCkgKyAnJSc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXNzd29yZE1ldGVyLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjZmY0MTM2JztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXNzd29yZE1ldGVyLnN0eWxlLndpZHRoID0gcmFuZG9tTnVtYmVyKDQwLCA2MCkgKyAnJSc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXNzd29yZE1ldGVyLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjZmY0MTM2JztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdib24nO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkTWV0ZXIuc3R5bGUud2lkdGggPSByYW5kb21OdW1iZXIoNjAsIDgwKSArICclJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkTWV0ZXIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNmZmI3MDAnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgNDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkTWV0ZXIuc3R5bGUud2lkdGggPSAnMTAwJSc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXNzd29yZE1ldGVyLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjMTlhOTc0JztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgIC5vbignY29yZS5mb3JtLnZhbGlkJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBTaG93IGxvYWRpbmcgc3RhdGUgb24gYnV0dG9uXHJcbiAgICAgICAgICAgICAgICBLVFV0aWwuYnRuV2FpdChmb3JtU3VibWl0QnV0dG9uLCBfYnV0dG9uU3Bpbm5lckNsYXNzZXMsIF9MQU5HXy5sb2FkaW5nX3dhaXQpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIFNpbXVsYXRlIEFqYXggcmVxdWVzdFxyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICBLVFV0aWwuYnRuUmVsZWFzZShmb3JtU3VibWl0QnV0dG9uKTtcclxuICAgICAgICAgICAgICAgIH0sIDIwMDApO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIEZvcm0gVmFsaWRhdGlvbiAmIEFqYXggU3VibWlzc2lvbjogaHR0cHM6Ly9mb3JtdmFsaWRhdGlvbi5pby9ndWlkZS9leGFtcGxlcy91c2luZy1hamF4LXRvLXN1Ym1pdC10aGUtZm9ybVxyXG4gICAgICAgICAgICAgICAgRm9ybVZhbGlkYXRpb24udXRpbHMuZmV0Y2goZm9ybVN1Ym1pdFVybCwge1xyXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8nWC1SZXF1ZXN0ZWQtV2l0aCc6ICdYTUxIdHRwUmVxdWVzdCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdYLUNTUkYtVE9LRU4nOiAkKCdtZXRhW25hbWU9XCJYLUNTUkYtVE9LRU5cIl0nKS5hdHRyKCdjb250ZW50JyksXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxyXG4gICAgICAgICAgICAgICAgICAgIHBhcmFtczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b2tlbjogZm9ybS5xdWVyeVNlbGVjdG9yKCdbbmFtZT1cInRva2VuXCJdJykudmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVtYWlsOiBmb3JtLnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwiZW1haWxcIl0nKS52YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFzc3dvcmQ6IGZvcm0ucXVlcnlTZWxlY3RvcignW25hbWU9XCJwYXNzd29yZFwiXScpLnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXNzX2NvbmZpcm06IGZvcm0ucXVlcnlTZWxlY3RvcignW25hbWU9XCJwYXNzX2NvbmZpcm1cIl0nKS52YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfSkudGhlbihmdW5jdGlvbihyZXNwb25zZSkgeyAvLyBSZXR1cm4gdmFsaWQgSlNPTlxyXG4gICAgICAgICAgICAgICAgICAgIC8vIFJlbGVhc2UgYnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgS1RVdGlsLmJ0blJlbGVhc2UoZm9ybVN1Ym1pdEJ1dHRvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnbWV0YVtuYW1lPVwiWC1DU1JGLVRPS0VOXCJdJykuYXR0cignY29udGVudCcsIHJlc3BvbnNlLnRva2VuKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlICYmIHR5cGVvZiByZXNwb25zZSA9PT0gJ29iamVjdCcgJiYgcmVzcG9uc2Uuc3RhdHVzICYmIHJlc3BvbnNlLnN0YXR1cyA9PSAnc3VjY2VzcycpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgU3dhbC5maXJlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGh0bWw6IHJlc3BvbnNlLm1lc3NhZ2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uOiBcInN1Y2Nlc3NcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbnNTdHlsaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uZmlybUJ1dHRvblRleHQ6IF9MQU5HXy5jbG9zZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dDb25maXJtQnV0dG9uOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVyOiAxNTAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tQ2xhc3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maXJtQnV0dG9uOiBcImJ0biBmb250LXdlaWdodC1ib2xkIGJ0bi1saWdodC1wcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSkudGhlbihmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEtUVXRpbC5zY3JvbGxUb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gcmVzcG9uc2UucmVkaXJlY3Q7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFN3YWwuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBfTEFOR18uc29ycnlfbG9va3NfbGlrZV9lcnJvcnNfZGV0ZWN0ZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uOiBcImVycm9yXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBidXR0b25zU3R5bGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogX0xBTkdfLmNsb3NlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tQ2xhc3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maXJtQnV0dG9uOiBcImJ0biBmb250LXdlaWdodC1ib2xkIGJ0bi1saWdodC1wcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSkudGhlbihmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEtUVXRpbC5zY3JvbGxUb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAub24oJ2NvcmUuZm9ybS5pbnZhbGlkJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICBTd2FsLmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IF9MQU5HXy5zb3JyeV9sb29rc19saWtlX2Vycm9yc19kZXRlY3RlZCxcclxuICAgICAgICAgICAgICAgICAgICBpY29uOiBcImVycm9yXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiBfTEFOR18uY2xvc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgY3VzdG9tQ2xhc3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvbjogXCJidG4gZm9udC13ZWlnaHQtYm9sZCBidG4tbGlnaHQtcHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSkudGhlbihmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICBLVFV0aWwuc2Nyb2xsVG9wKCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gdmFyIF9oYW5kbGVGb3JtU2lnbnVwID0gZnVuY3Rpb24oKSB7XHJcbiAgICAvLyAgICAgLy8gQmFzZSBlbGVtZW50c1xyXG4gICAgLy8gICAgIHZhciB3aXphcmRFbCA9IEtUVXRpbC5nZXRCeUlkKCdrdF9sb2dpbicpO1xyXG4gICAgLy8gICAgIHZhciBmb3JtID0gS1RVdGlsLmdldEJ5SWQoJ2t0X2xvZ2luX3NpZ251cF9mb3JtJyk7XHJcbiAgICAvLyAgICAgdmFyIHdpemFyZE9iajtcclxuICAgIC8vICAgICB2YXIgdmFsaWRhdGlvbnMgPSBbXTtcclxuXHJcbiAgICAvLyAgICAgaWYgKCFmb3JtKSB7XHJcbiAgICAvLyAgICAgICAgIHJldHVybjtcclxuICAgIC8vICAgICB9XHJcblxyXG4gICAgLy8gICAgIC8vIEluaXQgZm9ybSB2YWxpZGF0aW9uIHJ1bGVzLiBGb3IgbW9yZSBpbmZvIGNoZWNrIHRoZSBGb3JtVmFsaWRhdGlvbiBwbHVnaW4ncyBvZmZpY2lhbCBkb2N1bWVudGF0aW9uOmh0dHBzOi8vZm9ybXZhbGlkYXRpb24uaW8vXHJcbiAgICAvLyAgICAgLy8gU3RlcCAxXHJcbiAgICAvLyAgICAgdmFsaWRhdGlvbnMucHVzaChGb3JtVmFsaWRhdGlvbi5mb3JtVmFsaWRhdGlvbihcclxuICAgIC8vICAgICAgICAgZm9ybSwge1xyXG4gICAgLy8gICAgICAgICAgICAgZmllbGRzOiB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgZm5hbWU6IHtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdG9yczoge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgbm90RW1wdHk6IHtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnRmlyc3QgbmFtZSBpcyByZXF1aXJlZCdcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgLy8gICAgICAgICAgICAgICAgIH0sXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgbG5hbWU6IHtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdG9yczoge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgbm90RW1wdHk6IHtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnTGFzdCBOYW1lIGlzIHJlcXVpcmVkJ1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgfSxcclxuICAgIC8vICAgICAgICAgICAgICAgICBwaG9uZToge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICB2YWxpZGF0b3JzOiB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICBub3RFbXB0eToge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdQaG9uZSBpcyByZXF1aXJlZCdcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgLy8gICAgICAgICAgICAgICAgIH0sXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgZW1haWw6IHtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdG9yczoge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgbm90RW1wdHk6IHtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnRW1haWwgaXMgcmVxdWlyZWQnXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgZW1haWxBZGRyZXNzOiB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ1RoZSB2YWx1ZSBpcyBub3QgYSB2YWxpZCBlbWFpbCBhZGRyZXNzJ1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgfVxyXG4gICAgLy8gICAgICAgICAgICAgfSxcclxuICAgIC8vICAgICAgICAgICAgIHBsdWdpbnM6IHtcclxuICAgIC8vICAgICAgICAgICAgICAgICB0cmlnZ2VyOiBuZXcgRm9ybVZhbGlkYXRpb24ucGx1Z2lucy5UcmlnZ2VyKCksXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgYm9vdHN0cmFwOiBuZXcgRm9ybVZhbGlkYXRpb24ucGx1Z2lucy5Cb290c3RyYXAoKVxyXG4gICAgLy8gICAgICAgICAgICAgfVxyXG4gICAgLy8gICAgICAgICB9XHJcbiAgICAvLyAgICAgKSk7XHJcblxyXG4gICAgLy8gICAgIC8vIFN0ZXAgMlxyXG4gICAgLy8gICAgIHZhbGlkYXRpb25zLnB1c2goRm9ybVZhbGlkYXRpb24uZm9ybVZhbGlkYXRpb24oXHJcbiAgICAvLyAgICAgICAgIGZvcm0sIHtcclxuICAgIC8vICAgICAgICAgICAgIGZpZWxkczoge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIGFkZHJlc3MxOiB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRvcnM6IHtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIG5vdEVtcHR5OiB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ0FkZHJlc3MgaXMgcmVxdWlyZWQnXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgIC8vICAgICAgICAgICAgICAgICB9LFxyXG4gICAgLy8gICAgICAgICAgICAgICAgIHBvc3Rjb2RlOiB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRvcnM6IHtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIG5vdEVtcHR5OiB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ1Bvc3Rjb2RlIGlzIHJlcXVpcmVkJ1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgfSxcclxuICAgIC8vICAgICAgICAgICAgICAgICBjaXR5OiB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRvcnM6IHtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIG5vdEVtcHR5OiB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ0NpdHkgaXMgcmVxdWlyZWQnXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgIC8vICAgICAgICAgICAgICAgICB9LFxyXG4gICAgLy8gICAgICAgICAgICAgICAgIHN0YXRlOiB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRvcnM6IHtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIG5vdEVtcHR5OiB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ1N0YXRlIGlzIHJlcXVpcmVkJ1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgfSxcclxuICAgIC8vICAgICAgICAgICAgICAgICBjb3VudHJ5OiB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRvcnM6IHtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIG5vdEVtcHR5OiB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ0NvdW50cnkgaXMgcmVxdWlyZWQnXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgIC8vICAgICAgICAgICAgICAgICB9XHJcbiAgICAvLyAgICAgICAgICAgICB9LFxyXG4gICAgLy8gICAgICAgICAgICAgcGx1Z2luczoge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIHRyaWdnZXI6IG5ldyBGb3JtVmFsaWRhdGlvbi5wbHVnaW5zLlRyaWdnZXIoKSxcclxuICAgIC8vICAgICAgICAgICAgICAgICBib290c3RyYXA6IG5ldyBGb3JtVmFsaWRhdGlvbi5wbHVnaW5zLkJvb3RzdHJhcCgpXHJcbiAgICAvLyAgICAgICAgICAgICB9XHJcbiAgICAvLyAgICAgICAgIH1cclxuICAgIC8vICAgICApKTtcclxuXHJcblxyXG4gICAgLy8gICAgIC8vIEluaXRpYWxpemUgZm9ybSB3aXphcmRcclxuICAgIC8vICAgICB3aXphcmRPYmogPSBuZXcgS1RXaXphcmQod2l6YXJkRWwsIHtcclxuICAgIC8vICAgICAgICAgc3RhcnRTdGVwOiAxLCAvLyBpbml0aWFsIGFjdGl2ZSBzdGVwIG51bWJlclxyXG4gICAgLy8gICAgICAgICBjbGlja2FibGVTdGVwczogZmFsc2UgLy8gdG8gbWFrZSBzdGVwcyBjbGlja2FibGUgdGhpcyBzZXQgdmFsdWUgdHJ1ZSBhbmQgYWRkIGRhdGEtd2l6YXJkLWNsaWNrYWJsZT1cInRydWVcIiBpbiBIVE1MIGZvciBjbGFzcz1cIndpemFyZFwiIGVsZW1lbnRcclxuICAgIC8vICAgICB9KTtcclxuXHJcbiAgICAvLyAgICAgLy8gVmFsaWRhdGlvbiBiZWZvcmUgZ29pbmcgdG8gbmV4dCBwYWdlXHJcbiAgICAvLyAgICAgd2l6YXJkT2JqLm9uKCdiZWZvcmVOZXh0JywgZnVuY3Rpb24od2l6YXJkKSB7XHJcbiAgICAvLyAgICAgICAgIHZhbGlkYXRpb25zW3dpemFyZC5nZXRTdGVwKCkgLSAxXS52YWxpZGF0ZSgpLnRoZW4oZnVuY3Rpb24oc3RhdHVzKSB7XHJcbiAgICAvLyAgICAgICAgICAgICBpZiAoc3RhdHVzID09ICdWYWxpZCcpIHtcclxuICAgIC8vICAgICAgICAgICAgICAgICB3aXphcmRPYmouZ29OZXh0KCk7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgS1RVdGlsLnNjcm9sbFRvcCgpO1xyXG4gICAgLy8gICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgIC8vICAgICAgICAgICAgICAgICBTd2FsLmZpcmUoe1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcIlNvcnJ5LCBsb29rcyBsaWtlIHRoZXJlIGFyZSBzb21lIGVycm9ycyBkZXRlY3RlZCwgcGxlYXNlIHRyeSBhZ2FpbiBra2tra2suXCIsXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIGljb246IFwiZXJyb3JcIixcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlLFxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogX0xBTkdfLmNsb3NlLFxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICBjdXN0b21DbGFzczoge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvbjogXCJidG4gZm9udC13ZWlnaHQtYm9sZCBidG4tbGlnaHQtcHJpbWFyeVwiXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgIC8vICAgICAgICAgICAgICAgICB9KS50aGVuKGZ1bmN0aW9uKCkge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICBLVFV0aWwuc2Nyb2xsVG9wKCk7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAvLyAgICAgICAgICAgICB9XHJcbiAgICAvLyAgICAgICAgIH0pO1xyXG5cclxuICAgIC8vICAgICAgICAgd2l6YXJkT2JqLnN0b3AoKTsgLy8gRG9uJ3QgZ28gdG8gdGhlIG5leHQgc3RlcFxyXG4gICAgLy8gICAgIH0pO1xyXG5cclxuICAgIC8vICAgICAvLyBDaGFuZ2UgZXZlbnRcclxuICAgIC8vICAgICB3aXphcmRPYmoub24oJ2NoYW5nZScsIGZ1bmN0aW9uKHdpemFyZCkge1xyXG4gICAgLy8gICAgICAgICBLVFV0aWwuc2Nyb2xsVG9wKCk7XHJcbiAgICAvLyAgICAgfSk7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgLy8gUHVibGljIEZ1bmN0aW9uc1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBpbml0OiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgX2hhbmRsZUZvcm1TaWduaW4oKTtcclxuICAgICAgICAgICAgX2hhbmRsZUZvcm1Gb3Jnb3QoKTtcclxuICAgICAgICAgICAgX2hhbmRsZUZvcm1SZXNldEZvcmdvdCgpO1xyXG4gICAgICAgICAgICAvL19oYW5kbGVGb3JtU2lnbnVwKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufSgpO1xyXG5cclxuLy8gQ2xhc3MgSW5pdGlhbGl6YXRpb25cclxualF1ZXJ5KGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcclxuICAgIEtUTG9naW4uaW5pdCgpO1xyXG5cclxuICAgICQoJy5zaG93LXBhc3N3b3JkJykuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgaWYgKCQodGhpcykucHJldignaW5wdXQnKS5wcm9wKCd0eXBlJykgPT0gJ3Bhc3N3b3JkJykge1xyXG4gICAgICAgICAgICAvL1NpIGMnZXN0IHVuIGlucHV0IHR5cGUgcGFzc3dvcmRcclxuICAgICAgICAgICAgJCh0aGlzKS5wcmV2KCdpbnB1dCcpLnByb3AoJ3R5cGUnLCAndGV4dCcpO1xyXG4gICAgICAgICAgICAkKHRoaXMpLmh0bWwoJzxpIGNsYXNzPVwiZmFyIGZhLWV5ZS1zbGFzaFwiPjwvaT4nKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvL1Npbm9uXHJcbiAgICAgICAgICAgICQodGhpcykucHJldignaW5wdXQnKS5wcm9wKCd0eXBlJywgJ3Bhc3N3b3JkJyk7XHJcbiAgICAgICAgICAgICQodGhpcykuaHRtbCgnPGkgY2xhc3M9XCJmYXIgZmEtZXllXCI+PC9pPicpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxufSk7Il0sInNvdXJjZVJvb3QiOiIifQ==