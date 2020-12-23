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
/******/ 	return __webpack_require__(__webpack_require__.s = 29);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/metronic/js/pages/custom/ecommerce/my-orders.js":
/*!*******************************************************************!*\
  !*** ./resources/metronic/js/pages/custom/ecommerce/my-orders.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // Class definition

var KTDatatableColumnWidthDemo = function () {
  // Private functions
  var demo = function demo() {
    var datatable = $('#kt_datatable').KTDatatable({
      // datasource definition
      data: {
        type: 'remote',
        source: {
          read: {
            url: HOST_URL + '/api/datatables/demos/default.php',
            // sample custom headers
            // headers: {'x-my-custom-header': 'some value', 'x-test-header': 'the value'},
            map: function map(raw) {
              // sample data mapping
              var dataSet = raw;

              if (typeof raw.data !== 'undefined') {
                dataSet = raw.data;
              }

              return dataSet;
            }
          }
        },
        pageSize: 10,
        serverPaging: true,
        serverFiltering: true,
        serverSorting: true
      },
      // layout definition
      layout: {
        scroll: false,
        footer: false
      },
      // column sorting
      sortable: true,
      pagination: true,
      search: {
        input: $('#kt_datatable_search_query'),
        key: 'generalSearch'
      },
      // columns definition
      columns: [{
        field: 'Product',
        title: 'Product',
        sortable: 'asc',
        width: 160,
        template: function template(row) {
          var number = KTUtil.getRandomInt(1, 15);
          var productName = ["Smartwatch", "Headphones", "Sneakers", "Mobile Device", "Running Shoes", "Bicycle", "Fashion", "Stylish Belt", "Smartwatch", "Headphones", "Sneakers", "Mobile Device", "Running Shoes", "Bicycle", "Fashion", "Mobile Device"];
          var output = '<div class="d-flex align-items-center">\
                        <div class="symbol symbol-50 symbol-sm flex-shrink-0">\
                            <div class="symbol-label">\
                                <img class="h-75 align-self-end" src="assets/media/products/' + number + '.png" alt="photo"/>\
                            </div>\
                        </div>\
                        <div class="ml-4">\
                            <a href="#" class="text-dark-75 font-weight-bolder font-size-lg mb-0">' + productName[number] + '</a>\
                        </div>\
                    </div>';
          return output;
        }
      }, {
        field: 'OrderID',
        title: 'Order ID'
      }, {
        field: 'ShipDate',
        title: 'Ship Date',
        type: 'date',
        format: 'MM/DD/YYYY'
      }, {
        field: 'Status',
        title: 'Status',
        // callback function support for column rendering
        template: function template(row) {
          var status = {
            1: {
              'title': 'Pending',
              'class': ' label-light-success'
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
          return '<span class="label font-weight-bold label-lg ' + status[row.Status]["class"] + ' label-inline">' + status[row.Status].title + '</span>';
        }
      }, {
        field: 'Type',
        title: 'Type',
        autoHide: false,
        // callback function support for column rendering
        template: function template(row) {
          var status = {
            1: {
              'title': 'Online',
              'state': 'danger'
            },
            2: {
              'title': 'Retail',
              'state': 'primary'
            },
            3: {
              'title': 'Direct',
              'state': 'success'
            }
          };
          return '<span class="label label-' + status[row.Type].state + ' label-dot mr-2"></span><span class="font-weight-bold text-' + status[row.Type].state + '">' + status[row.Type].title + '</span>';
        }
      }, {
        field: 'Actions',
        title: 'Actions',
        sortable: false,
        width: 125,
        overflow: 'visible',
        autoHide: false,
        template: function template() {
          return '\
                        <div class="dropdown dropdown-inline">\
                            <a href="javascript:;" class="btn btn-sm btn-clean btn-icon mr-2" data-toggle="dropdown">\
                                <span class="svg-icon svg-icon-md">\
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">\
                                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\
                                            <rect x="0" y="0" width="24" height="24"/>\
                                            <path d="M5,8.6862915 L5,5 L8.6862915,5 L11.5857864,2.10050506 L14.4852814,5 L19,5 L19,9.51471863 L21.4852814,12 L19,14.4852814 L19,19 L14.4852814,19 L11.5857864,21.8994949 L8.6862915,19 L5,19 L5,15.3137085 L1.6862915,12 L5,8.6862915 Z M12,15 C13.6568542,15 15,13.6568542 15,12 C15,10.3431458 13.6568542,9 12,9 C10.3431458,9 9,10.3431458 9,12 C9,13.6568542 10.3431458,15 12,15 Z" fill="#000000"/>\
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
                        <a href="javascript:;" class="btn btn-sm btn-clean btn-icon mr-2" title="Edit details">\
                            <span class="svg-icon svg-icon-md">\
                                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">\
                                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\
                                        <rect x="0" y="0" width="24" height="24"/>\
                                        <path d="M8,17.9148182 L8,5.96685884 C8,5.56391781 8.16211443,5.17792052 8.44982609,4.89581508 L10.965708,2.42895648 C11.5426798,1.86322723 12.4640974,1.85620921 13.0496196,2.41308426 L15.5337377,4.77566479 C15.8314604,5.0588212 16,5.45170806 16,5.86258077 L16,17.9148182 C16,18.7432453 15.3284271,19.4148182 14.5,19.4148182 L9.5,19.4148182 C8.67157288,19.4148182 8,18.7432453 8,17.9148182 Z" fill="#000000" fill-rule="nonzero"\ transform="translate(12.000000, 10.707409) rotate(-135.000000) translate(-12.000000, -10.707409) "/>\
                                        <rect fill="#000000" opacity="0.3" x="5" y="20" width="15" height="2" rx="1"/>\
                                    </g>\
                                </svg>\
                            </span>\
                        </a>\
                        <a href="javascript:;" class="btn btn-sm btn-clean btn-icon" title="Delete">\
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
    });
    $('#kt_datatable_search_status, #kt_datatable_search_type').selectpicker();
  };

  return {
    // public functions
    init: function init() {
      demo();
    }
  };
}();

jQuery(document).ready(function () {
  KTDatatableColumnWidthDemo.init();
});

/***/ }),

/***/ 29:
/*!*************************************************************************!*\
  !*** multi ./resources/metronic/js/pages/custom/ecommerce/my-orders.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Applications/MAMP/htdocs/spreadci4/public/admin/themes/metronic/resources/metronic/js/pages/custom/ecommerce/my-orders.js */"./resources/metronic/js/pages/custom/ecommerce/my-orders.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL21ldHJvbmljL2pzL3BhZ2VzL2N1c3RvbS9lY29tbWVyY2UvbXktb3JkZXJzLmpzIl0sIm5hbWVzIjpbIktURGF0YXRhYmxlQ29sdW1uV2lkdGhEZW1vIiwiZGVtbyIsImRhdGF0YWJsZSIsIiQiLCJLVERhdGF0YWJsZSIsImRhdGEiLCJ0eXBlIiwic291cmNlIiwicmVhZCIsInVybCIsIkhPU1RfVVJMIiwibWFwIiwicmF3IiwiZGF0YVNldCIsInBhZ2VTaXplIiwic2VydmVyUGFnaW5nIiwic2VydmVyRmlsdGVyaW5nIiwic2VydmVyU29ydGluZyIsImxheW91dCIsInNjcm9sbCIsImZvb3RlciIsInNvcnRhYmxlIiwicGFnaW5hdGlvbiIsInNlYXJjaCIsImlucHV0Iiwia2V5IiwiY29sdW1ucyIsImZpZWxkIiwidGl0bGUiLCJ3aWR0aCIsInRlbXBsYXRlIiwicm93IiwibnVtYmVyIiwiS1RVdGlsIiwiZ2V0UmFuZG9tSW50IiwicHJvZHVjdE5hbWUiLCJvdXRwdXQiLCJmb3JtYXQiLCJzdGF0dXMiLCJTdGF0dXMiLCJhdXRvSGlkZSIsIlR5cGUiLCJzdGF0ZSIsIm92ZXJmbG93Iiwib24iLCJ2YWwiLCJ0b0xvd2VyQ2FzZSIsInNlbGVjdHBpY2tlciIsImluaXQiLCJqUXVlcnkiLCJkb2N1bWVudCIsInJlYWR5Il0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxj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QUZEO0FBSUEzQyxLQUFDLENBQUMsMkJBQUQsQ0FBRCxDQUErQnlDLEVBQS9CLENBQWtDLFFBQWxDLEVBQTRDLFlBQVk7QUFDcEQxQyxlQUFTLENBQUNxQixNQUFWLENBQWlCcEIsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRMEMsR0FBUixHQUFjQyxXQUFkLEVBQWpCLEVBQThDLE1BQTlDO0FBQ0gsS0FGRDtBQUlBM0MsS0FBQyxDQUFDLHdEQUFELENBQUQsQ0FBNEQ0QyxZQUE1RDtBQUNILEdBclBEOztBQXVQQSxTQUFPO0FBQ0g7QUFDQUMsUUFBSSxFQUFFLGdCQUFZO0FBQ2QvQyxVQUFJO0FBQ1A7QUFKRSxHQUFQO0FBTUgsQ0EvUGdDLEVBQWpDOztBQWlRQWdELE1BQU0sQ0FBQ0MsUUFBRCxDQUFOLENBQWlCQyxLQUFqQixDQUF1QixZQUFZO0FBQy9CbkQsNEJBQTBCLENBQUNnRCxJQUEzQjtBQUNILENBRkQsRSIsImZpbGUiOiIvZGV2ZWxvcG1lbnQvanMvcGFnZXMvY3VzdG9tL2Vjb21tZXJjZS9teS1vcmRlcnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDI5KTtcbiIsIlwidXNlIHN0cmljdFwiO1xyXG4vLyBDbGFzcyBkZWZpbml0aW9uXHJcblxyXG52YXIgS1REYXRhdGFibGVDb2x1bW5XaWR0aERlbW8gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAvLyBQcml2YXRlIGZ1bmN0aW9uc1xyXG4gICAgdmFyIGRlbW8gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGRhdGF0YWJsZSA9ICQoJyNrdF9kYXRhdGFibGUnKS5LVERhdGF0YWJsZSh7XHJcbiAgICAgICAgICAgIC8vIGRhdGFzb3VyY2UgZGVmaW5pdGlvblxyXG4gICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiAncmVtb3RlJyxcclxuICAgICAgICAgICAgICAgIHNvdXJjZToge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlYWQ6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBIT1NUX1VSTCArICcvYXBpL2RhdGF0YWJsZXMvZGVtb3MvZGVmYXVsdC5waHAnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBzYW1wbGUgY3VzdG9tIGhlYWRlcnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gaGVhZGVyczogeyd4LW15LWN1c3RvbS1oZWFkZXInOiAnc29tZSB2YWx1ZScsICd4LXRlc3QtaGVhZGVyJzogJ3RoZSB2YWx1ZSd9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXA6IGZ1bmN0aW9uIChyYXcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNhbXBsZSBkYXRhIG1hcHBpbmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkYXRhU2V0ID0gcmF3O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiByYXcuZGF0YSAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhU2V0ID0gcmF3LmRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGF0YVNldDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHBhZ2VTaXplOiAxMCxcclxuICAgICAgICAgICAgICAgIHNlcnZlclBhZ2luZzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHNlcnZlckZpbHRlcmluZzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHNlcnZlclNvcnRpbmc6IHRydWUsXHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICAvLyBsYXlvdXQgZGVmaW5pdGlvblxyXG4gICAgICAgICAgICBsYXlvdXQ6IHtcclxuICAgICAgICAgICAgICAgIHNjcm9sbDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBmb290ZXI6IGZhbHNlLFxyXG4gICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgLy8gY29sdW1uIHNvcnRpbmdcclxuICAgICAgICAgICAgc29ydGFibGU6IHRydWUsXHJcblxyXG4gICAgICAgICAgICBwYWdpbmF0aW9uOiB0cnVlLFxyXG5cclxuICAgICAgICAgICAgc2VhcmNoOiB7XHJcbiAgICAgICAgICAgICAgICBpbnB1dDogJCgnI2t0X2RhdGF0YWJsZV9zZWFyY2hfcXVlcnknKSxcclxuICAgICAgICAgICAgICAgIGtleTogJ2dlbmVyYWxTZWFyY2gnXHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICAvLyBjb2x1bW5zIGRlZmluaXRpb25cclxuICAgICAgICAgICAgY29sdW1uczogW3tcclxuICAgICAgICAgICAgICAgIGZpZWxkOiAnUHJvZHVjdCcsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ1Byb2R1Y3QnLFxyXG4gICAgICAgICAgICAgICAgc29ydGFibGU6ICdhc2MnLFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDE2MCxcclxuICAgICAgICAgICAgICAgIHRlbXBsYXRlOiBmdW5jdGlvbiAocm93KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG51bWJlciA9IEtUVXRpbC5nZXRSYW5kb21JbnQoMSwgMTUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBwcm9kdWN0TmFtZSA9IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJTbWFydHdhdGNoXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiSGVhZHBob25lc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlNuZWFrZXJzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiTW9iaWxlIERldmljZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlJ1bm5pbmcgU2hvZXNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJCaWN5Y2xlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiRmFzaGlvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlN0eWxpc2ggQmVsdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlNtYXJ0d2F0Y2hcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJIZWFkcGhvbmVzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiU25lYWtlcnNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJNb2JpbGUgRGV2aWNlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiUnVubmluZyBTaG9lc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIkJpY3ljbGVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJGYXNoaW9uXCIsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIk1vYmlsZSBEZXZpY2VcIiAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBvdXRwdXQgPSAnPGRpdiBjbGFzcz1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3ltYm9sIHN5bWJvbC01MCBzeW1ib2wtc20gZmxleC1zaHJpbmstMFwiPlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3ltYm9sLWxhYmVsXCI+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPVwiaC03NSBhbGlnbi1zZWxmLWVuZFwiIHNyYz1cImFzc2V0cy9tZWRpYS9wcm9kdWN0cy8nICsgbnVtYmVyICsgJy5wbmdcIiBhbHQ9XCJwaG90b1wiLz5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1sLTRcIj5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cInRleHQtZGFyay03NSBmb250LXdlaWdodC1ib2xkZXIgZm9udC1zaXplLWxnIG1iLTBcIj4nICsgcHJvZHVjdE5hbWVbbnVtYmVyXSArICc8L2E+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxcclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4nO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gb3V0cHV0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZDogJ09yZGVySUQnLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdPcmRlciBJRCcsXHJcbiAgICAgICAgICAgIH0se1xyXG4gICAgICAgICAgICAgICAgZmllbGQ6ICdTaGlwRGF0ZScsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ1NoaXAgRGF0ZScsXHJcbiAgICAgICAgICAgICAgICB0eXBlOiAnZGF0ZScsXHJcbiAgICAgICAgICAgICAgICBmb3JtYXQ6ICdNTS9ERC9ZWVlZJyxcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgZmllbGQ6ICdTdGF0dXMnLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdTdGF0dXMnLFxyXG4gICAgICAgICAgICAgICAgLy8gY2FsbGJhY2sgZnVuY3Rpb24gc3VwcG9ydCBmb3IgY29sdW1uIHJlbmRlcmluZ1xyXG4gICAgICAgICAgICAgICAgdGVtcGxhdGU6IGZ1bmN0aW9uIChyb3cpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgc3RhdHVzID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAxOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGl0bGUnOiAnUGVuZGluZycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2xhc3MnOiAnIGxhYmVsLWxpZ2h0LXN1Y2Nlc3MnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0aXRsZSc6ICdEZWxpdmVyZWQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzogJyBsYWJlbC1saWdodC1kYW5nZXInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0aXRsZSc6ICdDYW5jZWxlZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2xhc3MnOiAnIGxhYmVsLWxpZ2h0LXByaW1hcnknXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDQ6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0aXRsZSc6ICdTdWNjZXNzJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjbGFzcyc6ICcgbGFiZWwtbGlnaHQtc3VjY2VzcydcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgNToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RpdGxlJzogJ0luZm8nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzogJyBsYWJlbC1saWdodC1pbmZvJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA2OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGl0bGUnOiAnRGFuZ2VyJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjbGFzcyc6ICcgbGFiZWwtbGlnaHQtZGFuZ2VyJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA3OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGl0bGUnOiAnV2FybmluZycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2xhc3MnOiAnIGxhYmVsLWxpZ2h0LXdhcm5pbmcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJzxzcGFuIGNsYXNzPVwibGFiZWwgZm9udC13ZWlnaHQtYm9sZCBsYWJlbC1sZyAnICsgc3RhdHVzW3Jvdy5TdGF0dXNdLmNsYXNzICsgJyBsYWJlbC1pbmxpbmVcIj4nICsgc3RhdHVzW3Jvdy5TdGF0dXNdLnRpdGxlICsgJzwvc3Bhbj4nO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgZmllbGQ6ICdUeXBlJyxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnVHlwZScsXHJcbiAgICAgICAgICAgICAgICBhdXRvSGlkZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAvLyBjYWxsYmFjayBmdW5jdGlvbiBzdXBwb3J0IGZvciBjb2x1bW4gcmVuZGVyaW5nXHJcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZTogZnVuY3Rpb24gKHJvdykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBzdGF0dXMgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0aXRsZSc6ICdPbmxpbmUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3N0YXRlJzogJ2RhbmdlcidcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgMjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RpdGxlJzogJ1JldGFpbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnc3RhdGUnOiAncHJpbWFyeSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgMzoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RpdGxlJzogJ0RpcmVjdCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnc3RhdGUnOiAnc3VjY2VzcydcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAnPHNwYW4gY2xhc3M9XCJsYWJlbCBsYWJlbC0nICsgc3RhdHVzW3Jvdy5UeXBlXS5zdGF0ZSArICcgbGFiZWwtZG90IG1yLTJcIj48L3NwYW4+PHNwYW4gY2xhc3M9XCJmb250LXdlaWdodC1ib2xkIHRleHQtJyArIHN0YXR1c1tyb3cuVHlwZV0uc3RhdGUgKyAnXCI+JyArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1c1tyb3cuVHlwZV0udGl0bGUgKyAnPC9zcGFuPic7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZDogJ0FjdGlvbnMnLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdBY3Rpb25zJyxcclxuICAgICAgICAgICAgICAgIHNvcnRhYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMjUsXHJcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogJ3Zpc2libGUnLFxyXG4gICAgICAgICAgICAgICAgYXV0b0hpZGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgdGVtcGxhdGU6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ1xcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkcm9wZG93biBkcm9wZG93bi1pbmxpbmVcIj5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImphdmFzY3JpcHQ6O1wiIGNsYXNzPVwiYnRuIGJ0bi1zbSBidG4tY2xlYW4gYnRuLWljb24gbXItMlwiIGRhdGEtdG9nZ2xlPVwiZHJvcGRvd25cIj5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwic3ZnLWljb24gc3ZnLWljb24tbWRcIj5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB4bWxuczp4bGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIiB3aWR0aD1cIjI0cHhcIiBoZWlnaHQ9XCIyNHB4XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHZlcnNpb249XCIxLjFcIj5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGcgc3Ryb2tlPVwibm9uZVwiIHN0cm9rZS13aWR0aD1cIjFcIiBmaWxsPVwibm9uZVwiIGZpbGwtcnVsZT1cImV2ZW5vZGRcIj5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IHg9XCIwXCIgeT1cIjBcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIi8+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTUsOC42ODYyOTE1IEw1LDUgTDguNjg2MjkxNSw1IEwxMS41ODU3ODY0LDIuMTAwNTA1MDYgTDE0LjQ4NTI4MTQsNSBMMTksNSBMMTksOS41MTQ3MTg2MyBMMjEuNDg1MjgxNCwxMiBMMTksMTQuNDg1MjgxNCBMMTksMTkgTDE0LjQ4NTI4MTQsMTkgTDExLjU4NTc4NjQsMjEuODk5NDk0OSBMOC42ODYyOTE1LDE5IEw1LDE5IEw1LDE1LjMxMzcwODUgTDEuNjg2MjkxNSwxMiBMNSw4LjY4NjI5MTUgWiBNMTIsMTUgQzEzLjY1Njg1NDIsMTUgMTUsMTMuNjU2ODU0MiAxNSwxMiBDMTUsMTAuMzQzMTQ1OCAxMy42NTY4NTQyLDkgMTIsOSBDMTAuMzQzMTQ1OCw5IDksMTAuMzQzMTQ1OCA5LDEyIEM5LDEzLjY1Njg1NDIgMTAuMzQzMTQ1OCwxNSAxMiwxNSBaXCIgZmlsbD1cIiMwMDAwMDBcIi8+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZz5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZHJvcGRvd24tbWVudSBkcm9wZG93bi1tZW51LXNtIGRyb3Bkb3duLW1lbnUtcmlnaHRcIj5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cIm5hdmkgZmxleC1jb2x1bW4gbmF2aS1ob3ZlciBweS0yXCI+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwibmF2aS1oZWFkZXIgZm9udC13ZWlnaHQtYm9sZGVyIHRleHQtdXBwZXJjYXNlIGZvbnQtc2l6ZS14cyB0ZXh0LXByaW1hcnkgcGItMlwiPlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDaG9vc2UgYW4gYWN0aW9uOlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwibmF2aS1pdGVtXCI+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJuYXZpLWxpbmtcIj5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibmF2aS1pY29uXCI+PGkgY2xhc3M9XCJsYSBsYS1wcmludFwiPjwvaT48L3NwYW4+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm5hdmktdGV4dFwiPlByaW50PC9zcGFuPlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJuYXZpLWl0ZW1cIj5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cIm5hdmktbGlua1wiPlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJuYXZpLWljb25cIj48aSBjbGFzcz1cImxhIGxhLWNvcHlcIj48L2k+PC9zcGFuPlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJuYXZpLXRleHRcIj5Db3B5PC9zcGFuPlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJuYXZpLWl0ZW1cIj5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cIm5hdmktbGlua1wiPlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJuYXZpLWljb25cIj48aSBjbGFzcz1cImxhIGxhLWZpbGUtZXhjZWwtb1wiPjwvaT48L3NwYW4+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm5hdmktdGV4dFwiPkV4Y2VsPC9zcGFuPlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJuYXZpLWl0ZW1cIj5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cIm5hdmktbGlua1wiPlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJuYXZpLWljb25cIj48aSBjbGFzcz1cImxhIGxhLWZpbGUtdGV4dC1vXCI+PC9pPjwvc3Bhbj5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibmF2aS10ZXh0XCI+Q1NWPC9zcGFuPlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJuYXZpLWl0ZW1cIj5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cIm5hdmktbGlua1wiPlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJuYXZpLWljb25cIj48aSBjbGFzcz1cImxhIGxhLWZpbGUtcGRmLW9cIj48L2k+PC9zcGFuPlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJuYXZpLXRleHRcIj5QREY8L3NwYW4+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImphdmFzY3JpcHQ6O1wiIGNsYXNzPVwiYnRuIGJ0bi1zbSBidG4tY2xlYW4gYnRuLWljb24gbXItMlwiIHRpdGxlPVwiRWRpdCBkZXRhaWxzXCI+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwic3ZnLWljb24gc3ZnLWljb24tbWRcIj5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHhtbG5zOnhsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiIHdpZHRoPVwiMjRweFwiIGhlaWdodD1cIjI0cHhcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgdmVyc2lvbj1cIjEuMVwiPlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxnIHN0cm9rZT1cIm5vbmVcIiBzdHJva2Utd2lkdGg9XCIxXCIgZmlsbD1cIm5vbmVcIiBmaWxsLXJ1bGU9XCJldmVub2RkXCI+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IHg9XCIwXCIgeT1cIjBcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIi8+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNOCwxNy45MTQ4MTgyIEw4LDUuOTY2ODU4ODQgQzgsNS41NjM5MTc4MSA4LjE2MjExNDQzLDUuMTc3OTIwNTIgOC40NDk4MjYwOSw0Ljg5NTgxNTA4IEwxMC45NjU3MDgsMi40Mjg5NTY0OCBDMTEuNTQyNjc5OCwxLjg2MzIyNzIzIDEyLjQ2NDA5NzQsMS44NTYyMDkyMSAxMy4wNDk2MTk2LDIuNDEzMDg0MjYgTDE1LjUzMzczNzcsNC43NzU2NjQ3OSBDMTUuODMxNDYwNCw1LjA1ODgyMTIgMTYsNS40NTE3MDgwNiAxNiw1Ljg2MjU4MDc3IEwxNiwxNy45MTQ4MTgyIEMxNiwxOC43NDMyNDUzIDE1LjMyODQyNzEsMTkuNDE0ODE4MiAxNC41LDE5LjQxNDgxODIgTDkuNSwxOS40MTQ4MTgyIEM4LjY3MTU3Mjg4LDE5LjQxNDgxODIgOCwxOC43NDMyNDUzIDgsMTcuOTE0ODE4MiBaXCIgZmlsbD1cIiMwMDAwMDBcIiBmaWxsLXJ1bGU9XCJub256ZXJvXCJcXCB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMTIuMDAwMDAwLCAxMC43MDc0MDkpIHJvdGF0ZSgtMTM1LjAwMDAwMCkgdHJhbnNsYXRlKC0xMi4wMDAwMDAsIC0xMC43MDc0MDkpIFwiLz5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3QgZmlsbD1cIiMwMDAwMDBcIiBvcGFjaXR5PVwiMC4zXCIgeD1cIjVcIiB5PVwiMjBcIiB3aWR0aD1cIjE1XCIgaGVpZ2h0PVwiMlwiIHJ4PVwiMVwiLz5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2c+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiamF2YXNjcmlwdDo7XCIgY2xhc3M9XCJidG4gYnRuLXNtIGJ0bi1jbGVhbiBidG4taWNvblwiIHRpdGxlPVwiRGVsZXRlXCI+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwic3ZnLWljb24gc3ZnLWljb24tbWRcIj5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHhtbG5zOnhsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiIHdpZHRoPVwiMjRweFwiIGhlaWdodD1cIjI0cHhcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgdmVyc2lvbj1cIjEuMVwiPlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxnIHN0cm9rZT1cIm5vbmVcIiBzdHJva2Utd2lkdGg9XCIxXCIgZmlsbD1cIm5vbmVcIiBmaWxsLXJ1bGU9XCJldmVub2RkXCI+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IHg9XCIwXCIgeT1cIjBcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIi8+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNNiw4IEw2LDIwLjUgQzYsMjEuMzI4NDI3MSA2LjY3MTU3Mjg4LDIyIDcuNSwyMiBMMTYuNSwyMiBDMTcuMzI4NDI3MSwyMiAxOCwyMS4zMjg0MjcxIDE4LDIwLjUgTDE4LDggTDYsOCBaXCIgZmlsbD1cIiMwMDAwMDBcIiBmaWxsLXJ1bGU9XCJub256ZXJvXCIvPlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTE0LDQuNSBMMTQsNCBDMTQsMy40NDc3MTUyNSAxMy41NTIyODQ3LDMgMTMsMyBMMTEsMyBDMTAuNDQ3NzE1MywzIDEwLDMuNDQ3NzE1MjUgMTAsNCBMMTAsNC41IEw1LjUsNC41IEM1LjIyMzg1NzYzLDQuNSA1LDQuNzIzODU3NjMgNSw1IEw1LDUuNSBDNSw1Ljc3NjE0MjM3IDUuMjIzODU3NjMsNiA1LjUsNiBMMTguNSw2IEMxOC43NzYxNDI0LDYgMTksNS43NzYxNDIzNyAxOSw1LjUgTDE5LDUgQzE5LDQuNzIzODU3NjMgMTguNzc2MTQyNCw0LjUgMTguNSw0LjUgTDE0LDQuNSBaXCIgZmlsbD1cIiMwMDAwMDBcIiBvcGFjaXR5PVwiMC4zXCIvPlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZz5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxcXHJcbiAgICAgICAgICAgICAgICAgICAgJztcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH1dLFxyXG5cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJCgnI2t0X2RhdGF0YWJsZV9zZWFyY2hfc3RhdHVzJykub24oJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgZGF0YXRhYmxlLnNlYXJjaCgkKHRoaXMpLnZhbCgpLnRvTG93ZXJDYXNlKCksICdTdGF0dXMnKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJCgnI2t0X2RhdGF0YWJsZV9zZWFyY2hfdHlwZScpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGRhdGF0YWJsZS5zZWFyY2goJCh0aGlzKS52YWwoKS50b0xvd2VyQ2FzZSgpLCAnVHlwZScpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAkKCcja3RfZGF0YXRhYmxlX3NlYXJjaF9zdGF0dXMsICNrdF9kYXRhdGFibGVfc2VhcmNoX3R5cGUnKS5zZWxlY3RwaWNrZXIoKTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICAvLyBwdWJsaWMgZnVuY3Rpb25zXHJcbiAgICAgICAgaW5pdDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBkZW1vKCk7XHJcbiAgICAgICAgfSxcclxuICAgIH07XHJcbn0oKTtcclxuXHJcbmpRdWVyeShkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG4gICAgS1REYXRhdGFibGVDb2x1bW5XaWR0aERlbW8uaW5pdCgpO1xyXG59KTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==