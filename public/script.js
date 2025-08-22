
document.addEventListener('DOMContentLoaded', () => {
// Testimonials Carousel
const slides = document.getElementById('slides');
const swipeHint = document.getElementById('swipeHint');

let isDown = false;
let startX;
let scrollLeft;

slides.addEventListener('mousedown', (e) => {
  isDown = true;
  slides.classList.add('active');
  startX = e.pageX - slides.offsetLeft;
  scrollLeft = slides.scrollLeft;
});

slides.addEventListener('mouseleave', () => { isDown = false; });
slides.addEventListener('mouseup', () => { isDown = false; });
slides.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slides.offsetLeft;
  const walk = (x - startX) * 2.5;
  slides.scrollLeft = scrollLeft - walk;
});
  
// Testimonials Swipe Hint hiding
['touchstart', 'mousedown'].forEach(evt => {
  slides.addEventListener(evt, () => {
    swipeHint.classList.add('fade-out');
  }, { once: true });
});

// Services Toggle
document.querySelectorAll('.sv-card').forEach(card => {
  const toggle = card.querySelector('.sv-card-toggle');
  const textSpan = toggle.querySelector('.toggle-text');

  toggle.addEventListener('click', () => {
    card.classList.toggle('active');
    toggle.classList.toggle('expanded'); // rotates arrow

    // Update text
    if (card.classList.contains('active')) {
      textSpan.textContent = 'Read Less';
    } else {
      textSpan.textContent = 'Read More';
    }
  });
});

// Nav control
const burger = document.querySelector('.burger');
const spNav = document.querySelector('.sp-nav');

burger.addEventListener('click', () => {
  spNav.classList.toggle('active');

  // optional: animate burger dots into X
  burger.classList.toggle('open');
});

document.querySelectorAll('.sp-nav nav a').forEach(link => {
  link.addEventListener('click', () => {
    const spNav = document.querySelector('.sp-nav');
    spNav.classList.remove('active');
  });
});

// To Top control
const toTop = document.getElementById('to-top');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) { // show after scrolling 300px
    toTop.classList.add('show');
  } else {
    toTop.classList.remove('show');
  }
});

// Form
const form = document.getElementById('contactForm');
const responseDiv = document.getElementById('formResponse');

form.addEventListener('submit', async (e) => {
  e.preventDefault(); // prevent default form submission

  const formData = new FormData(form);

  console.log("Form submission data:");

});
});