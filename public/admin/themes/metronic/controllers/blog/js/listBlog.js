"use strict";
var KTApppostsListDatatable = function() {
    var t;
    return {
        init: function() {
            t = $("#kt_apps_article_list_datatable").KTDatatable({
                data: {
                    type: "remote",
                    source: {
                        read: {
                            url: basePath + segementAdmin + "/sp-admin-ajax",
                            params: {
                                ajax: true,
                                controller: 'AdminPostController',
                                action: 'list',
                                value: '',
                                module: window.btoa('Adnduweb/Ci4_blog'),
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
                            //return '\t\t\t\t\t\t\t<div class="dropdown">\t\t\t\t\t\t\t\t<a href="javascript:;" class="btn btn-sm btn-clean btn-icon btn-icon-md" data-toggle="dropdown">\t\t\t\t\t\t\t\t\t<i class="flaticon-more-1"></i>\t\t\t\t\t\t\t\t</a>\t\t\t\t\t\t\t\t<div class="dropdown-menu dropdown-menu-right">\t\t\t\t\t\t\t\t\t<ul class="kt-nav">\t\t\t\t\t\t\t\t\t\t<li class="navi-item">\t\t\t\t\t\t\t\t\t\t\t<a href="#" data-controller="roles" data-action="actionView" data-value="' + t.id + '" class="actioncontroller navi-link">\t\t\t\t\t\t\t\t\t\t\t\t<i class="navi-link-icon flaticon2-expand"></i>\t\t\t\t\t\t\t\t\t\t\t\t<span class="navi-link-text">' + _LANG_.view + '</span>\t\t\t\t\t\t\t\t\t\t\t</a>\t\t\t\t\t\t\t\t\t\t</li>\t\t\t\t\t\t\t\t\t\t<li class="navi-item">\t\t\t\t\t\t\t\t\t\t\t<a href="' + basePath + segementAdmin + '/blog/posts/detail/' + t.id + '" class="navi-link">\t\t\t\t\t\t\t\t\t\t\t\t<i class="navi-link-icon flaticon2-contract"></i>\t\t\t\t\t\t\t\t\t\t\t\t<span class="navi-link-text">' + _LANG_.edit + '</span>\t\t\t\t\t\t\t\t\t\t\t</a>\t\t\t\t\t\t\t\t\t\t</li>\t\t\t\t\t\t\t\t\t\t<li class="navi-item">\t\t\t\t\t\t\t\t\t\t\t<a href="#" data-id="' + t.id + '" class="deleterowKtdatatable navi-link">\t\t\t\t\t\t\t\t\t\t\t\t<i class="navi-link-icon flaticon2-trash"></i>\t\t\t\t\t\t\t\t\t\t\t\t<span class="navi-link-text">' + _LANG_.delete + '</span>\t\t\t\t\t\t\t\t\t\t\t</a>\t\t\t\t\t\t\t\t\t\t</li>\t\t\t\t\t\t\t\t\t\t</ul>\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t</div>\t\t\t\t\t\t'
                            var template = '<a href="' + startUrl + '/' + baseSegmentAdmin + '/blog/posts/edit/' + t.id + '" class="capitalize text-dark-75 font-weight-bolder font-size-lg mb-0"> ' + t.name + '</a>';
                            return template;
                        }

                    }, {
                        field: "slug",
                        title: _LANG_.slug,
                        type: "slug",

                    }, {
                        field: "meta_title",
                        title: _LANG_.meta_title,
                        type: "meta_title",
                        template: function(t) {
                            return '<span class="truncated">' + t.meta_title + '</span>';
                        }

                    }, {
                        field: "meta_description",
                        title: _LANG_.meta_description,
                        type: "meta_description",
                        template: function(t) {
                            return '<span class="truncated">' + t.meta_description + '</span>';
                        }

                    }, {
                        //$type (1 = publied, 2 = wait corrected, 3 = wait publied, 4 = brouillon)
                        field: "published",
                        title: _LANG_.etat,
                        sortable: !1,
                        width: 150,
                        template: function(t) {
                            var classe = '';
                            var text = '';
                            if (t.type == '1') {
                                classe = "btn-light-dark";
                                text = _LANG_.publied;
                            } else if (t.type == '2') {
                                classe = "btn-light-success";
                                text = _LANG_.wait_corrected;
                            } else if (t.type == '3') {
                                classe = "btn-light-warning";
                                text = _LANG_.wait_publied;
                            } else if (t.type == '4') {
                                classe = "btn-light-danger";
                                text = _LANG_.brouillon;
                            }
                            return '<span class="btn btn-bold btn-sm btn-font-sm ' + classe + '">' + text + "</span>";
                        }

                    }, {
                        //$type (1 = publied, 2 = wait corrected, 3 = wait publied, 4 = brouillon)
                        field: "id_categorie_default",
                        title: _LANG_.categories,
                        sortable: !1,
                        width: 150,
                        template: function(t) {
                            var categorieName = '';
                            $.each(t.b_categories_table, function(index, value) {
                                categorieName += value.name + ', ';
                            });
                            categorieName = categorieName.substring(0, categorieName.length - 2);
                            return '<span class="btn btn-bold btn-sm btn-font-sm btn-light-dark">' + categorieName + "</span>";
                        }

                    }, {
                        //$type (1 = publied, 2 = wait corrected, 3 = wait publied, 4 = brouillon)
                        field: "langues",
                        title: _LANG_.langues,
                        sortable: !1,
                        width: 150,
                        template: function(t) {
                            var langue = '';
                            $.each(t.languages, function(index, value) {
                                if (value == false) { var active = 'btn-light-danger'; } else { var active = 'btn-light-success'; }
                                langue += '<span class="btn btn-bold btn-sm btn-font-sm btn-label-dark ' + active + ' ml-2">' + index + "</span>";
                            });
                            //langue = langue.langue(0, langue.length - 2);
                            return langue;
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
                            //return '\t\t\t\t\t\t\t<div class="dropdown">\t\t\t\t\t\t\t\t<a href="javascript:;" class="btn btn-sm btn-clean btn-icon btn-icon-md" data-toggle="dropdown">\t\t\t\t\t\t\t\t\t<i class="flaticon-more-1"></i>\t\t\t\t\t\t\t\t</a>\t\t\t\t\t\t\t\t<div class="dropdown-menu dropdown-menu-right">\t\t\t\t\t\t\t\t\t<ul class="kt-nav">\t\t\t\t\t\t\t\t\t\t<li class="navi-item">\t\t\t\t\t\t\t\t\t\t\t<a href="#" data-controller="roles" data-action="actionView" data-value="' + t.id + '" class="actioncontroller navi-link">\t\t\t\t\t\t\t\t\t\t\t\t<i class="navi-link-icon flaticon2-expand"></i>\t\t\t\t\t\t\t\t\t\t\t\t<span class="navi-link-text">' + _LANG_.view + '</span>\t\t\t\t\t\t\t\t\t\t\t</a>\t\t\t\t\t\t\t\t\t\t</li>\t\t\t\t\t\t\t\t\t\t<li class="navi-item">\t\t\t\t\t\t\t\t\t\t\t<a href="' + basePath + segementAdmin + '/blog/posts/detail/' + t.id + '" class="navi-link">\t\t\t\t\t\t\t\t\t\t\t\t<i class="navi-link-icon flaticon2-contract"></i>\t\t\t\t\t\t\t\t\t\t\t\t<span class="navi-link-text">' + _LANG_.edit + '</span>\t\t\t\t\t\t\t\t\t\t\t</a>\t\t\t\t\t\t\t\t\t\t</li>\t\t\t\t\t\t\t\t\t\t<li class="navi-item">\t\t\t\t\t\t\t\t\t\t\t<a href="#" data-id="' + t.id + '" class="deleterowKtdatatable navi-link">\t\t\t\t\t\t\t\t\t\t\t\t<i class="navi-link-icon flaticon2-trash"></i>\t\t\t\t\t\t\t\t\t\t\t\t<span class="navi-link-text">' + _LANG_.delete + '</span>\t\t\t\t\t\t\t\t\t\t\t</a>\t\t\t\t\t\t\t\t\t\t</li>\t\t\t\t\t\t\t\t\t\t</ul>\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t</div>\t\t\t\t\t\t'
                            var template = '<div class="dropdown">\
                        <a href="javascript:;" class="btn btn-sm btn-clean btn-icon btn-icon-md" data-toggle="dropdown">\
                        <i class="flaticon-more-1"></i></a>\
                        <div class="dropdown-menu dropdown-menu-right">\
                        <ul class="navi flex-column navi-hover py-2">\
                        <li class="navi-item">\
                        <a href="' + startUrl + '/' + baseSegmentAdmin + '/blog/posts/edit/' + t.id + '" class="navi-link">\
                        <span class="navi-icon"><i class="flaticon2-contract"></i></span>\
                        <span class="navi-text">' + _LANG_.edit + '</span>\
                        </a></li>';
                            template += ' <li class="navi-item">\
                            <a href="' + startUrl + '/' + baseSegmentAdmin + '/blog/posts/dupliquer/' + t.id + '" data-id="' + t.id + '" class="navi-link">\
                            <span class="navi-icon"><i class="flaticon2-trash"></i></span>\
                            <span class="navi-text">' + _LANG_.dupliquer + '</span>\
                            </a>\
                            </li>';

                            template += ' <li class="navi-item">\
                            <a href="#" data-id="' + t.id + '" class="deleterowKtdatatable navi-link">\
                            <span class="navi-icon"><i class="navi-link-icon flaticon2-trash"></i></span>\
                            <span class="navi-link-text">' + _LANG_.delete + '</span>\
                            </a>\
                            </li>';

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
                                controller: 'AdminPostController',
                                action: 'update',
                                value: {
                                    selected: a.get(),
                                    active: st
                                },
                                module: window.btoa('Adnduweb/Ci4_blog')
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
                                    $("#kt_apps_article_list_datatable").KTDatatable().reload();
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
            }), $("#kt_subheader_group_actions_status_change-etat").on("click", "[data-toggle='status-change']", function(event) {
                event.preventDefault();
                var e = $(this).find(".navi-text").html(),
                    st = $(this).find(".navi-text").data('status-etat'),
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
                                controller: 'AdminPostController',
                                action: 'updateType',
                                value: {
                                    selected: a.get(),
                                    type: st
                                },
                                module: window.btoa('Adnduweb/Ci4_blog')
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
                                    $("#kt_apps_article_list_datatable").KTDatatable().reload();
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
                            type: 'POST',
                            url: basePath + segementAdmin + "/sp-admin-ajax",
                            data: {
                                ajax: true,
                                controller: 'AdminPostController',
                                action: 'delete',
                                value: {
                                    selected: selected
                                },
                                module: window.btoa('Adnduweb/Ci4_blog')
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
                                    $("#kt_apps_article_list_datatable").KTDatatable().reload();
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
    KTApppostsListDatatable.init()
});