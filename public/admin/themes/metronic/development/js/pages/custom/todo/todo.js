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
/******/ 	return __webpack_require__(__webpack_require__.s = 51);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/metronic/js/pages/custom/todo/todo.js":
/*!*********************************************************!*\
  !*** ./resources/metronic/js/pages/custom/todo/todo.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // Class definition

var KTAppTodo = function () {
  // Private properties
  var _asideEl;

  var _listEl;

  var _viewEl;

  var _replyEl;

  var _asideOffcanvas; // Private methods


  var _initEditor = function _initEditor(form, editor) {
    // init editor
    var options = {
      modules: {
        toolbar: {}
      },
      placeholder: 'Type message...',
      theme: 'snow'
    };

    if (!KTUtil.getById(editor)) {
      return;
    } // Init editor


    var editor = new Quill('#' + editor, options); // Customize editor

    var toolbar = KTUtil.find(form, '.ql-toolbar');
    var editor = KTUtil.find(form, '.ql-editor');

    if (toolbar) {
      KTUtil.addClass(toolbar, 'px-5 border-top-0 border-left-0 border-right-0');
    }

    if (editor) {
      KTUtil.addClass(editor, 'px-8');
    }
  };

  var _initAttachments = function _initAttachments(elemId) {
    if (!KTUtil.getById(elemId)) {
      return;
    }

    var id = "#" + elemId;
    var previewNode = $(id + " .dropzone-item");
    previewNode.id = "";
    var previewTemplate = previewNode.parent('.dropzone-items').html();
    previewNode.remove();
    var myDropzone = new Dropzone(id, {
      // Make the whole body a dropzone
      url: "https://keenthemes.com/scripts/void.php",
      // Set the url for your upload script location
      parallelUploads: 20,
      maxFilesize: 1,
      // Max filesize in MB
      previewTemplate: previewTemplate,
      previewsContainer: id + " .dropzone-items",
      // Define the container to display the previews
      clickable: id + "_select" // Define the element that should be used as click trigger to select files.

    });
    myDropzone.on("addedfile", function (file) {
      // Hookup the start button
      $(document).find(id + ' .dropzone-item').css('display', '');
    }); // Update the total progress bar

    myDropzone.on("totaluploadprogress", function (progress) {
      document.querySelector(id + " .progress-bar").style.width = progress + "%";
    });
    myDropzone.on("sending", function (file) {
      // Show the total progress bar when upload starts
      document.querySelector(id + " .progress-bar").style.opacity = "1";
    }); // Hide the total progress bar when nothing's uploading anymore

    myDropzone.on("complete", function (progress) {
      var thisProgressBar = id + " .dz-complete";
      setTimeout(function () {
        $(thisProgressBar + " .progress-bar, " + thisProgressBar + " .progress").css('opacity', '0');
      }, 300);
    });
  }; // Public methods


  return {
    // Public functions
    init: function init() {
      // Init variables
      _asideEl = KTUtil.getById('kt_todo_aside');
      _listEl = KTUtil.getById('kt_todo_list');
      _viewEl = KTUtil.getById('kt_todo_view');
      _replyEl = KTUtil.getById('kt_todo_reply'); // Init handlers

      KTAppTodo.initAside();
      KTAppTodo.initList();
      KTAppTodo.initView();
      KTAppTodo.initReply();
    },
    initAside: function initAside() {
      // Mobile offcanvas for mobile mode
      _asideOffcanvas = new KTOffcanvas(_asideEl, {
        overlay: true,
        baseClass: 'offcanvas-mobile',
        //closeBy: 'kt_todo_aside_close',
        toggleBy: 'kt_subheader_mobile_toggle'
      }); // View list

      KTUtil.on(_asideEl, '.list-item[data-action="list"]', 'click', function (e) {
        var type = KTUtil.attr(this, 'data-type');
        var listItemsEl = KTUtil.find(_listEl, '.kt-inbox__items');
        var navItemEl = this.closest('.kt-nav__item');
        var navItemActiveEl = KTUtil.find(_asideEl, '.kt-nav__item.kt-nav__item--active'); // demo loading

        var loading = new KTDialog({
          'type': 'loader',
          'placement': 'top center',
          'message': 'Loading ...'
        });
        loading.show();
        setTimeout(function () {
          loading.hide();
          KTUtil.css(_listEl, 'display', 'flex'); // show list

          KTUtil.css(_viewEl, 'display', 'none'); // hide view

          KTUtil.addClass(navItemEl, 'kt-nav__item--active');
          KTUtil.removeClass(navItemActiveEl, 'kt-nav__item--active');
          KTUtil.attr(listItemsEl, 'data-type', type);
        }, 600);
      });
    },
    initList: function initList() {
      // Group selection
      KTUtil.on(_listEl, '[data-inbox="group-select"] input', 'click', function () {
        var messages = KTUtil.findAll(_listEl, '[data-inbox="message"]');

        for (var i = 0, j = messages.length; i < j; i++) {
          var message = messages[i];
          var checkbox = KTUtil.find(message, '.checkbox input');
          checkbox.checked = this.checked;

          if (this.checked) {
            KTUtil.addClass(message, 'active');
          } else {
            KTUtil.removeClass(message, 'active');
          }
        }
      }); // Individual selection

      KTUtil.on(_listEl, '[data-inbox="message"] [data-inbox="actions"] .checkbox input', 'click', function () {
        var item = this.closest('[data-inbox="message"]');

        if (item && this.checked) {
          KTUtil.addClass(item, 'active');
        } else {
          KTUtil.removeClass(item, 'active');
        }
      });
    },
    initView: function initView() {
      // Back to listing
      KTUtil.on(_viewEl, '[data-inbox="back"]', 'click', function () {
        // demo loading
        var loading = new KTDialog({
          'type': 'loader',
          'placement': 'top center',
          'message': 'Loading ...'
        });
        loading.show();
        setTimeout(function () {
          loading.hide();
          KTUtil.addClass(_listEl, 'd-block');
          KTUtil.removeClass(_listEl, 'd-none');
          KTUtil.addClass(_viewEl, 'd-none');
          KTUtil.removeClass(_viewEl, 'd-block');
        }, 700);
      }); // Expand/Collapse reply

      KTUtil.on(_viewEl, '[data-inbox="message"]', 'click', function (e) {
        var message = this.closest('[data-inbox="message"]');
        var dropdownToggleEl = KTUtil.find(this, '[data-toggle="dropdown"]');
        var toolbarEl = KTUtil.find(this, '[data-inbox="toolbar"]'); // skip dropdown toggle click

        if (e.target === dropdownToggleEl || dropdownToggleEl && dropdownToggleEl.contains(e.target) === true) {
          return false;
        } // skip group actions click


        if (e.target === toolbarEl || toolbarEl && toolbarEl.contains(e.target) === true) {
          return false;
        }

        if (KTUtil.hasClass(message, 'toggle-on')) {
          KTUtil.addClass(message, 'toggle-off');
          KTUtil.removeClass(message, 'toggle-on');
        } else {
          KTUtil.removeClass(message, 'toggle-off');
          KTUtil.addClass(message, 'toggle-on');
        }
      });
    },
    initReply: function initReply() {
      _initEditor(_replyEl, 'kt_todo_reply_editor');

      _initAttachments('kt_todo_reply_attachments');
    }
  };
}(); // Class Initialization


jQuery(document).ready(function () {
  KTAppTodo.init();
});

/***/ }),

/***/ 51:
/*!***************************************************************!*\
  !*** multi ./resources/metronic/js/pages/custom/todo/todo.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Applications/MAMP/htdocs/spreadci4/public/admin/themes/metronic/resources/metronic/js/pages/custom/todo/todo.js */"./resources/metronic/js/pages/custom/todo/todo.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL21ldHJvbmljL2pzL3BhZ2VzL2N1c3RvbS90b2RvL3RvZG8uanMiXSwibmFtZXMiOlsiS1RBcHBUb2RvIiwiX2FzaWRlRWwiLCJfbGlzdEVsIiwiX3ZpZXdFbCIsIl9yZXBseUVsIiwiX2FzaWRlT2ZmY2FudmFzIiwiX2luaXRFZGl0b3IiLCJmb3JtIiwiZWRpdG9yIiwib3B0aW9ucyIsIm1vZHVsZXMiLCJ0b29sYmFyIiwicGxhY2Vob2xkZXIiLCJ0aGVtZSIsIktUVXRpbCIsImdldEJ5SWQiLCJRdWlsbCIsImZpbmQiLCJhZGRDbGFzcyIsIl9pbml0QXR0YWNobWVudHMiLCJlbGVtSWQiLCJpZCIsInByZXZpZXdOb2RlIiwiJCIsInByZXZpZXdUZW1wbGF0ZSIsInBhcmVudCIsImh0bWwiLCJyZW1vdmUiLCJteURyb3B6b25lIiwiRHJvcHpvbmUiLCJ1cmwiLCJwYXJhbGxlbFVwbG9hZHMiLCJtYXhGaWxlc2l6ZSIsInByZXZpZXdzQ29udGFpbmVyIiwiY2xpY2thYmxlIiwib24iLCJmaWxlIiwiZG9jdW1lbnQiLCJjc3MiLCJwcm9ncmVzcyIsInF1ZXJ5U2VsZWN0b3IiLCJzdHlsZSIsIndpZHRoIiwib3BhY2l0eSIsInRoaXNQcm9ncmVzc0JhciIsInNldFRpbWVvdXQiLCJpbml0IiwiaW5pdEFzaWRlIiwiaW5pdExpc3QiLCJpbml0VmlldyIsImluaXRSZXBseSIsIktUT2ZmY2FudmFzIiwib3ZlcmxheSIsImJhc2VDbGFzcyIsInRvZ2dsZUJ5IiwiZSIsInR5cGUiLCJhdHRyIiwibGlzdEl0ZW1zRWwiLCJuYXZJdGVtRWwiLCJjbG9zZXN0IiwibmF2SXRlbUFjdGl2ZUVsIiwibG9hZGluZyIsIktURGlhbG9nIiwic2hvdyIsImhpZGUiLCJyZW1vdmVDbGFzcyIsIm1lc3NhZ2VzIiwiZmluZEFsbCIsImkiLCJqIiwibGVuZ3RoIiwibWVzc2FnZSIsImNoZWNrYm94IiwiY2hlY2tlZCIsIml0ZW0iLCJkcm9wZG93blRvZ2dsZUVsIiwidG9vbGJhckVsIiwidGFyZ2V0IiwiY29udGFpbnMiLCJoYXNDbGFzcyIsImpRdWVyeSIsInJlYWR5Il0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0NDaEZBOztBQUNBLElBQUlBLFNBQVMsR0FBRyxZQUFXO0FBQ3ZCO0FBQ0EsTUFBSUMsUUFBSjs7QUFDQSxNQUFJQyxPQUFKOztBQUNBLE1BQUlDLE9BQUo7O0FBQ0EsTUFBSUMsUUFBSjs7QUFDQSxNQUFJQyxlQUFKLENBTnVCLENBUXZCOzs7QUFDQSxNQUFJQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFTQyxJQUFULEVBQWVDLE1BQWYsRUFBdUI7QUFDckM7QUFDQSxRQUFJQyxPQUFPLEdBQUc7QUFDVkMsYUFBTyxFQUFFO0FBQ0xDLGVBQU8sRUFBRTtBQURKLE9BREM7QUFJVkMsaUJBQVcsRUFBRSxpQkFKSDtBQUtW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TSxDQUFDSSxRQUFQLENBQWdCc0QsT0FBaEIsRUFBeUIsWUFBekI7QUFDQTFELGdCQUFNLENBQUNvRCxXQUFQLENBQW1CTSxPQUFuQixFQUE0QixXQUE1QjtBQUNILFNBSEQsTUFHTztBQUNIMUQsZ0JBQU0sQ0FBQ29ELFdBQVAsQ0FBbUJNLE9BQW5CLEVBQTRCLFlBQTVCO0FBQ0ExRCxnQkFBTSxDQUFDSSxRQUFQLENBQWdCc0QsT0FBaEIsRUFBeUIsV0FBekI7QUFDSDtBQUNKLE9BdkJEO0FBd0JILEtBcElFO0FBc0lIdEIsYUFBUyxFQUFFLHFCQUFXO0FBQ2xCNUMsaUJBQVcsQ0FBQ0YsUUFBRCxFQUFXLHNCQUFYLENBQVg7O0FBQ0FlLHNCQUFnQixDQUFDLDJCQUFELENBQWhCO0FBQ0g7QUF6SUUsR0FBUDtBQTJJSCxDQS9OZSxFQUFoQixDLENBaU9BOzs7QUFDQThELE1BQU0sQ0FBQzVDLFFBQUQsQ0FBTixDQUFpQjZDLEtBQWpCLENBQXVCLFlBQVc7QUFDOUJsRixXQUFTLENBQUM4QyxJQUFWO0FBQ0gsQ0FGRCxFIiwiZmlsZSI6Ii9kZXZlbG9wbWVudC9qcy9wYWdlcy9jdXN0b20vdG9kby90b2RvLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA1MSk7XG4iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbi8vIENsYXNzIGRlZmluaXRpb25cclxudmFyIEtUQXBwVG9kbyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgLy8gUHJpdmF0ZSBwcm9wZXJ0aWVzXHJcbiAgICB2YXIgX2FzaWRlRWw7XHJcbiAgICB2YXIgX2xpc3RFbDtcclxuICAgIHZhciBfdmlld0VsO1xyXG4gICAgdmFyIF9yZXBseUVsO1xyXG4gICAgdmFyIF9hc2lkZU9mZmNhbnZhcztcclxuXHJcbiAgICAvLyBQcml2YXRlIG1ldGhvZHNcclxuICAgIHZhciBfaW5pdEVkaXRvciA9IGZ1bmN0aW9uKGZvcm0sIGVkaXRvcikge1xyXG4gICAgICAgIC8vIGluaXQgZWRpdG9yXHJcbiAgICAgICAgdmFyIG9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgIG1vZHVsZXM6IHtcclxuICAgICAgICAgICAgICAgIHRvb2xiYXI6IHt9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyOiAnVHlwZSBtZXNzYWdlLi4uJyxcclxuICAgICAgICAgICAgdGhlbWU6ICdzbm93J1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGlmICghS1RVdGlsLmdldEJ5SWQoZWRpdG9yKSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBJbml0IGVkaXRvclxyXG4gICAgICAgIHZhciBlZGl0b3IgPSBuZXcgUXVpbGwoJyMnICsgZWRpdG9yLCBvcHRpb25zKTtcclxuXHJcbiAgICAgICAgLy8gQ3VzdG9taXplIGVkaXRvclxyXG4gICAgICAgIHZhciB0b29sYmFyID0gS1RVdGlsLmZpbmQoZm9ybSwgJy5xbC10b29sYmFyJyk7XHJcbiAgICAgICAgdmFyIGVkaXRvciA9IEtUVXRpbC5maW5kKGZvcm0sICcucWwtZWRpdG9yJyk7XHJcblxyXG4gICAgICAgIGlmICh0b29sYmFyKSB7XHJcbiAgICAgICAgICAgIEtUVXRpbC5hZGRDbGFzcyh0b29sYmFyLCAncHgtNSBib3JkZXItdG9wLTAgYm9yZGVyLWxlZnQtMCBib3JkZXItcmlnaHQtMCcpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGVkaXRvcikge1xyXG4gICAgICAgICAgICBLVFV0aWwuYWRkQ2xhc3MoZWRpdG9yLCAncHgtOCcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB2YXIgX2luaXRBdHRhY2htZW50cyA9IGZ1bmN0aW9uKGVsZW1JZCkge1xyXG4gICAgICAgIGlmICghS1RVdGlsLmdldEJ5SWQoZWxlbUlkKSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgaWQgPSBcIiNcIiArIGVsZW1JZDtcclxuICAgICAgICB2YXIgcHJldmlld05vZGUgPSAkKGlkICsgXCIgLmRyb3B6b25lLWl0ZW1cIik7XHJcbiAgICAgICAgcHJldmlld05vZGUuaWQgPSBcIlwiO1xyXG4gICAgICAgIHZhciBwcmV2aWV3VGVtcGxhdGUgPSBwcmV2aWV3Tm9kZS5wYXJlbnQoJy5kcm9wem9uZS1pdGVtcycpLmh0bWwoKTtcclxuICAgICAgICBwcmV2aWV3Tm9kZS5yZW1vdmUoKTtcclxuXHJcbiAgICAgICAgdmFyIG15RHJvcHpvbmUgPSBuZXcgRHJvcHpvbmUoaWQsIHsgLy8gTWFrZSB0aGUgd2hvbGUgYm9keSBhIGRyb3B6b25lXHJcbiAgICAgICAgICAgIHVybDogXCJodHRwczovL2tlZW50aGVtZXMuY29tL3NjcmlwdHMvdm9pZC5waHBcIiwgLy8gU2V0IHRoZSB1cmwgZm9yIHlvdXIgdXBsb2FkIHNjcmlwdCBsb2NhdGlvblxyXG4gICAgICAgICAgICBwYXJhbGxlbFVwbG9hZHM6IDIwLFxyXG4gICAgICAgICAgICBtYXhGaWxlc2l6ZTogMSwgLy8gTWF4IGZpbGVzaXplIGluIE1CXHJcbiAgICAgICAgICAgIHByZXZpZXdUZW1wbGF0ZTogcHJldmlld1RlbXBsYXRlLFxyXG4gICAgICAgICAgICBwcmV2aWV3c0NvbnRhaW5lcjogaWQgKyBcIiAuZHJvcHpvbmUtaXRlbXNcIiwgLy8gRGVmaW5lIHRoZSBjb250YWluZXIgdG8gZGlzcGxheSB0aGUgcHJldmlld3NcclxuICAgICAgICAgICAgY2xpY2thYmxlOiBpZCArIFwiX3NlbGVjdFwiIC8vIERlZmluZSB0aGUgZWxlbWVudCB0aGF0IHNob3VsZCBiZSB1c2VkIGFzIGNsaWNrIHRyaWdnZXIgdG8gc2VsZWN0IGZpbGVzLlxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBteURyb3B6b25lLm9uKFwiYWRkZWRmaWxlXCIsIGZ1bmN0aW9uKGZpbGUpIHtcclxuICAgICAgICAgICAgLy8gSG9va3VwIHRoZSBzdGFydCBidXR0b25cclxuICAgICAgICAgICAgJChkb2N1bWVudCkuZmluZChpZCArICcgLmRyb3B6b25lLWl0ZW0nKS5jc3MoJ2Rpc3BsYXknLCAnJyk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIFVwZGF0ZSB0aGUgdG90YWwgcHJvZ3Jlc3MgYmFyXHJcbiAgICAgICAgbXlEcm9wem9uZS5vbihcInRvdGFsdXBsb2FkcHJvZ3Jlc3NcIiwgZnVuY3Rpb24ocHJvZ3Jlc3MpIHtcclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihpZCArIFwiIC5wcm9ncmVzcy1iYXJcIikuc3R5bGUud2lkdGggPSBwcm9ncmVzcyArIFwiJVwiO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBteURyb3B6b25lLm9uKFwic2VuZGluZ1wiLCBmdW5jdGlvbihmaWxlKSB7XHJcbiAgICAgICAgICAgIC8vIFNob3cgdGhlIHRvdGFsIHByb2dyZXNzIGJhciB3aGVuIHVwbG9hZCBzdGFydHNcclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihpZCArIFwiIC5wcm9ncmVzcy1iYXJcIikuc3R5bGUub3BhY2l0eSA9IFwiMVwiO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBIaWRlIHRoZSB0b3RhbCBwcm9ncmVzcyBiYXIgd2hlbiBub3RoaW5nJ3MgdXBsb2FkaW5nIGFueW1vcmVcclxuICAgICAgICBteURyb3B6b25lLm9uKFwiY29tcGxldGVcIiwgZnVuY3Rpb24ocHJvZ3Jlc3MpIHtcclxuICAgICAgICAgICAgdmFyIHRoaXNQcm9ncmVzc0JhciA9IGlkICsgXCIgLmR6LWNvbXBsZXRlXCI7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXNQcm9ncmVzc0JhciArIFwiIC5wcm9ncmVzcy1iYXIsIFwiICsgdGhpc1Byb2dyZXNzQmFyICsgXCIgLnByb2dyZXNzXCIpLmNzcygnb3BhY2l0eScsICcwJyk7XHJcbiAgICAgICAgICAgIH0sIDMwMClcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBQdWJsaWMgbWV0aG9kc1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICAvLyBQdWJsaWMgZnVuY3Rpb25zXHJcbiAgICAgICAgaW5pdDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIC8vIEluaXQgdmFyaWFibGVzXHJcbiAgICAgICAgICAgIF9hc2lkZUVsID0gS1RVdGlsLmdldEJ5SWQoJ2t0X3RvZG9fYXNpZGUnKTtcclxuICAgICAgICAgICAgX2xpc3RFbCA9IEtUVXRpbC5nZXRCeUlkKCdrdF90b2RvX2xpc3QnKTtcclxuICAgICAgICAgICAgX3ZpZXdFbCA9IEtUVXRpbC5nZXRCeUlkKCdrdF90b2RvX3ZpZXcnKTtcclxuICAgICAgICAgICAgX3JlcGx5RWwgPSBLVFV0aWwuZ2V0QnlJZCgna3RfdG9kb19yZXBseScpO1xyXG5cclxuICAgICAgICAgICAgLy8gSW5pdCBoYW5kbGVyc1xyXG4gICAgICAgICAgICBLVEFwcFRvZG8uaW5pdEFzaWRlKCk7XHJcbiAgICAgICAgICAgIEtUQXBwVG9kby5pbml0TGlzdCgpO1xyXG4gICAgICAgICAgICBLVEFwcFRvZG8uaW5pdFZpZXcoKTtcclxuICAgICAgICAgICAgS1RBcHBUb2RvLmluaXRSZXBseSgpO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGluaXRBc2lkZTogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIC8vIE1vYmlsZSBvZmZjYW52YXMgZm9yIG1vYmlsZSBtb2RlXHJcbiAgICAgICAgICAgIF9hc2lkZU9mZmNhbnZhcyA9IG5ldyBLVE9mZmNhbnZhcyhfYXNpZGVFbCwge1xyXG4gICAgICAgICAgICAgICAgb3ZlcmxheTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGJhc2VDbGFzczogJ29mZmNhbnZhcy1tb2JpbGUnLFxyXG4gICAgICAgICAgICAgICAgLy9jbG9zZUJ5OiAna3RfdG9kb19hc2lkZV9jbG9zZScsXHJcbiAgICAgICAgICAgICAgICB0b2dnbGVCeTogJ2t0X3N1YmhlYWRlcl9tb2JpbGVfdG9nZ2xlJ1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIC8vIFZpZXcgbGlzdFxyXG4gICAgICAgICAgICBLVFV0aWwub24oX2FzaWRlRWwsICcubGlzdC1pdGVtW2RhdGEtYWN0aW9uPVwibGlzdFwiXScsICdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgICAgIHZhciB0eXBlID0gS1RVdGlsLmF0dHIodGhpcywgJ2RhdGEtdHlwZScpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGxpc3RJdGVtc0VsID0gS1RVdGlsLmZpbmQoX2xpc3RFbCwgJy5rdC1pbmJveF9faXRlbXMnKTtcclxuICAgICAgICAgICAgICAgIHZhciBuYXZJdGVtRWwgPSB0aGlzLmNsb3Nlc3QoJy5rdC1uYXZfX2l0ZW0nKTtcclxuICAgICAgICAgICAgICAgIHZhciBuYXZJdGVtQWN0aXZlRWwgPSBLVFV0aWwuZmluZChfYXNpZGVFbCwgJy5rdC1uYXZfX2l0ZW0ua3QtbmF2X19pdGVtLS1hY3RpdmUnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBkZW1vIGxvYWRpbmdcclxuICAgICAgICAgICAgICAgIHZhciBsb2FkaW5nID0gbmV3IEtURGlhbG9nKHtcclxuICAgICAgICAgICAgICAgICAgICAndHlwZSc6ICdsb2FkZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICdwbGFjZW1lbnQnOiAndG9wIGNlbnRlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ21lc3NhZ2UnOiAnTG9hZGluZyAuLi4nXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGxvYWRpbmcuc2hvdygpO1xyXG5cclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbG9hZGluZy5oaWRlKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIEtUVXRpbC5jc3MoX2xpc3RFbCwgJ2Rpc3BsYXknLCAnZmxleCcpOyAvLyBzaG93IGxpc3RcclxuICAgICAgICAgICAgICAgICAgICBLVFV0aWwuY3NzKF92aWV3RWwsICdkaXNwbGF5JywgJ25vbmUnKTsgLy8gaGlkZSB2aWV3XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIEtUVXRpbC5hZGRDbGFzcyhuYXZJdGVtRWwsICdrdC1uYXZfX2l0ZW0tLWFjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIEtUVXRpbC5yZW1vdmVDbGFzcyhuYXZJdGVtQWN0aXZlRWwsICdrdC1uYXZfX2l0ZW0tLWFjdGl2ZScpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBLVFV0aWwuYXR0cihsaXN0SXRlbXNFbCwgJ2RhdGEtdHlwZScsIHR5cGUpO1xyXG4gICAgICAgICAgICAgICAgfSwgNjAwKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgaW5pdExpc3Q6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAvLyBHcm91cCBzZWxlY3Rpb25cclxuICAgICAgICAgICAgS1RVdGlsLm9uKF9saXN0RWwsICdbZGF0YS1pbmJveD1cImdyb3VwLXNlbGVjdFwiXSBpbnB1dCcsICdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIG1lc3NhZ2VzID0gS1RVdGlsLmZpbmRBbGwoX2xpc3RFbCwgJ1tkYXRhLWluYm94PVwibWVzc2FnZVwiXScpO1xyXG5cclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBqID0gbWVzc2FnZXMubGVuZ3RoOyBpIDwgajsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1lc3NhZ2UgPSBtZXNzYWdlc1tpXTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgY2hlY2tib3ggPSBLVFV0aWwuZmluZChtZXNzYWdlLCAnLmNoZWNrYm94IGlucHV0Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tib3guY2hlY2tlZCA9IHRoaXMuY2hlY2tlZDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuY2hlY2tlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBLVFV0aWwuYWRkQ2xhc3MobWVzc2FnZSwgJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEtUVXRpbC5yZW1vdmVDbGFzcyhtZXNzYWdlLCAnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIC8vIEluZGl2aWR1YWwgc2VsZWN0aW9uXHJcbiAgICAgICAgICAgIEtUVXRpbC5vbihfbGlzdEVsLCAnW2RhdGEtaW5ib3g9XCJtZXNzYWdlXCJdIFtkYXRhLWluYm94PVwiYWN0aW9uc1wiXSAuY2hlY2tib3ggaW5wdXQnLCAnY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHZhciBpdGVtID0gdGhpcy5jbG9zZXN0KCdbZGF0YS1pbmJveD1cIm1lc3NhZ2VcIl0nKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoaXRlbSAmJiB0aGlzLmNoZWNrZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBLVFV0aWwuYWRkQ2xhc3MoaXRlbSwgJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBLVFV0aWwucmVtb3ZlQ2xhc3MoaXRlbSwgJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBpbml0VmlldzogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIC8vIEJhY2sgdG8gbGlzdGluZ1xyXG4gICAgICAgICAgICBLVFV0aWwub24oX3ZpZXdFbCwgJ1tkYXRhLWluYm94PVwiYmFja1wiXScsICdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgLy8gZGVtbyBsb2FkaW5nXHJcbiAgICAgICAgICAgICAgICB2YXIgbG9hZGluZyA9IG5ldyBLVERpYWxvZyh7XHJcbiAgICAgICAgICAgICAgICAgICAgJ3R5cGUnOiAnbG9hZGVyJyxcclxuICAgICAgICAgICAgICAgICAgICAncGxhY2VtZW50JzogJ3RvcCBjZW50ZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICdtZXNzYWdlJzogJ0xvYWRpbmcgLi4uJ1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgbG9hZGluZy5zaG93KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICBsb2FkaW5nLmhpZGUoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgS1RVdGlsLmFkZENsYXNzKF9saXN0RWwsICdkLWJsb2NrJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgS1RVdGlsLnJlbW92ZUNsYXNzKF9saXN0RWwsICdkLW5vbmUnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgS1RVdGlsLmFkZENsYXNzKF92aWV3RWwsICdkLW5vbmUnKTtcclxuICAgICAgICAgICAgICAgICAgICBLVFV0aWwucmVtb3ZlQ2xhc3MoX3ZpZXdFbCwgJ2QtYmxvY2snKTtcclxuICAgICAgICAgICAgICAgIH0sIDcwMCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgLy8gRXhwYW5kL0NvbGxhcHNlIHJlcGx5XHJcbiAgICAgICAgICAgIEtUVXRpbC5vbihfdmlld0VsLCAnW2RhdGEtaW5ib3g9XCJtZXNzYWdlXCJdJywgJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIG1lc3NhZ2UgPSB0aGlzLmNsb3Nlc3QoJ1tkYXRhLWluYm94PVwibWVzc2FnZVwiXScpO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBkcm9wZG93blRvZ2dsZUVsID0gS1RVdGlsLmZpbmQodGhpcywgJ1tkYXRhLXRvZ2dsZT1cImRyb3Bkb3duXCJdJyk7XHJcbiAgICAgICAgICAgICAgICB2YXIgdG9vbGJhckVsID0gS1RVdGlsLmZpbmQodGhpcywgJ1tkYXRhLWluYm94PVwidG9vbGJhclwiXScpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIHNraXAgZHJvcGRvd24gdG9nZ2xlIGNsaWNrXHJcbiAgICAgICAgICAgICAgICBpZiAoZS50YXJnZXQgPT09IGRyb3Bkb3duVG9nZ2xlRWwgfHwgKGRyb3Bkb3duVG9nZ2xlRWwgJiYgZHJvcGRvd25Ub2dnbGVFbC5jb250YWlucyhlLnRhcmdldCkgPT09IHRydWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vIHNraXAgZ3JvdXAgYWN0aW9ucyBjbGlja1xyXG4gICAgICAgICAgICAgICAgaWYgKGUudGFyZ2V0ID09PSB0b29sYmFyRWwgfHwgKHRvb2xiYXJFbCAmJiB0b29sYmFyRWwuY29udGFpbnMoZS50YXJnZXQpID09PSB0cnVlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoS1RVdGlsLmhhc0NsYXNzKG1lc3NhZ2UsICd0b2dnbGUtb24nKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIEtUVXRpbC5hZGRDbGFzcyhtZXNzYWdlLCAndG9nZ2xlLW9mZicpO1xyXG4gICAgICAgICAgICAgICAgICAgIEtUVXRpbC5yZW1vdmVDbGFzcyhtZXNzYWdlLCAndG9nZ2xlLW9uJyk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIEtUVXRpbC5yZW1vdmVDbGFzcyhtZXNzYWdlLCAndG9nZ2xlLW9mZicpO1xyXG4gICAgICAgICAgICAgICAgICAgIEtUVXRpbC5hZGRDbGFzcyhtZXNzYWdlLCAndG9nZ2xlLW9uJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGluaXRSZXBseTogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIF9pbml0RWRpdG9yKF9yZXBseUVsLCAna3RfdG9kb19yZXBseV9lZGl0b3InKTtcclxuICAgICAgICAgICAgX2luaXRBdHRhY2htZW50cygna3RfdG9kb19yZXBseV9hdHRhY2htZW50cycpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn0oKTtcclxuXHJcbi8vIENsYXNzIEluaXRpYWxpemF0aW9uXHJcbmpRdWVyeShkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcbiAgICBLVEFwcFRvZG8uaW5pdCgpO1xyXG59KTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==