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
/******/ 	return __webpack_require__(__webpack_require__.s = 38);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/metronic/js/pages/custom/groups/permission.groups.js":
/*!************************************************************************!*\
  !*** ./resources/metronic/js/pages/custom/groups/permission.groups.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

$(document).on("click", ".checkbox input.permission_group", function (e) {
  var _data;

  if ($(this).is(':checked')) {
    var $action = 'add';
  } else {
    var $action = 'delete';
  }

  var $val = $(this).val();
  $.ajax({
    type: 'POST',
    url: baseController + "/savePermissions",
    data: (_data = {}, _defineProperty(_data, crsftoken, $('meta[name="X-CSRF-TOKEN"]').attr('content')), _defineProperty(_data, "value", $val), _defineProperty(_data, "crud", $action), _data),
    dataType: "json",
    success: function success(response) {
      if (response.error == false) {
        $.notify({
          title: _LANG_.updated + "!",
          message: response.success.message
        }, {
          type: 'success'
        });
      }
    }
  });
});
$(document).on("click", ".checkbox input#all_permission_group", function (e) {
  var _data2;

  var $valuesss = [];

  if ($(this).is(':checked')) {
    $(".permission_group").prop("checked", true);
    $(".permission_group").attr("checked", 'checked');
    $(".permission_group").each(function (key2, val2) {
      $valuesss.push($(this).val());
    });
    var $action = 'add';
  } else {
    $(".permission_group").each(function () {
      $valuesss.push($(this).val());
      $(".permission_group").prop("checked", false);
    });
    var $action = 'delete';
  }

  $.ajax({
    type: 'POST',
    url: baseController + "/saveAllPermissions",
    data: (_data2 = {}, _defineProperty(_data2, crsftoken, $('meta[name="X-CSRF-TOKEN"]').attr('content')), _defineProperty(_data2, "value", $valuesss), _defineProperty(_data2, "crud", $action), _data2),
    dataType: "json",
    success: function success(response) {
      if (response.error == false) {
        $.notify({
          title: _LANG_.updated + "!",
          message: response.success.message
        }, {
          type: 'success'
        });
      }
    }
  });
});

/***/ }),

/***/ 38:
/*!******************************************************************************!*\
  !*** multi ./resources/metronic/js/pages/custom/groups/permission.groups.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Applications/MAMP/htdocs/spreadci4/public/admin/themes/metronic/resources/metronic/js/pages/custom/groups/permission.groups.js */"./resources/metronic/js/pages/custom/groups/permission.groups.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL21ldHJvbmljL2pzL3BhZ2VzL2N1c3RvbS9ncm91cHMvcGVybWlzc2lvbi5ncm91cHMuanMiXSwibmFtZXMiOlsiJCIsImRvY3VtZW50Iiwib24iLCJlIiwiaXMiLCIkYWN0aW9uIiwiJHZhbCIsInZhbCIsImFqYXgiLCJ0eXBlIiwidXJsIiwiYmFzZUNvbnRyb2xsZXIiLCJkYXRhIiwiY3JzZnRva2VuIiwiYXR0ciIsImRhdGFUeXBlIiwic3VjY2VzcyIsInJlc3BvbnNlIiwiZXJyb3IiLCJub3RpZnkiLCJ0aXRsZSIsIl9MQU5HXyIsInVwZGF0ZWQiLCJtZXNzYWdlIiwiJHZhbHVlc3NzIiwicHJvcCIsImVhY2giLCJrZXkyIiwidmFsMiIsInB1c2giXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDbEZB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QUMsQ0FBQ21CLE1BQUYsQ0FBUztBQUNMQyxlQUFLLEVBQUVDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQixHQURuQjtBQUVMQyxpQkFBTyxFQUFFTixRQUFRLENBQUNELE9BQVQsQ0FBaUJPO0FBRnJCLFNBQVQsRUFHRztBQUNDZCxjQUFJLEVBQUU7QUFEUCxTQUhIO0FBTUg7QUFDSjtBQWxCRSxHQUFQO0FBcUJILENBdENELEUiLCJmaWxlIjoiL2RldmVsb3BtZW50L2pzL3BhZ2VzL2N1c3RvbS9ncm91cHMvcGVybWlzc2lvbi5ncm91cHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDM4KTtcbiIsIiQoZG9jdW1lbnQpLm9uKFwiY2xpY2tcIiwgXCIuY2hlY2tib3ggaW5wdXQucGVybWlzc2lvbl9ncm91cFwiLCBmdW5jdGlvbihlKSB7XHJcbiAgICBpZiAoJCh0aGlzKS5pcygnOmNoZWNrZWQnKSkge1xyXG4gICAgICAgIHZhciAkYWN0aW9uID0gJ2FkZCc7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHZhciAkYWN0aW9uID0gJ2RlbGV0ZSc7XHJcbiAgICB9XHJcbiAgICB2YXIgJHZhbCA9ICQodGhpcykudmFsKCk7XHJcblxyXG4gICAgJC5hamF4KHtcclxuICAgICAgICB0eXBlOiAnUE9TVCcsXHJcbiAgICAgICAgdXJsOiBiYXNlQ29udHJvbGxlciArIFwiL3NhdmVQZXJtaXNzaW9uc1wiLFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgW2Nyc2Z0b2tlbl06ICQoJ21ldGFbbmFtZT1cIlgtQ1NSRi1UT0tFTlwiXScpLmF0dHIoJ2NvbnRlbnQnKSxcclxuICAgICAgICAgICAgdmFsdWU6ICR2YWwsXHJcbiAgICAgICAgICAgIGNydWQ6ICRhY3Rpb24sXHJcbiAgICAgICAgfSxcclxuICAgICAgICBkYXRhVHlwZTogXCJqc29uXCIsXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmVycm9yID09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICAkLm5vdGlmeSh7XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IF9MQU5HXy51cGRhdGVkICsgXCIhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogcmVzcG9uc2Uuc3VjY2Vzcy5tZXNzYWdlXHJcbiAgICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3N1Y2Nlc3MnXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59KTtcclxuXHJcblxyXG4kKGRvY3VtZW50KS5vbihcImNsaWNrXCIsIFwiLmNoZWNrYm94IGlucHV0I2FsbF9wZXJtaXNzaW9uX2dyb3VwXCIsIGZ1bmN0aW9uKGUpIHtcclxuICAgIHZhciAkdmFsdWVzc3MgPSBbXTtcclxuICAgIGlmICgkKHRoaXMpLmlzKCc6Y2hlY2tlZCcpKSB7XHJcbiAgICAgICAgJChcIi5wZXJtaXNzaW9uX2dyb3VwXCIpLnByb3AoXCJjaGVja2VkXCIsIHRydWUpO1xyXG4gICAgICAgICQoXCIucGVybWlzc2lvbl9ncm91cFwiKS5hdHRyKFwiY2hlY2tlZFwiLCAnY2hlY2tlZCcpO1xyXG4gICAgICAgICQoXCIucGVybWlzc2lvbl9ncm91cFwiKS5lYWNoKGZ1bmN0aW9uKGtleTIsIHZhbDIpIHtcclxuICAgICAgICAgICAgJHZhbHVlc3NzLnB1c2goJCh0aGlzKS52YWwoKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdmFyICRhY3Rpb24gPSAnYWRkJztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJChcIi5wZXJtaXNzaW9uX2dyb3VwXCIpLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICR2YWx1ZXNzcy5wdXNoKCQodGhpcykudmFsKCkpO1xyXG4gICAgICAgICAgICAkKFwiLnBlcm1pc3Npb25fZ3JvdXBcIikucHJvcChcImNoZWNrZWRcIiwgZmFsc2UpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHZhciAkYWN0aW9uID0gJ2RlbGV0ZSc7XHJcbiAgICB9XHJcblxyXG4gICAgJC5hamF4KHtcclxuICAgICAgICB0eXBlOiAnUE9TVCcsXHJcbiAgICAgICAgdXJsOiBiYXNlQ29udHJvbGxlciArIFwiL3NhdmVBbGxQZXJtaXNzaW9uc1wiLFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgW2Nyc2Z0b2tlbl06ICQoJ21ldGFbbmFtZT1cIlgtQ1NSRi1UT0tFTlwiXScpLmF0dHIoJ2NvbnRlbnQnKSxcclxuICAgICAgICAgICAgdmFsdWU6ICR2YWx1ZXNzcyxcclxuICAgICAgICAgICAgY3J1ZDogJGFjdGlvbixcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRhdGFUeXBlOiBcImpzb25cIixcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXNwb25zZSkge1xyXG4gICAgICAgICAgICBpZiAocmVzcG9uc2UuZXJyb3IgPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgICQubm90aWZ5KHtcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogX0xBTkdfLnVwZGF0ZWQgKyBcIiFcIixcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiByZXNwb25zZS5zdWNjZXNzLm1lc3NhZ2VcclxuICAgICAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnc3VjY2VzcydcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG59KTsiXSwic291cmNlUm9vdCI6IiJ9