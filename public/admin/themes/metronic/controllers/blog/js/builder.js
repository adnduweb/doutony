$(document).ready(function() {

    $(".form_bal_actufield").draggable({
        helper: function() {
            return getActuFieldHTML();
        },
        connectToSortable: ".form_builder_area"
    });


    function getActuFieldHTML() {
        var field = generateField();
        var html = $('.compoments_actufield').html();
        var re = /__field__/gi;
        html = html.replace(re, field);
        var script = '<script>jQuery(document).ready(function() {var portlet' + field + ' = new KTPortlet("kt_portlet_tools' + field + '");  portlet' + field + '.collapse();}); </script>';
        html = html.replace('__script__', script);
        var portlet = new KTPortlet("kt_portlet_tools" + field);
        return $('<div>').addClass('conpoment_build compoment_' + field + ' ').html(html);
    }

    function generateField() {
        return Math.floor(Math.random() * (100000000000000 - 1 + 1) + 57);
    }
});