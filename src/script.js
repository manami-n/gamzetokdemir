
import emailjs from "emailjs-com";
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


//POP UP after Submission
const overlay = document.getElementById('formMessageOverlay');
const messageText = document.getElementById('formMessageText');
const closeBtn = document.getElementById('formMessageClose');

function showFormMessage(msg) {
  messageText.textContent = msg;
  overlay.style.display = 'flex';
}

// Close button
closeBtn.addEventListener('click', () => {
  overlay.style.display = 'none';
});

// Form Control
const form = document.getElementById("contactForm");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    let isValid = true;

    // Name validation
    const nameInput = document.getElementById("thename");
    const invalidName = document.getElementById("invalidName");
    if (!nameInput.value.trim() || nameInput.value.length < 2) {
      invalidName.style.display = "block";
      isValid = false;
    } else {
      invalidName.style.display = "none";
    }

    // Email validation
    const emailInput = document.getElementById("email");
    const email2Input = document.getElementById("email2");
    const invalidEmail = document.getElementById("invalidEmail");
    const invalidEmail2 = document.getElementById("invalidEmail2");

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailPattern.test(emailInput.value)) {
      invalidEmail.style.display = "block";
      isValid = false;
    } else {
      invalidEmail.style.display = "none";
    }

    if (emailInput.value !== email2Input.value) {
      invalidEmail2.style.display = "block";
      isValid = false;
    } else {
      invalidEmail2.style.display = "none";
    }

    // Phone validation (optional)
    const phoneInput = document.getElementById("phone");
    const invalidPhone = document.getElementById("invalidPhone");
    const phonePattern = /^[0-9+\-]+$/;
    if (phoneInput.value && !phonePattern.test(phoneInput.value)) {
      invalidPhone.style.display = "block";
      isValid = false;
    } else {
      invalidPhone.style.display = "none";
    }

    // Message validation
    const messageInput = document.getElementById("message");
    const invalidMessage = document.getElementById("invalidMessage");
    if (!messageInput.value.trim()) {
      invalidMessage.style.display = "block";
      isValid = false;
    } else {
      invalidMessage.style.display = "none";
    }

    if (!isValid) return; // Stop if invalid

    // Send email with EmailJS
    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then((result) => {
      showFormMessage("Thank you! Your message has been sent successfully.");
      form.reset();
    }, (error) => {
      showFormMessage("Oops! Something went wrong. Please try again.");;
    });
  });
});