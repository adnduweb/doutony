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
/******/ 	return __webpack_require__(__webpack_require__.s = 30);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/metronic/js/pages/custom/education/school/calendar.js":
/*!*************************************************************************!*\
  !*** ./resources/metronic/js/pages/custom/education/school/calendar.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var KTAppsEducationSchoolCalendar = function () {
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
  KTAppsEducationSchoolCalendar.init();
});

/***/ }),

/***/ 30:
/*!*******************************************************************************!*\
  !*** multi ./resources/metronic/js/pages/custom/education/school/calendar.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Applications/MAMP/htdocs/spreadci4/public/admin/themes/metronic/resources/metronic/js/pages/custom/education/school/calendar.js */"./resources/metronic/js/pages/custom/education/school/calendar.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL21ldHJvbmljL2pzL3BhZ2VzL2N1c3RvbS9lZHVjYXRpb24vc2Nob29sL2NhbGVuZGFyLmpzIl0sIm5hbWVzIjpbIktUQXBwc0VkdWNhdGlvblNjaG9vbENhbGVuZGFyIiwiaW5pdCIsInRvZGF5RGF0ZSIsIm1vbWVudCIsInN0YXJ0T2YiLCJZTSIsImZvcm1hdCIsIllFU1RFUkRBWSIsImNsb25lIiwic3VidHJhY3QiLCJUT0RBWSIsIlRPTU9SUk9XIiwiYWRkIiwiY2FsZW5kYXJFbCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjYWxlbmRhciIsIkZ1bGxDYWxlbmRhciIsIkNhbGVuZGFyIiwicGx1Z2lucyIsInRoZW1lU3lzdGVtIiwiaXNSVEwiLCJLVFV0aWwiLCJoZWFkZXIiLCJsZWZ0IiwiY2VudGVyIiwicmlnaHQiLCJoZWlnaHQiLCJjb250ZW50SGVpZ2h0IiwiYXNwZWN0UmF0aW8iLCJub3dJbmRpY2F0b3IiLCJub3ciLCJ2aWV3cyIsImRheUdyaWRNb250aCIsImJ1dHRvblRleHQiLCJ0aW1lR3JpZFdlZWsiLCJ0aW1lR3JpZERheSIsImRlZmF1bHRWaWV3IiwiZGVmYXVsdERhdGUiLCJlZGl0YWJsZSIsImV2ZW50TGltaXQiLCJuYXZMaW5rcyIsImV2ZW50cyIsInRpdGxlIiwic3RhcnQiLCJkZXNjcmlwdGlvbiIsImNsYXNzTmFtZSIsImVuZCIsImlkIiwidXJsIiwiZXZlbnRSZW5kZXIiLCJpbmZvIiwiZWxlbWVudCIsIiQiLCJlbCIsImV2ZW50IiwiZXh0ZW5kZWRQcm9wcyIsImhhc0NsYXNzIiwiZGF0YSIsIktUQXBwIiwiaW5pdFBvcG92ZXIiLCJmaW5kIiwiYXBwZW5kIiwibGVuZ2h0IiwicmVuZGVyIiwialF1ZXJ5IiwicmVhZHkiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FB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LEtBQWpCLENBQXVCLFlBQVc7QUFDOUJsRSwrQkFBNkIsQ0FBQ0MsSUFBOUI7QUFDSCxDQUZELEUiLCJmaWxlIjoiL2RldmVsb3BtZW50L2pzL3BhZ2VzL2N1c3RvbS9lZHVjYXRpb24vc2Nob29sL2NhbGVuZGFyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAzMCk7XG4iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbnZhciBLVEFwcHNFZHVjYXRpb25TY2hvb2xDYWxlbmRhciA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgLy9tYWluIGZ1bmN0aW9uIHRvIGluaXRpYXRlIHRoZSBtb2R1bGVcclxuICAgICAgICBpbml0OiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgdmFyIHRvZGF5RGF0ZSA9IG1vbWVudCgpLnN0YXJ0T2YoJ2RheScpO1xyXG4gICAgICAgICAgICB2YXIgWU0gPSB0b2RheURhdGUuZm9ybWF0KCdZWVlZLU1NJyk7XHJcbiAgICAgICAgICAgIHZhciBZRVNURVJEQVkgPSB0b2RheURhdGUuY2xvbmUoKS5zdWJ0cmFjdCgxLCAnZGF5JykuZm9ybWF0KCdZWVlZLU1NLUREJyk7XHJcbiAgICAgICAgICAgIHZhciBUT0RBWSA9IHRvZGF5RGF0ZS5mb3JtYXQoJ1lZWVktTU0tREQnKTtcclxuICAgICAgICAgICAgdmFyIFRPTU9SUk9XID0gdG9kYXlEYXRlLmNsb25lKCkuYWRkKDEsICdkYXknKS5mb3JtYXQoJ1lZWVktTU0tREQnKTtcclxuXHJcbiAgICAgICAgICAgIHZhciBjYWxlbmRhckVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2t0X2NhbGVuZGFyJyk7XHJcbiAgICAgICAgICAgIHZhciBjYWxlbmRhciA9IG5ldyBGdWxsQ2FsZW5kYXIuQ2FsZW5kYXIoY2FsZW5kYXJFbCwge1xyXG4gICAgICAgICAgICAgICAgcGx1Z2luczogWyAnYm9vdHN0cmFwJywgJ2ludGVyYWN0aW9uJywgJ2RheUdyaWQnLCAndGltZUdyaWQnLCAnbGlzdCcgXSxcclxuICAgICAgICAgICAgICAgIHRoZW1lU3lzdGVtOiAnYm9vdHN0cmFwJyxcclxuXHJcbiAgICAgICAgICAgICAgICBpc1JUTDogS1RVdGlsLmlzUlRMKCksXHJcblxyXG4gICAgICAgICAgICAgICAgaGVhZGVyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogJ3ByZXYsbmV4dCB0b2RheScsXHJcbiAgICAgICAgICAgICAgICAgICAgY2VudGVyOiAndGl0bGUnLFxyXG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAnZGF5R3JpZE1vbnRoLHRpbWVHcmlkV2Vlayx0aW1lR3JpZERheSdcclxuICAgICAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA4MDAsXHJcbiAgICAgICAgICAgICAgICBjb250ZW50SGVpZ2h0OiA3ODAsXHJcbiAgICAgICAgICAgICAgICBhc3BlY3RSYXRpbzogMywgIC8vIHNlZTogaHR0cHM6Ly9mdWxsY2FsZW5kYXIuaW8vZG9jcy9hc3BlY3RSYXRpb1xyXG5cclxuICAgICAgICAgICAgICAgIG5vd0luZGljYXRvcjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIG5vdzogVE9EQVkgKyAnVDA5OjI1OjAwJywgLy8ganVzdCBmb3IgZGVtb1xyXG5cclxuICAgICAgICAgICAgICAgIHZpZXdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF5R3JpZE1vbnRoOiB7IGJ1dHRvblRleHQ6ICdtb250aCcgfSxcclxuICAgICAgICAgICAgICAgICAgICB0aW1lR3JpZFdlZWs6IHsgYnV0dG9uVGV4dDogJ3dlZWsnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgdGltZUdyaWREYXk6IHsgYnV0dG9uVGV4dDogJ2RheScgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0VmlldzogJ2RheUdyaWRNb250aCcsXHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0RGF0ZTogVE9EQVksXHJcblxyXG4gICAgICAgICAgICAgICAgZWRpdGFibGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBldmVudExpbWl0OiB0cnVlLCAvLyBhbGxvdyBcIm1vcmVcIiBsaW5rIHdoZW4gdG9vIG1hbnkgZXZlbnRzXHJcbiAgICAgICAgICAgICAgICBuYXZMaW5rczogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGV2ZW50czogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdBbGwgRGF5IEV2ZW50JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnQ6IFlNICsgJy0wMScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnVG90byBsb3JlbSBpcHN1bSBkb2xvciBzaXQgaW5jaWQgaWR1bnQgdXQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6IFwiZmMtZXZlbnQtZGFuZ2VyIGZjLWV2ZW50LXNvbGlkLXdhcm5pbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ1JlcG9ydGluZycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0OiBZTSArICctMTRUMTM6MzA6MDAnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0xvcmVtIGlwc3VtIGRvbG9yIGluY2lkIGlkdW50IHV0IGxhYm9yZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuZDogWU0gKyAnLTE0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBcImZjLWV2ZW50LXN1Y2Nlc3NcIlxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ0NvbXBhbnkgVHJpcCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0OiBZTSArICctMDInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCB0ZW1wb3IgaW5jaWQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbmQ6IFlNICsgJy0wMycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogXCJmYy1ldmVudC1wcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdJQ1QgRXhwbyAyMDE3IC0gUHJvZHVjdCBSZWxlYXNlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnQ6IFlNICsgJy0wMycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IHRlbXBvciBpbmNpJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW5kOiBZTSArICctMDUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6IFwiZmMtZXZlbnQtbGlnaHQgZmMtZXZlbnQtc29saWQtcHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnRGlubmVyJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnQ6IFlNICsgJy0xMicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlIGN0ZXR1cicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuZDogWU0gKyAnLTEwJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogOTk5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ1JlcGVhdGluZyBFdmVudCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0OiBZTSArICctMDlUMTY6MDA6MDAnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBuY2lkaWR1bnQgdXQgbGFib3JlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBcImZjLWV2ZW50LWRhbmdlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiAxMDAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ1JlcGVhdGluZyBFdmVudCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGxhYm9yZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0OiBZTSArICctMTZUMTY6MDA6MDAnXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnQ29uZmVyZW5jZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0OiBZRVNURVJEQVksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuZDogVE9NT1JST1csXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnTG9yZW0gaXBzdW0gZG9sb3IgZWl1cyBtb2QgdGVtcG9yIGxhYm9yZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogXCJmYy1ldmVudC1wcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdNZWV0aW5nJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnQ6IFRPREFZICsgJ1QxMDozMDowMCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuZDogVE9EQVkgKyAnVDEyOjMwOjAwJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICdMb3JlbSBpcHN1bSBkb2xvciBlaXUgaWR1bnQgdXQgbGFib3JlJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ0x1bmNoJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnQ6IFRPREFZICsgJ1QxMjowMDowMCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogXCJmYy1ldmVudC1pbmZvXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIHV0IGxhYm9yZSdcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdNZWV0aW5nJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnQ6IFRPREFZICsgJ1QxNDozMDowMCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogXCJmYy1ldmVudC13YXJuaW5nXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnTG9yZW0gaXBzdW0gY29uc2UgY3RldHVyIGFkaXBpIHNjaW5nJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ0hhcHB5IEhvdXInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFydDogVE9EQVkgKyAnVDE3OjMwOjAwJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBcImZjLWV2ZW50LWluZm9cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2UgY3RldHVyJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ0Rpbm5lcicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0OiBUT01PUlJPVyArICdUMDU6MDA6MDAnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6IFwiZmMtZXZlbnQtc29saWQtZGFuZ2VyIGZjLWV2ZW50LWxpZ2h0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGN0ZXR1ciBhZGlwaSBzY2luZydcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdCaXJ0aGRheSBQYXJ0eScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0OiBUT01PUlJPVyArICdUMDc6MDA6MDAnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6IFwiZmMtZXZlbnQtcHJpbWFyeVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBzY2luZydcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdDbGljayBmb3IgR29vZ2xlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiAnaHR0cDovL2dvb2dsZS5jb20vJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnQ6IFlNICsgJy0yOCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogXCJmYy1ldmVudC1zb2xpZC1pbmZvIGZjLWV2ZW50LWxpZ2h0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGxhYm9yZSdcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdLFxyXG5cclxuICAgICAgICAgICAgICAgIGV2ZW50UmVuZGVyOiBmdW5jdGlvbihpbmZvKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGVsZW1lbnQgPSAkKGluZm8uZWwpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoaW5mby5ldmVudC5leHRlbmRlZFByb3BzICYmIGluZm8uZXZlbnQuZXh0ZW5kZWRQcm9wcy5kZXNjcmlwdGlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5oYXNDbGFzcygnZmMtZGF5LWdyaWQtZXZlbnQnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5kYXRhKCdjb250ZW50JywgaW5mby5ldmVudC5leHRlbmRlZFByb3BzLmRlc2NyaXB0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuZGF0YSgncGxhY2VtZW50JywgJ3RvcCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgS1RBcHAuaW5pdFBvcG92ZXIoZWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZWxlbWVudC5oYXNDbGFzcygnZmMtdGltZS1ncmlkLWV2ZW50JykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuZmluZCgnLmZjLXRpdGxlJykuYXBwZW5kKCc8ZGl2IGNsYXNzPVwiZmMtZGVzY3JpcHRpb25cIj4nICsgaW5mby5ldmVudC5leHRlbmRlZFByb3BzLmRlc2NyaXB0aW9uICsgJzwvZGl2PicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGVsZW1lbnQuZmluZCgnLmZjLWxpc3QtaXRlbS10aXRsZScpLmxlbmdodCAhPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5maW5kKCcuZmMtbGlzdC1pdGVtLXRpdGxlJykuYXBwZW5kKCc8ZGl2IGNsYXNzPVwiZmMtZGVzY3JpcHRpb25cIj4nICsgaW5mby5ldmVudC5leHRlbmRlZFByb3BzLmRlc2NyaXB0aW9uICsgJzwvZGl2PicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGNhbGVuZGFyLnJlbmRlcigpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn0oKTtcclxuXHJcbmpRdWVyeShkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcbiAgICBLVEFwcHNFZHVjYXRpb25TY2hvb2xDYWxlbmRhci5pbml0KCk7XHJcbn0pO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9