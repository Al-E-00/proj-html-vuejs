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
    height: 60px;
    width: 60px;
    line-height: calc(60px - 5px);
    font-weight: 600;
    background-color: rgb(14, 14, 18);
    color: white;
    text-align: center;
    font-size: 1.2rem;
    color: var(--text-color-secondary);

    .percentage-symbol {
        position: absolute;
        top: 88%;
        left: 76%;
        transform: translate(-88%, -76%);
        font-size: .6rem;
        font-weight: 300;
    }

}
    .percentage-section:before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        border: 5px solid green;
        z-index: 1;
    }

    .percentage-section:after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        width: 100%;
        height: 1%;
        border-radius: 50%;
        border-right: 5px solid blue;
        z-index: 1;
    }


</style>