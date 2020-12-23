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
/******/ 	return __webpack_require__(__webpack_require__.s = 33);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/metronic/js/pages/custom/education/school/teachers.js":
/*!*************************************************************************!*\
  !*** ./resources/metronic/js/pages/custom/education/school/teachers.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // Class definition

var KTAppsEducationSchoolTeacher = function () {
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
      // enable pagination
      pagination: true,
      // columns definition
      columns: [{
        field: 'CompanyName',
        title: 'Teacher',
        width: 250,
        template: function template(data) {
          var number = KTUtil.getRandomInt(1, 20);
          var img = '300_' + number + '.jpg';
          var output = '';
          var genreIndex = KTUtil.getRandomInt(1, 5);
          var genre = {
            1: {
              'title': 'Mathematics, BA'
            },
            2: {
              'title': 'Geography, BSc'
            },
            3: {
              'title': 'History, PhD'
            },
            4: {
              'title': 'Physics, MS'
            },
            5: {
              'title': 'astronomy, MA'
            }
          };
          output = '<div class="d-flex align-items-center">\
							<div class="symbol symbol-40 symbol-sm flex-shrink-0">\
								<img class="" src="assets/media/users/' + img + '" alt="photo">\
							</div>\
							<div class="ml-4">\
								<a href="#" class="text-dark-75 text-hover-primary font-weight-bolder font-size-lg mb-0">' + data.CompanyAgent + '</a>\
								<div class="text-muted font-weight-bold">' + genre[genreIndex].title + '</div>\
							</div>\
						</div>';
          return output;
        }
      }, {
        field: 'CompanyAgent',
        title: 'Department',
        template: function template(row) {
          var output = '';
          output += '<a href="#" class="text-dark-50 text-hover-primary font-weight-bold">' + row.CompanyName + '</a>';
          return output;
        }
      }, {
        field: 'JoinedDate',
        title: 'Joined',
        type: 'date',
        width: 100,
        format: 'MM/DD/YYYY',
        template: function template(row) {
          var output = '';
          output += '<div class="font-weight-bolder text-primary mb-0">' + row.ShipDate + '</div>';
          return output;
        }
      }, {
        field: 'Status',
        title: 'Status',
        autoHide: false,
        width: 100,
        // callback function support for column rendering
        template: function template(row) {
          var index = KTUtil.getRandomInt(1, 3);
          var status = {
            1: {
              'title': 'New',
              'class': ' label-light-primary'
            },
            2: {
              'title': 'Active',
              'class': ' label-light-danger'
            },
            3: {
              'title': 'In-active',
              'class': ' label-light-info'
            }
          };
          return '<span class="label label-lg font-weight-bold ' + status[index]["class"] + ' label-inline">' + status[index].title + '</span>';
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
    $('#kt_datatable_search_status').on('change', function () {
      datatable.search($(this).val().toLowerCase(), 'Status');
    });
    $('#kt_datatable_search_type').on('change', function () {
      datatable.search($(this).val().toLowerCase(), 'Type');
    }); //$('#kt_datatable_search_status, #kt_datatable_search_type').selectpicker();
  };

  return {
    // public functions
    init: function init() {
      _demo();
    }
  };
}();

jQuery(document).ready(function () {
  KTAppsEducationSchoolTeacher.init();
});

/***/ }),

/***/ 33:
/*!*******************************************************************************!*\
  !*** multi ./resources/metronic/js/pages/custom/education/school/teachers.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Applications/MAMP/htdocs/spreadci4/public/admin/themes/metronic/resources/metronic/js/pages/custom/education/school/teachers.js */"./resources/metronic/js/pages/custom/education/school/teachers.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL21ldHJvbmljL2pzL3BhZ2VzL2N1c3RvbS9lZHVjYXRpb24vc2Nob29sL3RlYWNoZXJzLmpzIl0sIm5hbWVzIjpbIktUQXBwc0VkdWNhdGlvblNjaG9vbFRlYWNoZXIiLCJfZGVtbyIsImRhdGF0YWJsZSIsIiQiLCJLVERhdGF0YWJsZSIsImRhdGEiLCJ0eXBlIiwic291cmNlIiwicmVhZCIsInVybCIsIkhPU1RfVVJMIiwicGFnZVNpemUiLCJzZXJ2ZXJQYWdpbmciLCJzZXJ2ZXJGaWx0ZXJpbmciLCJzZXJ2ZXJTb3J0aW5nIiwibGF5b3V0Iiwic2Nyb2xsIiwiZm9vdGVyIiwic29ydGFibGUiLCJwYWdpbmF0aW9uIiwiY29sdW1ucyIsImZpZWxkIiwidGl0bGUiLCJ3aWR0aCIsInRlbXBsYXRlIiwibnVtYmVyIiwiS1RVdGlsIiwiZ2V0UmFuZG9tSW50IiwiaW1nIiwib3V0cHV0IiwiZ2VucmVJbmRleCIsImdlbnJlIiwiQ29tcGFueUFnZW50Iiwicm93IiwiQ29tcGFueU5hbWUiLCJmb3JtYXQiLCJTaGlwRGF0ZSIsImF1dG9IaWRlIiwiaW5kZXgiLCJzdGF0dXMiLCJvdmVyZmxvdyIsIm9uIiwic2VhcmNoIiwidmFsIiwidG9Mb3dlckNhc2UiLCJpbml0IiwialF1ZXJ5IiwiZG9jdW1lbnQiLCJyZWFkeSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztR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dXN0b20vZWR1Y2F0aW9uL3NjaG9vbC90ZWFjaGVycy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMzMpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbi8vIENsYXNzIGRlZmluaXRpb25cclxuXHJcbnZhciBLVEFwcHNFZHVjYXRpb25TY2hvb2xUZWFjaGVyID0gZnVuY3Rpb24oKSB7XHJcblx0Ly8gUHJpdmF0ZSBmdW5jdGlvbnNcclxuXHJcblx0Ly8gYmFzaWMgZGVtb1xyXG5cdHZhciBfZGVtbyA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0dmFyIGRhdGF0YWJsZSA9ICQoJyNrdF9kYXRhdGFibGUnKS5LVERhdGF0YWJsZSh7XHJcblx0XHRcdC8vIGRhdGFzb3VyY2UgZGVmaW5pdGlvblxyXG5cdFx0XHRkYXRhOiB7XHJcblx0XHRcdFx0dHlwZTogJ3JlbW90ZScsXHJcblx0XHRcdFx0c291cmNlOiB7XHJcblx0XHRcdFx0XHRyZWFkOiB7XHJcblx0XHRcdFx0XHRcdHVybDogSE9TVF9VUkwgKyAnL2FwaS9kYXRhdGFibGVzL2RlbW9zL2RlZmF1bHQucGhwJyxcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRwYWdlU2l6ZTogMTAsIC8vIGRpc3BsYXkgMjAgcmVjb3JkcyBwZXIgcGFnZVxyXG5cdFx0XHRcdHNlcnZlclBhZ2luZzogdHJ1ZSxcclxuXHRcdFx0XHRzZXJ2ZXJGaWx0ZXJpbmc6IHRydWUsXHJcblx0XHRcdFx0c2VydmVyU29ydGluZzogdHJ1ZSxcclxuXHRcdFx0fSxcclxuXHJcblx0XHRcdC8vIGxheW91dCBkZWZpbml0aW9uXHJcblx0XHRcdGxheW91dDoge1xyXG5cdFx0XHRcdHNjcm9sbDogZmFsc2UsIC8vIGVuYWJsZS9kaXNhYmxlIGRhdGF0YWJsZSBzY3JvbGwgYm90aCBob3Jpem9udGFsIGFuZCB2ZXJ0aWNhbCB3aGVuIG5lZWRlZC5cclxuXHRcdFx0XHRmb290ZXI6IGZhbHNlLCAvLyBkaXNwbGF5L2hpZGUgZm9vdGVyXHJcblx0XHRcdH0sXHJcblxyXG5cdFx0XHQvLyBjb2x1bW4gc29ydGluZ1xyXG5cdFx0XHRzb3J0YWJsZTogdHJ1ZSxcclxuXHJcblx0XHRcdC8vIGVuYWJsZSBwYWdpbmF0aW9uXHJcblx0XHRcdHBhZ2luYXRpb246IHRydWUsXHJcblxyXG5cdFx0XHQvLyBjb2x1bW5zIGRlZmluaXRpb25cclxuXHRcdFx0Y29sdW1uczogW1xyXG5cdFx0XHRcdCB7XHJcblx0XHRcdFx0XHRmaWVsZDogJ0NvbXBhbnlOYW1lJyxcclxuXHRcdFx0XHRcdHRpdGxlOiAnVGVhY2hlcicsXHJcblx0XHRcdFx0XHR3aWR0aDogMjUwLFxyXG5cdFx0XHRcdFx0dGVtcGxhdGU6IGZ1bmN0aW9uKGRhdGEpIHtcclxuXHRcdFx0XHRcdFx0dmFyIG51bWJlciA9IEtUVXRpbC5nZXRSYW5kb21JbnQoMSwgMjApO1xyXG5cdFx0XHRcdFx0XHR2YXIgaW1nID0gJzMwMF8nICsgbnVtYmVyICsgJy5qcGcnO1xyXG5cdFx0XHRcdFx0XHR2YXIgb3V0cHV0ID0gJyc7XHJcblxyXG5cdFx0XHRcdFx0XHR2YXIgZ2VucmVJbmRleCA9IEtUVXRpbC5nZXRSYW5kb21JbnQoMSwgNSk7XHJcblxyXG5cdFx0XHRcdFx0XHR2YXIgZ2VucmUgPSB7XHJcblx0XHRcdFx0XHRcdFx0MTogeyd0aXRsZSc6ICdNYXRoZW1hdGljcywgQkEnfSxcclxuXHRcdFx0XHRcdFx0XHQyOiB7J3RpdGxlJzogJ0dlb2dyYXBoeSwgQlNjJ30sXHJcblx0XHRcdFx0XHRcdFx0Mzogeyd0aXRsZSc6ICdIaXN0b3J5LCBQaEQnfSxcclxuXHRcdFx0XHRcdFx0XHQ0OiB7J3RpdGxlJzogJ1BoeXNpY3MsIE1TJ30sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA1OiB7J3RpdGxlJzogJ2FzdHJvbm9teSwgTUEnfSxcclxuXHRcdFx0XHRcdFx0fTtcclxuXHJcblx0XHRcdFx0XHRcdG91dHB1dCA9ICc8ZGl2IGNsYXNzPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxcXHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cInN5bWJvbCBzeW1ib2wtNDAgc3ltYm9sLXNtIGZsZXgtc2hyaW5rLTBcIj5cXFxyXG5cdFx0XHRcdFx0XHRcdFx0PGltZyBjbGFzcz1cIlwiIHNyYz1cImFzc2V0cy9tZWRpYS91c2Vycy8nICsgaW1nICsgJ1wiIGFsdD1cInBob3RvXCI+XFxcclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cXFxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJtbC00XCI+XFxcclxuXHRcdFx0XHRcdFx0XHRcdDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJ0ZXh0LWRhcmstNzUgdGV4dC1ob3Zlci1wcmltYXJ5IGZvbnQtd2VpZ2h0LWJvbGRlciBmb250LXNpemUtbGcgbWItMFwiPicgKyBkYXRhLkNvbXBhbnlBZ2VudCArICc8L2E+XFxcclxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJ0ZXh0LW11dGVkIGZvbnQtd2VpZ2h0LWJvbGRcIj4nICsgZ2VucmVbZ2VucmVJbmRleF0udGl0bGUgKyAnPC9kaXY+XFxcclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cXFxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj4nO1xyXG5cclxuXHRcdFx0XHRcdFx0cmV0dXJuIG91dHB1dDtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9LCB7XHJcblx0XHRcdFx0XHRmaWVsZDogJ0NvbXBhbnlBZ2VudCcsXHJcblx0XHRcdFx0XHR0aXRsZTogJ0RlcGFydG1lbnQnLFxyXG5cdFx0XHRcdFx0dGVtcGxhdGU6IGZ1bmN0aW9uKHJvdykge1xyXG5cdFx0XHRcdFx0XHR2YXIgb3V0cHV0ID0gJyc7XHJcblxyXG5cdFx0XHRcdFx0XHRvdXRwdXQgKz0gJzxhIGhyZWY9XCIjXCIgY2xhc3M9XCJ0ZXh0LWRhcmstNTAgdGV4dC1ob3Zlci1wcmltYXJ5IGZvbnQtd2VpZ2h0LWJvbGRcIj4nICsgcm93LkNvbXBhbnlOYW1lICsgJzwvYT4nO1xyXG5cclxuXHRcdFx0XHRcdFx0cmV0dXJuIG91dHB1dDtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9LCB7XHJcblx0XHRcdFx0XHRmaWVsZDogJ0pvaW5lZERhdGUnLFxyXG5cdFx0XHRcdFx0dGl0bGU6ICdKb2luZWQnLFxyXG5cdFx0XHRcdFx0dHlwZTogJ2RhdGUnLFxyXG5cdFx0XHRcdFx0d2lkdGg6IDEwMCxcclxuXHRcdFx0XHRcdGZvcm1hdDogJ01NL0REL1lZWVknLFxyXG5cdFx0XHRcdFx0dGVtcGxhdGU6IGZ1bmN0aW9uKHJvdykge1xyXG5cdFx0XHRcdFx0XHR2YXIgb3V0cHV0ID0gJyc7XHJcblxyXG5cdFx0XHRcdFx0XHRvdXRwdXQgKz0gJzxkaXYgY2xhc3M9XCJmb250LXdlaWdodC1ib2xkZXIgdGV4dC1wcmltYXJ5IG1iLTBcIj4nICsgcm93LlNoaXBEYXRlICsgJzwvZGl2Pic7XHJcblxyXG5cdFx0XHRcdFx0XHRyZXR1cm4gb3V0cHV0O1xyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHR9LCB7XHJcblx0XHRcdFx0XHRmaWVsZDogJ1N0YXR1cycsXHJcblx0XHRcdFx0XHR0aXRsZTogJ1N0YXR1cycsXHJcblx0XHRcdFx0XHRhdXRvSGlkZTogZmFsc2UsXHJcblx0XHRcdFx0XHR3aWR0aDogMTAwLFxyXG5cdFx0XHRcdFx0Ly8gY2FsbGJhY2sgZnVuY3Rpb24gc3VwcG9ydCBmb3IgY29sdW1uIHJlbmRlcmluZ1xyXG5cdFx0XHRcdFx0dGVtcGxhdGU6IGZ1bmN0aW9uKHJvdykge1xyXG5cdFx0XHRcdFx0XHR2YXIgaW5kZXggPSBLVFV0aWwuZ2V0UmFuZG9tSW50KDEsIDMpO1xyXG5cclxuXHRcdFx0XHRcdFx0dmFyIHN0YXR1cyA9IHtcclxuXHRcdFx0XHRcdFx0XHQxOiB7J3RpdGxlJzogJ05ldycsICdjbGFzcyc6ICcgbGFiZWwtbGlnaHQtcHJpbWFyeSd9LFxyXG5cdFx0XHRcdFx0XHRcdDI6IHsndGl0bGUnOiAnQWN0aXZlJywgJ2NsYXNzJzogJyBsYWJlbC1saWdodC1kYW5nZXInfSxcclxuXHRcdFx0XHRcdFx0XHQzOiB7J3RpdGxlJzogJ0luLWFjdGl2ZScsICdjbGFzcyc6ICcgbGFiZWwtbGlnaHQtaW5mbyd9LFxyXG5cdFx0XHRcdFx0XHR9O1xyXG5cclxuXHRcdFx0XHRcdFx0cmV0dXJuICc8c3BhbiBjbGFzcz1cImxhYmVsIGxhYmVsLWxnIGZvbnQtd2VpZ2h0LWJvbGQgJyArIHN0YXR1c1tpbmRleF0uY2xhc3MgKyAnIGxhYmVsLWlubGluZVwiPicgKyBzdGF0dXNbaW5kZXhdLnRpdGxlICsgJzwvc3Bhbj4nO1xyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHR9LCB7XHJcblx0XHRcdFx0XHRmaWVsZDogJ0FjdGlvbnMnLFxyXG5cdFx0XHRcdFx0dGl0bGU6ICdBY3Rpb25zJyxcclxuXHRcdFx0XHRcdHNvcnRhYmxlOiBmYWxzZSxcclxuXHRcdFx0XHRcdHdpZHRoOiAxMzAsXHJcblx0XHRcdFx0XHRvdmVyZmxvdzogJ3Zpc2libGUnLFxyXG5cdFx0XHRcdFx0YXV0b0hpZGU6IGZhbHNlLFxyXG5cdFx0XHRcdFx0dGVtcGxhdGU6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gJ1xcXHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRyb3Bkb3duIGRyb3Bkb3duLWlubGluZVwiPlxcXHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJqYXZhc2NyaXB0OjtcIiBjbGFzcz1cImJ0biBidG4tc20gYnRuLWRlZmF1bHQgYnRuLXRleHQtcHJpbWFyeSBidG4taG92ZXItcHJpbWFyeSBidG4taWNvbiBtci0yXCIgZGF0YS10b2dnbGU9XCJkcm9wZG93blwiPlxcXHJcblx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzPVwic3ZnLWljb24gc3ZnLWljb24tbWRcIj5cXFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHhtbG5zOnhsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiIHdpZHRoPVwiMjRweFwiIGhlaWdodD1cIjI0cHhcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgdmVyc2lvbj1cIjEuMVwiIGNsYXNzPVwic3ZnLWljb25cIj5cXFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGcgc3Ryb2tlPVwibm9uZVwiIHN0cm9rZS13aWR0aD1cIjFcIiBmaWxsPVwibm9uZVwiIGZpbGwtcnVsZT1cImV2ZW5vZGRcIj5cXFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8cmVjdCB4PVwiMFwiIHk9XCIwXCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIvPlxcXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxwYXRoIGQ9XCJNNywzIEwxNywzIEMxOS4yMDkxMzksMyAyMSw0Ljc5MDg2MSAyMSw3IEMyMSw5LjIwOTEzOSAxOS4yMDkxMzksMTEgMTcsMTEgTDcsMTEgQzQuNzkwODYxLDExIDMsOS4yMDkxMzkgMyw3IEMzLDQuNzkwODYxIDQuNzkwODYxLDMgNywzIFogTTcsOSBDOC4xMDQ1Njk1LDkgOSw4LjEwNDU2OTUgOSw3IEM5LDUuODk1NDMwNSA4LjEwNDU2OTUsNSA3LDUgQzUuODk1NDMwNSw1IDUsNS44OTU0MzA1IDUsNyBDNSw4LjEwNDU2OTUgNS44OTU0MzA1LDkgNyw5IFpcIiBmaWxsPVwiIzAwMDAwMFwiLz5cXFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8cGF0aCBkPVwiTTcsMTMgTDE3LDEzIEMxOS4yMDkxMzksMTMgMjEsMTQuNzkwODYxIDIxLDE3IEMyMSwxOS4yMDkxMzkgMTkuMjA5MTM5LDIxIDE3LDIxIEw3LDIxIEM0Ljc5MDg2MSwyMSAzLDE5LjIwOTEzOSAzLDE3IEMzLDE0Ljc5MDg2MSA0Ljc5MDg2MSwxMyA3LDEzIFogTTE3LDE5IEMxOC4xMDQ1Njk1LDE5IDE5LDE4LjEwNDU2OTUgMTksMTcgQzE5LDE1Ljg5NTQzMDUgMTguMTA0NTY5NSwxNSAxNywxNSBDMTUuODk1NDMwNSwxNSAxNSwxNS44OTU0MzA1IDE1LDE3IEMxNSwxOC4xMDQ1Njk1IDE1Ljg5NTQzMDUsMTkgMTcsMTkgWlwiIGZpbGw9XCIjMDAwMDAwXCIgb3BhY2l0eT1cIjAuM1wiLz5cXFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9nPlxcXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9zdmc+XFxcclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9zcGFuPlxcXHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cXFxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZHJvcGRvd24tbWVudSBkcm9wZG93bi1tZW51LXNtIGRyb3Bkb3duLW1lbnUtcmlnaHRcIj5cXFxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwibmF2aSBmbGV4LWNvbHVtbiBuYXZpLWhvdmVyIHB5LTJcIj5cXFxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cIm5hdmktaGVhZGVyIGZvbnQtd2VpZ2h0LWJvbGRlciB0ZXh0LXVwcGVyY2FzZSBmb250LXNpemUteHMgdGV4dC1wcmltYXJ5IHBiLTJcIj5cXFxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDaG9vc2UgYW4gYWN0aW9uOlxcXHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cXFxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cIm5hdmktaXRlbVwiPlxcXHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJuYXZpLWxpbmtcIj5cXFxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJuYXZpLWljb25cIj48aSBjbGFzcz1cImxhIGxhLXByaW50XCI+PC9pPjwvc3Bhbj5cXFxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJuYXZpLXRleHRcIj5QcmludDwvc3Bhbj5cXFxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XFxcclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxcXHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwibmF2aS1pdGVtXCI+XFxcclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cIm5hdmktbGlua1wiPlxcXHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm5hdmktaWNvblwiPjxpIGNsYXNzPVwibGEgbGEtY29weVwiPjwvaT48L3NwYW4+XFxcclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibmF2aS10ZXh0XCI+Q29weTwvc3Bhbj5cXFxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XFxcclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxcXHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwibmF2aS1pdGVtXCI+XFxcclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cIm5hdmktbGlua1wiPlxcXHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm5hdmktaWNvblwiPjxpIGNsYXNzPVwibGEgbGEtZmlsZS1leGNlbC1vXCI+PC9pPjwvc3Bhbj5cXFxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJuYXZpLXRleHRcIj5FeGNlbDwvc3Bhbj5cXFxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XFxcclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxcXHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwibmF2aS1pdGVtXCI+XFxcclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cIm5hdmktbGlua1wiPlxcXHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm5hdmktaWNvblwiPjxpIGNsYXNzPVwibGEgbGEtZmlsZS10ZXh0LW9cIj48L2k+PC9zcGFuPlxcXHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm5hdmktdGV4dFwiPkNTVjwvc3Bhbj5cXFxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XFxcclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxcXHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwibmF2aS1pdGVtXCI+XFxcclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cIm5hdmktbGlua1wiPlxcXHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm5hdmktaWNvblwiPjxpIGNsYXNzPVwibGEgbGEtZmlsZS1wZGYtb1wiPjwvaT48L3NwYW4+XFxcclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibmF2aS10ZXh0XCI+UERGPC9zcGFuPlxcXHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cXFxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XFxcclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XFxcclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxcclxuXHQgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXFxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJqYXZhc2NyaXB0OjtcIiBjbGFzcz1cImJ0biBidG4tc20gYnRuLWRlZmF1bHQgYnRuLXRleHQtcHJpbWFyeSBidG4taG92ZXItcHJpbWFyeSBidG4taWNvbiBtci0yXCIgdGl0bGU9XCJFZGl0IGRldGFpbHNcIj5cXFxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInN2Zy1pY29uIHN2Zy1pY29uLW1kXCI+XFxcclxuXHRcdFx0XHRcdFx0XHRcdFx0PHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgeG1sbnM6eGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIgd2lkdGg9XCIyNHB4XCIgaGVpZ2h0PVwiMjRweFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiB2ZXJzaW9uPVwiMS4xXCI+XFxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZyBzdHJva2U9XCJub25lXCIgc3Ryb2tlLXdpZHRoPVwiMVwiIGZpbGw9XCJub25lXCIgZmlsbC1ydWxlPVwiZXZlbm9kZFwiPlxcXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8cmVjdCB4PVwiMFwiIHk9XCIwXCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIvPlxcXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8cGF0aCBkPVwiTTEyLjI2NzQ3OTksMTguMjMyMzU5NyBMMTIuMDA4NDg3Miw1LjQ1ODUyNDUxIEMxMi4wMDA0MzAzLDUuMDYxMTQ3OTIgMTIuMTUwNDE1NCw0LjY3NjgxODMgMTIuNDI1NTAzNyw0LjM4OTkzOTQ5IEwxNS4wMDMwMTY3LDEuNzAxOTUzMDQgTDE3LjU5MTA3NTIsNC40MDA5MzY5NSBDMTcuODU5OTA3MSw0LjY4MTI5MTEgMTguMDA5NTA2Nyw1LjA1NDk5NjAzIDE4LjAwODM5MzgsNS40NDM0MTMwNyBMMTcuOTcxODI2MiwxOC4yMDYyNTA4IEMxNy45Njk0NTc1LDE5LjAzMjk5NjYgMTcuMjk4NTgxNiwxOS43MDE5NTMgMTYuNDcxODMyNCwxOS43MDE5NTMgTDEzLjc2NzE3MTcsMTkuNzAxOTUzIEMxMi45NTA1OTUyLDE5LjcwMTk1MyAxMi4yODQwMzI4LDE5LjA0ODc2ODQgMTIuMjY3NDc5OSwxOC4yMzIzNTk3IFpcIiBmaWxsPVwiIzAwMDAwMFwiIGZpbGwtcnVsZT1cIm5vbnplcm9cIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMTQuNzAxOTUzLCAxMC43MDE5NTMpIHJvdGF0ZSgtMTM1LjAwMDAwMCkgdHJhbnNsYXRlKC0xNC43MDE5NTMsIC0xMC43MDE5NTMpIFwiLz5cXFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHBhdGggZD1cIk0xMi45LDIgQzEzLjQ1MjI4NDcsMiAxMy45LDIuNDQ3NzE1MjUgMTMuOSwzIEMxMy45LDMuNTUyMjg0NzUgMTMuNDUyMjg0Nyw0IDEyLjksNCBMNiw0IEM0Ljg5NTQzMDUsNCA0LDQuODk1NDMwNSA0LDYgTDQsMTggQzQsMTkuMTA0NTY5NSA0Ljg5NTQzMDUsMjAgNiwyMCBMMTgsMjAgQzE5LjEwNDU2OTUsMjAgMjAsMTkuMTA0NTY5NSAyMCwxOCBMMjAsMTMgQzIwLDEyLjQ0NzcxNTMgMjAuNDQ3NzE1MywxMiAyMSwxMiBDMjEuNTUyMjg0NywxMiAyMiwxMi40NDc3MTUzIDIyLDEzIEwyMiwxOCBDMjIsMjAuMjA5MTM5IDIwLjIwOTEzOSwyMiAxOCwyMiBMNiwyMiBDMy43OTA4NjEsMjIgMiwyMC4yMDkxMzkgMiwxOCBMMiw2IEMyLDMuNzkwODYxIDMuNzkwODYxLDIgNiwyIEwxMi45LDIgWlwiIGZpbGw9XCIjMDAwMDAwXCIgZmlsbC1ydWxlPVwibm9uemVyb1wiIG9wYWNpdHk9XCIwLjNcIi8+XFxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2c+XFxcclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9zdmc+XFxcclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxcXHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxcXHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImphdmFzY3JpcHQ6O1wiIGNsYXNzPVwiYnRuIGJ0bi1zbSBidG4tZGVmYXVsdCBidG4tdGV4dC1wcmltYXJ5IGJ0bi1ob3Zlci1wcmltYXJ5IGJ0bi1pY29uXCIgdGl0bGU9XCJEZWxldGVcIj5cXFxyXG5cdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3M9XCJzdmctaWNvbiBzdmctaWNvbi1tZFwiPlxcXHJcblx0XHRcdFx0XHRcdFx0XHRcdDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHhtbG5zOnhsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiIHdpZHRoPVwiMjRweFwiIGhlaWdodD1cIjI0cHhcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgdmVyc2lvbj1cIjEuMVwiPlxcXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGcgc3Ryb2tlPVwibm9uZVwiIHN0cm9rZS13aWR0aD1cIjFcIiBmaWxsPVwibm9uZVwiIGZpbGwtcnVsZT1cImV2ZW5vZGRcIj5cXFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHJlY3QgeD1cIjBcIiB5PVwiMFwiIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiLz5cXFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHBhdGggZD1cIk02LDggTDYsMjAuNSBDNiwyMS4zMjg0MjcxIDYuNjcxNTcyODgsMjIgNy41LDIyIEwxNi41LDIyIEMxNy4zMjg0MjcxLDIyIDE4LDIxLjMyODQyNzEgMTgsMjAuNSBMMTgsOCBMNiw4IFpcIiBmaWxsPVwiIzAwMDAwMFwiIGZpbGwtcnVsZT1cIm5vbnplcm9cIi8+XFxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxwYXRoIGQ9XCJNMTQsNC41IEwxNCw0IEMxNCwzLjQ0NzcxNTI1IDEzLjU1MjI4NDcsMyAxMywzIEwxMSwzIEMxMC40NDc3MTUzLDMgMTAsMy40NDc3MTUyNSAxMCw0IEwxMCw0LjUgTDUuNSw0LjUgQzUuMjIzODU3NjMsNC41IDUsNC43MjM4NTc2MyA1LDUgTDUsNS41IEM1LDUuNzc2MTQyMzcgNS4yMjM4NTc2Myw2IDUuNSw2IEwxOC41LDYgQzE4Ljc3NjE0MjQsNiAxOSw1Ljc3NjE0MjM3IDE5LDUuNSBMMTksNSBDMTksNC43MjM4NTc2MyAxOC43NzYxNDI0LDQuNSAxOC41LDQuNSBMMTQsNC41IFpcIiBmaWxsPVwiIzAwMDAwMFwiIG9wYWNpdHk9XCIwLjNcIi8+XFxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2c+XFxcclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9zdmc+XFxcclxuXHRcdFx0XHRcdFx0XHRcdDwvc3Bhbj5cXFxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cXFxyXG5cdCAgICAgICAgICAgICAgICAgICAgJztcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0fV0sXHJcblx0XHR9KTtcclxuXHJcblx0XHQkKCcja3RfZGF0YXRhYmxlX3NlYXJjaF9zdGF0dXMnKS5vbignY2hhbmdlJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdGRhdGF0YWJsZS5zZWFyY2goJCh0aGlzKS52YWwoKS50b0xvd2VyQ2FzZSgpLCAnU3RhdHVzJyk7XHJcblx0XHR9KTtcclxuXHJcblx0XHQkKCcja3RfZGF0YXRhYmxlX3NlYXJjaF90eXBlJykub24oJ2NoYW5nZScsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRkYXRhdGFibGUuc2VhcmNoKCQodGhpcykudmFsKCkudG9Mb3dlckNhc2UoKSwgJ1R5cGUnKTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdC8vJCgnI2t0X2RhdGF0YWJsZV9zZWFyY2hfc3RhdHVzLCAja3RfZGF0YXRhYmxlX3NlYXJjaF90eXBlJykuc2VsZWN0cGlja2VyKCk7XHJcblx0fTtcclxuXHJcblx0cmV0dXJuIHtcclxuXHRcdC8vIHB1YmxpYyBmdW5jdGlvbnNcclxuXHRcdGluaXQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRfZGVtbygpO1xyXG5cdFx0fSxcclxuXHR9O1xyXG59KCk7XHJcblxyXG5qUXVlcnkoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG5cdEtUQXBwc0VkdWNhdGlvblNjaG9vbFRlYWNoZXIuaW5pdCgpO1xyXG59KTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==