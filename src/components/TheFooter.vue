<template>
    <div>
        <div class="background-image-footer">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-2">
                        <span id="logo-start">nex </span> <span id="logo-end">gen</span>
                        <p class="intro-text-footer">A Functional HTML Template for Corporate & Business.</p>
                        <ul class="contact-list">
                            <li v-for="contact in contacts" :key="contact.name">
                                <a href="#">
                                    <i :class="'fa-solid' + ' ' + contact.icon"></i>
                                    {{ contact.value }}
                                </a>
                            </li>
                        </ul>
                        <button class="btn btn-outline-primary button-footer">
                            Get in touch
                        </button>
                    </div>
                    <div class="col-2">
                        <LinkStyle v-for="(option, i) in about" :key="i" :option="option"/>
                    </div>
                    <div class="col-2">
                        <LinkStyle v-for="(option, i) in transport" :key="i" :option="option"/>
                    </div>
                    <div class="col-2">
                        <LinkStyle v-for="(option, i) in support" :key="i" :option="option"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import LinkStyle from './_FooterLinkGenerator.vue'
export default {
    name: 'TheFooter',
    components: {
        LinkStyle
    },
    data() {
        return {
            contacts: [
                {
                    name: 'phone',
                    icon: 'fa-phone',
                    value: '+1 (305) 1234-5678'
                },
                {
                    name: 'email',
                    icon: 'fa-envelope',
                    value: 'hello@example.com'
                },
                {
                    name: 'address',
                    icon: 'fa-location-dot',
                    value: 'Main Avenue, 987'
                }
            ],
            about: [
                {
                    title: 'About',
                },
                {
                    links: [
                        'The Company',
                        'Institutional',
                        'Social & Events',
                        'Innovation',
                        'Environment',
                        'Technology'
                    ]
                }

            ],
            transport: [
                {
                    title: 'Transport',
                },
                {
                    links: [
                        'Industrialized',
                        'Chemicals',
                        'Packaged Liquids',
                        'Construction',
                        'Laminated Wood',
                        'And others'
                    ]
                }

            ],
            support: [
                {
                    title: 'Support',
                },
                {
                    links: [
                        'Responsibility',
                        'Terms of Use',
                        'About Cookies',
                        'Privacy Policy',
                        'Accessibility',
                        'Information'
                    ]
                }

            ]
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/the-footer';
</style>