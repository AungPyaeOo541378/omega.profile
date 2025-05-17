$(document).on("click", ".nav-input", function () {
    $(".nav-input").each(function () {
      $(this).removeClass("bg-gray-900");
    });
    $(this).addClass("bg-gray-900");
  });
  
//   $(document).on("click", "#profile-img", function () {
//     if ($("#profile-icon").hasClass("hidden")) {
//       $("#profile-icon").removeClass("hidden");
//     } else {
//       $("#profile-icon").addClass("hidden");
//     }
//   });

$(document).ready(function () {
    setTimeout(() => {
      $(".loading-page").addClass("hidden");
      $(".main-page").removeClass("hidden");
    }, 3000);
  });

$(document).on("click", "#home", function () {
    $(".home-menu").each(function () {
      $(this).removeClass("hidden");
    });
    $(".project-menu").each(function () {
      $(this).addClass("hidden");
    });
    $(".resume-menu").each(function () {
      $(this).addClass("hidden");
    });
  });

$(document).on("click", "#resume", function () {
    $(".home-menu").each(function () {
      $(this).addClass("hidden");
    });
    $(".project-menu").each(function () {
      $(this).addClass("hidden");
    });
    $(".resume-menu").each(function () {
      $(this).removeClass("hidden");
    });
  });

$(document).on("click", "#projects", function () {
    $(".home-menu").each(function () {
      $(this).addClass("hidden");
    });
    $(".project-menu").each(function () {
      $(this).removeClass("hidden");
    });
    $(".resume-menu").each(function () {
      $(this).addClass("hidden");
    });
  });