<template>
    <div>
        <div class="background-logistics-services">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-4 ps-5 pe-5 ">
                        <div class="logistic-service-text-style">
                            <span data-aos="fade-up" data-aos-duration="600" >Our business areas</span>
                            <h3 data-aos="fade-up" data-aos-duration="700" >Logistics Services</h3>
                            <p data-aos="fade-up" data-aos-duration="800" >
                                We are leaders in providing logistics services with a set of cutting edge technologies and a team of experienced and renowned professionals.
                            </p>
                            <ul data-aos="fade-up"  data-aos-duration="900" class="d-flex gap-2 ">
                                <li v-for="service in serviceTag" :key="service.name">
                                    <a :href="'/' + 'service.name'"> {{ service.name }} </a>
                                </li>
                            </ul>
                            <button data-aos="fade-up" data-aos-duration="1000"  class="btn btn-primary">Read more</button>
                        </div>
                    </div>
                    <div data-aos="fade-left" data-aos-duration="800" class="col d-flex gap-4 justify-content-center">
                        <LogisticsCard v-for="cardObject in cardServices" :key="cardObject.title" :cardStyle="cardObject" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import LogisticsCard from "./LogisticsCard.vue";
export default {
    name: "LogisticsServices",
    components: { LogisticsCard },
    data() {
        return {
            serviceTag: [
                {
                    name: "Tradition"
                },
                {
                    name: "Quality"
                },
                {
                    name: "Security"
                }
            ],
            cardServices: [
                {
                    img: require("@/assets/img/gallery-3.jpg"),
                    title: "Technology",
                    text: "Focused on developing technology solutions adapted to our client's needs."
                },
                {
                    img: require("@/assets/img/gallery-5.jpg"),
                    title: "Transport",
                    text: "We develop operational strategies to improve logistical efficiency."
                }
            ]
        };
    },

}
</script>

<style lang="scss" scoped>
@import '../assets/scss/logistic-services';

</style>