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
/******/ 	return __webpack_require__(__webpack_require__.s = 48);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/metronic/js/pages/custom/projects/list-datatable.js":
/*!***********************************************************************!*\
  !*** ./resources/metronic/js/pages/custom/projects/list-datatable.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // Class definition

var KTAppsProjectsListDatatable = function () {
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
          var img = number + '.png';
          var skills = ['Angular, React', 'Vue, Kendo', '.NET, Oracle, MySQL', 'Node, SASS, Webpack', 'MangoDB, Java', 'HTML5, jQuery, CSS3', 'React, Vue', 'MangoDB, Node.js'];
          var output = '';

          if (number < 7) {
            output = '<div class="d-flex align-items-center">\
								<div class="symbol symbol-40 symbol-circle symbol-sm">\
									<img class="" src="assets/media/project-logos/' + img + '" alt="photo"/>\
								</div>\
								<div class="ml-3">\
									<div class="text-dark-75 font-weight-bolder font-size-lg mb-0">' + data.CompanyAgent + '</div>\
									<a href="#" class="text-muted font-weight-bold text-hover-primary">' + skills[number - 1] + '</a>\
								</div>\
							</div>';
          } else {
            var stateNo = KTUtil.getRandomInt(0, 7);
            var states = ['success', 'primary', 'danger', 'success', 'warning', 'dark', 'primary', 'info'];
            var state = states[stateNo];
            output = '<div class="d-flex align-items-center">\
								<div class="symbol symbol-40 symbol-circle symbol-light-' + state + '">\
									<span class="symbol-label font-size-h4">' + data.CompanyAgent.substring(0, 1) + '</span>\
								</div>\
								<div class="ml-3">\
									<div class="text-dark-75 font-weight-bolder font-size-lg mb-0">' + data.CompanyAgent + '</div>\
									<a href="#" class="text-muted font-weight-bold text-hover-primary">' + skills[number - 4] + '</a>\
								</div>\
							</div>';
          }

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
  KTAppsProjectsListDatatable.init();
});

/***/ }),

/***/ 48:
/*!*****************************************************************************!*\
  !*** multi ./resources/metronic/js/pages/custom/projects/list-datatable.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Applications/MAMP/htdocs/spreadci4/public/admin/themes/metronic/resources/metronic/js/pages/custom/projects/list-datatable.js */"./resources/metronic/js/pages/custom/projects/list-datatable.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL21ldHJvbmljL2pzL3BhZ2VzL2N1c3RvbS9wcm9qZWN0cy9saXN0LWRhdGF0YWJsZS5qcyJdLCJuYW1lcyI6WyJLVEFwcHNQcm9qZWN0c0xpc3REYXRhdGFibGUiLCJfZGVtbyIsImRhdGF0YWJsZSIsIiQiLCJLVERhdGF0YWJsZSIsImRhdGEiLCJ0eXBlIiwic291cmNlIiwicmVhZCIsInVybCIsIkhPU1RfVVJMIiwicGFnZVNpemUiLCJzZXJ2ZXJQYWdpbmciLCJzZXJ2ZXJGaWx0ZXJpbmciLCJzZXJ2ZXJTb3J0aW5nIiwibGF5b3V0Iiwic2Nyb2xsIiwiZm9vdGVyIiwic29ydGFibGUiLCJwYWdpbmF0aW9uIiwic2VhcmNoIiwiaW5wdXQiLCJkZWxheSIsImtleSIsImNvbHVtbnMiLCJmaWVsZCIsInRpdGxlIiwid2lkdGgiLCJzZWxlY3RvciIsInRleHRBbGlnbiIsInRlbXBsYXRlIiwiUmVjb3JkSUQiLCJudW1iZXIiLCJLVFV0aWwiLCJnZXRSYW5kb21JbnQiLCJpbWciLCJza2lsbHMiLCJvdXRwdXQiLCJDb21wYW55QWdlbnQiLCJzdGF0ZU5vIiwic3RhdGVzIiwic3RhdGUiLCJzdWJzdHJpbmciLCJyb3ciLCJDb3VudHJ5IiwiU2hpcENvdW50cnkiLCJmb3JtYXQiLCJzdGF0dXMiLCJpbmRleCIsIlNoaXBEYXRlIiwiQ29tcGFueU5hbWUiLCJTdGF0dXMiLCJvdmVyZmxvdyIsImF1dG9IaWRlIiwiaW5pdCIsImpRdWVyeSIsImRvY3VtZW50IiwicmVhZHkiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Q0NqRkE7O0FBRUEsSUFBSUEsMkJBQTJCLEdBQUcsWUFBVztBQUN6QztBQUVBO0FBQ0EsTUFBSUMsS0FBSyxHQUFHLFNBQVJBLEtBQVEsR0FBVztBQUNuQixRQUFJQyxTQUFTLEdBQUdDLENBQUMsQ0FBQyxlQUFELENBQUQsQ0FBbUJDLFdBQW5CLENBQStCO0FBQzNDO0FBQ0FDLFVBQUksRUFBRTtBQUNGQyxZQUFJLEVBQUUsUUFESjtBQUVGQyxjQUFNLEVBQUU7QUFDSkMsY0FBSSxFQUFFO0FBQ0ZDLGVBQUcsRUFBRUMsUUFBUSxHQUFHO0FBRGQ7QUFERixTQUZOO0FBT0ZDLGdCQUFRLEVBQUUsRUFQUjtBQU9ZO0FBQ2RDLG9CQUFZLEVBQUUsSUFSWjtBQVNGQyx1QkFBZSxFQUFFLElBVGY7QUFVRkMscUJBQWEsRUFBRTtBQVZiLE9BRnFDO0FBZTNDO0FBQ0FDLFlBQU0sRUFBRTtBQUNKQyxjQUFNLEVBQUUsS0FESjtBQUNXO0FBQ2ZDLGNBQU0sRUFBRSxLQUZKLENBRVc7O0FBRlgsT0FoQm1DO0FBcUIzQztBQUNBQyxjQUFRLEVBQUUsSUF0QmlDO0FBd0IzQ0MsZ0JBQVUsRUFBRSxJQXhCK0I7QUEwQjNDQyxZQUFNLEVBQUU7QUFDSkMsYUFBSyxFQUFFbEIsQ0FBQyxDQUFDLDJCQUFELENBREo7QUFFSm1CLGFBQUssRUFBRSxHQUZIO0FBR0pDLFdBQUcsRUFBRTtBQUhELE9BMUJtQztBQWdDM0M7QUFDQUMsYUFBTyxFQUFFLENBQUM7QUFDTkMsYUFBSyxFQUFFLFVBREQ7QUFFTkMsYUFBSyxFQUFFLEdBRkQ7QUFHTlIsZ0JBQVEsRUFBRSxLQUhKO0FBSU5TLGFBQUssRUFBRSxFQUpEO0FBS05yQixZQUFJLEVBQUUsUUFMQTtBQU1Oc0IsZ0JBQVEsRUFBRSxLQU5KO0FBT05DLGlCQUFTLEVBQUUsTUFQTDtBQVFOQyxnQkFBUSxFQUFFLGtCQUFTekIsSUFBVCxFQUFlO0FBQ3JCLGlCQUFPLHNDQUFzQ0EsSUFBSSxDQUFDMEIsUUFBM0MsR0FBc0QsU0FBN0Q7QUFDSDtBQVZLLE9BQUQsRUFXTjtBQUNDTixhQUFLLEVBQUUsU0FEUjtBQUVDQyxhQUFLLEVBQUUsVUFGUjtBQUdDQyxhQUFLLEVBQUUsR0FIUjtBQUlDRyxnQkFBUSxFQUFFLGtCQUFTekIsSUFBVCxFQUFlO0FBQ3JCLGNBQUkyQixNQUFNLEdBQUdDLE1BQU0sQ0FBQ0MsWUFBUCxDQUFvQixDQUFwQixFQUF1QixFQUF2QixDQUFiO0FBQ0EsY0FBSUMsR0FBRyxHQUFHSCxNQUFNLEdBQUcsTUFBbkI7QUFFZixjQUFJSSxNQUFNLEdBQUcsQ0FDTixnQkFETSxFQUVOLFlBRk0sRUFHTixxQkFITSxFQUlOLHFCQUpNLEVBS04sZUFMTSxFQU1OLHFCQU5NLEVBT1osWUFQWSxFQVFaLGtCQVJZLENBQWI7QUFXZSxjQUFJQyxNQUFNLEdBQUcsRUFBYjs7QUFDQSxjQUFJTCxNQUFNLEdBQUcsQ0FBYixFQUFnQjtBQUNaSyxrQkFBTSxHQUFHO0FBQ2pDO0FBQ0Esd0RBRmlDLEdBRTBCRixHQUYxQixHQUVnQztBQUNqRTtBQUNBO0FBQ0EseUVBTGlDLEdBSzJDOUIsSUFBSSxDQUFDaUMsWUFMaEQsR0FLK0Q7QUFDaEcsNkVBTmlDLEdBT0hGLE1BQU0sQ0FBQ0osTUFBTSxHQUFFLENBQVQsQ0FQSCxHQU9pQjtBQUNsRDtBQUNBLGNBVHdCO0FBVUgsV0FYRCxNQVdPO0FBQ0gsZ0JBQUlPLE9BQU8sR0FBR04sTUFBTSxDQUFDQyxZQUFQLENBQW9CLENBQXBCLEVBQXVCLENBQXZCLENBQWQ7QUFDQSxnQkFBSU0sTUFBTSxHQUFHLENBQ1QsU0FEUyxFQUVULFNBRlMsRUFHVCxRQUhTLEVBSVQsU0FKUyxFQUtULFNBTFMsRUFNVCxNQU5TLEVBT1QsU0FQUyxFQVFULE1BUlMsQ0FBYjtBQVVBLGdCQUFJQyxLQUFLLEdBQUdELE1BQU0sQ0FBQ0QsT0FBRCxDQUFsQjtBQUVBRixrQkFBTSxHQUFHO0FBQ2pDLGlFQURpQyxHQUNtQ0ksS0FEbkMsR0FDMkM7QUFDNUUsa0RBRmlDLEdBRW9CcEMsSUFBSSxDQUFDaUMsWUFBTCxDQUFrQkksU0FBbEIsQ0FBNEIsQ0FBNUIsRUFBK0IsQ0FBL0IsQ0FGcEIsR0FFd0Q7QUFDekY7QUFDQTtBQUNBLHlFQUxpQyxHQUsyQ3JDLElBQUksQ0FBQ2lDLFlBTGhELEdBSytEO0FBQ2hHLDZFQU5pQyxHQU9MRixNQUFNLENBQUNKLE1BQU0sR0FBRyxDQUFWLENBUEQsR0FPZ0I7QUFDakQ7QUFDQSxjQVR3QjtBQVVIOztBQUVELGlCQUFPSyxNQUFQO0FBQ0g7QUExREYsT0FYTSxFQXNFTjtBQUNDWixhQUFLLEVBQUUsU0FEUjtBQUVDQyxhQUFLLEVBQUUsU0FGUjtBQUdDSSxnQkFBUSxFQUFFLGtCQUFTYSxHQUFULEVBQWM7QUFDcEIsY0FBSU4sTUFBTSxHQUFHLEVBQWI7QUFFQUEsZ0JBQU0sSUFBSSx1REFBdURNLEdBQUcsQ0FBQ0MsT0FBM0QsR0FBcUUsUUFBL0U7QUFDQVAsZ0JBQU0sSUFBSSxvREFBb0RNLEdBQUcsQ0FBQ0UsV0FBeEQsR0FBc0UsUUFBaEY7QUFFQSxpQkFBT1IsTUFBUDtBQUNIO0FBVkYsT0F0RU0sRUFpRk47QUFDQ1osYUFBSyxFQUFFLFVBRFI7QUFFQ0MsYUFBSyxFQUFFLFdBRlI7QUFHQ3BCLFlBQUksRUFBRSxNQUhQO0FBSUN3QyxjQUFNLEVBQUUsWUFKVDtBQUtDaEIsZ0JBQVEsRUFBRSxrQkFBU2EsR0FBVCxFQUFjO0FBQ3BCLGNBQUlOLE1BQU0sR0FBRyxFQUFiO0FBRUEsY0FBSVUsTUFBTSxHQUFHO0FBQ1QsZUFBRztBQUFDLHVCQUFTLE1BQVY7QUFBa0IsdUJBQVM7QUFBM0IsYUFETTtBQUVULGVBQUc7QUFBQyx1QkFBUyxVQUFWO0FBQXNCLHVCQUFTO0FBQS9CLGFBRk07QUFHVCxlQUFHO0FBQUMsdUJBQVMsU0FBVjtBQUFxQix1QkFBUztBQUE5QixhQUhNO0FBSVQsZUFBRztBQUFDLHVCQUFTLFVBQVY7QUFBc0IsdUJBQVM7QUFBL0I7QUFKTSxXQUFiO0FBTUEsY0FBSUMsS0FBSyxHQUFHZixNQUFNLENBQUNDLFlBQVAsQ0FBb0IsQ0FBcEIsRUFBdUIsQ0FBdkIsQ0FBWjtBQUVBRyxnQkFBTSxJQUFJLHVEQUF1RE0sR0FBRyxDQUFDTSxRQUEzRCxHQUFzRSxRQUFoRjtBQUNBWixnQkFBTSxJQUFJLDZCQUE2QlUsTUFBTSxDQUFDQyxLQUFELENBQU4sQ0FBY3RCLEtBQTNDLEdBQW1ELFFBQTdEO0FBRUEsaUJBQU9XLE1BQVA7QUFDSDtBQXBCRixPQWpGTSxFQXNHTjtBQUNDWixhQUFLLEVBQUUsYUFEUjtBQUVDQyxhQUFLLEVBQUUsY0FGUjtBQUdDSSxnQkFBUSxFQUFFLGtCQUFTYSxHQUFULEVBQWM7QUFDcEIsY0FBSU4sTUFBTSxHQUFHLEVBQWI7QUFFQUEsZ0JBQU0sSUFBSSw4Q0FBOENNLEdBQUcsQ0FBQ08sV0FBbEQsR0FBZ0UsUUFBMUU7QUFFQSxpQkFBT2IsTUFBUDtBQUNIO0FBVEYsT0F0R00sRUFnSE47QUFDQ1osYUFBSyxFQUFFLFFBRFI7QUFFQ0MsYUFBSyxFQUFFLFFBRlI7QUFHQztBQUNBSSxnQkFBUSxFQUFFLGtCQUFTYSxHQUFULEVBQWM7QUFDcEIsY0FBSUksTUFBTSxHQUFHO0FBQ1QsZUFBRztBQUNDLHVCQUFTLFNBRFY7QUFFQyx1QkFBUztBQUZWLGFBRE07QUFLVCxlQUFHO0FBQ0MsdUJBQVMsV0FEVjtBQUVDLHVCQUFTO0FBRlYsYUFMTTtBQVNULGVBQUc7QUFDQyx1QkFBUyxVQURWO0FBRUMsdUJBQVM7QUFGVixhQVRNO0FBYVQsZUFBRztBQUNDLHVCQUFTLFNBRFY7QUFFQyx1QkFBUztBQUZWLGFBYk07QUFpQlQsZUFBRztBQUNDLHVCQUFTLE1BRFY7QUFFQyx1QkFBUztBQUZWLGFBakJNO0FBcUJULGVBQUc7QUFDQyx1QkFBUyxRQURWO0FBRUMsdUJBQVM7QUFGVixhQXJCTTtBQXlCVCxlQUFHO0FBQ0MsdUJBQVMsU0FEVjtBQUVDLHVCQUFTO0FBRlY7QUF6Qk0sV0FBYjtBQThCQSxpQkFBTyxrREFBa0RBLE1BQU0sQ0FBQ0osR0FBRyxDQUFDUSxNQUFMLENBQU4sU0FBbEQsR0FBNkUsaUJBQTdFLEdBQWlHSixNQUFNLENBQUNKLEdBQUcsQ0FBQ1EsTUFBTCxDQUFOLENBQW1CekIsS0FBcEgsR0FBNEgsU0FBbkk7QUFDSDtBQXBDRixPQWhITSxFQXFKTjtBQUNDRCxhQUFLLEVBQUUsU0FEUjtBQUVDQyxhQUFLLEVBQUUsU0FGUjtBQUdDUixnQkFBUSxFQUFFLEtBSFg7QUFJQ1MsYUFBSyxFQUFFLEdBSlI7QUFLQ3lCLGdCQUFRLEVBQUUsU0FMWDtBQU1DQyxnQkFBUSxFQUFFLEtBTlg7QUFPQ3ZCLGdCQUFRLEVBQUUsb0JBQVc7QUFDakIsaUJBQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBekVvQjtBQTBFSDtBQWxGRixPQXJKTTtBQWpDa0MsS0FBL0IsQ0FBaEI7QUEyUUgsR0E1UUQ7O0FBOFFBLFNBQU87QUFDSDtBQUNBd0IsUUFBSSxFQUFFLGdCQUFXO0FBQ2JyRCxXQUFLO0FBQ1I7QUFKRSxHQUFQO0FBTUgsQ0F4UmlDLEVBQWxDOztBQTBSQXNELE1BQU0sQ0FBQ0MsUUFBRCxDQUFOLENBQWlCQyxLQUFqQixDQUF1QixZQUFXO0FBQzlCekQsNkJBQTJCLENBQUNzRCxJQUE1QjtBQUNILENBRkQsRSIsImZpbGUiOiIvZGV2ZWxvcG1lbnQvanMvcGFnZXMvY3VzdG9tL3Byb2plY3RzL2xpc3QtZGF0YXRhYmxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA0OCk7XG4iLCJcInVzZSBzdHJpY3RcIjtcclxuLy8gQ2xhc3MgZGVmaW5pdGlvblxyXG5cclxudmFyIEtUQXBwc1Byb2plY3RzTGlzdERhdGF0YWJsZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgLy8gUHJpdmF0ZSBmdW5jdGlvbnNcclxuXHJcbiAgICAvLyBiYXNpYyBkZW1vXHJcbiAgICB2YXIgX2RlbW8gPSBmdW5jdGlvbigpIHtcclxuICAgICAgICB2YXIgZGF0YXRhYmxlID0gJCgnI2t0X2RhdGF0YWJsZScpLktURGF0YXRhYmxlKHtcclxuICAgICAgICAgICAgLy8gZGF0YXNvdXJjZSBkZWZpbml0aW9uXHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgIHR5cGU6ICdyZW1vdGUnLFxyXG4gICAgICAgICAgICAgICAgc291cmNlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVhZDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6IEhPU1RfVVJMICsgJy9hcGkvZGF0YXRhYmxlcy9kZW1vcy9kZWZhdWx0LnBocCcsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBwYWdlU2l6ZTogMTAsIC8vIGRpc3BsYXkgMjAgcmVjb3JkcyBwZXIgcGFnZVxyXG4gICAgICAgICAgICAgICAgc2VydmVyUGFnaW5nOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgc2VydmVyRmlsdGVyaW5nOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgc2VydmVyU29ydGluZzogdHJ1ZSxcclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgIC8vIGxheW91dCBkZWZpbml0aW9uXHJcbiAgICAgICAgICAgIGxheW91dDoge1xyXG4gICAgICAgICAgICAgICAgc2Nyb2xsOiBmYWxzZSwgLy8gZW5hYmxlL2Rpc2FibGUgZGF0YXRhYmxlIHNjcm9sbCBib3RoIGhvcml6b250YWwgYW5kIHZlcnRpY2FsIHdoZW4gbmVlZGVkLlxyXG4gICAgICAgICAgICAgICAgZm9vdGVyOiBmYWxzZSwgLy8gZGlzcGxheS9oaWRlIGZvb3RlclxyXG4gICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgLy8gY29sdW1uIHNvcnRpbmdcclxuICAgICAgICAgICAgc29ydGFibGU6IHRydWUsXHJcblxyXG4gICAgICAgICAgICBwYWdpbmF0aW9uOiB0cnVlLFxyXG5cclxuICAgICAgICAgICAgc2VhcmNoOiB7XHJcbiAgICAgICAgICAgICAgICBpbnB1dDogJCgnI2t0X3N1YmhlYWRlcl9zZWFyY2hfZm9ybScpLFxyXG4gICAgICAgICAgICAgICAgZGVsYXk6IDQwMCxcclxuICAgICAgICAgICAgICAgIGtleTogJ2dlbmVyYWxTZWFyY2gnXHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICAvLyBjb2x1bW5zIGRlZmluaXRpb25cclxuICAgICAgICAgICAgY29sdW1uczogW3tcclxuICAgICAgICAgICAgICAgIGZpZWxkOiAnUmVjb3JkSUQnLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICcjJyxcclxuICAgICAgICAgICAgICAgIHNvcnRhYmxlOiAnYXNjJyxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA0MCxcclxuICAgICAgICAgICAgICAgIHR5cGU6ICdudW1iZXInLFxyXG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgdGV4dEFsaWduOiAnbGVmdCcsXHJcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZTogZnVuY3Rpb24oZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAnPHNwYW4gY2xhc3M9XCJmb250LXdlaWdodC1ib2xkZXJcIj4nICsgZGF0YS5SZWNvcmRJRCArICc8L3NwYW4+JztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgZmllbGQ6ICdPcmRlcklEJyxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnQ3VzdG9tZXInLFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDI1MCxcclxuICAgICAgICAgICAgICAgIHRlbXBsYXRlOiBmdW5jdGlvbihkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG51bWJlciA9IEtUVXRpbC5nZXRSYW5kb21JbnQoMSwgMTApO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBpbWcgPSBudW1iZXIgKyAnLnBuZyc7XHJcblxyXG5cdFx0XHRcdFx0dmFyIHNraWxscyA9IFtcclxuXHRcdFx0XHQgICAgICAgICdBbmd1bGFyLCBSZWFjdCcsXHJcblx0XHRcdFx0ICAgICAgICAnVnVlLCBLZW5kbycsXHJcblx0XHRcdFx0ICAgICAgICAnLk5FVCwgT3JhY2xlLCBNeVNRTCcsXHJcblx0XHRcdFx0ICAgICAgICAnTm9kZSwgU0FTUywgV2VicGFjaycsXHJcblx0XHRcdFx0ICAgICAgICAnTWFuZ29EQiwgSmF2YScsXHJcblx0XHRcdFx0ICAgICAgICAnSFRNTDUsIGpRdWVyeSwgQ1NTMycsXHJcblx0XHRcdFx0XHRcdCdSZWFjdCwgVnVlJyxcclxuXHRcdFx0XHRcdFx0J01hbmdvREIsIE5vZGUuanMnXHJcblx0XHRcdFx0ICAgIF07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBvdXRwdXQgPSAnJztcclxuICAgICAgICAgICAgICAgICAgICBpZiAobnVtYmVyIDwgNykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRwdXQgPSAnPGRpdiBjbGFzcz1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cXFxyXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cInN5bWJvbCBzeW1ib2wtNDAgc3ltYm9sLWNpcmNsZSBzeW1ib2wtc21cIj5cXFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8aW1nIGNsYXNzPVwiXCIgc3JjPVwiYXNzZXRzL21lZGlhL3Byb2plY3QtbG9nb3MvJyArIGltZyArICdcIiBhbHQ9XCJwaG90b1wiLz5cXFxyXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XFxcclxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJtbC0zXCI+XFxcclxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cInRleHQtZGFyay03NSBmb250LXdlaWdodC1ib2xkZXIgZm9udC1zaXplLWxnIG1iLTBcIj4nICsgZGF0YS5Db21wYW55QWdlbnQgKyAnPC9kaXY+XFxcclxuXHRcdFx0XHRcdFx0XHRcdFx0PGEgaHJlZj1cIiNcIiBjbGFzcz1cInRleHQtbXV0ZWQgZm9udC13ZWlnaHQtYm9sZCB0ZXh0LWhvdmVyLXByaW1hcnlcIj4nICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFx0XHRza2lsbHNbbnVtYmVyIC0xXSArICc8L2E+XFxcclxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxcXHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+JztcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgc3RhdGVObyA9IEtUVXRpbC5nZXRSYW5kb21JbnQoMCwgNyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzdGF0ZXMgPSBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnc3VjY2VzcycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAncHJpbWFyeScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZGFuZ2VyJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdzdWNjZXNzJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd3YXJuaW5nJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdkYXJrJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdwcmltYXJ5JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdpbmZvJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgc3RhdGUgPSBzdGF0ZXNbc3RhdGVOb107XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRwdXQgPSAnPGRpdiBjbGFzcz1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cXFxyXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cInN5bWJvbCBzeW1ib2wtNDAgc3ltYm9sLWNpcmNsZSBzeW1ib2wtbGlnaHQtJyArIHN0YXRlICsgJ1wiPlxcXHJcblx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzPVwic3ltYm9sLWxhYmVsIGZvbnQtc2l6ZS1oNFwiPicgKyBkYXRhLkNvbXBhbnlBZ2VudC5zdWJzdHJpbmcoMCwgMSkgKyAnPC9zcGFuPlxcXHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cXFxyXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cIm1sLTNcIj5cXFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwidGV4dC1kYXJrLTc1IGZvbnQtd2VpZ2h0LWJvbGRlciBmb250LXNpemUtbGcgbWItMFwiPicgKyBkYXRhLkNvbXBhbnlBZ2VudCArICc8L2Rpdj5cXFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8YSBocmVmPVwiI1wiIGNsYXNzPVwidGV4dC1tdXRlZCBmb250LXdlaWdodC1ib2xkIHRleHQtaG92ZXItcHJpbWFyeVwiPicgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2tpbGxzW251bWJlciAtIDRdICsgJzwvYT5cXFxyXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XFxcclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj4nO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG91dHB1dDtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkOiAnQ291bnRyeScsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ0NvdW50cnknLFxyXG4gICAgICAgICAgICAgICAgdGVtcGxhdGU6IGZ1bmN0aW9uKHJvdykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBvdXRwdXQgPSAnJztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgb3V0cHV0ICs9ICc8ZGl2IGNsYXNzPVwiZm9udC13ZWlnaHQtYm9sZGVyIGZvbnQtc2l6ZS1sZyBtYi0wXCI+JyArIHJvdy5Db3VudHJ5ICsgJzwvZGl2Pic7XHJcbiAgICAgICAgICAgICAgICAgICAgb3V0cHV0ICs9ICc8ZGl2IGNsYXNzPVwiZm9udC13ZWlnaHQtYm9sZCB0ZXh0LW11dGVkXCI+Q29kZTogJyArIHJvdy5TaGlwQ291bnRyeSArICc8L2Rpdj4nO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gb3V0cHV0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZDogJ1NoaXBEYXRlJyxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnU2hpcCBEYXRlJyxcclxuICAgICAgICAgICAgICAgIHR5cGU6ICdkYXRlJyxcclxuICAgICAgICAgICAgICAgIGZvcm1hdDogJ01NL0REL1lZWVknLFxyXG4gICAgICAgICAgICAgICAgdGVtcGxhdGU6IGZ1bmN0aW9uKHJvdykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBvdXRwdXQgPSAnJztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHN0YXR1cyA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgMTogeyd0aXRsZSc6ICdQYWlkJywgJ2NsYXNzJzogJyBsYWJlbC1saWdodC1wcmltYXJ5J30sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDI6IHsndGl0bGUnOiAnQXBwcm92ZWQnLCAnY2xhc3MnOiAnIGxhYmVsLWxpZ2h0LWRhbmdlcid9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAzOiB7J3RpdGxlJzogJ1BlbmRpbmcnLCAnY2xhc3MnOiAnIGxhYmVsLWxpZ2h0LXByaW1hcnknfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgNDogeyd0aXRsZSc6ICdSZWplY3RlZCcsICdjbGFzcyc6ICcgbGFiZWwtbGlnaHQtc3VjY2Vzcyd9XHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgaW5kZXggPSBLVFV0aWwuZ2V0UmFuZG9tSW50KDEsIDQpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBvdXRwdXQgKz0gJzxkaXYgY2xhc3M9XCJmb250LXdlaWdodC1ib2xkZXIgdGV4dC1wcmltYXJ5IG1iLTBcIj4nICsgcm93LlNoaXBEYXRlICsgJzwvZGl2Pic7XHJcbiAgICAgICAgICAgICAgICAgICAgb3V0cHV0ICs9ICc8ZGl2IGNsYXNzPVwidGV4dC1tdXRlZFwiPicgKyBzdGF0dXNbaW5kZXhdLnRpdGxlICsgJzwvZGl2Pic7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvdXRwdXQ7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZDogJ0NvbXBhbnlOYW1lJyxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnQ29tcGFueSBOYW1lJyxcclxuICAgICAgICAgICAgICAgIHRlbXBsYXRlOiBmdW5jdGlvbihyb3cpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgb3V0cHV0ID0gJyc7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIG91dHB1dCArPSAnPGRpdiBjbGFzcz1cImZvbnQtd2VpZ2h0LWJvbGQgdGV4dC1tdXRlZFwiPicgKyByb3cuQ29tcGFueU5hbWUgKyAnPC9kaXY+JztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG91dHB1dDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgZmllbGQ6ICdTdGF0dXMnLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdTdGF0dXMnLFxyXG4gICAgICAgICAgICAgICAgLy8gY2FsbGJhY2sgZnVuY3Rpb24gc3VwcG9ydCBmb3IgY29sdW1uIHJlbmRlcmluZ1xyXG4gICAgICAgICAgICAgICAgdGVtcGxhdGU6IGZ1bmN0aW9uKHJvdykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBzdGF0dXMgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0aXRsZSc6ICdQZW5kaW5nJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjbGFzcyc6ICcgbGFiZWwtbGlnaHQtcHJpbWFyeSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgMjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RpdGxlJzogJ0RlbGl2ZXJlZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2xhc3MnOiAnIGxhYmVsLWxpZ2h0LWRhbmdlcidcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgMzoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RpdGxlJzogJ0NhbmNlbGVkJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjbGFzcyc6ICcgbGFiZWwtbGlnaHQtcHJpbWFyeSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgNDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RpdGxlJzogJ1N1Y2Nlc3MnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzogJyBsYWJlbC1saWdodC1zdWNjZXNzJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA1OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGl0bGUnOiAnSW5mbycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2xhc3MnOiAnIGxhYmVsLWxpZ2h0LWluZm8nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDY6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0aXRsZSc6ICdEYW5nZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzogJyBsYWJlbC1saWdodC1kYW5nZXInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDc6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0aXRsZSc6ICdXYXJuaW5nJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjbGFzcyc6ICcgbGFiZWwtbGlnaHQtd2FybmluZydcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAnPHNwYW4gY2xhc3M9XCJsYWJlbCBsYWJlbC1sZyBmb250LXdlaWdodC1ib2xkICcgKyBzdGF0dXNbcm93LlN0YXR1c10uY2xhc3MgKyAnIGxhYmVsLWlubGluZVwiPicgKyBzdGF0dXNbcm93LlN0YXR1c10udGl0bGUgKyAnPC9zcGFuPic7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZDogJ0FjdGlvbnMnLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdBY3Rpb25zJyxcclxuICAgICAgICAgICAgICAgIHNvcnRhYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMzAsXHJcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogJ3Zpc2libGUnLFxyXG4gICAgICAgICAgICAgICAgYXV0b0hpZGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgdGVtcGxhdGU6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAnXFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRyb3Bkb3duIGRyb3Bkb3duLWlubGluZVwiPlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiamF2YXNjcmlwdDo7XCIgY2xhc3M9XCJidG4gYnRuLXNtIGJ0bi1kZWZhdWx0IGJ0bi10ZXh0LXByaW1hcnkgYnRuLWhvdmVyLXByaW1hcnkgYnRuLWljb24gbXItMlwiIGRhdGEtdG9nZ2xlPVwiZHJvcGRvd25cIj5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwic3ZnLWljb24gc3ZnLWljb24tbWRcIj5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB4bWxuczp4bGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIiB3aWR0aD1cIjI0cHhcIiBoZWlnaHQ9XCIyNHB4XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHZlcnNpb249XCIxLjFcIiBjbGFzcz1cInN2Zy1pY29uXCI+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxnIHN0cm9rZT1cIm5vbmVcIiBzdHJva2Utd2lkdGg9XCIxXCIgZmlsbD1cIm5vbmVcIiBmaWxsLXJ1bGU9XCJldmVub2RkXCI+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCB4PVwiMFwiIHk9XCIwXCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIvPlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk03LDMgTDE3LDMgQzE5LjIwOTEzOSwzIDIxLDQuNzkwODYxIDIxLDcgQzIxLDkuMjA5MTM5IDE5LjIwOTEzOSwxMSAxNywxMSBMNywxMSBDNC43OTA4NjEsMTEgMyw5LjIwOTEzOSAzLDcgQzMsNC43OTA4NjEgNC43OTA4NjEsMyA3LDMgWiBNNyw5IEM4LjEwNDU2OTUsOSA5LDguMTA0NTY5NSA5LDcgQzksNS44OTU0MzA1IDguMTA0NTY5NSw1IDcsNSBDNS44OTU0MzA1LDUgNSw1Ljg5NTQzMDUgNSw3IEM1LDguMTA0NTY5NSA1Ljg5NTQzMDUsOSA3LDkgWlwiIGZpbGw9XCIjMDAwMDAwXCIvPlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk03LDEzIEwxNywxMyBDMTkuMjA5MTM5LDEzIDIxLDE0Ljc5MDg2MSAyMSwxNyBDMjEsMTkuMjA5MTM5IDE5LjIwOTEzOSwyMSAxNywyMSBMNywyMSBDNC43OTA4NjEsMjEgMywxOS4yMDkxMzkgMywxNyBDMywxNC43OTA4NjEgNC43OTA4NjEsMTMgNywxMyBaIE0xNywxOSBDMTguMTA0NTY5NSwxOSAxOSwxOC4xMDQ1Njk1IDE5LDE3IEMxOSwxNS44OTU0MzA1IDE4LjEwNDU2OTUsMTUgMTcsMTUgQzE1Ljg5NTQzMDUsMTUgMTUsMTUuODk1NDMwNSAxNSwxNyBDMTUsMTguMTA0NTY5NSAxNS44OTU0MzA1LDE5IDE3LDE5IFpcIiBmaWxsPVwiIzAwMDAwMFwiIG9wYWNpdHk9XCIwLjNcIi8+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZz5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZHJvcGRvd24tbWVudSBkcm9wZG93bi1tZW51LXNtIGRyb3Bkb3duLW1lbnUtcmlnaHRcIj5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cIm5hdmkgZmxleC1jb2x1bW4gbmF2aS1ob3ZlciBweS0yXCI+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwibmF2aS1oZWFkZXIgZm9udC13ZWlnaHQtYm9sZGVyIHRleHQtdXBwZXJjYXNlIGZvbnQtc2l6ZS14cyB0ZXh0LXByaW1hcnkgcGItMlwiPlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDaG9vc2UgYW4gYWN0aW9uOlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwibmF2aS1pdGVtXCI+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJuYXZpLWxpbmtcIj5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibmF2aS1pY29uXCI+PGkgY2xhc3M9XCJsYSBsYS1wcmludFwiPjwvaT48L3NwYW4+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm5hdmktdGV4dFwiPlByaW50PC9zcGFuPlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJuYXZpLWl0ZW1cIj5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cIm5hdmktbGlua1wiPlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJuYXZpLWljb25cIj48aSBjbGFzcz1cImxhIGxhLWNvcHlcIj48L2k+PC9zcGFuPlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJuYXZpLXRleHRcIj5Db3B5PC9zcGFuPlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJuYXZpLWl0ZW1cIj5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cIm5hdmktbGlua1wiPlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJuYXZpLWljb25cIj48aSBjbGFzcz1cImxhIGxhLWZpbGUtZXhjZWwtb1wiPjwvaT48L3NwYW4+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm5hdmktdGV4dFwiPkV4Y2VsPC9zcGFuPlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJuYXZpLWl0ZW1cIj5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cIm5hdmktbGlua1wiPlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJuYXZpLWljb25cIj48aSBjbGFzcz1cImxhIGxhLWZpbGUtdGV4dC1vXCI+PC9pPjwvc3Bhbj5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibmF2aS10ZXh0XCI+Q1NWPC9zcGFuPlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJuYXZpLWl0ZW1cIj5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cIm5hdmktbGlua1wiPlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJuYXZpLWljb25cIj48aSBjbGFzcz1cImxhIGxhLWZpbGUtcGRmLW9cIj48L2k+PC9zcGFuPlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJuYXZpLXRleHRcIj5QREY8L3NwYW4+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImphdmFzY3JpcHQ6O1wiIGNsYXNzPVwiYnRuIGJ0bi1zbSBidG4tZGVmYXVsdCBidG4tdGV4dC1wcmltYXJ5IGJ0bi1ob3Zlci1wcmltYXJ5IGJ0bi1pY29uIG1yLTJcIiB0aXRsZT1cIkVkaXQgZGV0YWlsc1wiPlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInN2Zy1pY29uIHN2Zy1pY29uLW1kXCI+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB4bWxuczp4bGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIiB3aWR0aD1cIjI0cHhcIiBoZWlnaHQ9XCIyNHB4XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHZlcnNpb249XCIxLjFcIj5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZyBzdHJva2U9XCJub25lXCIgc3Ryb2tlLXdpZHRoPVwiMVwiIGZpbGw9XCJub25lXCIgZmlsbC1ydWxlPVwiZXZlbm9kZFwiPlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCB4PVwiMFwiIHk9XCIwXCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIvPlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTEyLjI2NzQ3OTksMTguMjMyMzU5NyBMMTIuMDA4NDg3Miw1LjQ1ODUyNDUxIEMxMi4wMDA0MzAzLDUuMDYxMTQ3OTIgMTIuMTUwNDE1NCw0LjY3NjgxODMgMTIuNDI1NTAzNyw0LjM4OTkzOTQ5IEwxNS4wMDMwMTY3LDEuNzAxOTUzMDQgTDE3LjU5MTA3NTIsNC40MDA5MzY5NSBDMTcuODU5OTA3MSw0LjY4MTI5MTEgMTguMDA5NTA2Nyw1LjA1NDk5NjAzIDE4LjAwODM5MzgsNS40NDM0MTMwNyBMMTcuOTcxODI2MiwxOC4yMDYyNTA4IEMxNy45Njk0NTc1LDE5LjAzMjk5NjYgMTcuMjk4NTgxNiwxOS43MDE5NTMgMTYuNDcxODMyNCwxOS43MDE5NTMgTDEzLjc2NzE3MTcsMTkuNzAxOTUzIEMxMi45NTA1OTUyLDE5LjcwMTk1MyAxMi4yODQwMzI4LDE5LjA0ODc2ODQgMTIuMjY3NDc5OSwxOC4yMzIzNTk3IFpcIiBmaWxsPVwiIzAwMDAwMFwiIGZpbGwtcnVsZT1cIm5vbnplcm9cIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMTQuNzAxOTUzLCAxMC43MDE5NTMpIHJvdGF0ZSgtMTM1LjAwMDAwMCkgdHJhbnNsYXRlKC0xNC43MDE5NTMsIC0xMC43MDE5NTMpIFwiLz5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0xMi45LDIgQzEzLjQ1MjI4NDcsMiAxMy45LDIuNDQ3NzE1MjUgMTMuOSwzIEMxMy45LDMuNTUyMjg0NzUgMTMuNDUyMjg0Nyw0IDEyLjksNCBMNiw0IEM0Ljg5NTQzMDUsNCA0LDQuODk1NDMwNSA0LDYgTDQsMTggQzQsMTkuMTA0NTY5NSA0Ljg5NTQzMDUsMjAgNiwyMCBMMTgsMjAgQzE5LjEwNDU2OTUsMjAgMjAsMTkuMTA0NTY5NSAyMCwxOCBMMjAsMTMgQzIwLDEyLjQ0NzcxNTMgMjAuNDQ3NzE1MywxMiAyMSwxMiBDMjEuNTUyMjg0NywxMiAyMiwxMi40NDc3MTUzIDIyLDEzIEwyMiwxOCBDMjIsMjAuMjA5MTM5IDIwLjIwOTEzOSwyMiAxOCwyMiBMNiwyMiBDMy43OTA4NjEsMjIgMiwyMC4yMDkxMzkgMiwxOCBMMiw2IEMyLDMuNzkwODYxIDMuNzkwODYxLDIgNiwyIEwxMi45LDIgWlwiIGZpbGw9XCIjMDAwMDAwXCIgZmlsbC1ydWxlPVwibm9uemVyb1wiIG9wYWNpdHk9XCIwLjNcIi8+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9nPlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImphdmFzY3JpcHQ6O1wiIGNsYXNzPVwiYnRuIGJ0bi1zbSBidG4tZGVmYXVsdCBidG4tdGV4dC1wcmltYXJ5IGJ0bi1ob3Zlci1wcmltYXJ5IGJ0bi1pY29uXCIgdGl0bGU9XCJEZWxldGVcIj5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJzdmctaWNvbiBzdmctaWNvbi1tZFwiPlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgeG1sbnM6eGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIgd2lkdGg9XCIyNHB4XCIgaGVpZ2h0PVwiMjRweFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiB2ZXJzaW9uPVwiMS4xXCI+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGcgc3Ryb2tlPVwibm9uZVwiIHN0cm9rZS13aWR0aD1cIjFcIiBmaWxsPVwibm9uZVwiIGZpbGwtcnVsZT1cImV2ZW5vZGRcIj5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3QgeD1cIjBcIiB5PVwiMFwiIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiLz5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk02LDggTDYsMjAuNSBDNiwyMS4zMjg0MjcxIDYuNjcxNTcyODgsMjIgNy41LDIyIEwxNi41LDIyIEMxNy4zMjg0MjcxLDIyIDE4LDIxLjMyODQyNzEgMTgsMjAuNSBMMTgsOCBMNiw4IFpcIiBmaWxsPVwiIzAwMDAwMFwiIGZpbGwtcnVsZT1cIm5vbnplcm9cIi8+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTQsNC41IEwxNCw0IEMxNCwzLjQ0NzcxNTI1IDEzLjU1MjI4NDcsMyAxMywzIEwxMSwzIEMxMC40NDc3MTUzLDMgMTAsMy40NDc3MTUyNSAxMCw0IEwxMCw0LjUgTDUuNSw0LjUgQzUuMjIzODU3NjMsNC41IDUsNC43MjM4NTc2MyA1LDUgTDUsNS41IEM1LDUuNzc2MTQyMzcgNS4yMjM4NTc2Myw2IDUuNSw2IEwxOC41LDYgQzE4Ljc3NjE0MjQsNiAxOSw1Ljc3NjE0MjM3IDE5LDUuNSBMMTksNSBDMTksNC43MjM4NTc2MyAxOC43NzYxNDI0LDQuNSAxOC41LDQuNSBMMTQsNC41IFpcIiBmaWxsPVwiIzAwMDAwMFwiIG9wYWNpdHk9XCIwLjNcIi8+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9nPlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XFxcclxuICAgICAgICAgICAgICAgICAgICAnO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfV1cclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICAvLyBwdWJsaWMgZnVuY3Rpb25zXHJcbiAgICAgICAgaW5pdDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIF9kZW1vKCk7XHJcbiAgICAgICAgfSxcclxuICAgIH07XHJcbn0oKTtcclxuXHJcbmpRdWVyeShkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcbiAgICBLVEFwcHNQcm9qZWN0c0xpc3REYXRhdGFibGUuaW5pdCgpO1xyXG59KTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==