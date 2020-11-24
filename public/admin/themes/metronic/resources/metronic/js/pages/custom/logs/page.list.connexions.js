"use strict";
var KTAppLogsConnexionsListDatatable = function() {
    var t;
    return {
        init: function() {
            t = $("#kt_apps_logsConnexions_list_datatable").KTDatatable({
                data: {
                    type: "remote",
                    source: {
                        read: {
                            url: current_url + "/list",
                            method: 'GET',
                            params: {
                                [crsftoken]: $('meta[name="X-CSRF-TOKEN"]').attr('content'),
                                model: '\\Adnduweb\\Ci4Core\\Models\\LogModel',
                                handle: 'connexions'
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
                        field: "ip_address",
                        title: _LANG_.ip_address,
                        width: 200,
                        template: function(t) {
                            return '<div class="text-dark-75 font-weight-bolder font-size-lg mb-0">' + t.ip_address + '</div>';
                        }

                    }, {
                        field: "agent",
                        title: _LANG_.user_agent,
                        type: "user_agent_traite",
                        sortable: !1,
                        //width: 100,

                    }, {
                        field: "username",
                        title: _LANG_.user_id,
                        type: "user_id",
                        sortable: !1,
                        template: function(t) {
                                return '<div class="text-dark-75 font-weight-bolder font-size-lg mb-0">' + t.username + '</div>';
                            }
                            //width: 100,

                    }, {
                        field: "success",
                        title: _LANG_.etat,
                        type: "success",
                        template: function(t) {
                                var success = (t.success == '1') ? '<span class="label label-xl label-success label-pill label-inline mr-2">' + _LANG_.cool_success + '</span>' : '<span class="label label-xl label-warning label-pill label-inline mr-2">' + _LANG_.error + '</span>';
                                return '<div class="kt-user-card-v2">   <div class="kt-user-card-v2__details"><span class="kt-user-card-v2__name">' + success + '</span></div></div>';
                            }
                            //width: 100,

                    }, {
                        field: "updated_at",
                        title: _LANG_.date_create,
                        type: "date",
                        //width: 100,
                        format: "MM/DD/YYYY",
                        template: function(t) {
                            return '<div class="font-weight-bolder text-primary mb-0">' + t.date_create_format_full + '</div>';
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
                            url: current_url + "/deleteConnexions",
                            data: {
                                [crsftoken]: $('meta[name="X-CSRF-TOKEN"]').attr('content'),
                                id: selected
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
                                    $("#kt_apps_logsConnexions_list_datatable").KTDatatable().reload();
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
    KTAppLogsConnexionsListDatatable.init()
});