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
/******/ 	return __webpack_require__(__webpack_require__.s = 21);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/metronic/js/pages/custom/chat/chat.js":
/*!*********************************************************!*\
  !*** ./resources/metronic/js/pages/custom/chat/chat.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // Class definition

var KTAppChat = function () {
  var _chatAsideEl;

  var _chatAsideOffcanvasObj;

  var _chatContentEl; // Private functions


  var _initAside = function _initAside() {
    // Mobile offcanvas for mobile mode
    _chatAsideOffcanvasObj = new KTOffcanvas(_chatAsideEl, {
      overlay: true,
      baseClass: 'offcanvas-mobile',
      //closeBy: 'kt_chat_aside_close',
      toggleBy: 'kt_app_chat_toggle'
    }); // User listing

    var cardScrollEl = KTUtil.find(_chatAsideEl, '.scroll');
    var cardBodyEl = KTUtil.find(_chatAsideEl, '.card-body');
    var searchEl = KTUtil.find(_chatAsideEl, '.input-group');

    if (cardScrollEl) {
      // Initialize perfect scrollbar(see:  https://github.com/utatti/perfect-scrollbar)
      KTUtil.scrollInit(cardScrollEl, {
        mobileNativeScroll: true,
        // Enable native scroll for mobile
        desktopNativeScroll: false,
        // Disable native scroll and use custom scroll for desktop
        resetHeightOnDestroy: true,
        // Reset css height on scroll feature destroyed
        handleWindowResize: true,
        // Recalculate hight on window resize
        rememberPosition: true,
        // Remember scroll position in cookie
        height: function height() {
          // Calculate height
          var height;

          if (KTUtil.isBreakpointUp('lg')) {
            height = KTLayoutContent.getHeight();
          } else {
            height = KTUtil.getViewPort().height;
          }

          if (_chatAsideEl) {
            height = height - parseInt(KTUtil.css(_chatAsideEl, 'margin-top')) - parseInt(KTUtil.css(_chatAsideEl, 'margin-bottom'));
            height = height - parseInt(KTUtil.css(_chatAsideEl, 'padding-top')) - parseInt(KTUtil.css(_chatAsideEl, 'padding-bottom'));
          }

          if (cardScrollEl) {
            height = height - parseInt(KTUtil.css(cardScrollEl, 'margin-top')) - parseInt(KTUtil.css(cardScrollEl, 'margin-bottom'));
          }

          if (cardBodyEl) {
            height = height - parseInt(KTUtil.css(cardBodyEl, 'padding-top')) - parseInt(KTUtil.css(cardBodyEl, 'padding-bottom'));
          }

          if (searchEl) {
            height = height - parseInt(KTUtil.css(searchEl, 'height'));
            height = height - parseInt(KTUtil.css(searchEl, 'margin-top')) - parseInt(KTUtil.css(searchEl, 'margin-bottom'));
          } // Remove additional space


          height = height - 2;
          return height;
        }
      });
    }
  };

  return {
    // Public functions
    init: function init() {
      // Elements
      _chatAsideEl = KTUtil.getById('kt_chat_aside');
      _chatContentEl = KTUtil.getById('kt_chat_content'); // Init aside and user list

      _initAside(); // Init inline chat example


      KTLayoutChat.setup(KTUtil.getById('kt_chat_content')); // Trigger click to show popup modal chat on page load

      if (KTUtil.getById('kt_app_chat_toggle')) {
        setTimeout(function () {
          KTUtil.getById('kt_app_chat_toggle').click();
        }, 1000);
      }
    }
  };
}();

jQuery(document).ready(function () {
  KTAppChat.init();
});

/***/ }),

/***/ 21:
/*!***************************************************************!*\
  !*** multi ./resources/metronic/js/pages/custom/chat/chat.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Applications/MAMP/htdocs/spreadci4/public/admin/themes/metronic/resources/metronic/js/pages/custom/chat/chat.js */"./resources/metronic/js/pages/custom/chat/chat.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL21ldHJvbmljL2pzL3BhZ2VzL2N1c3RvbS9jaGF0L2NoYXQuanMiXSwibmFtZXMiOlsiS1RBcHBDaGF0IiwiX2NoYXRBc2lkZUVsIiwiX2NoYXRBc2lkZU9mZmNhbnZhc09iaiIsIl9jaGF0Q29udGVudEVsIiwiX2luaXRBc2lkZSIsIktUT2ZmY2FudmFzIiwib3ZlcmxheSIsImJhc2VDbGFzcyIsInRvZ2dsZUJ5IiwiY2FyZFNjcm9sbEVsIiwiS1RVdGlsIiwiZmluZCIsImNhcmRCb2R5RWwiLCJzZWFyY2hFbCIsInNjcm9sbEluaXQiLCJtb2JpbGVOYXRpdmVTY3JvbGwiLCJkZXNrdG9wTmF0aXZlU2Nyb2xsIiwicmVzZXRIZWlnaHRPbkRlc3Ryb3kiLCJoYW5kbGVXaW5kb3dSZXNpemUiLCJyZW1lbWJlclBvc2l0aW9uIiwiaGVpZ2h0IiwiaXNCcmVha3BvaW50VXAiLCJLVExheW91dENvbnRlbnQiLCJnZXRIZWlnaHQiLCJnZXRWaWV3UG9ydCIsInBhcnNlSW50IiwiY3NzIiwiaW5pdCIsImdldEJ5SWQiLCJLVExheW91dENoYXQiLCJzZXR1cCIsInNldFRpbWVvdXQiLCJjbGljayIsImpRdWVyeSIsImRvY3VtZW50IiwicmVhZHkiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7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QyxNQUFNLENBQUNDLFFBQUQsQ0FBTixDQUFpQkMsS0FBakIsQ0FBdUIsWUFBVztBQUNqQ25DLFdBQVMsQ0FBQzJCLElBQVY7QUFDQSxDQUZELEUiLCJmaWxlIjoiL2RldmVsb3BtZW50L2pzL3BhZ2VzL2N1c3RvbS9jaGF0L2NoYXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDIxKTtcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuLy8gQ2xhc3MgZGVmaW5pdGlvblxyXG52YXIgS1RBcHBDaGF0ID0gZnVuY3Rpb24gKCkge1xyXG5cdHZhciBfY2hhdEFzaWRlRWw7XHJcblx0dmFyIF9jaGF0QXNpZGVPZmZjYW52YXNPYmo7XHJcblx0dmFyIF9jaGF0Q29udGVudEVsO1xyXG5cclxuXHQvLyBQcml2YXRlIGZ1bmN0aW9uc1xyXG5cdHZhciBfaW5pdEFzaWRlID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0Ly8gTW9iaWxlIG9mZmNhbnZhcyBmb3IgbW9iaWxlIG1vZGVcclxuXHRcdF9jaGF0QXNpZGVPZmZjYW52YXNPYmogPSBuZXcgS1RPZmZjYW52YXMoX2NoYXRBc2lkZUVsLCB7XHJcblx0XHRcdG92ZXJsYXk6IHRydWUsXHJcbiAgICAgICAgICAgIGJhc2VDbGFzczogJ29mZmNhbnZhcy1tb2JpbGUnLFxyXG4gICAgICAgICAgICAvL2Nsb3NlQnk6ICdrdF9jaGF0X2FzaWRlX2Nsb3NlJyxcclxuICAgICAgICAgICAgdG9nZ2xlQnk6ICdrdF9hcHBfY2hhdF90b2dnbGUnXHJcbiAgICAgICAgfSk7XHJcblxyXG5cdFx0Ly8gVXNlciBsaXN0aW5nXHJcblx0XHR2YXIgY2FyZFNjcm9sbEVsID0gS1RVdGlsLmZpbmQoX2NoYXRBc2lkZUVsLCAnLnNjcm9sbCcpO1xyXG5cdFx0dmFyIGNhcmRCb2R5RWwgPSBLVFV0aWwuZmluZChfY2hhdEFzaWRlRWwsICcuY2FyZC1ib2R5Jyk7XHJcblx0XHR2YXIgc2VhcmNoRWwgPSBLVFV0aWwuZmluZChfY2hhdEFzaWRlRWwsICcuaW5wdXQtZ3JvdXAnKTtcclxuXHJcblx0XHRpZiAoY2FyZFNjcm9sbEVsKSB7XHJcblx0XHRcdC8vIEluaXRpYWxpemUgcGVyZmVjdCBzY3JvbGxiYXIoc2VlOiAgaHR0cHM6Ly9naXRodWIuY29tL3V0YXR0aS9wZXJmZWN0LXNjcm9sbGJhcilcclxuXHRcdFx0S1RVdGlsLnNjcm9sbEluaXQoY2FyZFNjcm9sbEVsLCB7XHJcblx0XHRcdFx0bW9iaWxlTmF0aXZlU2Nyb2xsOiB0cnVlLCAgLy8gRW5hYmxlIG5hdGl2ZSBzY3JvbGwgZm9yIG1vYmlsZVxyXG5cdFx0XHRcdGRlc2t0b3BOYXRpdmVTY3JvbGw6IGZhbHNlLCAvLyBEaXNhYmxlIG5hdGl2ZSBzY3JvbGwgYW5kIHVzZSBjdXN0b20gc2Nyb2xsIGZvciBkZXNrdG9wXHJcblx0XHRcdFx0cmVzZXRIZWlnaHRPbkRlc3Ryb3k6IHRydWUsICAvLyBSZXNldCBjc3MgaGVpZ2h0IG9uIHNjcm9sbCBmZWF0dXJlIGRlc3Ryb3llZFxyXG5cdFx0XHRcdGhhbmRsZVdpbmRvd1Jlc2l6ZTogdHJ1ZSwgLy8gUmVjYWxjdWxhdGUgaGlnaHQgb24gd2luZG93IHJlc2l6ZVxyXG5cdFx0XHRcdHJlbWVtYmVyUG9zaXRpb246IHRydWUsIC8vIFJlbWVtYmVyIHNjcm9sbCBwb3NpdGlvbiBpbiBjb29raWVcclxuXHRcdFx0XHRoZWlnaHQ6IGZ1bmN0aW9uKCkgeyAgLy8gQ2FsY3VsYXRlIGhlaWdodFxyXG5cdFx0XHRcdFx0dmFyIGhlaWdodDtcclxuXHJcblx0XHRcdFx0XHRpZiAoS1RVdGlsLmlzQnJlYWtwb2ludFVwKCdsZycpKSB7XHJcblx0XHRcdFx0XHRcdGhlaWdodCA9IEtUTGF5b3V0Q29udGVudC5nZXRIZWlnaHQoKTtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdGhlaWdodCA9IEtUVXRpbC5nZXRWaWV3UG9ydCgpLmhlaWdodDtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRpZiAoX2NoYXRBc2lkZUVsKSB7XHJcblx0XHRcdFx0XHRcdGhlaWdodCA9IGhlaWdodCAtIHBhcnNlSW50KEtUVXRpbC5jc3MoX2NoYXRBc2lkZUVsLCAnbWFyZ2luLXRvcCcpKSAtIHBhcnNlSW50KEtUVXRpbC5jc3MoX2NoYXRBc2lkZUVsLCAnbWFyZ2luLWJvdHRvbScpKTtcclxuXHRcdFx0XHRcdFx0aGVpZ2h0ID0gaGVpZ2h0IC0gcGFyc2VJbnQoS1RVdGlsLmNzcyhfY2hhdEFzaWRlRWwsICdwYWRkaW5nLXRvcCcpKSAtIHBhcnNlSW50KEtUVXRpbC5jc3MoX2NoYXRBc2lkZUVsLCAncGFkZGluZy1ib3R0b20nKSk7XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0aWYgKGNhcmRTY3JvbGxFbCkge1xyXG5cdFx0XHRcdFx0XHRoZWlnaHQgPSBoZWlnaHQgLSBwYXJzZUludChLVFV0aWwuY3NzKGNhcmRTY3JvbGxFbCwgJ21hcmdpbi10b3AnKSkgLSBwYXJzZUludChLVFV0aWwuY3NzKGNhcmRTY3JvbGxFbCwgJ21hcmdpbi1ib3R0b20nKSk7XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0aWYgKGNhcmRCb2R5RWwpIHtcclxuXHRcdFx0XHRcdFx0aGVpZ2h0ID0gaGVpZ2h0IC0gcGFyc2VJbnQoS1RVdGlsLmNzcyhjYXJkQm9keUVsLCAncGFkZGluZy10b3AnKSkgLSBwYXJzZUludChLVFV0aWwuY3NzKGNhcmRCb2R5RWwsICdwYWRkaW5nLWJvdHRvbScpKTtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRpZiAoc2VhcmNoRWwpIHtcclxuXHRcdFx0XHRcdFx0aGVpZ2h0ID0gaGVpZ2h0IC0gcGFyc2VJbnQoS1RVdGlsLmNzcyhzZWFyY2hFbCwgJ2hlaWdodCcpKTtcclxuXHRcdFx0XHRcdFx0aGVpZ2h0ID0gaGVpZ2h0IC0gcGFyc2VJbnQoS1RVdGlsLmNzcyhzZWFyY2hFbCwgJ21hcmdpbi10b3AnKSkgLSBwYXJzZUludChLVFV0aWwuY3NzKHNlYXJjaEVsLCAnbWFyZ2luLWJvdHRvbScpKTtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHQvLyBSZW1vdmUgYWRkaXRpb25hbCBzcGFjZVxyXG5cdFx0XHRcdFx0aGVpZ2h0ID0gaGVpZ2h0IC0gMjtcclxuXHJcblx0XHRcdFx0XHRyZXR1cm4gaGVpZ2h0O1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRyZXR1cm4ge1xyXG5cdFx0Ly8gUHVibGljIGZ1bmN0aW9uc1xyXG5cdFx0aW5pdDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdC8vIEVsZW1lbnRzXHJcblx0XHRcdF9jaGF0QXNpZGVFbCA9IEtUVXRpbC5nZXRCeUlkKCdrdF9jaGF0X2FzaWRlJyk7XHJcblx0XHRcdF9jaGF0Q29udGVudEVsID0gS1RVdGlsLmdldEJ5SWQoJ2t0X2NoYXRfY29udGVudCcpO1xyXG5cclxuXHRcdFx0Ly8gSW5pdCBhc2lkZSBhbmQgdXNlciBsaXN0XHJcblx0XHRcdF9pbml0QXNpZGUoKTtcclxuXHJcblx0XHRcdC8vIEluaXQgaW5saW5lIGNoYXQgZXhhbXBsZVxyXG5cdFx0XHRLVExheW91dENoYXQuc2V0dXAoS1RVdGlsLmdldEJ5SWQoJ2t0X2NoYXRfY29udGVudCcpKTtcclxuXHJcblx0XHRcdC8vIFRyaWdnZXIgY2xpY2sgdG8gc2hvdyBwb3B1cCBtb2RhbCBjaGF0IG9uIHBhZ2UgbG9hZFxyXG5cdFx0XHRpZiAoS1RVdGlsLmdldEJ5SWQoJ2t0X2FwcF9jaGF0X3RvZ2dsZScpKSB7XHJcblx0XHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdEtUVXRpbC5nZXRCeUlkKCdrdF9hcHBfY2hhdF90b2dnbGUnKS5jbGljaygpO1xyXG5cdFx0XHRcdH0sIDEwMDApO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fTtcclxufSgpO1xyXG5cclxualF1ZXJ5KGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcclxuXHRLVEFwcENoYXQuaW5pdCgpO1xyXG59KTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==