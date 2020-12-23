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
/******/ 	return __webpack_require__(__webpack_require__.s = 23);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/metronic/js/pages/custom/companies/page.list.companies.js":
/*!*****************************************************************************!*\
  !*** ./resources/metronic/js/pages/custom/companies/page.list.companies.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var KTAppUserListDatatable = function () {
  var t;
  return {
    init: function init() {
      t = $("#kt_apps_company_list_datatable").KTDatatable({
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
          field: "uuid_company",
          title: "#",
          sortable: !1,
          width: 20,
          selector: {
            "class": "kt-checkbox--solid"
          },
          textAlign: "center"
        }, {
          field: "raison_social",
          title: _LANG_.raison_social,
          width: 200,
          template: function template(t) {
            return '<div class="capitalize text-dark-75 font-weight-bolder font-size-lg mb-0"><a href="' + startUrl + '/settings-advanced/companies/edit/' + t.uuid_company + '" class="kt-user-card-v2__name text-dark-75 font-weight-bolder font-size-lg mb-0">' + t.raison_social + '</a></div>';
          }
        }, // {
        //     field: "code_company",
        //     title: _LANG_.code_company,
        //     type: "source_id",
        //     sortable: !1,
        //     template: function(t) {
        //         return '<div class="capitalize text-dark-75 font-weight-bolder font-size-lg mb-0">' + t.uuid_company + '</div>';
        //     },
        //     width: 300,
        // }, 
        {
          field: "email",
          title: _LANG_.email,
          type: "email",
          sortable: !1,
          //width: 100,
          template: function template(t) {
            return '<div class="capitalize text-dark-75 font-weight-bolder font-size-lg mb-0">' + t.email + '</div>';
          }
        }, {
          field: "adresse",
          title: _LANG_.adresse,
          width: 150,
          autoHide: !1,
          template: function template(t, e) {
            for (var a = e + 1; a > 5;) {
              a -= 3;
            }

            if (t.phone_mobile == null) t.phone_mobile = "nc";
            if (t.phone == null) t.phone = "nc";
            return '<div class="kt-user-card-v2">  <div class="kt-user-card-v2__details"> \
                        <span class="kt-user-card-v2__email"> ' + t.adresse + '</span><br/>\
                        <span class="kt-user-card-v2__email"> ' + t.code_postal + ' ' + t.ville + "</span>\
                        </div></div>";
          }
        }, {
          field: "nom_court",
          title: _LANG_.company_type,
          type: "nom_court",
          width: 100,
          template: function template(t) {
            return '<div class="capitalize text-dark-75 font-weight-bolder font-size-lg mb-0">' + t.companies_type.nom_court + '</div>';
          }
        }, {
          //$type (1 = publied, 2 = wait corrected, 3 = wait publied, 4 = brouillon)
          field: "active",
          title: _LANG_.active,
          sortable: !1,
          width: 150,
          template: function template(t) {
            if (t.active == "1") {
              var classActive = 'btn-light-success';
            } else {
              var classActive = 'btn-light-danger';
            }

            if (t.active == "1") {
              var textActive = _LANG_.active;
            } else {
              var textActive = _LANG_.desactive;
            }

            if (t.active == '1') {
              var idActive = '0';
            } else {
              var idActive = '1';
            }

            var template = '<a href="javascript:;" data-statut="' + idActive + '" data-id="' + t.uuid_company + '"  class="actionActive btn btn-bold btn-sm btn-font-sm ' + classActive + '">' + textActive + '</a>';
            return template;
          }
        }, {
          field: "company.created_at",
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
                        <a href="' + startUrl + '/settings-advanced/companies/edit/' + t.uuid_company + '" class="navi-link">\
                        <span class="navi-icon"><i class="navi-icon flaticon2-contract"></i></span>\
                        <span class="navi-text">' + _LANG_.edit + '</span>\
                        </a></li>';

            if (jQuery.inArray(t.id, restrictionsDelete) == '-1') {
              template += ' <li class="navi-item">\
                                <a href="#" data-id="' + t.uuid_company + '" class="deleterowKtdatatable navi-link">\
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
        var e = $(this).find(".navi-link-text").html(),
            st = $(this).find(".navi-link-text").data('status'),
            a = t.rows(".datatable-row-active").nodes().find('.checkbox-single > [type="checkbox"]').map(function (t, e) {
          //return $(e).val()
          return {
            uuid_company: $(e).val(),
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
                  $("#kt_apps_company_list_datatable").KTDatatable().reload();
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
              data: (_data2 = {}, _defineProperty(_data2, crsftoken, $('meta[name="X-CSRF-TOKEN"]').attr('content')), _defineProperty(_data2, "uuid_company", selected), _data2),
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
                  $("#kt_apps_company_list_datatable").KTDatatable().reload();
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
  KTAppUserListDatatable.init(); //Update

  $(document).on("click", ".actionActive", function (e) {
    var _data3;

    e.preventDefault();
    var statut = $(this).attr('data-statut');
    var uuid = $(this).attr('data-id');
    var value = [];
    $.ajax({
      type: 'POST',
      url: current_url + "/ajaxUpdate",
      contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
      data: (_data3 = {}, _defineProperty(_data3, crsftoken, $('meta[name="X-CSRF-TOKEN"]').attr('content')), _defineProperty(_data3, "value", [{
        uuid_company: uuid,
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
          $("#kt_apps_company_list_datatable").KTDatatable().reload();
        }
      }
    });
  });
});

/***/ }),

/***/ 23:
/*!***********************************************************************************!*\
  !*** multi ./resources/metronic/js/pages/custom/companies/page.list.companies.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Applications/MAMP/htdocs/spreadci4/public/admin/themes/metronic/resources/metronic/js/pages/custom/companies/page.list.companies.js */"./resources/metronic/js/pages/custom/companies/page.list.companies.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL21ldHJvbmljL2pzL3BhZ2VzL2N1c3RvbS9jb21wYW5pZXMvcGFnZS5saXN0LmNvbXBhbmllcy5qcyJdLCJuYW1lcyI6WyJLVEFwcFVzZXJMaXN0RGF0YXRhYmxlIiwidCIsImluaXQiLCIkIiwiS1REYXRhdGFibGUiLCJkYXRhIiwidHlwZSIsInNvdXJjZSIsInJlYWQiLCJ1cmwiLCJjdXJyZW50X3VybCIsIm1ldGhvZCIsInBhcmFtcyIsImNyc2Z0b2tlbiIsImF0dHIiLCJwYWdlU2l6ZSIsInNlcnZlclBhZ2luZyIsInNlcnZlckZpbHRlcmluZyIsInNlcnZlclNvcnRpbmciLCJ0cmFuc2xhdGUiLCJyZWNvcmRzIiwicHJvY2Vzc2luZyIsIl9MQU5HXyIsImxvYWRpbmdfd2FpdCIsIm5vUmVjb3JkcyIsIm5vX3JlY29yZF9mb3VuZCIsInRvb2xiYXIiLCJwYWdpbmF0aW9uIiwiaXRlbXMiLCJmaXJzdCIsInByZXYiLCJwcmV2aW91cyIsIm5leHQiLCJsYXN0IiwibW9yZSIsIm1vcmVfcGFnZXMiLCJpbnB1dCIsInBhZ2VfbnVtYmVyIiwic2VsZWN0Iiwic2VsZWN0X3BhZ2Vfc2l6ZSIsImFsbCIsImluZm8iLCJzaG93aW5nIiwibGF5b3V0Iiwic2Nyb2xsIiwiZm9vdGVyIiwic29ydGFibGUiLCJzZWFyY2giLCJkZWxheSIsInJvd3MiLCJiZWZvcmVUZW1wbGF0ZSIsInJvdyIsImluZGV4IiwiYWN0aXZlIiwiYWRkQ2xhc3MiLCJjb2x1bW5zIiwiZmllbGQiLCJ0aXRsZSIsIndpZHRoIiwic2VsZWN0b3IiLCJ0ZXh0QWxpZ24iLCJyYWlzb25fc29jaWFsIiwidGVtcGxhdGUiLCJzdGFydFVybCIsInV1aWRfY29tcGFueSIsImVtYWlsIiwiYWRyZXNzZSIsImF1dG9IaWRlIiwiZSIsImEiLCJwaG9uZV9tb2JpbGUiLCJwaG9uZSIsImNvZGVfcG9zdGFsIiwidmlsbGUiLCJjb21wYW55X3R5cGUiLCJjb21wYW5pZXNfdHlwZSIsIm5vbV9jb3VydCIsImNsYXNzQWN0aXZlIiwidGV4dEFjdGl2ZSIsImRlc2FjdGl2ZSIsImlkQWN0aXZlIiwiZGF0ZV9jcmVhdGUiLCJmb3JtYXQiLCJkYXRlX2NyZWF0ZV9mb3JtYXQiLCJvdmVyZmxvdyIsInJlc3RyaWN0aW9uc0RlbGV0ZSIsInJlc3RyaWN0aW9uSXRlbSIsInNwbGl0IiwiZWRpdCIsImpRdWVyeSIsImluQXJyYXkiLCJpZCIsIm9uIiwidmFsIiwidG9Mb3dlckNhc2UiLCJub2RlcyIsImxlbmd0aCIsImh0bWwiLCJyZW1vdmVDbGFzcyIsIktURGlhbG9nIiwicGxhY2VtZW50IiwibWVzc2FnZSIsImxvYWRpbmciLCJzaG93Iiwic2V0VGltZW91dCIsImhpZGUiLCJuIiwiZmluZCIsIm1hcCIsInMiLCJkb2N1bWVudCIsImNyZWF0ZURvY3VtZW50RnJhZ21lbnQiLCJsIiwiaSIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJpbm5lckhUTUwiLCJzZWxlY3RlZF9yb3dfaWQiLCJhcHBlbmRDaGlsZCIsInRhcmdldCIsImFwcGVuZCIsImVtcHR5IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInN0Iiwic3dhbCIsImZpcmUiLCJidXR0b25zU3R5bGluZyIsImFyZV95b3Vfc3VyZV91cGRhdGUiLCJzZWxlY3RlZF9yZWNvcmRzX3N0YXR1c190byIsImNvbmZpcm1CdXR0b25UZXh0IiwieWVzX3VwZGF0ZSIsImNvbmZpcm1CdXR0b25DbGFzcyIsInNob3dDYW5jZWxCdXR0b24iLCJjYW5jZWxCdXR0b25UZXh0Iiwibm9fY2FuY2VsIiwiY2FuY2VsQnV0dG9uQ2xhc3MiLCJ0aGVuIiwidmFsdWUiLCJhamF4IiwiZ2V0IiwiZGF0YVR5cGUiLCJzdWNjZXNzIiwicmVzdWx0Iiwic3RhdHVzIiwieGhyIiwibm90aWZ5IiwidXBkYXRlZCIsIndhcm5pbmciLCJlcnJvciIsInJlbG9hZCIsImNhbmNlbGxlZCIsInlvdXJfc2VsZXRlZF9yZWNvcmRzX3N0YXR1c2VzX2hhdmVfbm90X2JlZW5fdXBkYXRlZCIsInRleHQiLCJhcmVfeW91X3N1cmVfZGVsZXRlIiwic2VsZWN0ZWRfcmVjb3JkcyIsInllc19kZWxldGUiLCJzZWxlY3RlZCIsImt0X3N1YmhlYWRlcl90b3RhbCIsImRlbGV0ZWQiLCJ5b3VyX3NlbGVjdGVkX3JlY29yZHNfaGF2ZV9ub3RfYmVlbl9kZWxldGVkIiwiS1RVdGlsIiwicmVhZHkiLCJzdGF0dXQiLCJ1dWlkIiwiY29udGVudFR5cGUiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRmE7Ozs7QUFDYixJQUFJQSxzQkFBc0IsR0FBRyxZQUFXO0FBQ3BDLE1BQUlDLENBQUo7QUFDQSxTQUFPO0FBQ0hDLFFBQUksRUFBRSxnQkFBVztBQUNiRCxPQUFDLEdBQUdFLENBQUMsQ0FBQyxpQ0FBRCxDQUFELENBQXFDQyxXQUFyQyxDQUFpRDtBQUNq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Q0FBQywyQkFBRCxDQUFELENBQStCVyxJQUEvQixDQUFvQyxTQUFwQyxDQURiLG9DQUVPLENBQUM7QUFDSmtELG9CQUFZLEVBQUVvRyxJQURWO0FBRUovRyxjQUFNLEVBQUU4RztBQUZKLE9BQUQsQ0FGUCxVQUpEO0FBV0h0QixjQUFRLEVBQUUsTUFYUDtBQVlIQyxhQUFPLEVBQUUsaUJBQVNDLE1BQVQsRUFBaUJDLE1BQWpCLEVBQXlCQyxHQUF6QixFQUE4QjtBQUNuQyxZQUFJQSxHQUFHLENBQUNELE1BQUosSUFBYyxHQUFsQixFQUF1QjtBQUNuQjdJLFdBQUMsQ0FBQytJLE1BQUYsQ0FBUztBQUNMekYsaUJBQUssRUFBR3NGLE1BQU0sQ0FBQ0QsT0FBUCxDQUFlekMsT0FBaEIsR0FBMkIvRSxNQUFNLENBQUM2SCxPQUFQLEdBQWlCLEdBQTVDLEdBQWtEN0gsTUFBTSxDQUFDOEgsT0FBUCxHQUFpQixHQURyRTtBQUVML0MsbUJBQU8sRUFBRzBDLE1BQU0sQ0FBQ0QsT0FBUCxDQUFlekMsT0FBaEIsR0FBMkIwQyxNQUFNLENBQUNELE9BQVAsQ0FBZXpDLE9BQTFDLEdBQW9EMEMsTUFBTSxDQUFDTSxLQUFQLENBQWFoRDtBQUZyRSxXQUFULEVBR0c7QUFDQy9GLGdCQUFJLEVBQUd5SSxNQUFNLENBQUNELE9BQVAsQ0FBZXpDLE9BQWhCLEdBQTJCLFNBQTNCLEdBQXVDO0FBRDlDLFdBSEg7QUFNQWxHLFdBQUMsQ0FBQyxpQ0FBRCxDQUFELENBQXFDQyxXQUFyQyxHQUFtRGtKLE1BQW5EO0FBQ0g7QUFDSjtBQXRCRSxLQUFQO0FBd0JILEdBN0JEO0FBK0JILENBbkNELEUiLCJmaWxlIjoiL2RldmVsb3BtZW50L2pzL3BhZ2VzL2N1c3RvbS9jb21wYW5pZXMvcGFnZS5saXN0LmNvbXBhbmllcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMjMpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBLVEFwcFVzZXJMaXN0RGF0YXRhYmxlID0gZnVuY3Rpb24oKSB7XHJcbiAgICB2YXIgdDtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgaW5pdDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHQgPSAkKFwiI2t0X2FwcHNfY29tcGFueV9saXN0X2RhdGF0YWJsZVwiKS5LVERhdGF0YWJsZSh7XHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJyZW1vdGVcIixcclxuICAgICAgICAgICAgICAgICAgICBzb3VyY2U6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVhZDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBjdXJyZW50X3VybCArIFwiL2xpc3RcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbY3JzZnRva2VuXTogJCgnbWV0YVtuYW1lPVwiWC1DU1JGLVRPS0VOXCJdJykuYXR0cignY29udGVudCcpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBwYWdlU2l6ZTogMTAsXHJcbiAgICAgICAgICAgICAgICAgICAgc2VydmVyUGFnaW5nOiAhMCxcclxuICAgICAgICAgICAgICAgICAgICBzZXJ2ZXJGaWx0ZXJpbmc6ICEwLFxyXG4gICAgICAgICAgICAgICAgICAgIHNlcnZlclNvcnRpbmc6ICEwXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgdHJhbnNsYXRlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVjb3Jkczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9jZXNzaW5nOiBfTEFOR18ubG9hZGluZ193YWl0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBub1JlY29yZHM6IF9MQU5HXy5ub19yZWNvcmRfZm91bmQsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB0b29sYmFyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2luYXRpb246IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaXJzdDogX0xBTkdfLmZpcnN0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmV2OiBfTEFOR18ucHJldmlvdXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5leHQ6IF9MQU5HXy5uZXh0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXN0OiBfTEFOR18ubGFzdCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9yZTogX0xBTkdfLm1vcmVfcGFnZXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBfTEFOR18ucGFnZV9udW1iZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdDogX0xBTkdfLnNlbGVjdF9wYWdlX3NpemUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsbDogX0xBTkdfLmFsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZm86IF9MQU5HXy5zaG93aW5nICsgJyB7e3N0YXJ0fX0gLSB7e2VuZH19IG9mIHt7dG90YWx9fScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgbGF5b3V0OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2Nyb2xsOiAhMSxcclxuICAgICAgICAgICAgICAgICAgICBmb290ZXI6ICExXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgc29ydGFibGU6ICEwLFxyXG4gICAgICAgICAgICAgICAgcGFnaW5hdGlvbjogITAsXHJcbiAgICAgICAgICAgICAgICBzZWFyY2g6IHtcclxuICAgICAgICAgICAgICAgICAgICBpbnB1dDogJChcIiNrdF9zdWJoZWFkZXJfc2VhcmNoX2Zvcm1cIiksXHJcbiAgICAgICAgICAgICAgICAgICAgZGVsYXk6IDQwMFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHJvd3M6IHtcclxuICAgICAgICAgICAgICAgICAgICBiZWZvcmVUZW1wbGF0ZTogZnVuY3Rpb24ocm93LCBkYXRhLCBpbmRleCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5hY3RpdmUgPT0gJzAnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3cuYWRkQ2xhc3MoJ25vdGFjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGNvbHVtbnM6IFt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkOiBcInV1aWRfY29tcGFueVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCIjXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNvcnRhYmxlOiAhMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3Rvcjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IFwia3QtY2hlY2tib3gtLXNvbGlkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkOiBcInJhaXNvbl9zb2NpYWxcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IF9MQU5HXy5yYWlzb25fc29jaWFsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZTogZnVuY3Rpb24odCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICc8ZGl2IGNsYXNzPVwiY2FwaXRhbGl6ZSB0ZXh0LWRhcmstNzUgZm9udC13ZWlnaHQtYm9sZGVyIGZvbnQtc2l6ZS1sZyBtYi0wXCI+PGEgaHJlZj1cIicgKyBzdGFydFVybCArICcvc2V0dGluZ3MtYWR2YW5jZWQvY29tcGFuaWVzL2VkaXQvJyArIHQudXVpZF9jb21wYW55ICsgJ1wiIGNsYXNzPVwia3QtdXNlci1jYXJkLXYyX19uYW1lIHRleHQtZGFyay03NSBmb250LXdlaWdodC1ib2xkZXIgZm9udC1zaXplLWxnIG1iLTBcIj4nICsgdC5yYWlzb25fc29jaWFsICsgJzwvYT48L2Rpdj4nO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgLy8ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBmaWVsZDogXCJjb2RlX2NvbXBhbnlcIixcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgdGl0bGU6IF9MQU5HXy5jb2RlX2NvbXBhbnksXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIHR5cGU6IFwic291cmNlX2lkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIHNvcnRhYmxlOiAhMSxcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgdGVtcGxhdGU6IGZ1bmN0aW9uKHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIHJldHVybiAnPGRpdiBjbGFzcz1cImNhcGl0YWxpemUgdGV4dC1kYXJrLTc1IGZvbnQtd2VpZ2h0LWJvbGRlciBmb250LXNpemUtbGcgbWItMFwiPicgKyB0LnV1aWRfY29tcGFueSArICc8L2Rpdj4nO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICB3aWR0aDogMzAwLFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyB9LCBcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkOiBcImVtYWlsXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBfTEFOR18uZW1haWwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiZW1haWxcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgc29ydGFibGU6ICExLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL3dpZHRoOiAxMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlOiBmdW5jdGlvbih0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJzxkaXYgY2xhc3M9XCJjYXBpdGFsaXplIHRleHQtZGFyay03NSBmb250LXdlaWdodC1ib2xkZXIgZm9udC1zaXplLWxnIG1iLTBcIj4nICsgdC5lbWFpbCArICc8L2Rpdj4nO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQ6IFwiYWRyZXNzZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogX0xBTkdfLmFkcmVzc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxNTAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9IaWRlOiAhMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGU6IGZ1bmN0aW9uKHQsIGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGEgPSBlICsgMTsgYSA+IDU7KSBhIC09IDM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodC5waG9uZV9tb2JpbGUgPT0gbnVsbCkgdC5waG9uZV9tb2JpbGUgPSBcIm5jXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodC5waG9uZSA9PSBudWxsKSB0LnBob25lID0gXCJuY1wiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICc8ZGl2IGNsYXNzPVwia3QtdXNlci1jYXJkLXYyXCI+ICA8ZGl2IGNsYXNzPVwia3QtdXNlci1jYXJkLXYyX19kZXRhaWxzXCI+IFxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwia3QtdXNlci1jYXJkLXYyX19lbWFpbFwiPiAnICsgdC5hZHJlc3NlICsgJzwvc3Bhbj48YnIvPlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwia3QtdXNlci1jYXJkLXYyX19lbWFpbFwiPiAnICsgdC5jb2RlX3Bvc3RhbCArICcgJyArIHQudmlsbGUgKyBcIjwvc3Bhbj5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj48L2Rpdj5cIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkOiBcIm5vbV9jb3VydFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogX0xBTkdfLmNvbXBhbnlfdHlwZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJub21fY291cnRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGU6IGZ1bmN0aW9uKHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnPGRpdiBjbGFzcz1cImNhcGl0YWxpemUgdGV4dC1kYXJrLTc1IGZvbnQtd2VpZ2h0LWJvbGRlciBmb250LXNpemUtbGcgbWItMFwiPicgKyB0LmNvbXBhbmllc190eXBlLm5vbV9jb3VydCArICc8L2Rpdj4nO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8kdHlwZSAoMSA9IHB1YmxpZWQsIDIgPSB3YWl0IGNvcnJlY3RlZCwgMyA9IHdhaXQgcHVibGllZCwgNCA9IGJyb3VpbGxvbilcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQ6IFwiYWN0aXZlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBfTEFOR18uYWN0aXZlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzb3J0YWJsZTogITEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxNTAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlOiBmdW5jdGlvbih0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodC5hY3RpdmUgPT0gXCIxXCIpIHsgdmFyIGNsYXNzQWN0aXZlID0gJ2J0bi1saWdodC1zdWNjZXNzJzsgfSBlbHNlIHsgdmFyIGNsYXNzQWN0aXZlID0gJ2J0bi1saWdodC1kYW5nZXInOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodC5hY3RpdmUgPT0gXCIxXCIpIHsgdmFyIHRleHRBY3RpdmUgPSBfTEFOR18uYWN0aXZlOyB9IGVsc2UgeyB2YXIgdGV4dEFjdGl2ZSA9IF9MQU5HXy5kZXNhY3RpdmU7IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0LmFjdGl2ZSA9PSAnMScpIHsgdmFyIGlkQWN0aXZlID0gJzAnOyB9IGVsc2UgeyB2YXIgaWRBY3RpdmUgPSAnMSc7IH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdGVtcGxhdGUgPSAnPGEgaHJlZj1cImphdmFzY3JpcHQ6O1wiIGRhdGEtc3RhdHV0PVwiJyArIGlkQWN0aXZlICsgJ1wiIGRhdGEtaWQ9XCInICsgdC51dWlkX2NvbXBhbnkgKyAnXCIgIGNsYXNzPVwiYWN0aW9uQWN0aXZlIGJ0biBidG4tYm9sZCBidG4tc20gYnRuLWZvbnQtc20gJyArIGNsYXNzQWN0aXZlICsgJ1wiPicgKyB0ZXh0QWN0aXZlICsgJzwvYT4nO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRlbXBsYXRlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkOiBcImNvbXBhbnkuY3JlYXRlZF9hdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogX0xBTkdfLmRhdGVfY3JlYXRlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImRhdGVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy93aWR0aDogMTAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtYXQ6IFwiTU0vREQvWVlZWVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZTogZnVuY3Rpb24odCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICc8ZGl2IGNsYXNzPVwiZm9udC13ZWlnaHQtYm9sZGVyIHRleHQtcHJpbWFyeSBtYi0wXCI+JyArIHQuZGF0ZV9jcmVhdGVfZm9ybWF0ICsgJzwvZGl2Pic7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkOiBcIkFjdGlvbnNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDgwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJBY3Rpb25zXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNvcnRhYmxlOiAhMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXV0b0hpZGU6ICExLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogXCJ2aXNpYmxlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlOiBmdW5jdGlvbih0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmVzdHJpY3Rpb25zRGVsZXRlID0gcmVzdHJpY3Rpb25JdGVtLnNwbGl0KCd8Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdGVtcGxhdGUgPSAnPGRpdiBjbGFzcz1cImRyb3Bkb3duXCI+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImphdmFzY3JpcHQ6O1wiIGNsYXNzPVwiYnRuIGJ0bi1zbSBidG4tY2xlYW4gYnRuLWljb24gYnRuLWljb24tbWRcIiBkYXRhLXRvZ2dsZT1cImRyb3Bkb3duXCI+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmbGF0aWNvbi1tb3JlLTFcIj48L2k+PC9hPlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkcm9wZG93bi1tZW51IGRyb3Bkb3duLW1lbnUtcmlnaHRcIj5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJuYXZpIGZsZXgtY29sdW1uIG5hdmktaG92ZXIgcHktMlwiPlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cIm5hdmktaXRlbVwiPlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCInICsgc3RhcnRVcmwgKyAnL3NldHRpbmdzLWFkdmFuY2VkL2NvbXBhbmllcy9lZGl0LycgKyB0LnV1aWRfY29tcGFueSArICdcIiBjbGFzcz1cIm5hdmktbGlua1wiPlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibmF2aS1pY29uXCI+PGkgY2xhc3M9XCJuYXZpLWljb24gZmxhdGljb24yLWNvbnRyYWN0XCI+PC9pPjwvc3Bhbj5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm5hdmktdGV4dFwiPicgKyBfTEFOR18uZWRpdCArICc8L3NwYW4+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPjwvbGk+JztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoalF1ZXJ5LmluQXJyYXkodC5pZCwgcmVzdHJpY3Rpb25zRGVsZXRlKSA9PSAnLTEnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGUgKz0gJyA8bGkgY2xhc3M9XCJuYXZpLWl0ZW1cIj5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgZGF0YS1pZD1cIicgKyB0LnV1aWRfY29tcGFueSArICdcIiBjbGFzcz1cImRlbGV0ZXJvd0t0ZGF0YXRhYmxlIG5hdmktbGlua1wiPlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJuYXZpLWljb25cIj48aSBjbGFzcz1cImZsYXRpY29uMi10cmFzaFwiPjwvaT48L3NwYW4+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm5hdmktdGV4dFwiPicgKyBfTEFOR18uZGVsZXRlICsgJzwvc3Bhbj5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+JztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZSArPSAnIDwvdWw+PC9kaXY+PC9kaXY+JztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0ZW1wbGF0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSksICQoXCIja3RfZm9ybV9zdGF0dXNcIikub24oXCJjaGFuZ2VcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICB0LnNlYXJjaCgkKHRoaXMpLnZhbCgpLnRvTG93ZXJDYXNlKCksIFwiU3RhdHVzXCIpXHJcbiAgICAgICAgICAgIH0pLCB0Lm9uKFwiZGF0YXRhYmxlLW9uLWNoZWNrIGRhdGF0YWJsZS1vbi11bmNoZWNrIGRhdGF0YWJsZS1vbi1sYXlvdXQtdXBkYXRlZFwiLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgYSA9IHQucm93cyhcIi5kYXRhdGFibGUtcm93LWFjdGl2ZVwiKS5ub2RlcygpLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgICQoXCIja3Rfc3ViaGVhZGVyX2dyb3VwX3NlbGVjdGVkX3Jvd3NcIikuaHRtbChhKSwgYSA+IDAgPyAoJChcIiNrdF9zdWJoZWFkZXJfc2VhcmNoXCIpLmFkZENsYXNzKFwiaGlkZGVuXCIpLCAkKFwiI2t0X3N1YmhlYWRlcl9ncm91cF9hY3Rpb25zXCIpLnJlbW92ZUNsYXNzKFwiaGlkZGVuXCIpKSA6ICgkKFwiI2t0X3N1YmhlYWRlcl9zZWFyY2hcIikucmVtb3ZlQ2xhc3MoXCJoaWRkZW5cIiksICQoXCIja3Rfc3ViaGVhZGVyX2dyb3VwX2FjdGlvbnNcIikuYWRkQ2xhc3MoXCJoaWRkZW5cIikpXHJcbiAgICAgICAgICAgIH0pLCAkKFwiI2t0X2RhdGF0YWJsZV9yZWNvcmRzX2ZldGNoX21vZGFsXCIpLm9uKFwic2hvdy5icy5tb2RhbFwiLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgYSA9IG5ldyBLVERpYWxvZyh7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJsb2FkZXJcIixcclxuICAgICAgICAgICAgICAgICAgICBwbGFjZW1lbnQ6IFwidG9wIGNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IF9MQU5HXy5sb2FkaW5nICsgXCIuLi5cIlxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBhLnNob3coKSwgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICBhLmhpZGUoKVxyXG4gICAgICAgICAgICAgICAgfSwgMWUzKTtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIG4gPSB0LnJvd3MoXCIuZGF0YXRhYmxlLXJvdy1hY3RpdmVcIikubm9kZXMoKS5maW5kKCcuY2hlY2tib3gtc2luZ2xlID4gW3R5cGU9XCJjaGVja2JveFwiXScpLm1hcChmdW5jdGlvbih0LCBlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAkKGUpLnZhbCgpXHJcbiAgICAgICAgICAgICAgICAgICAgfSksIHMgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCksIGwgPSAwOyBsIDwgbi5sZW5ndGg7IGwrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGkuc2V0QXR0cmlidXRlKFwiZGF0YS1pZFwiLCBuW2xdKSwgaS5pbm5lckhUTUwgPSBfTEFOR18uc2VsZWN0ZWRfcm93X2lkICsgXCI6IFwiICsgbltsXSwgcy5hcHBlbmRDaGlsZChpKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJChlLnRhcmdldCkuZmluZChcIiNrdF9hcHBzX3VzZXJfZmV0Y2hfcmVjb3Jkc19zZWxlY3RlZFwiKS5hcHBlbmQocylcclxuICAgICAgICAgICAgfSkub24oXCJoaWRlLmJzLm1vZGFsXCIsIGZ1bmN0aW9uKHQpIHtcclxuICAgICAgICAgICAgICAgICQodC50YXJnZXQpLmZpbmQoXCIja3RfYXBwc191c2VyX2ZldGNoX3JlY29yZHNfc2VsZWN0ZWRcIikuZW1wdHkoKVxyXG4gICAgICAgICAgICB9KSwgJChcIiNrdF9zdWJoZWFkZXJfZ3JvdXBfYWN0aW9uc19zdGF0dXNfY2hhbmdlXCIpLm9uKFwiY2xpY2tcIiwgXCJbZGF0YS10b2dnbGU9J3N0YXR1cy1jaGFuZ2UnXVwiLCBmdW5jdGlvbihldmVudCkge1xyXG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIHZhciBlID0gJCh0aGlzKS5maW5kKFwiLm5hdmktbGluay10ZXh0XCIpLmh0bWwoKSxcclxuICAgICAgICAgICAgICAgICAgICBzdCA9ICQodGhpcykuZmluZChcIi5uYXZpLWxpbmstdGV4dFwiKS5kYXRhKCdzdGF0dXMnKSxcclxuICAgICAgICAgICAgICAgICAgICBhID0gdC5yb3dzKFwiLmRhdGF0YWJsZS1yb3ctYWN0aXZlXCIpLm5vZGVzKCkuZmluZCgnLmNoZWNrYm94LXNpbmdsZSA+IFt0eXBlPVwiY2hlY2tib3hcIl0nKS5tYXAoZnVuY3Rpb24odCwgZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL3JldHVybiAkKGUpLnZhbCgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7IHV1aWRfY29tcGFueTogJChlKS52YWwoKSwgYWN0aXZlOiBzdCB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBhLmxlbmd0aCA+IDAgJiYgc3dhbC5maXJlKHtcclxuICAgICAgICAgICAgICAgICAgICBidXR0b25zU3R5bGluZzogITEsXHJcbiAgICAgICAgICAgICAgICAgICAgaHRtbDogX0xBTkdfLmFyZV95b3Vfc3VyZV91cGRhdGUgKyBcIiBcIiArIGEubGVuZ3RoICsgXCIgXCIgKyBfTEFOR18uc2VsZWN0ZWRfcmVjb3Jkc19zdGF0dXNfdG8gKyBcIiBcIiArIGUgKyBcIiA/XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJwcmltYXJ5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6IF9MQU5HXy55ZXNfdXBkYXRlICsgXCIhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvbkNsYXNzOiBcImJ0biBidG4tc20gYnRuLWJvbGQgYnRuLWRhcmtcIixcclxuICAgICAgICAgICAgICAgICAgICBzaG93Q2FuY2VsQnV0dG9uOiAhMCxcclxuICAgICAgICAgICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBfTEFOR18ubm9fY2FuY2VsLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhbmNlbEJ1dHRvbkNsYXNzOiBcImJ0biBidG4tc20gYnRuLWJvbGQgYnRuLWRlZmF1bHRcIlxyXG4gICAgICAgICAgICAgICAgfSkudGhlbihmdW5jdGlvbih0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQudmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybDogY3VycmVudF91cmwgKyBcIi9hamF4VXBkYXRlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2Nyc2Z0b2tlbl06ICQoJ21ldGFbbmFtZT1cIlgtQ1NSRi1UT0tFTlwiXScpLmF0dHIoJ2NvbnRlbnQnKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogYS5nZXQoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFUeXBlOiBcImpzb25cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3VsdCwgc3RhdHVzLCB4aHIpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHhoci5zdGF0dXMgPT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQubm90aWZ5KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAocmVzdWx0LnN1Y2Nlc3MubWVzc2FnZSkgPyBfTEFOR18udXBkYXRlZCArIFwiIVwiIDogX0xBTkdfLndhcm5pbmcgKyBcIiFcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IChyZXN1bHQuc3VjY2Vzcy5tZXNzYWdlKSA/IHJlc3VsdC5zdWNjZXNzLm1lc3NhZ2UgOiByZXN1bHQuZXJyb3IubWVzc2FnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAocmVzdWx0LnN1Y2Nlc3MubWVzc2FnZSkgPyAnc3VjY2VzcycgOiAnd2FybmluZydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoXCIja3RfYXBwc19jb21wYW55X2xpc3RfZGF0YXRhYmxlXCIpLktURGF0YXRhYmxlKCkucmVsb2FkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQubm90aWZ5KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBfTEFOR18uY2FuY2VsbGVkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogX0xBTkdfLnlvdXJfc2VsZXRlZF9yZWNvcmRzX3N0YXR1c2VzX2hhdmVfbm90X2JlZW5fdXBkYXRlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAncHJpbWFyeSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSksICQoXCIja3Rfc3ViaGVhZGVyX2dyb3VwX2FjdGlvbnNfZGVsZXRlX2FsbFwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGUgPSB0LnJvd3MoXCIuZGF0YXRhYmxlLXJvdy1hY3RpdmVcIikubm9kZXMoKS5maW5kKCcuY2hlY2tib3gtc2luZ2xlID4gW3R5cGU9XCJjaGVja2JveFwiXScpLm1hcChmdW5jdGlvbih0LCBlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICQoZSkudmFsKClcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgZS5sZW5ndGggPiAwICYmIHN3YWwuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uc1N0eWxpbmc6ICExLFxyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IF9MQU5HXy5hcmVfeW91X3N1cmVfZGVsZXRlICsgXCIgXCIgKyBlLmxlbmd0aCArIFwiIFwiICsgX0xBTkdfLnNlbGVjdGVkX3JlY29yZHMgKyBcIiA/XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJlcnJvclwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiBfTEFOR18ueWVzX2RlbGV0ZSArICcgIScsXHJcbiAgICAgICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvbkNsYXNzOiBcImJ0biBidG4tc20gYnRuLWJvbGQgYnRuLWRhbmdlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHNob3dDYW5jZWxCdXR0b246ICEwLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IF9MQU5HXy5ub19jYW5jZWwsXHJcbiAgICAgICAgICAgICAgICAgICAgY2FuY2VsQnV0dG9uQ2xhc3M6IFwiYnRuIGJ0bi1zbSBidG4tYm9sZCBidG4tZGFya1wiXHJcbiAgICAgICAgICAgICAgICB9KS50aGVuKGZ1bmN0aW9uKHQpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodC52YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgc2VsZWN0ZWQgPSBlLmdldCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ0RFTEVURScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6IGN1cnJlbnRfdXJsICsgXCIvZGVsZXRlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2Nyc2Z0b2tlbl06ICQoJ21ldGFbbmFtZT1cIlgtQ1NSRi1UT0tFTlwiXScpLmF0dHIoJ2NvbnRlbnQnKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1dWlkX2NvbXBhbnk6IHNlbGVjdGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVR5cGU6IFwianNvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzdWx0LCBzdGF0dXMsIHhocikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vU3VjY2VzcyBNZXNzYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHhoci5zdGF0dXMgPT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBrdF9zdWJoZWFkZXJfdG90YWwgPSAkKCcua3Rfc3ViaGVhZGVyX3RvdGFsJykudGV4dCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcua3Rfc3ViaGVhZGVyX3RvdGFsJykuaHRtbCgoa3Rfc3ViaGVhZGVyX3RvdGFsIC0gc2VsZWN0ZWQubGVuZ3RoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQubm90aWZ5KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAocmVzdWx0LnN1Y2Nlc3MubWVzc2FnZSkgPyBfTEFOR18uZGVsZXRlZCArIFwiIVwiIDogX0xBTkdfLndhcm5pbmcgKyBcIiFcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IChyZXN1bHQuc3VjY2Vzcy5tZXNzYWdlKSA/IHJlc3VsdC5zdWNjZXNzLm1lc3NhZ2UgOiByZXN1bHQuZXJyb3IubWVzc2FnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAocmVzdWx0LnN1Y2Nlc3MubWVzc2FnZSkgPyAnc3VjY2VzcycgOiAnd2FybmluZydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoXCIja3RfYXBwc19jb21wYW55X2xpc3RfZGF0YXRhYmxlXCIpLktURGF0YXRhYmxlKCkucmVsb2FkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQubm90aWZ5KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBfTEFOR18uZGVsZXRlZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IF9MQU5HXy55b3VyX3NlbGVjdGVkX3JlY29yZHNfaGF2ZV9ub3RfYmVlbl9kZWxldGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdpbmZvJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9KSwgdC5vbihcImRhdGF0YWJsZS1vbi1sYXlvdXQtdXBkYXRlZFwiLCBmdW5jdGlvbigpIHt9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSgpO1xyXG5LVFV0aWwucmVhZHkoZnVuY3Rpb24oKSB7XHJcbiAgICBLVEFwcFVzZXJMaXN0RGF0YXRhYmxlLmluaXQoKTtcclxuXHJcbiAgICAvL1VwZGF0ZVxyXG4gICAgJChkb2N1bWVudCkub24oXCJjbGlja1wiLCBcIi5hY3Rpb25BY3RpdmVcIiwgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB2YXIgc3RhdHV0ID0gJCh0aGlzKS5hdHRyKCdkYXRhLXN0YXR1dCcpO1xyXG4gICAgICAgIHZhciB1dWlkID0gJCh0aGlzKS5hdHRyKCdkYXRhLWlkJyk7XHJcbiAgICAgICAgdmFyIHZhbHVlID0gW107XHJcbiAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgdHlwZTogJ1BPU1QnLFxyXG4gICAgICAgICAgICB1cmw6IGN1cnJlbnRfdXJsICsgXCIvYWpheFVwZGF0ZVwiLFxyXG4gICAgICAgICAgICBjb250ZW50VHlwZTogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDsgY2hhcnNldD1VVEYtOCcsXHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgIFtjcnNmdG9rZW5dOiAkKCdtZXRhW25hbWU9XCJYLUNTUkYtVE9LRU5cIl0nKS5hdHRyKCdjb250ZW50JyksXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogW3tcclxuICAgICAgICAgICAgICAgICAgICB1dWlkX2NvbXBhbnk6IHV1aWQsXHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlOiBzdGF0dXRcclxuICAgICAgICAgICAgICAgIH1dXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGRhdGFUeXBlOiBcImpzb25cIixcclxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzdWx0LCBzdGF0dXMsIHhocikge1xyXG4gICAgICAgICAgICAgICAgaWYgKHhoci5zdGF0dXMgPT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJC5ub3RpZnkoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogKHJlc3VsdC5zdWNjZXNzLm1lc3NhZ2UpID8gX0xBTkdfLnVwZGF0ZWQgKyBcIiFcIiA6IF9MQU5HXy53YXJuaW5nICsgXCIhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IChyZXN1bHQuc3VjY2Vzcy5tZXNzYWdlKSA/IHJlc3VsdC5zdWNjZXNzLm1lc3NhZ2UgOiByZXN1bHQuZXJyb3IubWVzc2FnZVxyXG4gICAgICAgICAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogKHJlc3VsdC5zdWNjZXNzLm1lc3NhZ2UpID8gJ3N1Y2Nlc3MnIDogJ3dhcm5pbmcnXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgJChcIiNrdF9hcHBzX2NvbXBhbnlfbGlzdF9kYXRhdGFibGVcIikuS1REYXRhdGFibGUoKS5yZWxvYWQoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9KTtcclxuXHJcbn0pOyJdLCJzb3VyY2VSb290IjoiIn0=