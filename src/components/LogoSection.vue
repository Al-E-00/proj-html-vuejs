<template>
    <div>
        <div class="background-logo-section">
            <div class="container">
                <div class="row">
                    <div class="col">
                        <ul class="d-flex gap-5">
                            <li  v-for="(logo, i) in siteLogo" :key="i">
                                <img :src="logo.img" :alt="logo.name">
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'LogoSection',
    data() {
        return {
            siteLogo: [
                {
                    name: 'less',
                    img: require('@/assets/img/logo-5.png')
                },
                {
                    name: 'wooCommerce',
                    img: require('@/assets/img/logo-1.png')
                },
                {
                    name: 'wordPress',
                    img: require('@/assets/img/logo-2.png')
                },
                {
                    name: 'pingdom',
                    img: require('@/assets/img/logo-3.png')
                },
                {
                    name: 'jquery',
                    img: require('@/assets/img/logo-4.png')
                },
                {
                    name: 'less',
                    img: require('@/assets/img/logo-5.png')
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
    @import '../assets/scss/logo-section';
</style>