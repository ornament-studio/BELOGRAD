$(function () {
  $(".programs__slider").slick({
    infinite: true,
    variableWidth: true,
    slidesToShow: 3,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 481,
        settings: "unslick",
      },
    ],
  });

  
  $(".program__slider").slick({
    infinite: true,
    variableWidth: true,
    slidesToShow: 3,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: "unslick",
      },
    ],
  });

  $(".gallery__slider").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  $(".benefits__slider").slick({
    infinite: true,
    variableWidth: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});

$(function () {
  $(".handsOn__slider").slick({
    infinite: true,
    variableWidth: true,
    slidesToShow: 1,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 901,
        settings: "unslick",
      },
    ],
  });
});

$(function () {
  $(".feedback__slider").slick({
    infinite: true,
    variableWidth: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});

$(function () {
  $(".onlineCourses__slider").slick({
    infinite: true,
    variableWidth: true,
    slidesToShow: 3,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});

$(function () {
  $(".cases__slider").slick({
    infinite: true,
    variableWidth: true,
    speed: 1000,
    easing: "ease",
    slidesToShow: 3,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

let menuBtn = document.querySelector(".header__burgerIcon");
let menu = document.querySelector(".header__mobileNav");
let menuLinks = document.querySelectorAll(".menu-item");

menuBtn.addEventListener("click", function (event) {
  event.preventDefault();
  toggleMenu();
});

menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    toggleMenu();
  });
});

function toggleMenu() {
  menuBtn.classList.toggle("active");
  menu.classList.toggle("active");
  document.body.classList.toggle("lock");
}

// faq section
let accItem = document.getElementsByClassName("faq__item");
let accHD = document.getElementsByClassName("faq__head");
console.log(accItem);
console.log(accHD);

for (i = 0; i < accHD.length; i++) {
  accHD[i].addEventListener("click", toggleItem, false);
}

function toggleItem() {
  let itemClass = this.parentNode.className;
  for (i = 0; i < accItem.length; i++) {
    accItem[i].className = "faq__item close";
  }
  if (itemClass == "faq__item close") {
    this.parentNode.className = "faq__item open";
  }
}

let video = document.getElementById("video-frame");

video.controls = false;
video.addEventListener("click", function () {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
  video.controls = true;
});
