<template>
    <div>
        <div class="background-company-section">
            <div class="container-fluid">
                <div class="row">
                    <div class="col">
                        <span data-aos="zoom-in" class="about-company-section">About the network</span>
                        <h3 data-aos="zoom-in" class="title-company-section"><span class="custom-title-style">The</span> Company</h3>
                        <p data-aos="zoom-in" class="text-company-section">With all of this expertise and capability comes an unrivalled
                            commitment to customer service.</p>
                        <Value data-aos="fade-left" data-aos-duration="1200" v-for="value in company" :key="value.title"
                            :companyValue="value" />
                    </div>
                    <div data-aos="fade-left" data-aos-duration="1000" class="col col-right">
                        <img class="background-left-company-section" src="@/assets/img/about-5.jpg" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Value from './_companyValue.vue';
export default {
    name: "CompanySection",
    components: {
        Value
    },
    data() {
        return {
            company: [
                {
                    title: 'Leadership',
                    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                    percentage: '0',
                    percentageSymbol: '%'
                },
                {
                    title: 'Psychology',
                    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                    percentage: '0',
                    percentageSymbol: '%'
                },
                {
                    title: 'Flexibility',
                    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                    percentage: '1',
                    percentageSymbol: '%'
                }
            ]
        }
    }

}
</script>

<style lang="scss" scoped>
@import '../assets/scss/company-section';
</style>
