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
/******/ 	return __webpack_require__(__webpack_require__.s = 39);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/metronic/js/pages/custom/inbox/inbox.js":
/*!***********************************************************!*\
  !*** ./resources/metronic/js/pages/custom/inbox/inbox.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // Class definition

var KTAppInbox = function () {
  // Private properties
  var _asideEl;

  var _listEl;

  var _viewEl;

  var _composeEl;

  var _replyEl;

  var _asideOffcanvas; // Private methods


  var _initEditor = function _initEditor(form, editor) {
    // init editor
    var options = {
      modules: {
        toolbar: {}
      },
      placeholder: 'Type message...',
      theme: 'snow'
    }; // Init editor

    var editor = new Quill('#' + editor, options); // Customize editor

    var toolbar = KTUtil.find(form, '.ql-toolbar');
    var editor = KTUtil.find(form, '.ql-editor');

    if (toolbar) {
      KTUtil.addClass(toolbar, 'px-5 border-top-0 border-left-0 border-right-0');
    }

    if (editor) {
      KTUtil.addClass(editor, 'px-8');
    }
  };

  var _initForm = function _initForm(formEl) {
    var formEl = KTUtil.getById(formEl); // Init autocompletes

    var toEl = KTUtil.find(formEl, '[name=compose_to]');
    var tagifyTo = new Tagify(toEl, {
      delimiters: ", ",
      // add new tags when a comma or a space character is entered
      maxTags: 10,
      blacklist: ["fuck", "shit", "pussy"],
      keepInvalidTags: true,
      // do not remove invalid tags (but keep them marked as invalid)
      whitelist: [{
        value: 'Chris Muller',
        email: 'chris.muller@wix.com',
        initials: '',
        initialsState: '',
        pic: './assets/media/users/100_11.jpg',
        "class": 'tagify__tag--primary'
      }, {
        value: 'Nick Bold',
        email: 'nick.seo@gmail.com',
        initials: 'SS',
        initialsState: 'warning',
        pic: ''
      }, {
        value: 'Alon Silko',
        email: 'alon@keenthemes.com',
        initials: '',
        initialsState: '',
        pic: './assets/media/users/100_6.jpg'
      }, {
        value: 'Sam Seanic',
        email: 'sam.senic@loop.com',
        initials: '',
        initialsState: '',
        pic: './assets/media/users/100_8.jpg'
      }, {
        value: 'Sara Loran',
        email: 'sara.loran@tilda.com',
        initials: '',
        initialsState: '',
        pic: './assets/media/users/100_9.jpg'
      }, {
        value: 'Eric Davok',
        email: 'davok@mix.com',
        initials: '',
        initialsState: '',
        pic: './assets/media/users/100_13.jpg'
      }, {
        value: 'Sam Seanic',
        email: 'sam.senic@loop.com',
        initials: '',
        initialsState: '',
        pic: './assets/media/users/100_13.jpg'
      }, {
        value: 'Lina Nilson',
        email: 'lina.nilson@loop.com',
        initials: 'LN',
        initialsState: 'danger',
        pic: './assets/media/users/100_15.jpg'
      }],
      templates: {
        dropdownItem: function dropdownItem(tagData) {
          try {
            var html = '';
            html += '<div class="tagify__dropdown__item">';
            html += '   <div class="d-flex align-items-center">';
            html += '       <span class="symbol sumbol-' + (tagData.initialsState ? tagData.initialsState : '') + ' mr-2">';
            html += '           <span class="symbol-label" style="background-image: url(\'' + (tagData.pic ? tagData.pic : '') + '\')">' + (tagData.initials ? tagData.initials : '') + '</span>';
            html += '       </span>';
            html += '       <div class="d-flex flex-column">';
            html += '           <a href="#" class="text-dark-75 text-hover-primary font-weight-bold">' + (tagData.value ? tagData.value : '') + '</a>';
            html += '           <span class="text-muted font-weight-bold">' + (tagData.email ? tagData.email : '') + '</span>';
            html += '       </div>';
            html += '   </div>';
            html += '</div>';
            return html;
          } catch (err) {}
        }
      },
      transformTag: function transformTag(tagData) {
        tagData["class"] = 'tagify__tag tagify__tag--primary';
      },
      dropdown: {
        classname: "color-blue",
        enabled: 1,
        maxItems: 5
      }
    });
    var ccEl = KTUtil.find(formEl, '[name=compose_cc]');
    var tagifyCc = new Tagify(ccEl, {
      delimiters: ", ",
      // add new tags when a comma or a space character is entered
      maxTags: 10,
      blacklist: ["fuck", "shit", "pussy"],
      keepInvalidTags: true,
      // do not remove invalid tags (but keep them marked as invalid)
      whitelist: [{
        value: 'Chris Muller',
        email: 'chris.muller@wix.com',
        initials: '',
        initialsState: '',
        pic: './assets/media/users/100_11.jpg',
        "class": 'tagify__tag--primary'
      }, {
        value: 'Nick Bold',
        email: 'nick.seo@gmail.com',
        initials: 'SS',
        initialsState: 'warning',
        pic: ''
      }, {
        value: 'Alon Silko',
        email: 'alon@keenthemes.com',
        initials: '',
        initialsState: '',
        pic: './assets/media/users/100_6.jpg'
      }, {
        value: 'Sam Seanic',
        email: 'sam.senic@loop.com',
        initials: '',
        initialsState: '',
        pic: './assets/media/users/100_8.jpg'
      }, {
        value: 'Sara Loran',
        email: 'sara.loran@tilda.com',
        initials: '',
        initialsState: '',
        pic: './assets/media/users/100_9.jpg'
      }, {
        value: 'Eric Davok',
        email: 'davok@mix.com',
        initials: '',
        initialsState: '',
        pic: './assets/media/users/100_13.jpg'
      }, {
        value: 'Sam Seanic',
        email: 'sam.senic@loop.com',
        initials: '',
        initialsState: '',
        pic: './assets/media/users/100_13.jpg'
      }, {
        value: 'Lina Nilson',
        email: 'lina.nilson@loop.com',
        initials: 'LN',
        initialsState: 'danger',
        pic: './assets/media/users/100_15.jpg'
      }],
      templates: {
        dropdownItem: function dropdownItem(tagData) {
          try {
            var html = '';
            html += '<div class="tagify__dropdown__item">';
            html += '   <div class="d-flex align-items-center">';
            html += '       <span class="symbol sumbol-' + (tagData.initialsState ? tagData.initialsState : '') + ' mr-2" style="background-image: url(\'' + (tagData.pic ? tagData.pic : '') + '\')">';
            html += '           <span class="symbol-label">' + (tagData.initials ? tagData.initials : '') + '</span>';
            html += '       </span>';
            html += '       <div class="d-flex flex-column">';
            html += '           <a href="#" class="text-dark-75 text-hover-primary font-weight-bold">' + (tagData.value ? tagData.value : '') + '</a>';
            html += '           <span class="text-muted font-weight-bold">' + (tagData.email ? tagData.email : '') + '</span>';
            html += '       </div>';
            html += '   </div>';
            html += '</div>';
            return html;
          } catch (err) {}
        }
      },
      transformTag: function transformTag(tagData) {
        tagData["class"] = 'tagify__tag tagify__tag--primary';
      },
      dropdown: {
        classname: "color-blue",
        enabled: 1,
        maxItems: 5
      }
    });
    var bccEl = KTUtil.find(formEl, '[name=compose_bcc]');
    var tagifyBcc = new Tagify(bccEl, {
      delimiters: ", ",
      // add new tags when a comma or a space character is entered
      maxTags: 10,
      blacklist: ["fuck", "shit", "pussy"],
      keepInvalidTags: true,
      // do not remove invalid tags (but keep them marked as invalid)
      whitelist: [{
        value: 'Chris Muller',
        email: 'chris.muller@wix.com',
        initials: '',
        initialsState: '',
        pic: './assets/media/users/100_11.jpg',
        "class": 'tagify__tag--primary'
      }, {
        value: 'Nick Bold',
        email: 'nick.seo@gmail.com',
        initials: 'SS',
        initialsState: 'warning',
        pic: ''
      }, {
        value: 'Alon Silko',
        email: 'alon@keenthemes.com',
        initials: '',
        initialsState: '',
        pic: './assets/media/users/100_6.jpg'
      }, {
        value: 'Sam Seanic',
        email: 'sam.senic@loop.com',
        initials: '',
        initialsState: '',
        pic: './assets/media/users/100_8.jpg'
      }, {
        value: 'Sara Loran',
        email: 'sara.loran@tilda.com',
        initials: '',
        initialsState: '',
        pic: './assets/media/users/100_9.jpg'
      }, {
        value: 'Eric Davok',
        email: 'davok@mix.com',
        initials: '',
        initialsState: '',
        pic: './assets/media/users/100_13.jpg'
      }, {
        value: 'Sam Seanic',
        email: 'sam.senic@loop.com',
        initials: '',
        initialsState: '',
        pic: './assets/media/users/100_13.jpg'
      }, {
        value: 'Lina Nilson',
        email: 'lina.nilson@loop.com',
        initials: 'LN',
        initialsState: 'danger',
        pic: './assets/media/users/100_15.jpg'
      }],
      templates: {
        dropdownItem: function dropdownItem(tagData) {
          try {
            var html = '';
            html += '<div class="tagify__dropdown__item">';
            html += '   <div class="d-flex align-items-center">';
            html += '       <span class="symbol sumbol-' + (tagData.initialsState ? tagData.initialsState : '') + ' mr-2" style="background-image: url(\'' + (tagData.pic ? tagData.pic : '') + '\')">';
            html += '           <span class="symbol-label">' + (tagData.initials ? tagData.initials : '') + '</span>';
            html += '       </span>';
            html += '       <div class="d-flex flex-column">';
            html += '           <a href="#" class="text-dark-75 text-hover-primary font-weight-bold">' + (tagData.value ? tagData.value : '') + '</a>';
            html += '           <span class="text-muted font-weight-bold">' + (tagData.email ? tagData.email : '') + '</span>';
            html += '       </div>';
            html += '   </div>';
            html += '</div>';
            return html;
          } catch (err) {}
        }
      },
      transformTag: function transformTag(tagData) {
        tagData["class"] = 'tagify__tag tagify__tag--primary';
      },
      dropdown: {
        classname: "color-blue",
        enabled: 1,
        maxItems: 5
      }
    }); // CC input show

    KTUtil.on(formEl, '[data-inbox="cc-show"]', 'click', function (e) {
      var inputEl = KTUtil.find(formEl, '.inbox-to-cc');
      KTUtil.removeClass(inputEl, 'd-none');
      KTUtil.addClass(inputEl, 'd-flex');
      KTUtil.find(formEl, "[name=compose_cc]").focus();
    }); // CC input hide

    KTUtil.on(formEl, '[data-inbox="cc-hide"]', 'click', function (e) {
      var inputEl = KTUtil.find(formEl, '.inbox-to-cc');
      KTUtil.removeClass(inputEl, 'd-flex');
      KTUtil.addClass(inputEl, 'd-none');
    }); // BCC input show

    KTUtil.on(formEl, '[data-inbox="bcc-show"]', 'click', function (e) {
      var inputEl = KTUtil.find(formEl, '.inbox-to-bcc');
      KTUtil.removeClass(inputEl, 'd-none');
      KTUtil.addClass(inputEl, 'd-flex');
      KTUtil.find(formEl, "[name=compose_bcc]").focus();
    }); // BCC input hide

    KTUtil.on(formEl, '[data-inbox="bcc-hide"]', 'click', function (e) {
      var inputEl = KTUtil.find(formEl, '.inbox-to-bcc');
      KTUtil.removeClass(inputEl, 'd-flex');
      KTUtil.addClass(inputEl, 'd-none');
    });
  };

  var _initAttachments = function _initAttachments(elemId) {
    var id = "#" + elemId;
    var previewNode = $(id + " .dropzone-item");
    previewNode.id = "";
    var previewTemplate = previewNode.parent('.dropzone-items').html();
    previewNode.remove();
    var myDropzone = new Dropzone(id, {
      // Make the whole body a dropzone
      url: "https://keenthemes.com/scripts/void.php",
      // Set the url for your upload script location
      parallelUploads: 20,
      maxFilesize: 1,
      // Max filesize in MB
      previewTemplate: previewTemplate,
      previewsContainer: id + " .dropzone-items",
      // Define the container to display the previews
      clickable: id + "_select" // Define the element that should be used as click trigger to select files.

    });
    myDropzone.on("addedfile", function (file) {
      // Hookup the start button
      $(document).find(id + ' .dropzone-item').css('display', '');
    }); // Update the total progress bar

    myDropzone.on("totaluploadprogress", function (progress) {
      document.querySelector(id + " .progress-bar").style.width = progress + "%";
    });
    myDropzone.on("sending", function (file) {
      // Show the total progress bar when upload starts
      document.querySelector(id + " .progress-bar").style.opacity = "1";
    }); // Hide the total progress bar when nothing's uploading anymore

    myDropzone.on("complete", function (progress) {
      var thisProgressBar = id + " .dz-complete";
      setTimeout(function () {
        $(thisProgressBar + " .progress-bar, " + thisProgressBar + " .progress").css('opacity', '0');
      }, 300);
    });
  }; // Public methods


  return {
    // Public functions
    init: function init() {
      // Init variables
      _asideEl = KTUtil.getById('kt_inbox_aside');
      _listEl = KTUtil.getById('kt_inbox_list');
      _viewEl = KTUtil.getById('kt_inbox_view');
      _composeEl = KTUtil.getById('kt_inbox_compose');
      _replyEl = KTUtil.getById('kt_inbox_reply'); // Init handlers

      KTAppInbox.initAside();
      KTAppInbox.initList();
      KTAppInbox.initView();
      KTAppInbox.initReply();
      KTAppInbox.initCompose();
    },
    initAside: function initAside() {
      // Mobile offcanvas for mobile mode
      _asideOffcanvas = new KTOffcanvas(_asideEl, {
        overlay: true,
        baseClass: 'offcanvas-mobile',
        //closeBy: 'kt_inbox_aside_close',
        toggleBy: 'kt_subheader_mobile_toggle'
      }); // View list

      KTUtil.on(_asideEl, '.list-item[data-action="list"]', 'click', function (e) {
        var type = KTUtil.attr(this, 'data-type');
        var listItemsEl = KTUtil.find(_listEl, '.kt-inbox__items');
        var navItemEl = this.closest('.kt-nav__item');
        var navItemActiveEl = KTUtil.find(_asideEl, '.kt-nav__item.kt-nav__item--active'); // demo loading

        var loading = new KTDialog({
          'type': 'loader',
          'placement': 'top center',
          'message': 'Loading ...'
        });
        loading.show();
        setTimeout(function () {
          loading.hide();
          KTUtil.css(_listEl, 'display', 'flex'); // show list

          KTUtil.css(_viewEl, 'display', 'none'); // hide view

          KTUtil.addClass(navItemEl, 'kt-nav__item--active');
          KTUtil.removeClass(navItemActiveEl, 'kt-nav__item--active');
          KTUtil.attr(listItemsEl, 'data-type', type);
        }, 600);
      });
    },
    initList: function initList() {
      // View message
      KTUtil.on(_listEl, '[data-inbox="message"]', 'click', function (e) {
        var actionsEl = KTUtil.find(this, '[data-inbox="actions"]'); // skip actions click

        if (e.target === actionsEl || actionsEl && actionsEl.contains(e.target) === true) {
          return false;
        } // Demo loading


        var loading = new KTDialog({
          'type': 'loader',
          'placement': 'top center',
          'message': 'Loading ...'
        });
        loading.show();
        setTimeout(function () {
          loading.hide();
          KTUtil.addClass(_listEl, 'd-none');
          KTUtil.removeClass(_listEl, 'd-block');
          KTUtil.addClass(_viewEl, 'd-block');
          KTUtil.removeClass(_viewEl, 'd-none');
        }, 700);
      }); // Group selection

      KTUtil.on(_listEl, '[data-inbox="group-select"] input', 'click', function () {
        var messages = KTUtil.findAll(_listEl, '[data-inbox="message"]');

        for (var i = 0, j = messages.length; i < j; i++) {
          var message = messages[i];
          var checkbox = KTUtil.find(message, '.checkbox input');
          checkbox.checked = this.checked;

          if (this.checked) {
            KTUtil.addClass(message, 'active');
          } else {
            KTUtil.removeClass(message, 'active');
          }
        }
      }); // Individual selection

      KTUtil.on(_listEl, '[data-inbox="message"] [data-inbox="actions"] .checkbox input', 'click', function () {
        var item = this.closest('[data-inbox="message"]');

        if (item && this.checked) {
          KTUtil.addClass(item, 'active');
        } else {
          KTUtil.removeClass(item, 'active');
        }
      });
    },
    initView: function initView() {
      // Back to listing
      KTUtil.on(_viewEl, '[data-inbox="back"]', 'click', function () {
        // demo loading
        var loading = new KTDialog({
          'type': 'loader',
          'placement': 'top center',
          'message': 'Loading ...'
        });
        loading.show();
        setTimeout(function () {
          loading.hide();
          KTUtil.addClass(_listEl, 'd-block');
          KTUtil.removeClass(_listEl, 'd-none');
          KTUtil.addClass(_viewEl, 'd-none');
          KTUtil.removeClass(_viewEl, 'd-block');
        }, 700);
      }); // Expand/Collapse reply

      KTUtil.on(_viewEl, '[data-inbox="message"]', 'click', function (e) {
        var message = this.closest('[data-inbox="message"]');
        var dropdownToggleEl = KTUtil.find(this, '[data-toggle="dropdown"]');
        var toolbarEl = KTUtil.find(this, '[data-inbox="toolbar"]'); // skip dropdown toggle click

        if (e.target === dropdownToggleEl || dropdownToggleEl && dropdownToggleEl.contains(e.target) === true) {
          return false;
        } // skip group actions click


        if (e.target === toolbarEl || toolbarEl && toolbarEl.contains(e.target) === true) {
          return false;
        }

        if (KTUtil.hasClass(message, 'toggle-on')) {
          KTUtil.addClass(message, 'toggle-off');
          KTUtil.removeClass(message, 'toggle-on');
        } else {
          KTUtil.removeClass(message, 'toggle-off');
          KTUtil.addClass(message, 'toggle-on');
        }
      });
    },
    initReply: function initReply() {
      _initEditor(_replyEl, 'kt_inbox_reply_editor');

      _initAttachments('kt_inbox_reply_attachments');

      _initForm('kt_inbox_reply_form');
    },
    initCompose: function initCompose() {
      _initEditor(_composeEl, 'kt_inbox_compose_editor');

      _initAttachments('kt_inbox_compose_attachments');

      _initForm('kt_inbox_compose_form'); // Remove reply form


      KTUtil.on(_composeEl, '[data-inbox="dismiss"]', 'click', function (e) {
        swal.fire({
          text: "Are you sure to discard this message ?",
          type: "danger",
          buttonsStyling: false,
          confirmButtonText: "Discard draft",
          confirmButtonClass: "btn btn-danger",
          showCancelButton: true,
          cancelButtonText: "Cancel",
          cancelButtonClass: "btn btn-light-primary"
        }).then(function (result) {
          $(_composeEl).modal('hide');
        });
      });
    }
  };
}(); // Class Initialization


jQuery(document).ready(function () {
  KTAppInbox.init();
});

/***/ }),

/***/ 39:
/*!*****************************************************************!*\
  !*** multi ./resources/metronic/js/pages/custom/inbox/inbox.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Applications/MAMP/htdocs/spreadci4/public/admin/themes/metronic/resources/metronic/js/pages/custom/inbox/inbox.js */"./resources/metronic/js/pages/custom/inbox/inbox.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL21ldHJvbmljL2pzL3BhZ2VzL2N1c3RvbS9pbmJveC9pbmJveC5qcyJdLCJuYW1lcyI6WyJLVEFwcEluYm94IiwiX2FzaWRlRWwiLCJfbGlzdEVsIiwiX3ZpZXdFbCIsIl9jb21wb3NlRWwiLCJfcmVwbHlFbCIsIl9hc2lkZU9mZmNhbnZhcyIsIl9pbml0RWRpdG9yIiwiZm9ybSIsImVkaXRvciIsIm9wdGlvbnMiLCJtb2R1bGVzIiwidG9vbGJhciIsInBsYWNlaG9sZGVyIiwidGhlbWUiLCJRdWlsbCIsIktUVXRpbCIsImZpbmQiLCJhZGRDbGFzcyIsIl9pbml0Rm9ybSIsImZvcm1FbCIsImdldEJ5SWQiLCJ0b0VsIiwidGFnaWZ5VG8iLCJUYWdpZnkiLCJkZWxpbWl0ZXJzIiwibWF4VGFncyIsImJsYWNrbGlzdCIsImtlZXBJbnZhbGlkVGFncyIsIndoaXRlbGlzdCIsInZhbHVlIiwiZW1haWwiLCJpbml0aWFscyIsImluaXRpYWxzU3RhdGUiLCJwaWMiLCJ0ZW1wbGF0ZXMiLCJkcm9wZG93bkl0ZW0iLCJ0YWdEYXRhIiwiaHRtbCIsImVyciIsInRyYW5zZm9ybVRhZyIsImRyb3Bkb3duIiwiY2xhc3NuYW1lIiwiZW5hYmxlZCIsIm1heEl0ZW1zIiwiY2NFbCIsInRhZ2lmeUNjIiwiYmNjRWwiLCJ0YWdpZnlCY2MiLCJvbiIsImUiLCJpbnB1dEVsIiwicmVtb3ZlQ2xhc3MiLCJmb2N1cyIsIl9pbml0QXR0YWNobWVudHMiLCJlbGVtSWQiLCJpZCIsInByZXZpZXdOb2RlIiwiJCIsInByZXZpZXdUZW1wbGF0ZSIsInBhcmVudCIsInJlbW92ZSIsIm15RHJvcHpvbmUiLCJEcm9wem9uZSIsInVybCIsInBhcmFsbGVsVXBsb2FkcyIsIm1heEZpbGVzaXplIiwicHJldmlld3NDb250YWluZXIiLCJjbGlja2FibGUiLCJmaWxlIiwiZG9jdW1lbnQiLCJjc3MiLCJwcm9ncmVzcyIsInF1ZXJ5U2VsZWN0b3IiLCJzdHlsZSIsIndpZHRoIiwib3BhY2l0eSIsInRoaXNQcm9ncmVzc0JhciIsInNldFRpbWVvdXQiLCJpbml0IiwiaW5pdEFzaWRlIiwiaW5pdExpc3QiLCJpbml0VmlldyIsImluaXRSZXBseSIsImluaXRDb21wb3NlIiwiS1RPZmZjYW52YXMiLCJvdmVybGF5IiwiYmFzZUNsYXNzIiwidG9nZ2xlQnkiLCJ0eXBlIiwiYXR0ciIsImxpc3RJdGVtc0VsIiwibmF2SXRlbUVsIiwiY2xvc2VzdCIsIm5hdkl0ZW1BY3RpdmVFbCIsImxvYWRpbmciLCJLVERpYWxvZyIsInNob3ciLCJoaWRlIiwiYWN0aW9uc0VsIiwidGFyZ2V0IiwiY29udGFpbnMiLCJtZXNzYWdlcyIsImZpbmRBbGwiLCJpIiwiaiIsImxlbmd0aCIsIm1lc3NhZ2UiLCJjaGVja2JveCIsImNoZWNrZWQiLCJpdGVtIiwiZHJvcGRvd25Ub2dnbGVFbCIsInRvb2xiYXJFbCIsImhhc0NsYXNzIiwic3dhbCIsImZpcmUiLCJ0ZXh0IiwiYnV0dG9uc1N0eWxpbmciLCJjb25maXJtQnV0dG9uVGV4dCIsImNvbmZpcm1CdXR0b25DbGFzcyIsInNob3dDYW5jZWxCdXR0b24iLCJjYW5jZWxCdXR0b25UZXh0IiwiY2FuY2VsQnV0dG9uQ2xhc3MiLCJ0aGVuIiwicmVzdWx0IiwibW9kYWwiLCJqUXVlcnkiLCJyZWFkeSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7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SUFOWjtBQU9OQywwQkFBZ0IsRUFBRSxRQVBaO0FBUU5DLDJCQUFpQixFQUFFO0FBUmIsU0FBVixFQVNHQyxJQVRILENBU1EsVUFBU0MsTUFBVCxFQUFpQjtBQUNyQmxFLFdBQUMsQ0FBQ3RELFVBQUQsQ0FBRCxDQUFjeUgsS0FBZCxDQUFvQixNQUFwQjtBQUNILFNBWEQ7QUFZSCxPQWJEO0FBY0g7QUE5TEUsR0FBUDtBQWdNSCxDQXJqQmdCLEVBQWpCLEMsQ0F1akJBOzs7QUFDQUMsTUFBTSxDQUFDeEQsUUFBRCxDQUFOLENBQWlCeUQsS0FBakIsQ0FBdUIsWUFBVztBQUM5Qi9ILFlBQVUsQ0FBQytFLElBQVg7QUFDSCxDQUZELEUiLCJmaWxlIjoiL2RldmVsb3BtZW50L2pzL3BhZ2VzL2N1c3RvbS9pbmJveC9pbmJveC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMzkpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4vLyBDbGFzcyBkZWZpbml0aW9uXHJcbnZhciBLVEFwcEluYm94ID0gZnVuY3Rpb24oKSB7XHJcbiAgICAvLyBQcml2YXRlIHByb3BlcnRpZXNcclxuICAgIHZhciBfYXNpZGVFbDtcclxuICAgIHZhciBfbGlzdEVsO1xyXG4gICAgdmFyIF92aWV3RWw7XHJcbiAgICB2YXIgX2NvbXBvc2VFbDtcclxuICAgIHZhciBfcmVwbHlFbDtcclxuICAgIHZhciBfYXNpZGVPZmZjYW52YXM7XHJcblxyXG4gICAgLy8gUHJpdmF0ZSBtZXRob2RzXHJcbiAgICB2YXIgX2luaXRFZGl0b3IgPSBmdW5jdGlvbihmb3JtLCBlZGl0b3IpIHtcclxuICAgICAgICAvLyBpbml0IGVkaXRvclxyXG4gICAgICAgIHZhciBvcHRpb25zID0ge1xyXG4gICAgICAgICAgICBtb2R1bGVzOiB7XHJcbiAgICAgICAgICAgICAgICB0b29sYmFyOiB7fVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcjogJ1R5cGUgbWVzc2FnZS4uLicsXHJcbiAgICAgICAgICAgIHRoZW1lOiAnc25vdydcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvLyBJbml0IGVkaXRvclxyXG4gICAgICAgIHZhciBlZGl0b3IgPSBuZXcgUXVpbGwoJyMnICsgZWRpdG9yLCBvcHRpb25zKTtcclxuXHJcbiAgICAgICAgLy8gQ3VzdG9taXplIGVkaXRvclxyXG4gICAgICAgIHZhciB0b29sYmFyID0gS1RVdGlsLmZpbmQoZm9ybSwgJy5xbC10b29sYmFyJyk7XHJcbiAgICAgICAgdmFyIGVkaXRvciA9IEtUVXRpbC5maW5kKGZvcm0sICcucWwtZWRpdG9yJyk7XHJcblxyXG4gICAgICAgIGlmICh0b29sYmFyKSB7XHJcbiAgICAgICAgICAgIEtUVXRpbC5hZGRDbGFzcyh0b29sYmFyLCAncHgtNSBib3JkZXItdG9wLTAgYm9yZGVyLWxlZnQtMCBib3JkZXItcmlnaHQtMCcpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGVkaXRvcikge1xyXG4gICAgICAgICAgICBLVFV0aWwuYWRkQ2xhc3MoZWRpdG9yLCAncHgtOCcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB2YXIgX2luaXRGb3JtID0gZnVuY3Rpb24oZm9ybUVsKSB7XHJcbiAgICAgICAgdmFyIGZvcm1FbCA9IEtUVXRpbC5nZXRCeUlkKGZvcm1FbCk7XHJcblxyXG4gICAgICAgIC8vIEluaXQgYXV0b2NvbXBsZXRlc1xyXG4gICAgICAgIHZhciB0b0VsID0gS1RVdGlsLmZpbmQoZm9ybUVsLCAnW25hbWU9Y29tcG9zZV90b10nKTtcclxuICAgICAgICB2YXIgdGFnaWZ5VG8gPSBuZXcgVGFnaWZ5KHRvRWwsIHtcclxuICAgICAgICAgICAgZGVsaW1pdGVyczogXCIsIFwiLCAvLyBhZGQgbmV3IHRhZ3Mgd2hlbiBhIGNvbW1hIG9yIGEgc3BhY2UgY2hhcmFjdGVyIGlzIGVudGVyZWRcclxuICAgICAgICAgICAgbWF4VGFnczogMTAsXHJcbiAgICAgICAgICAgIGJsYWNrbGlzdDogW1wiZnVja1wiLCBcInNoaXRcIiwgXCJwdXNzeVwiXSxcclxuICAgICAgICAgICAga2VlcEludmFsaWRUYWdzOiB0cnVlLCAvLyBkbyBub3QgcmVtb3ZlIGludmFsaWQgdGFncyAoYnV0IGtlZXAgdGhlbSBtYXJrZWQgYXMgaW52YWxpZClcclxuICAgICAgICAgICAgd2hpdGVsaXN0OiBbe1xyXG4gICAgICAgICAgICAgICAgdmFsdWU6ICdDaHJpcyBNdWxsZXInLFxyXG4gICAgICAgICAgICAgICAgZW1haWw6ICdjaHJpcy5tdWxsZXJAd2l4LmNvbScsXHJcbiAgICAgICAgICAgICAgICBpbml0aWFsczogJycsXHJcbiAgICAgICAgICAgICAgICBpbml0aWFsc1N0YXRlOiAnJyxcclxuICAgICAgICAgICAgICAgIHBpYzogJy4vYXNzZXRzL21lZGlhL3VzZXJzLzEwMF8xMS5qcGcnLFxyXG4gICAgICAgICAgICAgICAgY2xhc3M6ICd0YWdpZnlfX3RhZy0tcHJpbWFyeSdcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgdmFsdWU6ICdOaWNrIEJvbGQnLFxyXG4gICAgICAgICAgICAgICAgZW1haWw6ICduaWNrLnNlb0BnbWFpbC5jb20nLFxyXG4gICAgICAgICAgICAgICAgaW5pdGlhbHM6ICdTUycsXHJcbiAgICAgICAgICAgICAgICBpbml0aWFsc1N0YXRlOiAnd2FybmluZycsXHJcbiAgICAgICAgICAgICAgICBwaWM6ICcnXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIHZhbHVlOiAnQWxvbiBTaWxrbycsXHJcbiAgICAgICAgICAgICAgICBlbWFpbDogJ2Fsb25Aa2VlbnRoZW1lcy5jb20nLFxyXG4gICAgICAgICAgICAgICAgaW5pdGlhbHM6ICcnLFxyXG4gICAgICAgICAgICAgICAgaW5pdGlhbHNTdGF0ZTogJycsXHJcbiAgICAgICAgICAgICAgICBwaWM6ICcuL2Fzc2V0cy9tZWRpYS91c2Vycy8xMDBfNi5qcGcnXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIHZhbHVlOiAnU2FtIFNlYW5pYycsXHJcbiAgICAgICAgICAgICAgICBlbWFpbDogJ3NhbS5zZW5pY0Bsb29wLmNvbScsXHJcbiAgICAgICAgICAgICAgICBpbml0aWFsczogJycsXHJcbiAgICAgICAgICAgICAgICBpbml0aWFsc1N0YXRlOiAnJyxcclxuICAgICAgICAgICAgICAgIHBpYzogJy4vYXNzZXRzL21lZGlhL3VzZXJzLzEwMF84LmpwZydcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgdmFsdWU6ICdTYXJhIExvcmFuJyxcclxuICAgICAgICAgICAgICAgIGVtYWlsOiAnc2FyYS5sb3JhbkB0aWxkYS5jb20nLFxyXG4gICAgICAgICAgICAgICAgaW5pdGlhbHM6ICcnLFxyXG4gICAgICAgICAgICAgICAgaW5pdGlhbHNTdGF0ZTogJycsXHJcbiAgICAgICAgICAgICAgICBwaWM6ICcuL2Fzc2V0cy9tZWRpYS91c2Vycy8xMDBfOS5qcGcnXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIHZhbHVlOiAnRXJpYyBEYXZvaycsXHJcbiAgICAgICAgICAgICAgICBlbWFpbDogJ2Rhdm9rQG1peC5jb20nLFxyXG4gICAgICAgICAgICAgICAgaW5pdGlhbHM6ICcnLFxyXG4gICAgICAgICAgICAgICAgaW5pdGlhbHNTdGF0ZTogJycsXHJcbiAgICAgICAgICAgICAgICBwaWM6ICcuL2Fzc2V0cy9tZWRpYS91c2Vycy8xMDBfMTMuanBnJ1xyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogJ1NhbSBTZWFuaWMnLFxyXG4gICAgICAgICAgICAgICAgZW1haWw6ICdzYW0uc2VuaWNAbG9vcC5jb20nLFxyXG4gICAgICAgICAgICAgICAgaW5pdGlhbHM6ICcnLFxyXG4gICAgICAgICAgICAgICAgaW5pdGlhbHNTdGF0ZTogJycsXHJcbiAgICAgICAgICAgICAgICBwaWM6ICcuL2Fzc2V0cy9tZWRpYS91c2Vycy8xMDBfMTMuanBnJ1xyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogJ0xpbmEgTmlsc29uJyxcclxuICAgICAgICAgICAgICAgIGVtYWlsOiAnbGluYS5uaWxzb25AbG9vcC5jb20nLFxyXG4gICAgICAgICAgICAgICAgaW5pdGlhbHM6ICdMTicsXHJcbiAgICAgICAgICAgICAgICBpbml0aWFsc1N0YXRlOiAnZGFuZ2VyJyxcclxuICAgICAgICAgICAgICAgIHBpYzogJy4vYXNzZXRzL21lZGlhL3VzZXJzLzEwMF8xNS5qcGcnXHJcbiAgICAgICAgICAgIH1dLFxyXG4gICAgICAgICAgICB0ZW1wbGF0ZXM6IHtcclxuICAgICAgICAgICAgICAgIGRyb3Bkb3duSXRlbTogZnVuY3Rpb24odGFnRGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBodG1sID0gJyc7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBodG1sICs9ICc8ZGl2IGNsYXNzPVwidGFnaWZ5X19kcm9wZG93bl9faXRlbVwiPic7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGh0bWwgKz0gJyAgIDxkaXYgY2xhc3M9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+JztcclxuICAgICAgICAgICAgICAgICAgICAgICAgaHRtbCArPSAnICAgICAgIDxzcGFuIGNsYXNzPVwic3ltYm9sIHN1bWJvbC0nICsgKHRhZ0RhdGEuaW5pdGlhbHNTdGF0ZSA/IHRhZ0RhdGEuaW5pdGlhbHNTdGF0ZSA6ICcnKSArICcgbXItMlwiPic7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGh0bWwgKz0gJyAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJzeW1ib2wtbGFiZWxcIiBzdHlsZT1cImJhY2tncm91bmQtaW1hZ2U6IHVybChcXCcnKyAodGFnRGF0YS5waWMgPyB0YWdEYXRhLnBpYyA6ICcnKSArICdcXCcpXCI+JyArICh0YWdEYXRhLmluaXRpYWxzID8gdGFnRGF0YS5pbml0aWFscyA6ICcnKSArICc8L3NwYW4+JztcclxuICAgICAgICAgICAgICAgICAgICAgICAgaHRtbCArPSAnICAgICAgIDwvc3Bhbj4nO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBodG1sICs9ICcgICAgICAgPGRpdiBjbGFzcz1cImQtZmxleCBmbGV4LWNvbHVtblwiPic7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGh0bWwgKz0gJyAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cInRleHQtZGFyay03NSB0ZXh0LWhvdmVyLXByaW1hcnkgZm9udC13ZWlnaHQtYm9sZFwiPicrICh0YWdEYXRhLnZhbHVlID8gdGFnRGF0YS52YWx1ZSA6ICcnKSArICc8L2E+JztcclxuICAgICAgICAgICAgICAgICAgICAgICAgaHRtbCArPSAnICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQtbXV0ZWQgZm9udC13ZWlnaHQtYm9sZFwiPicgKyAodGFnRGF0YS5lbWFpbCA/IHRhZ0RhdGEuZW1haWwgOiAnJykgKyAnPC9zcGFuPic7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGh0bWwgKz0gJyAgICAgICA8L2Rpdj4nO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBodG1sICs9ICcgICA8L2Rpdj4nO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBodG1sICs9ICc8L2Rpdj4nO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGh0bWw7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7fVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB0cmFuc2Zvcm1UYWc6IGZ1bmN0aW9uKHRhZ0RhdGEpIHtcclxuICAgICAgICAgICAgICAgIHRhZ0RhdGEuY2xhc3MgPSAndGFnaWZ5X190YWcgdGFnaWZ5X190YWctLXByaW1hcnknO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBkcm9wZG93bjoge1xyXG4gICAgICAgICAgICAgICAgY2xhc3NuYW1lOiBcImNvbG9yLWJsdWVcIixcclxuICAgICAgICAgICAgICAgIGVuYWJsZWQ6IDEsXHJcbiAgICAgICAgICAgICAgICBtYXhJdGVtczogNVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHZhciBjY0VsID0gS1RVdGlsLmZpbmQoZm9ybUVsLCAnW25hbWU9Y29tcG9zZV9jY10nKTtcclxuICAgICAgICB2YXIgdGFnaWZ5Q2MgPSBuZXcgVGFnaWZ5KGNjRWwsIHtcclxuICAgICAgICAgICAgZGVsaW1pdGVyczogXCIsIFwiLCAvLyBhZGQgbmV3IHRhZ3Mgd2hlbiBhIGNvbW1hIG9yIGEgc3BhY2UgY2hhcmFjdGVyIGlzIGVudGVyZWRcclxuICAgICAgICAgICAgbWF4VGFnczogMTAsXHJcbiAgICAgICAgICAgIGJsYWNrbGlzdDogW1wiZnVja1wiLCBcInNoaXRcIiwgXCJwdXNzeVwiXSxcclxuICAgICAgICAgICAga2VlcEludmFsaWRUYWdzOiB0cnVlLCAvLyBkbyBub3QgcmVtb3ZlIGludmFsaWQgdGFncyAoYnV0IGtlZXAgdGhlbSBtYXJrZWQgYXMgaW52YWxpZClcclxuICAgICAgICAgICAgd2hpdGVsaXN0OiBbe1xyXG4gICAgICAgICAgICAgICAgdmFsdWU6ICdDaHJpcyBNdWxsZXInLFxyXG4gICAgICAgICAgICAgICAgZW1haWw6ICdjaHJpcy5tdWxsZXJAd2l4LmNvbScsXHJcbiAgICAgICAgICAgICAgICBpbml0aWFsczogJycsXHJcbiAgICAgICAgICAgICAgICBpbml0aWFsc1N0YXRlOiAnJyxcclxuICAgICAgICAgICAgICAgIHBpYzogJy4vYXNzZXRzL21lZGlhL3VzZXJzLzEwMF8xMS5qcGcnLFxyXG4gICAgICAgICAgICAgICAgY2xhc3M6ICd0YWdpZnlfX3RhZy0tcHJpbWFyeSdcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgdmFsdWU6ICdOaWNrIEJvbGQnLFxyXG4gICAgICAgICAgICAgICAgZW1haWw6ICduaWNrLnNlb0BnbWFpbC5jb20nLFxyXG4gICAgICAgICAgICAgICAgaW5pdGlhbHM6ICdTUycsXHJcbiAgICAgICAgICAgICAgICBpbml0aWFsc1N0YXRlOiAnd2FybmluZycsXHJcbiAgICAgICAgICAgICAgICBwaWM6ICcnXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIHZhbHVlOiAnQWxvbiBTaWxrbycsXHJcbiAgICAgICAgICAgICAgICBlbWFpbDogJ2Fsb25Aa2VlbnRoZW1lcy5jb20nLFxyXG4gICAgICAgICAgICAgICAgaW5pdGlhbHM6ICcnLFxyXG4gICAgICAgICAgICAgICAgaW5pdGlhbHNTdGF0ZTogJycsXHJcbiAgICAgICAgICAgICAgICBwaWM6ICcuL2Fzc2V0cy9tZWRpYS91c2Vycy8xMDBfNi5qcGcnXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIHZhbHVlOiAnU2FtIFNlYW5pYycsXHJcbiAgICAgICAgICAgICAgICBlbWFpbDogJ3NhbS5zZW5pY0Bsb29wLmNvbScsXHJcbiAgICAgICAgICAgICAgICBpbml0aWFsczogJycsXHJcbiAgICAgICAgICAgICAgICBpbml0aWFsc1N0YXRlOiAnJyxcclxuICAgICAgICAgICAgICAgIHBpYzogJy4vYXNzZXRzL21lZGlhL3VzZXJzLzEwMF84LmpwZydcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgdmFsdWU6ICdTYXJhIExvcmFuJyxcclxuICAgICAgICAgICAgICAgIGVtYWlsOiAnc2FyYS5sb3JhbkB0aWxkYS5jb20nLFxyXG4gICAgICAgICAgICAgICAgaW5pdGlhbHM6ICcnLFxyXG4gICAgICAgICAgICAgICAgaW5pdGlhbHNTdGF0ZTogJycsXHJcbiAgICAgICAgICAgICAgICBwaWM6ICcuL2Fzc2V0cy9tZWRpYS91c2Vycy8xMDBfOS5qcGcnXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIHZhbHVlOiAnRXJpYyBEYXZvaycsXHJcbiAgICAgICAgICAgICAgICBlbWFpbDogJ2Rhdm9rQG1peC5jb20nLFxyXG4gICAgICAgICAgICAgICAgaW5pdGlhbHM6ICcnLFxyXG4gICAgICAgICAgICAgICAgaW5pdGlhbHNTdGF0ZTogJycsXHJcbiAgICAgICAgICAgICAgICBwaWM6ICcuL2Fzc2V0cy9tZWRpYS91c2Vycy8xMDBfMTMuanBnJ1xyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogJ1NhbSBTZWFuaWMnLFxyXG4gICAgICAgICAgICAgICAgZW1haWw6ICdzYW0uc2VuaWNAbG9vcC5jb20nLFxyXG4gICAgICAgICAgICAgICAgaW5pdGlhbHM6ICcnLFxyXG4gICAgICAgICAgICAgICAgaW5pdGlhbHNTdGF0ZTogJycsXHJcbiAgICAgICAgICAgICAgICBwaWM6ICcuL2Fzc2V0cy9tZWRpYS91c2Vycy8xMDBfMTMuanBnJ1xyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogJ0xpbmEgTmlsc29uJyxcclxuICAgICAgICAgICAgICAgIGVtYWlsOiAnbGluYS5uaWxzb25AbG9vcC5jb20nLFxyXG4gICAgICAgICAgICAgICAgaW5pdGlhbHM6ICdMTicsXHJcbiAgICAgICAgICAgICAgICBpbml0aWFsc1N0YXRlOiAnZGFuZ2VyJyxcclxuICAgICAgICAgICAgICAgIHBpYzogJy4vYXNzZXRzL21lZGlhL3VzZXJzLzEwMF8xNS5qcGcnXHJcbiAgICAgICAgICAgIH1dLFxyXG4gICAgICAgICAgICB0ZW1wbGF0ZXM6IHtcclxuICAgICAgICAgICAgICAgIGRyb3Bkb3duSXRlbTogZnVuY3Rpb24odGFnRGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBodG1sID0gJyc7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBodG1sICs9ICc8ZGl2IGNsYXNzPVwidGFnaWZ5X19kcm9wZG93bl9faXRlbVwiPic7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGh0bWwgKz0gJyAgIDxkaXYgY2xhc3M9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+JztcclxuICAgICAgICAgICAgICAgICAgICAgICAgaHRtbCArPSAnICAgICAgIDxzcGFuIGNsYXNzPVwic3ltYm9sIHN1bWJvbC0nICsgKHRhZ0RhdGEuaW5pdGlhbHNTdGF0ZSA/IHRhZ0RhdGEuaW5pdGlhbHNTdGF0ZSA6ICcnKSArICcgbXItMlwiIHN0eWxlPVwiYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcJycrICh0YWdEYXRhLnBpYyA/IHRhZ0RhdGEucGljIDogJycpICsgJ1xcJylcIj4nO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBodG1sICs9ICcgICAgICAgICAgIDxzcGFuIGNsYXNzPVwic3ltYm9sLWxhYmVsXCI+JyArICh0YWdEYXRhLmluaXRpYWxzID8gdGFnRGF0YS5pbml0aWFscyA6ICcnKSArICc8L3NwYW4+JztcclxuICAgICAgICAgICAgICAgICAgICAgICAgaHRtbCArPSAnICAgICAgIDwvc3Bhbj4nO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBodG1sICs9ICcgICAgICAgPGRpdiBjbGFzcz1cImQtZmxleCBmbGV4LWNvbHVtblwiPic7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGh0bWwgKz0gJyAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cInRleHQtZGFyay03NSB0ZXh0LWhvdmVyLXByaW1hcnkgZm9udC13ZWlnaHQtYm9sZFwiPicrICh0YWdEYXRhLnZhbHVlID8gdGFnRGF0YS52YWx1ZSA6ICcnKSArICc8L2E+JztcclxuICAgICAgICAgICAgICAgICAgICAgICAgaHRtbCArPSAnICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQtbXV0ZWQgZm9udC13ZWlnaHQtYm9sZFwiPicgKyAodGFnRGF0YS5lbWFpbCA/IHRhZ0RhdGEuZW1haWwgOiAnJykgKyAnPC9zcGFuPic7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGh0bWwgKz0gJyAgICAgICA8L2Rpdj4nO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBodG1sICs9ICcgICA8L2Rpdj4nO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBodG1sICs9ICc8L2Rpdj4nO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGh0bWw7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7fVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB0cmFuc2Zvcm1UYWc6IGZ1bmN0aW9uKHRhZ0RhdGEpIHtcclxuICAgICAgICAgICAgICAgIHRhZ0RhdGEuY2xhc3MgPSAndGFnaWZ5X190YWcgdGFnaWZ5X190YWctLXByaW1hcnknO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBkcm9wZG93bjoge1xyXG4gICAgICAgICAgICAgICAgY2xhc3NuYW1lOiBcImNvbG9yLWJsdWVcIixcclxuICAgICAgICAgICAgICAgIGVuYWJsZWQ6IDEsXHJcbiAgICAgICAgICAgICAgICBtYXhJdGVtczogNVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHZhciBiY2NFbCA9IEtUVXRpbC5maW5kKGZvcm1FbCwgJ1tuYW1lPWNvbXBvc2VfYmNjXScpO1xyXG4gICAgICAgIHZhciB0YWdpZnlCY2MgPSBuZXcgVGFnaWZ5KGJjY0VsLCB7XHJcbiAgICAgICAgICAgIGRlbGltaXRlcnM6IFwiLCBcIiwgLy8gYWRkIG5ldyB0YWdzIHdoZW4gYSBjb21tYSBvciBhIHNwYWNlIGNoYXJhY3RlciBpcyBlbnRlcmVkXHJcbiAgICAgICAgICAgIG1heFRhZ3M6IDEwLFxyXG4gICAgICAgICAgICBibGFja2xpc3Q6IFtcImZ1Y2tcIiwgXCJzaGl0XCIsIFwicHVzc3lcIl0sXHJcbiAgICAgICAgICAgIGtlZXBJbnZhbGlkVGFnczogdHJ1ZSwgLy8gZG8gbm90IHJlbW92ZSBpbnZhbGlkIHRhZ3MgKGJ1dCBrZWVwIHRoZW0gbWFya2VkIGFzIGludmFsaWQpXHJcbiAgICAgICAgICAgIHdoaXRlbGlzdDogW3tcclxuICAgICAgICAgICAgICAgIHZhbHVlOiAnQ2hyaXMgTXVsbGVyJyxcclxuICAgICAgICAgICAgICAgIGVtYWlsOiAnY2hyaXMubXVsbGVyQHdpeC5jb20nLFxyXG4gICAgICAgICAgICAgICAgaW5pdGlhbHM6ICcnLFxyXG4gICAgICAgICAgICAgICAgaW5pdGlhbHNTdGF0ZTogJycsXHJcbiAgICAgICAgICAgICAgICBwaWM6ICcuL2Fzc2V0cy9tZWRpYS91c2Vycy8xMDBfMTEuanBnJyxcclxuICAgICAgICAgICAgICAgIGNsYXNzOiAndGFnaWZ5X190YWctLXByaW1hcnknXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIHZhbHVlOiAnTmljayBCb2xkJyxcclxuICAgICAgICAgICAgICAgIGVtYWlsOiAnbmljay5zZW9AZ21haWwuY29tJyxcclxuICAgICAgICAgICAgICAgIGluaXRpYWxzOiAnU1MnLFxyXG4gICAgICAgICAgICAgICAgaW5pdGlhbHNTdGF0ZTogJ3dhcm5pbmcnLFxyXG4gICAgICAgICAgICAgICAgcGljOiAnJ1xyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogJ0Fsb24gU2lsa28nLFxyXG4gICAgICAgICAgICAgICAgZW1haWw6ICdhbG9uQGtlZW50aGVtZXMuY29tJyxcclxuICAgICAgICAgICAgICAgIGluaXRpYWxzOiAnJyxcclxuICAgICAgICAgICAgICAgIGluaXRpYWxzU3RhdGU6ICcnLFxyXG4gICAgICAgICAgICAgICAgcGljOiAnLi9hc3NldHMvbWVkaWEvdXNlcnMvMTAwXzYuanBnJ1xyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogJ1NhbSBTZWFuaWMnLFxyXG4gICAgICAgICAgICAgICAgZW1haWw6ICdzYW0uc2VuaWNAbG9vcC5jb20nLFxyXG4gICAgICAgICAgICAgICAgaW5pdGlhbHM6ICcnLFxyXG4gICAgICAgICAgICAgICAgaW5pdGlhbHNTdGF0ZTogJycsXHJcbiAgICAgICAgICAgICAgICBwaWM6ICcuL2Fzc2V0cy9tZWRpYS91c2Vycy8xMDBfOC5qcGcnXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIHZhbHVlOiAnU2FyYSBMb3JhbicsXHJcbiAgICAgICAgICAgICAgICBlbWFpbDogJ3NhcmEubG9yYW5AdGlsZGEuY29tJyxcclxuICAgICAgICAgICAgICAgIGluaXRpYWxzOiAnJyxcclxuICAgICAgICAgICAgICAgIGluaXRpYWxzU3RhdGU6ICcnLFxyXG4gICAgICAgICAgICAgICAgcGljOiAnLi9hc3NldHMvbWVkaWEvdXNlcnMvMTAwXzkuanBnJ1xyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogJ0VyaWMgRGF2b2snLFxyXG4gICAgICAgICAgICAgICAgZW1haWw6ICdkYXZva0BtaXguY29tJyxcclxuICAgICAgICAgICAgICAgIGluaXRpYWxzOiAnJyxcclxuICAgICAgICAgICAgICAgIGluaXRpYWxzU3RhdGU6ICcnLFxyXG4gICAgICAgICAgICAgICAgcGljOiAnLi9hc3NldHMvbWVkaWEvdXNlcnMvMTAwXzEzLmpwZydcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgdmFsdWU6ICdTYW0gU2VhbmljJyxcclxuICAgICAgICAgICAgICAgIGVtYWlsOiAnc2FtLnNlbmljQGxvb3AuY29tJyxcclxuICAgICAgICAgICAgICAgIGluaXRpYWxzOiAnJyxcclxuICAgICAgICAgICAgICAgIGluaXRpYWxzU3RhdGU6ICcnLFxyXG4gICAgICAgICAgICAgICAgcGljOiAnLi9hc3NldHMvbWVkaWEvdXNlcnMvMTAwXzEzLmpwZydcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgdmFsdWU6ICdMaW5hIE5pbHNvbicsXHJcbiAgICAgICAgICAgICAgICBlbWFpbDogJ2xpbmEubmlsc29uQGxvb3AuY29tJyxcclxuICAgICAgICAgICAgICAgIGluaXRpYWxzOiAnTE4nLFxyXG4gICAgICAgICAgICAgICAgaW5pdGlhbHNTdGF0ZTogJ2RhbmdlcicsXHJcbiAgICAgICAgICAgICAgICBwaWM6ICcuL2Fzc2V0cy9tZWRpYS91c2Vycy8xMDBfMTUuanBnJ1xyXG4gICAgICAgICAgICB9XSxcclxuICAgICAgICAgICAgdGVtcGxhdGVzOiB7XHJcbiAgICAgICAgICAgICAgICBkcm9wZG93bkl0ZW06IGZ1bmN0aW9uKHRhZ0RhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgaHRtbCA9ICcnO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaHRtbCArPSAnPGRpdiBjbGFzcz1cInRhZ2lmeV9fZHJvcGRvd25fX2l0ZW1cIj4nO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBodG1sICs9ICcgICA8ZGl2IGNsYXNzPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiPic7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGh0bWwgKz0gJyAgICAgICA8c3BhbiBjbGFzcz1cInN5bWJvbCBzdW1ib2wtJyArICh0YWdEYXRhLmluaXRpYWxzU3RhdGUgPyB0YWdEYXRhLmluaXRpYWxzU3RhdGUgOiAnJykgKyAnIG1yLTJcIiBzdHlsZT1cImJhY2tncm91bmQtaW1hZ2U6IHVybChcXCcnKyAodGFnRGF0YS5waWMgPyB0YWdEYXRhLnBpYyA6ICcnKSArICdcXCcpXCI+JztcclxuICAgICAgICAgICAgICAgICAgICAgICAgaHRtbCArPSAnICAgICAgICAgICA8c3BhbiBjbGFzcz1cInN5bWJvbC1sYWJlbFwiPicgKyAodGFnRGF0YS5pbml0aWFscyA/IHRhZ0RhdGEuaW5pdGlhbHMgOiAnJykgKyAnPC9zcGFuPic7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGh0bWwgKz0gJyAgICAgICA8L3NwYW4+JztcclxuICAgICAgICAgICAgICAgICAgICAgICAgaHRtbCArPSAnICAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXggZmxleC1jb2x1bW5cIj4nO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBodG1sICs9ICcgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJ0ZXh0LWRhcmstNzUgdGV4dC1ob3Zlci1wcmltYXJ5IGZvbnQtd2VpZ2h0LWJvbGRcIj4nKyAodGFnRGF0YS52YWx1ZSA/IHRhZ0RhdGEudmFsdWUgOiAnJykgKyAnPC9hPic7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGh0bWwgKz0gJyAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LW11dGVkIGZvbnQtd2VpZ2h0LWJvbGRcIj4nICsgKHRhZ0RhdGEuZW1haWwgPyB0YWdEYXRhLmVtYWlsIDogJycpICsgJzwvc3Bhbj4nO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBodG1sICs9ICcgICAgICAgPC9kaXY+JztcclxuICAgICAgICAgICAgICAgICAgICAgICAgaHRtbCArPSAnICAgPC9kaXY+JztcclxuICAgICAgICAgICAgICAgICAgICAgICAgaHRtbCArPSAnPC9kaXY+JztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBodG1sO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge31cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdHJhbnNmb3JtVGFnOiBmdW5jdGlvbih0YWdEYXRhKSB7XHJcbiAgICAgICAgICAgICAgICB0YWdEYXRhLmNsYXNzID0gJ3RhZ2lmeV9fdGFnIHRhZ2lmeV9fdGFnLS1wcmltYXJ5JztcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZHJvcGRvd246IHtcclxuICAgICAgICAgICAgICAgIGNsYXNzbmFtZTogXCJjb2xvci1ibHVlXCIsXHJcbiAgICAgICAgICAgICAgICBlbmFibGVkOiAxLFxyXG4gICAgICAgICAgICAgICAgbWF4SXRlbXM6IDVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBDQyBpbnB1dCBzaG93XHJcbiAgICAgICAgS1RVdGlsLm9uKGZvcm1FbCwgJ1tkYXRhLWluYm94PVwiY2Mtc2hvd1wiXScsICdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgdmFyIGlucHV0RWwgPSBLVFV0aWwuZmluZChmb3JtRWwsICcuaW5ib3gtdG8tY2MnKTtcclxuICAgICAgICAgICAgS1RVdGlsLnJlbW92ZUNsYXNzKGlucHV0RWwsICdkLW5vbmUnKTtcclxuICAgICAgICAgICAgS1RVdGlsLmFkZENsYXNzKGlucHV0RWwsICdkLWZsZXgnKTtcclxuICAgICAgICAgICAgS1RVdGlsLmZpbmQoZm9ybUVsLCBcIltuYW1lPWNvbXBvc2VfY2NdXCIpLmZvY3VzKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIENDIGlucHV0IGhpZGVcclxuICAgICAgICBLVFV0aWwub24oZm9ybUVsLCAnW2RhdGEtaW5ib3g9XCJjYy1oaWRlXCJdJywgJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICB2YXIgaW5wdXRFbCA9IEtUVXRpbC5maW5kKGZvcm1FbCwgJy5pbmJveC10by1jYycpO1xyXG4gICAgICAgICAgICBLVFV0aWwucmVtb3ZlQ2xhc3MoaW5wdXRFbCwgJ2QtZmxleCcpO1xyXG4gICAgICAgICAgICBLVFV0aWwuYWRkQ2xhc3MoaW5wdXRFbCwgJ2Qtbm9uZScpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBCQ0MgaW5wdXQgc2hvd1xyXG4gICAgICAgIEtUVXRpbC5vbihmb3JtRWwsICdbZGF0YS1pbmJveD1cImJjYy1zaG93XCJdJywgJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICB2YXIgaW5wdXRFbCA9IEtUVXRpbC5maW5kKGZvcm1FbCwgJy5pbmJveC10by1iY2MnKTtcclxuICAgICAgICAgICAgS1RVdGlsLnJlbW92ZUNsYXNzKGlucHV0RWwsICdkLW5vbmUnKTtcclxuICAgICAgICAgICAgS1RVdGlsLmFkZENsYXNzKGlucHV0RWwsICdkLWZsZXgnKTtcclxuICAgICAgICAgICAgS1RVdGlsLmZpbmQoZm9ybUVsLCBcIltuYW1lPWNvbXBvc2VfYmNjXVwiKS5mb2N1cygpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBCQ0MgaW5wdXQgaGlkZVxyXG4gICAgICAgIEtUVXRpbC5vbihmb3JtRWwsICdbZGF0YS1pbmJveD1cImJjYy1oaWRlXCJdJywgJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICB2YXIgaW5wdXRFbCA9IEtUVXRpbC5maW5kKGZvcm1FbCwgJy5pbmJveC10by1iY2MnKTtcclxuICAgICAgICAgICAgS1RVdGlsLnJlbW92ZUNsYXNzKGlucHV0RWwsICdkLWZsZXgnKTtcclxuICAgICAgICAgICAgS1RVdGlsLmFkZENsYXNzKGlucHV0RWwsICdkLW5vbmUnKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgX2luaXRBdHRhY2htZW50cyA9IGZ1bmN0aW9uKGVsZW1JZCkge1xyXG4gICAgICAgIHZhciBpZCA9IFwiI1wiICsgZWxlbUlkO1xyXG4gICAgICAgIHZhciBwcmV2aWV3Tm9kZSA9ICQoaWQgKyBcIiAuZHJvcHpvbmUtaXRlbVwiKTtcclxuICAgICAgICBwcmV2aWV3Tm9kZS5pZCA9IFwiXCI7XHJcbiAgICAgICAgdmFyIHByZXZpZXdUZW1wbGF0ZSA9IHByZXZpZXdOb2RlLnBhcmVudCgnLmRyb3B6b25lLWl0ZW1zJykuaHRtbCgpO1xyXG4gICAgICAgIHByZXZpZXdOb2RlLnJlbW92ZSgpO1xyXG5cclxuICAgICAgICB2YXIgbXlEcm9wem9uZSA9IG5ldyBEcm9wem9uZShpZCwgeyAvLyBNYWtlIHRoZSB3aG9sZSBib2R5IGEgZHJvcHpvbmVcclxuICAgICAgICAgICAgdXJsOiBcImh0dHBzOi8va2VlbnRoZW1lcy5jb20vc2NyaXB0cy92b2lkLnBocFwiLCAvLyBTZXQgdGhlIHVybCBmb3IgeW91ciB1cGxvYWQgc2NyaXB0IGxvY2F0aW9uXHJcbiAgICAgICAgICAgIHBhcmFsbGVsVXBsb2FkczogMjAsXHJcbiAgICAgICAgICAgIG1heEZpbGVzaXplOiAxLCAvLyBNYXggZmlsZXNpemUgaW4gTUJcclxuICAgICAgICAgICAgcHJldmlld1RlbXBsYXRlOiBwcmV2aWV3VGVtcGxhdGUsXHJcbiAgICAgICAgICAgIHByZXZpZXdzQ29udGFpbmVyOiBpZCArIFwiIC5kcm9wem9uZS1pdGVtc1wiLCAvLyBEZWZpbmUgdGhlIGNvbnRhaW5lciB0byBkaXNwbGF5IHRoZSBwcmV2aWV3c1xyXG4gICAgICAgICAgICBjbGlja2FibGU6IGlkICsgXCJfc2VsZWN0XCIgLy8gRGVmaW5lIHRoZSBlbGVtZW50IHRoYXQgc2hvdWxkIGJlIHVzZWQgYXMgY2xpY2sgdHJpZ2dlciB0byBzZWxlY3QgZmlsZXMuXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIG15RHJvcHpvbmUub24oXCJhZGRlZGZpbGVcIiwgZnVuY3Rpb24oZmlsZSkge1xyXG4gICAgICAgICAgICAvLyBIb29rdXAgdGhlIHN0YXJ0IGJ1dHRvblxyXG4gICAgICAgICAgICAkKGRvY3VtZW50KS5maW5kKGlkICsgJyAuZHJvcHpvbmUtaXRlbScpLmNzcygnZGlzcGxheScsICcnKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gVXBkYXRlIHRoZSB0b3RhbCBwcm9ncmVzcyBiYXJcclxuICAgICAgICBteURyb3B6b25lLm9uKFwidG90YWx1cGxvYWRwcm9ncmVzc1wiLCBmdW5jdGlvbihwcm9ncmVzcykge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGlkICsgXCIgLnByb2dyZXNzLWJhclwiKS5zdHlsZS53aWR0aCA9IHByb2dyZXNzICsgXCIlXCI7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIG15RHJvcHpvbmUub24oXCJzZW5kaW5nXCIsIGZ1bmN0aW9uKGZpbGUpIHtcclxuICAgICAgICAgICAgLy8gU2hvdyB0aGUgdG90YWwgcHJvZ3Jlc3MgYmFyIHdoZW4gdXBsb2FkIHN0YXJ0c1xyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGlkICsgXCIgLnByb2dyZXNzLWJhclwiKS5zdHlsZS5vcGFjaXR5ID0gXCIxXCI7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIEhpZGUgdGhlIHRvdGFsIHByb2dyZXNzIGJhciB3aGVuIG5vdGhpbmcncyB1cGxvYWRpbmcgYW55bW9yZVxyXG4gICAgICAgIG15RHJvcHpvbmUub24oXCJjb21wbGV0ZVwiLCBmdW5jdGlvbihwcm9ncmVzcykge1xyXG4gICAgICAgICAgICB2YXIgdGhpc1Byb2dyZXNzQmFyID0gaWQgKyBcIiAuZHotY29tcGxldGVcIjtcclxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICQodGhpc1Byb2dyZXNzQmFyICsgXCIgLnByb2dyZXNzLWJhciwgXCIgKyB0aGlzUHJvZ3Jlc3NCYXIgKyBcIiAucHJvZ3Jlc3NcIikuY3NzKCdvcGFjaXR5JywgJzAnKTtcclxuICAgICAgICAgICAgfSwgMzAwKVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFB1YmxpYyBtZXRob2RzXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIC8vIFB1YmxpYyBmdW5jdGlvbnNcclxuICAgICAgICBpbml0OiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgLy8gSW5pdCB2YXJpYWJsZXNcclxuICAgICAgICAgICAgX2FzaWRlRWwgPSBLVFV0aWwuZ2V0QnlJZCgna3RfaW5ib3hfYXNpZGUnKTtcclxuICAgICAgICAgICAgX2xpc3RFbCA9IEtUVXRpbC5nZXRCeUlkKCdrdF9pbmJveF9saXN0Jyk7XHJcbiAgICAgICAgICAgIF92aWV3RWwgPSBLVFV0aWwuZ2V0QnlJZCgna3RfaW5ib3hfdmlldycpO1xyXG4gICAgICAgICAgICBfY29tcG9zZUVsID0gS1RVdGlsLmdldEJ5SWQoJ2t0X2luYm94X2NvbXBvc2UnKTtcclxuICAgICAgICAgICAgX3JlcGx5RWwgPSBLVFV0aWwuZ2V0QnlJZCgna3RfaW5ib3hfcmVwbHknKTtcclxuXHJcbiAgICAgICAgICAgIC8vIEluaXQgaGFuZGxlcnNcclxuICAgICAgICAgICAgS1RBcHBJbmJveC5pbml0QXNpZGUoKTtcclxuICAgICAgICAgICAgS1RBcHBJbmJveC5pbml0TGlzdCgpO1xyXG4gICAgICAgICAgICBLVEFwcEluYm94LmluaXRWaWV3KCk7XHJcbiAgICAgICAgICAgIEtUQXBwSW5ib3guaW5pdFJlcGx5KCk7XHJcbiAgICAgICAgICAgIEtUQXBwSW5ib3guaW5pdENvbXBvc2UoKTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBpbml0QXNpZGU6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAvLyBNb2JpbGUgb2ZmY2FudmFzIGZvciBtb2JpbGUgbW9kZVxyXG4gICAgICAgICAgICBfYXNpZGVPZmZjYW52YXMgPSBuZXcgS1RPZmZjYW52YXMoX2FzaWRlRWwsIHtcclxuICAgICAgICAgICAgICAgIG92ZXJsYXk6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBiYXNlQ2xhc3M6ICdvZmZjYW52YXMtbW9iaWxlJyxcclxuICAgICAgICAgICAgICAgIC8vY2xvc2VCeTogJ2t0X2luYm94X2FzaWRlX2Nsb3NlJyxcclxuICAgICAgICAgICAgICAgIHRvZ2dsZUJ5OiAna3Rfc3ViaGVhZGVyX21vYmlsZV90b2dnbGUnXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgLy8gVmlldyBsaXN0XHJcbiAgICAgICAgICAgIEtUVXRpbC5vbihfYXNpZGVFbCwgJy5saXN0LWl0ZW1bZGF0YS1hY3Rpb249XCJsaXN0XCJdJywgJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHR5cGUgPSBLVFV0aWwuYXR0cih0aGlzLCAnZGF0YS10eXBlJyk7XHJcbiAgICAgICAgICAgICAgICB2YXIgbGlzdEl0ZW1zRWwgPSBLVFV0aWwuZmluZChfbGlzdEVsLCAnLmt0LWluYm94X19pdGVtcycpO1xyXG4gICAgICAgICAgICAgICAgdmFyIG5hdkl0ZW1FbCA9IHRoaXMuY2xvc2VzdCgnLmt0LW5hdl9faXRlbScpO1xyXG4gICAgICAgICAgICAgICAgdmFyIG5hdkl0ZW1BY3RpdmVFbCA9IEtUVXRpbC5maW5kKF9hc2lkZUVsLCAnLmt0LW5hdl9faXRlbS5rdC1uYXZfX2l0ZW0tLWFjdGl2ZScpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIGRlbW8gbG9hZGluZ1xyXG4gICAgICAgICAgICAgICAgdmFyIGxvYWRpbmcgPSBuZXcgS1REaWFsb2coe1xyXG4gICAgICAgICAgICAgICAgICAgICd0eXBlJzogJ2xvYWRlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3BsYWNlbWVudCc6ICd0b3AgY2VudGVyJyxcclxuICAgICAgICAgICAgICAgICAgICAnbWVzc2FnZSc6ICdMb2FkaW5nIC4uLidcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgbG9hZGluZy5zaG93KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICBsb2FkaW5nLmhpZGUoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgS1RVdGlsLmNzcyhfbGlzdEVsLCAnZGlzcGxheScsICdmbGV4Jyk7IC8vIHNob3cgbGlzdFxyXG4gICAgICAgICAgICAgICAgICAgIEtUVXRpbC5jc3MoX3ZpZXdFbCwgJ2Rpc3BsYXknLCAnbm9uZScpOyAvLyBoaWRlIHZpZXdcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgS1RVdGlsLmFkZENsYXNzKG5hdkl0ZW1FbCwgJ2t0LW5hdl9faXRlbS0tYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgS1RVdGlsLnJlbW92ZUNsYXNzKG5hdkl0ZW1BY3RpdmVFbCwgJ2t0LW5hdl9faXRlbS0tYWN0aXZlJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIEtUVXRpbC5hdHRyKGxpc3RJdGVtc0VsLCAnZGF0YS10eXBlJywgdHlwZSk7XHJcbiAgICAgICAgICAgICAgICB9LCA2MDApO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBpbml0TGlzdDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIC8vIFZpZXcgbWVzc2FnZVxyXG4gICAgICAgICAgICBLVFV0aWwub24oX2xpc3RFbCwgJ1tkYXRhLWluYm94PVwibWVzc2FnZVwiXScsICdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgICAgIHZhciBhY3Rpb25zRWwgPSBLVFV0aWwuZmluZCh0aGlzLCAnW2RhdGEtaW5ib3g9XCJhY3Rpb25zXCJdJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gc2tpcCBhY3Rpb25zIGNsaWNrXHJcbiAgICAgICAgICAgICAgICBpZiAoZS50YXJnZXQgPT09IGFjdGlvbnNFbCB8fCAoYWN0aW9uc0VsICYmIGFjdGlvbnNFbC5jb250YWlucyhlLnRhcmdldCkgPT09IHRydWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vIERlbW8gbG9hZGluZ1xyXG4gICAgICAgICAgICAgICAgdmFyIGxvYWRpbmcgPSBuZXcgS1REaWFsb2coe1xyXG4gICAgICAgICAgICAgICAgICAgICd0eXBlJzogJ2xvYWRlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3BsYWNlbWVudCc6ICd0b3AgY2VudGVyJyxcclxuICAgICAgICAgICAgICAgICAgICAnbWVzc2FnZSc6ICdMb2FkaW5nIC4uLidcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgbG9hZGluZy5zaG93KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICBsb2FkaW5nLmhpZGUoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgS1RVdGlsLmFkZENsYXNzKF9saXN0RWwsICdkLW5vbmUnKTtcclxuICAgICAgICAgICAgICAgICAgICBLVFV0aWwucmVtb3ZlQ2xhc3MoX2xpc3RFbCwgJ2QtYmxvY2snKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgS1RVdGlsLmFkZENsYXNzKF92aWV3RWwsICdkLWJsb2NrJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgS1RVdGlsLnJlbW92ZUNsYXNzKF92aWV3RWwsICdkLW5vbmUnKTtcclxuICAgICAgICAgICAgICAgIH0sIDcwMCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgLy8gR3JvdXAgc2VsZWN0aW9uXHJcbiAgICAgICAgICAgIEtUVXRpbC5vbihfbGlzdEVsLCAnW2RhdGEtaW5ib3g9XCJncm91cC1zZWxlY3RcIl0gaW5wdXQnLCAnY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHZhciBtZXNzYWdlcyA9IEtUVXRpbC5maW5kQWxsKF9saXN0RWwsICdbZGF0YS1pbmJveD1cIm1lc3NhZ2VcIl0nKTtcclxuXHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgaiA9IG1lc3NhZ2VzLmxlbmd0aDsgaSA8IGo7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBtZXNzYWdlID0gbWVzc2FnZXNbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNoZWNrYm94ID0gS1RVdGlsLmZpbmQobWVzc2FnZSwgJy5jaGVja2JveCBpbnB1dCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrYm94LmNoZWNrZWQgPSB0aGlzLmNoZWNrZWQ7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmNoZWNrZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgS1RVdGlsLmFkZENsYXNzKG1lc3NhZ2UsICdhY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBLVFV0aWwucmVtb3ZlQ2xhc3MobWVzc2FnZSwgJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAvLyBJbmRpdmlkdWFsIHNlbGVjdGlvblxyXG4gICAgICAgICAgICBLVFV0aWwub24oX2xpc3RFbCwgJ1tkYXRhLWluYm94PVwibWVzc2FnZVwiXSBbZGF0YS1pbmJveD1cImFjdGlvbnNcIl0gLmNoZWNrYm94IGlucHV0JywgJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgaXRlbSA9IHRoaXMuY2xvc2VzdCgnW2RhdGEtaW5ib3g9XCJtZXNzYWdlXCJdJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0gJiYgdGhpcy5jaGVja2VkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgS1RVdGlsLmFkZENsYXNzKGl0ZW0sICdhY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgS1RVdGlsLnJlbW92ZUNsYXNzKGl0ZW0sICdhY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgaW5pdFZpZXc6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAvLyBCYWNrIHRvIGxpc3RpbmdcclxuICAgICAgICAgICAgS1RVdGlsLm9uKF92aWV3RWwsICdbZGF0YS1pbmJveD1cImJhY2tcIl0nLCAnY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIC8vIGRlbW8gbG9hZGluZ1xyXG4gICAgICAgICAgICAgICAgdmFyIGxvYWRpbmcgPSBuZXcgS1REaWFsb2coe1xyXG4gICAgICAgICAgICAgICAgICAgICd0eXBlJzogJ2xvYWRlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3BsYWNlbWVudCc6ICd0b3AgY2VudGVyJyxcclxuICAgICAgICAgICAgICAgICAgICAnbWVzc2FnZSc6ICdMb2FkaW5nIC4uLidcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGxvYWRpbmcuc2hvdygpO1xyXG5cclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbG9hZGluZy5oaWRlKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIEtUVXRpbC5hZGRDbGFzcyhfbGlzdEVsLCAnZC1ibG9jaycpO1xyXG4gICAgICAgICAgICAgICAgICAgIEtUVXRpbC5yZW1vdmVDbGFzcyhfbGlzdEVsLCAnZC1ub25lJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIEtUVXRpbC5hZGRDbGFzcyhfdmlld0VsLCAnZC1ub25lJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgS1RVdGlsLnJlbW92ZUNsYXNzKF92aWV3RWwsICdkLWJsb2NrJyk7XHJcbiAgICAgICAgICAgICAgICB9LCA3MDApO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIC8vIEV4cGFuZC9Db2xsYXBzZSByZXBseVxyXG4gICAgICAgICAgICBLVFV0aWwub24oX3ZpZXdFbCwgJ1tkYXRhLWluYm94PVwibWVzc2FnZVwiXScsICdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgICAgIHZhciBtZXNzYWdlID0gdGhpcy5jbG9zZXN0KCdbZGF0YS1pbmJveD1cIm1lc3NhZ2VcIl0nKTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgZHJvcGRvd25Ub2dnbGVFbCA9IEtUVXRpbC5maW5kKHRoaXMsICdbZGF0YS10b2dnbGU9XCJkcm9wZG93blwiXScpO1xyXG4gICAgICAgICAgICAgICAgdmFyIHRvb2xiYXJFbCA9IEtUVXRpbC5maW5kKHRoaXMsICdbZGF0YS1pbmJveD1cInRvb2xiYXJcIl0nKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBza2lwIGRyb3Bkb3duIHRvZ2dsZSBjbGlja1xyXG4gICAgICAgICAgICAgICAgaWYgKGUudGFyZ2V0ID09PSBkcm9wZG93blRvZ2dsZUVsIHx8IChkcm9wZG93blRvZ2dsZUVsICYmIGRyb3Bkb3duVG9nZ2xlRWwuY29udGFpbnMoZS50YXJnZXQpID09PSB0cnVlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvLyBza2lwIGdyb3VwIGFjdGlvbnMgY2xpY2tcclxuICAgICAgICAgICAgICAgIGlmIChlLnRhcmdldCA9PT0gdG9vbGJhckVsIHx8ICh0b29sYmFyRWwgJiYgdG9vbGJhckVsLmNvbnRhaW5zKGUudGFyZ2V0KSA9PT0gdHJ1ZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKEtUVXRpbC5oYXNDbGFzcyhtZXNzYWdlLCAndG9nZ2xlLW9uJykpIHtcclxuICAgICAgICAgICAgICAgICAgICBLVFV0aWwuYWRkQ2xhc3MobWVzc2FnZSwgJ3RvZ2dsZS1vZmYnKTtcclxuICAgICAgICAgICAgICAgICAgICBLVFV0aWwucmVtb3ZlQ2xhc3MobWVzc2FnZSwgJ3RvZ2dsZS1vbicpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBLVFV0aWwucmVtb3ZlQ2xhc3MobWVzc2FnZSwgJ3RvZ2dsZS1vZmYnKTtcclxuICAgICAgICAgICAgICAgICAgICBLVFV0aWwuYWRkQ2xhc3MobWVzc2FnZSwgJ3RvZ2dsZS1vbicpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBpbml0UmVwbHk6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBfaW5pdEVkaXRvcihfcmVwbHlFbCwgJ2t0X2luYm94X3JlcGx5X2VkaXRvcicpO1xyXG4gICAgICAgICAgICBfaW5pdEF0dGFjaG1lbnRzKCdrdF9pbmJveF9yZXBseV9hdHRhY2htZW50cycpO1xyXG4gICAgICAgICAgICBfaW5pdEZvcm0oJ2t0X2luYm94X3JlcGx5X2Zvcm0nKTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBpbml0Q29tcG9zZTogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIF9pbml0RWRpdG9yKF9jb21wb3NlRWwsICdrdF9pbmJveF9jb21wb3NlX2VkaXRvcicpO1xyXG4gICAgICAgICAgICBfaW5pdEF0dGFjaG1lbnRzKCdrdF9pbmJveF9jb21wb3NlX2F0dGFjaG1lbnRzJyk7XHJcbiAgICAgICAgICAgIF9pbml0Rm9ybSgna3RfaW5ib3hfY29tcG9zZV9mb3JtJyk7XHJcblxyXG4gICAgICAgICAgICAvLyBSZW1vdmUgcmVwbHkgZm9ybVxyXG4gICAgICAgICAgICBLVFV0aWwub24oX2NvbXBvc2VFbCwgJ1tkYXRhLWluYm94PVwiZGlzbWlzc1wiXScsICdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgICAgIHN3YWwuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogXCJBcmUgeW91IHN1cmUgdG8gZGlzY2FyZCB0aGlzIG1lc3NhZ2UgP1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiZGFuZ2VyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiBcIkRpc2NhcmQgZHJhZnRcIixcclxuICAgICAgICAgICAgICAgICAgICBjb25maXJtQnV0dG9uQ2xhc3M6IFwiYnRuIGJ0bi1kYW5nZXJcIixcclxuICAgICAgICAgICAgICAgICAgICBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiQ2FuY2VsXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY2FuY2VsQnV0dG9uQ2xhc3M6IFwiYnRuIGJ0bi1saWdodC1wcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgIH0pLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJChfY29tcG9zZUVsKS5tb2RhbCgnaGlkZScpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn0oKTtcclxuXHJcbi8vIENsYXNzIEluaXRpYWxpemF0aW9uXHJcbmpRdWVyeShkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcbiAgICBLVEFwcEluYm94LmluaXQoKTtcclxufSk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=