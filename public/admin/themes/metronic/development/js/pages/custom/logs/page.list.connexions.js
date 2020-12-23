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
/******/ 	return __webpack_require__(__webpack_require__.s = 41);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/metronic/js/pages/custom/logs/page.list.connexions.js":
/*!*************************************************************************!*\
  !*** ./resources/metronic/js/pages/custom/logs/page.list.connexions.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var KTAppLogsConnexionsListDatatable = function () {
  var t;
  return {
    init: function init() {
      var _params;

      t = $("#kt_apps_logsConnexions_list_datatable").KTDatatable({
        data: {
          type: "remote",
          source: {
            read: {
              url: current_url + "/list",
              method: 'GET',
              params: (_params = {}, _defineProperty(_params, crsftoken, $('meta[name="X-CSRF-TOKEN"]').attr('content')), _defineProperty(_params, "model", '\\Adnduweb\\Ci4Core\\Models\\LogModel'), _defineProperty(_params, "handle", 'connexions'), _params)
            }
          },
          pageSize: 10,
          serverPaging: !0,
          serverFiltering: !0,
          serverSorting: !0
        },
        translate: {
          records: {
            processing: _LANG_.loading_wait,
            noRecords: _LANG_.no_record_found
          },
          toolbar: {
            pagination: {
              items: {
                "default": {
                  first: _LANG_.first,
                  prev: _LANG_.previous,
                  next: _LANG_.next,
                  last: _LANG_.last,
                  more: _LANG_.more_pages,
                  input: _LANG_.page_number,
                  select: _LANG_.select_page_size,
                  all: _LANG_.all
                },
                info: _LANG_.showing + ' {{start}} - {{end}} of {{total}}'
              }
            }
          }
        },
        layout: {
          scroll: !1,
          footer: !1
        },
        sortable: !0,
        pagination: !0,
        search: {
          input: $("#kt_subheader_search_form"),
          delay: 400
        },
        rows: {
          beforeTemplate: function beforeTemplate(row, data, index) {
            if (data.active == '0') {
              row.addClass('notactive');
            }
          }
        },
        columns: [{
          field: "id",
          title: "#",
          sortable: !1,
          width: 20,
          selector: {
            "class": "kt-checkbox--solid"
          },
          textAlign: "center"
        }, {
          field: "ip_address",
          title: _LANG_.ip_address,
          width: 200,
          template: function template(t) {
            return '<div class="text-dark-75 font-weight-bolder font-size-lg mb-0">' + t.ip_address + '</div>';
          }
        }, {
          field: "agent",
          title: _LANG_.user_agent,
          type: "user_agent_traite",
          sortable: !1 //width: 100,

        }, {
          field: "username",
          title: _LANG_.user_id,
          type: "user_id",
          sortable: !1,
          template: function template(t) {
            return '<div class="text-dark-75 font-weight-bolder font-size-lg mb-0">' + t.username + '</div>';
          } //width: 100,

        }, {
          field: "success",
          title: _LANG_.etat,
          type: "success",
          template: function template(t) {
            var success = t.success == '1' ? '<span class="label label-xl label-success label-pill label-inline mr-2">' + _LANG_.cool_success + '</span>' : '<span class="label label-xl label-warning label-pill label-inline mr-2">' + _LANG_.error + '</span>';
            return '<div class="kt-user-card-v2">   <div class="kt-user-card-v2__details"><span class="kt-user-card-v2__name">' + success + '</span></div></div>';
          } //width: 100,

        }, {
          field: "updated_at",
          title: _LANG_.date_create,
          type: "date",
          //width: 100,
          format: "MM/DD/YYYY",
          template: function template(t) {
            return '<div class="font-weight-bolder text-primary mb-0">' + t.date_create_format_full + '</div>';
          }
        }]
      }), $("#kt_form_status").on("change", function () {
        t.search($(this).val().toLowerCase(), "Status");
      }), t.on("datatable-on-check datatable-on-uncheck datatable-on-layout-updated", function (e) {
        var a = t.rows(".datatable-row-active").nodes().length;
        $("#kt_subheader_group_selected_rows").html(a), a > 0 ? ($("#kt_subheader_search").addClass("hidden"), $("#kt_subheader_group_actions").removeClass("hidden")) : ($("#kt_subheader_search").removeClass("hidden"), $("#kt_subheader_group_actions").addClass("hidden"));
      }), $("#kt_datatable_records_fetch_modal").on("show.bs.modal", function (e) {
        var a = new KTDialog({
          type: "loader",
          placement: "top center",
          message: _LANG_.loading + "..."
        });
        a.show(), setTimeout(function () {
          a.hide();
        }, 1e3);

        for (var n = t.rows(".datatable-row-active").nodes().find('.checkbox-single > [type="checkbox"]').map(function (t, e) {
          return $(e).val();
        }), s = document.createDocumentFragment(), l = 0; l < n.length; l++) {
          var i = document.createElement("li");
          i.setAttribute("data-id", n[l]), i.innerHTML = _LANG_.selected_row_id + ": " + n[l], s.appendChild(i);
        }

        $(e.target).find("#kt_apps_user_fetch_records_selected").append(s);
      }).on("hide.bs.modal", function (t) {
        $(t.target).find("#kt_apps_user_fetch_records_selected").empty();
      }), $("#kt_subheader_group_actions_delete_all").on("click", function () {
        var e = t.rows(".datatable-row-active").nodes().find('.checkbox-single > [type="checkbox"]').map(function (t, e) {
          return $(e).val();
        });
        e.length > 0 && swal.fire({
          buttonsStyling: !1,
          text: _LANG_.are_you_sure_delete + " " + e.length + " " + _LANG_.selected_records + " ?",
          type: "error",
          confirmButtonText: _LANG_.yes_delete + ' !',
          confirmButtonClass: "btn btn-sm btn-bold btn-danger",
          showCancelButton: !0,
          cancelButtonText: _LANG_.no_cancel,
          cancelButtonClass: "btn btn-sm btn-bold btn-dark"
        }).then(function (t) {
          if (t.value) {
            var _data;

            var selected = e.get();
            $.ajax({
              type: 'DELETE',
              url: current_url + "/deleteConnexions",
              data: (_data = {}, _defineProperty(_data, crsftoken, $('meta[name="X-CSRF-TOKEN"]').attr('content')), _defineProperty(_data, "id", selected), _data),
              dataType: "json",
              success: function success(result, status, xhr) {
                //Success Message
                if (xhr.status == 200) {
                  var kt_subheader_total = $('.kt_subheader_total').text();
                  $('.kt_subheader_total').html(kt_subheader_total - selected.length);
                  $.notify({
                    title: result.success.message ? _LANG_.deleted + "!" : _LANG_.warning + "!",
                    message: result.success.message ? result.success.message : result.error.message
                  }, {
                    type: result.success.message ? 'success' : 'warning'
                  });
                  $("#kt_apps_logsConnexions_list_datatable").KTDatatable().reload();
                }
              }
            });
          } else {
            $.notify({
              title: _LANG_.deleted,
              message: _LANG_.your_selected_records_have_not_been_deleted
            }, {
              type: 'info'
            });
          }
        });
      }), t.on("datatable-on-layout-updated", function () {});
    }
  };
}();

KTUtil.ready(function () {
  KTAppLogsConnexionsListDatatable.init();
});

/***/ }),

/***/ 41:
/*!*******************************************************************************!*\
  !*** multi ./resources/metronic/js/pages/custom/logs/page.list.connexions.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Applications/MAMP/htdocs/spreadci4/public/admin/themes/metronic/resources/metronic/js/pages/custom/logs/page.list.connexions.js */"./resources/metronic/js/pages/custom/logs/page.list.connexions.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL21ldHJvbmljL2pzL3BhZ2VzL2N1c3RvbS9sb2dzL3BhZ2UubGlzdC5jb25uZXhpb25zLmpzIl0sIm5hbWVzIjpbIktUQXBwTG9nc0Nvbm5leGlvbnNMaXN0RGF0YXRhYmxlIiwidCIsImluaXQiLCIkIiwiS1REYXRhdGFibGUiLCJkYXRhIiwidHlwZSIsInNvdXJjZSIsInJlYWQiLCJ1cmwiLCJjdXJyZW50X3VybCIsIm1ldGhvZCIsInBhcmFtcyIsImNyc2Z0b2tlbiIsImF0dHIiLCJwYWdlU2l6ZSIsInNlcnZlclBhZ2luZyIsInNlcnZlckZpbHRlcmluZyIsInNlcnZlclNvcnRpbmciLCJ0cmFuc2xhdGUiLCJyZWNvcmRzIiwicHJvY2Vzc2luZyIsIl9MQU5HXyIsImxvYWRpbmdfd2FpdCIsIm5vUmVjb3JkcyIsIm5vX3JlY29yZF9mb3VuZCIsInRvb2xiYXIiLCJwYWdpbmF0aW9uIiwiaXRlbXMiLCJmaXJzdCIsInByZXYiLCJwcmV2aW91cyIsIm5leHQiLCJsYXN0IiwibW9yZSIsIm1vcmVfcGFnZXMiLCJpbnB1dCIsInBhZ2VfbnVtYmVyIiwic2VsZWN0Iiwic2VsZWN0X3BhZ2Vfc2l6ZSIsImFsbCIsImluZm8iLCJzaG93aW5nIiwibGF5b3V0Iiwic2Nyb2xsIiwiZm9vdGVyIiwic29ydGFibGUiLCJzZWFyY2giLCJkZWxheSIsInJvd3MiLCJiZWZvcmVUZW1wbGF0ZSIsInJvdyIsImluZGV4IiwiYWN0aXZlIiwiYWRkQ2xhc3MiLCJjb2x1bW5zIiwiZmllbGQiLCJ0aXRsZSIsIndpZHRoIiwic2VsZWN0b3IiLCJ0ZXh0QWxpZ24iLCJpcF9hZGRyZXNzIiwidGVtcGxhdGUiLCJ1c2VyX2FnZW50IiwidXNlcl9pZCIsInVzZXJuYW1lIiwiZXRhdCIsInN1Y2Nlc3MiLCJjb29sX3N1Y2Nlc3MiLCJlcnJvciIsImRhdGVfY3JlYXRlIiwiZm9ybWF0IiwiZGF0ZV9jcmVhdGVfZm9ybWF0X2Z1bGwiLCJvbiIsInZhbCIsInRvTG93ZXJDYXNlIiwiZSIsImEiLCJub2RlcyIsImxlbmd0aCIsImh0bWwiLCJyZW1vdmVDbGFzcyIsIktURGlhbG9nIiwicGxhY2VtZW50IiwibWVzc2FnZSIsImxvYWRpbmciLCJzaG93Iiwic2V0VGltZW91dCIsImhpZGUiLCJuIiwiZmluZCIsIm1hcCIsInMiLCJkb2N1bWVudCIsImNyZWF0ZURvY3VtZW50RnJhZ21lbnQiLCJsIiwiaSIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJpbm5lckhUTUwiLCJzZWxlY3RlZF9yb3dfaWQiLCJhcHBlbmRDaGlsZCIsInRhcmdldCIsImFwcGVuZCIsImVtcHR5Iiwic3dhbCIsImZpcmUiLCJidXR0b25zU3R5bGluZyIsInRleHQiLCJhcmVfeW91X3N1cmVfZGVsZXRlIiwic2VsZWN0ZWRfcmVjb3JkcyIsImNvbmZpcm1CdXR0b25UZXh0IiwieWVzX2RlbGV0ZSIsImNvbmZpcm1CdXR0b25DbGFzcyIsInNob3dDYW5jZWxCdXR0b24iLCJjYW5jZWxCdXR0b25UZXh0Iiwibm9fY2FuY2VsIiwiY2FuY2VsQnV0dG9uQ2xhc3MiLCJ0aGVuIiwidmFsdWUiLCJzZWxlY3RlZCIsImdldCIsImFqYXgiLCJkYXRhVHlwZSIsInJlc3VsdCIsInN0YXR1cyIsInhociIsImt0X3N1YmhlYWRlcl90b3RhbCIsIm5vdGlmeSIsImRlbGV0ZWQiLCJ3YXJuaW5nIiwicmVsb2FkIiwieW91cl9zZWxlY3RlZF9yZWNvcmRzX2hhdmVfbm90X2JlZW5fZGVsZXRlZCIsIktUVXRpbCIsInJlYWR5Il0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSww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T0FBUCxDQUFlaUIsT0FBaEIsR0FBMkJ3QyxNQUFNLENBQUN6RCxPQUFQLENBQWVpQixPQUExQyxHQUFvRHdDLE1BQU0sQ0FBQ3ZELEtBQVAsQ0FBYWU7QUFGckUsbUJBQVQsRUFHRztBQUNDOUUsd0JBQUksRUFBR3NILE1BQU0sQ0FBQ3pELE9BQVAsQ0FBZWlCLE9BQWhCLEdBQTJCLFNBQTNCLEdBQXVDO0FBRDlDLG1CQUhIO0FBTUFqRixtQkFBQyxDQUFDLHdDQUFELENBQUQsQ0FBNENDLFdBQTVDLEdBQTBEK0gsTUFBMUQ7QUFDSDtBQUNKO0FBckJFLGFBQVA7QUF1QkgsV0F6QkQsTUF5Qk87QUFDSGhJLGFBQUMsQ0FBQzZILE1BQUYsQ0FBUztBQUNMdkUsbUJBQUssRUFBRW5DLE1BQU0sQ0FBQzJHLE9BRFQ7QUFFTDdDLHFCQUFPLEVBQUU5RCxNQUFNLENBQUM4RztBQUZYLGFBQVQsRUFHRztBQUNDOUgsa0JBQUksRUFBRTtBQURQLGFBSEg7QUFNSDtBQUNKLFNBM0NlLENBQWhCO0FBNENILE9BaERHLENBMUlKLEVBMExJTCxDQUFDLENBQUN3RSxFQUFGLENBQUssNkJBQUwsRUFBb0MsWUFBVyxDQUFFLENBQWpELENBMUxKO0FBMkxIO0FBN0xFLEdBQVA7QUErTEgsQ0FqTXNDLEVBQXZDOztBQWtNQTRELE1BQU0sQ0FBQ0MsS0FBUCxDQUFhLFlBQVc7QUFDcEJ0SSxrQ0FBZ0MsQ0FBQ0UsSUFBakM7QUFDSCxDQUZELEUiLCJmaWxlIjoiL2RldmVsb3BtZW50L2pzL3BhZ2VzL2N1c3RvbS9sb2dzL3BhZ2UubGlzdC5jb25uZXhpb25zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA0MSk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBLVEFwcExvZ3NDb25uZXhpb25zTGlzdERhdGF0YWJsZSA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciB0O1xuICAgIHJldHVybiB7XG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdCA9ICQoXCIja3RfYXBwc19sb2dzQ29ubmV4aW9uc19saXN0X2RhdGF0YWJsZVwiKS5LVERhdGF0YWJsZSh7XG4gICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInJlbW90ZVwiLFxuICAgICAgICAgICAgICAgICAgICBzb3VyY2U6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlYWQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6IGN1cnJlbnRfdXJsICsgXCIvbGlzdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtjcnNmdG9rZW5dOiAkKCdtZXRhW25hbWU9XCJYLUNTUkYtVE9LRU5cIl0nKS5hdHRyKCdjb250ZW50JyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiAnXFxcXEFkbmR1d2ViXFxcXENpNENvcmVcXFxcTW9kZWxzXFxcXExvZ01vZGVsJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlOiAnY29ubmV4aW9ucydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHBhZ2VTaXplOiAxMCxcbiAgICAgICAgICAgICAgICAgICAgc2VydmVyUGFnaW5nOiAhMCxcbiAgICAgICAgICAgICAgICAgICAgc2VydmVyRmlsdGVyaW5nOiAhMCxcbiAgICAgICAgICAgICAgICAgICAgc2VydmVyU29ydGluZzogITBcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHRyYW5zbGF0ZToge1xuICAgICAgICAgICAgICAgICAgICByZWNvcmRzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9jZXNzaW5nOiBfTEFOR18ubG9hZGluZ193YWl0LFxuICAgICAgICAgICAgICAgICAgICAgICAgbm9SZWNvcmRzOiBfTEFOR18ubm9fcmVjb3JkX2ZvdW5kLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB0b29sYmFyOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWdpbmF0aW9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlyc3Q6IF9MQU5HXy5maXJzdCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXY6IF9MQU5HXy5wcmV2aW91cyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5leHQ6IF9MQU5HXy5uZXh0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFzdDogX0xBTkdfLmxhc3QsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb3JlOiBfTEFOR18ubW9yZV9wYWdlcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBfTEFOR18ucGFnZV9udW1iZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3Q6IF9MQU5HXy5zZWxlY3RfcGFnZV9zaXplLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxsOiBfTEFOR18uYWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmZvOiBfTEFOR18uc2hvd2luZyArICcge3tzdGFydH19IC0ge3tlbmR9fSBvZiB7e3RvdGFsfX0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgbGF5b3V0OiB7XG4gICAgICAgICAgICAgICAgICAgIHNjcm9sbDogITEsXG4gICAgICAgICAgICAgICAgICAgIGZvb3RlcjogITFcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHNvcnRhYmxlOiAhMCxcbiAgICAgICAgICAgICAgICBwYWdpbmF0aW9uOiAhMCxcbiAgICAgICAgICAgICAgICBzZWFyY2g6IHtcbiAgICAgICAgICAgICAgICAgICAgaW5wdXQ6ICQoXCIja3Rfc3ViaGVhZGVyX3NlYXJjaF9mb3JtXCIpLFxuICAgICAgICAgICAgICAgICAgICBkZWxheTogNDAwXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICByb3dzOiB7XG4gICAgICAgICAgICAgICAgICAgIGJlZm9yZVRlbXBsYXRlOiBmdW5jdGlvbihyb3csIGRhdGEsIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5hY3RpdmUgPT0gJzAnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93LmFkZENsYXNzKCdub3RhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgY29sdW1uczogW3tcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkOiBcImlkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCIjXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBzb3J0YWJsZTogITEsXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjAsXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3Rvcjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiBcImt0LWNoZWNrYm94LS1zb2xpZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkOiBcImlwX2FkZHJlc3NcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBfTEFOR18uaXBfYWRkcmVzcyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMDAsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZTogZnVuY3Rpb24odCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnPGRpdiBjbGFzcz1cInRleHQtZGFyay03NSBmb250LXdlaWdodC1ib2xkZXIgZm9udC1zaXplLWxnIG1iLTBcIj4nICsgdC5pcF9hZGRyZXNzICsgJzwvZGl2Pic7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQ6IFwiYWdlbnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBfTEFOR18udXNlcl9hZ2VudCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwidXNlcl9hZ2VudF90cmFpdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHNvcnRhYmxlOiAhMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vd2lkdGg6IDEwMCxcblxuICAgICAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWVsZDogXCJ1c2VybmFtZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IF9MQU5HXy51c2VyX2lkLFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJ1c2VyX2lkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBzb3J0YWJsZTogITEsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZTogZnVuY3Rpb24odCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJzxkaXYgY2xhc3M9XCJ0ZXh0LWRhcmstNzUgZm9udC13ZWlnaHQtYm9sZGVyIGZvbnQtc2l6ZS1sZyBtYi0wXCI+JyArIHQudXNlcm5hbWUgKyAnPC9kaXY+JztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy93aWR0aDogMTAwLFxuXG4gICAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkOiBcInN1Y2Nlc3NcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBfTEFOR18uZXRhdCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwic3VjY2Vzc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGU6IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHN1Y2Nlc3MgPSAodC5zdWNjZXNzID09ICcxJykgPyAnPHNwYW4gY2xhc3M9XCJsYWJlbCBsYWJlbC14bCBsYWJlbC1zdWNjZXNzIGxhYmVsLXBpbGwgbGFiZWwtaW5saW5lIG1yLTJcIj4nICsgX0xBTkdfLmNvb2xfc3VjY2VzcyArICc8L3NwYW4+JyA6ICc8c3BhbiBjbGFzcz1cImxhYmVsIGxhYmVsLXhsIGxhYmVsLXdhcm5pbmcgbGFiZWwtcGlsbCBsYWJlbC1pbmxpbmUgbXItMlwiPicgKyBfTEFOR18uZXJyb3IgKyAnPC9zcGFuPic7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnPGRpdiBjbGFzcz1cImt0LXVzZXItY2FyZC12MlwiPiAgIDxkaXYgY2xhc3M9XCJrdC11c2VyLWNhcmQtdjJfX2RldGFpbHNcIj48c3BhbiBjbGFzcz1cImt0LXVzZXItY2FyZC12Ml9fbmFtZVwiPicgKyBzdWNjZXNzICsgJzwvc3Bhbj48L2Rpdj48L2Rpdj4nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3dpZHRoOiAxMDAsXG5cbiAgICAgICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQ6IFwidXBkYXRlZF9hdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IF9MQU5HXy5kYXRlX2NyZWF0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgLy93aWR0aDogMTAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0OiBcIk1NL0REL1lZWVlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlOiBmdW5jdGlvbih0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICc8ZGl2IGNsYXNzPVwiZm9udC13ZWlnaHQtYm9sZGVyIHRleHQtcHJpbWFyeSBtYi0wXCI+JyArIHQuZGF0ZV9jcmVhdGVfZm9ybWF0X2Z1bGwgKyAnPC9kaXY+JztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0pLCAkKFwiI2t0X2Zvcm1fc3RhdHVzXCIpLm9uKFwiY2hhbmdlXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHQuc2VhcmNoKCQodGhpcykudmFsKCkudG9Mb3dlckNhc2UoKSwgXCJTdGF0dXNcIilcbiAgICAgICAgICAgIH0pLCB0Lm9uKFwiZGF0YXRhYmxlLW9uLWNoZWNrIGRhdGF0YWJsZS1vbi11bmNoZWNrIGRhdGF0YWJsZS1vbi1sYXlvdXQtdXBkYXRlZFwiLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgdmFyIGEgPSB0LnJvd3MoXCIuZGF0YXRhYmxlLXJvdy1hY3RpdmVcIikubm9kZXMoKS5sZW5ndGg7XG4gICAgICAgICAgICAgICAgJChcIiNrdF9zdWJoZWFkZXJfZ3JvdXBfc2VsZWN0ZWRfcm93c1wiKS5odG1sKGEpLCBhID4gMCA/ICgkKFwiI2t0X3N1YmhlYWRlcl9zZWFyY2hcIikuYWRkQ2xhc3MoXCJoaWRkZW5cIiksICQoXCIja3Rfc3ViaGVhZGVyX2dyb3VwX2FjdGlvbnNcIikucmVtb3ZlQ2xhc3MoXCJoaWRkZW5cIikpIDogKCQoXCIja3Rfc3ViaGVhZGVyX3NlYXJjaFwiKS5yZW1vdmVDbGFzcyhcImhpZGRlblwiKSwgJChcIiNrdF9zdWJoZWFkZXJfZ3JvdXBfYWN0aW9uc1wiKS5hZGRDbGFzcyhcImhpZGRlblwiKSlcbiAgICAgICAgICAgIH0pLCAkKFwiI2t0X2RhdGF0YWJsZV9yZWNvcmRzX2ZldGNoX21vZGFsXCIpLm9uKFwic2hvdy5icy5tb2RhbFwiLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgdmFyIGEgPSBuZXcgS1REaWFsb2coe1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImxvYWRlclwiLFxuICAgICAgICAgICAgICAgICAgICBwbGFjZW1lbnQ6IFwidG9wIGNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBfTEFOR18ubG9hZGluZyArIFwiLi4uXCJcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBhLnNob3coKSwgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgYS5oaWRlKClcbiAgICAgICAgICAgICAgICB9LCAxZTMpO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIG4gPSB0LnJvd3MoXCIuZGF0YXRhYmxlLXJvdy1hY3RpdmVcIikubm9kZXMoKS5maW5kKCcuY2hlY2tib3gtc2luZ2xlID4gW3R5cGU9XCJjaGVja2JveFwiXScpLm1hcChmdW5jdGlvbih0LCBlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJChlKS52YWwoKVxuICAgICAgICAgICAgICAgICAgICB9KSwgcyA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKSwgbCA9IDA7IGwgPCBuLmxlbmd0aDsgbCsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgICAgICAgICAgICAgICAgICBpLnNldEF0dHJpYnV0ZShcImRhdGEtaWRcIiwgbltsXSksIGkuaW5uZXJIVE1MID0gX0xBTkdfLnNlbGVjdGVkX3Jvd19pZCArIFwiOiBcIiArIG5bbF0sIHMuYXBwZW5kQ2hpbGQoaSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgJChlLnRhcmdldCkuZmluZChcIiNrdF9hcHBzX3VzZXJfZmV0Y2hfcmVjb3Jkc19zZWxlY3RlZFwiKS5hcHBlbmQocylcbiAgICAgICAgICAgIH0pLm9uKFwiaGlkZS5icy5tb2RhbFwiLCBmdW5jdGlvbih0KSB7XG4gICAgICAgICAgICAgICAgJCh0LnRhcmdldCkuZmluZChcIiNrdF9hcHBzX3VzZXJfZmV0Y2hfcmVjb3Jkc19zZWxlY3RlZFwiKS5lbXB0eSgpXG4gICAgICAgICAgICB9KSwgJChcIiNrdF9zdWJoZWFkZXJfZ3JvdXBfYWN0aW9uc19kZWxldGVfYWxsXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdmFyIGUgPSB0LnJvd3MoXCIuZGF0YXRhYmxlLXJvdy1hY3RpdmVcIikubm9kZXMoKS5maW5kKCcuY2hlY2tib3gtc2luZ2xlID4gW3R5cGU9XCJjaGVja2JveFwiXScpLm1hcChmdW5jdGlvbih0LCBlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAkKGUpLnZhbCgpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgZS5sZW5ndGggPiAwICYmIHN3YWwuZmlyZSh7XG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbnNTdHlsaW5nOiAhMSxcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogX0xBTkdfLmFyZV95b3Vfc3VyZV9kZWxldGUgKyBcIiBcIiArIGUubGVuZ3RoICsgXCIgXCIgKyBfTEFOR18uc2VsZWN0ZWRfcmVjb3JkcyArIFwiID9cIixcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJlcnJvclwiLFxuICAgICAgICAgICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogX0xBTkdfLnllc19kZWxldGUgKyAnICEnLFxuICAgICAgICAgICAgICAgICAgICBjb25maXJtQnV0dG9uQ2xhc3M6IFwiYnRuIGJ0bi1zbSBidG4tYm9sZCBidG4tZGFuZ2VyXCIsXG4gICAgICAgICAgICAgICAgICAgIHNob3dDYW5jZWxCdXR0b246ICEwLFxuICAgICAgICAgICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBfTEFOR18ubm9fY2FuY2VsLFxuICAgICAgICAgICAgICAgICAgICBjYW5jZWxCdXR0b25DbGFzczogXCJidG4gYnRuLXNtIGJ0bi1ib2xkIGJ0bi1kYXJrXCJcbiAgICAgICAgICAgICAgICB9KS50aGVuKGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQudmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzZWxlY3RlZCA9IGUuZ2V0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdERUxFVEUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybDogY3VycmVudF91cmwgKyBcIi9kZWxldGVDb25uZXhpb25zXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbY3JzZnRva2VuXTogJCgnbWV0YVtuYW1lPVwiWC1DU1JGLVRPS0VOXCJdJykuYXR0cignY29udGVudCcpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogc2VsZWN0ZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFUeXBlOiBcImpzb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXN1bHQsIHN0YXR1cywgeGhyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vU3VjY2VzcyBNZXNzYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh4aHIuc3RhdHVzID09IDIwMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGt0X3N1YmhlYWRlcl90b3RhbCA9ICQoJy5rdF9zdWJoZWFkZXJfdG90YWwnKS50ZXh0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcua3Rfc3ViaGVhZGVyX3RvdGFsJykuaHRtbCgoa3Rfc3ViaGVhZGVyX3RvdGFsIC0gc2VsZWN0ZWQubGVuZ3RoKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkLm5vdGlmeSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IChyZXN1bHQuc3VjY2Vzcy5tZXNzYWdlKSA/IF9MQU5HXy5kZWxldGVkICsgXCIhXCIgOiBfTEFOR18ud2FybmluZyArIFwiIVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IChyZXN1bHQuc3VjY2Vzcy5tZXNzYWdlKSA/IHJlc3VsdC5zdWNjZXNzLm1lc3NhZ2UgOiByZXN1bHQuZXJyb3IubWVzc2FnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IChyZXN1bHQuc3VjY2Vzcy5tZXNzYWdlKSA/ICdzdWNjZXNzJyA6ICd3YXJuaW5nJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKFwiI2t0X2FwcHNfbG9nc0Nvbm5leGlvbnNfbGlzdF9kYXRhdGFibGVcIikuS1REYXRhdGFibGUoKS5yZWxvYWQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkLm5vdGlmeSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IF9MQU5HXy5kZWxldGVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IF9MQU5HXy55b3VyX3NlbGVjdGVkX3JlY29yZHNfaGF2ZV9ub3RfYmVlbl9kZWxldGVkXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2luZm8nXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KSwgdC5vbihcImRhdGF0YWJsZS1vbi1sYXlvdXQtdXBkYXRlZFwiLCBmdW5jdGlvbigpIHt9KVxuICAgICAgICB9XG4gICAgfVxufSgpO1xuS1RVdGlsLnJlYWR5KGZ1bmN0aW9uKCkge1xuICAgIEtUQXBwTG9nc0Nvbm5leGlvbnNMaXN0RGF0YXRhYmxlLmluaXQoKVxufSk7Il0sInNvdXJjZVJvb3QiOiIifQ==