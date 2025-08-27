<template>
    <div class="content-width">
        <p class="question" v-html="$tm('services.question')"></p>
        <p class="comment left" v-html="$t('services.comment')"></p>
        <!-- h2 -->
        <h2><span class="marker">{{ $t("services.h2") }}</span></h2>
        <!-- Service Cards Menu -->
        <div class="service-card-set">
            <ServiceCard
                v-for="(service, index) in services"
                :key="index"
                :icon="service.icon"
                :altIcon="service.altIcon"
                :title="service.title"
                :tags="service.tags"
                :description="service.description"
                :certs="service.certs"
            />
        </div>
    </div>
</template>

<script>
import ServiceCard from "./ServicesCard.vue";
import iconBw from "../assets/img/icon-bw.png";
import iconMed from "../assets/img/icon-med.png";
import iconAy from "../assets/img/icon-ay.png";
import iconPc from "../assets/img/icon-pc.png";
import certBwImg from "../assets/img/cert-bre400.png";
import certMedImg from "../assets/img/cert-med-400.png";
import certAyImg from "../assets/img/cert-ay-400.png";
import certGutImg from "../assets/img/cert-gut-400.png";
import certWbImg from "../assets/img/cert-wb-400.png";
import certBwUrl from "../assets/cert/breath-coaching-certificate.pdf";

export default {
  components: { ServiceCard },
  data() {
    return{
      services: [
        {
            title: "services.breathwork.h3",
            icon: iconBw,
            altIcon: 'services.breathwork.altIcon',
            tags: ["services.tags.1:1"],
            description: "services.breathwork.description",
            certs: [
                {
                url: certBwUrl,
                img: certBwImg,
                alt: 'services.breathwork.altCert'
                }
            ]
        },
        {
            title: "services.meditation.h3",
            icon: iconMed,
            altIcon: 'services.meditation.altIcon',
            tags: ["services.tags.1:1", "services.tags.group"],
            description: "services.meditation.description",
            certs: [
                {
                url: "https://certificate.integrativenutrition.com/6444e453-1a70-4780-8a1d-d6426651feb7#acc.DOQ5q3VK",
                img: certMedImg,
                alt: 'services.meditation.altCert'
                }
            ]
        },
        {
            title: "services.ayurveda.h3",
            icon: iconAy,
            altIcon: 'services.ayurveda.altIcon',
            tags: ["services.tags.1:1", "services.tags.group"],
            description: "services.ayurveda.description",
            certs: [
                {
                url: "https://certificate.integrativenutrition.com/4bdddb97-01d4-4b35-979c-1533a018e4fe#acc.l7hcUYEd",
                img: certAyImg,
                alt: 'services.ayurveda.altCert'
                },
                {
                url: "https://certificate.integrativenutrition.com/86787c5c-b547-4d97-a213-df94e15d4077#acc.4VRN3JPh",
                img: certGutImg,
                alt: 'services.ayurveda.altCert2'
                }
            ]
        },
        {
            title: "services.coaching.h3",
            icon: iconPc,
            altIcon: 'services.coaching.altIcon',
            tags: ["services.tags.1:1", "services.tags.group"],
            description: "services.coaching.description",
            certs: [
                {
                url: "https://certificate.integrativenutrition.com/5c786354-550d-4a14-a284-217d67aea423#acc.Gbe78QUH",
                img: certWbImg,
                alt: 'services.coaching.altCert'
                }
            ]
        },
      ]
    };
  }
};
</script>