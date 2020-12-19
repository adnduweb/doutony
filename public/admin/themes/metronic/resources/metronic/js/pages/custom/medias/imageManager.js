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
}
$(function() {
    var filesDropzone = new Dropzone("#kt_dropzone_media_manager", {

        url: current_url + "/upload?time=" + $.now(),
        headers: {
            'X-CSRF-TOKEN': $('meta[name="X-CSRF-TOKEN"]').attr('content'),
            'X-Requested-With': 'XMLHttpRequest'
        },
        params: function(files, xhr, chunk) {
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
                    userID: 1,
                };
            }
        },
        acceptedFiles: "image/jpeg,image/png,image/gif",
        uploadmultiple: true,
        addRemoveLinks: !0,
        timeout: 0,
        // parallelUploads: 1, // since we're using a global 'currentFile', we could have issues if parallelUploads > 1, so we'll make it = 1
        maxFilesize: Medias.maxFilesize, // max individual file size 1024 MB
        chunking: true, // enable chunking
        forceChunking: true, // forces chunking when file.size < chunkSize
        // parallelChunkUploads: true, // allows chunks to be uploaded in parallel (this is independent of the parallelUploads option)
        chunkSize: 75387608, // chunk size 1,000,000 bytes (~1MB)
        retryChunks: true, // retry chunks on failure
        retryChunksLimit: 3, // retry maximum of 3 times (default is 3)
        init: function() {

            this.on("addedfile", function(file) {
                console.log('addedfile');
                //this.removeFile(file);
            });

            this.on("complete", function(file) {
                console.log('complete');

                $.ajax({
                    type: 'GET',
                    url: current_url + "/getDisplayImageManager",
                    contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
                    data: {
                        [crsftoken]: $('meta[name="X-CSRF-TOKEN"]').attr('content'),
                    },
                    dataType: "json",
                    success: function(response, status, xhr) {
                        console.log(response);
                        $('#imageManager').html(response.html);
                    }
                });

            });

            this.on('success', function(file, response) {
                console.log('success');

                if (file.previewElement) {
                    return file.previewElement.classList.add("dz-success"),
                        $(function() {
                            setTimeout(function() {
                                $('.dz-success').fadeOut('slow');
                            }, 2500);
                        });
                }

            });

            this.on("sending", function(file, xhr, formData) {

                KTApp.block("#imageManager", {
                    overlayColor: "#000000",
                    state: "primary"
                });

            });

            this.on("queuecomplete", function(file, res) {

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
                    $('.dz-message').fadeIn('slow');

                    //this.removeAllFiles();
                    // if (imageManager == 'reload') {
                    //     KTApp.unblock("#imageManager");
                    //     $('#imageManager').html(result.html);
                    // }
                }
            });

            this.on("error", function(file, response, xhr) {
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

            this.on("removedfile", function(file, response, xhr) {

                console.log('removedfile', file, response, xhr); // for debugging

                $.ajax({
                    type: 'GET',
                    url: current_url + "/removedfile/" + file.upload.uuid,
                    contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
                    data: {
                        [crsftoken]: $('meta[name="X-CSRF-TOKEN"]').attr('content'),
                    },
                    dataType: "json",
                    success: function(result, status, xhr) {
                        console.log(response);
                    }
                })

            });
        }
    });


    // Display manager Image
    $(document).on('click', '.select-image', function(e) {
        e.preventDefault();
        console.log(e);
        var uuidMedia = $(this).data("uuid-media");

        $.ajax({
            type: 'POST',
            url: current_url + "/getManagerEdition",
            contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
            data: {
                [crsftoken]: $('meta[name="X-CSRF-TOKEN"]').attr('content'),
                value: {
                    uuid: uuidMedia
                }
            },
            dataType: "json",
            success: function(result, status, xhr) {
                if (xhr.status == 200) {
                    $('#imageManager_edition').html(result.html);
                    $('#imageManager_edition > #kt_modal_manager_edition').modal("show");
                }
            }
        });
    });

    // Save data Image
    $(document).on('submit', '#kt_apps_manager_media', function(event) {
        event.preventDefault();

        $.ajax({
            type: 'POST',
            url: current_url + "/saveManagerEdition",
            contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
            data: {
                [crsftoken]: $('meta[name="X-CSRF-TOKEN"]').attr('content'),
                value: $(this).serialize()
            },
            dataType: "json",
            success: function(result, status, xhr) {
                $.notify({
                    title: (result.success.message) ? _LANG_.updated + "!" : _LANG_.warning + "!",
                    message: (result.success.message) ? result.success.message : result.error.message
                }, {
                    type: (result.success.message) ? 'success' : 'warning'
                });
            }
        });
    });

    // Delete File
    $(document).on('click', '.deleteFileMedia', function(event) {
        event.preventDefault();
        var imageManager = $(this).data('imagemanager');

        $.ajax({
            type: 'POST',
            url: current_url + "/removeFile",
            data: {
                [crsftoken]: $('meta[name="X-CSRF-TOKEN"]').attr('content'),
                uuid: $(this).data('uuid')
            },
            dataType: "json",
            beforeSend: function(xhr) {
                KTApp.block("#imageManager", {
                    overlayColor: "#000000",
                    state: "primary"
                });
            },
            success: function(result, status, xhr) {

                $.notify({
                    title: (result.success.message) ? _LANG_.updated + "!" : _LANG_.warning + "!",
                    message: (result.success.message) ? result.success.message : result.error.message
                }, {
                    type: (result.success.message) ? 'success' : 'warning'
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
});

// ON crop le fichier demnandé
//croppedFile
$(document).on('click', '#kt_apps_manager_media .croppedFile', function(event) {
    var uuid = $(this).data('uuid');

    $.ajax({
        type: 'POST',
        url: current_url + "/getCropTemplate",
        data: {
            [crsftoken]: $('meta[name="X-CSRF-TOKEN"]').attr('content'),
            uuid: $(this).data('uuid')
        },
        dataType: "json",
        beforeSend: function(xhr) {
            KTApp.block(".thumbnail-image", {
                overlayColor: "#000000",
                state: "primary"
            });
        },
        success: function(response, status, xhr) {
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

$(document).on('click', '#kt_modal_manager_edition .cancelCrop', function(event) {
    event.preventDefault();
    $('#cropImage').fadeOut();
    $('#cropImage').html('');
    $('.attachment-media-view').fadeIn();
});


"use strict";
var KTCropper = {
    init: function() {
        var e, t, a;
        e = document.getElementById("image-upload"), t = {
            crop: function(e) {
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
                }))
            },
            cropmove: function(e) {
                console.log(e.type, e.detail.action);
            }
        }, a = new Cropper(e, t), document.getElementById("cropper-buttons").querySelectorAll("[data-method]").forEach(function(e) {
            e.addEventListener("click", function(t) {
                var n, d = e.getAttribute("data-method"),
                    o = e.getAttribute("data-option") || undefined,
                    r = e.getAttribute("data-second-option") || undefined;
                try {
                    o = JSON.parse(o)
                } catch (t) {}
                if (n = r ? o ? '' : a[d]() : a[d](o, r), "getCroppedCanvas" === d) {
                    // var i = document.getElementById("getCroppedCanvasModal").querySelector(".modal-body");
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

                    a.getCroppedCanvas(option).toBlob((blob) => {
                        const formData = new FormData();

                        // Pass the image file name as the third parameter if necessary.
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
                            success: function(result, status, xhr) {

                                $.notify({
                                    title: (result.success.message) ? _LANG_.updated + "!" : _LANG_.warning + "!",
                                    message: (result.success.message) ? result.success.message : result.error.message
                                }, {
                                    type: (result.success.message) ? 'success' : 'warning'
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
                    c.value = JSON.stringify(n)
                } catch (t) {
                    n || (c.value = n)
                }
            })
        }), document.getElementById("setAspectRatio").querySelectorAll('[name="aspectRatio"]').forEach(function(e) {
            e.addEventListener("click", function(e) {
                a.setAspectRatio(e.target.value)
            })
        });
    }
};

// on supprime les fichiers custom
$(document).on('click', '#kt_apps_manager_media .deleteFileCustom', function(event) {
    event.preventDefault();

    var deleteFileCustom = $(this);


    $.ajax({
        type: 'POST',
        url: current_url + "/deteteFileCustom",
        data: {
            [crsftoken]: $('meta[name="X-CSRF-TOKEN"]').attr('content'),
            format: $(this).data('format'),
            uuid: $(this).data('uuid')
        },

        dataType: "json",
        success: function(result, status, xhr) {

            $.notify({
                title: (result.success.message) ? _LANG_.updated + "!" : _LANG_.warning + "!",
                message: (result.success.message) ? result.success.message : result.error.message
            }, {
                type: (result.success.message) ? 'success' : 'warning'
            });

            if (xhr.status == 200) {
                deleteFileCustom.parent().parent().remove();
            }

        }
    });
});