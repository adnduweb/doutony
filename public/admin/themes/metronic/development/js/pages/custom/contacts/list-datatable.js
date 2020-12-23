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
/******/ 	return __webpack_require__(__webpack_require__.s = 27);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/metronic/js/pages/custom/contacts/list-datatable.js":
/*!***********************************************************************!*\
  !*** ./resources/metronic/js/pages/custom/contacts/list-datatable.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // Class definition

var KTAppsContactsListDatatable = function () {
  // Private functions
  // basic demo
  var _demo = function _demo() {
    var datatable = $('#kt_datatable').KTDatatable({
      // datasource definition
      data: {
        type: 'remote',
        source: {
          read: {
            url: HOST_URL + '/api/datatables/demos/default.php'
          }
        },
        pageSize: 10,
        // display 20 records per page
        serverPaging: true,
        serverFiltering: true,
        serverSorting: true
      },
      // layout definition
      layout: {
        scroll: false,
        // enable/disable datatable scroll both horizontal and vertical when needed.
        footer: false // display/hide footer

      },
      // column sorting
      sortable: true,
      pagination: true,
      search: {
        input: $('#kt_subheader_search_form'),
        delay: 400,
        key: 'generalSearch'
      },
      // columns definition
      columns: [{
        field: 'RecordID',
        title: '#',
        sortable: 'asc',
        width: 40,
        type: 'number',
        selector: false,
        textAlign: 'left',
        template: function template(data) {
          return '<span class="font-weight-bolder">' + data.RecordID + '</span>';
        }
      }, {
        field: 'OrderID',
        title: 'Customer',
        width: 250,
        template: function template(data) {
          var number = KTUtil.getRandomInt(1, 10);
          var avatarsGirl = {
            1: {
              'file': '002-girl.svg'
            },
            2: {
              'file': '003-girl-1.svg'
            },
            3: {
              'file': '006-girl-3.svg'
            },
            4: {
              'file': '012-girl-5.svg'
            },
            5: {
              'file': '013-girl-6.svg'
            },
            6: {
              'file': '019-girl-10.svg'
            },
            7: {
              'file': '020-girl-11.svg'
            },
            8: {
              'file': '030-girl-17.svg'
            },
            9: {
              'file': '037-girl-20.svg'
            },
            10: {
              'file': '039-girl-21.svg'
            }
          };
          var avatarsBoy = {
            1: {
              'file': '001-boy.svg'
            },
            2: {
              'file': '004-boy-1.svg'
            },
            3: {
              'file': '011-boy-5.svg'
            },
            4: {
              'file': '021-boy-8.svg'
            },
            5: {
              'file': '032-boy-13.svg'
            },
            6: {
              'file': '035-boy-15.svg'
            },
            7: {
              'file': '040-boy-17.svg'
            },
            8: {
              'file': '045-boy-20.svg'
            },
            9: {
              'file': '049-boy-22.svg'
            },
            10: {
              'file': '048-boy-21.svg'
            }
          };
          var user_img = '';

          if (data.Gender == 'F') {
            user_img = avatarsGirl[number].file;
          } else {
            user_img = avatarsBoy[number].file;
          }

          var output = '<div class="d-flex align-items-center">\
                        <div class="symbol symbol-50 symbol-sm flex-shrink-0">\
                            <div class="symbol-label">\
                                <img class="h-75 align-self-end" src="assets/media/svg/avatars/' + user_img + '" alt="photo"/>\
                            </div>\
                        </div>\
                        <div class="ml-4">\
                            <div class="text-dark-75 font-weight-bolder font-size-lg mb-0">' + data.CompanyAgent + '</div>\
                            <a href="#" class="text-muted font-weight-bold text-hover-primary">' + data.CompanyEmail + '</a>\
                        </div>\
                    </div>';
          return output;
        }
      }, {
        field: 'Country',
        title: 'Country',
        template: function template(row) {
          var output = '';
          output += '<div class="font-weight-bolder font-size-lg mb-0">' + row.Country + '</div>';
          output += '<div class="font-weight-bold text-muted">Code: ' + row.ShipCountry + '</div>';
          return output;
        }
      }, {
        field: 'ShipDate',
        title: 'Ship Date',
        type: 'date',
        format: 'MM/DD/YYYY',
        template: function template(row) {
          var output = '';
          var status = {
            1: {
              'title': 'Paid',
              'class': ' label-light-primary'
            },
            2: {
              'title': 'Approved',
              'class': ' label-light-danger'
            },
            3: {
              'title': 'Pending',
              'class': ' label-light-primary'
            },
            4: {
              'title': 'Rejected',
              'class': ' label-light-success'
            }
          };
          var index = KTUtil.getRandomInt(1, 4);
          output += '<div class="font-weight-bolder text-primary mb-0">' + row.ShipDate + '</div>';
          output += '<div class="text-muted">' + status[index].title + '</div>';
          return output;
        }
      }, {
        field: 'CompanyName',
        title: 'Company Name',
        template: function template(row) {
          var output = '';
          output += '<div class="font-weight-bold text-muted">' + row.CompanyName + '</div>';
          return output;
        }
      }, {
        field: 'Status',
        title: 'Status',
        // callback function support for column rendering
        template: function template(row) {
          var status = {
            1: {
              'title': 'Pending',
              'class': ' label-light-primary'
            },
            2: {
              'title': 'Delivered',
              'class': ' label-light-danger'
            },
            3: {
              'title': 'Canceled',
              'class': ' label-light-primary'
            },
            4: {
              'title': 'Success',
              'class': ' label-light-success'
            },
            5: {
              'title': 'Info',
              'class': ' label-light-info'
            },
            6: {
              'title': 'Danger',
              'class': ' label-light-danger'
            },
            7: {
              'title': 'Warning',
              'class': ' label-light-warning'
            }
          };
          return '<span class="label label-lg font-weight-bold ' + status[row.Status]["class"] + ' label-inline">' + status[row.Status].title + '</span>';
        }
      }, {
        field: 'Actions',
        title: 'Actions',
        sortable: false,
        width: 130,
        overflow: 'visible',
        autoHide: false,
        template: function template() {
          return '\
                        <div class="dropdown dropdown-inline">\
                            <a href="javascript:;" class="btn btn-sm btn-default btn-text-primary btn-hover-primary btn-icon mr-2" data-toggle="dropdown">\
                                <span class="svg-icon svg-icon-md">\
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1" class="svg-icon">\
                                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\
                                            <rect x="0" y="0" width="24" height="24"/>\
                                            <path d="M7,3 L17,3 C19.209139,3 21,4.790861 21,7 C21,9.209139 19.209139,11 17,11 L7,11 C4.790861,11 3,9.209139 3,7 C3,4.790861 4.790861,3 7,3 Z M7,9 C8.1045695,9 9,8.1045695 9,7 C9,5.8954305 8.1045695,5 7,5 C5.8954305,5 5,5.8954305 5,7 C5,8.1045695 5.8954305,9 7,9 Z" fill="#000000"/>\
                                            <path d="M7,13 L17,13 C19.209139,13 21,14.790861 21,17 C21,19.209139 19.209139,21 17,21 L7,21 C4.790861,21 3,19.209139 3,17 C3,14.790861 4.790861,13 7,13 Z M17,19 C18.1045695,19 19,18.1045695 19,17 C19,15.8954305 18.1045695,15 17,15 C15.8954305,15 15,15.8954305 15,17 C15,18.1045695 15.8954305,19 17,19 Z" fill="#000000" opacity="0.3"/>\
                                        </g>\
                                    </svg>\
                                </span>\
                            </a>\
                            <div class="dropdown-menu dropdown-menu-sm dropdown-menu-right">\
                                <ul class="navi flex-column navi-hover py-2">\
                                    <li class="navi-header font-weight-bolder text-uppercase font-size-xs text-primary pb-2">\
                                        Choose an action:\
                                    </li>\
                                    <li class="navi-item">\
                                        <a href="#" class="navi-link">\
                                            <span class="navi-icon"><i class="la la-print"></i></span>\
                                            <span class="navi-text">Print</span>\
                                        </a>\
                                    </li>\
                                    <li class="navi-item">\
                                        <a href="#" class="navi-link">\
                                            <span class="navi-icon"><i class="la la-copy"></i></span>\
                                            <span class="navi-text">Copy</span>\
                                        </a>\
                                    </li>\
                                    <li class="navi-item">\
                                        <a href="#" class="navi-link">\
                                            <span class="navi-icon"><i class="la la-file-excel-o"></i></span>\
                                            <span class="navi-text">Excel</span>\
                                        </a>\
                                    </li>\
                                    <li class="navi-item">\
                                        <a href="#" class="navi-link">\
                                            <span class="navi-icon"><i class="la la-file-text-o"></i></span>\
                                            <span class="navi-text">CSV</span>\
                                        </a>\
                                    </li>\
                                    <li class="navi-item">\
                                        <a href="#" class="navi-link">\
                                            <span class="navi-icon"><i class="la la-file-pdf-o"></i></span>\
                                            <span class="navi-text">PDF</span>\
                                        </a>\
                                    </li>\
                                </ul>\
                            </div>\
                        </div>\
                        <a href="javascript:;" class="btn btn-sm btn-default btn-text-primary btn-hover-primary btn-icon mr-2" title="Edit details">\
                            <span class="svg-icon svg-icon-md">\
                                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">\
                                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\
                                        <rect x="0" y="0" width="24" height="24"/>\
                                        <path d="M12.2674799,18.2323597 L12.0084872,5.45852451 C12.0004303,5.06114792 12.1504154,4.6768183 12.4255037,4.38993949 L15.0030167,1.70195304 L17.5910752,4.40093695 C17.8599071,4.6812911 18.0095067,5.05499603 18.0083938,5.44341307 L17.9718262,18.2062508 C17.9694575,19.0329966 17.2985816,19.701953 16.4718324,19.701953 L13.7671717,19.701953 C12.9505952,19.701953 12.2840328,19.0487684 12.2674799,18.2323597 Z" fill="#000000" fill-rule="nonzero" transform="translate(14.701953, 10.701953) rotate(-135.000000) translate(-14.701953, -10.701953) "/>\
                                        <path d="M12.9,2 C13.4522847,2 13.9,2.44771525 13.9,3 C13.9,3.55228475 13.4522847,4 12.9,4 L6,4 C4.8954305,4 4,4.8954305 4,6 L4,18 C4,19.1045695 4.8954305,20 6,20 L18,20 C19.1045695,20 20,19.1045695 20,18 L20,13 C20,12.4477153 20.4477153,12 21,12 C21.5522847,12 22,12.4477153 22,13 L22,18 C22,20.209139 20.209139,22 18,22 L6,22 C3.790861,22 2,20.209139 2,18 L2,6 C2,3.790861 3.790861,2 6,2 L12.9,2 Z" fill="#000000" fill-rule="nonzero" opacity="0.3"/>\
                                    </g>\
                                </svg>\
                            </span>\
                        </a>\
                        <a href="javascript:;" class="btn btn-sm btn-default btn-text-primary btn-hover-primary btn-icon" title="Delete">\
                            <span class="svg-icon svg-icon-md">\
                                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">\
                                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\
                                        <rect x="0" y="0" width="24" height="24"/>\
                                        <path d="M6,8 L6,20.5 C6,21.3284271 6.67157288,22 7.5,22 L16.5,22 C17.3284271,22 18,21.3284271 18,20.5 L18,8 L6,8 Z" fill="#000000" fill-rule="nonzero"/>\
                                        <path d="M14,4.5 L14,4 C14,3.44771525 13.5522847,3 13,3 L11,3 C10.4477153,3 10,3.44771525 10,4 L10,4.5 L5.5,4.5 C5.22385763,4.5 5,4.72385763 5,5 L5,5.5 C5,5.77614237 5.22385763,6 5.5,6 L18.5,6 C18.7761424,6 19,5.77614237 19,5.5 L19,5 C19,4.72385763 18.7761424,4.5 18.5,4.5 L14,4.5 Z" fill="#000000" opacity="0.3"/>\
                                    </g>\
                                </svg>\
                            </span>\
                        </a>\
                    ';
        }
      }]
    });
  };

  return {
    // public functions
    init: function init() {
      _demo();
    }
  };
}();

jQuery(document).ready(function () {
  KTAppsContactsListDatatable.init();
});

/***/ }),

/***/ 27:
/*!*****************************************************************************!*\
  !*** multi ./resources/metronic/js/pages/custom/contacts/list-datatable.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Applications/MAMP/htdocs/spreadci4/public/admin/themes/metronic/resources/metronic/js/pages/custom/contacts/list-datatable.js */"./resources/metronic/js/pages/custom/contacts/list-datatable.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL21ldHJvbmljL2pzL3BhZ2VzL2N1c3RvbS9jb250YWN0cy9saXN0LWRhdGF0YWJsZS5qcyJdLCJuYW1lcyI6WyJLVEFwcHNDb250YWN0c0xpc3REYXRhdGFibGUiLCJfZGVtbyIsImRhdGF0YWJsZSIsIiQiLCJLVERhdGF0YWJsZSIsImRhdGEiLCJ0eXBlIiwic291cmNlIiwicmVhZCIsInVybCIsIkhPU1RfVVJMIiwicGFnZVNpemUiLCJzZXJ2ZXJQYWdpbmciLCJzZXJ2ZXJGaWx0ZXJpbmciLCJzZXJ2ZXJTb3J0aW5nIiwibGF5b3V0Iiwic2Nyb2xsIiwiZm9vdGVyIiwic29ydGFibGUiLCJwYWdpbmF0aW9uIiwic2VhcmNoIiwiaW5wdXQiLCJkZWxheSIsImtleSIsImNvbHVtbnMiLCJmaWVsZCIsInRpdGxlIiwid2lkdGgiLCJzZWxlY3RvciIsInRleHRBbGlnbiIsInRlbXBsYXRlIiwiUmVjb3JkSUQiLCJudW1iZXIiLCJLVFV0aWwiLCJnZXRSYW5kb21JbnQiLCJhdmF0YXJzR2lybCIsImF2YXRhcnNCb3kiLCJ1c2VyX2ltZyIsIkdlbmRlciIsImZpbGUiLCJvdXRwdXQiLCJDb21wYW55QWdlbnQiLCJDb21wYW55RW1haWwiLCJyb3ciLCJDb3VudHJ5IiwiU2hpcENvdW50cnkiLCJmb3JtYXQiLCJzdGF0dXMiLCJpbmRleCIsIlNoaXBEYXRlIiwiQ29tcGFueU5hbWUiLCJTdGF0dXMiLCJvdmVyZmxvdyIsImF1dG9IaWRlIiwiaW5pdCIsImpRdWVyeSIsImRvY3VtZW50IiwicmVhZHkiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztR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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQXpFb0I7QUEwRUg7QUFsRkYsT0EvSU07QUFqQ2tDLEtBQS9CLENBQWhCO0FBcVFILEdBdFFEOztBQXdRQSxTQUFPO0FBQ0g7QUFDQXdCLFFBQUksRUFBRSxnQkFBVztBQUNickQsV0FBSztBQUNSO0FBSkUsR0FBUDtBQU1ILENBbFJpQyxFQUFsQzs7QUFvUkFzRCxNQUFNLENBQUNDLFFBQUQsQ0FBTixDQUFpQkMsS0FBakIsQ0FBdUIsWUFBVztBQUM5QnpELDZCQUEyQixDQUFDc0QsSUFBNUI7QUFDSCxDQUZELEUiLCJmaWxlIjoiL2RldmVsb3BtZW50L2pzL3BhZ2VzL2N1c3RvbS9jb250YWN0cy9saXN0LWRhdGF0YWJsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMjcpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbi8vIENsYXNzIGRlZmluaXRpb25cclxuXHJcbnZhciBLVEFwcHNDb250YWN0c0xpc3REYXRhdGFibGUgPSBmdW5jdGlvbigpIHtcclxuICAgIC8vIFByaXZhdGUgZnVuY3Rpb25zXHJcblxyXG4gICAgLy8gYmFzaWMgZGVtb1xyXG4gICAgdmFyIF9kZW1vID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdmFyIGRhdGF0YWJsZSA9ICQoJyNrdF9kYXRhdGFibGUnKS5LVERhdGF0YWJsZSh7XHJcbiAgICAgICAgICAgIC8vIGRhdGFzb3VyY2UgZGVmaW5pdGlvblxyXG4gICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiAncmVtb3RlJyxcclxuICAgICAgICAgICAgICAgIHNvdXJjZToge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlYWQ6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBIT1NUX1VSTCArICcvYXBpL2RhdGF0YWJsZXMvZGVtb3MvZGVmYXVsdC5waHAnLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgcGFnZVNpemU6IDEwLCAvLyBkaXNwbGF5IDIwIHJlY29yZHMgcGVyIHBhZ2VcclxuICAgICAgICAgICAgICAgIHNlcnZlclBhZ2luZzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHNlcnZlckZpbHRlcmluZzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHNlcnZlclNvcnRpbmc6IHRydWUsXHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICAvLyBsYXlvdXQgZGVmaW5pdGlvblxyXG4gICAgICAgICAgICBsYXlvdXQ6IHtcclxuICAgICAgICAgICAgICAgIHNjcm9sbDogZmFsc2UsIC8vIGVuYWJsZS9kaXNhYmxlIGRhdGF0YWJsZSBzY3JvbGwgYm90aCBob3Jpem9udGFsIGFuZCB2ZXJ0aWNhbCB3aGVuIG5lZWRlZC5cclxuICAgICAgICAgICAgICAgIGZvb3RlcjogZmFsc2UsIC8vIGRpc3BsYXkvaGlkZSBmb290ZXJcclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgIC8vIGNvbHVtbiBzb3J0aW5nXHJcbiAgICAgICAgICAgIHNvcnRhYmxlOiB0cnVlLFxyXG5cclxuICAgICAgICAgICAgcGFnaW5hdGlvbjogdHJ1ZSxcclxuXHJcbiAgICAgICAgICAgIHNlYXJjaDoge1xyXG4gICAgICAgICAgICAgICAgaW5wdXQ6ICQoJyNrdF9zdWJoZWFkZXJfc2VhcmNoX2Zvcm0nKSxcclxuICAgICAgICAgICAgICAgIGRlbGF5OiA0MDAsXHJcbiAgICAgICAgICAgICAgICBrZXk6ICdnZW5lcmFsU2VhcmNoJ1xyXG4gICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgLy8gY29sdW1ucyBkZWZpbml0aW9uXHJcbiAgICAgICAgICAgIGNvbHVtbnM6IFt7XHJcbiAgICAgICAgICAgICAgICBmaWVsZDogJ1JlY29yZElEJyxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnIycsXHJcbiAgICAgICAgICAgICAgICBzb3J0YWJsZTogJ2FzYycsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNDAsXHJcbiAgICAgICAgICAgICAgICB0eXBlOiAnbnVtYmVyJyxcclxuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHRleHRBbGlnbjogJ2xlZnQnLFxyXG4gICAgICAgICAgICAgICAgdGVtcGxhdGU6IGZ1bmN0aW9uKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJzxzcGFuIGNsYXNzPVwiZm9udC13ZWlnaHQtYm9sZGVyXCI+JyArIGRhdGEuUmVjb3JkSUQgKyAnPC9zcGFuPic7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkOiAnT3JkZXJJRCcsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ0N1c3RvbWVyJyxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAyNTAsXHJcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZTogZnVuY3Rpb24oZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBudW1iZXIgPSBLVFV0aWwuZ2V0UmFuZG9tSW50KDEsIDEwKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgYXZhdGFyc0dpcmwgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDE6IHsnZmlsZSc6ICcwMDItZ2lybC5zdmcnfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgMjogeydmaWxlJzogJzAwMy1naXJsLTEuc3ZnJ30sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDM6IHsnZmlsZSc6ICcwMDYtZ2lybC0zLnN2Zyd9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA0OiB7J2ZpbGUnOiAnMDEyLWdpcmwtNS5zdmcnfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgNTogeydmaWxlJzogJzAxMy1naXJsLTYuc3ZnJ30sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDY6IHsnZmlsZSc6ICcwMTktZ2lybC0xMC5zdmcnfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgNzogeydmaWxlJzogJzAyMC1naXJsLTExLnN2Zyd9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA4OiB7J2ZpbGUnOiAnMDMwLWdpcmwtMTcuc3ZnJ30sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDk6IHsnZmlsZSc6ICcwMzctZ2lybC0yMC5zdmcnfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgMTA6IHsnZmlsZSc6ICcwMzktZ2lybC0yMS5zdmcnfVxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGF2YXRhcnNCb3kgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDE6IHsnZmlsZSc6ICcwMDEtYm95LnN2Zyd9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAyOiB7J2ZpbGUnOiAnMDA0LWJveS0xLnN2Zyd9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAzOiB7J2ZpbGUnOiAnMDExLWJveS01LnN2Zyd9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA0OiB7J2ZpbGUnOiAnMDIxLWJveS04LnN2Zyd9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA1OiB7J2ZpbGUnOiAnMDMyLWJveS0xMy5zdmcnfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgNjogeydmaWxlJzogJzAzNS1ib3ktMTUuc3ZnJ30sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDc6IHsnZmlsZSc6ICcwNDAtYm95LTE3LnN2Zyd9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA4OiB7J2ZpbGUnOiAnMDQ1LWJveS0yMC5zdmcnfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgOTogeydmaWxlJzogJzA0OS1ib3ktMjIuc3ZnJ30sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDEwOiB7J2ZpbGUnOiAnMDQ4LWJveS0yMS5zdmcnfVxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciB1c2VyX2ltZyA9ICcnO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5HZW5kZXIgPT0gJ0YnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJfaW1nID0gYXZhdGFyc0dpcmxbbnVtYmVyXS5maWxlO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJfaW1nID0gYXZhdGFyc0JveVtudW1iZXJdLmZpbGU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgb3V0cHV0ID0gJzxkaXYgY2xhc3M9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN5bWJvbCBzeW1ib2wtNTAgc3ltYm9sLXNtIGZsZXgtc2hyaW5rLTBcIj5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN5bWJvbC1sYWJlbFwiPlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cImgtNzUgYWxpZ24tc2VsZi1lbmRcIiBzcmM9XCJhc3NldHMvbWVkaWEvc3ZnL2F2YXRhcnMvJyArIHVzZXJfaW1nICsgJ1wiIGFsdD1cInBob3RvXCIvPlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWwtNFwiPlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1kYXJrLTc1IGZvbnQtd2VpZ2h0LWJvbGRlciBmb250LXNpemUtbGcgbWItMFwiPicgKyBkYXRhLkNvbXBhbnlBZ2VudCArICc8L2Rpdj5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cInRleHQtbXV0ZWQgZm9udC13ZWlnaHQtYm9sZCB0ZXh0LWhvdmVyLXByaW1hcnlcIj4nICsgZGF0YS5Db21wYW55RW1haWwgKyAnPC9hPlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+JztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG91dHB1dDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgZmllbGQ6ICdDb3VudHJ5JyxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnQ291bnRyeScsXHJcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZTogZnVuY3Rpb24ocm93KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG91dHB1dCA9ICcnO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBvdXRwdXQgKz0gJzxkaXYgY2xhc3M9XCJmb250LXdlaWdodC1ib2xkZXIgZm9udC1zaXplLWxnIG1iLTBcIj4nICsgcm93LkNvdW50cnkgKyAnPC9kaXY+JztcclxuICAgICAgICAgICAgICAgICAgICBvdXRwdXQgKz0gJzxkaXYgY2xhc3M9XCJmb250LXdlaWdodC1ib2xkIHRleHQtbXV0ZWRcIj5Db2RlOiAnICsgcm93LlNoaXBDb3VudHJ5ICsgJzwvZGl2Pic7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvdXRwdXQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkOiAnU2hpcERhdGUnLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdTaGlwIERhdGUnLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogJ2RhdGUnLFxyXG4gICAgICAgICAgICAgICAgZm9ybWF0OiAnTU0vREQvWVlZWScsXHJcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZTogZnVuY3Rpb24ocm93KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG91dHB1dCA9ICcnO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgc3RhdHVzID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAxOiB7J3RpdGxlJzogJ1BhaWQnLCAnY2xhc3MnOiAnIGxhYmVsLWxpZ2h0LXByaW1hcnknfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgMjogeyd0aXRsZSc6ICdBcHByb3ZlZCcsICdjbGFzcyc6ICcgbGFiZWwtbGlnaHQtZGFuZ2VyJ30sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDM6IHsndGl0bGUnOiAnUGVuZGluZycsICdjbGFzcyc6ICcgbGFiZWwtbGlnaHQtcHJpbWFyeSd9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA0OiB7J3RpdGxlJzogJ1JlamVjdGVkJywgJ2NsYXNzJzogJyBsYWJlbC1saWdodC1zdWNjZXNzJ31cclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBpbmRleCA9IEtUVXRpbC5nZXRSYW5kb21JbnQoMSwgNCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIG91dHB1dCArPSAnPGRpdiBjbGFzcz1cImZvbnQtd2VpZ2h0LWJvbGRlciB0ZXh0LXByaW1hcnkgbWItMFwiPicgKyByb3cuU2hpcERhdGUgKyAnPC9kaXY+JztcclxuICAgICAgICAgICAgICAgICAgICBvdXRwdXQgKz0gJzxkaXYgY2xhc3M9XCJ0ZXh0LW11dGVkXCI+JyArIHN0YXR1c1tpbmRleF0udGl0bGUgKyAnPC9kaXY+JztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG91dHB1dDtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkOiAnQ29tcGFueU5hbWUnLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdDb21wYW55IE5hbWUnLFxyXG4gICAgICAgICAgICAgICAgdGVtcGxhdGU6IGZ1bmN0aW9uKHJvdykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBvdXRwdXQgPSAnJztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgb3V0cHV0ICs9ICc8ZGl2IGNsYXNzPVwiZm9udC13ZWlnaHQtYm9sZCB0ZXh0LW11dGVkXCI+JyArIHJvdy5Db21wYW55TmFtZSArICc8L2Rpdj4nO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gb3V0cHV0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZDogJ1N0YXR1cycsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ1N0YXR1cycsXHJcbiAgICAgICAgICAgICAgICAvLyBjYWxsYmFjayBmdW5jdGlvbiBzdXBwb3J0IGZvciBjb2x1bW4gcmVuZGVyaW5nXHJcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZTogZnVuY3Rpb24ocm93KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHN0YXR1cyA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgMToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RpdGxlJzogJ1BlbmRpbmcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzogJyBsYWJlbC1saWdodC1wcmltYXJ5J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGl0bGUnOiAnRGVsaXZlcmVkJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjbGFzcyc6ICcgbGFiZWwtbGlnaHQtZGFuZ2VyJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGl0bGUnOiAnQ2FuY2VsZWQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzogJyBsYWJlbC1saWdodC1wcmltYXJ5J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA0OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGl0bGUnOiAnU3VjY2VzcycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2xhc3MnOiAnIGxhYmVsLWxpZ2h0LXN1Y2Nlc3MnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDU6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0aXRsZSc6ICdJbmZvJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjbGFzcyc6ICcgbGFiZWwtbGlnaHQtaW5mbydcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgNjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RpdGxlJzogJ0RhbmdlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2xhc3MnOiAnIGxhYmVsLWxpZ2h0LWRhbmdlcidcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgNzoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RpdGxlJzogJ1dhcm5pbmcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzogJyBsYWJlbC1saWdodC13YXJuaW5nJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICc8c3BhbiBjbGFzcz1cImxhYmVsIGxhYmVsLWxnIGZvbnQtd2VpZ2h0LWJvbGQgJyArIHN0YXR1c1tyb3cuU3RhdHVzXS5jbGFzcyArICcgbGFiZWwtaW5saW5lXCI+JyArIHN0YXR1c1tyb3cuU3RhdHVzXS50aXRsZSArICc8L3NwYW4+JztcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkOiAnQWN0aW9ucycsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ0FjdGlvbnMnLFxyXG4gICAgICAgICAgICAgICAgc29ydGFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEzMCxcclxuICAgICAgICAgICAgICAgIG92ZXJmbG93OiAndmlzaWJsZScsXHJcbiAgICAgICAgICAgICAgICBhdXRvSGlkZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZTogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdcXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZHJvcGRvd24gZHJvcGRvd24taW5saW5lXCI+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJqYXZhc2NyaXB0OjtcIiBjbGFzcz1cImJ0biBidG4tc20gYnRuLWRlZmF1bHQgYnRuLXRleHQtcHJpbWFyeSBidG4taG92ZXItcHJpbWFyeSBidG4taWNvbiBtci0yXCIgZGF0YS10b2dnbGU9XCJkcm9wZG93blwiPlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJzdmctaWNvbiBzdmctaWNvbi1tZFwiPlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHhtbG5zOnhsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiIHdpZHRoPVwiMjRweFwiIGhlaWdodD1cIjI0cHhcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgdmVyc2lvbj1cIjEuMVwiIGNsYXNzPVwic3ZnLWljb25cIj5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGcgc3Ryb2tlPVwibm9uZVwiIHN0cm9rZS13aWR0aD1cIjFcIiBmaWxsPVwibm9uZVwiIGZpbGwtcnVsZT1cImV2ZW5vZGRcIj5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IHg9XCIwXCIgeT1cIjBcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIi8+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTcsMyBMMTcsMyBDMTkuMjA5MTM5LDMgMjEsNC43OTA4NjEgMjEsNyBDMjEsOS4yMDkxMzkgMTkuMjA5MTM5LDExIDE3LDExIEw3LDExIEM0Ljc5MDg2MSwxMSAzLDkuMjA5MTM5IDMsNyBDMyw0Ljc5MDg2MSA0Ljc5MDg2MSwzIDcsMyBaIE03LDkgQzguMTA0NTY5NSw5IDksOC4xMDQ1Njk1IDksNyBDOSw1Ljg5NTQzMDUgOC4xMDQ1Njk1LDUgNyw1IEM1Ljg5NTQzMDUsNSA1LDUuODk1NDMwNSA1LDcgQzUsOC4xMDQ1Njk1IDUuODk1NDMwNSw5IDcsOSBaXCIgZmlsbD1cIiMwMDAwMDBcIi8+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTcsMTMgTDE3LDEzIEMxOS4yMDkxMzksMTMgMjEsMTQuNzkwODYxIDIxLDE3IEMyMSwxOS4yMDkxMzkgMTkuMjA5MTM5LDIxIDE3LDIxIEw3LDIxIEM0Ljc5MDg2MSwyMSAzLDE5LjIwOTEzOSAzLDE3IEMzLDE0Ljc5MDg2MSA0Ljc5MDg2MSwxMyA3LDEzIFogTTE3LDE5IEMxOC4xMDQ1Njk1LDE5IDE5LDE4LjEwNDU2OTUgMTksMTcgQzE5LDE1Ljg5NTQzMDUgMTguMTA0NTY5NSwxNSAxNywxNSBDMTUuODk1NDMwNSwxNSAxNSwxNS44OTU0MzA1IDE1LDE3IEMxNSwxOC4xMDQ1Njk1IDE1Ljg5NTQzMDUsMTkgMTcsMTkgWlwiIGZpbGw9XCIjMDAwMDAwXCIgb3BhY2l0eT1cIjAuM1wiLz5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9nPlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkcm9wZG93bi1tZW51IGRyb3Bkb3duLW1lbnUtc20gZHJvcGRvd24tbWVudS1yaWdodFwiPlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwibmF2aSBmbGV4LWNvbHVtbiBuYXZpLWhvdmVyIHB5LTJcIj5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJuYXZpLWhlYWRlciBmb250LXdlaWdodC1ib2xkZXIgdGV4dC11cHBlcmNhc2UgZm9udC1zaXplLXhzIHRleHQtcHJpbWFyeSBwYi0yXCI+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENob29zZSBhbiBhY3Rpb246XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJuYXZpLWl0ZW1cIj5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cIm5hdmktbGlua1wiPlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJuYXZpLWljb25cIj48aSBjbGFzcz1cImxhIGxhLXByaW50XCI+PC9pPjwvc3Bhbj5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibmF2aS10ZXh0XCI+UHJpbnQ8L3NwYW4+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cIm5hdmktaXRlbVwiPlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwibmF2aS1saW5rXCI+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm5hdmktaWNvblwiPjxpIGNsYXNzPVwibGEgbGEtY29weVwiPjwvaT48L3NwYW4+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm5hdmktdGV4dFwiPkNvcHk8L3NwYW4+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cIm5hdmktaXRlbVwiPlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwibmF2aS1saW5rXCI+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm5hdmktaWNvblwiPjxpIGNsYXNzPVwibGEgbGEtZmlsZS1leGNlbC1vXCI+PC9pPjwvc3Bhbj5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibmF2aS10ZXh0XCI+RXhjZWw8L3NwYW4+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cIm5hdmktaXRlbVwiPlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwibmF2aS1saW5rXCI+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm5hdmktaWNvblwiPjxpIGNsYXNzPVwibGEgbGEtZmlsZS10ZXh0LW9cIj48L2k+PC9zcGFuPlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJuYXZpLXRleHRcIj5DU1Y8L3NwYW4+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cIm5hdmktaXRlbVwiPlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwibmF2aS1saW5rXCI+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm5hdmktaWNvblwiPjxpIGNsYXNzPVwibGEgbGEtZmlsZS1wZGYtb1wiPjwvaT48L3NwYW4+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm5hdmktdGV4dFwiPlBERjwvc3Bhbj5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiamF2YXNjcmlwdDo7XCIgY2xhc3M9XCJidG4gYnRuLXNtIGJ0bi1kZWZhdWx0IGJ0bi10ZXh0LXByaW1hcnkgYnRuLWhvdmVyLXByaW1hcnkgYnRuLWljb24gbXItMlwiIHRpdGxlPVwiRWRpdCBkZXRhaWxzXCI+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwic3ZnLWljb24gc3ZnLWljb24tbWRcIj5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHhtbG5zOnhsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiIHdpZHRoPVwiMjRweFwiIGhlaWdodD1cIjI0cHhcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgdmVyc2lvbj1cIjEuMVwiPlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxnIHN0cm9rZT1cIm5vbmVcIiBzdHJva2Utd2lkdGg9XCIxXCIgZmlsbD1cIm5vbmVcIiBmaWxsLXJ1bGU9XCJldmVub2RkXCI+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IHg9XCIwXCIgeT1cIjBcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIi8+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTIuMjY3NDc5OSwxOC4yMzIzNTk3IEwxMi4wMDg0ODcyLDUuNDU4NTI0NTEgQzEyLjAwMDQzMDMsNS4wNjExNDc5MiAxMi4xNTA0MTU0LDQuNjc2ODE4MyAxMi40MjU1MDM3LDQuMzg5OTM5NDkgTDE1LjAwMzAxNjcsMS43MDE5NTMwNCBMMTcuNTkxMDc1Miw0LjQwMDkzNjk1IEMxNy44NTk5MDcxLDQuNjgxMjkxMSAxOC4wMDk1MDY3LDUuMDU0OTk2MDMgMTguMDA4MzkzOCw1LjQ0MzQxMzA3IEwxNy45NzE4MjYyLDE4LjIwNjI1MDggQzE3Ljk2OTQ1NzUsMTkuMDMyOTk2NiAxNy4yOTg1ODE2LDE5LjcwMTk1MyAxNi40NzE4MzI0LDE5LjcwMTk1MyBMMTMuNzY3MTcxNywxOS43MDE5NTMgQzEyLjk1MDU5NTIsMTkuNzAxOTUzIDEyLjI4NDAzMjgsMTkuMDQ4NzY4NCAxMi4yNjc0Nzk5LDE4LjIzMjM1OTcgWlwiIGZpbGw9XCIjMDAwMDAwXCIgZmlsbC1ydWxlPVwibm9uemVyb1wiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgxNC43MDE5NTMsIDEwLjcwMTk1Mykgcm90YXRlKC0xMzUuMDAwMDAwKSB0cmFuc2xhdGUoLTE0LjcwMTk1MywgLTEwLjcwMTk1MykgXCIvPlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTEyLjksMiBDMTMuNDUyMjg0NywyIDEzLjksMi40NDc3MTUyNSAxMy45LDMgQzEzLjksMy41NTIyODQ3NSAxMy40NTIyODQ3LDQgMTIuOSw0IEw2LDQgQzQuODk1NDMwNSw0IDQsNC44OTU0MzA1IDQsNiBMNCwxOCBDNCwxOS4xMDQ1Njk1IDQuODk1NDMwNSwyMCA2LDIwIEwxOCwyMCBDMTkuMTA0NTY5NSwyMCAyMCwxOS4xMDQ1Njk1IDIwLDE4IEwyMCwxMyBDMjAsMTIuNDQ3NzE1MyAyMC40NDc3MTUzLDEyIDIxLDEyIEMyMS41NTIyODQ3LDEyIDIyLDEyLjQ0NzcxNTMgMjIsMTMgTDIyLDE4IEMyMiwyMC4yMDkxMzkgMjAuMjA5MTM5LDIyIDE4LDIyIEw2LDIyIEMzLjc5MDg2MSwyMiAyLDIwLjIwOTEzOSAyLDE4IEwyLDYgQzIsMy43OTA4NjEgMy43OTA4NjEsMiA2LDIgTDEyLjksMiBaXCIgZmlsbD1cIiMwMDAwMDBcIiBmaWxsLXJ1bGU9XCJub256ZXJvXCIgb3BhY2l0eT1cIjAuM1wiLz5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2c+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiamF2YXNjcmlwdDo7XCIgY2xhc3M9XCJidG4gYnRuLXNtIGJ0bi1kZWZhdWx0IGJ0bi10ZXh0LXByaW1hcnkgYnRuLWhvdmVyLXByaW1hcnkgYnRuLWljb25cIiB0aXRsZT1cIkRlbGV0ZVwiPlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInN2Zy1pY29uIHN2Zy1pY29uLW1kXCI+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB4bWxuczp4bGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIiB3aWR0aD1cIjI0cHhcIiBoZWlnaHQ9XCIyNHB4XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHZlcnNpb249XCIxLjFcIj5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZyBzdHJva2U9XCJub25lXCIgc3Ryb2tlLXdpZHRoPVwiMVwiIGZpbGw9XCJub25lXCIgZmlsbC1ydWxlPVwiZXZlbm9kZFwiPlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCB4PVwiMFwiIHk9XCIwXCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIvPlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTYsOCBMNiwyMC41IEM2LDIxLjMyODQyNzEgNi42NzE1NzI4OCwyMiA3LjUsMjIgTDE2LjUsMjIgQzE3LjMyODQyNzEsMjIgMTgsMjEuMzI4NDI3MSAxOCwyMC41IEwxOCw4IEw2LDggWlwiIGZpbGw9XCIjMDAwMDAwXCIgZmlsbC1ydWxlPVwibm9uemVyb1wiLz5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0xNCw0LjUgTDE0LDQgQzE0LDMuNDQ3NzE1MjUgMTMuNTUyMjg0NywzIDEzLDMgTDExLDMgQzEwLjQ0NzcxNTMsMyAxMCwzLjQ0NzcxNTI1IDEwLDQgTDEwLDQuNSBMNS41LDQuNSBDNS4yMjM4NTc2Myw0LjUgNSw0LjcyMzg1NzYzIDUsNSBMNSw1LjUgQzUsNS43NzYxNDIzNyA1LjIyMzg1NzYzLDYgNS41LDYgTDE4LjUsNiBDMTguNzc2MTQyNCw2IDE5LDUuNzc2MTQyMzcgMTksNS41IEwxOSw1IEMxOSw0LjcyMzg1NzYzIDE4Ljc3NjE0MjQsNC41IDE4LjUsNC41IEwxNCw0LjUgWlwiIGZpbGw9XCIjMDAwMDAwXCIgb3BhY2l0eT1cIjAuM1wiLz5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2c+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cXFxyXG4gICAgICAgICAgICAgICAgICAgICc7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9XVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIC8vIHB1YmxpYyBmdW5jdGlvbnNcclxuICAgICAgICBpbml0OiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgX2RlbW8oKTtcclxuICAgICAgICB9LFxyXG4gICAgfTtcclxufSgpO1xyXG5cclxualF1ZXJ5KGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcclxuICAgIEtUQXBwc0NvbnRhY3RzTGlzdERhdGF0YWJsZS5pbml0KCk7XHJcbn0pO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9