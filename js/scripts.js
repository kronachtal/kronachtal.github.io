/*!
* Start Bootstrap - Agency v7.0.5 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 

$('.datepicker').datepicker({
    format: "dd.mm.yyyy",
    language: "de",
});

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission

})()
$.validator.setDefaults({
    submitHandler: function () {
        var name_form = $("#name").val();
        var email_form = $("#email").val();
        var tel_form = $("#tel").val();
        var gaeste_form = $("#gaeste").val();
        var anreise_form = $("#anreise").val();
        var abreise_form = $("#abreise").val();
        var nachricht_form = $("#message").val();
        var data_privacy = $("#data_privacy").val();
        $("#returnmessage").empty(); // To empty previous error/success message.
        // Checking for blank fields.
        if (name_form == '' || email_form == '' || tel_form == '' || nachricht_form == '' || gaeste_form == '') {
            alert("Bitte das Formular vollständig ausfüllen");
        } else {
            // Returns successful data submission message when the entered information is stored in database.
            console.log($("#contactForm").serialize());
            $.ajax({
                url: "https://script.google.com/macros/s/AKfycbx-lvcngau_MidLf0_HtXRNGp9pHDdSyVYo_hsAW3dqJBzPb8sMpSjf6ApeGVAR0GhWFA/exec",
                method: "POST",
                dataType: "json",
                data: JSON.stringify({
                    name: name_form,
                    email: email_form,
                    telefon: nachricht_form,
                    gaeste: gaeste_form,
                    anreise: anreise_form,
                    abreise: abreise_form,
                    nachricht: nachricht_form
                }),
                beforeSend: function () {
                    $("#submitButtonLoading").show();
                    $("#submitButton").hide();
                },
                success: function (response) {
                    $("#submitSuccessMessage").removeClass("d-none");
                    $("#submitButtonLoading").hide();
                },
                error: function (xhr, status) {
                    $("#submitErrorMessage").removeClass("d-none");
                    $("#submitButtonLoading").hide();
                }
            });

        }
    }
});



$(document).ready(function () {


    $("#contactForm").validate({
        rules: {
            name: "required",
            email: {
                required: true,
                email: true
            },
            phone: "required",
            gaeste: "required",
            message: "required",
            anreise: "required",
            abreise: "required",
            agree: "required"
        },
        messages: {
            name: "Bitte Name angeben.",
            email: "Bitte eine valide E-Mail-Adresse angeben.",
            phone: "Bitte Ihre Telefonnummer angeben.",
            guest: "Bitte Anzahl der Gäste angeben.",
            message: "Bitte eine Nachricht eingeben.",
            anreise: "Bitte Datum angeben.",
            abreise: "Bitte Datum angeben.",
            agree: "Bitte der Datenschutzerklärung zustimmen."
        },
        errorElement: "em",
        errorPlacement: function (error, element) {
            // Add the `help-block` class to the error element
            error.addClass("help-block");

            if (element.prop("type") === "checkbox") {
                error.insertAfter(element.parent("label"));
            } else {
                error.insertAfter(element);
            }
        },
        highlight: function (element, errorClass, validClass) {
            $(element).parents(".col-sm-5").addClass("has-error").removeClass("has-success");
        },
        unhighlight: function (element, errorClass, validClass) {
            $(element).parents(".col-sm-5").addClass("has-success").removeClass("has-error");
        }
    });

    let gallery = new SimpleLightbox({
        elements: '#portfolio a.portfolio-link'
    });

    $("#opengallery").click(function () {
        console.log('sdf')
        $('#portfolio a.portfolio-link').simpleLightbox({ /* options */ }).open()

    })

});


window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Activate SimpleLightbox plugin for portfolio items



});