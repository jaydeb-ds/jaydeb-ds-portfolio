let ham = document.getElementById("hambarger")
let nav = document.getElementById("nav");
let navlist = document.getElementById("right-nav")
ham.addEventListener('click',()=>{
	nav.classList.toggle("active-nav")
	navlist.classList.toggle("active_nav_list")
	
	if (nav.classList.contains('active-nav')) {
		ham.src = "cross.svg"
	}
	else{
		ham.src = "hambarger.svg"
	}
})

   var typed = new Typed('#profession', {
      strings: ['Web Developer', 'MERN Developer', 'Problem Solver', 'Student'],
      typeSpeed: 50,
	  backSpeed: 50,
	  loop: true
    });


	// _______project________
	document.querySelectorAll('.slider').forEach(slider => {
    const slides = slider.querySelector('.slides');
    const slideCount = slides.children.length;
    let currentSlide = 0;

    const updateSlides = () => {
        const offset = -currentSlide * 100;
        slides.style.transform = `translateX(${offset}%)`;
        updateDots();
    };

    const updateDots = () => {
        const dots = slider.querySelectorAll('.dot');
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentSlide);
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

    slider.querySelector('.next').addEventListener('click', showNextSlide);
    slider.querySelector('.prev').addEventListener('click', showPrevSlide);
    slider.querySelectorAll('.dot').forEach(dot => {
        dot.addEventListener('click', () => {
            currentSlide = parseInt(dot.getAttribute('data-slide'));
            updateSlides();
        });
    });

    updateSlides(); // Initialize the slider

    setInterval(() => {
        currentSlide = (currentSlide + 1) % slideCount;
        updateSlides();
    }, 15000); // change slide every 3 seconds
});

