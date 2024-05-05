$(document).ready(function () {
  // Initialize form validation on the registration form.
  // It has the name attribute "registration"
  $("form[name='registration']").validate({
    // Specify validation rules
    rules: {
      // The key name on the left side is the name attribute
      // of an input field. Validation rules are defined
      // on the right side

      firstName: {
        required: "required",
        minlength: 1,
      },
      lastName: {
        required: "required",
        minlength: 1,
      },
      email: {
        required: true,
        // Specify that email should be validated
        // by the built-in "email" rule
        email: true,
      },
      phone: {
        required: true,
        minlength: 10,
        maxlength: 10,
        phoneUS: true,
      },
      zip: {
        required: true,
        digits: true,
        minlength: 5,
        maxlength: 5,
      },
      description: {
        required: true,
        minlength: 5,
      },
    },
    // Specify validation error messages
    messages: {
      firstname: "Please enter your firstname",
      lastname: "Please enter your lastname",
      email: "Please enter a valid email address",
      phone: "Please enter a valid US phone number",
      zip: "Please enter a valid zip code",
      description: "Please enter a description",
    },
    // Make sure the form is submitted to the destination defined
    // in the "action" attribute of the form when valid
    submitHandler: function (form) {
      if (form.valid()) {
        form.submit();
      }
    },
  });
});
