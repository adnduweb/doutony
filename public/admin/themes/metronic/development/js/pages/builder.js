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
/******/ 	return __webpack_require__(__webpack_require__.s = 20);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/metronic/js/pages/builder.js":
/*!************************************************!*\
  !*** ./resources/metronic/js/pages/builder.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // Class definition

var KTLayoutBuilder = function () {
  var formAction;
  var exporter = {
    init: function init() {
      formAction = $('.form').attr('action');
    },
    startLoad: function startLoad(options) {
      $('#builder_export').addClass('spinner spinner-right spinner-primary').find('span').text('Exporting...').closest('.card-footer').find('.btn').attr('disabled', true);
      toastr.info(options.title, options.message);
    },
    doneLoad: function doneLoad() {
      $('#builder_export').removeClass('spinner spinner-right spinner-primary').find('span').text('Export').closest('.card-footer').find('.btn').attr('disabled', false);
    },
    exportHtml: function exportHtml(demo) {
      exporter.startLoad({
        title: 'Generate HTML Partials',
        message: 'Process started and it may take a while.'
      });
      $.ajax(formAction, {
        method: 'POST',
        data: {
          builder_export: 1,
          export_type: 'partial',
          demo: demo,
          theme: 'metronic'
        }
      }).done(function (r) {
        var result = JSON.parse(r);

        if (result.message) {
          exporter.stopWithNotify(result.message);
          return;
        }

        var timer = setInterval(function () {
          $.ajax(formAction, {
            method: 'POST',
            data: {
              builder_export: 1,
              demo: demo,
              builder_check: result.id
            }
          }).done(function (r) {
            var result = JSON.parse(r);
            if (typeof result === 'undefined') return; // export status 1 is completed

            if (result.export_status !== 1) return;
            $('<iframe/>').attr({
              src: formAction + '?builder_export&builder_download&id=' + result.id + '&demo=' + demo,
              style: 'visibility:hidden;display:none'
            }).ready(function () {
              toastr.success('Export HTML Version Layout', 'HTML version exported.');
              exporter.doneLoad(); // stop the timer

              clearInterval(timer);
            }).appendTo('body');
          });
        }, 15000);
      });
    },
    stopWithNotify: function stopWithNotify(message, type) {
      type = type || 'danger';

      if (typeof toastr[type] !== 'undefined') {
        toastr[type]('Verification failed', message);
      }

      exporter.doneLoad();
    }
  }; // Private functions

  var preview = function preview() {
    $('[name="builder_submit"]').click(function (e) {
      e.preventDefault();

      var _self = $(this);

      $(_self).addClass('spinner spinner-right spinner-white').closest('.card-footer').find('.btn').attr('disabled', true); // keep remember tab id

      $('.nav[data-remember-tab]').each(function () {
        var tab = $(this).data('remember-tab');
        var tabId = $(this).find('.nav-link.active[data-toggle="tab"]').attr('href');
        $('#' + tab).val(tabId);
      });
      $.ajax(formAction + '?demo=' + $(_self).data('demo'), {
        method: 'POST',
        data: $('[name]').serialize()
      }).done(function (r) {
        toastr.success('Preview updated', 'Preview has been updated with current configured layout.');
      }).always(function () {
        setTimeout(function () {
          location.reload();
        }, 600);
      });
    });
  };

  var reset = function reset() {
    $('[name="builder_reset"]').click(function (e) {
      e.preventDefault();

      var _self = $(this);

      $(_self).addClass('spinner spinner-right spinner-primary').closest('.card-footer').find('.btn').attr('disabled', true);
      $.ajax(formAction + '?demo=' + $(_self).data('demo'), {
        method: 'POST',
        data: {
          builder_reset: 1,
          demo: $(_self).data('demo')
        }
      }).done(function (r) {}).always(function () {
        location.reload();
      });
    });
  };

  var verify = {
    reCaptchaVerified: function reCaptchaVerified() {
      return $.ajax('/metronic/theme/html/tools/builder/recaptcha.php?recaptcha', {
        method: 'POST',
        data: {
          response: $('#g-recaptcha-response').val()
        }
      }).fail(function () {
        grecaptcha.reset();
        $('#alert-message').removeClass('alert-success d-hide').addClass('alert-danger').html('Invalid reCaptcha validation');
      });
    },
    init: function init() {
      var exportReadyTrigger; // click event

      $('#builder_export').click(function (e) {
        e.preventDefault();
        exportReadyTrigger = $(this);
        $('#kt-modal-purchase').modal('show');
        $('#alert-message').addClass('d-hide');
        grecaptcha.reset();
      });
      $('#submit-verify').click(function (e) {
        e.preventDefault();

        if (!$('#g-recaptcha-response').val()) {
          $('#alert-message').removeClass('alert-success d-hide').addClass('alert-danger').html('Invalid reCaptcha validation');
          return;
        }

        verify.reCaptchaVerified().done(function (response) {
          if (response.success) {
            $('[data-dismiss="modal"]').trigger('click');
            var demo = $(exportReadyTrigger).data('demo');

            switch ($(exportReadyTrigger).attr('id')) {
              case 'builder_export':
                exporter.exportHtml(demo);
                break;

              case 'builder_export_html':
                exporter.exportHtml(demo);
                break;
            }
          } else {
            grecaptcha.reset();
            $('#alert-message').removeClass('alert-success d-hide').addClass('alert-danger').html('Invalid reCaptcha validation');
          }
        });
      });
    }
  }; // basic demo

  var _init = function init() {
    exporter.init();
    preview();
    reset();
  };

  return {
    // public functions
    init: function init() {
      verify.init();

      _init();
    }
  };
}();

jQuery(document).ready(function () {
  KTLayoutBuilder.init();
});

/***/ }),

/***/ 20:
/*!******************************************************!*\
  !*** multi ./resources/metronic/js/pages/builder.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Applications/MAMP/htdocs/spreadci4/public/admin/themes/metronic/resources/metronic/js/pages/builder.js */"./resources/metronic/js/pages/builder.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL21ldHJvbmljL2pzL3BhZ2VzL2J1aWxkZXIuanMiXSwibmFtZXMiOlsiS1RMYXlvdXRCdWlsZGVyIiwiZm9ybUFjdGlvbiIsImV4cG9ydGVyIiwiaW5pdCIsIiQiLCJhdHRyIiwic3RhcnRMb2FkIiwib3B0aW9ucyIsImFkZENsYXNzIiwiZmluZCIsInRleHQiLCJjbG9zZXN0IiwidG9hc3RyIiwiaW5mbyIsInRpdGxlIiwibWVzc2FnZSIsImRvbmVMb2FkIiwicmVtb3ZlQ2xhc3MiLCJleHBvcnRIdG1sIiwiZGVtbyIsImFqYXgiLCJtZXRob2QiLCJkYXRhIiwiYnVpbGRlcl9leHBvcnQiLCJleHBvcnRfdHlwZSIsInRoZW1lIiwiZG9uZSIsInIiLCJyZXN1bHQiLCJKU09OIiwicGFyc2UiLCJzdG9wV2l0aE5vdGlmeSIsInRpbWVyIiwic2V0SW50ZXJ2YWwiLCJidWlsZGVyX2NoZWNrIiwiaWQiLCJleHBvcnRfc3RhdHVzIiwic3JjIiwic3R5bGUiLCJyZWFkeSIsInN1Y2Nlc3MiLCJjbGVhckludGVydmFsIiwiYXBwZW5kVG8iLCJ0eXBlIiwicHJldmlldyIsImNsaWNrIiwiZSIsInByZXZlbnREZWZhdWx0IiwiX3NlbGYiLCJlYWNoIiwidGFiIiwidGFiSWQiLCJ2YWwiLCJzZXJpYWxpemUiLCJhbHdheXMiLCJzZXRUaW1lb3V0IiwibG9jYXRpb24iLCJyZWxvYWQiLCJyZXNldCIsImJ1aWxkZXJfcmVzZXQiLCJ2ZXJpZnkiLCJyZUNhcHRjaGFWZXJpZmllZCIsInJlc3BvbnNlIiwiZmFpbCIsImdyZWNhcHRjaGEiLCJodG1sIiwiZXhwb3J0UmVhZHlUcmlnZ2VyIiwibW9kYWwiLCJ0cmlnZ2VyIiwialF1ZXJ5IiwiZG9jdW1lbnQiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FB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QztBQUVBLGdCQUFJakQsSUFBSSxHQUFHZixDQUFDLENBQUM4RCxrQkFBRCxDQUFELENBQXNCNUMsSUFBdEIsQ0FBMkIsTUFBM0IsQ0FBWDs7QUFDQSxvQkFBUWxCLENBQUMsQ0FBQzhELGtCQUFELENBQUQsQ0FBc0I3RCxJQUF0QixDQUEyQixJQUEzQixDQUFSO0FBQ0MsbUJBQUssZ0JBQUw7QUFDQ0gsd0JBQVEsQ0FBQ2dCLFVBQVQsQ0FBb0JDLElBQXBCO0FBQ0E7O0FBQ0QsbUJBQUsscUJBQUw7QUFDQ2pCLHdCQUFRLENBQUNnQixVQUFULENBQW9CQyxJQUFwQjtBQUNBO0FBTkY7QUFRQSxXQVpELE1BWU87QUFDTjZDLHNCQUFVLENBQUNOLEtBQVg7QUFDQXRELGFBQUMsQ0FBQyxnQkFBRCxDQUFELENBQ0VhLFdBREYsQ0FDYyxzQkFEZCxFQUVFVCxRQUZGLENBRVcsY0FGWCxFQUdFeUQsSUFIRixDQUdPLDhCQUhQO0FBSUE7QUFDRCxTQXBCRDtBQXFCQSxPQS9CRDtBQWdDQTtBQTNEVyxHQUFiLENBdklnQyxDQXFNaEM7O0FBQ0EsTUFBSTlELEtBQUksR0FBRyxTQUFQQSxJQUFPLEdBQVc7QUFDckJELFlBQVEsQ0FBQ0MsSUFBVDtBQUNBeUMsV0FBTztBQUNQYyxTQUFLO0FBQ0wsR0FKRDs7QUFNQSxTQUFPO0FBQ047QUFDQXZELFFBQUksRUFBRSxnQkFBVztBQUNoQnlELFlBQU0sQ0FBQ3pELElBQVA7O0FBQ0FBLFdBQUk7QUFDSjtBQUxLLEdBQVA7QUFPQSxDQW5OcUIsRUFBdEI7O0FBcU5Ba0UsTUFBTSxDQUFDQyxRQUFELENBQU4sQ0FBaUIvQixLQUFqQixDQUF1QixZQUFXO0FBQ2pDdkMsaUJBQWUsQ0FBQ0csSUFBaEI7QUFDQSxDQUZELEUiLCJmaWxlIjoiL2RldmVsb3BtZW50L2pzL3BhZ2VzL2J1aWxkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDIwKTtcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuLy8gQ2xhc3MgZGVmaW5pdGlvblxyXG52YXIgS1RMYXlvdXRCdWlsZGVyID0gZnVuY3Rpb24oKSB7XHJcblxyXG5cdHZhciBmb3JtQWN0aW9uO1xyXG5cclxuXHR2YXIgZXhwb3J0ZXIgPSB7XHJcblx0XHRpbml0OiBmdW5jdGlvbigpIHtcclxuXHRcdFx0Zm9ybUFjdGlvbiA9ICQoJy5mb3JtJykuYXR0cignYWN0aW9uJyk7XHJcblx0XHR9LFxyXG5cdFx0c3RhcnRMb2FkOiBmdW5jdGlvbihvcHRpb25zKSB7XHJcblx0XHRcdCQoJyNidWlsZGVyX2V4cG9ydCcpLlxyXG5cdFx0XHRcdFx0YWRkQ2xhc3MoJ3NwaW5uZXIgc3Bpbm5lci1yaWdodCBzcGlubmVyLXByaW1hcnknKS5cclxuXHRcdFx0XHRcdGZpbmQoJ3NwYW4nKS50ZXh0KCdFeHBvcnRpbmcuLi4nKS5cclxuXHRcdFx0XHRcdGNsb3Nlc3QoJy5jYXJkLWZvb3RlcicpLlxyXG5cdFx0XHRcdFx0ZmluZCgnLmJ0bicpLlxyXG5cdFx0XHRcdFx0YXR0cignZGlzYWJsZWQnLCB0cnVlKTtcclxuXHRcdFx0dG9hc3RyLmluZm8ob3B0aW9ucy50aXRsZSwgb3B0aW9ucy5tZXNzYWdlKTtcclxuXHRcdH0sXHJcblx0XHRkb25lTG9hZDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdCQoJyNidWlsZGVyX2V4cG9ydCcpLlxyXG5cdFx0XHRcdFx0cmVtb3ZlQ2xhc3MoJ3NwaW5uZXIgc3Bpbm5lci1yaWdodCBzcGlubmVyLXByaW1hcnknKS5cclxuXHRcdFx0XHRcdGZpbmQoJ3NwYW4nKS50ZXh0KCdFeHBvcnQnKS5cclxuXHRcdFx0XHRcdGNsb3Nlc3QoJy5jYXJkLWZvb3RlcicpLlxyXG5cdFx0XHRcdFx0ZmluZCgnLmJ0bicpLlxyXG5cdFx0XHRcdFx0YXR0cignZGlzYWJsZWQnLCBmYWxzZSk7XHJcblx0XHR9LFxyXG5cdFx0ZXhwb3J0SHRtbDogZnVuY3Rpb24oZGVtbykge1xyXG5cdFx0XHRleHBvcnRlci5zdGFydExvYWQoe1xyXG5cdFx0XHRcdHRpdGxlOiAnR2VuZXJhdGUgSFRNTCBQYXJ0aWFscycsXHJcblx0XHRcdFx0bWVzc2FnZTogJ1Byb2Nlc3Mgc3RhcnRlZCBhbmQgaXQgbWF5IHRha2UgYSB3aGlsZS4nLFxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdCQuYWpheChmb3JtQWN0aW9uLCB7XHJcblx0XHRcdFx0bWV0aG9kOiAnUE9TVCcsXHJcblx0XHRcdFx0ZGF0YToge1xyXG5cdFx0XHRcdFx0YnVpbGRlcl9leHBvcnQ6IDEsXHJcblx0XHRcdFx0XHRleHBvcnRfdHlwZTogJ3BhcnRpYWwnLFxyXG5cdFx0XHRcdFx0ZGVtbzogZGVtbyxcclxuXHRcdFx0XHRcdHRoZW1lOiAnbWV0cm9uaWMnLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdH0pLmRvbmUoZnVuY3Rpb24ocikge1xyXG5cdFx0XHRcdHZhciByZXN1bHQgPSBKU09OLnBhcnNlKHIpO1xyXG5cdFx0XHRcdGlmIChyZXN1bHQubWVzc2FnZSkge1xyXG5cdFx0XHRcdFx0ZXhwb3J0ZXIuc3RvcFdpdGhOb3RpZnkocmVzdWx0Lm1lc3NhZ2UpO1xyXG5cdFx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0dmFyIHRpbWVyID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHQkLmFqYXgoZm9ybUFjdGlvbiwge1xyXG5cdFx0XHRcdFx0XHRtZXRob2Q6ICdQT1NUJyxcclxuXHRcdFx0XHRcdFx0ZGF0YToge1xyXG5cdFx0XHRcdFx0XHRcdGJ1aWxkZXJfZXhwb3J0OiAxLFxyXG5cdFx0XHRcdFx0XHRcdGRlbW86IGRlbW8sXHJcblx0XHRcdFx0XHRcdFx0YnVpbGRlcl9jaGVjazogcmVzdWx0LmlkLFxyXG5cdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0fSkuZG9uZShmdW5jdGlvbihyKSB7XHJcblx0XHRcdFx0XHRcdHZhciByZXN1bHQgPSBKU09OLnBhcnNlKHIpO1xyXG5cdFx0XHRcdFx0XHRpZiAodHlwZW9mIHJlc3VsdCA9PT0gJ3VuZGVmaW5lZCcpIHJldHVybjtcclxuXHRcdFx0XHRcdFx0Ly8gZXhwb3J0IHN0YXR1cyAxIGlzIGNvbXBsZXRlZFxyXG5cdFx0XHRcdFx0XHRpZiAocmVzdWx0LmV4cG9ydF9zdGF0dXMgIT09IDEpIHJldHVybjtcclxuXHJcblx0XHRcdFx0XHRcdCQoJzxpZnJhbWUvPicpLmF0dHIoe1xyXG5cdFx0XHRcdFx0XHRcdHNyYzogZm9ybUFjdGlvbiArICc/YnVpbGRlcl9leHBvcnQmYnVpbGRlcl9kb3dubG9hZCZpZD0nICsgcmVzdWx0LmlkICsgJyZkZW1vPScgKyBkZW1vLFxyXG5cdFx0XHRcdFx0XHRcdHN0eWxlOiAndmlzaWJpbGl0eTpoaWRkZW47ZGlzcGxheTpub25lJyxcclxuXHRcdFx0XHRcdFx0fSkucmVhZHkoZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRcdFx0dG9hc3RyLnN1Y2Nlc3MoJ0V4cG9ydCBIVE1MIFZlcnNpb24gTGF5b3V0JywgJ0hUTUwgdmVyc2lvbiBleHBvcnRlZC4nKTtcclxuXHRcdFx0XHRcdFx0XHRleHBvcnRlci5kb25lTG9hZCgpO1xyXG5cdFx0XHRcdFx0XHRcdC8vIHN0b3AgdGhlIHRpbWVyXHJcblx0XHRcdFx0XHRcdFx0Y2xlYXJJbnRlcnZhbCh0aW1lcik7XHJcblx0XHRcdFx0XHRcdH0pLmFwcGVuZFRvKCdib2R5Jyk7XHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHR9LCAxNTAwMCk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fSxcclxuXHRcdHN0b3BXaXRoTm90aWZ5OiBmdW5jdGlvbihtZXNzYWdlLCB0eXBlKSB7XHJcblx0XHRcdHR5cGUgPSB0eXBlIHx8ICdkYW5nZXInO1xyXG5cdFx0XHRpZiAodHlwZW9mIHRvYXN0clt0eXBlXSAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuXHRcdFx0XHR0b2FzdHJbdHlwZV0oJ1ZlcmlmaWNhdGlvbiBmYWlsZWQnLCBtZXNzYWdlKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRleHBvcnRlci5kb25lTG9hZCgpO1xyXG5cdFx0fSxcclxuXHR9O1xyXG5cclxuXHQvLyBQcml2YXRlIGZ1bmN0aW9uc1xyXG5cdHZhciBwcmV2aWV3ID0gZnVuY3Rpb24oKSB7XHJcblx0XHQkKCdbbmFtZT1cImJ1aWxkZXJfc3VibWl0XCJdJykuY2xpY2soZnVuY3Rpb24oZSkge1xyXG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdHZhciBfc2VsZiA9ICQodGhpcyk7XHJcblx0XHRcdCQoX3NlbGYpLlxyXG5cdFx0XHRcdFx0YWRkQ2xhc3MoJ3NwaW5uZXIgc3Bpbm5lci1yaWdodCBzcGlubmVyLXdoaXRlJykuXHJcblx0XHRcdFx0XHRjbG9zZXN0KCcuY2FyZC1mb290ZXInKS5cclxuXHRcdFx0XHRcdGZpbmQoJy5idG4nKS5cclxuXHRcdFx0XHRcdGF0dHIoJ2Rpc2FibGVkJywgdHJ1ZSk7XHJcblxyXG5cdFx0XHQvLyBrZWVwIHJlbWVtYmVyIHRhYiBpZFxyXG5cdFx0XHQkKCcubmF2W2RhdGEtcmVtZW1iZXItdGFiXScpLmVhY2goZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0dmFyIHRhYiA9ICQodGhpcykuZGF0YSgncmVtZW1iZXItdGFiJyk7XHJcblx0XHRcdFx0dmFyIHRhYklkID0gJCh0aGlzKS5maW5kKCcubmF2LWxpbmsuYWN0aXZlW2RhdGEtdG9nZ2xlPVwidGFiXCJdJykuYXR0cignaHJlZicpO1xyXG5cdFx0XHRcdCQoJyMnICsgdGFiKS52YWwodGFiSWQpO1xyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdCQuYWpheChmb3JtQWN0aW9uICsgJz9kZW1vPScgKyAkKF9zZWxmKS5kYXRhKCdkZW1vJyksIHtcclxuXHRcdFx0XHRtZXRob2Q6ICdQT1NUJyxcclxuXHRcdFx0XHRkYXRhOiAkKCdbbmFtZV0nKS5zZXJpYWxpemUoKSxcclxuXHRcdFx0fSkuZG9uZShmdW5jdGlvbihyKSB7XHJcblx0XHRcdFx0dG9hc3RyLnN1Y2Nlc3MoJ1ByZXZpZXcgdXBkYXRlZCcsICdQcmV2aWV3IGhhcyBiZWVuIHVwZGF0ZWQgd2l0aCBjdXJyZW50IGNvbmZpZ3VyZWQgbGF5b3V0LicpO1xyXG5cdFx0XHR9KS5hbHdheXMoZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdGxvY2F0aW9uLnJlbG9hZCgpO1xyXG5cdFx0XHRcdH0sIDYwMCk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fSk7XHJcblx0fTtcclxuXHJcblx0dmFyIHJlc2V0ID0gZnVuY3Rpb24oKSB7XHJcblx0XHQkKCdbbmFtZT1cImJ1aWxkZXJfcmVzZXRcIl0nKS5jbGljayhmdW5jdGlvbihlKSB7XHJcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0dmFyIF9zZWxmID0gJCh0aGlzKTtcclxuXHRcdFx0JChfc2VsZikuXHJcblx0XHRcdFx0XHRhZGRDbGFzcygnc3Bpbm5lciBzcGlubmVyLXJpZ2h0IHNwaW5uZXItcHJpbWFyeScpLlxyXG5cdFx0XHRcdFx0Y2xvc2VzdCgnLmNhcmQtZm9vdGVyJykuXHJcblx0XHRcdFx0XHRmaW5kKCcuYnRuJykuXHJcblx0XHRcdFx0XHRhdHRyKCdkaXNhYmxlZCcsIHRydWUpO1xyXG5cclxuXHRcdFx0JC5hamF4KGZvcm1BY3Rpb24gKyAnP2RlbW89JyArICQoX3NlbGYpLmRhdGEoJ2RlbW8nKSwge1xyXG5cdFx0XHRcdG1ldGhvZDogJ1BPU1QnLFxyXG5cdFx0XHRcdGRhdGE6IHtcclxuXHRcdFx0XHRcdGJ1aWxkZXJfcmVzZXQ6IDEsXHJcblx0XHRcdFx0XHRkZW1vOiAkKF9zZWxmKS5kYXRhKCdkZW1vJyksXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0fSkuZG9uZShmdW5jdGlvbihyKSB7fSkuYWx3YXlzKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdGxvY2F0aW9uLnJlbG9hZCgpO1xyXG5cdFx0XHR9KTtcclxuXHRcdH0pO1xyXG5cdH07XHJcblxyXG5cdHZhciB2ZXJpZnkgPSB7XHJcblx0XHRyZUNhcHRjaGFWZXJpZmllZDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdHJldHVybiAkLmFqYXgoJy9tZXRyb25pYy90aGVtZS9odG1sL3Rvb2xzL2J1aWxkZXIvcmVjYXB0Y2hhLnBocD9yZWNhcHRjaGEnLCB7XHJcblx0XHRcdFx0bWV0aG9kOiAnUE9TVCcsXHJcblx0XHRcdFx0ZGF0YToge1xyXG5cdFx0XHRcdFx0cmVzcG9uc2U6ICQoJyNnLXJlY2FwdGNoYS1yZXNwb25zZScpLnZhbCgpLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdH0pLmZhaWwoZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0Z3JlY2FwdGNoYS5yZXNldCgpO1xyXG5cdFx0XHRcdCQoJyNhbGVydC1tZXNzYWdlJykuXHJcblx0XHRcdFx0XHRcdHJlbW92ZUNsYXNzKCdhbGVydC1zdWNjZXNzIGQtaGlkZScpLlxyXG5cdFx0XHRcdFx0XHRhZGRDbGFzcygnYWxlcnQtZGFuZ2VyJykuXHJcblx0XHRcdFx0XHRcdGh0bWwoJ0ludmFsaWQgcmVDYXB0Y2hhIHZhbGlkYXRpb24nKTtcclxuXHRcdFx0fSk7XHJcblx0XHR9LFxyXG5cdFx0aW5pdDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdHZhciBleHBvcnRSZWFkeVRyaWdnZXI7XHJcblx0XHRcdC8vIGNsaWNrIGV2ZW50XHJcblx0XHRcdCQoJyNidWlsZGVyX2V4cG9ydCcpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcclxuXHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdFx0ZXhwb3J0UmVhZHlUcmlnZ2VyID0gJCh0aGlzKTtcclxuXHJcblx0XHRcdFx0JCgnI2t0LW1vZGFsLXB1cmNoYXNlJykubW9kYWwoJ3Nob3cnKTtcclxuXHRcdFx0XHQkKCcjYWxlcnQtbWVzc2FnZScpLmFkZENsYXNzKCdkLWhpZGUnKTtcclxuXHRcdFx0XHRncmVjYXB0Y2hhLnJlc2V0KCk7XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0JCgnI3N1Ym1pdC12ZXJpZnknKS5jbGljayhmdW5jdGlvbihlKSB7XHJcblx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHRcdGlmICghJCgnI2ctcmVjYXB0Y2hhLXJlc3BvbnNlJykudmFsKCkpIHtcclxuXHRcdFx0XHRcdCQoJyNhbGVydC1tZXNzYWdlJykuXHJcblx0XHRcdFx0XHRcdFx0cmVtb3ZlQ2xhc3MoJ2FsZXJ0LXN1Y2Nlc3MgZC1oaWRlJykuXHJcblx0XHRcdFx0XHRcdFx0YWRkQ2xhc3MoJ2FsZXJ0LWRhbmdlcicpLlxyXG5cdFx0XHRcdFx0XHRcdGh0bWwoJ0ludmFsaWQgcmVDYXB0Y2hhIHZhbGlkYXRpb24nKTtcclxuXHRcdFx0XHRcdHJldHVybjtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdHZlcmlmeS5yZUNhcHRjaGFWZXJpZmllZCgpLmRvbmUoZnVuY3Rpb24ocmVzcG9uc2UpIHtcclxuXHRcdFx0XHRcdGlmIChyZXNwb25zZS5zdWNjZXNzKSB7XHJcblx0XHRcdFx0XHRcdCQoJ1tkYXRhLWRpc21pc3M9XCJtb2RhbFwiXScpLnRyaWdnZXIoJ2NsaWNrJyk7XHJcblxyXG5cdFx0XHRcdFx0XHR2YXIgZGVtbyA9ICQoZXhwb3J0UmVhZHlUcmlnZ2VyKS5kYXRhKCdkZW1vJyk7XHJcblx0XHRcdFx0XHRcdHN3aXRjaCAoJChleHBvcnRSZWFkeVRyaWdnZXIpLmF0dHIoJ2lkJykpIHtcclxuXHRcdFx0XHRcdFx0XHRjYXNlICdidWlsZGVyX2V4cG9ydCc6XHJcblx0XHRcdFx0XHRcdFx0XHRleHBvcnRlci5leHBvcnRIdG1sKGRlbW8pO1xyXG5cdFx0XHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRcdFx0Y2FzZSAnYnVpbGRlcl9leHBvcnRfaHRtbCc6XHJcblx0XHRcdFx0XHRcdFx0XHRleHBvcnRlci5leHBvcnRIdG1sKGRlbW8pO1xyXG5cdFx0XHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdGdyZWNhcHRjaGEucmVzZXQoKTtcclxuXHRcdFx0XHRcdFx0JCgnI2FsZXJ0LW1lc3NhZ2UnKS5cclxuXHRcdFx0XHRcdFx0XHRcdHJlbW92ZUNsYXNzKCdhbGVydC1zdWNjZXNzIGQtaGlkZScpLlxyXG5cdFx0XHRcdFx0XHRcdFx0YWRkQ2xhc3MoJ2FsZXJ0LWRhbmdlcicpLlxyXG5cdFx0XHRcdFx0XHRcdFx0aHRtbCgnSW52YWxpZCByZUNhcHRjaGEgdmFsaWRhdGlvbicpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9KTtcclxuXHRcdH0sXHJcblx0fTtcclxuXHJcblx0Ly8gYmFzaWMgZGVtb1xyXG5cdHZhciBpbml0ID0gZnVuY3Rpb24oKSB7XHJcblx0XHRleHBvcnRlci5pbml0KCk7XHJcblx0XHRwcmV2aWV3KCk7XHJcblx0XHRyZXNldCgpO1xyXG5cdH07XHJcblxyXG5cdHJldHVybiB7XHJcblx0XHQvLyBwdWJsaWMgZnVuY3Rpb25zXHJcblx0XHRpbml0OiBmdW5jdGlvbigpIHtcclxuXHRcdFx0dmVyaWZ5LmluaXQoKTtcclxuXHRcdFx0aW5pdCgpO1xyXG5cdFx0fVxyXG5cdH07XHJcbn0oKTtcclxuXHJcbmpRdWVyeShkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcblx0S1RMYXlvdXRCdWlsZGVyLmluaXQoKTtcclxufSk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=