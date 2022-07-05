<template>
    <div>
        <div class="d-flex pb-5">
            <vc-donut data-aos="zoom-in" data-aos-delay="500" :chartPropriety="chartPropriety" v-bind="chartPropriety">
                <span class="percentage-number">
                    {{ companyValue.percentage }}
                    <span class="percentage-symbol">
                        {{ companyValue.percentageSymbol }}
                    </span>
                </span>
            </vc-donut>
            <div class="text-company-value">
                <h6> {{ companyValue.title }} </h6>
                <p> {{ companyValue.text }} </p>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: "companyValue",
    props: {
        companyValue: {
            type: Object,
            required: true
        },
        chartPropriety: {
            type: Object,
            required: true
        }
    },
    data() {
        return {};
    },

}
</script>

<style lang="scss" scoped>
.percentage-number {
    font-size: 1.2rem;
    font-weight: bold;
    color: var(--text-color-secondary);
    position: relative;
}

.percentage-symbol {
    font-size: .5rem;
    font-weight: 200;
    color: var(--text-color-secondary);
    position: absolute;
    top: 60%;
    left: 100%;
    transform: translateY(-50%);

}

.text-company-value {
    padding-left: 1.5rem;
    align-self: center;

    h6 {
        font-size: 1rem;
        font-weight: 500;
        padding-bottom: .5rem;
    }

    p {
        font-size: .8rem;
        font-weight: 300;
        color: var(--text-color-secondary);
        margin: 0;
    }
}
</style>