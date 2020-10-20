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
/******/ 	return __webpack_require__(__webpack_require__.s = 47);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/metronic/js/pages/crud/file-upload/dropzonejs.js":
/*!********************************************************************!*\
  !*** ./resources/metronic/js/pages/crud/file-upload/dropzonejs.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval(" // Class definition\n\nvar KTDropzoneDemo = function () {\n  // Private functions\n  var demo1 = function demo1() {\n    // single file upload\n    $('#kt_dropzone_1').dropzone({\n      url: \"https://keenthemes.com/scripts/void.php\",\n      // Set the url for your upload script location\n      paramName: \"file\",\n      // The name that will be used to transfer the file\n      maxFiles: 1,\n      maxFilesize: 5,\n      // MB\n      addRemoveLinks: true,\n      accept: function accept(file, done) {\n        if (file.name == \"justinbieber.jpg\") {\n          done(\"Naha, you don't.\");\n        } else {\n          done();\n        }\n      }\n    }); // multiple file upload\n\n    $('#kt_dropzone_2').dropzone({\n      url: \"https://keenthemes.com/scripts/void.php\",\n      // Set the url for your upload script location\n      paramName: \"file\",\n      // The name that will be used to transfer the file\n      maxFiles: 10,\n      maxFilesize: 10,\n      // MB\n      addRemoveLinks: true,\n      accept: function accept(file, done) {\n        if (file.name == \"justinbieber.jpg\") {\n          done(\"Naha, you don't.\");\n        } else {\n          done();\n        }\n      }\n    }); // file type validation\n\n    $('#kt_dropzone_3').dropzone({\n      url: \"https://keenthemes.com/scripts/void.php\",\n      // Set the url for your upload script location\n      paramName: \"file\",\n      // The name that will be used to transfer the file\n      maxFiles: 10,\n      maxFilesize: 10,\n      // MB\n      addRemoveLinks: true,\n      acceptedFiles: \"image/*,application/pdf,.psd\",\n      accept: function accept(file, done) {\n        if (file.name == \"justinbieber.jpg\") {\n          done(\"Naha, you don't.\");\n        } else {\n          done();\n        }\n      }\n    });\n  };\n\n  var demo2 = function demo2() {\n    // set the dropzone container id\n    var id = '#kt_dropzone_4'; // set the preview element template\n\n    var previewNode = $(id + \" .dropzone-item\");\n    previewNode.id = \"\";\n    var previewTemplate = previewNode.parent('.dropzone-items').html();\n    previewNode.remove();\n    var myDropzone4 = new Dropzone(id, {\n      // Make the whole body a dropzone\n      url: \"https://keenthemes.com/scripts/void.php\",\n      // Set the url for your upload script location\n      parallelUploads: 20,\n      previewTemplate: previewTemplate,\n      maxFilesize: 1,\n      // Max filesize in MB\n      autoQueue: false,\n      // Make sure the files aren't queued until manually added\n      previewsContainer: id + \" .dropzone-items\",\n      // Define the container to display the previews\n      clickable: id + \" .dropzone-select\" // Define the element that should be used as click trigger to select files.\n\n    });\n    myDropzone4.on(\"addedfile\", function (file) {\n      // Hookup the start button\n      file.previewElement.querySelector(id + \" .dropzone-start\").onclick = function () {\n        myDropzone4.enqueueFile(file);\n      };\n\n      $(document).find(id + ' .dropzone-item').css('display', '');\n      $(id + \" .dropzone-upload, \" + id + \" .dropzone-remove-all\").css('display', 'inline-block');\n    }); // Update the total progress bar\n\n    myDropzone4.on(\"totaluploadprogress\", function (progress) {\n      $(this).find(id + \" .progress-bar\").css('width', progress + \"%\");\n    });\n    myDropzone4.on(\"sending\", function (file) {\n      // Show the total progress bar when upload starts\n      $(id + \" .progress-bar\").css('opacity', '1'); // And disable the start button\n\n      file.previewElement.querySelector(id + \" .dropzone-start\").setAttribute(\"disabled\", \"disabled\");\n    }); // Hide the total progress bar when nothing's uploading anymore\n\n    myDropzone4.on(\"complete\", function (progress) {\n      var thisProgressBar = id + \" .dz-complete\";\n      setTimeout(function () {\n        $(thisProgressBar + \" .progress-bar, \" + thisProgressBar + \" .progress, \" + thisProgressBar + \" .dropzone-start\").css('opacity', '0');\n      }, 300);\n    }); // Setup the buttons for all transfers\n\n    document.querySelector(id + \" .dropzone-upload\").onclick = function () {\n      myDropzone4.enqueueFiles(myDropzone4.getFilesWithStatus(Dropzone.ADDED));\n    }; // Setup the button for remove all files\n\n\n    document.querySelector(id + \" .dropzone-remove-all\").onclick = function () {\n      $(id + \" .dropzone-upload, \" + id + \" .dropzone-remove-all\").css('display', 'none');\n      myDropzone4.removeAllFiles(true);\n    }; // On all files completed upload\n\n\n    myDropzone4.on(\"queuecomplete\", function (progress) {\n      $(id + \" .dropzone-upload\").css('display', 'none');\n    }); // On all files removed\n\n    myDropzone4.on(\"removedfile\", function (file) {\n      if (myDropzone4.files.length < 1) {\n        $(id + \" .dropzone-upload, \" + id + \" .dropzone-remove-all\").css('display', 'none');\n      }\n    });\n  };\n\n  var demo3 = function demo3() {\n    // set the dropzone container id\n    var id = '#kt_dropzone_5'; // set the preview element template\n\n    var previewNode = $(id + \" .dropzone-item\");\n    previewNode.id = \"\";\n    var previewTemplate = previewNode.parent('.dropzone-items').html();\n    previewNode.remove();\n    var myDropzone5 = new Dropzone(id, {\n      // Make the whole body a dropzone\n      url: \"https://keenthemes.com/scripts/void.php\",\n      // Set the url for your upload script location\n      parallelUploads: 20,\n      maxFilesize: 1,\n      // Max filesize in MB\n      previewTemplate: previewTemplate,\n      previewsContainer: id + \" .dropzone-items\",\n      // Define the container to display the previews\n      clickable: id + \" .dropzone-select\" // Define the element that should be used as click trigger to select files.\n\n    });\n    myDropzone5.on(\"addedfile\", function (file) {\n      // Hookup the start button\n      $(document).find(id + ' .dropzone-item').css('display', '');\n    }); // Update the total progress bar\n\n    myDropzone5.on(\"totaluploadprogress\", function (progress) {\n      $(id + \" .progress-bar\").css('width', progress + \"%\");\n    });\n    myDropzone5.on(\"sending\", function (file) {\n      // Show the total progress bar when upload starts\n      $(id + \" .progress-bar\").css('opacity', \"1\");\n    }); // Hide the total progress bar when nothing's uploading anymore\n\n    myDropzone5.on(\"complete\", function (progress) {\n      var thisProgressBar = id + \" .dz-complete\";\n      setTimeout(function () {\n        $(thisProgressBar + \" .progress-bar, \" + thisProgressBar + \" .progress\").css('opacity', '0');\n      }, 300);\n    });\n  };\n\n  return {\n    // public functions\n    init: function init() {\n      demo1();\n      demo2();\n      demo3();\n    }\n  };\n}();\n\nKTUtil.ready(function () {\n  KTDropzoneDemo.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvbWV0cm9uaWMvanMvcGFnZXMvY3J1ZC9maWxlLXVwbG9hZC9kcm9wem9uZWpzLmpzPzlmMmUiXSwibmFtZXMiOlsiS1REcm9wem9uZURlbW8iLCJkZW1vMSIsIiQiLCJkcm9wem9uZSIsInVybCIsInBhcmFtTmFtZSIsIm1heEZpbGVzIiwibWF4RmlsZXNpemUiLCJhZGRSZW1vdmVMaW5rcyIsImFjY2VwdCIsImZpbGUiLCJkb25lIiwibmFtZSIsImFjY2VwdGVkRmlsZXMiLCJkZW1vMiIsImlkIiwicHJldmlld05vZGUiLCJwcmV2aWV3VGVtcGxhdGUiLCJwYXJlbnQiLCJodG1sIiwicmVtb3ZlIiwibXlEcm9wem9uZTQiLCJEcm9wem9uZSIsInBhcmFsbGVsVXBsb2FkcyIsImF1dG9RdWV1ZSIsInByZXZpZXdzQ29udGFpbmVyIiwiY2xpY2thYmxlIiwib24iLCJwcmV2aWV3RWxlbWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJvbmNsaWNrIiwiZW5xdWV1ZUZpbGUiLCJkb2N1bWVudCIsImZpbmQiLCJjc3MiLCJwcm9ncmVzcyIsInNldEF0dHJpYnV0ZSIsInRoaXNQcm9ncmVzc0JhciIsInNldFRpbWVvdXQiLCJlbnF1ZXVlRmlsZXMiLCJnZXRGaWxlc1dpdGhTdGF0dXMiLCJBRERFRCIsInJlbW92ZUFsbEZpbGVzIiwiZmlsZXMiLCJsZW5ndGgiLCJkZW1vMyIsIm15RHJvcHpvbmU1IiwiaW5pdCIsIktUVXRpbCIsInJlYWR5Il0sIm1hcHBpbmdzIjoiQ0FDQTs7QUFFQSxJQUFJQSxjQUFjLEdBQUcsWUFBWTtBQUM3QjtBQUNBLE1BQUlDLEtBQUssR0FBRyxTQUFSQSxLQUFRLEdBQVk7QUFDcEI7QUFDQUMsS0FBQyxDQUFDLGdCQUFELENBQUQsQ0FBb0JDLFFBQXBCLENBQTZCO0FBQ3pCQyxTQUFHLEVBQUUseUNBRG9CO0FBQ3VCO0FBQ2hEQyxlQUFTLEVBQUUsTUFGYztBQUVOO0FBQ25CQyxjQUFRLEVBQUUsQ0FI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MEJtQixHQUExQixDQUE4QixTQUE5QixFQUF5QyxHQUF6QztBQUNILEtBSEQsRUE3Qm1CLENBa0NuQjs7QUFDQVksZUFBVyxDQUFDbkIsRUFBWixDQUFlLFVBQWYsRUFBMkIsVUFBU1EsUUFBVCxFQUFtQjtBQUMxQyxVQUFJRSxlQUFlLEdBQUd0QixFQUFFLEdBQUcsZUFBM0I7QUFDQXVCLGdCQUFVLENBQUMsWUFBVTtBQUNqQnBDLFNBQUMsQ0FBRW1DLGVBQWUsR0FBRyxrQkFBbEIsR0FBdUNBLGVBQXZDLEdBQXlELFlBQTNELENBQUQsQ0FBMEVILEdBQTFFLENBQThFLFNBQTlFLEVBQXlGLEdBQXpGO0FBQ0gsT0FGUyxFQUVQLEdBRk8sQ0FBVjtBQUdILEtBTEQ7QUFNSixHQXpDRDs7QUEyQ0EsU0FBTztBQUNIO0FBQ0FhLFFBQUksRUFBRSxnQkFBVztBQUNiOUMsV0FBSztBQUNMYSxXQUFLO0FBQ0wrQixXQUFLO0FBQ1I7QUFORSxHQUFQO0FBUUgsQ0FoTG9CLEVBQXJCOztBQWtMQUcsTUFBTSxDQUFDQyxLQUFQLENBQWEsWUFBVztBQUNwQmpELGdCQUFjLENBQUMrQyxJQUFmO0FBQ0gsQ0FGRCIsImZpbGUiOiIuL3Jlc291cmNlcy9tZXRyb25pYy9qcy9wYWdlcy9jcnVkL2ZpbGUtdXBsb2FkL2Ryb3B6b25lanMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuLy8gQ2xhc3MgZGVmaW5pdGlvblxyXG5cclxudmFyIEtURHJvcHpvbmVEZW1vID0gZnVuY3Rpb24gKCkge1xyXG4gICAgLy8gUHJpdmF0ZSBmdW5jdGlvbnNcclxuICAgIHZhciBkZW1vMSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvLyBzaW5nbGUgZmlsZSB1cGxvYWRcclxuICAgICAgICAkKCcja3RfZHJvcHpvbmVfMScpLmRyb3B6b25lKHtcclxuICAgICAgICAgICAgdXJsOiBcImh0dHBzOi8va2VlbnRoZW1lcy5jb20vc2NyaXB0cy92b2lkLnBocFwiLCAvLyBTZXQgdGhlIHVybCBmb3IgeW91ciB1cGxvYWQgc2NyaXB0IGxvY2F0aW9uXHJcbiAgICAgICAgICAgIHBhcmFtTmFtZTogXCJmaWxlXCIsIC8vIFRoZSBuYW1lIHRoYXQgd2lsbCBiZSB1c2VkIHRvIHRyYW5zZmVyIHRoZSBmaWxlXHJcbiAgICAgICAgICAgIG1heEZpbGVzOiAxLFxyXG4gICAgICAgICAgICBtYXhGaWxlc2l6ZTogNSwgLy8gTUJcclxuICAgICAgICAgICAgYWRkUmVtb3ZlTGlua3M6IHRydWUsXHJcbiAgICAgICAgICAgIGFjY2VwdDogZnVuY3Rpb24oZmlsZSwgZG9uZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGZpbGUubmFtZSA9PSBcImp1c3RpbmJpZWJlci5qcGdcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGRvbmUoXCJOYWhhLCB5b3UgZG9uJ3QuXCIpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBkb25lKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gbXVsdGlwbGUgZmlsZSB1cGxvYWRcclxuICAgICAgICAkKCcja3RfZHJvcHpvbmVfMicpLmRyb3B6b25lKHtcclxuICAgICAgICAgICAgdXJsOiBcImh0dHBzOi8va2VlbnRoZW1lcy5jb20vc2NyaXB0cy92b2lkLnBocFwiLCAvLyBTZXQgdGhlIHVybCBmb3IgeW91ciB1cGxvYWQgc2NyaXB0IGxvY2F0aW9uXHJcbiAgICAgICAgICAgIHBhcmFtTmFtZTogXCJmaWxlXCIsIC8vIFRoZSBuYW1lIHRoYXQgd2lsbCBiZSB1c2VkIHRvIHRyYW5zZmVyIHRoZSBmaWxlXHJcbiAgICAgICAgICAgIG1heEZpbGVzOiAxMCxcclxuICAgICAgICAgICAgbWF4RmlsZXNpemU6IDEwLCAvLyBNQlxyXG4gICAgICAgICAgICBhZGRSZW1vdmVMaW5rczogdHJ1ZSxcclxuICAgICAgICAgICAgYWNjZXB0OiBmdW5jdGlvbihmaWxlLCBkb25lKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZmlsZS5uYW1lID09IFwianVzdGluYmllYmVyLmpwZ1wiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9uZShcIk5haGEsIHlvdSBkb24ndC5cIik7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGRvbmUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBmaWxlIHR5cGUgdmFsaWRhdGlvblxyXG4gICAgICAgICQoJyNrdF9kcm9wem9uZV8zJykuZHJvcHpvbmUoe1xyXG4gICAgICAgICAgICB1cmw6IFwiaHR0cHM6Ly9rZWVudGhlbWVzLmNvbS9zY3JpcHRzL3ZvaWQucGhwXCIsIC8vIFNldCB0aGUgdXJsIGZvciB5b3VyIHVwbG9hZCBzY3JpcHQgbG9jYXRpb25cclxuICAgICAgICAgICAgcGFyYW1OYW1lOiBcImZpbGVcIiwgLy8gVGhlIG5hbWUgdGhhdCB3aWxsIGJlIHVzZWQgdG8gdHJhbnNmZXIgdGhlIGZpbGVcclxuICAgICAgICAgICAgbWF4RmlsZXM6IDEwLFxyXG4gICAgICAgICAgICBtYXhGaWxlc2l6ZTogMTAsIC8vIE1CXHJcbiAgICAgICAgICAgIGFkZFJlbW92ZUxpbmtzOiB0cnVlLFxyXG4gICAgICAgICAgICBhY2NlcHRlZEZpbGVzOiBcImltYWdlLyosYXBwbGljYXRpb24vcGRmLC5wc2RcIixcclxuICAgICAgICAgICAgYWNjZXB0OiBmdW5jdGlvbihmaWxlLCBkb25lKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZmlsZS5uYW1lID09IFwianVzdGluYmllYmVyLmpwZ1wiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9uZShcIk5haGEsIHlvdSBkb24ndC5cIik7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGRvbmUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBkZW1vMiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvLyBzZXQgdGhlIGRyb3B6b25lIGNvbnRhaW5lciBpZFxyXG4gICAgICAgIHZhciBpZCA9ICcja3RfZHJvcHpvbmVfNCc7XHJcblxyXG4gICAgICAgIC8vIHNldCB0aGUgcHJldmlldyBlbGVtZW50IHRlbXBsYXRlXHJcbiAgICAgICAgdmFyIHByZXZpZXdOb2RlID0gJChpZCArIFwiIC5kcm9wem9uZS1pdGVtXCIpO1xyXG4gICAgICAgIHByZXZpZXdOb2RlLmlkID0gXCJcIjtcclxuICAgICAgICB2YXIgcHJldmlld1RlbXBsYXRlID0gcHJldmlld05vZGUucGFyZW50KCcuZHJvcHpvbmUtaXRlbXMnKS5odG1sKCk7XHJcbiAgICAgICAgcHJldmlld05vZGUucmVtb3ZlKCk7XHJcblxyXG4gICAgICAgIHZhciBteURyb3B6b25lNCA9IG5ldyBEcm9wem9uZShpZCwgeyAvLyBNYWtlIHRoZSB3aG9sZSBib2R5IGEgZHJvcHpvbmVcclxuICAgICAgICAgICAgdXJsOiBcImh0dHBzOi8va2VlbnRoZW1lcy5jb20vc2NyaXB0cy92b2lkLnBocFwiLCAvLyBTZXQgdGhlIHVybCBmb3IgeW91ciB1cGxvYWQgc2NyaXB0IGxvY2F0aW9uXHJcbiAgICAgICAgICAgIHBhcmFsbGVsVXBsb2FkczogMjAsXHJcbiAgICAgICAgICAgIHByZXZpZXdUZW1wbGF0ZTogcHJldmlld1RlbXBsYXRlLFxyXG4gICAgICAgICAgICBtYXhGaWxlc2l6ZTogMSwgLy8gTWF4IGZpbGVzaXplIGluIE1CXHJcbiAgICAgICAgICAgIGF1dG9RdWV1ZTogZmFsc2UsIC8vIE1ha2Ugc3VyZSB0aGUgZmlsZXMgYXJlbid0IHF1ZXVlZCB1bnRpbCBtYW51YWxseSBhZGRlZFxyXG4gICAgICAgICAgICBwcmV2aWV3c0NvbnRhaW5lcjogaWQgKyBcIiAuZHJvcHpvbmUtaXRlbXNcIiwgLy8gRGVmaW5lIHRoZSBjb250YWluZXIgdG8gZGlzcGxheSB0aGUgcHJldmlld3NcclxuICAgICAgICAgICAgY2xpY2thYmxlOiBpZCArIFwiIC5kcm9wem9uZS1zZWxlY3RcIiAvLyBEZWZpbmUgdGhlIGVsZW1lbnQgdGhhdCBzaG91bGQgYmUgdXNlZCBhcyBjbGljayB0cmlnZ2VyIHRvIHNlbGVjdCBmaWxlcy5cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgbXlEcm9wem9uZTQub24oXCJhZGRlZGZpbGVcIiwgZnVuY3Rpb24oZmlsZSkge1xyXG4gICAgICAgICAgICAvLyBIb29rdXAgdGhlIHN0YXJ0IGJ1dHRvblxyXG4gICAgICAgICAgICBmaWxlLnByZXZpZXdFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoaWQgKyBcIiAuZHJvcHpvbmUtc3RhcnRcIikub25jbGljayA9IGZ1bmN0aW9uKCkgeyBteURyb3B6b25lNC5lbnF1ZXVlRmlsZShmaWxlKTsgfTtcclxuICAgICAgICAgICAgJChkb2N1bWVudCkuZmluZCggaWQgKyAnIC5kcm9wem9uZS1pdGVtJykuY3NzKCdkaXNwbGF5JywgJycpO1xyXG4gICAgICAgICAgICAkKCBpZCArIFwiIC5kcm9wem9uZS11cGxvYWQsIFwiICsgaWQgKyBcIiAuZHJvcHpvbmUtcmVtb3ZlLWFsbFwiKS5jc3MoJ2Rpc3BsYXknLCAnaW5saW5lLWJsb2NrJyk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIFVwZGF0ZSB0aGUgdG90YWwgcHJvZ3Jlc3MgYmFyXHJcbiAgICAgICAgbXlEcm9wem9uZTQub24oXCJ0b3RhbHVwbG9hZHByb2dyZXNzXCIsIGZ1bmN0aW9uKHByb2dyZXNzKSB7XHJcbiAgICAgICAgICAgICQodGhpcykuZmluZCggaWQgKyBcIiAucHJvZ3Jlc3MtYmFyXCIpLmNzcygnd2lkdGgnLCBwcm9ncmVzcyArIFwiJVwiKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgbXlEcm9wem9uZTQub24oXCJzZW5kaW5nXCIsIGZ1bmN0aW9uKGZpbGUpIHtcclxuICAgICAgICAgICAgLy8gU2hvdyB0aGUgdG90YWwgcHJvZ3Jlc3MgYmFyIHdoZW4gdXBsb2FkIHN0YXJ0c1xyXG4gICAgICAgICAgICAkKCBpZCArIFwiIC5wcm9ncmVzcy1iYXJcIikuY3NzKCdvcGFjaXR5JywgJzEnKTtcclxuICAgICAgICAgICAgLy8gQW5kIGRpc2FibGUgdGhlIHN0YXJ0IGJ1dHRvblxyXG4gICAgICAgICAgICBmaWxlLnByZXZpZXdFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoaWQgKyBcIiAuZHJvcHpvbmUtc3RhcnRcIikuc2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIiwgXCJkaXNhYmxlZFwiKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gSGlkZSB0aGUgdG90YWwgcHJvZ3Jlc3MgYmFyIHdoZW4gbm90aGluZydzIHVwbG9hZGluZyBhbnltb3JlXHJcbiAgICAgICAgbXlEcm9wem9uZTQub24oXCJjb21wbGV0ZVwiLCBmdW5jdGlvbihwcm9ncmVzcykge1xyXG4gICAgICAgICAgICB2YXIgdGhpc1Byb2dyZXNzQmFyID0gaWQgKyBcIiAuZHotY29tcGxldGVcIjtcclxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgJCggdGhpc1Byb2dyZXNzQmFyICsgXCIgLnByb2dyZXNzLWJhciwgXCIgKyB0aGlzUHJvZ3Jlc3NCYXIgKyBcIiAucHJvZ3Jlc3MsIFwiICsgdGhpc1Byb2dyZXNzQmFyICsgXCIgLmRyb3B6b25lLXN0YXJ0XCIpLmNzcygnb3BhY2l0eScsICcwJyk7XHJcbiAgICAgICAgICAgIH0sIDMwMClcclxuXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIFNldHVwIHRoZSBidXR0b25zIGZvciBhbGwgdHJhbnNmZXJzXHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvciggaWQgKyBcIiAuZHJvcHpvbmUtdXBsb2FkXCIpLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgbXlEcm9wem9uZTQuZW5xdWV1ZUZpbGVzKG15RHJvcHpvbmU0LmdldEZpbGVzV2l0aFN0YXR1cyhEcm9wem9uZS5BRERFRCkpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8vIFNldHVwIHRoZSBidXR0b24gZm9yIHJlbW92ZSBhbGwgZmlsZXNcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGlkICsgXCIgLmRyb3B6b25lLXJlbW92ZS1hbGxcIikub25jbGljayA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAkKCBpZCArIFwiIC5kcm9wem9uZS11cGxvYWQsIFwiICsgaWQgKyBcIiAuZHJvcHpvbmUtcmVtb3ZlLWFsbFwiKS5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xyXG4gICAgICAgICAgICBteURyb3B6b25lNC5yZW1vdmVBbGxGaWxlcyh0cnVlKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvLyBPbiBhbGwgZmlsZXMgY29tcGxldGVkIHVwbG9hZFxyXG4gICAgICAgIG15RHJvcHpvbmU0Lm9uKFwicXVldWVjb21wbGV0ZVwiLCBmdW5jdGlvbihwcm9ncmVzcyl7XHJcbiAgICAgICAgICAgICQoIGlkICsgXCIgLmRyb3B6b25lLXVwbG9hZFwiKS5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBPbiBhbGwgZmlsZXMgcmVtb3ZlZFxyXG4gICAgICAgIG15RHJvcHpvbmU0Lm9uKFwicmVtb3ZlZGZpbGVcIiwgZnVuY3Rpb24oZmlsZSl7XHJcbiAgICAgICAgICAgIGlmKG15RHJvcHpvbmU0LmZpbGVzLmxlbmd0aCA8IDEpe1xyXG4gICAgICAgICAgICAgICAgJCggaWQgKyBcIiAuZHJvcHpvbmUtdXBsb2FkLCBcIiArIGlkICsgXCIgLmRyb3B6b25lLXJlbW92ZS1hbGxcIikuY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBkZW1vMyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgLy8gc2V0IHRoZSBkcm9wem9uZSBjb250YWluZXIgaWRcclxuICAgICAgICAgdmFyIGlkID0gJyNrdF9kcm9wem9uZV81JztcclxuXHJcbiAgICAgICAgIC8vIHNldCB0aGUgcHJldmlldyBlbGVtZW50IHRlbXBsYXRlXHJcbiAgICAgICAgIHZhciBwcmV2aWV3Tm9kZSA9ICQoaWQgKyBcIiAuZHJvcHpvbmUtaXRlbVwiKTtcclxuICAgICAgICAgcHJldmlld05vZGUuaWQgPSBcIlwiO1xyXG4gICAgICAgICB2YXIgcHJldmlld1RlbXBsYXRlID0gcHJldmlld05vZGUucGFyZW50KCcuZHJvcHpvbmUtaXRlbXMnKS5odG1sKCk7XHJcbiAgICAgICAgIHByZXZpZXdOb2RlLnJlbW92ZSgpO1xyXG5cclxuICAgICAgICAgdmFyIG15RHJvcHpvbmU1ID0gbmV3IERyb3B6b25lKGlkLCB7IC8vIE1ha2UgdGhlIHdob2xlIGJvZHkgYSBkcm9wem9uZVxyXG4gICAgICAgICAgICAgdXJsOiBcImh0dHBzOi8va2VlbnRoZW1lcy5jb20vc2NyaXB0cy92b2lkLnBocFwiLCAvLyBTZXQgdGhlIHVybCBmb3IgeW91ciB1cGxvYWQgc2NyaXB0IGxvY2F0aW9uXHJcbiAgICAgICAgICAgICBwYXJhbGxlbFVwbG9hZHM6IDIwLFxyXG4gICAgICAgICAgICAgbWF4RmlsZXNpemU6IDEsIC8vIE1heCBmaWxlc2l6ZSBpbiBNQlxyXG4gICAgICAgICAgICAgcHJldmlld1RlbXBsYXRlOiBwcmV2aWV3VGVtcGxhdGUsXHJcbiAgICAgICAgICAgICBwcmV2aWV3c0NvbnRhaW5lcjogaWQgKyBcIiAuZHJvcHpvbmUtaXRlbXNcIiwgLy8gRGVmaW5lIHRoZSBjb250YWluZXIgdG8gZGlzcGxheSB0aGUgcHJldmlld3NcclxuICAgICAgICAgICAgIGNsaWNrYWJsZTogaWQgKyBcIiAuZHJvcHpvbmUtc2VsZWN0XCIgLy8gRGVmaW5lIHRoZSBlbGVtZW50IHRoYXQgc2hvdWxkIGJlIHVzZWQgYXMgY2xpY2sgdHJpZ2dlciB0byBzZWxlY3QgZmlsZXMuXHJcbiAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgbXlEcm9wem9uZTUub24oXCJhZGRlZGZpbGVcIiwgZnVuY3Rpb24oZmlsZSkge1xyXG4gICAgICAgICAgICAgLy8gSG9va3VwIHRoZSBzdGFydCBidXR0b25cclxuICAgICAgICAgICAgICQoZG9jdW1lbnQpLmZpbmQoIGlkICsgJyAuZHJvcHpvbmUtaXRlbScpLmNzcygnZGlzcGxheScsICcnKTtcclxuICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAvLyBVcGRhdGUgdGhlIHRvdGFsIHByb2dyZXNzIGJhclxyXG4gICAgICAgICBteURyb3B6b25lNS5vbihcInRvdGFsdXBsb2FkcHJvZ3Jlc3NcIiwgZnVuY3Rpb24ocHJvZ3Jlc3MpIHtcclxuICAgICAgICAgICAgICQoIGlkICsgXCIgLnByb2dyZXNzLWJhclwiKS5jc3MoJ3dpZHRoJywgcHJvZ3Jlc3MgKyBcIiVcIik7XHJcbiAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgbXlEcm9wem9uZTUub24oXCJzZW5kaW5nXCIsIGZ1bmN0aW9uKGZpbGUpIHtcclxuICAgICAgICAgICAgIC8vIFNob3cgdGhlIHRvdGFsIHByb2dyZXNzIGJhciB3aGVuIHVwbG9hZCBzdGFydHNcclxuICAgICAgICAgICAgICQoIGlkICsgXCIgLnByb2dyZXNzLWJhclwiKS5jc3MoJ29wYWNpdHknLCBcIjFcIik7XHJcbiAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgLy8gSGlkZSB0aGUgdG90YWwgcHJvZ3Jlc3MgYmFyIHdoZW4gbm90aGluZydzIHVwbG9hZGluZyBhbnltb3JlXHJcbiAgICAgICAgIG15RHJvcHpvbmU1Lm9uKFwiY29tcGxldGVcIiwgZnVuY3Rpb24ocHJvZ3Jlc3MpIHtcclxuICAgICAgICAgICAgIHZhciB0aGlzUHJvZ3Jlc3NCYXIgPSBpZCArIFwiIC5kei1jb21wbGV0ZVwiO1xyXG4gICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgICQoIHRoaXNQcm9ncmVzc0JhciArIFwiIC5wcm9ncmVzcy1iYXIsIFwiICsgdGhpc1Byb2dyZXNzQmFyICsgXCIgLnByb2dyZXNzXCIpLmNzcygnb3BhY2l0eScsICcwJyk7XHJcbiAgICAgICAgICAgICB9LCAzMDApXHJcbiAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgLy8gcHVibGljIGZ1bmN0aW9uc1xyXG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBkZW1vMSgpO1xyXG4gICAgICAgICAgICBkZW1vMigpO1xyXG4gICAgICAgICAgICBkZW1vMygpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn0oKTtcclxuXHJcbktUVXRpbC5yZWFkeShmdW5jdGlvbigpIHtcclxuICAgIEtURHJvcHpvbmVEZW1vLmluaXQoKTtcclxufSk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/metronic/js/pages/crud/file-upload/dropzonejs.js\n");

/***/ }),

/***/ 47:
/*!**************************************************************************!*\
  !*** multi ./resources/metronic/js/pages/crud/file-upload/dropzonejs.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! G:\wamp64\www\adnsite\public\admin\themes\metronic\resources\metronic\js\pages\crud\file-upload\dropzonejs.js */"./resources/metronic/js/pages/crud/file-upload/dropzonejs.js");


/***/ })

/******/ });