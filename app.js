$(document).on("click", ".nav-input", function () {
  $(".nav-input").each(function () {
    $(this).removeClass("bg-gray-900 shadow-xl/60");
  });
  $(this).addClass("bg-gray-900 shadow-xl/60");
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
  }, 1000);
});

$(document).on("click", "#home", function () {
  $(".home-menu").each(function () {
    $(this).removeClass("hidden");
  });
  $(".project-menu").each(function () {
    $(this).addClass("hidden");
  });
  $(".about-menu").each(function () {
    $(this).addClass("hidden");
  });
  $(".contact-menu").each(function () {
    $(this).addClass("hidden");
  });
});

$(document).on("click", "#about", function () {
  $(".home-menu").each(function () {
    $(this).addClass("hidden");
  });
  $(".project-menu").each(function () {
    $(this).addClass("hidden");
  });
  $(".about-menu").each(function () {
    $(this).removeClass("hidden");
  });
  $(".contact-menu").each(function () {
    $(this).addClass("hidden");
  });
});

$(document).on("click", "#projects", function () {
  $(".home-menu").each(function () {
    $(this).addClass("hidden");
  });
  $(".project-menu").each(function () {
    $(this).removeClass("hidden");
  });
  $(".about-menu").each(function () {
    $(this).addClass("hidden");
  });
  $(".contact-menu").each(function () {
    $(this).addClass("hidden");
  });
});

$(document).on("click", "#contact", function () {
  $(".home-menu").each(function () {
    $(this).addClass("hidden");
  });
  $(".project-menu").each(function () {
    $(this).addClass("hidden");
  });
  $(".about-menu").each(function () {
    $(this).addClass("hidden");
  });
  $(".contact-menu").each(function () {
    $(this).removeClass("hidden");
  });
});

$(document).on("click", ".needweb", function () {
  $(".needin").addClass("bg-gray-900 shadow-xl/60");
});

//Black & white color buttons
// var colorBtn = document.querySelector(".color-btn");
// colorBtn.addEventListener("click",function () {
//   console.log("nice");
//   var body = document.querySelector("#main-body");

// });

$(document).on("click", ".color-btn", function () {
  //switch Btn
  if ($(".switch-btn").hasClass("fa-toggle-off")) {
    $(".switch-btn").removeClass("fa-toggle-off");
    $(".switch-btn").addClass("fa-toggle-on");
    $(".switch-btn").css("color", "slate");
    
  } else {
    $(".switch-btn").removeClass("fa-toggle-on");
    $(".switch-btn").addClass("fa-toggle-off");
    $(".switch-btn").css("color", "white");
  }

  //main-outer color
  if ($(".main-color").hasClass("bg-gray-900")) {
    $(".main-color").removeClass("bg-gray-900");
    $(".main-color").addClass("bg-gray-600");
  } else {
    $(".main-color").removeClass("bg-gray-600");
    $(".main-color").addClass("bg-gray-900");
  }
  //main-inner color
  if ($(".mainInner-color").hasClass("bg-gray-800")) {
    addClassToElement(".mainInner-color", "bg-gray-800", "bg-gray-600");
    // element      , classNameOne,   classNameTwo
  } else {
    addClassToElement(".mainInner-color", "bg-gray-600", "bg-gray-800");
  }
  //main-page-color
  if ($(".main-body").hasClass("bg-slate-800")) {
    addClassToElement(".main-body", "bg-slate-800", "bg-slate-400");
  } else {
    addClassToElement(".main-body", "bg-slate-400", "bg-slate-800");
  }
});

$(document).on("click", ".blue-btn", function () {
  changeColorBtn("blue");
});

$(document).on("click", ".yellow-btn", function () {
  changeColorBtn("yellow");
});

$(document).on("click", ".red-btn", function () {
  changeColorBtn("red");
});

//customize functions
function changeColorBtn(color) {
  $(".change-color-text").css("color", color);
}

function addClassToElement(element, classNameOne, classNameTwo) {
  $(element).removeClass(classNameOne);
  $(element).addClass(classNameTwo);
}
