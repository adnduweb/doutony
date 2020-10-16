"use strict";
var KTApptaxesListDatatable = function() {
    var t;
    return {
        init: function() {
            t = $("#kt_apps_taxes_list_datatable").KTDatatable({
                data: {
                    type: "remote",
                    source: {
                        read: {
                            url: basePath + segementAdmin + "/sp-admin-ajax",
                            params: {
                                ajax: true,
                                controller: 'AdminTaxeController',
                                action: 'list',
                                value: '',
                                module: false,
                                company_id: company_id
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
                    }
                },
                columns: [{
                        field: "id",
                        title: "#",
                        sortable: !1,
                        width: 20,
                        selector: {
                            class: "kt-checkbox--solid"
                        },
                        textAlign: "center"
                    },
                    {
                        field: "name",
                        title: _LANG_.name,
                        width: 200,
                        template: function(t) {
                            return '<a href="' + startUrl + '/international/taxes/edit/' + t.id + '" class="capitalize text-dark-75 font-weight-bolder font-size-lg mb-0">' + t.name + '</a>';
                        }

                    }, {
                        field: "rate",
                        title: _LANG_.taux,
                        type: "rate",

                    }, {
                        field: "active",
                        title: _LANG_.etat,
                        type: "active",
                        template: function(t) {
                            if (t.active == 1) { var active = 'btn-light-success'; } else { var active = 'btn-light-danger'; }
                            if (t.active == 1) { var textActive = _LANG_.active; } else { var textActive = _LANG_.desactive; }
                            if (t.active == 1) { var idActive = 0; } else { var idActive = 1; }
                            var template = '<a href="javascript:;" data-statut="' + idActive + '" data-id="' + t.id + '" class="actionActive btn btn-bold btn-sm btn-font-sm ' + active + '">' + textActive + '</a>';
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
                            //return '\t\t\t\t\t\t\t<div class="dropdown">\t\t\t\t\t\t\t\t<a href="javascript:;" class="btn btn-sm btn-clean btn-icon btn-icon-md" data-toggle="dropdown">\t\t\t\t\t\t\t\t\t<i class="flaticon-more-1"></i>\t\t\t\t\t\t\t\t</a>\t\t\t\t\t\t\t\t<div class="dropdown-menu dropdown-menu-right">\t\t\t\t\t\t\t\t\t<ul class="kt-nav">\t\t\t\t\t\t\t\t\t\t<li class="navi-item">\t\t\t\t\t\t\t\t\t\t\t<a href="#" data-controller="roles" data-action="actionView" data-value="' + t.id + '" class="actioncontroller navi-link">\t\t\t\t\t\t\t\t\t\t\t\t<i class="navi-link-icon flaticon2-expand"></i>\t\t\t\t\t\t\t\t\t\t\t\t<span class="navi-link-text">' + _LANG_.view + '</span>\t\t\t\t\t\t\t\t\t\t\t</a>\t\t\t\t\t\t\t\t\t\t</li>\t\t\t\t\t\t\t\t\t\t<li class="navi-item">\t\t\t\t\t\t\t\t\t\t\t<a href="' + basePath + segementAdmin + '/taxes/detail/' + t.id + '" class="navi-link">\t\t\t\t\t\t\t\t\t\t\t\t<i class="navi-link-icon flaticon2-contract"></i>\t\t\t\t\t\t\t\t\t\t\t\t<span class="navi-link-text">' + _LANG_.edit + '</span>\t\t\t\t\t\t\t\t\t\t\t</a>\t\t\t\t\t\t\t\t\t\t</li>\t\t\t\t\t\t\t\t\t\t<li class="navi-item">\t\t\t\t\t\t\t\t\t\t\t<a href="#" data-id="' + t.id + '" class="deleterowKtdatatable navi-link">\t\t\t\t\t\t\t\t\t\t\t\t<i class="navi-link-icon flaticon2-trash"></i>\t\t\t\t\t\t\t\t\t\t\t\t<span class="navi-link-text">' + _LANG_.delete + '</span>\t\t\t\t\t\t\t\t\t\t\t</a>\t\t\t\t\t\t\t\t\t\t</li>\t\t\t\t\t\t\t\t\t\t</ul>\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t</div>\t\t\t\t\t\t'
                            var template = '<div class="dropdown">\
                        <a href="javascript:;" class="btn btn-sm btn-clean btn-icon btn-icon-md" data-toggle="dropdown">\
                        <i class="flaticon-more-1"></i></a>\
                        <div class="dropdown-menu dropdown-menu-right">\
                        <ul class="navi flex-column navi-hover py-2">\
                        <li class="navi-item">\
                        <a href="' + startUrl + '/international/taxes/edit/' + t.id + '" class="navi-link">\
                        <span class="navi-icon"><i class=" flaticon2-contract"></i></span>\
                        <span class="navi-text">' + _LANG_.edit + '</span>\
                        </a></li>';
                            if (t.id != '1') {
                                template += ' <li class="navi-item">\
                            <a href="#" data-id="' + t.id + '" class="deleterowKtdatatable navi-link">\
                            <span class="navi-icon"><i class=" flaticon2-trash"></i></span>\
                            <span class="navi-text">' + _LANG_.delete + '</span>\
                            </a>\
                            </li>';
                            }
                            template += ' </ul></div></div>';
                            return template;
                        }
                    }
                ]
            }), $("#kt_form_status").on("change", function() {
                t.search($(this).val().toLowerCase(), "Status")
            }), t.on("datatable-on-check datatable-on-uncheck datatable-on-layout-updated", function(e) {
                var a = t.rows(".datatable-row-active").nodes().length;
                $("#kt_subheader_group_selected_rows").html(a), a > 0 ? ($("#kt_subheader_search").addClass("hidden"), $("#kt_subheader_group_actions").removeClass("hidden")) : ($("#kt_subheader_search").removeClass("hidden"), $("#kt_subheader_group_actions").addClass("hidden"))
            }), $("#kt_datatable_records_fetch_modal").on("show.bs.modal", function(e) {
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
            }), $("#kt_subheader_group_actions_status_change").on("click", "[data-toggle='status-change']", function(event) {
                event.preventDefault();
                var e = $(this).find(".navi-link-text").html(),
                    st = $(this).find(".navi-link-text").data('status'),
                    a = t.rows(".datatable-row-active").nodes().find('.checkbox-single > [type="checkbox"]').map(function(t, e) {
                        return $(e).val()
                    });
                a.length > 0 && swal.fire({
                    buttonsStyling: !1,
                    html: _LANG_.are_you_sure_update + " " + a.length + " " + _LANG_.selected_records_status_to + " " + e + " ?",
                    type: "primary",
                    confirmButtonText: _LANG_.yes_update + "!",
                    confirmButtonClass: "btn btn-sm btn-bold btn-dark",
                    showCancelButton: !0,
                    cancelButtonText: _LANG_.no_cancel,
                    cancelButtonClass: "btn btn-sm btn-bold btn-default"
                }).then(function(t) {
                    if (t.value) {
                        $.ajax({
                            type: 'POST',
                            url: basePath + segementAdmin + "/sp-admin-ajax",
                            data: {
                                ajax: true,
                                controller: 'AdminTaxeController',
                                action: 'update',
                                value: {
                                    selected: a.get(),
                                    active: st
                                },
                                module: false
                            },
                            dataType: "json",
                            success: function(result, status, xhr) {

                                if (xhr.status == 200) {
                                    $.notify({
                                        title: _LANG_.updated + "!",
                                        message: result.message
                                    }, {
                                        type: 'success'
                                    });
                                    $("#kt_apps_taxes_list_datatable").KTDatatable().reload();
                                }
                            }
                        })
                    } else {
                        $.notify({
                            title: _LANG_.cancelled,
                            message: _LANG_.your_seleted_records_statuses_have_not_been_updated
                        }, {
                            type: 'info'
                        });
                    }
                })
            }), $("#kt_subheader_group_actions_delete_all").on("click", function() {
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
                            type: 'POST',
                            url: basePath + segementAdmin + "/sp-admin-ajax",
                            data: {
                                ajax: true,
                                controller: 'AdminTaxeController',
                                action: 'delete',
                                value: {
                                    selected: selected
                                },
                                module: false
                            },
                            dataType: "json",
                            success: function(result, status, xhr) {
                                //Success Message
                                if (xhr.status == 200) {
                                    var kt_subheader_total = $('.kt_subheader_total').text();
                                    $('.kt_subheader_total').html((kt_subheader_total - selected.length));
                                    $.notify({
                                        title: _LANG_.deleted + "!",
                                        message: result.message
                                    }, {
                                        type: result.type
                                    });
                                    $("#kt_apps_taxes_list_datatable").KTDatatable().reload();
                                }
                            }
                        })
                    } else {
                        $.notify({
                            title: _LANG_.deleted,
                            message: _LANG_.your_selected_records_have_not_been_deleted
                        }, {
                            type: 'primary'
                        });
                    }
                })
            }), t.on("datatable-on-layout-updated", function() {})
        }
    }
}();
KTUtil.ready(function() {
    KTApptaxesListDatatable.init();
    $(document).on("click", ".actionActive", function(e) {
        e.preventDefault();
        var statut = $(this).attr('data-statut');
        var id = $(this).attr('data-id');
        $.ajax({
            type: 'POST',
            url: basePath + segementAdmin + "/sp-admin-ajax",
            data: {
                ajax: true,
                controller: 'AdminTaxeController',
                action: 'changeStatut',
                value: {
                    statut: statut,
                    id: id
                },
                module: false,
            },
            dataType: "json",
            success: function(result, status, xhr) {
                if (xhr.status == 200) {
                    $.notify({
                        title: _LANG_.updated + "!",
                        message: result.message
                    }, {
                        type: result.type
                    });
                    $("#kt_apps_taxes_list_datatable").KTDatatable().reload();

                }
            }
        });
    });
});