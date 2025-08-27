<template>
    <article class="tm-card">
        <h3>{{ $t(name) }}</h3>
        <p class="occupation">{{ $t(occupation) }}</p>
        <div class="review">
            <p v-for="(p, index) in $tm(review)" :key="index" v-html="p"></p>
        </div>
    </article>
</template>

<script>
    export default {
  name: "TestimonialCard",
    props: {
        name: { type: String, required: true },
        occupation: { type: String, required: true },
        review: { type: String, required: true },
    }
}
</script>