<template>
    <div>
        <div class="d-flex">
            <span class="percentage-section">
                {{ companyValue.percentage }}
                <span class="percentage-symbol">
                    {{ companyValue.percentageSymbol }}
                </span>
            </span>
            <div class="text-company-value">
                <h6> {{ companyValue.title }} </h6>
                <p> {{ companyValue.text }} </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'companyValue',
    props: {
        companyValue: {
            type: Object,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>
.percentage-section {
    align-self: center;
    position: relative;
    display: block;
    margin-bottom: 1.5rem;
    margin-top: 1.5rem;
    height: 60px;
    width: 60px;
    line-height: 60px;
    font-weight: 600;
    background-color: rgb(14, 14, 18);
    color: white;
    text-align: center;
    font-size: 1.2rem;
    color: var(--text-color-secondary);

    .percentage-symbol {
        position: absolute;
        line-height: 65px;
        height: 65px;
        font-size: .6rem;
        font-weight: 300;
    }

}

.percentage-section:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 5px solid rgb(27, 26, 30);
    z-index: 1;
}

.text-company-value {
    padding-left: 1.5rem;
    align-self: center;
    h6 {
        font-size: 1rem;
        font-weight: 500;
    }
    p {
        font-size: .8rem;
        font-weight: 300;
        color: var(--text-color-secondary);
        margin: 0;
    }
}
</style>