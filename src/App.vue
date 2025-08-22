<script setup>
import HelloWorld from './components/HelloWorld.vue'
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
                <button class="contact"><a href="#contact">Contact</a></button>
                <p class="lang-flag"><a href="#"><img src="./assets/img/lang-tr.png" alt="Turkish"></a></p>
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
                    <li><a href="#about">About</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#testimonials">Testimonials</a></li>
                </ul>
            </nav>
        </div>
    </div>
</header>

<main>
    <!-- /////  LANDING  ///// -->
    <section id="landing">
        <div class="content-width">
            <h2>You are the Light</h2>
            <div class="quote">
                <blockquote cite="https://www.goodreads.com/quotes/439208-you-were-born-with-potential-you-were-born-with-goodness">
                    You were born with potential. You were born with goodness and trust. You were born with ideals dreams. You were born with greatness. 
                    You were born with wings. You are not meant for crawling, so don't. You have wings. Learn to use them and fly.
                </blockquote>
                <p>Rumi</p>
            </div>
        </div>
    </section>

    <!-- /////  ABOUT  ///// -->
    <section id="about">
        <div class="content-width">
            <!-- h2 -->
            <h2><span class="marker">Who is Gamze Tokdemir?</span></h2>
            <p class="comment right">Wellbeing Coach, Breathwork Facilitator, <br>
                Ayurvedic Lifestyle , and a Meditation Teacher</p>
            
            <div class="profile-container">
                <!-- photos -->
                <div class="photos">
                    <img src="./assets/img/photo1.avif" alt="Gamze's photo">
                    <img src="./assets/img/photo2.avif" alt="Gamze's photo">
                </div>
                <p>With a rich and fulfilling background in education, Gamze has transitioned from being a passionate English teacher and teacher trainer to a certified wellbeing coach by Chopra, breathwork facilitator, Ayurvedic lifestyle, and meditation teacher. Her journey from the classroom to the realm of holistic wellness is fueled by a deep commitment to helping others achieve balance and fulfillment in their lives.</p>
                <p>For over 15 years, Gamze loved her role as an English teacher and teacher trainer, where she inspired countless students and educators. Her enthusiasm for teaching and her dedication to personal development were evident in every lesson she delivered. However, her deep curiosity about the holistic aspects of wellbeing and a desire to support her students beyond the classroom led her to explore new paths.</p>
                <p>This exploration brought Gamze to the Chopra certification program for wellbeing coaching, where she gained advanced skills in guiding clients towards optimal health and wellbeing. She further enhanced her expertise by becoming a certified breathwork facilitator, Ayurvedic lifestyle, and meditation teacher. These diverse yet complementary disciplines enable her to offer a comprehensive and personalized approach to wellness.</p>
                <p>In her current practice, Gamze empowers clients to discover their own answers and create personalized plans for their wellbeing. She combines the wisdom of Ayurveda with the transformative power of breathwork and meditation to help clients achieve balance in their mind, body, and spirit. Her approach is client-centered, focusing on individual strengths and fostering self-awareness.</p>
                <p>Gamze's philosophy is rooted in compassion, empathy, and a holistic understanding of health. She believes that true wellness is a harmonious integration of the mind, body, and spirit, and she is dedicated to guiding her clients on their unique journeys towards wellbeing.</p>
                <p>When she is not working with clients, Gamze enjoys being in nature, hiking, movement & dancing, which further enrich her practice and deepen her connection with the community she serves.</p>
            </div>
        </div>
    </section>

    <!-- /////  wave  ///// -->
    <div class="wave-container">
        <svg class="wave" viewBox="0 0 240 20" preserveAspectRatio="none">
            <path d="M0 10 Q 10 0, 20 10 T 40 10 T 60 10 T 80 10 T 100 10 T 120 10 T 140 10 T 160 10 T 180 10 T 200 10 T 220 10 T 240 10" fill="none" stroke="#F3F6FA" stroke-width="10"/>
        </svg>
    </div>

    <!-- /////  SERVICES  ///// -->
    <section id="services">
        <div class="content-width">
            <p class="question">Seeking purpose and fulfillment?<br>
                Wanting to achieve a better work-life balance?<br>
                Dealing with anxiety or burnout?<br>
                Or you simply desire a change in your life but not sure where to start?</p>
            <p class="comment left"><a href="/#contact">Join me</a> on a journey of self-discovery that will help you with your physical, mental, and spiritual well-being.</p>
            <!-- h2 -->
            <h2><span class="marker">Services</span></h2>
            <!-- Service Cards Menu -->
            <div class="service-card-set">

                <article class="sv-card">
                    <div class="sv-card-face">
                        <img src="./assets/img/icon-bw.png" alt="Icon Breathwork">
                        <h3>Breathwork</h3>
                        <ul class="sv-tags">
                            <li>1:1 Sessions</li>
                        </ul>
                    </div>
                    <div class="sv-card-description">
                        <p>
                            It's hard to change your mind with your mind — it's easier to change your mind with the body. This is where the power of breath comes in…  in the moment with immediate influence on your nervous system and brain. <br>
                            Breathe in. Breathe out. <br>
                            We don't think too much about the breathing process, but your breath can tell you a lot about your body. <br>
                            Breathwork is a holistic, mind-body approach to mental health and well-being. It can be done simply and on your own, or it can be structured and part of a formal program. Its purpose is to directly influence your body's inner workings to reduce stress, anxiety, and other challenges, increase calm, and encourage well-being. <br>
                            <br>
                            In this specific breathwork, we are “not teaching” the body how to breathe; we are just “reminding” how it used to breathe until it was 3 years old. We all breathe all the time! The way we breathe is what makes a difference. For example: when we are stressed, our breathing speeds up and becomes shallow which triggers fight- a fight-flight-freeze response, and when we are in this state, we are not digesting food or our emotions properly. <br>
                            <br>
                            Our mind is scattered, however, when we are relaxed and the mind is calmer, our breathing is deep and rhythmic. That influences the entire body, especially the rest and digest system which reverses the stress response, allowing the body to relax so we switch our system from a state of stress to a state of calm. <br>
                            <br>
                            Once you notice the power of your breath, I promise you will also see the full potential of Yourself.
                        </p>
                        <p class="cert"><a href="./assets/cert/breath-coaching-certificate.pdf" target="_blank"><img src="./assets/img/cert-bre400.png" alt="Certificate of Breath Coaching"></a></p>
                    </div>
                    <!-- toggle -->
                    <div class="sv-card-toggle" data-state="collapsed">
                        <span class="toggle-text">Read More</span>
                        <svg class="toggle-line" width="197" height="10" viewBox="0 0 197 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 1L90.0004 1L99.7501 9L109.66 1L197 1" stroke="#AE93B2"/>
                        </svg>
                    </div>
                </article>

                <article class="sv-card">
                    <div class="sv-card-face">
                        <img src="./assets/img/icon-med.png" alt="Icon Primordial Sound Meditation">
                        <h3>Primordial Sound Meditation</h3>
                        <ul class="sv-tags">
                            <li>1:1 Sessions</li>
                            <li>Group Sessions</li>
                        </ul>
                    </div>
                    <div class="sv-card-description">
                        <p>
                            Primordial Sound Meditation is an ancient practice from the Vedic traditions of India, revived by Dr. Deepak Chopra and Dr. David Simon at the Chopra Center. It uses the basic, most essential sounds of nature—Primordial Sounds—are used to disconnect us from the activity of life. <br>
                            <br>
                            You're given a personalized mantra that represents the sound vibration that took place in the universe on the exact date and time that you were born- These individually selected sounds, known as mantras, <br>
                            work fairly quickly to help you feel calm, relaxed and a wholesome sense of inner peace. <br>
                            <br>
                            Primordial Sound Meditation (PSM) is simple—but it takes time, dedication, and consistency to make meditation a habit. <br>
                            You don't have to quit your job, change your diet, wear special clothes, or overhaul your lifestyle—you only need to find a little time. <br>
                            <br>
                            You need two things to meditate: <br>
                            1-sit down <br>
                            2-close your eyes <br>
                            <br>
                            Practicing PSM daily can help you to: <br>
                            <br>
                            *Manage stress <br>
                            *Reduce anxiety <br>
                            *Improve your relationships <br>
                            *Create inner peace <br>
                            *Awaken your intuition <br>
                            *Enhance your sleep patterns <br>
                            *Lower your blood pressure <br>
                            *Become less judgmental <br>
                            <br>
                            Meditation classes can be run in-person or online, and they can also be offered as individual one-on-one lesson or small group.
                        </p>
                        <p class="cert">
                        <a href="https://certificate.integrativenutrition.com/6444e453-1a70-4780-8a1d-d6426651feb7#acc.DOQ5q3VK" target="_blank"><img src="./assets/img/cert-med-400.png" alt="Certificate of Meditation Instructor"></a>
                        </p>
                    </div>
                    <!-- toggle -->
                    <div class="sv-card-toggle" data-state="collapsed">
                        <span class="toggle-text">Read More</span>
                        <svg class="toggle-line" width="197" height="10" viewBox="0 0 197 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 1L90.0004 1L99.7501 9L109.66 1L197 1" stroke="#AE93B2"/>
                        </svg>
                    </div>
                </article>

                <article class="sv-card">
                    <div class="sv-card-face">
                        <img src="./assets/img/icon-bw.png" alt="Icon Ayurveda">
                        <h3>Ayurveda</h3>
                        <ul class="sv-tags">
                            <li>1:1 Sessions</li>
                            <li>Group Sessions</li>
                        </ul>
                    </div>
                    <div class="sv-card-description">
                        <p>
                            In English, Ayurveda is translated as “the science of life.” <br>
                            Ayurveda is a 5,000-year-old consciousness-based system of healing originating from India. Its fundamental purpose is to guide individuals back to their innate state of health, balance, and wholeness. It gives you the knowledge and tools to create a healthy, happy life while realizing your full human potential. <br>
                            As an Ayurvedic lifestyle teacher, I will offer ways to improve every area of life through practices related to the six pillars of health: nutrition, movement, sleep, meditation, emotions, and self-care. <br>
                            <br>
                            Ayurvedic Lifestyle courses can be run in-person or online, and it can also be offered as individual one-on-one lesson, small groups or corporate event.
                        </p>
                        <p class="cert">
                        <a href="https://certificate.integrativenutrition.com/4bdddb97-01d4-4b35-979c-1533a018e4fe#acc.l7hcUYEd" target="_blank"><img src="./assets/img/cert-ay-400.png" alt="Certificate of Ayurvedic Health Instructor"></a>
                        <a href="https://certificate.integrativenutrition.com/86787c5c-b547-4d97-a213-df94e15d4077#acc.4VRN3JPh" target="_blank"><img src="./assets/img/cert-gut-400.png" alt="Certificate of Gut Health Course"></a>
                        </p>
                    </div>
                    <!-- toggle -->
                    <div class="sv-card-toggle" data-state="collapsed">
                        <span class="toggle-text">Read More</span>
                        <svg class="toggle-line" width="197" height="10" viewBox="0 0 197 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 1L90.0004 1L99.7501 9L109.66 1L197 1" stroke="#AE93B2"/>
                        </svg>
                    </div>
                </article>

                <article class="sv-card">
                    <div class="sv-card-face">
                        <img src="./assets/img/icon-pc.png" alt="Icon personalized Coaching">
                        <h3>Personalized Coaching</h3>
                        <ul class="sv-tags">
                            <li>1:1 Sessions</li>
                            <li>Group Sessions</li>
                        </ul>
                    </div>
                    <div class="sv-card-description">
                        <p>
                            As a Chopra coach, my primary focus is on assisting my clients in uncovering their vision of total well-being. Recognizing the uniqueness of each individual, I provide tailored guidance that aligns with their specific needs. Through this personalized approach, I support my clients in identifying their purpose, setting meaningful goals, and developing effective strategies by only taking baby steps. By guiding them through this process, I empower my clients to realize their well-being vision and embark on a journey toward a more fulfilling and balanced life. <br>
                            <br>
                            Here is how we do it together: Purpose <br>
                            Who am I? What is my dharma (purpose)? <br>
                            Creating a personalized purpose statement, integrating your values into your daily life, and gaining a fresh perspective are powerful steps toward living a more fulfilling life.<br>
                            We will also discover what's keeping you from discovering your inner peace and purpose. <br>
                            <br>
                            Intention <br>
                            What do I want? What is my deepest desire? <br>
                            Together we will set clear intentions and goals for navigating the changes you want to make. <br>
                            <br>
                            Meaning <br>
                            What is the same story that I keep telling to myself? Do I still need it? Really? <br>
                            Once we discover the stories that you keep telling yourself, I will guide you to create a new meaning that offers greater freedom and new possibilities around your challenging situation. <br>
                            <br>
                            Shadow <br>
                            What parts of yourself have you rejected? Why? <br>
                            We'll delve into the aspects of ourselves that we judge, reject, disown, or hide from and by owning our shadow, we will return to wholeness and well-being. <br>
                            Deepak Chopra: “The shadow is a human creation—the illusion of separateness. Together we created the shadow that haunts us, and embracing it is the key to our transformation.
                        </p>
                        <p class="cert">
                        <a href="https://certificate.integrativenutrition.com/5c786354-550d-4a14-a284-217d67aea423#acc.Gbe78QUH" target="_blank"><img src="./assets/img/cert-wb-400.png" alt="Certificate of Total Well-Being Coarch"></a>
                        </p>
                    </div>
                    <!-- toggle -->
                    <div class="sv-card-toggle" data-state="collapsed">
                        <span class="toggle-text">Read More</span>
                        <svg class="toggle-line" width="197" height="10" viewBox="0 0 197 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 1L90.0004 1L99.7501 9L109.66 1L197 1" stroke="#AE93B2"/>
                        </svg>
                    </div>
                </article>
            </div>
        </div>
    </section>

    <!-- /////  wave  ///// -->
    <div class="wave-container">
        <svg class="wave" viewBox="0 0 240 20" preserveAspectRatio="none">
            <path d="M0 10 Q 10 0, 20 10 T 40 10 T 60 10 T 80 10 T 100 10 T 120 10 T 140 10 T 160 10 T 180 10 T 200 10 T 220 10 T 240 10" fill="none" stroke="#F3F6FA" stroke-width="10"/>
        </svg>
    </div>

    <!-- /////  TESTIMONIALS  ///// -->
    <section id="testimonials">
        <div class="content-width">
            <!-- h2 -->
            <h2><span class="marker">Testimonials </span></h2>
            <!-- arrows of Swipe -->
            <div class="swipe-hint" id="swipeHint">
                <span class="arrow">← </span><span class="text">Swipe</span> <span class="arrow">→</span>
            </div>

            <div class="carousel">
                <div class="slides" id="slides">

                    <article class="tm-card">
                        <h3>Bade T.</h3>
                        <p class="occupation">Ceramic Artist</p>
                        <div class="review">
                            <p>
                                Gamze is a natural born healer. Her energy, her words, her touch calms the mind and the body, gently pushing you to see things more clearly and without the preconceptions of the mind. 
                                She guides you ever so carefully to explore the depths of your heart and uncover the roots of your behaviors, fears and thoughts. 
                                It's been 2 years that we are on this journey together. 
                                With breathwork, meditation and coaching, she holds my hand when I navigate through the ups&downs of life. 
                                I am eternally grateful for her presence in my life, and am confident that universe brought us together so that we can grow up and grow our hearts wide open
                            </p>
                        </div>
                    </article>

                    <article class="tm-card">
                        <h3>Oyku C.</h3>
                        <p class="occupation">Creative Director</p>
                        <div class="review">
                            <p>
                                My sessions with Gamze feel incredibly natural and effortless. 
                                She creates a space where I can truly listen to my own voice, tuning out the noise in my mind. 
                                Gamze's unique blend of breathwork, active listening, and coaching, combined with her ability to guide me along my personal journey based on where I am in each moment, has been transformative. 
                                Every session feels fresh and tailored to my needs—never routine. I leave each one with a sense of openness in my breath, a deeper connection to myself, and a heightened sense of energy and excitement.
                            </p>
                        </div>
                    </article>
                    
                    <article class="tm-card">
                        <h3>Katy T.</h3>
                        <p class="occupation">Cloud Security Specialist</p>
                        <div class="review">
                            <p>
                                Working with Gamze has been a transformative experience that has set me on the path to become the best version of myself! 
                                Over the last few years, I struggled with anxiety and overthinking, problems with self-expression in certain social situations and freezing! 
                                Along the way, I had picked up some unhealthy habits. 
                                They were an escape out of my reality, which eventually led me down a dark path. 
                                But at some point, my mind, body and spirit found that they were no longer serving me and I knew that I had to make a change, but I didn't really know how to begin without looping back to the same old habits. 
                                Gamze guided me through a beautiful transformational journey! 
                                From the very beginning, she created a safe and comfortable space, which allowed me to open up and explore my personal boundaries, providing me with tools needed to set healthy boundaries, and build positive habits that have positively impacted many areas of my life. 
                                Without her compassion and expert guidance, I don't know where I would be now. 
                                I highly recommend anyone who is searching for meaningful personal growth. Thank you, Gamze!
                            </p>
                        </div>
                    </article>

                    <article class="tm-card">
                        <h3>Evlo M.</h3>
                        <p class="occupation">Hospitality Professional</p>
                        <div class="review">
                            <p>
                                I've had many sessions with Gamze, and in each one, I found myself thinking, "I'm so glad I'm here." By the end of every session, I felt as though I had been reborn, as if something magical had touched me. 
                                Each session became more powerful than the last. I can honestly say that Gamze's sessions stand out as some of the most impactful moments where I've experienced meditation at its deepest. 
                                I'm truly grateful for having gone through this journey.
                            </p>
                        </div>
                    </article>

                    <article class="tm-card">
                        <h3>Suheyla U.</h3>
                        <p class="occupation">Yoga Instructor & English Teacher</p>
                        <div class="review">
                            <p>
                                I was at a point where I realized I needed to let go of certain habits that I'd noticed in myself and that had started to bother me, yet I found it very difficult to do so on my own. 
                                By pure chance, or perhaps not by chance at all :), my path crossed with Gamze. During the challenging days of my transformation, she supported me in calming my mind, taking a deep breath, and most importantly, practicing self-compassion. 
                                Beyond her knowledge and expertise, her vibrant energy, enthusiasm, and joy left me inspired, lighting a new way forward in each session. 
                                Although it's been some time since our sessions, the insights she helped me gain continue to illuminate my journey. She gifted me with a light from her own boundless light—one that will never dim. 
                                Thank you, Gamze, for lighting my path!
                            </p>
                        </div>
                    </article>

                    <article class="tm-card">
                        <h3>Yagmur E.</h3>
                        <p class="occupation">Assistant Professor</p>
                        <div class="review">
                            <p>
                                My journey with Gamze and her breath work sessions started when I was going through a hard time of my life, in search of answers, seeking for help. When I arrived at her place, it was such a peaceful environment that I could sense I was going to be surrounded by a calm, caring and transformative energy of hers. 
                                During five sessions we had, I realised how breathing accurately can have an impact on your physiology and psychology. 
                                Our conversations before and after the breath work, shed a light on my questions, leaving me with curiosity to find out more about myself, to be more in touch with my inner self. 
                                Her eclectic and wholistic approach including coaching, breath work, meditation, guidance helped me reach a better understanding of what I really wanted, and needed - leading me to step ahead for solutions. 
                                Every now and then, when I visit Gamze, I always leave with relief in my heart and in my mind, feeling back to my centre again, remembering that I have the power to create what I want. I am deeply grateful as our paths have crossed.
                            </p>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    </section>

    <!-- /////  wave  ///// -->
    <div class="wave-container">
        <svg class="wave" viewBox="0 0 240 20" preserveAspectRatio="none">
            <path d="M0 10 Q 10 0, 20 10 T 40 10 T 60 10 T 80 10 T 100 10 T 120 10 T 140 10 T 160 10 T 180 10 T 200 10 T 220 10 T 240 10" fill="none" stroke="#F3F6FA" stroke-width="10"/>
        </svg>
    </div>

    <!-- /////  CONTACT  ///// -->
    <section id="contact">
        <div class="content-width">
            <!-- h2 -->
            <h2><span class="marker">Contact me</span></h2>
            <p class="info">Use the form below to tell me a little about yourself, and I'll be in touch to arrange a 30 minute free no obligation call to explore what's going on for you now in this phase of your life and help you come up with your next step action plan.</p>
            
            <form id="contactForm" action="contact-form" method="post">
                <!-- Short inputs -->
                <fieldset>
                    <div>
                        <label for="thename">Name <span class="req">*Mandatory</span></label>
                        <p class="invalid">Please input your name.</p>
                        <input type="text" name="their-name" id="thename" required size="50" maxlength="50" minlength="2">
                    </div>
                    <div>
                        <label for="email">Email <span class="req">*Mandatory</span></label>
                        <p class="invalid">Please input your Email address.</p>
                        <input type="email" name="email" id="email" required size="50" maxlength="50">
                    </div>
                    <div>
                        <label for="email2">Repeat Email <span class="req">*Mandatory</span></label>
                        <p class="invalid">Please input the same Email address.</p>
                        <input type="text" name="email2" id="email2" required size="50" maxlength="50">
                    </div>
                    <div>
                        <label for="phone">Phone</label>
                        <p class="invalid">Only 0-9, +, and - are allowed.</p>
                        <input type="text" name="phone" id="phone" size="64" minlength="8" maxlength="20" pattern="^[0-9+\-]+$">
                    </div>
                </fieldset>
                <!-- Textboxes -->
                <fieldset>
                    <div>
                        <label for="message">Message <span class="req">*Mandatory</span></label>
                        <p class="invalid">Please write your message.</p>
                        <textarea name="message" id="message" placeholder="Briefly describe your current phase of life, such as career transition, personal development, retirement planning, etc." required></textarea>
                    </div>
                    <div>
                        <label for="goal">Goals and Aspirations</label>
                        <textarea name="goal" id="goal" placeholder="Such as achieving a work-life balance, advancing in your career, starting a new business, improving your health, building better relationships, etc."></textarea>
                    </div>
                    <div>
                        <label for="additional">Additional Information</label>
                        <textarea name="additional" id="additional" placeholder="Any additional information that you think might be relevant."></textarea>
                    </div>
                </fieldset>
                <!-- submit -->
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    </section>

    <!-- /////  To Top  ///// -->
    <div id="to-top">
        <a href="#"><img src="./assets/img/to-top.png" alt="Page Top"></a>
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
            <a href="https://certificate.integrativenutrition.com/5c786354-550d-4a14-a284-217d67aea423#acc.Gbe78QUH" target="_blank"><img src="./assets/img/cert-full.png" alt="Well-being Coach, Promordial Sound Meditation Teacher, Ayurveda Health Teacher Certified by Chopra Global"></a>
        </div>
        <!-- copy -->
        <p><small>&copy;Gamze Tokdemir. All rights reserved.</small></p>
    </div>
</footer>
  <HelloWorld msg="Vite + Vue" />
</template>