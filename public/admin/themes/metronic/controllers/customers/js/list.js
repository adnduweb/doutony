"use strict";
var KTAppCustomersListDatatable = function() {
    var t;
    return {
        init: function() {
            t = $("#kt_apps_customers_list_datatable").KTDatatable({
                    data: {
                        type: "remote",
                        source: {
                            read: {
                                url: basePath + segementAdmin + "/sp-admin-ajax",
                                params: {
                                    ajax: true,
                                    controller: 'AdminCustomerController',
                                    action: 'list',
                                    value: '',
                                    module: window.btoa('Adnduweb/Ci4_customer'),
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
                        input: $("#generalSearch"),
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
                            field: "uuid",
                            title: "#",
                            sortable: !1,
                            width: 20,
                            selector: {
                                class: "kt-checkbox--solid"
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
                                //return '<div class="kt-user-card-v2">\t\t\t\t\t\t\t\t<div class="kt-user-card-v2__pic">\t\t\t\t\t\t\t\t\t<div class="kt-badge kt-badge--xl kt-badge--' + ["success", "brand", "danger", "success", "warning", "primary", "info"][KTUtil.getRandomInt(0, 6)] + '">' + t.nom.substring(0, 1) + ' ' + t.prenom.substring(0, 1) + '</div>\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\t<div class="kt-user-card-v2__details">\t\t\t\t\t\t\t\t\t<a href="' +basePath + segementAdmin + '/customers/detail/' + t.uuid + '" class="kt-user-card-v2__name">' + t.nom + ' ' + t.prenom + '</a>\t\t\t\t\t\t\t\t\t<span class="kt-user-card-v2__desc">' + l[s] + "</span>\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t</div>"
                                //return '<div class="kt-user-card-v2">\t\t\t\t\t\t\t\t<div class="kt-user-card-v2__pic">\t\t\t\t\t\t\t\t\t<div class="kt-badge kt-badge--xl kt-badge--' + ["success", "brand", "danger", "success", "warning", "primary", "info"][KTUtil.getRandomInt(0, 6)] + '">' + t.lastname.substring(0, 1) + ' ' + t.firstname.substring(0, 1) + '</div>\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\t<div class="kt-user-card-v2__details">\t\t\t\t\t\t\t\t\t<a href="' + basePath + segementAdmin + '/customers/detail/' + t.uuid + '" class="kt-user-card-v2__name">' + t.lastname + ' ' + t.firstname + '</a>\t\t\t\t\t\t\t\t\t<span class="kt-user-card-v2__desc">' + t.email + "</span>\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t</div>"
                                return '<div class="kt-user-card-v2"><div class="kt-user-card-v2__pic">\
                        <div class="kt-badge kt-badge--xl kt-badge--' + e[t.group[0].group_id].class + '">\
                        ' + t.lastname.substring(0, 1) + ' ' + t.firstname.substring(0, 1) + '</div>\
                        </div><div class="kt-user-card-v2__details">\
                        <a href="' + startUrl + '/customers/edit/' + t.uuid + '" class="kt-user-card-v2__name text-dark-75 font-weight-bolder font-size-lg mb-0">\
                        ' + t.lastname + ' ' + t.firstname + '</a></div></div>';
                            }
                        }, {
                            field: "email",
                            title: _LANG_.email,
                            type: "email",
                            //width: 100,
                            template: function(t) {
                                return '<div class="text-dark-75 font-weight-bolder font-size-lg mb-0">' + t.email + '</div>';
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
                                return '                        <div class="kt-user-card-v2">                           <div class="kt-user-card-v2__details"> <span class="kt-user-card-v2__email"> Fixe: <a href="tel:' + t.phone + '">' + t.phone + '</a></span>  <span class="kt-user-card-v2__email"> Mobile: <a href="tel:' + t.phone_mobile + '">' + t.phone_mobile + "</a></span>                           </div>                        </div>"
                            }
                        }, {
                            field: "group_id",
                            title: "Role",
                            sortable: !1,
                            width: 150,
                            template: function(t) {
                                var e = {
                                    1: {
                                        class: " btn-label-brand"
                                    },
                                    2: {
                                        class: " btn-label-success"
                                    },
                                    3: {
                                        class: " btn-label-warning"
                                    },
                                    4: {
                                        class: " btn-label-success"
                                    },
                                    5: {
                                        class: " btn-label-warning"
                                    },
                                    6: {
                                        class: " btn-label-danger"
                                    },
                                    7: {
                                        class: " btn-label-warning"
                                    }
                                };
                                var groupName = '';
                                $(t.group).each(function(index, value) {
                                    groupName += value.name + ', ';
                                });
                                return '<span data-statut=' + t.active + ' class="btn btn-bold btn-sm btn-font-sm ' + e[t.group[0].group_id].class + '">' + groupName + "</span>"
                            }
                        }, {
                            //$type (1 = publied, 2 = wait corrected, 3 = wait publied, 4 = brouillon)
                            field: "active",
                            title: _LANG_.active,
                            sortable: !1,
                            width: 150,
                            template: function(t) {
                                if (t.active == 1) { var active = 'btn-label-success'; } else { var active = 'btn-label-danger'; }
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
                                var template = '<div class="dropdown">\
                                    <a href="javascript:;" class="btn btn-sm btn-clean btn-icon btn-icon-md" data-toggle="dropdown">\
                                    <i class="flaticon-more-1"></i></a>\
                                    <div class="dropdown-menu dropdown-menu-right">\
                                    <ul class="kt-nav">';
                                template += '<li class="kt-nav__item">\
                                    <a href="#" data-controller="customer" data-action="actionView" data-module="Adnduweb\/Ci4_customer" data-value="' + t.uuid + '" class="actioncontroller kt-nav__link">\
                                    <i class="kt-nav__link-icon flaticon2-expand"></i>\
                                    <span class="kt-nav__link-text">' + _LANG_.view + '</span>\
                                    </a></li>';
                                //console.log(id_group.indexOf(groupUser));
                                template += '<li class="kt-nav__item">\
                                    <a href="' + startUrl + '/customers/edit/' + t.uuid + '" class="kt-nav__link">\
                                    <i class="kt-nav__link-icon flaticon2-contract"></i>\
                                    <span class="kt-nav__link-text">' + _LANG_.edit + '</span>\
                                    </a></li>';

                                template += ' <li class="kt-nav__item">\
                                    <a href="#" data-id="' + t.uuid + '" class="deleterowKtdatatable kt-nav__link">\
                                    <i class="kt-nav__link-icon flaticon2-trash"></i>\
                                    <span class="kt-nav__link-text">' + _LANG_.delete + '</span>\
                                    </a>\
                                    </li>';

                                template += ' </ul></div></div>';
                                return template;

                            }
                        }
                    ]
                }),
                $("#kt_form_status").on("change", function() {
                    t.search($(this).val().toLowerCase(), "Status")
                }),
                t.on("kt-datatable--on-check kt-datatable--on-uncheck kt-datatable--on-layout-updated", function(e) {
                    var a = t.rows(".kt-datatable__row--active").nodes().length;
                    $("#kt_subheader_group_selected_rows").html(a), a > 0 ? ($("#kt_subheader_search").addClass("kt-hidden"), $("#kt_subheader_group_actions").removeClass("kt-hidden")) : ($("#kt_subheader_search").removeClass("kt-hidden"), $("#kt_subheader_group_actions").addClass("kt-hidden"))
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
                    for (var n = t.rows(".kt-datatable__row--active").nodes().find('.kt-checkbox--single > [type="checkbox"]').map(function(t, e) {
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
                    var e = $(this).find(".kt-nav__link-text").html(),
                        st = $(this).find(".kt-nav__link-text").data('status'),
                        a = t.rows(".kt-datatable__row--active").nodes().find('.kt-checkbox--single > [type="checkbox"]').map(function(t, e) {
                            return $(e).val()
                        });
                    a.length > 0 && swal.fire({
                        buttonsStyling: !1,
                        html: _LANG_.are_you_sure_update + " " + a.length + " " + _LANG_.selected_records_status_to + " " + e + " ?",
                        type: "info",
                        confirmButtonText: _LANG_.yes_update + "!",
                        confirmButtonClass: "btn btn-sm btn-bold btn-brand",
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
                                    controller: 'AdminCustomerController',
                                    action: 'update',
                                    value: {
                                        selected: a.get(),
                                        active: st
                                    },
                                    module: window.btoa('Adnduweb/Ci4_customer'),
                                },
                                dataType: "json",
                                success: function(result, status, xhr) {

                                    if (xhr.status == 200) {
                                        $.notify({
                                            title: _LANG_.updated + "!",
                                            message: result.message
                                        }, {
                                            type: 'success',
                                            placement: {
                                                from: 'bottom',
                                                align: 'center'
                                            },
                                        });
                                        $("#kt_apps_customers_list_datatable").KTDatatable().reload();
                                    }
                                }
                            })
                        } else {
                            $.notify({
                                title: _LANG_.cancelled,
                                message: _LANG_.your_seleted_records_statuses_have_not_been_updated
                            }, {
                                type: 'info',
                                placement: {
                                    from: 'bottom',
                                    align: 'center'
                                },
                            });
                        }
                    })
                }),
                $("#kt_subheader_group_actions_delete_all").on("click", function() {
                    var e = t.rows(".kt-datatable__row--active").nodes().find('.kt-checkbox--single > [type="checkbox"]').map(function(t, e) {
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
                        cancelButtonClass: "btn btn-sm btn-bold btn-brand"
                    }).then(function(t) {
                        if (t.value) {
                            var selected = e.get();
                            $.ajax({
                                type: 'POST',
                                url: basePath + segementAdmin + "/sp-admin-ajax",
                                data: {
                                    ajax: true,
                                    controller: 'AdminCustomerController',
                                    action: 'delete',
                                    value: {
                                        selected: selected
                                    },
                                    module: window.btoa('Adnduweb/Ci4_customer'),
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
                                            type: result.type,
                                            placement: {
                                                from: 'bottom',
                                                align: 'center'
                                            },
                                        });
                                        $("#kt_apps_customers_list_datatable").KTDatatable().reload();
                                    }
                                }
                            })
                        } else {
                            $.notify({
                                title: _LANG_.deleted,
                                message: _LANG_.your_selected_records_have_not_been_deleted
                            }, {
                                type: 'info',
                                placement: {
                                    from: 'bottom',
                                    align: 'center'
                                },
                            });
                        }
                    })
                }),
                t.on("kt-datatable--on-layout-updated", function() {})
        }
    }
}();
KTUtil.ready(function() {
    KTAppCustomersListDatatable.init();
    $(document).on("click", ".actionActive", function(e) {
        e.preventDefault();
        var statut = $(this).attr('data-statut');
        var id = $(this).attr('data-id');
        $.ajax({
            type: 'POST',
            url: basePath + segementAdmin + "/sp-admin-ajax",
            data: {
                ajax: true,
                controller: 'AdminCustomerController',
                action: 'changeStatut',
                value: {
                    statut: statut,
                    id: id
                },
                module: window.btoa('Adnduweb/Ci4_customer'),
            },
            dataType: "json",
            success: function(result, status, xhr) {
                if (xhr.status == 200) {
                    $.notify({
                        title: _LANG_.updated + "!",
                        message: result.message
                    }, {
                        type: result.type,
                        placement: {
                            from: 'top',
                            align: 'right'
                        },
                    });
                    $("#kt_apps_customers_list_datatable").KTDatatable().reload();

                }
            }
        })
    });

});