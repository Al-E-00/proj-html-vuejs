<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col">
                    <span data-aos="fade-up" class="editorial-intro">Our editorial content</span>
                    <h3 data-aos="fade-up">Latest <span class="title-stylized">News</span></h3>
                    <div data-aos="fade-up" class="section-latest-news-description d-flex justify-content-between align-items-center">
                        <p>Every week we publish content about what is best in the business world.</p>
                        <button class="btn btn-primary">See all</button>
                    </div>
                    <div  class="card-news-display">
                        <CardNews data-aos="fade-left" data-aos-duration="800" v-for='card in CardNews' :key="card.name" :cardInfo="card" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import CardNews from './_cardLatestNews.vue';

export default {
    name: 'LatestNewsSection',
    components: {
        CardNews
    },
    data() {
        return {
            CardNews: [
                {
                    name: 'Creativity',
                    img: require('@/assets/img/news-1.jpg'),
                    text: 'Increasing creativity is possible for everyone'
                },
                {
                    name: 'Market',
                    img: require('@/assets/img/news-2.jpg'),
                    text: 'Because market research is part of business plan'
                },
                {
                    name: 'Home Working',
                    img: require('@/assets/img/news-3.jpg'),
                    text: 'Working from home is now a trend'
                }
            ]
        }
    }

}
</script>

<style lang="scss" scoped>
@import '../assets/scss/latest-news';
</style>