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


$(document).on("click", ".checkbox input#all_permission_group", function(e) {
    var $valuesss = [];
    if ($(this).is(':checked')) {
        $(".permission_group").prop("checked", true);
        $(".permission_group").attr("checked", 'checked');
        $(".permission_group").each(function(key2, val2) {
            $valuesss.push($(this).val());
        });
        var $action = 'add';
    } else {
        $(".permission_group").each(function() {
            $valuesss.push($(this).val());
            $(".permission_group").prop("checked", false);
        });
        var $action = 'delete';
    }

    $.ajax({
        type: 'POST',
        url: baseController + "/saveAllPermissions",
        data: {
            [crsftoken]: $('meta[name="X-CSRF-TOKEN"]').attr('content'),
            value: $valuesss,
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