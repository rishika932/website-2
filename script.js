//========== (ALL PLUGIN FUNCTION) ==========//
// TOOLTIP===========================
const tooltips = document.querySelectorAll(".blog_tooltip");
tooltips.forEach((t) => {
  new bootstrap.Tooltip(t);
});

// SOCAIL ICON CLICK======================

var shareWrappers = document.querySelectorAll(".member_share_link");

shareWrappers.forEach(function (wrapper) {
  // Add a click event listener to each share wrapper

  wrapper.addEventListener("mouseenter", function () {
    // Find the corresponding .member_social_link
    removeSocialLink(wrapper);

    var socialLink = this.parentNode.querySelector(".member_social_link");

    // Toggle the 'active' class
    socialLink.classList.toggle("active");
  });
  wrapper.addEventListener("mouseleave", function () {
    // Find the corresponding .member_social_link
    removeSocialLink(wrapper);

    var socialLink = this.parentNode.querySelector(".member_social_link");

    // Toggle the 'active' class
    socialLink.classList.toggle("active");
  });
});

function removeSocialLink(currentWrapper) {
  shareWrappers.forEach((wrapper) => {
    if (wrapper !== currentWrapper) {
      var socialLink = wrapper.querySelector(".member_social_link");
      if (socialLink.classList.contains("active")) {
        socialLink.classList.remove("active");
      }
    }
  });
}

//=== (COUNTER UP) ============//

$(".counter").counterUp({
  time: 1000,
});

//=== (OWL CAROUSEL) =============//
$(document).ready(function () {
  $(".finished_projects_carousel").owlCarousel({
    items: 3,
    dots: false,
    loop: true,
    center: true,
    margin: 24,
    nav: true,
    navText: [
      "<i class='ensurx-arrow-left'></i> ",
      "<i class='ensurx-arrow-right'></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      575: {
        items: 1,
        margin: 0,
      },
      767: {
        items: 2,
      },

      991: {
        items: 2,
      },
      1000: {
        items: 3,
      },
      1399: {
        items: 3,
      },
    },
  });
});

$(document).ready(function () {
  $(".review_carousel").owlCarousel({
    dots: false,
    loop: true,
    margin: 20,
    nav: true,
    navText: [
      "<i class='ensurx-arrow-left fa-solid fa-chevron-left'></i> ",
      "<i class='ensurx-arrow-right fa-solid fa-chevron-right'></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      575: {
        items: 1,
      },
      768: {
        items: 2,
      },
      1000: {
        items: 3,
      },
      1399: {
        items: 3,
      },
    },
  });
});

$(document).ready(function () {
  $(".testimonial_carousel").owlCarousel({
    dots: false,
    items: 1,
    loop: true,
    nav: true,
    navText: [
      "<i class='ensurx-arrow-left'></i> ",
      "<i class='ensurx-arrow-right'></i>",
    ],
  });
});

$(document).ready(function () {
  $(".banner_carousel").owlCarousel({
    items: 1,
    margin: 50,
    dots: false,
    loop: true,
    nav: true,
    navText: [
      "<i class='ensurx-arrow-left'></i> ",
      "<i class='ensurx-arrow-right'></i>",
    ],
    responsive: {
      0: {
        nav: false,
        dots: true,
      },
      575: {
        nav: false,
        dots: true,
      },
      768: {},
      1000: {},
      1399: {},
    },
  });
});

$(document).ready(function () {
  $(".service_carousel").owlCarousel({
    items: 1,
    dots: false,
    loop: true,
    stagePadding: 150,
    margin: 30,
    responsive: {
      0: {
        items: 1,
        stagePadding: 0,
        margin: 20,
      },
      430: {
        items: 1,
        stagePadding: 0,
        margin: 20,
      },
      575: {
        items: 1,
        stagePadding: 130,
        margin: 20,
      },
      767: {
        items: 2,
        margin: 20,
        stagePadding: 80,
      },
      991: {
        items: 2,
        margin: 20,
        stagePadding: 150,
      },
      1199: {
        items: 3,
        margin: 20,
        stagePadding: 130,
      },

      1280: {
        items: 3,
        stagePadding: 150,
      },
      1399: {
        items: 3,
        stagePadding: 170,
      },
      1800: {
        items: 4,
        stagePadding: 100,
      },
      2400: {
        items: 4,
        stagePadding: 200,
      },
    },
  });
});

$(document).ready(function () {
  $(".team_carousel").owlCarousel({
    dots: false,
    // loop:true,
    margin: 20,
    nav: true,
    navText: [
      "<i class='ensurx-arrow-left fa-solid fa-chevron-left'></i> ",
      "<i class='ensurx-arrow-right fa-solid fa-chevron-right'></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      575: {
        items: 1,
        margin: 0,
      },
      768: {
        items: 2,
        margin: 20,
      },

      991: {
        items: 2,
      },
      1000: {
        items: 3,
      },
      1399: {
        items: 3,
      },
    },
  });
});

$(document).ready(function () {
  $(".client_carousel").owlCarousel({
    items: 7,
    margin: 100,
    dots: false,
    autoplay: true,
    autoplayTimeout: 2000,
    loop: true,
    responsive: {
      0: {
        items: 3,
        margin: 70,
      },
      320: {
        items: 3,
        margin: 90,
      },
      575: {
        items: 4,
        margin: 50,
      },
      767: {
        items: 6,
        margin: 50,
      },
      991: {
        items: 7,
        margin: 90,
      },
      1300: {
        items: 7,
        margin: 90,
      },
      1399: {
        items: 7,
      },
    },
  });
});
//=== (OWL CAROUSEL END) ===============//

//=== (PROGRESS BAR) ==================//

// Function to start animation when the section is in the viewport
function startAnimation(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      var skillPer = entry.target;
      var per = parseFloat(skillPer.getAttribute("data-per"));
      skillPer.style.width = per + "%";

      var animatedValue = 0;
      var startTime = null;

      function animate(timestamp) {
        if (!startTime) startTime = timestamp;
        var progress = timestamp - startTime;
        var stepPercentage = progress / 3000; // Dividing by duration in milliseconds (1000ms = 1s)

        if (stepPercentage < 1) {
          animatedValue = per * stepPercentage;
          skillPer.setAttribute("data-per", Math.floor(animatedValue) + "%");
          requestAnimationFrame(animate);
        } else {
          animatedValue = per;
          skillPer.setAttribute("data-per", Math.floor(animatedValue) + "%");
        }
      }

      requestAnimationFrame(animate);

      // Stop observing once animation starts
      observer.unobserve(skillPer);
    }
  });
}

// Create an intersection observer instance
var observer = new IntersectionObserver(startAnimation, {
  threshold: 0.2, // 20% of the target element must be visible for the callback to be invoked
});

// Observe each skill-per element
var skillPers = document.querySelectorAll(".skill-per");
skillPers.forEach((skillPer) => {
  observer.observe(skillPer);
});
//=== (PROGRESS BAR END) ==================//

//  ======= (MIXITUP JS CDN) =======
document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    var container = document.querySelector(".projects_main");
    // console.log(container); // Should log the container element or null
    if (container) {
      var mixer = mixitup(container);
    } else {
      // console.error('Container element not found');
    }
  }, 1000); // Adjust the delay time as needed
});

// ANIMATION =================
// JavaScript
document.addEventListener("DOMContentLoaded", function () {
  var aboutSection = document.querySelector(".about_section");
  var aboutIcon = document.querySelector(".about_left_icon");

  var observer = new IntersectionObserver(
    function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          aboutIcon.classList.add("active");
          observer.unobserve(aboutSection); // Stop observing once animation starts
        }
      });
    },
    {
      threshold: 0.5, // Adjust the threshold as needed
    }
  );

  // observer.observe(aboutSection);
});

// function for apply animation on services section
function addAndRemoveClasses(children2) {
  let indexOfClassNames = 0;
  let classNames = [
    "col-md-6-col-lg-4-1s",
    "col-md-6-col-lg-4-1s",
    "col-md-6-col-lg-4-1s",
    "col-md-6-col-lg-4-1500ms",
    "col-md-6-col-lg-4-1500ms",
    "col-md-6-col-lg-4-1500ms",
    "col-md-6-col-lg-4-2s",
    "col-md-6-col-lg-4-2s",
    "col-md-6-col-lg-4-2s",
  ];
  children2.map((child) => {
    if (window.scrollY >= 1882 && window.scrollY <= 4100) {
      child.classList.add(classNames[indexOfClassNames]);
      indexOfClassNames = indexOfClassNames + 1;
    } else if (window.scrollY <= 1027 || window.scrollY >= 4100) {
      child.classList.remove(classNames[indexOfClassNames]);
      indexOfClassNames = indexOfClassNames + 1;
    }
  });
}
let rowTheElem = document.querySelectorAll(".col-md-6-col-lg-4");
window.addEventListener("scroll", () => addAndRemoveClasses([...rowTheElem]));

// function for apply animation on great service section
function addAndRemoveClasses2(children3) {
  let indexOfClassNames2 = 0;
  let classNames2 = ["row-justify-content-between-animate"];
  children3.map((child) => {
    if (window.scrollY >= 5052 && window.scrollY <= 7100) {
      child.classList.add(classNames2[indexOfClassNames2]);
      indexOfClassNames2 = indexOfClassNames2 + 1;
    } else if (window.scrollY <= 3453 || window.scrollY >= 7100) {
      child.classList.remove(classNames2[indexOfClassNames2]);
      indexOfClassNames2 = indexOfClassNames2 + 1;
    }
  });
}
let rowTheElem2 = document.querySelectorAll(".row-justify-content-between");
window.addEventListener("scroll", () => addAndRemoveClasses2([...rowTheElem2]));
