function serviceBlockUploadImage(element) {
    var serviceBlockUploadImage = $(element).dropzone({

        url: basePath + segementAdmin + "/sp-admin-ajax?time=" + $.now(),
        maxFiles: $(this).attr('data-maxfiles'),
        maxFilesize: $(this).attr('data-maxfilesize'),
        acceptedFiles: $(this).attr('data-acceptedfiles'),
        uploadmultiple: $(this).attr('data-uploadmultiple'),
        addRemoveLinks: !0,
        headers: {
            'X-CSRF-TOKEN': token_hash,
            'X-Requested-With': 'XMLHttpRequest'
        },
        init: function() {

            this.on("addedfile", function(o) {
                console.log('addedfile');
            });
            this.on("sending", function(file, xhr, formData) {
                var self = serviceBlockUploadImage;
                console.log(self);
                var field = self.data('field');
                var id = self.attr('id');
                var crop = self.attr('data-crop');
                var only = self.attr('data-only');
                var input = self.attr('data-input');
                var crop_width = self.attr('data-crop_width');
                var crop_height = self.attr('data-crop_height');
                formData.append("ajax", true);
                formData.append("controller", 'AdminMediaController');
                formData.append("action", 'saveFile');
                formData.append("value", true);
                formData.append("module", false);
                formData.append("uuid", file.upload.uuid);
                formData.append("field", field);
                formData.append("only", only);
                formData.append("input", input);
                formData.append("crop", crop);
                formData.append("crop_width", crop_width);
                formData.append("crop_height", crop_height);
            });

            this.on('success', function(file, response) {

                var self = serviceBlockUploadImage;
                var field = self.attr('data-field');
                var id = self.attr('id');
                var crop = self.attr('data-crop');
                var only = self.attr('data-only');
                var input = self.attr('data-input');
                var crop_width = self.attr('data-crop_width');
                var crop_height = self.attr('data-crop_height');

                $('#kt_portlet_tools' + field + ' .upload_id_images ').val(response.idMedia);
                $('#kt_portlet_tools' + field + ' .upload_formats').val(response.format);
                $('#kt_portlet_tools' + field + ' .upload_file').val(response.filename);
                $("input[name='builder[" + field + "][options]']").val(response.widgetOption);
                var is_unique = (response.only == true) ? 'is_unique' : ' ';
                var template = '<div class="kt-media ' + is_unique + ' kt-media_' + response.idMedia + '" data-id-media="' + response.idMedia + '"><a href="#" class="kt-media" > ' +
                    '<img src="' + response.filename + '" alt="image">' +
                    '</a>' +
                    '<label class="kt-avatar__remove deletefile" data-container="body" data-toggle="kt-tooltip" title="" data-placement="top" data-original-title="remove image" data-id-media="' + response.idMedia + '" data-id-field="' + field + '" data-format="' + response.format + '" data-id-file="' + response.filename + '">' +
                    '  <i class="fa fa-times"></i>' +
                    '</label></div>';

                $('#kt_portlet_tools' + field + ' .kt-section__content_media').html(template);
                if ($('#kt_portlet_tools' + field + ' .image_une').length)
                    $('#kt_portlet_tools' + field + ' .image_une').html('<img src="' + response.filename + '" alt="image">');


                if (response.crop == true) {
                    $('#cropImage' + field).html(response.cropImage);
                    $('#cropImage' + field).fadeIn();
                    KTCropperDemo.init();
                }
            });
            this.on("error", function(file, response, xhr) {
                console.log('errored', file, response, xhr); // for debugging
                if (typeof xhr !== 'undefined') {
                    this.defaultOptions.error(file, xhr.statusText); // use xhr err (from server)
                } else {
                    this.defaultOptions.error(file, response); // use default (from dropzone)
                }
            });
            this.on("removedfile", function(file, response, xhr) {
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
                        module: false
                    },
                    dataType: "json",
                    success: function(result, status, xhr) {
                        //Success Message
                        if (xhr.status == 200) {
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

                })

            });

        },
    });
}
jQuery(document).ready(function() {
    $('.kt_dropzone').not('.kt_dropzone__field__').each(function(index, value) {
        console.log($(this).attr('id'));
        serviceBlockUploadImage('#' + $(this).attr('id'));
    });
});

"use strict";
var KTCropperDemo = {
    init: function() {
        var e, t, a;
        e = document.getElementById("image-upload"), t = {
            aspectRatio: ((e.getAttribute('data-crop_width') != "") ? e.getAttribute('data-crop_width') : 16) / ((e.getAttribute('data-crop_height') != "") ? e.getAttribute('data-crop_height') : 9),
            zoomable: false,
            ready: function(e) {
                console.log(e.type);
            },
            crop: function(e) {
                document.getElementById("dataX").value = Math.round(e.detail.x), document.getElementById("dataY").value = Math.round(e.detail.y), document.getElementById("dataWidth").value = Math.round(e.detail.width), document.getElementById("dataHeight").value = Math.round(e.detail.height), document.getElementById("dataRotate").value = e.detail.rotate, document.getElementById("dataScaleX").value = e.detail.scaleX, document.getElementById("dataScaleY").value = e.detail.scaleY;
                var t = document.getElementById("cropper-preview-lg");
                t.innerHTML = "", t.appendChild(a.getCroppedCanvas({
                    width: 1500,
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
            }
        }, a = new Cropper(e, t), document.getElementById("cropper-buttons").querySelectorAll("[data-method]").forEach(function(e) {
            console.log(t);
            e.addEventListener("click", function(t) {
                var n, d = e.getAttribute("data-method"),
                    o = e.getAttribute("data-option"),
                    r = e.getAttribute("data-second-option");
                try {
                    o = JSON.parse(o)
                } catch (t) {}
                // if (n = r ? o ? a[d](o) : a[d]() : a[d](o, r), "getCroppedCanvas" === d) {
                //     var i = document.getElementById("getCroppedCanvasModal").querySelector(".modal-body");
                //     i.innerHTML = "", i.appendChild(n)
                // }
                if (n = r ? o ? '' : a[d]() : a[d](o, r), "getCroppedCanvas" === d) {
                    // var i = document.getElementById("getCroppedCanvasModal").querySelector(".modal-body");
                    // console.log(n);
                    // i.innerHTML = "", i.appendChild(n)
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
                        formData.append('field', $('#image-upload').attr('data-field'));
                        formData.append('croppedImage', blob, $('#image-upload').attr('data-mine'));
                        formData.append('only', $('#image-upload').attr('data-only'));
                        formData.append('input', $('#image-upload').attr('data-input'));

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
                                    console.log(result);
                                    $('#kt_portlet_tools' + result.field + ' .upload_id_images').val(result.idMedia);
                                    $('#kt_portlet_tools' + result.field + ' .upload_formats').val(result.format);
                                    $('#kt_portlet_tools' + result.field + ' .upload_file ').val(result.pathThumbnail);

                                    var field = result.field;
                                    field = field.replace(/\[/g, "_").replace(/\]/g, "").toLowerCase();
                                    //console.log('#cropImage' + field);
                                    $('#cropImage' + field).fadeOut();
                                    $('#cropImage' + field).html('');

                                    var is_unique = (result.only == true) ? 'is_unique' : ' ';

                                    var template = '<div class="kt-media ' + is_unique + ' kt-media_' + result.idMedia + '" data-id-media="' + result.idMedia + '"><a href="#" class="kt-media" > ' +
                                        '<img src="' + result.pathThumbnail + '" alt="image">' +
                                        '</a>' +
                                        '<label class="kt-avatar__remove deletefile" data-only="' + result.only + '" data-container="body" data-toggle="kt-tooltip" title="" data-placement="top" data-original-title="remove image" data-id-media="' + result.idMedia + '" data-id-field="' + result.field + '" data-format="' + result.format + '" data-id-file="' + result.pathThumbnail + '">' +
                                        '  <i class="fa fa-times"></i>' +
                                        '</label></div>';
                                    if (result.only == 0) {
                                        console.log("input[name='" + result.input + "[" + result.field + "][options]']");
                                        $("input[name='" + result.input + "[" + result.field + "][options]']").val(result.widgetOption);
                                        $('#kt_portlet_tools' + field + ' .kt-section__content_media').html(template);
                                    } else {
                                        $("input[name='" + result.field + "']").val(result.widgetOption);
                                        $('#' + field + ' .kt-section__content_media').html(template);
                                    }
                                    if ($('#kt_portlet_tools' + field + ' .image_une').length)
                                        $('#kt_portlet_tools' + field + ' .image_une').html('<img src="' + result.pathThumbnail + '" alt="image">');
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
                a.setAspectRatio(e.target.value);
            })
        });
    }
};


// Suppression du fichier
$(document).on('click', '.kt-section__content_media .deletefile', function() {
    var idMedia = $(this).data('id-media');
    var idformat = $(this).data('format');
    var idFile = $(this).data('id-file');
    var field = $(this).data('id-field');
    var only = $(this).attr('data-only');
    var input = $(this).attr('data-input');

    console.log(only);
    //if (typeof only == 'undefined') {
    if (only == false) {
        $('#kt_portlet_tools' + field + ' .kt-media_' + idMedia).remove();
        $('#kt_portlet_tools' + field + ' .upload_id_images').val('');
        $('#kt_portlet_tools' + field + ' .upload_formats').val('');
        $('#kt_portlet_tools' + field + ' .upload_file').val('');
        $("#kt_portlet_tools" + field + " input[name='" + input + "[" + field + "][options]']").val('');
    } else {
        $('#' + field + ' .kt-media_' + idMedia).remove();
        $("input[name='" + field + "']").val('');
    }


});


// On demande le gestionnaire d'image dans la modal manager
$(document).on('click', '.managerModal', function() {

    var manager = $(this);
    var type = $(this).attr('data-type');
    var uploadmultiple = $(this).attr('data-uploadmultiple');
    var idMediaSelect = $(this).attr('data-id-mediaSelect');
    var item = $(this).attr('data-item');
    var field = $(this).attr('data-field');
    var only = $(this).attr('data-only');
    var input = $(this).attr('data-input');
    var crop = $(this).attr('data-crop');
    var crop_width = $(this).attr('data-crop_width');
    var crop_height = $(this).attr('data-crop_height');


    $.ajax({
        type: 'POST',
        url: basePath + segementAdmin + "/sp-admin-ajax",
        data: {
            ajax: true,
            controller: 'AdminMediaController',
            action: 'getManager',
            value: {
                type: type,
                uploadmultiple: uploadmultiple,
                idMediaSelect: idMediaSelect,
                item: item,
                field: field,
                only: only,
                input: input,
                crop: crop,
                crop_width: crop_width,
                crop_height: crop_height
            },
            module: false
        },
        dataType: "json",
        success: function(result, status, xhr) {
            if (xhr.status == 200) {
                $('#kt_manager').html(result.html);
                $('#kt_manager #kt_modal_manager').modal("show");

                // ONselection les images depuis le gestionnaire d'image
                $('#kt_apps_manager_media').on('submit', function(e) {
                    e.preventDefault();
                    $(manager).attr('data-id-mediaselect', $('#images-select-manager').val());
                    $('.upload_id_images').val($('#images-select-manager').val());
                    $('.upload_formats').val($('#formats-select-manager').val());
                    $('.upload_file').val($('#files-select-manager').val());
                    $('#kt_manager .manager').modal('hide');
                    $('#kt_manager').html();
                    if ($('.upload_id_images').val() != "") {
                        var template = '<div class="kt-media kt-media_' + $('.upload_id_images').val() + '" data-id-media="' + $('.upload_id_images').val() + '"><a href="#" class="kt-media" > ' +
                            '<img src="' + $('.upload_file').val() + '" alt="image">' +
                            '</a>' +
                            '<label class="kt-avatar__remove deletefile" data-only="' + only + '" data-container="body" data-toggle="kt-tooltip" title="" data-placement="top" data-original-title="remove image" data-id-field="' + field + '" data-id-media="' + $('.upload_id_images').val() + '" data-format="' + $('.upload_formats').val() + '" data-id-file="' + $('.upload_file').val() + '">' +
                            '  <i class="fa fa-times"></i>' +
                            '</label></div>';

                        var widgetOption = '{"media":{"id":' + $("#images-select-manager").val() + ',"filename":"' + $("#files-select-manager").val() + '","format":"' + $("#formats-select-manager").val() + '","extension":"' + $("#extensions-select-manager").val() + '"}}';

                        if (only == false) {
                            field = field.replace(/\[/g, "_").replace(/\]/g, "").toLowerCase();
                            $("input[name='" + input + "[" + field + "][options]']").val(widgetOption);
                            $('#kt_portlet_tools' + field + ' .kt-section__content_media').html(template);
                        } else {
                            $("input[name='" + field + "']").val(widgetOption);
                            field = field.replace(/\[/g, "_").replace(/\]/g, "").toLowerCase();
                            $('#' + field + ' .kt-section__content_media').html(template);
                        }
                        if ($('#kt_portlet_tools' + field + ' .image_une').length)
                            $('#kt_portlet_tools' + field + ' .image_une').html('<img src="' + $('.upload_file').val() + '" alt="image">');
                    }
                });
            }
        }
    });

});


// ON selectionne les images dans la modal manager
$(document).on('click', '.select-image', function(event) {
    console.log(event);
    var idMedia = $(this).data("id-media");
    var uploadmultiple = $(this).data("uploadmultiple");

    // Only images

    if (uploadmultiple == "") {
        //$('.select-image').removeClass("select-active");
        if ($("#select-image_" + idMedia).hasClass("select-active")) {
            $("#select-image_" + idMedia).removeClass("select-active");
            $('#kt_apps_manager_media input.images-select-manager').val('');
            $('#kt_apps_manager_media input.formats-select-manager').val('');
            $('#kt_apps_manager_media input.files-select-manager').val('');
            return false;
        } else {
            $('.select-image').removeClass("select-active");
            $("#select-image_" + idMedia).addClass("select-active");
            $('#kt_apps_manager_media input.images-select-manager').val(idMedia);
            $('#kt_apps_manager_media input.formats-select-manager').val($('#kt_apps_manager_media .select-image_' + idMedia + ' select.format').val());
            $('#kt_apps_manager_media input.files-select-manager').val($('#kt_apps_manager_media .select-image_' + idMedia).attr('data-file-thumbnail'));
            $('#kt_apps_manager_media input.extensions-select-manager').val($('#kt_apps_manager_media .select-image_' + idMedia).attr('data-extension'));
            $(document).on('change', '.select-image_' + idMedia + ' select.format', function(e) {
                e.stopPropagation();
                console.log('On stop la propagation. ');
                $('#kt_apps_manager_media input.formats-select-manager').val($('#kt_apps_manager_media .select-image_' + idMedia + ' select.format').val());
            });
            return false;
        }
        // Gallery
    } else {
        $(this).toggleClass("select-active");
        $('#kt_apps_manager_media input.images-select-manager').val(idMedia);
        $('#kt_apps_manager_media input.formats-select-manager').val($('#kt_apps_manager_media .select-image_' + idMedia + ' select.format').val(idMedia));
        $('#kt_apps_manager_media input.files-select-manager').val($('#kt_apps_manager_media .select-image_' + idMedia).attr('data-file-thumbnail'));
    }
});

// On stoppe l'événement sur le select
$(document).on('click', 'select.format, #kt_modal_manager .deletefile, #kt_modal_manager .editfile', function(e) {
    e.stopPropagation();
});

$(document).on('click', '.cropImage .cancelCrop', function(event) {
    event.preventDefault();
    var field = $(this).attr('data-field');
    //console.log(field);
    field = field.replace(/\[/g, "_").replace(/\]/g, "").toLowerCase();
    $('#cropImage' + field).fadeOut();
    $('#cropImage' + field).html('');
});

/// On decide de choir une image mais de la recropper

$(document).on('click', '#kt_modal_manager .reCropImage', function(event) {
    var uuid = $(this).data('uuid');
    var field = $(this).data('field');
    var idMedia = $(this).data('id-media');
    var crop = $(this).attr('data-crop');
    var only = $(this).attr('data-only');
    var input = $(this).attr('data-input');
    var crop_width = $(this).attr('data-crop_width');
    var crop_height = $(this).attr('data-crop_height');

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
                field: field,
                only: only,
                input: input,
                crop: crop,
                crop_width: crop_width,
                crop_height: crop_height,
            },
            module: false
        },
        dataType: "json",
        beforeSend: function(xhr) {
            KTApp.block(".managerModal", {
                overlayColor: "#000000",
                state: "primary"
            });
        },
        success: function(response, status, xhr) {
            if (xhr.status == 200) {
                KTApp.unblock(".managerModal");
                $('#kt_manager #kt_modal_manager').modal("hide");
                if (response.crop == true) {
                    //field = field.replace(/\[/g, "_").replace(/\]/g, "").toLowerCase();
                    $('#cropImage' + field).html(response.cropImage);
                    $('#cropImage' + field).fadeIn();
                    KTCropperDemo.init();
                    KTApp.initTooltips();
                }
            }
        }

    });
});