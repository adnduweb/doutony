var KTFormRepeater = {
    init: function() {
        $("#kt_repeater_1").repeater({
            initEmpty: !1,
            show: function() {
                $(this).slideDown()
            },
            hide: function(e) {
                confirm("Are you sure you want to delete this element?") && $(this).slideUp(e)
            },
            isFirstItemUndeletable: true,
        });
    }
};
jQuery(document).ready(function() {
    KTFormRepeater.init()
});


$(document).on("change", ".selectpicker", function(e) {
    if ($(this).attr('name') == 'lang' && $(".selectpicker.fileTheme option").prop("selected") && $(".selectpicker.fileCore option ").prop("selected")) {
        return false;
    }
    if ($(this).attr('name') == 'fileCore') {
        $(".selectpicker.fileTheme option:selected").prop("selected", false);
        $('.selectpicker.fileTheme').selectpicker('refresh');
    } else if ($(this).attr('name') == 'fileTheme') {
        $(".selectpicker.fileCore option:selected").prop("selected", false);
        $('.selectpicker.fileCore').selectpicker('refresh');
    }
    $("#searchDirect").val("");

    $.ajax({
        type: 'POST',
        url: basePath + segementAdmin + "/sp-admin-ajax",
        data: {
            ajax: true,
            controller: 'AdminTranslateController',
            action: 'getfile',
            module: false,
            value: $('form#search_translate').serializeArray(),
            name_module: false,
        },
        dataType: "json",
        beforeSend: function(xhr) {
            KTApp.block("#search_translate", {
                overlayColor: "#000000",
                state: "primary"
            })
        },
        success: function(response) {
            KTApp.unblock("#search_translate");
            $('#response').html(response.html);
            KTFormRepeater.init();
            console.log(response);
        }
    });
});

$(document).on("click", ".btnSaveTranslate", function(e) {
    e.preventDefault();
    $.ajax({
        type: 'POST',
        url: basePath + segementAdmin + "/sp-admin-ajax",
        data: {
            ajax: true,
            controller: 'AdminTranslateController',
            action: 'savefile',
            module: false,
            value: $('form#save_translate').serializeArray(),
            name_module: false,
        },
        dataType: "json",
        beforeSend: function(xhr) {
            KTApp.block("#response", {
                overlayColor: "#000000",
                state: "primary"
            })
        },
        success: function(response) {
            KTApp.unblock("#response");
            $.notify({
                title: response.title,
                message: response.message
            }, {
                type: response.type,
                placement: {
                    from: 'top',
                    align: 'right'
                },
            });
        }
    });
});

$(document).on("click", ".btnDeleteTranslate", function(e) {
    e.preventDefault();
    $(this).parent().parent().remove();
    $.ajax({
        type: 'POST',
        url: basePath + segementAdmin + "/sp-admin-ajax",
        data: {
            ajax: true,
            controller: 'AdminTranslateController',
            action: 'deleteTexte',
            module: false,
            value: $('form#save_translate').serializeArray(),
            name_module: false,
        },
        dataType: "json",
        beforeSend: function(xhr) {
            KTApp.block("#response", {
                overlayColor: "#000000",
                state: "primary"
            })
        },
        success: function(response) {
            KTApp.unblock("#response");
            $.notify({
                title: response.title,
                message: response.message
            }, {
                type: response.type,
                placement: {
                    from: 'top',
                    align: 'right'
                },
            });
        }
    });
});

$(document).ready(function() {

    function load_data(query) {

        $.ajax({
            type: 'POST',
            url: basePath + segementAdmin + "/sp-admin-ajax",
            data: {
                ajax: true,
                controller: 'AdminTranslateController',
                action: 'searchTexte',
                module: false,
                value: $('form#search_translate').serializeArray(),
                name_module: false,
            },
            dataType: "json",
            beforeSend: function(xhr) {
                KTApp.block("#response", {
                    overlayColor: "#000000",
                    state: "primary"
                })
            },
            success: function(response) {
                KTApp.unblock("#response");
                $('#response').html(response.html);
            }
        });

    }
    $('#searchDirect').keyup(function() {
        $(".selectpicker.file option:selected").prop("selected", false);
        $('.selectpicker.file').selectpicker('refresh');
        var search = $(this).val();
        if (search != '') {
            load_data(search);
        }
    });
});


$(document).on("click", ".btnTextTranslate", function(e) {
    e.preventDefault();
    $.ajax({
        type: 'POST',
        url: basePath + segementAdmin + "/sp-admin-ajax",
        data: {
            ajax: true,
            controller: 'AdminTranslateController',
            action: 'saveTextfile',
            module: false,
            value: $(this).parent().parent().parent().serializeArray(),
            name_module: false,
        },
        dataType: "json",
        beforeSend: function(xhr) {
            KTApp.block("#response", {
                overlayColor: "#000000",
                state: "primary"
            })
        },
        success: function(response) {
            KTApp.unblock("#response");
            $.notify({
                title: response.title,
                message: response.message
            }, {
                type: response.type,
                placement: {
                    from: 'top',
                    align: 'right'
                },
            });
        }
    });
});


$(document).on("click", ".btnTextDeleteTranslate", function(e) {
    e.preventDefault();
    $.ajax({
        type: 'POST',
        url: basePath + segementAdmin + "/sp-admin-ajax",
        data: {
            ajax: true,
            controller: 'AdminTranslateController',
            action: 'deleteTextfile',
            module: false,
            value: $(this).parent().parent().parent().serializeArray(),
            name_module: false,
        },
        dataType: "json",
        beforeSend: function(xhr) {
            KTApp.block("#response", {
                overlayColor: "#000000",
                state: "primary"
            })
        },
        success: function(response) {
            KTApp.unblock("#response");
            $.notify({
                title: response.title,
                message: response.message
            }, {
                type: response.type,
                placement: {
                    from: 'top',
                    align: 'right'
                },
            });
        }
    });
});