<template>
    <div class="content-width">
        <!-- h2 -->
        <h2><span class="marker">{{ $t("testimonials.h2") }}</span></h2>
        <!-- arrows of Swipe -->
        <div class="swipe-hint" id="swipeHint">
            <span class="arrow">← </span><span class="text">{{ $t("testimonials.swipe") }}</span> <span class="arrow">→</span>
        </div>

        <div class="carousel">
            <div class="slides" id="slides">
                <TestimonialCard
                    v-for="(testi, index) in testimonials"
                    :key="index"
                    :name="testi.name"
                    :occupation="testi.occupation"
                    :review="testi.review"
                />
            </div>
        </div>
    </div>
</template>

<script>
import TestimonialCard from './TestimonialsCard.vue';

export default {
     components: { TestimonialCard },
    data() {
        return{
            testimonials: [
                {
                    name: "testimonials.testi1.h3",
                    occupation: "testimonials.testi1.occupation",
                    review: "testimonials.testi1.review"
                },
                {
                    name: "testimonials.testi2.h3",
                    occupation: "testimonials.testi2.occupation",
                    review: "testimonials.testi2.review"
                },
                {
                    name: "testimonials.testi3.h3",
                    occupation: "testimonials.testi3.occupation",
                    review: "testimonials.testi3.review"
                },
                {
                    name: "testimonials.testi4.h3",
                    occupation: "testimonials.testi4.occupation",
                    review: "testimonials.testi4.review"
                },
                {
                    name: "testimonials.testi5.h3",
                    occupation: "testimonials.testi5.occupation",
                    review: "testimonials.testi5.review"
                },
                {
                    name: "testimonials.testi6.h3",
                    occupation: "testimonials.testi6.occupation",
                    review: "testimonials.testi6.review"
                },
            ]
        }
    }
}
</script>