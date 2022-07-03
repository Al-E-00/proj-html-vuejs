<template>
    <div>
        <div class="background-logistics-services">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-4 ps-5 pe-5 ">
                        <div class="logistic-service-text-style">
                            <span>Our business areas</span>
                            <h3>Logistics Services</h3>
                            <p>
                                We are leaders in providing logistics services with a set of cutting edge technologies and a team of experienced and renowned professionals.
                            </p>
                            <ul class="d-flex gap-2 ">
                                <li v-for="service in serviceTag" :key="service.name">
                                    <a :href="'/' + 'service.name'"> {{ service.name }} </a>
                                </li>
                            </ul>
                            <button class="btn btn-primary">Read more</button>
                        </div>
                    </div>
                    <div class="col d-flex gap-4 justify-content-center">
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