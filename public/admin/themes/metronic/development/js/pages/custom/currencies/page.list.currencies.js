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
/******/ 	return __webpack_require__(__webpack_require__.s = 28);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/metronic/js/pages/custom/currencies/page.list.currencies.js":
/*!*******************************************************************************!*\
  !*** ./resources/metronic/js/pages/custom/currencies/page.list.currencies.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var KTAppCurrencyListDatatable = function () {
  var t;
  return {
    init: function init() {
      t = $("#kt_apps_currency_list_datatable").KTDatatable({
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
            return '<a href="' + startUrl + '/international/currencies/edit/' + t.id + '" class="capitalize text-dark-75 font-weight-bolder font-size-lg mb-0"> ' + t.name + '</a>';
          }
        }, {
          field: "iso_code",
          title: _LANG_.iso_code,
          type: "iso_code",
          template: function template(t) {
            return t.iso_code + ' | ' + t.symbol;
          } //width: 100,

        }, {
          field: "conversion_rate",
          title: _LANG_.conversion_rate,
          type: "conversion_rate" //width: 100,

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
            var restrictionsDelete = restrictionItem.split('|');
            var template = '<div class="dropdown">\
                        <a href="javascript:;" class="btn btn-sm btn-clean btn-icon btn-icon-md" data-toggle="dropdown">\
                        <i class="flaticon-more-1"></i></a>\
                        <div class="dropdown-menu dropdown-menu-right">\
                        <ul class="navi flex-column navi-hover py-2">\
                        <li class="navi-item">\
                        <a href="' + startUrl + '/international/currencies/edit/' + t.id + '" class="navi-link">\
                        <span class="navi-icon"><i class="flaticon2-contract"></i></span>\
                        <span class="navi-text">' + _LANG_.edit + '</span>\
                        </a></li>';

            if (jQuery.inArray(t.id, restrictionsDelete) == '-1') {
              template += ' <li class="navi-item">\
                                <a href="#" data-id="' + t.id + '" class="deleterowKtdatatable navi-link">\
                                <span class="navi-icon"><i class="navi-icon flaticon2-trash"></i></span>\
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
                  $("#kt_apps_currency_list_datatable").KTDatatable().reload();
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
                  $("#kt_apps_currency_list_datatable").KTDatatable().reload();
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
  KTAppCurrencyListDatatable.init(); //Update

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
          $("#kt_apps_currency_list_datatable").KTDatatable().reload();
        }
      }
    });
  });
});
$(document).on("click", ".updateCurrencyRate", function (e) {
  $(this).addClass('kt-spinner kt-spinner--center kt-spinner--sm kt-spinner--light');
  $('.updateCurrencyRate i').removeClass('la la-refresh');
  $.ajax({
    type: 'POST',
    url: current_url + "/updateCurrencyrate",
    contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
    data: _defineProperty({}, crsftoken, $('meta[name="X-CSRF-TOKEN"]').attr('content')),
    dataType: "json",
    success: function success(result, status, xhr) {
      //$(this).removeClass('.kt-spinner.kt-spinner--center kt-spinner--sm kt-spinner--light');
      //Success Message
      if (xhr.status == 200) {
        $.notify({
          title: result.success.message ? _LANG_.updated + "!" : _LANG_.warning + "!",
          message: result.success.message ? result.success.message : result.error.message
        }, {
          type: result.success.message ? 'success' : 'warning'
        });
        $("#kt_apps_currency_list_datatable").KTDatatable().reload();
      }
    },
    complete: function complete(result, status, xhr) {
      console.log('fafa');
      $('.updateCurrencyRate').removeClass('kt-spinner');
      $('.updateCurrencyRate i').addClass('la la-refresh');
    }
  }); //<i class="la la-refresh"></i>
});

/***/ }),

/***/ 28:
/*!*************************************************************************************!*\
  !*** multi ./resources/metronic/js/pages/custom/currencies/page.list.currencies.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Applications/MAMP/htdocs/spreadci4/public/admin/themes/metronic/resources/metronic/js/pages/custom/currencies/page.list.currencies.js */"./resources/metronic/js/pages/custom/currencies/page.list.currencies.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL21ldHJvbmljL2pzL3BhZ2VzL2N1c3RvbS9jdXJyZW5jaWVzL3BhZ2UubGlzdC5jdXJyZW5jaWVzLmpzIl0sIm5hbWVzIjpbIktUQXBwQ3VycmVuY3lMaXN0RGF0YXRhYmxlIiwidCIsImluaXQiLCIkIiwiS1REYXRhdGFibGUiLCJkYXRhIiwidHlwZSIsInNvdXJjZSIsInJlYWQiLCJ1cmwiLCJjdXJyZW50X3VybCIsIm1ldGhvZCIsInBhcmFtcyIsImNyc2Z0b2tlbiIsImF0dHIiLCJwYWdlU2l6ZSIsInNlcnZlclBhZ2luZyIsInNlcnZlckZpbHRlcmluZyIsInNlcnZlclNvcnRpbmciLCJ0cmFuc2xhdGUiLCJyZWNvcmRzIiwicHJvY2Vzc2luZyIsIl9MQU5HXyIsImxvYWRpbmdfd2FpdCIsIm5vUmVjb3JkcyIsIm5vX3JlY29yZF9mb3VuZCIsInRvb2xiYXIiLCJwYWdpbmF0aW9uIiwiaXRlbXMiLCJmaXJzdCIsInByZXYiLCJwcmV2aW91cyIsIm5leHQiLCJsYXN0IiwibW9yZSIsIm1vcmVfcGFnZXMiLCJpbnB1dCIsInBhZ2VfbnVtYmVyIiwic2VsZWN0Iiwic2VsZWN0X3BhZ2Vfc2l6ZSIsImFsbCIsImluZm8iLCJzaG93aW5nIiwibGF5b3V0Iiwic2Nyb2xsIiwiZm9vdGVyIiwic29ydGFibGUiLCJzZWFyY2giLCJkZWxheSIsInJvd3MiLCJiZWZvcmVUZW1wbGF0ZSIsInJvdyIsImluZGV4IiwiYWN0aXZlIiwiYWRkQ2xhc3MiLCJjb2x1bW5zIiwiZmllbGQiLCJ0aXRsZSIsIndpZHRoIiwic2VsZWN0b3IiLCJ0ZXh0QWxpZ24iLCJuYW1lIiwidGVtcGxhdGUiLCJzdGFydFVybCIsImlkIiwiaXNvX2NvZGUiLCJzeW1ib2wiLCJjb252ZXJzaW9uX3JhdGUiLCJldGF0IiwidGV4dEFjdGl2ZSIsImRlc2FjdGl2ZSIsImlkQWN0aXZlIiwiZGF0ZV9jcmVhdGUiLCJmb3JtYXQiLCJkYXRlX2NyZWF0ZV9mb3JtYXQiLCJhdXRvSGlkZSIsIm92ZXJmbG93IiwicmVzdHJpY3Rpb25zRGVsZXRlIiwicmVzdHJpY3Rpb25JdGVtIiwic3BsaXQiLCJlZGl0IiwialF1ZXJ5IiwiaW5BcnJheSIsIm9uIiwidmFsIiwidG9Mb3dlckNhc2UiLCJlIiwiYSIsIm5vZGVzIiwibGVuZ3RoIiwiaHRtbCIsInJlbW92ZUNsYXNzIiwiS1REaWFsb2ciLCJwbGFjZW1lbnQiLCJtZXNzYWdlIiwibG9hZGluZyIsInNob3ciLCJzZXRUaW1lb3V0IiwiaGlkZSIsIm4iLCJmaW5kIiwibWFwIiwicyIsImRvY3VtZW50IiwiY3JlYXRlRG9jdW1lbnRGcmFnbWVudCIsImwiLCJpIiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsImlubmVySFRNTCIsInNlbGVjdGVkX3Jvd19pZCIsImFwcGVuZENoaWxkIiwidGFyZ2V0IiwiYXBwZW5kIiwiZW1wdHkiLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic3QiLCJzd2FsIiwiZmlyZSIsImJ1dHRvbnNTdHlsaW5nIiwiYXJlX3lvdV9zdXJlX3VwZGF0ZSIsInNlbGVjdGVkX3JlY29yZHNfc3RhdHVzX3RvIiwiY29uZmlybUJ1dHRvblRleHQiLCJ5ZXNfdXBkYXRlIiwiY29uZmlybUJ1dHRvbkNsYXNzIiwic2hvd0NhbmNlbEJ1dHRvbiIsImNhbmNlbEJ1dHRvblRleHQiLCJub19jYW5jZWwiLCJjYW5jZWxCdXR0b25DbGFzcyIsInRoZW4iLCJ2YWx1ZSIsImFqYXgiLCJnZXQiLCJkYXRhVHlwZSIsInN1Y2Nlc3MiLCJyZXN1bHQiLCJzdGF0dXMiLCJ4aHIiLCJub3RpZnkiLCJ1cGRhdGVkIiwid2FybmluZyIsImVycm9yIiwicmVsb2FkIiwiY2FuY2VsbGVkIiwieW91cl9zZWxldGVkX3JlY29yZHNfc3RhdHVzZXNfaGF2ZV9ub3RfYmVlbl91cGRhdGVkIiwidGV4dCIsImFyZV95b3Vfc3VyZV9kZWxldGUiLCJzZWxlY3RlZF9yZWNvcmRzIiwieWVzX2RlbGV0ZSIsInNlbGVjdGVkIiwia3Rfc3ViaGVhZGVyX3RvdGFsIiwiZGVsZXRlZCIsInlvdXJfc2VsZWN0ZWRfcmVjb3Jkc19oYXZlX25vdF9iZWVuX2RlbGV0ZWQiLCJLVFV0aWwiLCJyZWFkeSIsInN0YXR1dCIsImNvbnRlbnRUeXBlIiwiY29tcGxldGUiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZhOzs7O0FBQ2IsSUFBSUEsMEJBQTBCLEdBQUcsWUFBVztBQUN4QyxNQUFJQyxDQUFKO0FBQ0EsU0FBTztBQUNIQyxRQUFJLEVBQUUsZ0JBQVc7QUFDYkQsT0FBQyxHQUFHRSxDQUFDLENBQUMsa0NBQUQsQ0FBRCxDQUFzQ0MsV0FBdEMsQ0FBa0Q7QUFDbERDLFlBQUksRUFBRTtBQUNGQyxjQUFJLEVBQUUsUUFESjtBQUVGQyxnQkFBTSxFQUFFO0FBQ0pDLGdCQUFJLEVBQUU7QUFDRkMs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eUJ3RixXQUF6QixDQUFxQyxZQUFyQztBQUNBeEYsT0FBQyxDQUFDLHVCQUFELENBQUQsQ0FBMkJtRCxRQUEzQixDQUFvQyxlQUFwQztBQUNIO0FBekJFLEdBQVAsRUFKdUQsQ0FnQ3ZEO0FBQ0gsQ0FqQ0QsRSIsImZpbGUiOiIvZGV2ZWxvcG1lbnQvanMvcGFnZXMvY3VzdG9tL2N1cnJlbmNpZXMvcGFnZS5saXN0LmN1cnJlbmNpZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDI4KTtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIEtUQXBwQ3VycmVuY3lMaXN0RGF0YXRhYmxlID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHQ7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgaW5pdDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB0ID0gJChcIiNrdF9hcHBzX2N1cnJlbmN5X2xpc3RfZGF0YXRhYmxlXCIpLktURGF0YXRhYmxlKHtcbiAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwicmVtb3RlXCIsXG4gICAgICAgICAgICAgICAgICAgIHNvdXJjZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVhZDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybDogY3VycmVudF91cmwgKyBcIi9saXN0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2Nyc2Z0b2tlbl06ICQoJ21ldGFbbmFtZT1cIlgtQ1NSRi1UT0tFTlwiXScpLmF0dHIoJ2NvbnRlbnQnKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHBhZ2VTaXplOiAxMCxcbiAgICAgICAgICAgICAgICAgICAgc2VydmVyUGFnaW5nOiAhMCxcbiAgICAgICAgICAgICAgICAgICAgc2VydmVyRmlsdGVyaW5nOiAhMCxcbiAgICAgICAgICAgICAgICAgICAgc2VydmVyU29ydGluZzogITBcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHRyYW5zbGF0ZToge1xuICAgICAgICAgICAgICAgICAgICByZWNvcmRzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9jZXNzaW5nOiBfTEFOR18ubG9hZGluZ193YWl0LFxuICAgICAgICAgICAgICAgICAgICAgICAgbm9SZWNvcmRzOiBfTEFOR18ubm9fcmVjb3JkX2ZvdW5kLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB0b29sYmFyOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWdpbmF0aW9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlyc3Q6IF9MQU5HXy5maXJzdCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXY6IF9MQU5HXy5wcmV2aW91cyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5leHQ6IF9MQU5HXy5uZXh0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFzdDogX0xBTkdfLmxhc3QsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb3JlOiBfTEFOR18ubW9yZV9wYWdlcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBfTEFOR18ucGFnZV9udW1iZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3Q6IF9MQU5HXy5zZWxlY3RfcGFnZV9zaXplLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxsOiBfTEFOR18uYWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmZvOiBfTEFOR18uc2hvd2luZyArICcge3tzdGFydH19IC0ge3tlbmR9fSBvZiB7e3RvdGFsfX0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgbGF5b3V0OiB7XG4gICAgICAgICAgICAgICAgICAgIHNjcm9sbDogITEsXG4gICAgICAgICAgICAgICAgICAgIGZvb3RlcjogITFcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHNvcnRhYmxlOiAhMCxcbiAgICAgICAgICAgICAgICBwYWdpbmF0aW9uOiAhMCxcbiAgICAgICAgICAgICAgICBzZWFyY2g6IHtcbiAgICAgICAgICAgICAgICAgICAgaW5wdXQ6ICQoXCIja3Rfc3ViaGVhZGVyX3NlYXJjaF9mb3JtXCIpLFxuICAgICAgICAgICAgICAgICAgICBkZWxheTogNDAwXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICByb3dzOiB7XG4gICAgICAgICAgICAgICAgICAgIGJlZm9yZVRlbXBsYXRlOiBmdW5jdGlvbihyb3csIGRhdGEsIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5hY3RpdmUgPT0gJzAnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93LmFkZENsYXNzKCdub3RhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgY29sdW1uczogW3tcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkOiBcImlkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCIjXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBzb3J0YWJsZTogITEsXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjAsXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3Rvcjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiBcImt0LWNoZWNrYm94LS1zb2xpZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkOiBcIm5hbWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBfTEFOR18ubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMDAsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZTogZnVuY3Rpb24odCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnPGEgaHJlZj1cIicgKyBzdGFydFVybCArICcvaW50ZXJuYXRpb25hbC9jdXJyZW5jaWVzL2VkaXQvJyArIHQuaWQgKyAnXCIgY2xhc3M9XCJjYXBpdGFsaXplIHRleHQtZGFyay03NSBmb250LXdlaWdodC1ib2xkZXIgZm9udC1zaXplLWxnIG1iLTBcIj4gJyArIHQubmFtZSArICc8L2E+JztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWVsZDogXCJpc29fY29kZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IF9MQU5HXy5pc29fY29kZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiaXNvX2NvZGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlOiBmdW5jdGlvbih0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0Lmlzb19jb2RlICsgJyB8ICcgKyB0LnN5bWJvbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy93aWR0aDogMTAwLFxuXG4gICAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkOiBcImNvbnZlcnNpb25fcmF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IF9MQU5HXy5jb252ZXJzaW9uX3JhdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImNvbnZlcnNpb25fcmF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgLy93aWR0aDogMTAwLFxuXG4gICAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkOiBcImFjdGl2ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IF9MQU5HXy5ldGF0LFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJhY3RpdmVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlOiBmdW5jdGlvbih0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHQuYWN0aXZlID09IDEpIHsgdmFyIGFjdGl2ZSA9ICdidG4tbGlnaHQtc3VjY2Vzcyc7IH0gZWxzZSB7IHZhciBhY3RpdmUgPSAnYnRuLWxpZ2h0LWRhbmdlcic7IH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodC5hY3RpdmUgPT0gMSkgeyB2YXIgdGV4dEFjdGl2ZSA9IF9MQU5HXy5hY3RpdmU7IH0gZWxzZSB7IHZhciB0ZXh0QWN0aXZlID0gX0xBTkdfLmRlc2FjdGl2ZTsgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0LmFjdGl2ZSA9PSAxKSB7IHZhciBpZEFjdGl2ZSA9IDA7IH0gZWxzZSB7IHZhciBpZEFjdGl2ZSA9IDE7IH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdGVtcGxhdGUgPSAnPGEgaHJlZj1cImphdmFzY3JpcHQ6O1wiIGRhdGEtc3RhdHV0PVwiJyArIGlkQWN0aXZlICsgJ1wiIGRhdGEtaWQ9XCInICsgdC5pZCArICdcIiBjbGFzcz1cImFjdGlvbkFjdGl2ZSBidG4gYnRuLWJvbGQgYnRuLXNtIGJ0bi1mb250LXNtICcgKyBhY3RpdmUgKyAnXCI+JyArIHRleHRBY3RpdmUgKyAnPC9hPic7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRlbXBsYXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkOiBcImNyZWF0ZWRfYXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBfTEFOR18uZGF0ZV9jcmVhdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vd2lkdGg6IDEwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1hdDogXCJNTS9ERC9ZWVlZXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZTogZnVuY3Rpb24odCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnPGRpdiBjbGFzcz1cImZvbnQtd2VpZ2h0LWJvbGRlciB0ZXh0LXByaW1hcnkgbWItMFwiPicgKyB0LmRhdGVfY3JlYXRlX2Zvcm1hdCArICc8L2Rpdj4nO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWVsZDogXCJBY3Rpb25zXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogODAsXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJBY3Rpb25zXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBzb3J0YWJsZTogITEsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdXRvSGlkZTogITEsXG4gICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogXCJ2aXNpYmxlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZTogZnVuY3Rpb24odCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZXN0cmljdGlvbnNEZWxldGUgPSByZXN0cmljdGlvbkl0ZW0uc3BsaXQoJ3wnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdGVtcGxhdGUgPSAnPGRpdiBjbGFzcz1cImRyb3Bkb3duXCI+XFxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJqYXZhc2NyaXB0OjtcIiBjbGFzcz1cImJ0biBidG4tc20gYnRuLWNsZWFuIGJ0bi1pY29uIGJ0bi1pY29uLW1kXCIgZGF0YS10b2dnbGU9XCJkcm9wZG93blwiPlxcXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZsYXRpY29uLW1vcmUtMVwiPjwvaT48L2E+XFxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkcm9wZG93bi1tZW51IGRyb3Bkb3duLW1lbnUtcmlnaHRcIj5cXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwibmF2aSBmbGV4LWNvbHVtbiBuYXZpLWhvdmVyIHB5LTJcIj5cXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwibmF2aS1pdGVtXCI+XFxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCInICsgc3RhcnRVcmwgKyAnL2ludGVybmF0aW9uYWwvY3VycmVuY2llcy9lZGl0LycgKyB0LmlkICsgJ1wiIGNsYXNzPVwibmF2aS1saW5rXCI+XFxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibmF2aS1pY29uXCI+PGkgY2xhc3M9XCJmbGF0aWNvbjItY29udHJhY3RcIj48L2k+PC9zcGFuPlxcXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm5hdmktdGV4dFwiPicgKyBfTEFOR18uZWRpdCArICc8L3NwYW4+XFxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT48L2xpPic7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGpRdWVyeS5pbkFycmF5KHQuaWQsIHJlc3RyaWN0aW9uc0RlbGV0ZSkgPT0gJy0xJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZSArPSAnIDxsaSBjbGFzcz1cIm5hdmktaXRlbVwiPlxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgZGF0YS1pZD1cIicgKyB0LmlkICsgJ1wiIGNsYXNzPVwiZGVsZXRlcm93S3RkYXRhdGFibGUgbmF2aS1saW5rXCI+XFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJuYXZpLWljb25cIj48aSBjbGFzcz1cIm5hdmktaWNvbiBmbGF0aWNvbjItdHJhc2hcIj48L2k+PC9zcGFuPlxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibmF2aS10ZXh0XCI+JyArIF9MQU5HXy5kZWxldGUgKyAnPC9zcGFuPlxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPic7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlICs9ICcgPC91bD48L2Rpdj48L2Rpdj4nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0ZW1wbGF0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0pLCAkKFwiI2t0X2Zvcm1fc3RhdHVzXCIpLm9uKFwiY2hhbmdlXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHQuc2VhcmNoKCQodGhpcykudmFsKCkudG9Mb3dlckNhc2UoKSwgXCJTdGF0dXNcIilcbiAgICAgICAgICAgIH0pLCB0Lm9uKFwiZGF0YXRhYmxlLW9uLWNoZWNrIGRhdGF0YWJsZS1vbi11bmNoZWNrIGRhdGF0YWJsZS1vbi1sYXlvdXQtdXBkYXRlZFwiLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgdmFyIGEgPSB0LnJvd3MoXCIuZGF0YXRhYmxlLXJvdy1hY3RpdmVcIikubm9kZXMoKS5sZW5ndGg7XG4gICAgICAgICAgICAgICAgJChcIiNrdF9zdWJoZWFkZXJfZ3JvdXBfc2VsZWN0ZWRfcm93c1wiKS5odG1sKGEpLCBhID4gMCA/ICgkKFwiI2t0X3N1YmhlYWRlcl9zZWFyY2hcIikuYWRkQ2xhc3MoXCJoaWRkZW5cIiksICQoXCIja3Rfc3ViaGVhZGVyX2dyb3VwX2FjdGlvbnNcIikucmVtb3ZlQ2xhc3MoXCJoaWRkZW5cIikpIDogKCQoXCIja3Rfc3ViaGVhZGVyX3NlYXJjaFwiKS5yZW1vdmVDbGFzcyhcImhpZGRlblwiKSwgJChcIiNrdF9zdWJoZWFkZXJfZ3JvdXBfYWN0aW9uc1wiKS5hZGRDbGFzcyhcImhpZGRlblwiKSlcbiAgICAgICAgICAgIH0pLCAkKFwiI2t0X2RhdGF0YWJsZV9yZWNvcmRzX2ZldGNoX21vZGFsXCIpLm9uKFwic2hvdy5icy5tb2RhbFwiLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgdmFyIGEgPSBuZXcgS1REaWFsb2coe1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImxvYWRlclwiLFxuICAgICAgICAgICAgICAgICAgICBwbGFjZW1lbnQ6IFwidG9wIGNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBfTEFOR18ubG9hZGluZyArIFwiLi4uXCJcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBhLnNob3coKSwgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgYS5oaWRlKClcbiAgICAgICAgICAgICAgICB9LCAxZTMpO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIG4gPSB0LnJvd3MoXCIuZGF0YXRhYmxlLXJvdy1hY3RpdmVcIikubm9kZXMoKS5maW5kKCcuY2hlY2tib3gtc2luZ2xlID4gW3R5cGU9XCJjaGVja2JveFwiXScpLm1hcChmdW5jdGlvbih0LCBlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJChlKS52YWwoKVxuICAgICAgICAgICAgICAgICAgICB9KSwgcyA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKSwgbCA9IDA7IGwgPCBuLmxlbmd0aDsgbCsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgICAgICAgICAgICAgICAgICBpLnNldEF0dHJpYnV0ZShcImRhdGEtaWRcIiwgbltsXSksIGkuaW5uZXJIVE1MID0gX0xBTkdfLnNlbGVjdGVkX3Jvd19pZCArIFwiOiBcIiArIG5bbF0sIHMuYXBwZW5kQ2hpbGQoaSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgJChlLnRhcmdldCkuZmluZChcIiNrdF9hcHBzX3VzZXJfZmV0Y2hfcmVjb3Jkc19zZWxlY3RlZFwiKS5hcHBlbmQocylcbiAgICAgICAgICAgIH0pLm9uKFwiaGlkZS5icy5tb2RhbFwiLCBmdW5jdGlvbih0KSB7XG4gICAgICAgICAgICAgICAgJCh0LnRhcmdldCkuZmluZChcIiNrdF9hcHBzX3VzZXJfZmV0Y2hfcmVjb3Jkc19zZWxlY3RlZFwiKS5lbXB0eSgpXG4gICAgICAgICAgICB9KSwgJChcIiNrdF9zdWJoZWFkZXJfZ3JvdXBfYWN0aW9uc19zdGF0dXNfY2hhbmdlXCIpLm9uKFwiY2xpY2tcIiwgXCJbZGF0YS10b2dnbGU9J3N0YXR1cy1jaGFuZ2UnXVwiLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgdmFyIGUgPSAkKHRoaXMpLmZpbmQoXCIubmF2aS1saW5rLXRleHRcIikuaHRtbCgpLFxuICAgICAgICAgICAgICAgICAgICBzdCA9ICQodGhpcykuZmluZChcIi5uYXZpLWxpbmstdGV4dFwiKS5kYXRhKCdzdGF0dXMnKSxcbiAgICAgICAgICAgICAgICAgICAgYSA9IHQucm93cyhcIi5kYXRhdGFibGUtcm93LWFjdGl2ZVwiKS5ub2RlcygpLmZpbmQoJy5jaGVja2JveC1zaW5nbGUgPiBbdHlwZT1cImNoZWNrYm94XCJdJykubWFwKGZ1bmN0aW9uKHQsIGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7IGlkOiAkKGUpLnZhbCgpLCBhY3RpdmU6IHN0IH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgYS5sZW5ndGggPiAwICYmIHN3YWwuZmlyZSh7XG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbnNTdHlsaW5nOiAhMSxcbiAgICAgICAgICAgICAgICAgICAgaHRtbDogX0xBTkdfLmFyZV95b3Vfc3VyZV91cGRhdGUgKyBcIiBcIiArIGEubGVuZ3RoICsgXCIgXCIgKyBfTEFOR18uc2VsZWN0ZWRfcmVjb3Jkc19zdGF0dXNfdG8gKyBcIiBcIiArIGUgKyBcIiA/XCIsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwicHJpbWFyeVwiLFxuICAgICAgICAgICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogX0xBTkdfLnllc191cGRhdGUgKyBcIiFcIixcbiAgICAgICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvbkNsYXNzOiBcImJ0biBidG4tc20gYnRuLWJvbGQgYnRuLWRhcmtcIixcbiAgICAgICAgICAgICAgICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogITAsXG4gICAgICAgICAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IF9MQU5HXy5ub19jYW5jZWwsXG4gICAgICAgICAgICAgICAgICAgIGNhbmNlbEJ1dHRvbkNsYXNzOiBcImJ0biBidG4tc20gYnRuLWJvbGQgYnRuLWRlZmF1bHRcIlxuICAgICAgICAgICAgICAgIH0pLnRoZW4oZnVuY3Rpb24odCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodC52YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnUE9TVCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBjdXJyZW50X3VybCArIFwiL2FqYXhVcGRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtjcnNmdG9rZW5dOiAkKCdtZXRhW25hbWU9XCJYLUNTUkYtVE9LRU5cIl0nKS5hdHRyKCdjb250ZW50JyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBhLmdldCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhVHlwZTogXCJqc29uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzdWx0LCBzdGF0dXMsIHhocikge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh4aHIuc3RhdHVzID09IDIwMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJC5ub3RpZnkoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAocmVzdWx0LnN1Y2Nlc3MubWVzc2FnZSkgPyBfTEFOR18udXBkYXRlZCArIFwiIVwiIDogX0xBTkdfLndhcm5pbmcgKyBcIiFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAocmVzdWx0LnN1Y2Nlc3MubWVzc2FnZSkgPyByZXN1bHQuc3VjY2Vzcy5tZXNzYWdlIDogcmVzdWx0LmVycm9yLm1lc3NhZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAocmVzdWx0LnN1Y2Nlc3MubWVzc2FnZSkgPyAnc3VjY2VzcycgOiAnd2FybmluZydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJChcIiNrdF9hcHBzX2N1cnJlbmN5X2xpc3RfZGF0YXRhYmxlXCIpLktURGF0YXRhYmxlKCkucmVsb2FkKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgJC5ub3RpZnkoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBfTEFOR18uY2FuY2VsbGVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IF9MQU5HXy55b3VyX3NlbGV0ZWRfcmVjb3Jkc19zdGF0dXNlc19oYXZlX25vdF9iZWVuX3VwZGF0ZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAncHJpbWFyeSdcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pLCAkKFwiI2t0X3N1YmhlYWRlcl9ncm91cF9hY3Rpb25zX2RlbGV0ZV9hbGxcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB2YXIgZSA9IHQucm93cyhcIi5kYXRhdGFibGUtcm93LWFjdGl2ZVwiKS5ub2RlcygpLmZpbmQoJy5jaGVja2JveC1zaW5nbGUgPiBbdHlwZT1cImNoZWNrYm94XCJdJykubWFwKGZ1bmN0aW9uKHQsIGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICQoZSkudmFsKClcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBlLmxlbmd0aCA+IDAgJiYgc3dhbC5maXJlKHtcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uc1N0eWxpbmc6ICExLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiBfTEFOR18uYXJlX3lvdV9zdXJlX2RlbGV0ZSArIFwiIFwiICsgZS5sZW5ndGggKyBcIiBcIiArIF9MQU5HXy5zZWxlY3RlZF9yZWNvcmRzICsgXCIgP1wiLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImVycm9yXCIsXG4gICAgICAgICAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiBfTEFOR18ueWVzX2RlbGV0ZSArICcgIScsXG4gICAgICAgICAgICAgICAgICAgIGNvbmZpcm1CdXR0b25DbGFzczogXCJidG4gYnRuLXNtIGJ0bi1ib2xkIGJ0bi1kYW5nZXJcIixcbiAgICAgICAgICAgICAgICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogITAsXG4gICAgICAgICAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IF9MQU5HXy5ub19jYW5jZWwsXG4gICAgICAgICAgICAgICAgICAgIGNhbmNlbEJ1dHRvbkNsYXNzOiBcImJ0biBidG4tc20gYnRuLWJvbGQgYnRuLWRhcmtcIlxuICAgICAgICAgICAgICAgIH0pLnRoZW4oZnVuY3Rpb24odCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodC52YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHNlbGVjdGVkID0gZS5nZXQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ0RFTEVURScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBjdXJyZW50X3VybCArIFwiL2RlbGV0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2Nyc2Z0b2tlbl06ICQoJ21ldGFbbmFtZT1cIlgtQ1NSRi1UT0tFTlwiXScpLmF0dHIoJ2NvbnRlbnQnKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IHNlbGVjdGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhVHlwZTogXCJqc29uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzdWx0LCBzdGF0dXMsIHhocikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL1N1Y2Nlc3MgTWVzc2FnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoeGhyLnN0YXR1cyA9PSAyMDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBrdF9zdWJoZWFkZXJfdG90YWwgPSAkKCcua3Rfc3ViaGVhZGVyX3RvdGFsJykudGV4dCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnLmt0X3N1YmhlYWRlcl90b3RhbCcpLmh0bWwoKGt0X3N1YmhlYWRlcl90b3RhbCAtIHNlbGVjdGVkLmxlbmd0aCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJC5ub3RpZnkoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAocmVzdWx0LnN1Y2Nlc3MubWVzc2FnZSkgPyBfTEFOR18uZGVsZXRlZCArIFwiIVwiIDogX0xBTkdfLndhcm5pbmcgKyBcIiFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAocmVzdWx0LnN1Y2Nlc3MubWVzc2FnZSkgPyByZXN1bHQuc3VjY2Vzcy5tZXNzYWdlIDogcmVzdWx0LmVycm9yLm1lc3NhZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAocmVzdWx0LnN1Y2Nlc3MubWVzc2FnZSkgPyAnc3VjY2VzcycgOiAnd2FybmluZydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJChcIiNrdF9hcHBzX2N1cnJlbmN5X2xpc3RfZGF0YXRhYmxlXCIpLktURGF0YXRhYmxlKCkucmVsb2FkKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgJC5ub3RpZnkoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBfTEFOR18uZGVsZXRlZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBfTEFOR18ueW91cl9zZWxlY3RlZF9yZWNvcmRzX2hhdmVfbm90X2JlZW5fZGVsZXRlZFxuICAgICAgICAgICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdpbmZvJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSksIHQub24oXCJkYXRhdGFibGUtb24tbGF5b3V0LXVwZGF0ZWRcIiwgZnVuY3Rpb24oKSB7fSlcbiAgICAgICAgfVxuICAgIH1cbn0oKTtcbktUVXRpbC5yZWFkeShmdW5jdGlvbigpIHtcbiAgICBLVEFwcEN1cnJlbmN5TGlzdERhdGF0YWJsZS5pbml0KCk7XG5cblxuICAgIC8vVXBkYXRlXG4gICAgJChkb2N1bWVudCkub24oXCJjbGlja1wiLCBcIi5hY3Rpb25BY3RpdmVcIiwgZnVuY3Rpb24oZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHZhciBzdGF0dXQgPSAkKHRoaXMpLmF0dHIoJ2RhdGEtc3RhdHV0Jyk7XG4gICAgICAgIHZhciBpZCA9ICQodGhpcykuYXR0cignZGF0YS1pZCcpO1xuICAgICAgICB2YXIgdmFsdWUgPSBbXTtcbiAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgIHR5cGU6ICdQT1NUJyxcbiAgICAgICAgICAgIHVybDogY3VycmVudF91cmwgKyBcIi9hamF4VXBkYXRlXCIsXG4gICAgICAgICAgICBjb250ZW50VHlwZTogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDsgY2hhcnNldD1VVEYtOCcsXG4gICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgW2Nyc2Z0b2tlbl06ICQoJ21ldGFbbmFtZT1cIlgtQ1NSRi1UT0tFTlwiXScpLmF0dHIoJ2NvbnRlbnQnKSxcbiAgICAgICAgICAgICAgICB2YWx1ZTogW3tcbiAgICAgICAgICAgICAgICAgICAgaWQ6IGlkLFxuICAgICAgICAgICAgICAgICAgICBhY3RpdmU6IHN0YXR1dFxuICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGF0YVR5cGU6IFwianNvblwiLFxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzdWx0LCBzdGF0dXMsIHhocikge1xuICAgICAgICAgICAgICAgIGlmICh4aHIuc3RhdHVzID09IDIwMCkge1xuICAgICAgICAgICAgICAgICAgICAkLm5vdGlmeSh7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogKHJlc3VsdC5zdWNjZXNzLm1lc3NhZ2UpID8gX0xBTkdfLnVwZGF0ZWQgKyBcIiFcIiA6IF9MQU5HXy53YXJuaW5nICsgXCIhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAocmVzdWx0LnN1Y2Nlc3MubWVzc2FnZSkgPyByZXN1bHQuc3VjY2Vzcy5tZXNzYWdlIDogcmVzdWx0LmVycm9yLm1lc3NhZ2VcbiAgICAgICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogKHJlc3VsdC5zdWNjZXNzLm1lc3NhZ2UpID8gJ3N1Y2Nlc3MnIDogJ3dhcm5pbmcnXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAkKFwiI2t0X2FwcHNfY3VycmVuY3lfbGlzdF9kYXRhdGFibGVcIikuS1REYXRhdGFibGUoKS5yZWxvYWQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfSk7XG5cbn0pO1xuXG4kKGRvY3VtZW50KS5vbihcImNsaWNrXCIsIFwiLnVwZGF0ZUN1cnJlbmN5UmF0ZVwiLCBmdW5jdGlvbihlKSB7XG4gICAgJCh0aGlzKS5hZGRDbGFzcygna3Qtc3Bpbm5lciBrdC1zcGlubmVyLS1jZW50ZXIga3Qtc3Bpbm5lci0tc20ga3Qtc3Bpbm5lci0tbGlnaHQnKTtcbiAgICAkKCcudXBkYXRlQ3VycmVuY3lSYXRlIGknKS5yZW1vdmVDbGFzcygnbGEgbGEtcmVmcmVzaCcpO1xuXG4gICAgJC5hamF4KHtcbiAgICAgICAgdHlwZTogJ1BPU1QnLFxuICAgICAgICB1cmw6IGN1cnJlbnRfdXJsICsgXCIvdXBkYXRlQ3VycmVuY3lyYXRlXCIsXG4gICAgICAgIGNvbnRlbnRUeXBlOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkOyBjaGFyc2V0PVVURi04JyxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgW2Nyc2Z0b2tlbl06ICQoJ21ldGFbbmFtZT1cIlgtQ1NSRi1UT0tFTlwiXScpLmF0dHIoJ2NvbnRlbnQnKVxuICAgICAgICB9LFxuICAgICAgICBkYXRhVHlwZTogXCJqc29uXCIsXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3VsdCwgc3RhdHVzLCB4aHIpIHtcbiAgICAgICAgICAgIC8vJCh0aGlzKS5yZW1vdmVDbGFzcygnLmt0LXNwaW5uZXIua3Qtc3Bpbm5lci0tY2VudGVyIGt0LXNwaW5uZXItLXNtIGt0LXNwaW5uZXItLWxpZ2h0Jyk7XG4gICAgICAgICAgICAvL1N1Y2Nlc3MgTWVzc2FnZVxuICAgICAgICAgICAgaWYgKHhoci5zdGF0dXMgPT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgJC5ub3RpZnkoe1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogKHJlc3VsdC5zdWNjZXNzLm1lc3NhZ2UpID8gX0xBTkdfLnVwZGF0ZWQgKyBcIiFcIiA6IF9MQU5HXy53YXJuaW5nICsgXCIhXCIsXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IChyZXN1bHQuc3VjY2Vzcy5tZXNzYWdlKSA/IHJlc3VsdC5zdWNjZXNzLm1lc3NhZ2UgOiByZXN1bHQuZXJyb3IubWVzc2FnZVxuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogKHJlc3VsdC5zdWNjZXNzLm1lc3NhZ2UpID8gJ3N1Y2Nlc3MnIDogJ3dhcm5pbmcnXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgJChcIiNrdF9hcHBzX2N1cnJlbmN5X2xpc3RfZGF0YXRhYmxlXCIpLktURGF0YXRhYmxlKCkucmVsb2FkKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbihyZXN1bHQsIHN0YXR1cywgeGhyKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZmFmYScpO1xuICAgICAgICAgICAgJCgnLnVwZGF0ZUN1cnJlbmN5UmF0ZScpLnJlbW92ZUNsYXNzKCdrdC1zcGlubmVyJyk7XG4gICAgICAgICAgICAkKCcudXBkYXRlQ3VycmVuY3lSYXRlIGknKS5hZGRDbGFzcygnbGEgbGEtcmVmcmVzaCcpO1xuICAgICAgICB9XG4gICAgfSlcblxuICAgIC8vPGkgY2xhc3M9XCJsYSBsYS1yZWZyZXNoXCI+PC9pPlxufSk7Il0sInNvdXJjZVJvb3QiOiIifQ==