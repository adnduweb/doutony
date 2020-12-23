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
/******/ 	return __webpack_require__(__webpack_require__.s = 45);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/metronic/js/pages/custom/permissions/page.list.permissions.js":
/*!*********************************************************************************!*\
  !*** ./resources/metronic/js/pages/custom/permissions/page.list.permissions.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var KTAppUserListDatatable = function () {
  var t;
  return {
    init: function init() {
      t = $("#kt_apps_permissions_list_datatable").KTDatatable({
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
            return '<a href="' + startUrl + '/settings-advanced/permissions/edit/' + t.id + '" class="capitalize text-dark-75 font-weight-bolder font-size-lg mb-0"> ' + t.name + '</a>';
          }
        }, {
          field: "description",
          title: _LANG_.description,
          type: "description" //width: 100,

        }, {
          field: "Actions",
          width: 80,
          title: "Actions",
          sortable: !1,
          autoHide: !1,
          overflow: "visible",
          template: function template(t) {
            //return '\t\t\t\t\t\t\t<div class="dropdown">\t\t\t\t\t\t\t\t<a href="javascript:;" class="btn btn-sm btn-clean btn-icon btn-icon-md" data-toggle="dropdown">\t\t\t\t\t\t\t\t\t<i class="flaticon-more-1"></i>\t\t\t\t\t\t\t\t</a>\t\t\t\t\t\t\t\t<div class="dropdown-menu dropdown-menu-right">\t\t\t\t\t\t\t\t\t<ul class="kt-nav">\t\t\t\t\t\t\t\t\t\t<li class="kt-nav__item">\t\t\t\t\t\t\t\t\t\t\t<a href="#" data-controller="roles" data-action="actionView" data-value="' + t.id + '" class="actioncontroller kt-nav__link">\t\t\t\t\t\t\t\t\t\t\t\t<i class="kt-nav__link-icon flaticon2-expand"></i>\t\t\t\t\t\t\t\t\t\t\t\t<span class="kt-nav__link-text">' + _LANG_.view + '</span>\t\t\t\t\t\t\t\t\t\t\t</a>\t\t\t\t\t\t\t\t\t\t</li>\t\t\t\t\t\t\t\t\t\t<li class="kt-nav__item">\t\t\t\t\t\t\t\t\t\t\t<a href="' + basePath + segementAdmin + '/roles/detail/' + t.id + '" class="kt-nav__link">\t\t\t\t\t\t\t\t\t\t\t\t<i class="kt-nav__link-icon flaticon2-contract"></i>\t\t\t\t\t\t\t\t\t\t\t\t<span class="kt-nav__link-text">' + _LANG_.edit + '</span>\t\t\t\t\t\t\t\t\t\t\t</a>\t\t\t\t\t\t\t\t\t\t</li>\t\t\t\t\t\t\t\t\t\t<li class="kt-nav__item">\t\t\t\t\t\t\t\t\t\t\t<a href="#" data-id="' + t.id + '" class="deleterowKtdatatable kt-nav__link">\t\t\t\t\t\t\t\t\t\t\t\t<i class="kt-nav__link-icon flaticon2-trash"></i>\t\t\t\t\t\t\t\t\t\t\t\t<span class="kt-nav__link-text">' + _LANG_.delete + '</span>\t\t\t\t\t\t\t\t\t\t\t</a>\t\t\t\t\t\t\t\t\t\t</li>\t\t\t\t\t\t\t\t\t\t</ul>\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t</div>\t\t\t\t\t\t'
            if (t.is_natif != '1') {
              var template = '<div class="dropdown">\
                                <a href="javascript:;" class="btn btn-sm btn-clean btn-icon btn-icon-md" data-toggle="dropdown">\
                                <i class="flaticon-more-1"></i></a>\
                                <div class="dropdown-menu dropdown-menu-right">\
                                <ul class="navi flex-column navi-hover py-2">\
                                <li class="navi-item">\
                                <a href="' + startUrl + '/settings-advanced/permissions/edit/' + t.id + '" class="navi-link">\
                                <span class="navi-icon"><i class="flaticon2-contract"></i></span>\
                                <span class="navi-text">' + _LANG_.edit + '</span>\
                                </a></li>';
              template += ' <li class="navi-item">\
                                <a href="#" data-id="' + t.id + '" class="deleterowKtdatatable navi-link">\
                                <span class="navi-icon"><i class="flaticon2-trash"></i></span>\
                                <span class="navi-text">' + _LANG_["delete"] + '</span>\
                                </a>\
                                </li>';
              template += ' </ul></div></div>';
              return template;
            } else {
              var template = '';
              return template;
            }
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
          type: "info",
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
                controller: 'AdminPermissionController',
                action: 'update',
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
                    type: result.type
                  });
                  $("#kt_apps_permissions_list_datatable").KTDatatable().reload();
                }
              }
            });
          } else {
            $.notify({
              title: _LANG_.cancelled,
              message: _LANG_.your_seleted_records_statuses_have_not_been_updated
            }, {
              type: 'info'
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
            var _data;

            var selected = e.get();
            $.ajax({
              type: 'DELETE',
              url: current_url + "/delete",
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
                  $("#kt_apps_permissions_list_datatable").KTDatatable().reload();
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

/***/ 45:
/*!***************************************************************************************!*\
  !*** multi ./resources/metronic/js/pages/custom/permissions/page.list.permissions.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Applications/MAMP/htdocs/spreadci4/public/admin/themes/metronic/resources/metronic/js/pages/custom/permissions/page.list.permissions.js */"./resources/metronic/js/pages/custom/permissions/page.list.permissions.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL21ldHJvbmljL2pzL3BhZ2VzL2N1c3RvbS9wZXJtaXNzaW9ucy9wYWdlLmxpc3QucGVybWlzc2lvbnMuanMiXSwibmFtZXMiOlsiS1RBcHBVc2VyTGlzdERhdGF0YWJsZSIsInQiLCJpbml0IiwiJCIsIktURGF0YXRhYmxlIiwiZGF0YSIsInR5cGUiLCJzb3VyY2UiLCJyZWFkIiwidXJsIiwiY3VycmVudF91cmwiLCJtZXRob2QiLCJwYXJhbXMiLCJjcnNmdG9rZW4iLCJhdHRyIiwicGFnZVNpemUiLCJzZXJ2ZXJQYWdpbmciLCJzZXJ2ZXJGaWx0ZXJpbmciLCJzZXJ2ZXJTb3J0aW5nIiwidHJhbnNsYXRlIiwicmVjb3JkcyIsInByb2Nlc3NpbmciLCJfTEFOR18iLCJsb2FkaW5nX3dhaXQiLCJub1JlY29yZHMiLCJub19yZWNvcmRfZm91bmQiLCJ0b29sYmFyIiwicGFnaW5hdGlvbiIsIml0ZW1zIiwiZmlyc3QiLCJwcmV2IiwicHJldmlvdXMiLCJuZXh0IiwibGFzdCIsIm1vcmUiLCJtb3JlX3BhZ2VzIiwiaW5wdXQiLCJwYWdlX251bWJlciIsInNlbGVjdCIsInNlbGVjdF9wYWdlX3NpemUiLCJhbGwiLCJpbmZvIiwic2hvd2luZyIsImxheW91dCIsInNjcm9sbCIsImZvb3RlciIsInNvcnRhYmxlIiwic2VhcmNoIiwiZGVsYXkiLCJyb3dzIiwiYmVmb3JlVGVtcGxhdGUiLCJyb3ciLCJpbmRleCIsImFjdGl2ZSIsImFkZENsYXNzIiwiY29sdW1ucyIsImZpZWxkIiwidGl0bGUiLCJ3aWR0aCIsInNlbGVjdG9yIiwidGV4dEFsaWduIiwidGl0cmUiLCJ0ZW1wbGF0ZSIsInN0YXJ0VXJsIiwiaWQiLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJhdXRvSGlkZSIsIm92ZXJmbG93IiwiaXNfbmF0aWYiLCJlZGl0Iiwib24iLCJ2YWwiLCJ0b0xvd2VyQ2FzZSIsImUiLCJhIiwibm9kZXMiLCJsZW5ndGgiLCJodG1sIiwicmVtb3ZlQ2xhc3MiLCJLVERpYWxvZyIsInBsYWNlbWVudCIsIm1lc3NhZ2UiLCJsb2FkaW5nIiwic2hvdyIsInNldFRpbWVvdXQiLCJoaWRlIiwibiIsImZpbmQiLCJtYXAiLCJzIiwiZG9jdW1lbnQiLCJjcmVhdGVEb2N1bWVudEZyYWdtZW50IiwibCIsImkiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwiaW5uZXJIVE1MIiwic2VsZWN0ZWRfcm93X2lkIiwiYXBwZW5kQ2hpbGQiLCJ0YXJnZXQiLCJhcHBlbmQiLCJlbXB0eSIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJzdCIsInN3YWwiLCJmaXJlIiwiYnV0dG9uc1N0eWxpbmciLCJhcmVfeW91X3N1cmVfdXBkYXRlIiwic2VsZWN0ZWRfcmVjb3Jkc19zdGF0dXNfdG8iLCJjb25maXJtQnV0dG9uVGV4dCIsInllc191cGRhdGUiLCJjb25maXJtQnV0dG9uQ2xhc3MiLCJzaG93Q2FuY2VsQnV0dG9uIiwiY2FuY2VsQnV0dG9uVGV4dCIsIm5vX2NhbmNlbCIsImNhbmNlbEJ1dHRvbkNsYXNzIiwidGhlbiIsInZhbHVlIiwiYWpheCIsImJhc2VQYXRoIiwic2VnZW1lbnRBZG1pbiIsImNvbnRyb2xsZXIiLCJhY3Rpb24iLCJzZWxlY3RlZCIsImdldCIsIm1vZHVsZSIsImRhdGFUeXBlIiwic3VjY2VzcyIsInJlc3VsdCIsInN0YXR1cyIsInhociIsIm5vdGlmeSIsInVwZGF0ZWQiLCJyZWxvYWQiLCJjYW5jZWxsZWQiLCJ5b3VyX3NlbGV0ZWRfcmVjb3Jkc19zdGF0dXNlc19oYXZlX25vdF9iZWVuX3VwZGF0ZWQiLCJ0ZXh0IiwiYXJlX3lvdV9zdXJlX2RlbGV0ZSIsInNlbGVjdGVkX3JlY29yZHMiLCJ5ZXNfZGVsZXRlIiwia3Rfc3ViaGVhZGVyX3RvdGFsIiwiZGVsZXRlZCIsIndhcm5pbmciLCJlcnJvciIsInlvdXJfc2VsZWN0ZWRfcmVjb3Jkc19oYXZlX25vdF9iZWVuX2Rl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LENBQUNrSSxNQUFGLENBQVM7QUFDTDVFLHlCQUFLLEVBQUd5RSxNQUFNLENBQUNELE9BQVAsQ0FBZS9DLE9BQWhCLEdBQTJCNUQsTUFBTSxDQUFDeUgsT0FBUCxHQUFpQixHQUE1QyxHQUFrRHpILE1BQU0sQ0FBQzBILE9BQVAsR0FBaUIsR0FEckU7QUFFTDlELDJCQUFPLEVBQUdnRCxNQUFNLENBQUNELE9BQVAsQ0FBZS9DLE9BQWhCLEdBQTJCZ0QsTUFBTSxDQUFDRCxPQUFQLENBQWUvQyxPQUExQyxHQUFvRGdELE1BQU0sQ0FBQ2UsS0FBUCxDQUFhL0Q7QUFGckUsbUJBQVQsRUFHRztBQUNDNUUsd0JBQUksRUFBRzRILE1BQU0sQ0FBQ0QsT0FBUCxDQUFlL0MsT0FBaEIsR0FBMkIsU0FBM0IsR0FBdUM7QUFEOUMsbUJBSEg7QUFNQS9FLG1CQUFDLENBQUMscUNBQUQsQ0FBRCxDQUF5Q0MsV0FBekMsR0FBdURtSSxNQUF2RDtBQUNIO0FBQ0o7QUFyQkUsYUFBUDtBQXVCSCxXQXpCRCxNQXlCTztBQUNIcEksYUFBQyxDQUFDa0ksTUFBRixDQUFTO0FBQ0w1RSxtQkFBSyxFQUFFbkMsTUFBTSxDQUFDeUgsT0FEVDtBQUVMN0QscUJBQU8sRUFBRTVELE1BQU0sQ0FBQzRIO0FBRlgsYUFBVCxFQUdHO0FBQ0M1SSxrQkFBSSxFQUFFO0FBRFAsYUFISDtBQU1IO0FBQ0osU0EzQ2UsQ0FBaEI7QUE0Q0gsT0FoREcsQ0FuTUosRUFtUElMLENBQUMsQ0FBQ3NFLEVBQUYsQ0FBSyw2QkFBTCxFQUFvQyxZQUFXLENBQUUsQ0FBakQsQ0FuUEo7QUFvUEg7QUF0UEUsR0FBUDtBQXdQSCxDQTFQNEIsRUFBN0I7O0FBMlBBNEUsTUFBTSxDQUFDQyxLQUFQLENBQWEsWUFBVztBQUNwQnBKLHdCQUFzQixDQUFDRSxJQUF2QjtBQUNILENBRkQsRSIsImZpbGUiOiIvZGV2ZWxvcG1lbnQvanMvcGFnZXMvY3VzdG9tL3Blcm1pc3Npb25zL3BhZ2UubGlzdC5wZXJtaXNzaW9ucy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNDUpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBLVEFwcFVzZXJMaXN0RGF0YXRhYmxlID0gZnVuY3Rpb24oKSB7XHJcbiAgICB2YXIgdDtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgaW5pdDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHQgPSAkKFwiI2t0X2FwcHNfcGVybWlzc2lvbnNfbGlzdF9kYXRhdGFibGVcIikuS1REYXRhdGFibGUoe1xyXG4gICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwicmVtb3RlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgc291cmNlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlYWQ6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybDogY3VycmVudF91cmwgKyBcIi9saXN0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2Nyc2Z0b2tlbl06ICQoJ21ldGFbbmFtZT1cIlgtQ1NSRi1UT0tFTlwiXScpLmF0dHIoJ2NvbnRlbnQnKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgcGFnZVNpemU6IDEwLFxyXG4gICAgICAgICAgICAgICAgICAgIHNlcnZlclBhZ2luZzogITAsXHJcbiAgICAgICAgICAgICAgICAgICAgc2VydmVyRmlsdGVyaW5nOiAhMCxcclxuICAgICAgICAgICAgICAgICAgICBzZXJ2ZXJTb3J0aW5nOiAhMFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHRyYW5zbGF0ZToge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlY29yZHM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvY2Vzc2luZzogX0xBTkdfLmxvYWRpbmdfd2FpdCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9SZWNvcmRzOiBfTEFOR18ubm9fcmVjb3JkX2ZvdW5kLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgdG9vbGJhcjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWdpbmF0aW9uOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlyc3Q6IF9MQU5HXy5maXJzdCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJldjogX0xBTkdfLnByZXZpb3VzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXh0OiBfTEFOR18ubmV4dCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFzdDogX0xBTkdfLmxhc3QsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vcmU6IF9MQU5HXy5tb3JlX3BhZ2VzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogX0xBTkdfLnBhZ2VfbnVtYmVyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3Q6IF9MQU5HXy5zZWxlY3RfcGFnZV9zaXplLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGw6IF9MQU5HXy5hbGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmZvOiBfTEFOR18uc2hvd2luZyArICcge3tzdGFydH19IC0ge3tlbmR9fSBvZiB7e3RvdGFsfX0nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGxheW91dDoge1xyXG4gICAgICAgICAgICAgICAgICAgIHNjcm9sbDogITEsXHJcbiAgICAgICAgICAgICAgICAgICAgZm9vdGVyOiAhMVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHNvcnRhYmxlOiAhMCxcclxuICAgICAgICAgICAgICAgIHBhZ2luYXRpb246ICEwLFxyXG4gICAgICAgICAgICAgICAgc2VhcmNoOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5wdXQ6ICQoXCIja3Rfc3ViaGVhZGVyX3NlYXJjaF9mb3JtXCIpLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlbGF5OiA0MDBcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICByb3dzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmVmb3JlVGVtcGxhdGU6IGZ1bmN0aW9uKHJvdywgZGF0YSwgaW5kZXgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEuYWN0aXZlID09ICcwJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93LmFkZENsYXNzKCdub3RhY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBjb2x1bW5zOiBbe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWVsZDogXCJpZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCIjXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNvcnRhYmxlOiAhMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3Rvcjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IFwiY2hlY2tib3gtc29saWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCJcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQ6IFwibmFtZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogX0xBTkdfLnRpdHJlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZTogZnVuY3Rpb24odCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICc8YSBocmVmPVwiJyArIHN0YXJ0VXJsICsgJy9zZXR0aW5ncy1hZHZhbmNlZC9wZXJtaXNzaW9ucy9lZGl0LycgKyB0LmlkICsgJ1wiIGNsYXNzPVwiY2FwaXRhbGl6ZSB0ZXh0LWRhcmstNzUgZm9udC13ZWlnaHQtYm9sZGVyIGZvbnQtc2l6ZS1sZyBtYi0wXCI+ICcgKyB0Lm5hbWUgKyAnPC9hPic7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWVsZDogXCJkZXNjcmlwdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogX0xBTkdfLmRlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImRlc2NyaXB0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vd2lkdGg6IDEwMCxcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWVsZDogXCJBY3Rpb25zXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA4MCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiQWN0aW9uc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzb3J0YWJsZTogITEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9IaWRlOiAhMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IFwidmlzaWJsZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZTogZnVuY3Rpb24odCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9yZXR1cm4gJ1xcdFxcdFxcdFxcdFxcdFxcdFxcdDxkaXYgY2xhc3M9XCJkcm9wZG93blwiPlxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdDxhIGhyZWY9XCJqYXZhc2NyaXB0OjtcIiBjbGFzcz1cImJ0biBidG4tc20gYnRuLWNsZWFuIGJ0bi1pY29uIGJ0bi1pY29uLW1kXCIgZGF0YS10b2dnbGU9XCJkcm9wZG93blwiPlxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdDxpIGNsYXNzPVwiZmxhdGljb24tbW9yZS0xXCI+PC9pPlxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdDwvYT5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQ8ZGl2IGNsYXNzPVwiZHJvcGRvd24tbWVudSBkcm9wZG93bi1tZW51LXJpZ2h0XCI+XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0PHVsIGNsYXNzPVwia3QtbmF2XCI+XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0PGxpIGNsYXNzPVwia3QtbmF2X19pdGVtXCI+XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0PGEgaHJlZj1cIiNcIiBkYXRhLWNvbnRyb2xsZXI9XCJyb2xlc1wiIGRhdGEtYWN0aW9uPVwiYWN0aW9uVmlld1wiIGRhdGEtdmFsdWU9XCInICsgdC5pZCArICdcIiBjbGFzcz1cImFjdGlvbmNvbnRyb2xsZXIga3QtbmF2X19saW5rXCI+XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0PGkgY2xhc3M9XCJrdC1uYXZfX2xpbmstaWNvbiBmbGF0aWNvbjItZXhwYW5kXCI+PC9pPlxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdDxzcGFuIGNsYXNzPVwia3QtbmF2X19saW5rLXRleHRcIj4nICsgX0xBTkdfLnZpZXcgKyAnPC9zcGFuPlxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdDwvYT5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQ8L2xpPlxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdDxsaSBjbGFzcz1cImt0LW5hdl9faXRlbVwiPlxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdDxhIGhyZWY9XCInICsgYmFzZVBhdGggKyBzZWdlbWVudEFkbWluICsgJy9yb2xlcy9kZXRhaWwvJyArIHQuaWQgKyAnXCIgY2xhc3M9XCJrdC1uYXZfX2xpbmtcIj5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQ8aSBjbGFzcz1cImt0LW5hdl9fbGluay1pY29uIGZsYXRpY29uMi1jb250cmFjdFwiPjwvaT5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQ8c3BhbiBjbGFzcz1cImt0LW5hdl9fbGluay10ZXh0XCI+JyArIF9MQU5HXy5lZGl0ICsgJzwvc3Bhbj5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQ8L2E+XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0PC9saT5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQ8bGkgY2xhc3M9XCJrdC1uYXZfX2l0ZW1cIj5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQ8YSBocmVmPVwiI1wiIGRhdGEtaWQ9XCInICsgdC5pZCArICdcIiBjbGFzcz1cImRlbGV0ZXJvd0t0ZGF0YXRhYmxlIGt0LW5hdl9fbGlua1wiPlxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdDxpIGNsYXNzPVwia3QtbmF2X19saW5rLWljb24gZmxhdGljb24yLXRyYXNoXCI+PC9pPlxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdDxzcGFuIGNsYXNzPVwia3QtbmF2X19saW5rLXRleHRcIj4nICsgX0xBTkdfLmRlbGV0ZSArICc8L3NwYW4+XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0PC9hPlxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdDwvbGk+XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0PC91bD5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQ8L2Rpdj5cXHRcXHRcXHRcXHRcXHRcXHRcXHQ8L2Rpdj5cXHRcXHRcXHRcXHRcXHRcXHQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodC5pc19uYXRpZiAhPSAnMScpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdGVtcGxhdGUgPSAnPGRpdiBjbGFzcz1cImRyb3Bkb3duXCI+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiamF2YXNjcmlwdDo7XCIgY2xhc3M9XCJidG4gYnRuLXNtIGJ0bi1jbGVhbiBidG4taWNvbiBidG4taWNvbi1tZFwiIGRhdGEtdG9nZ2xlPVwiZHJvcGRvd25cIj5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmxhdGljb24tbW9yZS0xXCI+PC9pPjwvYT5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkcm9wZG93bi1tZW51IGRyb3Bkb3duLW1lbnUtcmlnaHRcIj5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cIm5hdmkgZmxleC1jb2x1bW4gbmF2aS1ob3ZlciBweS0yXCI+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJuYXZpLWl0ZW1cIj5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCInICsgc3RhcnRVcmwgKyAnL3NldHRpbmdzLWFkdmFuY2VkL3Blcm1pc3Npb25zL2VkaXQvJyArIHQuaWQgKyAnXCIgY2xhc3M9XCJuYXZpLWxpbmtcIj5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibmF2aS1pY29uXCI+PGkgY2xhc3M9XCJmbGF0aWNvbjItY29udHJhY3RcIj48L2k+PC9zcGFuPlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJuYXZpLXRleHRcIj4nICsgX0xBTkdfLmVkaXQgKyAnPC9zcGFuPlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPjwvbGk+JztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGUgKz0gJyA8bGkgY2xhc3M9XCJuYXZpLWl0ZW1cIj5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgZGF0YS1pZD1cIicgKyB0LmlkICsgJ1wiIGNsYXNzPVwiZGVsZXRlcm93S3RkYXRhdGFibGUgbmF2aS1saW5rXCI+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm5hdmktaWNvblwiPjxpIGNsYXNzPVwiZmxhdGljb24yLXRyYXNoXCI+PC9pPjwvc3Bhbj5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibmF2aS10ZXh0XCI+JyArIF9MQU5HXy5kZWxldGUgKyAnPC9zcGFuPlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT4nO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZSArPSAnIDwvdWw+PC9kaXY+PC9kaXY+JztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGVtcGxhdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0ZW1wbGF0ZSA9ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0ZW1wbGF0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSksICQoXCIja3RfZm9ybV9zdGF0dXNcIikub24oXCJjaGFuZ2VcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICB0LnNlYXJjaCgkKHRoaXMpLnZhbCgpLnRvTG93ZXJDYXNlKCksIFwiU3RhdHVzXCIpXHJcbiAgICAgICAgICAgIH0pLCB0Lm9uKFwiZGF0YXRhYmxlLW9uLWNoZWNrIGRhdGF0YWJsZS1vbi11bmNoZWNrIGRhdGF0YWJsZS1vbi1sYXlvdXQtdXBkYXRlZFwiLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgYSA9IHQucm93cyhcIi5kYXRhdGFibGUtcm93LWFjdGl2ZVwiKS5ub2RlcygpLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgICQoXCIja3Rfc3ViaGVhZGVyX2dyb3VwX3NlbGVjdGVkX3Jvd3NcIikuaHRtbChhKSwgYSA+IDAgPyAoJChcIiNrdF9zdWJoZWFkZXJfc2VhcmNoXCIpLmFkZENsYXNzKFwiaGlkZGVuXCIpLCAkKFwiI2t0X3N1YmhlYWRlcl9ncm91cF9hY3Rpb25zXCIpLnJlbW92ZUNsYXNzKFwiaGlkZGVuXCIpKSA6ICgkKFwiI2t0X3N1YmhlYWRlcl9zZWFyY2hcIikucmVtb3ZlQ2xhc3MoXCJoaWRkZW5cIiksICQoXCIja3Rfc3ViaGVhZGVyX2dyb3VwX2FjdGlvbnNcIikuYWRkQ2xhc3MoXCJoaWRkZW5cIikpXHJcbiAgICAgICAgICAgIH0pLCAkKFwiI2t0X2RhdGF0YWJsZV9yZWNvcmRzX2ZldGNoX21vZGFsXCIpLm9uKFwic2hvdy5icy5tb2RhbFwiLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgYSA9IG5ldyBLVERpYWxvZyh7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJsb2FkZXJcIixcclxuICAgICAgICAgICAgICAgICAgICBwbGFjZW1lbnQ6IFwidG9wIGNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IF9MQU5HXy5sb2FkaW5nICsgXCIuLi5cIlxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBhLnNob3coKSwgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICBhLmhpZGUoKVxyXG4gICAgICAgICAgICAgICAgfSwgMWUzKTtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIG4gPSB0LnJvd3MoXCIuZGF0YXRhYmxlLXJvdy1hY3RpdmVcIikubm9kZXMoKS5maW5kKCcuY2hlY2tib3gtc2luZ2xlID4gW3R5cGU9XCJjaGVja2JveFwiXScpLm1hcChmdW5jdGlvbih0LCBlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAkKGUpLnZhbCgpXHJcbiAgICAgICAgICAgICAgICAgICAgfSksIHMgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCksIGwgPSAwOyBsIDwgbi5sZW5ndGg7IGwrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGkuc2V0QXR0cmlidXRlKFwiZGF0YS1pZFwiLCBuW2xdKSwgaS5pbm5lckhUTUwgPSBfTEFOR18uc2VsZWN0ZWRfcm93X2lkICsgXCI6IFwiICsgbltsXSwgcy5hcHBlbmRDaGlsZChpKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJChlLnRhcmdldCkuZmluZChcIiNrdF9hcHBzX3VzZXJfZmV0Y2hfcmVjb3Jkc19zZWxlY3RlZFwiKS5hcHBlbmQocylcclxuICAgICAgICAgICAgfSkub24oXCJoaWRlLmJzLm1vZGFsXCIsIGZ1bmN0aW9uKHQpIHtcclxuICAgICAgICAgICAgICAgICQodC50YXJnZXQpLmZpbmQoXCIja3RfYXBwc191c2VyX2ZldGNoX3JlY29yZHNfc2VsZWN0ZWRcIikuZW1wdHkoKVxyXG4gICAgICAgICAgICB9KSwgJChcIiNrdF9zdWJoZWFkZXJfZ3JvdXBfYWN0aW9uc19zdGF0dXNfY2hhbmdlXCIpLm9uKFwiY2xpY2tcIiwgXCJbZGF0YS10b2dnbGU9J3N0YXR1cy1jaGFuZ2UnXVwiLCBmdW5jdGlvbihldmVudCkge1xyXG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIHZhciBlID0gJCh0aGlzKS5maW5kKFwiLmt0LW5hdl9fbGluay10ZXh0XCIpLmh0bWwoKSxcclxuICAgICAgICAgICAgICAgICAgICBzdCA9ICQodGhpcykuZmluZChcIi5rdC1uYXZfX2xpbmstdGV4dFwiKS5kYXRhKCdzdGF0dXMnKSxcclxuICAgICAgICAgICAgICAgICAgICBhID0gdC5yb3dzKFwiLmRhdGF0YWJsZS1yb3ctYWN0aXZlXCIpLm5vZGVzKCkuZmluZCgnLmNoZWNrYm94LXNpbmdsZSA+IFt0eXBlPVwiY2hlY2tib3hcIl0nKS5tYXAoZnVuY3Rpb24odCwgZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJChlKS52YWwoKVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgYS5sZW5ndGggPiAwICYmIHN3YWwuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uc1N0eWxpbmc6ICExLFxyXG4gICAgICAgICAgICAgICAgICAgIGh0bWw6IF9MQU5HXy5hcmVfeW91X3N1cmVfdXBkYXRlICsgXCIgXCIgKyBhLmxlbmd0aCArIFwiIFwiICsgX0xBTkdfLnNlbGVjdGVkX3JlY29yZHNfc3RhdHVzX3RvICsgXCIgXCIgKyBlICsgXCIgP1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiaW5mb1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiBfTEFOR18ueWVzX3VwZGF0ZSArIFwiIVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbmZpcm1CdXR0b25DbGFzczogXCJidG4gYnRuLXNtIGJ0bi1ib2xkIGJ0bi1kYXJrXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogITAsXHJcbiAgICAgICAgICAgICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogX0xBTkdfLm5vX2NhbmNlbCxcclxuICAgICAgICAgICAgICAgICAgICBjYW5jZWxCdXR0b25DbGFzczogXCJidG4gYnRuLXNtIGJ0bi1ib2xkIGJ0bi1kZWZhdWx0XCJcclxuICAgICAgICAgICAgICAgIH0pLnRoZW4oZnVuY3Rpb24odCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0LnZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6IGJhc2VQYXRoICsgc2VnZW1lbnRBZG1pbiArIFwiL3NwLWFkbWluLWFqYXhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhamF4OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdBZG1pblBlcm1pc3Npb25Db250cm9sbGVyJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb246ICd1cGRhdGUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkOiBhLmdldCgpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmU6IHN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2R1bGU6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVR5cGU6IFwianNvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzdWx0LCBzdGF0dXMsIHhocikge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoeGhyLnN0YXR1cyA9PSAyMDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJC5ub3RpZnkoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IF9MQU5HXy51cGRhdGVkICsgXCIhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiByZXN1bHQubWVzc2FnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiByZXN1bHQudHlwZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJChcIiNrdF9hcHBzX3Blcm1pc3Npb25zX2xpc3RfZGF0YXRhYmxlXCIpLktURGF0YXRhYmxlKCkucmVsb2FkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQubm90aWZ5KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBfTEFOR18uY2FuY2VsbGVkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogX0xBTkdfLnlvdXJfc2VsZXRlZF9yZWNvcmRzX3N0YXR1c2VzX2hhdmVfbm90X2JlZW5fdXBkYXRlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnaW5mbydcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSksICQoXCIja3Rfc3ViaGVhZGVyX2dyb3VwX2FjdGlvbnNfZGVsZXRlX2FsbFwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGUgPSB0LnJvd3MoXCIuZGF0YXRhYmxlLXJvdy1hY3RpdmVcIikubm9kZXMoKS5maW5kKCcuY2hlY2tib3gtc2luZ2xlID4gW3R5cGU9XCJjaGVja2JveFwiXScpLm1hcChmdW5jdGlvbih0LCBlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICQoZSkudmFsKClcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgZS5sZW5ndGggPiAwICYmIHN3YWwuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uc1N0eWxpbmc6ICExLFxyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IF9MQU5HXy5hcmVfeW91X3N1cmVfZGVsZXRlICsgXCIgXCIgKyBlLmxlbmd0aCArIFwiIFwiICsgX0xBTkdfLnNlbGVjdGVkX3JlY29yZHMgKyBcIiA/XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJlcnJvclwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiBfTEFOR18ueWVzX2RlbGV0ZSArICcgIScsXHJcbiAgICAgICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvbkNsYXNzOiBcImJ0biBidG4tc20gYnRuLWJvbGQgYnRuLWRhbmdlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHNob3dDYW5jZWxCdXR0b246ICEwLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IF9MQU5HXy5ub19jYW5jZWwsXHJcbiAgICAgICAgICAgICAgICAgICAgY2FuY2VsQnV0dG9uQ2xhc3M6IFwiYnRuIGJ0bi1zbSBidG4tYm9sZCBidG4tZGFya1wiXHJcbiAgICAgICAgICAgICAgICB9KS50aGVuKGZ1bmN0aW9uKHQpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodC52YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgc2VsZWN0ZWQgPSBlLmdldCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ0RFTEVURScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6IGN1cnJlbnRfdXJsICsgXCIvZGVsZXRlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2Nyc2Z0b2tlbl06ICQoJ21ldGFbbmFtZT1cIlgtQ1NSRi1UT0tFTlwiXScpLmF0dHIoJ2NvbnRlbnQnKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogc2VsZWN0ZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhVHlwZTogXCJqc29uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXN1bHQsIHN0YXR1cywgeGhyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9TdWNjZXNzIE1lc3NhZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoeGhyLnN0YXR1cyA9PSAyMDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGt0X3N1YmhlYWRlcl90b3RhbCA9ICQoJy5rdF9zdWJoZWFkZXJfdG90YWwnKS50ZXh0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJy5rdF9zdWJoZWFkZXJfdG90YWwnKS5odG1sKChrdF9zdWJoZWFkZXJfdG90YWwgLSBzZWxlY3RlZC5sZW5ndGgpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJC5ub3RpZnkoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IChyZXN1bHQuc3VjY2Vzcy5tZXNzYWdlKSA/IF9MQU5HXy5kZWxldGVkICsgXCIhXCIgOiBfTEFOR18ud2FybmluZyArIFwiIVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogKHJlc3VsdC5zdWNjZXNzLm1lc3NhZ2UpID8gcmVzdWx0LnN1Y2Nlc3MubWVzc2FnZSA6IHJlc3VsdC5lcnJvci5tZXNzYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IChyZXN1bHQuc3VjY2Vzcy5tZXNzYWdlKSA/ICdzdWNjZXNzJyA6ICd3YXJuaW5nJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJChcIiNrdF9hcHBzX3Blcm1pc3Npb25zX2xpc3RfZGF0YXRhYmxlXCIpLktURGF0YXRhYmxlKCkucmVsb2FkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQubm90aWZ5KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBfTEFOR18uZGVsZXRlZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IF9MQU5HXy55b3VyX3NlbGVjdGVkX3JlY29yZHNfaGF2ZV9ub3RfYmVlbl9kZWxldGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdpbmZvJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9KSwgdC5vbihcImRhdGF0YWJsZS1vbi1sYXlvdXQtdXBkYXRlZFwiLCBmdW5jdGlvbigpIHt9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSgpO1xyXG5LVFV0aWwucmVhZHkoZnVuY3Rpb24oKSB7XHJcbiAgICBLVEFwcFVzZXJMaXN0RGF0YXRhYmxlLmluaXQoKVxyXG59KTsiXSwic291cmNlUm9vdCI6IiJ9