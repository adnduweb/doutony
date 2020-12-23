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
/******/ 	return __webpack_require__(__webpack_require__.s = 44);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/metronic/js/pages/custom/medias/imageManager.js":
/*!*******************************************************************!*\
  !*** ./resources/metronic/js/pages/custom/medias/imageManager.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

Dropzone.autoDiscover = false;
Dropzone.prototype.defaultOptions.dictDefaultMessage = _LANG_.dictDefaultMessage;
Dropzone.prototype.defaultOptions.dictFallbackMessage = _LANG_.dictFallbackMessage;
Dropzone.prototype.defaultOptions.dictFallbackText = _LANG_.dictFallbackText;
Dropzone.prototype.defaultOptions.dictFileTooBig = _LANG_.dictFileTooBig;
Dropzone.prototype.defaultOptions.dictInvalidFileType = _LANG_.dictInvalidFileType;
Dropzone.prototype.defaultOptions.dictResponseError = _LANG_.dictResponseError;
Dropzone.prototype.defaultOptions.dictCancelUpload = _LANG_.dictCancelUpload;
Dropzone.prototype.defaultOptions.dictCancelUploadConfirmation = _LANG_.dictCancelUploadConfirmation;
Dropzone.prototype.defaultOptions.dictRemoveFile = _LANG_.dictRemoveFile;
Dropzone.prototype.defaultOptions.dictMaxFilesExceeded = _LANG_.dictMaxFilesExceeded;
Dropzone.options.dzone = {
  acceptedFiles: "image/jpeg,image/png,image/gif"
};
$(function () {
  var filesDropzone = new Dropzone("#kt_dropzone_media_manager", {
    url: current_url + "/upload?time=" + $.now(),
    headers: {
      'X-CSRF-TOKEN': $('meta[name="X-CSRF-TOKEN"]').attr('content'),
      'X-Requested-With': 'XMLHttpRequest'
    },
    params: function params(files, xhr, chunk) {
      if (chunk) {
        return {
          dzUuid: chunk.file.upload.uuid,
          dzChunkIndex: chunk.index,
          dzTotalFileSize: chunk.file.size,
          dzCurrentChunkSize: chunk.dataBlock.data.size,
          dzTotalChunkCount: chunk.file.upload.totalChunkCount,
          dzChunkByteOffset: chunk.index * this.options.chunkSize,
          dzChunkSize: this.options.chunkSize,
          dzFilename: chunk.file.name,
          userID: 1
        };
      }
    },
    acceptedFiles: "image/jpeg,image/png,image/gif",
    uploadmultiple: true,
    addRemoveLinks: !0,
    timeout: 0,
    // parallelUploads: 1, // since we're using a global 'currentFile', we could have issues if parallelUploads > 1, so we'll make it = 1
    maxFilesize: Medias.maxFilesize,
    // max individual file size 1024 MB
    chunking: true,
    // enable chunking
    forceChunking: true,
    // forces chunking when file.size < chunkSize
    // parallelChunkUploads: true, // allows chunks to be uploaded in parallel (this is independent of the parallelUploads option)
    chunkSize: 75387608,
    // chunk size 1,000,000 bytes (~1MB)
    retryChunks: true,
    // retry chunks on failure
    retryChunksLimit: 3,
    // retry maximum of 3 times (default is 3)
    init: function init() {
      this.on("addedfile", function (file) {
        console.log('addedfile'); //this.removeFile(file);
      });
      this.on("complete", function (file) {
        console.log('complete');
        $.ajax({
          type: 'GET',
          url: current_url + "/getDisplayImageManager",
          contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
          data: _defineProperty({}, crsftoken, $('meta[name="X-CSRF-TOKEN"]').attr('content')),
          dataType: "json",
          success: function success(response, status, xhr) {
            console.log(response);
            $('#imageManager').html(response.html);
          }
        });
      });
      this.on('success', function (file, response) {
        console.log('success');

        if (file.previewElement) {
          return file.previewElement.classList.add("dz-success"), $(function () {
            setTimeout(function () {
              $('.dz-success').fadeOut('slow');
            }, 2500);
          });
        }
      });
      this.on("sending", function (file, xhr, formData) {
        KTApp.block("#imageManager", {
          overlayColor: "#000000",
          state: "primary"
        });
      });
      this.on("queuecomplete", function (file, res) {
        console.log(filesDropzone);

        if (filesDropzone.files[0].status == Dropzone.SUCCESS) {
          $.notify({
            title: _LANG_.updated + "!",
            message: _LANG_.saved_data
          }, {
            type: 'success'
          });
          KTApp.unblock("#imageManager");
          $('.dz-success').fadeOut('slow');
          $('.dz-message').fadeIn('slow'); //this.removeAllFiles();
          // if (imageManager == 'reload') {
          //     KTApp.unblock("#imageManager");
          //     $('#imageManager').html(result.html);
          // }
        }
      });
      this.on("error", function (file, response, xhr) {
        console.log('errored', file, response, xhr); // for debugging

        if (typeof xhr !== 'undefined') {
          this.defaultOptions.error(file, xhr.statusText); // use xhr err (from server)
        } else {
          this.defaultOptions.error(file, response); // use default (from dropzone)
        }

        $.notify({
          title: _LANG_.error + " : 500 ",
          message: response.error.message
        }, {
          type: 'warning'
        });
      });
      this.on("removedfile", function (file, response, xhr) {
        console.log('removedfile', file, response, xhr); // for debugging

        $.ajax({
          type: 'GET',
          url: current_url + "/removedfile/" + file.upload.uuid,
          contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
          data: _defineProperty({}, crsftoken, $('meta[name="X-CSRF-TOKEN"]').attr('content')),
          dataType: "json",
          success: function success(result, status, xhr) {
            console.log(response);
          }
        });
      });
    }
  }); // Display manager Image

  $(document).on('click', '.select-image', function (e) {
    var _data3;

    e.preventDefault();
    console.log(e);
    var uuidMedia = $(this).data("uuid-media");
    $.ajax({
      type: 'POST',
      url: current_url + "/getManagerEdition",
      contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
      data: (_data3 = {}, _defineProperty(_data3, crsftoken, $('meta[name="X-CSRF-TOKEN"]').attr('content')), _defineProperty(_data3, "value", {
        uuid: uuidMedia
      }), _data3),
      dataType: "json",
      success: function success(result, status, xhr) {
        if (xhr.status == 200) {
          $('#imageManager_edition').html(result.html);
          $('#imageManager_edition > #kt_modal_manager_edition').modal("show");
        }
      }
    });
  }); // Save data Image

  $(document).on('submit', '#kt_apps_manager_media', function (event) {
    var _data4;

    event.preventDefault();
    $.ajax({
      type: 'POST',
      url: current_url + "/saveManagerEdition",
      contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
      data: (_data4 = {}, _defineProperty(_data4, crsftoken, $('meta[name="X-CSRF-TOKEN"]').attr('content')), _defineProperty(_data4, "value", $(this).serialize()), _data4),
      dataType: "json",
      success: function success(result, status, xhr) {
        $.notify({
          title: result.success.message ? _LANG_.updated + "!" : _LANG_.warning + "!",
          message: result.success.message ? result.success.message : result.error.message
        }, {
          type: result.success.message ? 'success' : 'warning'
        });
      }
    });
  }); // Delete File

  $(document).on('click', '.deleteFileMedia', function (event) {
    var _data5;

    event.preventDefault();
    var imageManager = $(this).data('imagemanager');
    $.ajax({
      type: 'POST',
      url: current_url + "/removeFile",
      data: (_data5 = {}, _defineProperty(_data5, crsftoken, $('meta[name="X-CSRF-TOKEN"]').attr('content')), _defineProperty(_data5, "uuid", $(this).data('uuid')), _data5),
      dataType: "json",
      beforeSend: function beforeSend(xhr) {
        KTApp.block("#imageManager", {
          overlayColor: "#000000",
          state: "primary"
        });
      },
      success: function success(result, status, xhr) {
        $.notify({
          title: result.success.message ? _LANG_.updated + "!" : _LANG_.warning + "!",
          message: result.success.message ? result.success.message : result.error.message
        }, {
          type: result.success.message ? 'success' : 'warning'
        });

        if (xhr.status == 200) {
          $('#imageManager_edition #kt_modal_manager_edition').modal("hide");
          $('.modal-backdrop').remove();
          $('#imageManager_edition').html("");

          if (imageManager == 'reload') {
            KTApp.unblock("#imageManager");
            $('#imageManager').html(result.html);
          }
        }
      }
    });
  });
}); // ON crop le fichier demnandé
//croppedFile

$(document).on('click', '#kt_apps_manager_media .croppedFile', function (event) {
  var _data6;

  var uuid = $(this).data('uuid');
  $.ajax({
    type: 'POST',
    url: current_url + "/getCropTemplate",
    data: (_data6 = {}, _defineProperty(_data6, crsftoken, $('meta[name="X-CSRF-TOKEN"]').attr('content')), _defineProperty(_data6, "uuid", $(this).data('uuid')), _data6),
    dataType: "json",
    beforeSend: function beforeSend(xhr) {
      KTApp.block(".thumbnail-image", {
        overlayColor: "#000000",
        state: "primary"
      });
    },
    success: function success(response, status, xhr) {
      if (xhr.status == 200) {
        KTApp.unblock(".thumbnail-image");

        if (response.crop == true) {
          $('.attachment-media-view').fadeOut();
          $('#cropImage').html(response.cropImage);
          $('#cropImage').fadeIn();
          KTCropper.init();
          KTApp.initTooltips();
        }
      }
    }
  });
});
$(document).on('click', '#kt_modal_manager_edition .cancelCrop', function (event) {
  event.preventDefault();
  $('#cropImage').fadeOut();
  $('#cropImage').html('');
  $('.attachment-media-view').fadeIn();
});
"use strict";

var KTCropper = {
  init: function init() {
    var e, t, a;
    e = document.getElementById("image-upload"), t = {
      crop: function crop(e) {
        document.getElementById("dataX").value = Math.round(e.detail.x), document.getElementById("dataY").value = Math.round(e.detail.y), document.getElementById("dataWidth").value = Math.round(e.detail.width), document.getElementById("dataHeight").value = Math.round(e.detail.height), document.getElementById("dataRotate").value = e.detail.rotate, document.getElementById("dataScaleX").value = e.detail.scaleX, document.getElementById("dataScaleY").value = e.detail.scaleY;
        var t = document.getElementById("cropper-preview-lg");
        t.innerHTML = "", t.appendChild(a.getCroppedCanvas({
          width: 256,
          height: 160
        }));
        var n = document.getElementById("cropper-preview-md");
        n.innerHTML = "", n.appendChild(a.getCroppedCanvas({
          width: 128,
          height: 80
        }));
        var d = document.getElementById("cropper-preview-sm");
        d.innerHTML = "", d.appendChild(a.getCroppedCanvas({
          width: 64,
          height: 40
        }));
        var o = document.getElementById("cropper-preview-xs");
        o.innerHTML = "", o.appendChild(a.getCroppedCanvas({
          width: 32,
          height: 20
        }));
      },
      cropmove: function cropmove(e) {
        console.log(e.type, e.detail.action);
      }
    }, a = new Cropper(e, t), document.getElementById("cropper-buttons").querySelectorAll("[data-method]").forEach(function (e) {
      e.addEventListener("click", function (t) {
        var n,
            d = e.getAttribute("data-method"),
            o = e.getAttribute("data-option") || undefined,
            r = e.getAttribute("data-second-option") || undefined;

        try {
          o = JSON.parse(o);
        } catch (t) {}

        if (n = r ? o ? '' : a[d]() : a[d](o, r), "getCroppedCanvas" === d) {// var i = document.getElementById("getCroppedCanvasModal").querySelector(".modal-body");
          // console.log(n);
          // i.innerHTML = "", i.appendChild(n)
        }

        if (e.getAttribute("data-method") == 'move') {
          a.move(e.getAttribute("data-option"), e.getAttribute("data-second-option"));
        }

        if (e.getAttribute("data-method") == 'getCroppedCanvas') {
          option = '';

          if (e.getAttribute("data-option") != "") {
            console.log(e.getAttribute("data-option"));
            option = JSON.parse(e.getAttribute("data-option"));
          }

          a.getCroppedCanvas(option).toBlob(function (blob) {
            var formData = new FormData(); // Pass the image file name as the third parameter if necessary.

            formData.append('uuid', $('#image-upload').attr('data-uuid'));
            formData.append('field', false);
            formData.append('imageCustomEdition', true);
            formData.append('croppedImage', blob, $('#image-upload').attr('data-mine'));
            formData.append([crsftoken], $('meta[name="X-CSRF-TOKEN"]').attr('content'));
            $.ajax({
              type: 'POST',
              url: current_url + "/cropFile",
              data: formData,
              processData: false,
              contentType: false,
              dataType: "json",
              success: function success(result, status, xhr) {
                $.notify({
                  title: result.success.message ? _LANG_.updated + "!" : _LANG_.warning + "!",
                  message: result.success.message ? result.success.message : result.error.message
                }, {
                  type: result.success.message ? 'success' : 'warning'
                });

                if (xhr.status == 200) {
                  $('#cropImage').fadeOut();
                  $('#cropImage').html('');
                  $('.attachment-media-view').fadeIn();
                  $('#imageCustom').html(result.imageCustomEdition);
                }
              }
            });
          }, $('#image-upload').attr('data-mine'));
        }

        var c = document.querySelector("#putData");

        try {
          c.value = JSON.stringify(n);
        } catch (t) {
          n || (c.value = n);
        }
      });
    }), document.getElementById("setAspectRatio").querySelectorAll('[name="aspectRatio"]').forEach(function (e) {
      e.addEventListener("click", function (e) {
        a.setAspectRatio(e.target.value);
      });
    });
  }
}; // on supprime les fichiers custom

$(document).on('click', '#kt_apps_manager_media .deleteFileCustom', function (event) {
  var _data7;

  event.preventDefault();
  var deleteFileCustom = $(this);
  $.ajax({
    type: 'POST',
    url: current_url + "/deteteFileCustom",
    data: (_data7 = {}, _defineProperty(_data7, crsftoken, $('meta[name="X-CSRF-TOKEN"]').attr('content')), _defineProperty(_data7, "format", $(this).data('format')), _defineProperty(_data7, "uuid", $(this).data('uuid')), _data7),
    dataType: "json",
    success: function success(result, status, xhr) {
      $.notify({
        title: result.success.message ? _LANG_.updated + "!" : _LANG_.warning + "!",
        message: result.success.message ? result.success.message : result.error.message
      }, {
        type: result.success.message ? 'success' : 'warning'
      });

      if (xhr.status == 200) {
        deleteFileCustom.parent().parent().remove();
      }
    }
  });
});

/***/ }),

/***/ 44:
/*!*************************************************************************!*\
  !*** multi ./resources/metronic/js/pages/custom/medias/imageManager.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Applications/MAMP/htdocs/spreadci4/public/admin/themes/metronic/resources/metronic/js/pages/custom/medias/imageManager.js */"./resources/metronic/js/pages/custom/medias/imageManager.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL21ldHJvbmljL2pzL3BhZ2VzL2N1c3RvbS9tZWRpYXMvaW1hZ2VNYW5hZ2VyLmpzIl0sIm5hbWVzIjpbIkRyb3B6b25lIiwiYXV0b0Rpc2NvdmVyIiwicHJvdG90eXBlIiwiZGVmYXVsdE9wdGlvbnMiLCJkaWN0RGVmYXVsdE1lc3NhZ2UiLCJfTEFOR18iLCJkaWN0RmFsbGJhY2tNZXNzYWdlIiwiZGljdEZhbGxiYWNrVGV4dCIsImRpY3RGaWxlVG9vQmlnIiwiZGljdEludmFsaWRGaWxlVHlwZSIsImRpY3RSZXNwb25zZUVycm9yIiwiZGljdENhbmNlbFVwbG9hZCIsImRpY3RDYW5jZWxVcGxvYWRDb25maXJtYXRpb24iLCJkaWN0UmVtb3ZlRmlsZSIsImRpY3RNYXhGaWxlc0V4Y2VlZGVkIiwib3B0aW9ucyIsImR6b25lIiwiYWNjZXB0ZWRGaWxlcyIsIiQiLCJmaWxlc0Ryb3B6b25lIiwidXJsIiwiY3VycmVudF91cmwiLCJub3ciLCJoZWFkZXJzIiwiYXR0ciIsInBhcmFtcyIsImZpbGVzIiwieGhyIiwiY2h1bmsiLCJkelV1aWQiLCJmaWxlIiwidXBsb2FkIiwidXVpZCIsImR6Q2h1bmtJbmRleCIsImluZGV4IiwiZHpUb3RhbEZpbGVTaXplIiwic2l6ZSIsImR6Q3VycmVudENodW5rU2l6ZSIsImRhdGFCbG9jayIsImRhdGEiLCJkelRvdGFsQ2h1bmtDb3VudCIsInRvdGFsQ2h1bmtDb3VudCIsImR6Q2h1bmtCeXRlT2Zmc2V0IiwiY2h1bmtTaXplIiwiZHpDaHVua1NpemUiLCJkekZpbGVuYW1lIiwibmFtZSIsInVzZXJJRCIsInVwbG9hZG11bHRpcGxlIiwiYWRkUmVtb3ZlTGlua3MiLCJ0aW1lb3V0IiwibWF4RmlsZXNpemUiLCJNZWRpYXMiLCJjaHVua2luZyIsImZvcmNlQ2h1bmtpbmciLCJyZXRyeUNodW5rcyIsInJldHJ5Q2h1bmtzTGltaXQiLCJpbml0Iiwib24iLCJjb25zb2xlIiwibG9nIiwiYWpheCIsInR5cGUiLCJjb250ZW50VHlwZSIsImNyc2Z0b2tlbiIsImRhdGFUeXBlIiwic3VjY2VzcyIsInJlc3BvbnNlIiwic3RhdHVzIiwiaHRtbCIsInByZXZpZXdFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwic2V0VGltZW91dCIsImZhZGVPdXQiLCJmb3JtRGF0YSIsIktUQXBwIiwiYmxvY2siLCJvdmVybGF5Q29sb3IiLCJzdGF0ZSIsInJlcyIsIlNVQ0NFU1MiLCJub3RpZnkiLCJ0aXRsZSIsInVwZGF0ZWQiLCJtZXNzYWdlIiwic2F2ZWRfZGF0YSIsInVuYmxvY2siLCJmYWRlSW4iLCJlcnJvciIsInN0YXR1c1RleHQiLCJyZXN1bHQiLCJkb2N1bWVudCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInV1aWRNZWRpYSIsIm1vZGFsIiwiZXZlbnQiLCJzZXJpYWxpemUiLCJ3YXJuaW5nIiwiaW1hZ2VNYW5hZ2VyIiwiYmVmb3JlU2VuZCIsInJlbW92ZSIsImNyb3AiLCJjcm9wSW1hZ2UiLCJLVENyb3BwZXIiLCJpbml0VG9vbHRpcHMiLCJ0IiwiYSIsImdldEVsZW1lbnRCeUlkIiwidmFsdWUiLCJNYXRoIiwicm91bmQiLCJkZXRhaWwiLCJ4IiwieSIsIndpZHRoIiwiaGVpZ2h0Iiwicm90YXRlIiwic2NhbGVYIiwic2NhbGVZIiwiaW5uZXJIVE1MIiwiYXBwZW5kQ2hpbGQiLCJnZXRDcm9wcGVkQ2FudmFzIiwibiIsImQiLCJvIiwiY3JvcG1vdmUiLCJhY3Rpb24iLCJDcm9wcGVyIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJhZGRFdmVudExpc3RlbmVyIiwiZ2V0QXR0cmlidXRlIiwidW5kZWZpbmVkIiwiciIsIkpTT04iLCJwYXJzZSIsIm1vdmUiLCJvcHRpb24iLCJ0b0Jsb2IiLCJibG9iIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJwcm9jZXNzRGF0YSIsImltYWdlQ3VzdG9tRWRpdGlvbiIsImMiLCJxdWVyeVNlbGVjdG9yIiwic3RyaW5naWZ5Iiwic2V0QXNwZWN0UmF0aW8iLCJ0YXJnZXQiLCJkZWxldGVGaWxlQ3VzdG9tIiwicGFyZW50Il0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7OztBQ2xGQUEsUUFBUSxDQUFDQyxZQUFULEdBQXdCLEtBQXhCO0FBQ0FELFFBQVEsQ0FBQ0UsU0FBVCxDQUFtQkMsY0FBbkIsQ0FBa0NDLGtCQUFsQyxHQUF1REMsTUFBTSxDQUFDRCxrQkFBOUQ7QUFDQUosUUFBUSxDQUFDRSxTQUFULENBQW1CQyxjQUFuQixDQUFrQ0csbUJBQWxDLEdBQXdERCxNQUFNLENBQUNDLG1CQUEvRDtBQUNBTixRQUFRLENBQUNFLFNBQVQsQ0FBbUJDLGNBQW5CLENBQWtDSSxnQkFBbEMsR0FBcURGLE1BQU0sQ0FBQ0UsZ0JBQTVEO0FBQ0FQLFFBQVEsQ0FBQ0UsU0FBVCxDQUFtQkMsY0FBbkIsQ0FBa0NLLGNBQWxDLEdBQW1ESCxNQUFNLENBQUNHLGNBQTFE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QzhGLE9BQVAsR0FBaUIsR0FEckU7QUFFTGQsZUFBTyxFQUFHTSxNQUFNLENBQUN6QixPQUFQLENBQWVtQixPQUFoQixHQUEyQk0sTUFBTSxDQUFDekIsT0FBUCxDQUFlbUIsT0FBMUMsR0FBb0RNLE1BQU0sQ0FBQ0YsS0FBUCxDQUFhSjtBQUZyRSxPQUFULEVBR0c7QUFDQ3ZCLFlBQUksRUFBRzZCLE1BQU0sQ0FBQ3pCLE9BQVAsQ0FBZW1CLE9BQWhCLEdBQTJCLFNBQTNCLEdBQXVDO0FBRDlDLE9BSEg7O0FBT0EsVUFBSTFELEdBQUcsQ0FBQ3lDLE1BQUosSUFBYyxHQUFsQixFQUF1QjtBQUNuQm1GLHdCQUFnQixDQUFDQyxNQUFqQixHQUEwQkEsTUFBMUIsR0FBbUNsRCxNQUFuQztBQUNIO0FBRUo7QUF2QkUsR0FBUDtBQXlCSCxDQS9CRCxFIiwiZmlsZSI6Ii9kZXZlbG9wbWVudC9qcy9wYWdlcy9jdXN0b20vbWVkaWFzL2ltYWdlTWFuYWdlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNDQpO1xuIiwiRHJvcHpvbmUuYXV0b0Rpc2NvdmVyID0gZmFsc2U7XG5Ecm9wem9uZS5wcm90b3R5cGUuZGVmYXVsdE9wdGlvbnMuZGljdERlZmF1bHRNZXNzYWdlID0gX0xBTkdfLmRpY3REZWZhdWx0TWVzc2FnZTtcbkRyb3B6b25lLnByb3RvdHlwZS5kZWZhdWx0T3B0aW9ucy5kaWN0RmFsbGJhY2tNZXNzYWdlID0gX0xBTkdfLmRpY3RGYWxsYmFja01lc3NhZ2U7XG5Ecm9wem9uZS5wcm90b3R5cGUuZGVmYXVsdE9wdGlvbnMuZGljdEZhbGxiYWNrVGV4dCA9IF9MQU5HXy5kaWN0RmFsbGJhY2tUZXh0O1xuRHJvcHpvbmUucHJvdG90eXBlLmRlZmF1bHRPcHRpb25zLmRpY3RGaWxlVG9vQmlnID0gX0xBTkdfLmRpY3RGaWxlVG9vQmlnO1xuRHJvcHpvbmUucHJvdG90eXBlLmRlZmF1bHRPcHRpb25zLmRpY3RJbnZhbGlkRmlsZVR5cGUgPSBfTEFOR18uZGljdEludmFsaWRGaWxlVHlwZTtcbkRyb3B6b25lLnByb3RvdHlwZS5kZWZhdWx0T3B0aW9ucy5kaWN0UmVzcG9uc2VFcnJvciA9IF9MQU5HXy5kaWN0UmVzcG9uc2VFcnJvcjtcbkRyb3B6b25lLnByb3RvdHlwZS5kZWZhdWx0T3B0aW9ucy5kaWN0Q2FuY2VsVXBsb2FkID0gX0xBTkdfLmRpY3RDYW5jZWxVcGxvYWQ7XG5Ecm9wem9uZS5wcm90b3R5cGUuZGVmYXVsdE9wdGlvbnMuZGljdENhbmNlbFVwbG9hZENvbmZpcm1hdGlvbiA9IF9MQU5HXy5kaWN0Q2FuY2VsVXBsb2FkQ29uZmlybWF0aW9uO1xuRHJvcHpvbmUucHJvdG90eXBlLmRlZmF1bHRPcHRpb25zLmRpY3RSZW1vdmVGaWxlID0gX0xBTkdfLmRpY3RSZW1vdmVGaWxlO1xuRHJvcHpvbmUucHJvdG90eXBlLmRlZmF1bHRPcHRpb25zLmRpY3RNYXhGaWxlc0V4Y2VlZGVkID0gX0xBTkdfLmRpY3RNYXhGaWxlc0V4Y2VlZGVkO1xuRHJvcHpvbmUub3B0aW9ucy5kem9uZSA9IHtcbiAgICBhY2NlcHRlZEZpbGVzOiBcImltYWdlL2pwZWcsaW1hZ2UvcG5nLGltYWdlL2dpZlwiXG59XG4kKGZ1bmN0aW9uKCkge1xuICAgIHZhciBmaWxlc0Ryb3B6b25lID0gbmV3IERyb3B6b25lKFwiI2t0X2Ryb3B6b25lX21lZGlhX21hbmFnZXJcIiwge1xuXG4gICAgICAgIHVybDogY3VycmVudF91cmwgKyBcIi91cGxvYWQ/dGltZT1cIiArICQubm93KCksXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICdYLUNTUkYtVE9LRU4nOiAkKCdtZXRhW25hbWU9XCJYLUNTUkYtVE9LRU5cIl0nKS5hdHRyKCdjb250ZW50JyksXG4gICAgICAgICAgICAnWC1SZXF1ZXN0ZWQtV2l0aCc6ICdYTUxIdHRwUmVxdWVzdCdcbiAgICAgICAgfSxcbiAgICAgICAgcGFyYW1zOiBmdW5jdGlvbihmaWxlcywgeGhyLCBjaHVuaykge1xuICAgICAgICAgICAgaWYgKGNodW5rKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgZHpVdWlkOiBjaHVuay5maWxlLnVwbG9hZC51dWlkLFxuICAgICAgICAgICAgICAgICAgICBkekNodW5rSW5kZXg6IGNodW5rLmluZGV4LFxuICAgICAgICAgICAgICAgICAgICBkelRvdGFsRmlsZVNpemU6IGNodW5rLmZpbGUuc2l6ZSxcbiAgICAgICAgICAgICAgICAgICAgZHpDdXJyZW50Q2h1bmtTaXplOiBjaHVuay5kYXRhQmxvY2suZGF0YS5zaXplLFxuICAgICAgICAgICAgICAgICAgICBkelRvdGFsQ2h1bmtDb3VudDogY2h1bmsuZmlsZS51cGxvYWQudG90YWxDaHVua0NvdW50LFxuICAgICAgICAgICAgICAgICAgICBkekNodW5rQnl0ZU9mZnNldDogY2h1bmsuaW5kZXggKiB0aGlzLm9wdGlvbnMuY2h1bmtTaXplLFxuICAgICAgICAgICAgICAgICAgICBkekNodW5rU2l6ZTogdGhpcy5vcHRpb25zLmNodW5rU2l6ZSxcbiAgICAgICAgICAgICAgICAgICAgZHpGaWxlbmFtZTogY2h1bmsuZmlsZS5uYW1lLFxuICAgICAgICAgICAgICAgICAgICB1c2VySUQ6IDEsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgYWNjZXB0ZWRGaWxlczogXCJpbWFnZS9qcGVnLGltYWdlL3BuZyxpbWFnZS9naWZcIixcbiAgICAgICAgdXBsb2FkbXVsdGlwbGU6IHRydWUsXG4gICAgICAgIGFkZFJlbW92ZUxpbmtzOiAhMCxcbiAgICAgICAgdGltZW91dDogMCxcbiAgICAgICAgLy8gcGFyYWxsZWxVcGxvYWRzOiAxLCAvLyBzaW5jZSB3ZSdyZSB1c2luZyBhIGdsb2JhbCAnY3VycmVudEZpbGUnLCB3ZSBjb3VsZCBoYXZlIGlzc3VlcyBpZiBwYXJhbGxlbFVwbG9hZHMgPiAxLCBzbyB3ZSdsbCBtYWtlIGl0ID0gMVxuICAgICAgICBtYXhGaWxlc2l6ZTogTWVkaWFzLm1heEZpbGVzaXplLCAvLyBtYXggaW5kaXZpZHVhbCBmaWxlIHNpemUgMTAyNCBNQlxuICAgICAgICBjaHVua2luZzogdHJ1ZSwgLy8gZW5hYmxlIGNodW5raW5nXG4gICAgICAgIGZvcmNlQ2h1bmtpbmc6IHRydWUsIC8vIGZvcmNlcyBjaHVua2luZyB3aGVuIGZpbGUuc2l6ZSA8IGNodW5rU2l6ZVxuICAgICAgICAvLyBwYXJhbGxlbENodW5rVXBsb2FkczogdHJ1ZSwgLy8gYWxsb3dzIGNodW5rcyB0byBiZSB1cGxvYWRlZCBpbiBwYXJhbGxlbCAodGhpcyBpcyBpbmRlcGVuZGVudCBvZiB0aGUgcGFyYWxsZWxVcGxvYWRzIG9wdGlvbilcbiAgICAgICAgY2h1bmtTaXplOiA3NTM4NzYwOCwgLy8gY2h1bmsgc2l6ZSAxLDAwMCwwMDAgYnl0ZXMgKH4xTUIpXG4gICAgICAgIHJldHJ5Q2h1bmtzOiB0cnVlLCAvLyByZXRyeSBjaHVua3Mgb24gZmFpbHVyZVxuICAgICAgICByZXRyeUNodW5rc0xpbWl0OiAzLCAvLyByZXRyeSBtYXhpbXVtIG9mIDMgdGltZXMgKGRlZmF1bHQgaXMgMylcbiAgICAgICAgaW5pdDogZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgIHRoaXMub24oXCJhZGRlZGZpbGVcIiwgZnVuY3Rpb24oZmlsZSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdhZGRlZGZpbGUnKTtcbiAgICAgICAgICAgICAgICAvL3RoaXMucmVtb3ZlRmlsZShmaWxlKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB0aGlzLm9uKFwiY29tcGxldGVcIiwgZnVuY3Rpb24oZmlsZSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjb21wbGV0ZScpO1xuXG4gICAgICAgICAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ0dFVCcsXG4gICAgICAgICAgICAgICAgICAgIHVybDogY3VycmVudF91cmwgKyBcIi9nZXREaXNwbGF5SW1hZ2VNYW5hZ2VyXCIsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnRUeXBlOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkOyBjaGFyc2V0PVVURi04JyxcbiAgICAgICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICAgICAgW2Nyc2Z0b2tlbl06ICQoJ21ldGFbbmFtZT1cIlgtQ1NSRi1UT0tFTlwiXScpLmF0dHIoJ2NvbnRlbnQnKSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZGF0YVR5cGU6IFwianNvblwiLFxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXNwb25zZSwgc3RhdHVzLCB4aHIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJyNpbWFnZU1hbmFnZXInKS5odG1sKHJlc3BvbnNlLmh0bWwpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB0aGlzLm9uKCdzdWNjZXNzJywgZnVuY3Rpb24oZmlsZSwgcmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnc3VjY2VzcycpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGZpbGUucHJldmlld0VsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZpbGUucHJldmlld0VsZW1lbnQuY2xhc3NMaXN0LmFkZChcImR6LXN1Y2Nlc3NcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAkKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJy5kei1zdWNjZXNzJykuZmFkZU91dCgnc2xvdycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIDI1MDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgdGhpcy5vbihcInNlbmRpbmdcIiwgZnVuY3Rpb24oZmlsZSwgeGhyLCBmb3JtRGF0YSkge1xuXG4gICAgICAgICAgICAgICAgS1RBcHAuYmxvY2soXCIjaW1hZ2VNYW5hZ2VyXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmxheUNvbG9yOiBcIiMwMDAwMDBcIixcbiAgICAgICAgICAgICAgICAgICAgc3RhdGU6IFwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB0aGlzLm9uKFwicXVldWVjb21wbGV0ZVwiLCBmdW5jdGlvbihmaWxlLCByZXMpIHtcblxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGZpbGVzRHJvcHpvbmUpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGZpbGVzRHJvcHpvbmUuZmlsZXNbMF0uc3RhdHVzID09IERyb3B6b25lLlNVQ0NFU1MpIHtcblxuICAgICAgICAgICAgICAgICAgICAkLm5vdGlmeSh7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogX0xBTkdfLnVwZGF0ZWQgKyBcIiFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IF9MQU5HXy5zYXZlZF9kYXRhXG4gICAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdzdWNjZXNzJ1xuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICBLVEFwcC51bmJsb2NrKFwiI2ltYWdlTWFuYWdlclwiKTtcbiAgICAgICAgICAgICAgICAgICAgJCgnLmR6LXN1Y2Nlc3MnKS5mYWRlT3V0KCdzbG93Jyk7XG4gICAgICAgICAgICAgICAgICAgICQoJy5kei1tZXNzYWdlJykuZmFkZUluKCdzbG93Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy90aGlzLnJlbW92ZUFsbEZpbGVzKCk7XG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIChpbWFnZU1hbmFnZXIgPT0gJ3JlbG9hZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIEtUQXBwLnVuYmxvY2soXCIjaW1hZ2VNYW5hZ2VyXCIpO1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgJCgnI2ltYWdlTWFuYWdlcicpLmh0bWwocmVzdWx0Lmh0bWwpO1xuICAgICAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHRoaXMub24oXCJlcnJvclwiLCBmdW5jdGlvbihmaWxlLCByZXNwb25zZSwgeGhyKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2Vycm9yZWQnLCBmaWxlLCByZXNwb25zZSwgeGhyKTsgLy8gZm9yIGRlYnVnZ2luZ1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgeGhyICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRlZmF1bHRPcHRpb25zLmVycm9yKGZpbGUsIHhoci5zdGF0dXNUZXh0KTsgLy8gdXNlIHhociBlcnIgKGZyb20gc2VydmVyKVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGVmYXVsdE9wdGlvbnMuZXJyb3IoZmlsZSwgcmVzcG9uc2UpOyAvLyB1c2UgZGVmYXVsdCAoZnJvbSBkcm9wem9uZSlcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAkLm5vdGlmeSh7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBfTEFOR18uZXJyb3IgKyBcIiA6IDUwMCBcIixcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogcmVzcG9uc2UuZXJyb3IubWVzc2FnZVxuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3dhcm5pbmcnXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgdGhpcy5vbihcInJlbW92ZWRmaWxlXCIsIGZ1bmN0aW9uKGZpbGUsIHJlc3BvbnNlLCB4aHIpIHtcblxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdyZW1vdmVkZmlsZScsIGZpbGUsIHJlc3BvbnNlLCB4aHIpOyAvLyBmb3IgZGVidWdnaW5nXG5cbiAgICAgICAgICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnR0VUJyxcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBjdXJyZW50X3VybCArIFwiL3JlbW92ZWRmaWxlL1wiICsgZmlsZS51cGxvYWQudXVpZCxcbiAgICAgICAgICAgICAgICAgICAgY29udGVudFR5cGU6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7IGNoYXJzZXQ9VVRGLTgnLFxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBbY3JzZnRva2VuXTogJCgnbWV0YVtuYW1lPVwiWC1DU1JGLVRPS0VOXCJdJykuYXR0cignY29udGVudCcpLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBkYXRhVHlwZTogXCJqc29uXCIsXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3VsdCwgc3RhdHVzLCB4aHIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSk7XG5cblxuICAgIC8vIERpc3BsYXkgbWFuYWdlciBJbWFnZVxuICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcuc2VsZWN0LWltYWdlJywgZnVuY3Rpb24oZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgICB2YXIgdXVpZE1lZGlhID0gJCh0aGlzKS5kYXRhKFwidXVpZC1tZWRpYVwiKTtcblxuICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgdHlwZTogJ1BPU1QnLFxuICAgICAgICAgICAgdXJsOiBjdXJyZW50X3VybCArIFwiL2dldE1hbmFnZXJFZGl0aW9uXCIsXG4gICAgICAgICAgICBjb250ZW50VHlwZTogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDsgY2hhcnNldD1VVEYtOCcsXG4gICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgW2Nyc2Z0b2tlbl06ICQoJ21ldGFbbmFtZT1cIlgtQ1NSRi1UT0tFTlwiXScpLmF0dHIoJ2NvbnRlbnQnKSxcbiAgICAgICAgICAgICAgICB2YWx1ZToge1xuICAgICAgICAgICAgICAgICAgICB1dWlkOiB1dWlkTWVkaWFcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGF0YVR5cGU6IFwianNvblwiLFxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzdWx0LCBzdGF0dXMsIHhocikge1xuICAgICAgICAgICAgICAgIGlmICh4aHIuc3RhdHVzID09IDIwMCkge1xuICAgICAgICAgICAgICAgICAgICAkKCcjaW1hZ2VNYW5hZ2VyX2VkaXRpb24nKS5odG1sKHJlc3VsdC5odG1sKTtcbiAgICAgICAgICAgICAgICAgICAgJCgnI2ltYWdlTWFuYWdlcl9lZGl0aW9uID4gI2t0X21vZGFsX21hbmFnZXJfZWRpdGlvbicpLm1vZGFsKFwic2hvd1wiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgLy8gU2F2ZSBkYXRhIEltYWdlXG4gICAgJChkb2N1bWVudCkub24oJ3N1Ym1pdCcsICcja3RfYXBwc19tYW5hZ2VyX21lZGlhJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgdHlwZTogJ1BPU1QnLFxuICAgICAgICAgICAgdXJsOiBjdXJyZW50X3VybCArIFwiL3NhdmVNYW5hZ2VyRWRpdGlvblwiLFxuICAgICAgICAgICAgY29udGVudFR5cGU6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7IGNoYXJzZXQ9VVRGLTgnLFxuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgIFtjcnNmdG9rZW5dOiAkKCdtZXRhW25hbWU9XCJYLUNTUkYtVE9LRU5cIl0nKS5hdHRyKCdjb250ZW50JyksXG4gICAgICAgICAgICAgICAgdmFsdWU6ICQodGhpcykuc2VyaWFsaXplKClcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkYXRhVHlwZTogXCJqc29uXCIsXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXN1bHQsIHN0YXR1cywgeGhyKSB7XG4gICAgICAgICAgICAgICAgJC5ub3RpZnkoe1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogKHJlc3VsdC5zdWNjZXNzLm1lc3NhZ2UpID8gX0xBTkdfLnVwZGF0ZWQgKyBcIiFcIiA6IF9MQU5HXy53YXJuaW5nICsgXCIhXCIsXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IChyZXN1bHQuc3VjY2Vzcy5tZXNzYWdlKSA/IHJlc3VsdC5zdWNjZXNzLm1lc3NhZ2UgOiByZXN1bHQuZXJyb3IubWVzc2FnZVxuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogKHJlc3VsdC5zdWNjZXNzLm1lc3NhZ2UpID8gJ3N1Y2Nlc3MnIDogJ3dhcm5pbmcnXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgLy8gRGVsZXRlIEZpbGVcbiAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnLmRlbGV0ZUZpbGVNZWRpYScsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHZhciBpbWFnZU1hbmFnZXIgPSAkKHRoaXMpLmRhdGEoJ2ltYWdlbWFuYWdlcicpO1xuXG4gICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICB0eXBlOiAnUE9TVCcsXG4gICAgICAgICAgICB1cmw6IGN1cnJlbnRfdXJsICsgXCIvcmVtb3ZlRmlsZVwiLFxuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgIFtjcnNmdG9rZW5dOiAkKCdtZXRhW25hbWU9XCJYLUNTUkYtVE9LRU5cIl0nKS5hdHRyKCdjb250ZW50JyksXG4gICAgICAgICAgICAgICAgdXVpZDogJCh0aGlzKS5kYXRhKCd1dWlkJylcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkYXRhVHlwZTogXCJqc29uXCIsXG4gICAgICAgICAgICBiZWZvcmVTZW5kOiBmdW5jdGlvbih4aHIpIHtcbiAgICAgICAgICAgICAgICBLVEFwcC5ibG9jayhcIiNpbWFnZU1hbmFnZXJcIiwge1xuICAgICAgICAgICAgICAgICAgICBvdmVybGF5Q29sb3I6IFwiIzAwMDAwMFwiLFxuICAgICAgICAgICAgICAgICAgICBzdGF0ZTogXCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXN1bHQsIHN0YXR1cywgeGhyKSB7XG5cbiAgICAgICAgICAgICAgICAkLm5vdGlmeSh7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAocmVzdWx0LnN1Y2Nlc3MubWVzc2FnZSkgPyBfTEFOR18udXBkYXRlZCArIFwiIVwiIDogX0xBTkdfLndhcm5pbmcgKyBcIiFcIixcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogKHJlc3VsdC5zdWNjZXNzLm1lc3NhZ2UpID8gcmVzdWx0LnN1Y2Nlc3MubWVzc2FnZSA6IHJlc3VsdC5lcnJvci5tZXNzYWdlXG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAocmVzdWx0LnN1Y2Nlc3MubWVzc2FnZSkgPyAnc3VjY2VzcycgOiAnd2FybmluZydcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBpZiAoeGhyLnN0YXR1cyA9PSAyMDApIHtcbiAgICAgICAgICAgICAgICAgICAgJCgnI2ltYWdlTWFuYWdlcl9lZGl0aW9uICNrdF9tb2RhbF9tYW5hZ2VyX2VkaXRpb24nKS5tb2RhbChcImhpZGVcIik7XG4gICAgICAgICAgICAgICAgICAgICQoJy5tb2RhbC1iYWNrZHJvcCcpLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgICAgICAkKCcjaW1hZ2VNYW5hZ2VyX2VkaXRpb24nKS5odG1sKFwiXCIpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChpbWFnZU1hbmFnZXIgPT0gJ3JlbG9hZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIEtUQXBwLnVuYmxvY2soXCIjaW1hZ2VNYW5hZ2VyXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgJCgnI2ltYWdlTWFuYWdlcicpLmh0bWwocmVzdWx0Lmh0bWwpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcbn0pO1xuXG4vLyBPTiBjcm9wIGxlIGZpY2hpZXIgZGVtbmFuZMOpXG4vL2Nyb3BwZWRGaWxlXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnI2t0X2FwcHNfbWFuYWdlcl9tZWRpYSAuY3JvcHBlZEZpbGUnLCBmdW5jdGlvbihldmVudCkge1xuICAgIHZhciB1dWlkID0gJCh0aGlzKS5kYXRhKCd1dWlkJyk7XG5cbiAgICAkLmFqYXgoe1xuICAgICAgICB0eXBlOiAnUE9TVCcsXG4gICAgICAgIHVybDogY3VycmVudF91cmwgKyBcIi9nZXRDcm9wVGVtcGxhdGVcIixcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgW2Nyc2Z0b2tlbl06ICQoJ21ldGFbbmFtZT1cIlgtQ1NSRi1UT0tFTlwiXScpLmF0dHIoJ2NvbnRlbnQnKSxcbiAgICAgICAgICAgIHV1aWQ6ICQodGhpcykuZGF0YSgndXVpZCcpXG4gICAgICAgIH0sXG4gICAgICAgIGRhdGFUeXBlOiBcImpzb25cIixcbiAgICAgICAgYmVmb3JlU2VuZDogZnVuY3Rpb24oeGhyKSB7XG4gICAgICAgICAgICBLVEFwcC5ibG9jayhcIi50aHVtYm5haWwtaW1hZ2VcIiwge1xuICAgICAgICAgICAgICAgIG92ZXJsYXlDb2xvcjogXCIjMDAwMDAwXCIsXG4gICAgICAgICAgICAgICAgc3RhdGU6IFwicHJpbWFyeVwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzcG9uc2UsIHN0YXR1cywgeGhyKSB7XG4gICAgICAgICAgICBpZiAoeGhyLnN0YXR1cyA9PSAyMDApIHtcbiAgICAgICAgICAgICAgICBLVEFwcC51bmJsb2NrKFwiLnRodW1ibmFpbC1pbWFnZVwiKTtcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuY3JvcCA9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICQoJy5hdHRhY2htZW50LW1lZGlhLXZpZXcnKS5mYWRlT3V0KCk7XG4gICAgICAgICAgICAgICAgICAgICQoJyNjcm9wSW1hZ2UnKS5odG1sKHJlc3BvbnNlLmNyb3BJbWFnZSk7XG4gICAgICAgICAgICAgICAgICAgICQoJyNjcm9wSW1hZ2UnKS5mYWRlSW4oKTtcbiAgICAgICAgICAgICAgICAgICAgS1RDcm9wcGVyLmluaXQoKTtcbiAgICAgICAgICAgICAgICAgICAgS1RBcHAuaW5pdFRvb2x0aXBzKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9KTtcbn0pO1xuXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnI2t0X21vZGFsX21hbmFnZXJfZWRpdGlvbiAuY2FuY2VsQ3JvcCcsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAkKCcjY3JvcEltYWdlJykuZmFkZU91dCgpO1xuICAgICQoJyNjcm9wSW1hZ2UnKS5odG1sKCcnKTtcbiAgICAkKCcuYXR0YWNobWVudC1tZWRpYS12aWV3JykuZmFkZUluKCk7XG59KTtcblxuXG5cInVzZSBzdHJpY3RcIjtcbnZhciBLVENyb3BwZXIgPSB7XG4gICAgaW5pdDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBlLCB0LCBhO1xuICAgICAgICBlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbWFnZS11cGxvYWRcIiksIHQgPSB7XG4gICAgICAgICAgICBjcm9wOiBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkYXRhWFwiKS52YWx1ZSA9IE1hdGgucm91bmQoZS5kZXRhaWwueCksIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGF0YVlcIikudmFsdWUgPSBNYXRoLnJvdW5kKGUuZGV0YWlsLnkpLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRhdGFXaWR0aFwiKS52YWx1ZSA9IE1hdGgucm91bmQoZS5kZXRhaWwud2lkdGgpLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRhdGFIZWlnaHRcIikudmFsdWUgPSBNYXRoLnJvdW5kKGUuZGV0YWlsLmhlaWdodCksIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGF0YVJvdGF0ZVwiKS52YWx1ZSA9IGUuZGV0YWlsLnJvdGF0ZSwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkYXRhU2NhbGVYXCIpLnZhbHVlID0gZS5kZXRhaWwuc2NhbGVYLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRhdGFTY2FsZVlcIikudmFsdWUgPSBlLmRldGFpbC5zY2FsZVk7XG4gICAgICAgICAgICAgICAgdmFyIHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNyb3BwZXItcHJldmlldy1sZ1wiKTtcbiAgICAgICAgICAgICAgICB0LmlubmVySFRNTCA9IFwiXCIsIHQuYXBwZW5kQ2hpbGQoYS5nZXRDcm9wcGVkQ2FudmFzKHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDI1NixcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxNjBcbiAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgdmFyIG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNyb3BwZXItcHJldmlldy1tZFwiKTtcbiAgICAgICAgICAgICAgICBuLmlubmVySFRNTCA9IFwiXCIsIG4uYXBwZW5kQ2hpbGQoYS5nZXRDcm9wcGVkQ2FudmFzKHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEyOCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA4MFxuICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICB2YXIgZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3JvcHBlci1wcmV2aWV3LXNtXCIpO1xuICAgICAgICAgICAgICAgIGQuaW5uZXJIVE1MID0gXCJcIiwgZC5hcHBlbmRDaGlsZChhLmdldENyb3BwZWRDYW52YXMoe1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNjQsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDBcbiAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgdmFyIG8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNyb3BwZXItcHJldmlldy14c1wiKTtcbiAgICAgICAgICAgICAgICBvLmlubmVySFRNTCA9IFwiXCIsIG8uYXBwZW5kQ2hpbGQoYS5nZXRDcm9wcGVkQ2FudmFzKHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMyLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwXG4gICAgICAgICAgICAgICAgfSkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY3JvcG1vdmU6IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlLnR5cGUsIGUuZGV0YWlsLmFjdGlvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIGEgPSBuZXcgQ3JvcHBlcihlLCB0KSwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjcm9wcGVyLWJ1dHRvbnNcIikucXVlcnlTZWxlY3RvckFsbChcIltkYXRhLW1ldGhvZF1cIikuZm9yRWFjaChmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICBlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbih0KSB7XG4gICAgICAgICAgICAgICAgdmFyIG4sIGQgPSBlLmdldEF0dHJpYnV0ZShcImRhdGEtbWV0aG9kXCIpLFxuICAgICAgICAgICAgICAgICAgICBvID0gZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLW9wdGlvblwiKSB8fCB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgICAgIHIgPSBlLmdldEF0dHJpYnV0ZShcImRhdGEtc2Vjb25kLW9wdGlvblwiKSB8fCB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgbyA9IEpTT04ucGFyc2UobylcbiAgICAgICAgICAgICAgICB9IGNhdGNoICh0KSB7fVxuICAgICAgICAgICAgICAgIGlmIChuID0gciA/IG8gPyAnJyA6IGFbZF0oKSA6IGFbZF0obywgciksIFwiZ2V0Q3JvcHBlZENhbnZhc1wiID09PSBkKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHZhciBpID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnZXRDcm9wcGVkQ2FudmFzTW9kYWxcIikucXVlcnlTZWxlY3RvcihcIi5tb2RhbC1ib2R5XCIpO1xuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhuKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gaS5pbm5lckhUTUwgPSBcIlwiLCBpLmFwcGVuZENoaWxkKG4pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChlLmdldEF0dHJpYnV0ZShcImRhdGEtbWV0aG9kXCIpID09ICdtb3ZlJykge1xuICAgICAgICAgICAgICAgICAgICBhLm1vdmUoZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLW9wdGlvblwiKSwgZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXNlY29uZC1vcHRpb25cIikpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLW1ldGhvZFwiKSA9PSAnZ2V0Q3JvcHBlZENhbnZhcycpIHtcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uID0gJyc7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlLmdldEF0dHJpYnV0ZShcImRhdGEtb3B0aW9uXCIpICE9IFwiXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUuZ2V0QXR0cmlidXRlKFwiZGF0YS1vcHRpb25cIikpO1xuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uID0gSlNPTi5wYXJzZShlLmdldEF0dHJpYnV0ZShcImRhdGEtb3B0aW9uXCIpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGEuZ2V0Q3JvcHBlZENhbnZhcyhvcHRpb24pLnRvQmxvYigoYmxvYikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gUGFzcyB0aGUgaW1hZ2UgZmlsZSBuYW1lIGFzIHRoZSB0aGlyZCBwYXJhbWV0ZXIgaWYgbmVjZXNzYXJ5LlxuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCd1dWlkJywgJCgnI2ltYWdlLXVwbG9hZCcpLmF0dHIoJ2RhdGEtdXVpZCcpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnZmllbGQnLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2ltYWdlQ3VzdG9tRWRpdGlvbicsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdjcm9wcGVkSW1hZ2UnLCBibG9iLCAkKCcjaW1hZ2UtdXBsb2FkJykuYXR0cignZGF0YS1taW5lJykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKFtjcnNmdG9rZW5dLCAkKCdtZXRhW25hbWU9XCJYLUNTUkYtVE9LRU5cIl0nKS5hdHRyKCdjb250ZW50JykpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdQT1NUJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6IGN1cnJlbnRfdXJsICsgXCIvY3JvcEZpbGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBmb3JtRGF0YSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9jZXNzRGF0YTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudFR5cGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFUeXBlOiBcImpzb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXN1bHQsIHN0YXR1cywgeGhyKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJC5ub3RpZnkoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IChyZXN1bHQuc3VjY2Vzcy5tZXNzYWdlKSA/IF9MQU5HXy51cGRhdGVkICsgXCIhXCIgOiBfTEFOR18ud2FybmluZyArIFwiIVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogKHJlc3VsdC5zdWNjZXNzLm1lc3NhZ2UpID8gcmVzdWx0LnN1Y2Nlc3MubWVzc2FnZSA6IHJlc3VsdC5lcnJvci5tZXNzYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IChyZXN1bHQuc3VjY2Vzcy5tZXNzYWdlKSA/ICdzdWNjZXNzJyA6ICd3YXJuaW5nJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoeGhyLnN0YXR1cyA9PSAyMDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJyNjcm9wSW1hZ2UnKS5mYWRlT3V0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcjY3JvcEltYWdlJykuaHRtbCgnJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcuYXR0YWNobWVudC1tZWRpYS12aWV3JykuZmFkZUluKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcjaW1hZ2VDdXN0b20nKS5odG1sKHJlc3VsdC5pbWFnZUN1c3RvbUVkaXRpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSwgJCgnI2ltYWdlLXVwbG9hZCcpLmF0dHIoJ2RhdGEtbWluZScpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIGMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3B1dERhdGFcIik7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgYy52YWx1ZSA9IEpTT04uc3RyaW5naWZ5KG4pXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAodCkge1xuICAgICAgICAgICAgICAgICAgICBuIHx8IChjLnZhbHVlID0gbilcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KSwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZXRBc3BlY3RSYXRpb1wiKS5xdWVyeVNlbGVjdG9yQWxsKCdbbmFtZT1cImFzcGVjdFJhdGlvXCJdJykuZm9yRWFjaChmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICBlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgYS5zZXRBc3BlY3RSYXRpbyhlLnRhcmdldC52YWx1ZSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pO1xuICAgIH1cbn07XG5cbi8vIG9uIHN1cHByaW1lIGxlcyBmaWNoaWVycyBjdXN0b21cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcja3RfYXBwc19tYW5hZ2VyX21lZGlhIC5kZWxldGVGaWxlQ3VzdG9tJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgdmFyIGRlbGV0ZUZpbGVDdXN0b20gPSAkKHRoaXMpO1xuXG5cbiAgICAkLmFqYXgoe1xuICAgICAgICB0eXBlOiAnUE9TVCcsXG4gICAgICAgIHVybDogY3VycmVudF91cmwgKyBcIi9kZXRldGVGaWxlQ3VzdG9tXCIsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIFtjcnNmdG9rZW5dOiAkKCdtZXRhW25hbWU9XCJYLUNTUkYtVE9LRU5cIl0nKS5hdHRyKCdjb250ZW50JyksXG4gICAgICAgICAgICBmb3JtYXQ6ICQodGhpcykuZGF0YSgnZm9ybWF0JyksXG4gICAgICAgICAgICB1dWlkOiAkKHRoaXMpLmRhdGEoJ3V1aWQnKVxuICAgICAgICB9LFxuXG4gICAgICAgIGRhdGFUeXBlOiBcImpzb25cIixcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzdWx0LCBzdGF0dXMsIHhocikge1xuXG4gICAgICAgICAgICAkLm5vdGlmeSh7XG4gICAgICAgICAgICAgICAgdGl0bGU6IChyZXN1bHQuc3VjY2Vzcy5tZXNzYWdlKSA/IF9MQU5HXy51cGRhdGVkICsgXCIhXCIgOiBfTEFOR18ud2FybmluZyArIFwiIVwiLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IChyZXN1bHQuc3VjY2Vzcy5tZXNzYWdlKSA/IHJlc3VsdC5zdWNjZXNzLm1lc3NhZ2UgOiByZXN1bHQuZXJyb3IubWVzc2FnZVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIHR5cGU6IChyZXN1bHQuc3VjY2Vzcy5tZXNzYWdlKSA/ICdzdWNjZXNzJyA6ICd3YXJuaW5nJ1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmICh4aHIuc3RhdHVzID09IDIwMCkge1xuICAgICAgICAgICAgICAgIGRlbGV0ZUZpbGVDdXN0b20ucGFyZW50KCkucGFyZW50KCkucmVtb3ZlKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgIH0pO1xufSk7Il0sInNvdXJjZVJvb3QiOiIifQ==