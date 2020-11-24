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
/******/ 	return __webpack_require__(__webpack_require__.s = 152);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/metronic/js/pages/features/miscellaneous/idle-timer.js":
/*!**************************************************************************!*\
  !*** ./resources/metronic/js/pages/features/miscellaneous/idle-timer.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar KTIdleTimerDemo = function () {\n  var _initDemo1 = function _initDemo1() {\n    //Define default\n    var docTimeout = 5000;\n    /*\r\n    Handle raised idle/active events\r\n    */\n\n    $(document).on(\"idle.idleTimer\", function (event, elem, obj) {\n      $(\"#docStatus\").val(function (i, v) {\n        return v + \"Idle @ \" + moment().format() + \" \\n\";\n      }).removeClass(\"alert-success\").addClass(\"alert-warning\").scrollTop($(\"#docStatus\")[0].scrollHeight);\n    });\n    $(document).on(\"active.idleTimer\", function (event, elem, obj, e) {\n      $(\"#docStatus\").val(function (i, v) {\n        return v + \"Active [\" + e.type + \"] [\" + e.target.nodeName + \"] @ \" + moment().format() + \" \\n\";\n      }).addClass(\"alert-success\").removeClass(\"alert-warning\").scrollTop($(\"#docStatus\")[0].scrollHeight);\n    });\n    /*\r\n    Handle button events\r\n    */\n\n    $(\"#btPause\").click(function () {\n      $(document).idleTimer(\"pause\");\n      $(\"#docStatus\").val(function (i, v) {\n        return v + \"Paused @ \" + moment().format() + \" \\n\";\n      }).scrollTop($(\"#docStatus\")[0].scrollHeight);\n      $(this).blur();\n      return false;\n    });\n    $(\"#btResume\").click(function () {\n      $(document).idleTimer(\"resume\");\n      $(\"#docStatus\").val(function (i, v) {\n        return v + \"Resumed @ \" + moment().format() + \" \\n\";\n      }).scrollTop($(\"#docStatus\")[0].scrollHeight);\n      $(this).blur();\n      return false;\n    });\n    $(\"#btElapsed\").click(function () {\n      $(\"#docStatus\").val(function (i, v) {\n        return v + \"Elapsed (since becoming active): \" + $(document).idleTimer(\"getElapsedTime\") + \" \\n\";\n      }).scrollTop($(\"#docStatus\")[0].scrollHeight);\n      $(this).blur();\n      return false;\n    });\n    $(\"#btDestroy\").click(function () {\n      $(document).idleTimer(\"destroy\");\n      $(\"#docStatus\").val(function (i, v) {\n        return v + \"Destroyed: @ \" + moment().format() + \" \\n\";\n      }).removeClass(\"alert-success\").removeClass(\"alert-warning\").scrollTop($(\"#docStatus\")[0].scrollHeight);\n      $(this).blur();\n      return false;\n    });\n    $(\"#btInit\").click(function () {\n      // for demo purposes show init with just object\n      $(document).idleTimer({\n        timeout: docTimeout\n      });\n      $(\"#docStatus\").val(function (i, v) {\n        return v + \"Init: @ \" + moment().format() + \" \\n\";\n      }).scrollTop($(\"#docStatus\")[0].scrollHeight); //Apply classes for default state\n\n      if ($(document).idleTimer(\"isIdle\")) {\n        $(\"#docStatus\").removeClass(\"alert-success\").addClass(\"alert-warning\");\n      } else {\n        $(\"#docStatus\").addClass(\"alert-success\").removeClass(\"alert-warning\");\n      }\n\n      $(this).blur();\n      return false;\n    }); //Clear old statuses\n\n    $(\"#docStatus\").val(\"\"); //Start timeout, passing no options\n    //Same as $.idleTimer(docTimeout, docOptions);\n\n    $(document).idleTimer(docTimeout); //For demo purposes, style based on initial state\n\n    if ($(document).idleTimer(\"isIdle\")) {\n      $(\"#docStatus\").val(function (i, v) {\n        return v + \"Initial Idle State @ \" + moment().format() + \" \\n\";\n      }).removeClass(\"alert-success\").addClass(\"alert-warning\").scrollTop($(\"#docStatus\")[0].scrollHeight);\n    } else {\n      $(\"#docStatus\").val(function (i, v) {\n        return v + \"Initial Active State @ \" + moment().format() + \" \\n\";\n      }).addClass(\"alert-success\").removeClass(\"alert-warning\").scrollTop($(\"#docStatus\")[0].scrollHeight);\n    } //For demo purposes, display the actual timeout on the page\n\n\n    $(\"#docTimeout\").text(docTimeout / 1000);\n  };\n\n  var _initDemo2 = function _initDemo2() {\n    //Define textarea settings\n    var taTimeout = 3000;\n    /*\r\n    Handle raised idle/active events\r\n    */\n\n    $(\"#elStatus\").on(\"idle.idleTimer\", function (event, elem, obj) {\n      //If you dont stop propagation it will bubble up to document event handler\n      event.stopPropagation();\n      $(\"#elStatus\").val(function (i, v) {\n        return v + \"Idle @ \" + moment().format() + \" \\n\";\n      }).removeClass(\"alert-success\").addClass(\"alert-warning\").scrollTop($(\"#elStatus\")[0].scrollHeight);\n    });\n    $(\"#elStatus\").on(\"active.idleTimer\", function (event) {\n      //If you dont stop propagation it will bubble up to document event handler\n      event.stopPropagation();\n      $(\"#elStatus\").val(function (i, v) {\n        return v + \"Active @ \" + moment().format() + \" \\n\";\n      }).addClass(\"alert-success\").removeClass(\"alert-warning\").scrollTop($(\"#elStatus\")[0].scrollHeight);\n    });\n    /*\r\n    Handle button events\r\n    */\n\n    $(\"#btReset\").click(function () {\n      $(\"#elStatus\").idleTimer(\"reset\").val(function (i, v) {\n        return v + \"Reset @ \" + moment().format() + \" \\n\";\n      }).scrollTop($(\"#elStatus\")[0].scrollHeight); //Apply classes for default state\n\n      if ($(\"#elStatus\").idleTimer(\"isIdle\")) {\n        $(\"#elStatus\").removeClass(\"alert-success\").addClass(\"alert-warning\");\n      } else {\n        $(\"#elStatus\").addClass(\"alert-success\").removeClass(\"alert-warning\");\n      }\n\n      $(this).blur();\n      return false;\n    });\n    $(\"#btRemaining\").click(function () {\n      $(\"#elStatus\").val(function (i, v) {\n        return v + \"Remaining: \" + $(\"#elStatus\").idleTimer(\"getRemainingTime\") + \" \\n\";\n      }).scrollTop($(\"#elStatus\")[0].scrollHeight);\n      $(this).blur();\n      return false;\n    });\n    $(\"#btLastActive\").click(function () {\n      $(\"#elStatus\").val(function (i, v) {\n        return v + \"LastActive: \" + $(\"#elStatus\").idleTimer(\"getLastActiveTime\") + \" \\n\";\n      }).scrollTop($(\"#elStatus\")[0].scrollHeight);\n      $(this).blur();\n      return false;\n    });\n    $(\"#btState\").click(function () {\n      $(\"#elStatus\").val(function (i, v) {\n        return v + \"State: \" + ($(\"#elStatus\").idleTimer(\"isIdle\") ? \"idle\" : \"active\") + \" \\n\";\n      }).scrollTop($(\"#elStatus\")[0].scrollHeight);\n      $(this).blur();\n      return false;\n    }); //Clear value if there was one cached & start time\n\n    $(\"#elStatus\").val(\"\").idleTimer(taTimeout); //For demo purposes, show initial state\n\n    if ($(\"#elStatus\").idleTimer(\"isIdle\")) {\n      $(\"#elStatus\").val(function (i, v) {\n        return v + \"Initial Idle @ \" + moment().format() + \" \\n\";\n      }).removeClass(\"alert-success\").addClass(\"alert-warning\").scrollTop($(\"#elStatus\")[0].scrollHeight);\n    } else {\n      $(\"#elStatus\").val(function (i, v) {\n        return v + \"Initial Active @ \" + moment().format() + \" \\n\";\n      }).addClass(\"alert-success\").removeClass(\"alert-warning\").scrollTop($(\"#elStatus\")[0].scrollHeight);\n    } // Display the actual timeout on the page\n\n\n    $(\"#elTimeout\").text(taTimeout / 1000);\n  };\n\n  return {\n    //main function to initiate the module\n    init: function init() {\n      _initDemo1();\n\n      _initDemo2();\n    }\n  };\n}();\n\njQuery(document).ready(function () {\n  KTIdleTimerDemo.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvbWV0cm9uaWMvanMvcGFnZXMvZmVhdHVyZXMvbWlzY2VsbGFuZW91cy9pZGxlLXRpbWVyLmpzPzFjMTMiXSwibmFtZXMiOlsiS1RJZGxlVGltZXJEZW1vIiwiX2luaXREZW1vMSIsImRvY1RpbWVvdXQiLCIkIiwiZG9jdW1lbnQiLCJvbiIsImV2ZW50IiwiZWxlbSIsIm9iaiIsInZhbCIsImkiLCJ2IiwibW9tZW50IiwiZm9ybWF0IiwicmVtb3ZlQ2xhc3MiLCJhZGRDbGFzcyIsInNjcm9sbFRvcCIsInNjcm9sbEhlaWdodCIsImUiLCJ0eXBlIiwidGFyZ2V0Iiwibm9kZU5hbWUiLCJjbGljayIsImlkbGVUaW1lciIsImJsdXIiLCJ0aW1lb3V0IiwidGV4dCIsIl9pbml0RGVtbzIiLCJ0YVRpbWVvdXQiLCJzdG9wUHJvcGFnYXRpb24iLCJpbml0IiwialF1ZXJ5IiwicmVhZHkiXSwibWFwcGluZ3MiOiJBQUFhOztBQUViLElBQUlBLGVBQWUsR0FBRyxZQUFXO0FBQzdCLE1BQUlDLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQVc7QUFDeEI7QUFDQSxRQUFJQyxVQUFVLEdBQUcsSUFBakI7QUFFQTs7OztBQUdBQyxLQUFDLENBQUNDLFFBQUQsQ0FBRCxDQUFZQyxFQUFaLENBQWUsZ0JBQWYsRUFBaUMsVUFBU0MsS0FBVCxFQUFnQkMsSUFBaEIsRUFBc0JDLEdBQXRCLEVBQTJCO0FBQ3hETCxPQUFDLENBQUMsWUFBRCxDQUFELENBQ0tNLEdBREwsQ0FDUyxVQUFTQyxDQUFULEVBQVlDLENBQVosRUFBZTtBQUNoQixlQUFPQSxDQUFDLEdBQUcsU0FBSixHQUFnQkMsTUFBTSxHQUFHQyxNQUFULEVBQWhCLEdBQW9DLEtBQTNDO0FBQ0gsT0FITCxFQUlLQyxXQUpMLENBSWlCLGVBSmpCLEVBS0tDLFFBTEwsQ0FLYyxlQUxkLEVBTUtDLFNBTkwsQ0FNZWIsQ0FBQyxDQUFDLFlBQUQsQ0FBRCxDQUFnQixDQUFoQixFQUFtQmMs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TUFBVCxFQUF4QixHQUE0QyxLQUFuRDtBQUNILE9BSEwsRUFJS0MsV0FKTCxDQUlpQixlQUpqQixFQUtLQyxRQUxMLENBS2MsZUFMZCxFQU1LQyxTQU5MLENBTWViLENBQUMsQ0FBQyxXQUFELENBQUQsQ0FBZSxDQUFmLEVBQWtCYyxZQU5qQztBQU9ILEtBUkQsTUFRTztBQUNIZCxPQUFDLENBQUMsV0FBRCxDQUFELENBQ0tNLEdBREwsQ0FDUyxVQUFTQyxDQUFULEVBQVlDLENBQVosRUFBZTtBQUNoQixlQUFPQSxDQUFDLEdBQUcsbUJBQUosR0FBMEJDLE1BQU0sR0FBR0MsTUFBVCxFQUExQixHQUE4QyxLQUFyRDtBQUNILE9BSEwsRUFJS0UsUUFKTCxDQUljLGVBSmQsRUFLS0QsV0FMTCxDQUtpQixlQUxqQixFQU1LRSxTQU5MLENBTWViLENBQUMsQ0FBQyxXQUFELENBQUQsQ0FBZSxDQUFmLEVBQWtCYyxZQU5qQztBQU9ILEtBMUd1QixDQTRHeEI7OztBQUNBZCxLQUFDLENBQUMsWUFBRCxDQUFELENBQWdCdUIsSUFBaEIsQ0FBcUJFLFNBQVMsR0FBRyxJQUFqQztBQUVILEdBL0dEOztBQWlIQSxTQUFPO0FBQ0g7QUFDQUUsUUFBSSxFQUFFLGdCQUFXO0FBQ2I3QixnQkFBVTs7QUFDVjBCLGdCQUFVO0FBQ2I7QUFMRSxHQUFQO0FBT0gsQ0F2UHFCLEVBQXRCOztBQXlQQUksTUFBTSxDQUFDM0IsUUFBRCxDQUFOLENBQWlCNEIsS0FBakIsQ0FBdUIsWUFBVztBQUM5QmhDLGlCQUFlLENBQUM4QixJQUFoQjtBQUNILENBRkQiLCJmaWxlIjoiLi9yZXNvdXJjZXMvbWV0cm9uaWMvanMvcGFnZXMvZmVhdHVyZXMvbWlzY2VsbGFuZW91cy9pZGxlLXRpbWVyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG52YXIgS1RJZGxlVGltZXJEZW1vID0gZnVuY3Rpb24oKSB7XHJcbiAgICB2YXIgX2luaXREZW1vMSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIC8vRGVmaW5lIGRlZmF1bHRcclxuICAgICAgICB2YXIgZG9jVGltZW91dCA9IDUwMDA7XHJcblxyXG4gICAgICAgIC8qXHJcbiAgICAgICAgSGFuZGxlIHJhaXNlZCBpZGxlL2FjdGl2ZSBldmVudHNcclxuICAgICAgICAqL1xyXG4gICAgICAgICQoZG9jdW1lbnQpLm9uKFwiaWRsZS5pZGxlVGltZXJcIiwgZnVuY3Rpb24oZXZlbnQsIGVsZW0sIG9iaikge1xyXG4gICAgICAgICAgICAkKFwiI2RvY1N0YXR1c1wiKVxyXG4gICAgICAgICAgICAgICAgLnZhbChmdW5jdGlvbihpLCB2KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHYgKyBcIklkbGUgQCBcIiArIG1vbWVudCgpLmZvcm1hdCgpICsgXCIgXFxuXCI7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKFwiYWxlcnQtc3VjY2Vzc1wiKVxyXG4gICAgICAgICAgICAgICAgLmFkZENsYXNzKFwiYWxlcnQtd2FybmluZ1wiKVxyXG4gICAgICAgICAgICAgICAgLnNjcm9sbFRvcCgkKFwiI2RvY1N0YXR1c1wiKVswXS5zY3JvbGxIZWlnaHQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQoZG9jdW1lbnQpLm9uKFwiYWN0aXZlLmlkbGVUaW1lclwiLCBmdW5jdGlvbihldmVudCwgZWxlbSwgb2JqLCBlKSB7XHJcbiAgICAgICAgICAgICQoXCIjZG9jU3RhdHVzXCIpXHJcbiAgICAgICAgICAgICAgICAudmFsKGZ1bmN0aW9uKGksIHYpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdiArIFwiQWN0aXZlIFtcIiArIGUudHlwZSArIFwiXSBbXCIgKyBlLnRhcmdldC5ub2RlTmFtZSArIFwiXSBAIFwiICsgbW9tZW50KCkuZm9ybWF0KCkgKyBcIiBcXG5cIjtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoXCJhbGVydC1zdWNjZXNzXCIpXHJcbiAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoXCJhbGVydC13YXJuaW5nXCIpXHJcbiAgICAgICAgICAgICAgICAuc2Nyb2xsVG9wKCQoXCIjZG9jU3RhdHVzXCIpWzBdLnNjcm9sbEhlaWdodCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8qXHJcbiAgICAgICAgSGFuZGxlIGJ1dHRvbiBldmVudHNcclxuICAgICAgICAqL1xyXG4gICAgICAgICQoXCIjYnRQYXVzZVwiKS5jbGljayhmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgJChkb2N1bWVudCkuaWRsZVRpbWVyKFwicGF1c2VcIik7XHJcbiAgICAgICAgICAgICQoXCIjZG9jU3RhdHVzXCIpXHJcbiAgICAgICAgICAgICAgICAudmFsKGZ1bmN0aW9uKGksIHYpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdiArIFwiUGF1c2VkIEAgXCIgKyBtb21lbnQoKS5mb3JtYXQoKSArIFwiIFxcblwiO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5zY3JvbGxUb3AoJChcIiNkb2NTdGF0dXNcIilbMF0uc2Nyb2xsSGVpZ2h0KTtcclxuICAgICAgICAgICAgJCh0aGlzKS5ibHVyKCk7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9KTtcclxuICAgICAgICAkKFwiI2J0UmVzdW1lXCIpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAkKGRvY3VtZW50KS5pZGxlVGltZXIoXCJyZXN1bWVcIik7XHJcbiAgICAgICAgICAgICQoXCIjZG9jU3RhdHVzXCIpXHJcbiAgICAgICAgICAgICAgICAudmFsKGZ1bmN0aW9uKGksIHYpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdiArIFwiUmVzdW1lZCBAIFwiICsgbW9tZW50KCkuZm9ybWF0KCkgKyBcIiBcXG5cIjtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuc2Nyb2xsVG9wKCQoXCIjZG9jU3RhdHVzXCIpWzBdLnNjcm9sbEhlaWdodCk7XHJcbiAgICAgICAgICAgICQodGhpcykuYmx1cigpO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJChcIiNidEVsYXBzZWRcIikuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICQoXCIjZG9jU3RhdHVzXCIpXHJcbiAgICAgICAgICAgICAgICAudmFsKGZ1bmN0aW9uKGksIHYpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdiArIFwiRWxhcHNlZCAoc2luY2UgYmVjb21pbmcgYWN0aXZlKTogXCIgKyAkKGRvY3VtZW50KS5pZGxlVGltZXIoXCJnZXRFbGFwc2VkVGltZVwiKSArIFwiIFxcblwiO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5zY3JvbGxUb3AoJChcIiNkb2NTdGF0dXNcIilbMF0uc2Nyb2xsSGVpZ2h0KTtcclxuICAgICAgICAgICAgJCh0aGlzKS5ibHVyKCk7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9KTtcclxuICAgICAgICAkKFwiI2J0RGVzdHJveVwiKS5jbGljayhmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgJChkb2N1bWVudCkuaWRsZVRpbWVyKFwiZGVzdHJveVwiKTtcclxuICAgICAgICAgICAgJChcIiNkb2NTdGF0dXNcIilcclxuICAgICAgICAgICAgICAgIC52YWwoZnVuY3Rpb24oaSwgdikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB2ICsgXCJEZXN0cm95ZWQ6IEAgXCIgKyBtb21lbnQoKS5mb3JtYXQoKSArIFwiIFxcblwiO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcyhcImFsZXJ0LXN1Y2Nlc3NcIilcclxuICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcyhcImFsZXJ0LXdhcm5pbmdcIilcclxuICAgICAgICAgICAgICAgIC5zY3JvbGxUb3AoJChcIiNkb2NTdGF0dXNcIilbMF0uc2Nyb2xsSGVpZ2h0KTtcclxuICAgICAgICAgICAgJCh0aGlzKS5ibHVyKCk7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9KTtcclxuICAgICAgICAkKFwiI2J0SW5pdFwiKS5jbGljayhmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgLy8gZm9yIGRlbW8gcHVycG9zZXMgc2hvdyBpbml0IHdpdGgganVzdCBvYmplY3RcclxuICAgICAgICAgICAgJChkb2N1bWVudCkuaWRsZVRpbWVyKHtcclxuICAgICAgICAgICAgICAgIHRpbWVvdXQ6IGRvY1RpbWVvdXRcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICQoXCIjZG9jU3RhdHVzXCIpXHJcbiAgICAgICAgICAgICAgICAudmFsKGZ1bmN0aW9uKGksIHYpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdiArIFwiSW5pdDogQCBcIiArIG1vbWVudCgpLmZvcm1hdCgpICsgXCIgXFxuXCI7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLnNjcm9sbFRvcCgkKFwiI2RvY1N0YXR1c1wiKVswXS5zY3JvbGxIZWlnaHQpO1xyXG5cclxuICAgICAgICAgICAgLy9BcHBseSBjbGFzc2VzIGZvciBkZWZhdWx0IHN0YXRlXHJcbiAgICAgICAgICAgIGlmICgkKGRvY3VtZW50KS5pZGxlVGltZXIoXCJpc0lkbGVcIikpIHtcclxuICAgICAgICAgICAgICAgICQoXCIjZG9jU3RhdHVzXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKFwiYWxlcnQtc3VjY2Vzc1wiKVxyXG4gICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcyhcImFsZXJ0LXdhcm5pbmdcIik7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAkKFwiI2RvY1N0YXR1c1wiKVxyXG4gICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcyhcImFsZXJ0LXN1Y2Nlc3NcIilcclxuICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoXCJhbGVydC13YXJuaW5nXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICQodGhpcykuYmx1cigpO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vQ2xlYXIgb2xkIHN0YXR1c2VzXHJcbiAgICAgICAgJChcIiNkb2NTdGF0dXNcIikudmFsKFwiXCIpO1xyXG5cclxuICAgICAgICAvL1N0YXJ0IHRpbWVvdXQsIHBhc3Npbmcgbm8gb3B0aW9uc1xyXG4gICAgICAgIC8vU2FtZSBhcyAkLmlkbGVUaW1lcihkb2NUaW1lb3V0LCBkb2NPcHRpb25zKTtcclxuICAgICAgICAkKGRvY3VtZW50KS5pZGxlVGltZXIoZG9jVGltZW91dCk7XHJcblxyXG4gICAgICAgIC8vRm9yIGRlbW8gcHVycG9zZXMsIHN0eWxlIGJhc2VkIG9uIGluaXRpYWwgc3RhdGVcclxuICAgICAgICBpZiAoJChkb2N1bWVudCkuaWRsZVRpbWVyKFwiaXNJZGxlXCIpKSB7XHJcbiAgICAgICAgICAgICQoXCIjZG9jU3RhdHVzXCIpXHJcbiAgICAgICAgICAgICAgICAudmFsKGZ1bmN0aW9uKGksIHYpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdiArIFwiSW5pdGlhbCBJZGxlIFN0YXRlIEAgXCIgKyBtb21lbnQoKS5mb3JtYXQoKSArIFwiIFxcblwiO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcyhcImFsZXJ0LXN1Y2Nlc3NcIilcclxuICAgICAgICAgICAgICAgIC5hZGRDbGFzcyhcImFsZXJ0LXdhcm5pbmdcIilcclxuICAgICAgICAgICAgICAgIC5zY3JvbGxUb3AoJChcIiNkb2NTdGF0dXNcIilbMF0uc2Nyb2xsSGVpZ2h0KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkKFwiI2RvY1N0YXR1c1wiKVxyXG4gICAgICAgICAgICAgICAgLnZhbChmdW5jdGlvbihpLCB2KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHYgKyBcIkluaXRpYWwgQWN0aXZlIFN0YXRlIEAgXCIgKyBtb21lbnQoKS5mb3JtYXQoKSArIFwiIFxcblwiO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5hZGRDbGFzcyhcImFsZXJ0LXN1Y2Nlc3NcIilcclxuICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcyhcImFsZXJ0LXdhcm5pbmdcIilcclxuICAgICAgICAgICAgICAgIC5zY3JvbGxUb3AoJChcIiNkb2NTdGF0dXNcIilbMF0uc2Nyb2xsSGVpZ2h0KTtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAvL0ZvciBkZW1vIHB1cnBvc2VzLCBkaXNwbGF5IHRoZSBhY3R1YWwgdGltZW91dCBvbiB0aGUgcGFnZVxyXG4gICAgICAgICQoXCIjZG9jVGltZW91dFwiKS50ZXh0KGRvY1RpbWVvdXQgLyAxMDAwKTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgX2luaXREZW1vMiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIC8vRGVmaW5lIHRleHRhcmVhIHNldHRpbmdzXHJcbiAgICAgICAgdmFyXHJcbiAgICAgICAgICAgIHRhVGltZW91dCA9IDMwMDA7XHJcblxyXG4gICAgICAgIC8qXHJcbiAgICAgICAgSGFuZGxlIHJhaXNlZCBpZGxlL2FjdGl2ZSBldmVudHNcclxuICAgICAgICAqL1xyXG4gICAgICAgICQoXCIjZWxTdGF0dXNcIikub24oXCJpZGxlLmlkbGVUaW1lclwiLCBmdW5jdGlvbihldmVudCwgZWxlbSwgb2JqKSB7XHJcbiAgICAgICAgICAgIC8vSWYgeW91IGRvbnQgc3RvcCBwcm9wYWdhdGlvbiBpdCB3aWxsIGJ1YmJsZSB1cCB0byBkb2N1bWVudCBldmVudCBoYW5kbGVyXHJcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cclxuICAgICAgICAgICAgJChcIiNlbFN0YXR1c1wiKVxyXG4gICAgICAgICAgICAgICAgLnZhbChmdW5jdGlvbihpLCB2KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHYgKyBcIklkbGUgQCBcIiArIG1vbWVudCgpLmZvcm1hdCgpICsgXCIgXFxuXCI7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKFwiYWxlcnQtc3VjY2Vzc1wiKVxyXG4gICAgICAgICAgICAgICAgLmFkZENsYXNzKFwiYWxlcnQtd2FybmluZ1wiKVxyXG4gICAgICAgICAgICAgICAgLnNjcm9sbFRvcCgkKFwiI2VsU3RhdHVzXCIpWzBdLnNjcm9sbEhlaWdodCk7XHJcblxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQoXCIjZWxTdGF0dXNcIikub24oXCJhY3RpdmUuaWRsZVRpbWVyXCIsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICAgICAgICAgIC8vSWYgeW91IGRvbnQgc3RvcCBwcm9wYWdhdGlvbiBpdCB3aWxsIGJ1YmJsZSB1cCB0byBkb2N1bWVudCBldmVudCBoYW5kbGVyXHJcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cclxuICAgICAgICAgICAgJChcIiNlbFN0YXR1c1wiKVxyXG4gICAgICAgICAgICAgICAgLnZhbChmdW5jdGlvbihpLCB2KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHYgKyBcIkFjdGl2ZSBAIFwiICsgbW9tZW50KCkuZm9ybWF0KCkgKyBcIiBcXG5cIjtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoXCJhbGVydC1zdWNjZXNzXCIpXHJcbiAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoXCJhbGVydC13YXJuaW5nXCIpXHJcbiAgICAgICAgICAgICAgICAuc2Nyb2xsVG9wKCQoXCIjZWxTdGF0dXNcIilbMF0uc2Nyb2xsSGVpZ2h0KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLypcclxuICAgICAgICBIYW5kbGUgYnV0dG9uIGV2ZW50c1xyXG4gICAgICAgICovXHJcbiAgICAgICAgJChcIiNidFJlc2V0XCIpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAkKFwiI2VsU3RhdHVzXCIpXHJcbiAgICAgICAgICAgICAgICAuaWRsZVRpbWVyKFwicmVzZXRcIilcclxuICAgICAgICAgICAgICAgIC52YWwoZnVuY3Rpb24oaSwgdikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB2ICsgXCJSZXNldCBAIFwiICsgbW9tZW50KCkuZm9ybWF0KCkgKyBcIiBcXG5cIjtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuc2Nyb2xsVG9wKCQoXCIjZWxTdGF0dXNcIilbMF0uc2Nyb2xsSGVpZ2h0KTtcclxuXHJcbiAgICAgICAgICAgIC8vQXBwbHkgY2xhc3NlcyBmb3IgZGVmYXVsdCBzdGF0ZVxyXG4gICAgICAgICAgICBpZiAoJChcIiNlbFN0YXR1c1wiKS5pZGxlVGltZXIoXCJpc0lkbGVcIikpIHtcclxuICAgICAgICAgICAgICAgICQoXCIjZWxTdGF0dXNcIilcclxuICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoXCJhbGVydC1zdWNjZXNzXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKFwiYWxlcnQtd2FybmluZ1wiKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICQoXCIjZWxTdGF0dXNcIilcclxuICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoXCJhbGVydC1zdWNjZXNzXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKFwiYWxlcnQtd2FybmluZ1wiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAkKHRoaXMpLmJsdXIoKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQoXCIjYnRSZW1haW5pbmdcIikuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICQoXCIjZWxTdGF0dXNcIilcclxuICAgICAgICAgICAgICAgIC52YWwoZnVuY3Rpb24oaSwgdikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB2ICsgXCJSZW1haW5pbmc6IFwiICsgJChcIiNlbFN0YXR1c1wiKS5pZGxlVGltZXIoXCJnZXRSZW1haW5pbmdUaW1lXCIpICsgXCIgXFxuXCI7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLnNjcm9sbFRvcCgkKFwiI2VsU3RhdHVzXCIpWzBdLnNjcm9sbEhlaWdodCk7XHJcbiAgICAgICAgICAgICQodGhpcykuYmx1cigpO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJChcIiNidExhc3RBY3RpdmVcIikuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICQoXCIjZWxTdGF0dXNcIilcclxuICAgICAgICAgICAgICAgIC52YWwoZnVuY3Rpb24oaSwgdikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB2ICsgXCJMYXN0QWN0aXZlOiBcIiArICQoXCIjZWxTdGF0dXNcIikuaWRsZVRpbWVyKFwiZ2V0TGFzdEFjdGl2ZVRpbWVcIikgKyBcIiBcXG5cIjtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuc2Nyb2xsVG9wKCQoXCIjZWxTdGF0dXNcIilbMF0uc2Nyb2xsSGVpZ2h0KTtcclxuICAgICAgICAgICAgJCh0aGlzKS5ibHVyKCk7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9KTtcclxuICAgICAgICAkKFwiI2J0U3RhdGVcIikuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICQoXCIjZWxTdGF0dXNcIilcclxuICAgICAgICAgICAgICAgIC52YWwoZnVuY3Rpb24oaSwgdikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB2ICsgXCJTdGF0ZTogXCIgKyAoJChcIiNlbFN0YXR1c1wiKS5pZGxlVGltZXIoXCJpc0lkbGVcIikgPyBcImlkbGVcIiA6IFwiYWN0aXZlXCIpICsgXCIgXFxuXCI7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLnNjcm9sbFRvcCgkKFwiI2VsU3RhdHVzXCIpWzBdLnNjcm9sbEhlaWdodCk7XHJcbiAgICAgICAgICAgICQodGhpcykuYmx1cigpO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vQ2xlYXIgdmFsdWUgaWYgdGhlcmUgd2FzIG9uZSBjYWNoZWQgJiBzdGFydCB0aW1lXHJcbiAgICAgICAgJChcIiNlbFN0YXR1c1wiKS52YWwoXCJcIikuaWRsZVRpbWVyKHRhVGltZW91dCk7XHJcblxyXG4gICAgICAgIC8vRm9yIGRlbW8gcHVycG9zZXMsIHNob3cgaW5pdGlhbCBzdGF0ZVxyXG4gICAgICAgIGlmICgkKFwiI2VsU3RhdHVzXCIpLmlkbGVUaW1lcihcImlzSWRsZVwiKSkge1xyXG4gICAgICAgICAgICAkKFwiI2VsU3RhdHVzXCIpXHJcbiAgICAgICAgICAgICAgICAudmFsKGZ1bmN0aW9uKGksIHYpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdiArIFwiSW5pdGlhbCBJZGxlIEAgXCIgKyBtb21lbnQoKS5mb3JtYXQoKSArIFwiIFxcblwiO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcyhcImFsZXJ0LXN1Y2Nlc3NcIilcclxuICAgICAgICAgICAgICAgIC5hZGRDbGFzcyhcImFsZXJ0LXdhcm5pbmdcIilcclxuICAgICAgICAgICAgICAgIC5zY3JvbGxUb3AoJChcIiNlbFN0YXR1c1wiKVswXS5zY3JvbGxIZWlnaHQpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICQoXCIjZWxTdGF0dXNcIilcclxuICAgICAgICAgICAgICAgIC52YWwoZnVuY3Rpb24oaSwgdikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB2ICsgXCJJbml0aWFsIEFjdGl2ZSBAIFwiICsgbW9tZW50KCkuZm9ybWF0KCkgKyBcIiBcXG5cIjtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoXCJhbGVydC1zdWNjZXNzXCIpXHJcbiAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoXCJhbGVydC13YXJuaW5nXCIpXHJcbiAgICAgICAgICAgICAgICAuc2Nyb2xsVG9wKCQoXCIjZWxTdGF0dXNcIilbMF0uc2Nyb2xsSGVpZ2h0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIERpc3BsYXkgdGhlIGFjdHVhbCB0aW1lb3V0IG9uIHRoZSBwYWdlXHJcbiAgICAgICAgJChcIiNlbFRpbWVvdXRcIikudGV4dCh0YVRpbWVvdXQgLyAxMDAwKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICAvL21haW4gZnVuY3Rpb24gdG8gaW5pdGlhdGUgdGhlIG1vZHVsZVxyXG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBfaW5pdERlbW8xKCk7XHJcbiAgICAgICAgICAgIF9pbml0RGVtbzIoKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59KCk7XHJcblxyXG5qUXVlcnkoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG4gICAgS1RJZGxlVGltZXJEZW1vLmluaXQoKTtcclxufSk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/metronic/js/pages/features/miscellaneous/idle-timer.js\n");

/***/ }),

/***/ 152:
/*!********************************************************************************!*\
  !*** multi ./resources/metronic/js/pages/features/miscellaneous/idle-timer.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Applications/MAMP/htdocs/spreadci4/public/admin/themes/metronic/resources/metronic/js/pages/features/miscellaneous/idle-timer.js */"./resources/metronic/js/pages/features/miscellaneous/idle-timer.js");


/***/ })

/******/ });