<template>
    <div class="custom-card">
        <img :src="cardInfo.img" :alt="cardInfo.name">
        <h4 data-aos="fade-left" data-aos-delay="500">
            {{ cardInfo.text }}
        </h4>
        <div class="opacity"></div>
    </div>
</template>

<script>
export default {
    name: 'LatestNewsCard',
    props: {
        cardInfo: {
            type: Object,
            required: true
        }
    }
}   
</script>

<style lang="scss" scoped>
.custom-card {
    position: relative;

    img {
        width: 100%;
        height: auto;
        border-radius: .8rem;
        
    }

    h4 {
        position: absolute;
        font-size: 1.4rem;
        bottom: 0;
        left: 0;
        padding: 3rem 2rem;
        color: white;
        text-align: center;
        z-index: 1;
    }

    .opacity {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        border-radius: .8rem;
        z-index: 0;
        transition: background-color .3s ease-in-out;

        &:hover {
            cursor: pointer;
            background-color: rgba(0, 0, 0, 0);
        }
    }

}
</style>