// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll(".needs-validation");
  var checkedBox = document.querySelectorAll(`input[name="sports"]`);
  var arrChecked = [];

  console.log(arrChecked);
  // Loop over them and prevent submission
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        for (var i = 0; i < checkedBox.length; i++) {
          if (checkedBox[i].checked) {
            arrChecked[i] = checkedBox[i];
          }
        }

        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();
