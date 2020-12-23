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
/******/ 	return __webpack_require__(__webpack_require__.s = 62);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/metronic/js/pages/widgets.js":
/*!************************************************!*\
  !*** ./resources/metronic/js/pages/widgets.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // Class definition

var KTWidgets = function () {
  // Private properties
  // General Controls
  var _initDaterangepicker = function _initDaterangepicker() {
    if ($('#kt_dashboard_daterangepicker').length == 0) {
      return;
    }

    var picker = $('#kt_dashboard_daterangepicker');
    var start = moment();
    var end = moment();

    function cb(start, end, label) {
      var title = '';
      var range = '';

      if (end - start < 100 || label == 'Today') {
        title = 'Today:';
        range = start.format('MMM D');
      } else if (label == 'Yesterday') {
        title = 'Yesterday:';
        range = start.format('MMM D');
      } else {
        range = start.format('MMM D') + ' - ' + end.format('MMM D');
      }

      $('#kt_dashboard_daterangepicker_date').html(range);
      $('#kt_dashboard_daterangepicker_title').html(title);
    }

    picker.daterangepicker({
      direction: KTUtil.isRTL(),
      startDate: start,
      endDate: end,
      opens: 'left',
      applyClass: 'btn-primary',
      cancelClass: 'btn-light-primary',
      ranges: {
        'Today': [moment(), moment()],
        'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
        'Last 7 Days': [moment().subtract(6, 'days'), moment()],
        'Last 30 Days': [moment().subtract(29, 'days'), moment()],
        'This Month': [moment().startOf('month'), moment().endOf('month')],
        'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
      }
    }, cb);
    cb(start, end, '');
  }; // Stats widgets


  var _initStatsWidget7 = function _initStatsWidget7() {
    var element = document.getElementById("kt_stats_widget_7_chart");

    if (!element) {
      return;
    }

    var options = {
      series: [{
        name: 'Net Profit',
        data: [30, 45, 32, 70, 40]
      }],
      chart: {
        type: 'area',
        height: 150,
        toolbar: {
          show: false
        },
        zoom: {
          enabled: false
        },
        sparkline: {
          enabled: true
        }
      },
      plotOptions: {},
      legend: {
        show: false
      },
      dataLabels: {
        enabled: false
      },
      fill: {
        type: 'solid',
        opacity: 1
      },
      stroke: {
        curve: 'smooth',
        show: true,
        width: 3,
        colors: [KTApp.getSettings()['colors']['theme']['base']['success']]
      },
      xaxis: {
        categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        labels: {
          show: false,
          style: {
            colors: KTApp.getSettings()['colors']['gray']['gray-500'],
            fontSize: '12px',
            fontFamily: KTApp.getSettings()['font-family']
          }
        },
        crosshairs: {
          show: false,
          position: 'front',
          stroke: {
            color: KTApp.getSettings()['colors']['gray']['gray-300'],
            width: 1,
            dashArray: 3
          }
        },
        tooltip: {
          enabled: true,
          formatter: undefined,
          offsetY: 0,
          style: {
            fontSize: '12px',
            fontFamily: KTApp.getSettings()['font-family']
          }
        }
      },
      yaxis: {
        labels: {
          show: false,
          style: {
            colors: KTApp.getSettings()['colors']['gray']['gray-500'],
            fontSize: '12px',
            fontFamily: KTApp.getSettings()['font-family']
          }
        }
      },
      states: {
        normal: {
          filter: {
            type: 'none',
            value: 0
          }
        },
        hover: {
          filter: {
            type: 'none',
            value: 0
          }
        },
        active: {
          allowMultipleDataPointsSelection: false,
          filter: {
            type: 'none',
            value: 0
          }
        }
      },
      tooltip: {
        style: {
          fontSize: '12px',
          fontFamily: KTApp.getSettings()['font-family']
        },
        y: {
          formatter: function formatter(val) {
            return "$" + val + " thousands";
          }
        }
      },
      colors: [KTApp.getSettings()['colors']['theme']['light']['success']],
      markers: {
        colors: [KTApp.getSettings()['colors']['theme']['light']['success']],
        strokeColor: [KTApp.getSettings()['colors']['theme']['base']['success']],
        strokeWidth: 3
      }
    };
    var chart = new ApexCharts(element, options);
    chart.render();
  };

  var _initStatsWidget8 = function _initStatsWidget8() {
    var element = document.getElementById("kt_stats_widget_8_chart");

    if (!element) {
      return;
    }

    var options = {
      series: [{
        name: 'Net Profit',
        data: [30, 45, 32, 70, 40]
      }],
      chart: {
        type: 'area',
        height: 150,
        toolbar: {
          show: false
        },
        zoom: {
          enabled: false
        },
        sparkline: {
          enabled: true
        }
      },
      plotOptions: {},
      legend: {
        show: false
      },
      dataLabels: {
        enabled: false
      },
      fill: {
        type: 'solid',
        opacity: 1
      },
      stroke: {
        curve: 'smooth',
        show: true,
        width: 3,
        colors: [KTApp.getSettings()['colors']['theme']['base']['danger']]
      },
      xaxis: {
        categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun'],
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        labels: {
          show: false,
          style: {
            colors: KTApp.getSettings()['colors']['gray']['gray-500'],
            fontSize: '12px',
            fontFamily: KTApp.getSettings()['font-family']
          }
        },
        crosshairs: {
          show: false,
          position: 'front',
          stroke: {
            color: KTApp.getSettings()['colors']['gray']['gray-300'],
            width: 1,
            dashArray: 3
          }
        },
        tooltip: {
          enabled: true,
          formatter: undefined,
          offsetY: 0,
          style: {
            fontSize: '12px',
            fontFamily: KTApp.getSettings()['font-family']
          }
        }
      },
      yaxis: {
        labels: {
          show: false,
          style: {
            colors: KTApp.getSettings()['colors']['gray']['gray-500'],
            fontSize: '12px',
            fontFamily: KTApp.getSettings()['font-family']
          }
        }
      },
      states: {
        normal: {
          filter: {
            type: 'none',
            value: 0
          }
        },
        hover: {
          filter: {
            type: 'none',
            value: 0
          }
        },
        active: {
          allowMultipleDataPointsSelection: false,
          filter: {
            type: 'none',
            value: 0
          }
        }
      },
      tooltip: {
        style: {
          fontSize: '12px',
          fontFamily: KTApp.getSettings()['font-family']
        },
        y: {
          formatter: function formatter(val) {
            return "$" + val + " thousands";
          }
        }
      },
      colors: [KTApp.getSettings()['colors']['theme']['light']['danger']],
      markers: {
        colors: [KTApp.getSettings()['colors']['theme']['light']['danger']],
        strokeColor: [KTApp.getSettings()['colors']['theme']['base']['danger']],
        strokeWidth: 3
      }
    };
    var chart = new ApexCharts(element, options);
    chart.render();
  };

  var _initStatsWidget9 = function _initStatsWidget9() {
    var element = document.getElementById("kt_stats_widget_9_chart");

    if (!element) {
      return;
    }

    var options = {
      series: [{
        name: 'Net Profit',
        data: [30, 45, 32, 70, 40]
      }],
      chart: {
        type: 'area',
        height: 150,
        toolbar: {
          show: false
        },
        zoom: {
          enabled: false
        },
        sparkline: {
          enabled: true
        }
      },
      plotOptions: {},
      legend: {
        show: false
      },
      dataLabels: {
        enabled: false
      },
      fill: {
        type: 'solid',
        opacity: 1
      },
      stroke: {
        curve: 'smooth',
        show: true,
        width: 3,
        colors: [KTApp.getSettings()['colors']['theme']['base']['primary']]
      },
      xaxis: {
        categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun'],
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        labels: {
          show: false,
          style: {
            colors: KTApp.getSettings()['colors']['gray']['gray-500'],
            fontSize: '12px',
            fontFamily: KTApp.getSettings()['font-family']
          }
        },
        crosshairs: {
          show: false,
          position: 'front',
          stroke: {
            color: KTApp.getSettings()['colors']['gray']['gray-300'],
            width: 1,
            dashArray: 3
          }
        },
        tooltip: {
          enabled: true,
          formatter: undefined,
          offsetY: 0,
          style: {
            fontSize: '12px',
            fontFamily: KTApp.getSettings()['font-family']
          }
        }
      },
      yaxis: {
        labels: {
          show: false,
          style: {
            colors: KTApp.getSettings()['colors']['gray']['gray-500'],
            fontSize: '12px',
            fontFamily: KTApp.getSettings()['font-family']
          }
        }
      },
      states: {
        normal: {
          filter: {
            type: 'none',
            value: 0
          }
        },
        hover: {
          filter: {
            type: 'none',
            value: 0
          }
        },
        active: {
          allowMultipleDataPointsSelection: false,
          filter: {
            type: 'none',
            value: 0
          }
        }
      },
      tooltip: {
        style: {
          fontSize: '12px',
          fontFamily: KTApp.getSettings()['font-family']
        },
        y: {
          formatter: function formatter(val) {
            return "$" + val + " thousands";
          }
        }
      },
      colors: [KTApp.getSettings()['colors']['theme']['light']['primary']],
      markers: {
        colors: [KTApp.getSettings()['colors']['theme']['light']['primary']],
        strokeColor: [KTApp.getSettings()['colors']['theme']['base']['primary']],
        strokeWidth: 3
      }
    };
    var chart = new ApexCharts(element, options);
    chart.render();
  };

  var _initStatsWidget10 = function _initStatsWidget10() {
    var element = document.getElementById("kt_stats_widget_10_chart");
    var height = parseInt(KTUtil.css(element, 'height'));
    var color = KTUtil.hasAttr(element, 'data-color') ? KTUtil.attr(element, 'data-color') : 'info';

    if (!element) {
      return;
    }

    var options = {
      series: [{
        name: 'Net Profit',
        data: [40, 40, 30, 30, 35, 35, 50]
      }],
      chart: {
        type: 'area',
        height: height,
        toolbar: {
          show: false
        },
        zoom: {
          enabled: false
        },
        sparkline: {
          enabled: true
        }
      },
      plotOptions: {},
      legend: {
        show: false
      },
      dataLabels: {
        enabled: false
      },
      fill: {
        type: 'solid',
        opacity: 1
      },
      stroke: {
        curve: 'smooth',
        show: true,
        width: 3,
        colors: [KTApp.getSettings()['colors']['theme']['base'][color]]
      },
      xaxis: {
        categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        labels: {
          show: false,
          style: {
            colors: KTApp.getSettings()['colors']['gray']['gray-500'],
            fontSize: '12px',
            fontFamily: KTApp.getSettings()['font-family']
          }
        },
        crosshairs: {
          show: false,
          position: 'front',
          stroke: {
            color: KTApp.getSettings()['colors']['gray']['gray-300'],
            width: 1,
            dashArray: 3
          }
        },
        tooltip: {
          enabled: true,
          formatter: undefined,
          offsetY: 0,
          style: {
            fontSize: '12px',
            fontFamily: KTApp.getSettings()['font-family']
          }
        }
      },
      yaxis: {
        min: 0,
        max: 55,
        labels: {
          show: false,
          style: {
            colors: KTApp.getSettings()['colors']['gray']['gray-500'],
            fontSize: '12px',
            fontFamily: KTApp.getSettings()['font-family']
          }
        }
      },
      states: {
        normal: {
          filter: {
            type: 'none',
            value: 0
          }
        },
        hover: {
          filter: {
            type: 'none',
            value: 0
          }
        },
        active: {
          allowMultipleDataPointsSelection: false,
          filter: {
            type: 'none',
            value: 0
          }
        }
      },
      tooltip: {
        style: {
          fontSize: '12px',
          fontFamily: KTApp.getSettings()['font-family']
        },
        y: {
          formatter: function formatter(val) {
            return "$" + val + " thousands";
          }
        }
      },
      colors: [KTApp.getSettings()['colors']['theme']['light'][color]],
      markers: {
        colors: [KTApp.getSettings()['colors']['theme']['light'][color]],
        strokeColor: [KTApp.getSettings()['colors']['theme']['base'][color]],
        strokeWidth: 3
      }
    };
    var chart = new ApexCharts(element, options);
    chart.render();
  };

  var _initStatsWidget11 = function _initStatsWidget11() {
    var element = document.getElementById("kt_stats_widget_11_chart");
    var height = parseInt(KTUtil.css(element, 'height'));
    var color = KTUtil.hasAttr(element, 'data-color') ? KTUtil.attr(element, 'data-color') : 'success';

    if (!element) {
      return;
    }

    var options = {
      series: [{
        name: 'Net Profit',
        data: [40, 40, 30, 30, 35, 35, 50]
      }],
      chart: {
        type: 'area',
        height: 150,
        toolbar: {
          show: false
        },
        zoom: {
          enabled: false
        },
        sparkline: {
          enabled: true
        }
      },
      plotOptions: {},
      legend: {
        show: false
      },
      dataLabels: {
        enabled: false
      },
      fill: {
        type: 'solid',
        opacity: 1
      },
      stroke: {
        curve: 'smooth',
        show: true,
        width: 3,
        colors: [KTApp.getSettings()['colors']['theme']['base'][color]]
      },
      xaxis: {
        categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Aug', 'Sep'],
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        labels: {
          show: false,
          style: {
            colors: KTApp.getSettings()['colors']['gray']['gray-500'],
            fontSize: '12px',
            fontFamily: KTApp.getSettings()['font-family']
          }
        },
        crosshairs: {
          show: false,
          position: 'front',
          stroke: {
            color: KTApp.getSettings()['colors']['gray']['gray-300'],
            width: 1,
            dashArray: 3
          }
        },
        tooltip: {
          enabled: true,
          formatter: undefined,
          offsetY: 0,
          style: {
            fontSize: '12px',
            fontFamily: KTApp.getSettings()['font-family']
          }
        }
      },
      yaxis: {
        min: 0,
        max: 55,
        labels: {
          show: false,
          style: {
            colors: KTApp.getSettings()['colors']['gray']['gray-500'],
            fontSize: '12px',
            fontFamily: KTApp.getSettings()['font-family']
          }
        }
      },
      states: {
        normal: {
          filter: {
            type: 'none',
            value: 0
          }
        },
        hover: {
          filter: {
            type: 'none',
            value: 0
          }
        },
        active: {
          allowMultipleDataPointsSelection: false,
          filter: {
            type: 'none',
            value: 0
          }
        }
      },
      tooltip: {
        style: {
          fontSize: '12px',
          fontFamily: KTApp.getSettings()['font-family']
        },
        y: {
          formatter: function formatter(val) {
            return "$" + val + " thousands";
          }
        }
      },
      colors: [KTApp.getSettings()['colors']['theme']['light'][color]],
      markers: {
        colors: [KTApp.getSettings()['colors']['theme']['light'][color]],
        strokeColor: [KTApp.getSettings()['colors']['theme']['base'][color]],
        strokeWidth: 3
      }
    };
    var chart = new ApexCharts(element, options);
    chart.render();
  };

  var _initStatsWidget12 = function _initStatsWidget12() {
    var element = document.getElementById("kt_stats_widget_12_chart");
    var height = parseInt(KTUtil.css(element, 'height'));
    var color = KTUtil.hasAttr(element, 'data-color') ? KTUtil.attr(element, 'data-color') : 'primary';

    if (!element) {
      return;
    }

    var options = {
      series: [{
        name: 'Net Profit',
        data: [40, 40, 30, 30, 35, 35, 50]
      }],
      chart: {
        type: 'area',
        height: height,
        toolbar: {
          show: false
        },
        zoom: {
          enabled: false
        },
        sparkline: {
          enabled: true
        }
      },
      plotOptions: {},
      legend: {
        show: false
      },
      dataLabels: {
        enabled: false
      },
      fill: {
        type: 'solid',
        opacity: 1
      },
      stroke: {
        curve: 'smooth',
        show: true,
        width: 3,
        colors: [KTApp.getSettings()['colors']['theme']['base'][color]]
      },
      xaxis: {
        categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Aug', 'Sep'],
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        labels: {
          show: false,
          style: {
            colors: KTApp.getSettings()['colors']['gray']['gray-500'],
            fontSize: '12px',
            fontFamily: KTApp.getSettings()['font-family']
          }
        },
        crosshairs: {
          show: false,
          position: 'front',
          stroke: {
            color: KTApp.getSettings()['colors']['gray']['gray-300'],
            width: 1,
            dashArray: 3
          }
        },
        tooltip: {
          enabled: true,
          formatter: undefined,
          offsetY: 0,
          style: {
            fontSize: '12px',
            fontFamily: KTApp.getSettings()['font-family']
          }
        }
      },
      yaxis: {
        min: 0,
        max: 55,
        labels: {
          show: false,
          style: {
            colors: KTApp.getSettings()['colors']['gray']['gray-500'],
            fontSize: '12px',
            fontFamily: KTApp.getSettings()['font-family']
          }
        }
      },
      states: {
        normal: {
          filter: {
            type: 'none',
            value: 0
          }
        },
        hover: {
          filter: {
            type: 'none',
            value: 0
          }
        },
        active: {
          allowMultipleDataPointsSelection: false,
          filter: {
            type: 'none',
            value: 0
          }
        }
      },
      tooltip: {
        style: {
          fontSize: '12px',
          fontFamily: KTApp.getSettings()['font-family']
        },
        y: {
          formatter: function formatter(val) {
            return "$" + val + " thousands";
          }
        }
      },
      colors: [KTApp.getSettings()['colors']['theme']['light'][color]],
      markers: {
        colors: [KTApp.getSettings()['colors']['theme']['light'][color]],
        strokeColor: [KTApp.getSettings()['colors']['theme']['base'][color]],
        strokeWidth: 3
      }
    };
    var chart = new ApexCharts(element, options);
    chart.render();
  }; // Charts widgets


  var _initChartsWidget1 = function _initChartsWidget1() {
    var element = document.getElementById("kt_charts_widget_1_chart");

    if (!element) {
      return;
    }

    var options = {
      series: [{
        name: 'Net Profit',
        data: [44, 55, 57, 56, 61, 58]
      }, {
        name: 'Revenue',
        data: [76, 85, 101, 98, 87, 105]
      }],
      chart: {
        type: 'bar',
        height: 350,
        toolbar: {
          show: false
        }
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: ['30%'],
          endingShape: 'rounded'
        }
      },
      legend: {
        show: false
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
      },
      xaxis: {
        categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        labels: {
          style: {
            colors: KTApp.getSettings()['colors']['gray']['gray-500'],
            fontSize: '12px',
            fontFamily: KTApp.getSettings()['font-family']
          }
        }
      },
      yaxis: {
        labels: {
          style: {
            colors: KTApp.getSettings()['colors']['gray']['gray-500'],
            fontSize: '12px',
            fontFamily: KTApp.getSettings()['font-family']
          }
        }
      },
      fill: {
        opacity: 1
      },
      states: {
        normal: {
          filter: {
            type: 'none',
            value: 0
          }
        },
        hover: {
          filter: {
            type: 'none',
            value: 0
          }
        },
        active: {
          allowMultipleDataPointsSelection: false,
          filter: {
            type: 'none',
            value: 0
          }
        }
      },
      tooltip: {
        style: {
          fontSize: '12px',
          fontFamily: KTApp.getSettings()['font-family']
        },
        y: {
          formatter: function formatter(val) {
            return "$" + val + " thousands";
          }
        }
      },
      colors: [KTApp.getSettings()['colors']['theme']['base']['success'], KTApp.getSettings()['colors']['gray']['gray-300']],
      grid: {
        borderColor: KTApp.getSettings()['colors']['gray']['gray-200'],
        strokeDashArray: 4,
        yaxis: {
          lines: {
            show: true
          }
        }
      }
    };
    var chart = new ApexCharts(element, options);
    chart.render();
  };

  var _initChartsWidget2 = function _initChartsWidget2() {
    var element = document.getElementById("kt_charts_widget_2_chart");

    if (!element) {
      return;
    }

    var options = {
      series: [{
        name: 'Net Profit',
        data: [44, 55, 57, 56, 61, 58]
      }, {
        name: 'Revenue',
        data: [76, 85, 101, 98, 87, 105]
      }],
      chart: {
        type: 'bar',
        height: 350,
        toolbar: {
          show: false
        }
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: ['30%'],
          endingShape: 'rounded'
        }
      },
      legend: {
        show: false
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
      },
      xaxis: {
        categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        labels: {
          style: {
            colors: KTApp.getSettings()['colors']['gray']['gray-500'],
            fontSize: '12px',
            fontFamily: KTApp.getSettings()['font-family']
          }
        }
      },
      yaxis: {
        labels: {
          style: {
            colors: KTApp.getSettings()['colors']['gray']['gray-500'],
            fontSize: '12px',
            fontFamily: KTApp.getSettings()['font-family']
          }
        }
      },
      fill: {
        opacity: 1
      },
      states: {
        normal: {
          filter: {
            type: 'none',
            value: 0
          }
        },
        hover: {
          filter: {
            type: 'none',
            value: 0
          }
        },
        active: {
          allowMultipleDataPointsSelection: false,
          filter: {
            type: 'none',
            value: 0
          }
        }
      },
      tooltip: {
        style: {
          fontSize: '12px',
          fontFamily: KTApp.getSettings()['font-family']
        },
        y: {
          formatter: function formatter(val) {
            return "$" + val + " thousands";
          }
        }
      },
      colors: [KTApp.getSettings()['colors']['theme']['base']['warning'], KTApp.getSettings()['colors']['gray']['gray-300']],
      grid: {
        borderColor: KTApp.getSettings()['colors']['gray']['gray-200'],
        strokeDashArray: 4,
        yaxis: {
          lines: {
            show: true
          }
        }
      }
    };
    var chart = new ApexCharts(element, options);
    chart.render();
  };

  var _initChartsWidget3 = function _initChartsWidget3() {
    var element = document.getElementById("kt_charts_widget_3_chart");

    if (!element) {
      return;
    }

    var options = {
      series: [{
        name: 'Net Profit',
        data: [30, 40, 40, 90, 90, 70, 70]
      }],
      chart: {
        type: 'area',
        height: 350,
        toolbar: {
          show: false
        }
      },
      plotOptions: {},
      legend: {
        show: false
      },
      dataLabels: {
        enabled: false
      },
      fill: {
        type: 'solid',
        opacity: 1
      },
      stroke: {
        curve: 'smooth',
        show: true,
        width: 3,
        colors: [KTApp.getSettings()['colors']['theme']['base']['info']]
      },
      xaxis: {
        categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        labels: {
          style: {
            colors: KTApp.getSettings()['colors']['gray']['gray-500'],
            fontSize: '12px',
            fontFamily: KTApp.getSettings()['font-family']
          }
        },
        crosshairs: {
          position: 'front',
          stroke: {
            color: KTApp.getSettings()['colors']['theme']['base']['info'],
            width: 1,
            dashArray: 3
          }
        },
        tooltip: {
          enabled: true,
          formatter: undefined,
          offsetY: 0,
          style: {
            fontSize: '12px',
            fontFamily: KTApp.getSettings()['font-family']
          }
        }
      },
      yaxis: {
        labels: {
          style: {
            colors: KTApp.getSettings()['colors']['gray']['gray-500'],
            fontSize: '12px',
            fontFamily: KTApp.getSettings()['font-family']
          }
        }
      },
      states: {
        normal: {
          filter: {
            type: 'none',
            value: 0
          }
        },
        hover: {
          filter: {
            type: 'none',
            value: 0
          }
        },
        active: {
          allowMultipleDataPointsSelection: false,
          filter: {
            type: 'none',
            value: 0
          }
        }
      },
      tooltip: {
        style: {
          fontSize: '12px',
          fontFamily: KTApp.getSettings()['font-family']
        },
        y: {
          formatter: function formatter(val) {
            return "$" + val + " thousands";
          }
        }
      },
      colors: [KTApp.getSettings()['colors']['theme']['light']['info']],
      grid: {
        borderColor: KTApp.getSettings()['colors']['gray']['gray-200'],
        strokeDashArray: 4,
        yaxis: {
          lines: {
            show: true
          }
        }
      },
      markers: {
        //size: 5,
        //colors: [KTApp.getSettings()['colors']['theme']['light']['danger']],
        strokeColor: KTApp.getSettings()['colors']['theme']['base']['info'],
        strokeWidth: 3
      }
    };
    var chart = new ApexCharts(element, options);
    chart.render();
  };

  var _initChartsWidget4 = function _initChartsWidget4() {
    var element = document.getElementById("kt_charts_widget_4_chart");

    if (!element) {
      return;
    }

    var options = {
      series: [{
        name: 'Net Profit',
        data: [60, 50, 80, 40, 100, 60]
      }, {
        name: 'Revenue',
        data: [70, 60, 110, 40, 50, 70]
      }],
      chart: {
        type: 'area',
        height: 350,
        toolbar: {
          show: false
        }
      },
      plotOptions: {},
      legend: {
        show: false
      },
      dataLabels: {
        enabled: false
      },
      fill: {
        type: 'solid',
        opacity: 1
      },
      stroke: {
        curve: 'smooth'
      },
      xaxis: {
        categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        labels: {
          style: {
            colors: KTApp.getSettings()['colors']['gray']['gray-500'],
            fontSize: '12px',
            fontFamily: KTApp.getSettings()['font-family']
          }
        },
        crosshairs: {
          position: 'front',
          stroke: {
            color: KTApp.getSettings()['colors']['theme']['light']['success'],
            width: 1,
            dashArray: 3
          }
        },
        tooltip: {
          enabled: true,
          formatter: undefined,
          offsetY: 0,
          style: {
            fontSize: '12px',
            fontFamily: KTApp.getSettings()['font-family']
          }
        }
      },
      yaxis: {
        labels: {
          style: {
            colors: KTApp.getSettings()['colors']['gray']['gray-500'],
            fontSize: '12px',
            fontFamily: KTApp.getSettings()['font-family']
          }
        }
      },
      states: {
        normal: {
          filter: {
            type: 'none',
            value: 0
          }
        },
        hover: {
          filter: {
            type: 'none',
            value: 0
          }
        },
        active: {
          allowMultipleDataPointsSelection: false,
          filter: {
            type: 'none',
            value: 0
          }
        }
      },
      tooltip: {
        style: {
          fontSize: '12px',
          fontFamily: KTApp.getSettings()['font-family']
        },
        y: {
          formatter: function formatter(val) {
            return "$" + val + " thousands";
          }
        }
      },
      colors: [KTApp.getSettings()['colors']['theme']['base']['success'], KTApp.getSettings()['colors']['theme']['base']['warning']],
      grid: {
        borderColor: KTApp.getSettings()['colors']['gray']['gray-200'],
        strokeDashArray: 4,
        yaxis: {
          lines: {
            show: true
          }
        }
      },
      markers: {
        colors: [KTApp.getSettings()['colors']['theme']['light']['success'], KTApp.getSettings()['colors']['theme']['light']['warning']],
        strokeColor: [KTApp.getSettings()['colors']['theme']['light']['success'], KTApp.getSettings()['colors']['theme']['light']['warning']],
        strokeWidth: 3
      }
    };
    var chart = new ApexCharts(element, options);
    chart.render();
  };

  var _initChartsWidget5 = function _initChartsWidget5() {
    var element = document.getElementById("kt_charts_widget_5_chart");

    if (!element) {
      return;
    }

    var options = {
      series: [{
        name: 'Net Profit',
        data: [40, 50, 65, 70, 50, 30]
      }, {
        name: 'Revenue',
        data: [-30, -40, -55, -60, -40, -20]
      }],
      chart: {
        type: 'bar',
        stacked: true,
        height: 350,
        toolbar: {
          show: false
        }
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: ['12%'],
          endingShape: 'rounded'
        }
      },
      legend: {
        show: false
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
      },
      xaxis: {
        categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        labels: {
          style: {
            colors: KTApp.getSettings()['colors']['gray']['gray-500'],
            fontSize: '12px',
            fontFamily: KTApp.getSettings()['font-family']
          }
        }
      },
      yaxis: {
        min: -80,
        max: 80,
        labels: {
          style: {
            colors: KTApp.getSettings()['colors']['gray']['gray-500'],
            fontSize: '12px',
            fontFamily: KTApp.getSettings()['font-family']
          }
        }
      },
      fill: {
        opacity: 1
      },
      states: {
        normal: {
          filter: {
            type: 'none',
            value: 0
          }
        },
        hover: {
          filter: {
            type: 'none',
            value: 0
          }
        },
        active: {
          allowMultipleDataPointsSelection: false,
          filter: {
            type: 'none',
            value: 0
          }
        }
      },
      tooltip: {
        style: {
          fontSize: '12px',
          fontFamily: KTApp.getSettings()['font-family']
        },
        y: {
          formatter: function formatter(val) {
            return "$" + val + " thousands";
          }
        }
      },
      colors: [KTApp.getSettings()['colors']['theme']['base']['info'], KTApp.getSettings()['colors']['theme']['base']['primary']],
      grid: {
        borderColor: KTApp.getSettings()['colors']['gray']['gray-200'],
        strokeDashArray: 4,
        yaxis: {
          lines: {
            show: true
          }
        }
      }
    };
    var chart = new ApexCharts(element, options);
    chart.render();
  };

  var _initChartsWidget6 = function _initChartsWidget6() {
    var element = document.getElementById("kt_charts_widget_6_chart");

    if (!element) {
      return;
    }

    var options = {
      series: [{
        name: 'Net Profit',
        type: 'bar',
        stacked: true,
        data: [40, 50, 65, 70, 50, 30]
      }, {
        name: 'Revenue',
        type: 'bar',
        stacked: true,
        data: [20, 20, 25, 30, 30, 20]
      }, {
        name: 'Expenses',
        type: 'area',
        data: [50, 80, 60, 90, 50, 70]
      }],
      chart: {
        stacked: true,
        height: 350,
        toolbar: {
          show: false
        }
      },
      plotOptions: {
        bar: {
          stacked: true,
          horizontal: false,
          endingShape: 'rounded',
          columnWidth: ['12%']
        }
      },
      legend: {
        show: false
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth',
        show: true,
        width: 2,
        colors: ['transparent']
      },
      xaxis: {
        categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        labels: {
          style: {
            colors: KTApp.getSettings()['colors']['gray']['gray-500'],
            fontSize: '12px',
            fontFamily: KTApp.getSettings()['font-family']
          }
        }
      },
      yaxis: {
        max: 120,
        labels: {
          style: {
            colors: KTApp.getSettings()['colors']['gray']['gray-500'],
            fontSize: '12px',
            fontFamily: KTApp.getSettings()['font-family']
          }
        }
      },
      fill: {
        opacity: 1
      },
      states: {
        normal: {
          filter: {
            type: 'none',
            value: 0
          }
        },
        hover: {
          filter: {
            type: 'none',
            value: 0
          }
        },
        active: {
          allowMultipleDataPointsSelection: false,
          filter: {
            type: 'none',
            value: 0
          }
        }
      },
      tooltip: {
        style: {
          fontSize: '12px',
          fontFamily: KTApp.getSettings()['font-family']
        },
        y: {
          formatter: function formatter(val) {
            return "$" + val + " thousands";
          }
        }
      },
      colors: [KTApp.getSettings()['colors']['theme']['base']['info'], KTApp.getSettings()['colors']['theme']['base']['primary'], KTApp.getSettings()['colors']['theme']['light']['primary']],
      grid: {
        borderColor: KTApp.getSettings()['colors']['gray']['gray-200'],
        strokeDashArray: 4,
        yaxis: {
          lines: {
            show: true
          }
        },
        padding: {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0
        }
      }
    };
    var chart = new ApexCharts(element, options);
    chart.render();
  };

  var _initChartsWidget7 = function _initChartsWidget7() {
    var element = document.getElementById("kt_charts_widget_7_chart");

    if (!element) {
      return;
    }

    var options = {
      series: [{
        name: 'Net Profit',
        data: [30, 30, 50, 50, 35, 35]
      }, {
        name: 'Revenue',
        data: [55, 20, 20, 20, 70, 70]
      }, {
        name: 'Expenses',
        data: [60, 60, 40, 40, 30, 30]
      }],
      chart: {
        type: 'area',
        height: 300,
        toolbar: {
          show: false
        },
        zoom: {
          enabled: false
        },
        sparkline: {
          enabled: true
        }
      },
      plotOptions: {},
      legend: {
        show: false
      },
      dataLabels: {
        enabled: false
      },
      fill: {
        type: 'solid',
        opacity: 1
      },
      stroke: {
        curve: 'smooth',
        show: true,
        width: 2,
        colors: [KTApp.getSettings()['colors']['theme']['base']['warning'], 'transparent', 'transparent']
      },
      xaxis: {
        categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        labels: {
          show: false,
          style: {
            colors: KTApp.getSettings()['colors']['gray']['gray-500'],
            fontSize: '12px',
            fontFamily: KTApp.getSettings()['font-family']
          }
        },
        crosshairs: {
          show: false,
          position: 'front',
          stroke: {
            color: KTApp.getSettings()['colors']['gray']['gray-300'],
            width: 1,
            dashArray: 3
          }
        },
        tooltip: {
          enabled: true,
          formatter: undefined,
          offsetY: 0,
          style: {
            fontSize: '12px',
            fontFamily: KTApp.getSettings()['font-family']
          }
        }
      },
      yaxis: {
        labels: {
          show: false,
          style: {
            colors: KTApp.getSettings()['colors']['gray']['gray-500'],
            fontSize: '12px',
            fontFamily: KTApp.getSettings()['font-family']
          }
        }
      },
      states: {
        normal: {
          filter: {
            type: 'none',
            value: 0
          }
        },
        hover: {
          filter: {
            type: 'none',
            value: 0
          }
        },
        active: {
          allowMultipleDataPointsSelection: false,
          filter: {
            type: 'none',
            value: 0
          }
        }
      },
      tooltip: {
        style: {
          fontSize: '12px',
          fontFamily: KTApp.getSettings()['font-family']
        },
        y: {
          formatter: function formatter(val) {
            return "$" + val + " thousands";
          }
        }
      },
      colors: [KTApp.getSettings()['colors']['theme']['light']['warning'], KTApp.getSettings()['colors']['theme']['light']['info'], KTApp.getSettings()['colors']['gray']['gray-100']],
      grid: {
        borderColor: KTApp.getSettings()['colors']['gray']['gray-200'],
        strokeDashArray: 4,
        yaxis: {
          lines: {
            show: true
          }
        }
      },
      markers: {
        colors: [KTApp.getSettings()['colors']['theme']['light']['warning'], KTApp.getSettings()['colors']['theme']['light']['info'], KTApp.getSettings()['colors']['gray']['gray-100']],
        strokeColor: [KTApp.getSettings()['colors']['theme']['base']['warning'], KTApp.getSettings()['colors']['theme']['base']['info'], KTApp.getSettings()['colors']['gray']['gray-500']],
        strokeWidth: 3
      }
    };
    var chart = new ApexCharts(element, options);
    chart.render();
  };

  var _initChartsWidget8 = function _initChartsWidget8() {
    var element = document.getElementById("kt_charts_widget_8_chart");

    if (!element) {
      return;
    }

    var options = {
      series: [{
        name: 'Net Profit',
        data: [30, 30, 50, 50, 35, 35]
      }, {
        name: 'Revenue',
        data: [55, 20, 20, 20, 70, 70]
      }, {
        name: 'Expenses',
        data: [60, 60, 40, 40, 30, 30]
      }],
      chart: {
        type: 'area',
        height: 300,
        toolbar: {
          show: false
        },
        zoom: {
          enabled: false
        },
        sparkline: {
          enabled: true
        }
      },
      plotOptions: {},
      legend: {
        show: false
      },
      dataLabels: {
        enabled: false
      },
      fill: {
        type: 'solid',
        opacity: 1
      },
      stroke: {
        curve: 'smooth',
        show: true,
        width: 2,
        colors: ['transparent', 'transparent', 'transparent']
      },
      xaxis: {
        x: 0,
        offsetX: 0,
        offsetY: 0,
        padding: {
          left: 0,
          right: 0,
          top: 0
        },
        categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        labels: {
          show: false,
          style: {
            colors: KTApp.getSettings()['colors']['gray']['gray-500'],
            fontSize: '12px',
            fontFamily: KTApp.getSettings()['font-family']
          }
        },
        crosshairs: {
          show: false,
          position: 'front',
          stroke: {
            color: KTApp.getSettings()['colors']['gray']['gray-300'],
            width: 1,
            dashArray: 3
          }
        },
        tooltip: {
          enabled: true,
          formatter: undefined,
          offsetY: 0,
          style: {
            fontSize: '12px',
            fontFamily: KTApp.getSettings()['font-family']
          }
        }
      },
      yaxis: {
        y: 0,
        offsetX: 0,
        offsetY: 0,
        padding: {
          left: 0,
          right: 0
        },
        labels: {
          show: false,
          style: {
            colors: KTApp.getSettings()['colors']['gray']['gray-500'],
            fontSize: '12px',
            fontFamily: KTApp.getSettings()['font-family']
          }
        }
      },
      states: {
        normal: {
          filter: {
            type: 'none',
            value: 0
          }
        },
        hover: {
          filter: {
            type: 'none',
            value: 0
          }
        },
        active: {
          allowMultipleDataPointsSelection: false,
          filter: {
            type: 'none',
            value: 0
          }
        }
      },
      tooltip: {
        style: {
          fontSize: '12px',
          fontFamily: KTApp.getSettings()['font-family']
        },
        y: {
          formatter: function formatter(val) {
            return "$" + val + " thousands";
          }
        }
      },
      colors: [KTApp.getSettings()['colors']['theme']['light']['success'], KTApp.getSettings()['colors']['theme']['light']['danger'], KTApp.getSettings()['colors']['theme']['light']['info']],
      grid: {
        borderColor: KTApp.getSettings()['colors']['gray']['gray-200'],
        strokeDashArray: 4,
        padding: {
          top: 0,
          bottom: 0,
          left: 0,
          right: 0
        }
      },
      markers: {
        colors: [KTApp.getSettings()['colors']['theme']['light']['success'], KTApp.getSettings()['colors']['theme']['light']['danger'], KTApp.getSettings()['colors']['theme']['light']['info']],
        strokeColor: [KTApp.getSettings()['colors']['theme']['base']['success'], KTApp.getSettings()['colors']['theme']['base']['danger'], KTApp.getSettings()['colors']['theme']['base']['info']],
        strokeWidth: 3
      }
    };
    var chart = new ApexCharts(element, options);
    chart.render();
  };

  var _initChartsWidget9 = function _initChartsWidget9() {
    var element = document.getElementById("kt_charts_widget_9_chart");

    if (!element) {
      return;
    }

    var options = {
      series: [{
        name: 'Net Profit',
        data: [20, 30, 45, 35, 25]
      }, {
        name: 'Revenue',
        data: [-20, -30, -45, -35, -25]
      }],
      chart: {
        type: 'bar',
        stacked: true,
        height: 350,
        toolbar: {
          show: false
        }
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: ['17%'],
          endingShape: 'rounded'
        }
      },
      legend: {
        show: false
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        width: 0,
        colors: ['transparent']
      },
      xaxis: {
        lines: {
          show: false
        },
        categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun'],
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        labels: {
          style: {
            colors: KTApp.getSettings()['colors']['gray']['gray-500'],
            fontSize: '12px',
            fontFamily: KTApp.getSettings()['font-family']
          }
        }
      },
      yaxis: {
        lines: {
          show: false
        },
        min: -50,
        max: 50,
        labels: {
          style: {
            colors: KTApp.getSettings()['colors']['gray']['gray-500'],
            fontSize: '12px',
            fontFamily: KTApp.getSettings()['font-family']
          }
        }
      },
      fill: {
        opacity: 1
      },
      states: {
        normal: {
          filter: {
            type: 'none',
            value: 0
          }
        },
        hover: {
          filter: {
            type: 'none',
            value: 0
          }
        },
        active: {
          allowMultipleDataPointsSelection: false,
          filter: {
            type: 'none',
            value: 0
          }
        }
      },
      tooltip: {
        style: {
          fontSize: '12px',
          fontFamily: KTApp.getSettings()['font-family']
        },
        y: {
          formatter: function formatter(val) {
            return "$" + val + " thousands";
          }
        }
      },
      colors: [KTApp.getSettings()['colors']['theme']['base']['info'], KTApp.getSettings()['colors']['theme']['base']['primary']],
      grid: {
        borderColor: KTApp.getSettings()['colors']['gray']['gray-200'],
        strokeDashArray: 4,
        yaxis: {
          lines: {
            show: true
          }
        }
      }
    };
    var chart = new ApexCharts(element, options);
    chart.render();
  }; // Mixed widgets


  var _initMixedWidget1 = function _initMixedWidget1() {
    var element = document.getElementById("kt_mixed_widget_1_chart");
    var height = parseInt(KTUtil.css(element, 'height'));

    if (!element) {
      return;
    }

    var strokeColor = '#D13647';
    var options = {
      series: [{
        name: 'Net Profit',
        data: [30, 45, 32, 70, 40, 40, 40]
      }],
      chart: {
        type: 'area',
        height: height,
        toolbar: {
          show: false
        },
        zoom: {
          enabled: false
        },
        sparkline: {
          enabled: true
        },
        dropShadow: {
          enabled: true,
          enabledOnSeries: undefined,
          top: 5,
          left: 0,
          blur: 3,
          color: strokeColor,
          opacity: 0.5
        }
      },
      plotOptions: {},
      legend: {
        show: false
      },
      dataLabels: {
        enabled: false
      },
      fill: {
        type: 'solid',
        opacity: 0
      },
      stroke: {
        curve: 'smooth',
        show: true,
        width: 3,
        colors: [strokeColor]
      },
      xaxis: {
        categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        labels: {
          show: false,
          style: {
            colors: KTApp.getSettings()['colors']['gray']['gray-500'],
            fontSize: '12px',
            fontFamily: KTApp.getSettings()['font-family']
          }
        },
        crosshairs: {
          show: false,
          position: 'front',
          stroke: {
            color: KTApp.getSettings()['colors']['gray']['gray-300'],
            width: 1,
            dashArray: 3
          }
        }
      },
      yaxis: {
        min: 0,
        max: 80,
        labels: {
          show: false,
          style: {
            colors: KTApp.getSettings()['colors']['gray']['gray-500'],
            fontSize: '12px',
            fontFamily: KTApp.getSettings()['font-family']
          }
        }
      },
      states: {
        normal: {
          filter: {
            type: 'none',
            value: 0
          }
        },
        hover: {
          filter: {
            type: 'none',
            value: 0
          }
        },
        active: {
          allowMultipleDataPointsSelection: false,
          filter: {
            type: 'none',
            value: 0
          }
        }
      },
      tooltip: {
        style: {
          fontSize: '12px',
          fontFamily: KTApp.getSettings()['font-family']
        },
        y: {
          formatter: function formatter(val) {
            return "$" + val + " thousands";
          }
        },
        marker: {
          show: false
        }
      },
      colors: ['transparent'],
      markers: {
        colors: [KTApp.getSettings()['colors']['theme']['light']['danger']],
        strokeColor: [strokeColor],
        strokeWidth: 3
      }
    };
    var chart = new ApexCharts(element, options);
    chart.render();
  };

  var _initMixedWidget2 = function _initMixedWidget2() {
    var element = document.getElementById("kt_mixed_widget_2_chart");
    var height = parseInt(KTUtil.css(element, 'height'));

    if (!element) {
      return;
    }

    var strokeColor = '#287ED7';
    var options = {
      series: [{
        name: 'Net Profit',
        data: [30, 45, 32, 70, 40, 40, 40]
      }],
      chart: {
        type: 'area',
        height: height,
        toolbar: {
          show: false
        },
        zoom: {
          enabled: false
        },
        sparkline: {
          enabled: true
        },
        dropShadow: {
          enabled: true,
          enabledOnSeries: undefined,
          top: 5,
          left: 0,
          blur: 3,
          color: strokeColor,
          opacity: 0.5
        }
      },
      plotOptions: {},
      legend: {
        show: false
      },
      dataLabels: {
        enabled: false
      },
      fill: {
        type: 'solid',
        opacity: 0
      },
      stroke: {
        curve: 'smooth',
        show: true,
        width: 3,
        colors: [strokeColor]
      },
      xaxis: {
        categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        labels: {
          show: false,
          style: {
            colors: KTApp.getSettings()['colors']['gray']['gray-500'],
            fontSize: '12px',
            fontFamily: KTApp.getSettings()['font-family']
          }
        },
        crosshairs: {
          show: false,
          position: 'front',
          stroke: {
            color: KTApp.getSettings()['colors']['gray']['gray-300'],
            width: 1,
            dashArray: 3
          }
        },
        tooltip: {
          enabled: true,
          formatter: undefined,
          offsetY: 0,
          style: {
            fontSize: '12px',
            fontFamily: KTApp.getSettings()['font-family']
          }
        }
      },
      yaxis: {
        min: 0,
        max: 80,
        labels: {
          show: false,
          style: {
            colors: KTApp.getSettings()['colors']['gray']['gray-500'],
            fontSize: '12px',
            fontFamily: KTApp.getSettings()['font-family']
          }
        }
      },
      states: {
        normal: {
          filter: {
            type: 'none',
            value: 0
          }
        },
        hover: {
          filter: {
            type: 'none',
            value: 0
          }
        },
        active: {
          allowMultipleDataPointsSelection: false,
          filter: {
            type: 'none',
            value: 0
          }
        }
      },
      tooltip: {
        style: {
          fontSize: '12px',
          fontFamily: KTApp.getSettings()['font-family']
        },
        y: {
          formatter: function formatter(val) {
            return "$" + val + " thousands";
          }
        },
        marker: {
          show: false
        }
      },
      colors: ['transparent'],
      markers: {
        colors: [KTApp.getSettings()['colors']['theme']['light']['info']],
        strokeColor: [strokeColor],
        strokeWidth: 3
      }
    };
    var chart = new ApexCharts(element, options);
    chart.render();
  };

  var _initMixedWidget3 = function _initMixedWidget3() {
    var element = document.getElementById("kt_mixed_widget_3_chart");
    var height = parseInt(KTUtil.css(element, 'height'));

    if (!element) {
      return;
    }

    var strokeColor = KTApp.getSettings()['colors']['theme']['base']['white'];
    var options = {
      series: [{
        name: 'Net Profit',
        data: [30, 45, 32, 70, 40, 40, 40]
      }],
      chart: {
        type: 'area',
        height: height,
        toolbar: {
          show: false
        },
        zoom: {
          enabled: false
        },
        sparkline: {
          enabled: true
        },
        dropShadow: {
          enabled: true,
          enabledOnSeries: undefined,
          top: 5,
          left: 0,
          blur: 3,
          color: strokeColor,
          opacity: 0.3
        }
      },
      plotOptions: {},
      legend: {
        show: false
      },
      dataLabels: {
        enabled: false
      },
      fill: {
        type: 'solid',
        opacity: 0
      },
      stroke: {
        curve: 'smooth',
        show: true,
        width: 3,
        colors: [strokeColor]
      },
      xaxis: {
        categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        labels: {
          show: false,
          style: {
            colors: KTApp.getSettings()['colors']['gray']['gray-500'],
            fontSize: '12px',
            fontFamily: KTApp.getSettings()['font-family']
          }
        },
        crosshairs: {
          show: false,
          position: 'front',
          stroke: {
            color: KTApp.getSettings()['colors']['gray']['gray-300'],
            width: 1,
            dashArray: 3
          }
        },
        tooltip: {
          enabled: true,
          formatter: undefined,
          offsetY: 0,
          style: {
            fontSize: '12px',
            fontFamily: KTApp.getSettings()['font-family']
          }
        }
      },
      yaxis: {
        min: 0,
        max: 80,
        labels: {
          show: false,
          style: {
            colors: KTApp.getSettings()['colors']['gray']['gray-500'],
            fontSize: '12px',
            fontFamily: KTApp.getSettings()['font-family']
          }
        }
      },
      states: {
        normal: {
          filter: {
            type: 'none',
            value: 0
          }
        },
        hover: {
          filter: {
            type: 'none',
            value: 0
          }
        },
        active: {
          allowMultipleDataPointsSelection: false,
          filter: {
            type: 'none',
            value: 0
          }
        }
      },
      tooltip: {
        style: {
          fontSize: '12px',
          fontFamily: KTApp.getSettings()['font-family']
        },
        y: {
          formatter: function formatter(val) {
            return "$" + val + " thousands";
          }
        },
        marker: {
          show: false
        }
      },
      colors: ['transparent'],
      markers: {
        colors: [KTApp.getSettings()['colors']['theme']['light']['dark']],
        strokeColor: [strokeColor],
        strokeWidth: 3
      }
    };
    var chart = new ApexCharts(element, options);
    chart.render();
  };

  var _initMixedWidget4 = function _initMixedWidget4() {
    var element = document.getElementById("kt_mixed_widget_4_chart");
    var height = parseInt(KTUtil.css(element, 'height'));

    if (!element) {
      return;
    }

    var options = {
      series: [{
        name: 'Net Profit',
        data: [35, 65, 75, 55, 45, 60, 55]
      }, {
        name: 'Revenue',
        data: [40, 70, 80, 60, 50, 65, 60]
      }],
      chart: {
        type: 'bar',
        height: height,
        toolbar: {
          show: false
        },
        sparkline: {
          enabled: true
        }
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: ['30%'],
          endingShape: 'rounded'
        }
      },
      legend: {
        show: false
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 1,
        colors: ['transparent']
      },
      xaxis: {
        categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        labels: {
          style: {
            colors: KTApp.getSettings()['colors']['gray']['gray-500'],
            fontSize: '12px',
            fontFamily: KTApp.getSettings()['font-family']
          }
        }
      },
      yaxis: {
        min: 0,
        max: 100,
        labels: {
          style: {
            colors: KTApp.getSettings()['colors']['gray']['gray-500'],
            fontSize: '12px',
            fontFamily: KTApp.getSettings()['font-family']
          }
        }
      },
      fill: {
        type: ['solid', 'solid'],
        opacity: [0.25, 1]
      },
      states: {
        normal: {
          filter: {
            type: 'none',
            value: 0
          }
        },
        hover: {
          filter: {
            type: 'none',
            value: 0
          }
        },
        active: {
          allowMultipleDataPointsSelection: false,
          filter: {
            type: 'none',
            value: 0
          }
        }
      },
      tooltip: {
        style: {
          fontSize: '12px',
          fontFamily: KTApp.getSettings()['font-family']
        },
        y: {
          formatter: function formatter(val) {
            return "$" + val + " thousands";
          }
        },
        marker: {
          show: false
        }
      },
      colors: ['#ffffff', '#ffffff'],
      grid: {
        borderColor: KTApp.getSettings()['colors']['gray']['gray-200'],
        strokeDashArray: 4,
        yaxis: {
          lines: {
            show: true
          }
        },
        padding: {
          left: 20,
          right: 20
        }
      }
    };
    var chart = new ApexCharts(element, options);
    chart.render();
  };

  var _initMixedWidget5 = function _initMixedWidget5() {
    var element = document.getElementById("kt_mixed_widget_5_chart");
    var height = parseInt(KTUtil.css(element, 'height'));

    if (!element) {
      return;
    }

    var options = {
      series: [{
        name: 'Net Profit',
        data: [35, 65, 75, 55, 45, 60, 55]
      }, {
        name: 'Revenue',
        data: [40, 70, 80, 60, 50, 65, 60]
      }],
      chart: {
        type: 'bar',
        height: height,
        toolbar: {
          show: false
        },
        sparkline: {
          enabled: true
        }
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: ['30%'],
          endingShape: 'rounded'
        }
      },
      legend: {
        show: false
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 1,
        colors: ['transparent']
      },
      xaxis: {
        categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        labels: {
          style: {
            colors: KTApp.getSettings()['colors']['gray']['gray-500'],
            fontSize: '12px',
            fontFamily: KTApp.getSettings()['font-family']
          }
        }
      },
      yaxis: {
        min: 0,
        max: 100,
        labels: {
          style: {
            colors: KTApp.getSettings()['colors']['gray']['gray-500'],
            fontSize: '12px',
            fontFamily: KTApp.getSettings()['font-family']
          }
        }
      },
      fill: {
        type: ['solid', 'solid'],
        opacity: [0.25, 1]
      },
      states: {
        normal: {
          filter: {
            type: 'none',
            value: 0
          }
        },
        hover: {
          filter: {
            type: 'none',
            value: 0
          }
        },
        active: {
          allowMultipleDataPointsSelection: false,
          filter: {
            type: 'none',
            value: 0
          }
        }
      },
      tooltip: {
        style: {
          fontSize: '12px',
          fontFamily: KTApp.getSettings()['font-family']
        },
        y: {
          formatter: function formatter(val) {
            return "$" + val + " thousands";
          }
        },
        marker: {
          show: false
        }
      },
      colors: ['#ffffff', '#ffffff'],
      grid: {
        borderColor: KTApp.getSettings()['colors']['gray']['gray-200'],
        strokeDashArray: 4,
        yaxis: {
          lines: {
            show: true
          }
        },
        padding: {
          left: 20,
          right: 20
        }
      }
    };
    var chart = new ApexCharts(element, options);
    chart.render();
  };

  var _initMixedWidget6 = function _initMixedWidget6() {
    var element = document.getElementById("kt_mixed_widget_6_chart");
    var height = parseInt(KTUtil.css(element, 'height'));

    if (!element) {
      return;
    }

    var options = {
      series: [{
        name: 'Net Profit',
        data: [35, 65, 75, 55, 45, 60, 55]
      }, {
        name: 'Revenue',
        data: [40, 70, 80, 60, 50, 65, 60]
      }],
      chart: {
        type: 'bar',
        height: height,
        toolbar: {
          show: false
        },
        sparkline: {
          enabled: true
        }
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: ['30%'],
          endingShape: 'rounded'
        }
      },
      legend: {
        show: false
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 1,
        colors: ['transparent']
      },
      xaxis: {
        categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        labels: {
          style: {
            colors: KTApp.getSettings()['colors']['gray']['gray-500'],
            fontSize: '12px',
            fontFamily: KTApp.getSettings()['font-family']
          }
        }
      },
      yaxis: {
        min: 0,
        max: 100,
        labels: {
          style: {
            colors: KTApp.getSettings()['colors']['gray']['gray-500'],
            fontSize: '12px',
            fontFamily: KTApp.getSettings()['font-family']
          }
        }
      },
      fill: {
        type: ['solid', 'solid'],
        opacity: [0.25, 1]
      },
      states: {
        normal: {
          filter: {
            type: 'none',
            value: 0
          }
        },
        hover: {
          filter: {
            type: 'none',
            value: 0
          }
        },
        active: {
          allowMultipleDataPointsSelection: false,
          filter: {
            type: 'none',
            value: 0
          }
        }
      },
      tooltip: {
        style: {
          fontSize: '12px',
          fontFamily: KTApp.getSettings()['font-family']
        },
        y: {
          formatter: function formatter(val) {
            return "$" + val + " thousands";
          }
        },
        marker: {
          show: false
        }
      },
      colors: ['#ffffff', '#ffffff'],
      grid: {
        borderColor: KTApp.getSettings()['colors']['gray']['gray-200'],
        strokeDashArray: 4,
        yaxis: {
          lines: {
            show: true
          }
        },
        padding: {
          left: 20,
          right: 20
        }
      }
    };
    var chart = new ApexCharts(element, options);
    chart.render();
  };

  var _initMixedWidget13 = function _initMixedWidget13() {
    var element = document.getElementById("kt_mixed_widget_13_chart");
    var height = parseInt(KTUtil.css(element, 'height'));

    if (!element) {
      return;
    }

    var options = {
      series: [{
        name: 'Net Profit',
        data: [30, 25, 45, 30, 55, 55]
      }],
      chart: {
        type: 'area',
        height: height,
        toolbar: {
          show: false
        },
        zoom: {
          enabled: false
        },
        sparkline: {
          enabled: true
        }
      },
      plotOptions: {},
      legend: {
        show: false
      },
      dataLabels: {
        enabled: false
      },
      fill: {
        type: 'solid',
        opacity: 1
      },
      stroke: {
        curve: 'smooth',
        show: true,
        width: 3,
        colors: [KTApp.getSettings()['colors']['theme']['base']['info']]
      },
      xaxis: {
        categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        labels: {
          show: false,
          style: {
            colors: KTApp.getSettings()['colors']['gray']['gray-500'],
            fontSize: '12px',
            fontFamily: KTApp.getSettings()['font-family']
          }
        },
        crosshairs: {
          show: false,
          position: 'front',
          stroke: {
            color: KTApp.getSettings()['colors']['gray']['gray-300'],
            width: 1,
            dashArray: 3
          }
        },
        tooltip: {
          enabled: true,
          formatter: undefined,
          offsetY: 0,
          style: {
            fontSize: '12px',
            fontFamily: KTApp.getSettings()['font-family']
          }
        }
      },
      yaxis: {
        min: 0,
        max: 60,
        labels: {
          show: false,
          style: {
            colors: KTApp.getSettings()['colors']['gray']['gray-500'],
            fontSize: '12px',
            fontFamily: KTApp.getSettings()['font-family']
          }
        }
      },
      states: {
        normal: {
          filter: {
            type: 'none',
            value: 0
          }
        },
        hover: {
          filter: {
            type: 'none',
            value: 0
          }
        },
        active: {
          allowMultipleDataPointsSelection: false,
          filter: {
            type: 'none',
            value: 0
          }
        }
      },
      tooltip: {
        style: {
          fontSize: '12px',
          fontFamily: KTApp.getSettings()['font-family']
        },
        y: {
          formatter: function formatter(val) {
            return "$" + val + " thousands";
          }
        }
      },
      colors: [KTApp.getSettings()['colors']['theme']['light']['info']],
      markers: {
        colors: [KTApp.getSettings()['colors']['theme']['light']['info']],
        strokeColor: [KTApp.getSettings()['colors']['theme']['base']['info']],
        strokeWidth: 3
      }
    };
    var chart = new ApexCharts(element, options);
    chart.render();
  };

  var _initMixedWidget14 = function _initMixedWidget14() {
    var element = document.getElementById("kt_mixed_widget_14_chart");
    var height = parseInt(KTUtil.css(element, 'height'));

    if (!element) {
      return;
    }

    var options = {
      series: [74],
      chart: {
        height: height,
        type: 'radialBar'
      },
      plotOptions: {
        radialBar: {
          hollow: {
            margin: 0,
            size: "65%"
          },
          dataLabels: {
            showOn: "always",
            name: {
              show: false,
              fontWeight: '700'
            },
            value: {
              color: KTApp.getSettings()['colors']['gray']['gray-700'],
              fontSize: "30px",
              fontWeight: '700',
              offsetY: 12,
              show: true
            }
          },
          track: {
            background: KTApp.getSettings()['colors']['theme']['light']['success'],
            strokeWidth: '100%'
          }
        }
      },
      colors: [KTApp.getSettings()['colors']['theme']['base']['success']],
      stroke: {
        lineCap: "round"
      },
      labels: ["Progress"]
    };
    var chart = new ApexCharts(element, options);
    chart.render();
  };

  var _initMixedWidget15 = function _initMixedWidget15() {
    var element = document.getElementById("kt_mixed_widget_15_chart");
    var height = parseInt(KTUtil.css(element, 'height'));

    if (!element) {
      return;
    }

    var options = {
      series: [{
        name: 'Net Profit',
        data: [30, 30, 60, 25, 25, 40]
      }],
      chart: {
        type: 'area',
        height: height,
        toolbar: {
          show: false
        },
        zoom: {
          enabled: false
        },
        sparkline: {
          enabled: true
        }
      },
      plotOptions: {},
      legend: {
        show: false
      },
      dataLabels: {
        enabled: false
      },
      fill: {
        type: 'gradient',
        opacity: 1,
        gradient: {
          type: "vertical",
          shadeIntensity: 0.5,
          gradientToColors: undefined,
          inverseColors: true,
          opacityFrom: 1,
          opacityTo: 0.375,
          stops: [25, 50, 100],
          colorStops: []
        }
      },
      stroke: {
        curve: 'smooth',
        show: true,
        width: 3,
        colors: [KTApp.getSettings()['colors']['theme']['base']['danger']]
      },
      xaxis: {
        categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        labels: {
          show: false,
          style: {
            colors: KTApp.getSettings()['colors']['gray']['gray-500'],
            fontSize: '12px',
            fontFamily: KTApp.getSettings()['font-family']
          }
        },
        crosshairs: {
          show: false,
          position: 'front',
          stroke: {
            color: KTApp.getSettings()['colors']['gray']['gray-300'],
            width: 1,
            dashArray: 3
          }
        },
        tooltip: {
          enabled: true,
          formatter: undefined,
          offsetY: 0,
          style: {
            fontSize: '12px',
            fontFamily: KTApp.getSettings()['font-family']
          }
        }
      },
      yaxis: {
        min: 0,
        max: 65,
        labels: {
          show: false,
          style: {
            colors: KTApp.getSettings()['colors']['gray']['gray-500'],
            fontSize: '12px',
            fontFamily: KTApp.getSettings()['font-family']
          }
        }
      },
      states: {
        normal: {
          filter: {
            type: 'none',
            value: 0
          }
        },
        hover: {
          filter: {
            type: 'none',
            value: 0
          }
        },
        active: {
          allowMultipleDataPointsSelection: false,
          filter: {
            type: 'none',
            value: 0
          }
        }
      },
      tooltip: {
        style: {
          fontSize: '12px',
          fontFamily: KTApp.getSettings()['font-family']
        },
        y: {
          formatter: function formatter(val) {
            return "$" + val + " thousands";
          }
        }
      },
      colors: [KTApp.getSettings()['colors']['theme']['light']['danger']],
      markers: {
        colors: [KTApp.getSettings()['colors']['theme']['light']['danger']],
        strokeColor: [KTApp.getSettings()['colors']['theme']['base']['danger']],
        strokeWidth: 3
      }
    };
    var chart = new ApexCharts(element, options);
    chart.render();
  };

  var _initMixedWidget16 = function _initMixedWidget16() {
    var element = document.getElementById("kt_mixed_widget_16_chart");
    var height = parseInt(KTUtil.css(element, 'height'));

    if (!element) {
      return;
    }

    var options = {
      series: [60, 50, 75, 80],
      chart: {
        height: height,
        type: 'radialBar'
      },
      plotOptions: {
        radialBar: {
          hollow: {
            margin: 0,
            size: "30%"
          },
          dataLabels: {
            showOn: "always",
            name: {
              show: false,
              fontWeight: "700"
            },
            value: {
              color: KTApp.getSettings()['colors']['gray']['gray-700'],
              fontSize: "18px",
              fontWeight: "700",
              offsetY: 10,
              show: true
            },
            total: {
              show: true,
              label: 'Total',
              fontWeight: "bold",
              formatter: function formatter(w) {
                // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                return '60%';
              }
            }
          },
          track: {
            background: KTApp.getSettings()['colors']['gray']['gray-100'],
            strokeWidth: '100%'
          }
        }
      },
      colors: [KTApp.getSettings()['colors']['theme']['base']['info'], KTApp.getSettings()['colors']['theme']['base']['danger'], KTApp.getSettings()['colors']['theme']['base']['success'], KTApp.getSettings()['colors']['theme']['base']['primary']],
      stroke: {
        lineCap: "round"
      },
      labels: ["Progress"]
    };
    var chart = new ApexCharts(element, options);
    chart.render();
  };

  var _initMixedWidget17 = function _initMixedWidget17() {
    var element = document.getElementById("kt_mixed_widget_17_chart");
    var color = KTUtil.hasAttr(element, 'data-color') ? KTUtil.attr(element, 'data-color') : 'warning';
    var height = parseInt(KTUtil.css(element, 'height'));

    if (!element) {
      return;
    }

    var options = {
      series: [{
        name: 'Net Profit',
        data: [30, 25, 45, 30, 55, 55]
      }],
      chart: {
        type: 'area',
        height: height,
        toolbar: {
          show: false
        },
        zoom: {
          enabled: false
        },
        sparkline: {
          enabled: true
        }
      },
      plotOptions: {},
      legend: {
        show: false
      },
      dataLabels: {
        enabled: false
      },
      fill: {
        type: 'solid',
        opacity: 1
      },
      stroke: {
        curve: 'smooth',
        show: true,
        width: 3,
        colors: [KTApp.getSettings()['colors']['theme']['base'][color]]
      },
      xaxis: {
        categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        labels: {
          show: false,
          style: {
            colors: KTApp.getSettings()['colors']['gray']['gray-500'],
            fontSize: '12px',
            fontFamily: KTApp.getSettings()['font-family']
          }
        },
        crosshairs: {
          show: false,
          position: 'front',
          stroke: {
            color: KTApp.getSettings()['colors']['gray']['gray-300'],
            width: 1,
            dashArray: 3
          }
        },
        tooltip: {
          enabled: true,
          formatter: undefined,
          offsetY: 0,
          style: {
            fontSize: '12px',
            fontFamily: KTApp.getSettings()['font-family']
          }
        }
      },
      yaxis: {
        min: 0,
        max: 60,
        labels: {
          show: false,
          style: {
            colors: KTApp.getSettings()['colors']['gray']['gray-500'],
            fontSize: '12px',
            fontFamily: KTApp.getSettings()['font-family']
          }
        }
      },
      states: {
        normal: {
          filter: {
            type: 'none',
            value: 0
          }
        },
        hover: {
          filter: {
            type: 'none',
            value: 0
          }
        },
        active: {
          allowMultipleDataPointsSelection: false,
          filter: {
            type: 'none',
            value: 0
          }
        }
      },
      tooltip: {
        style: {
          fontSize: '12px',
          fontFamily: KTApp.getSettings()['font-family']
        },
        y: {
          formatter: function formatter(val) {
            return "$" + val + " thousands";
          }
        }
      },
      colors: [KTApp.getSettings()['colors']['theme']['light'][color]],
      markers: {
        colors: [KTApp.getSettings()['colors']['theme']['light'][color]],
        strokeColor: [KTApp.getSettings()['colors']['theme']['base'][color]],
        strokeWidth: 3
      }
    };
    var chart = new ApexCharts(element, options);
    chart.render();
  };

  var _initMixedWidget18 = function _initMixedWidget18() {
    var element = document.getElementById("kt_mixed_widget_18_chart");
    var height = parseInt(KTUtil.css(element, 'height'));

    if (!element) {
      return;
    }

    var options = {
      series: [74],
      chart: {
        height: height,
        type: 'radialBar',
        offsetY: 0
      },
      plotOptions: {
        radialBar: {
          startAngle: -90,
          endAngle: 90,
          hollow: {
            margin: 0,
            size: "70%"
          },
          dataLabels: {
            showOn: "always",
            name: {
              show: true,
              fontSize: "13px",
              fontWeight: "700",
              offsetY: -5,
              color: KTApp.getSettings()['colors']['gray']['gray-500']
            },
            value: {
              color: KTApp.getSettings()['colors']['gray']['gray-700'],
              fontSize: "30px",
              fontWeight: "700",
              offsetY: -40,
              show: true
            }
          },
          track: {
            background: KTApp.getSettings()['colors']['theme']['light']['primary'],
            strokeWidth: '100%'
          }
        }
      },
      colors: [KTApp.getSettings()['colors']['theme']['base']['primary']],
      stroke: {
        lineCap: "round"
      },
      labels: ["Progress"]
    };
    var chart = new ApexCharts(element, options);
    chart.render();
  }; // Tiles


  var _initTilesWidget1 = function _initTilesWidget1() {
    var element = document.getElementById("kt_tiles_widget_1_chart");
    var color = KTUtil.hasAttr(element, 'data-color') ? KTUtil.attr(element, 'data-color') : 'primary';
    var height = parseInt(KTUtil.css(element, 'height'));

    if (!element) {
      return;
    }

    var options = {
      series: [{
        name: 'Net Profit',
        data: [20, 22, 30, 28, 25, 26, 30, 28, 22, 24, 25, 35]
      }],
      chart: {
        type: 'area',
        height: height,
        toolbar: {
          show: false
        },
        zoom: {
          enabled: false
        },
        sparkline: {
          enabled: true
        }
      },
      plotOptions: {},
      legend: {
        show: false
      },
      dataLabels: {
        enabled: false
      },
      fill: {
        type: 'gradient',
        opacity: 1,
        gradient: {
          type: "vertical",
          shadeIntensity: 0.55,
          gradientToColors: undefined,
          inverseColors: true,
          opacityFrom: 1,
          opacityTo: 0.2,
          stops: [25, 50, 100],
          colorStops: []
        }
      },
      stroke: {
        curve: 'smooth',
        show: true,
        width: 3,
        colors: [KTApp.getSettings()['colors']['theme']['base'][color]]
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        labels: {
          show: false,
          style: {
            colors: KTApp.getSettings()['colors']['gray']['gray-500'],
            fontSize: '12px',
            fontFamily: KTApp.getSettings()['font-family']
          }
        },
        crosshairs: {
          show: false,
          position: 'front',
          stroke: {
            color: KTApp.getSettings()['colors']['gray']['gray-300'],
            width: 1,
            dashArray: 3
          }
        },
        tooltip: {
          enabled: true,
          formatter: undefined,
          offsetY: 0,
          style: {
            fontSize: '12px',
            fontFamily: KTApp.getSettings()['font-family']
          }
        }
      },
      yaxis: {
        min: 0,
        max: 37,
        labels: {
          show: false,
          style: {
            colors: KTApp.getSettings()['colors']['gray']['gray-500'],
            fontSize: '12px',
            fontFamily: KTApp.getSettings()['font-family']
          }
        }
      },
      states: {
        normal: {
          filter: {
            type: 'none',
            value: 0
          }
        },
        hover: {
          filter: {
            type: 'none',
            value: 0
          }
        },
        active: {
          allowMultipleDataPointsSelection: false,
          filter: {
            type: 'none',
            value: 0
          }
        }
      },
      tooltip: {
        style: {
          fontSize: '12px',
          fontFamily: KTApp.getSettings()['font-family']
        },
        y: {
          formatter: function formatter(val) {
            return "$" + val + " thousands";
          }
        }
      },
      colors: [KTApp.getSettings()['colors']['theme']['light'][color]],
      markers: {
        colors: [KTApp.getSettings()['colors']['theme']['light'][color]],
        strokeColor: [KTApp.getSettings()['colors']['theme']['base'][color]],
        strokeWidth: 3
      },
      padding: {
        top: 0,
        bottom: 0
      }
    };
    var chart = new ApexCharts(element, options);
    chart.render();
  };

  var _initTilesWidget2 = function _initTilesWidget2() {
    var element = document.getElementById("kt_tiles_widget_2_chart");
    var height = parseInt(KTUtil.css(element, 'height'));

    if (!element) {
      return;
    }

    var strokeColor = KTUtil.colorDarken(KTApp.getSettings()['colors']['theme']['base']['danger'], 20);
    var fillColor = KTUtil.colorDarken(KTApp.getSettings()['colors']['theme']['base']['danger'], 10);
    var options = {
      series: [{
        name: 'Net Profit',
        data: [10, 10, 20, 20, 12, 12]
      }],
      chart: {
        type: 'area',
        height: height,
        zoom: {
          enabled: false
        },
        sparkline: {
          enabled: true
        },
        padding: {
          top: 0,
          bottom: 0
        }
      },
      dataLabels: {
        enabled: false
      },
      fill: {
        type: 'solid',
        opacity: 1
      },
      stroke: {
        curve: 'smooth',
        show: true,
        width: 3,
        colors: [strokeColor]
      },
      xaxis: {
        categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        labels: {
          show: false,
          style: {
            colors: KTApp.getSettings()['colors']['gray']['gray-500'],
            fontSize: '12px',
            fontFamily: KTApp.getSettings()['font-family']
          }
        },
        crosshairs: {
          show: false,
          position: 'front',
          stroke: {
            color: KTApp.getSettings()['colors']['gray']['gray-300'],
            width: 1,
            dashArray: 3
          }
        }
      },
      yaxis: {
        min: 0,
        max: 22,
        labels: {
          show: false,
          style: {
            colors: KTApp.getSettings()['colors']['gray']['gray-500'],
            fontSize: '12px',
            fontFamily: KTApp.getSettings()['font-family']
          }
        }
      },
      states: {
        normal: {
          filter: {
            type: 'none',
            value: 0
          }
        },
        hover: {
          filter: {
            type: 'none',
            value: 0
          }
        },
        active: {
          allowMultipleDataPointsSelection: false,
          filter: {
            type: 'none',
            value: 0
          }
        }
      },
      tooltip: {
        style: {
          fontSize: '12px',
          fontFamily: KTApp.getSettings()['font-family']
        },
        fixed: {
          enabled: false
        },
        x: {
          show: false
        },
        y: {
          title: {
            formatter: function formatter(val) {
              return val + "";
            }
          }
        }
      },
      colors: [fillColor],
      markers: {
        colors: [KTApp.getSettings()['colors']['theme']['light']['danger']],
        strokeColor: [strokeColor],
        strokeWidth: 3
      }
    };
    var chart = new ApexCharts(element, options);
    chart.render();
  };

  var _initTilesWidget5 = function _initTilesWidget5() {
    var element = document.getElementById("kt_tiles_widget_5_chart");
    var height = parseInt(KTUtil.css(element, 'height'));

    if (!element) {
      return;
    }

    var options = {
      series: [{
        name: 'Net Profit',
        data: [10, 15, 18, 14]
      }, {
        name: 'Revenue',
        data: [8, 13, 16, 12]
      }],
      chart: {
        type: 'bar',
        height: height,
        zoom: {
          enabled: false
        },
        sparkline: {
          enabled: true
        },
        padding: {
          left: 20,
          right: 20
        }
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: ['25%'],
          endingShape: 'rounded'
        }
      },
      dataLabels: {
        enabled: false
      },
      fill: {
        type: ['solid', 'gradient'],
        opacity: 0.25
      },
      xaxis: {
        categories: ['Feb', 'Mar', 'Apr', 'May']
      },
      yaxis: {
        min: 0,
        max: 20
      },
      states: {
        normal: {
          filter: {
            type: 'none',
            value: 0
          }
        },
        hover: {
          filter: {
            type: 'none',
            value: 0
          }
        },
        active: {
          allowMultipleDataPointsSelection: false,
          filter: {
            type: 'none',
            value: 0
          }
        }
      },
      tooltip: {
        style: {
          fontSize: '12px',
          fontFamily: KTApp.getSettings()['font-family']
        },
        fixed: {
          enabled: false
        },
        x: {
          show: false
        },
        y: {
          title: {
            formatter: function formatter(val) {
              return val + "";
            }
          }
        },
        marker: {
          show: false
        }
      },
      colors: ['#ffffff', '#ffffff']
    };
    var chart = new ApexCharts(element, options);
    chart.render();
  };

  var _initTilesWidget8 = function _initTilesWidget8() {
    var element = document.getElementById("kt_tiles_widget_8_chart");
    var height = parseInt(KTUtil.css(element, 'height'));
    var color = KTUtil.hasAttr(element, 'data-color') ? KTUtil.attr(element, 'data-color') : 'danger';

    if (!element) {
      return;
    }

    var options = {
      series: [{
        name: 'Net Profit',
        data: [20, 20, 30, 15, 40, 30]
      }],
      chart: {
        type: 'area',
        height: 150,
        toolbar: {
          show: false
        },
        zoom: {
          enabled: false
        },
        sparkline: {
          enabled: true
        }
      },
      plotOptions: {},
      legend: {
        show: false
      },
      dataLabels: {
        enabled: false
      },
      fill: {
        type: 'solid'
      },
      stroke: {
        curve: 'smooth',
        show: true,
        width: 3,
        colors: [KTApp.getSettings()['colors']['theme']['base'][color]]
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        labels: {
          show: false,
          style: {
            colors: KTApp.getSettings()['colors']['gray']['gray-500'],
            fontSize: '12px',
            fontFamily: KTApp.getSettings()['font-family']
          }
        },
        crosshairs: {
          show: false,
          position: 'front',
          stroke: {
            color: KTApp.getSettings()['colors']['gray']['gray-300'],
            width: 1,
            dashArray: 3
          }
        },
        tooltip: {
          enabled: true,
          formatter: undefined,
          offsetY: 0,
          style: {
            fontSize: '12px',
            fontFamily: KTApp.getSettings()['font-family']
          }
        }
      },
      yaxis: {
        min: 0,
        max: 45,
        labels: {
          show: false,
          style: {
            colors: KTApp.getSettings()['colors']['gray']['gray-500'],
            fontSize: '12px',
            fontFamily: KTApp.getSettings()['font-family']
          }
        }
      },
      states: {
        normal: {
          filter: {
            type: 'none',
            value: 0
          }
        },
        hover: {
          filter: {
            type: 'none',
            value: 0
          }
        },
        active: {
          allowMultipleDataPointsSelection: false,
          filter: {
            type: 'none',
            value: 0
          }
        }
      },
      tooltip: {
        style: {
          fontSize: '12px',
          fontFamily: KTApp.getSettings()['font-family']
        },
        y: {
          formatter: function formatter(val) {
            return "$" + val + " thousands";
          }
        }
      },
      colors: [KTApp.getSettings()['colors']['theme']['light'][color]],
      markers: {
        colors: [KTApp.getSettings()['colors']['theme']['light'][color]],
        strokeColor: [KTApp.getSettings()['colors']['theme']['base'][color]],
        strokeWidth: 3
      },
      padding: {
        top: 0,
        bottom: 0
      }
    };
    var chart = new ApexCharts(element, options);
    chart.render();
  };

  var _initTilesWidget17 = function _initTilesWidget17() {
    var element = document.getElementById("kt_tiles_widget_17_chart");

    if (!element) {
      return;
    }

    var options = {
      series: [{
        name: 'Net Profit',
        data: [10, 20, 20, 8]
      }],
      chart: {
        type: 'area',
        height: 150,
        zoom: {
          enabled: false
        },
        sparkline: {
          enabled: true
        },
        padding: {
          top: 0,
          bottom: 0
        }
      },
      dataLabels: {
        enabled: false
      },
      fill: {
        type: 'solid',
        opacity: 1
      },
      stroke: {
        curve: 'smooth',
        show: true,
        width: 3,
        colors: [KTApp.getSettings()['colors']['theme']['base']['success']]
      },
      xaxis: {
        categories: ['Feb', 'Mar', 'Apr', 'May'],
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        labels: {
          show: false,
          style: {
            colors: KTApp.getSettings()['colors']['gray']['gray-500'],
            fontSize: '12px',
            fontFamily: KTApp.getSettings()['font-family']
          }
        },
        crosshairs: {
          show: false,
          position: 'front',
          stroke: {
            color: KTApp.getSettings()['colors']['gray']['gray-300'],
            width: 1,
            dashArray: 3
          }
        }
      },
      yaxis: {
        min: 0,
        max: 22,
        labels: {
          show: false,
          style: {
            colors: KTApp.getSettings()['colors']['gray']['gray-500'],
            fontSize: '12px',
            fontFamily: KTApp.getSettings()['font-family']
          }
        }
      },
      states: {
        normal: {
          filter: {
            type: 'none',
            value: 0
          }
        },
        hover: {
          filter: {
            type: 'none',
            value: 0
          }
        },
        active: {
          allowMultipleDataPointsSelection: false,
          filter: {
            type: 'none',
            value: 0
          }
        }
      },
      tooltip: {
        style: {
          fontSize: '12px',
          fontFamily: KTApp.getSettings()['font-family']
        },
        fixed: {
          enabled: false
        },
        x: {
          show: false
        },
        y: {
          title: {
            formatter: function formatter(val) {
              return val + "";
            }
          }
        }
      },
      colors: [KTApp.getSettings()['colors']['theme']['light']['success']],
      markers: {
        colors: [KTApp.getSettings()['colors']['theme']['light']['success']],
        strokeColor: [KTApp.getSettings()['colors']['theme']['base']['success']],
        strokeWidth: 3
      }
    };
    var chart = new ApexCharts(element, options);
    chart.render();
  };

  var _initTilesWidget20 = function _initTilesWidget20() {
    var element = document.getElementById("kt_tiles_widget_20_chart");

    if (!element) {
      return;
    }

    var options = {
      series: [74],
      chart: {
        height: 250,
        type: 'radialBar',
        offsetY: 0
      },
      plotOptions: {
        radialBar: {
          startAngle: -90,
          endAngle: 90,
          hollow: {
            margin: 0,
            size: "70%"
          },
          dataLabels: {
            showOn: "always",
            name: {
              show: true,
              fontSize: "13px",
              fontWeight: "400",
              offsetY: -5,
              color: KTApp.getSettings()['colors']['gray']['gray-300']
            },
            value: {
              color: KTApp.getSettings()['colors']['theme']['inverse']['primary'],
              fontSize: "22px",
              fontWeight: "bold",
              offsetY: -40,
              show: true
            }
          },
          track: {
            background: KTUtil.colorLighten(KTApp.getSettings()['colors']['theme']['base']['primary'], 7),
            strokeWidth: '100%'
          }
        }
      },
      colors: [KTApp.getSettings()['colors']['theme']['inverse']['primary']],
      stroke: {
        lineCap: "round"
      },
      labels: ["Progress"]
    };
    var chart = new ApexCharts(element, options);
    chart.render();
  };

  var _initMixedWidget21 = function _initMixedWidget21() {
    var element = document.getElementById("kt_tiles_widget_21_chart");
    var height = parseInt(KTUtil.css(element, 'height'));
    var color = KTUtil.hasAttr(element, 'data-color') ? KTUtil.attr(element, 'data-color') : 'info';

    if (!element) {
      return;
    }

    var options = {
      series: [{
        name: 'Net Profit',
        data: [20, 20, 30, 15, 30, 30]
      }],
      chart: {
        type: 'area',
        height: height,
        toolbar: {
          show: false
        },
        zoom: {
          enabled: false
        },
        sparkline: {
          enabled: true
        }
      },
      plotOptions: {},
      legend: {
        show: false
      },
      dataLabels: {
        enabled: false
      },
      fill: {
        type: 'solid',
        opacity: 1
      },
      stroke: {
        curve: 'smooth',
        show: true,
        width: 3,
        colors: [KTApp.getSettings()['colors']['theme']['base'][color]]
      },
      xaxis: {
        categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        labels: {
          show: false,
          style: {
            colors: KTApp.getSettings()['colors']['gray']['gray-500'],
            fontSize: '12px',
            fontFamily: KTApp.getSettings()['font-family']
          }
        },
        crosshairs: {
          show: false,
          position: 'front',
          stroke: {
            color: KTApp.getSettings()['colors']['gray']['gray-300'],
            width: 1,
            dashArray: 3
          }
        },
        tooltip: {
          enabled: true,
          formatter: undefined,
          offsetY: 0,
          style: {
            fontSize: '12px',
            fontFamily: KTApp.getSettings()['font-family']
          }
        }
      },
      yaxis: {
        min: 0,
        max: 32,
        labels: {
          show: false,
          style: {
            colors: KTApp.getSettings()['colors']['gray']['gray-500'],
            fontSize: '12px',
            fontFamily: KTApp.getSettings()['font-family']
          }
        }
      },
      states: {
        normal: {
          filter: {
            type: 'none',
            value: 0
          }
        },
        hover: {
          filter: {
            type: 'none',
            value: 0
          }
        },
        active: {
          allowMultipleDataPointsSelection: false,
          filter: {
            type: 'none',
            value: 0
          }
        }
      },
      tooltip: {
        style: {
          fontSize: '12px',
          fontFamily: KTApp.getSettings()['font-family']
        },
        y: {
          formatter: function formatter(val) {
            return "$" + val + " thousands";
          }
        }
      },
      colors: [KTApp.getSettings()['colors']['theme']['light'][color]],
      markers: {
        colors: [KTApp.getSettings()['colors']['theme']['light'][color]],
        strokeColor: [KTApp.getSettings()['colors']['theme']['base'][color]],
        strokeWidth: 3
      }
    };
    var chart = new ApexCharts(element, options);
    chart.render();
  };

  var _initMixedWidget23 = function _initMixedWidget23() {
    var element = document.getElementById("kt_tiles_widget_23_chart");
    var height = parseInt(KTUtil.css(element, 'height'));
    var color = KTUtil.hasAttr(element, 'data-color') ? KTUtil.attr(element, 'data-color') : 'primary';

    if (!element) {
      return;
    }

    var options = {
      series: [{
        name: 'Net Profit',
        data: [15, 25, 15, 40, 20, 50]
      }],
      chart: {
        type: 'area',
        height: 125,
        toolbar: {
          show: false
        },
        zoom: {
          enabled: false
        },
        sparkline: {
          enabled: true
        }
      },
      plotOptions: {},
      legend: {
        show: false
      },
      dataLabels: {
        enabled: false
      },
      fill: {
        type: 'solid',
        opacity: 1
      },
      stroke: {
        curve: 'smooth',
        show: true,
        width: 3,
        colors: [KTApp.getSettings()['colors']['theme']['base'][color]]
      },
      xaxis: {
        categories: ['Jan, 2020', 'Feb, 2020', 'Mar, 2020', 'Apr, 2020', 'May, 2020', 'Jun, 2020'],
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        labels: {
          show: false,
          style: {
            colors: KTApp.getSettings()['colors']['gray']['gray-500'],
            fontSize: '12px',
            fontFamily: KTApp.getSettings()['font-family']
          }
        },
        crosshairs: {
          show: false,
          position: 'front',
          stroke: {
            color: KTApp.getSettings()['colors']['gray']['gray-300'],
            width: 1,
            dashArray: 3
          }
        },
        tooltip: {
          enabled: true,
          formatter: undefined,
          offsetY: 0,
          style: {
            fontSize: '12px',
            fontFamily: KTApp.getSettings()['font-family']
          }
        }
      },
      yaxis: {
        min: 0,
        max: 55,
        labels: {
          show: false,
          style: {
            colors: KTApp.getSettings()['colors']['gray']['gray-500'],
            fontSize: '12px',
            fontFamily: KTApp.getSettings()['font-family']
          }
        }
      },
      states: {
        normal: {
          filter: {
            type: 'none',
            value: 0
          }
        },
        hover: {
          filter: {
            type: 'none',
            value: 0
          }
        },
        active: {
          allowMultipleDataPointsSelection: false,
          filter: {
            type: 'none',
            value: 0
          }
        }
      },
      tooltip: {
        style: {
          fontSize: '12px',
          fontFamily: KTApp.getSettings()['font-family']
        },
        y: {
          formatter: function formatter(val) {
            return "$" + val + " thousands";
          }
        }
      },
      colors: [KTApp.getSettings()['colors']['theme']['light'][color]],
      markers: {
        colors: [KTApp.getSettings()['colors']['theme']['light'][color]],
        strokeColor: [KTApp.getSettings()['colors']['theme']['base'][color]],
        strokeWidth: 3
      }
    };
    var chart = new ApexCharts(element, options);
    chart.render();
  }; // Forms


  var _initFormsWidget1 = function _initFormsWidget1() {
    var inputEl = KTUtil.getById("kt_forms_widget_1_input");

    if (inputEl) {
      autosize(inputEl);
    }
  };

  var _initFormsWidget2 = function _initFormsWidget2() {
    var formEl = KTUtil.getById("kt_forms_widget_2_form");
    var editorId = 'kt_forms_widget_2_editor'; // init editor

    var options = {
      modules: {
        toolbar: {
          container: "#kt_forms_widget_2_editor_toolbar"
        }
      },
      placeholder: 'Type message...',
      theme: 'snow'
    };

    if (!formEl) {
      return;
    } // Init editor


    var editorObj = new Quill('#' + editorId, options);
  };

  var _initFormsWidget3 = function _initFormsWidget3() {
    var inputEl = KTUtil.getById("kt_forms_widget_3_input");

    if (inputEl) {
      autosize(inputEl);
    }
  };

  var _initFormsWidget4 = function _initFormsWidget4() {
    var inputEl = KTUtil.getById("kt_forms_widget_4_input");

    if (inputEl) {
      autosize(inputEl);
    }
  };

  var _initFormsWidget5 = function _initFormsWidget5() {
    var inputEl = KTUtil.getById("kt_forms_widget_5_input");

    if (inputEl) {
      autosize(inputEl);
    }
  };

  var _initFormsWidget6 = function _initFormsWidget6() {
    var inputEl = KTUtil.getById("kt_forms_widget_6_input");

    if (inputEl) {
      autosize(inputEl);
    }
  };

  var _initFormsWidget7 = function _initFormsWidget7() {
    var inputEl = KTUtil.getById("kt_forms_widget_7_input");

    if (inputEl) {
      autosize(inputEl);
    }
  };

  var _initFormsWidget8 = function _initFormsWidget8() {
    var inputEl = KTUtil.getById("kt_forms_widget_8_input");

    if (inputEl) {
      autosize(inputEl);
    }
  };

  var _initFormsWidget9 = function _initFormsWidget9() {
    var inputEl = KTUtil.getById("kt_forms_widget_9_input");

    if (inputEl) {
      autosize(inputEl);
    }
  };

  var _initFormsWidget10 = function _initFormsWidget10() {
    var inputEl = KTUtil.getById("kt_forms_widget_10_input");

    if (inputEl) {
      autosize(inputEl);
    }
  };

  var _initFormsWidget11 = function _initFormsWidget11() {
    var inputEl = KTUtil.getById("kt_forms_widget_11_input");

    if (inputEl) {
      autosize(inputEl);
    }
  };

  var _initFormsWidget12 = function _initFormsWidget12() {
    var inputEl = KTUtil.getById("kt_forms_widget_12_input");

    if (inputEl) {
      autosize(inputEl);
    }
  }; // Advance Tables


  var _initAdvancedTableGroupSelection = function _initAdvancedTableGroupSelection(element) {
    var table = KTUtil.getById(element);

    if (!table) {
      return;
    }

    KTUtil.on(table, 'thead th .checkbox > input', 'change', function (e) {
      var checkboxes = KTUtil.findAll(table, 'tbody td .checkbox > input');

      for (var i = 0, len = checkboxes.length; i < len; i++) {
        checkboxes[i].checked = this.checked;
      }
    });
  };

  var _initPriceSlider = function _initPriceSlider(element) {
    // init slider
    var slider = document.getElementById(element);

    if (typeof slider === 'undefined') {
      return;
    }

    if (!slider) {
      return;
    }

    noUiSlider.create(slider, {
      start: [20, 60],
      connect: true,
      range: {
        'min': 0,
        'max': 100
      }
    });
  }; // Education Show More Demo


  var _initEducationShowMoreBtn = function _initEducationShowMoreBtn() {
    var el = KTUtil.getById('kt_app_education_more_feeds_btn');

    if (!el) {
      return;
    }

    KTUtil.addEvent(el, 'click', function (e) {
      var elements = document.getElementsByClassName('education-more-feeds');

      if (!elements || elements.length <= 0) {
        return;
      }

      KTUtil.btnWait(el, 'spinner spinner-right spinner-white pr-15', 'Please wait...', true);
      setTimeout(function () {
        KTUtil.btnRelease(el);
        KTUtil.addClass(el, 'd-none');
        var item;

        for (var i = 0, len = elements.length; i < len; i++) {
          item = elements[0];
          KTUtil.removeClass(elements[i], 'd-none');
          var textarea = KTUtil.find(item, 'textarea');

          if (textarea) {
            autosize(textarea);
          }
        }

        KTUtil.scrollTo(item);
      }, 1000);
    });
  }; // Public methods


  return {
    init: function init() {
      // General Controls
      _initDaterangepicker(); // Stats Widgets


      _initStatsWidget7();

      _initStatsWidget8();

      _initStatsWidget9();

      _initStatsWidget10();

      _initStatsWidget11();

      _initStatsWidget12(); // Charts Widgets


      _initChartsWidget1();

      _initChartsWidget2();

      _initChartsWidget3();

      _initChartsWidget4();

      _initChartsWidget5();

      _initChartsWidget6();

      _initChartsWidget7();

      _initChartsWidget8();

      _initChartsWidget9(); // Mixed Widgets


      _initMixedWidget1();

      _initMixedWidget2();

      _initMixedWidget3();

      _initMixedWidget4();

      _initMixedWidget5();

      _initMixedWidget6();

      _initMixedWidget13();

      _initMixedWidget14();

      _initMixedWidget15();

      _initMixedWidget16();

      _initMixedWidget17();

      _initMixedWidget18(); // Tiles Widgets


      _initTilesWidget1();

      _initTilesWidget2();

      _initTilesWidget5();

      _initTilesWidget8();

      _initTilesWidget17();

      _initTilesWidget20();

      _initMixedWidget21();

      _initMixedWidget23(); // Table Widgets


      _initAdvancedTableGroupSelection('kt_advance_table_widget_1');

      _initAdvancedTableGroupSelection('kt_advance_table_widget_2');

      _initAdvancedTableGroupSelection('kt_advance_table_widget_3');

      _initAdvancedTableGroupSelection('kt_advance_table_widget_4'); // Form Widgets


      _initPriceSlider('kt_price_slider'); // Forms widgets


      _initFormsWidget1();

      _initFormsWidget2();

      _initFormsWidget3();

      _initFormsWidget4();

      _initFormsWidget5();

      _initFormsWidget6();

      _initFormsWidget7();

      _initFormsWidget8();

      _initFormsWidget9();

      _initFormsWidget10();

      _initFormsWidget11(); // Education App


      _initEducationShowMoreBtn();
    }
  };
}(); // Webpack support


if (true) {
  module.exports = KTWidgets;
}

jQuery(document).ready(function () {
  KTWidgets.init();
});

/***/ }),

/***/ 62:
/*!******************************************************!*\
  !*** multi ./resources/metronic/js/pages/widgets.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Applications/MAMP/htdocs/spreadci4/public/admin/themes/metronic/resources/metronic/js/pages/widgets.js */"./resources/metronic/js/pages/widgets.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL21ldHJvbmljL2pzL3BhZ2VzL3dpZGdldHMuanMiXSwibmFtZXMiOlsiS1RXaWRnZXRzIiwiX2luaXREYXRlcmFuZ2VwaWNrZXIiLCIkIiwibGVuZ3RoIiwicGlja2VyIiwic3RhcnQiLCJtb21lbnQiLCJlbmQiLCJjYiIsImxhYmVsIiwidGl0bGUiLCJyYW5nZSIsImZvcm1hdCIsImh0bWwiLCJkYXRlcmFuZ2VwaWNrZXIiLCJkaXJlY3Rpb24iLCJLVFV0aWwiLCJpc1JUTCIsInN0YXJ0RGF0ZSIsImVuZERhdGUiLCJvcGVucyIsImFwcGx5Q2xhc3MiLCJjYW5jZWxDbGFzcyIsInJhbmdlcyIsInN1YnRyYWN0Iiwic3RhcnRPZiIsImVuZE9mIiwiX2luaXRTdGF0c1dpZGdldDciLCJlbGVtZW50IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIm9wdGlvbnMiLCJzZXJpZXMiLCJuYW1lIiwiZGF0YSIsImNoYXJ0IiwidHlwZSIsImhlaWdodCIsInRvb2xiYXIiLCJzaG93Iiwiem9vbSIsImVuYWJsZWQiLCJzcGFya2xpbmUiLCJwbG90T3B0aW9ucyIsImxlZ2VuZCIsImRhdGFMYWJlbHMiLCJmaWxsIiwib3BhY2l0eSIsInN0cm9rZSIsImN1cnZlIiwid2lkdGgiLCJjb2xvcnMiLCJLVEFwcCIsImdldFNldHRpbmdzIiwieGF4aXMiLCJjYXRlZ29yaWVzIiwiYXhpc0JvcmRlciIsImF4aXNUaWNrcyIsImxhYmVscyIsInN0eWxlIiwiZm9udFNpemUiLCJmb250RmFtaWx5IiwiY3Jvc3NoYWlycyIsInBvc2l0aW9uIiwiY29sb3IiLCJkYXNoQXJyYXkiLCJ0b29sdGlwIiwiZm9ybWF0dGVyIiwidW5kZWZpbmVkIiwib2Zmc2V0WSIsInlheGlzIiwic3RhdGVzIiwibm9ybWFsIiwiZmlsdGVyIiwidmFsdWUiLCJob3ZlciIsImFjdGl2ZSIsImFsbG93TXVsdGlwbGVEYXRhUG9pbnRzU2VsZWN0aW9uIiwieSIsInZhbCIsIm1hcmtlcnMiLCJzdHJva2VDb2xvciIsInN0cm9rZVdpZHRoIiwiQXBleENoYXJ0cyIsInJlbmRlciIsIl9pbml0U3RhdHNXaWRnZXQ4IiwiX2luaXRTdGF0c1dpZGdldDkiLCJfaW5pdFN0YXRzV2lkZ2V0MTAiLCJwYXJzZUludCIsImNzcyIsImhhc0F0dHIiLCJhdHRyIiwibWluIiwibWF4IiwiX2luaXRTdGF0c1dpZGdldDExIiwiX2luaXRTdGF0c1dpZGdldDEyIiwiX2luaXRDaGFydHNXaWRnZXQxIiwiYmFyIiwiaG9yaXpvbnRhbCIsImNvbHVtbldpZHRoIiwiZW5kaW5nU2hhcGUiLCJncmlkIiwiYm9yZGVyQ29sb3IiLCJzdHJva2VEYXNoQXJyYXkiLCJsaW5lcyIsIl9pbml0Q2hhcnRzV2lkZ2V0MiIsIl9pbml0Q2hhcnRzV2lkZ2V0MyIsIl9pbml0Q2hhcnRzV2lkZ2V0NCIsIl9pbml0Q2hhcnRzV2lkZ2V0NSIsInN0YWNrZWQiLCJfaW5pdENoYXJ0c1dpZGdldDYiLCJwYWRkaW5nIiwidG9wIiwicmlnaHQiLCJib3R0b20iLCJsZWZ0IiwiX2luaXRDaGFydHNXaWRnZXQ3IiwiX2luaXRDaGFydHNXaWRnZXQ4IiwieCIsIm9mZnNldFgiLCJfaW5pdENoYXJ0c1dpZGdldDkiLCJfaW5pdE1peGVkV2lkZ2V0MSIsImRyb3BTaGFkb3ciLCJlbmFibGVkT25TZXJpZXMiLCJibHVyIiwibWFya2VyIiwiX2luaXRNaXhlZFdpZGdldDIiLCJfaW5pdE1peGVkV2lkZ2V0MyIsIl9pbml0TWl4ZWRXaWRnZXQ0IiwiX2luaXRNaXhlZFdpZGdldDUiLCJfaW5pdE1peGVkV2lkZ2V0NiIsIl9pbml0TWl4ZWRXaWRnZXQxMyIsIl9pbml0TWl4ZWRXaWRnZXQxNCIsInJhZGlhbEJhciIsImhvbGxvdyIsIm1hcmdpbiIsInNpemUiLCJzaG93T24iLCJmb250V2VpZ2h0IiwidHJhY2siLCJiYWNrZ3JvdW5kIiwibGluZUNhcCIsIl9pbml0TWl4ZWRXaWRnZXQxNSIsImdyYWRpZW50Iiwic2hhZGVJbnRlbnNpdHkiLCJncmFkaWVudFRvQ29sb3JzIiwiaW52ZXJzZUNvbG9ycyIsIm9wYWNpdHlGcm9tIiwib3BhY2l0eVRvIiwic3RvcHMiLCJjb2xvclN0b3BzIiwiX2luaXRNaXhlZFdpZGdldDE2IiwidG90YWwiLCJ3IiwiX2luaXRNaXhlZFdpZGdldDE3IiwiX2luaXRNaXhlZFdpZGdldDE4Iiwic3RhcnRBbmdsZSIsImVuZEFuZ2xlIiwiX2luaXRUaWxlc1dpZGdldDEiLCJfaW5pdFRpbGVzV2lkZ2V0MiIsImNvbG9yRGFya2VuIiwiZmlsbENvbG9yIiwiZml4ZWQiLCJfaW5pdFRpbGVzV2lkZ2V0NSIsIl9pbml0VGlsZXNXaWRnZXQ4IiwiX2luaXRUaWxlc1dpZGdldDE3IiwiX2luaXRUaWxlc1dpZGdldDIwIiwiY29sb3JMaWdodGVuIiwiX2luaXRNaXhlZFdpZGdldDIxIiwiX2luaXRNaXhlZFdpZGdldDIzIiwiX2luaXRGb3Jtc1dpZGdldDEiLCJpbnB1dEVsIiwiZ2V0QnlJZCIsImF1dG9zaXplIiwiX2luaXRGb3Jtc1dpZGdldDIiLCJmb3JtRWwiLCJlZGl0b3JJZCIsIm1vZHVsZXMiLCJjb250YWluZXIiLCJwbGFjZWhvbGRlciIsInRoZW1lIiwiZWRpdG9yT2JqIiwiUXVpbGwiLCJfaW5pdEZvcm1zV2lkZ2V0MyIsIl9pbml0Rm9ybXNXaWRnZXQ0IiwiX2luaXRGb3Jtc1dpZGdldDUiLCJfaW5pdEZvcm1zV2lkZ2V0NiIsIl9pbml0Rm9ybXNXaWRnZXQ3IiwiX2luaXRGb3Jtc1dpZGdldDgiLCJfaW5pdEZvcm1zV2lkZ2V0OSIsIl9pbml0Rm9ybXNXaWRnZXQxMCIsIl9pbml0Rm9ybXNXaWRnZXQxMSIsIl9pbml0Rm9ybXNXaWRnZXQxMiIsIl9pbml0QWR2YW5jZWRUYWJsZUdyb3VwU2VsZWN0aW9uIiwidGFibGUiLCJvbiIsImUiLCJjaGVja2JveGVzIiwiZmluZEFsbCIsImkiLCJsZW4iLCJjaGVja2VkIiwiX2luaXRQcmljZVNsaWRlciIsInNsaWRlciIsIm5vVWlTbGlkZXIiLCJjcmVhdGUiLCJjb25uZWN0IiwiX2luaXRFZHVjYXRpb25TaG93TW9yZUJ0biIsImVsIiwiYWRkRXZlbnQiLCJlbGVtZW50cyIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJidG5XYWl0Iiwic2V0VGltZW91dCIsImJ0blJlbGVhc2UiLCJhZGRDbGFzcyIsIml0ZW0iLCJyZW1vdmVDbGFzcyIsInRleHRhcmVhIiwiZmluZCIsInNjcm9sbFRvIiwiaW5pdCIsIm1vZHVsZSIsImV4cG9ydHMiLCJqUXVlcnkiLCJyZWFkeSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztDQ2hGQTs7QUFDQSxJQUFJQSxTQUFTLEdBQUcsWUFBWTtBQUN4QjtBQUVBO0FBQ0EsTUFBSUMsb0JBQW9CLEdBQUcsU0FBdkJBLG9CQUF1QixHQUFZO0FBQ25DLFFBQUlDLENBQUMsQ0FBQywrQkFBRCxDQUFELENBQW1DQyxNQUFu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QUFELENBQWhDLENBbkRjLENBcURkOzs7QUFDQVMsc0JBQWdCLENBQUMsaUJBQUQsQ0FBaEIsQ0F0RGMsQ0F3RGQ7OztBQUNBaEMsdUJBQWlCOztBQUNqQkksdUJBQWlCOztBQUNqQlMsdUJBQWlCOztBQUNqQkMsdUJBQWlCOztBQUNqQkMsdUJBQWlCOztBQUNqQkMsdUJBQWlCOztBQUNqQkMsdUJBQWlCOztBQUNqQkMsdUJBQWlCOztBQUNqQkMsdUJBQWlCOztBQUNqQkMsd0JBQWtCOztBQUNsQkMsd0JBQWtCLEdBbkVKLENBcUVkOzs7QUFDQWdCLCtCQUF5QjtBQUM1QjtBQXhFRSxHQUFQO0FBMEVILENBbGxKZSxFQUFoQixDLENBb2xKQTs7O0FBQ0EsSUFBSSxJQUFKLEVBQW1DO0FBQy9CZSxRQUFNLENBQUNDLE9BQVAsR0FBaUIvTixTQUFqQjtBQUNIOztBQUVEZ08sTUFBTSxDQUFDbk0sUUFBRCxDQUFOLENBQWlCb00sS0FBakIsQ0FBdUIsWUFBWTtBQUMvQmpPLFdBQVMsQ0FBQzZOLElBQVY7QUFDSCxDQUZELEUiLCJmaWxlIjoiL2RldmVsb3BtZW50L2pzL3BhZ2VzL3dpZGdldHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDYyKTtcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuLy8gQ2xhc3MgZGVmaW5pdGlvblxyXG52YXIgS1RXaWRnZXRzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgLy8gUHJpdmF0ZSBwcm9wZXJ0aWVzXHJcblxyXG4gICAgLy8gR2VuZXJhbCBDb250cm9sc1xyXG4gICAgdmFyIF9pbml0RGF0ZXJhbmdlcGlja2VyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICgkKCcja3RfZGFzaGJvYXJkX2RhdGVyYW5nZXBpY2tlcicpLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBwaWNrZXIgPSAkKCcja3RfZGFzaGJvYXJkX2RhdGVyYW5nZXBpY2tlcicpO1xyXG4gICAgICAgIHZhciBzdGFydCA9IG1vbWVudCgpO1xyXG4gICAgICAgIHZhciBlbmQgPSBtb21lbnQoKTtcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gY2Ioc3RhcnQsIGVuZCwgbGFiZWwpIHtcclxuICAgICAgICAgICAgdmFyIHRpdGxlID0gJyc7XHJcbiAgICAgICAgICAgIHZhciByYW5nZSA9ICcnO1xyXG5cclxuICAgICAgICAgICAgaWYgKChlbmQgLSBzdGFydCkgPCAxMDAgfHwgbGFiZWwgPT0gJ1RvZGF5Jykge1xyXG4gICAgICAgICAgICAgICAgdGl0bGUgPSAnVG9kYXk6JztcclxuICAgICAgICAgICAgICAgIHJhbmdlID0gc3RhcnQuZm9ybWF0KCdNTU0gRCcpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGxhYmVsID09ICdZZXN0ZXJkYXknKSB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZSA9ICdZZXN0ZXJkYXk6JztcclxuICAgICAgICAgICAgICAgIHJhbmdlID0gc3RhcnQuZm9ybWF0KCdNTU0gRCcpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmFuZ2UgPSBzdGFydC5mb3JtYXQoJ01NTSBEJykgKyAnIC0gJyArIGVuZC5mb3JtYXQoJ01NTSBEJyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICQoJyNrdF9kYXNoYm9hcmRfZGF0ZXJhbmdlcGlja2VyX2RhdGUnKS5odG1sKHJhbmdlKTtcclxuICAgICAgICAgICAgJCgnI2t0X2Rhc2hib2FyZF9kYXRlcmFuZ2VwaWNrZXJfdGl0bGUnKS5odG1sKHRpdGxlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHBpY2tlci5kYXRlcmFuZ2VwaWNrZXIoe1xyXG4gICAgICAgICAgICBkaXJlY3Rpb246IEtUVXRpbC5pc1JUTCgpLFxyXG4gICAgICAgICAgICBzdGFydERhdGU6IHN0YXJ0LFxyXG4gICAgICAgICAgICBlbmREYXRlOiBlbmQsXHJcbiAgICAgICAgICAgIG9wZW5zOiAnbGVmdCcsXHJcbiAgICAgICAgICAgIGFwcGx5Q2xhc3M6ICdidG4tcHJpbWFyeScsXHJcbiAgICAgICAgICAgIGNhbmNlbENsYXNzOiAnYnRuLWxpZ2h0LXByaW1hcnknLFxyXG4gICAgICAgICAgICByYW5nZXM6IHtcclxuICAgICAgICAgICAgICAgICdUb2RheSc6IFttb21lbnQoKSwgbW9tZW50KCldLFxyXG4gICAgICAgICAgICAgICAgJ1llc3RlcmRheSc6IFttb21lbnQoKS5zdWJ0cmFjdCgxLCAnZGF5cycpLCBtb21lbnQoKS5zdWJ0cmFjdCgxLCAnZGF5cycpXSxcclxuICAgICAgICAgICAgICAgICdMYXN0IDcgRGF5cyc6IFttb21lbnQoKS5zdWJ0cmFjdCg2LCAnZGF5cycpLCBtb21lbnQoKV0sXHJcbiAgICAgICAgICAgICAgICAnTGFzdCAzMCBEYXlzJzogW21vbWVudCgpLnN1YnRyYWN0KDI5LCAnZGF5cycpLCBtb21lbnQoKV0sXHJcbiAgICAgICAgICAgICAgICAnVGhpcyBNb250aCc6IFttb21lbnQoKS5zdGFydE9mKCdtb250aCcpLCBtb21lbnQoKS5lbmRPZignbW9udGgnKV0sXHJcbiAgICAgICAgICAgICAgICAnTGFzdCBNb250aCc6IFttb21lbnQoKS5zdWJ0cmFjdCgxLCAnbW9udGgnKS5zdGFydE9mKCdtb250aCcpLCBtb21lbnQoKS5zdWJ0cmFjdCgxLCAnbW9udGgnKS5lbmRPZignbW9udGgnKV1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIGNiKTtcclxuXHJcbiAgICAgICAgY2Ioc3RhcnQsIGVuZCwgJycpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFN0YXRzIHdpZGdldHNcclxuICAgIHZhciBfaW5pdFN0YXRzV2lkZ2V0NyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwia3Rfc3RhdHNfd2lkZ2V0XzdfY2hhcnRcIik7XHJcblxyXG4gICAgICAgIGlmICghZWxlbWVudCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgb3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgc2VyaWVzOiBbe1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ05ldCBQcm9maXQnLFxyXG4gICAgICAgICAgICAgICAgZGF0YTogWzMwLCA0NSwgMzIsIDcwLCA0MF1cclxuICAgICAgICAgICAgfV0sXHJcbiAgICAgICAgICAgIGNoYXJ0OiB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiAnYXJlYScsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDE1MCxcclxuICAgICAgICAgICAgICAgIHRvb2xiYXI6IHtcclxuICAgICAgICAgICAgICAgICAgICBzaG93OiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHpvb206IHtcclxuICAgICAgICAgICAgICAgICAgICBlbmFibGVkOiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHNwYXJrbGluZToge1xyXG4gICAgICAgICAgICAgICAgICAgIGVuYWJsZWQ6IHRydWVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcGxvdE9wdGlvbnM6IHt9LFxyXG4gICAgICAgICAgICBsZWdlbmQ6IHtcclxuICAgICAgICAgICAgICAgIHNob3c6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGRhdGFMYWJlbHM6IHtcclxuICAgICAgICAgICAgICAgIGVuYWJsZWQ6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGZpbGw6IHtcclxuICAgICAgICAgICAgICAgIHR5cGU6ICdzb2xpZCcsXHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHN0cm9rZToge1xyXG4gICAgICAgICAgICAgICAgY3VydmU6ICdzbW9vdGgnLFxyXG4gICAgICAgICAgICAgICAgc2hvdzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAzLFxyXG4gICAgICAgICAgICAgICAgY29sb3JzOiBbS1RBcHAuZ2V0U2V0dGluZ3MoKVsnY29sb3JzJ11bJ3RoZW1lJ11bJ2Jhc2UnXVsnc3VjY2VzcyddXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB4YXhpczoge1xyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcmllczogWydGZWInLCAnTWFyJywgJ0FwcicsICdNYXknLCAnSnVuJywgJ0p1bCddLFxyXG4gICAgICAgICAgICAgICAgYXhpc0JvcmRlcjoge1xyXG4gICAgICAgICAgICAgICAgICAgIHNob3c6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGF4aXNUaWNrczoge1xyXG4gICAgICAgICAgICAgICAgICAgIHNob3c6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgbGFiZWxzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hvdzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3JzOiBLVEFwcC5nZXRTZXR0aW5ncygpWydjb2xvcnMnXVsnZ3JheSddWydncmF5LTUwMCddLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogJzEycHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250RmFtaWx5OiBLVEFwcC5nZXRTZXR0aW5ncygpWydmb250LWZhbWlseSddXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGNyb3NzaGFpcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICBzaG93OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2Zyb250JyxcclxuICAgICAgICAgICAgICAgICAgICBzdHJva2U6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IEtUQXBwLmdldFNldHRpbmdzKClbJ2NvbG9ycyddWydncmF5J11bJ2dyYXktMzAwJ10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXNoQXJyYXk6IDNcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgdG9vbHRpcDoge1xyXG4gICAgICAgICAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybWF0dGVyOiB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgb2Zmc2V0WTogMCxcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogJzEycHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250RmFtaWx5OiBLVEFwcC5nZXRTZXR0aW5ncygpWydmb250LWZhbWlseSddXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB5YXhpczoge1xyXG4gICAgICAgICAgICAgICAgbGFiZWxzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hvdzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3JzOiBLVEFwcC5nZXRTZXR0aW5ncygpWydjb2xvcnMnXVsnZ3JheSddWydncmF5LTUwMCddLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogJzEycHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250RmFtaWx5OiBLVEFwcC5nZXRTZXR0aW5ncygpWydmb250LWZhbWlseSddXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzdGF0ZXM6IHtcclxuICAgICAgICAgICAgICAgIG5vcm1hbDoge1xyXG4gICAgICAgICAgICAgICAgICAgIGZpbHRlcjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnbm9uZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiAwXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGhvdmVyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdub25lJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IDBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgYWN0aXZlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxsb3dNdWx0aXBsZURhdGFQb2ludHNTZWxlY3Rpb246IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGZpbHRlcjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnbm9uZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiAwXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB0b29sdGlwOiB7XHJcbiAgICAgICAgICAgICAgICBzdHlsZToge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMTJweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgZm9udEZhbWlseTogS1RBcHAuZ2V0U2V0dGluZ3MoKVsnZm9udC1mYW1pbHknXVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHk6IHtcclxuICAgICAgICAgICAgICAgICAgICBmb3JtYXR0ZXI6IGZ1bmN0aW9uICh2YWwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiJFwiICsgdmFsICsgXCIgdGhvdXNhbmRzXCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNvbG9yczogW0tUQXBwLmdldFNldHRpbmdzKClbJ2NvbG9ycyddWyd0aGVtZSddWydsaWdodCddWydzdWNjZXNzJ11dLFxyXG4gICAgICAgICAgICBtYXJrZXJzOiB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcnM6IFtLVEFwcC5nZXRTZXR0aW5ncygpWydjb2xvcnMnXVsndGhlbWUnXVsnbGlnaHQnXVsnc3VjY2VzcyddXSxcclxuICAgICAgICAgICAgICAgIHN0cm9rZUNvbG9yOiBbS1RBcHAuZ2V0U2V0dGluZ3MoKVsnY29sb3JzJ11bJ3RoZW1lJ11bJ2Jhc2UnXVsnc3VjY2VzcyddXSxcclxuICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoOiAzXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB2YXIgY2hhcnQgPSBuZXcgQXBleENoYXJ0cyhlbGVtZW50LCBvcHRpb25zKTtcclxuICAgICAgICBjaGFydC5yZW5kZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgX2luaXRTdGF0c1dpZGdldDggPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImt0X3N0YXRzX3dpZGdldF84X2NoYXJ0XCIpO1xyXG5cclxuICAgICAgICBpZiAoIWVsZW1lbnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIG9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgIHNlcmllczogW3tcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdOZXQgUHJvZml0JyxcclxuICAgICAgICAgICAgICAgIGRhdGE6IFszMCwgNDUsIDMyLCA3MCwgNDBdXHJcbiAgICAgICAgICAgIH1dLFxyXG4gICAgICAgICAgICBjaGFydDoge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogJ2FyZWEnLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxNTAsXHJcbiAgICAgICAgICAgICAgICB0b29sYmFyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hvdzogZmFsc2VcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB6b29tOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZW5hYmxlZDogZmFsc2VcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBzcGFya2xpbmU6IHtcclxuICAgICAgICAgICAgICAgICAgICBlbmFibGVkOiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHBsb3RPcHRpb25zOiB7fSxcclxuICAgICAgICAgICAgbGVnZW5kOiB7XHJcbiAgICAgICAgICAgICAgICBzaG93OiBmYWxzZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBkYXRhTGFiZWxzOiB7XHJcbiAgICAgICAgICAgICAgICBlbmFibGVkOiBmYWxzZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBmaWxsOiB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiAnc29saWQnLFxyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzdHJva2U6IHtcclxuICAgICAgICAgICAgICAgIGN1cnZlOiAnc21vb3RoJyxcclxuICAgICAgICAgICAgICAgIHNob3c6IHRydWUsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMyxcclxuICAgICAgICAgICAgICAgIGNvbG9yczogW0tUQXBwLmdldFNldHRpbmdzKClbJ2NvbG9ycyddWyd0aGVtZSddWydiYXNlJ11bJ2RhbmdlciddXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB4YXhpczoge1xyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcmllczogWydGZWInLCAnTWFyJywgJ0FwcicsICdNYXknLCAnSnVuJ10sXHJcbiAgICAgICAgICAgICAgICBheGlzQm9yZGVyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hvdzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgYXhpc1RpY2tzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hvdzogZmFsc2VcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBsYWJlbHM6IHtcclxuICAgICAgICAgICAgICAgICAgICBzaG93OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcnM6IEtUQXBwLmdldFNldHRpbmdzKClbJ2NvbG9ycyddWydncmF5J11bJ2dyYXktNTAwJ10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMTJweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk6IEtUQXBwLmdldFNldHRpbmdzKClbJ2ZvbnQtZmFtaWx5J11cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgY3Jvc3NoYWlyczoge1xyXG4gICAgICAgICAgICAgICAgICAgIHNob3c6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnZnJvbnQnLFxyXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogS1RBcHAuZ2V0U2V0dGluZ3MoKVsnY29sb3JzJ11bJ2dyYXknXVsnZ3JheS0zMDAnXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhc2hBcnJheTogM1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB0b29sdGlwOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBmb3JtYXR0ZXI6IHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgICAgICAgICBvZmZzZXRZOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMTJweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk6IEtUQXBwLmdldFNldHRpbmdzKClbJ2ZvbnQtZmFtaWx5J11cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHlheGlzOiB7XHJcbiAgICAgICAgICAgICAgICBsYWJlbHM6IHtcclxuICAgICAgICAgICAgICAgICAgICBzaG93OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcnM6IEtUQXBwLmdldFNldHRpbmdzKClbJ2NvbG9ycyddWydncmF5J11bJ2dyYXktNTAwJ10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMTJweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk6IEtUQXBwLmdldFNldHRpbmdzKClbJ2ZvbnQtZmFtaWx5J11cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHN0YXRlczoge1xyXG4gICAgICAgICAgICAgICAgbm9ybWFsOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdub25lJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IDBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgaG92ZXI6IHtcclxuICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ25vbmUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogMFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBhY3RpdmU6IHtcclxuICAgICAgICAgICAgICAgICAgICBhbGxvd011bHRpcGxlRGF0YVBvaW50c1NlbGVjdGlvbjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdub25lJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IDBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHRvb2x0aXA6IHtcclxuICAgICAgICAgICAgICAgIHN0eWxlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6ICcxMnB4JyxcclxuICAgICAgICAgICAgICAgICAgICBmb250RmFtaWx5OiBLVEFwcC5nZXRTZXR0aW5ncygpWydmb250LWZhbWlseSddXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgeToge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcm1hdHRlcjogZnVuY3Rpb24gKHZhbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCIkXCIgKyB2YWwgKyBcIiB0aG91c2FuZHNcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY29sb3JzOiBbS1RBcHAuZ2V0U2V0dGluZ3MoKVsnY29sb3JzJ11bJ3RoZW1lJ11bJ2xpZ2h0J11bJ2RhbmdlciddXSxcclxuICAgICAgICAgICAgbWFya2Vyczoge1xyXG4gICAgICAgICAgICAgICAgY29sb3JzOiBbS1RBcHAuZ2V0U2V0dGluZ3MoKVsnY29sb3JzJ11bJ3RoZW1lJ11bJ2xpZ2h0J11bJ2RhbmdlciddXSxcclxuICAgICAgICAgICAgICAgIHN0cm9rZUNvbG9yOiBbS1RBcHAuZ2V0U2V0dGluZ3MoKVsnY29sb3JzJ11bJ3RoZW1lJ11bJ2Jhc2UnXVsnZGFuZ2VyJ11dLFxyXG4gICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg6IDNcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHZhciBjaGFydCA9IG5ldyBBcGV4Q2hhcnRzKGVsZW1lbnQsIG9wdGlvbnMpO1xyXG4gICAgICAgIGNoYXJ0LnJlbmRlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBfaW5pdFN0YXRzV2lkZ2V0OSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwia3Rfc3RhdHNfd2lkZ2V0XzlfY2hhcnRcIik7XHJcblxyXG4gICAgICAgIGlmICghZWxlbWVudCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgb3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgc2VyaWVzOiBbe1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ05ldCBQcm9maXQnLFxyXG4gICAgICAgICAgICAgICAgZGF0YTogWzMwLCA0NSwgMzIsIDcwLCA0MF1cclxuICAgICAgICAgICAgfV0sXHJcbiAgICAgICAgICAgIGNoYXJ0OiB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiAnYXJlYScsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDE1MCxcclxuICAgICAgICAgICAgICAgIHRvb2xiYXI6IHtcclxuICAgICAgICAgICAgICAgICAgICBzaG93OiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHpvb206IHtcclxuICAgICAgICAgICAgICAgICAgICBlbmFibGVkOiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHNwYXJrbGluZToge1xyXG4gICAgICAgICAgICAgICAgICAgIGVuYWJsZWQ6IHRydWVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcGxvdE9wdGlvbnM6IHt9LFxyXG4gICAgICAgICAgICBsZWdlbmQ6IHtcclxuICAgICAgICAgICAgICAgIHNob3c6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGRhdGFMYWJlbHM6IHtcclxuICAgICAgICAgICAgICAgIGVuYWJsZWQ6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGZpbGw6IHtcclxuICAgICAgICAgICAgICAgIHR5cGU6ICdzb2xpZCcsXHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHN0cm9rZToge1xyXG4gICAgICAgICAgICAgICAgY3VydmU6ICdzbW9vdGgnLFxyXG4gICAgICAgICAgICAgICAgc2hvdzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAzLFxyXG4gICAgICAgICAgICAgICAgY29sb3JzOiBbS1RBcHAuZ2V0U2V0dGluZ3MoKVsnY29sb3JzJ11bJ3RoZW1lJ11bJ2Jhc2UnXVsncHJpbWFyeSddXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB4YXhpczoge1xyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcmllczogWydGZWInLCAnTWFyJywgJ0FwcicsICdNYXknLCAnSnVuJ10sXHJcbiAgICAgICAgICAgICAgICBheGlzQm9yZGVyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hvdzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgYXhpc1RpY2tzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hvdzogZmFsc2VcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBsYWJlbHM6IHtcclxuICAgICAgICAgICAgICAgICAgICBzaG93OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcnM6IEtUQXBwLmdldFNldHRpbmdzKClbJ2NvbG9ycyddWydncmF5J11bJ2dyYXktNTAwJ10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMTJweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk6IEtUQXBwLmdldFNldHRpbmdzKClbJ2ZvbnQtZmFtaWx5J11cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgY3Jvc3NoYWlyczoge1xyXG4gICAgICAgICAgICAgICAgICAgIHNob3c6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnZnJvbnQnLFxyXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogS1RBcHAuZ2V0U2V0dGluZ3MoKVsnY29sb3JzJ11bJ2dyYXknXVsnZ3JheS0zMDAnXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhc2hBcnJheTogM1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB0b29sdGlwOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBmb3JtYXR0ZXI6IHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgICAgICAgICBvZmZzZXRZOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMTJweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk6IEtUQXBwLmdldFNldHRpbmdzKClbJ2ZvbnQtZmFtaWx5J11cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHlheGlzOiB7XHJcbiAgICAgICAgICAgICAgICBsYWJlbHM6IHtcclxuICAgICAgICAgICAgICAgICAgICBzaG93OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcnM6IEtUQXBwLmdldFNldHRpbmdzKClbJ2NvbG9ycyddWydncmF5J11bJ2dyYXktNTAwJ10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMTJweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk6IEtUQXBwLmdldFNldHRpbmdzKClbJ2ZvbnQtZmFtaWx5J11cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHN0YXRlczoge1xyXG4gICAgICAgICAgICAgICAgbm9ybWFsOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdub25lJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IDBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgaG92ZXI6IHtcclxuICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ25vbmUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogMFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBhY3RpdmU6IHtcclxuICAgICAgICAgICAgICAgICAgICBhbGxvd011bHRpcGxlRGF0YVBvaW50c1NlbGVjdGlvbjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdub25lJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IDBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHRvb2x0aXA6IHtcclxuICAgICAgICAgICAgICAgIHN0eWxlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6ICcxMnB4JyxcclxuICAgICAgICAgICAgICAgICAgICBmb250RmFtaWx5OiBLVEFwcC5nZXRTZXR0aW5ncygpWydmb250LWZhbWlseSddXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgeToge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcm1hdHRlcjogZnVuY3Rpb24gKHZhbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCIkXCIgKyB2YWwgKyBcIiB0aG91c2FuZHNcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY29sb3JzOiBbS1RBcHAuZ2V0U2V0dGluZ3MoKVsnY29sb3JzJ11bJ3RoZW1lJ11bJ2xpZ2h0J11bJ3ByaW1hcnknXV0sXHJcbiAgICAgICAgICAgIG1hcmtlcnM6IHtcclxuICAgICAgICAgICAgICAgIGNvbG9yczogW0tUQXBwLmdldFNldHRpbmdzKClbJ2NvbG9ycyddWyd0aGVtZSddWydsaWdodCddWydwcmltYXJ5J11dLFxyXG4gICAgICAgICAgICAgICAgc3Ryb2tlQ29sb3I6IFtLVEFwcC5nZXRTZXR0aW5ncygpWydjb2xvcnMnXVsndGhlbWUnXVsnYmFzZSddWydwcmltYXJ5J11dLFxyXG4gICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg6IDNcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHZhciBjaGFydCA9IG5ldyBBcGV4Q2hhcnRzKGVsZW1lbnQsIG9wdGlvbnMpO1xyXG4gICAgICAgIGNoYXJ0LnJlbmRlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBfaW5pdFN0YXRzV2lkZ2V0MTAgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImt0X3N0YXRzX3dpZGdldF8xMF9jaGFydFwiKTtcclxuICAgICAgICB2YXIgaGVpZ2h0ID0gcGFyc2VJbnQoS1RVdGlsLmNzcyhlbGVtZW50LCAnaGVpZ2h0JykpO1xyXG4gICAgICAgIHZhciBjb2xvciA9IEtUVXRpbC5oYXNBdHRyKGVsZW1lbnQsICdkYXRhLWNvbG9yJykgPyBLVFV0aWwuYXR0cihlbGVtZW50LCAnZGF0YS1jb2xvcicpIDogJ2luZm8nO1xyXG5cclxuICAgICAgICBpZiAoIWVsZW1lbnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIG9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgIHNlcmllczogW3tcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdOZXQgUHJvZml0JyxcclxuICAgICAgICAgICAgICAgIGRhdGE6IFs0MCwgNDAsIDMwLCAzMCwgMzUsIDM1LCA1MF1cclxuICAgICAgICAgICAgfV0sXHJcbiAgICAgICAgICAgIGNoYXJ0OiB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiAnYXJlYScsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGhlaWdodCxcclxuICAgICAgICAgICAgICAgIHRvb2xiYXI6IHtcclxuICAgICAgICAgICAgICAgICAgICBzaG93OiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHpvb206IHtcclxuICAgICAgICAgICAgICAgICAgICBlbmFibGVkOiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHNwYXJrbGluZToge1xyXG4gICAgICAgICAgICAgICAgICAgIGVuYWJsZWQ6IHRydWVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcGxvdE9wdGlvbnM6IHt9LFxyXG4gICAgICAgICAgICBsZWdlbmQ6IHtcclxuICAgICAgICAgICAgICAgIHNob3c6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGRhdGFMYWJlbHM6IHtcclxuICAgICAgICAgICAgICAgIGVuYWJsZWQ6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGZpbGw6IHtcclxuICAgICAgICAgICAgICAgIHR5cGU6ICdzb2xpZCcsXHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHN0cm9rZToge1xyXG4gICAgICAgICAgICAgICAgY3VydmU6ICdzbW9vdGgnLFxyXG4gICAgICAgICAgICAgICAgc2hvdzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAzLFxyXG4gICAgICAgICAgICAgICAgY29sb3JzOiBbS1RBcHAuZ2V0U2V0dGluZ3MoKVsnY29sb3JzJ11bJ3RoZW1lJ11bJ2Jhc2UnXVtjb2xvcl1dXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHhheGlzOiB7XHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yaWVzOiBbJ0ZlYicsICdNYXInLCAnQXByJywgJ01heScsICdKdW4nLCAnSnVsJywgJ0F1ZyddLFxyXG4gICAgICAgICAgICAgICAgYXhpc0JvcmRlcjoge1xyXG4gICAgICAgICAgICAgICAgICAgIHNob3c6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGF4aXNUaWNrczoge1xyXG4gICAgICAgICAgICAgICAgICAgIHNob3c6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgbGFiZWxzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hvdzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3JzOiBLVEFwcC5nZXRTZXR0aW5ncygpWydjb2xvcnMnXVsnZ3JheSddWydncmF5LTUwMCddLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogJzEycHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250RmFtaWx5OiBLVEFwcC5nZXRTZXR0aW5ncygpWydmb250LWZhbWlseSddXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGNyb3NzaGFpcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICBzaG93OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2Zyb250JyxcclxuICAgICAgICAgICAgICAgICAgICBzdHJva2U6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IEtUQXBwLmdldFNldHRpbmdzKClbJ2NvbG9ycyddWydncmF5J11bJ2dyYXktMzAwJ10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXNoQXJyYXk6IDNcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgdG9vbHRpcDoge1xyXG4gICAgICAgICAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybWF0dGVyOiB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgb2Zmc2V0WTogMCxcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogJzEycHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250RmFtaWx5OiBLVEFwcC5nZXRTZXR0aW5ncygpWydmb250LWZhbWlseSddXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB5YXhpczoge1xyXG4gICAgICAgICAgICAgICAgbWluOiAwLFxyXG4gICAgICAgICAgICAgICAgbWF4OiA1NSxcclxuICAgICAgICAgICAgICAgIGxhYmVsczoge1xyXG4gICAgICAgICAgICAgICAgICAgIHNob3c6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yczogS1RBcHAuZ2V0U2V0dGluZ3MoKVsnY29sb3JzJ11bJ2dyYXknXVsnZ3JheS01MDAnXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6ICcxMnB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udEZhbWlseTogS1RBcHAuZ2V0U2V0dGluZ3MoKVsnZm9udC1mYW1pbHknXVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc3RhdGVzOiB7XHJcbiAgICAgICAgICAgICAgICBub3JtYWw6IHtcclxuICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ25vbmUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogMFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBob3Zlcjoge1xyXG4gICAgICAgICAgICAgICAgICAgIGZpbHRlcjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnbm9uZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiAwXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGFjdGl2ZToge1xyXG4gICAgICAgICAgICAgICAgICAgIGFsbG93TXVsdGlwbGVEYXRhUG9pbnRzU2VsZWN0aW9uOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ25vbmUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogMFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdG9vbHRpcDoge1xyXG4gICAgICAgICAgICAgICAgc3R5bGU6IHtcclxuICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogJzEycHgnLFxyXG4gICAgICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk6IEtUQXBwLmdldFNldHRpbmdzKClbJ2ZvbnQtZmFtaWx5J11cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB5OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybWF0dGVyOiBmdW5jdGlvbiAodmFsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIiRcIiArIHZhbCArIFwiIHRob3VzYW5kc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjb2xvcnM6IFtLVEFwcC5nZXRTZXR0aW5ncygpWydjb2xvcnMnXVsndGhlbWUnXVsnbGlnaHQnXVtjb2xvcl1dLFxyXG4gICAgICAgICAgICBtYXJrZXJzOiB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcnM6IFtLVEFwcC5nZXRTZXR0aW5ncygpWydjb2xvcnMnXVsndGhlbWUnXVsnbGlnaHQnXVtjb2xvcl1dLFxyXG4gICAgICAgICAgICAgICAgc3Ryb2tlQ29sb3I6IFtLVEFwcC5nZXRTZXR0aW5ncygpWydjb2xvcnMnXVsndGhlbWUnXVsnYmFzZSddW2NvbG9yXV0sXHJcbiAgICAgICAgICAgICAgICBzdHJva2VXaWR0aDogM1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdmFyIGNoYXJ0ID0gbmV3IEFwZXhDaGFydHMoZWxlbWVudCwgb3B0aW9ucyk7XHJcbiAgICAgICAgY2hhcnQucmVuZGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIF9pbml0U3RhdHNXaWRnZXQxMSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwia3Rfc3RhdHNfd2lkZ2V0XzExX2NoYXJ0XCIpO1xyXG5cclxuICAgICAgICB2YXIgaGVpZ2h0ID0gcGFyc2VJbnQoS1RVdGlsLmNzcyhlbGVtZW50LCAnaGVpZ2h0JykpO1xyXG4gICAgICAgIHZhciBjb2xvciA9IEtUVXRpbC5oYXNBdHRyKGVsZW1lbnQsICdkYXRhLWNvbG9yJykgPyBLVFV0aWwuYXR0cihlbGVtZW50LCAnZGF0YS1jb2xvcicpIDogJ3N1Y2Nlc3MnO1xyXG5cclxuICAgICAgICBpZiAoIWVsZW1lbnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIG9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgIHNlcmllczogW3tcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdOZXQgUHJvZml0JyxcclxuICAgICAgICAgICAgICAgIGRhdGE6IFs0MCwgNDAsIDMwLCAzMCwgMzUsIDM1LCA1MF1cclxuICAgICAgICAgICAgfV0sXHJcbiAgICAgICAgICAgIGNoYXJ0OiB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiAnYXJlYScsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDE1MCxcclxuICAgICAgICAgICAgICAgIHRvb2xiYXI6IHtcclxuICAgICAgICAgICAgICAgICAgICBzaG93OiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHpvb206IHtcclxuICAgICAgICAgICAgICAgICAgICBlbmFibGVkOiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHNwYXJrbGluZToge1xyXG4gICAgICAgICAgICAgICAgICAgIGVuYWJsZWQ6IHRydWVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcGxvdE9wdGlvbnM6IHt9LFxyXG4gICAgICAgICAgICBsZWdlbmQ6IHtcclxuICAgICAgICAgICAgICAgIHNob3c6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGRhdGFMYWJlbHM6IHtcclxuICAgICAgICAgICAgICAgIGVuYWJsZWQ6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGZpbGw6IHtcclxuICAgICAgICAgICAgICAgIHR5cGU6ICdzb2xpZCcsXHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHN0cm9rZToge1xyXG4gICAgICAgICAgICAgICAgY3VydmU6ICdzbW9vdGgnLFxyXG4gICAgICAgICAgICAgICAgc2hvdzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAzLFxyXG4gICAgICAgICAgICAgICAgY29sb3JzOiBbS1RBcHAuZ2V0U2V0dGluZ3MoKVsnY29sb3JzJ11bJ3RoZW1lJ11bJ2Jhc2UnXVtjb2xvcl1dXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHhheGlzOiB7XHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yaWVzOiBbJ0ZlYicsICdNYXInLCAnQXByJywgJ01heScsICdKdW4nLCAnQXVnJywgJ1NlcCddLFxyXG4gICAgICAgICAgICAgICAgYXhpc0JvcmRlcjoge1xyXG4gICAgICAgICAgICAgICAgICAgIHNob3c6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGF4aXNUaWNrczoge1xyXG4gICAgICAgICAgICAgICAgICAgIHNob3c6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgbGFiZWxzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hvdzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3JzOiBLVEFwcC5nZXRTZXR0aW5ncygpWydjb2xvcnMnXVsnZ3JheSddWydncmF5LTUwMCddLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogJzEycHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250RmFtaWx5OiBLVEFwcC5nZXRTZXR0aW5ncygpWydmb250LWZhbWlseSddXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGNyb3NzaGFpcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICBzaG93OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2Zyb250JyxcclxuICAgICAgICAgICAgICAgICAgICBzdHJva2U6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IEtUQXBwLmdldFNldHRpbmdzKClbJ2NvbG9ycyddWydncmF5J11bJ2dyYXktMzAwJ10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXNoQXJyYXk6IDNcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgdG9vbHRpcDoge1xyXG4gICAgICAgICAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybWF0dGVyOiB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgb2Zmc2V0WTogMCxcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogJzEycHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250RmFtaWx5OiBLVEFwcC5nZXRTZXR0aW5ncygpWydmb250LWZhbWlseSddXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB5YXhpczoge1xyXG4gICAgICAgICAgICAgICAgbWluOiAwLFxyXG4gICAgICAgICAgICAgICAgbWF4OiA1NSxcclxuICAgICAgICAgICAgICAgIGxhYmVsczoge1xyXG4gICAgICAgICAgICAgICAgICAgIHNob3c6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yczogS1RBcHAuZ2V0U2V0dGluZ3MoKVsnY29sb3JzJ11bJ2dyYXknXVsnZ3JheS01MDAnXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6ICcxMnB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udEZhbWlseTogS1RBcHAuZ2V0U2V0dGluZ3MoKVsnZm9udC1mYW1pbHknXVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc3RhdGVzOiB7XHJcbiAgICAgICAgICAgICAgICBub3JtYWw6IHtcclxuICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ25vbmUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogMFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBob3Zlcjoge1xyXG4gICAgICAgICAgICAgICAgICAgIGZpbHRlcjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnbm9uZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiAwXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGFjdGl2ZToge1xyXG4gICAgICAgICAgICAgICAgICAgIGFsbG93TXVsdGlwbGVEYXRhUG9pbnRzU2VsZWN0aW9uOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ25vbmUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogMFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdG9vbHRpcDoge1xyXG4gICAgICAgICAgICAgICAgc3R5bGU6IHtcclxuICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogJzEycHgnLFxyXG4gICAgICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk6IEtUQXBwLmdldFNldHRpbmdzKClbJ2ZvbnQtZmFtaWx5J11cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB5OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybWF0dGVyOiBmdW5jdGlvbiAodmFsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIiRcIiArIHZhbCArIFwiIHRob3VzYW5kc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjb2xvcnM6IFtLVEFwcC5nZXRTZXR0aW5ncygpWydjb2xvcnMnXVsndGhlbWUnXVsnbGlnaHQnXVtjb2xvcl1dLFxyXG4gICAgICAgICAgICBtYXJrZXJzOiB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcnM6IFtLVEFwcC5nZXRTZXR0aW5ncygpWydjb2xvcnMnXVsndGhlbWUnXVsnbGlnaHQnXVtjb2xvcl1dLFxyXG4gICAgICAgICAgICAgICAgc3Ryb2tlQ29sb3I6IFtLVEFwcC5nZXRTZXR0aW5ncygpWydjb2xvcnMnXVsndGhlbWUnXVsnYmFzZSddW2NvbG9yXV0sXHJcbiAgICAgICAgICAgICAgICBzdHJva2VXaWR0aDogM1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdmFyIGNoYXJ0ID0gbmV3IEFwZXhDaGFydHMoZWxlbWVudCwgb3B0aW9ucyk7XHJcbiAgICAgICAgY2hhcnQucmVuZGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIF9pbml0U3RhdHNXaWRnZXQxMiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwia3Rfc3RhdHNfd2lkZ2V0XzEyX2NoYXJ0XCIpO1xyXG5cclxuICAgICAgICB2YXIgaGVpZ2h0ID0gcGFyc2VJbnQoS1RVdGlsLmNzcyhlbGVtZW50LCAnaGVpZ2h0JykpO1xyXG4gICAgICAgIHZhciBjb2xvciA9IEtUVXRpbC5oYXNBdHRyKGVsZW1lbnQsICdkYXRhLWNvbG9yJykgPyBLVFV0aWwuYXR0cihlbGVtZW50LCAnZGF0YS1jb2xvcicpIDogJ3ByaW1hcnknO1xyXG5cclxuICAgICAgICBpZiAoIWVsZW1lbnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIG9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgIHNlcmllczogW3tcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdOZXQgUHJvZml0JyxcclxuICAgICAgICAgICAgICAgIGRhdGE6IFs0MCwgNDAsIDMwLCAzMCwgMzUsIDM1LCA1MF1cclxuICAgICAgICAgICAgfV0sXHJcbiAgICAgICAgICAgIGNoYXJ0OiB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiAnYXJlYScsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGhlaWdodCxcclxuICAgICAgICAgICAgICAgIHRvb2xiYXI6IHtcclxuICAgICAgICAgICAgICAgICAgICBzaG93OiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHpvb206IHtcclxuICAgICAgICAgICAgICAgICAgICBlbmFibGVkOiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHNwYXJrbGluZToge1xyXG4gICAgICAgICAgICAgICAgICAgIGVuYWJsZWQ6IHRydWVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcGxvdE9wdGlvbnM6IHt9LFxyXG4gICAgICAgICAgICBsZWdlbmQ6IHtcclxuICAgICAgICAgICAgICAgIHNob3c6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGRhdGFMYWJlbHM6IHtcclxuICAgICAgICAgICAgICAgIGVuYWJsZWQ6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGZpbGw6IHtcclxuICAgICAgICAgICAgICAgIHR5cGU6ICdzb2xpZCcsXHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHN0cm9rZToge1xyXG4gICAgICAgICAgICAgICAgY3VydmU6ICdzbW9vdGgnLFxyXG4gICAgICAgICAgICAgICAgc2hvdzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAzLFxyXG4gICAgICAgICAgICAgICAgY29sb3JzOiBbS1RBcHAuZ2V0U2V0dGluZ3MoKVsnY29sb3JzJ11bJ3RoZW1lJ11bJ2Jhc2UnXVtjb2xvcl1dXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHhheGlzOiB7XHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yaWVzOiBbJ0ZlYicsICdNYXInLCAnQXByJywgJ01heScsICdKdW4nLCAnQXVnJywgJ1NlcCddLFxyXG4gICAgICAgICAgICAgICAgYXhpc0JvcmRlcjoge1xyXG4gICAgICAgICAgICAgICAgICAgIHNob3c6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGF4aXNUaWNrczoge1xyXG4gICAgICAgICAgICAgICAgICAgIHNob3c6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgbGFiZWxzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hvdzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3JzOiBLVEFwcC5nZXRTZXR0aW5ncygpWydjb2xvcnMnXVsnZ3JheSddWydncmF5LTUwMCddLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogJzEycHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250RmFtaWx5OiBLVEFwcC5nZXRTZXR0aW5ncygpWydmb250LWZhbWlseSddXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGNyb3NzaGFpcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICBzaG93OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2Zyb250JyxcclxuICAgICAgICAgICAgICAgICAgICBzdHJva2U6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IEtUQXBwLmdldFNldHRpbmdzKClbJ2NvbG9ycyddWydncmF5J11bJ2dyYXktMzAwJ10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXNoQXJyYXk6IDNcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgdG9vbHRpcDoge1xyXG4gICAgICAgICAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybWF0dGVyOiB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgb2Zmc2V0WTogMCxcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogJzEycHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250RmFtaWx5OiBLVEFwcC5nZXRTZXR0aW5ncygpWydmb250LWZhbWlseSddXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB5YXhpczoge1xyXG4gICAgICAgICAgICAgICAgbWluOiAwLFxyXG4gICAgICAgICAgICAgICAgbWF4OiA1NSxcclxuICAgICAgICAgICAgICAgIGxhYmVsczoge1xyXG4gICAgICAgICAgICAgICAgICAgIHNob3c6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yczogS1RBcHAuZ2V0U2V0dGluZ3MoKVsnY29sb3JzJ11bJ2dyYXknXVsnZ3JheS01MDAnXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6ICcxMnB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udEZhbWlseTogS1RBcHAuZ2V0U2V0dGluZ3MoKVsnZm9udC1mYW1pbHknXVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc3RhdGVzOiB7XHJcbiAgICAgICAgICAgICAgICBub3JtYWw6IHtcclxuICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ25vbmUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogMFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBob3Zlcjoge1xyXG4gICAgICAgICAgICAgICAgICAgIGZpbHRlcjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnbm9uZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiAwXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGFjdGl2ZToge1xyXG4gICAgICAgICAgICAgICAgICAgIGFsbG93TXVsdGlwbGVEYXRhUG9pbnRzU2VsZWN0aW9uOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ25vbmUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogMFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdG9vbHRpcDoge1xyXG4gICAgICAgICAgICAgICAgc3R5bGU6IHtcclxuICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogJzEycHgnLFxyXG4gICAgICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk6IEtUQXBwLmdldFNldHRpbmdzKClbJ2ZvbnQtZmFtaWx5J11cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB5OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybWF0dGVyOiBmdW5jdGlvbiAodmFsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIiRcIiArIHZhbCArIFwiIHRob3VzYW5kc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjb2xvcnM6IFtLVEFwcC5nZXRTZXR0aW5ncygpWydjb2xvcnMnXVsndGhlbWUnXVsnbGlnaHQnXVtjb2xvcl1dLFxyXG4gICAgICAgICAgICBtYXJrZXJzOiB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcnM6IFtLVEFwcC5nZXRTZXR0aW5ncygpWydjb2xvcnMnXVsndGhlbWUnXVsnbGlnaHQnXVtjb2xvcl1dLFxyXG4gICAgICAgICAgICAgICAgc3Ryb2tlQ29sb3I6IFtLVEFwcC5nZXRTZXR0aW5ncygpWydjb2xvcnMnXVsndGhlbWUnXVsnYmFzZSddW2NvbG9yXV0sXHJcbiAgICAgICAgICAgICAgICBzdHJva2VXaWR0aDogM1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdmFyIGNoYXJ0ID0gbmV3IEFwZXhDaGFydHMoZWxlbWVudCwgb3B0aW9ucyk7XHJcbiAgICAgICAgY2hhcnQucmVuZGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ2hhcnRzIHdpZGdldHNcclxuICAgIHZhciBfaW5pdENoYXJ0c1dpZGdldDEgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImt0X2NoYXJ0c193aWRnZXRfMV9jaGFydFwiKTtcclxuXHJcbiAgICAgICAgaWYgKCFlbGVtZW50KSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBvcHRpb25zID0ge1xyXG4gICAgICAgICAgICBzZXJpZXM6IFt7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnTmV0IFByb2ZpdCcsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiBbNDQsIDU1LCA1NywgNTYsIDYxLCA1OF1cclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ1JldmVudWUnLFxyXG4gICAgICAgICAgICAgICAgZGF0YTogWzc2LCA4NSwgMTAxLCA5OCwgODcsIDEwNV1cclxuICAgICAgICAgICAgfV0sXHJcbiAgICAgICAgICAgIGNoYXJ0OiB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiAnYmFyJyxcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMzUwLFxyXG4gICAgICAgICAgICAgICAgdG9vbGJhcjoge1xyXG4gICAgICAgICAgICAgICAgICAgIHNob3c6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHBsb3RPcHRpb25zOiB7XHJcbiAgICAgICAgICAgICAgICBiYXI6IHtcclxuICAgICAgICAgICAgICAgICAgICBob3Jpem9udGFsOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBjb2x1bW5XaWR0aDogWyczMCUnXSxcclxuICAgICAgICAgICAgICAgICAgICBlbmRpbmdTaGFwZTogJ3JvdW5kZWQnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBsZWdlbmQ6IHtcclxuICAgICAgICAgICAgICAgIHNob3c6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGRhdGFMYWJlbHM6IHtcclxuICAgICAgICAgICAgICAgIGVuYWJsZWQ6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHN0cm9rZToge1xyXG4gICAgICAgICAgICAgICAgc2hvdzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAyLFxyXG4gICAgICAgICAgICAgICAgY29sb3JzOiBbJ3RyYW5zcGFyZW50J11cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgeGF4aXM6IHtcclxuICAgICAgICAgICAgICAgIGNhdGVnb3JpZXM6IFsnRmViJywgJ01hcicsICdBcHInLCAnTWF5JywgJ0p1bicsICdKdWwnXSxcclxuICAgICAgICAgICAgICAgIGF4aXNCb3JkZXI6IHtcclxuICAgICAgICAgICAgICAgICAgICBzaG93OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBheGlzVGlja3M6IHtcclxuICAgICAgICAgICAgICAgICAgICBzaG93OiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGxhYmVsczoge1xyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yczogS1RBcHAuZ2V0U2V0dGluZ3MoKVsnY29sb3JzJ11bJ2dyYXknXVsnZ3JheS01MDAnXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6ICcxMnB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udEZhbWlseTogS1RBcHAuZ2V0U2V0dGluZ3MoKVsnZm9udC1mYW1pbHknXVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgeWF4aXM6IHtcclxuICAgICAgICAgICAgICAgIGxhYmVsczoge1xyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yczogS1RBcHAuZ2V0U2V0dGluZ3MoKVsnY29sb3JzJ11bJ2dyYXknXVsnZ3JheS01MDAnXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6ICcxMnB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udEZhbWlseTogS1RBcHAuZ2V0U2V0dGluZ3MoKVsnZm9udC1mYW1pbHknXVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZmlsbDoge1xyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzdGF0ZXM6IHtcclxuICAgICAgICAgICAgICAgIG5vcm1hbDoge1xyXG4gICAgICAgICAgICAgICAgICAgIGZpbHRlcjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnbm9uZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiAwXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGhvdmVyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdub25lJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IDBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgYWN0aXZlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxsb3dNdWx0aXBsZURhdGFQb2ludHNTZWxlY3Rpb246IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGZpbHRlcjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnbm9uZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiAwXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB0b29sdGlwOiB7XHJcbiAgICAgICAgICAgICAgICBzdHlsZToge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMTJweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgZm9udEZhbWlseTogS1RBcHAuZ2V0U2V0dGluZ3MoKVsnZm9udC1mYW1pbHknXVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHk6IHtcclxuICAgICAgICAgICAgICAgICAgICBmb3JtYXR0ZXI6IGZ1bmN0aW9uICh2YWwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiJFwiICsgdmFsICsgXCIgdGhvdXNhbmRzXCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNvbG9yczogW0tUQXBwLmdldFNldHRpbmdzKClbJ2NvbG9ycyddWyd0aGVtZSddWydiYXNlJ11bJ3N1Y2Nlc3MnXSwgS1RBcHAuZ2V0U2V0dGluZ3MoKVsnY29sb3JzJ11bJ2dyYXknXVsnZ3JheS0zMDAnXV0sXHJcbiAgICAgICAgICAgIGdyaWQ6IHtcclxuICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiBLVEFwcC5nZXRTZXR0aW5ncygpWydjb2xvcnMnXVsnZ3JheSddWydncmF5LTIwMCddLFxyXG4gICAgICAgICAgICAgICAgc3Ryb2tlRGFzaEFycmF5OiA0LFxyXG4gICAgICAgICAgICAgICAgeWF4aXM6IHtcclxuICAgICAgICAgICAgICAgICAgICBsaW5lczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaG93OiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdmFyIGNoYXJ0ID0gbmV3IEFwZXhDaGFydHMoZWxlbWVudCwgb3B0aW9ucyk7XHJcbiAgICAgICAgY2hhcnQucmVuZGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIF9pbml0Q2hhcnRzV2lkZ2V0MiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwia3RfY2hhcnRzX3dpZGdldF8yX2NoYXJ0XCIpO1xyXG5cclxuICAgICAgICBpZiAoIWVsZW1lbnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIG9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgIHNlcmllczogW3tcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdOZXQgUHJvZml0JyxcclxuICAgICAgICAgICAgICAgIGRhdGE6IFs0NCwgNTUsIDU3LCA1NiwgNjEsIDU4XVxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnUmV2ZW51ZScsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiBbNzYsIDg1LCAxMDEsIDk4LCA4NywgMTA1XVxyXG4gICAgICAgICAgICB9XSxcclxuICAgICAgICAgICAgY2hhcnQ6IHtcclxuICAgICAgICAgICAgICAgIHR5cGU6ICdiYXInLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzNTAsXHJcbiAgICAgICAgICAgICAgICB0b29sYmFyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hvdzogZmFsc2VcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcGxvdE9wdGlvbnM6IHtcclxuICAgICAgICAgICAgICAgIGJhcjoge1xyXG4gICAgICAgICAgICAgICAgICAgIGhvcml6b250YWw6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbHVtbldpZHRoOiBbJzMwJSddLFxyXG4gICAgICAgICAgICAgICAgICAgIGVuZGluZ1NoYXBlOiAncm91bmRlZCdcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGxlZ2VuZDoge1xyXG4gICAgICAgICAgICAgICAgc2hvdzogZmFsc2VcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZGF0YUxhYmVsczoge1xyXG4gICAgICAgICAgICAgICAgZW5hYmxlZDogZmFsc2VcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc3Ryb2tlOiB7XHJcbiAgICAgICAgICAgICAgICBzaG93OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDIsXHJcbiAgICAgICAgICAgICAgICBjb2xvcnM6IFsndHJhbnNwYXJlbnQnXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB4YXhpczoge1xyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcmllczogWydGZWInLCAnTWFyJywgJ0FwcicsICdNYXknLCAnSnVuJywgJ0p1bCddLFxyXG4gICAgICAgICAgICAgICAgYXhpc0JvcmRlcjoge1xyXG4gICAgICAgICAgICAgICAgICAgIHNob3c6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGF4aXNUaWNrczoge1xyXG4gICAgICAgICAgICAgICAgICAgIHNob3c6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgbGFiZWxzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3JzOiBLVEFwcC5nZXRTZXR0aW5ncygpWydjb2xvcnMnXVsnZ3JheSddWydncmF5LTUwMCddLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogJzEycHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250RmFtaWx5OiBLVEFwcC5nZXRTZXR0aW5ncygpWydmb250LWZhbWlseSddXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB5YXhpczoge1xyXG4gICAgICAgICAgICAgICAgbGFiZWxzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3JzOiBLVEFwcC5nZXRTZXR0aW5ncygpWydjb2xvcnMnXVsnZ3JheSddWydncmF5LTUwMCddLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogJzEycHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250RmFtaWx5OiBLVEFwcC5nZXRTZXR0aW5ncygpWydmb250LWZhbWlseSddXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBmaWxsOiB7XHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHN0YXRlczoge1xyXG4gICAgICAgICAgICAgICAgbm9ybWFsOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdub25lJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IDBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgaG92ZXI6IHtcclxuICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ25vbmUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogMFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBhY3RpdmU6IHtcclxuICAgICAgICAgICAgICAgICAgICBhbGxvd011bHRpcGxlRGF0YVBvaW50c1NlbGVjdGlvbjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdub25lJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IDBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHRvb2x0aXA6IHtcclxuICAgICAgICAgICAgICAgIHN0eWxlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6ICcxMnB4JyxcclxuICAgICAgICAgICAgICAgICAgICBmb250RmFtaWx5OiBLVEFwcC5nZXRTZXR0aW5ncygpWydmb250LWZhbWlseSddXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgeToge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcm1hdHRlcjogZnVuY3Rpb24gKHZhbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCIkXCIgKyB2YWwgKyBcIiB0aG91c2FuZHNcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY29sb3JzOiBbS1RBcHAuZ2V0U2V0dGluZ3MoKVsnY29sb3JzJ11bJ3RoZW1lJ11bJ2Jhc2UnXVsnd2FybmluZyddLCBLVEFwcC5nZXRTZXR0aW5ncygpWydjb2xvcnMnXVsnZ3JheSddWydncmF5LTMwMCddXSxcclxuICAgICAgICAgICAgZ3JpZDoge1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6IEtUQXBwLmdldFNldHRpbmdzKClbJ2NvbG9ycyddWydncmF5J11bJ2dyYXktMjAwJ10sXHJcbiAgICAgICAgICAgICAgICBzdHJva2VEYXNoQXJyYXk6IDQsXHJcbiAgICAgICAgICAgICAgICB5YXhpczoge1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmVzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3c6IHRydWVcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB2YXIgY2hhcnQgPSBuZXcgQXBleENoYXJ0cyhlbGVtZW50LCBvcHRpb25zKTtcclxuICAgICAgICBjaGFydC5yZW5kZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgX2luaXRDaGFydHNXaWRnZXQzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJrdF9jaGFydHNfd2lkZ2V0XzNfY2hhcnRcIik7XHJcblxyXG4gICAgICAgIGlmICghZWxlbWVudCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgb3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgc2VyaWVzOiBbe1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ05ldCBQcm9maXQnLFxyXG4gICAgICAgICAgICAgICAgZGF0YTogWzMwLCA0MCwgNDAsIDkwLCA5MCwgNzAsIDcwXVxyXG4gICAgICAgICAgICB9XSxcclxuICAgICAgICAgICAgY2hhcnQ6IHtcclxuICAgICAgICAgICAgICAgIHR5cGU6ICdhcmVhJyxcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMzUwLFxyXG4gICAgICAgICAgICAgICAgdG9vbGJhcjoge1xyXG4gICAgICAgICAgICAgICAgICAgIHNob3c6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHBsb3RPcHRpb25zOiB7XHJcblxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBsZWdlbmQ6IHtcclxuICAgICAgICAgICAgICAgIHNob3c6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGRhdGFMYWJlbHM6IHtcclxuICAgICAgICAgICAgICAgIGVuYWJsZWQ6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGZpbGw6IHtcclxuICAgICAgICAgICAgICAgIHR5cGU6ICdzb2xpZCcsXHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHN0cm9rZToge1xyXG4gICAgICAgICAgICAgICAgY3VydmU6ICdzbW9vdGgnLFxyXG4gICAgICAgICAgICAgICAgc2hvdzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAzLFxyXG4gICAgICAgICAgICAgICAgY29sb3JzOiBbS1RBcHAuZ2V0U2V0dGluZ3MoKVsnY29sb3JzJ11bJ3RoZW1lJ11bJ2Jhc2UnXVsnaW5mbyddXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB4YXhpczoge1xyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcmllczogWydGZWInLCAnTWFyJywgJ0FwcicsICdNYXknLCAnSnVuJywgJ0p1bCcsICdBdWcnXSxcclxuICAgICAgICAgICAgICAgIGF4aXNCb3JkZXI6IHtcclxuICAgICAgICAgICAgICAgICAgICBzaG93OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBheGlzVGlja3M6IHtcclxuICAgICAgICAgICAgICAgICAgICBzaG93OiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGxhYmVsczoge1xyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yczogS1RBcHAuZ2V0U2V0dGluZ3MoKVsnY29sb3JzJ11bJ2dyYXknXVsnZ3JheS01MDAnXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6ICcxMnB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udEZhbWlseTogS1RBcHAuZ2V0U2V0dGluZ3MoKVsnZm9udC1mYW1pbHknXVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBjcm9zc2hhaXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICdmcm9udCcsXHJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBLVEFwcC5nZXRTZXR0aW5ncygpWydjb2xvcnMnXVsndGhlbWUnXVsnYmFzZSddWydpbmZvJ10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXNoQXJyYXk6IDNcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgdG9vbHRpcDoge1xyXG4gICAgICAgICAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybWF0dGVyOiB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgb2Zmc2V0WTogMCxcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogJzEycHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250RmFtaWx5OiBLVEFwcC5nZXRTZXR0aW5ncygpWydmb250LWZhbWlseSddXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB5YXhpczoge1xyXG4gICAgICAgICAgICAgICAgbGFiZWxzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3JzOiBLVEFwcC5nZXRTZXR0aW5ncygpWydjb2xvcnMnXVsnZ3JheSddWydncmF5LTUwMCddLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogJzEycHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250RmFtaWx5OiBLVEFwcC5nZXRTZXR0aW5ncygpWydmb250LWZhbWlseSddXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzdGF0ZXM6IHtcclxuICAgICAgICAgICAgICAgIG5vcm1hbDoge1xyXG4gICAgICAgICAgICAgICAgICAgIGZpbHRlcjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnbm9uZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiAwXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGhvdmVyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdub25lJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IDBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgYWN0aXZlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxsb3dNdWx0aXBsZURhdGFQb2ludHNTZWxlY3Rpb246IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGZpbHRlcjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnbm9uZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiAwXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB0b29sdGlwOiB7XHJcbiAgICAgICAgICAgICAgICBzdHlsZToge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMTJweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgZm9udEZhbWlseTogS1RBcHAuZ2V0U2V0dGluZ3MoKVsnZm9udC1mYW1pbHknXVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHk6IHtcclxuICAgICAgICAgICAgICAgICAgICBmb3JtYXR0ZXI6IGZ1bmN0aW9uICh2YWwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiJFwiICsgdmFsICsgXCIgdGhvdXNhbmRzXCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNvbG9yczogW0tUQXBwLmdldFNldHRpbmdzKClbJ2NvbG9ycyddWyd0aGVtZSddWydsaWdodCddWydpbmZvJ11dLFxyXG4gICAgICAgICAgICBncmlkOiB7XHJcbiAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogS1RBcHAuZ2V0U2V0dGluZ3MoKVsnY29sb3JzJ11bJ2dyYXknXVsnZ3JheS0yMDAnXSxcclxuICAgICAgICAgICAgICAgIHN0cm9rZURhc2hBcnJheTogNCxcclxuICAgICAgICAgICAgICAgIHlheGlzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGluZXM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2hvdzogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbWFya2Vyczoge1xyXG4gICAgICAgICAgICAgICAgLy9zaXplOiA1LFxyXG4gICAgICAgICAgICAgICAgLy9jb2xvcnM6IFtLVEFwcC5nZXRTZXR0aW5ncygpWydjb2xvcnMnXVsndGhlbWUnXVsnbGlnaHQnXVsnZGFuZ2VyJ11dLFxyXG4gICAgICAgICAgICAgICAgc3Ryb2tlQ29sb3I6IEtUQXBwLmdldFNldHRpbmdzKClbJ2NvbG9ycyddWyd0aGVtZSddWydiYXNlJ11bJ2luZm8nXSxcclxuICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoOiAzXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB2YXIgY2hhcnQgPSBuZXcgQXBleENoYXJ0cyhlbGVtZW50LCBvcHRpb25zKTtcclxuICAgICAgICBjaGFydC5yZW5kZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgX2luaXRDaGFydHNXaWRnZXQ0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJrdF9jaGFydHNfd2lkZ2V0XzRfY2hhcnRcIik7XHJcblxyXG4gICAgICAgIGlmICghZWxlbWVudCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgb3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgc2VyaWVzOiBbe1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ05ldCBQcm9maXQnLFxyXG4gICAgICAgICAgICAgICAgZGF0YTogWzYwLCA1MCwgODAsIDQwLCAxMDAsIDYwXVxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnUmV2ZW51ZScsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiBbNzAsIDYwLCAxMTAsIDQwLCA1MCwgNzBdXHJcbiAgICAgICAgICAgIH1dLFxyXG4gICAgICAgICAgICBjaGFydDoge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogJ2FyZWEnLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzNTAsXHJcbiAgICAgICAgICAgICAgICB0b29sYmFyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hvdzogZmFsc2VcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcGxvdE9wdGlvbnM6IHt9LFxyXG4gICAgICAgICAgICBsZWdlbmQ6IHtcclxuICAgICAgICAgICAgICAgIHNob3c6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGRhdGFMYWJlbHM6IHtcclxuICAgICAgICAgICAgICAgIGVuYWJsZWQ6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGZpbGw6IHtcclxuICAgICAgICAgICAgICAgIHR5cGU6ICdzb2xpZCcsXHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHN0cm9rZToge1xyXG4gICAgICAgICAgICAgICAgY3VydmU6ICdzbW9vdGgnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHhheGlzOiB7XHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yaWVzOiBbJ0ZlYicsICdNYXInLCAnQXByJywgJ01heScsICdKdW4nLCAnSnVsJ10sXHJcbiAgICAgICAgICAgICAgICBheGlzQm9yZGVyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hvdzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgYXhpc1RpY2tzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hvdzogZmFsc2VcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBsYWJlbHM6IHtcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcnM6IEtUQXBwLmdldFNldHRpbmdzKClbJ2NvbG9ycyddWydncmF5J11bJ2dyYXktNTAwJ10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMTJweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk6IEtUQXBwLmdldFNldHRpbmdzKClbJ2ZvbnQtZmFtaWx5J11cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgY3Jvc3NoYWlyczoge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnZnJvbnQnLFxyXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogS1RBcHAuZ2V0U2V0dGluZ3MoKVsnY29sb3JzJ11bJ3RoZW1lJ11bJ2xpZ2h0J11bJ3N1Y2Nlc3MnXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhc2hBcnJheTogM1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB0b29sdGlwOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBmb3JtYXR0ZXI6IHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgICAgICAgICBvZmZzZXRZOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMTJweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk6IEtUQXBwLmdldFNldHRpbmdzKClbJ2ZvbnQtZmFtaWx5J11cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHlheGlzOiB7XHJcbiAgICAgICAgICAgICAgICBsYWJlbHM6IHtcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcnM6IEtUQXBwLmdldFNldHRpbmdzKClbJ2NvbG9ycyddWydncmF5J11bJ2dyYXktNTAwJ10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMTJweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk6IEtUQXBwLmdldFNldHRpbmdzKClbJ2ZvbnQtZmFtaWx5J11cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHN0YXRlczoge1xyXG4gICAgICAgICAgICAgICAgbm9ybWFsOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdub25lJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IDBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgaG92ZXI6IHtcclxuICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ25vbmUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogMFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBhY3RpdmU6IHtcclxuICAgICAgICAgICAgICAgICAgICBhbGxvd011bHRpcGxlRGF0YVBvaW50c1NlbGVjdGlvbjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdub25lJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IDBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHRvb2x0aXA6IHtcclxuICAgICAgICAgICAgICAgIHN0eWxlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6ICcxMnB4JyxcclxuICAgICAgICAgICAgICAgICAgICBmb250RmFtaWx5OiBLVEFwcC5nZXRTZXR0aW5ncygpWydmb250LWZhbWlseSddXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgeToge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcm1hdHRlcjogZnVuY3Rpb24gKHZhbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCIkXCIgKyB2YWwgKyBcIiB0aG91c2FuZHNcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY29sb3JzOiBbS1RBcHAuZ2V0U2V0dGluZ3MoKVsnY29sb3JzJ11bJ3RoZW1lJ11bJ2Jhc2UnXVsnc3VjY2VzcyddLCBLVEFwcC5nZXRTZXR0aW5ncygpWydjb2xvcnMnXVsndGhlbWUnXVsnYmFzZSddWyd3YXJuaW5nJ11dLFxyXG4gICAgICAgICAgICBncmlkOiB7XHJcbiAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogS1RBcHAuZ2V0U2V0dGluZ3MoKVsnY29sb3JzJ11bJ2dyYXknXVsnZ3JheS0yMDAnXSxcclxuICAgICAgICAgICAgICAgIHN0cm9rZURhc2hBcnJheTogNCxcclxuICAgICAgICAgICAgICAgIHlheGlzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGluZXM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2hvdzogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbWFya2Vyczoge1xyXG4gICAgICAgICAgICAgICAgY29sb3JzOiBbS1RBcHAuZ2V0U2V0dGluZ3MoKVsnY29sb3JzJ11bJ3RoZW1lJ11bJ2xpZ2h0J11bJ3N1Y2Nlc3MnXSwgS1RBcHAuZ2V0U2V0dGluZ3MoKVsnY29sb3JzJ11bJ3RoZW1lJ11bJ2xpZ2h0J11bJ3dhcm5pbmcnXV0sXHJcbiAgICAgICAgICAgICAgICBzdHJva2VDb2xvcjogW0tUQXBwLmdldFNldHRpbmdzKClbJ2NvbG9ycyddWyd0aGVtZSddWydsaWdodCddWydzdWNjZXNzJ10sIEtUQXBwLmdldFNldHRpbmdzKClbJ2NvbG9ycyddWyd0aGVtZSddWydsaWdodCddWyd3YXJuaW5nJ11dLFxyXG4gICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg6IDNcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHZhciBjaGFydCA9IG5ldyBBcGV4Q2hhcnRzKGVsZW1lbnQsIG9wdGlvbnMpO1xyXG4gICAgICAgIGNoYXJ0LnJlbmRlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBfaW5pdENoYXJ0c1dpZGdldDUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImt0X2NoYXJ0c193aWRnZXRfNV9jaGFydFwiKTtcclxuXHJcbiAgICAgICAgaWYgKCFlbGVtZW50KSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBvcHRpb25zID0ge1xyXG4gICAgICAgICAgICBzZXJpZXM6IFt7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnTmV0IFByb2ZpdCcsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiBbNDAsIDUwLCA2NSwgNzAsIDUwLCAzMF1cclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ1JldmVudWUnLFxyXG4gICAgICAgICAgICAgICAgZGF0YTogWy0zMCwgLTQwLCAtNTUsIC02MCwgLTQwLCAtMjBdXHJcbiAgICAgICAgICAgIH1dLFxyXG4gICAgICAgICAgICBjaGFydDoge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogJ2JhcicsXHJcbiAgICAgICAgICAgICAgICBzdGFja2VkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzNTAsXHJcbiAgICAgICAgICAgICAgICB0b29sYmFyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hvdzogZmFsc2VcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcGxvdE9wdGlvbnM6IHtcclxuICAgICAgICAgICAgICAgIGJhcjoge1xyXG4gICAgICAgICAgICAgICAgICAgIGhvcml6b250YWw6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbHVtbldpZHRoOiBbJzEyJSddLFxyXG4gICAgICAgICAgICAgICAgICAgIGVuZGluZ1NoYXBlOiAncm91bmRlZCdcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGxlZ2VuZDoge1xyXG4gICAgICAgICAgICAgICAgc2hvdzogZmFsc2VcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZGF0YUxhYmVsczoge1xyXG4gICAgICAgICAgICAgICAgZW5hYmxlZDogZmFsc2VcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc3Ryb2tlOiB7XHJcbiAgICAgICAgICAgICAgICBzaG93OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDIsXHJcbiAgICAgICAgICAgICAgICBjb2xvcnM6IFsndHJhbnNwYXJlbnQnXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB4YXhpczoge1xyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcmllczogWydGZWInLCAnTWFyJywgJ0FwcicsICdNYXknLCAnSnVuJywgJ0p1bCddLFxyXG4gICAgICAgICAgICAgICAgYXhpc0JvcmRlcjoge1xyXG4gICAgICAgICAgICAgICAgICAgIHNob3c6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGF4aXNUaWNrczoge1xyXG4gICAgICAgICAgICAgICAgICAgIHNob3c6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgbGFiZWxzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3JzOiBLVEFwcC5nZXRTZXR0aW5ncygpWydjb2xvcnMnXVsnZ3JheSddWydncmF5LTUwMCddLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogJzEycHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250RmFtaWx5OiBLVEFwcC5nZXRTZXR0aW5ncygpWydmb250LWZhbWlseSddXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB5YXhpczoge1xyXG4gICAgICAgICAgICAgICAgbWluOiAtODAsXHJcbiAgICAgICAgICAgICAgICBtYXg6IDgwLFxyXG4gICAgICAgICAgICAgICAgbGFiZWxzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3JzOiBLVEFwcC5nZXRTZXR0aW5ncygpWydjb2xvcnMnXVsnZ3JheSddWydncmF5LTUwMCddLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogJzEycHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250RmFtaWx5OiBLVEFwcC5nZXRTZXR0aW5ncygpWydmb250LWZhbWlseSddXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBmaWxsOiB7XHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHN0YXRlczoge1xyXG4gICAgICAgICAgICAgICAgbm9ybWFsOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdub25lJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IDBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgaG92ZXI6IHtcclxuICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ25vbmUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogMFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBhY3RpdmU6IHtcclxuICAgICAgICAgICAgICAgICAgICBhbGxvd011bHRpcGxlRGF0YVBvaW50c1NlbGVjdGlvbjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdub25lJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IDBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHRvb2x0aXA6IHtcclxuICAgICAgICAgICAgICAgIHN0eWxlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6ICcxMnB4JyxcclxuICAgICAgICAgICAgICAgICAgICBmb250RmFtaWx5OiBLVEFwcC5nZXRTZXR0aW5ncygpWydmb250LWZhbWlseSddXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgeToge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcm1hdHRlcjogZnVuY3Rpb24gKHZhbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCIkXCIgKyB2YWwgKyBcIiB0aG91c2FuZHNcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY29sb3JzOiBbS1RBcHAuZ2V0U2V0dGluZ3MoKVsnY29sb3JzJ11bJ3RoZW1lJ11bJ2Jhc2UnXVsnaW5mbyddLCBLVEFwcC5nZXRTZXR0aW5ncygpWydjb2xvcnMnXVsndGhlbWUnXVsnYmFzZSddWydwcmltYXJ5J11dLFxyXG4gICAgICAgICAgICBncmlkOiB7XHJcbiAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogS1RBcHAuZ2V0U2V0dGluZ3MoKVsnY29sb3JzJ11bJ2dyYXknXVsnZ3JheS0yMDAnXSxcclxuICAgICAgICAgICAgICAgIHN0cm9rZURhc2hBcnJheTogNCxcclxuICAgICAgICAgICAgICAgIHlheGlzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGluZXM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2hvdzogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHZhciBjaGFydCA9IG5ldyBBcGV4Q2hhcnRzKGVsZW1lbnQsIG9wdGlvbnMpO1xyXG4gICAgICAgIGNoYXJ0LnJlbmRlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBfaW5pdENoYXJ0c1dpZGdldDYgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImt0X2NoYXJ0c193aWRnZXRfNl9jaGFydFwiKTtcclxuXHJcbiAgICAgICAgaWYgKCFlbGVtZW50KSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBvcHRpb25zID0ge1xyXG4gICAgICAgICAgICBzZXJpZXM6IFt7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnTmV0IFByb2ZpdCcsXHJcbiAgICAgICAgICAgICAgICB0eXBlOiAnYmFyJyxcclxuICAgICAgICAgICAgICAgIHN0YWNrZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiBbNDAsIDUwLCA2NSwgNzAsIDUwLCAzMF1cclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ1JldmVudWUnLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogJ2JhcicsXHJcbiAgICAgICAgICAgICAgICBzdGFja2VkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgZGF0YTogWzIwLCAyMCwgMjUsIDMwLCAzMCwgMjBdXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdFeHBlbnNlcycsXHJcbiAgICAgICAgICAgICAgICB0eXBlOiAnYXJlYScsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiBbNTAsIDgwLCA2MCwgOTAsIDUwLCA3MF1cclxuICAgICAgICAgICAgfV0sXHJcbiAgICAgICAgICAgIGNoYXJ0OiB7XHJcbiAgICAgICAgICAgICAgICBzdGFja2VkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzNTAsXHJcbiAgICAgICAgICAgICAgICB0b29sYmFyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hvdzogZmFsc2VcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcGxvdE9wdGlvbnM6IHtcclxuICAgICAgICAgICAgICAgIGJhcjoge1xyXG4gICAgICAgICAgICAgICAgICAgIHN0YWNrZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgZW5kaW5nU2hhcGU6ICdyb3VuZGVkJyxcclxuICAgICAgICAgICAgICAgICAgICBjb2x1bW5XaWR0aDogWycxMiUnXVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbGVnZW5kOiB7XHJcbiAgICAgICAgICAgICAgICBzaG93OiBmYWxzZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBkYXRhTGFiZWxzOiB7XHJcbiAgICAgICAgICAgICAgICBlbmFibGVkOiBmYWxzZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzdHJva2U6IHtcclxuICAgICAgICAgICAgICAgIGN1cnZlOiAnc21vb3RoJyxcclxuICAgICAgICAgICAgICAgIHNob3c6IHRydWUsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMixcclxuICAgICAgICAgICAgICAgIGNvbG9yczogWyd0cmFuc3BhcmVudCddXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHhheGlzOiB7XHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yaWVzOiBbJ0ZlYicsICdNYXInLCAnQXByJywgJ01heScsICdKdW4nLCAnSnVsJ10sXHJcbiAgICAgICAgICAgICAgICBheGlzQm9yZGVyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hvdzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgYXhpc1RpY2tzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hvdzogZmFsc2VcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBsYWJlbHM6IHtcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcnM6IEtUQXBwLmdldFNldHRpbmdzKClbJ2NvbG9ycyddWydncmF5J11bJ2dyYXktNTAwJ10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMTJweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk6IEtUQXBwLmdldFNldHRpbmdzKClbJ2ZvbnQtZmFtaWx5J11cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHlheGlzOiB7XHJcbiAgICAgICAgICAgICAgICBtYXg6IDEyMCxcclxuICAgICAgICAgICAgICAgIGxhYmVsczoge1xyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yczogS1RBcHAuZ2V0U2V0dGluZ3MoKVsnY29sb3JzJ11bJ2dyYXknXVsnZ3JheS01MDAnXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6ICcxMnB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udEZhbWlseTogS1RBcHAuZ2V0U2V0dGluZ3MoKVsnZm9udC1mYW1pbHknXVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZmlsbDoge1xyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzdGF0ZXM6IHtcclxuICAgICAgICAgICAgICAgIG5vcm1hbDoge1xyXG4gICAgICAgICAgICAgICAgICAgIGZpbHRlcjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnbm9uZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiAwXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGhvdmVyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdub25lJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IDBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgYWN0aXZlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxsb3dNdWx0aXBsZURhdGFQb2ludHNTZWxlY3Rpb246IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGZpbHRlcjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnbm9uZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiAwXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB0b29sdGlwOiB7XHJcbiAgICAgICAgICAgICAgICBzdHlsZToge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMTJweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgZm9udEZhbWlseTogS1RBcHAuZ2V0U2V0dGluZ3MoKVsnZm9udC1mYW1pbHknXVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHk6IHtcclxuICAgICAgICAgICAgICAgICAgICBmb3JtYXR0ZXI6IGZ1bmN0aW9uICh2YWwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiJFwiICsgdmFsICsgXCIgdGhvdXNhbmRzXCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNvbG9yczogW0tUQXBwLmdldFNldHRpbmdzKClbJ2NvbG9ycyddWyd0aGVtZSddWydiYXNlJ11bJ2luZm8nXSwgS1RBcHAuZ2V0U2V0dGluZ3MoKVsnY29sb3JzJ11bJ3RoZW1lJ11bJ2Jhc2UnXVsncHJpbWFyeSddLCBLVEFwcC5nZXRTZXR0aW5ncygpWydjb2xvcnMnXVsndGhlbWUnXVsnbGlnaHQnXVsncHJpbWFyeSddXSxcclxuICAgICAgICAgICAgZ3JpZDoge1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6IEtUQXBwLmdldFNldHRpbmdzKClbJ2NvbG9ycyddWydncmF5J11bJ2dyYXktMjAwJ10sXHJcbiAgICAgICAgICAgICAgICBzdHJva2VEYXNoQXJyYXk6IDQsXHJcbiAgICAgICAgICAgICAgICB5YXhpczoge1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmVzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3c6IHRydWVcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgcGFkZGluZzoge1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogMCxcclxuICAgICAgICAgICAgICAgICAgICByaWdodDogMCxcclxuICAgICAgICAgICAgICAgICAgICBib3R0b206IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogMFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdmFyIGNoYXJ0ID0gbmV3IEFwZXhDaGFydHMoZWxlbWVudCwgb3B0aW9ucyk7XHJcbiAgICAgICAgY2hhcnQucmVuZGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIF9pbml0Q2hhcnRzV2lkZ2V0NyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwia3RfY2hhcnRzX3dpZGdldF83X2NoYXJ0XCIpO1xyXG5cclxuICAgICAgICBpZiAoIWVsZW1lbnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIG9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgIHNlcmllczogW3tcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdOZXQgUHJvZml0JyxcclxuICAgICAgICAgICAgICAgIGRhdGE6IFszMCwgMzAsIDUwLCA1MCwgMzUsIDM1XVxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnUmV2ZW51ZScsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiBbNTUsIDIwLCAyMCwgMjAsIDcwLCA3MF1cclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ0V4cGVuc2VzJyxcclxuICAgICAgICAgICAgICAgIGRhdGE6IFs2MCwgNjAsIDQwLCA0MCwgMzAsIDMwXVxyXG4gICAgICAgICAgICB9XSxcclxuICAgICAgICAgICAgY2hhcnQ6IHtcclxuICAgICAgICAgICAgICAgIHR5cGU6ICdhcmVhJyxcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMzAwLFxyXG4gICAgICAgICAgICAgICAgdG9vbGJhcjoge1xyXG4gICAgICAgICAgICAgICAgICAgIHNob3c6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgem9vbToge1xyXG4gICAgICAgICAgICAgICAgICAgIGVuYWJsZWQ6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgc3BhcmtsaW5lOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBwbG90T3B0aW9uczoge30sXHJcbiAgICAgICAgICAgIGxlZ2VuZDoge1xyXG4gICAgICAgICAgICAgICAgc2hvdzogZmFsc2VcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZGF0YUxhYmVsczoge1xyXG4gICAgICAgICAgICAgICAgZW5hYmxlZDogZmFsc2VcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZmlsbDoge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogJ3NvbGlkJyxcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDFcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc3Ryb2tlOiB7XHJcbiAgICAgICAgICAgICAgICBjdXJ2ZTogJ3Ntb290aCcsXHJcbiAgICAgICAgICAgICAgICBzaG93OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDIsXHJcbiAgICAgICAgICAgICAgICBjb2xvcnM6IFtLVEFwcC5nZXRTZXR0aW5ncygpWydjb2xvcnMnXVsndGhlbWUnXVsnYmFzZSddWyd3YXJuaW5nJ10sICd0cmFuc3BhcmVudCcsICd0cmFuc3BhcmVudCddXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHhheGlzOiB7XHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yaWVzOiBbJ0ZlYicsICdNYXInLCAnQXByJywgJ01heScsICdKdW4nLCAnSnVsJ10sXHJcbiAgICAgICAgICAgICAgICBheGlzQm9yZGVyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hvdzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgYXhpc1RpY2tzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hvdzogZmFsc2VcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBsYWJlbHM6IHtcclxuICAgICAgICAgICAgICAgICAgICBzaG93OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcnM6IEtUQXBwLmdldFNldHRpbmdzKClbJ2NvbG9ycyddWydncmF5J11bJ2dyYXktNTAwJ10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMTJweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk6IEtUQXBwLmdldFNldHRpbmdzKClbJ2ZvbnQtZmFtaWx5J11cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgY3Jvc3NoYWlyczoge1xyXG4gICAgICAgICAgICAgICAgICAgIHNob3c6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnZnJvbnQnLFxyXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogS1RBcHAuZ2V0U2V0dGluZ3MoKVsnY29sb3JzJ11bJ2dyYXknXVsnZ3JheS0zMDAnXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhc2hBcnJheTogM1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB0b29sdGlwOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBmb3JtYXR0ZXI6IHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgICAgICAgICBvZmZzZXRZOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMTJweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk6IEtUQXBwLmdldFNldHRpbmdzKClbJ2ZvbnQtZmFtaWx5J11cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHlheGlzOiB7XHJcbiAgICAgICAgICAgICAgICBsYWJlbHM6IHtcclxuICAgICAgICAgICAgICAgICAgICBzaG93OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcnM6IEtUQXBwLmdldFNldHRpbmdzKClbJ2NvbG9ycyddWydncmF5J11bJ2dyYXktNTAwJ10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMTJweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk6IEtUQXBwLmdldFNldHRpbmdzKClbJ2ZvbnQtZmFtaWx5J11cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHN0YXRlczoge1xyXG4gICAgICAgICAgICAgICAgbm9ybWFsOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdub25lJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IDBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgaG92ZXI6IHtcclxuICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ25vbmUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogMFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBhY3RpdmU6IHtcclxuICAgICAgICAgICAgICAgICAgICBhbGxvd011bHRpcGxlRGF0YVBvaW50c1NlbGVjdGlvbjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdub25lJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IDBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHRvb2x0aXA6IHtcclxuICAgICAgICAgICAgICAgIHN0eWxlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6ICcxMnB4JyxcclxuICAgICAgICAgICAgICAgICAgICBmb250RmFtaWx5OiBLVEFwcC5nZXRTZXR0aW5ncygpWydmb250LWZhbWlseSddXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgeToge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcm1hdHRlcjogZnVuY3Rpb24gKHZhbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCIkXCIgKyB2YWwgKyBcIiB0aG91c2FuZHNcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY29sb3JzOiBbS1RBcHAuZ2V0U2V0dGluZ3MoKVsnY29sb3JzJ11bJ3RoZW1lJ11bJ2xpZ2h0J11bJ3dhcm5pbmcnXSwgS1RBcHAuZ2V0U2V0dGluZ3MoKVsnY29sb3JzJ11bJ3RoZW1lJ11bJ2xpZ2h0J11bJ2luZm8nXSwgS1RBcHAuZ2V0U2V0dGluZ3MoKVsnY29sb3JzJ11bJ2dyYXknXVsnZ3JheS0xMDAnXV0sXHJcbiAgICAgICAgICAgIGdyaWQ6IHtcclxuICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiBLVEFwcC5nZXRTZXR0aW5ncygpWydjb2xvcnMnXVsnZ3JheSddWydncmF5LTIwMCddLFxyXG4gICAgICAgICAgICAgICAgc3Ryb2tlRGFzaEFycmF5OiA0LFxyXG4gICAgICAgICAgICAgICAgeWF4aXM6IHtcclxuICAgICAgICAgICAgICAgICAgICBsaW5lczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaG93OiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBtYXJrZXJzOiB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcnM6IFtLVEFwcC5nZXRTZXR0aW5ncygpWydjb2xvcnMnXVsndGhlbWUnXVsnbGlnaHQnXVsnd2FybmluZyddLCBLVEFwcC5nZXRTZXR0aW5ncygpWydjb2xvcnMnXVsndGhlbWUnXVsnbGlnaHQnXVsnaW5mbyddLCBLVEFwcC5nZXRTZXR0aW5ncygpWydjb2xvcnMnXVsnZ3JheSddWydncmF5LTEwMCddXSxcclxuICAgICAgICAgICAgICAgIHN0cm9rZUNvbG9yOiBbS1RBcHAuZ2V0U2V0dGluZ3MoKVsnY29sb3JzJ11bJ3RoZW1lJ11bJ2Jhc2UnXVsnd2FybmluZyddLCBLVEFwcC5nZXRTZXR0aW5ncygpWydjb2xvcnMnXVsndGhlbWUnXVsnYmFzZSddWydpbmZvJ10sIEtUQXBwLmdldFNldHRpbmdzKClbJ2NvbG9ycyddWydncmF5J11bJ2dyYXktNTAwJ11dLFxyXG4gICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg6IDNcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHZhciBjaGFydCA9IG5ldyBBcGV4Q2hhcnRzKGVsZW1lbnQsIG9wdGlvbnMpO1xyXG4gICAgICAgIGNoYXJ0LnJlbmRlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBfaW5pdENoYXJ0c1dpZGdldDggPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImt0X2NoYXJ0c193aWRnZXRfOF9jaGFydFwiKTtcclxuXHJcbiAgICAgICAgaWYgKCFlbGVtZW50KSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBvcHRpb25zID0ge1xyXG4gICAgICAgICAgICBzZXJpZXM6IFt7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnTmV0IFByb2ZpdCcsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiBbMzAsIDMwLCA1MCwgNTAsIDM1LCAzNV1cclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ1JldmVudWUnLFxyXG4gICAgICAgICAgICAgICAgZGF0YTogWzU1LCAyMCwgMjAsIDIwLCA3MCwgNzBdXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdFeHBlbnNlcycsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiBbNjAsIDYwLCA0MCwgNDAsIDMwLCAzMF1cclxuICAgICAgICAgICAgfSxdLFxyXG4gICAgICAgICAgICBjaGFydDoge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogJ2FyZWEnLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzMDAsXHJcbiAgICAgICAgICAgICAgICB0b29sYmFyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hvdzogZmFsc2VcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB6b29tOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZW5hYmxlZDogZmFsc2VcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBzcGFya2xpbmU6IHtcclxuICAgICAgICAgICAgICAgICAgICBlbmFibGVkOiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHBsb3RPcHRpb25zOiB7fSxcclxuICAgICAgICAgICAgbGVnZW5kOiB7XHJcbiAgICAgICAgICAgICAgICBzaG93OiBmYWxzZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBkYXRhTGFiZWxzOiB7XHJcbiAgICAgICAgICAgICAgICBlbmFibGVkOiBmYWxzZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBmaWxsOiB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiAnc29saWQnLFxyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzdHJva2U6IHtcclxuICAgICAgICAgICAgICAgIGN1cnZlOiAnc21vb3RoJyxcclxuICAgICAgICAgICAgICAgIHNob3c6IHRydWUsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMixcclxuICAgICAgICAgICAgICAgIGNvbG9yczogWyd0cmFuc3BhcmVudCcsICd0cmFuc3BhcmVudCcsICd0cmFuc3BhcmVudCddXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHhheGlzOiB7XHJcbiAgICAgICAgICAgICAgICB4OiAwLFxyXG4gICAgICAgICAgICAgICAgb2Zmc2V0WDogMCxcclxuICAgICAgICAgICAgICAgIG9mZnNldFk6IDAsXHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogMCxcclxuICAgICAgICAgICAgICAgICAgICByaWdodDogMCxcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IDAsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcmllczogWydGZWInLCAnTWFyJywgJ0FwcicsICdNYXknLCAnSnVuJywgJ0p1bCddLFxyXG4gICAgICAgICAgICAgICAgYXhpc0JvcmRlcjoge1xyXG4gICAgICAgICAgICAgICAgICAgIHNob3c6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGF4aXNUaWNrczoge1xyXG4gICAgICAgICAgICAgICAgICAgIHNob3c6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgbGFiZWxzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hvdzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3JzOiBLVEFwcC5nZXRTZXR0aW5ncygpWydjb2xvcnMnXVsnZ3JheSddWydncmF5LTUwMCddLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogJzEycHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250RmFtaWx5OiBLVEFwcC5nZXRTZXR0aW5ncygpWydmb250LWZhbWlseSddXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGNyb3NzaGFpcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICBzaG93OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2Zyb250JyxcclxuICAgICAgICAgICAgICAgICAgICBzdHJva2U6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IEtUQXBwLmdldFNldHRpbmdzKClbJ2NvbG9ycyddWydncmF5J11bJ2dyYXktMzAwJ10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXNoQXJyYXk6IDNcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgdG9vbHRpcDoge1xyXG4gICAgICAgICAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybWF0dGVyOiB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgb2Zmc2V0WTogMCxcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogJzEycHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250RmFtaWx5OiBLVEFwcC5nZXRTZXR0aW5ncygpWydmb250LWZhbWlseSddXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB5YXhpczoge1xyXG4gICAgICAgICAgICAgICAgeTogMCxcclxuICAgICAgICAgICAgICAgIG9mZnNldFg6IDAsXHJcbiAgICAgICAgICAgICAgICBvZmZzZXRZOiAwLFxyXG4gICAgICAgICAgICAgICAgcGFkZGluZzoge1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDBcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBsYWJlbHM6IHtcclxuICAgICAgICAgICAgICAgICAgICBzaG93OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcnM6IEtUQXBwLmdldFNldHRpbmdzKClbJ2NvbG9ycyddWydncmF5J11bJ2dyYXktNTAwJ10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMTJweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk6IEtUQXBwLmdldFNldHRpbmdzKClbJ2ZvbnQtZmFtaWx5J11cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHN0YXRlczoge1xyXG4gICAgICAgICAgICAgICAgbm9ybWFsOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdub25lJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IDBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgaG92ZXI6IHtcclxuICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ25vbmUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogMFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBhY3RpdmU6IHtcclxuICAgICAgICAgICAgICAgICAgICBhbGxvd011bHRpcGxlRGF0YVBvaW50c1NlbGVjdGlvbjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdub25lJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IDBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHRvb2x0aXA6IHtcclxuICAgICAgICAgICAgICAgIHN0eWxlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6ICcxMnB4JyxcclxuICAgICAgICAgICAgICAgICAgICBmb250RmFtaWx5OiBLVEFwcC5nZXRTZXR0aW5ncygpWydmb250LWZhbWlseSddXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgeToge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcm1hdHRlcjogZnVuY3Rpb24gKHZhbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCIkXCIgKyB2YWwgKyBcIiB0aG91c2FuZHNcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY29sb3JzOiBbS1RBcHAuZ2V0U2V0dGluZ3MoKVsnY29sb3JzJ11bJ3RoZW1lJ11bJ2xpZ2h0J11bJ3N1Y2Nlc3MnXSwgS1RBcHAuZ2V0U2V0dGluZ3MoKVsnY29sb3JzJ11bJ3RoZW1lJ11bJ2xpZ2h0J11bJ2RhbmdlciddLCBLVEFwcC5nZXRTZXR0aW5ncygpWydjb2xvcnMnXVsndGhlbWUnXVsnbGlnaHQnXVsnaW5mbyddXSxcclxuICAgICAgICAgICAgZ3JpZDoge1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6IEtUQXBwLmdldFNldHRpbmdzKClbJ2NvbG9ycyddWydncmF5J11bJ2dyYXktMjAwJ10sXHJcbiAgICAgICAgICAgICAgICBzdHJva2VEYXNoQXJyYXk6IDQsXHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIGJvdHRvbTogMCxcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAwXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG1hcmtlcnM6IHtcclxuICAgICAgICAgICAgICAgIGNvbG9yczogW0tUQXBwLmdldFNldHRpbmdzKClbJ2NvbG9ycyddWyd0aGVtZSddWydsaWdodCddWydzdWNjZXNzJ10sIEtUQXBwLmdldFNldHRpbmdzKClbJ2NvbG9ycyddWyd0aGVtZSddWydsaWdodCddWydkYW5nZXInXSwgS1RBcHAuZ2V0U2V0dGluZ3MoKVsnY29sb3JzJ11bJ3RoZW1lJ11bJ2xpZ2h0J11bJ2luZm8nXV0sXHJcbiAgICAgICAgICAgICAgICBzdHJva2VDb2xvcjogW0tUQXBwLmdldFNldHRpbmdzKClbJ2NvbG9ycyddWyd0aGVtZSddWydiYXNlJ11bJ3N1Y2Nlc3MnXSwgS1RBcHAuZ2V0U2V0dGluZ3MoKVsnY29sb3JzJ11bJ3RoZW1lJ11bJ2Jhc2UnXVsnZGFuZ2VyJ10sIEtUQXBwLmdldFNldHRpbmdzKClbJ2NvbG9ycyddWyd0aGVtZSddWydiYXNlJ11bJ2luZm8nXV0sXHJcbiAgICAgICAgICAgICAgICBzdHJva2VXaWR0aDogM1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdmFyIGNoYXJ0ID0gbmV3IEFwZXhDaGFydHMoZWxlbWVudCwgb3B0aW9ucyk7XHJcbiAgICAgICAgY2hhcnQucmVuZGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIF9pbml0Q2hhcnRzV2lkZ2V0OSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwia3RfY2hhcnRzX3dpZGdldF85X2NoYXJ0XCIpO1xyXG5cclxuICAgICAgICBpZiAoIWVsZW1lbnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIG9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgIHNlcmllczogW3tcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdOZXQgUHJvZml0JyxcclxuICAgICAgICAgICAgICAgIGRhdGE6IFsyMCwgMzAsIDQ1LCAzNSwgMjVdXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdSZXZlbnVlJyxcclxuICAgICAgICAgICAgICAgIGRhdGE6IFstMjAsIC0zMCwgLTQ1LCAtMzUsIC0yNV1cclxuICAgICAgICAgICAgfV0sXHJcbiAgICAgICAgICAgIGNoYXJ0OiB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiAnYmFyJyxcclxuICAgICAgICAgICAgICAgIHN0YWNrZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDM1MCxcclxuICAgICAgICAgICAgICAgIHRvb2xiYXI6IHtcclxuICAgICAgICAgICAgICAgICAgICBzaG93OiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBwbG90T3B0aW9uczoge1xyXG4gICAgICAgICAgICAgICAgYmFyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgY29sdW1uV2lkdGg6IFsnMTclJ10sXHJcbiAgICAgICAgICAgICAgICAgICAgZW5kaW5nU2hhcGU6ICdyb3VuZGVkJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbGVnZW5kOiB7XHJcbiAgICAgICAgICAgICAgICBzaG93OiBmYWxzZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBkYXRhTGFiZWxzOiB7XHJcbiAgICAgICAgICAgICAgICBlbmFibGVkOiBmYWxzZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzdHJva2U6IHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAwLFxyXG4gICAgICAgICAgICAgICAgY29sb3JzOiBbJ3RyYW5zcGFyZW50J11cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgeGF4aXM6IHtcclxuICAgICAgICAgICAgICAgIGxpbmVzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hvdzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcmllczogWydGZWInLCAnTWFyJywgJ0FwcicsICdNYXknLCAnSnVuJ10sXHJcbiAgICAgICAgICAgICAgICBheGlzQm9yZGVyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hvdzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgYXhpc1RpY2tzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hvdzogZmFsc2VcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBsYWJlbHM6IHtcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcnM6IEtUQXBwLmdldFNldHRpbmdzKClbJ2NvbG9ycyddWydncmF5J11bJ2dyYXktNTAwJ10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMTJweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk6IEtUQXBwLmdldFNldHRpbmdzKClbJ2ZvbnQtZmFtaWx5J11cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHlheGlzOiB7XHJcbiAgICAgICAgICAgICAgICBsaW5lczoge1xyXG4gICAgICAgICAgICAgICAgICAgIHNob3c6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIG1pbjogLTUwLFxyXG4gICAgICAgICAgICAgICAgbWF4OiA1MCxcclxuICAgICAgICAgICAgICAgIGxhYmVsczoge1xyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yczogS1RBcHAuZ2V0U2V0dGluZ3MoKVsnY29sb3JzJ11bJ2dyYXknXVsnZ3JheS01MDAnXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6ICcxMnB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udEZhbWlseTogS1RBcHAuZ2V0U2V0dGluZ3MoKVsnZm9udC1mYW1pbHknXVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZmlsbDoge1xyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzdGF0ZXM6IHtcclxuICAgICAgICAgICAgICAgIG5vcm1hbDoge1xyXG4gICAgICAgICAgICAgICAgICAgIGZpbHRlcjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnbm9uZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiAwXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGhvdmVyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdub25lJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IDBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgYWN0aXZlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxsb3dNdWx0aXBsZURhdGFQb2ludHNTZWxlY3Rpb246IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGZpbHRlcjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnbm9uZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiAwXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB0b29sdGlwOiB7XHJcbiAgICAgICAgICAgICAgICBzdHlsZToge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMTJweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgZm9udEZhbWlseTogS1RBcHAuZ2V0U2V0dGluZ3MoKVsnZm9udC1mYW1pbHknXVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHk6IHtcclxuICAgICAgICAgICAgICAgICAgICBmb3JtYXR0ZXI6IGZ1bmN0aW9uICh2YWwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiJFwiICsgdmFsICsgXCIgdGhvdXNhbmRzXCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNvbG9yczogW0tUQXBwLmdldFNldHRpbmdzKClbJ2NvbG9ycyddWyd0aGVtZSddWydiYXNlJ11bJ2luZm8nXSwgS1RBcHAuZ2V0U2V0dGluZ3MoKVsnY29sb3JzJ11bJ3RoZW1lJ11bJ2Jhc2UnXVsncHJpbWFyeSddXSxcclxuICAgICAgICAgICAgZ3JpZDoge1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6IEtUQXBwLmdldFNldHRpbmdzKClbJ2NvbG9ycyddWydncmF5J11bJ2dyYXktMjAwJ10sXHJcbiAgICAgICAgICAgICAgICBzdHJva2VEYXNoQXJyYXk6IDQsXHJcbiAgICAgICAgICAgICAgICB5YXhpczoge1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmVzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3c6IHRydWVcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB2YXIgY2hhcnQgPSBuZXcgQXBleENoYXJ0cyhlbGVtZW50LCBvcHRpb25zKTtcclxuICAgICAgICBjaGFydC5yZW5kZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBNaXhlZCB3aWRnZXRzXHJcbiAgICB2YXIgX2luaXRNaXhlZFdpZGdldDEgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImt0X21peGVkX3dpZGdldF8xX2NoYXJ0XCIpO1xyXG4gICAgICAgIHZhciBoZWlnaHQgPSBwYXJzZUludChLVFV0aWwuY3NzKGVsZW1lbnQsICdoZWlnaHQnKSk7XHJcblxyXG4gICAgICAgIGlmICghZWxlbWVudCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgc3Ryb2tlQ29sb3IgPSAnI0QxMzY0Nyc7XHJcblxyXG4gICAgICAgIHZhciBvcHRpb25zID0ge1xyXG4gICAgICAgICAgICBzZXJpZXM6IFt7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnTmV0IFByb2ZpdCcsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiBbMzAsIDQ1LCAzMiwgNzAsIDQwLCA0MCwgNDBdXHJcbiAgICAgICAgICAgIH1dLFxyXG4gICAgICAgICAgICBjaGFydDoge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogJ2FyZWEnLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBoZWlnaHQsXHJcbiAgICAgICAgICAgICAgICB0b29sYmFyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hvdzogZmFsc2VcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB6b29tOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZW5hYmxlZDogZmFsc2VcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBzcGFya2xpbmU6IHtcclxuICAgICAgICAgICAgICAgICAgICBlbmFibGVkOiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZHJvcFNoYWRvdzoge1xyXG4gICAgICAgICAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgZW5hYmxlZE9uU2VyaWVzOiB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiA1LFxyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgYmx1cjogMyxcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogc3Ryb2tlQ29sb3IsXHJcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMC41XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHBsb3RPcHRpb25zOiB7fSxcclxuICAgICAgICAgICAgbGVnZW5kOiB7XHJcbiAgICAgICAgICAgICAgICBzaG93OiBmYWxzZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBkYXRhTGFiZWxzOiB7XHJcbiAgICAgICAgICAgICAgICBlbmFibGVkOiBmYWxzZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBmaWxsOiB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiAnc29saWQnLFxyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzdHJva2U6IHtcclxuICAgICAgICAgICAgICAgIGN1cnZlOiAnc21vb3RoJyxcclxuICAgICAgICAgICAgICAgIHNob3c6IHRydWUsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMyxcclxuICAgICAgICAgICAgICAgIGNvbG9yczogW3N0cm9rZUNvbG9yXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB4YXhpczoge1xyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcmllczogWydGZWInLCAnTWFyJywgJ0FwcicsICdNYXknLCAnSnVuJywgJ0p1bCcsICdBdWcnXSxcclxuICAgICAgICAgICAgICAgIGF4aXNCb3JkZXI6IHtcclxuICAgICAgICAgICAgICAgICAgICBzaG93OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBheGlzVGlja3M6IHtcclxuICAgICAgICAgICAgICAgICAgICBzaG93OiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGxhYmVsczoge1xyXG4gICAgICAgICAgICAgICAgICAgIHNob3c6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yczogS1RBcHAuZ2V0U2V0dGluZ3MoKVsnY29sb3JzJ11bJ2dyYXknXVsnZ3JheS01MDAnXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6ICcxMnB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udEZhbWlseTogS1RBcHAuZ2V0U2V0dGluZ3MoKVsnZm9udC1mYW1pbHknXVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBjcm9zc2hhaXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hvdzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICdmcm9udCcsXHJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBLVEFwcC5nZXRTZXR0aW5ncygpWydjb2xvcnMnXVsnZ3JheSddWydncmF5LTMwMCddLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGFzaEFycmF5OiAzXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB5YXhpczoge1xyXG4gICAgICAgICAgICAgICAgbWluOiAwLFxyXG4gICAgICAgICAgICAgICAgbWF4OiA4MCxcclxuICAgICAgICAgICAgICAgIGxhYmVsczoge1xyXG4gICAgICAgICAgICAgICAgICAgIHNob3c6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yczogS1RBcHAuZ2V0U2V0dGluZ3MoKVsnY29sb3JzJ11bJ2dyYXknXVsnZ3JheS01MDAnXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6ICcxMnB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udEZhbWlseTogS1RBcHAuZ2V0U2V0dGluZ3MoKVsnZm9udC1mYW1pbHknXVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc3RhdGVzOiB7XHJcbiAgICAgICAgICAgICAgICBub3JtYWw6IHtcclxuICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ25vbmUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogMFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBob3Zlcjoge1xyXG4gICAgICAgICAgICAgICAgICAgIGZpbHRlcjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnbm9uZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiAwXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGFjdGl2ZToge1xyXG4gICAgICAgICAgICAgICAgICAgIGFsbG93TXVsdGlwbGVEYXRhUG9pbnRzU2VsZWN0aW9uOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ25vbmUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogMFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdG9vbHRpcDoge1xyXG4gICAgICAgICAgICAgICAgc3R5bGU6IHtcclxuICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogJzEycHgnLFxyXG4gICAgICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk6IEtUQXBwLmdldFNldHRpbmdzKClbJ2ZvbnQtZmFtaWx5J11cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB5OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybWF0dGVyOiBmdW5jdGlvbiAodmFsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIiRcIiArIHZhbCArIFwiIHRob3VzYW5kc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIG1hcmtlcjoge1xyXG4gICAgICAgICAgICAgICAgICAgIHNob3c6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNvbG9yczogWyd0cmFuc3BhcmVudCddLFxyXG4gICAgICAgICAgICBtYXJrZXJzOiB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcnM6IFtLVEFwcC5nZXRTZXR0aW5ncygpWydjb2xvcnMnXVsndGhlbWUnXVsnbGlnaHQnXVsnZGFuZ2VyJ11dLFxyXG4gICAgICAgICAgICAgICAgc3Ryb2tlQ29sb3I6IFtzdHJva2VDb2xvcl0sXHJcbiAgICAgICAgICAgICAgICBzdHJva2VXaWR0aDogM1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdmFyIGNoYXJ0ID0gbmV3IEFwZXhDaGFydHMoZWxlbWVudCwgb3B0aW9ucyk7XHJcbiAgICAgICAgY2hhcnQucmVuZGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIF9pbml0TWl4ZWRXaWRnZXQyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJrdF9taXhlZF93aWRnZXRfMl9jaGFydFwiKTtcclxuICAgICAgICB2YXIgaGVpZ2h0ID0gcGFyc2VJbnQoS1RVdGlsLmNzcyhlbGVtZW50LCAnaGVpZ2h0JykpO1xyXG5cclxuICAgICAgICBpZiAoIWVsZW1lbnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIHN0cm9rZUNvbG9yID0gJyMyODdFRDcnO1xyXG5cclxuICAgICAgICB2YXIgb3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgc2VyaWVzOiBbe1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ05ldCBQcm9maXQnLFxyXG4gICAgICAgICAgICAgICAgZGF0YTogWzMwLCA0NSwgMzIsIDcwLCA0MCwgNDAsIDQwXVxyXG4gICAgICAgICAgICB9XSxcclxuICAgICAgICAgICAgY2hhcnQ6IHtcclxuICAgICAgICAgICAgICAgIHR5cGU6ICdhcmVhJyxcclxuICAgICAgICAgICAgICAgIGhlaWdodDogaGVpZ2h0LFxyXG4gICAgICAgICAgICAgICAgdG9vbGJhcjoge1xyXG4gICAgICAgICAgICAgICAgICAgIHNob3c6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgem9vbToge1xyXG4gICAgICAgICAgICAgICAgICAgIGVuYWJsZWQ6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgc3BhcmtsaW5lOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGRyb3BTaGFkb3c6IHtcclxuICAgICAgICAgICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIGVuYWJsZWRPblNlcmllczogdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogNSxcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIGJsdXI6IDMsXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHN0cm9rZUNvbG9yLFxyXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuNVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBwbG90T3B0aW9uczoge30sXHJcbiAgICAgICAgICAgIGxlZ2VuZDoge1xyXG4gICAgICAgICAgICAgICAgc2hvdzogZmFsc2VcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZGF0YUxhYmVsczoge1xyXG4gICAgICAgICAgICAgICAgZW5hYmxlZDogZmFsc2VcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZmlsbDoge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogJ3NvbGlkJyxcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDBcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc3Ryb2tlOiB7XHJcbiAgICAgICAgICAgICAgICBjdXJ2ZTogJ3Ntb290aCcsXHJcbiAgICAgICAgICAgICAgICBzaG93OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDMsXHJcbiAgICAgICAgICAgICAgICBjb2xvcnM6IFtzdHJva2VDb2xvcl1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgeGF4aXM6IHtcclxuICAgICAgICAgICAgICAgIGNhdGVnb3JpZXM6IFsnRmViJywgJ01hcicsICdBcHInLCAnTWF5JywgJ0p1bicsICdKdWwnLCAnQXVnJ10sXHJcbiAgICAgICAgICAgICAgICBheGlzQm9yZGVyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hvdzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgYXhpc1RpY2tzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hvdzogZmFsc2VcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBsYWJlbHM6IHtcclxuICAgICAgICAgICAgICAgICAgICBzaG93OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcnM6IEtUQXBwLmdldFNldHRpbmdzKClbJ2NvbG9ycyddWydncmF5J11bJ2dyYXktNTAwJ10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMTJweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk6IEtUQXBwLmdldFNldHRpbmdzKClbJ2ZvbnQtZmFtaWx5J11cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgY3Jvc3NoYWlyczoge1xyXG4gICAgICAgICAgICAgICAgICAgIHNob3c6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnZnJvbnQnLFxyXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogS1RBcHAuZ2V0U2V0dGluZ3MoKVsnY29sb3JzJ11bJ2dyYXknXVsnZ3JheS0zMDAnXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhc2hBcnJheTogM1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB0b29sdGlwOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBmb3JtYXR0ZXI6IHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgICAgICAgICBvZmZzZXRZOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMTJweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk6IEtUQXBwLmdldFNldHRpbmdzKClbJ2ZvbnQtZmFtaWx5J11cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHlheGlzOiB7XHJcbiAgICAgICAgICAgICAgICBtaW46IDAsXHJcbiAgICAgICAgICAgICAgICBtYXg6IDgwLFxyXG4gICAgICAgICAgICAgICAgbGFiZWxzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hvdzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3JzOiBLVEFwcC5nZXRTZXR0aW5ncygpWydjb2xvcnMnXVsnZ3JheSddWydncmF5LTUwMCddLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogJzEycHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250RmFtaWx5OiBLVEFwcC5nZXRTZXR0aW5ncygpWydmb250LWZhbWlseSddXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzdGF0ZXM6IHtcclxuICAgICAgICAgICAgICAgIG5vcm1hbDoge1xyXG4gICAgICAgICAgICAgICAgICAgIGZpbHRlcjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnbm9uZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiAwXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGhvdmVyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdub25lJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IDBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgYWN0aXZlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxsb3dNdWx0aXBsZURhdGFQb2ludHNTZWxlY3Rpb246IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGZpbHRlcjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnbm9uZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiAwXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB0b29sdGlwOiB7XHJcbiAgICAgICAgICAgICAgICBzdHlsZToge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMTJweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgZm9udEZhbWlseTogS1RBcHAuZ2V0U2V0dGluZ3MoKVsnZm9udC1mYW1pbHknXVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHk6IHtcclxuICAgICAgICAgICAgICAgICAgICBmb3JtYXR0ZXI6IGZ1bmN0aW9uICh2YWwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiJFwiICsgdmFsICsgXCIgdGhvdXNhbmRzXCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgbWFya2VyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hvdzogZmFsc2VcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY29sb3JzOiBbJ3RyYW5zcGFyZW50J10sXHJcbiAgICAgICAgICAgIG1hcmtlcnM6IHtcclxuICAgICAgICAgICAgICAgIGNvbG9yczogW0tUQXBwLmdldFNldHRpbmdzKClbJ2NvbG9ycyddWyd0aGVtZSddWydsaWdodCddWydpbmZvJ11dLFxyXG4gICAgICAgICAgICAgICAgc3Ryb2tlQ29sb3I6IFtzdHJva2VDb2xvcl0sXHJcbiAgICAgICAgICAgICAgICBzdHJva2VXaWR0aDogM1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdmFyIGNoYXJ0ID0gbmV3IEFwZXhDaGFydHMoZWxlbWVudCwgb3B0aW9ucyk7XHJcbiAgICAgICAgY2hhcnQucmVuZGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIF9pbml0TWl4ZWRXaWRnZXQzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJrdF9taXhlZF93aWRnZXRfM19jaGFydFwiKTtcclxuICAgICAgICB2YXIgaGVpZ2h0ID0gcGFyc2VJbnQoS1RVdGlsLmNzcyhlbGVtZW50LCAnaGVpZ2h0JykpO1xyXG5cclxuICAgICAgICBpZiAoIWVsZW1lbnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIHN0cm9rZUNvbG9yID0gS1RBcHAuZ2V0U2V0dGluZ3MoKVsnY29sb3JzJ11bJ3RoZW1lJ11bJ2Jhc2UnXVsnd2hpdGUnXTtcclxuXHJcbiAgICAgICAgdmFyIG9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgIHNlcmllczogW3tcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdOZXQgUHJvZml0JyxcclxuICAgICAgICAgICAgICAgIGRhdGE6IFszMCwgNDUsIDMyLCA3MCwgNDAsIDQwLCA0MF1cclxuICAgICAgICAgICAgfV0sXHJcbiAgICAgICAgICAgIGNoYXJ0OiB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiAnYXJlYScsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGhlaWdodCxcclxuICAgICAgICAgICAgICAgIHRvb2xiYXI6IHtcclxuICAgICAgICAgICAgICAgICAgICBzaG93OiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHpvb206IHtcclxuICAgICAgICAgICAgICAgICAgICBlbmFibGVkOiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHNwYXJrbGluZToge1xyXG4gICAgICAgICAgICAgICAgICAgIGVuYWJsZWQ6IHRydWVcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBkcm9wU2hhZG93OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBlbmFibGVkT25TZXJpZXM6IHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IDUsXHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogMCxcclxuICAgICAgICAgICAgICAgICAgICBibHVyOiAzLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBzdHJva2VDb2xvcixcclxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjNcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcGxvdE9wdGlvbnM6IHt9LFxyXG4gICAgICAgICAgICBsZWdlbmQ6IHtcclxuICAgICAgICAgICAgICAgIHNob3c6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGRhdGFMYWJlbHM6IHtcclxuICAgICAgICAgICAgICAgIGVuYWJsZWQ6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGZpbGw6IHtcclxuICAgICAgICAgICAgICAgIHR5cGU6ICdzb2xpZCcsXHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHN0cm9rZToge1xyXG4gICAgICAgICAgICAgICAgY3VydmU6ICdzbW9vdGgnLFxyXG4gICAgICAgICAgICAgICAgc2hvdzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAzLFxyXG4gICAgICAgICAgICAgICAgY29sb3JzOiBbc3Ryb2tlQ29sb3JdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHhheGlzOiB7XHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yaWVzOiBbJ0ZlYicsICdNYXInLCAnQXByJywgJ01heScsICdKdW4nLCAnSnVsJywgJ0F1ZyddLFxyXG4gICAgICAgICAgICAgICAgYXhpc0JvcmRlcjoge1xyXG4gICAgICAgICAgICAgICAgICAgIHNob3c6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGF4aXNUaWNrczoge1xyXG4gICAgICAgICAgICAgICAgICAgIHNob3c6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgbGFiZWxzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hvdzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3JzOiBLVEFwcC5nZXRTZXR0aW5ncygpWydjb2xvcnMnXVsnZ3JheSddWydncmF5LTUwMCddLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogJzEycHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250RmFtaWx5OiBLVEFwcC5nZXRTZXR0aW5ncygpWydmb250LWZhbWlseSddXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGNyb3NzaGFpcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICBzaG93OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2Zyb250JyxcclxuICAgICAgICAgICAgICAgICAgICBzdHJva2U6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IEtUQXBwLmdldFNldHRpbmdzKClbJ2NvbG9ycyddWydncmF5J11bJ2dyYXktMzAwJ10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXNoQXJyYXk6IDNcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgdG9vbHRpcDoge1xyXG4gICAgICAgICAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybWF0dGVyOiB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgb2Zmc2V0WTogMCxcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogJzEycHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250RmFtaWx5OiBLVEFwcC5nZXRTZXR0aW5ncygpWydmb250LWZhbWlseSddXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB5YXhpczoge1xyXG4gICAgICAgICAgICAgICAgbWluOiAwLFxyXG4gICAgICAgICAgICAgICAgbWF4OiA4MCxcclxuICAgICAgICAgICAgICAgIGxhYmVsczoge1xyXG4gICAgICAgICAgICAgICAgICAgIHNob3c6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yczogS1RBcHAuZ2V0U2V0dGluZ3MoKVsnY29sb3JzJ11bJ2dyYXknXVsnZ3JheS01MDAnXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6ICcxMnB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udEZhbWlseTogS1RBcHAuZ2V0U2V0dGluZ3MoKVsnZm9udC1mYW1pbHknXVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc3RhdGVzOiB7XHJcbiAgICAgICAgICAgICAgICBub3JtYWw6IHtcclxuICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ25vbmUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogMFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBob3Zlcjoge1xyXG4gICAgICAgICAgICAgICAgICAgIGZpbHRlcjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnbm9uZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiAwXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGFjdGl2ZToge1xyXG4gICAgICAgICAgICAgICAgICAgIGFsbG93TXVsdGlwbGVEYXRhUG9pbnRzU2VsZWN0aW9uOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ25vbmUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogMFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdG9vbHRpcDoge1xyXG4gICAgICAgICAgICAgICAgc3R5bGU6IHtcclxuICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogJzEycHgnLFxyXG4gICAgICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk6IEtUQXBwLmdldFNldHRpbmdzKClbJ2ZvbnQtZmFtaWx5J11cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB5OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybWF0dGVyOiBmdW5jdGlvbiAodmFsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIiRcIiArIHZhbCArIFwiIHRob3VzYW5kc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIG1hcmtlcjoge1xyXG4gICAgICAgICAgICAgICAgICAgIHNob3c6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNvbG9yczogWyd0cmFuc3BhcmVudCddLFxyXG4gICAgICAgICAgICBtYXJrZXJzOiB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcnM6IFtLVEFwcC5nZXRTZXR0aW5ncygpWydjb2xvcnMnXVsndGhlbWUnXVsnbGlnaHQnXVsnZGFyayddXSxcclxuICAgICAgICAgICAgICAgIHN0cm9rZUNvbG9yOiBbc3Ryb2tlQ29sb3JdLFxyXG4gICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg6IDNcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHZhciBjaGFydCA9IG5ldyBBcGV4Q2hhcnRzKGVsZW1lbnQsIG9wdGlvbnMpO1xyXG4gICAgICAgIGNoYXJ0LnJlbmRlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBfaW5pdE1peGVkV2lkZ2V0NCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwia3RfbWl4ZWRfd2lkZ2V0XzRfY2hhcnRcIik7XHJcbiAgICAgICAgdmFyIGhlaWdodCA9IHBhcnNlSW50KEtUVXRpbC5jc3MoZWxlbWVudCwgJ2hlaWdodCcpKTtcclxuXHJcbiAgICAgICAgaWYgKCFlbGVtZW50KSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBvcHRpb25zID0ge1xyXG4gICAgICAgICAgICBzZXJpZXM6IFt7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnTmV0IFByb2ZpdCcsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiBbMzUsIDY1LCA3NSwgNTUsIDQ1LCA2MCwgNTVdXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdSZXZlbnVlJyxcclxuICAgICAgICAgICAgICAgIGRhdGE6IFs0MCwgNzAsIDgwLCA2MCwgNTAsIDY1LCA2MF1cclxuICAgICAgICAgICAgfV0sXHJcbiAgICAgICAgICAgIGNoYXJ0OiB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiAnYmFyJyxcclxuICAgICAgICAgICAgICAgIGhlaWdodDogaGVpZ2h0LFxyXG4gICAgICAgICAgICAgICAgdG9vbGJhcjoge1xyXG4gICAgICAgICAgICAgICAgICAgIHNob3c6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgc3BhcmtsaW5lOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcGxvdE9wdGlvbnM6IHtcclxuICAgICAgICAgICAgICAgIGJhcjoge1xyXG4gICAgICAgICAgICAgICAgICAgIGhvcml6b250YWw6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbHVtbldpZHRoOiBbJzMwJSddLFxyXG4gICAgICAgICAgICAgICAgICAgIGVuZGluZ1NoYXBlOiAncm91bmRlZCdcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGxlZ2VuZDoge1xyXG4gICAgICAgICAgICAgICAgc2hvdzogZmFsc2VcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZGF0YUxhYmVsczoge1xyXG4gICAgICAgICAgICAgICAgZW5hYmxlZDogZmFsc2VcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc3Ryb2tlOiB7XHJcbiAgICAgICAgICAgICAgICBzaG93OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEsXHJcbiAgICAgICAgICAgICAgICBjb2xvcnM6IFsndHJhbnNwYXJlbnQnXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB4YXhpczoge1xyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcmllczogWydGZWInLCAnTWFyJywgJ0FwcicsICdNYXknLCAnSnVuJywgJ0p1bCddLFxyXG4gICAgICAgICAgICAgICAgYXhpc0JvcmRlcjoge1xyXG4gICAgICAgICAgICAgICAgICAgIHNob3c6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGF4aXNUaWNrczoge1xyXG4gICAgICAgICAgICAgICAgICAgIHNob3c6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgbGFiZWxzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3JzOiBLVEFwcC5nZXRTZXR0aW5ncygpWydjb2xvcnMnXVsnZ3JheSddWydncmF5LTUwMCddLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogJzEycHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250RmFtaWx5OiBLVEFwcC5nZXRTZXR0aW5ncygpWydmb250LWZhbWlseSddXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB5YXhpczoge1xyXG4gICAgICAgICAgICAgICAgbWluOiAwLFxyXG4gICAgICAgICAgICAgICAgbWF4OiAxMDAsXHJcbiAgICAgICAgICAgICAgICBsYWJlbHM6IHtcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcnM6IEtUQXBwLmdldFNldHRpbmdzKClbJ2NvbG9ycyddWydncmF5J11bJ2dyYXktNTAwJ10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMTJweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk6IEtUQXBwLmdldFNldHRpbmdzKClbJ2ZvbnQtZmFtaWx5J11cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGZpbGw6IHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFsnc29saWQnLCAnc29saWQnXSxcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IFswLjI1LCAxXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzdGF0ZXM6IHtcclxuICAgICAgICAgICAgICAgIG5vcm1hbDoge1xyXG4gICAgICAgICAgICAgICAgICAgIGZpbHRlcjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnbm9uZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiAwXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGhvdmVyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdub25lJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IDBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgYWN0aXZlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxsb3dNdWx0aXBsZURhdGFQb2ludHNTZWxlY3Rpb246IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGZpbHRlcjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnbm9uZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiAwXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB0b29sdGlwOiB7XHJcbiAgICAgICAgICAgICAgICBzdHlsZToge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMTJweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgZm9udEZhbWlseTogS1RBcHAuZ2V0U2V0dGluZ3MoKVsnZm9udC1mYW1pbHknXVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHk6IHtcclxuICAgICAgICAgICAgICAgICAgICBmb3JtYXR0ZXI6IGZ1bmN0aW9uICh2YWwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiJFwiICsgdmFsICsgXCIgdGhvdXNhbmRzXCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgbWFya2VyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hvdzogZmFsc2VcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY29sb3JzOiBbJyNmZmZmZmYnLCAnI2ZmZmZmZiddLFxyXG4gICAgICAgICAgICBncmlkOiB7XHJcbiAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogS1RBcHAuZ2V0U2V0dGluZ3MoKVsnY29sb3JzJ11bJ2dyYXknXVsnZ3JheS0yMDAnXSxcclxuICAgICAgICAgICAgICAgIHN0cm9rZURhc2hBcnJheTogNCxcclxuICAgICAgICAgICAgICAgIHlheGlzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGluZXM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2hvdzogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogMjAsXHJcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDIwXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB2YXIgY2hhcnQgPSBuZXcgQXBleENoYXJ0cyhlbGVtZW50LCBvcHRpb25zKTtcclxuICAgICAgICBjaGFydC5yZW5kZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgX2luaXRNaXhlZFdpZGdldDUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImt0X21peGVkX3dpZGdldF81X2NoYXJ0XCIpO1xyXG4gICAgICAgIHZhciBoZWlnaHQgPSBwYXJzZUludChLVFV0aWwuY3NzKGVsZW1lbnQsICdoZWlnaHQnKSk7XHJcblxyXG4gICAgICAgIGlmICghZWxlbWVudCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgb3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgc2VyaWVzOiBbe1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ05ldCBQcm9maXQnLFxyXG4gICAgICAgICAgICAgICAgZGF0YTogWzM1LCA2NSwgNzUsIDU1LCA0NSwgNjAsIDU1XVxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnUmV2ZW51ZScsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiBbNDAsIDcwLCA4MCwgNjAsIDUwLCA2NSwgNjBdXHJcbiAgICAgICAgICAgIH1dLFxyXG4gICAgICAgICAgICBjaGFydDoge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogJ2JhcicsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGhlaWdodCxcclxuICAgICAgICAgICAgICAgIHRvb2xiYXI6IHtcclxuICAgICAgICAgICAgICAgICAgICBzaG93OiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHNwYXJrbGluZToge1xyXG4gICAgICAgICAgICAgICAgICAgIGVuYWJsZWQ6IHRydWVcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHBsb3RPcHRpb25zOiB7XHJcbiAgICAgICAgICAgICAgICBiYXI6IHtcclxuICAgICAgICAgICAgICAgICAgICBob3Jpem9udGFsOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBjb2x1bW5XaWR0aDogWyczMCUnXSxcclxuICAgICAgICAgICAgICAgICAgICBlbmRpbmdTaGFwZTogJ3JvdW5kZWQnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBsZWdlbmQ6IHtcclxuICAgICAgICAgICAgICAgIHNob3c6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGRhdGFMYWJlbHM6IHtcclxuICAgICAgICAgICAgICAgIGVuYWJsZWQ6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHN0cm9rZToge1xyXG4gICAgICAgICAgICAgICAgc2hvdzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxLFxyXG4gICAgICAgICAgICAgICAgY29sb3JzOiBbJ3RyYW5zcGFyZW50J11cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgeGF4aXM6IHtcclxuICAgICAgICAgICAgICAgIGNhdGVnb3JpZXM6IFsnRmViJywgJ01hcicsICdBcHInLCAnTWF5JywgJ0p1bicsICdKdWwnXSxcclxuICAgICAgICAgICAgICAgIGF4aXNCb3JkZXI6IHtcclxuICAgICAgICAgICAgICAgICAgICBzaG93OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBheGlzVGlja3M6IHtcclxuICAgICAgICAgICAgICAgICAgICBzaG93OiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGxhYmVsczoge1xyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yczogS1RBcHAuZ2V0U2V0dGluZ3MoKVsnY29sb3JzJ11bJ2dyYXknXVsnZ3JheS01MDAnXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6ICcxMnB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udEZhbWlseTogS1RBcHAuZ2V0U2V0dGluZ3MoKVsnZm9udC1mYW1pbHknXVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgeWF4aXM6IHtcclxuICAgICAgICAgICAgICAgIG1pbjogMCxcclxuICAgICAgICAgICAgICAgIG1heDogMTAwLFxyXG4gICAgICAgICAgICAgICAgbGFiZWxzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3JzOiBLVEFwcC5nZXRTZXR0aW5ncygpWydjb2xvcnMnXVsnZ3JheSddWydncmF5LTUwMCddLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogJzEycHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250RmFtaWx5OiBLVEFwcC5nZXRTZXR0aW5ncygpWydmb250LWZhbWlseSddXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBmaWxsOiB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBbJ3NvbGlkJywgJ3NvbGlkJ10sXHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiBbMC4yNSwgMV1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc3RhdGVzOiB7XHJcbiAgICAgICAgICAgICAgICBub3JtYWw6IHtcclxuICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ25vbmUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogMFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBob3Zlcjoge1xyXG4gICAgICAgICAgICAgICAgICAgIGZpbHRlcjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnbm9uZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiAwXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGFjdGl2ZToge1xyXG4gICAgICAgICAgICAgICAgICAgIGFsbG93TXVsdGlwbGVEYXRhUG9pbnRzU2VsZWN0aW9uOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ25vbmUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogMFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdG9vbHRpcDoge1xyXG4gICAgICAgICAgICAgICAgc3R5bGU6IHtcclxuICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogJzEycHgnLFxyXG4gICAgICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk6IEtUQXBwLmdldFNldHRpbmdzKClbJ2ZvbnQtZmFtaWx5J11cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB5OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybWF0dGVyOiBmdW5jdGlvbiAodmFsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIiRcIiArIHZhbCArIFwiIHRob3VzYW5kc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIG1hcmtlcjoge1xyXG4gICAgICAgICAgICAgICAgICAgIHNob3c6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNvbG9yczogWycjZmZmZmZmJywgJyNmZmZmZmYnXSxcclxuICAgICAgICAgICAgZ3JpZDoge1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6IEtUQXBwLmdldFNldHRpbmdzKClbJ2NvbG9ycyddWydncmF5J11bJ2dyYXktMjAwJ10sXHJcbiAgICAgICAgICAgICAgICBzdHJva2VEYXNoQXJyYXk6IDQsXHJcbiAgICAgICAgICAgICAgICB5YXhpczoge1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmVzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3c6IHRydWVcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgcGFkZGluZzoge1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDIwLFxyXG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAyMFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdmFyIGNoYXJ0ID0gbmV3IEFwZXhDaGFydHMoZWxlbWVudCwgb3B0aW9ucyk7XHJcbiAgICAgICAgY2hhcnQucmVuZGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIF9pbml0TWl4ZWRXaWRnZXQ2ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJrdF9taXhlZF93aWRnZXRfNl9jaGFydFwiKTtcclxuICAgICAgICB2YXIgaGVpZ2h0ID0gcGFyc2VJbnQoS1RVdGlsLmNzcyhlbGVtZW50LCAnaGVpZ2h0JykpO1xyXG5cclxuICAgICAgICBpZiAoIWVsZW1lbnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIG9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgIHNlcmllczogW3tcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdOZXQgUHJvZml0JyxcclxuICAgICAgICAgICAgICAgIGRhdGE6IFszNSwgNjUsIDc1LCA1NSwgNDUsIDYwLCA1NV1cclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ1JldmVudWUnLFxyXG4gICAgICAgICAgICAgICAgZGF0YTogWzQwLCA3MCwgODAsIDYwLCA1MCwgNjUsIDYwXVxyXG4gICAgICAgICAgICB9XSxcclxuICAgICAgICAgICAgY2hhcnQ6IHtcclxuICAgICAgICAgICAgICAgIHR5cGU6ICdiYXInLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBoZWlnaHQsXHJcbiAgICAgICAgICAgICAgICB0b29sYmFyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hvdzogZmFsc2VcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBzcGFya2xpbmU6IHtcclxuICAgICAgICAgICAgICAgICAgICBlbmFibGVkOiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBwbG90T3B0aW9uczoge1xyXG4gICAgICAgICAgICAgICAgYmFyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgY29sdW1uV2lkdGg6IFsnMzAlJ10sXHJcbiAgICAgICAgICAgICAgICAgICAgZW5kaW5nU2hhcGU6ICdyb3VuZGVkJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbGVnZW5kOiB7XHJcbiAgICAgICAgICAgICAgICBzaG93OiBmYWxzZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBkYXRhTGFiZWxzOiB7XHJcbiAgICAgICAgICAgICAgICBlbmFibGVkOiBmYWxzZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzdHJva2U6IHtcclxuICAgICAgICAgICAgICAgIHNob3c6IHRydWUsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMSxcclxuICAgICAgICAgICAgICAgIGNvbG9yczogWyd0cmFuc3BhcmVudCddXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHhheGlzOiB7XHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yaWVzOiBbJ0ZlYicsICdNYXInLCAnQXByJywgJ01heScsICdKdW4nLCAnSnVsJ10sXHJcbiAgICAgICAgICAgICAgICBheGlzQm9yZGVyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hvdzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgYXhpc1RpY2tzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hvdzogZmFsc2VcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBsYWJlbHM6IHtcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcnM6IEtUQXBwLmdldFNldHRpbmdzKClbJ2NvbG9ycyddWydncmF5J11bJ2dyYXktNTAwJ10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMTJweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk6IEtUQXBwLmdldFNldHRpbmdzKClbJ2ZvbnQtZmFtaWx5J11cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHlheGlzOiB7XHJcbiAgICAgICAgICAgICAgICBtaW46IDAsXHJcbiAgICAgICAgICAgICAgICBtYXg6IDEwMCxcclxuICAgICAgICAgICAgICAgIGxhYmVsczoge1xyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yczogS1RBcHAuZ2V0U2V0dGluZ3MoKVsnY29sb3JzJ11bJ2dyYXknXVsnZ3JheS01MDAnXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6ICcxMnB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udEZhbWlseTogS1RBcHAuZ2V0U2V0dGluZ3MoKVsnZm9udC1mYW1pbHknXVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZmlsbDoge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogWydzb2xpZCcsICdzb2xpZCddLFxyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogWzAuMjUsIDFdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHN0YXRlczoge1xyXG4gICAgICAgICAgICAgICAgbm9ybWFsOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdub25lJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IDBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgaG92ZXI6IHtcclxuICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ25vbmUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogMFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBhY3RpdmU6IHtcclxuICAgICAgICAgICAgICAgICAgICBhbGxvd011bHRpcGxlRGF0YVBvaW50c1NlbGVjdGlvbjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdub25lJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IDBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHRvb2x0aXA6IHtcclxuICAgICAgICAgICAgICAgIHN0eWxlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6ICcxMnB4JyxcclxuICAgICAgICAgICAgICAgICAgICBmb250RmFtaWx5OiBLVEFwcC5nZXRTZXR0aW5ncygpWydmb250LWZhbWlseSddXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgeToge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcm1hdHRlcjogZnVuY3Rpb24gKHZhbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCIkXCIgKyB2YWwgKyBcIiB0aG91c2FuZHNcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBtYXJrZXI6IHtcclxuICAgICAgICAgICAgICAgICAgICBzaG93OiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjb2xvcnM6IFsnI2ZmZmZmZicsICcjZmZmZmZmJ10sXHJcbiAgICAgICAgICAgIGdyaWQ6IHtcclxuICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiBLVEFwcC5nZXRTZXR0aW5ncygpWydjb2xvcnMnXVsnZ3JheSddWydncmF5LTIwMCddLFxyXG4gICAgICAgICAgICAgICAgc3Ryb2tlRGFzaEFycmF5OiA0LFxyXG4gICAgICAgICAgICAgICAgeWF4aXM6IHtcclxuICAgICAgICAgICAgICAgICAgICBsaW5lczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaG93OiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IHtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAyMCxcclxuICAgICAgICAgICAgICAgICAgICByaWdodDogMjBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHZhciBjaGFydCA9IG5ldyBBcGV4Q2hhcnRzKGVsZW1lbnQsIG9wdGlvbnMpO1xyXG4gICAgICAgIGNoYXJ0LnJlbmRlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBfaW5pdE1peGVkV2lkZ2V0MTMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImt0X21peGVkX3dpZGdldF8xM19jaGFydFwiKTtcclxuICAgICAgICB2YXIgaGVpZ2h0ID0gcGFyc2VJbnQoS1RVdGlsLmNzcyhlbGVtZW50LCAnaGVpZ2h0JykpO1xyXG5cclxuICAgICAgICBpZiAoIWVsZW1lbnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIG9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgIHNlcmllczogW3tcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdOZXQgUHJvZml0JyxcclxuICAgICAgICAgICAgICAgIGRhdGE6IFszMCwgMjUsIDQ1LCAzMCwgNTUsIDU1XVxyXG4gICAgICAgICAgICB9XSxcclxuICAgICAgICAgICAgY2hhcnQ6IHtcclxuICAgICAgICAgICAgICAgIHR5cGU6ICdhcmVhJyxcclxuICAgICAgICAgICAgICAgIGhlaWdodDogaGVpZ2h0LFxyXG4gICAgICAgICAgICAgICAgdG9vbGJhcjoge1xyXG4gICAgICAgICAgICAgICAgICAgIHNob3c6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgem9vbToge1xyXG4gICAgICAgICAgICAgICAgICAgIGVuYWJsZWQ6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgc3BhcmtsaW5lOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBwbG90T3B0aW9uczoge30sXHJcbiAgICAgICAgICAgIGxlZ2VuZDoge1xyXG4gICAgICAgICAgICAgICAgc2hvdzogZmFsc2VcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZGF0YUxhYmVsczoge1xyXG4gICAgICAgICAgICAgICAgZW5hYmxlZDogZmFsc2VcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZmlsbDoge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogJ3NvbGlkJyxcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDFcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc3Ryb2tlOiB7XHJcbiAgICAgICAgICAgICAgICBjdXJ2ZTogJ3Ntb290aCcsXHJcbiAgICAgICAgICAgICAgICBzaG93OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDMsXHJcbiAgICAgICAgICAgICAgICBjb2xvcnM6IFtLVEFwcC5nZXRTZXR0aW5ncygpWydjb2xvcnMnXVsndGhlbWUnXVsnYmFzZSddWydpbmZvJ11dXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHhheGlzOiB7XHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yaWVzOiBbJ0ZlYicsICdNYXInLCAnQXByJywgJ01heScsICdKdW4nLCAnSnVsJ10sXHJcbiAgICAgICAgICAgICAgICBheGlzQm9yZGVyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hvdzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgYXhpc1RpY2tzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hvdzogZmFsc2VcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBsYWJlbHM6IHtcclxuICAgICAgICAgICAgICAgICAgICBzaG93OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcnM6IEtUQXBwLmdldFNldHRpbmdzKClbJ2NvbG9ycyddWydncmF5J11bJ2dyYXktNTAwJ10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMTJweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk6IEtUQXBwLmdldFNldHRpbmdzKClbJ2ZvbnQtZmFtaWx5J11cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgY3Jvc3NoYWlyczoge1xyXG4gICAgICAgICAgICAgICAgICAgIHNob3c6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnZnJvbnQnLFxyXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogS1RBcHAuZ2V0U2V0dGluZ3MoKVsnY29sb3JzJ11bJ2dyYXknXVsnZ3JheS0zMDAnXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhc2hBcnJheTogM1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB0b29sdGlwOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBmb3JtYXR0ZXI6IHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgICAgICAgICBvZmZzZXRZOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMTJweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk6IEtUQXBwLmdldFNldHRpbmdzKClbJ2ZvbnQtZmFtaWx5J11cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHlheGlzOiB7XHJcbiAgICAgICAgICAgICAgICBtaW46IDAsXHJcbiAgICAgICAgICAgICAgICBtYXg6IDYwLFxyXG4gICAgICAgICAgICAgICAgbGFiZWxzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hvdzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3JzOiBLVEFwcC5nZXRTZXR0aW5ncygpWydjb2xvcnMnXVsnZ3JheSddWydncmF5LTUwMCddLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogJzEycHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250RmFtaWx5OiBLVEFwcC5nZXRTZXR0aW5ncygpWydmb250LWZhbWlseSddXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzdGF0ZXM6IHtcclxuICAgICAgICAgICAgICAgIG5vcm1hbDoge1xyXG4gICAgICAgICAgICAgICAgICAgIGZpbHRlcjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnbm9uZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiAwXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGhvdmVyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdub25lJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IDBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgYWN0aXZlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxsb3dNdWx0aXBsZURhdGFQb2ludHNTZWxlY3Rpb246IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGZpbHRlcjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnbm9uZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiAwXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB0b29sdGlwOiB7XHJcbiAgICAgICAgICAgICAgICBzdHlsZToge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMTJweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgZm9udEZhbWlseTogS1RBcHAuZ2V0U2V0dGluZ3MoKVsnZm9udC1mYW1pbHknXVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHk6IHtcclxuICAgICAgICAgICAgICAgICAgICBmb3JtYXR0ZXI6IGZ1bmN0aW9uICh2YWwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiJFwiICsgdmFsICsgXCIgdGhvdXNhbmRzXCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNvbG9yczogW0tUQXBwLmdldFNldHRpbmdzKClbJ2NvbG9ycyddWyd0aGVtZSddWydsaWdodCddWydpbmZvJ11dLFxyXG4gICAgICAgICAgICBtYXJrZXJzOiB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcnM6IFtLVEFwcC5nZXRTZXR0aW5ncygpWydjb2xvcnMnXVsndGhlbWUnXVsnbGlnaHQnXVsnaW5mbyddXSxcclxuICAgICAgICAgICAgICAgIHN0cm9rZUNvbG9yOiBbS1RBcHAuZ2V0U2V0dGluZ3MoKVsnY29sb3JzJ11bJ3RoZW1lJ11bJ2Jhc2UnXVsnaW5mbyddXSxcclxuICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoOiAzXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB2YXIgY2hhcnQgPSBuZXcgQXBleENoYXJ0cyhlbGVtZW50LCBvcHRpb25zKTtcclxuICAgICAgICBjaGFydC5yZW5kZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgX2luaXRNaXhlZFdpZGdldDE0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJrdF9taXhlZF93aWRnZXRfMTRfY2hhcnRcIik7XHJcbiAgICAgICAgdmFyIGhlaWdodCA9IHBhcnNlSW50KEtUVXRpbC5jc3MoZWxlbWVudCwgJ2hlaWdodCcpKTtcclxuXHJcbiAgICAgICAgaWYgKCFlbGVtZW50KSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBvcHRpb25zID0ge1xyXG4gICAgICAgICAgICBzZXJpZXM6IFs3NF0sXHJcbiAgICAgICAgICAgIGNoYXJ0OiB7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGhlaWdodCxcclxuICAgICAgICAgICAgICAgIHR5cGU6ICdyYWRpYWxCYXInLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBwbG90T3B0aW9uczoge1xyXG4gICAgICAgICAgICAgICAgcmFkaWFsQmFyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaG9sbG93OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZTogXCI2NSVcIlxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YUxhYmVsczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaG93T246IFwiYWx3YXlzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3c6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogJzcwMCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBLVEFwcC5nZXRTZXR0aW5ncygpWydjb2xvcnMnXVsnZ3JheSddWydncmF5LTcwMCddLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMzBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogJzcwMCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvZmZzZXRZOiAxMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3c6IHRydWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgdHJhY2s6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogS1RBcHAuZ2V0U2V0dGluZ3MoKVsnY29sb3JzJ11bJ3RoZW1lJ11bJ2xpZ2h0J11bJ3N1Y2Nlc3MnXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg6ICcxMDAlJ1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY29sb3JzOiBbS1RBcHAuZ2V0U2V0dGluZ3MoKVsnY29sb3JzJ11bJ3RoZW1lJ11bJ2Jhc2UnXVsnc3VjY2VzcyddXSxcclxuICAgICAgICAgICAgc3Ryb2tlOiB7XHJcbiAgICAgICAgICAgICAgICBsaW5lQ2FwOiBcInJvdW5kXCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGxhYmVsczogW1wiUHJvZ3Jlc3NcIl1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB2YXIgY2hhcnQgPSBuZXcgQXBleENoYXJ0cyhlbGVtZW50LCBvcHRpb25zKTtcclxuICAgICAgICBjaGFydC5yZW5kZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgX2luaXRNaXhlZFdpZGdldDE1ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJrdF9taXhlZF93aWRnZXRfMTVfY2hhcnRcIik7XHJcbiAgICAgICAgdmFyIGhlaWdodCA9IHBhcnNlSW50KEtUVXRpbC5jc3MoZWxlbWVudCwgJ2hlaWdodCcpKTtcclxuXHJcbiAgICAgICAgaWYgKCFlbGVtZW50KSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBvcHRpb25zID0ge1xyXG4gICAgICAgICAgICBzZXJpZXM6IFt7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnTmV0IFByb2ZpdCcsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiBbMzAsIDMwLCA2MCwgMjUsIDI1LCA0MF1cclxuICAgICAgICAgICAgfV0sXHJcbiAgICAgICAgICAgIGNoYXJ0OiB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiAnYXJlYScsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGhlaWdodCxcclxuICAgICAgICAgICAgICAgIHRvb2xiYXI6IHtcclxuICAgICAgICAgICAgICAgICAgICBzaG93OiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHpvb206IHtcclxuICAgICAgICAgICAgICAgICAgICBlbmFibGVkOiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHNwYXJrbGluZToge1xyXG4gICAgICAgICAgICAgICAgICAgIGVuYWJsZWQ6IHRydWVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcGxvdE9wdGlvbnM6IHt9LFxyXG4gICAgICAgICAgICBsZWdlbmQ6IHtcclxuICAgICAgICAgICAgICAgIHNob3c6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGRhdGFMYWJlbHM6IHtcclxuICAgICAgICAgICAgICAgIGVuYWJsZWQ6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGZpbGw6IHtcclxuICAgICAgICAgICAgICAgIHR5cGU6ICdncmFkaWVudCcsXHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxLFxyXG4gICAgICAgICAgICAgICAgZ3JhZGllbnQ6IHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJ2ZXJ0aWNhbFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHNoYWRlSW50ZW5zaXR5OiAwLjUsXHJcbiAgICAgICAgICAgICAgICAgICAgZ3JhZGllbnRUb0NvbG9yczogdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICAgICAgICAgIGludmVyc2VDb2xvcnM6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eUZyb206IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eVRvOiAwLjM3NSxcclxuICAgICAgICAgICAgICAgICAgICBzdG9wczogWzI1LCA1MCwgMTAwXSxcclxuICAgICAgICAgICAgICAgICAgICBjb2xvclN0b3BzOiBbXVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzdHJva2U6IHtcclxuICAgICAgICAgICAgICAgIGN1cnZlOiAnc21vb3RoJyxcclxuICAgICAgICAgICAgICAgIHNob3c6IHRydWUsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMyxcclxuICAgICAgICAgICAgICAgIGNvbG9yczogW0tUQXBwLmdldFNldHRpbmdzKClbJ2NvbG9ycyddWyd0aGVtZSddWydiYXNlJ11bJ2RhbmdlciddXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB4YXhpczoge1xyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcmllczogWydGZWInLCAnTWFyJywgJ0FwcicsICdNYXknLCAnSnVuJywgJ0p1bCddLFxyXG4gICAgICAgICAgICAgICAgYXhpc0JvcmRlcjoge1xyXG4gICAgICAgICAgICAgICAgICAgIHNob3c6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGF4aXNUaWNrczoge1xyXG4gICAgICAgICAgICAgICAgICAgIHNob3c6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgbGFiZWxzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hvdzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3JzOiBLVEFwcC5nZXRTZXR0aW5ncygpWydjb2xvcnMnXVsnZ3JheSddWydncmF5LTUwMCddLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogJzEycHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250RmFtaWx5OiBLVEFwcC5nZXRTZXR0aW5ncygpWydmb250LWZhbWlseSddXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGNyb3NzaGFpcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICBzaG93OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2Zyb250JyxcclxuICAgICAgICAgICAgICAgICAgICBzdHJva2U6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IEtUQXBwLmdldFNldHRpbmdzKClbJ2NvbG9ycyddWydncmF5J11bJ2dyYXktMzAwJ10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXNoQXJyYXk6IDNcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgdG9vbHRpcDoge1xyXG4gICAgICAgICAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybWF0dGVyOiB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgb2Zmc2V0WTogMCxcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogJzEycHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250RmFtaWx5OiBLVEFwcC5nZXRTZXR0aW5ncygpWydmb250LWZhbWlseSddXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB5YXhpczoge1xyXG4gICAgICAgICAgICAgICAgbWluOiAwLFxyXG4gICAgICAgICAgICAgICAgbWF4OiA2NSxcclxuICAgICAgICAgICAgICAgIGxhYmVsczoge1xyXG4gICAgICAgICAgICAgICAgICAgIHNob3c6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yczogS1RBcHAuZ2V0U2V0dGluZ3MoKVsnY29sb3JzJ11bJ2dyYXknXVsnZ3JheS01MDAnXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6ICcxMnB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udEZhbWlseTogS1RBcHAuZ2V0U2V0dGluZ3MoKVsnZm9udC1mYW1pbHknXVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc3RhdGVzOiB7XHJcbiAgICAgICAgICAgICAgICBub3JtYWw6IHtcclxuICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ25vbmUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogMFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBob3Zlcjoge1xyXG4gICAgICAgICAgICAgICAgICAgIGZpbHRlcjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnbm9uZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiAwXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGFjdGl2ZToge1xyXG4gICAgICAgICAgICAgICAgICAgIGFsbG93TXVsdGlwbGVEYXRhUG9pbnRzU2VsZWN0aW9uOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ25vbmUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogMFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdG9vbHRpcDoge1xyXG4gICAgICAgICAgICAgICAgc3R5bGU6IHtcclxuICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogJzEycHgnLFxyXG4gICAgICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk6IEtUQXBwLmdldFNldHRpbmdzKClbJ2ZvbnQtZmFtaWx5J11cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB5OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybWF0dGVyOiBmdW5jdGlvbiAodmFsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIiRcIiArIHZhbCArIFwiIHRob3VzYW5kc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjb2xvcnM6IFtLVEFwcC5nZXRTZXR0aW5ncygpWydjb2xvcnMnXVsndGhlbWUnXVsnbGlnaHQnXVsnZGFuZ2VyJ11dLFxyXG4gICAgICAgICAgICBtYXJrZXJzOiB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcnM6IFtLVEFwcC5nZXRTZXR0aW5ncygpWydjb2xvcnMnXVsndGhlbWUnXVsnbGlnaHQnXVsnZGFuZ2VyJ11dLFxyXG4gICAgICAgICAgICAgICAgc3Ryb2tlQ29sb3I6IFtLVEFwcC5nZXRTZXR0aW5ncygpWydjb2xvcnMnXVsndGhlbWUnXVsnYmFzZSddWydkYW5nZXInXV0sXHJcbiAgICAgICAgICAgICAgICBzdHJva2VXaWR0aDogM1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdmFyIGNoYXJ0ID0gbmV3IEFwZXhDaGFydHMoZWxlbWVudCwgb3B0aW9ucyk7XHJcbiAgICAgICAgY2hhcnQucmVuZGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIF9pbml0TWl4ZWRXaWRnZXQxNiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwia3RfbWl4ZWRfd2lkZ2V0XzE2X2NoYXJ0XCIpO1xyXG4gICAgICAgIHZhciBoZWlnaHQgPSBwYXJzZUludChLVFV0aWwuY3NzKGVsZW1lbnQsICdoZWlnaHQnKSk7XHJcblxyXG4gICAgICAgIGlmICghZWxlbWVudCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgb3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgc2VyaWVzOiBbNjAsIDUwLCA3NSwgODBdLFxyXG4gICAgICAgICAgICBjaGFydDoge1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBoZWlnaHQsXHJcbiAgICAgICAgICAgICAgICB0eXBlOiAncmFkaWFsQmFyJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcGxvdE9wdGlvbnM6IHtcclxuICAgICAgICAgICAgICAgIHJhZGlhbEJhcjoge1xyXG4gICAgICAgICAgICAgICAgICAgIGhvbGxvdzoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemU6IFwiMzAlXCJcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGFMYWJlbHM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2hvd09uOiBcImFsd2F5c1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiNzAwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogS1RBcHAuZ2V0U2V0dGluZ3MoKVsnY29sb3JzJ11bJ2dyYXknXVsnZ3JheS03MDAnXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjE4cHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiNzAwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvZmZzZXRZOiAxMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3c6IHRydWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG90YWw6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3c6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ1RvdGFsJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0dGVyOiBmdW5jdGlvbiAodykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEJ5IGRlZmF1bHQgdGhpcyBmdW5jdGlvbiByZXR1cm5zIHRoZSBhdmVyYWdlIG9mIGFsbCBzZXJpZXMuIFRoZSBiZWxvdyBpcyBqdXN0IGFuIGV4YW1wbGUgdG8gc2hvdyB0aGUgdXNlIG9mIGN1c3RvbSBmb3JtYXR0ZXIgZnVuY3Rpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJzYwJSc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHRyYWNrOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IEtUQXBwLmdldFNldHRpbmdzKClbJ2NvbG9ycyddWydncmF5J11bJ2dyYXktMTAwJ10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoOiAnMTAwJSdcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNvbG9yczogW1xyXG4gICAgICAgICAgICAgICAgS1RBcHAuZ2V0U2V0dGluZ3MoKVsnY29sb3JzJ11bJ3RoZW1lJ11bJ2Jhc2UnXVsnaW5mbyddLFxyXG4gICAgICAgICAgICAgICAgS1RBcHAuZ2V0U2V0dGluZ3MoKVsnY29sb3JzJ11bJ3RoZW1lJ11bJ2Jhc2UnXVsnZGFuZ2VyJ10sXHJcbiAgICAgICAgICAgICAgICBLVEFwcC5nZXRTZXR0aW5ncygpWydjb2xvcnMnXVsndGhlbWUnXVsnYmFzZSddWydzdWNjZXNzJ10sXHJcbiAgICAgICAgICAgICAgICBLVEFwcC5nZXRTZXR0aW5ncygpWydjb2xvcnMnXVsndGhlbWUnXVsnYmFzZSddWydwcmltYXJ5J11cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgc3Ryb2tlOiB7XHJcbiAgICAgICAgICAgICAgICBsaW5lQ2FwOiBcInJvdW5kXCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGxhYmVsczogW1wiUHJvZ3Jlc3NcIl1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB2YXIgY2hhcnQgPSBuZXcgQXBleENoYXJ0cyhlbGVtZW50LCBvcHRpb25zKTtcclxuICAgICAgICBjaGFydC5yZW5kZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgX2luaXRNaXhlZFdpZGdldDE3ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJrdF9taXhlZF93aWRnZXRfMTdfY2hhcnRcIik7XHJcbiAgICAgICAgdmFyIGNvbG9yID0gS1RVdGlsLmhhc0F0dHIoZWxlbWVudCwgJ2RhdGEtY29sb3InKSA/IEtUVXRpbC5hdHRyKGVsZW1lbnQsICdkYXRhLWNvbG9yJykgOiAnd2FybmluZyc7XHJcbiAgICAgICAgdmFyIGhlaWdodCA9IHBhcnNlSW50KEtUVXRpbC5jc3MoZWxlbWVudCwgJ2hlaWdodCcpKTtcclxuXHJcbiAgICAgICAgaWYgKCFlbGVtZW50KSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBvcHRpb25zID0ge1xyXG4gICAgICAgICAgICBzZXJpZXM6IFt7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnTmV0IFByb2ZpdCcsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiBbMzAsIDI1LCA0NSwgMzAsIDU1LCA1NV1cclxuICAgICAgICAgICAgfV0sXHJcbiAgICAgICAgICAgIGNoYXJ0OiB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiAnYXJlYScsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGhlaWdodCxcclxuICAgICAgICAgICAgICAgIHRvb2xiYXI6IHtcclxuICAgICAgICAgICAgICAgICAgICBzaG93OiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHpvb206IHtcclxuICAgICAgICAgICAgICAgICAgICBlbmFibGVkOiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHNwYXJrbGluZToge1xyXG4gICAgICAgICAgICAgICAgICAgIGVuYWJsZWQ6IHRydWVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcGxvdE9wdGlvbnM6IHt9LFxyXG4gICAgICAgICAgICBsZWdlbmQ6IHtcclxuICAgICAgICAgICAgICAgIHNob3c6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGRhdGFMYWJlbHM6IHtcclxuICAgICAgICAgICAgICAgIGVuYWJsZWQ6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGZpbGw6IHtcclxuICAgICAgICAgICAgICAgIHR5cGU6ICdzb2xpZCcsXHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHN0cm9rZToge1xyXG4gICAgICAgICAgICAgICAgY3VydmU6ICdzbW9vdGgnLFxyXG4gICAgICAgICAgICAgICAgc2hvdzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAzLFxyXG4gICAgICAgICAgICAgICAgY29sb3JzOiBbS1RBcHAuZ2V0U2V0dGluZ3MoKVsnY29sb3JzJ11bJ3RoZW1lJ11bJ2Jhc2UnXVtjb2xvcl1dXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHhheGlzOiB7XHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yaWVzOiBbJ0ZlYicsICdNYXInLCAnQXByJywgJ01heScsICdKdW4nLCAnSnVsJ10sXHJcbiAgICAgICAgICAgICAgICBheGlzQm9yZGVyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hvdzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgYXhpc1RpY2tzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hvdzogZmFsc2VcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBsYWJlbHM6IHtcclxuICAgICAgICAgICAgICAgICAgICBzaG93OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcnM6IEtUQXBwLmdldFNldHRpbmdzKClbJ2NvbG9ycyddWydncmF5J11bJ2dyYXktNTAwJ10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMTJweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk6IEtUQXBwLmdldFNldHRpbmdzKClbJ2ZvbnQtZmFtaWx5J11cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgY3Jvc3NoYWlyczoge1xyXG4gICAgICAgICAgICAgICAgICAgIHNob3c6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnZnJvbnQnLFxyXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogS1RBcHAuZ2V0U2V0dGluZ3MoKVsnY29sb3JzJ11bJ2dyYXknXVsnZ3JheS0zMDAnXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhc2hBcnJheTogM1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB0b29sdGlwOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBmb3JtYXR0ZXI6IHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgICAgICAgICBvZmZzZXRZOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMTJweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk6IEtUQXBwLmdldFNldHRpbmdzKClbJ2ZvbnQtZmFtaWx5J11cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHlheGlzOiB7XHJcbiAgICAgICAgICAgICAgICBtaW46IDAsXHJcbiAgICAgICAgICAgICAgICBtYXg6IDYwLFxyXG4gICAgICAgICAgICAgICAgbGFiZWxzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hvdzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3JzOiBLVEFwcC5nZXRTZXR0aW5ncygpWydjb2xvcnMnXVsnZ3JheSddWydncmF5LTUwMCddLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogJzEycHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250RmFtaWx5OiBLVEFwcC5nZXRTZXR0aW5ncygpWydmb250LWZhbWlseSddXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzdGF0ZXM6IHtcclxuICAgICAgICAgICAgICAgIG5vcm1hbDoge1xyXG4gICAgICAgICAgICAgICAgICAgIGZpbHRlcjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnbm9uZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiAwXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGhvdmVyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdub25lJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IDBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgYWN0aXZlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxsb3dNdWx0aXBsZURhdGFQb2ludHNTZWxlY3Rpb246IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGZpbHRlcjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnbm9uZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiAwXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB0b29sdGlwOiB7XHJcbiAgICAgICAgICAgICAgICBzdHlsZToge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMTJweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgZm9udEZhbWlseTogS1RBcHAuZ2V0U2V0dGluZ3MoKVsnZm9udC1mYW1pbHknXVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHk6IHtcclxuICAgICAgICAgICAgICAgICAgICBmb3JtYXR0ZXI6IGZ1bmN0aW9uICh2YWwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiJFwiICsgdmFsICsgXCIgdGhvdXNhbmRzXCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNvbG9yczogW0tUQXBwLmdldFNldHRpbmdzKClbJ2NvbG9ycyddWyd0aGVtZSddWydsaWdodCddW2NvbG9yXV0sXHJcbiAgICAgICAgICAgIG1hcmtlcnM6IHtcclxuICAgICAgICAgICAgICAgIGNvbG9yczogW0tUQXBwLmdldFNldHRpbmdzKClbJ2NvbG9ycyddWyd0aGVtZSddWydsaWdodCddW2NvbG9yXV0sXHJcbiAgICAgICAgICAgICAgICBzdHJva2VDb2xvcjogW0tUQXBwLmdldFNldHRpbmdzKClbJ2NvbG9ycyddWyd0aGVtZSddWydiYXNlJ11bY29sb3JdXSxcclxuICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoOiAzXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB2YXIgY2hhcnQgPSBuZXcgQXBleENoYXJ0cyhlbGVtZW50LCBvcHRpb25zKTtcclxuICAgICAgICBjaGFydC5yZW5kZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgX2luaXRNaXhlZFdpZGdldDE4ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJrdF9taXhlZF93aWRnZXRfMThfY2hhcnRcIik7XHJcbiAgICAgICAgdmFyIGhlaWdodCA9IHBhcnNlSW50KEtUVXRpbC5jc3MoZWxlbWVudCwgJ2hlaWdodCcpKTtcclxuXHJcbiAgICAgICAgaWYgKCFlbGVtZW50KSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBvcHRpb25zID0ge1xyXG4gICAgICAgICAgICBzZXJpZXM6IFs3NF0sXHJcbiAgICAgICAgICAgIGNoYXJ0OiB7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGhlaWdodCxcclxuICAgICAgICAgICAgICAgIHR5cGU6ICdyYWRpYWxCYXInLFxyXG4gICAgICAgICAgICAgICAgb2Zmc2V0WTogMFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBwbG90T3B0aW9uczoge1xyXG4gICAgICAgICAgICAgICAgcmFkaWFsQmFyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhcnRBbmdsZTogLTkwLFxyXG4gICAgICAgICAgICAgICAgICAgIGVuZEFuZ2xlOiA5MCxcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaG9sbG93OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZTogXCI3MCVcIlxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YUxhYmVsczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaG93T246IFwiYWx3YXlzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3c6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIxM3B4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiBcIjcwMFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0WTogLTUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogS1RBcHAuZ2V0U2V0dGluZ3MoKVsnY29sb3JzJ11bJ2dyYXknXVsnZ3JheS01MDAnXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IEtUQXBwLmdldFNldHRpbmdzKClbJ2NvbG9ycyddWydncmF5J11bJ2dyYXktNzAwJ10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIzMHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiBcIjcwMFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0WTogLTQwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvdzogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB0cmFjazoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBLVEFwcC5nZXRTZXR0aW5ncygpWydjb2xvcnMnXVsndGhlbWUnXVsnbGlnaHQnXVsncHJpbWFyeSddLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aDogJzEwMCUnXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjb2xvcnM6IFtLVEFwcC5nZXRTZXR0aW5ncygpWydjb2xvcnMnXVsndGhlbWUnXVsnYmFzZSddWydwcmltYXJ5J11dLFxyXG4gICAgICAgICAgICBzdHJva2U6IHtcclxuICAgICAgICAgICAgICAgIGxpbmVDYXA6IFwicm91bmRcIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbGFiZWxzOiBbXCJQcm9ncmVzc1wiXVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHZhciBjaGFydCA9IG5ldyBBcGV4Q2hhcnRzKGVsZW1lbnQsIG9wdGlvbnMpO1xyXG4gICAgICAgIGNoYXJ0LnJlbmRlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFRpbGVzXHJcbiAgICB2YXIgX2luaXRUaWxlc1dpZGdldDEgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImt0X3RpbGVzX3dpZGdldF8xX2NoYXJ0XCIpO1xyXG4gICAgICAgIHZhciBjb2xvciA9IEtUVXRpbC5oYXNBdHRyKGVsZW1lbnQsICdkYXRhLWNvbG9yJykgPyBLVFV0aWwuYXR0cihlbGVtZW50LCAnZGF0YS1jb2xvcicpIDogJ3ByaW1hcnknO1xyXG4gICAgICAgIHZhciBoZWlnaHQgPSBwYXJzZUludChLVFV0aWwuY3NzKGVsZW1lbnQsICdoZWlnaHQnKSk7XHJcblxyXG4gICAgICAgIGlmICghZWxlbWVudCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgb3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgc2VyaWVzOiBbe1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ05ldCBQcm9maXQnLFxyXG4gICAgICAgICAgICAgICAgZGF0YTogWzIwLCAyMiwgMzAsIDI4LCAyNSwgMjYsIDMwLCAyOCwgMjIsIDI0LCAyNSwgMzVdXHJcbiAgICAgICAgICAgIH1dLFxyXG4gICAgICAgICAgICBjaGFydDoge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogJ2FyZWEnLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBoZWlnaHQsXHJcbiAgICAgICAgICAgICAgICB0b29sYmFyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hvdzogZmFsc2VcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB6b29tOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZW5hYmxlZDogZmFsc2VcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBzcGFya2xpbmU6IHtcclxuICAgICAgICAgICAgICAgICAgICBlbmFibGVkOiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHBsb3RPcHRpb25zOiB7fSxcclxuICAgICAgICAgICAgbGVnZW5kOiB7XHJcbiAgICAgICAgICAgICAgICBzaG93OiBmYWxzZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBkYXRhTGFiZWxzOiB7XHJcbiAgICAgICAgICAgICAgICBlbmFibGVkOiBmYWxzZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBmaWxsOiB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiAnZ3JhZGllbnQnLFxyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMSxcclxuICAgICAgICAgICAgICAgIGdyYWRpZW50OiB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwidmVydGljYWxcIixcclxuICAgICAgICAgICAgICAgICAgICBzaGFkZUludGVuc2l0eTogMC41NSxcclxuICAgICAgICAgICAgICAgICAgICBncmFkaWVudFRvQ29sb3JzOiB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgaW52ZXJzZUNvbG9yczogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5RnJvbTogMSxcclxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5VG86IDAuMixcclxuICAgICAgICAgICAgICAgICAgICBzdG9wczogWzI1LCA1MCwgMTAwXSxcclxuICAgICAgICAgICAgICAgICAgICBjb2xvclN0b3BzOiBbXVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzdHJva2U6IHtcclxuICAgICAgICAgICAgICAgIGN1cnZlOiAnc21vb3RoJyxcclxuICAgICAgICAgICAgICAgIHNob3c6IHRydWUsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMyxcclxuICAgICAgICAgICAgICAgIGNvbG9yczogW0tUQXBwLmdldFNldHRpbmdzKClbJ2NvbG9ycyddWyd0aGVtZSddWydiYXNlJ11bY29sb3JdXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB4YXhpczoge1xyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcmllczogWydKYW4nLCAnRmViJywgJ01hcicsICdBcHInLCAnTWF5JywgJ0p1bicsICdKdWwnLCAnQXVnJywgJ1NlcCcsICdPY3QnLCAnTm92JywgJ0RlYyddLFxyXG4gICAgICAgICAgICAgICAgYXhpc0JvcmRlcjoge1xyXG4gICAgICAgICAgICAgICAgICAgIHNob3c6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGF4aXNUaWNrczoge1xyXG4gICAgICAgICAgICAgICAgICAgIHNob3c6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgbGFiZWxzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hvdzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3JzOiBLVEFwcC5nZXRTZXR0aW5ncygpWydjb2xvcnMnXVsnZ3JheSddWydncmF5LTUwMCddLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogJzEycHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250RmFtaWx5OiBLVEFwcC5nZXRTZXR0aW5ncygpWydmb250LWZhbWlseSddXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGNyb3NzaGFpcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICBzaG93OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2Zyb250JyxcclxuICAgICAgICAgICAgICAgICAgICBzdHJva2U6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IEtUQXBwLmdldFNldHRpbmdzKClbJ2NvbG9ycyddWydncmF5J11bJ2dyYXktMzAwJ10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXNoQXJyYXk6IDNcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgdG9vbHRpcDoge1xyXG4gICAgICAgICAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybWF0dGVyOiB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgb2Zmc2V0WTogMCxcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogJzEycHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250RmFtaWx5OiBLVEFwcC5nZXRTZXR0aW5ncygpWydmb250LWZhbWlseSddXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB5YXhpczoge1xyXG4gICAgICAgICAgICAgICAgbWluOiAwLFxyXG4gICAgICAgICAgICAgICAgbWF4OiAzNyxcclxuICAgICAgICAgICAgICAgIGxhYmVsczoge1xyXG4gICAgICAgICAgICAgICAgICAgIHNob3c6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yczogS1RBcHAuZ2V0U2V0dGluZ3MoKVsnY29sb3JzJ11bJ2dyYXknXVsnZ3JheS01MDAnXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6ICcxMnB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udEZhbWlseTogS1RBcHAuZ2V0U2V0dGluZ3MoKVsnZm9udC1mYW1pbHknXVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc3RhdGVzOiB7XHJcbiAgICAgICAgICAgICAgICBub3JtYWw6IHtcclxuICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ25vbmUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogMFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBob3Zlcjoge1xyXG4gICAgICAgICAgICAgICAgICAgIGZpbHRlcjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnbm9uZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiAwXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGFjdGl2ZToge1xyXG4gICAgICAgICAgICAgICAgICAgIGFsbG93TXVsdGlwbGVEYXRhUG9pbnRzU2VsZWN0aW9uOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ25vbmUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogMFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdG9vbHRpcDoge1xyXG4gICAgICAgICAgICAgICAgc3R5bGU6IHtcclxuICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogJzEycHgnLFxyXG4gICAgICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk6IEtUQXBwLmdldFNldHRpbmdzKClbJ2ZvbnQtZmFtaWx5J11cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB5OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybWF0dGVyOiBmdW5jdGlvbiAodmFsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIiRcIiArIHZhbCArIFwiIHRob3VzYW5kc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjb2xvcnM6IFtLVEFwcC5nZXRTZXR0aW5ncygpWydjb2xvcnMnXVsndGhlbWUnXVsnbGlnaHQnXVtjb2xvcl1dLFxyXG4gICAgICAgICAgICBtYXJrZXJzOiB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcnM6IFtLVEFwcC5nZXRTZXR0aW5ncygpWydjb2xvcnMnXVsndGhlbWUnXVsnbGlnaHQnXVtjb2xvcl1dLFxyXG4gICAgICAgICAgICAgICAgc3Ryb2tlQ29sb3I6IFtLVEFwcC5nZXRTZXR0aW5ncygpWydjb2xvcnMnXVsndGhlbWUnXVsnYmFzZSddW2NvbG9yXV0sXHJcbiAgICAgICAgICAgICAgICBzdHJva2VXaWR0aDogM1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBwYWRkaW5nOiB7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDAsXHJcbiAgICAgICAgICAgICAgICBib3R0b206IDBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHZhciBjaGFydCA9IG5ldyBBcGV4Q2hhcnRzKGVsZW1lbnQsIG9wdGlvbnMpO1xyXG4gICAgICAgIGNoYXJ0LnJlbmRlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBfaW5pdFRpbGVzV2lkZ2V0MiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwia3RfdGlsZXNfd2lkZ2V0XzJfY2hhcnRcIik7XHJcbiAgICAgICAgdmFyIGhlaWdodCA9IHBhcnNlSW50KEtUVXRpbC5jc3MoZWxlbWVudCwgJ2hlaWdodCcpKTtcclxuXHJcbiAgICAgICAgaWYgKCFlbGVtZW50KSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBzdHJva2VDb2xvciA9IEtUVXRpbC5jb2xvckRhcmtlbihLVEFwcC5nZXRTZXR0aW5ncygpWydjb2xvcnMnXVsndGhlbWUnXVsnYmFzZSddWydkYW5nZXInXSwgMjApO1xyXG4gICAgICAgIHZhciBmaWxsQ29sb3IgPSBLVFV0aWwuY29sb3JEYXJrZW4oS1RBcHAuZ2V0U2V0dGluZ3MoKVsnY29sb3JzJ11bJ3RoZW1lJ11bJ2Jhc2UnXVsnZGFuZ2VyJ10sIDEwKTtcclxuXHJcbiAgICAgICAgdmFyIG9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgIHNlcmllczogW3tcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdOZXQgUHJvZml0JyxcclxuICAgICAgICAgICAgICAgIGRhdGE6IFsxMCwgMTAsIDIwLCAyMCwgMTIsIDEyXVxyXG4gICAgICAgICAgICB9XSxcclxuICAgICAgICAgICAgY2hhcnQ6IHtcclxuICAgICAgICAgICAgICAgIHR5cGU6ICdhcmVhJyxcclxuICAgICAgICAgICAgICAgIGhlaWdodDogaGVpZ2h0LFxyXG4gICAgICAgICAgICAgICAgem9vbToge1xyXG4gICAgICAgICAgICAgICAgICAgIGVuYWJsZWQ6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgc3BhcmtsaW5lOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IHtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAwXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGRhdGFMYWJlbHM6IHtcclxuICAgICAgICAgICAgICAgIGVuYWJsZWQ6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGZpbGw6IHtcclxuICAgICAgICAgICAgICAgIHR5cGU6ICdzb2xpZCcsXHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHN0cm9rZToge1xyXG4gICAgICAgICAgICAgICAgY3VydmU6ICdzbW9vdGgnLFxyXG4gICAgICAgICAgICAgICAgc2hvdzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAzLFxyXG4gICAgICAgICAgICAgICAgY29sb3JzOiBbc3Ryb2tlQ29sb3JdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHhheGlzOiB7XHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yaWVzOiBbJ0ZlYicsICdNYXInLCAnQXByJywgJ01heScsICdKdW4nLCAnSnVsJ10sXHJcbiAgICAgICAgICAgICAgICBheGlzQm9yZGVyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hvdzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgYXhpc1RpY2tzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hvdzogZmFsc2VcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBsYWJlbHM6IHtcclxuICAgICAgICAgICAgICAgICAgICBzaG93OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcnM6IEtUQXBwLmdldFNldHRpbmdzKClbJ2NvbG9ycyddWydncmF5J11bJ2dyYXktNTAwJ10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMTJweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk6IEtUQXBwLmdldFNldHRpbmdzKClbJ2ZvbnQtZmFtaWx5J11cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgY3Jvc3NoYWlyczoge1xyXG4gICAgICAgICAgICAgICAgICAgIHNob3c6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnZnJvbnQnLFxyXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogS1RBcHAuZ2V0U2V0dGluZ3MoKVsnY29sb3JzJ11bJ2dyYXknXVsnZ3JheS0zMDAnXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhc2hBcnJheTogM1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgeWF4aXM6IHtcclxuICAgICAgICAgICAgICAgIG1pbjogMCxcclxuICAgICAgICAgICAgICAgIG1heDogMjIsXHJcbiAgICAgICAgICAgICAgICBsYWJlbHM6IHtcclxuICAgICAgICAgICAgICAgICAgICBzaG93OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcnM6IEtUQXBwLmdldFNldHRpbmdzKClbJ2NvbG9ycyddWydncmF5J11bJ2dyYXktNTAwJ10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMTJweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk6IEtUQXBwLmdldFNldHRpbmdzKClbJ2ZvbnQtZmFtaWx5J11cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHN0YXRlczoge1xyXG4gICAgICAgICAgICAgICAgbm9ybWFsOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdub25lJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IDBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgaG92ZXI6IHtcclxuICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ25vbmUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogMFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBhY3RpdmU6IHtcclxuICAgICAgICAgICAgICAgICAgICBhbGxvd011bHRpcGxlRGF0YVBvaW50c1NlbGVjdGlvbjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdub25lJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IDBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHRvb2x0aXA6IHtcclxuICAgICAgICAgICAgICAgIHN0eWxlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6ICcxMnB4JyxcclxuICAgICAgICAgICAgICAgICAgICBmb250RmFtaWx5OiBLVEFwcC5nZXRTZXR0aW5ncygpWydmb250LWZhbWlseSddXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZml4ZWQ6IHtcclxuICAgICAgICAgICAgICAgICAgICBlbmFibGVkOiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHg6IHtcclxuICAgICAgICAgICAgICAgICAgICBzaG93OiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHk6IHtcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtYXR0ZXI6IGZ1bmN0aW9uICh2YWwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWwgKyBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjb2xvcnM6IFtmaWxsQ29sb3JdLFxyXG4gICAgICAgICAgICBtYXJrZXJzOiB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcnM6IFtLVEFwcC5nZXRTZXR0aW5ncygpWydjb2xvcnMnXVsndGhlbWUnXVsnbGlnaHQnXVsnZGFuZ2VyJ11dLFxyXG4gICAgICAgICAgICAgICAgc3Ryb2tlQ29sb3I6IFtzdHJva2VDb2xvcl0sXHJcbiAgICAgICAgICAgICAgICBzdHJva2VXaWR0aDogM1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdmFyIGNoYXJ0ID0gbmV3IEFwZXhDaGFydHMoZWxlbWVudCwgb3B0aW9ucyk7XHJcbiAgICAgICAgY2hhcnQucmVuZGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIF9pbml0VGlsZXNXaWRnZXQ1ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJrdF90aWxlc193aWRnZXRfNV9jaGFydFwiKTtcclxuICAgICAgICB2YXIgaGVpZ2h0ID0gcGFyc2VJbnQoS1RVdGlsLmNzcyhlbGVtZW50LCAnaGVpZ2h0JykpO1xyXG5cclxuICAgICAgICBpZiAoIWVsZW1lbnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIG9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgIHNlcmllczogW3tcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdOZXQgUHJvZml0JyxcclxuICAgICAgICAgICAgICAgIGRhdGE6IFsxMCwgMTUsIDE4LCAxNF1cclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ1JldmVudWUnLFxyXG4gICAgICAgICAgICAgICAgZGF0YTogWzgsIDEzLCAxNiwgMTJdXHJcbiAgICAgICAgICAgIH1dLFxyXG4gICAgICAgICAgICBjaGFydDoge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogJ2JhcicsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGhlaWdodCxcclxuICAgICAgICAgICAgICAgIHpvb206IHtcclxuICAgICAgICAgICAgICAgICAgICBlbmFibGVkOiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHNwYXJrbGluZToge1xyXG4gICAgICAgICAgICAgICAgICAgIGVuYWJsZWQ6IHRydWVcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogMjAsXHJcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDIwXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHBsb3RPcHRpb25zOiB7XHJcbiAgICAgICAgICAgICAgICBiYXI6IHtcclxuICAgICAgICAgICAgICAgICAgICBob3Jpem9udGFsOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBjb2x1bW5XaWR0aDogWycyNSUnXSxcclxuICAgICAgICAgICAgICAgICAgICBlbmRpbmdTaGFwZTogJ3JvdW5kZWQnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBkYXRhTGFiZWxzOiB7XHJcbiAgICAgICAgICAgICAgICBlbmFibGVkOiBmYWxzZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBmaWxsOiB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBbJ3NvbGlkJywgJ2dyYWRpZW50J10sXHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjI1XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHhheGlzOiB7XHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yaWVzOiBbJ0ZlYicsICdNYXInLCAnQXByJywgJ01heSddXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHlheGlzOiB7XHJcbiAgICAgICAgICAgICAgICBtaW46IDAsXHJcbiAgICAgICAgICAgICAgICBtYXg6IDIwXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHN0YXRlczoge1xyXG4gICAgICAgICAgICAgICAgbm9ybWFsOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdub25lJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IDBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgaG92ZXI6IHtcclxuICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ25vbmUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogMFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBhY3RpdmU6IHtcclxuICAgICAgICAgICAgICAgICAgICBhbGxvd011bHRpcGxlRGF0YVBvaW50c1NlbGVjdGlvbjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdub25lJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IDBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHRvb2x0aXA6IHtcclxuICAgICAgICAgICAgICAgIHN0eWxlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6ICcxMnB4JyxcclxuICAgICAgICAgICAgICAgICAgICBmb250RmFtaWx5OiBLVEFwcC5nZXRTZXR0aW5ncygpWydmb250LWZhbWlseSddXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZml4ZWQ6IHtcclxuICAgICAgICAgICAgICAgICAgICBlbmFibGVkOiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHg6IHtcclxuICAgICAgICAgICAgICAgICAgICBzaG93OiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHk6IHtcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtYXR0ZXI6IGZ1bmN0aW9uICh2YWwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWwgKyBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIG1hcmtlcjoge1xyXG4gICAgICAgICAgICAgICAgICAgIHNob3c6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNvbG9yczogWycjZmZmZmZmJywgJyNmZmZmZmYnXVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHZhciBjaGFydCA9IG5ldyBBcGV4Q2hhcnRzKGVsZW1lbnQsIG9wdGlvbnMpO1xyXG4gICAgICAgIGNoYXJ0LnJlbmRlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBfaW5pdFRpbGVzV2lkZ2V0OCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwia3RfdGlsZXNfd2lkZ2V0XzhfY2hhcnRcIik7XHJcbiAgICAgICAgdmFyIGhlaWdodCA9IHBhcnNlSW50KEtUVXRpbC5jc3MoZWxlbWVudCwgJ2hlaWdodCcpKTtcclxuICAgICAgICB2YXIgY29sb3IgPSBLVFV0aWwuaGFzQXR0cihlbGVtZW50LCAnZGF0YS1jb2xvcicpID8gS1RVdGlsLmF0dHIoZWxlbWVudCwgJ2RhdGEtY29sb3InKSA6ICdkYW5nZXInO1xyXG5cclxuICAgICAgICBpZiAoIWVsZW1lbnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIG9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgIHNlcmllczogW3tcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdOZXQgUHJvZml0JyxcclxuICAgICAgICAgICAgICAgIGRhdGE6IFsyMCwgMjAsIDMwLCAxNSwgNDAsIDMwXVxyXG4gICAgICAgICAgICB9XSxcclxuICAgICAgICAgICAgY2hhcnQ6IHtcclxuICAgICAgICAgICAgICAgIHR5cGU6ICdhcmVhJyxcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTUwLFxyXG4gICAgICAgICAgICAgICAgdG9vbGJhcjoge1xyXG4gICAgICAgICAgICAgICAgICAgIHNob3c6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgem9vbToge1xyXG4gICAgICAgICAgICAgICAgICAgIGVuYWJsZWQ6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgc3BhcmtsaW5lOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBwbG90T3B0aW9uczoge30sXHJcbiAgICAgICAgICAgIGxlZ2VuZDoge1xyXG4gICAgICAgICAgICAgICAgc2hvdzogZmFsc2VcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZGF0YUxhYmVsczoge1xyXG4gICAgICAgICAgICAgICAgZW5hYmxlZDogZmFsc2VcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZmlsbDoge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogJ3NvbGlkJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzdHJva2U6IHtcclxuICAgICAgICAgICAgICAgIGN1cnZlOiAnc21vb3RoJyxcclxuICAgICAgICAgICAgICAgIHNob3c6IHRydWUsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMyxcclxuICAgICAgICAgICAgICAgIGNvbG9yczogW0tUQXBwLmdldFNldHRpbmdzKClbJ2NvbG9ycyddWyd0aGVtZSddWydiYXNlJ11bY29sb3JdXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB4YXhpczoge1xyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcmllczogWydKYW4nLCAnRmViJywgJ01hcicsICdBcHInLCAnTWF5JywgJ0p1biddLFxyXG4gICAgICAgICAgICAgICAgYXhpc0JvcmRlcjoge1xyXG4gICAgICAgICAgICAgICAgICAgIHNob3c6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGF4aXNUaWNrczoge1xyXG4gICAgICAgICAgICAgICAgICAgIHNob3c6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgbGFiZWxzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hvdzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3JzOiBLVEFwcC5nZXRTZXR0aW5ncygpWydjb2xvcnMnXVsnZ3JheSddWydncmF5LTUwMCddLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogJzEycHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250RmFtaWx5OiBLVEFwcC5nZXRTZXR0aW5ncygpWydmb250LWZhbWlseSddXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGNyb3NzaGFpcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICBzaG93OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2Zyb250JyxcclxuICAgICAgICAgICAgICAgICAgICBzdHJva2U6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IEtUQXBwLmdldFNldHRpbmdzKClbJ2NvbG9ycyddWydncmF5J11bJ2dyYXktMzAwJ10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXNoQXJyYXk6IDNcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgdG9vbHRpcDoge1xyXG4gICAgICAgICAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybWF0dGVyOiB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgb2Zmc2V0WTogMCxcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogJzEycHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250RmFtaWx5OiBLVEFwcC5nZXRTZXR0aW5ncygpWydmb250LWZhbWlseSddXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB5YXhpczoge1xyXG4gICAgICAgICAgICAgICAgbWluOiAwLFxyXG4gICAgICAgICAgICAgICAgbWF4OiA0NSxcclxuICAgICAgICAgICAgICAgIGxhYmVsczoge1xyXG4gICAgICAgICAgICAgICAgICAgIHNob3c6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yczogS1RBcHAuZ2V0U2V0dGluZ3MoKVsnY29sb3JzJ11bJ2dyYXknXVsnZ3JheS01MDAnXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6ICcxMnB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udEZhbWlseTogS1RBcHAuZ2V0U2V0dGluZ3MoKVsnZm9udC1mYW1pbHknXVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc3RhdGVzOiB7XHJcbiAgICAgICAgICAgICAgICBub3JtYWw6IHtcclxuICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ25vbmUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogMFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBob3Zlcjoge1xyXG4gICAgICAgICAgICAgICAgICAgIGZpbHRlcjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnbm9uZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiAwXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGFjdGl2ZToge1xyXG4gICAgICAgICAgICAgICAgICAgIGFsbG93TXVsdGlwbGVEYXRhUG9pbnRzU2VsZWN0aW9uOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ25vbmUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogMFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdG9vbHRpcDoge1xyXG4gICAgICAgICAgICAgICAgc3R5bGU6IHtcclxuICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogJzEycHgnLFxyXG4gICAgICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk6IEtUQXBwLmdldFNldHRpbmdzKClbJ2ZvbnQtZmFtaWx5J11cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB5OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybWF0dGVyOiBmdW5jdGlvbiAodmFsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIiRcIiArIHZhbCArIFwiIHRob3VzYW5kc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjb2xvcnM6IFtLVEFwcC5nZXRTZXR0aW5ncygpWydjb2xvcnMnXVsndGhlbWUnXVsnbGlnaHQnXVtjb2xvcl1dLFxyXG4gICAgICAgICAgICBtYXJrZXJzOiB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcnM6IFtLVEFwcC5nZXRTZXR0aW5ncygpWydjb2xvcnMnXVsndGhlbWUnXVsnbGlnaHQnXVtjb2xvcl1dLFxyXG4gICAgICAgICAgICAgICAgc3Ryb2tlQ29sb3I6IFtLVEFwcC5nZXRTZXR0aW5ncygpWydjb2xvcnMnXVsndGhlbWUnXVsnYmFzZSddW2NvbG9yXV0sXHJcbiAgICAgICAgICAgICAgICBzdHJva2VXaWR0aDogM1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBwYWRkaW5nOiB7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDAsXHJcbiAgICAgICAgICAgICAgICBib3R0b206IDBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHZhciBjaGFydCA9IG5ldyBBcGV4Q2hhcnRzKGVsZW1lbnQsIG9wdGlvbnMpO1xyXG4gICAgICAgIGNoYXJ0LnJlbmRlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBfaW5pdFRpbGVzV2lkZ2V0MTcgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImt0X3RpbGVzX3dpZGdldF8xN19jaGFydFwiKTtcclxuXHJcbiAgICAgICAgaWYgKCFlbGVtZW50KSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBvcHRpb25zID0ge1xyXG4gICAgICAgICAgICBzZXJpZXM6IFt7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnTmV0IFByb2ZpdCcsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiBbMTAsIDIwLCAyMCwgOF1cclxuICAgICAgICAgICAgfV0sXHJcbiAgICAgICAgICAgIGNoYXJ0OiB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiAnYXJlYScsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDE1MCxcclxuICAgICAgICAgICAgICAgIHpvb206IHtcclxuICAgICAgICAgICAgICAgICAgICBlbmFibGVkOiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHNwYXJrbGluZToge1xyXG4gICAgICAgICAgICAgICAgICAgIGVuYWJsZWQ6IHRydWVcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIGJvdHRvbTogMFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBkYXRhTGFiZWxzOiB7XHJcbiAgICAgICAgICAgICAgICBlbmFibGVkOiBmYWxzZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBmaWxsOiB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiAnc29saWQnLFxyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzdHJva2U6IHtcclxuICAgICAgICAgICAgICAgIGN1cnZlOiAnc21vb3RoJyxcclxuICAgICAgICAgICAgICAgIHNob3c6IHRydWUsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMyxcclxuICAgICAgICAgICAgICAgIGNvbG9yczogW0tUQXBwLmdldFNldHRpbmdzKClbJ2NvbG9ycyddWyd0aGVtZSddWydiYXNlJ11bJ3N1Y2Nlc3MnXV1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgeGF4aXM6IHtcclxuICAgICAgICAgICAgICAgIGNhdGVnb3JpZXM6IFsnRmViJywgJ01hcicsICdBcHInLCAnTWF5J10sXHJcbiAgICAgICAgICAgICAgICBheGlzQm9yZGVyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hvdzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgYXhpc1RpY2tzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hvdzogZmFsc2VcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBsYWJlbHM6IHtcclxuICAgICAgICAgICAgICAgICAgICBzaG93OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcnM6IEtUQXBwLmdldFNldHRpbmdzKClbJ2NvbG9ycyddWydncmF5J11bJ2dyYXktNTAwJ10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMTJweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk6IEtUQXBwLmdldFNldHRpbmdzKClbJ2ZvbnQtZmFtaWx5J11cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgY3Jvc3NoYWlyczoge1xyXG4gICAgICAgICAgICAgICAgICAgIHNob3c6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnZnJvbnQnLFxyXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogS1RBcHAuZ2V0U2V0dGluZ3MoKVsnY29sb3JzJ11bJ2dyYXknXVsnZ3JheS0zMDAnXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhc2hBcnJheTogM1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgeWF4aXM6IHtcclxuICAgICAgICAgICAgICAgIG1pbjogMCxcclxuICAgICAgICAgICAgICAgIG1heDogMjIsXHJcbiAgICAgICAgICAgICAgICBsYWJlbHM6IHtcclxuICAgICAgICAgICAgICAgICAgICBzaG93OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcnM6IEtUQXBwLmdldFNldHRpbmdzKClbJ2NvbG9ycyddWydncmF5J11bJ2dyYXktNTAwJ10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMTJweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk6IEtUQXBwLmdldFNldHRpbmdzKClbJ2ZvbnQtZmFtaWx5J11cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHN0YXRlczoge1xyXG4gICAgICAgICAgICAgICAgbm9ybWFsOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdub25lJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IDBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgaG92ZXI6IHtcclxuICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ25vbmUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogMFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBhY3RpdmU6IHtcclxuICAgICAgICAgICAgICAgICAgICBhbGxvd011bHRpcGxlRGF0YVBvaW50c1NlbGVjdGlvbjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdub25lJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IDBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHRvb2x0aXA6IHtcclxuICAgICAgICAgICAgICAgIHN0eWxlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6ICcxMnB4JyxcclxuICAgICAgICAgICAgICAgICAgICBmb250RmFtaWx5OiBLVEFwcC5nZXRTZXR0aW5ncygpWydmb250LWZhbWlseSddXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZml4ZWQ6IHtcclxuICAgICAgICAgICAgICAgICAgICBlbmFibGVkOiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHg6IHtcclxuICAgICAgICAgICAgICAgICAgICBzaG93OiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHk6IHtcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtYXR0ZXI6IGZ1bmN0aW9uICh2YWwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWwgKyBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjb2xvcnM6IFtLVEFwcC5nZXRTZXR0aW5ncygpWydjb2xvcnMnXVsndGhlbWUnXVsnbGlnaHQnXVsnc3VjY2VzcyddXSxcclxuICAgICAgICAgICAgbWFya2Vyczoge1xyXG4gICAgICAgICAgICAgICAgY29sb3JzOiBbS1RBcHAuZ2V0U2V0dGluZ3MoKVsnY29sb3JzJ11bJ3RoZW1lJ11bJ2xpZ2h0J11bJ3N1Y2Nlc3MnXV0sXHJcbiAgICAgICAgICAgICAgICBzdHJva2VDb2xvcjogW0tUQXBwLmdldFNldHRpbmdzKClbJ2NvbG9ycyddWyd0aGVtZSddWydiYXNlJ11bJ3N1Y2Nlc3MnXV0sXHJcbiAgICAgICAgICAgICAgICBzdHJva2VXaWR0aDogM1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdmFyIGNoYXJ0ID0gbmV3IEFwZXhDaGFydHMoZWxlbWVudCwgb3B0aW9ucyk7XHJcbiAgICAgICAgY2hhcnQucmVuZGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIF9pbml0VGlsZXNXaWRnZXQyMCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwia3RfdGlsZXNfd2lkZ2V0XzIwX2NoYXJ0XCIpO1xyXG5cclxuICAgICAgICBpZiAoIWVsZW1lbnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIG9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgIHNlcmllczogWzc0XSxcclxuICAgICAgICAgICAgY2hhcnQ6IHtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMjUwLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogJ3JhZGlhbEJhcicsXHJcbiAgICAgICAgICAgICAgICBvZmZzZXRZOiAwXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHBsb3RPcHRpb25zOiB7XHJcbiAgICAgICAgICAgICAgICByYWRpYWxCYXI6IHtcclxuICAgICAgICAgICAgICAgICAgICBzdGFydEFuZ2xlOiAtOTAsXHJcbiAgICAgICAgICAgICAgICAgICAgZW5kQW5nbGU6IDkwLFxyXG5cclxuICAgICAgICAgICAgICAgICAgICBob2xsb3c6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplOiBcIjcwJVwiXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhTGFiZWxzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3dPbjogXCJhbHdheXNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvdzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjEzcHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiNDAwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvZmZzZXRZOiAtNSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBLVEFwcC5nZXRTZXR0aW5ncygpWydjb2xvcnMnXVsnZ3JheSddWydncmF5LTMwMCddXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogS1RBcHAuZ2V0U2V0dGluZ3MoKVsnY29sb3JzJ11bJ3RoZW1lJ11bJ2ludmVyc2UnXVsncHJpbWFyeSddLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMjJweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogXCJib2xkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvZmZzZXRZOiAtNDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93OiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHRyYWNrOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IEtUVXRpbC5jb2xvckxpZ2h0ZW4oS1RBcHAuZ2V0U2V0dGluZ3MoKVsnY29sb3JzJ11bJ3RoZW1lJ11bJ2Jhc2UnXVsncHJpbWFyeSddLCA3KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg6ICcxMDAlJ1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY29sb3JzOiBbS1RBcHAuZ2V0U2V0dGluZ3MoKVsnY29sb3JzJ11bJ3RoZW1lJ11bJ2ludmVyc2UnXVsncHJpbWFyeSddXSxcclxuICAgICAgICAgICAgc3Ryb2tlOiB7XHJcbiAgICAgICAgICAgICAgICBsaW5lQ2FwOiBcInJvdW5kXCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGxhYmVsczogW1wiUHJvZ3Jlc3NcIl1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB2YXIgY2hhcnQgPSBuZXcgQXBleENoYXJ0cyhlbGVtZW50LCBvcHRpb25zKTtcclxuICAgICAgICBjaGFydC5yZW5kZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgX2luaXRNaXhlZFdpZGdldDIxID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJrdF90aWxlc193aWRnZXRfMjFfY2hhcnRcIik7XHJcbiAgICAgICAgdmFyIGhlaWdodCA9IHBhcnNlSW50KEtUVXRpbC5jc3MoZWxlbWVudCwgJ2hlaWdodCcpKTtcclxuICAgICAgICB2YXIgY29sb3IgPSBLVFV0aWwuaGFzQXR0cihlbGVtZW50LCAnZGF0YS1jb2xvcicpID8gS1RVdGlsLmF0dHIoZWxlbWVudCwgJ2RhdGEtY29sb3InKSA6ICdpbmZvJztcclxuXHJcbiAgICAgICAgaWYgKCFlbGVtZW50KSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBvcHRpb25zID0ge1xyXG4gICAgICAgICAgICBzZXJpZXM6IFt7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnTmV0IFByb2ZpdCcsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiBbMjAsIDIwLCAzMCwgMTUsIDMwLCAzMF1cclxuICAgICAgICAgICAgfV0sXHJcbiAgICAgICAgICAgIGNoYXJ0OiB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiAnYXJlYScsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGhlaWdodCxcclxuICAgICAgICAgICAgICAgIHRvb2xiYXI6IHtcclxuICAgICAgICAgICAgICAgICAgICBzaG93OiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHpvb206IHtcclxuICAgICAgICAgICAgICAgICAgICBlbmFibGVkOiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHNwYXJrbGluZToge1xyXG4gICAgICAgICAgICAgICAgICAgIGVuYWJsZWQ6IHRydWVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcGxvdE9wdGlvbnM6IHt9LFxyXG4gICAgICAgICAgICBsZWdlbmQ6IHtcclxuICAgICAgICAgICAgICAgIHNob3c6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGRhdGFMYWJlbHM6IHtcclxuICAgICAgICAgICAgICAgIGVuYWJsZWQ6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGZpbGw6IHtcclxuICAgICAgICAgICAgICAgIHR5cGU6ICdzb2xpZCcsXHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHN0cm9rZToge1xyXG4gICAgICAgICAgICAgICAgY3VydmU6ICdzbW9vdGgnLFxyXG4gICAgICAgICAgICAgICAgc2hvdzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAzLFxyXG4gICAgICAgICAgICAgICAgY29sb3JzOiBbS1RBcHAuZ2V0U2V0dGluZ3MoKVsnY29sb3JzJ11bJ3RoZW1lJ11bJ2Jhc2UnXVtjb2xvcl1dXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHhheGlzOiB7XHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yaWVzOiBbJ0ZlYicsICdNYXInLCAnQXByJywgJ01heScsICdKdW4nLCAnSnVsJ10sXHJcbiAgICAgICAgICAgICAgICBheGlzQm9yZGVyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hvdzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgYXhpc1RpY2tzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hvdzogZmFsc2VcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBsYWJlbHM6IHtcclxuICAgICAgICAgICAgICAgICAgICBzaG93OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcnM6IEtUQXBwLmdldFNldHRpbmdzKClbJ2NvbG9ycyddWydncmF5J11bJ2dyYXktNTAwJ10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMTJweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk6IEtUQXBwLmdldFNldHRpbmdzKClbJ2ZvbnQtZmFtaWx5J11cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgY3Jvc3NoYWlyczoge1xyXG4gICAgICAgICAgICAgICAgICAgIHNob3c6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnZnJvbnQnLFxyXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogS1RBcHAuZ2V0U2V0dGluZ3MoKVsnY29sb3JzJ11bJ2dyYXknXVsnZ3JheS0zMDAnXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhc2hBcnJheTogM1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB0b29sdGlwOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBmb3JtYXR0ZXI6IHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgICAgICAgICBvZmZzZXRZOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMTJweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk6IEtUQXBwLmdldFNldHRpbmdzKClbJ2ZvbnQtZmFtaWx5J11cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHlheGlzOiB7XHJcbiAgICAgICAgICAgICAgICBtaW46IDAsXHJcbiAgICAgICAgICAgICAgICBtYXg6IDMyLFxyXG4gICAgICAgICAgICAgICAgbGFiZWxzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hvdzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3JzOiBLVEFwcC5nZXRTZXR0aW5ncygpWydjb2xvcnMnXVsnZ3JheSddWydncmF5LTUwMCddLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogJzEycHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250RmFtaWx5OiBLVEFwcC5nZXRTZXR0aW5ncygpWydmb250LWZhbWlseSddXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzdGF0ZXM6IHtcclxuICAgICAgICAgICAgICAgIG5vcm1hbDoge1xyXG4gICAgICAgICAgICAgICAgICAgIGZpbHRlcjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnbm9uZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiAwXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGhvdmVyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdub25lJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IDBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgYWN0aXZlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxsb3dNdWx0aXBsZURhdGFQb2ludHNTZWxlY3Rpb246IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGZpbHRlcjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnbm9uZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiAwXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB0b29sdGlwOiB7XHJcbiAgICAgICAgICAgICAgICBzdHlsZToge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMTJweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgZm9udEZhbWlseTogS1RBcHAuZ2V0U2V0dGluZ3MoKVsnZm9udC1mYW1pbHknXVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHk6IHtcclxuICAgICAgICAgICAgICAgICAgICBmb3JtYXR0ZXI6IGZ1bmN0aW9uICh2YWwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiJFwiICsgdmFsICsgXCIgdGhvdXNhbmRzXCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNvbG9yczogW0tUQXBwLmdldFNldHRpbmdzKClbJ2NvbG9ycyddWyd0aGVtZSddWydsaWdodCddW2NvbG9yXV0sXHJcbiAgICAgICAgICAgIG1hcmtlcnM6IHtcclxuICAgICAgICAgICAgICAgIGNvbG9yczogW0tUQXBwLmdldFNldHRpbmdzKClbJ2NvbG9ycyddWyd0aGVtZSddWydsaWdodCddW2NvbG9yXV0sXHJcbiAgICAgICAgICAgICAgICBzdHJva2VDb2xvcjogW0tUQXBwLmdldFNldHRpbmdzKClbJ2NvbG9ycyddWyd0aGVtZSddWydiYXNlJ11bY29sb3JdXSxcclxuICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoOiAzXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB2YXIgY2hhcnQgPSBuZXcgQXBleENoYXJ0cyhlbGVtZW50LCBvcHRpb25zKTtcclxuICAgICAgICBjaGFydC5yZW5kZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgX2luaXRNaXhlZFdpZGdldDIzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJrdF90aWxlc193aWRnZXRfMjNfY2hhcnRcIik7XHJcbiAgICAgICAgdmFyIGhlaWdodCA9IHBhcnNlSW50KEtUVXRpbC5jc3MoZWxlbWVudCwgJ2hlaWdodCcpKTtcclxuICAgICAgICB2YXIgY29sb3IgPSBLVFV0aWwuaGFzQXR0cihlbGVtZW50LCAnZGF0YS1jb2xvcicpID8gS1RVdGlsLmF0dHIoZWxlbWVudCwgJ2RhdGEtY29sb3InKSA6ICdwcmltYXJ5JztcclxuXHJcbiAgICAgICAgaWYgKCFlbGVtZW50KSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBvcHRpb25zID0ge1xyXG4gICAgICAgICAgICBzZXJpZXM6IFt7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnTmV0IFByb2ZpdCcsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiBbMTUsIDI1LCAxNSwgNDAsIDIwLCA1MF1cclxuICAgICAgICAgICAgfV0sXHJcbiAgICAgICAgICAgIGNoYXJ0OiB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiAnYXJlYScsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEyNSxcclxuICAgICAgICAgICAgICAgIHRvb2xiYXI6IHtcclxuICAgICAgICAgICAgICAgICAgICBzaG93OiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHpvb206IHtcclxuICAgICAgICAgICAgICAgICAgICBlbmFibGVkOiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHNwYXJrbGluZToge1xyXG4gICAgICAgICAgICAgICAgICAgIGVuYWJsZWQ6IHRydWVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcGxvdE9wdGlvbnM6IHt9LFxyXG4gICAgICAgICAgICBsZWdlbmQ6IHtcclxuICAgICAgICAgICAgICAgIHNob3c6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGRhdGFMYWJlbHM6IHtcclxuICAgICAgICAgICAgICAgIGVuYWJsZWQ6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGZpbGw6IHtcclxuICAgICAgICAgICAgICAgIHR5cGU6ICdzb2xpZCcsXHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHN0cm9rZToge1xyXG4gICAgICAgICAgICAgICAgY3VydmU6ICdzbW9vdGgnLFxyXG4gICAgICAgICAgICAgICAgc2hvdzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAzLFxyXG4gICAgICAgICAgICAgICAgY29sb3JzOiBbS1RBcHAuZ2V0U2V0dGluZ3MoKVsnY29sb3JzJ11bJ3RoZW1lJ11bJ2Jhc2UnXVtjb2xvcl1dXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHhheGlzOiB7XHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yaWVzOiBbJ0phbiwgMjAyMCcsICdGZWIsIDIwMjAnLCAnTWFyLCAyMDIwJywgJ0FwciwgMjAyMCcsICdNYXksIDIwMjAnLCAnSnVuLCAyMDIwJ10sXHJcbiAgICAgICAgICAgICAgICBheGlzQm9yZGVyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hvdzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgYXhpc1RpY2tzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hvdzogZmFsc2VcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBsYWJlbHM6IHtcclxuICAgICAgICAgICAgICAgICAgICBzaG93OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcnM6IEtUQXBwLmdldFNldHRpbmdzKClbJ2NvbG9ycyddWydncmF5J11bJ2dyYXktNTAwJ10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMTJweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk6IEtUQXBwLmdldFNldHRpbmdzKClbJ2ZvbnQtZmFtaWx5J11cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgY3Jvc3NoYWlyczoge1xyXG4gICAgICAgICAgICAgICAgICAgIHNob3c6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnZnJvbnQnLFxyXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogS1RBcHAuZ2V0U2V0dGluZ3MoKVsnY29sb3JzJ11bJ2dyYXknXVsnZ3JheS0zMDAnXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhc2hBcnJheTogM1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB0b29sdGlwOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBmb3JtYXR0ZXI6IHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgICAgICAgICBvZmZzZXRZOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMTJweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk6IEtUQXBwLmdldFNldHRpbmdzKClbJ2ZvbnQtZmFtaWx5J11cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHlheGlzOiB7XHJcbiAgICAgICAgICAgICAgICBtaW46IDAsXHJcbiAgICAgICAgICAgICAgICBtYXg6IDU1LFxyXG4gICAgICAgICAgICAgICAgbGFiZWxzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hvdzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3JzOiBLVEFwcC5nZXRTZXR0aW5ncygpWydjb2xvcnMnXVsnZ3JheSddWydncmF5LTUwMCddLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogJzEycHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250RmFtaWx5OiBLVEFwcC5nZXRTZXR0aW5ncygpWydmb250LWZhbWlseSddXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzdGF0ZXM6IHtcclxuICAgICAgICAgICAgICAgIG5vcm1hbDoge1xyXG4gICAgICAgICAgICAgICAgICAgIGZpbHRlcjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnbm9uZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiAwXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGhvdmVyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdub25lJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IDBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgYWN0aXZlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxsb3dNdWx0aXBsZURhdGFQb2ludHNTZWxlY3Rpb246IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGZpbHRlcjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnbm9uZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiAwXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB0b29sdGlwOiB7XHJcbiAgICAgICAgICAgICAgICBzdHlsZToge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMTJweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgZm9udEZhbWlseTogS1RBcHAuZ2V0U2V0dGluZ3MoKVsnZm9udC1mYW1pbHknXVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHk6IHtcclxuICAgICAgICAgICAgICAgICAgICBmb3JtYXR0ZXI6IGZ1bmN0aW9uICh2YWwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiJFwiICsgdmFsICsgXCIgdGhvdXNhbmRzXCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNvbG9yczogW0tUQXBwLmdldFNldHRpbmdzKClbJ2NvbG9ycyddWyd0aGVtZSddWydsaWdodCddW2NvbG9yXV0sXHJcbiAgICAgICAgICAgIG1hcmtlcnM6IHtcclxuICAgICAgICAgICAgICAgIGNvbG9yczogW0tUQXBwLmdldFNldHRpbmdzKClbJ2NvbG9ycyddWyd0aGVtZSddWydsaWdodCddW2NvbG9yXV0sXHJcbiAgICAgICAgICAgICAgICBzdHJva2VDb2xvcjogW0tUQXBwLmdldFNldHRpbmdzKClbJ2NvbG9ycyddWyd0aGVtZSddWydiYXNlJ11bY29sb3JdXSxcclxuICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoOiAzXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB2YXIgY2hhcnQgPSBuZXcgQXBleENoYXJ0cyhlbGVtZW50LCBvcHRpb25zKTtcclxuICAgICAgICBjaGFydC5yZW5kZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBGb3Jtc1xyXG4gICAgdmFyIF9pbml0Rm9ybXNXaWRnZXQxID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdmFyIGlucHV0RWwgPSBLVFV0aWwuZ2V0QnlJZChcImt0X2Zvcm1zX3dpZGdldF8xX2lucHV0XCIpO1xyXG5cclxuICAgICAgICBpZiAoaW5wdXRFbCkge1xyXG4gICAgICAgICAgICBhdXRvc2l6ZShpbnB1dEVsKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIF9pbml0Rm9ybXNXaWRnZXQyID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdmFyIGZvcm1FbCA9IEtUVXRpbC5nZXRCeUlkKFwia3RfZm9ybXNfd2lkZ2V0XzJfZm9ybVwiKTtcclxuICAgICAgICB2YXIgZWRpdG9ySWQgPSAna3RfZm9ybXNfd2lkZ2V0XzJfZWRpdG9yJztcclxuXHJcbiAgICAgICAgLy8gaW5pdCBlZGl0b3JcclxuICAgICAgICB2YXIgb3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgbW9kdWxlczoge1xyXG4gICAgICAgICAgICAgICAgdG9vbGJhcjoge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lcjogXCIja3RfZm9ybXNfd2lkZ2V0XzJfZWRpdG9yX3Rvb2xiYXJcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcjogJ1R5cGUgbWVzc2FnZS4uLicsXHJcbiAgICAgICAgICAgIHRoZW1lOiAnc25vdydcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBpZiAoIWZvcm1FbCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBJbml0IGVkaXRvclxyXG4gICAgICAgIHZhciBlZGl0b3JPYmogPSBuZXcgUXVpbGwoJyMnICsgZWRpdG9ySWQsIG9wdGlvbnMpO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBfaW5pdEZvcm1zV2lkZ2V0MyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHZhciBpbnB1dEVsID0gS1RVdGlsLmdldEJ5SWQoXCJrdF9mb3Jtc193aWRnZXRfM19pbnB1dFwiKTtcclxuXHJcbiAgICAgICAgaWYgKGlucHV0RWwpIHtcclxuICAgICAgICAgICAgYXV0b3NpemUoaW5wdXRFbCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHZhciBfaW5pdEZvcm1zV2lkZ2V0NCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHZhciBpbnB1dEVsID0gS1RVdGlsLmdldEJ5SWQoXCJrdF9mb3Jtc193aWRnZXRfNF9pbnB1dFwiKTtcclxuXHJcbiAgICAgICAgaWYgKGlucHV0RWwpIHtcclxuICAgICAgICAgICAgYXV0b3NpemUoaW5wdXRFbCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHZhciBfaW5pdEZvcm1zV2lkZ2V0NSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHZhciBpbnB1dEVsID0gS1RVdGlsLmdldEJ5SWQoXCJrdF9mb3Jtc193aWRnZXRfNV9pbnB1dFwiKTtcclxuXHJcbiAgICAgICAgaWYgKGlucHV0RWwpIHtcclxuICAgICAgICAgICAgYXV0b3NpemUoaW5wdXRFbCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHZhciBfaW5pdEZvcm1zV2lkZ2V0NiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHZhciBpbnB1dEVsID0gS1RVdGlsLmdldEJ5SWQoXCJrdF9mb3Jtc193aWRnZXRfNl9pbnB1dFwiKTtcclxuXHJcbiAgICAgICAgaWYgKGlucHV0RWwpIHtcclxuICAgICAgICAgICAgYXV0b3NpemUoaW5wdXRFbCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHZhciBfaW5pdEZvcm1zV2lkZ2V0NyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHZhciBpbnB1dEVsID0gS1RVdGlsLmdldEJ5SWQoXCJrdF9mb3Jtc193aWRnZXRfN19pbnB1dFwiKTtcclxuXHJcbiAgICAgICAgaWYgKGlucHV0RWwpIHtcclxuICAgICAgICAgICAgYXV0b3NpemUoaW5wdXRFbCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHZhciBfaW5pdEZvcm1zV2lkZ2V0OCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHZhciBpbnB1dEVsID0gS1RVdGlsLmdldEJ5SWQoXCJrdF9mb3Jtc193aWRnZXRfOF9pbnB1dFwiKTtcclxuXHJcbiAgICAgICAgaWYgKGlucHV0RWwpIHtcclxuICAgICAgICAgICAgYXV0b3NpemUoaW5wdXRFbCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHZhciBfaW5pdEZvcm1zV2lkZ2V0OSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHZhciBpbnB1dEVsID0gS1RVdGlsLmdldEJ5SWQoXCJrdF9mb3Jtc193aWRnZXRfOV9pbnB1dFwiKTtcclxuXHJcbiAgICAgICAgaWYgKGlucHV0RWwpIHtcclxuICAgICAgICAgICAgYXV0b3NpemUoaW5wdXRFbCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHZhciBfaW5pdEZvcm1zV2lkZ2V0MTAgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICB2YXIgaW5wdXRFbCA9IEtUVXRpbC5nZXRCeUlkKFwia3RfZm9ybXNfd2lkZ2V0XzEwX2lucHV0XCIpO1xyXG5cclxuICAgICAgICBpZiAoaW5wdXRFbCkge1xyXG4gICAgICAgICAgICBhdXRvc2l6ZShpbnB1dEVsKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIF9pbml0Rm9ybXNXaWRnZXQxMSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHZhciBpbnB1dEVsID0gS1RVdGlsLmdldEJ5SWQoXCJrdF9mb3Jtc193aWRnZXRfMTFfaW5wdXRcIik7XHJcblxyXG4gICAgICAgIGlmIChpbnB1dEVsKSB7XHJcbiAgICAgICAgICAgIGF1dG9zaXplKGlucHV0RWwpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB2YXIgX2luaXRGb3Jtc1dpZGdldDEyID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdmFyIGlucHV0RWwgPSBLVFV0aWwuZ2V0QnlJZChcImt0X2Zvcm1zX3dpZGdldF8xMl9pbnB1dFwiKTtcclxuXHJcbiAgICAgICAgaWYgKGlucHV0RWwpIHtcclxuICAgICAgICAgICAgYXV0b3NpemUoaW5wdXRFbCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIEFkdmFuY2UgVGFibGVzXHJcbiAgICB2YXIgX2luaXRBZHZhbmNlZFRhYmxlR3JvdXBTZWxlY3Rpb24gPSBmdW5jdGlvbihlbGVtZW50KSB7XHJcbiAgICAgICAgdmFyIHRhYmxlID0gS1RVdGlsLmdldEJ5SWQoZWxlbWVudCk7XHJcblxyXG4gICAgICAgIGlmICghdGFibGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgS1RVdGlsLm9uKHRhYmxlLCAndGhlYWQgdGggLmNoZWNrYm94ID4gaW5wdXQnLCAnY2hhbmdlJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgdmFyIGNoZWNrYm94ZXMgPSBLVFV0aWwuZmluZEFsbCh0YWJsZSwgJ3Rib2R5IHRkIC5jaGVja2JveCA+IGlucHV0Jyk7XHJcblxyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gY2hlY2tib3hlcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xyXG4gICAgICAgICAgICAgICAgY2hlY2tib3hlc1tpXS5jaGVja2VkID0gdGhpcy5jaGVja2VkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIF9pbml0UHJpY2VTbGlkZXIgPSBmdW5jdGlvbiAoZWxlbWVudCkge1xyXG4gICAgICAgIC8vIGluaXQgc2xpZGVyXHJcbiAgICAgICAgdmFyIHNsaWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGVsZW1lbnQpO1xyXG4gICAgICAgIGlmICh0eXBlb2Ygc2xpZGVyID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIXNsaWRlcikge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBub1VpU2xpZGVyLmNyZWF0ZShzbGlkZXIsIHtcclxuICAgICAgICAgICAgc3RhcnQ6IFsyMCwgNjBdLFxyXG4gICAgICAgICAgICBjb25uZWN0OiB0cnVlLFxyXG4gICAgICAgICAgICByYW5nZToge1xyXG4gICAgICAgICAgICAgICAgJ21pbic6IDAsXHJcbiAgICAgICAgICAgICAgICAnbWF4JzogMTAwXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBFZHVjYXRpb24gU2hvdyBNb3JlIERlbW9cclxuICAgIHZhciBfaW5pdEVkdWNhdGlvblNob3dNb3JlQnRuID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdmFyIGVsID0gS1RVdGlsLmdldEJ5SWQoJ2t0X2FwcF9lZHVjYXRpb25fbW9yZV9mZWVkc19idG4nKTtcclxuXHJcbiAgICAgICAgaWYgKCFlbCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBLVFV0aWwuYWRkRXZlbnQoZWwsICdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgdmFyIGVsZW1lbnRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZWR1Y2F0aW9uLW1vcmUtZmVlZHMnKTtcclxuXHJcbiAgICAgICAgICAgIGlmICghZWxlbWVudHMgfHwgZWxlbWVudHMubGVuZ3RoIDw9IDApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgS1RVdGlsLmJ0bldhaXQoZWwsICdzcGlubmVyIHNwaW5uZXItcmlnaHQgc3Bpbm5lci13aGl0ZSBwci0xNScsICdQbGVhc2Ugd2FpdC4uLicsIHRydWUpO1xyXG5cclxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIEtUVXRpbC5idG5SZWxlYXNlKGVsKTtcclxuICAgICAgICAgICAgICAgIEtUVXRpbC5hZGRDbGFzcyhlbCwgJ2Qtbm9uZScpO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBpdGVtO1xyXG5cclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBlbGVtZW50cy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0gPSBlbGVtZW50c1swXTtcclxuICAgICAgICAgICAgICAgICAgICBLVFV0aWwucmVtb3ZlQ2xhc3MoZWxlbWVudHNbaV0sICdkLW5vbmUnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRleHRhcmVhID0gS1RVdGlsLmZpbmQoaXRlbSwgJ3RleHRhcmVhJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRleHRhcmVhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9zaXplKHRleHRhcmVhKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgS1RVdGlsLnNjcm9sbFRvKGl0ZW0pO1xyXG4gICAgICAgICAgICB9LCAxMDAwKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBQdWJsaWMgbWV0aG9kc1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBpbml0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIC8vIEdlbmVyYWwgQ29udHJvbHNcclxuICAgICAgICAgICAgX2luaXREYXRlcmFuZ2VwaWNrZXIoKTtcclxuXHJcbiAgICAgICAgICAgIC8vIFN0YXRzIFdpZGdldHNcclxuICAgICAgICAgICAgX2luaXRTdGF0c1dpZGdldDcoKTtcclxuICAgICAgICAgICAgX2luaXRTdGF0c1dpZGdldDgoKTtcclxuICAgICAgICAgICAgX2luaXRTdGF0c1dpZGdldDkoKTtcclxuICAgICAgICAgICAgX2luaXRTdGF0c1dpZGdldDEwKCk7XHJcbiAgICAgICAgICAgIF9pbml0U3RhdHNXaWRnZXQxMSgpO1xyXG4gICAgICAgICAgICBfaW5pdFN0YXRzV2lkZ2V0MTIoKTtcclxuXHJcbiAgICAgICAgICAgIC8vIENoYXJ0cyBXaWRnZXRzXHJcbiAgICAgICAgICAgIF9pbml0Q2hhcnRzV2lkZ2V0MSgpO1xyXG4gICAgICAgICAgICBfaW5pdENoYXJ0c1dpZGdldDIoKTtcclxuICAgICAgICAgICAgX2luaXRDaGFydHNXaWRnZXQzKCk7XHJcbiAgICAgICAgICAgIF9pbml0Q2hhcnRzV2lkZ2V0NCgpO1xyXG4gICAgICAgICAgICBfaW5pdENoYXJ0c1dpZGdldDUoKTtcclxuICAgICAgICAgICAgX2luaXRDaGFydHNXaWRnZXQ2KCk7XHJcbiAgICAgICAgICAgIF9pbml0Q2hhcnRzV2lkZ2V0NygpO1xyXG4gICAgICAgICAgICBfaW5pdENoYXJ0c1dpZGdldDgoKTtcclxuICAgICAgICAgICAgX2luaXRDaGFydHNXaWRnZXQ5KCk7XHJcblxyXG4gICAgICAgICAgICAvLyBNaXhlZCBXaWRnZXRzXHJcbiAgICAgICAgICAgIF9pbml0TWl4ZWRXaWRnZXQxKCk7XHJcbiAgICAgICAgICAgIF9pbml0TWl4ZWRXaWRnZXQyKCk7XHJcbiAgICAgICAgICAgIF9pbml0TWl4ZWRXaWRnZXQzKCk7XHJcbiAgICAgICAgICAgIF9pbml0TWl4ZWRXaWRnZXQ0KCk7XHJcbiAgICAgICAgICAgIF9pbml0TWl4ZWRXaWRnZXQ1KCk7XHJcbiAgICAgICAgICAgIF9pbml0TWl4ZWRXaWRnZXQ2KCk7XHJcbiAgICAgICAgICAgIF9pbml0TWl4ZWRXaWRnZXQxMygpO1xyXG4gICAgICAgICAgICBfaW5pdE1peGVkV2lkZ2V0MTQoKTtcclxuICAgICAgICAgICAgX2luaXRNaXhlZFdpZGdldDE1KCk7XHJcbiAgICAgICAgICAgIF9pbml0TWl4ZWRXaWRnZXQxNigpO1xyXG4gICAgICAgICAgICBfaW5pdE1peGVkV2lkZ2V0MTcoKTtcclxuICAgICAgICAgICAgX2luaXRNaXhlZFdpZGdldDE4KCk7XHJcblxyXG4gICAgICAgICAgICAvLyBUaWxlcyBXaWRnZXRzXHJcbiAgICAgICAgICAgIF9pbml0VGlsZXNXaWRnZXQxKCk7XHJcbiAgICAgICAgICAgIF9pbml0VGlsZXNXaWRnZXQyKCk7XHJcbiAgICAgICAgICAgIF9pbml0VGlsZXNXaWRnZXQ1KCk7XHJcbiAgICAgICAgICAgIF9pbml0VGlsZXNXaWRnZXQ4KCk7XHJcbiAgICAgICAgICAgIF9pbml0VGlsZXNXaWRnZXQxNygpO1xyXG4gICAgICAgICAgICBfaW5pdFRpbGVzV2lkZ2V0MjAoKTtcclxuICAgICAgICAgICAgX2luaXRNaXhlZFdpZGdldDIxKCk7XHJcbiAgICAgICAgICAgIF9pbml0TWl4ZWRXaWRnZXQyMygpO1xyXG5cclxuICAgICAgICAgICAgLy8gVGFibGUgV2lkZ2V0c1xyXG4gICAgICAgICAgICBfaW5pdEFkdmFuY2VkVGFibGVHcm91cFNlbGVjdGlvbigna3RfYWR2YW5jZV90YWJsZV93aWRnZXRfMScpO1xyXG4gICAgICAgICAgICBfaW5pdEFkdmFuY2VkVGFibGVHcm91cFNlbGVjdGlvbigna3RfYWR2YW5jZV90YWJsZV93aWRnZXRfMicpO1xyXG4gICAgICAgICAgICBfaW5pdEFkdmFuY2VkVGFibGVHcm91cFNlbGVjdGlvbigna3RfYWR2YW5jZV90YWJsZV93aWRnZXRfMycpO1xyXG4gICAgICAgICAgICBfaW5pdEFkdmFuY2VkVGFibGVHcm91cFNlbGVjdGlvbigna3RfYWR2YW5jZV90YWJsZV93aWRnZXRfNCcpO1xyXG5cclxuICAgICAgICAgICAgLy8gRm9ybSBXaWRnZXRzXHJcbiAgICAgICAgICAgIF9pbml0UHJpY2VTbGlkZXIoJ2t0X3ByaWNlX3NsaWRlcicpO1xyXG5cclxuICAgICAgICAgICAgLy8gRm9ybXMgd2lkZ2V0c1xyXG4gICAgICAgICAgICBfaW5pdEZvcm1zV2lkZ2V0MSgpO1xyXG4gICAgICAgICAgICBfaW5pdEZvcm1zV2lkZ2V0MigpO1xyXG4gICAgICAgICAgICBfaW5pdEZvcm1zV2lkZ2V0MygpO1xyXG4gICAgICAgICAgICBfaW5pdEZvcm1zV2lkZ2V0NCgpO1xyXG4gICAgICAgICAgICBfaW5pdEZvcm1zV2lkZ2V0NSgpO1xyXG4gICAgICAgICAgICBfaW5pdEZvcm1zV2lkZ2V0NigpO1xyXG4gICAgICAgICAgICBfaW5pdEZvcm1zV2lkZ2V0NygpO1xyXG4gICAgICAgICAgICBfaW5pdEZvcm1zV2lkZ2V0OCgpO1xyXG4gICAgICAgICAgICBfaW5pdEZvcm1zV2lkZ2V0OSgpO1xyXG4gICAgICAgICAgICBfaW5pdEZvcm1zV2lkZ2V0MTAoKTtcclxuICAgICAgICAgICAgX2luaXRGb3Jtc1dpZGdldDExKCk7XHJcblxyXG4gICAgICAgICAgICAvLyBFZHVjYXRpb24gQXBwXHJcbiAgICAgICAgICAgIF9pbml0RWR1Y2F0aW9uU2hvd01vcmVCdG4oKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0oKTtcclxuXHJcbi8vIFdlYnBhY2sgc3VwcG9ydFxyXG5pZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgIG1vZHVsZS5leHBvcnRzID0gS1RXaWRnZXRzO1xyXG59XHJcblxyXG5qUXVlcnkoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuICAgIEtUV2lkZ2V0cy5pbml0KCk7XHJcbn0pO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9