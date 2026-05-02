let ham = document.getElementById("hambarger");
let nav = document.getElementById("nav");
let navlist = document.getElementById("right-nav");
ham.addEventListener("click", () => {
  nav.classList.toggle("active-nav");
  navlist.classList.toggle("active_nav_list");

  if (nav.classList.contains("active-nav")) {
    ham.src = "svg/cross.svg";
  } else {
    ham.src = "svg/hambarger.svg";
  }
});

//--------------------typing animation.......----------------------
var typed = new Typed("#profession", {
  strings: ["Web Developer", "MERN Developer", "Problem Solver", "Student"],
  typeSpeed: 50,
  backSpeed: 50,
  loop: true,
});

// -----------------download resume-----------------------------
function downloadResume() {
  const link = document.createElement("a");
  link.href = "resume/resume.pdf"; // your pdf file name
  link.download = "jaydebResume.pdf";
  link.click();
}

// _______project________
document.querySelectorAll(".slider").forEach((slider) => {
  const slides = slider.querySelector(".slides");
  const slideCount = slides.children.length;
  let currentSlide = 0;

  const updateSlides = () => {
    const offset = -currentSlide * 100;
    slides.style.transform = `translateX(${offset}%)`;
    updateDots();
  };

  const updateDots = () => {
    const dots = slider.querySelectorAll(".dot");
    dots.forEach((dot, index) => {
      dot.classList.toggle("active", index === currentSlide);
    });
  };

  const showNextSlide = () => {
    currentSlide = (currentSlide + 1) % slideCount;
    updateSlides();
  };

  const showPrevSlide = () => {
    currentSlide = (currentSlide - 1 + slideCount) % slideCount;
    updateSlides();
  };

  slider.querySelector(".next").addEventListener("click", showNextSlide);
  slider.querySelector(".prev").addEventListener("click", showPrevSlide);
  slider.querySelectorAll(".dot").forEach((dot) => {
    dot.addEventListener("click", () => {
      currentSlide = parseInt(dot.getAttribute("data-slide"));
      updateSlides();
    });
  });

  updateSlides(); // Initialize the slider

  setInterval(() => {
    currentSlide = (currentSlide + 1) % slideCount;
    updateSlides();
  }, 15000); // change slide every 3 seconds
});

// ----------------------------------------------
// -------------------------Gsap---------------

gsap.from(".right_main", {
  x: 200,
  opacity: 0,
  duration: 1,
});

let tl = gsap.timeline();

tl.from(".left-main", {
  x: -300,
  opacity: 0,
  duration: 1,
});
tl.from(".Download-button", {
  y: 100,
  opacity: 0,
  duration: 0.5,
});

let t2 = gsap.timeline();

// gsap.from(".about_heading", {
//   y: 100,
//   opacity: 0,
//   duration: 0.5,

//   scrollTrigger: {
//     trigger: ".about_heading",
//     scroller: "body",
//     // markers:true,
//     start: "top 95%",
//     end: "top 100%",
//     scrub: 2,
//   },
// });

gsap.from(".about_desc", {
  y: 100,
  opacity: 0,
  duration: 1,

  scrollTrigger: {
   trigger: ".about_desc",
   scroller: "100%",
    // markers:true,
    start: "top 95%",
    end: "top 100%",
    scrub: 2,
  },
});

// gsap.from(".about_line1", {
//   x: -150,
//   opacity: 0,
//   duration: 0.5,
//   // stagger:1
//   scrollTrigger: {
//     trigger: ".about_line1",
//     scroller: "body",
//     markers:true,
//     start: "top 95%",
//     end: "top 100%",
//     scrub: 2,
//   },
// });

// gsap.from(".about_line2", {
//   x: 150,
//   opacity: 0,
//   duration: 0.5,
//   // stagger:1
//   scrollTrigger: {
//     trigger: ".about_line",
//     scroller: "body",
//     markers:true,
//     start: "top 95%",
//     end: "top 80%", 
//     scrub: 2,
//   },
// });

// ---------------------------
let t3 = gsap.timeline();

t3.from(".skill_heading", {
  y: 100,
  opacity: 0,
  duration: 0.5,
  scrollTrigger: {
    trigger: ".skill_heading",
    scroller: "body",
    // markers:true,
    start: "top 90%",
    end: "top 60%",
    scrub: 2,
  },
});

t3.from(".skill", {
  x: 400,
  opacity: 0,
  duration: 1,
  stagger: 1,
  scrollTrigger: {
    trigger: ".skill",
    scroller: "body",
    // markers:true,
    start: "top 90%",
    end: "top 80%",
    scrub: 4,
  },
});

let t4 = gsap.timeline();

t4.from(".project_heading", {
  y: 200,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".project_heading",
    scroller: "body",
    // markers: true,
    start: "top 90%",
    end: "top 70%",
    scrub: 3,
  },
});

let p1 = gsap.utils.toArray(".p1");

p1.forEach((p) => {
  gsap.from(p, {
    x: -200,
    opacity: 0,
    duration: 1,
    stagger: 1,
    scrollTrigger: {
      trigger: p,
      scroller: "body",
    //   markers: true,
      start: "top 80%",
      end: "top 50%",
      scrub: 3,
    },
  });
});

let p2 = gsap.utils.toArray(".p2")

p2.forEach((p) => {
  gsap.from(p, {
    x: 200,
    opacity: 0,
    duration: 1,
    stagger: 1,
    scrollTrigger: {
      trigger: p,
      scroller: "body",
    //   markers: true,
      start: "top 90%",
      end: "top 70%",
      scrub: 3,
    },
  });
});



let t5 = gsap.timeline();

t5.from(".contact-div", {
  y: 100,
  opacity: 0,
  duration: 1,
    scrollTrigger: {
    trigger: ".contact-div",
    scroller: "body",
    // markers:true,
    start: "top 90%",
    end: "top 60%",
    scrub: 2,
  },

});

t5.from(".contact-form", {
  x: -300,
  opacity: 0,
  duration: 1,
    scrollTrigger: {
    trigger: ".contact-form",
    scroller: "body",
    // markers:true,
    start: "top 90%",
    end: "top 70%",
    scrub: 2,
  },
});

t5.from(".icons", {
  x: 300,
  opacity: 0,
  duration: 0.3,
  stagger: 1,
    scrollTrigger: {
    trigger: ".icons",
    scroller: "body",
    // markers:true,
    start: "top 95%",
    end: "top 90%",
    scrub: 2,
  },
});
