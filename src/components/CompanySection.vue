<template>
    <div>
        <div class="background-company-section">
            <img class="pattern-img-top" src="@/assets/img/dot-pattern-top.svg" alt="">
            <div class="container-fluid">
                <div class="row">
                    <div class="col">
                        <span data-aos="zoom-in" class="about-company-section">About the network</span>
                        <h3 data-aos="zoom-in" class="title-company-section"><span class="custom-title-style">The</span>
                            Company</h3>
                        <p data-aos="zoom-in" class="text-company-section">With all of this expertise and capability
                            comes an unrivalled
                            commitment to customer service.</p>
                        <Value data-aos="fade-left" data-aos-duration="1200" v-for="value in company" :key="value.title"
                            :chartPropriety="value.prop" :companyValue="value" />
                    </div>
                    <div data-aos="fade-left" data-aos-duration="1000" class="col col-right">
                        <img class="background-left-company-section" src="@/assets/img/about-5.jpg" alt="">
                    </div>
                </div>
            </div>
            <img class="pattern-img-bottom" src="@/assets/img/dot-pattern-bottom.svg" alt="">
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
                    percentage: '35',
                    percentageSymbol: '%',
                    prop: {
                        size: 70,
                        sections: [
                            {
                                value: 35,
                                color: 'rgb(16,	112,	111)'
                            },
                        ],
                        thickness: 18,
                        hasLegend: false,
                        startAngle: -90,
                        foreground: 'rgb(26, 26, 30)',
                        background: 'rgb(14, 14, 18)',
                    },

                },
                {
                    title: 'Psychology',
                    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                    percentage: '75',
                    percentageSymbol: '%',
                    prop: {
                        size: 70,
                        sections: [
                            {
                                value: 75,
                                color: 'rgb(16,	112,	111)'
                            },
                        ],
                        thickness: 18,
                        hasLegend: false,
                        startAngle: -90,
                        foreground: 'rgb(26, 26, 30)',
                        background: 'rgb(14, 14, 18)',
                    },

                },
                {
                    title: 'Flexibility',
                    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                    percentage: '48',
                    percentageSymbol: '%',
                    prop: {
                        size: 70,
                        sections: [
                            {
                                value: 48,
                                color: 'rgb(16,	112,	111)'
                            },
                        ],
                        thickness: 18,
                        hasLegend: false,
                        startAngle: -90,
                        foreground: 'rgb(26, 26, 30)',
                        background: 'rgb(14, 14, 18)',
                    },
                }
            ]
        }
    }

}
</script>

<style lang="scss" scoped>
@import '../assets/scss/company-section';
</style>
