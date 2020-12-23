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
/******/ 	return __webpack_require__(__webpack_require__.s = 42);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/metronic/js/pages/custom/logs/page.list.logs.js":
/*!*******************************************************************!*\
  !*** ./resources/metronic/js/pages/custom/logs/page.list.logs.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var KTAppUserListDatatable = function () {
  var t;
  return {
    init: function init() {
      t = $("#kt_apps_logs_list_datatable").KTDatatable({
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
        // toolbar
        toolbar: {
          // toolbar placement can be at top or bottom or both top and bottom repeated
          placement: ['bottom', 'top'],
          // toolbar items
          items: {
            // pagination
            pagination: {
              // page size select
              pageSizeSelect: [5, 10, 20, 30, 50, 100, 500, 1000] // display dropdown to select pagination size. -1 is used for "ALl" option

            }
          }
        },
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
          field: "source",
          title: _LANG_.source,
          width: 60,
          template: function template(t) {
            return '<div class="capitalize text-dark-75 font-weight-bolder font-size-lg mb-0">' + t.source + '</div>';
          }
        }, {
          field: "source_id",
          title: _LANG_.id,
          type: "source_id",
          //sortable: !1,
          width: 20
        }, {
          field: "user_id",
          title: _LANG_.user,
          type: "user_id",
          width: 100,
          //sortable: !1,
          template: function template(t) {
            return '<div class="capitalize text-dark-75 font-weight-bolder font-size-lg mb-0">' + t.username + '</div>';
          } //width: 100,

        }, {
          field: "event",
          title: _LANG_.event,
          type: "event",
          width: 80,
          template: function template(t) {
            return '<div class=" capitalize font-weight-bold text-primary font-size-lg mb-0">' + t.event + '</div>';
          } //width: 100,

        }, {
          field: "summary",
          title: _LANG_.summary,
          type: "summary",
          width: 80
        }, {
          field: "data",
          title: _LANG_.details,
          type: "data",
          // overflow: "hidden",
          // autoHide: true,
          width: 400,
          template: function template(t) {
            var template = '<div class=" capitalize font-weight-bold font-size-md mb-0">';
            $.each(t.data, function (key, value) {
              template += '<div><span class="font-weight-bolder font-size-md mb-0"><strong>' + key + ' </strong></span> : ' + value + '</div>';
            });
            template += '</div>';
            return template;
          }
        }, {
          field: "created_at",
          title: _LANG_.date_create,
          type: "date",
          //width: 100,
          format: "d/m/Y",
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
                  $("#kt_apps_logs_list_datatable").KTDatatable().reload();
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

/***/ 42:
/*!*************************************************************************!*\
  !*** multi ./resources/metronic/js/pages/custom/logs/page.list.logs.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Applications/MAMP/htdocs/spreadci4/public/admin/themes/metronic/resources/metronic/js/pages/custom/logs/page.list.logs.js */"./resources/metronic/js/pages/custom/logs/page.list.logs.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL21ldHJvbmljL2pzL3BhZ2VzL2N1c3RvbS9sb2dzL3BhZ2UubGlzdC5sb2dzLmpzIl0sIm5hbWVzIjpbIktUQXBwVXNlckxpc3REYXRhdGFibGUiLCJ0IiwiaW5pdCIsIiQiLCJLVERhdGF0YWJsZSIsImRhdGEiLCJ0eXBlIiwic291cmNlIiwicmVhZCIsInVybCIsImN1cnJlbnRfdXJsIiwibWV0aG9kIiwicGFyYW1zIiwiY3JzZnRva2VuIiwiYXR0ciIsInBhZ2VTaXplIiwic2VydmVyUGFnaW5nIiwic2VydmVyRmlsdGVyaW5nIiwic2VydmVyU29ydGluZyIsInRyYW5zbGF0ZSIsInJlY29yZHMiLCJwcm9jZXNzaW5nIiwiX0xBTkdfIiwibG9hZGluZ193YWl0Iiwibm9SZWNvcmRzIiwibm9fcmVjb3JkX2ZvdW5kIiwidG9vbGJhciIsInBhZ2luYXRpb24iLCJpdGVtcyIsImZpcnN0IiwicHJldiIsInByZXZpb3VzIiwibmV4dCIsImxhc3QiLCJtb3JlIiwibW9yZV9wYWdlcyIsImlucHV0IiwicGFnZV9udW1iZXIiLCJzZWxlY3QiLCJzZWxlY3RfcGFnZV9zaXplIiwiYWxsIiwiaW5mbyIsInNob3dpbmciLCJsYXlvdXQiLCJzY3JvbGwiLCJmb290ZXIiLCJzb3J0YWJsZSIsInBsYWNlbWVudCIsInBhZ2VTaXplU2VsZWN0Iiwic2VhcmNoIiwiZGVsYXkiLCJyb3dzIiwiYmVmb3JlVGVtcGxhdGUiLCJyb3ciLCJpbmRleCIsImFjdGl2ZSIsImFkZENsYXNzIiwiY29sdW1ucyIsImZpZWxkIiwidGl0bGUiLCJ3aWR0aCIsInNlbGVjdG9yIiwidGV4dEFsaWduIiwidGVtcGxhdGUiLCJpZCIsInVzZXIiLCJ1c2VybmFtZSIsImV2ZW50Iiwic3VtbWFyeSIsImRldGFpbHMiLCJlYWNoIiwia2V5IiwidmFsdWUiLCJkYXRlX2NyZWF0ZSIsImZvcm1hdCIsImRhdGVfY3JlYXRlX2Zvcm1hdF9mdWxsIiwib24iLCJ2YWwiLCJ0b0xvd2VyQ2FzZSIsImUiLCJhIiwibm9kZXMiLCJsZW5ndGgiLCJodG1sIiwicmVtb3ZlQ2xhc3MiLCJLVERpYWxvZyIsIm1lc3NhZ2UiLCJsb2FkaW5nIiwic2hvdyIsInNldFRpbWVvdXQiLCJoaWRlIiwibiIsImZpbmQiLCJtYXAiLCJzIiwiZG9jdW1lbnQiLCJjcmVhdGVEb2N1bWVudEZyYWdtZW50IiwibCIsImkiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwiaW5uZXJIVE1MIiwic2VsZWN0ZWRfcm93X2lkIiwiYXBwZW5kQ2hpbGQiLCJ0YXJnZXQiLCJhcHBlbmQiLCJlbXB0eSIsInN3YWwiLCJmaXJlIiwiYnV0dG9uc1N0eWxpbmciLCJ0ZXh0IiwiYXJlX3lvdV9zdXJlX2RlbGV0ZSIsInNlbGVjdGVkX3JlY29yZHMiLCJjb25maXJtQnV0dG9uVGV4dCIsInllc19kZWxldGUiLCJjb25maXJtQnV0dG9uQ2xhc3MiLCJzaG93Q2FuY2VsQnV0dG9uIiwiY2FuY2VsQnV0dG9uVGV4dCIsIm5vX2NhbmNlbCIsImNhbmNlbEJ1dHRvbkNsYXNzIiwidGhlbiIsInNlbGVjdGVkIiwiZ2V0IiwiYWpheCIsImRhdGFUeXBlIiwic3VjY2VzcyIsInJlc3VsdCIsInN0YXR1cyIsInhociIsImt0X3N1YmhlYWRlcl90b3RhbCIsIm5vdGlmeSIsImRlbGV0ZWQiLCJ3YXJuaW5nIiwiZXJyb3IiLCJyZWxvYWQiLCJ5b3VyX3NlbGVjdGVkX3JlY29yZHNfaGF2ZV9ub3RfYmVlbl9kZWxldGVkIiwiS1RVdGlsIiwicmVhZHkiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRmE7Ozs7QUFDYixJQUFJQSxzQkFBc0IsR0FBRyxZQUFXO0FBQ3BDLE1BQUlDLENBQUo7QUFDQSxTQUFPO0FBQ0hDLFFBQUksRUFBRSxnQkFBVztBQUNiRCxPQUFDLEdBQUdFLENBQUMsQ0FBQyw4QkFBRCxDQUFELENBQWtDQyxXQUFsQyxDQUE4QztBQUM5Q0MsWUFBSSxFQUFFO0FBQ0ZDLGNBQUksRUFBRSxRQURKO0FBRUZDLGdCQUFNLEVBQUU7QUFDSkMsZ0JBQUksRUFBRTtBQUNGQyxpQkFBRyxFQUFFQyxXQUFXLEdBQUcsT0FEakI7QUFFRkMsb0JBQU0sRUFBRSxLQUZOO0FBR0ZDLG9CQUFNLHNCQUNEQyxTQURDLEVBQ1dWLENBQUMsQ0FBQywyQkFBRCxDQUFELENBQStCVyxJQUEvQixDQUFvQyxTQUFwQyxDQURYO0FBSEo7QUFERixXQUZOO0FBV0ZDLGtCQUFRLEVBQUUsRUFYUjtBQVlGQyxzQkFBWSxFQUFFLENBQUMsQ0FaYjtBQWFGQyx5QkFBZSxFQUFFLENBQUMsQ0FiaEI7QUFjRkMsdUJBQWEsRUFBRSxDQUFDO0FBZGQsU0FEd0M7QUFpQjlDQyxpQkFBUyxFQUFFO0FBQ1BDLGlCQUFPLEVBQUU7QUFDTEMsc0JBQVUsRUFBRUMsTUFBTSxDQUFDQyxZQURkO0FBRUxDLHFCQUFTLEVBQUVGLE1BQU0sQ0FBQ0c7QUFGYixXQURGO0FBS1BDLGlCQUFPLEVBQUU7QUFDTEMsc0JBQVUsRUFBRTtBQUNSQyxtQkFBSyxFQUFFO0FBQ0gsMkJBQVM7QUFDTEMsdUJBQUssRUFBRVAsTUFBTSxDQUFDTyxLQURUO0FBRUxDLHNCQUFJLEVBQUVSLE1BQU0sQ0FBQ1MsUUFGUjtBQUdMQyxzQkFBSSxFQUFFVixNQUFNLENBQUNVLElBSFI7QUFJTEMsc0JBQUksRUFBRVgsTUFBTSxDQUFDVyxJQUpSO0FBS0xDLHNCQUFJLEVBQUVaLE1BQU0sQ0FBQ2EsVUFMUjtBQU1MQyx1QkFBSyxFQUFFZCxNQUFNLENBQUNlLFdBTlQ7QUFPTEMsd0JBQU0sRUFBRWhCLE1BQU0sQ0FBQ2lCLGdCQVBWO0FBUUxDLHFCQUFHLEVBQUVsQixNQUFNLENBQUNrQjtBQVJQLGlCQUROO0FBV0hDLG9CQUFJLEVBQUVuQixNQUFNLENBQUNvQixPQUFQLEdBQWlCO0FBWHBCO0FBREM7QUFEUDtBQUxGLFNBakJtQztBQXdDOUNDLGNBQU0sRUFBRTtBQUNKQyxnQkFBTSxFQUFFLENBQUMsQ0FETDtBQUVKQyxnQkFBTSxFQUFFLENBQUM7QUFGTCxTQXhDc0M7QUE0QzlDQyxnQkFBUSxFQUFFLENBQUMsQ0E1Q21DO0FBNkM5QztBQUNBcEIsZUFBTyxFQUFFO0FBQ0w7QUFDQXFCLG1CQUFTLEVBQUUsQ0FBQyxRQUFELEVBQVcsS0FBWCxDQUZOO0FBSUw7QUFDQW5CLGVBQUssRUFBRTtBQUNIO0FBQ0FELHNCQUFVLEVBQUU7QUFDUjtBQUNBcUIsNEJBQWMsRUFBRSxDQUFDLENBQUQsRUFBSSxFQUFKLEVBQVEsRUFBUixFQUFZLEVBQVosRUFBZ0IsRUFBaEIsRUFBb0IsR0FBcEIsRUFBeUIsR0FBekIsRUFBOEIsSUFBOUIsQ0FGUixDQUU2Qzs7QUFGN0M7QUFGVDtBQUxGLFNBOUNxQztBQTJEOUNyQixrQkFBVSxFQUFFLENBQUMsQ0EzRGlDO0FBNEQ5Q3NCLGNBQU0sRUFBRTtBQUNKYixlQUFLLEVBQUVqQyxDQUFDLENBQUMsMkJBQUQsQ0FESjtBQUVKK0MsZUFBSyxFQUFFO0FBRkgsU0E1RHNDO0FBZ0U5Q0MsWUFBSSxFQUFFO0FBQ0ZDLHdCQUFjLEVBQUUsd0JBQVNDLEdBQVQsRUFBY2hELElBQWQsRUFBb0JpRCxLQUFwQixFQUEyQjtBQUN2QyxnQkFBSWpELElBQUksQ0FBQ2tELE1BQUwsSUFBZSxHQUFuQixFQUF3QjtBQUNwQkYsaUJBQUcsQ0FBQ0csUUFBSixDQUFhLFdBQWI7QUFDSDtBQUNKO0FBTEMsU0FoRXdDO0FBdUU5Q0MsZUFBTyxFQUFFLENBQUM7QUFDRkMsZUFBSyxFQUFFLElBREw7QUFFRkMsZUFBSyxFQUFFLEdBRkw7QUFHRmIsa0JBQVEsRUFBRSxDQUFDLENBSFQ7QUFJRmMsZUFBSyxFQUFFLEVBSkw7QUFLRkMsa0JBQVEsRUFBRTtBQUNOLHFCQUFPO0FBREQsV0FMUjtBQVFGQyxtQkFBUyxFQUFFO0FBUlQsU0FBRCxFQVVMO0FBQ0lKLGVBQUssRUFBRSxRQURYO0FBRUlDLGVBQUssRUFBRXJDLE1BQU0sQ0FBQ2YsTUFGbEI7QUFHSXFELGVBQUssRUFBRSxFQUhYO0FBSUlHLGtCQUFRLEVBQUUsa0JBQVM5RCxDQUFULEVBQVk7QUFDbEIsbUJBQU8sK0VBQStFQSxDQUFDLENBQUNNLE1BQWpGLEdBQTBGLFFBQWpHO0FBQ0g7QUFOTCxTQVZLLEVBa0JGO0FBQ0NtRCxlQUFLLEVBQUUsV0FEUjtBQUVDQyxlQUFLLEVBQUVyQyxNQUFNLENBQUMwQyxFQUZmO0FBR0MxRCxjQUFJLEVBQUUsV0FIUDtBQUlDO0FBQ0FzRCxlQUFLLEVBQUU7QUFMUixTQWxCRSxFQXlCRjtBQUNDRixlQUFLLEVBQUUsU0FEUjtBQUVDQyxlQUFLLEVBQUVyQyxNQUFNLENBQUMyQyxJQUZmO0FBR0MzRCxjQUFJLEVBQUUsU0FIUDtBQUlDc0QsZUFBSyxFQUFFLEdBSlI7QUFLQztBQUNBRyxrQkFBUSxFQUFFLGtCQUFTOUQsQ0FBVCxFQUFZO0FBQ2QsbUJBQU8sK0VBQStFQSxDQUFDLENBQUNpRSxRQUFqRixHQUE0RixRQUFuRztBQUNILFdBUk4sQ0FTSzs7QUFUTCxTQXpCRSxFQW9DRjtBQUNDUixlQUFLLEVBQUUsT0FEUjtBQUVDQyxlQUFLLEVBQUVyQyxNQUFNLENBQUM2QyxLQUZmO0FBR0M3RCxjQUFJLEVBQUUsT0FIUDtBQUlDc0QsZUFBSyxFQUFFLEVBSlI7QUFLQ0csa0JBQVEsRUFBRSxrQkFBUzlELENBQVQsRUFBWTtBQUNkLG1CQUFPLDhFQUE4RUEsQ0FBQyxDQUFDa0UsS0FBaEYsR0FBd0YsUUFBL0Y7QUFDSCxXQVBOLENBUUs7O0FBUkwsU0FwQ0UsRUE4Q0Y7QUFDQ1QsZUFBSyxFQUFFLFNBRFI7QUFFQ0MsZUFBSyxFQUFFckMsTUFBTSxDQUFDOEMsT0FGZjtBQUdDOUQsY0FBSSxFQUFFLFNBSFA7QUFJQ3NELGVBQUssRUFBRTtBQUpSLFNBOUNFLEVBb0RGO0FBQ0NGLGVBQUssRUFBRSxNQURSO0FBRUNDLGVBQUssRUFBRXJDLE1BQU0sQ0FBQytDLE9BRmY7QUFHQy9ELGNBQUksRUFBRSxNQUhQO0FBSUM7QUFDQTtBQUNBc0QsZUFBSyxFQUFFLEdBTlI7QUFPQ0csa0JBQVEsRUFBRSxrQkFBUzlELENBQVQsRUFBWTtBQUNsQixnQkFBSThELFFBQVEsR0FBRyw4REFBZjtBQUNBNUQsYUFBQyxDQUFDbUUsSUFBRixDQUFPckUsQ0FBQyxDQUFDSSxJQUFULEVBQWUsVUFBU2tFLEdBQVQsRUFBY0MsS0FBZCxFQUFxQjtBQUNoQ1Qsc0JBQVEsSUFBSSxxRUFBcUVRLEdBQXJFLEdBQTJFLHNCQUEzRSxHQUFvR0MsS0FBcEcsR0FBNEcsUUFBeEg7QUFDSCxhQUZEO0FBSUFULG9CQUFRLElBQUksUUFBWjtBQUNBLG1CQUFPQSxRQUFQO0FBQ0g7QUFmRixTQXBERSxFQXFFRjtBQUNDTCxlQUFLLEVBQUUsWUFEUjtBQUVDQyxlQUFLLEVBQUVyQyxNQUFNLENBQUNtRCxXQUZmO0FBR0NuRSxjQUFJLEVBQUUsTUFIUDtBQUlDO0FBQ0FvRSxnQkFBTSxFQUFFLE9BTFQ7QUFNQ1gsa0JBQVEsRUFBRSxrQkFBUzlELENBQVQsRUFBWTtBQUNsQixtQkFBTyx1REFBdURBLENBQUMsQ0FBQzBFLHVCQUF6RCxHQUFtRixRQUExRjtBQUNIO0FBUkYsU0FyRUU7QUF2RXFDLE9BQTlDLENBQUosRUF1Skl4RSxDQUFDLENBQUMsaUJBQUQsQ0FBRCxDQUFxQnlFLEVBQXJCLENBQXdCLFFBQXhCLEVBQWtDLFlBQVc7QUFDN0MzRSxTQUFDLENBQUNnRCxNQUFGLENBQVM5QyxDQUFDLENBQUMsSUFBRCxDQUFELENBQVEwRSxHQUFSLEdBQWNDLFdBQWQsRUFBVCxFQUFzQyxRQUF0QztBQUNILE9BRkcsQ0F2SkosRUF5Skk3RSxDQUFDLENBQUMyRSxFQUFGLENBQUsscUVBQUwsRUFBNEUsVUFBU0csQ0FBVCxFQUFZO0FBQ3hGLFlBQUlDLENBQUMsR0FBRy9FLENBQUMsQ0FBQ2tELElBQUYsQ0FBTyx1QkFBUCxFQUFnQzhCLEtBQWhDLEdBQXdDQyxNQUFoRDtBQUNBL0UsU0FBQyxDQUFDLG1DQUFELENBQUQsQ0FBdUNnRixJQUF2QyxDQUE0Q0gsQ0FBNUMsR0FBZ0RBLENBQUMsR0FBRyxDQUFKLElBQVM3RSxDQUFDLENBQUMsc0JBQUQsQ0FBRCxDQUEwQnFELFFBQTFCLENBQW1DLFFBQW5DLEdBQThDckQsQ0FBQyxDQUFDLDZCQUFELENBQUQsQ0FBaUNpRixXQUFqQyxDQUE2QyxRQUE3QyxDQUF2RCxLQUFrSGpGLENBQUMsQ0FBQyxzQkFBRCxDQUFELENBQTBCaUYsV0FBMUIsQ0FBc0MsUUFBdEMsR0FBaURqRixDQUFDLENBQUMsNkJBQUQsQ0FBRCxDQUFpQ3FELFFBQWpDLENBQTBDLFFBQTFDLENBQW5LLENBQWhEO0FBQ0gsT0FIRyxDQXpKSixFQTRKSXJELENBQUMsQ0FBQyxtQ0FBRCxDQUFELENBQXVDeUUsRUFBdkMsQ0FBMEMsZUFBMUMsRUFBMkQsVUFBU0csQ0FBVCxFQUFZO0FBQ3ZFLFlBQUlDLENBQUMsR0FBRyxJQUFJSyxRQUFKLENBQWE7QUFDakIvRSxjQUFJLEVBQUUsUUFEVztBQUVqQnlDLG1CQUFTLEVBQUUsWUFGTTtBQUdqQnVDLGlCQUFPLEVBQUVoRSxNQUFNLENBQUNpRSxPQUFQLEdBQWlCO0FBSFQsU0FBYixDQUFSO0FBS0FQLFNBQUMsQ0FBQ1EsSUFBRixJQUFVQyxVQUFVLENBQUMsWUFBVztBQUM1QlQsV0FBQyxDQUFDVSxJQUFGO0FBQ0gsU0FGbUIsRUFFakIsR0FGaUIsQ0FBcEI7O0FBR0EsYUFBSyxJQUFJQyxDQUFDLEdBQUcxRixDQUFDLENBQUNrRCxJQUFGLENBQU8sdUJBQVAsRUFBZ0M4QixLQUFoQyxHQUF3Q1csSUFBeEMsQ0FBNkMsc0NBQTdDLEVBQXFGQyxHQUFyRixDQUF5RixVQUFTNUYsQ0FBVCxFQUFZOEUsQ0FBWixFQUFlO0FBQzdHLGlCQUFPNUUsQ0FBQyxDQUFDNEUsQ0FBRCxDQUFELENBQUtGLEdBQUwsRUFBUDtBQUNILFNBRlEsQ0FBUixFQUVHaUIsQ0FBQyxHQUFHQyxRQUFRLENBQUNDLHNCQUFULEVBRlAsRUFFMENDLENBQUMsR0FBRyxDQUZuRCxFQUVzREEsQ0FBQyxHQUFHTixDQUFDLENBQUNULE1BRjVELEVBRW9FZSxDQUFDLEVBRnJFLEVBRXlFO0FBQ3JFLGNBQUlDLENBQUMsR0FBR0gsUUFBUSxDQUFDSSxhQUFULENBQXVCLElBQXZCLENBQVI7QUFDQUQsV0FBQyxDQUFDRSxZQUFGLENBQWUsU0FBZixFQUEwQlQsQ0FBQyxDQUFDTSxDQUFELENBQTNCLEdBQWlDQyxDQUFDLENBQUNHLFNBQUYsR0FBYy9FLE1BQU0sQ0FBQ2dGLGVBQVAsR0FBeUIsSUFBekIsR0FBZ0NYLENBQUMsQ0FBQ00sQ0FBRCxDQUFoRixFQUFxRkgsQ0FBQyxDQUFDUyxXQUFGLENBQWNMLENBQWQsQ0FBckY7QUFDSDs7QUFDRC9GLFNBQUMsQ0FBQzRFLENBQUMsQ0FBQ3lCLE1BQUgsQ0FBRCxDQUFZWixJQUFaLENBQWlCLHNDQUFqQixFQUF5RGEsTUFBekQsQ0FBZ0VYLENBQWhFO0FBQ0gsT0FoQkcsRUFnQkRsQixFQWhCQyxDQWdCRSxlQWhCRixFQWdCbUIsVUFBUzNFLENBQVQsRUFBWTtBQUMvQkUsU0FBQyxDQUFDRixDQUFDLENBQUN1RyxNQUFILENBQUQsQ0FBWVosSUFBWixDQUFpQixzQ0FBakIsRUFBeURjLEtBQXpEO0FBQ0gsT0FsQkcsQ0E1SkosRUE4S0l2RyxDQUFDLENBQUMsd0NBQUQsQ0FBRCxDQUE0Q3lFLEVBQTVDLENBQStDLE9BQS9DLEVBQXdELFlBQVc7QUFDbkUsWUFBSUcsQ0FBQyxHQUFHOUUsQ0FBQyxDQUFDa0QsSUFBRixDQUFPLHVCQUFQLEVBQWdDOEIsS0FBaEMsR0FBd0NXLElBQXhDLENBQTZDLHNDQUE3QyxFQUFxRkMsR0FBckYsQ0FBeUYsVUFBUzVGLENBQVQsRUFBWThFLENBQVosRUFBZTtBQUM1RyxpQkFBTzVFLENBQUMsQ0FBQzRFLENBQUQsQ0FBRCxDQUFLRixHQUFMLEVBQVA7QUFDSCxTQUZPLENBQVI7QUFHQUUsU0FBQyxDQUFDRyxNQUFGLEdBQVcsQ0FBWCxJQUFnQnlCLElBQUksQ0FBQ0MsSUFBTCxDQUFVO0FBQ3RCQyx3QkFBYyxFQUFFLENBQUMsQ0FESztBQUV0QkMsY0FBSSxFQUFFeEYsTUFBTSxDQUFDeUYsbUJBQVAsR0FBNkIsR0FBN0IsR0FBbUNoQyxDQUFDLENBQUNHLE1BQXJDLEdBQThDLEdBQTlDLEdBQW9ENUQsTUFBTSxDQUFDMEYsZ0JBQTNELEdBQThFLElBRjlEO0FBR3RCMUcsY0FBSSxFQUFFLE9BSGdCO0FBSXRCMkcsMkJBQWlCLEVBQUUzRixNQUFNLENBQUM0RixVQUFQLEdBQW9CLElBSmpCO0FBS3RCQyw0QkFBa0IsRUFBRSxnQ0FMRTtBQU10QkMsMEJBQWdCLEVBQUUsQ0FBQyxDQU5HO0FBT3RCQywwQkFBZ0IsRUFBRS9GLE1BQU0sQ0FBQ2dHLFNBUEg7QUFRdEJDLDJCQUFpQixFQUFFO0FBUkcsU0FBVixFQVNiQyxJQVRhLENBU1IsVUFBU3ZILENBQVQsRUFBWTtBQUNoQixjQUFJQSxDQUFDLENBQUN1RSxLQUFOLEVBQWE7QUFBQTs7QUFDVCxnQkFBSWlELFFBQVEsR0FBRzFDLENBQUMsQ0FBQzJDLEdBQUYsRUFBZjtBQUNBdkgsYUFBQyxDQUFDd0gsSUFBRixDQUFPO0FBQ0hySCxrQkFBSSxFQUFFLFFBREg7QUFFSEcsaUJBQUcsRUFBRUMsV0FBVyxHQUFHLFNBRmhCO0FBR0hMLGtCQUFJLHNDQUNDUSxTQURELEVBQ2FWLENBQUMsQ0FBQywyQkFBRCxDQUFELENBQStCVyxJQUEvQixDQUFvQyxTQUFwQyxDQURiLGdDQUVJMkcsUUFGSixTQUhEO0FBT0hHLHNCQUFRLEVBQUUsTUFQUDtBQVFIQyxxQkFBTyxFQUFFLGlCQUFTQyxNQUFULEVBQWlCQyxNQUFqQixFQUF5QkMsR0FBekIsRUFBOEI7QUFDbkM7QUFDQSxvQkFBSUEsR0FBRyxDQUFDRCxNQUFKLElBQWMsR0FBbEIsRUFBdUI7QUFDbkIsc0JBQUlFLGtCQUFrQixHQUFHOUgsQ0FBQyxDQUFDLHFCQUFELENBQUQsQ0FBeUIyRyxJQUF6QixFQUF6QjtBQUNBM0csbUJBQUMsQ0FBQyxxQkFBRCxDQUFELENBQXlCZ0YsSUFBekIsQ0FBK0I4QyxrQkFBa0IsR0FBR1IsUUFBUSxDQUFDdkMsTUFBN0Q7QUFDQS9FLG1CQUFDLENBQUMrSCxNQUFGLENBQVM7QUFDTHZFLHlCQUFLLEVBQUdtRSxNQUFNLENBQUNELE9BQVAsQ0FBZXZDLE9BQWhCLEdBQTJCaEUsTUFBTSxDQUFDNkcsT0FBUCxHQUFpQixHQUE1QyxHQUFrRDdHLE1BQU0sQ0FBQzhHLE9BQVAsR0FBaUIsR0FEckU7QUFFTDlDLDJCQUFPLEVBQUd3QyxNQUFNLENBQUNELE9BQVAsQ0FBZXZDLE9BQWhCLEdBQTJCd0MsTUFBTSxDQUFDRCxPQUFQLENBQWV2QyxPQUExQyxHQUFvRHdDLE1BQU0sQ0FBQ08sS0FBUCxDQUFhL0M7QUFGckUsbUJBQVQsRUFHRztBQUNDaEYsd0JBQUksRUFBR3dILE1BQU0sQ0FBQ0QsT0FBUCxDQUFldkMsT0FBaEIsR0FBMkIsU0FBM0IsR0FBdUM7QUFEOUMsbUJBSEg7QUFNQW5GLG1CQUFDLENBQUMsOEJBQUQsQ0FBRCxDQUFrQ0MsV0FBbEMsR0FBZ0RrSSxNQUFoRDtBQUNIO0FBQ0o7QUFyQkUsYUFBUDtBQXVCSCxXQXpCRCxNQXlCTztBQUNIbkksYUFBQyxDQUFDK0gsTUFBRixDQUFTO0FBQ0x2RSxtQkFBSyxFQUFFckMsTUFBTSxDQUFDNkcsT0FEVDtBQUVMN0MscUJBQU8sRUFBRWhFLE1BQU0sQ0FBQ2lIO0FBRlgsYUFBVCxFQUdHO0FBQ0NqSSxrQkFBSSxFQUFFO0FBRFAsYUFISDtBQU1IO0FBQ0osU0EzQ2UsQ0FBaEI7QUE0Q0gsT0FoREcsQ0E5S0osRUE4TklMLENBQUMsQ0FBQzJFLEVBQUYsQ0FBSyw2QkFBTCxFQUFvQyxZQUFXLENBQUUsQ0FBakQsQ0E5Tko7QUErTkg7QUFqT0UsR0FBUDtBQW1PSCxDQXJPNEIsRUFBN0I7O0FBc09BNEQsTUFBTSxDQUFDQyxLQUFQLENBQWEsWUFBVztBQUNwQnpJLHdCQUFzQixDQUFDRSxJQUF2QjtBQUNILENBRkQsRSIsImZpbGUiOiIvZGV2ZWxvcG1lbnQvanMvcGFnZXMvY3VzdG9tL2xvZ3MvcGFnZS5saXN0LmxvZ3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDQyKTtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIEtUQXBwVXNlckxpc3REYXRhdGFibGUgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgdDtcbiAgICByZXR1cm4ge1xuICAgICAgICBpbml0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHQgPSAkKFwiI2t0X2FwcHNfbG9nc19saXN0X2RhdGF0YWJsZVwiKS5LVERhdGF0YWJsZSh7XG4gICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInJlbW90ZVwiLFxuICAgICAgICAgICAgICAgICAgICBzb3VyY2U6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlYWQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6IGN1cnJlbnRfdXJsICsgXCIvbGlzdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtjcnNmdG9rZW5dOiAkKCdtZXRhW25hbWU9XCJYLUNTUkYtVE9LRU5cIl0nKS5hdHRyKCdjb250ZW50JyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBwYWdlU2l6ZTogMTAsXG4gICAgICAgICAgICAgICAgICAgIHNlcnZlclBhZ2luZzogITAsXG4gICAgICAgICAgICAgICAgICAgIHNlcnZlckZpbHRlcmluZzogITAsXG4gICAgICAgICAgICAgICAgICAgIHNlcnZlclNvcnRpbmc6ICEwXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB0cmFuc2xhdGU6IHtcbiAgICAgICAgICAgICAgICAgICAgcmVjb3Jkczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvY2Vzc2luZzogX0xBTkdfLmxvYWRpbmdfd2FpdCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vUmVjb3JkczogX0xBTkdfLm5vX3JlY29yZF9mb3VuZCxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgdG9vbGJhcjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFnaW5hdGlvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpcnN0OiBfTEFOR18uZmlyc3QsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmV2OiBfTEFOR18ucHJldmlvdXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXh0OiBfTEFOR18ubmV4dCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhc3Q6IF9MQU5HXy5sYXN0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9yZTogX0xBTkdfLm1vcmVfcGFnZXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogX0xBTkdfLnBhZ2VfbnVtYmVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0OiBfTEFOR18uc2VsZWN0X3BhZ2Vfc2l6ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsbDogX0xBTkdfLmFsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5mbzogX0xBTkdfLnNob3dpbmcgKyAnIHt7c3RhcnR9fSAtIHt7ZW5kfX0gb2Yge3t0b3RhbH19JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGxheW91dDoge1xuICAgICAgICAgICAgICAgICAgICBzY3JvbGw6ICExLFxuICAgICAgICAgICAgICAgICAgICBmb290ZXI6ICExXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBzb3J0YWJsZTogITAsXG4gICAgICAgICAgICAgICAgLy8gdG9vbGJhclxuICAgICAgICAgICAgICAgIHRvb2xiYXI6IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gdG9vbGJhciBwbGFjZW1lbnQgY2FuIGJlIGF0IHRvcCBvciBib3R0b20gb3IgYm90aCB0b3AgYW5kIGJvdHRvbSByZXBlYXRlZFxuICAgICAgICAgICAgICAgICAgICBwbGFjZW1lbnQ6IFsnYm90dG9tJywgJ3RvcCddLFxuXG4gICAgICAgICAgICAgICAgICAgIC8vIHRvb2xiYXIgaXRlbXNcbiAgICAgICAgICAgICAgICAgICAgaXRlbXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHBhZ2luYXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2luYXRpb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBwYWdlIHNpemUgc2VsZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnZVNpemVTZWxlY3Q6IFs1LCAxMCwgMjAsIDMwLCA1MCwgMTAwLCA1MDAsIDEwMDBdLCAvLyBkaXNwbGF5IGRyb3Bkb3duIHRvIHNlbGVjdCBwYWdpbmF0aW9uIHNpemUuIC0xIGlzIHVzZWQgZm9yIFwiQUxsXCIgb3B0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgcGFnaW5hdGlvbjogITAsXG4gICAgICAgICAgICAgICAgc2VhcmNoOiB7XG4gICAgICAgICAgICAgICAgICAgIGlucHV0OiAkKFwiI2t0X3N1YmhlYWRlcl9zZWFyY2hfZm9ybVwiKSxcbiAgICAgICAgICAgICAgICAgICAgZGVsYXk6IDQwMFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgcm93czoge1xuICAgICAgICAgICAgICAgICAgICBiZWZvcmVUZW1wbGF0ZTogZnVuY3Rpb24ocm93LCBkYXRhLCBpbmRleCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEuYWN0aXZlID09ICcwJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdy5hZGRDbGFzcygnbm90YWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGNvbHVtbnM6IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWVsZDogXCJpZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiI1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgc29ydGFibGU6ICExLFxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogXCJrdC1jaGVja2JveC0tc29saWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWVsZDogXCJzb3VyY2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBfTEFOR18uc291cmNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDYwLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGU6IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJzxkaXYgY2xhc3M9XCJjYXBpdGFsaXplIHRleHQtZGFyay03NSBmb250LXdlaWdodC1ib2xkZXIgZm9udC1zaXplLWxnIG1iLTBcIj4nICsgdC5zb3VyY2UgKyAnPC9kaXY+JztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWVsZDogXCJzb3VyY2VfaWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBfTEFOR18uaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInNvdXJjZV9pZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgLy9zb3J0YWJsZTogITEsXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjAsXG5cbiAgICAgICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQ6IFwidXNlcl9pZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IF9MQU5HXy51c2VyLFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJ1c2VyX2lkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgLy9zb3J0YWJsZTogITEsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZTogZnVuY3Rpb24odCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJzxkaXYgY2xhc3M9XCJjYXBpdGFsaXplIHRleHQtZGFyay03NSBmb250LXdlaWdodC1ib2xkZXIgZm9udC1zaXplLWxnIG1iLTBcIj4nICsgdC51c2VybmFtZSArICc8L2Rpdj4nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3dpZHRoOiAxMDAsXG5cbiAgICAgICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQ6IFwiZXZlbnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBfTEFOR18uZXZlbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImV2ZW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogODAsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZTogZnVuY3Rpb24odCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJzxkaXYgY2xhc3M9XCIgY2FwaXRhbGl6ZSBmb250LXdlaWdodC1ib2xkIHRleHQtcHJpbWFyeSBmb250LXNpemUtbGcgbWItMFwiPicgKyB0LmV2ZW50ICsgJzwvZGl2Pic7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vd2lkdGg6IDEwMCxcblxuICAgICAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWVsZDogXCJzdW1tYXJ5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogX0xBTkdfLnN1bW1hcnksXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInN1bW1hcnlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA4MCxcblxuICAgICAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWVsZDogXCJkYXRhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogX0xBTkdfLmRldGFpbHMsXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImRhdGFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIG92ZXJmbG93OiBcImhpZGRlblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYXV0b0hpZGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNDAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGU6IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdGVtcGxhdGUgPSAnPGRpdiBjbGFzcz1cIiBjYXBpdGFsaXplIGZvbnQtd2VpZ2h0LWJvbGQgZm9udC1zaXplLW1kIG1iLTBcIj4nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQuZWFjaCh0LmRhdGEsIGZ1bmN0aW9uKGtleSwgdmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGUgKz0gJzxkaXY+PHNwYW4gY2xhc3M9XCJmb250LXdlaWdodC1ib2xkZXIgZm9udC1zaXplLW1kIG1iLTBcIj48c3Ryb25nPicgKyBrZXkgKyAnIDwvc3Ryb25nPjwvc3Bhbj4gOiAnICsgdmFsdWUgKyAnPC9kaXY+JztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlICs9ICc8L2Rpdj4nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0ZW1wbGF0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWVsZDogXCJjcmVhdGVkX2F0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogX0xBTkdfLmRhdGVfY3JlYXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAvL3dpZHRoOiAxMDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtYXQ6IFwiZC9tL1lcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlOiBmdW5jdGlvbih0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICc8ZGl2IGNsYXNzPVwiZm9udC13ZWlnaHQtYm9sZGVyIHRleHQtcHJpbWFyeSBtYi0wXCI+JyArIHQuZGF0ZV9jcmVhdGVfZm9ybWF0X2Z1bGwgKyAnPC9kaXY+JztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0pLCAkKFwiI2t0X2Zvcm1fc3RhdHVzXCIpLm9uKFwiY2hhbmdlXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHQuc2VhcmNoKCQodGhpcykudmFsKCkudG9Mb3dlckNhc2UoKSwgXCJTdGF0dXNcIilcbiAgICAgICAgICAgIH0pLCB0Lm9uKFwiZGF0YXRhYmxlLW9uLWNoZWNrIGRhdGF0YWJsZS1vbi11bmNoZWNrIGRhdGF0YWJsZS1vbi1sYXlvdXQtdXBkYXRlZFwiLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgdmFyIGEgPSB0LnJvd3MoXCIuZGF0YXRhYmxlLXJvdy1hY3RpdmVcIikubm9kZXMoKS5sZW5ndGg7XG4gICAgICAgICAgICAgICAgJChcIiNrdF9zdWJoZWFkZXJfZ3JvdXBfc2VsZWN0ZWRfcm93c1wiKS5odG1sKGEpLCBhID4gMCA/ICgkKFwiI2t0X3N1YmhlYWRlcl9zZWFyY2hcIikuYWRkQ2xhc3MoXCJoaWRkZW5cIiksICQoXCIja3Rfc3ViaGVhZGVyX2dyb3VwX2FjdGlvbnNcIikucmVtb3ZlQ2xhc3MoXCJoaWRkZW5cIikpIDogKCQoXCIja3Rfc3ViaGVhZGVyX3NlYXJjaFwiKS5yZW1vdmVDbGFzcyhcImhpZGRlblwiKSwgJChcIiNrdF9zdWJoZWFkZXJfZ3JvdXBfYWN0aW9uc1wiKS5hZGRDbGFzcyhcImhpZGRlblwiKSlcbiAgICAgICAgICAgIH0pLCAkKFwiI2t0X2RhdGF0YWJsZV9yZWNvcmRzX2ZldGNoX21vZGFsXCIpLm9uKFwic2hvdy5icy5tb2RhbFwiLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgdmFyIGEgPSBuZXcgS1REaWFsb2coe1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImxvYWRlclwiLFxuICAgICAgICAgICAgICAgICAgICBwbGFjZW1lbnQ6IFwidG9wIGNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBfTEFOR18ubG9hZGluZyArIFwiLi4uXCJcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBhLnNob3coKSwgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgYS5oaWRlKClcbiAgICAgICAgICAgICAgICB9LCAxZTMpO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIG4gPSB0LnJvd3MoXCIuZGF0YXRhYmxlLXJvdy1hY3RpdmVcIikubm9kZXMoKS5maW5kKCcuY2hlY2tib3gtc2luZ2xlID4gW3R5cGU9XCJjaGVja2JveFwiXScpLm1hcChmdW5jdGlvbih0LCBlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJChlKS52YWwoKVxuICAgICAgICAgICAgICAgICAgICB9KSwgcyA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKSwgbCA9IDA7IGwgPCBuLmxlbmd0aDsgbCsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgICAgICAgICAgICAgICAgICBpLnNldEF0dHJpYnV0ZShcImRhdGEtaWRcIiwgbltsXSksIGkuaW5uZXJIVE1MID0gX0xBTkdfLnNlbGVjdGVkX3Jvd19pZCArIFwiOiBcIiArIG5bbF0sIHMuYXBwZW5kQ2hpbGQoaSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgJChlLnRhcmdldCkuZmluZChcIiNrdF9hcHBzX3VzZXJfZmV0Y2hfcmVjb3Jkc19zZWxlY3RlZFwiKS5hcHBlbmQocylcbiAgICAgICAgICAgIH0pLm9uKFwiaGlkZS5icy5tb2RhbFwiLCBmdW5jdGlvbih0KSB7XG4gICAgICAgICAgICAgICAgJCh0LnRhcmdldCkuZmluZChcIiNrdF9hcHBzX3VzZXJfZmV0Y2hfcmVjb3Jkc19zZWxlY3RlZFwiKS5lbXB0eSgpXG4gICAgICAgICAgICB9KSwgJChcIiNrdF9zdWJoZWFkZXJfZ3JvdXBfYWN0aW9uc19kZWxldGVfYWxsXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdmFyIGUgPSB0LnJvd3MoXCIuZGF0YXRhYmxlLXJvdy1hY3RpdmVcIikubm9kZXMoKS5maW5kKCcuY2hlY2tib3gtc2luZ2xlID4gW3R5cGU9XCJjaGVja2JveFwiXScpLm1hcChmdW5jdGlvbih0LCBlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAkKGUpLnZhbCgpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgZS5sZW5ndGggPiAwICYmIHN3YWwuZmlyZSh7XG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbnNTdHlsaW5nOiAhMSxcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogX0xBTkdfLmFyZV95b3Vfc3VyZV9kZWxldGUgKyBcIiBcIiArIGUubGVuZ3RoICsgXCIgXCIgKyBfTEFOR18uc2VsZWN0ZWRfcmVjb3JkcyArIFwiID9cIixcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJlcnJvclwiLFxuICAgICAgICAgICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogX0xBTkdfLnllc19kZWxldGUgKyAnICEnLFxuICAgICAgICAgICAgICAgICAgICBjb25maXJtQnV0dG9uQ2xhc3M6IFwiYnRuIGJ0bi1zbSBidG4tYm9sZCBidG4tZGFuZ2VyXCIsXG4gICAgICAgICAgICAgICAgICAgIHNob3dDYW5jZWxCdXR0b246ICEwLFxuICAgICAgICAgICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBfTEFOR18ubm9fY2FuY2VsLFxuICAgICAgICAgICAgICAgICAgICBjYW5jZWxCdXR0b25DbGFzczogXCJidG4gYnRuLXNtIGJ0bi1ib2xkIGJ0bi1kYXJrXCJcbiAgICAgICAgICAgICAgICB9KS50aGVuKGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQudmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzZWxlY3RlZCA9IGUuZ2V0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdERUxFVEUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybDogY3VycmVudF91cmwgKyBcIi9kZWxldGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtjcnNmdG9rZW5dOiAkKCdtZXRhW25hbWU9XCJYLUNTUkYtVE9LRU5cIl0nKS5hdHRyKCdjb250ZW50JyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBzZWxlY3RlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVR5cGU6IFwianNvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3VsdCwgc3RhdHVzLCB4aHIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9TdWNjZXNzIE1lc3NhZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHhoci5zdGF0dXMgPT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIga3Rfc3ViaGVhZGVyX3RvdGFsID0gJCgnLmt0X3N1YmhlYWRlcl90b3RhbCcpLnRleHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJy5rdF9zdWJoZWFkZXJfdG90YWwnKS5odG1sKChrdF9zdWJoZWFkZXJfdG90YWwgLSBzZWxlY3RlZC5sZW5ndGgpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQubm90aWZ5KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogKHJlc3VsdC5zdWNjZXNzLm1lc3NhZ2UpID8gX0xBTkdfLmRlbGV0ZWQgKyBcIiFcIiA6IF9MQU5HXy53YXJuaW5nICsgXCIhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogKHJlc3VsdC5zdWNjZXNzLm1lc3NhZ2UpID8gcmVzdWx0LnN1Y2Nlc3MubWVzc2FnZSA6IHJlc3VsdC5lcnJvci5tZXNzYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogKHJlc3VsdC5zdWNjZXNzLm1lc3NhZ2UpID8gJ3N1Y2Nlc3MnIDogJ3dhcm5pbmcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoXCIja3RfYXBwc19sb2dzX2xpc3RfZGF0YXRhYmxlXCIpLktURGF0YXRhYmxlKCkucmVsb2FkKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgJC5ub3RpZnkoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBfTEFOR18uZGVsZXRlZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBfTEFOR18ueW91cl9zZWxlY3RlZF9yZWNvcmRzX2hhdmVfbm90X2JlZW5fZGVsZXRlZFxuICAgICAgICAgICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdpbmZvJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSksIHQub24oXCJkYXRhdGFibGUtb24tbGF5b3V0LXVwZGF0ZWRcIiwgZnVuY3Rpb24oKSB7fSlcbiAgICAgICAgfVxuICAgIH1cbn0oKTtcbktUVXRpbC5yZWFkeShmdW5jdGlvbigpIHtcbiAgICBLVEFwcFVzZXJMaXN0RGF0YXRhYmxlLmluaXQoKVxufSk7Il0sInNvdXJjZVJvb3QiOiIifQ==