$(document).on("click", '.videCache', function() {
    var id_page = $(this).attr('data-id-page');
    $.ajax({
        type: 'POST',
        url: basePath + segementAdmin + "/sp-admin-ajax",
        data: {
            ajax: true,
            controller: 'AdminPageController',
            action: 'videCache',
            value: {
                id_page: id_page
            },
            module: window.btoa('Adnduweb/Ci4_page')
        },
        dataType: "json",
        success: function(result, status, xhr) {
            if (xhr.status == 200) {
                $.notify({
                    title: "Succés!",
                    message: result.message
                }, {
                    type: result.type,
                    placement: {
                        from: 'top',
                        align: 'right'
                    },
                });
            } else {

            }
        }
    });


});