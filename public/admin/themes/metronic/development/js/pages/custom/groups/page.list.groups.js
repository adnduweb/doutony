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
/******/ 	return __webpack_require__(__webpack_require__.s = 37);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/metronic/js/pages/custom/groups/page.list.groups.js":
/*!***********************************************************************!*\
  !*** ./resources/metronic/js/pages/custom/groups/page.list.groups.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var KTAppUserListDatatable = function () {
  var t;
  return {
    init: function init() {
      t = $("#kt_apps_group_list_datatable").KTDatatable({
        data: {
          type: "remote",
          source: {
            read: {
              url: current_url + "/list",
              method: 'GET',
              params: _defineProperty({}, crsftoken, $('meta[name="X-CSRF-TOKEN"]').attr('content'))
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
            "class": "checkbox-solid"
          },
          textAlign: "center"
        }, {
          field: "name",
          title: _LANG_.titre,
          width: 200,
          template: function template(t) {
            return '<a href="' + startUrl + '/settings-advanced/groups/edit/' + t.id + '" class="capitalize text-dark-75 font-weight-bolder font-size-lg mb-0"> ' + t.name + '</a>';
          }
        }, {
          field: "description",
          title: _LANG_.description,
          type: "description" //width: 100,

        }, {
          field: "login_destination",
          title: _LANG_.url_destination,
          type: "login_destination" //width: 100,

        }, {
          field: "created_at",
          title: _LANG_.date_create,
          type: "date",
          //width: 100,
          format: "MM/DD/YYYY",
          template: function template(t) {
            return '<div class="font-weight-bolder text-primary mb-0">' + t.date_create_format + '</div>';
          }
        }, {
          field: "Actions",
          width: 80,
          title: "Actions",
          sortable: !1,
          autoHide: !1,
          overflow: "visible",
          template: function template(t) {
            var restrictionsDelete = restrictionItem.split('|');
            var template = '<div class="dropdown">\
                        <a href="javascript:;" class="btn btn-sm btn-clean btn-icon btn-icon-md" data-toggle="dropdown">\
                        <i class="flaticon-more-1"></i></a>\
                        <div class="dropdown-menu dropdown-menu-right">\
                        <ul class="navi flex-column navi-hover py-2">\
                        <li class="navi-item">\
                        <a href="' + startUrl + '/settings-advanced/groups/edit/' + t.id + '" class="navi-link">\
                        <span class="navi-icon"><i class="flaticon2-contract"></i></span>\
                        <span class="navi-text">' + _LANG_.edit + '</span>\
                        </a></li>';

            if (jQuery.inArray(t.id, restrictionsDelete) == '-1') {
              template += ' <li class="navi-item">\
                                <a href="#" data-id="' + t.id + '" class="deleterowKtdatatable navi-link">\
                                <span class="navi-icon"><i class="flaticon2-trash"></i></span>\
                                <span class="navi-text">' + _LANG_["delete"] + '</span>\
                                </a>\
                                </li>';
            }

            template += ' </ul></div></div>';
            return template;
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
        var e = $(this).find(".nav__link-text").html(),
            st = $(this).find(".nav__link-text").data('status'),
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
            var _data;

            $.ajax({
              type: 'POST',
              url: current_url + "/ajaxUpdate",
              data: (_data = {}, _defineProperty(_data, crsftoken, $('meta[name="X-CSRF-TOKEN"]').attr('content')), _defineProperty(_data, "value", a.get()), _data),
              dataType: "json",
              success: function success(result, status, xhr) {
                if (xhr.status == 200) {
                  $.notify({
                    title: result.success.message ? _LANG_.updated + "!" : _LANG_.warning + "!",
                    message: result.success.message ? result.success.message : result.error.message
                  }, {
                    type: result.success.message ? 'success' : 'warning'
                  });
                  $("#kt_apps_group_list_datatable").KTDatatable().reload();
                }
              }
            });
          } else {
            $.notify({
              title: _LANG_.cancelled,
              message: _LANG_.your_seleted_records_statuses_have_not_been_updated
            }, {
              type: 'primary'
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
            var _data2;

            var selected = e.get();
            $.ajax({
              type: 'DELETE',
              url: current_url + "/delete",
              data: (_data2 = {}, _defineProperty(_data2, crsftoken, $('meta[name="X-CSRF-TOKEN"]').attr('content')), _defineProperty(_data2, "id", selected), _data2),
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
                  $("#kt_apps_group_list_datatable").KTDatatable().reload();
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
  KTAppUserListDatatable.init();
});

/***/ }),

/***/ 37:
/*!*****************************************************************************!*\
  !*** multi ./resources/metronic/js/pages/custom/groups/page.list.groups.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Applications/MAMP/htdocs/spreadci4/public/admin/themes/metronic/resources/metronic/js/pages/custom/groups/page.list.groups.js */"./resources/metronic/js/pages/custom/groups/page.list.groups.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL21ldHJvbmljL2pzL3BhZ2VzL2N1c3RvbS9ncm91cHMvcGFnZS5saXN0Lmdyb3Vwcy5qcyJdLCJuYW1lcyI6WyJLVEFwcFVzZXJMaXN0RGF0YXRhYmxlIiwidCIsImluaXQiLCIkIiwiS1REYXRhdGFibGUiLCJkYXRhIiwidHlwZSIsInNvdXJjZSIsInJlYWQiLCJ1cmwiLCJjdXJyZW50X3VybCIsIm1ldGhvZCIsInBhcmFtcyIsImNyc2Z0b2tlbiIsImF0dHIiLCJwYWdlU2l6ZSIsInNlcnZlclBhZ2luZyIsInNlcnZlckZpbHRlcmluZyIsInNlcnZlclNvcnRpbmciLCJ0cmFuc2xhdGUiLCJyZWNvcmRzIiwicHJvY2Vzc2luZyIsIl9MQU5HXyIsImxvYWRpbmdfd2FpdCIsIm5vUmVjb3JkcyIsIm5vX3JlY29yZF9mb3VuZCIsInRvb2xiYXIiLCJwYWdpbmF0aW9uIiwiaXRlbXMiLCJmaXJzdCIsInByZXYiLCJwcmV2aW91cyIsIm5leHQiLCJsYXN0IiwibW9yZSIsIm1vcmVfcGFnZXMiLCJpbnB1dCIsInBhZ2VfbnVtYmVyIiwic2VsZWN0Iiwic2VsZWN0X3BhZ2Vfc2l6ZSIsImFsbCIsImluZm8iLCJzaG93aW5nIiwibGF5b3V0Iiwic2Nyb2xsIiwiZm9vdGVyIiwic29ydGFibGUiLCJzZWFyY2giLCJkZWxheSIsInJvd3MiLCJiZWZvcmVUZW1wbGF0ZSIsInJvdyIsImluZGV4IiwiYWN0aXZlIiwiYWRkQ2xhc3MiLCJjb2x1bW5zIiwiZmllbGQiLCJ0aXRsZSIsIndpZHRoIiwic2VsZWN0b3IiLCJ0ZXh0QWxpZ24iLCJ0aXRyZSIsInRlbXBsYXRlIiwic3RhcnRVcmwiLCJpZCIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsInVybF9kZXN0aW5hdGlvbiIsImRhdGVfY3JlYXRlIiwiZm9ybWF0IiwiZGF0ZV9jcmVhdGVfZm9ybWF0IiwiYXV0b0hpZGUiLCJvdmVyZmxvdyIsInJlc3RyaWN0aW9uc0RlbGV0ZSIsInJlc3RyaWN0aW9uSXRlbSIsInNwbGl0IiwiZWRpdCIsImpRdWVyeSIsImluQXJyYXkiLCJvbiIsInZhbCIsInRvTG93ZXJDYXNlIiwiZSIsImEiLCJub2RlcyIsImxlbmd0aCIsImh0bWwiLCJyZW1vdmVDbGFzcyIsIktURGlhbG9nIiwicGxhY2VtZW50IiwibWVzc2FnZSIsImxvYWRpbmciLCJzaG93Iiwic2V0VGltZW91dCIsImhpZGUiLCJuIiwiZmluZCIsIm1hcCIsInMiLCJkb2N1bWVudCIsImNyZWF0ZURvY3VtZW50RnJhZ21lbnQiLCJsIiwiaSIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJpbm5lckhUTUwiLCJzZWxlY3RlZF9yb3dfaWQiLCJhcHBlbmRDaGlsZCIsInRhcmdldCIsImFwcGVuZCIsImVtcHR5IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInN0Iiwic3dhbCIsImZpcmUiLCJidXR0b25zU3R5bGluZyIsImFyZV95b3Vfc3VyZV91cGRhdGUiLCJzZWxlY3RlZF9yZWNvcmRzX3N0YXR1c190byIsImNvbmZpcm1CdXR0b25UZXh0IiwieWVzX3VwZGF0ZSIsImNvbmZpcm1CdXR0b25DbGFzcyIsInNob3dDYW5jZWxCdXR0b24iLCJjYW5jZWxCdXR0b25UZXh0Iiwibm9fY2FuY2VsIiwiY2FuY2VsQnV0dG9uQ2xhc3MiLCJ0aGVuIiwidmFsdWUiLCJhamF4IiwiZ2V0IiwiZGF0YVR5cGUiLCJzdWNjZXNzIiwicmVzdWx0Iiwic3RhdHVzIiwieGhyIiwibm90aWZ5IiwidXBkYXRlZCIsIndhcm5pbmciLCJlcnJvciIsInJlbG9hZCIsImNhbmNlbGxlZCIsInlvdXJfc2VsZXRlZF9yZWNvcmRzX3N0YXR1c2VzX2hhdmVfbm90X2JlZW5fdXBkYXRlZCIsInRleHQiLCJhcmVfeW91X3N1cmVfZGVsZXRlIiwic2VsZWN0ZWRfcmVjb3JkcyIsInllc19kZWxldGUiLCJzZWxlY3RlZCIsImt0X3N1YmhlYWRlcl90b3RhbCIsImRlbGV0ZWQiLCJ5b3VyX3NlbGVjdGVkX3JlY29yZHNfaGF2ZV9ub3RfYmVlbl9kZWxldGVkIiwiS1RVdGlsIiwicmVhZHkiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRmE7Ozs7QUFDYixJQUFJQSxzQkFBc0IsR0FBRyxZQUFXO0FBQ3BDLE1BQUlDLENBQUo7QUFDQSxTQUFPO0FBQ0hDLFFBQUksRUFBRSxnQkFBVztBQUNiRCxPQUFDLEdBQUdFLENBQUMsQ0FBQywrQkFBRCxDQUFELENBQW1DQyxXQUFuQyxDQUErQztBQUMvQ0MsWUFBSSxFQUFFO0FBQ0ZDLGNBQUksRUFBRSxRQURKO0FBRUZDLGdCQUFNLEVBQUU7QUFDSkMsZ0JBQUksRUFBRTtBQUNGQyxpQkFBRyxFQUFFQyxXQUFXLEdBQUcsT0FEakI7QUFFRkMsb0JBQU0sRUFBRSxLQUZOO0FBR0ZDLG9CQUFNLHNCQUNEQyxTQURDLEVBQ1dWLENBQUMsQ0FBQywyQkFBRCxDQUFELENB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QyxHQUFpRHVJLE1BQWpEO0FBQ0g7QUFDSjtBQXJCRSxhQUFQO0FBdUJILFdBekJELE1BeUJPO0FBQ0h4SSxhQUFDLENBQUNvSSxNQUFGLENBQVM7QUFDTDlFLG1CQUFLLEVBQUVuQyxNQUFNLENBQUM4SCxPQURUO0FBRUwxRCxxQkFBTyxFQUFFcEUsTUFBTSxDQUFDK0g7QUFGWCxhQUFULEVBR0c7QUFDQy9JLGtCQUFJLEVBQUU7QUFEUCxhQUhIO0FBTUg7QUFDSixTQTNDZSxDQUFoQjtBQTRDSCxPQWhERyxDQXpNSixFQXlQSUwsQ0FBQyxDQUFDOEUsRUFBRixDQUFLLDZCQUFMLEVBQW9DLFlBQVcsQ0FBRSxDQUFqRCxDQXpQSjtBQTBQSDtBQTVQRSxHQUFQO0FBOFBILENBaFE0QixFQUE3Qjs7QUFpUUF1RSxNQUFNLENBQUNDLEtBQVAsQ0FBYSxZQUFXO0FBQ3BCdkosd0JBQXNCLENBQUNFLElBQXZCO0FBQ0gsQ0FGRCxFIiwiZmlsZSI6Ii9kZXZlbG9wbWVudC9qcy9wYWdlcy9jdXN0b20vZ3JvdXBzL3BhZ2UubGlzdC5ncm91cHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDM3KTtcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgS1RBcHBVc2VyTGlzdERhdGF0YWJsZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgdmFyIHQ7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICB0ID0gJChcIiNrdF9hcHBzX2dyb3VwX2xpc3RfZGF0YXRhYmxlXCIpLktURGF0YXRhYmxlKHtcclxuICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInJlbW90ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHNvdXJjZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWFkOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6IGN1cnJlbnRfdXJsICsgXCIvbGlzdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtjcnNmdG9rZW5dOiAkKCdtZXRhW25hbWU9XCJYLUNTUkYtVE9LRU5cIl0nKS5hdHRyKCdjb250ZW50JyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHBhZ2VTaXplOiAxMCxcclxuICAgICAgICAgICAgICAgICAgICBzZXJ2ZXJQYWdpbmc6ICEwLFxyXG4gICAgICAgICAgICAgICAgICAgIHNlcnZlckZpbHRlcmluZzogITAsXHJcbiAgICAgICAgICAgICAgICAgICAgc2VydmVyU29ydGluZzogITBcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB0cmFuc2xhdGU6IHtcclxuICAgICAgICAgICAgICAgICAgICByZWNvcmRzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2Nlc3Npbmc6IF9MQU5HXy5sb2FkaW5nX3dhaXQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vUmVjb3JkczogX0xBTkdfLm5vX3JlY29yZF9mb3VuZCxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHRvb2xiYXI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFnaW5hdGlvbjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpcnN0OiBfTEFOR18uZmlyc3QsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXY6IF9MQU5HXy5wcmV2aW91cyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV4dDogX0xBTkdfLm5leHQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhc3Q6IF9MQU5HXy5sYXN0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb3JlOiBfTEFOR18ubW9yZV9wYWdlcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IF9MQU5HXy5wYWdlX251bWJlcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0OiBfTEFOR18uc2VsZWN0X3BhZ2Vfc2l6ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxsOiBfTEFOR18uYWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5mbzogX0xBTkdfLnNob3dpbmcgKyAnIHt7c3RhcnR9fSAtIHt7ZW5kfX0gb2Yge3t0b3RhbH19JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBsYXlvdXQ6IHtcclxuICAgICAgICAgICAgICAgICAgICBzY3JvbGw6ICExLFxyXG4gICAgICAgICAgICAgICAgICAgIGZvb3RlcjogITFcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBzb3J0YWJsZTogITAsXHJcbiAgICAgICAgICAgICAgICBwYWdpbmF0aW9uOiAhMCxcclxuICAgICAgICAgICAgICAgIHNlYXJjaDoge1xyXG4gICAgICAgICAgICAgICAgICAgIGlucHV0OiAkKFwiI2t0X3N1YmhlYWRlcl9zZWFyY2hfZm9ybVwiKSxcclxuICAgICAgICAgICAgICAgICAgICBkZWxheTogNDAwXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgcm93czoge1xyXG4gICAgICAgICAgICAgICAgICAgIGJlZm9yZVRlbXBsYXRlOiBmdW5jdGlvbihyb3csIGRhdGEsIGluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLmFjdGl2ZSA9PSAnMCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdy5hZGRDbGFzcygnbm90YWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgY29sdW1uczogW3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQ6IFwiaWRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiI1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzb3J0YWJsZTogITEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiBcImNoZWNrYm94LXNvbGlkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkOiBcIm5hbWVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IF9MQU5HXy50aXRyZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGU6IGZ1bmN0aW9uKHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnPGEgaHJlZj1cIicgKyBzdGFydFVybCArICcvc2V0dGluZ3MtYWR2YW5jZWQvZ3JvdXBzL2VkaXQvJyArIHQuaWQgKyAnXCIgY2xhc3M9XCJjYXBpdGFsaXplIHRleHQtZGFyay03NSBmb250LXdlaWdodC1ib2xkZXIgZm9udC1zaXplLWxnIG1iLTBcIj4gJyArIHQubmFtZSArICc8L2E+JztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkOiBcImRlc2NyaXB0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBfTEFOR18uZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiZGVzY3JpcHRpb25cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy93aWR0aDogMTAwLFxyXG5cclxuICAgICAgICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkOiBcImxvZ2luX2Rlc3RpbmF0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBfTEFOR18udXJsX2Rlc3RpbmF0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImxvZ2luX2Rlc3RpbmF0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vd2lkdGg6IDEwMCxcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWVsZDogXCJjcmVhdGVkX2F0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBfTEFOR18uZGF0ZV9jcmVhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiZGF0ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL3dpZHRoOiAxMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1hdDogXCJNTS9ERC9ZWVlZXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlOiBmdW5jdGlvbih0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJzxkaXYgY2xhc3M9XCJmb250LXdlaWdodC1ib2xkZXIgdGV4dC1wcmltYXJ5IG1iLTBcIj4nICsgdC5kYXRlX2NyZWF0ZV9mb3JtYXQgKyAnPC9kaXY+JztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQ6IFwiQWN0aW9uc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogODAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIkFjdGlvbnNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgc29ydGFibGU6ICExLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhdXRvSGlkZTogITEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBcInZpc2libGVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGU6IGZ1bmN0aW9uKHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZXN0cmljdGlvbnNEZWxldGUgPSByZXN0cmljdGlvbkl0ZW0uc3BsaXQoJ3wnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdGVtcGxhdGUgPSAnPGRpdiBjbGFzcz1cImRyb3Bkb3duXCI+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImphdmFzY3JpcHQ6O1wiIGNsYXNzPVwiYnRuIGJ0bi1zbSBidG4tY2xlYW4gYnRuLWljb24gYnRuLWljb24tbWRcIiBkYXRhLXRvZ2dsZT1cImRyb3Bkb3duXCI+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmbGF0aWNvbi1tb3JlLTFcIj48L2k+PC9hPlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkcm9wZG93bi1tZW51IGRyb3Bkb3duLW1lbnUtcmlnaHRcIj5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJuYXZpIGZsZXgtY29sdW1uIG5hdmktaG92ZXIgcHktMlwiPlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cIm5hdmktaXRlbVwiPlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCInICsgc3RhcnRVcmwgKyAnL3NldHRpbmdzLWFkdmFuY2VkL2dyb3Vwcy9lZGl0LycgKyB0LmlkICsgJ1wiIGNsYXNzPVwibmF2aS1saW5rXCI+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJuYXZpLWljb25cIj48aSBjbGFzcz1cImZsYXRpY29uMi1jb250cmFjdFwiPjwvaT48L3NwYW4+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJuYXZpLXRleHRcIj4nICsgX0xBTkdfLmVkaXQgKyAnPC9zcGFuPlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT48L2xpPic7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoalF1ZXJ5LmluQXJyYXkodC5pZCwgcmVzdHJpY3Rpb25zRGVsZXRlKSA9PSAnLTEnKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlICs9ICcgPGxpIGNsYXNzPVwibmF2aS1pdGVtXCI+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGRhdGEtaWQ9XCInICsgdC5pZCArICdcIiBjbGFzcz1cImRlbGV0ZXJvd0t0ZGF0YXRhYmxlIG5hdmktbGlua1wiPlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJuYXZpLWljb25cIj48aSBjbGFzcz1cImZsYXRpY29uMi10cmFzaFwiPjwvaT48L3NwYW4+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm5hdmktdGV4dFwiPicgKyBfTEFOR18uZGVsZXRlICsgJzwvc3Bhbj5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+JztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlICs9ICcgPC91bD48L2Rpdj48L2Rpdj4nO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRlbXBsYXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9KSwgJChcIiNrdF9mb3JtX3N0YXR1c1wiKS5vbihcImNoYW5nZVwiLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHQuc2VhcmNoKCQodGhpcykudmFsKCkudG9Mb3dlckNhc2UoKSwgXCJTdGF0dXNcIilcclxuICAgICAgICAgICAgfSksIHQub24oXCJkYXRhdGFibGUtb24tY2hlY2sgZGF0YXRhYmxlLW9uLXVuY2hlY2sgZGF0YXRhYmxlLW9uLWxheW91dC11cGRhdGVkXCIsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgICAgIHZhciBhID0gdC5yb3dzKFwiLmRhdGF0YWJsZS1yb3ctYWN0aXZlXCIpLm5vZGVzKCkubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgJChcIiNrdF9zdWJoZWFkZXJfZ3JvdXBfc2VsZWN0ZWRfcm93c1wiKS5odG1sKGEpLCBhID4gMCA/ICgkKFwiI2t0X3N1YmhlYWRlcl9zZWFyY2hcIikuYWRkQ2xhc3MoXCJoaWRkZW5cIiksICQoXCIja3Rfc3ViaGVhZGVyX2dyb3VwX2FjdGlvbnNcIikucmVtb3ZlQ2xhc3MoXCJoaWRkZW5cIikpIDogKCQoXCIja3Rfc3ViaGVhZGVyX3NlYXJjaFwiKS5yZW1vdmVDbGFzcyhcImhpZGRlblwiKSwgJChcIiNrdF9zdWJoZWFkZXJfZ3JvdXBfYWN0aW9uc1wiKS5hZGRDbGFzcyhcImhpZGRlblwiKSlcclxuICAgICAgICAgICAgfSksICQoXCIja3RfZGF0YXRhYmxlX3JlY29yZHNfZmV0Y2hfbW9kYWxcIikub24oXCJzaG93LmJzLm1vZGFsXCIsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgICAgIHZhciBhID0gbmV3IEtURGlhbG9nKHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImxvYWRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlbWVudDogXCJ0b3AgY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogX0xBTkdfLmxvYWRpbmcgKyBcIi4uLlwiXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGEuc2hvdygpLCBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGEuaGlkZSgpXHJcbiAgICAgICAgICAgICAgICB9LCAxZTMpO1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgbiA9IHQucm93cyhcIi5kYXRhdGFibGUtcm93LWFjdGl2ZVwiKS5ub2RlcygpLmZpbmQoJy5jaGVja2JveC1zaW5nbGUgPiBbdHlwZT1cImNoZWNrYm94XCJdJykubWFwKGZ1bmN0aW9uKHQsIGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICQoZSkudmFsKClcclxuICAgICAgICAgICAgICAgICAgICB9KSwgcyA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKSwgbCA9IDA7IGwgPCBuLmxlbmd0aDsgbCsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgaS5zZXRBdHRyaWJ1dGUoXCJkYXRhLWlkXCIsIG5bbF0pLCBpLmlubmVySFRNTCA9IF9MQU5HXy5zZWxlY3RlZF9yb3dfaWQgKyBcIjogXCIgKyBuW2xdLCBzLmFwcGVuZENoaWxkKGkpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAkKGUudGFyZ2V0KS5maW5kKFwiI2t0X2FwcHNfdXNlcl9mZXRjaF9yZWNvcmRzX3NlbGVjdGVkXCIpLmFwcGVuZChzKVxyXG4gICAgICAgICAgICB9KS5vbihcImhpZGUuYnMubW9kYWxcIiwgZnVuY3Rpb24odCkge1xyXG4gICAgICAgICAgICAgICAgJCh0LnRhcmdldCkuZmluZChcIiNrdF9hcHBzX3VzZXJfZmV0Y2hfcmVjb3Jkc19zZWxlY3RlZFwiKS5lbXB0eSgpXHJcbiAgICAgICAgICAgIH0pLCAkKFwiI2t0X3N1YmhlYWRlcl9ncm91cF9hY3Rpb25zX3N0YXR1c19jaGFuZ2VcIikub24oXCJjbGlja1wiLCBcIltkYXRhLXRvZ2dsZT0nc3RhdHVzLWNoYW5nZSddXCIsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGUgPSAkKHRoaXMpLmZpbmQoXCIubmF2X19saW5rLXRleHRcIikuaHRtbCgpLFxyXG4gICAgICAgICAgICAgICAgICAgIHN0ID0gJCh0aGlzKS5maW5kKFwiLm5hdl9fbGluay10ZXh0XCIpLmRhdGEoJ3N0YXR1cycpLFxyXG4gICAgICAgICAgICAgICAgICAgIGEgPSB0LnJvd3MoXCIuZGF0YXRhYmxlLXJvdy1hY3RpdmVcIikubm9kZXMoKS5maW5kKCcuY2hlY2tib3gtc2luZ2xlID4gW3R5cGU9XCJjaGVja2JveFwiXScpLm1hcChmdW5jdGlvbih0LCBlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAkKGUpLnZhbCgpXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBhLmxlbmd0aCA+IDAgJiYgc3dhbC5maXJlKHtcclxuICAgICAgICAgICAgICAgICAgICBidXR0b25zU3R5bGluZzogITEsXHJcbiAgICAgICAgICAgICAgICAgICAgaHRtbDogX0xBTkdfLmFyZV95b3Vfc3VyZV91cGRhdGUgKyBcIiBcIiArIGEubGVuZ3RoICsgXCIgXCIgKyBfTEFOR18uc2VsZWN0ZWRfcmVjb3Jkc19zdGF0dXNfdG8gKyBcIiBcIiArIGUgKyBcIiA/XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJwcmltYXJ5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6IF9MQU5HXy55ZXNfdXBkYXRlICsgXCIhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvbkNsYXNzOiBcImJ0biBidG4tc20gYnRuLWJvbGQgYnRuLWRhcmtcIixcclxuICAgICAgICAgICAgICAgICAgICBzaG93Q2FuY2VsQnV0dG9uOiAhMCxcclxuICAgICAgICAgICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBfTEFOR18ubm9fY2FuY2VsLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhbmNlbEJ1dHRvbkNsYXNzOiBcImJ0biBidG4tc20gYnRuLWJvbGQgYnRuLWRlZmF1bHRcIlxyXG4gICAgICAgICAgICAgICAgfSkudGhlbihmdW5jdGlvbih0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQudmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybDogY3VycmVudF91cmwgKyBcIi9hamF4VXBkYXRlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2Nyc2Z0b2tlbl06ICQoJ21ldGFbbmFtZT1cIlgtQ1NSRi1UT0tFTlwiXScpLmF0dHIoJ2NvbnRlbnQnKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogYS5nZXQoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFUeXBlOiBcImpzb25cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3VsdCwgc3RhdHVzLCB4aHIpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHhoci5zdGF0dXMgPT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQubm90aWZ5KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAocmVzdWx0LnN1Y2Nlc3MubWVzc2FnZSkgPyBfTEFOR18udXBkYXRlZCArIFwiIVwiIDogX0xBTkdfLndhcm5pbmcgKyBcIiFcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IChyZXN1bHQuc3VjY2Vzcy5tZXNzYWdlKSA/IHJlc3VsdC5zdWNjZXNzLm1lc3NhZ2UgOiByZXN1bHQuZXJyb3IubWVzc2FnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAocmVzdWx0LnN1Y2Nlc3MubWVzc2FnZSkgPyAnc3VjY2VzcycgOiAnd2FybmluZydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoXCIja3RfYXBwc19ncm91cF9saXN0X2RhdGF0YWJsZVwiKS5LVERhdGF0YWJsZSgpLnJlbG9hZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkLm5vdGlmeSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogX0xBTkdfLmNhbmNlbGxlZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IF9MQU5HXy55b3VyX3NlbGV0ZWRfcmVjb3Jkc19zdGF0dXNlc19oYXZlX25vdF9iZWVuX3VwZGF0ZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3ByaW1hcnknXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0pLCAkKFwiI2t0X3N1YmhlYWRlcl9ncm91cF9hY3Rpb25zX2RlbGV0ZV9hbGxcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHZhciBlID0gdC5yb3dzKFwiLmRhdGF0YWJsZS1yb3ctYWN0aXZlXCIpLm5vZGVzKCkuZmluZCgnLmNoZWNrYm94LXNpbmdsZSA+IFt0eXBlPVwiY2hlY2tib3hcIl0nKS5tYXAoZnVuY3Rpb24odCwgZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAkKGUpLnZhbCgpXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGUubGVuZ3RoID4gMCAmJiBzd2FsLmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbnNTdHlsaW5nOiAhMSxcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiBfTEFOR18uYXJlX3lvdV9zdXJlX2RlbGV0ZSArIFwiIFwiICsgZS5sZW5ndGggKyBcIiBcIiArIF9MQU5HXy5zZWxlY3RlZF9yZWNvcmRzICsgXCIgP1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiZXJyb3JcIixcclxuICAgICAgICAgICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogX0xBTkdfLnllc19kZWxldGUgKyAnICEnLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbmZpcm1CdXR0b25DbGFzczogXCJidG4gYnRuLXNtIGJ0bi1ib2xkIGJ0bi1kYW5nZXJcIixcclxuICAgICAgICAgICAgICAgICAgICBzaG93Q2FuY2VsQnV0dG9uOiAhMCxcclxuICAgICAgICAgICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBfTEFOR18ubm9fY2FuY2VsLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhbmNlbEJ1dHRvbkNsYXNzOiBcImJ0biBidG4tc20gYnRuLWJvbGQgYnRuLWRhcmtcIlxyXG4gICAgICAgICAgICAgICAgfSkudGhlbihmdW5jdGlvbih0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQudmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHNlbGVjdGVkID0gZS5nZXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdERUxFVEUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBjdXJyZW50X3VybCArIFwiL2RlbGV0ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtjcnNmdG9rZW5dOiAkKCdtZXRhW25hbWU9XCJYLUNTUkYtVE9LRU5cIl0nKS5hdHRyKCdjb250ZW50JyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IHNlbGVjdGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVR5cGU6IFwianNvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzdWx0LCBzdGF0dXMsIHhocikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vU3VjY2VzcyBNZXNzYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHhoci5zdGF0dXMgPT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBrdF9zdWJoZWFkZXJfdG90YWwgPSAkKCcua3Rfc3ViaGVhZGVyX3RvdGFsJykudGV4dCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcua3Rfc3ViaGVhZGVyX3RvdGFsJykuaHRtbCgoa3Rfc3ViaGVhZGVyX3RvdGFsIC0gc2VsZWN0ZWQubGVuZ3RoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQubm90aWZ5KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAocmVzdWx0LnN1Y2Nlc3MubWVzc2FnZSkgPyBfTEFOR18uZGVsZXRlZCArIFwiIVwiIDogX0xBTkdfLndhcm5pbmcgKyBcIiFcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IChyZXN1bHQuc3VjY2Vzcy5tZXNzYWdlKSA/IHJlc3VsdC5zdWNjZXNzLm1lc3NhZ2UgOiByZXN1bHQuZXJyb3IubWVzc2FnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAocmVzdWx0LnN1Y2Nlc3MubWVzc2FnZSkgPyAnc3VjY2VzcycgOiAnd2FybmluZydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoXCIja3RfYXBwc19ncm91cF9saXN0X2RhdGF0YWJsZVwiKS5LVERhdGF0YWJsZSgpLnJlbG9hZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkLm5vdGlmeSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogX0xBTkdfLmRlbGV0ZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBfTEFOR18ueW91cl9zZWxlY3RlZF9yZWNvcmRzX2hhdmVfbm90X2JlZW5fZGVsZXRlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnaW5mbydcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSksIHQub24oXCJkYXRhdGFibGUtb24tbGF5b3V0LXVwZGF0ZWRcIiwgZnVuY3Rpb24oKSB7fSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0oKTtcclxuS1RVdGlsLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG4gICAgS1RBcHBVc2VyTGlzdERhdGF0YWJsZS5pbml0KClcclxufSk7Il0sInNvdXJjZVJvb3QiOiIifQ==