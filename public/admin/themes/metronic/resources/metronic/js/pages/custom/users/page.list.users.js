"use strict";
var KTAppUserListDatatable = function() {
    var t;
    return {
        init: function() {
            t = $("#kt_apps_user_list_datatable").KTDatatable({
                    data: {
                        type: "remote",
                        source: {
                            read: {
                                url: current_url + "/list",
                                method: 'GET',
                                params: {
                                    [crsftoken]: $('meta[name="X-CSRF-TOKEN"]').attr('content'),
                                }
                            }
                        },
                        pageSize: 10,
                        serverPaging: !0,
                        serverFiltering: !0,
                        serverSorting: !0
                    },
                    translate: {
                        records: {
                            processing: _LANG_.loading_wait,
                            noRecords: _LANG_.no_record_found,
                        },
                        toolbar: {
                            pagination: {
                                items: {
                                    default: {
                                        first: _LANG_.first,
                                        prev: _LANG_.previous,
                                        next: _LANG_.next,
                                        last: _LANG_.last,
                                        more: _LANG_.more_pages,
                                        input: _LANG_.page_number,
                                        select: _LANG_.select_page_size,
                                        all: _LANG_.all,
                                    },
                                    info: _LANG_.showing + ' {{start}} - {{end}} of {{total}}',
                                },
                            },
                        },
                    },
                    layout: {
                        scroll: !1,
                        footer: !1
                    },
                    sortable: !0,
                    pagination: !0,
                    search: {
                        input: $("#kt_subheader_search_form"),
                        delay: 400
                    },
                    rows: {
                        beforeTemplate: function(row, data, index) {
                            if (data.active == '0') {
                                row.addClass('notactive');
                            }

                        },
                        callback: function(row, data, index) {

                        }
                    },
                    columns: [{
                            field: "uuid",
                            title: "#",
                            sortable: !1,
                            width: 20,
                            selector: {
                                class: "checkbox-solid"
                            },
                            textAlign: "center"
                        },
                        {
                            field: "username",
                            title: _LANG_.prenom_nom_client,
                            width: 200,
                            template: function(t, e) {
                                for (var a = 4 + e; a > 12;) a -= 3;
                                var n = "100_" + a + ".jpg",
                                    s = KTUtil.getRandomInt(0, 5),
                                    l = ["Developer", "Designer", "CEO", "Manager", "Architect", "Sales"];
                                //u = ["success", "brand", "danger", "success", "warning", "primary", "info"];
                                var e = {
                                    1: {
                                        class: "success"
                                    },
                                    2: {
                                        class: "brand"
                                    },
                                    3: {
                                        class: "danger"
                                    },
                                    4: {
                                        class: "warning"
                                    },
                                    5: {
                                        class: "primary"
                                    },
                                    6: {
                                        class: "info"
                                    }
                                };
                                //return '<div class="user-card-v2">\t\t\t\t\t\t\t\t<div class="user-card-v2__pic">\t\t\t\t\t\t\t\t\t<div class="badge badge--xl badge--' + ["success", "brand", "danger", "success", "warning", "primary", "info"][KTUtil.getRandomInt(0, 6)] + '">' + t.nom.substring(0, 1) + ' ' + t.prenom.substring(0, 1) + '</div>\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\t<div class="user-card-v2__details">\t\t\t\t\t\t\t\t\t<a href="' +basePath + segementAdmin + '/settings-advanced/users/detail/' + t.uuid + '" class="user-card-v2__name">' + t.nom + ' ' + t.prenom + '</a>\t\t\t\t\t\t\t\t\t<span class="user-card-v2__desc">' + l[s] + "</span>\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t</div>"
                                //return '<div class="user-card-v2">\t\t\t\t\t\t\t\t<div class="user-card-v2__pic">\t\t\t\t\t\t\t\t\t<div class="badge badge--xl badge--' + ["success", "brand", "danger", "success", "warning", "primary", "info"][KTUtil.getRandomInt(0, 6)] + '">' + t.lastname.substring(0, 1) + ' ' + t.firstname.substring(0, 1) + '</div>\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\t<div class="user-card-v2__details">\t\t\t\t\t\t\t\t\t<a href="' + basePath + segementAdmin + '/settings-advanced/users/detail/' + t.uuid + '" class="user-card-v2__name">' + t.lastname + ' ' + t.firstname + '</a>\t\t\t\t\t\t\t\t\t<span class="user-card-v2__desc">' + t.email + "</span>\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t</div>"
                                return '<div class="d-flex align-items-center"><div class="symbol symbol-40 symbol-light-success flex-shrink-0">\
                        <span class="symbol-label font-size-h4 font-weight-bold badge--' + e[t.group[0].group_id].class + '">\
                        ' + t.lastname.substring(0, 1) + ' ' + t.firstname.substring(0, 1) + '</span>\
                        </div><div class="ml-4">\
                        <div class="text-dark-75 font-weight-bolder font-size-lg mb-0"><a href="' + startUrl + '/settings-advanced/users/edit/' + t.uuid + '" class="link text-dark-75">\
                        ' + t.lastname + ' ' + t.firstname + '</a></div><span class="text-muted font-weight-bold text-hover-primary">' + t.fonction + "</span>\
                        </div></div>";
                            }
                        }, {
                            field: "email",
                            title: _LANG_.email,
                            type: "email",
                            //width: 100,
                            template: function(t) {
                                return '<div class="font-weight-bold text-muted">' + t.email + '</div>';
                            }
                        }, {
                            field: "phone",
                            title: "Tel",
                            width: "auto",
                            autoHide: !1,
                            template: function(t, e) {
                                for (var a = e + 1; a > 5;) a -= 3;
                                if (t.phone_mobile == null) t.phone_mobile = "nc";
                                if (t.phone == null) t.phone = "nc";
                                return '<div class="font-weight-bolder font-size-lg mb-0" >Fixe: <a class="font-weight-bold text-muted" href="tel:' + t.phone + '">' + t.phone + '</a></div>\
                                        <div class="font-weight-bolder font-size-lg mb-0"> Mobile: <a class="font-weight-bold text-muted" href="tel:' + t.phone_mobile + '">' + t.phone_mobile + "</a></div>";
                            }
                        }, {
                            field: "group_id",
                            title: "Role",
                            sortable: !1,
                            width: 150,
                            template: function(t) {
                                var e = {
                                    1: {
                                        class: "dark"
                                    },
                                    2: {
                                        class: "info"
                                    },
                                    3: {
                                        class: "warning"
                                    },
                                    4: {
                                        class: "info"
                                    },
                                    5: {
                                        class: "warning"
                                    },
                                    6: {
                                        class: "danger"
                                    },
                                    7: {
                                        class: "warning"
                                    }
                                };
                                var groupName = '';
                                $(t.group).each(function(index, value) {
                                    groupName += value.name + ', ';
                                });
                                return '<span data-group=' + t.active + ' class="btn btn-bold btn-sm btn-font-sm  btn-' + e[t.group[0].group_id].class + ' mr-2 px-2">' + groupName + "</span>"
                            }
                        }, {
                            //$type (1 = publied, 2 = wait corrected, 3 = wait publied, 4 = brouillon)
                            field: "active",
                            title: _LANG_.active,
                            sortable: !1,
                            width: 150,
                            template: function(t) {
                                if (t.status == false || t.status == null) { var classActive = 'btn-light-success'; } else { var classActive = 'btn-light-danger'; }
                                if (t.status == false || t.status == null) { var textActive = _LANG_.active; } else { var textActive = _LANG_.desactive; }
                                if (t.status == false || t.status == null) { var idActive = 'disabled'; } else { var idActive = ''; }
                                if (t.status == false || t.status == null) { var idActiveMessage = 'explain_disabled'; } else { var idActiveMessage = ''; }

                                var template = '<a href="javascript:;" data-status_message="' + idActiveMessage + '" data-status="' + idActive + '" data-id="' + t.uuid + '" class="actionActive btn btn-bold btn-sm btn-font-sm ' + classActive + '">' + textActive + '</a>';
                                return template;

                            }

                        }, {
                            field: "created_at",
                            title: _LANG_.date_create,
                            type: "date",
                            //width: 100,
                            format: "MM/DD/YYYY",
                            template: function(t) {
                                return '<div class="font-weight-bolder text-primary mb-0">' + t.date_create_format + '</div>';
                            }
                        }, {
                            field: "Actions",
                            width: 80,
                            title: "Actions",
                            sortable: !1,
                            autoHide: !1,
                            overflow: "visible",
                            template: function(t) {
                                var groupUser = [];
                                var superAdmin = false;
                                $(t.group).each(function(index, value) {
                                    groupUser[index] = value.group_id;
                                    if (value.group_id == '1') {
                                        superAdmin = true;
                                    }
                                });
                                if ((superAdmin == true && !$.checkValue(1, id_group)) || t.id == '1') {
                                    if (user_uuid == t.uuid) {
                                        var template = '<div class="dropdown">\
                                    <a href="javascript:;" class="btn btn-sm btn-clean btn-icon btn-icon-md" data-toggle="dropdown">\
                                    <i class="flaticon-more-1"></i></a>\
                                    <div class="dropdown-menu dropdown-menu-right">\
                                    <ul class="navi flex-column navi-hover py-2">';
                                        template += '<li class="navi-item">\
                                    <a href="#" data-controller="user" data-action="actionView" data-module="false" data-value="' + t.uuid + '" class="actioncontroller navi-link">\
                                    <span class="navi-icon"><i class="flaticon2-expand"></i></span>\
                                    <span class="navi-text">' + _LANG_.view + '</span>\
                                    </a></li>';
                                        template += '<li class="navi-item">\
                                    <a href="' + startUrl + '/settings-advanced/users/edit/' + t.uuid + '" class="navi-link">\
                                    <span class="navi-icon"><i class="flaticon2-contract"></i></span>\
                                    <span class="navi-text">' + _LANG_.edit + '</span>\
                                    </a></li>';

                                        template += ' </ul></div></div>';
                                        return template;
                                    }
                                    //silent
                                    return template = '';
                                } else {
                                    var template = '<div class="dropdown">\
                                <a href="javascript:;" class="btn btn-sm btn-clean btn-icon btn-icon-md" data-toggle="dropdown">\
                                <i class="flaticon-more-1"></i></a>\
                                <div class="dropdown-menu dropdown-menu-right">\
                                <ul class="navi flex-column navi-hover py-2">';
                                    template += '<li class="navi-item">\
                                <a href="#" data-controller="user" data-action="actionView" data-module="false" data-value="' + t.uuid + '" class="actioncontroller navi-link">\
                                <span class="navi-icon"><i class="flaticon2-expand"></i></span>\
                                <span class="navi-text">' + _LANG_.view + '</span>\
                                </a></li>';
                                    //console.log(id_group.indexOf(groupUser));
                                    if ((superAdmin == true && $.checkValue(1, id_group)) || (superAdmin == false)) {
                                        template += '<li class="navi-item">\
                                <a href="' + startUrl + '/settings-advanced/users/edit/' + t.uuid + '" class="navi-link">\
                                <span class="navi-icon"><i class="flaticon2-contract"></i></span>\
                                <span class="navi-text">' + _LANG_.edit + '</span>\
                                </a></li>';
                                    }
                                    if (t.id != '1' && (t.uuid != user_uuid)) {
                                        template += ' <li class="navi-item">\
                                <a href="#" data-id="' + t.uuid + '" class="deleterowKtdatatable navi-link">\
                                <span class="navi-icon"><i class="navi-icon flaticon2-trash"></i></span>\
                                <span class="navi-text">' + _LANG_.delete + '</span>\
                                </a>\
                                </li>';
                                    }
                                    template += ' </ul></div></div>';
                                    return template;
                                }
                            }
                        }
                    ]
                }),
                $("#kt_form_status").on("change", function() {
                    t.search($(this).val().toLowerCase(), "Status")
                }),
                t.on("datatable-on-check datatable-on-uncheck datatable-on-layout-updated", function(e) {
                    var a = t.rows(".datatable-row-active").nodes().length;
                    $("#kt_subheader_group_selected_rows").html(a), a > 0 ? ($("#kt_subheader_search").addClass("hidden"), $("#kt_subheader_group_actions").removeClass("hidden")) : ($("#kt_subheader_search").removeClass("hidden"), $("#kt_subheader_group_actions").addClass("hidden"))
                }),
                $("#kt_datatable_records_fetch_modal").on("show.bs.modal", function(e) {
                    var a = new KTDialog({
                        type: "loader",
                        placement: "top center",
                        message: _LANG_.loading + "..."
                    });
                    a.show(), setTimeout(function() {
                        a.hide()
                    }, 1e3);
                    for (var n = t.rows(".datatable-row-active").nodes().find('.checkbox-single > [type="checkbox"]').map(function(t, e) {
                            return $(e).val()
                        }), s = document.createDocumentFragment(), l = 0; l < n.length; l++) {
                        var i = document.createElement("li");
                        i.setAttribute("data-id", n[l]), i.innerHTML = _LANG_.selected_row_id + ": " + n[l], s.appendChild(i)
                    }
                    $(e.target).find("#kt_apps_user_fetch_records_selected").append(s)
                }).on("hide.bs.modal", function(t) {
                    $(t.target).find("#kt_apps_user_fetch_records_selected").empty()
                }),
                $("#kt_subheader_group_actions_status_change").on("click", "[data-toggle='status-change']", function(event) {
                    event.preventDefault();
                    var e = $(this).find(".navi-link-text").html(),
                        st = $(this).find(".navi-link-text").data('status'),
                        a = t.rows(".datatable-row-active").nodes().find('.checkbox-single > [type="checkbox"]').map(function(t, e) {
                            return { uuid: $(e).val(), active: st }
                        });
                    a.length > 0 && swal.fire({
                        buttonsStyling: !1,
                        html: _LANG_.are_you_sure_update + " " + a.length + " " + _LANG_.selected_records_status_to + " " + e + " ?",
                        type: "info",
                        confirmButtonText: _LANG_.yes_update + "!",
                        confirmButtonClass: "btn btn-sm btn-bold btn-success",
                        showCancelButton: !0,
                        cancelButtonText: _LANG_.no_cancel,
                        cancelButtonClass: "btn btn-sm btn-bold btn-dark"
                    }).then(function(t) {
                        if (t.value) {
                            $.ajax({
                                type: 'POST',
                                url: current_url + "/ajaxUpdate",
                                data: {
                                    [crsftoken]: $('meta[name="X-CSRF-TOKEN"]').attr('content'),
                                    value: a.get()
                                },
                                dataType: "json",
                                success: function(result, status, xhr) {

                                    if (xhr.status == 200) {
                                        $.notify({
                                            title: (result.success.message) ? _LANG_.updated + "!" : _LANG_.warning + "!",
                                            message: (result.success.message) ? result.success.message : result.error.message
                                        }, {
                                            type: (result.success.message) ? 'success' : 'warning'
                                        });
                                        $("#kt_apps_user_list_datatable").KTDatatable().reload();
                                    }
                                }
                            })
                        } else {
                            $.notify({
                                title: _LANG_.cancelled,
                                message: _LANG_.your_seleted_records_statuses_have_not_been_updated
                            }, {
                                type: 'primary'
                            });
                        }
                    })
                }),
                $("#kt_subheader_group_actions_delete_all").on("click", function() {
                    var e = t.rows(".datatable-row-active").nodes().find('.checkbox-single > [type="checkbox"]').map(function(t, e) {
                        return $(e).val()
                    });
                    e.length > 0 && swal.fire({
                        buttonsStyling: !1,
                        text: _LANG_.are_you_sure_delete + " " + e.length + " " + _LANG_.selected_records + " ?",
                        type: "error",
                        confirmButtonText: _LANG_.yes_delete + ' !',
                        confirmButtonClass: "btn btn-sm btn-bold btn-danger",
                        showCancelButton: !0,
                        cancelButtonText: _LANG_.no_cancel,
                        cancelButtonClass: "btn btn-sm btn-bold btn-dark"
                    }).then(function(t) {
                        if (t.value) {
                            var selected = e.get();
                            $.ajax({
                                type: 'DELETE',
                                url: current_url + "/delete",
                                data: {
                                    [crsftoken]: $('meta[name="X-CSRF-TOKEN"]').attr('content'),
                                    uuid: selected
                                },
                                dataType: "json",
                                success: function(result, status, xhr) {
                                    //Success Message
                                    if (xhr.status == 200) {
                                        var kt_subheader_total = $('.kt_subheader_total').text();
                                        $('.kt_subheader_total').html((kt_subheader_total - selected.length));
                                        $.notify({
                                            title: (result.success.message) ? _LANG_.deleted + "!" : _LANG_.warning + "!",
                                            message: (result.success.message) ? result.success.message : result.error.message
                                        }, {
                                            type: (result.success.message) ? 'success' : 'warning'
                                        });
                                        $("#kt_apps_user_list_datatable").KTDatatable().reload();
                                    }
                                }
                            })
                        } else {
                            $.notify({
                                title: _LANG_.deleted,
                                message: _LANG_.your_selected_records_have_not_been_deleted
                            }, {
                                type: 'info'
                            });
                        }
                    })
                }),
                t.on("datatable-on-layout-updated", function() {})
        }
    }
}();
KTUtil.ready(function() {
    KTAppUserListDatatable.init();

    //Update
    $(document).on("click", ".actionActive", function(e) {
        e.preventDefault();
        var status = $(this).attr('data-status');
        var status_message = $(this).attr('data-status_message');
        var uuid = $(this).attr('data-id');
        var value = [];
        $.ajax({
            type: 'POST',
            url: current_url + "/ajaxUpdate",
            contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
            data: {
                [crsftoken]: $('meta[name="X-CSRF-TOKEN"]').attr('content'),
                value: [{
                    uuid: uuid,
                    status: status,
                    status_message: status_message
                }]
            },
            dataType: "json",
            success: function(result, status, xhr) {
                if (xhr.status == 200) {
                    $.notify({
                        title: (result.success.message) ? _LANG_.updated + "!" : _LANG_.warning + "!",
                        message: (result.success.message) ? result.success.message : result.error.message
                    }, {
                        type: (result.success.message) ? 'success' : 'warning'
                    });
                    $("#kt_apps_user_list_datatable").KTDatatable().reload();
                }
            }
        })
    });

    //show
    $(document).on("click", ".actioncontroller", function(e) {
        e.preventDefault();
        var value = $(this).data('value');

        $.ajax({
            type: 'GET',
            url: current_url + "/show/" + value,
            data: {
                [crsftoken]: $('meta[name="X-CSRF-TOKEN"]').attr('content'),
            },
            dataType: "json",
            success: function(response, status, xhr) {
                if (xhr.status == 200) {
                    if (response.error == false) {
                        $('#kt_modal_loading_wrapper').html(response.success.message);
                        $('#kt_modal_loading').modal('show'); //now its working
                        KTApp.initTooltips();
                    }

                    // $("#kt_apps_user_list_datatable").KTDatatable().reload();
                }
            }
        });
    });
});