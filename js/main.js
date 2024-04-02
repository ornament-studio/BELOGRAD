// open mobile menu
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

// show filter list

const filterBtn = document.querySelector(".filter__show");
const filter = document.querySelector(".filter");

if (filterBtn !== null) {
  filterBtn.addEventListener("click", function () {
    filter.classList.toggle("open");
  });
}

//close filter
const selectList = document.querySelectorAll(".filter__list");

if (selectList !== null || filter !== null) {
  document.addEventListener("DOMContentLoaded", () => {
    // Структура страницы загружена и готова к взаимодействию
    window.addEventListener("click", (e) => {
      // при клике в любом месте окна браузера
      const target = e.target; // находим элемент, на котором был клик
      if (!target.closest(".filter__show") && !target.closest(".filter")) {
        // если этот элемент или его родительские элементы не окно навигации и не кнопка
        filter.classList.remove("open");
      }
    });
  });
}

// video block
let video = document.getElementById("video-frame");

if (video !== null) {
  video.controls = false;
  video.addEventListener("click", function () {
    if (video.paused) {
      video.play();
      video.style.zIndex = '10';
    } else {
      video.pause();
      video.style.zIndex = '1';
    }
    video.controls = true;
  });
}

// sliders
var sliders = document.getElementsByClassName("general-splide");

if (sliders.length > 0) {
  for (var i = 0; i < sliders.length; i++) {
    new Splide(sliders[i], {
      perMove: 1,
      perPage: 3,
      gap: "15px",
      type: 'loop',
      pagination: false,
      autoWidth: true,
      breakpoints: {
        1200: {
          perPage: 2,
        },
      },
      breakpoints: {
        770: {
          perPage: 1,
          gap: '10px',
          type: 'splide',
        },
      },
    }).mount();
  }
}

if (document.querySelector(".feedback__slider")) {
  new Splide(".feedback__slider", {
    perMove: 1,
    perPage: 2,
    gap: "15px",
    pagination: false,
    autoWidth: true,
    breakpoints: {
      770: {
        perPage: 1,
        gap: "10px",
        type: 'splide',
      },
    },
  }).mount();
}

if (document.querySelector(".program__list")) {
  new Splide(".program__list", {
    perMove: 1,
    perPage: 3,
    gap: "15px",
    type: "loop",
    pagination: false,
    autoWidth: true,
    breakpoints: {
      1200: {
        perPage: 2,
      },
    },
    breakpoints: {
      770: {
        perPage: 1,
      },
    },
    breakpoints: {
      480: {
        destroy: true,
        arrows: false,
      },
    },
  }).mount();
}

if (document.querySelector(".gallery__slider")) {
  new Splide(".gallery__slider", {
    perMove: 1,
    type: "loop",
    perPage: 3,
    pagination: false,
    focus: "center",
    breakpoints: {
      480: {
        perPage: 1,
        
      },
    },
  }).mount();
}

if (document.querySelector(".sidebar__slider")) {
  new Splide(".sidebar__slider", {
    perMove: 1,
    perPage: 1,
    gap: '10px',
    type: 'splide',
    pagination: false,
    mediaQuery: "min",
    breakpoints: {
      480: {
        perPage: 2,
        arrows: false,
      },
      770: {
        destroy: true,
      },
    },
  }).mount();
}

if (document.querySelector(".handsOn__slider")) {
  new Splide(".handsOn__slider", {
    perMove: 1,
    perPage: 1,
    pagination: false,
    autoWidth: true,
    breakpoints: {
      480: {
        destroy: true,
        arrows: false,
      },
    },
  }).mount();
}

// hover effect for mobile
let elementsForHover = document.querySelectorAll('.hoverForMobile');

if (elementsForHover.length > 0) { 
  elementsForHover.forEach((element) => {
    // Add touchstart event listener
    element.addEventListener('touchstart', () => {
      element.classList.add('touch-hover-effect');
    });
  
    element.addEventListener('touchend', () => {
      // Remove touch effect
      element.classList.remove('touch-hover-effect');
    });
  });
}
