// Class Definition
var KTform = function() {
    var _buttonSpinnerClasses = 'spinner spinner-right spinner-white pr-15';


    var _handleFormUser = function() {
        if ($('#kt_apps_user_edit_user_form').length) {
            var form = KTUtil.getById('kt_apps_user_edit_user_form');
        } else {
            var form = KTUtil.getById('kt_apps_user_create_user_form');
        }

        var formSubmitUrl = KTUtil.attr(form, 'action');
        var formSubmitButton = $('.kt_form_submit_utilisateurs');

        if (!form) {
            return;
        }

        const passwordMeter = document.getElementById('passwordMeter');

        const randomNumber = function(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        };

        FormValidation
            .formValidation(
                form, {
                    fields: {
                        company_id: {
                            validators: {
                                notEmpty: {
                                    message: _LANG_.champs_is_required
                                }
                            }
                        },
                        username: {
                            validators: {
                                notEmpty: {
                                    message: _LANG_.champs_is_required
                                }
                            }
                        },
                        firstname: {
                            validators: {
                                notEmpty: {
                                    message: _LANG_.champs_is_required
                                }
                            }
                        },
                        lastname: {
                            validators: {
                                notEmpty: {
                                    message: _LANG_.champs_is_required
                                }
                            }
                        },
                        email: {
                            validators: {
                                notEmpty: {
                                    message: _LANG_.email_is_required
                                },
                                emailAddress: {
                                    message: _LANG_.the_value_is_not_address_valid
                                }
                            }
                        },
                        password: {
                            validators: {
                                different: {
                                    message: _LANG_.password_cannot_be_the_same_as_username,
                                    compare: () => {
                                        return form.querySelector('[name="username"]').value;
                                    }
                                }
                            }
                        },
                        pass_confirm: {
                            validators: {
                                identical: {
                                    compare: function() {
                                        return form.querySelector('[name="password"]').value;
                                    },
                                    message: _LANG_.password_not_ecal_pass_confirm,
                                }
                            }
                        }
                    },
                    plugins: {
                        trigger: new FormValidation.plugins.Trigger(),
                        bootstrap: new FormValidation.plugins.Bootstrap(),
                        submitButton: new FormValidation.plugins.SubmitButton(),
                        passwordStrength: new FormValidation.plugins.PasswordStrength({
                            field: 'password',
                            message: _LANG_.the_password_is_weak,
                            minimalScore: 3,
                            onValidated: function(valid, message, score) {
                                switch (score) {
                                    case 0:
                                        passwordMeter.style.width = randomNumber(1, 20) + '%';
                                        passwordMeter.style.backgroundColor = '#ff4136';
                                        break;
                                    case 1:
                                        passwordMeter.style.width = randomNumber(20, 40) + '%';
                                        passwordMeter.style.backgroundColor = '#ff4136';
                                        break;
                                    case 2:
                                        passwordMeter.style.width = randomNumber(40, 60) + '%';
                                        passwordMeter.style.backgroundColor = '#ff4136';
                                        break;
                                    case 3:
                                        passwordMeter.style.width = randomNumber(60, 80) + '%';
                                        passwordMeter.style.backgroundColor = '#ffb700';
                                        break;
                                    case 4:
                                        passwordMeter.style.width = '100%';
                                        passwordMeter.style.backgroundColor = '#19a974';
                                        break;
                                    default:
                                        break;
                                }
                            },
                        }),
                    }
                }
            )
            .on('core.form.valid', function() {
                $(form).submit();
            })
            .on('core.form.invalid', function(response) {

                if (response.error == true) {
                    $(form).before(response.message);
                }
            });
    }

    // Public Functions
    return {
        init: function() {
            _handleFormUser();
            //_handleFormSignup();
        }
    };
}();

// Class Initialization
jQuery(document).ready(function() {
    KTform.init();
});

$(document).on("click", '.generer_mot_passe', function(e) {
    $.post(baseController + "/getPassword", {
            [crsftoken]: $('meta[name="X-CSRF-TOKEN"]').attr('content'),
        },
        function(response, status) {
            //csrf_hash = response.csrf_token;

            if (response.error == false) {
                $('.pass_confirm').val('');
                $('.datapassword').val('');
                $('#password').html('');
                $('.datapassword').val(response.success.password);
                $('.pass_confirm').val(response.success.password);
                $('#password').html(response.success.password);
            }
        });
});

function createUsername() {
    var fname = $('#kt_apps_user_create_user_form input[name=firstname]').val().substring(0, 1).toLowerCase();

    var lname = $('#kt_apps_user_create_user_form input[name=lastname]').val().toLowerCase();
    var username = fname + lname + Math.floor(Math.random() * (10000 + 1) + 1000);
    $('#kt_apps_user_create_user_form input[name=username]').val(username);
}

$('#kt_apps_user_create_user_form input[name=firstname]').on('keyup', createUsername);
$('#kt_apps_user_create_user_form input[name=lastname]').on('keyup', createUsername);


$('.show-password').click(function() {
    if ($(this).prev('input').prop('type') == 'password') {
        //Si c'est un input type password
        $(this).prev('input').prop('type', 'text');
        $(this).html('<i class="far fa-eye-slash"></i>');
    } else {
        //Sinon
        $(this).prev('input').prop('type', 'password');
        $(this).html('<i class="far fa-eye"></i>');
    }
});




$(document).on("click", '.deleteSession', function(e) {
    var session_en_cours = $(this).data('session_en_cours');
    var id = $(this).attr('id')
    $.post(baseController + "/deleteSession", {
            [crsftoken]: $('meta[name="X-CSRF-TOKEN"]').attr('content'),
            value: session_en_cours,
        },
        function(response, status) {
            csrf_hash = response.csrf_token;
            $("#" + id).css('display', 'none');
            // console.log(id);
            if (status == 'success') {
                $.notify({
                    title: _LANG_.deleted + "!",
                    message: response.message
                }, {
                    type: response.type,
                    placement: {
                        from: 'bottom',
                        align: 'center'
                    },
                });
            }
        });
});