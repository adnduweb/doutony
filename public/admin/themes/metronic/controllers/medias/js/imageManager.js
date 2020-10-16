// ON selectionne les images
$(document).on('click', '.select-image', function(event) {
    console.log(event);
    var idMedia = $(this).data("id-media");

    $.ajax({
        type: 'POST',
        url: basePath + segementAdmin + "/sp-admin-ajax",
        data: {
            ajax: true,
            controller: 'AdminMediaController',
            action: 'getManagerEdition',
            value: {
                idMedia: idMedia
            },
            module: false
        },
        dataType: "json",
        success: function(result, status, xhr) {
            if (xhr.status == 200) {
                $('#imageManager_edition').html(result.html);
                $('#imageManager_edition #kt_modal_manager_edition').modal("show");

            }

        }
    });
});

// ON enregistre les datas
$(document).on('submit', '#kt_apps_manager_media', function(event) {
    event.preventDefault();

    $.ajax({
        type: 'POST',
        url: basePath + segementAdmin + "/sp-admin-ajax",
        data: {
            ajax: true,
            controller: 'AdminMediaController',
            action: 'saveManagerEdition',
            value: $(this).serialize(),
            module: false
        },
        dataType: "json",
        success: function(result, status, xhr) {
            if (xhr.status == 200) {
                $.notify({
                    title: _LANG_.updated + "!",
                    message: result.message
                }, {
                    type: result.type,
                    placement: {
                        from: 'top',
                        align: 'right'
                    },
                });
            }

        }
    });
});

// on supprime les fichiers custom
$(document).on('click', '#kt_apps_manager_media .deleteFileCustom', function(event) {
    event.preventDefault();

    var deleteFileCustom = $(this);


    $.ajax({
        type: 'POST',
        url: basePath + segementAdmin + "/sp-admin-ajax",
        data: {
            ajax: true,
            controller: 'AdminMediaController',
            action: 'deteteFileCustom',
            value: $(this).data('format'),
            module: false
        },
        dataType: "json",
        success: function(result, status, xhr) {
            if (xhr.status == 200) {
                deleteFileCustom.parent().parent().remove();
                $.notify({
                    title: _LANG_.updated + "!",
                    message: result.message
                }, {
                    type: result.type,
                    placement: {
                        from: 'top',
                        align: 'right'
                    },
                });
            }

        }
    });
});

// on supprime l'image et ses dépendances
$(document).on('click', '#kt_apps_manager_media .deleteFile', function(event) {
    event.preventDefault();
    var imageManager = $(this).data('imagemanager');


    $.ajax({
        type: 'POST',
        url: basePath + segementAdmin + "/sp-admin-ajax",
        data: {
            ajax: true,
            controller: 'AdminMediaController',
            action: 'deleteFile',
            value: {
                uuid: $(this).data('uuid')
            },
            imageManager: $(this).data('imagemanager'),
            module: false
        },
        dataType: "json",
        beforeSend: function(xhr) {
            KTApp.block("#imageManager", {
                overlayColor: "#000000",
                state: "primary"
            });
        },
        success: function(result, status, xhr) {
            if (xhr.status == 200) {
                $.notify({
                    title: _LANG_.updated + "!",
                    message: result.message
                }, {
                    type: result.type,
                    placement: {
                        from: 'top',
                        align: 'right'
                    },
                });
                $('#imageManager_edition #kt_modal_manager_edition').modal("hide");
                $('#imageManager_edition').html("");
                console.log(imageManager);
                if (imageManager == 'reload') {
                    KTApp.unblock("#imageManager");
                    $('#imageManager').html(result.html);

                }
            }

        }
    });
});

// ON crop le fichier demnandé
//croppedFile
$(document).on('click', '#kt_apps_manager_media .croppedFile', function(event) {
    var uuid = $(this).data('uuid');
    var idMedia = $(this).data('id-media');

    $.ajax({
        type: 'POST',
        url: basePath + segementAdmin + "/sp-admin-ajax",
        data: {
            ajax: true,
            controller: 'AdminMediaController',
            action: 'getCropTemplate',
            value: {
                uuid: uuid,
                idMedia: idMedia,
                input: false
            },
            module: false
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
                    KTCropperDemo.init();
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
var KTCropperDemo = {
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
                        formData.append('ajax', true);
                        formData.append('controller', 'AdminMediaController');
                        formData.append('action', 'cropFile');
                        formData.append('value', $('#image-upload').attr('data-uuid'));
                        formData.append('module', false);
                        formData.append('field', false);
                        formData.append('imageCustomEdition', true);
                        formData.append('croppedImage', blob, $('#image-upload').attr('data-mine'));

                        $.ajax({
                            type: 'POST',
                            url: basePath + segementAdmin + "/sp-admin-ajax",
                            data: formData,
                            processData: false,
                            contentType: false,
                            dataType: "json",
                            success: function(result, status, xhr) {
                                if (xhr.status == 200) {
                                    $.notify({
                                        title: _LANG_.updated + "!",
                                        message: result.message
                                    }, {
                                        type: result.type,
                                        placement: {
                                            from: 'top',
                                            align: 'right'
                                        },
                                    });
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

/******* DROPZONE ************/
$(function() {
    Dropzone.autoDiscover = false;
    var DropZone = new Dropzone('#kt-dropzone', {
        url: basePath + segementAdmin + "/sp-admin-ajax?time=" + $.now(),
        maxFiles: 50,
        maxFilesize: 5,
        acceptedFiles: 'image/*,application/pdf, .svg',
        uploadmultiple: true,
        addRemoveLinks: !0,
        timeout: 60000,
        //method: 'POST',
        headers: {
            'X-CSRF-TOKEN': token_hash,
            'X-Requested-With': 'XMLHttpRequest'
        },

    });
    DropZone.on("thumbnail", function(file) {
        if (file.height < 350 && file.width < 2048) {
            alert("Image should be 350 x 2048 ");
        }
    });
    DropZone.on("addedfile", function(o) {
        console.log('addedfile');
    });
    DropZone.on("sending", function(file, xhr, formData) {

        KTApp.block("#imageManager", {
            overlayColor: "#000000",
            state: "primary"
        });

        formData.append("ajax", true);
        formData.append("controller", 'AdminMediaController');
        formData.append("action", 'saveFile');
        formData.append("value", true);
        formData.append("module", false);
        formData.append("uuid", file.upload.uuid);
        formData.append("crop", false);
        formData.append("reloadImageManager", true);

    });

    DropZone.on("queuecomplete", function(file, response) {
        if (DropZone.files[0].status == Dropzone.SUCCESS) {

            $.ajax({
                type: 'POST',
                url: basePath + segementAdmin + "/sp-admin-ajax",
                data: {
                    ajax: true,
                    controller: 'AdminMediaController',
                    action: 'getFileImageManger',
                    value: true,
                    module: false
                },
                dataType: "json",
                success: function(result, status, xhr) {
                    if (xhr.status == 200) {
                        KTApp.unblock("#imageManager");
                        $('#imageManager').html(result.imageManager);
                    }

                }
            });

        }
    });

    DropZone.on('success', function(file, response) {
        console.log(file, response);
    });
    DropZone.on("error", function(file, response, xhr) {
        console.log('errored', file, response, xhr); // for debugging
        if (typeof xhr !== 'undefined') {
            this.defaultOptions.error(file, xhr.statusText); // use xhr err (from server)
        } else {
            this.defaultOptions.error(file, response); // use default (from dropzone)
        }
    });
    DropZone.on("removedfile", function(file, response, xhr) {
        console.log('removedfile', file, response, xhr); // for debugging

        $.ajax({
            type: 'POST',
            url: basePath + segementAdmin + "/sp-admin-ajax",
            data: {
                ajax: true,
                controller: 'AdminMediaController',
                action: 'deleteFile',
                value: {
                    uuid: file.upload.uuid
                },
                imageManager: 'reload',
                module: false
            },
            dataType: "json",
            success: function(result, status, xhr) {
                //Success Message
                if (xhr.status == 200) {
                    $('#imageManager').html(result.html);
                    $.notify({
                        title: _LANG_.deleted + "!",
                        message: result.message
                    }, {
                        type: result.type,
                        placement: {
                            from: 'top',
                            align: 'right'
                        },
                    });
                }
            }
        });
    });
});