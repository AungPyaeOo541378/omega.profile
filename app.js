$(document).on("click", ".nav-input", function () {
    $(".nav-input").each(function () {
      $(this).removeClass("bg-gray-900");
    });
    $(this).addClass("bg-gray-900");
  });
  
  $(document).on("click", "#profile-img", function () {
    if ($("#profile-icon").hasClass("hidden")) {
      $("#profile-icon").removeClass("hidden");
    } else {
      $("#profile-icon").addClass("hidden");
    }
  });