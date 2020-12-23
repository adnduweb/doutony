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
/******/ 	return __webpack_require__(__webpack_require__.s = 34);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/metronic/js/pages/custom/education/student/calendar.js":
/*!**************************************************************************!*\
  !*** ./resources/metronic/js/pages/custom/education/student/calendar.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var KTAppsEducationStudentCalendar = function () {
  return {
    //main function to initiate the module
    init: function init() {
      var todayDate = moment().startOf('day');
      var YM = todayDate.format('YYYY-MM');
      var YESTERDAY = todayDate.clone().subtract(1, 'day').format('YYYY-MM-DD');
      var TODAY = todayDate.format('YYYY-MM-DD');
      var TOMORROW = todayDate.clone().add(1, 'day').format('YYYY-MM-DD');
      var calendarEl = document.getElementById('kt_calendar');
      var calendar = new FullCalendar.Calendar(calendarEl, {
        plugins: ['bootstrap', 'interaction', 'dayGrid', 'timeGrid', 'list'],
        themeSystem: 'bootstrap',
        isRTL: KTUtil.isRTL(),
        header: {
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay'
        },
        height: 800,
        contentHeight: 780,
        aspectRatio: 3,
        // see: https://fullcalendar.io/docs/aspectRatio
        nowIndicator: true,
        now: TODAY + 'T09:25:00',
        // just for demo
        views: {
          dayGridMonth: {
            buttonText: 'month'
          },
          timeGridWeek: {
            buttonText: 'week'
          },
          timeGridDay: {
            buttonText: 'day'
          }
        },
        defaultView: 'dayGridMonth',
        defaultDate: TODAY,
        editable: true,
        eventLimit: true,
        // allow "more" link when too many events
        navLinks: true,
        events: [{
          title: 'All Day Event',
          start: YM + '-01',
          description: 'Toto lorem ipsum dolor sit incid idunt ut',
          className: "fc-event-danger fc-event-solid-warning"
        }, {
          title: 'Reporting',
          start: YM + '-14T13:30:00',
          description: 'Lorem ipsum dolor incid idunt ut labore',
          end: YM + '-14',
          className: "fc-event-success"
        }, {
          title: 'Company Trip',
          start: YM + '-02',
          description: 'Lorem ipsum dolor sit tempor incid',
          end: YM + '-03',
          className: "fc-event-primary"
        }, {
          title: 'ICT Expo 2017 - Product Release',
          start: YM + '-03',
          description: 'Lorem ipsum dolor sit tempor inci',
          end: YM + '-05',
          className: "fc-event-light fc-event-solid-primary"
        }, {
          title: 'Dinner',
          start: YM + '-12',
          description: 'Lorem ipsum dolor sit amet, conse ctetur',
          end: YM + '-10'
        }, {
          id: 999,
          title: 'Repeating Event',
          start: YM + '-09T16:00:00',
          description: 'Lorem ipsum dolor sit ncididunt ut labore',
          className: "fc-event-danger"
        }, {
          id: 1000,
          title: 'Repeating Event',
          description: 'Lorem ipsum dolor sit amet, labore',
          start: YM + '-16T16:00:00'
        }, {
          title: 'Conference',
          start: YESTERDAY,
          end: TOMORROW,
          description: 'Lorem ipsum dolor eius mod tempor labore',
          className: "fc-event-primary"
        }, {
          title: 'Meeting',
          start: TODAY + 'T10:30:00',
          end: TODAY + 'T12:30:00',
          description: 'Lorem ipsum dolor eiu idunt ut labore'
        }, {
          title: 'Lunch',
          start: TODAY + 'T12:00:00',
          className: "fc-event-info",
          description: 'Lorem ipsum dolor sit amet, ut labore'
        }, {
          title: 'Meeting',
          start: TODAY + 'T14:30:00',
          className: "fc-event-warning",
          description: 'Lorem ipsum conse ctetur adipi scing'
        }, {
          title: 'Happy Hour',
          start: TODAY + 'T17:30:00',
          className: "fc-event-info",
          description: 'Lorem ipsum dolor sit amet, conse ctetur'
        }, {
          title: 'Dinner',
          start: TOMORROW + 'T05:00:00',
          className: "fc-event-solid-danger fc-event-light",
          description: 'Lorem ipsum dolor sit ctetur adipi scing'
        }, {
          title: 'Birthday Party',
          start: TOMORROW + 'T07:00:00',
          className: "fc-event-primary",
          description: 'Lorem ipsum dolor sit amet, scing'
        }, {
          title: 'Click for Google',
          url: 'http://google.com/',
          start: YM + '-28',
          className: "fc-event-solid-info fc-event-light",
          description: 'Lorem ipsum dolor sit amet, labore'
        }],
        eventRender: function eventRender(info) {
          var element = $(info.el);

          if (info.event.extendedProps && info.event.extendedProps.description) {
            if (element.hasClass('fc-day-grid-event')) {
              element.data('content', info.event.extendedProps.description);
              element.data('placement', 'top');
              KTApp.initPopover(element);
            } else if (element.hasClass('fc-time-grid-event')) {
              element.find('.fc-title').append('<div class="fc-description">' + info.event.extendedProps.description + '</div>');
            } else if (element.find('.fc-list-item-title').lenght !== 0) {
              element.find('.fc-list-item-title').append('<div class="fc-description">' + info.event.extendedProps.description + '</div>');
            }
          }
        }
      });
      calendar.render();
    }
  };
}();

jQuery(document).ready(function () {
  KTAppsEducationStudentCalendar.init();
});

/***/ }),

/***/ 34:
/*!********************************************************************************!*\
  !*** multi ./resources/metronic/js/pages/custom/education/student/calendar.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Applications/MAMP/htdocs/spreadci4/public/admin/themes/metronic/resources/metronic/js/pages/custom/education/student/calendar.js */"./resources/metronic/js/pages/custom/education/student/calendar.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL21ldHJvbmljL2pzL3BhZ2VzL2N1c3RvbS9lZHVjYXRpb24vc3R1ZGVudC9jYWxlbmRhci5qcyJdLCJuYW1lcyI6WyJLVEFwcHNFZHVjYXRpb25TdHVkZW50Q2FsZW5kYXIiLCJpbml0IiwidG9kYXlEYXRlIiwibW9tZW50Iiwic3RhcnRPZiIsIllNIiwiZm9ybWF0IiwiWUVTVEVSREFZIiwiY2xvbmUiLCJzdWJ0cmFjdCIsIlRPREFZIiwiVE9NT1JST1ciLCJhZGQiLCJjYWxlbmRhckVsIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImNhbGVuZGFyIiwiRnVsbENhbGVuZGFyIiwiQ2FsZW5kYXIiLCJwbHVnaW5zIiwidGhlbWVTeXN0ZW0iLCJpc1JUTCIsIktUVXRpbCIsImhlYWRlciIsImxlZnQiLCJjZW50ZXIiLCJyaWdodCIsImhlaWdodCIsImNvbnRlbnRIZWlnaHQiLCJhc3BlY3RSYXRpbyIsIm5vd0luZGljYXRvciIsIm5vdyIsInZpZXdzIiwiZGF5R3JpZE1vbnRoIiwiYnV0dG9uVGV4dCIsInRpbWVHcmlkV2VlayIsInRpbWVHcmlkRGF5IiwiZGVmYXVsdFZpZXciLCJkZWZhdWx0RGF0ZSIsImVkaXRhYmxlIiwiZXZlbnRMaW1pdCIsIm5hdkxpbmtzIiwiZXZlbnRzIiwidGl0bGUiLCJzdGFydCIsImRlc2NyaXB0aW9uIiwiY2xhc3NOYW1lIiwiZW5kIiwiaWQiLCJ1cmwiLCJldmVudFJlbmRlciIsImluZm8iLCJlbGVtZW50IiwiJCIsImVsIiwiZXZlbnQiLCJleHRlbmRlZFByb3BzIiwiaGFzQ2xhc3MiLCJkYXRhIiwiS1RBcHAiLCJpbml0UG9wb3ZlciIsImZpbmQiLCJhcHBlbmQiLCJsZW5naHQiLCJyZW5kZXIiLCJqUXVlcnkiLCJyZWFkeSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7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b0QsS0FBakIsQ0FBdUIsWUFBVztBQUM5QmxFLGdDQUE4QixDQUFDQyxJQUEvQjtBQUNILENBRkQsRSIsImZpbGUiOiIvZGV2ZWxvcG1lbnQvanMvcGFnZXMvY3VzdG9tL2VkdWNhdGlvbi9zdHVkZW50L2NhbGVuZGFyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAzNCk7XG4iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbnZhciBLVEFwcHNFZHVjYXRpb25TdHVkZW50Q2FsZW5kYXIgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIC8vbWFpbiBmdW5jdGlvbiB0byBpbml0aWF0ZSB0aGUgbW9kdWxlXHJcbiAgICAgICAgaW5pdDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHZhciB0b2RheURhdGUgPSBtb21lbnQoKS5zdGFydE9mKCdkYXknKTtcclxuICAgICAgICAgICAgdmFyIFlNID0gdG9kYXlEYXRlLmZvcm1hdCgnWVlZWS1NTScpO1xyXG4gICAgICAgICAgICB2YXIgWUVTVEVSREFZID0gdG9kYXlEYXRlLmNsb25lKCkuc3VidHJhY3QoMSwgJ2RheScpLmZvcm1hdCgnWVlZWS1NTS1ERCcpO1xyXG4gICAgICAgICAgICB2YXIgVE9EQVkgPSB0b2RheURhdGUuZm9ybWF0KCdZWVlZLU1NLUREJyk7XHJcbiAgICAgICAgICAgIHZhciBUT01PUlJPVyA9IHRvZGF5RGF0ZS5jbG9uZSgpLmFkZCgxLCAnZGF5JykuZm9ybWF0KCdZWVlZLU1NLUREJyk7XHJcblxyXG4gICAgICAgICAgICB2YXIgY2FsZW5kYXJFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdrdF9jYWxlbmRhcicpO1xyXG4gICAgICAgICAgICB2YXIgY2FsZW5kYXIgPSBuZXcgRnVsbENhbGVuZGFyLkNhbGVuZGFyKGNhbGVuZGFyRWwsIHtcclxuICAgICAgICAgICAgICAgIHBsdWdpbnM6IFsgJ2Jvb3RzdHJhcCcsICdpbnRlcmFjdGlvbicsICdkYXlHcmlkJywgJ3RpbWVHcmlkJywgJ2xpc3QnIF0sXHJcbiAgICAgICAgICAgICAgICB0aGVtZVN5c3RlbTogJ2Jvb3RzdHJhcCcsXHJcblxyXG4gICAgICAgICAgICAgICAgaXNSVEw6IEtUVXRpbC5pc1JUTCgpLFxyXG5cclxuICAgICAgICAgICAgICAgIGhlYWRlcjoge1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6ICdwcmV2LG5leHQgdG9kYXknLFxyXG4gICAgICAgICAgICAgICAgICAgIGNlbnRlcjogJ3RpdGxlJyxcclxuICAgICAgICAgICAgICAgICAgICByaWdodDogJ2RheUdyaWRNb250aCx0aW1lR3JpZFdlZWssdGltZUdyaWREYXknXHJcbiAgICAgICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgICAgIGhlaWdodDogODAwLFxyXG4gICAgICAgICAgICAgICAgY29udGVudEhlaWdodDogNzgwLFxyXG4gICAgICAgICAgICAgICAgYXNwZWN0UmF0aW86IDMsICAvLyBzZWU6IGh0dHBzOi8vZnVsbGNhbGVuZGFyLmlvL2RvY3MvYXNwZWN0UmF0aW9cclxuXHJcbiAgICAgICAgICAgICAgICBub3dJbmRpY2F0b3I6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBub3c6IFRPREFZICsgJ1QwOToyNTowMCcsIC8vIGp1c3QgZm9yIGRlbW9cclxuXHJcbiAgICAgICAgICAgICAgICB2aWV3czoge1xyXG4gICAgICAgICAgICAgICAgICAgIGRheUdyaWRNb250aDogeyBidXR0b25UZXh0OiAnbW9udGgnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgdGltZUdyaWRXZWVrOiB7IGJ1dHRvblRleHQ6ICd3ZWVrJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHRpbWVHcmlkRGF5OiB7IGJ1dHRvblRleHQ6ICdkYXknIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICAgICAgZGVmYXVsdFZpZXc6ICdkYXlHcmlkTW9udGgnLFxyXG4gICAgICAgICAgICAgICAgZGVmYXVsdERhdGU6IFRPREFZLFxyXG5cclxuICAgICAgICAgICAgICAgIGVkaXRhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgZXZlbnRMaW1pdDogdHJ1ZSwgLy8gYWxsb3cgXCJtb3JlXCIgbGluayB3aGVuIHRvbyBtYW55IGV2ZW50c1xyXG4gICAgICAgICAgICAgICAgbmF2TGlua3M6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBldmVudHM6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnQWxsIERheSBFdmVudCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0OiBZTSArICctMDEnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ1RvdG8gbG9yZW0gaXBzdW0gZG9sb3Igc2l0IGluY2lkIGlkdW50IHV0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBcImZjLWV2ZW50LWRhbmdlciBmYy1ldmVudC1zb2xpZC13YXJuaW5nXCJcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdSZXBvcnRpbmcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFydDogWU0gKyAnLTE0VDEzOjMwOjAwJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICdMb3JlbSBpcHN1bSBkb2xvciBpbmNpZCBpZHVudCB1dCBsYWJvcmUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbmQ6IFlNICsgJy0xNCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogXCJmYy1ldmVudC1zdWNjZXNzXCJcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdDb21wYW55IFRyaXAnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFydDogWU0gKyAnLTAyJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgdGVtcG9yIGluY2lkJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW5kOiBZTSArICctMDMnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6IFwiZmMtZXZlbnQtcHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnSUNUIEV4cG8gMjAxNyAtIFByb2R1Y3QgUmVsZWFzZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0OiBZTSArICctMDMnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCB0ZW1wb3IgaW5jaScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuZDogWU0gKyAnLTA1JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBcImZjLWV2ZW50LWxpZ2h0IGZjLWV2ZW50LXNvbGlkLXByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ0Rpbm5lcicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0OiBZTSArICctMTInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZSBjdGV0dXInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbmQ6IFlNICsgJy0xMCdcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IDk5OSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdSZXBlYXRpbmcgRXZlbnQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFydDogWU0gKyAnLTA5VDE2OjAwOjAwJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgbmNpZGlkdW50IHV0IGxhYm9yZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogXCJmYy1ldmVudC1kYW5nZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogMTAwMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdSZXBlYXRpbmcgRXZlbnQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBsYWJvcmUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFydDogWU0gKyAnLTE2VDE2OjAwOjAwJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ0NvbmZlcmVuY2UnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFydDogWUVTVEVSREFZLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbmQ6IFRPTU9SUk9XLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0xvcmVtIGlwc3VtIGRvbG9yIGVpdXMgbW9kIHRlbXBvciBsYWJvcmUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6IFwiZmMtZXZlbnQtcHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnTWVldGluZycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0OiBUT0RBWSArICdUMTA6MzA6MDAnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbmQ6IFRPREFZICsgJ1QxMjozMDowMCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnTG9yZW0gaXBzdW0gZG9sb3IgZWl1IGlkdW50IHV0IGxhYm9yZSdcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdMdW5jaCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0OiBUT0RBWSArICdUMTI6MDA6MDAnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6IFwiZmMtZXZlbnQtaW5mb1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCB1dCBsYWJvcmUnXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnTWVldGluZycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0OiBUT0RBWSArICdUMTQ6MzA6MDAnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6IFwiZmMtZXZlbnQtd2FybmluZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0xvcmVtIGlwc3VtIGNvbnNlIGN0ZXR1ciBhZGlwaSBzY2luZydcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdIYXBweSBIb3VyJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnQ6IFRPREFZICsgJ1QxNzozMDowMCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogXCJmYy1ldmVudC1pbmZvXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlIGN0ZXR1cidcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdEaW5uZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFydDogVE9NT1JST1cgKyAnVDA1OjAwOjAwJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBcImZjLWV2ZW50LXNvbGlkLWRhbmdlciBmYy1ldmVudC1saWdodFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBjdGV0dXIgYWRpcGkgc2NpbmcnXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnQmlydGhkYXkgUGFydHknLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFydDogVE9NT1JST1cgKyAnVDA3OjAwOjAwJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBcImZjLWV2ZW50LXByaW1hcnlcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgc2NpbmcnXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnQ2xpY2sgZm9yIEdvb2dsZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogJ2h0dHA6Ly9nb29nbGUuY29tLycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0OiBZTSArICctMjgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6IFwiZmMtZXZlbnQtc29saWQtaW5mbyBmYy1ldmVudC1saWdodFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBsYWJvcmUnXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXSxcclxuXHJcbiAgICAgICAgICAgICAgICBldmVudFJlbmRlcjogZnVuY3Rpb24oaW5mbykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBlbGVtZW50ID0gJChpbmZvLmVsKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGluZm8uZXZlbnQuZXh0ZW5kZWRQcm9wcyAmJiBpbmZvLmV2ZW50LmV4dGVuZGVkUHJvcHMuZGVzY3JpcHRpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuaGFzQ2xhc3MoJ2ZjLWRheS1ncmlkLWV2ZW50JykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuZGF0YSgnY29udGVudCcsIGluZm8uZXZlbnQuZXh0ZW5kZWRQcm9wcy5kZXNjcmlwdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmRhdGEoJ3BsYWNlbWVudCcsICd0b3AnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEtUQXBwLmluaXRQb3BvdmVyKGVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGVsZW1lbnQuaGFzQ2xhc3MoJ2ZjLXRpbWUtZ3JpZC1ldmVudCcpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmZpbmQoJy5mYy10aXRsZScpLmFwcGVuZCgnPGRpdiBjbGFzcz1cImZjLWRlc2NyaXB0aW9uXCI+JyArIGluZm8uZXZlbnQuZXh0ZW5kZWRQcm9wcy5kZXNjcmlwdGlvbiArICc8L2Rpdj4nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChlbGVtZW50LmZpbmQoJy5mYy1saXN0LWl0ZW0tdGl0bGUnKS5sZW5naHQgIT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuZmluZCgnLmZjLWxpc3QtaXRlbS10aXRsZScpLmFwcGVuZCgnPGRpdiBjbGFzcz1cImZjLWRlc2NyaXB0aW9uXCI+JyArIGluZm8uZXZlbnQuZXh0ZW5kZWRQcm9wcy5kZXNjcmlwdGlvbiArICc8L2Rpdj4nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBjYWxlbmRhci5yZW5kZXIoKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59KCk7XHJcblxyXG5qUXVlcnkoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG4gICAgS1RBcHBzRWR1Y2F0aW9uU3R1ZGVudENhbGVuZGFyLmluaXQoKTtcclxufSk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=