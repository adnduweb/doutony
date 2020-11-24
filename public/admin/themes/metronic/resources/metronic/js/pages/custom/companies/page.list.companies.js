"use strict";
var KTAppUserListDatatable = function() {
    var t;
    return {
        init: function() {
            t = $("#kt_apps_company_list_datatable").KTDatatable({
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
                    }
                },
                columns: [{
                        field: "uuid_company",
                        title: "#",
                        sortable: !1,
                        width: 20,
                        selector: {
                            class: "kt-checkbox--solid"
                        },
                        textAlign: "center"
                    },
                    {
                        field: "raison_social",
                        title: _LANG_.raison_social,
                        width: 200,
                        template: function(t) {
                            return '<div class="capitalize text-dark-75 font-weight-bolder font-size-lg mb-0"><a href="' + startUrl + '/settings-advanced/companies/edit/' + t.uuid_company + '" class="kt-user-card-v2__name text-dark-75 font-weight-bolder font-size-lg mb-0">' + t.raison_social + '</a></div>';
                        }

                    },
                    // {
                    //     field: "code_company",
                    //     title: _LANG_.code_company,
                    //     type: "source_id",
                    //     sortable: !1,
                    //     template: function(t) {
                    //         return '<div class="capitalize text-dark-75 font-weight-bolder font-size-lg mb-0">' + t.uuid_company + '</div>';
                    //     },
                    //     width: 300,

                    // }, 
                    {
                        field: "email",
                        title: _LANG_.email,
                        type: "email",
                        sortable: !1,
                        //width: 100,
                        template: function(t) {
                            return '<div class="capitalize text-dark-75 font-weight-bolder font-size-lg mb-0">' + t.email + '</div>';
                        }

                    }, {
                        field: "adresse",
                        title: _LANG_.adresse,
                        width: 150,
                        autoHide: !1,
                        template: function(t, e) {
                            for (var a = e + 1; a > 5;) a -= 3;
                            if (t.phone_mobile == null) t.phone_mobile = "nc";
                            if (t.phone == null) t.phone = "nc";
                            return '<div class="kt-user-card-v2">  <div class="kt-user-card-v2__details"> \
                        <span class="kt-user-card-v2__email"> ' + t.adresse + '</span><br/>\
                        <span class="kt-user-card-v2__email"> ' + t.code_postal + ' ' + t.ville + "</span>\
                        </div></div>";
                        }

                    }, {
                        field: "nom_court",
                        title: _LANG_.company_type,
                        type: "nom_court",
                        width: 100,
                        template: function(t) {
                            return '<div class="capitalize text-dark-75 font-weight-bolder font-size-lg mb-0">' + t.companies_type.nom_court + '</div>';
                        }

                    }, {
                        //$type (1 = publied, 2 = wait corrected, 3 = wait publied, 4 = brouillon)
                        field: "active",
                        title: _LANG_.active,
                        sortable: !1,
                        width: 150,
                        template: function(t) {
                            if (t.active == "1") { var classActive = 'btn-light-success'; } else { var classActive = 'btn-light-danger'; }
                            if (t.active == "1") { var textActive = _LANG_.active; } else { var textActive = _LANG_.desactive; }
                            if (t.active == '1') { var idActive = '0'; } else { var idActive = '1'; }

                            var template = '<a href="javascript:;" data-statut="' + idActive + '" data-id="' + t.uuid_company + '"  class="actionActive btn btn-bold btn-sm btn-font-sm ' + classActive + '">' + textActive + '</a>';
                            return template;

                        }

                    }, {
                        field: "company.created_at",
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
                            var restrictionsDelete = restrictionItem.split('|');
                            var template = '<div class="dropdown">\
                        <a href="javascript:;" class="btn btn-sm btn-clean btn-icon btn-icon-md" data-toggle="dropdown">\
                        <i class="flaticon-more-1"></i></a>\
                        <div class="dropdown-menu dropdown-menu-right">\
                        <ul class="navi flex-column navi-hover py-2">\
                        <li class="navi-item">\
                        <a href="' + startUrl + '/settings-advanced/companies/edit/' + t.uuid_company + '" class="navi-link">\
                        <span class="navi-icon"><i class="navi-icon flaticon2-contract"></i></span>\
                        <span class="navi-text">' + _LANG_.edit + '</span>\
                        </a></li>';

                            if (jQuery.inArray(t.id, restrictionsDelete) == '-1') {
                                template += ' <li class="navi-item">\
                                <a href="#" data-id="' + t.uuid_company + '" class="deleterowKtdatatable navi-link">\
                                <span class="navi-icon"><i class="flaticon2-trash"></i></span>\
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
                        //return $(e).val()
                        return { uuid_company: $(e).val(), active: st }
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
                                    $("#kt_apps_company_list_datatable").KTDatatable().reload();
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
                            type: 'DELETE',
                            url: current_url + "/delete",
                            data: {
                                [crsftoken]: $('meta[name="X-CSRF-TOKEN"]').attr('content'),
                                uuid_company: selected
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
                                    $("#kt_apps_company_list_datatable").KTDatatable().reload();
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
            }), t.on("datatable-on-layout-updated", function() {})
        }
    }
}();
KTUtil.ready(function() {
    KTAppUserListDatatable.init();

    //Update
    $(document).on("click", ".actionActive", function(e) {
        e.preventDefault();
        var statut = $(this).attr('data-statut');
        var uuid = $(this).attr('data-id');
        var value = [];
        $.ajax({
            type: 'POST',
            url: current_url + "/ajaxUpdate",
            contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
            data: {
                [crsftoken]: $('meta[name="X-CSRF-TOKEN"]').attr('content'),
                value: [{
                    uuid_company: uuid,
                    active: statut
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
                    $("#kt_apps_company_list_datatable").KTDatatable().reload();
                }
            }
        })
    });

});