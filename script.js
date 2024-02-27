// const primaryHeader = document.querySelector('.header');
// const scrollWatcher = document.createElement('div');

// scrollWatcher.setAttribute('data-scroll-watcher', '');
// primaryHeader.before(scrollWatcher);


// const navObserver = new IntersectionObserver((entries) =>{
// 	primaryHeader.classList.toggle('sticking', !entries[0].isIntersecting)
// });

// navObserver.observe(scrollWatcher);

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
  
	//   if (scrollPosition >= slide1SectionOffsetTop) {
	// 	// Apply white color to anchor tags when scrolled to slide1 section
	// 	navLinks.forEach(link => {
	// 	  link.style.color = 'white';
	// 	});
	//   } else {
	// 	// Reset anchor tag color when not scrolled to slide1 section
	// 	navLinks.forEach(link => {
	// 	  link.style.color = ''; // Reset to default color
	// 	});
	//   }
  
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
