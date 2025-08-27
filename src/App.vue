<script setup>
//components
import Wave from "./components/Wave.vue";
import Landing from "./components/Landing.vue";
import About from "./components/About.vue";
import Services from "./components/Services.vue";
import Testimonials from "./components/Testimonials.vue";
import Contact from "./components/Contact.vue";
</script>

<template>
<!-- /////  HEADER  ///// -->
<header>
    <!-- 1st Layer -->
    <div class="header-main">
        <div class="header-shape">
            <svg viewBox="0 0 393 65" class="header-bg">
                <g filter="url(#filter0_d_241_233)"><path d="M0 0H393V61C393 61 334.954 52.7195 297.5 50.5C216.115 45.6772 170.344 66.4678 89 61C54.0811 58.6528 0 50.5 0 50.5V0Z" fill="url(#paint0_linear_241_233)"/></g>
                <defs>
                <filter id="filter0_d_241_233" x="-4" y="0" width="401" height="69.924" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dy="4"/><feGaussianBlur stdDeviation="2"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix type="matrix" values="0 0 0 0 0.682353 0 0 0 0 0.576471 0 0 0 0 0.698039 0 0 0 0.3 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_241_233"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_241_233" result="shape"/></filter>
                <linearGradient id="paint0_linear_241_233" x1="224" y1="62" x2="180.5" y2="7.60535e-06" gradientUnits="userSpaceOnUse"><stop stop-color="#F5DAE7"/><stop offset="1" stop-color="#FFE8E6"/></linearGradient>
                </defs>
            </svg> 
        </div>
        <div class="content-width">
            <!-- Logo -->
            <h1><a href="#landing"><img src="./assets/img/logo.png" alt="Gamze Tokdemir"></a></h1>
            <!-- Contact, Language, Burger -->
            <div class="header-right">
                <button class="contact"><a href="#contact">{{ $t("header.contact") }}</a></button>
                <p class="lang-flag">
                    <a href="#" @click.prevent="toggleLang">
                      <img :src="flagSrc" :alt="$t('header.altLang')" />
                    </a>
                </p>
                <div class="burger">
                    <div class="dot"></div>
                </div>
            </div>
        </div>
    </div>
    <!-- 2nd Layer -->
    <div class="sp-nav">
        <div class="content-width">
            <nav>
                <ul>
                    <li><a href="#about">{{ $t("header.about") }}</a></li>
                    <li><a href="#services">{{ $t("header.services") }}</a></li>
                    <li><a href="#testimonials">{{ $t("header.testimonials") }}</a></li>
                </ul>
            </nav>
        </div>
    </div>
</header>

<main>
    <!-- /////  LANDING  ///// -->
     <section id="landing"><Landing /></section>

    <!-- /////  ABOUT  ///// -->
    <section id="about"><About /></section>

    <!-- /////  wave  ///// -->
    <Wave />

    <!-- /////  SERVICES  ///// -->
    <section id="services"><Services /></section>

    <!-- /////  wave  ///// -->
    <Wave />

    <!-- /////  TESTIMONIALS  ///// -->
    <section id="testimonials"><Testimonials /></section>

    <!-- /////  wave  ///// -->
    <Wave />

    <!-- /////  CONTACT  ///// -->
    <section id="contact"><Contact /></section>

    <!-- /////  Pop Up  Submit ///// -->
    <div id="formMessageOverlay" class="overlay">
      <div class="message-box">
        <p id="formMessageText"></p>
        <button id="formMessageClose">OK</button>
      </div>
    </div>

    <!-- /////  To Top  ///// -->
    <div id="to-top">
        <a href="#"><img src="./assets/img/to-top.png" :alt="$t('footer.altToTop')"></a>
    </div>
</main>


    <!-- /////  FOOTER  ///// -->
<footer>
    <div class="content-width">
        <!-- sns -->
        <div class="sns">
            <a href="https://www.instagram.com/gamzetkdmr/" target="_blank"><img src="./assets/img/icon-ig.png" alt="Instagram"></a>
            <a href="https://www.linkedin.com/in/gamzetokdemir/" target="_blank"><img src="./assets/img/icon-li.png" alt="LinkedIn"></a>
        </div>
        <!-- cert -->
        <div class="footer-cert">
            <a href="https://certificate.integrativenutrition.com/5c786354-550d-4a14-a284-217d67aea423#acc.Gbe78QUH" target="_blank"><img src="./assets/img/cert-full.png" :alt="$t('footer.altCert')"></a>
        </div>
        <!-- copy -->
        <p><small>&copy;Gamze Tokdemir. All rights reserved.</small></p>
    </div>
</footer>
</template>

<script>
import flagTr from './assets/img/lang-tr.png'
import flagEn from './assets/img/lang-en.png'

export default {
  components: { Wave, Landing, About, Contact, Services, Testimonials },
  computed: {
    flagSrc() {
      return this.$i18n.locale === 'en' ? flagTr : flagEn
    }
  },
  methods: {
    toggleLang() {
      this.$i18n.locale = this.$i18n.locale === "en" ? "tr" : "en";
      window.dispatchEvent(new Event("locale-changed")); // notify vanilla JS
    }
  }
}
</script>
