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

/***/ "./resources/metronic/js/pages/custom/translate/app.translate.js":
/*!***********************************************************************!*\
  !*** ./resources/metronic/js/pages/custom/translate/app.translate.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var KTFormRepeater = {
  init: function init() {
    $("#kt_repeater_1").repeater({
      initEmpty: !1,
      show: function show() {
        $(this).slideDown();
      },
      hide: function hide(e) {
        confirm("Are you sure you want to delete this element?") && $(this).slideUp(e);
      },
      isFirstItemUndeletable: true
    });
  }
};
jQuery(document).ready(function () {
  KTFormRepeater.init();
});
$(document).on("change", ".selectFilePicker", function (e) {
  var _data;

  if ($(this).attr('name') == 'lang' && $(".selectFilePicker.fileTheme option").prop("selected") && $(".selectFilePicker.fileCore option ").prop("selected")) {
    return false;
  }

  if ($(this).attr('name') == 'fileCore') {
    $(".selectFilePicker.fileTheme option:selected").prop("selected", false);
    $('.selectpicker.fileTheme').selectpicker('refresh');
  } else if ($(this).attr('name') == 'fileTheme') {
    $(".selectFilePicker.fileCore option:selected").prop("selected", false);
    $('.selectpicker.fileCore').selectpicker('refresh');
  }

  $("#searchDirect").val("");
  $.ajax({
    type: 'POST',
    url: current_url + "/getfile",
    data: (_data = {}, _defineProperty(_data, crsftoken, $('meta[name="X-CSRF-TOKEN"]').attr('content')), _defineProperty(_data, "value", $('form#search_translate').serializeArray()), _data),
    dataType: "json",
    beforeSend: function beforeSend(xhr) {
      KTApp.block("#search_translate", {
        overlayColor: "#000000",
        state: "primary"
      });
    },
    success: function success(response) {
      KTApp.unblock("#search_translate");
      $('#response').html(response.html);
      KTFormRepeater.init();
    }
  });
});
$(document).on("click", ".btnSaveTranslate", function (e) {
  var _data2;

  e.preventDefault();
  $.ajax({
    type: 'POST',
    url: current_url + "/savefile",
    data: (_data2 = {}, _defineProperty(_data2, crsftoken, $('meta[name="X-CSRF-TOKEN"]').attr('content')), _defineProperty(_data2, "value", $('form#save_translate').serializeArray()), _data2),
    dataType: "json",
    beforeSend: function beforeSend(xhr) {
      KTApp.block("#response", {
        overlayColor: "#000000",
        state: "primary"
      });
    },
    success: function success(response) {
      KTApp.unblock("#response");
      $.notify({
        title: response.success.message ? _LANG_.save_data + "!" : _LANG_.warning + "!",
        message: response.success.message ? response.success.message : response.error.message
      }, {
        type: response.success.message ? 'success' : 'warning'
      });
    }
  });
});
$(document).on("click", ".btnDeleteTranslate", function (e) {
  var _data3;

  e.preventDefault();
  $(this).parent().parent().remove();
  $.ajax({
    type: 'POST',
    url: current_url + "/deleteTexte",
    data: (_data3 = {}, _defineProperty(_data3, crsftoken, $('meta[name="X-CSRF-TOKEN"]').attr('content')), _defineProperty(_data3, "value", $('form#save_translate').serializeArray()), _data3),
    dataType: "json",
    beforeSend: function beforeSend(xhr) {
      KTApp.block("#response", {
        overlayColor: "#000000",
        state: "primary"
      });
    },
    success: function success(response) {
      KTApp.unblock("#response");
      $.notify({
        title: response.success.message ? _LANG_.save_data + "!" : _LANG_.warning + "!",
        message: response.success.message ? response.success.message : response.error.message
      }, {
        type: response.success.message ? 'success' : 'warning'
      });
    }
  });
});
$(document).ready(function () {
  function load_data(query) {
    var _data4;

    $.ajax({
      type: 'POST',
      url: current_url + "/searchTexte",
      data: (_data4 = {}, _defineProperty(_data4, crsftoken, $('meta[name="X-CSRF-TOKEN"]').attr('content')), _defineProperty(_data4, "value", $('form#search_translate').serializeArray()), _data4),
      dataType: "json",
      beforeSend: function beforeSend(xhr) {
        KTApp.block("#response", {
          overlayColor: "#000000",
          state: "primary"
        });
      },
      success: function success(response) {
        KTApp.unblock("#response");
        $('#response').html(response.html);
      }
    });
  }

  $('#searchDirect').keyup(function () {
    $(".selectFilePicker.file option:selected").prop("selected", false);
    $('.selectpicker.file').selectpicker('refresh');
    var search = $(this).val();

    if (search != '') {
      load_data(search);
    }
  });
});
$(document).on("click", ".btnTextTranslate", function (e) {
  var _data5;

  e.preventDefault();
  $.ajax({
    type: 'POST',
    url: current_url + "/saveTextfile",
    data: (_data5 = {}, _defineProperty(_data5, crsftoken, $('meta[name="X-CSRF-TOKEN"]').attr('content')), _defineProperty(_data5, "value", $(this).parent().parent().parent().serializeArray()), _data5),
    dataType: "json",
    beforeSend: function beforeSend(xhr) {
      KTApp.block("#response", {
        overlayColor: "#000000",
        state: "primary"
      });
    },
    success: function success(response) {
      KTApp.unblock("#response");
      $.notify({
        title: response.success.message ? _LANG_.save_data + "!" : _LANG_.warning + "!",
        message: response.success.message ? response.success.message : response.error.message
      }, {
        type: response.success.message ? 'success' : 'warning'
      });
    }
  });
});
$(document).on("click", ".btnTextDeleteTranslate", function (e) {
  var _data6;

  e.preventDefault();
  $.ajax({
    type: 'POST',
    url: current_url + "/deleteTextfile",
    data: (_data6 = {}, _defineProperty(_data6, crsftoken, $('meta[name="X-CSRF-TOKEN"]').attr('content')), _defineProperty(_data6, "value", $(this).parent().parent().parent().serializeArray()), _data6),
    dataType: "json",
    beforeSend: function beforeSend(xhr) {
      KTApp.block("#response", {
        overlayColor: "#000000",
        state: "primary"
      });
    },
    success: function success(response) {
      KTApp.unblock("#response");
      $.notify({
        title: response.success.message ? _LANG_.save_data + "!" : _LANG_.warning + "!",
        message: response.success.message ? response.success.message : response.error.message
      }, {
        type: response.success.message ? 'success' : 'warning'
      });
    }
  });
});

/***/ }),

/***/ 52:
/*!*****************************************************************************!*\
  !*** multi ./resources/metronic/js/pages/custom/translate/app.translate.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Applications/MAMP/htdocs/spreadci4/public/admin/themes/metronic/resources/metronic/js/pages/custom/translate/app.translate.js */"./resources/metronic/js/pages/custom/translate/app.translate.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL21ldHJvbmljL2pzL3BhZ2VzL2N1c3RvbS90cmFuc2xhdGUvYXBwLnRyYW5zbGF0ZS5qcyJdLCJuYW1lcyI6WyJLVEZvcm1SZXBlYXRlciIsImluaXQiLCIkIiwicmVwZWF0ZXIiLCJpbml0RW1wdHkiLCJzaG93Iiwic2xpZGVEb3duIiwiaGlkZSIsImUiLCJjb25maXJtIiwic2xpZGVVcCIsImlzRmlyc3RJdGVtVW5kZWxldGFibGUiLCJqUXVlcnkiLCJkb2N1bWVudCIsInJlYWR5Iiwib24iLCJhdHRyIiwicHJvcCIsInNlbGVjdHBpY2tlciIsInZhbCIsImFqYXgiLCJ0eXBlIiwidXJsIiwiY3VycmVudF91cmwiLCJkYXRhIiwiY3JzZnRva2VuIiwic2VyaWFsaXplQXJyYXkiLCJkYXRhVHlwZSIsImJlZm9yZVNlbmQiLCJ4aHIiLCJLVEFwcCIsImJsb2NrIiwib3ZlcmxheUNvbG9yIiwic3RhdGUiLCJzdWNjZXNzIiwicmVzcG9uc2UiLCJ1bmJsb2NrIiwiaHRtbCIsInByZXZlbnREZWZhdWx0Iiwibm90aWZ5IiwidGl0bGUiLCJtZXNzYWdlIiwiX0xBTkdfIiwic2F2ZV9kYXRhIiwid2FybmluZyIsImVycm9yIiwicGFyZW50IiwicmVtb3ZlIiwibG9hZF9kYXRhIiwicXVlcnkiLCJrZXl1cCIsInNlYXJjaCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FB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QVksRUFBRSxTQURPO0FBRXJCQyxhQUFLLEVBQUU7QUFGYyxPQUF6QjtBQUlILEtBYkU7QUFjSEMsV0FBTyxFQUFFLGlCQUFTQyxRQUFULEVBQW1CO0FBQ3hCTCxXQUFLLENBQUNNLE9BQU4sQ0FBYyxXQUFkO0FBQ0FsQyxPQUFDLENBQUNxQyxNQUFGLENBQVM7QUFDTEMsYUFBSyxFQUFHTCxRQUFRLENBQUNELE9BQVQsQ0FBaUJPLE9BQWxCLEdBQTZCQyxNQUFNLENBQUNDLFNBQVAsR0FBbUIsR0FBaEQsR0FBc0RELE1BQU0sQ0FBQ0UsT0FBUCxHQUFpQixHQUR6RTtBQUVMSCxlQUFPLEVBQUdOLFFBQVEsQ0FBQ0QsT0FBVCxDQUFpQk8sT0FBbEIsR0FBNkJOLFFBQVEsQ0FBQ0QsT0FBVCxDQUFpQk8sT0FBOUMsR0FBd0ROLFFBQVEsQ0FBQ1UsS0FBVCxDQUFlSjtBQUYzRSxPQUFULEVBR0c7QUFDQ3BCLFlBQUksRUFBR2MsUUFBUSxDQUFDRCxPQUFULENBQWlCTyxPQUFsQixHQUE2QixTQUE3QixHQUF5QztBQURoRCxPQUhIO0FBTUg7QUF0QkUsR0FBUDtBQXdCSCxDQTFCRCxFIiwiZmlsZSI6Ii9kZXZlbG9wbWVudC9qcy9wYWdlcy9jdXN0b20vdHJhbnNsYXRlL2FwcC50cmFuc2xhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDUyKTtcbiIsInZhciBLVEZvcm1SZXBlYXRlciA9IHtcbiAgICBpbml0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgJChcIiNrdF9yZXBlYXRlcl8xXCIpLnJlcGVhdGVyKHtcbiAgICAgICAgICAgIGluaXRFbXB0eTogITEsXG4gICAgICAgICAgICBzaG93OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnNsaWRlRG93bigpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaGlkZTogZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgIGNvbmZpcm0oXCJBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgZWxlbWVudD9cIikgJiYgJCh0aGlzKS5zbGlkZVVwKGUpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaXNGaXJzdEl0ZW1VbmRlbGV0YWJsZTogdHJ1ZSxcbiAgICAgICAgfSk7XG4gICAgfVxufTtcbmpRdWVyeShkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG4gICAgS1RGb3JtUmVwZWF0ZXIuaW5pdCgpXG59KTtcblxuXG4kKGRvY3VtZW50KS5vbihcImNoYW5nZVwiLCBcIi5zZWxlY3RGaWxlUGlja2VyXCIsIGZ1bmN0aW9uKGUpIHtcbiAgICBpZiAoJCh0aGlzKS5hdHRyKCduYW1lJykgPT0gJ2xhbmcnICYmICQoXCIuc2VsZWN0RmlsZVBpY2tlci5maWxlVGhlbWUgb3B0aW9uXCIpLnByb3AoXCJzZWxlY3RlZFwiKSAmJiAkKFwiLnNlbGVjdEZpbGVQaWNrZXIuZmlsZUNvcmUgb3B0aW9uIFwiKS5wcm9wKFwic2VsZWN0ZWRcIikpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAoJCh0aGlzKS5hdHRyKCduYW1lJykgPT0gJ2ZpbGVDb3JlJykge1xuICAgICAgICAkKFwiLnNlbGVjdEZpbGVQaWNrZXIuZmlsZVRoZW1lIG9wdGlvbjpzZWxlY3RlZFwiKS5wcm9wKFwic2VsZWN0ZWRcIiwgZmFsc2UpO1xuICAgICAgICAkKCcuc2VsZWN0cGlja2VyLmZpbGVUaGVtZScpLnNlbGVjdHBpY2tlcigncmVmcmVzaCcpO1xuICAgIH0gZWxzZSBpZiAoJCh0aGlzKS5hdHRyKCduYW1lJykgPT0gJ2ZpbGVUaGVtZScpIHtcbiAgICAgICAgJChcIi5zZWxlY3RGaWxlUGlja2VyLmZpbGVDb3JlIG9wdGlvbjpzZWxlY3RlZFwiKS5wcm9wKFwic2VsZWN0ZWRcIiwgZmFsc2UpO1xuICAgICAgICAkKCcuc2VsZWN0cGlja2VyLmZpbGVDb3JlJykuc2VsZWN0cGlja2VyKCdyZWZyZXNoJyk7XG4gICAgfVxuICAgICQoXCIjc2VhcmNoRGlyZWN0XCIpLnZhbChcIlwiKTtcblxuICAgICQuYWpheCh7XG4gICAgICAgIHR5cGU6ICdQT1NUJyxcbiAgICAgICAgdXJsOiBjdXJyZW50X3VybCArIFwiL2dldGZpbGVcIixcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgW2Nyc2Z0b2tlbl06ICQoJ21ldGFbbmFtZT1cIlgtQ1NSRi1UT0tFTlwiXScpLmF0dHIoJ2NvbnRlbnQnKSxcbiAgICAgICAgICAgIHZhbHVlOiAkKCdmb3JtI3NlYXJjaF90cmFuc2xhdGUnKS5zZXJpYWxpemVBcnJheSgpLFxuICAgICAgICB9LFxuICAgICAgICBkYXRhVHlwZTogXCJqc29uXCIsXG4gICAgICAgIGJlZm9yZVNlbmQ6IGZ1bmN0aW9uKHhocikge1xuICAgICAgICAgICAgS1RBcHAuYmxvY2soXCIjc2VhcmNoX3RyYW5zbGF0ZVwiLCB7XG4gICAgICAgICAgICAgICAgb3ZlcmxheUNvbG9yOiBcIiMwMDAwMDBcIixcbiAgICAgICAgICAgICAgICBzdGF0ZTogXCJwcmltYXJ5XCJcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0sXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICBLVEFwcC51bmJsb2NrKFwiI3NlYXJjaF90cmFuc2xhdGVcIik7XG4gICAgICAgICAgICAkKCcjcmVzcG9uc2UnKS5odG1sKHJlc3BvbnNlLmh0bWwpO1xuICAgICAgICAgICAgS1RGb3JtUmVwZWF0ZXIuaW5pdCgpO1xuICAgICAgICB9XG4gICAgfSk7XG59KTtcblxuJChkb2N1bWVudCkub24oXCJjbGlja1wiLCBcIi5idG5TYXZlVHJhbnNsYXRlXCIsIGZ1bmN0aW9uKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgJC5hamF4KHtcbiAgICAgICAgdHlwZTogJ1BPU1QnLFxuICAgICAgICB1cmw6IGN1cnJlbnRfdXJsICsgXCIvc2F2ZWZpbGVcIixcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgW2Nyc2Z0b2tlbl06ICQoJ21ldGFbbmFtZT1cIlgtQ1NSRi1UT0tFTlwiXScpLmF0dHIoJ2NvbnRlbnQnKSxcbiAgICAgICAgICAgIHZhbHVlOiAkKCdmb3JtI3NhdmVfdHJhbnNsYXRlJykuc2VyaWFsaXplQXJyYXkoKSxcbiAgICAgICAgfSxcbiAgICAgICAgZGF0YVR5cGU6IFwianNvblwiLFxuICAgICAgICBiZWZvcmVTZW5kOiBmdW5jdGlvbih4aHIpIHtcbiAgICAgICAgICAgIEtUQXBwLmJsb2NrKFwiI3Jlc3BvbnNlXCIsIHtcbiAgICAgICAgICAgICAgICBvdmVybGF5Q29sb3I6IFwiIzAwMDAwMFwiLFxuICAgICAgICAgICAgICAgIHN0YXRlOiBcInByaW1hcnlcIlxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSxcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgICAgICAgIEtUQXBwLnVuYmxvY2soXCIjcmVzcG9uc2VcIik7XG5cbiAgICAgICAgICAgICQubm90aWZ5KHtcbiAgICAgICAgICAgICAgICB0aXRsZTogKHJlc3BvbnNlLnN1Y2Nlc3MubWVzc2FnZSkgPyBfTEFOR18uc2F2ZV9kYXRhICsgXCIhXCIgOiBfTEFOR18ud2FybmluZyArIFwiIVwiLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IChyZXNwb25zZS5zdWNjZXNzLm1lc3NhZ2UpID8gcmVzcG9uc2Uuc3VjY2Vzcy5tZXNzYWdlIDogcmVzcG9uc2UuZXJyb3IubWVzc2FnZVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIHR5cGU6IChyZXNwb25zZS5zdWNjZXNzLm1lc3NhZ2UpID8gJ3N1Y2Nlc3MnIDogJ3dhcm5pbmcnXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0pO1xufSk7XG5cbiQoZG9jdW1lbnQpLm9uKFwiY2xpY2tcIiwgXCIuYnRuRGVsZXRlVHJhbnNsYXRlXCIsIGZ1bmN0aW9uKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgJCh0aGlzKS5wYXJlbnQoKS5wYXJlbnQoKS5yZW1vdmUoKTtcbiAgICAkLmFqYXgoe1xuICAgICAgICB0eXBlOiAnUE9TVCcsXG4gICAgICAgIHVybDogY3VycmVudF91cmwgKyBcIi9kZWxldGVUZXh0ZVwiLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBbY3JzZnRva2VuXTogJCgnbWV0YVtuYW1lPVwiWC1DU1JGLVRPS0VOXCJdJykuYXR0cignY29udGVudCcpLFxuICAgICAgICAgICAgdmFsdWU6ICQoJ2Zvcm0jc2F2ZV90cmFuc2xhdGUnKS5zZXJpYWxpemVBcnJheSgpLFxuICAgICAgICB9LFxuICAgICAgICBkYXRhVHlwZTogXCJqc29uXCIsXG4gICAgICAgIGJlZm9yZVNlbmQ6IGZ1bmN0aW9uKHhocikge1xuICAgICAgICAgICAgS1RBcHAuYmxvY2soXCIjcmVzcG9uc2VcIiwge1xuICAgICAgICAgICAgICAgIG92ZXJsYXlDb2xvcjogXCIjMDAwMDAwXCIsXG4gICAgICAgICAgICAgICAgc3RhdGU6IFwicHJpbWFyeVwiXG4gICAgICAgICAgICB9KVxuICAgICAgICB9LFxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgICAgICAgS1RBcHAudW5ibG9jayhcIiNyZXNwb25zZVwiKTtcbiAgICAgICAgICAgICQubm90aWZ5KHtcbiAgICAgICAgICAgICAgICB0aXRsZTogKHJlc3BvbnNlLnN1Y2Nlc3MubWVzc2FnZSkgPyBfTEFOR18uc2F2ZV9kYXRhICsgXCIhXCIgOiBfTEFOR18ud2FybmluZyArIFwiIVwiLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IChyZXNwb25zZS5zdWNjZXNzLm1lc3NhZ2UpID8gcmVzcG9uc2Uuc3VjY2Vzcy5tZXNzYWdlIDogcmVzcG9uc2UuZXJyb3IubWVzc2FnZVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIHR5cGU6IChyZXNwb25zZS5zdWNjZXNzLm1lc3NhZ2UpID8gJ3N1Y2Nlc3MnIDogJ3dhcm5pbmcnXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0pO1xufSk7XG5cbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xuXG4gICAgZnVuY3Rpb24gbG9hZF9kYXRhKHF1ZXJ5KSB7XG5cbiAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgIHR5cGU6ICdQT1NUJyxcbiAgICAgICAgICAgIHVybDogY3VycmVudF91cmwgKyBcIi9zZWFyY2hUZXh0ZVwiLFxuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgIFtjcnNmdG9rZW5dOiAkKCdtZXRhW25hbWU9XCJYLUNTUkYtVE9LRU5cIl0nKS5hdHRyKCdjb250ZW50JyksXG4gICAgICAgICAgICAgICAgdmFsdWU6ICQoJ2Zvcm0jc2VhcmNoX3RyYW5zbGF0ZScpLnNlcmlhbGl6ZUFycmF5KCksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGF0YVR5cGU6IFwianNvblwiLFxuICAgICAgICAgICAgYmVmb3JlU2VuZDogZnVuY3Rpb24oeGhyKSB7XG4gICAgICAgICAgICAgICAgS1RBcHAuYmxvY2soXCIjcmVzcG9uc2VcIiwge1xuICAgICAgICAgICAgICAgICAgICBvdmVybGF5Q29sb3I6IFwiIzAwMDAwMFwiLFxuICAgICAgICAgICAgICAgICAgICBzdGF0ZTogXCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgS1RBcHAudW5ibG9jayhcIiNyZXNwb25zZVwiKTtcbiAgICAgICAgICAgICAgICAkKCcjcmVzcG9uc2UnKS5odG1sKHJlc3BvbnNlLmh0bWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgIH1cbiAgICAkKCcjc2VhcmNoRGlyZWN0Jykua2V5dXAoZnVuY3Rpb24oKSB7XG4gICAgICAgICQoXCIuc2VsZWN0RmlsZVBpY2tlci5maWxlIG9wdGlvbjpzZWxlY3RlZFwiKS5wcm9wKFwic2VsZWN0ZWRcIiwgZmFsc2UpO1xuICAgICAgICAkKCcuc2VsZWN0cGlja2VyLmZpbGUnKS5zZWxlY3RwaWNrZXIoJ3JlZnJlc2gnKTtcbiAgICAgICAgdmFyIHNlYXJjaCA9ICQodGhpcykudmFsKCk7XG4gICAgICAgIGlmIChzZWFyY2ggIT0gJycpIHtcbiAgICAgICAgICAgIGxvYWRfZGF0YShzZWFyY2gpO1xuICAgICAgICB9XG4gICAgfSk7XG59KTtcblxuXG4kKGRvY3VtZW50KS5vbihcImNsaWNrXCIsIFwiLmJ0blRleHRUcmFuc2xhdGVcIiwgZnVuY3Rpb24oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAkLmFqYXgoe1xuICAgICAgICB0eXBlOiAnUE9TVCcsXG4gICAgICAgIHVybDogY3VycmVudF91cmwgKyBcIi9zYXZlVGV4dGZpbGVcIixcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgW2Nyc2Z0b2tlbl06ICQoJ21ldGFbbmFtZT1cIlgtQ1NSRi1UT0tFTlwiXScpLmF0dHIoJ2NvbnRlbnQnKSxcbiAgICAgICAgICAgIHZhbHVlOiAkKHRoaXMpLnBhcmVudCgpLnBhcmVudCgpLnBhcmVudCgpLnNlcmlhbGl6ZUFycmF5KCksXG4gICAgICAgIH0sXG5cbiAgICAgICAgZGF0YVR5cGU6IFwianNvblwiLFxuICAgICAgICBiZWZvcmVTZW5kOiBmdW5jdGlvbih4aHIpIHtcbiAgICAgICAgICAgIEtUQXBwLmJsb2NrKFwiI3Jlc3BvbnNlXCIsIHtcbiAgICAgICAgICAgICAgICBvdmVybGF5Q29sb3I6IFwiIzAwMDAwMFwiLFxuICAgICAgICAgICAgICAgIHN0YXRlOiBcInByaW1hcnlcIlxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSxcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgICAgICAgIEtUQXBwLnVuYmxvY2soXCIjcmVzcG9uc2VcIik7XG4gICAgICAgICAgICAkLm5vdGlmeSh7XG4gICAgICAgICAgICAgICAgdGl0bGU6IChyZXNwb25zZS5zdWNjZXNzLm1lc3NhZ2UpID8gX0xBTkdfLnNhdmVfZGF0YSArIFwiIVwiIDogX0xBTkdfLndhcm5pbmcgKyBcIiFcIixcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAocmVzcG9uc2Uuc3VjY2Vzcy5tZXNzYWdlKSA/IHJlc3BvbnNlLnN1Y2Nlc3MubWVzc2FnZSA6IHJlc3BvbnNlLmVycm9yLm1lc3NhZ2VcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICB0eXBlOiAocmVzcG9uc2Uuc3VjY2Vzcy5tZXNzYWdlKSA/ICdzdWNjZXNzJyA6ICd3YXJuaW5nJ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9KTtcbn0pO1xuXG5cbiQoZG9jdW1lbnQpLm9uKFwiY2xpY2tcIiwgXCIuYnRuVGV4dERlbGV0ZVRyYW5zbGF0ZVwiLCBmdW5jdGlvbihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICQuYWpheCh7XG4gICAgICAgIHR5cGU6ICdQT1NUJyxcbiAgICAgICAgdXJsOiBjdXJyZW50X3VybCArIFwiL2RlbGV0ZVRleHRmaWxlXCIsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIFtjcnNmdG9rZW5dOiAkKCdtZXRhW25hbWU9XCJYLUNTUkYtVE9LRU5cIl0nKS5hdHRyKCdjb250ZW50JyksXG4gICAgICAgICAgICB2YWx1ZTogJCh0aGlzKS5wYXJlbnQoKS5wYXJlbnQoKS5wYXJlbnQoKS5zZXJpYWxpemVBcnJheSgpLFxuICAgICAgICB9LFxuICAgICAgICBkYXRhVHlwZTogXCJqc29uXCIsXG4gICAgICAgIGJlZm9yZVNlbmQ6IGZ1bmN0aW9uKHhocikge1xuICAgICAgICAgICAgS1RBcHAuYmxvY2soXCIjcmVzcG9uc2VcIiwge1xuICAgICAgICAgICAgICAgIG92ZXJsYXlDb2xvcjogXCIjMDAwMDAwXCIsXG4gICAgICAgICAgICAgICAgc3RhdGU6IFwicHJpbWFyeVwiXG4gICAgICAgICAgICB9KVxuICAgICAgICB9LFxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgICAgICAgS1RBcHAudW5ibG9jayhcIiNyZXNwb25zZVwiKTtcbiAgICAgICAgICAgICQubm90aWZ5KHtcbiAgICAgICAgICAgICAgICB0aXRsZTogKHJlc3BvbnNlLnN1Y2Nlc3MubWVzc2FnZSkgPyBfTEFOR18uc2F2ZV9kYXRhICsgXCIhXCIgOiBfTEFOR18ud2FybmluZyArIFwiIVwiLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IChyZXNwb25zZS5zdWNjZXNzLm1lc3NhZ2UpID8gcmVzcG9uc2Uuc3VjY2Vzcy5tZXNzYWdlIDogcmVzcG9uc2UuZXJyb3IubWVzc2FnZVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIHR5cGU6IChyZXNwb25zZS5zdWNjZXNzLm1lc3NhZ2UpID8gJ3N1Y2Nlc3MnIDogJ3dhcm5pbmcnXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0pO1xufSk7Il0sInNvdXJjZVJvb3QiOiIifQ==