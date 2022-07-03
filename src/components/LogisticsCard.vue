<template>
    <div>
        <div class="card">
            <img :src="cardStyle.img" class="card-img-top" :alt="cardStyle.title">
            <div class="card-body">
                <h5 class="card-title"> {{ cardStyle.title}} </h5>
                <p class="card-text"> {{ cardStyle.text }} </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        cardStyle: {
            type: Object,
            required: true
        }
    },
}
</script>

<style lang="scss" scoped>
    .card{
        padding: 3rem;
        height: 22rem;
        width: 20rem;
        border: 0px;
        
        }
    .card-body {
        padding: 0;
        .card-title {
            font-size: 1.2rem;
            font-weight: 600;
            margin: 0;
            padding-top: 1.2rem;
            padding-bottom: 1.2rem;
        }

        .card-text {
            font-size: .8rem;
            font-weight: 300;
            color: var(--text-color-secondary);
        }
    }


</style>