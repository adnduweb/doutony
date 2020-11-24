$(document).on("click", ".checkbox input.permission_group", function(e) {
    if ($(this).is(':checked')) {
        var $action = 'add';
    } else {
        var $action = 'delete';
    }
    var $val = $(this).val();
    $.ajax({
        type: 'POST',
        url: baseController + "/savePermissions",
        data: {
            [crsftoken]: $('meta[name="X-CSRF-TOKEN"]').attr('content'),
            value: $val,
            crud: $action,
        },
        dataType: "json",
        success: function(response) {
            if (response.error == false) {
                $.notify({
                    title: _LANG_.updated + "!",
                    message: response.success.message
                }, {
                    type: 'success'
                });
            }
        }
    });
});