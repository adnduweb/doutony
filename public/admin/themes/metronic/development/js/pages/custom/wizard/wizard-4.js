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
/******/ 	return __webpack_require__(__webpack_require__.s = 59);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/metronic/js/pages/custom/wizard/wizard-4.js":
/*!***************************************************************!*\
  !*** ./resources/metronic/js/pages/custom/wizard/wizard-4.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // Class definition

var KTWizard4 = function () {
  // Base elements
  var _wizardEl;

  var _formEl;

  var _wizard;

  var _validations = []; // Private functions

  var initWizard = function initWizard() {
    // Initialize form wizard
    _wizard = new KTWizard(_wizardEl, {
      startStep: 1,
      // initial active step number
      clickableSteps: true // allow step clicking

    }); // Validation before going to next page

    _wizard.on('beforeNext', function (wizard) {
      // Don't go to the next step yet
      _wizard.stop(); // Validate form


      var validator = _validations[wizard.getStep() - 1]; // get validator for currnt step


      validator.validate().then(function (status) {
        if (status == 'Valid') {
          _wizard.goNext();

          KTUtil.scrollTop();
        } else {
          Swal.fire({
            text: "Sorry, looks like there are some errors detected, please try again.",
            icon: "error",
            buttonsStyling: false,
            confirmButtonText: "Ok, got it!",
            customClass: {
              confirmButton: "btn font-weight-bold btn-light"
            }
          }).then(function () {
            KTUtil.scrollTop();
          });
        }
      });
    }); // Change event


    _wizard.on('change', function (wizard) {
      KTUtil.scrollTop();
    });
  };

  var initValidation = function initValidation() {
    // Init form validation rules. For more info check the FormValidation plugin's official documentation:https://formvalidation.io/
    // Step 1
    _validations.push(FormValidation.formValidation(_formEl, {
      fields: {
        fname: {
          validators: {
            notEmpty: {
              message: 'First name is required'
            }
          }
        },
        lname: {
          validators: {
            notEmpty: {
              message: 'Last Name is required'
            }
          }
        },
        phone: {
          validators: {
            notEmpty: {
              message: 'Phone is required'
            }
          }
        },
        email: {
          validators: {
            notEmpty: {
              message: 'Email is required'
            },
            emailAddress: {
              message: 'The value is not a valid email address'
            }
          }
        }
      },
      plugins: {
        trigger: new FormValidation.plugins.Trigger(),
        bootstrap: new FormValidation.plugins.Bootstrap()
      }
    })); // Step 2


    _validations.push(FormValidation.formValidation(_formEl, {
      fields: {
        address1: {
          validators: {
            notEmpty: {
              message: 'Address is required'
            }
          }
        },
        postcode: {
          validators: {
            notEmpty: {
              message: 'Postcode is required'
            }
          }
        },
        city: {
          validators: {
            notEmpty: {
              message: 'City is required'
            }
          }
        },
        state: {
          validators: {
            notEmpty: {
              message: 'State is required'
            }
          }
        },
        country: {
          validators: {
            notEmpty: {
              message: 'Country is required'
            }
          }
        }
      },
      plugins: {
        trigger: new FormValidation.plugins.Trigger(),
        bootstrap: new FormValidation.plugins.Bootstrap()
      }
    })); // Step 3


    _validations.push(FormValidation.formValidation(_formEl, {
      fields: {
        ccname: {
          validators: {
            notEmpty: {
              message: 'Credit card name is required'
            }
          }
        },
        ccnumber: {
          validators: {
            notEmpty: {
              message: 'Credit card number is required'
            },
            creditCard: {
              message: 'The credit card number is not valid'
            }
          }
        },
        ccmonth: {
          validators: {
            notEmpty: {
              message: 'Credit card month is required'
            }
          }
        },
        ccyear: {
          validators: {
            notEmpty: {
              message: 'Credit card year is required'
            }
          }
        },
        cccvv: {
          validators: {
            notEmpty: {
              message: 'Credit card CVV is required'
            },
            digits: {
              message: 'The CVV value is not valid. Only numbers is allowed'
            }
          }
        }
      },
      plugins: {
        trigger: new FormValidation.plugins.Trigger(),
        bootstrap: new FormValidation.plugins.Bootstrap()
      }
    }));
  };

  return {
    // public functions
    init: function init() {
      _wizardEl = KTUtil.getById('kt_wizard_v4');
      _formEl = KTUtil.getById('kt_form');
      initWizard();
      initValidation();
    }
  };
}();

jQuery(document).ready(function () {
  KTWizard4.init();
});

/***/ }),

/***/ 59:
/*!*********************************************************************!*\
  !*** multi ./resources/metronic/js/pages/custom/wizard/wizard-4.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Applications/MAMP/htdocs/spreadci4/public/admin/themes/metronic/resources/metronic/js/pages/custom/wizard/wizard-4.js */"./resources/metronic/js/pages/custom/wizard/wizard-4.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL21ldHJvbmljL2pzL3BhZ2VzL2N1c3RvbS93aXphcmQvd2l6YXJkLTQuanMiXSwibmFtZXMiOlsiS1RXaXphcmQ0IiwiX3dpemFyZEVsIiwiX2Zvcm1FbCIsIl93aXphcmQiLCJfdmFsaWRhdGlvbnMiLCJpbml0V2l6YXJkIiwiS1RXaXphcmQiLCJzdGFydFN0ZXAiLCJjbGlja2FibGVTdGVwcyIsIm9uIiwid2l6YXJkIiwic3RvcCIsInZhbGlkYXRvciIsImdldFN0ZXAiLCJ2YWxpZGF0ZSIsInRoZW4iLCJzdGF0dXMiLCJnb05leHQiLCJLVFV0aWwiLCJzY3JvbGxUb3AiLCJTd2FsIiwiZmlyZSIsInRleHQiLCJpY29uIiwiYnV0dG9uc1N0eWxpbmciLCJjb25maXJtQnV0dG9uVGV4dCIsImN1c3RvbUNsYXNzIiwiY29uZmlybUJ1dHRvbiIsImluaXRWYWxpZGF0aW9uIiwicHVzaCIsIkZvcm1WYWxpZGF0aW9uIiwiZm9ybVZhbGlkYXRpb24iLCJmaWVsZHMiLCJmbmFtZSIsInZhbGlkYXRvcnMiLCJub3RFbXB0eSIsIm1lc3NhZ2UiLCJsbmFtZSIsInBob25lIiwiZW1haWwiLCJlbWFpbEFkZHJlc3MiLCJwbHVnaW5zIiwidHJpZ2dlciIsIlRyaWdnZXIiLCJib290c3RyYXAiLCJCb290c3RyYXAiLCJhZGRyZXNzMSIsInBvc3Rjb2RlIiwiY2l0eSIsInN0YXRlIiwiY291bnRyeSIsImNjbmFtZSIsImNjbnVtYmVyIiwiY3JlZGl0Q2FyZCIsImNjbW9udGgiLCJjY3llYXIiLCJjY2N2diIsImRpZ2l0cyIsImluaXQiLCJnZXRCeUlkIiwialF1ZXJ5IiwiZG9jdW1lbnQiLCJyZWFkeSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNB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SkEsU0FBTztBQUNOO0FBQ0FhLFFBQUksRUFBRSxnQkFBWTtBQUNqQnpELGVBQVMsR0FBR2lCLE1BQU0sQ0FBQ3lDLE9BQVAsQ0FBZSxjQUFmLENBQVo7QUFDQXpELGFBQU8sR0FBR2dCLE1BQU0sQ0FBQ3lDLE9BQVAsQ0FBZSxTQUFmLENBQVY7QUFFQXRELGdCQUFVO0FBQ1Z1QixvQkFBYztBQUNkO0FBUkssR0FBUDtBQVVBLENBL01lLEVBQWhCOztBQWlOQWdDLE1BQU0sQ0FBQ0MsUUFBRCxDQUFOLENBQWlCQyxLQUFqQixDQUF1QixZQUFZO0FBQ2xDOUQsV0FBUyxDQUFDMEQsSUFBVjtBQUNBLENBRkQsRSIsImZpbGUiOiIvZGV2ZWxvcG1lbnQvanMvcGFnZXMvY3VzdG9tL3dpemFyZC93aXphcmQtNC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNTkpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4vLyBDbGFzcyBkZWZpbml0aW9uXHJcbnZhciBLVFdpemFyZDQgPSBmdW5jdGlvbiAoKSB7XHJcblx0Ly8gQmFzZSBlbGVtZW50c1xyXG5cdHZhciBfd2l6YXJkRWw7XHJcblx0dmFyIF9mb3JtRWw7XHJcblx0dmFyIF93aXphcmQ7XHJcblx0dmFyIF92YWxpZGF0aW9ucyA9IFtdO1xyXG5cclxuXHQvLyBQcml2YXRlIGZ1bmN0aW9uc1xyXG5cdHZhciBpbml0V2l6YXJkID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0Ly8gSW5pdGlhbGl6ZSBmb3JtIHdpemFyZFxyXG5cdFx0X3dpemFyZCA9IG5ldyBLVFdpemFyZChfd2l6YXJkRWwsIHtcclxuXHRcdFx0c3RhcnRTdGVwOiAxLCAvLyBpbml0aWFsIGFjdGl2ZSBzdGVwIG51bWJlclxyXG5cdFx0XHRjbGlja2FibGVTdGVwczogdHJ1ZSAgLy8gYWxsb3cgc3RlcCBjbGlja2luZ1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0Ly8gVmFsaWRhdGlvbiBiZWZvcmUgZ29pbmcgdG8gbmV4dCBwYWdlXHJcblx0XHRfd2l6YXJkLm9uKCdiZWZvcmVOZXh0JywgZnVuY3Rpb24gKHdpemFyZCkge1xyXG5cdFx0XHQvLyBEb24ndCBnbyB0byB0aGUgbmV4dCBzdGVwIHlldFxyXG5cdFx0XHRfd2l6YXJkLnN0b3AoKTtcclxuXHJcblx0XHRcdC8vIFZhbGlkYXRlIGZvcm1cclxuXHRcdFx0dmFyIHZhbGlkYXRvciA9IF92YWxpZGF0aW9uc1t3aXphcmQuZ2V0U3RlcCgpIC0gMV07IC8vIGdldCB2YWxpZGF0b3IgZm9yIGN1cnJudCBzdGVwXHJcblx0XHRcdHZhbGlkYXRvci52YWxpZGF0ZSgpLnRoZW4oZnVuY3Rpb24gKHN0YXR1cykge1xyXG5cdFx0XHRcdGlmIChzdGF0dXMgPT0gJ1ZhbGlkJykge1xyXG5cdFx0XHRcdFx0X3dpemFyZC5nb05leHQoKTtcclxuXHRcdFx0XHRcdEtUVXRpbC5zY3JvbGxUb3AoKTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0U3dhbC5maXJlKHtcclxuXHRcdFx0XHRcdFx0dGV4dDogXCJTb3JyeSwgbG9va3MgbGlrZSB0aGVyZSBhcmUgc29tZSBlcnJvcnMgZGV0ZWN0ZWQsIHBsZWFzZSB0cnkgYWdhaW4uXCIsXHJcblx0XHRcdFx0XHRcdGljb246IFwiZXJyb3JcIixcclxuXHRcdFx0XHRcdFx0YnV0dG9uc1N0eWxpbmc6IGZhbHNlLFxyXG5cdFx0XHRcdFx0XHRjb25maXJtQnV0dG9uVGV4dDogXCJPaywgZ290IGl0IVwiLFxyXG5cdFx0XHRcdFx0XHRjdXN0b21DbGFzczoge1xyXG5cdFx0XHRcdFx0XHRcdGNvbmZpcm1CdXR0b246IFwiYnRuIGZvbnQtd2VpZ2h0LWJvbGQgYnRuLWxpZ2h0XCJcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSkudGhlbihmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0XHRcdEtUVXRpbC5zY3JvbGxUb3AoKTtcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHJcblx0XHQvLyBDaGFuZ2UgZXZlbnRcclxuXHRcdF93aXphcmQub24oJ2NoYW5nZScsIGZ1bmN0aW9uICh3aXphcmQpIHtcclxuXHRcdFx0S1RVdGlsLnNjcm9sbFRvcCgpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHR2YXIgaW5pdFZhbGlkYXRpb24gPSBmdW5jdGlvbiAoKSB7XHJcblx0XHQvLyBJbml0IGZvcm0gdmFsaWRhdGlvbiBydWxlcy4gRm9yIG1vcmUgaW5mbyBjaGVjayB0aGUgRm9ybVZhbGlkYXRpb24gcGx1Z2luJ3Mgb2ZmaWNpYWwgZG9jdW1lbnRhdGlvbjpodHRwczovL2Zvcm12YWxpZGF0aW9uLmlvL1xyXG5cdFx0Ly8gU3RlcCAxXHJcblx0XHRfdmFsaWRhdGlvbnMucHVzaChGb3JtVmFsaWRhdGlvbi5mb3JtVmFsaWRhdGlvbihcclxuXHRcdFx0X2Zvcm1FbCxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGZpZWxkczoge1xyXG5cdFx0XHRcdFx0Zm5hbWU6IHtcclxuXHRcdFx0XHRcdFx0dmFsaWRhdG9yczoge1xyXG5cdFx0XHRcdFx0XHRcdG5vdEVtcHR5OiB7XHJcblx0XHRcdFx0XHRcdFx0XHRtZXNzYWdlOiAnRmlyc3QgbmFtZSBpcyByZXF1aXJlZCdcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRsbmFtZToge1xyXG5cdFx0XHRcdFx0XHR2YWxpZGF0b3JzOiB7XHJcblx0XHRcdFx0XHRcdFx0bm90RW1wdHk6IHtcclxuXHRcdFx0XHRcdFx0XHRcdG1lc3NhZ2U6ICdMYXN0IE5hbWUgaXMgcmVxdWlyZWQnXHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0cGhvbmU6IHtcclxuXHRcdFx0XHRcdFx0dmFsaWRhdG9yczoge1xyXG5cdFx0XHRcdFx0XHRcdG5vdEVtcHR5OiB7XHJcblx0XHRcdFx0XHRcdFx0XHRtZXNzYWdlOiAnUGhvbmUgaXMgcmVxdWlyZWQnXHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0ZW1haWw6IHtcclxuXHRcdFx0XHRcdFx0dmFsaWRhdG9yczoge1xyXG5cdFx0XHRcdFx0XHRcdG5vdEVtcHR5OiB7XHJcblx0XHRcdFx0XHRcdFx0XHRtZXNzYWdlOiAnRW1haWwgaXMgcmVxdWlyZWQnXHJcblx0XHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0XHRlbWFpbEFkZHJlc3M6IHtcclxuXHRcdFx0XHRcdFx0XHRcdG1lc3NhZ2U6ICdUaGUgdmFsdWUgaXMgbm90IGEgdmFsaWQgZW1haWwgYWRkcmVzcydcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHBsdWdpbnM6IHtcclxuXHRcdFx0XHRcdHRyaWdnZXI6IG5ldyBGb3JtVmFsaWRhdGlvbi5wbHVnaW5zLlRyaWdnZXIoKSxcclxuXHRcdFx0XHRcdGJvb3RzdHJhcDogbmV3IEZvcm1WYWxpZGF0aW9uLnBsdWdpbnMuQm9vdHN0cmFwKClcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdCkpO1xyXG5cclxuXHRcdC8vIFN0ZXAgMlxyXG5cdFx0X3ZhbGlkYXRpb25zLnB1c2goRm9ybVZhbGlkYXRpb24uZm9ybVZhbGlkYXRpb24oXHJcblx0XHRcdF9mb3JtRWwsXHJcblx0XHRcdHtcclxuXHRcdFx0XHRmaWVsZHM6IHtcclxuXHRcdFx0XHRcdGFkZHJlc3MxOiB7XHJcblx0XHRcdFx0XHRcdHZhbGlkYXRvcnM6IHtcclxuXHRcdFx0XHRcdFx0XHRub3RFbXB0eToge1xyXG5cdFx0XHRcdFx0XHRcdFx0bWVzc2FnZTogJ0FkZHJlc3MgaXMgcmVxdWlyZWQnXHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0cG9zdGNvZGU6IHtcclxuXHRcdFx0XHRcdFx0dmFsaWRhdG9yczoge1xyXG5cdFx0XHRcdFx0XHRcdG5vdEVtcHR5OiB7XHJcblx0XHRcdFx0XHRcdFx0XHRtZXNzYWdlOiAnUG9zdGNvZGUgaXMgcmVxdWlyZWQnXHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0Y2l0eToge1xyXG5cdFx0XHRcdFx0XHR2YWxpZGF0b3JzOiB7XHJcblx0XHRcdFx0XHRcdFx0bm90RW1wdHk6IHtcclxuXHRcdFx0XHRcdFx0XHRcdG1lc3NhZ2U6ICdDaXR5IGlzIHJlcXVpcmVkJ1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHN0YXRlOiB7XHJcblx0XHRcdFx0XHRcdHZhbGlkYXRvcnM6IHtcclxuXHRcdFx0XHRcdFx0XHRub3RFbXB0eToge1xyXG5cdFx0XHRcdFx0XHRcdFx0bWVzc2FnZTogJ1N0YXRlIGlzIHJlcXVpcmVkJ1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdGNvdW50cnk6IHtcclxuXHRcdFx0XHRcdFx0dmFsaWRhdG9yczoge1xyXG5cdFx0XHRcdFx0XHRcdG5vdEVtcHR5OiB7XHJcblx0XHRcdFx0XHRcdFx0XHRtZXNzYWdlOiAnQ291bnRyeSBpcyByZXF1aXJlZCdcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHBsdWdpbnM6IHtcclxuXHRcdFx0XHRcdHRyaWdnZXI6IG5ldyBGb3JtVmFsaWRhdGlvbi5wbHVnaW5zLlRyaWdnZXIoKSxcclxuXHRcdFx0XHRcdGJvb3RzdHJhcDogbmV3IEZvcm1WYWxpZGF0aW9uLnBsdWdpbnMuQm9vdHN0cmFwKClcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdCkpO1xyXG5cclxuXHRcdC8vIFN0ZXAgM1xyXG5cdFx0X3ZhbGlkYXRpb25zLnB1c2goRm9ybVZhbGlkYXRpb24uZm9ybVZhbGlkYXRpb24oXHJcblx0XHRcdF9mb3JtRWwsXHJcblx0XHRcdHtcclxuXHRcdFx0XHRmaWVsZHM6IHtcclxuXHRcdFx0XHRcdGNjbmFtZToge1xyXG5cdFx0XHRcdFx0XHR2YWxpZGF0b3JzOiB7XHJcblx0XHRcdFx0XHRcdFx0bm90RW1wdHk6IHtcclxuXHRcdFx0XHRcdFx0XHRcdG1lc3NhZ2U6ICdDcmVkaXQgY2FyZCBuYW1lIGlzIHJlcXVpcmVkJ1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdGNjbnVtYmVyOiB7XHJcblx0XHRcdFx0XHRcdHZhbGlkYXRvcnM6IHtcclxuXHRcdFx0XHRcdFx0XHRub3RFbXB0eToge1xyXG5cdFx0XHRcdFx0XHRcdFx0bWVzc2FnZTogJ0NyZWRpdCBjYXJkIG51bWJlciBpcyByZXF1aXJlZCdcclxuXHRcdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHRcdGNyZWRpdENhcmQ6IHtcclxuXHRcdFx0XHRcdFx0XHRcdG1lc3NhZ2U6ICdUaGUgY3JlZGl0IGNhcmQgbnVtYmVyIGlzIG5vdCB2YWxpZCdcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRjY21vbnRoOiB7XHJcblx0XHRcdFx0XHRcdHZhbGlkYXRvcnM6IHtcclxuXHRcdFx0XHRcdFx0XHRub3RFbXB0eToge1xyXG5cdFx0XHRcdFx0XHRcdFx0bWVzc2FnZTogJ0NyZWRpdCBjYXJkIG1vbnRoIGlzIHJlcXVpcmVkJ1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdGNjeWVhcjoge1xyXG5cdFx0XHRcdFx0XHR2YWxpZGF0b3JzOiB7XHJcblx0XHRcdFx0XHRcdFx0bm90RW1wdHk6IHtcclxuXHRcdFx0XHRcdFx0XHRcdG1lc3NhZ2U6ICdDcmVkaXQgY2FyZCB5ZWFyIGlzIHJlcXVpcmVkJ1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdGNjY3Z2OiB7XHJcblx0XHRcdFx0XHRcdHZhbGlkYXRvcnM6IHtcclxuXHRcdFx0XHRcdFx0XHRub3RFbXB0eToge1xyXG5cdFx0XHRcdFx0XHRcdFx0bWVzc2FnZTogJ0NyZWRpdCBjYXJkIENWViBpcyByZXF1aXJlZCdcclxuXHRcdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHRcdGRpZ2l0czoge1xyXG5cdFx0XHRcdFx0XHRcdFx0bWVzc2FnZTogJ1RoZSBDVlYgdmFsdWUgaXMgbm90IHZhbGlkLiBPbmx5IG51bWJlcnMgaXMgYWxsb3dlZCdcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHBsdWdpbnM6IHtcclxuXHRcdFx0XHRcdHRyaWdnZXI6IG5ldyBGb3JtVmFsaWRhdGlvbi5wbHVnaW5zLlRyaWdnZXIoKSxcclxuXHRcdFx0XHRcdGJvb3RzdHJhcDogbmV3IEZvcm1WYWxpZGF0aW9uLnBsdWdpbnMuQm9vdHN0cmFwKClcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdCkpO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIHtcclxuXHRcdC8vIHB1YmxpYyBmdW5jdGlvbnNcclxuXHRcdGluaXQ6IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0X3dpemFyZEVsID0gS1RVdGlsLmdldEJ5SWQoJ2t0X3dpemFyZF92NCcpO1xyXG5cdFx0XHRfZm9ybUVsID0gS1RVdGlsLmdldEJ5SWQoJ2t0X2Zvcm0nKTtcclxuXHJcblx0XHRcdGluaXRXaXphcmQoKTtcclxuXHRcdFx0aW5pdFZhbGlkYXRpb24oKTtcclxuXHRcdH1cclxuXHR9O1xyXG59KCk7XHJcblxyXG5qUXVlcnkoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuXHRLVFdpemFyZDQuaW5pdCgpO1xyXG59KTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==