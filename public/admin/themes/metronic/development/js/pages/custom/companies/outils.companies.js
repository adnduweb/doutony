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
/******/ 	return __webpack_require__(__webpack_require__.s = 22);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/metronic/js/pages/custom/companies/outils.companies.js":
/*!**************************************************************************!*\
  !*** ./resources/metronic/js/pages/custom/companies/outils.companies.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var form = document.querySelector("#kt_apps_companies_forms");
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

/***/ 22:
/*!********************************************************************************!*\
  !*** multi ./resources/metronic/js/pages/custom/companies/outils.companies.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Applications/MAMP/htdocs/spreadci4/public/admin/themes/metronic/resources/metronic/js/pages/custom/companies/outils.companies.js */"./resources/metronic/js/pages/custom/companies/outils.companies.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL21ldHJvbmljL2pzL3BhZ2VzL2N1c3RvbS9jb21wYW5pZXMvb3V0aWxzLmNvbXBhbmllcy5qcyJdLCJuYW1lcyI6WyJmb3JtIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiaW5wdXRfcGhvbmUiLCJlcnJvck1zZ1Bob25lRml4ZSIsImVycm9yTWFwIiwiaXRpX3Bob25lRml4ZSIsImludGxUZWxJbnB1dCIsImluaXRpYWxDb3VudHJ5IiwiYWxsb3dEcm9wZG93biIsImdlb0lwTG9va3VwIiwiY2FsbGJhY2siLCIkIiwiZ2V0IiwiYWx3YXlzIiwicmVzcCIsImNvdW50cnlDb2RlIiwiY291bnRyeSIsImhpZGRlbklucHV0IiwidXRpbHNTY3JpcHQiLCJ1dGlscyIsInJlc2V0UGhvbmVGaXhlIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiaW5uZXJIVE1MIiwiYWRkIiwiYWRkRXZlbnRMaXN0ZW5lciIsInZhbHVlIiwidHJpbSIsImlzVmFsaWROdW1iZXIiLCJlcnJvckNvZGUiLCJnZXRWYWxpZGF0aW9uRXJyb3IiLCJlIiwiY291bnRyeURhdGEiLCJjdXJyZW50TWFzayIsImF0dHIiLCJyZXBsYWNlIiwiaW5wdXRtYXNrIiwibWFzayIsImtlZXBTdGF0aWMiLCJpbnB1dF9waG9uZV9tb2JpbGUiLCJlcnJvck1zZ1Bob25lTW9iaWxlIiwiaXRpX3Bob25lTW9iaWxlIiwicmVzZXRQaG9uZU1vYmlsZSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FB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Q2lCLGdCQUE5QztBQUNBSCxrQkFBa0IsQ0FBQ2QsZ0JBQW5CLENBQW9DLE9BQXBDLEVBQTZDaUIsZ0JBQTdDLEUiLCJmaWxlIjoiL2RldmVsb3BtZW50L2pzL3BhZ2VzL2N1c3RvbS9jb21wYW5pZXMvb3V0aWxzLmNvbXBhbmllcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMjIpO1xuIiwidmFyIGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2t0X2FwcHNfY29tcGFuaWVzX2Zvcm1zXCIpO1xudmFyIGlucHV0X3Bob25lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwaG9uZVwiKSxcbiAgICBlcnJvck1zZ1Bob25lRml4ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW52YWxpZC1mZWVkYmFjay1waG9uZVwiKTtcbi8vaW50bFRlbElucHV0KGlucHV0X21vYmlsZSk7XG5cbi8vIGhlcmUsIHRoZSBpbmRleCBtYXBzIHRvIHRoZSBlcnJvciBjb2RlIHJldHVybmVkIGZyb20gZ2V0VmFsaWRhdGlvbkVycm9yIC0gc2VlIHJlYWRtZVxudmFyIGVycm9yTWFwID0gW1wiSW52YWxpZCBudW1iZXJcIiwgXCJJbnZhbGlkIGNvdW50cnkgY29kZVwiLCBcIlRvbyBzaG9ydFwiLCBcIlRvbyBsb25nXCIsIFwiSW52YWxpZCBudW1iZXJcIl07XG5cbi8vIGluaXRpYWxpc2UgcGx1Z2luXG52YXIgaXRpX3Bob25lRml4ZSA9IGludGxUZWxJbnB1dChpbnB1dF9waG9uZSwge1xuICAgIGluaXRpYWxDb3VudHJ5OiBcImF1dG9cIixcbiAgICBhbGxvd0Ryb3Bkb3duOiB0cnVlLFxuICAgIGdlb0lwTG9va3VwOiBmdW5jdGlvbihjYWxsYmFjaykge1xuICAgICAgICAkLmdldCgnaHR0cHM6Ly9pcGluZm8uaW8nLCBmdW5jdGlvbigpIHt9LCBcImpzb25wXCIpLmFsd2F5cyhmdW5jdGlvbihyZXNwKSB7XG4gICAgICAgICAgICB2YXIgY291bnRyeUNvZGUgPSAocmVzcCAmJiByZXNwLmNvdW50cnkpID8gcmVzcC5jb3VudHJ5IDogXCJcIjtcbiAgICAgICAgICAgIGNhbGxiYWNrKGNvdW50cnlDb2RlKTtcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICBoaWRkZW5JbnB1dDogXCJmdWxsX3Bob25lXCIsXG4gICAgdXRpbHNTY3JpcHQ6IHV0aWxzXG59KTtcblxudmFyIHJlc2V0UGhvbmVGaXhlID0gZnVuY3Rpb24oKSB7XG4gICAgaW5wdXRfcGhvbmUuY2xhc3NMaXN0LnJlbW92ZShcImVycm9yXCIpO1xuICAgIGVycm9yTXNnUGhvbmVGaXhlLmlubmVySFRNTCA9IFwiXCI7XG4gICAgZXJyb3JNc2dQaG9uZUZpeGUuY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XG4gICAgLy92YWxpZE1zZy5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcbn07XG5cbi8vIG9uIGJsdXI6IHZhbGlkYXRlXG5pbnB1dF9waG9uZS5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgZnVuY3Rpb24oKSB7XG4gICAgcmVzZXRQaG9uZUZpeGUoKTtcbiAgICBpZiAoaW5wdXRfcGhvbmUudmFsdWUudHJpbSgpKSB7XG4gICAgICAgIGlmICghaXRpX3Bob25lRml4ZS5pc1ZhbGlkTnVtYmVyKCkpIHtcbiAgICAgICAgICAgIGlucHV0X3Bob25lLmNsYXNzTGlzdC5hZGQoXCJlcnJvclwiKTtcbiAgICAgICAgICAgIHZhciBlcnJvckNvZGUgPSBpdGlfcGhvbmVGaXhlLmdldFZhbGlkYXRpb25FcnJvcigpO1xuICAgICAgICAgICAgZXJyb3JNc2dQaG9uZUZpeGUuaW5uZXJIVE1MID0gZXJyb3JNYXBbZXJyb3JDb2RlXTtcbiAgICAgICAgICAgIGVycm9yTXNnUGhvbmVGaXhlLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xuICAgICAgICB9XG4gICAgfVxufSk7XG5pbnB1dF9waG9uZS5hZGRFdmVudExpc3RlbmVyKFwiY291bnRyeWNoYW5nZVwiLCBmdW5jdGlvbihlLCBjb3VudHJ5RGF0YSkge1xuICAgIC8vdmFyIGN1cnJlbnRNYXNrID0gZS5jdXJyZW50VGFyZ2V0LnBsYWNlaG9sZGVyO1xuICAgIHZhciBjdXJyZW50TWFzayA9ICQodGhpcykuYXR0cigncGxhY2Vob2xkZXInKS5yZXBsYWNlKC9bMC05K10vaWcsICc5Jyk7XG4gICAgJCh0aGlzKS5hdHRyKCdwbGFjZWhvbGRlcicsIGN1cnJlbnRNYXNrKTtcblxuICAgICQoaW5wdXRfcGhvbmUpLmlucHV0bWFzayh7IG1hc2s6IGN1cnJlbnRNYXNrLCBrZWVwU3RhdGljOiB0cnVlIH0pO1xufSk7XG5pbnB1dF9waG9uZS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCByZXNldFBob25lRml4ZSk7XG5pbnB1dF9waG9uZS5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIHJlc2V0UGhvbmVGaXhlKTtcblxudmFyIGlucHV0X3Bob25lX21vYmlsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcGhvbmVfbW9iaWxlXCIpLFxuICAgIGVycm9yTXNnUGhvbmVNb2JpbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmludmFsaWQtZmVlZGJhY2stcGhvbmVfbW9iaWxlXCIpO1xuXG5cblxuXG4vLyBpbml0aWFsaXNlIHBsdWdpblxudmFyIGl0aV9waG9uZU1vYmlsZSA9IGludGxUZWxJbnB1dChpbnB1dF9waG9uZV9tb2JpbGUsIHtcbiAgICBpbml0aWFsQ291bnRyeTogXCJhdXRvXCIsXG4gICAgZ2VvSXBMb29rdXA6IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gICAgICAgICQuZ2V0KCdodHRwczovL2lwaW5mby5pbycsIGZ1bmN0aW9uKCkge30sIFwianNvbnBcIikuYWx3YXlzKGZ1bmN0aW9uKHJlc3ApIHtcbiAgICAgICAgICAgIHZhciBjb3VudHJ5Q29kZSA9IChyZXNwICYmIHJlc3AuY291bnRyeSkgPyByZXNwLmNvdW50cnkgOiBcIlwiO1xuICAgICAgICAgICAgY2FsbGJhY2soY291bnRyeUNvZGUpO1xuICAgICAgICB9KTtcbiAgICB9LFxuICAgIGhpZGRlbklucHV0OiBcImZ1bGxfcGhvbmVfbW9iaWxlXCIsXG4gICAgdXRpbHNTY3JpcHQ6IHV0aWxzXG59KTtcblxudmFyIHJlc2V0UGhvbmVNb2JpbGUgPSBmdW5jdGlvbigpIHtcbiAgICBpbnB1dF9waG9uZV9tb2JpbGUuY2xhc3NMaXN0LnJlbW92ZShcImVycm9yXCIpO1xuICAgIGVycm9yTXNnUGhvbmVNb2JpbGUuaW5uZXJIVE1MID0gXCJcIjtcbiAgICBlcnJvck1zZ1Bob25lTW9iaWxlLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xuICAgIC8vdmFsaWRNc2cuY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XG59O1xuXG4vLyBvbiBibHVyOiB2YWxpZGF0ZVxuaW5wdXRfcGhvbmVfbW9iaWxlLmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCBmdW5jdGlvbigpIHtcbiAgICByZXNldFBob25lTW9iaWxlKCk7XG4gICAgaWYgKGlucHV0X3Bob25lX21vYmlsZS52YWx1ZS50cmltKCkpIHtcbiAgICAgICAgaWYgKCFpdGlfcGhvbmVNb2JpbGUuaXNWYWxpZE51bWJlcigpKSB7XG4gICAgICAgICAgICBpbnB1dF9waG9uZV9tb2JpbGUuY2xhc3NMaXN0LmFkZChcImVycm9yXCIpO1xuICAgICAgICAgICAgdmFyIGVycm9yQ29kZSA9IGl0aV9waG9uZU1vYmlsZS5nZXRWYWxpZGF0aW9uRXJyb3IoKTtcbiAgICAgICAgICAgIGVycm9yTXNnUGhvbmVNb2JpbGUuaW5uZXJIVE1MID0gZXJyb3JNYXBbZXJyb3JDb2RlXTtcbiAgICAgICAgICAgIGVycm9yTXNnUGhvbmVNb2JpbGUuY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XG4gICAgICAgIH1cbiAgICB9XG59KTtcbmlucHV0X3Bob25lX21vYmlsZS5hZGRFdmVudExpc3RlbmVyKFwiY291bnRyeWNoYW5nZVwiLCBmdW5jdGlvbihlLCBjb3VudHJ5RGF0YSkge1xuICAgIC8vdmFyIGN1cnJlbnRNYXNrID0gZS5jdXJyZW50VGFyZ2V0LnBsYWNlaG9sZGVyO1xuICAgIHZhciBjdXJyZW50TWFzayA9ICQodGhpcykuYXR0cigncGxhY2Vob2xkZXInKS5yZXBsYWNlKC9bMC05K10vaWcsICc5Jyk7XG4gICAgJCh0aGlzKS5hdHRyKCdwbGFjZWhvbGRlcicsIGN1cnJlbnRNYXNrKTtcblxuICAgICQoaW5wdXRfcGhvbmVfbW9iaWxlKS5pbnB1dG1hc2soeyBtYXNrOiBjdXJyZW50TWFzaywga2VlcFN0YXRpYzogdHJ1ZSB9KTtcbn0pO1xuaW5wdXRfcGhvbmVfbW9iaWxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHJlc2V0UGhvbmVNb2JpbGUpO1xuaW5wdXRfcGhvbmVfbW9iaWxlLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgcmVzZXRQaG9uZU1vYmlsZSk7Il0sInNvdXJjZVJvb3QiOiIifQ==