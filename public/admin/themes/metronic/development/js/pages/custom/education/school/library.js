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
/******/ 	return __webpack_require__(__webpack_require__.s = 31);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/metronic/js/pages/custom/education/school/library.js":
/*!************************************************************************!*\
  !*** ./resources/metronic/js/pages/custom/education/school/library.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // Class definition

var KTAppsEducationSchoolLibrary = function () {
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
        title: 'Book',
        width: 250,
        template: function template(data) {
          var number = KTUtil.getRandomInt(1, 13);
          var img = number + '.png';
          var output = '';
          var genreIndex = KTUtil.getRandomInt(1, 4);
          var genre = {
            1: {
              'title': 'Fiction'
            },
            2: {
              'title': 'Drama'
            },
            3: {
              'title': 'Classic'
            },
            4: {
              'title': 'Thriller'
            }
          };
          output = '<div class="d-flex align-items-center">\
							<div class="symbol symbol-40 symbol-sm flex-shrink-0">\
								<img class="" src="assets/media/books/' + img + '" alt="photo">\
							</div>\
							<div class="ml-4">\
								<a href="#" class="text-dark-75 text-hover-primary font-weight-bolder font-size-lg mb-0">' + data.CompanyName + '</a>\
								<div class="text-muted font-weight-bold">' + genre[genreIndex].title + '</div>\
							</div>\
						</div>';
          return output;
        }
      }, {
        field: 'CompanyAgent',
        title: 'Author',
        template: function template(row) {
          var output = '';
          output += '<a href="#" class="text-dark-50 text-hover-primary font-weight-bold">' + row.CompanyAgent + '</a>';
          return output;
        }
      }, {
        field: 'IssueDate',
        title: 'Issued',
        type: 'date',
        width: 100,
        format: 'MM/DD/YYYY',
        template: function template(row) {
          var output = '';
          var status = {
            1: {
              'title': 'New',
              'class': ' label-light-primary'
            },
            2: {
              'title': 'Good',
              'class': ' label-light-danger'
            },
            3: {
              'title': 'Demaged',
              'class': ' label-light-primary'
            }
          };
          var index = KTUtil.getRandomInt(1, 3);
          output += '<div class="font-weight-bolder text-primary mb-0">' + row.ShipDate + '</div>';
          output += '<div class="text-muted">' + status[index].title + '</div>';
          return output;
        }
      }, {
        field: 'Status',
        title: 'Status',
        autoHide: false,
        width: 100,
        // callback function support for column rendering
        template: function template(row) {
          var index = KTUtil.getRandomInt(1, 4);
          var status = {
            1: {
              'title': 'Available',
              'class': ' label-light-primary'
            },
            2: {
              'title': 'In Use',
              'class': ' label-light-danger'
            },
            3: {
              'title': 'No Stock',
              'class': ' label-light-info'
            },
            4: {
              'title': 'Arriving',
              'class': ' label-light-success'
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
  KTAppsEducationSchoolLibrary.init();
});

/***/ }),

/***/ 31:
/*!******************************************************************************!*\
  !*** multi ./resources/metronic/js/pages/custom/education/school/library.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Applications/MAMP/htdocs/spreadci4/public/admin/themes/metronic/resources/metronic/js/pages/custom/education/school/library.js */"./resources/metronic/js/pages/custom/education/school/library.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL21ldHJvbmljL2pzL3BhZ2VzL2N1c3RvbS9lZHVjYXRpb24vc2Nob29sL2xpYnJhcnkuanMiXSwibmFtZXMiOlsiS1RBcHBzRWR1Y2F0aW9uU2Nob29sTGlicmFyeSIsIl9kZW1vIiwiZGF0YXRhYmxlIiwiJCIsIktURGF0YXRhYmxlIiwiZGF0YSIsInR5cGUiLCJzb3VyY2UiLCJyZWFkIiwidXJsIiwiSE9TVF9VUkwiLCJwYWdlU2l6ZSIsInNlcnZlclBhZ2luZyIsInNlcnZlckZpbHRlcmluZyIsInNlcnZlclNvcnRpbmciLCJsYXlvdXQiLCJzY3JvbGwiLCJmb290ZXIiLCJzb3J0YWJsZSIsInBhZ2luYXRpb24iLCJjb2x1bW5zIiwiZmllbGQiLCJ0aXRsZSIsIndpZHRoIiwidGVtcGxhdGUiLCJudW1iZXIiLCJLVFV0aWwiLCJnZXRSYW5kb21JbnQiLCJpbWciLCJvdXRwdXQiLCJnZW5yZUluZGV4IiwiZ2VucmUiLCJDb21wYW55TmFtZSIsInJvdyIsIkNvbXBhbnlBZ2VudCIsImZvcm1hdCIsInN0YXR1cyIsImluZGV4IiwiU2hpcERhdGUiLCJhdXRvSGlkZSIsIm92ZXJmbG93Iiwib24iLCJzZWFyY2giLCJ2YWwiLCJ0b0xvd2VyQ2FzZSIsImluaXQiLCJqUXVlcnkiLCJkb2N1bWVudCIsInJlYWR5Il0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FB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d0MsTUFBVixDQUFpQnZDLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUXdDLEdBQVIsR0FBY0MsV0FBZCxFQUFqQixFQUE4QyxNQUE5QztBQUNBLEtBRkQsRUF4TXNCLENBNE10QjtBQUNBLEdBN01EOztBQStNQSxTQUFPO0FBQ047QUFDQUMsUUFBSSxFQUFFLGdCQUFXO0FBQ2hCNUMsV0FBSztBQUNMO0FBSkssR0FBUDtBQU1BLENBek5rQyxFQUFuQzs7QUEyTkE2QyxNQUFNLENBQUNDLFFBQUQsQ0FBTixDQUFpQkMsS0FBakIsQ0FBdUIsWUFBVztBQUNqQ2hELDhCQUE0QixDQUFDNkMsSUFBN0I7QUFDQSxDQUZELEUiLCJmaWxlIjoiL2RldmVsb3BtZW50L2pzL3BhZ2VzL2N1c3RvbS9lZHVjYXRpb24vc2Nob29sL2xpYnJhcnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDMxKTtcbiIsIlwidXNlIHN0cmljdFwiO1xyXG4vLyBDbGFzcyBkZWZpbml0aW9uXHJcblxyXG52YXIgS1RBcHBzRWR1Y2F0aW9uU2Nob29sTGlicmFyeSA9IGZ1bmN0aW9uKCkge1xyXG5cdC8vIFByaXZhdGUgZnVuY3Rpb25zXHJcblxyXG5cdC8vIGJhc2ljIGRlbW9cclxuXHR2YXIgX2RlbW8gPSBmdW5jdGlvbigpIHtcclxuXHRcdHZhciBkYXRhdGFibGUgPSAkKCcja3RfZGF0YXRhYmxlJykuS1REYXRhdGFibGUoe1xyXG5cdFx0XHQvLyBkYXRhc291cmNlIGRlZmluaXRpb25cclxuXHRcdFx0ZGF0YToge1xyXG5cdFx0XHRcdHR5cGU6ICdyZW1vdGUnLFxyXG5cdFx0XHRcdHNvdXJjZToge1xyXG5cdFx0XHRcdFx0cmVhZDoge1xyXG5cdFx0XHRcdFx0XHR1cmw6IEhPU1RfVVJMICsgJy9hcGkvZGF0YXRhYmxlcy9kZW1vcy9kZWZhdWx0LnBocCcsXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0cGFnZVNpemU6IDEwLCAvLyBkaXNwbGF5IDIwIHJlY29yZHMgcGVyIHBhZ2VcclxuXHRcdFx0XHRzZXJ2ZXJQYWdpbmc6IHRydWUsXHJcblx0XHRcdFx0c2VydmVyRmlsdGVyaW5nOiB0cnVlLFxyXG5cdFx0XHRcdHNlcnZlclNvcnRpbmc6IHRydWUsXHJcblx0XHRcdH0sXHJcblxyXG5cdFx0XHQvLyBsYXlvdXQgZGVmaW5pdGlvblxyXG5cdFx0XHRsYXlvdXQ6IHtcclxuXHRcdFx0XHRzY3JvbGw6IGZhbHNlLCAvLyBlbmFibGUvZGlzYWJsZSBkYXRhdGFibGUgc2Nyb2xsIGJvdGggaG9yaXpvbnRhbCBhbmQgdmVydGljYWwgd2hlbiBuZWVkZWQuXHJcblx0XHRcdFx0Zm9vdGVyOiBmYWxzZSwgLy8gZGlzcGxheS9oaWRlIGZvb3RlclxyXG5cdFx0XHR9LFxyXG5cclxuXHRcdFx0Ly8gY29sdW1uIHNvcnRpbmdcclxuXHRcdFx0c29ydGFibGU6IHRydWUsXHJcblxyXG5cdFx0XHQvLyBlbmFibGUgcGFnaW5hdGlvblxyXG5cdFx0XHRwYWdpbmF0aW9uOiB0cnVlLFxyXG5cclxuXHRcdFx0Ly8gY29sdW1ucyBkZWZpbml0aW9uXHJcblx0XHRcdGNvbHVtbnM6IFtcclxuXHRcdFx0XHQge1xyXG5cdFx0XHRcdFx0ZmllbGQ6ICdDb21wYW55TmFtZScsXHJcblx0XHRcdFx0XHR0aXRsZTogJ0Jvb2snLFxyXG5cdFx0XHRcdFx0d2lkdGg6IDI1MCxcclxuXHRcdFx0XHRcdHRlbXBsYXRlOiBmdW5jdGlvbihkYXRhKSB7XHJcblx0XHRcdFx0XHRcdHZhciBudW1iZXIgPSBLVFV0aWwuZ2V0UmFuZG9tSW50KDEsIDEzKTtcclxuXHRcdFx0XHRcdFx0dmFyIGltZyA9ICBudW1iZXIgKyAnLnBuZyc7XHJcblx0XHRcdFx0XHRcdHZhciBvdXRwdXQgPSAnJztcclxuXHJcblx0XHRcdFx0XHRcdHZhciBnZW5yZUluZGV4ID0gS1RVdGlsLmdldFJhbmRvbUludCgxLCA0KTtcclxuXHJcblx0XHRcdFx0XHRcdHZhciBnZW5yZSA9IHtcclxuXHRcdFx0XHRcdFx0XHQxOiB7J3RpdGxlJzogJ0ZpY3Rpb24nfSxcclxuXHRcdFx0XHRcdFx0XHQyOiB7J3RpdGxlJzogJ0RyYW1hJ30sXHJcblx0XHRcdFx0XHRcdFx0Mzogeyd0aXRsZSc6ICdDbGFzc2ljJ30sXHJcblx0XHRcdFx0XHRcdFx0NDogeyd0aXRsZSc6ICdUaHJpbGxlcid9XHJcblx0XHRcdFx0XHRcdH07XHJcblxyXG5cdFx0XHRcdFx0XHRvdXRwdXQgPSAnPGRpdiBjbGFzcz1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cXFxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJzeW1ib2wgc3ltYm9sLTQwIHN5bWJvbC1zbSBmbGV4LXNocmluay0wXCI+XFxcclxuXHRcdFx0XHRcdFx0XHRcdDxpbWcgY2xhc3M9XCJcIiBzcmM9XCJhc3NldHMvbWVkaWEvYm9va3MvJyArIGltZyArICdcIiBhbHQ9XCJwaG90b1wiPlxcXHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XFxcclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwibWwtNFwiPlxcXHJcblx0XHRcdFx0XHRcdFx0XHQ8YSBocmVmPVwiI1wiIGNsYXNzPVwidGV4dC1kYXJrLTc1IHRleHQtaG92ZXItcHJpbWFyeSBmb250LXdlaWdodC1ib2xkZXIgZm9udC1zaXplLWxnIG1iLTBcIj4nICsgZGF0YS5Db21wYW55TmFtZSArICc8L2E+XFxcclxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJ0ZXh0LW11dGVkIGZvbnQtd2VpZ2h0LWJvbGRcIj4nICsgZ2VucmVbZ2VucmVJbmRleF0udGl0bGUgKyAnPC9kaXY+XFxcclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cXFxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj4nO1xyXG5cclxuXHRcdFx0XHRcdFx0cmV0dXJuIG91dHB1dDtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9LCB7XHJcblx0XHRcdFx0XHRmaWVsZDogJ0NvbXBhbnlBZ2VudCcsXHJcblx0XHRcdFx0XHR0aXRsZTogJ0F1dGhvcicsXHJcblx0XHRcdFx0XHR0ZW1wbGF0ZTogZnVuY3Rpb24ocm93KSB7XHJcblx0XHRcdFx0XHRcdHZhciBvdXRwdXQgPSAnJztcclxuXHJcblx0XHRcdFx0XHRcdG91dHB1dCArPSAnPGEgaHJlZj1cIiNcIiBjbGFzcz1cInRleHQtZGFyay01MCB0ZXh0LWhvdmVyLXByaW1hcnkgZm9udC13ZWlnaHQtYm9sZFwiPicgKyByb3cuQ29tcGFueUFnZW50ICsgJzwvYT4nO1xyXG5cclxuXHRcdFx0XHRcdFx0cmV0dXJuIG91dHB1dDtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9LCB7XHJcblx0XHRcdFx0XHRmaWVsZDogJ0lzc3VlRGF0ZScsXHJcblx0XHRcdFx0XHR0aXRsZTogJ0lzc3VlZCcsXHJcblx0XHRcdFx0XHR0eXBlOiAnZGF0ZScsXHJcblx0XHRcdFx0XHR3aWR0aDogMTAwLFxyXG5cdFx0XHRcdFx0Zm9ybWF0OiAnTU0vREQvWVlZWScsXHJcblx0XHRcdFx0XHR0ZW1wbGF0ZTogZnVuY3Rpb24ocm93KSB7XHJcblx0XHRcdFx0XHRcdHZhciBvdXRwdXQgPSAnJztcclxuXHJcblx0XHRcdFx0XHRcdHZhciBzdGF0dXMgPSB7XHJcblx0XHRcdFx0XHRcdFx0MTogeyd0aXRsZSc6ICdOZXcnLCAnY2xhc3MnOiAnIGxhYmVsLWxpZ2h0LXByaW1hcnknfSxcclxuXHRcdFx0XHRcdFx0XHQyOiB7J3RpdGxlJzogJ0dvb2QnLCAnY2xhc3MnOiAnIGxhYmVsLWxpZ2h0LWRhbmdlcid9LFxyXG5cdFx0XHRcdFx0XHRcdDM6IHsndGl0bGUnOiAnRGVtYWdlZCcsICdjbGFzcyc6ICcgbGFiZWwtbGlnaHQtcHJpbWFyeSd9XHJcblx0XHRcdFx0XHRcdH07XHJcblxyXG5cdFx0XHRcdFx0XHR2YXIgaW5kZXggPSBLVFV0aWwuZ2V0UmFuZG9tSW50KDEsIDMpO1xyXG5cclxuXHRcdFx0XHRcdFx0b3V0cHV0ICs9ICc8ZGl2IGNsYXNzPVwiZm9udC13ZWlnaHQtYm9sZGVyIHRleHQtcHJpbWFyeSBtYi0wXCI+JyArIHJvdy5TaGlwRGF0ZSArICc8L2Rpdj4nO1xyXG5cdFx0XHRcdFx0XHRvdXRwdXQgKz0gJzxkaXYgY2xhc3M9XCJ0ZXh0LW11dGVkXCI+JyArIHN0YXR1c1tpbmRleF0udGl0bGUgKyAnPC9kaXY+JztcclxuXHJcblx0XHRcdFx0XHRcdHJldHVybiBvdXRwdXQ7XHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdH0sIHtcclxuXHRcdFx0XHRcdGZpZWxkOiAnU3RhdHVzJyxcclxuXHRcdFx0XHRcdHRpdGxlOiAnU3RhdHVzJyxcclxuXHRcdFx0XHRcdGF1dG9IaWRlOiBmYWxzZSxcclxuXHRcdFx0XHRcdHdpZHRoOiAxMDAsXHJcblx0XHRcdFx0XHQvLyBjYWxsYmFjayBmdW5jdGlvbiBzdXBwb3J0IGZvciBjb2x1bW4gcmVuZGVyaW5nXHJcblx0XHRcdFx0XHR0ZW1wbGF0ZTogZnVuY3Rpb24ocm93KSB7XHJcblx0XHRcdFx0XHRcdHZhciBpbmRleCA9IEtUVXRpbC5nZXRSYW5kb21JbnQoMSwgNCk7XHJcblxyXG5cdFx0XHRcdFx0XHR2YXIgc3RhdHVzID0ge1xyXG5cdFx0XHRcdFx0XHRcdDE6IHsndGl0bGUnOiAnQXZhaWxhYmxlJywgJ2NsYXNzJzogJyBsYWJlbC1saWdodC1wcmltYXJ5J30sXHJcblx0XHRcdFx0XHRcdFx0Mjogeyd0aXRsZSc6ICdJbiBVc2UnLCAnY2xhc3MnOiAnIGxhYmVsLWxpZ2h0LWRhbmdlcid9LFxyXG5cdFx0XHRcdFx0XHRcdDM6IHsndGl0bGUnOiAnTm8gU3RvY2snLCAnY2xhc3MnOiAnIGxhYmVsLWxpZ2h0LWluZm8nfSxcclxuXHRcdFx0XHRcdFx0XHQ0OiB7J3RpdGxlJzogJ0Fycml2aW5nJywgJ2NsYXNzJzogJyBsYWJlbC1saWdodC1zdWNjZXNzJ31cclxuXHRcdFx0XHRcdFx0fTtcclxuXHJcblx0XHRcdFx0XHRcdHJldHVybiAnPHNwYW4gY2xhc3M9XCJsYWJlbCBsYWJlbC1sZyBmb250LXdlaWdodC1ib2xkICcgKyBzdGF0dXNbaW5kZXhdLmNsYXNzICsgJyBsYWJlbC1pbmxpbmVcIj4nICsgc3RhdHVzW2luZGV4XS50aXRsZSArICc8L3NwYW4+JztcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0fSwge1xyXG5cdFx0XHRcdFx0ZmllbGQ6ICdBY3Rpb25zJyxcclxuXHRcdFx0XHRcdHRpdGxlOiAnQWN0aW9ucycsXHJcblx0XHRcdFx0XHRzb3J0YWJsZTogZmFsc2UsXHJcblx0XHRcdFx0XHR3aWR0aDogMTMwLFxyXG5cdFx0XHRcdFx0b3ZlcmZsb3c6ICd2aXNpYmxlJyxcclxuXHRcdFx0XHRcdGF1dG9IaWRlOiBmYWxzZSxcclxuXHRcdFx0XHRcdHRlbXBsYXRlOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0cmV0dXJuICdcXFxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkcm9wZG93biBkcm9wZG93bi1pbmxpbmVcIj5cXFxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiamF2YXNjcmlwdDo7XCIgY2xhc3M9XCJidG4gYnRuLXNtIGJ0bi1kZWZhdWx0IGJ0bi10ZXh0LXByaW1hcnkgYnRuLWhvdmVyLXByaW1hcnkgYnRuLWljb24gbXItMlwiIGRhdGEtdG9nZ2xlPVwiZHJvcGRvd25cIj5cXFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzcz1cInN2Zy1pY29uIHN2Zy1pY29uLW1kXCI+XFxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB4bWxuczp4bGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIiB3aWR0aD1cIjI0cHhcIiBoZWlnaHQ9XCIyNHB4XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHZlcnNpb249XCIxLjFcIiBjbGFzcz1cInN2Zy1pY29uXCI+XFxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxnIHN0cm9rZT1cIm5vbmVcIiBzdHJva2Utd2lkdGg9XCIxXCIgZmlsbD1cIm5vbmVcIiBmaWxsLXJ1bGU9XCJldmVub2RkXCI+XFxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHJlY3QgeD1cIjBcIiB5PVwiMFwiIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiLz5cXFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8cGF0aCBkPVwiTTcsMyBMMTcsMyBDMTkuMjA5MTM5LDMgMjEsNC43OTA4NjEgMjEsNyBDMjEsOS4yMDkxMzkgMTkuMjA5MTM5LDExIDE3LDExIEw3LDExIEM0Ljc5MDg2MSwxMSAzLDkuMjA5MTM5IDMsNyBDMyw0Ljc5MDg2MSA0Ljc5MDg2MSwzIDcsMyBaIE03LDkgQzguMTA0NTY5NSw5IDksOC4xMDQ1Njk1IDksNyBDOSw1Ljg5NTQzMDUgOC4xMDQ1Njk1LDUgNyw1IEM1Ljg5NTQzMDUsNSA1LDUuODk1NDMwNSA1LDcgQzUsOC4xMDQ1Njk1IDUuODk1NDMwNSw5IDcsOSBaXCIgZmlsbD1cIiMwMDAwMDBcIi8+XFxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHBhdGggZD1cIk03LDEzIEwxNywxMyBDMTkuMjA5MTM5LDEzIDIxLDE0Ljc5MDg2MSAyMSwxNyBDMjEsMTkuMjA5MTM5IDE5LjIwOTEzOSwyMSAxNywyMSBMNywyMSBDNC43OTA4NjEsMjEgMywxOS4yMDkxMzkgMywxNyBDMywxNC43OTA4NjEgNC43OTA4NjEsMTMgNywxMyBaIE0xNywxOSBDMTguMTA0NTY5NSwxOSAxOSwxOC4xMDQ1Njk1IDE5LDE3IEMxOSwxNS44OTU0MzA1IDE4LjEwNDU2OTUsMTUgMTcsMTUgQzE1Ljg5NTQzMDUsMTUgMTUsMTUuODk1NDMwNSAxNSwxNyBDMTUsMTguMTA0NTY5NSAxNS44OTU0MzA1LDE5IDE3LDE5IFpcIiBmaWxsPVwiIzAwMDAwMFwiIG9wYWNpdHk9XCIwLjNcIi8+XFxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZz5cXFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvc3ZnPlxcXHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvc3Bhbj5cXFxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XFxcclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRyb3Bkb3duLW1lbnUgZHJvcGRvd24tbWVudS1zbSBkcm9wZG93bi1tZW51LXJpZ2h0XCI+XFxcclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cIm5hdmkgZmxleC1jb2x1bW4gbmF2aS1ob3ZlciBweS0yXCI+XFxcclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJuYXZpLWhlYWRlciBmb250LXdlaWdodC1ib2xkZXIgdGV4dC11cHBlcmNhc2UgZm9udC1zaXplLXhzIHRleHQtcHJpbWFyeSBwYi0yXCI+XFxcclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ2hvb3NlIGFuIGFjdGlvbjpcXFxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XFxcclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJuYXZpLWl0ZW1cIj5cXFxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwibmF2aS1saW5rXCI+XFxcclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibmF2aS1pY29uXCI+PGkgY2xhc3M9XCJsYSBsYS1wcmludFwiPjwvaT48L3NwYW4+XFxcclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibmF2aS10ZXh0XCI+UHJpbnQ8L3NwYW4+XFxcclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxcXHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cXFxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cIm5hdmktaXRlbVwiPlxcXHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJuYXZpLWxpbmtcIj5cXFxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJuYXZpLWljb25cIj48aSBjbGFzcz1cImxhIGxhLWNvcHlcIj48L2k+PC9zcGFuPlxcXHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm5hdmktdGV4dFwiPkNvcHk8L3NwYW4+XFxcclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxcXHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cXFxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cIm5hdmktaXRlbVwiPlxcXHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJuYXZpLWxpbmtcIj5cXFxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJuYXZpLWljb25cIj48aSBjbGFzcz1cImxhIGxhLWZpbGUtZXhjZWwtb1wiPjwvaT48L3NwYW4+XFxcclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibmF2aS10ZXh0XCI+RXhjZWw8L3NwYW4+XFxcclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxcXHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cXFxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cIm5hdmktaXRlbVwiPlxcXHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJuYXZpLWxpbmtcIj5cXFxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJuYXZpLWljb25cIj48aSBjbGFzcz1cImxhIGxhLWZpbGUtdGV4dC1vXCI+PC9pPjwvc3Bhbj5cXFxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJuYXZpLXRleHRcIj5DU1Y8L3NwYW4+XFxcclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxcXHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cXFxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cIm5hdmktaXRlbVwiPlxcXHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJuYXZpLWxpbmtcIj5cXFxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJuYXZpLWljb25cIj48aSBjbGFzcz1cImxhIGxhLWZpbGUtcGRmLW9cIj48L2k+PC9zcGFuPlxcXHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm5hdmktdGV4dFwiPlBERjwvc3Bhbj5cXFxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XFxcclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxcXHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxcXHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcXHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxcclxuXHQgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiamF2YXNjcmlwdDo7XCIgY2xhc3M9XCJidG4gYnRuLXNtIGJ0bi1kZWZhdWx0IGJ0bi10ZXh0LXByaW1hcnkgYnRuLWhvdmVyLXByaW1hcnkgYnRuLWljb24gbXItMlwiIHRpdGxlPVwiRWRpdCBkZXRhaWxzXCI+XFxcclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJzdmctaWNvbiBzdmctaWNvbi1tZFwiPlxcXHJcblx0XHRcdFx0XHRcdFx0XHRcdDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHhtbG5zOnhsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiIHdpZHRoPVwiMjRweFwiIGhlaWdodD1cIjI0cHhcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgdmVyc2lvbj1cIjEuMVwiPlxcXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGcgc3Ryb2tlPVwibm9uZVwiIHN0cm9rZS13aWR0aD1cIjFcIiBmaWxsPVwibm9uZVwiIGZpbGwtcnVsZT1cImV2ZW5vZGRcIj5cXFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHJlY3QgeD1cIjBcIiB5PVwiMFwiIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiLz5cXFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHBhdGggZD1cIk0xMi4yNjc0Nzk5LDE4LjIzMjM1OTcgTDEyLjAwODQ4NzIsNS40NTg1MjQ1MSBDMTIuMDAwNDMwMyw1LjA2MTE0NzkyIDEyLjE1MDQxNTQsNC42NzY4MTgzIDEyLjQyNTUwMzcsNC4zODk5Mzk0OSBMMTUuMDAzMDE2NywxLjcwMTk1MzA0IEwxNy41OTEwNzUyLDQuNDAwOTM2OTUgQzE3Ljg1OTkwNzEsNC42ODEyOTExIDE4LjAwOTUwNjcsNS4wNTQ5OTYwMyAxOC4wMDgzOTM4LDUuNDQzNDEzMDcgTDE3Ljk3MTgyNjIsMTguMjA2MjUwOCBDMTcuOTY5NDU3NSwxOS4wMzI5OTY2IDE3LjI5ODU4MTYsMTkuNzAxOTUzIDE2LjQ3MTgzMjQsMTkuNzAxOTUzIEwxMy43NjcxNzE3LDE5LjcwMTk1MyBDMTIuOTUwNTk1MiwxOS43MDE5NTMgMTIuMjg0MDMyOCwxOS4wNDg3Njg0IDEyLjI2NzQ3OTksMTguMjMyMzU5NyBaXCIgZmlsbD1cIiMwMDAwMDBcIiBmaWxsLXJ1bGU9XCJub256ZXJvXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDE0LjcwMTk1MywgMTAuNzAxOTUzKSByb3RhdGUoLTEzNS4wMDAwMDApIHRyYW5zbGF0ZSgtMTQuNzAxOTUzLCAtMTAuNzAxOTUzKSBcIi8+XFxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxwYXRoIGQ9XCJNMTIuOSwyIEMxMy40NTIyODQ3LDIgMTMuOSwyLjQ0NzcxNTI1IDEzLjksMyBDMTMuOSwzLjU1MjI4NDc1IDEzLjQ1MjI4NDcsNCAxMi45LDQgTDYsNCBDNC44OTU0MzA1LDQgNCw0Ljg5NTQzMDUgNCw2IEw0LDE4IEM0LDE5LjEwNDU2OTUgNC44OTU0MzA1LDIwIDYsMjAgTDE4LDIwIEMxOS4xMDQ1Njk1LDIwIDIwLDE5LjEwNDU2OTUgMjAsMTggTDIwLDEzIEMyMCwxMi40NDc3MTUzIDIwLjQ0NzcxNTMsMTIgMjEsMTIgQzIxLjU1MjI4NDcsMTIgMjIsMTIuNDQ3NzE1MyAyMiwxMyBMMjIsMTggQzIyLDIwLjIwOTEzOSAyMC4yMDkxMzksMjIgMTgsMjIgTDYsMjIgQzMuNzkwODYxLDIyIDIsMjAuMjA5MTM5IDIsMTggTDIsNiBDMiwzLjc5MDg2MSAzLjc5MDg2MSwyIDYsMiBMMTIuOSwyIFpcIiBmaWxsPVwiIzAwMDAwMFwiIGZpbGwtcnVsZT1cIm5vbnplcm9cIiBvcGFjaXR5PVwiMC4zXCIvPlxcXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9nPlxcXHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvc3ZnPlxcXHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cXFxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cXFxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJqYXZhc2NyaXB0OjtcIiBjbGFzcz1cImJ0biBidG4tc20gYnRuLWRlZmF1bHQgYnRuLXRleHQtcHJpbWFyeSBidG4taG92ZXItcHJpbWFyeSBidG4taWNvblwiIHRpdGxlPVwiRGVsZXRlXCI+XFxcclxuXHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzPVwic3ZnLWljb24gc3ZnLWljb24tbWRcIj5cXFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB4bWxuczp4bGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIiB3aWR0aD1cIjI0cHhcIiBoZWlnaHQ9XCIyNHB4XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHZlcnNpb249XCIxLjFcIj5cXFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxnIHN0cm9rZT1cIm5vbmVcIiBzdHJva2Utd2lkdGg9XCIxXCIgZmlsbD1cIm5vbmVcIiBmaWxsLXJ1bGU9XCJldmVub2RkXCI+XFxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxyZWN0IHg9XCIwXCIgeT1cIjBcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIi8+XFxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxwYXRoIGQ9XCJNNiw4IEw2LDIwLjUgQzYsMjEuMzI4NDI3MSA2LjY3MTU3Mjg4LDIyIDcuNSwyMiBMMTYuNSwyMiBDMTcuMzI4NDI3MSwyMiAxOCwyMS4zMjg0MjcxIDE4LDIwLjUgTDE4LDggTDYsOCBaXCIgZmlsbD1cIiMwMDAwMDBcIiBmaWxsLXJ1bGU9XCJub256ZXJvXCIvPlxcXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8cGF0aCBkPVwiTTE0LDQuNSBMMTQsNCBDMTQsMy40NDc3MTUyNSAxMy41NTIyODQ3LDMgMTMsMyBMMTEsMyBDMTAuNDQ3NzE1MywzIDEwLDMuNDQ3NzE1MjUgMTAsNCBMMTAsNC41IEw1LjUsNC41IEM1LjIyMzg1NzYzLDQuNSA1LDQuNzIzODU3NjMgNSw1IEw1LDUuNSBDNSw1Ljc3NjE0MjM3IDUuMjIzODU3NjMsNiA1LjUsNiBMMTguNSw2IEMxOC43NzYxNDI0LDYgMTksNS43NzYxNDIzNyAxOSw1LjUgTDE5LDUgQzE5LDQuNzIzODU3NjMgMTguNzc2MTQyNCw0LjUgMTguNSw0LjUgTDE0LDQuNSBaXCIgZmlsbD1cIiMwMDAwMDBcIiBvcGFjaXR5PVwiMC4zXCIvPlxcXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9nPlxcXHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvc3ZnPlxcXHJcblx0XHRcdFx0XHRcdFx0XHQ8L3NwYW4+XFxcclxuXHQgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XFxcclxuXHQgICAgICAgICAgICAgICAgICAgICc7XHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdH1dLFxyXG5cdFx0fSk7XHJcblxyXG5cdFx0JCgnI2t0X2RhdGF0YWJsZV9zZWFyY2hfc3RhdHVzJykub24oJ2NoYW5nZScsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRkYXRhdGFibGUuc2VhcmNoKCQodGhpcykudmFsKCkudG9Mb3dlckNhc2UoKSwgJ1N0YXR1cycpO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0JCgnI2t0X2RhdGF0YWJsZV9zZWFyY2hfdHlwZScpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0ZGF0YXRhYmxlLnNlYXJjaCgkKHRoaXMpLnZhbCgpLnRvTG93ZXJDYXNlKCksICdUeXBlJyk7XHJcblx0XHR9KTtcclxuXHJcblx0XHQvLyQoJyNrdF9kYXRhdGFibGVfc2VhcmNoX3N0YXR1cywgI2t0X2RhdGF0YWJsZV9zZWFyY2hfdHlwZScpLnNlbGVjdHBpY2tlcigpO1xyXG5cdH07XHJcblxyXG5cdHJldHVybiB7XHJcblx0XHQvLyBwdWJsaWMgZnVuY3Rpb25zXHJcblx0XHRpbml0OiBmdW5jdGlvbigpIHtcclxuXHRcdFx0X2RlbW8oKTtcclxuXHRcdH0sXHJcblx0fTtcclxufSgpO1xyXG5cclxualF1ZXJ5KGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcclxuXHRLVEFwcHNFZHVjYXRpb25TY2hvb2xMaWJyYXJ5LmluaXQoKTtcclxufSk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=