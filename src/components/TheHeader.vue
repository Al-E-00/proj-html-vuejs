<template>
    <div>
        <div class="background-the-header">
            <div class="container">
                    <div class="row navbar-row">
                        <div class="col align-self-center">
                            <span id="logo-start">nex </span> <span id="logo-end">gen</span> 
                        </div>
                        <div class="col ps-5 d-flex">
                            <ul class="d-flex gap-5">
                                <li v-for="(section, i) in siteSection" :key="i">
                                    <a :href="section.url">{{section.title}}</a>
                                </li>
                                <button class="btn btn-primary">Get in  touch</button>
                            </ul>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-6"></div>
                        <div class="col">
                            <h1>
                                Logistics that goes further
                            </h1>
                            <p>
                                For 20 years working with the most innovative in the field of transport
                            </p>
                            <div class="button-section">
                                <button class="btn btn-primary">Get in touch</button>
                                <button class="btn btn-outline-primary">Read more</button>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TheHeader',
    data() {
        return {
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
    }
}
</script>

<style lang="scss">
@import "../assets/scss/the-header";

</style>