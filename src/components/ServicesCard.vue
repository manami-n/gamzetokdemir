 <template>
    <article class="sv-card">
        <div class="sv-card-face">
            <img :src="icon" :alt="$t(altIcon)">
            <h3>{{ $t(title) }}</h3>
            <ul class="sv-tags">
                <li v-for="(tag, index) in tags" :key="index">{{ $t(tag) }}</li>
            </ul>
        </div>
        <div class="sv-card-description">
            <p v-for="(p, index) in $tm(description)" :key="index" v-html="p"></p>
            <p v-for="(cert, index) in certs" :key="index" class="cert">
                <a :href="cert.url" target="_blank"><img :src="cert.img" :alt="$t(cert.alt)" /></a>
            </p>
        </div>

        <!-- toggle -->
        <div class="sv-card-toggle" data-state="collapsed">
            <span class="toggle-text"></span>
            <svg class="toggle-line" width="197" height="10" viewBox="0 0 197 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 1L90.0004 1L99.7501 9L109.66 1L197 1" stroke="#AE93B2"/>
            </svg>
        </div>
    </article>
</template>

<script>
export default {
  name: "ServiceCard",
  props: {
    icon: { type: String, required: true },
    altIcon: { type: String, required: true },
    title: { type: String, required: true },
    tags: { type: Array, default: () => [] },
    description: { type: String, required: true },
    certs: { type: Array, default: () => [] },
  }
}
</script>