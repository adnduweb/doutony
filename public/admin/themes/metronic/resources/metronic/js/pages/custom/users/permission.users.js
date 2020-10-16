$(document).on("click", ".checkbox input.permission_group", function(e) {
    if ($(this).is(':checked')) {
        var $action = 'add';
    } else {
        var $action = 'delete';
    }
    var $val = $(this).val();
    $.ajax({
        type: 'POST',
        url: basePath + segementAdmin + "/sp-admin-ajax",
        data: {
            ajax: true,
            controller: 'AdminUserController',
            action: 'updatePermission',
            module: false,
            value: $val,
            crud: $action,
        },
        dataType: "json",
        success: function(response) {
            if (response.status == true) {
                $.notify({
                    title: response.type,
                    message: response.message
                }, {
                    type: 'success',
                    placement: {
                        from: 'top',
                        align: 'right'
                    },
                });
            }
        }
    });
});