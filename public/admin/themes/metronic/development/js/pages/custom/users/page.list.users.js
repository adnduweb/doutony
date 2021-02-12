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
/******/ 	return __webpack_require__(__webpack_require__.s = 54);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/metronic/js/pages/custom/users/page.list.users.js":
/*!*********************************************************************!*\
  !*** ./resources/metronic/js/pages/custom/users/page.list.users.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var KTAppUserListDatatable = function () {
  var t;
  return {
    init: function init() {
      t = $("#kt_apps_user_list_datatable").KTDatatable({
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
          },
          callback: function callback(row, data, index) {}
        },
        columns: [{
          field: "uuid",
          title: "#",
          sortable: !1,
          width: 20,
          selector: {
            "class": "checkbox-solid"
          },
          textAlign: "center"
        }, {
          field: "username",
          title: _LANG_.prenom_nom_client,
          width: 200,
          template: function template(t, e) {
            for (var a = 4 + e; a > 12;) {
              a -= 3;
            }

            var n = "100_" + a + ".jpg",
                s = KTUtil.getRandomInt(0, 5),
                l = ["Developer", "Designer", "CEO", "Manager", "Architect", "Sales"]; //u = ["success", "brand", "danger", "success", "warning", "primary", "info"];

            var e = {
              1: {
                "class": "success"
              },
              2: {
                "class": "brand"
              },
              3: {
                "class": "danger"
              },
              4: {
                "class": "warning"
              },
              5: {
                "class": "primary"
              },
              6: {
                "class": "info"
              }
            }; //return '<div class="user-card-v2">\t\t\t\t\t\t\t\t<div class="user-card-v2__pic">\t\t\t\t\t\t\t\t\t<div class="badge badge--xl badge--' + ["success", "brand", "danger", "success", "warning", "primary", "info"][KTUtil.getRandomInt(0, 6)] + '">' + t.nom.substring(0, 1) + ' ' + t.prenom.substring(0, 1) + '</div>\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\t<div class="user-card-v2__details">\t\t\t\t\t\t\t\t\t<a href="' +basePath + segementAdmin + '/settings-advanced/users/detail/' + t.uuid + '" class="user-card-v2__name">' + t.nom + ' ' + t.prenom + '</a>\t\t\t\t\t\t\t\t\t<span class="user-card-v2__desc">' + l[s] + "</span>\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t</div>"
            //return '<div class="user-card-v2">\t\t\t\t\t\t\t\t<div class="user-card-v2__pic">\t\t\t\t\t\t\t\t\t<div class="badge badge--xl badge--' + ["success", "brand", "danger", "success", "warning", "primary", "info"][KTUtil.getRandomInt(0, 6)] + '">' + t.lastname.substring(0, 1) + ' ' + t.firstname.substring(0, 1) + '</div>\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\t<div class="user-card-v2__details">\t\t\t\t\t\t\t\t\t<a href="' + basePath + segementAdmin + '/settings-advanced/users/detail/' + t.uuid + '" class="user-card-v2__name">' + t.lastname + ' ' + t.firstname + '</a>\t\t\t\t\t\t\t\t\t<span class="user-card-v2__desc">' + t.email + "</span>\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t</div>"

            return '<div class="d-flex align-items-center"><div class="symbol symbol-40 symbol-light-success flex-shrink-0">\
                        <span class="symbol-label font-size-h4 font-weight-bold badge--' + e[t.group[0].group_id]["class"] + '">\
                        ' + t.lastname.substring(0, 1) + ' ' + t.firstname.substring(0, 1) + '</span>\
                        </div><div class="ml-4">\
                        <div class="text-dark-75 font-weight-bolder font-size-lg mb-0"><a href="' + startUrl + '/settings-advanced/users/edit/' + t.uuid + '" class="link text-dark-75">\
                        ' + t.lastname + ' ' + t.firstname + '</a></div><span class="text-muted font-weight-bold text-hover-primary">' + t.fonction + "</span>\
                        </div></div>";
          }
        }, {
          field: "email",
          title: _LANG_.email,
          type: "email",
          //width: 100,
          template: function template(t) {
            return '<div class="font-weight-bold text-muted">' + t.email + '</div>';
          }
        }, {
          field: "phone",
          title: "Tel",
          width: "auto",
          autoHide: !1,
          template: function template(t, e) {
            for (var a = e + 1; a > 5;) {
              a -= 3;
            }

            if (t.phone_mobile == null) t.phone_mobile = "nc";
            if (t.phone == null) t.phone = "nc";
            return '<div class="font-weight-bolder font-size-lg mb-0" >Fixe: <a class="font-weight-bold text-muted" href="tel:' + t.phone + '">' + t.phone + '</a></div>\
                                        <div class="font-weight-bolder font-size-lg mb-0"> Mobile: <a class="font-weight-bold text-muted" href="tel:' + t.phone_mobile + '">' + t.phone_mobile + "</a></div>";
          }
        }, {
          field: "group_id",
          title: "Role",
          sortable: !1,
          width: 150,
          template: function template(t) {
            var e = {
              1: {
                "class": "dark"
              },
              2: {
                "class": "info"
              },
              3: {
                "class": "warning"
              },
              4: {
                "class": "info"
              },
              5: {
                "class": "warning"
              },
              6: {
                "class": "danger"
              },
              7: {
                "class": "warning"
              }
            };
            var groupName = '';
            $(t.group).each(function (index, value) {
              groupName += value.name + ', ';
            });
            return '<span data-group=' + t.active + ' class="btn btn-bold btn-sm btn-font-sm  btn-' + e[t.group[0].group_id]["class"] + ' mr-2 px-2">' + groupName + "</span>";
          }
        }, {
          //$type (1 = publied, 2 = wait corrected, 3 = wait publied, 4 = brouillon)
          field: "active",
          title: _LANG_.active,
          sortable: !1,
          width: 150,
          template: function template(t) {
            if (t.status == false || t.status == null) {
              var classActive = 'btn-light-success';
            } else {
              var classActive = 'btn-light-danger';
            }

            if (t.status == false || t.status == null) {
              var textActive = _LANG_.active;
            } else {
              var textActive = _LANG_.desactive;
            }

            if (t.status == false || t.status == null) {
              var idActive = 'disabled';
            } else {
              var idActive = '';
            }

            if (t.status == false || t.status == null) {
              var idActiveMessage = 'explain_disabled';
            } else {
              var idActiveMessage = '';
            }

            var template = '<a href="javascript:;" data-status_message="' + idActiveMessage + '" data-status="' + idActive + '" data-id="' + t.uuid + '" class="actionActive btn btn-bold btn-sm btn-font-sm ' + classActive + '">' + textActive + '</a>';
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
            var groupUser = [];
            var superAdmin = false;
            $(t.group).each(function (index, value) {
              groupUser[index] = value.group_id;

              if (value.group_id == '1') {
                superAdmin = true;
              }
            });

            if (superAdmin == true && !$.checkValue(1, id_group) || t.id == '1') {
              if (user_uuid == t.uuid) {
                var template = '<div class="dropdown">\
                                    <a href="javascript:;" class="btn btn-sm btn-clean btn-icon btn-icon-md" data-toggle="dropdown">\
                                    <i class="flaticon-more-1"></i></a>\
                                    <div class="dropdown-menu dropdown-menu-right">\
                                    <ul class="navi flex-column navi-hover py-2">';
                template += '<li class="navi-item">\
                                    <a href="#" data-controller="user" data-action="actionView" data-module="false" data-value="' + t.uuid + '" class="actioncontroller navi-link">\
                                    <span class="navi-icon"><i class="flaticon2-expand"></i></span>\
                                    <span class="navi-text">' + _LANG_.view + '</span>\
                                    </a></li>';
                template += '<li class="navi-item">\
                                    <a href="' + startUrl + '/settings-advanced/users/edit/' + t.uuid + '" class="navi-link">\
                                    <span class="navi-icon"><i class="flaticon2-contract"></i></span>\
                                    <span class="navi-text">' + _LANG_.edit + '</span>\
                                    </a></li>';
                template += ' </ul></div></div>';
                return template;
              } //silent


              return template = '';
            } else {
              var template = '<div class="dropdown">\
                                <a href="javascript:;" class="btn btn-sm btn-clean btn-icon btn-icon-md" data-toggle="dropdown">\
                                <i class="flaticon-more-1"></i></a>\
                                <div class="dropdown-menu dropdown-menu-right">\
                                <ul class="navi flex-column navi-hover py-2">';
              template += '<li class="navi-item">\
                                <a href="#" data-controller="user" data-action="actionView" data-module="false" data-value="' + t.uuid + '" class="actioncontroller navi-link">\
                                <span class="navi-icon"><i class="flaticon2-expand"></i></span>\
                                <span class="navi-text">' + _LANG_.view + '</span>\
                                </a></li>'; //console.log(id_group.indexOf(groupUser));

              if (superAdmin == true && $.checkValue(1, id_group) || superAdmin == false) {
                template += '<li class="navi-item">\
                                <a href="' + startUrl + '/settings-advanced/users/edit/' + t.uuid + '" class="navi-link">\
                                <span class="navi-icon"><i class="flaticon2-contract"></i></span>\
                                <span class="navi-text">' + _LANG_.edit + '</span>\
                                </a></li>';
              }

              if (t.id != '1' && t.uuid != user_uuid) {
                template += ' <li class="navi-item">\
                                <a href="#" data-id="' + t.uuid + '" class="deleterowKtdatatable navi-link">\
                                <span class="navi-icon"><i class="navi-icon flaticon2-trash"></i></span>\
                                <span class="navi-text">' + _LANG_["delete"] + '</span>\
                                </a>\
                                </li>';
              }

              template += ' </ul></div></div>';
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
        var e = $(this).find(".navi-link-text").html(),
            st = $(this).find(".navi-link-text").data('status'),
            a = t.rows(".datatable-row-active").nodes().find('.checkbox-single > [type="checkbox"]').map(function (t, e) {
          return {
            uuid: $(e).val(),
            active: st
          };
        });
        a.length > 0 && swal.fire({
          buttonsStyling: !1,
          html: _LANG_.are_you_sure_update + " " + a.length + " " + _LANG_.selected_records_status_to + " " + e + " ?",
          type: "info",
          confirmButtonText: _LANG_.yes_update + "!",
          confirmButtonClass: "btn btn-sm btn-bold btn-success",
          showCancelButton: !0,
          cancelButtonText: _LANG_.no_cancel,
          cancelButtonClass: "btn btn-sm btn-bold btn-dark"
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
                  $("#kt_apps_user_list_datatable").KTDatatable().reload();
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
              data: (_data2 = {}, _defineProperty(_data2, crsftoken, $('meta[name="X-CSRF-TOKEN"]').attr('content')), _defineProperty(_data2, "uuid", selected), _data2),
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
                  $("#kt_apps_user_list_datatable").KTDatatable().reload();
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
    var status = $(this).attr('data-status');
    var status_message = $(this).attr('data-status_message');
    var uuid = $(this).attr('data-id');
    var value = [];
    $.ajax({
      type: 'POST',
      url: current_url + "/ajaxUpdate",
      contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
      data: (_data3 = {}, _defineProperty(_data3, crsftoken, $('meta[name="X-CSRF-TOKEN"]').attr('content')), _defineProperty(_data3, "value", [{
        uuid: uuid,
        status: status,
        status_message: status_message
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
          $("#kt_apps_user_list_datatable").KTDatatable().reload();
        }
      }
    });
  }); //show

  $(document).on("click", ".actioncontroller", function (e) {
    e.preventDefault();
    var value = $(this).data('value');
    $.ajax({
      type: 'GET',
      url: current_url + "/show/" + value,
      data: _defineProperty({}, crsftoken, $('meta[name="X-CSRF-TOKEN"]').attr('content')),
      dataType: "json",
      success: function success(response, status, xhr) {
        if (xhr.status == 200) {
          if (response.error == false) {
            $('#kt_modal_loading_wrapper').html(response.success.message);
            $('#kt_modal_loading').modal('show'); //now its working

            KTApp.initTooltips();
          } // $("#kt_apps_user_list_datatable").KTDatatable().reload();

        }
      }
    });
  });
});

/***/ }),

/***/ 54:
/*!***************************************************************************!*\
  !*** multi ./resources/metronic/js/pages/custom/users/page.list.users.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Applications/MAMP/htdocs/spreadci4/public/admin/themes/metronic/resources/metronic/js/pages/custom/users/page.list.users.js */"./resources/metronic/js/pages/custom/users/page.list.users.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL21ldHJvbmljL2pzL3BhZ2VzL2N1c3RvbS91c2Vycy9wYWdlLmxpc3QudXNlcnMuanMiXSwibmFtZXMiOlsiS1RBcHBVc2VyTGlzdERhdGF0YWJsZSIsInQiLCJpbml0IiwiJCIsIktURGF0YXRhYmxlIiwiZGF0YSIsInR5cGUiLCJzb3VyY2UiLCJyZWFkIiwidXJsIiwiY3VycmVudF91cmwiLCJtZXRob2QiLCJwYXJhbXMiLCJjcnNmdG9rZW4iLCJhdHRyIiwicGFnZVNpemUiLCJzZXJ2ZXJQYWdpbmciLCJzZXJ2ZXJGaWx0ZXJpbmciLCJzZXJ2ZXJTb3J0aW5nIiwidHJhbnNsYXRlIiwicmVjb3JkcyIsInByb2Nlc3NpbmciLCJfTEFOR18iLCJsb2FkaW5nX3dhaXQiLCJub1JlY29yZHMiLCJub19yZWNvcmRfZm91bmQiLCJ0b29sYmFyIiwicGFnaW5hdGlvbiIsIml0ZW1zIiwiZmlyc3QiLCJwcmV2IiwicHJldmlvdXMiLCJuZXh0IiwibGFzdCIsIm1vcmUiLCJtb3JlX3BhZ2VzIiwiaW5wdXQiLCJwYWdlX251bWJlciIsInNlbGVjdCIsInNlbGVjdF9wYWdlX3NpemUiLCJhbGwiLCJpbmZvIiwic2hvd2luZyIsImxheW91dCIsInNjcm9sbCIsImZvb3RlciIsInNvcnRhYmxlIiwic2VhcmNoIiwiZGVsYXkiLCJyb3dzIiwiYmVmb3JlVGVtcGxhdGUiLCJyb3ciLCJpbmRleCIsImFjdGl2ZSIsImFkZENsYXNzIiwiY2FsbGJhY2siLCJjb2x1bW5zIiwiZmllbGQiLCJ0aXRsZSIsIndpZHRoIiwic2VsZWN0b3IiLCJ0ZXh0QWxpZ24iLCJwcmVub21fbm9tX2NsaWVudCIsInRlbXBsYXRlIiwiZSIsImEiLCJuIiwicyIsIktUVXRpbCIsImdldFJhbmRvbUludCIsImwiLCJncm91cCIsImdyb3VwX2lkIiwibGFzdG5hbWUiLCJzdWJzdHJpbmciLCJmaXJzdG5hbWUiLCJzdGFydFVybCIsInV1aWQiLCJmb25jdGlvbiIsImVtYWlsIiwiYXV0b0hpZGUiLCJwaG9uZV9tb2JpbGUiLCJwaG9uZSIsImdyb3VwTmFtZSIsImVhY2giLCJ2YWx1ZSIsIm5hbWUiLCJzdGF0dXMiLCJjbGFzc0FjdGl2ZSIsInRleHRBY3RpdmUiLCJkZXNhY3RpdmUiLCJpZEFjdGl2ZSIsImlkQWN0aXZlTWVzc2FnZSIsImRhdGVfY3JlYXRlIiwiZm9ybWF0IiwiZGF0ZV9jcmVhdGVfZm9ybWF0Iiwib3ZlcmZsb3ciLCJncm91cFVzZXIiLCJzdXBlckFkbWluIiwiY2hlY2tWYWx1ZSIsImlkX2dyb3VwIiwiaWQiLCJ1c2VyX3V1aWQiLCJ2aWV3IiwiZWRpdCIsIm9uIiwidmFsIiwidG9Mb3dlckNhc2UiLCJub2RlcyIsImxlbmd0aCIsImh0bWwiLCJyZW1vdmVDbGFzcyIsIktURGlhbG9nIiwicGxhY2VtZW50IiwibWVzc2FnZSIsImxvYWRpbmciLCJzaG93Iiwic2V0VGltZW91dCIsImhpZGUiLCJmaW5kIiwibWFwIiwiZG9jdW1lbnQiLCJjcmVhdGVEb2N1bWVudEZyYWdtZW50IiwiaSIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJpbm5lckhUTUwiLCJzZWxlY3RlZF9yb3dfaWQiLCJhcHBlbmRDaGlsZCIsInRhcmdldCIsImFwcGVuZCIsImVtcHR5IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInN0Iiwic3dhbCIsImZpcmUiLCJidXR0b25zU3R5bGluZyIsImFyZV95b3Vfc3VyZV91cGRhdGUiLCJzZWxlY3RlZF9yZWNvcmRzX3N0YXR1c190byIsImNvbmZpcm1CdXR0b25UZXh0IiwieWVzX3VwZGF0ZSIsImNvbmZpcm1CdXR0b25DbGFzcyIsInNob3dDYW5jZWxCdXR0b24iLCJjYW5jZWxCdXR0b25UZXh0Iiwibm9fY2FuY2VsIiwiY2FuY2VsQnV0dG9uQ2xhc3MiLCJ0aGVuIiwiYWpheCIsImdldCIsImRhdGFUeXBlIiwic3VjY2VzcyIsInJlc3VsdCIsInhociIsIm5vdGlmeSIsInVwZGF0ZWQiLCJ3YXJuaW5nIiwiZXJyb3IiLCJyZWxvYWQiLCJjYW5jZWxsZWQiLCJ5b3VyX3NlbGV0ZWRfcmVjb3Jkc19zdGF0dXNlc19oYXZlX25vdF9iZWVuX3VwZGF0ZWQiLCJ0ZXh0IiwiYXJlX3lvdV9zdXJlX2RlbGV0ZSIsInNlbGVjdGVkX3JlY29yZHMiLCJ5ZXNfZGVsZXRlIiwic2VsZWN0ZWQiLCJrdF9zdWJoZWFkZXJfdG90YWwiLCJkZWxldGVkIiwieW91cl9zZWxlY3RlZF9yZWNvcmRzX2hhdmVfbm90X2JlZW5fZGVsZXRlZCIsInJlYWR5Iiwic3RhdHVzX21lc3NhZ2UiLCJjb250ZW50VHlwZSIsInJlc3BvbnNlIiwibW9kYWwiLCJLVEFwcCIsImluaXRUb29sdGlwcyJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGYTs7OztBQUNiLElBQUlBLHNCQUFzQixHQUFHLFlBQVc7QUFDcEMsTUFBSUMsQ0FBSjtB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dkJEO0FBd0JILENBOURELEUiLCJmaWxlIjoiL2RldmVsb3BtZW50L2pzL3BhZ2VzL2N1c3RvbS91c2Vycy9wYWdlLmxpc3QudXNlcnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDU0KTtcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgS1RBcHBVc2VyTGlzdERhdGF0YWJsZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgdmFyIHQ7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICB0ID0gJChcIiNrdF9hcHBzX3VzZXJfbGlzdF9kYXRhdGFibGVcIikuS1REYXRhdGFibGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJyZW1vdGVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFkOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBjdXJyZW50X3VybCArIFwiL2xpc3RcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbY3JzZnRva2VuXTogJCgnbWV0YVtuYW1lPVwiWC1DU1JGLVRPS0VOXCJdJykuYXR0cignY29udGVudCcpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFnZVNpemU6IDEwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXJ2ZXJQYWdpbmc6ICEwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXJ2ZXJGaWx0ZXJpbmc6ICEwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXJ2ZXJTb3J0aW5nOiAhMFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNsYXRlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlY29yZHM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2Nlc3Npbmc6IF9MQU5HXy5sb2FkaW5nX3dhaXQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub1JlY29yZHM6IF9MQU5HXy5ub19yZWNvcmRfZm91bmQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvb2xiYXI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2luYXRpb246IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaXJzdDogX0xBTkdfLmZpcnN0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJldjogX0xBTkdfLnByZXZpb3VzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV4dDogX0xBTkdfLm5leHQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXN0OiBfTEFOR18ubGFzdCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vcmU6IF9MQU5HXy5tb3JlX3BhZ2VzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IF9MQU5HXy5wYWdlX251bWJlcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdDogX0xBTkdfLnNlbGVjdF9wYWdlX3NpemUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGw6IF9MQU5HXy5hbGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZm86IF9MQU5HXy5zaG93aW5nICsgJyB7e3N0YXJ0fX0gLSB7e2VuZH19IG9mIHt7dG90YWx9fScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBsYXlvdXQ6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2Nyb2xsOiAhMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9vdGVyOiAhMVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgc29ydGFibGU6ICEwLFxyXG4gICAgICAgICAgICAgICAgICAgIHBhZ2luYXRpb246ICEwLFxyXG4gICAgICAgICAgICAgICAgICAgIHNlYXJjaDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogJChcIiNrdF9zdWJoZWFkZXJfc2VhcmNoX2Zvcm1cIiksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGF5OiA0MDBcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHJvd3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmVmb3JlVGVtcGxhdGU6IGZ1bmN0aW9uKHJvdywgZGF0YSwgaW5kZXgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLmFjdGl2ZSA9PSAnMCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3cuYWRkQ2xhc3MoJ25vdGFjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKHJvdywgZGF0YSwgaW5kZXgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbHVtbnM6IFt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZDogXCJ1dWlkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCIjXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3J0YWJsZTogITEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3Rvcjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiBcImNoZWNrYm94LXNvbGlkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQ6IFwidXNlcm5hbWVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBfTEFOR18ucHJlbm9tX25vbV9jbGllbnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGU6IGZ1bmN0aW9uKHQsIGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBhID0gNCArIGU7IGEgPiAxMjspIGEgLT0gMztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbiA9IFwiMTAwX1wiICsgYSArIFwiLmpwZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzID0gS1RVdGlsLmdldFJhbmRvbUludCgwLCA1KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbCA9IFtcIkRldmVsb3BlclwiLCBcIkRlc2lnbmVyXCIsIFwiQ0VPXCIsIFwiTWFuYWdlclwiLCBcIkFyY2hpdGVjdFwiLCBcIlNhbGVzXCJdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vdSA9IFtcInN1Y2Nlc3NcIiwgXCJicmFuZFwiLCBcImRhbmdlclwiLCBcInN1Y2Nlc3NcIiwgXCJ3YXJuaW5nXCIsIFwicHJpbWFyeVwiLCBcImluZm9cIl07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGUgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiBcInN1Y2Nlc3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogXCJicmFuZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiBcImRhbmdlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDQ6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiBcIndhcm5pbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA1OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogXCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgNjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IFwiaW5mb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vcmV0dXJuICc8ZGl2IGNsYXNzPVwidXNlci1jYXJkLXYyXCI+XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0PGRpdiBjbGFzcz1cInVzZXItY2FyZC12Ml9fcGljXCI+XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0PGRpdiBjbGFzcz1cImJhZGdlIGJhZGdlLS14bCBiYWRnZS0tJyArIFtcInN1Y2Nlc3NcIiwgXCJicmFuZFwiLCBcImRhbmdlclwiLCBcInN1Y2Nlc3NcIiwgXCJ3YXJuaW5nXCIsIFwicHJpbWFyeVwiLCBcImluZm9cIl1bS1RVdGlsLmdldFJhbmRvbUludCgwLCA2KV0gKyAnXCI+JyArIHQubm9tLnN1YnN0cmluZygwLCAxKSArICcgJyArIHQucHJlbm9tLnN1YnN0cmluZygwLCAxKSArICc8L2Rpdj5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQ8L2Rpdj5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQ8ZGl2IGNsYXNzPVwidXNlci1jYXJkLXYyX19kZXRhaWxzXCI+XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0PGEgaHJlZj1cIicgK2Jhc2VQYXRoICsgc2VnZW1lbnRBZG1pbiArICcvc2V0dGluZ3MtYWR2YW5jZWQvdXNlcnMvZGV0YWlsLycgKyB0LnV1aWQgKyAnXCIgY2xhc3M9XCJ1c2VyLWNhcmQtdjJfX25hbWVcIj4nICsgdC5ub20gKyAnICcgKyB0LnByZW5vbSArICc8L2E+XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0PHNwYW4gY2xhc3M9XCJ1c2VyLWNhcmQtdjJfX2Rlc2NcIj4nICsgbFtzXSArIFwiPC9zcGFuPlxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdDwvZGl2PlxcdFxcdFxcdFxcdFxcdFxcdFxcdDwvZGl2PlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9yZXR1cm4gJzxkaXYgY2xhc3M9XCJ1c2VyLWNhcmQtdjJcIj5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQ8ZGl2IGNsYXNzPVwidXNlci1jYXJkLXYyX19waWNcIj5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQ8ZGl2IGNsYXNzPVwiYmFkZ2UgYmFkZ2UtLXhsIGJhZGdlLS0nICsgW1wic3VjY2Vzc1wiLCBcImJyYW5kXCIsIFwiZGFuZ2VyXCIsIFwic3VjY2Vzc1wiLCBcIndhcm5pbmdcIiwgXCJwcmltYXJ5XCIsIFwiaW5mb1wiXVtLVFV0aWwuZ2V0UmFuZG9tSW50KDAsIDYpXSArICdcIj4nICsgdC5sYXN0bmFtZS5zdWJzdHJpbmcoMCwgMSkgKyAnICcgKyB0LmZpcnN0bmFtZS5zdWJzdHJpbmcoMCwgMSkgKyAnPC9kaXY+XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0PC9kaXY+XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0PGRpdiBjbGFzcz1cInVzZXItY2FyZC12Ml9fZGV0YWlsc1wiPlxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdDxhIGhyZWY9XCInICsgYmFzZVBhdGggKyBzZWdlbWVudEFkbWluICsgJy9zZXR0aW5ncy1hZHZhbmNlZC91c2Vycy9kZXRhaWwvJyArIHQudXVpZCArICdcIiBjbGFzcz1cInVzZXItY2FyZC12Ml9fbmFtZVwiPicgKyB0Lmxhc3RuYW1lICsgJyAnICsgdC5maXJzdG5hbWUgKyAnPC9hPlxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdDxzcGFuIGNsYXNzPVwidXNlci1jYXJkLXYyX19kZXNjXCI+JyArIHQuZW1haWwgKyBcIjwvc3Bhbj5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQ8L2Rpdj5cXHRcXHRcXHRcXHRcXHRcXHRcXHQ8L2Rpdj5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnPGRpdiBjbGFzcz1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj48ZGl2IGNsYXNzPVwic3ltYm9sIHN5bWJvbC00MCBzeW1ib2wtbGlnaHQtc3VjY2VzcyBmbGV4LXNocmluay0wXCI+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJzeW1ib2wtbGFiZWwgZm9udC1zaXplLWg0IGZvbnQtd2VpZ2h0LWJvbGQgYmFkZ2UtLScgKyBlW3QuZ3JvdXBbMF0uZ3JvdXBfaWRdLmNsYXNzICsgJ1wiPlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICcgKyB0Lmxhc3RuYW1lLnN1YnN0cmluZygwLCAxKSArICcgJyArIHQuZmlyc3RuYW1lLnN1YnN0cmluZygwLCAxKSArICc8L3NwYW4+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+PGRpdiBjbGFzcz1cIm1sLTRcIj5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1kYXJrLTc1IGZvbnQtd2VpZ2h0LWJvbGRlciBmb250LXNpemUtbGcgbWItMFwiPjxhIGhyZWY9XCInICsgc3RhcnRVcmwgKyAnL3NldHRpbmdzLWFkdmFuY2VkL3VzZXJzL2VkaXQvJyArIHQudXVpZCArICdcIiBjbGFzcz1cImxpbmsgdGV4dC1kYXJrLTc1XCI+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJyArIHQubGFzdG5hbWUgKyAnICcgKyB0LmZpcnN0bmFtZSArICc8L2E+PC9kaXY+PHNwYW4gY2xhc3M9XCJ0ZXh0LW11dGVkIGZvbnQtd2VpZ2h0LWJvbGQgdGV4dC1ob3Zlci1wcmltYXJ5XCI+JyArIHQuZm9uY3Rpb24gKyBcIjwvc3Bhbj5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj48L2Rpdj5cIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQ6IFwiZW1haWxcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBfTEFOR18uZW1haWwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImVtYWlsXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3dpZHRoOiAxMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZTogZnVuY3Rpb24odCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnPGRpdiBjbGFzcz1cImZvbnQtd2VpZ2h0LWJvbGQgdGV4dC1tdXRlZFwiPicgKyB0LmVtYWlsICsgJzwvZGl2Pic7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkOiBcInBob25lXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJUZWxcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcImF1dG9cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9IaWRlOiAhMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlOiBmdW5jdGlvbih0LCBlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgYSA9IGUgKyAxOyBhID4gNTspIGEgLT0gMztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodC5waG9uZV9tb2JpbGUgPT0gbnVsbCkgdC5waG9uZV9tb2JpbGUgPSBcIm5jXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHQucGhvbmUgPT0gbnVsbCkgdC5waG9uZSA9IFwibmNcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJzxkaXYgY2xhc3M9XCJmb250LXdlaWdodC1ib2xkZXIgZm9udC1zaXplLWxnIG1iLTBcIiA+Rml4ZTogPGEgY2xhc3M9XCJmb250LXdlaWdodC1ib2xkIHRleHQtbXV0ZWRcIiBocmVmPVwidGVsOicgKyB0LnBob25lICsgJ1wiPicgKyB0LnBob25lICsgJzwvYT48L2Rpdj5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnQtd2VpZ2h0LWJvbGRlciBmb250LXNpemUtbGcgbWItMFwiPiBNb2JpbGU6IDxhIGNsYXNzPVwiZm9udC13ZWlnaHQtYm9sZCB0ZXh0LW11dGVkXCIgaHJlZj1cInRlbDonICsgdC5waG9uZV9tb2JpbGUgKyAnXCI+JyArIHQucGhvbmVfbW9iaWxlICsgXCI8L2E+PC9kaXY+XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkOiBcImdyb3VwX2lkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJSb2xlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3J0YWJsZTogITEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTUwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGU6IGZ1bmN0aW9uKHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZSA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IFwiZGFya1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiBcImluZm9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogXCJ3YXJuaW5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgNDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IFwiaW5mb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDU6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiBcIndhcm5pbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA2OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogXCJkYW5nZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA3OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogXCJ3YXJuaW5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGdyb3VwTmFtZSA9ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQodC5ncm91cCkuZWFjaChmdW5jdGlvbihpbmRleCwgdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JvdXBOYW1lICs9IHZhbHVlLm5hbWUgKyAnLCAnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnPHNwYW4gZGF0YS1ncm91cD0nICsgdC5hY3RpdmUgKyAnIGNsYXNzPVwiYnRuIGJ0bi1ib2xkIGJ0bi1zbSBidG4tZm9udC1zbSAgYnRuLScgKyBlW3QuZ3JvdXBbMF0uZ3JvdXBfaWRdLmNsYXNzICsgJyBtci0yIHB4LTJcIj4nICsgZ3JvdXBOYW1lICsgXCI8L3NwYW4+XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8kdHlwZSAoMSA9IHB1YmxpZWQsIDIgPSB3YWl0IGNvcnJlY3RlZCwgMyA9IHdhaXQgcHVibGllZCwgNCA9IGJyb3VpbGxvbilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkOiBcImFjdGl2ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IF9MQU5HXy5hY3RpdmUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3J0YWJsZTogITEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTUwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGU6IGZ1bmN0aW9uKHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodC5zdGF0dXMgPT0gZmFsc2UgfHwgdC5zdGF0dXMgPT0gbnVsbCkgeyB2YXIgY2xhc3NBY3RpdmUgPSAnYnRuLWxpZ2h0LXN1Y2Nlc3MnOyB9IGVsc2UgeyB2YXIgY2xhc3NBY3RpdmUgPSAnYnRuLWxpZ2h0LWRhbmdlcic7IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodC5zdGF0dXMgPT0gZmFsc2UgfHwgdC5zdGF0dXMgPT0gbnVsbCkgeyB2YXIgdGV4dEFjdGl2ZSA9IF9MQU5HXy5hY3RpdmU7IH0gZWxzZSB7IHZhciB0ZXh0QWN0aXZlID0gX0xBTkdfLmRlc2FjdGl2ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0LnN0YXR1cyA9PSBmYWxzZSB8fCB0LnN0YXR1cyA9PSBudWxsKSB7IHZhciBpZEFjdGl2ZSA9ICdkaXNhYmxlZCc7IH0gZWxzZSB7IHZhciBpZEFjdGl2ZSA9ICcnOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHQuc3RhdHVzID09IGZhbHNlIHx8IHQuc3RhdHVzID09IG51bGwpIHsgdmFyIGlkQWN0aXZlTWVzc2FnZSA9ICdleHBsYWluX2Rpc2FibGVkJzsgfSBlbHNlIHsgdmFyIGlkQWN0aXZlTWVzc2FnZSA9ICcnOyB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0ZW1wbGF0ZSA9ICc8YSBocmVmPVwiamF2YXNjcmlwdDo7XCIgZGF0YS1zdGF0dXNfbWVzc2FnZT1cIicgKyBpZEFjdGl2ZU1lc3NhZ2UgKyAnXCIgZGF0YS1zdGF0dXM9XCInICsgaWRBY3RpdmUgKyAnXCIgZGF0YS1pZD1cIicgKyB0LnV1aWQgKyAnXCIgY2xhc3M9XCJhY3Rpb25BY3RpdmUgYnRuIGJ0bi1ib2xkIGJ0bi1zbSBidG4tZm9udC1zbSAnICsgY2xhc3NBY3RpdmUgKyAnXCI+JyArIHRleHRBY3RpdmUgKyAnPC9hPic7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRlbXBsYXRlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkOiBcImNyZWF0ZWRfYXRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBfTEFOR18uZGF0ZV9jcmVhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImRhdGVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vd2lkdGg6IDEwMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1hdDogXCJNTS9ERC9ZWVlZXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZTogZnVuY3Rpb24odCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnPGRpdiBjbGFzcz1cImZvbnQtd2VpZ2h0LWJvbGRlciB0ZXh0LXByaW1hcnkgbWItMFwiPicgKyB0LmRhdGVfY3JlYXRlX2Zvcm1hdCArICc8L2Rpdj4nO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZDogXCJBY3Rpb25zXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogODAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJBY3Rpb25zXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3J0YWJsZTogITEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvSGlkZTogITEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogXCJ2aXNpYmxlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZTogZnVuY3Rpb24odCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBncm91cFVzZXIgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgc3VwZXJBZG1pbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQodC5ncm91cCkuZWFjaChmdW5jdGlvbihpbmRleCwgdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JvdXBVc2VyW2luZGV4XSA9IHZhbHVlLmdyb3VwX2lkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUuZ3JvdXBfaWQgPT0gJzEnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdXBlckFkbWluID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgoc3VwZXJBZG1pbiA9PSB0cnVlICYmICEkLmNoZWNrVmFsdWUoMSwgaWRfZ3JvdXApKSB8fCB0LmlkID09ICcxJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodXNlcl91dWlkID09IHQudXVpZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRlbXBsYXRlID0gJzxkaXYgY2xhc3M9XCJkcm9wZG93blwiPlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJqYXZhc2NyaXB0OjtcIiBjbGFzcz1cImJ0biBidG4tc20gYnRuLWNsZWFuIGJ0bi1pY29uIGJ0bi1pY29uLW1kXCIgZGF0YS10b2dnbGU9XCJkcm9wZG93blwiPlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmxhdGljb24tbW9yZS0xXCI+PC9pPjwvYT5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZHJvcGRvd24tbWVudSBkcm9wZG93bi1tZW51LXJpZ2h0XCI+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwibmF2aSBmbGV4LWNvbHVtbiBuYXZpLWhvdmVyIHB5LTJcIj4nO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGUgKz0gJzxsaSBjbGFzcz1cIm5hdmktaXRlbVwiPlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgZGF0YS1jb250cm9sbGVyPVwidXNlclwiIGRhdGEtYWN0aW9uPVwiYWN0aW9uVmlld1wiIGRhdGEtbW9kdWxlPVwiZmFsc2VcIiBkYXRhLXZhbHVlPVwiJyArIHQudXVpZCArICdcIiBjbGFzcz1cImFjdGlvbmNvbnRyb2xsZXIgbmF2aS1saW5rXCI+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJuYXZpLWljb25cIj48aSBjbGFzcz1cImZsYXRpY29uMi1leHBhbmRcIj48L2k+PC9zcGFuPlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibmF2aS10ZXh0XCI+JyArIF9MQU5HXy52aWV3ICsgJzwvc3Bhbj5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+PC9saT4nO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGUgKz0gJzxsaSBjbGFzcz1cIm5hdmktaXRlbVwiPlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCInICsgc3RhcnRVcmwgKyAnL3NldHRpbmdzLWFkdmFuY2VkL3VzZXJzL2VkaXQvJyArIHQudXVpZCArICdcIiBjbGFzcz1cIm5hdmktbGlua1wiPlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibmF2aS1pY29uXCI+PGkgY2xhc3M9XCJmbGF0aWNvbjItY29udHJhY3RcIj48L2k+PC9zcGFuPlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibmF2aS10ZXh0XCI+JyArIF9MQU5HXy5lZGl0ICsgJzwvc3Bhbj5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+PC9saT4nO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlICs9ICcgPC91bD48L2Rpdj48L2Rpdj4nO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRlbXBsYXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vc2lsZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0ZW1wbGF0ZSA9ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0ZW1wbGF0ZSA9ICc8ZGl2IGNsYXNzPVwiZHJvcGRvd25cIj5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJqYXZhc2NyaXB0OjtcIiBjbGFzcz1cImJ0biBidG4tc20gYnRuLWNsZWFuIGJ0bi1pY29uIGJ0bi1pY29uLW1kXCIgZGF0YS10b2dnbGU9XCJkcm9wZG93blwiPlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmbGF0aWNvbi1tb3JlLTFcIj48L2k+PC9hPlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRyb3Bkb3duLW1lbnUgZHJvcGRvd24tbWVudS1yaWdodFwiPlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwibmF2aSBmbGV4LWNvbHVtbiBuYXZpLWhvdmVyIHB5LTJcIj4nO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZSArPSAnPGxpIGNsYXNzPVwibmF2aS1pdGVtXCI+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGRhdGEtY29udHJvbGxlcj1cInVzZXJcIiBkYXRhLWFjdGlvbj1cImFjdGlvblZpZXdcIiBkYXRhLW1vZHVsZT1cImZhbHNlXCIgZGF0YS12YWx1ZT1cIicgKyB0LnV1aWQgKyAnXCIgY2xhc3M9XCJhY3Rpb25jb250cm9sbGVyIG5hdmktbGlua1wiPlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJuYXZpLWljb25cIj48aSBjbGFzcz1cImZsYXRpY29uMi1leHBhbmRcIj48L2k+PC9zcGFuPlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJuYXZpLXRleHRcIj4nICsgX0xBTkdfLnZpZXcgKyAnPC9zcGFuPlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPjwvbGk+JztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhpZF9ncm91cC5pbmRleE9mKGdyb3VwVXNlcikpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoKHN1cGVyQWRtaW4gPT0gdHJ1ZSAmJiAkLmNoZWNrVmFsdWUoMSwgaWRfZ3JvdXApKSB8fCAoc3VwZXJBZG1pbiA9PSBmYWxzZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlICs9ICc8bGkgY2xhc3M9XCJuYXZpLWl0ZW1cIj5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCInICsgc3RhcnRVcmwgKyAnL3NldHRpbmdzLWFkdmFuY2VkL3VzZXJzL2VkaXQvJyArIHQudXVpZCArICdcIiBjbGFzcz1cIm5hdmktbGlua1wiPlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJuYXZpLWljb25cIj48aSBjbGFzcz1cImZsYXRpY29uMi1jb250cmFjdFwiPjwvaT48L3NwYW4+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm5hdmktdGV4dFwiPicgKyBfTEFOR18uZWRpdCArICc8L3NwYW4+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+PC9saT4nO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0LmlkICE9ICcxJyAmJiAodC51dWlkICE9IHVzZXJfdXVpZCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlICs9ICcgPGxpIGNsYXNzPVwibmF2aS1pdGVtXCI+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGRhdGEtaWQ9XCInICsgdC51dWlkICsgJ1wiIGNsYXNzPVwiZGVsZXRlcm93S3RkYXRhdGFibGUgbmF2aS1saW5rXCI+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm5hdmktaWNvblwiPjxpIGNsYXNzPVwibmF2aS1pY29uIGZsYXRpY29uMi10cmFzaFwiPjwvaT48L3NwYW4+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm5hdmktdGV4dFwiPicgKyBfTEFOR18uZGVsZXRlICsgJzwvc3Bhbj5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+JztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZSArPSAnIDwvdWw+PC9kaXY+PC9kaXY+JztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRlbXBsYXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgICAgJChcIiNrdF9mb3JtX3N0YXR1c1wiKS5vbihcImNoYW5nZVwiLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICB0LnNlYXJjaCgkKHRoaXMpLnZhbCgpLnRvTG93ZXJDYXNlKCksIFwiU3RhdHVzXCIpXHJcbiAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgICAgIHQub24oXCJkYXRhdGFibGUtb24tY2hlY2sgZGF0YXRhYmxlLW9uLXVuY2hlY2sgZGF0YXRhYmxlLW9uLWxheW91dC11cGRhdGVkXCIsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgYSA9IHQucm93cyhcIi5kYXRhdGFibGUtcm93LWFjdGl2ZVwiKS5ub2RlcygpLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgICAgICAkKFwiI2t0X3N1YmhlYWRlcl9ncm91cF9zZWxlY3RlZF9yb3dzXCIpLmh0bWwoYSksIGEgPiAwID8gKCQoXCIja3Rfc3ViaGVhZGVyX3NlYXJjaFwiKS5hZGRDbGFzcyhcImhpZGRlblwiKSwgJChcIiNrdF9zdWJoZWFkZXJfZ3JvdXBfYWN0aW9uc1wiKS5yZW1vdmVDbGFzcyhcImhpZGRlblwiKSkgOiAoJChcIiNrdF9zdWJoZWFkZXJfc2VhcmNoXCIpLnJlbW92ZUNsYXNzKFwiaGlkZGVuXCIpLCAkKFwiI2t0X3N1YmhlYWRlcl9ncm91cF9hY3Rpb25zXCIpLmFkZENsYXNzKFwiaGlkZGVuXCIpKVxyXG4gICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICAgICAkKFwiI2t0X2RhdGF0YWJsZV9yZWNvcmRzX2ZldGNoX21vZGFsXCIpLm9uKFwic2hvdy5icy5tb2RhbFwiLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGEgPSBuZXcgS1REaWFsb2coe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImxvYWRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZW1lbnQ6IFwidG9wIGNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBfTEFOR18ubG9hZGluZyArIFwiLi4uXCJcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICBhLnNob3coKSwgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYS5oaWRlKClcclxuICAgICAgICAgICAgICAgICAgICB9LCAxZTMpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIG4gPSB0LnJvd3MoXCIuZGF0YXRhYmxlLXJvdy1hY3RpdmVcIikubm9kZXMoKS5maW5kKCcuY2hlY2tib3gtc2luZ2xlID4gW3R5cGU9XCJjaGVja2JveFwiXScpLm1hcChmdW5jdGlvbih0LCBlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJChlKS52YWwoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KSwgcyA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKSwgbCA9IDA7IGwgPCBuLmxlbmd0aDsgbCsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpLnNldEF0dHJpYnV0ZShcImRhdGEtaWRcIiwgbltsXSksIGkuaW5uZXJIVE1MID0gX0xBTkdfLnNlbGVjdGVkX3Jvd19pZCArIFwiOiBcIiArIG5bbF0sIHMuYXBwZW5kQ2hpbGQoaSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgJChlLnRhcmdldCkuZmluZChcIiNrdF9hcHBzX3VzZXJfZmV0Y2hfcmVjb3Jkc19zZWxlY3RlZFwiKS5hcHBlbmQocylcclxuICAgICAgICAgICAgICAgIH0pLm9uKFwiaGlkZS5icy5tb2RhbFwiLCBmdW5jdGlvbih0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJCh0LnRhcmdldCkuZmluZChcIiNrdF9hcHBzX3VzZXJfZmV0Y2hfcmVjb3Jkc19zZWxlY3RlZFwiKS5lbXB0eSgpXHJcbiAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgICAgICQoXCIja3Rfc3ViaGVhZGVyX2dyb3VwX2FjdGlvbnNfc3RhdHVzX2NoYW5nZVwiKS5vbihcImNsaWNrXCIsIFwiW2RhdGEtdG9nZ2xlPSdzdGF0dXMtY2hhbmdlJ11cIiwgZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBlID0gJCh0aGlzKS5maW5kKFwiLm5hdmktbGluay10ZXh0XCIpLmh0bWwoKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3QgPSAkKHRoaXMpLmZpbmQoXCIubmF2aS1saW5rLXRleHRcIikuZGF0YSgnc3RhdHVzJyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGEgPSB0LnJvd3MoXCIuZGF0YXRhYmxlLXJvdy1hY3RpdmVcIikubm9kZXMoKS5maW5kKCcuY2hlY2tib3gtc2luZ2xlID4gW3R5cGU9XCJjaGVja2JveFwiXScpLm1hcChmdW5jdGlvbih0LCBlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4geyB1dWlkOiAkKGUpLnZhbCgpLCBhY3RpdmU6IHN0IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYS5sZW5ndGggPiAwICYmIHN3YWwuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbnNTdHlsaW5nOiAhMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaHRtbDogX0xBTkdfLmFyZV95b3Vfc3VyZV91cGRhdGUgKyBcIiBcIiArIGEubGVuZ3RoICsgXCIgXCIgKyBfTEFOR18uc2VsZWN0ZWRfcmVjb3Jkc19zdGF0dXNfdG8gKyBcIiBcIiArIGUgKyBcIiA/XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiaW5mb1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogX0xBTkdfLnllc191cGRhdGUgKyBcIiFcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvbkNsYXNzOiBcImJ0biBidG4tc20gYnRuLWJvbGQgYnRuLXN1Y2Nlc3NcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogITAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IF9MQU5HXy5ub19jYW5jZWwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbmNlbEJ1dHRvbkNsYXNzOiBcImJ0biBidG4tc20gYnRuLWJvbGQgYnRuLWRhcmtcIlxyXG4gICAgICAgICAgICAgICAgICAgIH0pLnRoZW4oZnVuY3Rpb24odCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodC52YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBjdXJyZW50X3VybCArIFwiL2FqYXhVcGRhdGVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtjcnNmdG9rZW5dOiAkKCdtZXRhW25hbWU9XCJYLUNTUkYtVE9LRU5cIl0nKS5hdHRyKCdjb250ZW50JyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBhLmdldCgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhVHlwZTogXCJqc29uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzdWx0LCBzdGF0dXMsIHhocikge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHhoci5zdGF0dXMgPT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkLm5vdGlmeSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IChyZXN1bHQuc3VjY2Vzcy5tZXNzYWdlKSA/IF9MQU5HXy51cGRhdGVkICsgXCIhXCIgOiBfTEFOR18ud2FybmluZyArIFwiIVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IChyZXN1bHQuc3VjY2Vzcy5tZXNzYWdlKSA/IHJlc3VsdC5zdWNjZXNzLm1lc3NhZ2UgOiByZXN1bHQuZXJyb3IubWVzc2FnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IChyZXN1bHQuc3VjY2Vzcy5tZXNzYWdlKSA/ICdzdWNjZXNzJyA6ICd3YXJuaW5nJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKFwiI2t0X2FwcHNfdXNlcl9saXN0X2RhdGF0YWJsZVwiKS5LVERhdGF0YWJsZSgpLnJlbG9hZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQubm90aWZ5KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogX0xBTkdfLmNhbmNlbGxlZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBfTEFOR18ueW91cl9zZWxldGVkX3JlY29yZHNfc3RhdHVzZXNfaGF2ZV9ub3RfYmVlbl91cGRhdGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3ByaW1hcnknXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgICAgICQoXCIja3Rfc3ViaGVhZGVyX2dyb3VwX2FjdGlvbnNfZGVsZXRlX2FsbFwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBlID0gdC5yb3dzKFwiLmRhdGF0YWJsZS1yb3ctYWN0aXZlXCIpLm5vZGVzKCkuZmluZCgnLmNoZWNrYm94LXNpbmdsZSA+IFt0eXBlPVwiY2hlY2tib3hcIl0nKS5tYXAoZnVuY3Rpb24odCwgZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJChlKS52YWwoKVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGUubGVuZ3RoID4gMCAmJiBzd2FsLmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBidXR0b25zU3R5bGluZzogITEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IF9MQU5HXy5hcmVfeW91X3N1cmVfZGVsZXRlICsgXCIgXCIgKyBlLmxlbmd0aCArIFwiIFwiICsgX0xBTkdfLnNlbGVjdGVkX3JlY29yZHMgKyBcIiA/XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiZXJyb3JcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6IF9MQU5HXy55ZXNfZGVsZXRlICsgJyAhJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvbkNsYXNzOiBcImJ0biBidG4tc20gYnRuLWJvbGQgYnRuLWRhbmdlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaG93Q2FuY2VsQnV0dG9uOiAhMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogX0xBTkdfLm5vX2NhbmNlbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FuY2VsQnV0dG9uQ2xhc3M6IFwiYnRuIGJ0bi1zbSBidG4tYm9sZCBidG4tZGFya1wiXHJcbiAgICAgICAgICAgICAgICAgICAgfSkudGhlbihmdW5jdGlvbih0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0LnZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgc2VsZWN0ZWQgPSBlLmdldCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnREVMRVRFJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6IGN1cnJlbnRfdXJsICsgXCIvZGVsZXRlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbY3JzZnRva2VuXTogJCgnbWV0YVtuYW1lPVwiWC1DU1JGLVRPS0VOXCJdJykuYXR0cignY29udGVudCcpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1dWlkOiBzZWxlY3RlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVR5cGU6IFwianNvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3VsdCwgc3RhdHVzLCB4aHIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9TdWNjZXNzIE1lc3NhZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHhoci5zdGF0dXMgPT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIga3Rfc3ViaGVhZGVyX3RvdGFsID0gJCgnLmt0X3N1YmhlYWRlcl90b3RhbCcpLnRleHQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJy5rdF9zdWJoZWFkZXJfdG90YWwnKS5odG1sKChrdF9zdWJoZWFkZXJfdG90YWwgLSBzZWxlY3RlZC5sZW5ndGgpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQubm90aWZ5KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogKHJlc3VsdC5zdWNjZXNzLm1lc3NhZ2UpID8gX0xBTkdfLmRlbGV0ZWQgKyBcIiFcIiA6IF9MQU5HXy53YXJuaW5nICsgXCIhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogKHJlc3VsdC5zdWNjZXNzLm1lc3NhZ2UpID8gcmVzdWx0LnN1Y2Nlc3MubWVzc2FnZSA6IHJlc3VsdC5lcnJvci5tZXNzYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogKHJlc3VsdC5zdWNjZXNzLm1lc3NhZ2UpID8gJ3N1Y2Nlc3MnIDogJ3dhcm5pbmcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoXCIja3RfYXBwc191c2VyX2xpc3RfZGF0YXRhYmxlXCIpLktURGF0YXRhYmxlKCkucmVsb2FkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJC5ub3RpZnkoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBfTEFOR18uZGVsZXRlZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBfTEFOR18ueW91cl9zZWxlY3RlZF9yZWNvcmRzX2hhdmVfbm90X2JlZW5fZGVsZXRlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdpbmZvJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICAgICB0Lm9uKFwiZGF0YXRhYmxlLW9uLWxheW91dC11cGRhdGVkXCIsIGZ1bmN0aW9uKCkge30pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KCk7XHJcbktUVXRpbC5yZWFkeShmdW5jdGlvbigpIHtcclxuICAgIEtUQXBwVXNlckxpc3REYXRhdGFibGUuaW5pdCgpO1xyXG5cclxuICAgIC8vVXBkYXRlXHJcbiAgICAkKGRvY3VtZW50KS5vbihcImNsaWNrXCIsIFwiLmFjdGlvbkFjdGl2ZVwiLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHZhciBzdGF0dXMgPSAkKHRoaXMpLmF0dHIoJ2RhdGEtc3RhdHVzJyk7XHJcbiAgICAgICAgdmFyIHN0YXR1c19tZXNzYWdlID0gJCh0aGlzKS5hdHRyKCdkYXRhLXN0YXR1c19tZXNzYWdlJyk7XHJcbiAgICAgICAgdmFyIHV1aWQgPSAkKHRoaXMpLmF0dHIoJ2RhdGEtaWQnKTtcclxuICAgICAgICB2YXIgdmFsdWUgPSBbXTtcclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICB0eXBlOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIHVybDogY3VycmVudF91cmwgKyBcIi9hamF4VXBkYXRlXCIsXHJcbiAgICAgICAgICAgIGNvbnRlbnRUeXBlOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkOyBjaGFyc2V0PVVURi04JyxcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgW2Nyc2Z0b2tlbl06ICQoJ21ldGFbbmFtZT1cIlgtQ1NSRi1UT0tFTlwiXScpLmF0dHIoJ2NvbnRlbnQnKSxcclxuICAgICAgICAgICAgICAgIHZhbHVlOiBbe1xyXG4gICAgICAgICAgICAgICAgICAgIHV1aWQ6IHV1aWQsXHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiBzdGF0dXMsXHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzX21lc3NhZ2U6IHN0YXR1c19tZXNzYWdlXHJcbiAgICAgICAgICAgICAgICB9XVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBkYXRhVHlwZTogXCJqc29uXCIsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3VsdCwgc3RhdHVzLCB4aHIpIHtcclxuICAgICAgICAgICAgICAgIGlmICh4aHIuc3RhdHVzID09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICQubm90aWZ5KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IChyZXN1bHQuc3VjY2Vzcy5tZXNzYWdlKSA/IF9MQU5HXy51cGRhdGVkICsgXCIhXCIgOiBfTEFOR18ud2FybmluZyArIFwiIVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAocmVzdWx0LnN1Y2Nlc3MubWVzc2FnZSkgPyByZXN1bHQuc3VjY2Vzcy5tZXNzYWdlIDogcmVzdWx0LmVycm9yLm1lc3NhZ2VcclxuICAgICAgICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IChyZXN1bHQuc3VjY2Vzcy5tZXNzYWdlKSA/ICdzdWNjZXNzJyA6ICd3YXJuaW5nJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICQoXCIja3RfYXBwc191c2VyX2xpc3RfZGF0YXRhYmxlXCIpLktURGF0YXRhYmxlKCkucmVsb2FkKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy9zaG93XHJcbiAgICAkKGRvY3VtZW50KS5vbihcImNsaWNrXCIsIFwiLmFjdGlvbmNvbnRyb2xsZXJcIiwgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB2YXIgdmFsdWUgPSAkKHRoaXMpLmRhdGEoJ3ZhbHVlJyk7XHJcblxyXG4gICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgIHR5cGU6ICdHRVQnLFxyXG4gICAgICAgICAgICB1cmw6IGN1cnJlbnRfdXJsICsgXCIvc2hvdy9cIiArIHZhbHVlLFxyXG4gICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICBbY3JzZnRva2VuXTogJCgnbWV0YVtuYW1lPVwiWC1DU1JGLVRPS0VOXCJdJykuYXR0cignY29udGVudCcpLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBkYXRhVHlwZTogXCJqc29uXCIsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3BvbnNlLCBzdGF0dXMsIHhocikge1xyXG4gICAgICAgICAgICAgICAgaWYgKHhoci5zdGF0dXMgPT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmVycm9yID09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJyNrdF9tb2RhbF9sb2FkaW5nX3dyYXBwZXInKS5odG1sKHJlc3BvbnNlLnN1Y2Nlc3MubWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJyNrdF9tb2RhbF9sb2FkaW5nJykubW9kYWwoJ3Nob3cnKTsgLy9ub3cgaXRzIHdvcmtpbmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgS1RBcHAuaW5pdFRvb2x0aXBzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyAkKFwiI2t0X2FwcHNfdXNlcl9saXN0X2RhdGF0YWJsZVwiKS5LVERhdGF0YWJsZSgpLnJlbG9hZCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufSk7Il0sInNvdXJjZVJvb3QiOiIifQ==