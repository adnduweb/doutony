$(function() {
    $(".kt-portlet").each(function(index) {
        portlet = new KTPortlet($(this).attr('id'), optionsPortlet);
    });

    $(document).on("click", '#add', function() {
        if ($(".parent-container").children().length < 5) {
            var id_field = Math.floor(Math.random() * (100000000000000 - 1 + $(".parent-container").children().length) + 57);
            var id_diaporama = $('.parent-container').attr('data-id_diaporama');
            $.ajax({
                type: 'POST',
                url: basePath + segementAdmin + "/sp-admin-ajax",
                data: {
                    ajax: true,
                    controller: 'AdminDiaporamasController',
                    action: 'getTemplateSlide',
                    value: {
                        id_field: id_field,
                        id_diaporama: id_diaporama
                    },
                    module: window.btoa('Adnduweb/Ci4_diaporama')
                },
                dataType: "json",
                success: function(result, status, xhr) {
                    if (xhr.status == 200) {
                        content = result.template_slide;
                        content = content.replace(/\__n__/g, $(".parent-container").children().length + 1);
                        var script = '<script>jQuery(document).ready(function() {var kt_portlet_tools' + id_field + ' = new KTPortlet("kt_portlet_tools' + id_field + '", optionsPortlet);}); </script>';
                        content = content.replace('__script__', script);
                        //serviceBlockUploadImage();
                        $(".parent-container").append(content);
                        if ($("div#kt-dropzone" + id_field).length) {
                            serviceBlockUploadImage("div#kt-dropzone" + id_field);
                        }
                    }
                }
            });

        }
        if ($(".parent-container").children().length == 5) {
            $("#add").hide();
        }
    });

    $("#kt_user_edit_tab_2 .parent-container").sortable({
        //connectWith: ".kt-portlet__head .kt-portlet__head-label",
        //cancel: '.kt-section__body',
        items: ".kt-portlet",
        opacity: .8,
        handle: ".handle-croix",
        coneHelperSize: !0,
        placeholder: "kt-portlet--sortable-placeholder",
        forcePlaceholderSize: !0,
        tolerance: "pointer",
        helper: "clone",
        cancel: ".kt-portlet--sortable-empty",
        revert: 250,
        update: function(e, t) {
            t.item.prev().hasClass("kt-portlet--sortable-empty") && t.item.prev().before(t.item)
        }
    });

    $(document).on('click', '.removePortlet', function() {
        var id_slide = $(this).data('id-slide');
        if (id_slide != '') {
            $.ajax({
                type: 'POST',
                url: basePath + segementAdmin + "/sp-admin-ajax",
                data: {
                    ajax: true,
                    controller: 'AdminDiaporamasController',
                    action: 'deleteSlide',
                    value: id_slide,
                    module: window.btoa('Adnduweb/Ci4_diaporama')
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
                                from: 'bottom',
                                align: 'center'
                            },
                        });
                    }

                }
            });
        }
    });

});