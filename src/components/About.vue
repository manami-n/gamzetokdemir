<template>
    <div class="content-width">
        <!-- h2 -->
        <h2><span class="marker">{{ $t("about.h2") }}</span></h2>
        <p class="comment right" v-html="$t('about.comment')"></p>
        
        <div class="profile-container">
            <!-- photos -->
            <div class="photos">
                <img src="../assets/img/photo1.avif" :alt="$t('about.alt')">
                <img src="../assets/img/photo2.avif" :alt="$t('about.alt')">
            </div>
            <div v-for="(p, index) in $tm('about.paragraphs')" :key="index">
                <p>{{ p }}</p>
            </div>
        </div>
    </div>
</template>