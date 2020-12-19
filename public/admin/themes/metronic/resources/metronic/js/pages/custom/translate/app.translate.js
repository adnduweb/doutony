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


$(document).on("change", ".selectFilePicker", function(e) {
    if ($(this).attr('name') == 'lang' && $(".selectFilePicker.fileTheme option").prop("selected") && $(".selectFilePicker.fileCore option ").prop("selected")) {
        return false;
    }
    if ($(this).attr('name') == 'fileCore') {
        $(".selectFilePicker.fileTheme option:selected").prop("selected", false);
        $('.selectpicker.fileTheme').selectpicker('refresh');
    } else if ($(this).attr('name') == 'fileTheme') {
        $(".selectFilePicker.fileCore option:selected").prop("selected", false);
        $('.selectpicker.fileCore').selectpicker('refresh');
    }
    $("#searchDirect").val("");

    $.ajax({
        type: 'POST',
        url: current_url + "/getfile",
        data: {
            [crsftoken]: $('meta[name="X-CSRF-TOKEN"]').attr('content'),
            value: $('form#search_translate').serializeArray(),
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
        }
    });
});

$(document).on("click", ".btnSaveTranslate", function(e) {
    e.preventDefault();
    $.ajax({
        type: 'POST',
        url: current_url + "/savefile",
        data: {
            [crsftoken]: $('meta[name="X-CSRF-TOKEN"]').attr('content'),
            value: $('form#save_translate').serializeArray(),
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
                title: (response.success.message) ? _LANG_.save_data + "!" : _LANG_.warning + "!",
                message: (response.success.message) ? response.success.message : response.error.message
            }, {
                type: (response.success.message) ? 'success' : 'warning'
            });
        }
    });
});

$(document).on("click", ".btnDeleteTranslate", function(e) {
    e.preventDefault();
    $(this).parent().parent().remove();
    $.ajax({
        type: 'POST',
        url: current_url + "/deleteTexte",
        data: {
            [crsftoken]: $('meta[name="X-CSRF-TOKEN"]').attr('content'),
            value: $('form#save_translate').serializeArray(),
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
                title: (response.success.message) ? _LANG_.save_data + "!" : _LANG_.warning + "!",
                message: (response.success.message) ? response.success.message : response.error.message
            }, {
                type: (response.success.message) ? 'success' : 'warning'
            });
        }
    });
});

$(document).ready(function() {

    function load_data(query) {

        $.ajax({
            type: 'POST',
            url: current_url + "/searchTexte",
            data: {
                [crsftoken]: $('meta[name="X-CSRF-TOKEN"]').attr('content'),
                value: $('form#search_translate').serializeArray(),
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
        $(".selectFilePicker.file option:selected").prop("selected", false);
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
        url: current_url + "/saveTextfile",
        data: {
            [crsftoken]: $('meta[name="X-CSRF-TOKEN"]').attr('content'),
            value: $(this).parent().parent().parent().serializeArray(),
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
                title: (response.success.message) ? _LANG_.save_data + "!" : _LANG_.warning + "!",
                message: (response.success.message) ? response.success.message : response.error.message
            }, {
                type: (response.success.message) ? 'success' : 'warning'
            });
        }
    });
});


$(document).on("click", ".btnTextDeleteTranslate", function(e) {
    e.preventDefault();
    $.ajax({
        type: 'POST',
        url: current_url + "/deleteTextfile",
        data: {
            [crsftoken]: $('meta[name="X-CSRF-TOKEN"]').attr('content'),
            value: $(this).parent().parent().parent().serializeArray(),
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
                title: (response.success.message) ? _LANG_.save_data + "!" : _LANG_.warning + "!",
                message: (response.success.message) ? response.success.message : response.error.message
            }, {
                type: (response.success.message) ? 'success' : 'warning'
            });
        }
    });
});