"use strict";

// Class Definition
var KTLogin = function() {
    var _buttonSpinnerClasses = 'spinner spinner-right spinner-white pr-15';

    var _handleFormSignin = function() {
        var form = KTUtil.getById('kt_login_singin_form');
        var formSubmitUrl = KTUtil.attr(form, 'action');
        var formSubmitButton = KTUtil.getById('kt_login_singin_form_submit_button');

        if (!form) {
            return;
        }

        FormValidation
            .formValidation(
                form, {
                    fields: {
                        login: {
                            validators: {
                                notEmpty: {
                                    message: _LANG_.username_is_required
                                }
                            }
                        },
                        password: {
                            validators: {
                                notEmpty: {
                                    message: _LANG_.password_is_required
                                }
                            }
                        }
                    },
                    plugins: {
                        trigger: new FormValidation.plugins.Trigger(),
                        submitButton: new FormValidation.plugins.SubmitButton(),
                        //defaultSubmit: new FormValidation.plugins.DefaultSubmit(), // Uncomment this line to enable normal button submit after form validation
                        bootstrap: new FormValidation.plugins.Bootstrap({
                            //	eleInvalidClass: '', // Repace with uncomment to hide bootstrap validation icons
                            //	eleValidClass: '',   // Repace with uncomment to hide bootstrap validation icons
                        })
                    }
                }
            )
            .on('core.form.valid', function() {

                // Show loading state on button
                KTUtil.btnWait(formSubmitButton, _buttonSpinnerClasses, "Please wait");

                // Simulate Ajax request
                setTimeout(function() {
                    KTUtil.btnRelease(formSubmitButton);
                }, 2000);

                // Form Validation & Ajax Submission: https://formvalidation.io/guide/examples/using-ajax-to-submit-the-form
                FormValidation.utils.fetch(formSubmitUrl, {
                    headers: {
                        //'X-Requested-With': 'XMLHttpRequest',
                        'X-CSRF-TOKEN': $('meta[name="X-CSRF-TOKEN"]').attr('content'),
                    },
                    method: 'POST',
                    dataType: 'json',
                    params: {
                        login: form.querySelector('[name="login"]').value,
                        password: form.querySelector('[name="password"]').value,
                        remember: form.querySelector('[name="remember"]').value
                    },
                }).then(function(response) { // Return valid JSON
                    // Release button

                    KTUtil.btnRelease(formSubmitButton);

                    $('meta[name="X-CSRF-TOKEN"]').attr('content', response.token);

                    if (response && typeof response === 'object' && response.status && response.status == 'success') {
                        Swal.fire({
                            html: response.message,
                            icon: "success",
                            buttonsStyling: false,
                            //confirmButtonText: _LANG_.close,
                            showConfirmButton: false,
                            timer: 1500,
                            customClass: {
                                confirmButton: "btn font-weight-bold btn-light-primary"
                            }
                        }).then(function() {
                            KTUtil.scrollTop();
                            window.location.href = response.redirect;
                        });
                    } else {
                        Swal.fire({
                            html: response.message,
                            icon: "error",
                            buttonsStyling: false,
                            confirmButtonText: _LANG_.close,
                            customClass: {
                                confirmButton: "btn font-weight-bold btn-light-primary"
                            }
                        }).then(function() {
                            KTUtil.scrollTop();
                        });
                    }
                });

            })
            .on('core.form.invalid', function() {
                Swal.fire({
                    text: "Sorry, looks like there are some errors detected, please try again tttttt.",
                    icon: "error",
                    buttonsStyling: false,
                    confirmButtonText: _LANG_.close,
                    customClass: {
                        confirmButton: "btn font-weight-bold btn-light-primary"
                    }
                }).then(function() {
                    KTUtil.scrollTop();
                });
            });
    }

    var _handleFormForgot = function() {
        var form = KTUtil.getById('kt_login_forgot_form');
        var formSubmitUrl = KTUtil.attr(form, 'action');
        var formSubmitButton = KTUtil.getById('kt_login_forgot_form_submit_button');

        if (!form) {
            return;
        }

        FormValidation
            .formValidation(
                form, {
                    fields: {
                        email: {
                            validators: {
                                notEmpty: {
                                    message: _LANG_.email_is_required
                                },
                                emailAddress: {
                                    message: _LANG_.the_value_is_not_address_valid
                                }
                            }
                        }
                    },
                    plugins: {
                        trigger: new FormValidation.plugins.Trigger(),
                        submitButton: new FormValidation.plugins.SubmitButton(),
                        //defaultSubmit: new FormValidation.plugins.DefaultSubmit(), // Uncomment this line to enable normal button submit after form validation
                        bootstrap: new FormValidation.plugins.Bootstrap({
                            //	eleInvalidClass: '', // Repace with uncomment to hide bootstrap validation icons
                            //	eleValidClass: '',   // Repace with uncomment to hide bootstrap validation icons
                        })
                    }
                }
            )
            .on('core.form.valid', function() {
                // Show loading state on button
                KTUtil.btnWait(formSubmitButton, _buttonSpinnerClasses, _LANG_.loading_wait);

                // Simulate Ajax request
                setTimeout(function() {
                    KTUtil.btnRelease(formSubmitButton);
                }, 2000);

                // Form Validation & Ajax Submission: https://formvalidation.io/guide/examples/using-ajax-to-submit-the-form
                FormValidation.utils.fetch(formSubmitUrl, {
                    headers: {
                        //'X-Requested-With': 'XMLHttpRequest',
                        'X-CSRF-TOKEN': $('meta[name="X-CSRF-TOKEN"]').attr('content'),
                    },
                    method: 'POST',
                    dataType: 'json',
                    params: {
                        email: form.querySelector('[name="email"]').value,
                    },
                }).then(function(response) { // Return valid JSON
                    // Release button
                    KTUtil.btnRelease(formSubmitButton);
                    $('meta[name="X-CSRF-TOKEN"]').attr('content', response.token);

                    if (response && typeof response === 'object' && response.status && response.status == 'success') {
                        Swal.fire({
                            html: response.message,
                            icon: "success",
                            buttonsStyling: false,
                            //confirmButtonText: _LANG_.close,
                            showConfirmButton: false,
                            timer: 1500,
                            customClass: {
                                confirmButton: "btn font-weight-bold btn-light-primary"
                            }
                        }).then(function() {
                            KTUtil.scrollTop();
                            window.location.href = response.redirect;
                        });
                    } else {
                        Swal.fire({
                            html: response.message,
                            icon: "error",
                            buttonsStyling: false,
                            confirmButtonText: _LANG_.close,
                            customClass: {
                                confirmButton: "btn font-weight-bold btn-light-primary"
                            }
                        }).then(function() {
                            KTUtil.scrollTop();
                        });
                    }
                });

            })
            .on('core.form.invalid', function() {
                Swal.fire({
                    text: _LANG_.sorry_looks_like_errors_detected,
                    icon: "error",
                    buttonsStyling: false,
                    confirmButtonText: _LANG_.close,
                    customClass: {
                        confirmButton: "btn font-weight-bold btn-light-primary"
                    }
                }).then(function() {
                    KTUtil.scrollTop();
                });
            });
    }

    var _handleFormResetForgot = function() {
        var form = KTUtil.getById('kt_login_reset_forgot_form');
        var formSubmitUrl = KTUtil.attr(form, 'action');
        var formSubmitButton = KTUtil.getById('kt_login_reset_forgot_form_submit_button');

        if (!form) {
            return;
        }

        const passwordMeter = document.getElementById('passwordMeter');
        const passwordMeter2 = document.getElementById('passwordMeter2');

        const randomNumber = function(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        };

        FormValidation
            .formValidation(
                form, {
                    fields: {
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
                                notEmpty: {
                                    message: 'le champs est requis'
                                }
                            }
                        },
                        pass_confirm: {
                            validators: {
                                notEmpty: {
                                    message: 'le champs est requis'
                                },
                                identical: {
                                    compare: function() {
                                        return form.querySelector('[name="password"]').value;
                                    },
                                    message: 'Le mot de passe et la confirmation ne sont pas les mêmes',
                                }
                            }
                        }
                    },
                    plugins: {
                        trigger: new FormValidation.plugins.Trigger(),
                        submitButton: new FormValidation.plugins.SubmitButton(),
                        //defaultSubmit: new FormValidation.plugins.DefaultSubmit(), // Uncomment this line to enable normal button submit after form validation
                        bootstrap: new FormValidation.plugins.Bootstrap({
                            //	eleInvalidClass: '', // Repace with uncomment to hide bootstrap validation icons
                            //	eleValidClass: '',   // Repace with uncomment to hide bootstrap validation icons
                        }),
                        tpasswordStrength: new FormValidation.plugins.PasswordStrength({
                            field: 'password',
                            message: 'Le mot de passe est très falble',
                            minimalScore: 3,
                            onValidated: function(valid, message, score) {
                                console.log(score);
                                console.log(message);
                                switch (score) {
                                    case 0:
                                        passwordMeter.style.width = randomNumber(1, 20) + '%';
                                        passwordMeter.style.backgroundColor = '#ff4136';
                                    case 1:
                                        passwordMeter.style.width = randomNumber(20, 40) + '%';
                                        passwordMeter.style.backgroundColor = '#ff4136';
                                        break;
                                    case 2:
                                        passwordMeter.style.width = randomNumber(40, 60) + '%';
                                        passwordMeter.style.backgroundColor = '#ff4136';
                                        message: 'bon';
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
                // Show loading state on button
                KTUtil.btnWait(formSubmitButton, _buttonSpinnerClasses, _LANG_.loading_wait);

                // Simulate Ajax request
                setTimeout(function() {
                    KTUtil.btnRelease(formSubmitButton);
                }, 2000);

                // Form Validation & Ajax Submission: https://formvalidation.io/guide/examples/using-ajax-to-submit-the-form
                FormValidation.utils.fetch(formSubmitUrl, {
                    headers: {
                        //'X-Requested-With': 'XMLHttpRequest',
                        'X-CSRF-TOKEN': $('meta[name="X-CSRF-TOKEN"]').attr('content'),
                    },
                    method: 'POST',
                    dataType: 'json',
                    params: {
                        token: form.querySelector('[name="token"]').value,
                        email: form.querySelector('[name="email"]').value,
                        password: form.querySelector('[name="password"]').value,
                        pass_confirm: form.querySelector('[name="pass_confirm"]').value,
                    },
                }).then(function(response) { // Return valid JSON
                    // Release button
                    KTUtil.btnRelease(formSubmitButton);
                    $('meta[name="X-CSRF-TOKEN"]').attr('content', response.token);

                    if (response && typeof response === 'object' && response.status && response.status == 'success') {
                        Swal.fire({
                            html: response.message,
                            icon: "success",
                            buttonsStyling: false,
                            //confirmButtonText: _LANG_.close,
                            showConfirmButton: false,
                            timer: 1500,
                            customClass: {
                                confirmButton: "btn font-weight-bold btn-light-primary"
                            }
                        }).then(function() {
                            KTUtil.scrollTop();
                            window.location.href = response.redirect;
                        });
                    } else {
                        Swal.fire({
                            text: _LANG_.sorry_looks_like_errors_detected,
                            icon: "error",
                            buttonsStyling: false,
                            confirmButtonText: _LANG_.close,
                            customClass: {
                                confirmButton: "btn font-weight-bold btn-light-primary"
                            }
                        }).then(function() {
                            KTUtil.scrollTop();
                        });
                    }
                });

            })
            .on('core.form.invalid', function() {
                Swal.fire({
                    text: _LANG_.sorry_looks_like_errors_detected,
                    icon: "error",
                    buttonsStyling: false,
                    confirmButtonText: _LANG_.close,
                    customClass: {
                        confirmButton: "btn font-weight-bold btn-light-primary"
                    }
                }).then(function() {
                    KTUtil.scrollTop();
                });
            });
    }

    // var _handleFormSignup = function() {
    //     // Base elements
    //     var wizardEl = KTUtil.getById('kt_login');
    //     var form = KTUtil.getById('kt_login_signup_form');
    //     var wizardObj;
    //     var validations = [];

    //     if (!form) {
    //         return;
    //     }

    //     // Init form validation rules. For more info check the FormValidation plugin's official documentation:https://formvalidation.io/
    //     // Step 1
    //     validations.push(FormValidation.formValidation(
    //         form, {
    //             fields: {
    //                 fname: {
    //                     validators: {
    //                         notEmpty: {
    //                             message: 'First name is required'
    //                         }
    //                     }
    //                 },
    //                 lname: {
    //                     validators: {
    //                         notEmpty: {
    //                             message: 'Last Name is required'
    //                         }
    //                     }
    //                 },
    //                 phone: {
    //                     validators: {
    //                         notEmpty: {
    //                             message: 'Phone is required'
    //                         }
    //                     }
    //                 },
    //                 email: {
    //                     validators: {
    //                         notEmpty: {
    //                             message: 'Email is required'
    //                         },
    //                         emailAddress: {
    //                             message: 'The value is not a valid email address'
    //                         }
    //                     }
    //                 }
    //             },
    //             plugins: {
    //                 trigger: new FormValidation.plugins.Trigger(),
    //                 bootstrap: new FormValidation.plugins.Bootstrap()
    //             }
    //         }
    //     ));

    //     // Step 2
    //     validations.push(FormValidation.formValidation(
    //         form, {
    //             fields: {
    //                 address1: {
    //                     validators: {
    //                         notEmpty: {
    //                             message: 'Address is required'
    //                         }
    //                     }
    //                 },
    //                 postcode: {
    //                     validators: {
    //                         notEmpty: {
    //                             message: 'Postcode is required'
    //                         }
    //                     }
    //                 },
    //                 city: {
    //                     validators: {
    //                         notEmpty: {
    //                             message: 'City is required'
    //                         }
    //                     }
    //                 },
    //                 state: {
    //                     validators: {
    //                         notEmpty: {
    //                             message: 'State is required'
    //                         }
    //                     }
    //                 },
    //                 country: {
    //                     validators: {
    //                         notEmpty: {
    //                             message: 'Country is required'
    //                         }
    //                     }
    //                 }
    //             },
    //             plugins: {
    //                 trigger: new FormValidation.plugins.Trigger(),
    //                 bootstrap: new FormValidation.plugins.Bootstrap()
    //             }
    //         }
    //     ));


    //     // Initialize form wizard
    //     wizardObj = new KTWizard(wizardEl, {
    //         startStep: 1, // initial active step number
    //         clickableSteps: false // to make steps clickable this set value true and add data-wizard-clickable="true" in HTML for class="wizard" element
    //     });

    //     // Validation before going to next page
    //     wizardObj.on('beforeNext', function(wizard) {
    //         validations[wizard.getStep() - 1].validate().then(function(status) {
    //             if (status == 'Valid') {
    //                 wizardObj.goNext();
    //                 KTUtil.scrollTop();
    //             } else {
    //                 Swal.fire({
    //                     text: "Sorry, looks like there are some errors detected, please try again kkkkkk.",
    //                     icon: "error",
    //                     buttonsStyling: false,
    //                     confirmButtonText: _LANG_.close,
    //                     customClass: {
    //                         confirmButton: "btn font-weight-bold btn-light-primary"
    //                     }
    //                 }).then(function() {
    //                     KTUtil.scrollTop();
    //                 });
    //             }
    //         });

    //         wizardObj.stop(); // Don't go to the next step
    //     });

    //     // Change event
    //     wizardObj.on('change', function(wizard) {
    //         KTUtil.scrollTop();
    //     });
    // }

    // Public Functions
    return {
        init: function() {
            _handleFormSignin();
            _handleFormForgot();
            _handleFormResetForgot();
            //_handleFormSignup();
        }
    };
}();

// Class Initialization
jQuery(document).ready(function() {
    KTLogin.init();

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

});