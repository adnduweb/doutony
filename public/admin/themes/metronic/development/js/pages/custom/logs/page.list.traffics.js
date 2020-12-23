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
/******/ 	return __webpack_require__(__webpack_require__.s = 43);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/metronic/js/pages/custom/logs/page.list.traffics.js":
/*!***********************************************************************!*\
  !*** ./resources/metronic/js/pages/custom/logs/page.list.traffics.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var KTAppLogsTrafficListDatatable = function () {
  var t;
  return {
    init: function init() {
      var _params;

      t = $("#kt_apps_logsTraffic_list_datatable").KTDatatable({
        data: {
          type: "remote",
          source: {
            read: {
              url: current_url + "/list",
              method: 'GET',
              params: (_params = {}, _defineProperty(_params, crsftoken, $('meta[name="X-CSRF-TOKEN"]').attr('content')), _defineProperty(_params, "model", '\\Adnduweb\\Ci4Core\\Models\\LogModel'), _defineProperty(_params, "handle", 'traffic'), _params)
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
          field: "ip_addressLong",
          title: _LANG_.ip_address,
          width: 200,
          template: function template(t) {
            return '<div class="text-dark-75 font-weight-bolder font-size-lg mb-0">' + t.ip_address + '</div>';
          }
        }, {
          field: "user_agent_traite",
          title: _LANG_.user_agent,
          type: "user_agent_traite",
          sortable: !1 //width: 100,

        }, {
          field: "username",
          title: _LANG_.user_id,
          type: "user_id",
          sortable: !1 //width: 100,

        }, {
          field: "path",
          title: _LANG_.path,
          type: "path",
          template: function template(t) {
            var query = t.query != '' ? t.query : 'nc';
            var fragment = t.fragment != '' ? t.fragment : 'nc';
            return '<div class="kt-user-card-v2">   <div class="kt-user-card-v2__details"><span class="kt-user-card-v2__name">' + t.path + '</span><span class="kt-user-card-v2__email">' + query + ' | ' + fragment + '</span></div></div>';
          } //width: 100,

        }, {
          field: "views",
          title: _LANG_.views,
          type: "views" //width: 100,

        }, {
          field: "updated_at",
          title: _LANG_.date_create,
          type: "date",
          format: "MM/DD/YYYY H:i:s",
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
      }), $("#kt_subheader_group_actions_status_change").on("click", "[data-toggle='status-change']", function (event) {
        event.preventDefault();
        var e = $(this).find(".kt-nav__link-text").html(),
            st = $(this).find(".kt-nav__link-text").data('status'),
            a = t.rows(".datatable-row-active").nodes().find('.checkbox-single > [type="checkbox"]').map(function (t, e) {
          return $(e).val();
        });
        a.length > 0 && swal.fire({
          buttonsStyling: !1,
          html: _LANG_.are_you_sure_update + " " + a.length + " " + _LANG_.selected_records_status_to + " " + e + " ?",
          type: "primary",
          confirmButtonText: _LANG_.yes_update + "!",
          confirmButtonClass: "btn btn-sm btn-bold btn-dark",
          showCancelButton: !0,
          cancelButtonText: _LANG_.no_cancel,
          cancelButtonClass: "btn btn-sm btn-bold btn-default"
        }).then(function (t) {
          if (t.value) {
            $.ajax({
              type: 'POST',
              url: basePath + segementAdmin + "/sp-admin-ajax",
              data: {
                ajax: true,
                controller: 'AdminLogController',
                action: 'updateTraffic',
                value: {
                  selected: a.get(),
                  active: st
                },
                module: false
              },
              dataType: "json",
              success: function success(result, status, xhr) {
                if (xhr.status == 200) {
                  $.notify({
                    title: _LANG_.updated + "!",
                    message: result.message
                  }, {
                    type: 'success'
                  });
                  $("#kt_apps_logsTraffic_list_datatable").KTDatatable().reload();
                }
              }
            });
          } else {
            $.notify({
              title: _LANG_.cancelled,
              message: _LANG_.your_seleted_records_statuses_have_not_been_updated
            }, {
              type: 'info',
              placement: {
                from: 'bottom',
                align: 'center'
              }
            });
          }
        });
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
            var selected = e.get();
            $.ajax({
              type: 'POST',
              url: basePath + segementAdmin + "/sp-admin-ajax",
              data: {
                ajax: true,
                controller: 'AdminLogController',
                action: 'deleteTraffic',
                value: {
                  selected: selected
                },
                module: false
              },
              dataType: "json",
              success: function success(result, status, xhr) {
                //Success Message
                if (xhr.status == 200) {
                  var kt_subheader_total = $('.kt_subheader_total').text();
                  $('.kt_subheader_total').html(kt_subheader_total - selected.length);
                  $.notify({
                    title: _LANG_.deleted + "!",
                    message: result.message
                  }, {
                    type: result.type
                  });
                  $("#kt_apps_logsTraffic_list_datatable").KTDatatable().reload();
                }
              }
            });
          } else {
            $.notify({
              title: _LANG_.deleted,
              message: _LANG_.your_selected_records_have_not_been_deleted
            }, {
              type: 'primary'
            });
          }
        });
      }), t.on("datatable-on-layout-updated", function () {});
    }
  };
}();

KTUtil.ready(function () {
  KTAppLogsTrafficListDatatable.init();
});

/***/ }),

/***/ 43:
/*!*****************************************************************************!*\
  !*** multi ./resources/metronic/js/pages/custom/logs/page.list.traffics.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Applications/MAMP/htdocs/spreadci4/public/admin/themes/metronic/resources/metronic/js/pages/custom/logs/page.list.traffics.js */"./resources/metronic/js/pages/custom/logs/page.list.traffics.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL21ldHJvbmljL2pzL3BhZ2VzL2N1c3RvbS9sb2dzL3BhZ2UubGlzdC50cmFmZmljcy5qcyJdLCJuYW1lcyI6WyJLVEFwcExvZ3NUcmFmZmljTGlzdERhdGF0YWJsZSIsInQiLCJpbml0IiwiJCIsIktURGF0YXRhYmxlIiwiZGF0YSIsInR5cGUiLCJzb3VyY2UiLCJyZWFkIiwidXJsIiwiY3VycmVudF91cmwiLCJtZXRob2QiLCJwYXJhbXMiLCJjcnNmdG9rZW4iLCJhdHRyIiwicGFnZVNpemUiLCJzZXJ2ZXJQYWdpbmciLCJzZXJ2ZXJGaWx0ZXJpbmciLCJzZXJ2ZXJTb3J0aW5nIiwidHJhbnNsYXRlIiwicmVjb3JkcyIsInByb2Nlc3NpbmciLCJfTEFOR18iLCJsb2FkaW5nX3dhaXQiLCJub1JlY29yZHMiLCJub19yZWNvcmRfZm91bmQiLCJ0b29sYmFyIiwicGFnaW5hdGlvbiIsIml0ZW1zIiwiZmlyc3QiLCJwcmV2IiwicHJldmlvdXMiLCJuZXh0IiwibGFzdCIsIm1vcmUiLCJtb3JlX3BhZ2VzIiwiaW5wdXQiLCJwYWdlX251bWJlciIsInNlbGVjdCIsInNlbGVjdF9wYWdlX3NpemUiLCJhbGwiLCJpbmZvIiwic2hvd2luZyIsImxheW91dCIsInNjcm9sbCIsImZvb3RlciIsInNvcnRhYmxlIiwic2VhcmNoIiwiZGVsYXkiLCJyb3dzIiwiYmVmb3JlVGVtcGxhdGUiLCJyb3ciLCJpbmRleCIsImFjdGl2ZSIsImFkZENsYXNzIiwiY29sdW1ucyIsImZpZWxkIiwidGl0bGUiLCJ3aWR0aCIsInNlbGVjdG9yIiwidGV4dEFsaWduIiwiaXBfYWRkcmVzcyIsInRlbXBsYXRlIiwidXNlcl9hZ2VudCIsInVzZXJfaWQiLCJwYXRoIiwicXVlcnkiLCJmcmFnbWVudCIsInZpZXdzIiwiZGF0ZV9jcmVhdGUiLCJmb3JtYXQiLCJkYXRlX2NyZWF0ZV9mb3JtYXRfZnVsbCIsIm9uIiwidmFsIiwidG9Mb3dlckNhc2UiLCJlIiwiYSIsIm5vZGVzIiwibGVuZ3RoIiwiaHRtbCIsInJlbW92ZUNsYXNzIiwiS1REaWFsb2ciLCJwbGFjZW1lbnQiLCJtZXNzYWdlIiwibG9hZGluZyIsInNob3ciLCJzZXRUaW1lb3V0IiwiaGlkZSIsIm4iLCJmaW5kIiwibWFwIiwicyIsImRvY3VtZW50IiwiY3JlYXRlRG9jdW1lbnRGcmFnbWVudCIsImwiLCJpIiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsImlubmVySFRNTCIsInNlbGVjdGVkX3Jvd19pZCIsImFwcGVuZENoaWxkIiwidGFyZ2V0IiwiYXBwZW5kIiwiZW1wdHkiLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic3QiLCJzd2FsIiwiZmlyZSIsImJ1dHRvbnNTdHlsaW5nIiwiYXJlX3lvdV9zdXJlX3VwZGF0ZSIsInNlbGVjdGVkX3JlY29yZHNfc3RhdHVzX3RvIiwiY29uZmlybUJ1dHRvblRleHQiLCJ5ZXNfdXBkYXRlIiwiY29uZmlybUJ1dHRvbkNsYXNzIiwic2hvd0NhbmNlbEJ1dHRvbiIsImNhbmNlbEJ1dHRvblRleHQiLCJub19jYW5jZWwiLCJjYW5jZWxCdXR0b25DbGFzcyIsInRoZW4iLCJ2YWx1ZSIsImFqYXgiLCJiYXNlUGF0aCIsInNlZ2VtZW50QWRtaW4iLCJjb250cm9sbGVyIiwiYWN0aW9uIiwic2VsZWN0ZWQiLCJnZXQiLCJtb2R1bGUiLCJkYXRhVHlwZSIsInN1Y2Nlc3MiLCJyZXN1bHQiLCJzdGF0dXMiLCJ4aHIiLCJub3RpZnkiLCJ1cGRhdGVkIiwicmVsb2FkIiwiY2FuY2VsbGVkIiwieW91cl9zZWxldGVkX3JlY29yZHNfc3RhdHVzZXNfaGF2ZV9ub3RfYmVlbl91cGRhdGVkIiwiZnJvbSIsImFsaWduIiwidGV4dCIsImFyZV95b3Vfc3VyZV9kZWxldGUiLCJzZWxlY3RlZF9yZWNvcmRzIiwieWVzX2RlbGV0ZSIsImt0X3N1YmhlYWRlcl90b3RhbCIsImRlbGV0ZWQiLCJ5b3VyX3NlbGVj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NEUsTUFBTSxDQUFDQyxLQUFQLENBQWEsWUFBVztBQUNwQnJKLCtCQUE2QixDQUFDRSxJQUE5QjtBQUNILENBRkQsRSIsImZpbGUiOiIvZGV2ZWxvcG1lbnQvanMvcGFnZXMvY3VzdG9tL2xvZ3MvcGFnZS5saXN0LnRyYWZmaWNzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA0Myk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBLVEFwcExvZ3NUcmFmZmljTGlzdERhdGF0YWJsZSA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciB0O1xuICAgIHJldHVybiB7XG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdCA9ICQoXCIja3RfYXBwc19sb2dzVHJhZmZpY19saXN0X2RhdGF0YWJsZVwiKS5LVERhdGF0YWJsZSh7XG4gICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInJlbW90ZVwiLFxuICAgICAgICAgICAgICAgICAgICBzb3VyY2U6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlYWQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6IGN1cnJlbnRfdXJsICsgXCIvbGlzdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtjcnNmdG9rZW5dOiAkKCdtZXRhW25hbWU9XCJYLUNTUkYtVE9LRU5cIl0nKS5hdHRyKCdjb250ZW50JyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiAnXFxcXEFkbmR1d2ViXFxcXENpNENvcmVcXFxcTW9kZWxzXFxcXExvZ01vZGVsJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlOiAndHJhZmZpYydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHBhZ2VTaXplOiAxMCxcbiAgICAgICAgICAgICAgICAgICAgc2VydmVyUGFnaW5nOiAhMCxcbiAgICAgICAgICAgICAgICAgICAgc2VydmVyRmlsdGVyaW5nOiAhMCxcbiAgICAgICAgICAgICAgICAgICAgc2VydmVyU29ydGluZzogITBcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHRyYW5zbGF0ZToge1xuICAgICAgICAgICAgICAgICAgICByZWNvcmRzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9jZXNzaW5nOiBfTEFOR18ubG9hZGluZ193YWl0LFxuICAgICAgICAgICAgICAgICAgICAgICAgbm9SZWNvcmRzOiBfTEFOR18ubm9fcmVjb3JkX2ZvdW5kLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB0b29sYmFyOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWdpbmF0aW9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlyc3Q6IF9MQU5HXy5maXJzdCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXY6IF9MQU5HXy5wcmV2aW91cyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5leHQ6IF9MQU5HXy5uZXh0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFzdDogX0xBTkdfLmxhc3QsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb3JlOiBfTEFOR18ubW9yZV9wYWdlcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBfTEFOR18ucGFnZV9udW1iZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3Q6IF9MQU5HXy5zZWxlY3RfcGFnZV9zaXplLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxsOiBfTEFOR18uYWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmZvOiBfTEFOR18uc2hvd2luZyArICcge3tzdGFydH19IC0ge3tlbmR9fSBvZiB7e3RvdGFsfX0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgbGF5b3V0OiB7XG4gICAgICAgICAgICAgICAgICAgIHNjcm9sbDogITEsXG4gICAgICAgICAgICAgICAgICAgIGZvb3RlcjogITFcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHNvcnRhYmxlOiAhMCxcbiAgICAgICAgICAgICAgICBwYWdpbmF0aW9uOiAhMCxcbiAgICAgICAgICAgICAgICBzZWFyY2g6IHtcbiAgICAgICAgICAgICAgICAgICAgaW5wdXQ6ICQoXCIja3Rfc3ViaGVhZGVyX3NlYXJjaF9mb3JtXCIpLFxuICAgICAgICAgICAgICAgICAgICBkZWxheTogNDAwXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICByb3dzOiB7XG4gICAgICAgICAgICAgICAgICAgIGJlZm9yZVRlbXBsYXRlOiBmdW5jdGlvbihyb3csIGRhdGEsIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5hY3RpdmUgPT0gJzAnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93LmFkZENsYXNzKCdub3RhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgY29sdW1uczogW3tcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkOiBcImlkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCIjXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBzb3J0YWJsZTogITEsXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjAsXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3Rvcjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiBcImt0LWNoZWNrYm94LS1zb2xpZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkOiBcImlwX2FkZHJlc3NMb25nXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogX0xBTkdfLmlwX2FkZHJlc3MsXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGU6IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJzxkaXYgY2xhc3M9XCJ0ZXh0LWRhcmstNzUgZm9udC13ZWlnaHQtYm9sZGVyIGZvbnQtc2l6ZS1sZyBtYi0wXCI+JyArIHQuaXBfYWRkcmVzcyArICc8L2Rpdj4nO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkOiBcInVzZXJfYWdlbnRfdHJhaXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogX0xBTkdfLnVzZXJfYWdlbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInVzZXJfYWdlbnRfdHJhaXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBzb3J0YWJsZTogITEsXG4gICAgICAgICAgICAgICAgICAgICAgICAvL3dpZHRoOiAxMDAsXG5cbiAgICAgICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQ6IFwidXNlcm5hbWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBfTEFOR18udXNlcl9pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwidXNlcl9pZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgc29ydGFibGU6ICExLFxuICAgICAgICAgICAgICAgICAgICAgICAgLy93aWR0aDogMTAwLFxuXG4gICAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkOiBcInBhdGhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBfTEFOR18ucGF0aCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwicGF0aFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGU6IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHF1ZXJ5ID0gKHQucXVlcnkgIT0gJycpID8gdC5xdWVyeSA6ICduYyc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBmcmFnbWVudCA9ICh0LmZyYWdtZW50ICE9ICcnKSA/IHQuZnJhZ21lbnQgOiAnbmMnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJzxkaXYgY2xhc3M9XCJrdC11c2VyLWNhcmQtdjJcIj4gICA8ZGl2IGNsYXNzPVwia3QtdXNlci1jYXJkLXYyX19kZXRhaWxzXCI+PHNwYW4gY2xhc3M9XCJrdC11c2VyLWNhcmQtdjJfX25hbWVcIj4nICsgdC5wYXRoICsgJzwvc3Bhbj48c3BhbiBjbGFzcz1cImt0LXVzZXItY2FyZC12Ml9fZW1haWxcIj4nICsgcXVlcnkgKyAnIHwgJyArIGZyYWdtZW50ICsgJzwvc3Bhbj48L2Rpdj48L2Rpdj4nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3dpZHRoOiAxMDAsXG5cbiAgICAgICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQ6IFwidmlld3NcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBfTEFOR18udmlld3MsXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInZpZXdzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAvL3dpZHRoOiAxMDAsXG5cbiAgICAgICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQ6IFwidXBkYXRlZF9hdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IF9MQU5HXy5kYXRlX2NyZWF0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0OiBcIk1NL0REL1lZWVkgSDppOnNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlOiBmdW5jdGlvbih0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICc8ZGl2IGNsYXNzPVwiZm9udC13ZWlnaHQtYm9sZGVyIHRleHQtcHJpbWFyeSBtYi0wXCI+JyArIHQuZGF0ZV9jcmVhdGVfZm9ybWF0X2Z1bGwgKyAnPC9kaXY+JztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSksICQoXCIja3RfZm9ybV9zdGF0dXNcIikub24oXCJjaGFuZ2VcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdC5zZWFyY2goJCh0aGlzKS52YWwoKS50b0xvd2VyQ2FzZSgpLCBcIlN0YXR1c1wiKVxuICAgICAgICAgICAgfSksIHQub24oXCJkYXRhdGFibGUtb24tY2hlY2sgZGF0YXRhYmxlLW9uLXVuY2hlY2sgZGF0YXRhYmxlLW9uLWxheW91dC11cGRhdGVkXCIsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICB2YXIgYSA9IHQucm93cyhcIi5kYXRhdGFibGUtcm93LWFjdGl2ZVwiKS5ub2RlcygpLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAkKFwiI2t0X3N1YmhlYWRlcl9ncm91cF9zZWxlY3RlZF9yb3dzXCIpLmh0bWwoYSksIGEgPiAwID8gKCQoXCIja3Rfc3ViaGVhZGVyX3NlYXJjaFwiKS5hZGRDbGFzcyhcImhpZGRlblwiKSwgJChcIiNrdF9zdWJoZWFkZXJfZ3JvdXBfYWN0aW9uc1wiKS5yZW1vdmVDbGFzcyhcImhpZGRlblwiKSkgOiAoJChcIiNrdF9zdWJoZWFkZXJfc2VhcmNoXCIpLnJlbW92ZUNsYXNzKFwiaGlkZGVuXCIpLCAkKFwiI2t0X3N1YmhlYWRlcl9ncm91cF9hY3Rpb25zXCIpLmFkZENsYXNzKFwiaGlkZGVuXCIpKVxuICAgICAgICAgICAgfSksICQoXCIja3RfZGF0YXRhYmxlX3JlY29yZHNfZmV0Y2hfbW9kYWxcIikub24oXCJzaG93LmJzLm1vZGFsXCIsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICB2YXIgYSA9IG5ldyBLVERpYWxvZyh7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwibG9hZGVyXCIsXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlbWVudDogXCJ0b3AgY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IF9MQU5HXy5sb2FkaW5nICsgXCIuLi5cIlxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGEuc2hvdygpLCBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICBhLmhpZGUoKVxuICAgICAgICAgICAgICAgIH0sIDFlMyk7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgbiA9IHQucm93cyhcIi5kYXRhdGFibGUtcm93LWFjdGl2ZVwiKS5ub2RlcygpLmZpbmQoJy5jaGVja2JveC1zaW5nbGUgPiBbdHlwZT1cImNoZWNrYm94XCJdJykubWFwKGZ1bmN0aW9uKHQsIGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAkKGUpLnZhbCgpXG4gICAgICAgICAgICAgICAgICAgIH0pLCBzID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpLCBsID0gMDsgbCA8IG4ubGVuZ3RoOyBsKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgICAgICAgICAgICAgICAgIGkuc2V0QXR0cmlidXRlKFwiZGF0YS1pZFwiLCBuW2xdKSwgaS5pbm5lckhUTUwgPSBfTEFOR18uc2VsZWN0ZWRfcm93X2lkICsgXCI6IFwiICsgbltsXSwgcy5hcHBlbmRDaGlsZChpKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAkKGUudGFyZ2V0KS5maW5kKFwiI2t0X2FwcHNfdXNlcl9mZXRjaF9yZWNvcmRzX3NlbGVjdGVkXCIpLmFwcGVuZChzKVxuICAgICAgICAgICAgfSkub24oXCJoaWRlLmJzLm1vZGFsXCIsIGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgICAgICAgICAkKHQudGFyZ2V0KS5maW5kKFwiI2t0X2FwcHNfdXNlcl9mZXRjaF9yZWNvcmRzX3NlbGVjdGVkXCIpLmVtcHR5KClcbiAgICAgICAgICAgIH0pLCAkKFwiI2t0X3N1YmhlYWRlcl9ncm91cF9hY3Rpb25zX3N0YXR1c19jaGFuZ2VcIikub24oXCJjbGlja1wiLCBcIltkYXRhLXRvZ2dsZT0nc3RhdHVzLWNoYW5nZSddXCIsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICB2YXIgZSA9ICQodGhpcykuZmluZChcIi5rdC1uYXZfX2xpbmstdGV4dFwiKS5odG1sKCksXG4gICAgICAgICAgICAgICAgICAgIHN0ID0gJCh0aGlzKS5maW5kKFwiLmt0LW5hdl9fbGluay10ZXh0XCIpLmRhdGEoJ3N0YXR1cycpLFxuICAgICAgICAgICAgICAgICAgICBhID0gdC5yb3dzKFwiLmRhdGF0YWJsZS1yb3ctYWN0aXZlXCIpLm5vZGVzKCkuZmluZCgnLmNoZWNrYm94LXNpbmdsZSA+IFt0eXBlPVwiY2hlY2tib3hcIl0nKS5tYXAoZnVuY3Rpb24odCwgZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICQoZSkudmFsKClcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgYS5sZW5ndGggPiAwICYmIHN3YWwuZmlyZSh7XG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbnNTdHlsaW5nOiAhMSxcbiAgICAgICAgICAgICAgICAgICAgaHRtbDogX0xBTkdfLmFyZV95b3Vfc3VyZV91cGRhdGUgKyBcIiBcIiArIGEubGVuZ3RoICsgXCIgXCIgKyBfTEFOR18uc2VsZWN0ZWRfcmVjb3Jkc19zdGF0dXNfdG8gKyBcIiBcIiArIGUgKyBcIiA/XCIsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwicHJpbWFyeVwiLFxuICAgICAgICAgICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogX0xBTkdfLnllc191cGRhdGUgKyBcIiFcIixcbiAgICAgICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvbkNsYXNzOiBcImJ0biBidG4tc20gYnRuLWJvbGQgYnRuLWRhcmtcIixcbiAgICAgICAgICAgICAgICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogITAsXG4gICAgICAgICAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IF9MQU5HXy5ub19jYW5jZWwsXG4gICAgICAgICAgICAgICAgICAgIGNhbmNlbEJ1dHRvbkNsYXNzOiBcImJ0biBidG4tc20gYnRuLWJvbGQgYnRuLWRlZmF1bHRcIlxuICAgICAgICAgICAgICAgIH0pLnRoZW4oZnVuY3Rpb24odCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodC52YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnUE9TVCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBiYXNlUGF0aCArIHNlZ2VtZW50QWRtaW4gKyBcIi9zcC1hZG1pbi1hamF4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhamF4OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnQWRtaW5Mb2dDb250cm9sbGVyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uOiAndXBkYXRlVHJhZmZpYycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZDogYS5nZXQoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZTogc3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kdWxlOiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVR5cGU6IFwianNvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3VsdCwgc3RhdHVzLCB4aHIpIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoeGhyLnN0YXR1cyA9PSAyMDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQubm90aWZ5KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogX0xBTkdfLnVwZGF0ZWQgKyBcIiFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiByZXN1bHQubWVzc2FnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdzdWNjZXNzJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKFwiI2t0X2FwcHNfbG9nc1RyYWZmaWNfbGlzdF9kYXRhdGFibGVcIikuS1REYXRhdGFibGUoKS5yZWxvYWQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkLm5vdGlmeSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IF9MQU5HXy5jYW5jZWxsZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogX0xBTkdfLnlvdXJfc2VsZXRlZF9yZWNvcmRzX3N0YXR1c2VzX2hhdmVfbm90X2JlZW5fdXBkYXRlZFxuICAgICAgICAgICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdpbmZvJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZW1lbnQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbTogJ2JvdHRvbScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduOiAnY2VudGVyJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KSwgJChcIiNrdF9zdWJoZWFkZXJfZ3JvdXBfYWN0aW9uc19kZWxldGVfYWxsXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdmFyIGUgPSB0LnJvd3MoXCIuZGF0YXRhYmxlLXJvdy1hY3RpdmVcIikubm9kZXMoKS5maW5kKCcuY2hlY2tib3gtc2luZ2xlID4gW3R5cGU9XCJjaGVja2JveFwiXScpLm1hcChmdW5jdGlvbih0LCBlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAkKGUpLnZhbCgpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgZS5sZW5ndGggPiAwICYmIHN3YWwuZmlyZSh7XG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbnNTdHlsaW5nOiAhMSxcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogX0xBTkdfLmFyZV95b3Vfc3VyZV9kZWxldGUgKyBcIiBcIiArIGUubGVuZ3RoICsgXCIgXCIgKyBfTEFOR18uc2VsZWN0ZWRfcmVjb3JkcyArIFwiID9cIixcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJlcnJvclwiLFxuICAgICAgICAgICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogX0xBTkdfLnllc19kZWxldGUgKyAnICEnLFxuICAgICAgICAgICAgICAgICAgICBjb25maXJtQnV0dG9uQ2xhc3M6IFwiYnRuIGJ0bi1zbSBidG4tYm9sZCBidG4tZGFuZ2VyXCIsXG4gICAgICAgICAgICAgICAgICAgIHNob3dDYW5jZWxCdXR0b246ICEwLFxuICAgICAgICAgICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBfTEFOR18ubm9fY2FuY2VsLFxuICAgICAgICAgICAgICAgICAgICBjYW5jZWxCdXR0b25DbGFzczogXCJidG4gYnRuLXNtIGJ0bi1ib2xkIGJ0bi1kYXJrXCJcbiAgICAgICAgICAgICAgICB9KS50aGVuKGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQudmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzZWxlY3RlZCA9IGUuZ2V0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdQT1NUJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6IGJhc2VQYXRoICsgc2VnZW1lbnRBZG1pbiArIFwiL3NwLWFkbWluLWFqYXhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFqYXg6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdBZG1pbkxvZ0NvbnRyb2xsZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb246ICdkZWxldGVUcmFmZmljJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkOiBzZWxlY3RlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2R1bGU6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhVHlwZTogXCJqc29uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzdWx0LCBzdGF0dXMsIHhocikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL1N1Y2Nlc3MgTWVzc2FnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoeGhyLnN0YXR1cyA9PSAyMDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBrdF9zdWJoZWFkZXJfdG90YWwgPSAkKCcua3Rfc3ViaGVhZGVyX3RvdGFsJykudGV4dCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnLmt0X3N1YmhlYWRlcl90b3RhbCcpLmh0bWwoKGt0X3N1YmhlYWRlcl90b3RhbCAtIHNlbGVjdGVkLmxlbmd0aCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJC5ub3RpZnkoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBfTEFOR18uZGVsZXRlZCArIFwiIVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IHJlc3VsdC5tZXNzYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogcmVzdWx0LnR5cGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJChcIiNrdF9hcHBzX2xvZ3NUcmFmZmljX2xpc3RfZGF0YXRhYmxlXCIpLktURGF0YXRhYmxlKCkucmVsb2FkKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgJC5ub3RpZnkoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBfTEFOR18uZGVsZXRlZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBfTEFOR18ueW91cl9zZWxlY3RlZF9yZWNvcmRzX2hhdmVfbm90X2JlZW5fZGVsZXRlZFxuICAgICAgICAgICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdwcmltYXJ5J1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSksIHQub24oXCJkYXRhdGFibGUtb24tbGF5b3V0LXVwZGF0ZWRcIiwgZnVuY3Rpb24oKSB7fSlcbiAgICAgICAgfVxuICAgIH1cbn0oKTtcbktUVXRpbC5yZWFkeShmdW5jdGlvbigpIHtcbiAgICBLVEFwcExvZ3NUcmFmZmljTGlzdERhdGF0YWJsZS5pbml0KClcbn0pOyJdLCJzb3VyY2VSb290IjoiIn0=