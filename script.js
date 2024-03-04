document.addEventListener('DOMContentLoaded', function() {
	const header = document.querySelector('.header');
	const heroSection = document.querySelector('.hero');
	const slide1Section = document.querySelector('.slide1');
	const navLinks = document.querySelectorAll('.header nav ul li a');
  
	// Function to update header class and anchor tag styles based on scroll position
	function updateStyles() {
	  const scrollPosition = window.scrollY;
	  const heroSectionOffsetTop = heroSection.offsetTop;
	  const slide1SectionOffsetTop = slide1Section.offsetTop;
  
	  // Update header class based on scroll position
	  if (scrollPosition === 0) {
		header.classList.remove('sticking', 'sticking2');
	  } else if (scrollPosition >= slide1SectionOffsetTop) {
		header.classList.remove('sticking');
		header.classList.add('sticking2');
	  } else if (scrollPosition >= heroSectionOffsetTop) {
		header.classList.remove('sticking2');
		header.classList.add('sticking');
	  } else {
		header.classList.remove('sticking', 'sticking2');
	  }
	}
  
	// Event listener for scroll event
	window.addEventListener('scroll', updateStyles);
  });
  
  
  window.onload = function () {
    const menu_btn = document.querySelector('.ham');
    const logo = document.querySelector('.logo-text');
    const mobile_menu = document.querySelector('.mobile-nav');
    const body = document.querySelector('body'); // Select the body element

    menu_btn.addEventListener('click', function () {
        menu_btn.classList.toggle('is-active');
        mobile_menu.classList.toggle('is-active');
        menu_btn.classList.toggle('color-white');
        logo.classList.toggle('color-white');

        // Toggle body class for scrolling lock
        body.classList.toggle('scroll-lock');
    });

    // Select all anchor tags inside the mobile navbar
    const mobileNavLinks = document.querySelectorAll('.mobile-nav a');

    // Add click event listener to each anchor tag
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            // Toggle off the mobile navbar
            menu_btn.classList.remove('is-active');
            mobile_menu.classList.remove('is-active');
            menu_btn.classList.remove('color-white');
            logo.classList.remove('color-white');
            body.classList.remove('scroll-lock');

            // Get the href attribute of the clicked anchor tag
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            // Scroll to the target section
            if (targetElement) {
                event.preventDefault(); // Prevent default anchor tag behavior
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
    
};

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true, // Enable looping
  autoplay: {
    delay: 2000, // Change delay value (in milliseconds) as needed
    disableOnInteraction: false, // Prevent autoplay from stopping on user interaction
  },
  // effect: "fade", // Change the slide transition effect to fade
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  // Add responsive breakpoints
  breakpoints: {
    // When window width is <= 300px
    300: {
      slidesPerView: 1,
      spaceBetween: 10
    },
    // When window width is <= 600px
    600: {
      slidesPerView: 2,
      spaceBetween: 10
    },
    // When window width is <= 991px
    991: {
      slidesPerView: 3,
      spaceBetween: 20
    },
    // When window width is <= 1199px
    1199: {
      slidesPerView: 3,
      spaceBetween: 30
    }
    // Add more breakpoints as needed
  },
});

// Add event listeners for custom navigation buttons
document.querySelector(".custom-prev-button").addEventListener("click", function () {
  swiper.slidePrev();
});

document.querySelector(".custom-next-button").addEventListener("click", function () {
  swiper.slideNext();
});

