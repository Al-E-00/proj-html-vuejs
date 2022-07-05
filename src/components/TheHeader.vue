<template>
    <div>
        <div class="background-the-header">
            <div class="container-fluid">
                <div class="row navbar-row" :class="this.fixed ? 'position-fixed':''">
                    <div class="col align-self-center">
                        <span id="logo-start">nex </span> <span id="logo-end">gen</span>
                    </div>
                    <div class="col ps-5 d-flex">
                        <ul class="d-flex gap-5">
                            <li v-for="(section, i) in siteSection" :key="i">
                                <a :href="section.url">{{ section.title }}</a>
                            </li>
                            <button class="btn btn-primary">Get in touch</button>
                        </ul>
                    </div>
                </div>
                <div class="row container-row ">
                    <div class="col-6"></div>
                    <div class="col text-row">
                        <h1 data-aos="fade-up" data-aos-duration="600">
                            <span class="stylized-main-text">Logistics </span> that goes further.
                        </h1>
                        <p data-aos="fade-up" data-aos-duration="700" class="text-secondary">
                            For 20 years working with the most innovative in the field of transport.
                        </p>
                        <div class="button-section gap-3">
                            <button data-aos="fade-up" data-aos-duration="800" class="btn btn-primary">Get in
                                touch</button>
                            <button data-aos="fade-up" data-aos-duration="900" class="btn btn-outline-primary ms-3">Read
                                more</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import debounce from 'lodash/debounce';
export default {
    name: 'TheHeader',
    data() {
        return {
            fixed: false,
            siteSection: [
                {
                    name: 'home',
                    title: 'Home',
                    url: '/home'
                },
                {
                    name: 'serivces',
                    title: 'Services',
                    url: '/services'
                },
                {
                    name: 'skills',
                    title: 'Skills',
                    url: '/skills'
                },
                {
                    name: 'partners',
                    title: 'Partners',
                    url: '/partners'
                },
                {
                    name: 'blog',
                    title: 'Blog',
                    url: '/blog'
                },
            ]
        }
    },
    methods: {
        handleScroll() {
            this.isUserScrolling = (window.scrollY > 45);
            if (window.scrollY > 45) {
                this.fixed = true;
            } else {
                this.fixed = false;
            }
            console.log(this.fixed);
        }
    },

    mounted() {
        this.handleDebouncedScroll = debounce(this.handleScroll, 5);
        window.addEventListener('scroll', this.handleDebouncedScroll);
    },

    beforeDestroy() {
        window.removeEventListener('scroll', this.handleDebouncedScroll);
    }
}

</script>

<style lang="scss" scoped>
@import "../assets/scss/the-header";
</style>