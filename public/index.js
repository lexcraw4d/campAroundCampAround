$(document).ready(function() {
    $("#success-alert").hide();
      $("#success-alert").fadeTo(2000, 500).slideUp(500, function() {
        $("#success-alert").slideUp(500);
      });
    });
