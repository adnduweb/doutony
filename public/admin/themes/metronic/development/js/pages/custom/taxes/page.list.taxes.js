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
/******/ 	return __webpack_require__(__webpack_require__.s = 50);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/metronic/js/pages/custom/taxes/page.list.taxes.js":
/*!*********************************************************************!*\
  !*** ./resources/metronic/js/pages/custom/taxes/page.list.taxes.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var KTApptaxesListDatatable = function () {
  var t;
  return {
    init: function init() {
      t = $("#kt_apps_taxes_list_datatable").KTDatatable({
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
            "class": "kt-checkbox--solid"
          },
          textAlign: "center"
        }, {
          field: "name",
          title: _LANG_.name,
          width: 200,
          template: function template(t) {
            return '<a href="' + startUrl + '/international/taxes/edit/' + t.id + '" class="capitalize text-dark-75 font-weight-bolder font-size-lg mb-0">' + t.name + '</a>';
          }
        }, {
          field: "rate",
          title: _LANG_.taux,
          type: "rate"
        }, {
          field: "active",
          title: _LANG_.etat,
          type: "active",
          template: function template(t) {
            if (t.active == 1) {
              var active = 'btn-light-success';
            } else {
              var active = 'btn-light-danger';
            }

            if (t.active == 1) {
              var textActive = _LANG_.active;
            } else {
              var textActive = _LANG_.desactive;
            }

            if (t.active == 1) {
              var idActive = 0;
            } else {
              var idActive = 1;
            }

            var template = '<a href="javascript:;" data-statut="' + idActive + '" data-id="' + t.id + '" class="actionActive btn btn-bold btn-sm btn-font-sm ' + active + '">' + textActive + '</a>';
            return template;
          }
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
            //return '\t\t\t\t\t\t\t<div class="dropdown">\t\t\t\t\t\t\t\t<a href="javascript:;" class="btn btn-sm btn-clean btn-icon btn-icon-md" data-toggle="dropdown">\t\t\t\t\t\t\t\t\t<i class="flaticon-more-1"></i>\t\t\t\t\t\t\t\t</a>\t\t\t\t\t\t\t\t<div class="dropdown-menu dropdown-menu-right">\t\t\t\t\t\t\t\t\t<ul class="kt-nav">\t\t\t\t\t\t\t\t\t\t<li class="navi-item">\t\t\t\t\t\t\t\t\t\t\t<a href="#" data-controller="roles" data-action="actionView" data-value="' + t.id + '" class="actioncontroller navi-link">\t\t\t\t\t\t\t\t\t\t\t\t<i class="navi-link-icon flaticon2-expand"></i>\t\t\t\t\t\t\t\t\t\t\t\t<span class="navi-link-text">' + _LANG_.view + '</span>\t\t\t\t\t\t\t\t\t\t\t</a>\t\t\t\t\t\t\t\t\t\t</li>\t\t\t\t\t\t\t\t\t\t<li class="navi-item">\t\t\t\t\t\t\t\t\t\t\t<a href="' + basePath + segementAdmin + '/taxes/detail/' + t.id + '" class="navi-link">\t\t\t\t\t\t\t\t\t\t\t\t<i class="navi-link-icon flaticon2-contract"></i>\t\t\t\t\t\t\t\t\t\t\t\t<span class="navi-link-text">' + _LANG_.edit + '</span>\t\t\t\t\t\t\t\t\t\t\t</a>\t\t\t\t\t\t\t\t\t\t</li>\t\t\t\t\t\t\t\t\t\t<li class="navi-item">\t\t\t\t\t\t\t\t\t\t\t<a href="#" data-id="' + t.id + '" class="deleterowKtdatatable navi-link">\t\t\t\t\t\t\t\t\t\t\t\t<i class="navi-link-icon flaticon2-trash"></i>\t\t\t\t\t\t\t\t\t\t\t\t<span class="navi-link-text">' + _LANG_.delete + '</span>\t\t\t\t\t\t\t\t\t\t\t</a>\t\t\t\t\t\t\t\t\t\t</li>\t\t\t\t\t\t\t\t\t\t</ul>\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t</div>\t\t\t\t\t\t'
            var template = '<div class="dropdown">\
                        <a href="javascript:;" class="btn btn-sm btn-clean btn-icon btn-icon-md" data-toggle="dropdown">\
                        <i class="flaticon-more-1"></i></a>\
                        <div class="dropdown-menu dropdown-menu-right">\
                        <ul class="navi flex-column navi-hover py-2">\
                        <li class="navi-item">\
                        <a href="' + startUrl + '/international/taxes/edit/' + t.id + '" class="navi-link">\
                        <span class="navi-icon"><i class=" flaticon2-contract"></i></span>\
                        <span class="navi-text">' + _LANG_.edit + '</span>\
                        </a></li>';

            if (t.id != '1') {
              template += ' <li class="navi-item">\
                            <a href="#" data-id="' + t.id + '" class="deleterowKtdatatable navi-link">\
                            <span class="navi-icon"><i class=" flaticon2-trash"></i></span>\
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
        var e = $(this).find(".navi-link-text").html(),
            st = $(this).find(".navi-link-text").data('status'),
            a = t.rows(".datatable-row-active").nodes().find('.checkbox-single > [type="checkbox"]').map(function (t, e) {
          return {
            id: $(e).val(),
            active: st
          };
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
                  $("#kt_apps_taxes_list_datatable").KTDatatable().reload();
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
                  $("#kt_apps_taxes_list_datatable").KTDatatable().reload();
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
  KTApptaxesListDatatable.init(); //Update

  $(document).on("click", ".actionActive", function (e) {
    var _data3;

    e.preventDefault();
    var statut = $(this).attr('data-statut');
    var id = $(this).attr('data-id');
    var value = [];
    $.ajax({
      type: 'POST',
      url: current_url + "/ajaxUpdate",
      contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
      data: (_data3 = {}, _defineProperty(_data3, crsftoken, $('meta[name="X-CSRF-TOKEN"]').attr('content')), _defineProperty(_data3, "value", [{
        id: id,
        active: statut
      }]), _data3),
      dataType: "json",
      success: function success(result, status, xhr) {
        if (xhr.status == 200) {
          $.notify({
            title: result.success.message ? _LANG_.updated + "!" : _LANG_.warning + "!",
            message: result.success.message ? result.success.message : result.error.message
          }, {
            type: result.success.message ? 'success' : 'warning'
          });
          $("#kt_apps_taxes_list_datatable").KTDatatable().reload();
        }
      }
    });
  });
});

/***/ }),

/***/ 50:
/*!***************************************************************************!*\
  !*** multi ./resources/metronic/js/pages/custom/taxes/page.list.taxes.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Applications/MAMP/htdocs/spreadci4/public/admin/themes/metronic/resources/metronic/js/pages/custom/taxes/page.list.taxes.js */"./resources/metronic/js/pages/custom/taxes/page.list.taxes.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL21ldHJvbmljL2pzL3BhZ2VzL2N1c3RvbS90YXhlcy9wYWdlLmxpc3QudGF4ZXMuanMiXSwibmFtZXMiOlsiS1RBcHB0YXhlc0xpc3REYXRhdGFibGUiLCJ0IiwiaW5pdCIsIiQiLCJLVERhdGF0YWJsZSIsImRhdGEiLCJ0eXBlIiwic291cmNlIiwicmVhZCIsInVybCIsImN1cnJlbnRfdXJsIiwibWV0aG9kIiwicGFyYW1zIiwiY3JzZnRva2VuIiwiYXR0ciIsInBhZ2VTaXplIiwic2VydmVyUGFnaW5nIiwic2VydmVyRmlsdGVyaW5nIiwic2VydmVyU29ydGluZyIsInRyYW5zbGF0ZSIsInJlY29yZHMiLCJwcm9jZXNzaW5nIiwiX0xBTkdfIiwibG9hZGluZ193YWl0Iiwibm9SZWNvcmRzIiwibm9fcmVjb3JkX2ZvdW5kIiwidG9vbGJhciIsInBhZ2luYXRpb24iLCJpdGVtcyIsImZpcnN0IiwicHJldiIsInByZXZpb3VzIiwibmV4dCIsImxhc3QiLCJtb3JlIiwibW9yZV9wYWdlcyIsImlucHV0IiwicGFnZV9udW1iZXIiLCJzZWxlY3QiLCJzZWxlY3RfcGFnZV9zaXplIiwiYWxsIiwiaW5mbyIsInNob3dpbmciLCJsYXlvdXQiLCJzY3JvbGwiLCJmb290ZXIiLCJzb3J0YWJsZSIsInNlYXJjaCIsImRlbGF5Iiwicm93cyIsImJlZm9yZVRlbXBsYXRlIiwicm93IiwiaW5kZXgiLCJhY3RpdmUiLCJhZGRDbGFzcyIsImNvbHVtbnMiLCJmaWVsZCIsInRpdGxlIiwid2lkdGgiLCJzZWxlY3RvciIsInRleHRBbGlnbiIsIm5hbWUiLCJ0ZW1wbGF0ZSIsInN0YXJ0VXJsIiwiaWQiLCJ0YXV4IiwiZXRhdCIsInRleHRBY3RpdmUiLCJkZXNhY3RpdmUiLCJpZEFjdGl2ZSIsImRhdGVfY3JlYXRlIiwiZm9ybWF0IiwiZGF0ZV9jcmVhdGVfZm9ybWF0IiwiYXV0b0hpZGUiLCJvdmVyZmxvdyIsImVkaXQiLCJvbiIsInZhbCIsInRvTG93ZXJDYXNlIiwiZSIsImEiLCJub2RlcyIsImxlbmd0aCIsImh0bWwiLCJyZW1vdmVDbGFzcyIsIktURGlhbG9nIiwicGxhY2VtZW50IiwibWVzc2FnZSIsImxvYWRpbmciLCJzaG93Iiwic2V0VGltZW91dCIsImhpZGUiLCJuIiwiZmluZCIsIm1hcCIsInMiLCJkb2N1bWVudCIsImNyZWF0ZURvY3VtZW50RnJhZ21lbnQiLCJsIiwiaSIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJpbm5lckhUTUwiLCJzZWxlY3RlZF9yb3dfaWQiLCJhcHBlbmRDaGlsZCIsInRhcmdldCIsImFwcGVuZCIsImVtcHR5IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInN0Iiwic3dhbCIsImZpcmUiLCJidXR0b25zU3R5bGluZyIsImFyZV95b3Vfc3VyZV91cGRhdGUiLCJzZWxlY3RlZF9yZWNvcmRzX3N0YXR1c190byIsImNvbmZpcm1CdXR0b25UZXh0IiwieWVzX3VwZGF0ZSIsImNvbmZpcm1CdXR0b25DbGFzcyIsInNob3dDYW5jZWxCdXR0b24iLCJjYW5jZWxCdXR0b25UZXh0Iiwibm9fY2FuY2VsIiwiY2FuY2VsQnV0dG9uQ2xhc3MiLCJ0aGVuIiwidmFsdWUiLCJhamF4IiwiZ2V0IiwiZGF0YVR5cGUiLCJzdWNjZXNzIiwicmVzdWx0Iiwic3RhdHVzIiwieGhyIiwibm90aWZ5IiwidXBkYXRlZCIsIndhcm5pbmciLCJlcnJvciIsInJlbG9hZCIsImNhbmNlbGxlZCIsInlvdXJfc2VsZXRlZF9yZWNvcmRzX3N0YXR1c2VzX2hhdmVfbm90X2JlZW5fdXBkYXRlZCIsInRleHQiLCJhcmVfeW91X3N1cmVfZGVsZXRlIiwic2VsZWN0ZWRfcmVjb3JkcyIsInllc19kZWxldGUiLCJzZWxlY3RlZCIsImt0X3N1YmhlYWRlcl90b3RhbCIsImRlbGV0ZWQiLCJ5b3VyX3NlbGVjdGVkX3JlY29yZHNfaGF2ZV9ub3RfYmVlbl9kZWxldGVkIiwi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QU0sQ0FBQ0QsT0FBUCxDQUFlekMsT0FBMUMsR0FBb0QwQyxNQUFNLENBQUNNLEtBQVAsQ0FBYWhEO0FBRnJFLFdBQVQsRUFHRztBQUNDakYsZ0JBQUksRUFBRzJILE1BQU0sQ0FBQ0QsT0FBUCxDQUFlekMsT0FBaEIsR0FBMkIsU0FBM0IsR0FBdUM7QUFEOUMsV0FISDtBQU1BcEYsV0FBQyxDQUFDLCtCQUFELENBQUQsQ0FBbUNDLFdBQW5DLEdBQWlEb0ksTUFBakQ7QUFDSDtBQUNKO0FBdEJFLEtBQVA7QUF3QkgsR0E3QkQ7QUE4QkgsQ0FqQ0QsRSIsImZpbGUiOiIvZGV2ZWxvcG1lbnQvanMvcGFnZXMvY3VzdG9tL3RheGVzL3BhZ2UubGlzdC50YXhlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNTApO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgS1RBcHB0YXhlc0xpc3REYXRhdGFibGUgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgdDtcbiAgICByZXR1cm4ge1xuICAgICAgICBpbml0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHQgPSAkKFwiI2t0X2FwcHNfdGF4ZXNfbGlzdF9kYXRhdGFibGVcIikuS1REYXRhdGFibGUoe1xuICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJyZW1vdGVcIixcbiAgICAgICAgICAgICAgICAgICAgc291cmNlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWFkOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBjdXJyZW50X3VybCArIFwiL2xpc3RcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbY3JzZnRva2VuXTogJCgnbWV0YVtuYW1lPVwiWC1DU1JGLVRPS0VOXCJdJykuYXR0cignY29udGVudCcpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgcGFnZVNpemU6IDEwLFxuICAgICAgICAgICAgICAgICAgICBzZXJ2ZXJQYWdpbmc6ICEwLFxuICAgICAgICAgICAgICAgICAgICBzZXJ2ZXJGaWx0ZXJpbmc6ICEwLFxuICAgICAgICAgICAgICAgICAgICBzZXJ2ZXJTb3J0aW5nOiAhMFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdHJhbnNsYXRlOiB7XG4gICAgICAgICAgICAgICAgICAgIHJlY29yZHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2Nlc3Npbmc6IF9MQU5HXy5sb2FkaW5nX3dhaXQsXG4gICAgICAgICAgICAgICAgICAgICAgICBub1JlY29yZHM6IF9MQU5HXy5ub19yZWNvcmRfZm91bmQsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHRvb2xiYXI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2luYXRpb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaXJzdDogX0xBTkdfLmZpcnN0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJldjogX0xBTkdfLnByZXZpb3VzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV4dDogX0xBTkdfLm5leHQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXN0OiBfTEFOR18ubGFzdCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vcmU6IF9MQU5HXy5tb3JlX3BhZ2VzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IF9MQU5HXy5wYWdlX251bWJlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdDogX0xBTkdfLnNlbGVjdF9wYWdlX3NpemUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGw6IF9MQU5HXy5hbGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZm86IF9MQU5HXy5zaG93aW5nICsgJyB7e3N0YXJ0fX0gLSB7e2VuZH19IG9mIHt7dG90YWx9fScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBsYXlvdXQ6IHtcbiAgICAgICAgICAgICAgICAgICAgc2Nyb2xsOiAhMSxcbiAgICAgICAgICAgICAgICAgICAgZm9vdGVyOiAhMVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc29ydGFibGU6ICEwLFxuICAgICAgICAgICAgICAgIHBhZ2luYXRpb246ICEwLFxuICAgICAgICAgICAgICAgIHNlYXJjaDoge1xuICAgICAgICAgICAgICAgICAgICBpbnB1dDogJChcIiNrdF9zdWJoZWFkZXJfc2VhcmNoX2Zvcm1cIiksXG4gICAgICAgICAgICAgICAgICAgIGRlbGF5OiA0MDBcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHJvd3M6IHtcbiAgICAgICAgICAgICAgICAgICAgYmVmb3JlVGVtcGxhdGU6IGZ1bmN0aW9uKHJvdywgZGF0YSwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLmFjdGl2ZSA9PSAnMCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3cuYWRkQ2xhc3MoJ25vdGFjdGl2ZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBjb2x1bW5zOiBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQ6IFwiaWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIiNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHNvcnRhYmxlOiAhMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IFwia3QtY2hlY2tib3gtLXNvbGlkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQ6IFwibmFtZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IF9MQU5HXy5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlOiBmdW5jdGlvbih0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICc8YSBocmVmPVwiJyArIHN0YXJ0VXJsICsgJy9pbnRlcm5hdGlvbmFsL3RheGVzL2VkaXQvJyArIHQuaWQgKyAnXCIgY2xhc3M9XCJjYXBpdGFsaXplIHRleHQtZGFyay03NSBmb250LXdlaWdodC1ib2xkZXIgZm9udC1zaXplLWxnIG1iLTBcIj4nICsgdC5uYW1lICsgJzwvYT4nO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkOiBcInJhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBfTEFOR18udGF1eCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwicmF0ZVwiLFxuXG4gICAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkOiBcImFjdGl2ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IF9MQU5HXy5ldGF0LFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJhY3RpdmVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlOiBmdW5jdGlvbih0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHQuYWN0aXZlID09IDEpIHsgdmFyIGFjdGl2ZSA9ICdidG4tbGlnaHQtc3VjY2Vzcyc7IH0gZWxzZSB7IHZhciBhY3RpdmUgPSAnYnRuLWxpZ2h0LWRhbmdlcic7IH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodC5hY3RpdmUgPT0gMSkgeyB2YXIgdGV4dEFjdGl2ZSA9IF9MQU5HXy5hY3RpdmU7IH0gZWxzZSB7IHZhciB0ZXh0QWN0aXZlID0gX0xBTkdfLmRlc2FjdGl2ZTsgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0LmFjdGl2ZSA9PSAxKSB7IHZhciBpZEFjdGl2ZSA9IDA7IH0gZWxzZSB7IHZhciBpZEFjdGl2ZSA9IDE7IH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdGVtcGxhdGUgPSAnPGEgaHJlZj1cImphdmFzY3JpcHQ6O1wiIGRhdGEtc3RhdHV0PVwiJyArIGlkQWN0aXZlICsgJ1wiIGRhdGEtaWQ9XCInICsgdC5pZCArICdcIiBjbGFzcz1cImFjdGlvbkFjdGl2ZSBidG4gYnRuLWJvbGQgYnRuLXNtIGJ0bi1mb250LXNtICcgKyBhY3RpdmUgKyAnXCI+JyArIHRleHRBY3RpdmUgKyAnPC9hPic7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRlbXBsYXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkOiBcImNyZWF0ZWRfYXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBfTEFOR18uZGF0ZV9jcmVhdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vd2lkdGg6IDEwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1hdDogXCJNTS9ERC9ZWVlZXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZTogZnVuY3Rpb24odCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnPGRpdiBjbGFzcz1cImZvbnQtd2VpZ2h0LWJvbGRlciB0ZXh0LXByaW1hcnkgbWItMFwiPicgKyB0LmRhdGVfY3JlYXRlX2Zvcm1hdCArICc8L2Rpdj4nO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWVsZDogXCJBY3Rpb25zXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogODAsXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJBY3Rpb25zXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBzb3J0YWJsZTogITEsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdXRvSGlkZTogITEsXG4gICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogXCJ2aXNpYmxlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZTogZnVuY3Rpb24odCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vcmV0dXJuICdcXHRcXHRcXHRcXHRcXHRcXHRcXHQ8ZGl2IGNsYXNzPVwiZHJvcGRvd25cIj5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQ8YSBocmVmPVwiamF2YXNjcmlwdDo7XCIgY2xhc3M9XCJidG4gYnRuLXNtIGJ0bi1jbGVhbiBidG4taWNvbiBidG4taWNvbi1tZFwiIGRhdGEtdG9nZ2xlPVwiZHJvcGRvd25cIj5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQ8aSBjbGFzcz1cImZsYXRpY29uLW1vcmUtMVwiPjwvaT5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQ8L2E+XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0PGRpdiBjbGFzcz1cImRyb3Bkb3duLW1lbnUgZHJvcGRvd24tbWVudS1yaWdodFwiPlxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdDx1bCBjbGFzcz1cImt0LW5hdlwiPlxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdDxsaSBjbGFzcz1cIm5hdmktaXRlbVwiPlxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdDxhIGhyZWY9XCIjXCIgZGF0YS1jb250cm9sbGVyPVwicm9sZXNcIiBkYXRhLWFjdGlvbj1cImFjdGlvblZpZXdcIiBkYXRhLXZhbHVlPVwiJyArIHQuaWQgKyAnXCIgY2xhc3M9XCJhY3Rpb25jb250cm9sbGVyIG5hdmktbGlua1wiPlxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdDxpIGNsYXNzPVwibmF2aS1saW5rLWljb24gZmxhdGljb24yLWV4cGFuZFwiPjwvaT5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQ8c3BhbiBjbGFzcz1cIm5hdmktbGluay10ZXh0XCI+JyArIF9MQU5HXy52aWV3ICsgJzwvc3Bhbj5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQ8L2E+XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0PC9saT5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQ8bGkgY2xhc3M9XCJuYXZpLWl0ZW1cIj5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQ8YSBocmVmPVwiJyArIGJhc2VQYXRoICsgc2VnZW1lbnRBZG1pbiArICcvdGF4ZXMvZGV0YWlsLycgKyB0LmlkICsgJ1wiIGNsYXNzPVwibmF2aS1saW5rXCI+XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0PGkgY2xhc3M9XCJuYXZpLWxpbmstaWNvbiBmbGF0aWNvbjItY29udHJhY3RcIj48L2k+XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0PHNwYW4gY2xhc3M9XCJuYXZpLWxpbmstdGV4dFwiPicgKyBfTEFOR18uZWRpdCArICc8L3NwYW4+XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0PC9hPlxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdDwvbGk+XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0PGxpIGNsYXNzPVwibmF2aS1pdGVtXCI+XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0PGEgaHJlZj1cIiNcIiBkYXRhLWlkPVwiJyArIHQuaWQgKyAnXCIgY2xhc3M9XCJkZWxldGVyb3dLdGRhdGF0YWJsZSBuYXZpLWxpbmtcIj5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQ8aSBjbGFzcz1cIm5hdmktbGluay1pY29uIGZsYXRpY29uMi10cmFzaFwiPjwvaT5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQ8c3BhbiBjbGFzcz1cIm5hdmktbGluay10ZXh0XCI+JyArIF9MQU5HXy5kZWxldGUgKyAnPC9zcGFuPlxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdDwvYT5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQ8L2xpPlxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdDwvdWw+XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0PC9kaXY+XFx0XFx0XFx0XFx0XFx0XFx0XFx0PC9kaXY+XFx0XFx0XFx0XFx0XFx0XFx0J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0ZW1wbGF0ZSA9ICc8ZGl2IGNsYXNzPVwiZHJvcGRvd25cIj5cXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImphdmFzY3JpcHQ6O1wiIGNsYXNzPVwiYnRuIGJ0bi1zbSBidG4tY2xlYW4gYnRuLWljb24gYnRuLWljb24tbWRcIiBkYXRhLXRvZ2dsZT1cImRyb3Bkb3duXCI+XFxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmxhdGljb24tbW9yZS0xXCI+PC9pPjwvYT5cXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRyb3Bkb3duLW1lbnUgZHJvcGRvd24tbWVudS1yaWdodFwiPlxcXG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJuYXZpIGZsZXgtY29sdW1uIG5hdmktaG92ZXIgcHktMlwiPlxcXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJuYXZpLWl0ZW1cIj5cXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIicgKyBzdGFydFVybCArICcvaW50ZXJuYXRpb25hbC90YXhlcy9lZGl0LycgKyB0LmlkICsgJ1wiIGNsYXNzPVwibmF2aS1saW5rXCI+XFxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibmF2aS1pY29uXCI+PGkgY2xhc3M9XCIgZmxhdGljb24yLWNvbnRyYWN0XCI+PC9pPjwvc3Bhbj5cXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJuYXZpLXRleHRcIj4nICsgX0xBTkdfLmVkaXQgKyAnPC9zcGFuPlxcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+PC9saT4nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0LmlkICE9ICcxJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZSArPSAnIDxsaSBjbGFzcz1cIm5hdmktaXRlbVwiPlxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBkYXRhLWlkPVwiJyArIHQuaWQgKyAnXCIgY2xhc3M9XCJkZWxldGVyb3dLdGRhdGF0YWJsZSBuYXZpLWxpbmtcIj5cXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibmF2aS1pY29uXCI+PGkgY2xhc3M9XCIgZmxhdGljb24yLXRyYXNoXCI+PC9pPjwvc3Bhbj5cXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibmF2aS10ZXh0XCI+JyArIF9MQU5HXy5kZWxldGUgKyAnPC9zcGFuPlxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT4nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZSArPSAnIDwvdWw+PC9kaXY+PC9kaXY+JztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGVtcGxhdGU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9KSwgJChcIiNrdF9mb3JtX3N0YXR1c1wiKS5vbihcImNoYW5nZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB0LnNlYXJjaCgkKHRoaXMpLnZhbCgpLnRvTG93ZXJDYXNlKCksIFwiU3RhdHVzXCIpXG4gICAgICAgICAgICB9KSwgdC5vbihcImRhdGF0YWJsZS1vbi1jaGVjayBkYXRhdGFibGUtb24tdW5jaGVjayBkYXRhdGFibGUtb24tbGF5b3V0LXVwZGF0ZWRcIiwgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgIHZhciBhID0gdC5yb3dzKFwiLmRhdGF0YWJsZS1yb3ctYWN0aXZlXCIpLm5vZGVzKCkubGVuZ3RoO1xuICAgICAgICAgICAgICAgICQoXCIja3Rfc3ViaGVhZGVyX2dyb3VwX3NlbGVjdGVkX3Jvd3NcIikuaHRtbChhKSwgYSA+IDAgPyAoJChcIiNrdF9zdWJoZWFkZXJfc2VhcmNoXCIpLmFkZENsYXNzKFwiaGlkZGVuXCIpLCAkKFwiI2t0X3N1YmhlYWRlcl9ncm91cF9hY3Rpb25zXCIpLnJlbW92ZUNsYXNzKFwiaGlkZGVuXCIpKSA6ICgkKFwiI2t0X3N1YmhlYWRlcl9zZWFyY2hcIikucmVtb3ZlQ2xhc3MoXCJoaWRkZW5cIiksICQoXCIja3Rfc3ViaGVhZGVyX2dyb3VwX2FjdGlvbnNcIikuYWRkQ2xhc3MoXCJoaWRkZW5cIikpXG4gICAgICAgICAgICB9KSwgJChcIiNrdF9kYXRhdGFibGVfcmVjb3Jkc19mZXRjaF9tb2RhbFwiKS5vbihcInNob3cuYnMubW9kYWxcIiwgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgIHZhciBhID0gbmV3IEtURGlhbG9nKHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJsb2FkZXJcIixcbiAgICAgICAgICAgICAgICAgICAgcGxhY2VtZW50OiBcInRvcCBjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogX0xBTkdfLmxvYWRpbmcgKyBcIi4uLlwiXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgYS5zaG93KCksIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIGEuaGlkZSgpXG4gICAgICAgICAgICAgICAgfSwgMWUzKTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBuID0gdC5yb3dzKFwiLmRhdGF0YWJsZS1yb3ctYWN0aXZlXCIpLm5vZGVzKCkuZmluZCgnLmNoZWNrYm94LXNpbmdsZSA+IFt0eXBlPVwiY2hlY2tib3hcIl0nKS5tYXAoZnVuY3Rpb24odCwgZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICQoZSkudmFsKClcbiAgICAgICAgICAgICAgICAgICAgfSksIHMgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCksIGwgPSAwOyBsIDwgbi5sZW5ndGg7IGwrKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICAgICAgICAgICAgICAgICAgaS5zZXRBdHRyaWJ1dGUoXCJkYXRhLWlkXCIsIG5bbF0pLCBpLmlubmVySFRNTCA9IF9MQU5HXy5zZWxlY3RlZF9yb3dfaWQgKyBcIjogXCIgKyBuW2xdLCBzLmFwcGVuZENoaWxkKGkpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICQoZS50YXJnZXQpLmZpbmQoXCIja3RfYXBwc191c2VyX2ZldGNoX3JlY29yZHNfc2VsZWN0ZWRcIikuYXBwZW5kKHMpXG4gICAgICAgICAgICB9KS5vbihcImhpZGUuYnMubW9kYWxcIiwgZnVuY3Rpb24odCkge1xuICAgICAgICAgICAgICAgICQodC50YXJnZXQpLmZpbmQoXCIja3RfYXBwc191c2VyX2ZldGNoX3JlY29yZHNfc2VsZWN0ZWRcIikuZW1wdHkoKVxuICAgICAgICAgICAgfSksICQoXCIja3Rfc3ViaGVhZGVyX2dyb3VwX2FjdGlvbnNfc3RhdHVzX2NoYW5nZVwiKS5vbihcImNsaWNrXCIsIFwiW2RhdGEtdG9nZ2xlPSdzdGF0dXMtY2hhbmdlJ11cIiwgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIHZhciBlID0gJCh0aGlzKS5maW5kKFwiLm5hdmktbGluay10ZXh0XCIpLmh0bWwoKSxcbiAgICAgICAgICAgICAgICAgICAgc3QgPSAkKHRoaXMpLmZpbmQoXCIubmF2aS1saW5rLXRleHRcIikuZGF0YSgnc3RhdHVzJyksXG4gICAgICAgICAgICAgICAgICAgIGEgPSB0LnJvd3MoXCIuZGF0YXRhYmxlLXJvdy1hY3RpdmVcIikubm9kZXMoKS5maW5kKCcuY2hlY2tib3gtc2luZ2xlID4gW3R5cGU9XCJjaGVja2JveFwiXScpLm1hcChmdW5jdGlvbih0LCBlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4geyBpZDogJChlKS52YWwoKSwgYWN0aXZlOiBzdCB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGEubGVuZ3RoID4gMCAmJiBzd2FsLmZpcmUoe1xuICAgICAgICAgICAgICAgICAgICBidXR0b25zU3R5bGluZzogITEsXG4gICAgICAgICAgICAgICAgICAgIGh0bWw6IF9MQU5HXy5hcmVfeW91X3N1cmVfdXBkYXRlICsgXCIgXCIgKyBhLmxlbmd0aCArIFwiIFwiICsgX0xBTkdfLnNlbGVjdGVkX3JlY29yZHNfc3RhdHVzX3RvICsgXCIgXCIgKyBlICsgXCIgP1wiLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInByaW1hcnlcIixcbiAgICAgICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6IF9MQU5HXy55ZXNfdXBkYXRlICsgXCIhXCIsXG4gICAgICAgICAgICAgICAgICAgIGNvbmZpcm1CdXR0b25DbGFzczogXCJidG4gYnRuLXNtIGJ0bi1ib2xkIGJ0bi1kYXJrXCIsXG4gICAgICAgICAgICAgICAgICAgIHNob3dDYW5jZWxCdXR0b246ICEwLFxuICAgICAgICAgICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBfTEFOR18ubm9fY2FuY2VsLFxuICAgICAgICAgICAgICAgICAgICBjYW5jZWxCdXR0b25DbGFzczogXCJidG4gYnRuLXNtIGJ0bi1ib2xkIGJ0bi1kZWZhdWx0XCJcbiAgICAgICAgICAgICAgICB9KS50aGVuKGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQudmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ1BPU1QnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybDogY3VycmVudF91cmwgKyBcIi9hamF4VXBkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbY3JzZnRva2VuXTogJCgnbWV0YVtuYW1lPVwiWC1DU1JGLVRPS0VOXCJdJykuYXR0cignY29udGVudCcpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogYS5nZXQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVR5cGU6IFwianNvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3VsdCwgc3RhdHVzLCB4aHIpIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoeGhyLnN0YXR1cyA9PSAyMDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQubm90aWZ5KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogKHJlc3VsdC5zdWNjZXNzLm1lc3NhZ2UpID8gX0xBTkdfLnVwZGF0ZWQgKyBcIiFcIiA6IF9MQU5HXy53YXJuaW5nICsgXCIhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogKHJlc3VsdC5zdWNjZXNzLm1lc3NhZ2UpID8gcmVzdWx0LnN1Y2Nlc3MubWVzc2FnZSA6IHJlc3VsdC5lcnJvci5tZXNzYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogKHJlc3VsdC5zdWNjZXNzLm1lc3NhZ2UpID8gJ3N1Y2Nlc3MnIDogJ3dhcm5pbmcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoXCIja3RfYXBwc190YXhlc19saXN0X2RhdGF0YWJsZVwiKS5LVERhdGF0YWJsZSgpLnJlbG9hZCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICQubm90aWZ5KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogX0xBTkdfLmNhbmNlbGxlZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBfTEFOR18ueW91cl9zZWxldGVkX3JlY29yZHNfc3RhdHVzZXNfaGF2ZV9ub3RfYmVlbl91cGRhdGVkXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3ByaW1hcnknXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KSwgJChcIiNrdF9zdWJoZWFkZXJfZ3JvdXBfYWN0aW9uc19kZWxldGVfYWxsXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdmFyIGUgPSB0LnJvd3MoXCIuZGF0YXRhYmxlLXJvdy1hY3RpdmVcIikubm9kZXMoKS5maW5kKCcuY2hlY2tib3gtc2luZ2xlID4gW3R5cGU9XCJjaGVja2JveFwiXScpLm1hcChmdW5jdGlvbih0LCBlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAkKGUpLnZhbCgpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgZS5sZW5ndGggPiAwICYmIHN3YWwuZmlyZSh7XG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbnNTdHlsaW5nOiAhMSxcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogX0xBTkdfLmFyZV95b3Vfc3VyZV9kZWxldGUgKyBcIiBcIiArIGUubGVuZ3RoICsgXCIgXCIgKyBfTEFOR18uc2VsZWN0ZWRfcmVjb3JkcyArIFwiID9cIixcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJlcnJvclwiLFxuICAgICAgICAgICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogX0xBTkdfLnllc19kZWxldGUgKyAnICEnLFxuICAgICAgICAgICAgICAgICAgICBjb25maXJtQnV0dG9uQ2xhc3M6IFwiYnRuIGJ0bi1zbSBidG4tYm9sZCBidG4tZGFuZ2VyXCIsXG4gICAgICAgICAgICAgICAgICAgIHNob3dDYW5jZWxCdXR0b246ICEwLFxuICAgICAgICAgICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBfTEFOR18ubm9fY2FuY2VsLFxuICAgICAgICAgICAgICAgICAgICBjYW5jZWxCdXR0b25DbGFzczogXCJidG4gYnRuLXNtIGJ0bi1ib2xkIGJ0bi1kYXJrXCJcbiAgICAgICAgICAgICAgICB9KS50aGVuKGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQudmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzZWxlY3RlZCA9IGUuZ2V0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdERUxFVEUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybDogY3VycmVudF91cmwgKyBcIi9kZWxldGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtjcnNmdG9rZW5dOiAkKCdtZXRhW25hbWU9XCJYLUNTUkYtVE9LRU5cIl0nKS5hdHRyKCdjb250ZW50JyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBzZWxlY3RlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVR5cGU6IFwianNvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3VsdCwgc3RhdHVzLCB4aHIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9TdWNjZXNzIE1lc3NhZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHhoci5zdGF0dXMgPT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIga3Rfc3ViaGVhZGVyX3RvdGFsID0gJCgnLmt0X3N1YmhlYWRlcl90b3RhbCcpLnRleHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJy5rdF9zdWJoZWFkZXJfdG90YWwnKS5odG1sKChrdF9zdWJoZWFkZXJfdG90YWwgLSBzZWxlY3RlZC5sZW5ndGgpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQubm90aWZ5KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogKHJlc3VsdC5zdWNjZXNzLm1lc3NhZ2UpID8gX0xBTkdfLmRlbGV0ZWQgKyBcIiFcIiA6IF9MQU5HXy53YXJuaW5nICsgXCIhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogKHJlc3VsdC5zdWNjZXNzLm1lc3NhZ2UpID8gcmVzdWx0LnN1Y2Nlc3MubWVzc2FnZSA6IHJlc3VsdC5lcnJvci5tZXNzYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogKHJlc3VsdC5zdWNjZXNzLm1lc3NhZ2UpID8gJ3N1Y2Nlc3MnIDogJ3dhcm5pbmcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoXCIja3RfYXBwc190YXhlc19saXN0X2RhdGF0YWJsZVwiKS5LVERhdGF0YWJsZSgpLnJlbG9hZCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICQubm90aWZ5KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogX0xBTkdfLmRlbGV0ZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogX0xBTkdfLnlvdXJfc2VsZWN0ZWRfcmVjb3Jkc19oYXZlX25vdF9iZWVuX2RlbGV0ZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnaW5mbydcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pLCB0Lm9uKFwiZGF0YXRhYmxlLW9uLWxheW91dC11cGRhdGVkXCIsIGZ1bmN0aW9uKCkge30pXG4gICAgICAgIH1cbiAgICB9XG59KCk7XG5LVFV0aWwucmVhZHkoZnVuY3Rpb24oKSB7XG4gICAgS1RBcHB0YXhlc0xpc3REYXRhdGFibGUuaW5pdCgpO1xuICAgIC8vVXBkYXRlXG4gICAgJChkb2N1bWVudCkub24oXCJjbGlja1wiLCBcIi5hY3Rpb25BY3RpdmVcIiwgZnVuY3Rpb24oZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHZhciBzdGF0dXQgPSAkKHRoaXMpLmF0dHIoJ2RhdGEtc3RhdHV0Jyk7XG4gICAgICAgIHZhciBpZCA9ICQodGhpcykuYXR0cignZGF0YS1pZCcpO1xuICAgICAgICB2YXIgdmFsdWUgPSBbXTtcbiAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgIHR5cGU6ICdQT1NUJyxcbiAgICAgICAgICAgIHVybDogY3VycmVudF91cmwgKyBcIi9hamF4VXBkYXRlXCIsXG4gICAgICAgICAgICBjb250ZW50VHlwZTogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDsgY2hhcnNldD1VVEYtOCcsXG4gICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgW2Nyc2Z0b2tlbl06ICQoJ21ldGFbbmFtZT1cIlgtQ1NSRi1UT0tFTlwiXScpLmF0dHIoJ2NvbnRlbnQnKSxcbiAgICAgICAgICAgICAgICB2YWx1ZTogW3tcbiAgICAgICAgICAgICAgICAgICAgaWQ6IGlkLFxuICAgICAgICAgICAgICAgICAgICBhY3RpdmU6IHN0YXR1dFxuICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGF0YVR5cGU6IFwianNvblwiLFxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzdWx0LCBzdGF0dXMsIHhocikge1xuICAgICAgICAgICAgICAgIGlmICh4aHIuc3RhdHVzID09IDIwMCkge1xuICAgICAgICAgICAgICAgICAgICAkLm5vdGlmeSh7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogKHJlc3VsdC5zdWNjZXNzLm1lc3NhZ2UpID8gX0xBTkdfLnVwZGF0ZWQgKyBcIiFcIiA6IF9MQU5HXy53YXJuaW5nICsgXCIhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAocmVzdWx0LnN1Y2Nlc3MubWVzc2FnZSkgPyByZXN1bHQuc3VjY2Vzcy5tZXNzYWdlIDogcmVzdWx0LmVycm9yLm1lc3NhZ2VcbiAgICAgICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogKHJlc3VsdC5zdWNjZXNzLm1lc3NhZ2UpID8gJ3N1Y2Nlc3MnIDogJ3dhcm5pbmcnXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAkKFwiI2t0X2FwcHNfdGF4ZXNfbGlzdF9kYXRhdGFibGVcIikuS1REYXRhdGFibGUoKS5yZWxvYWQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfSk7XG59KTsiXSwic291cmNlUm9vdCI6IiJ9