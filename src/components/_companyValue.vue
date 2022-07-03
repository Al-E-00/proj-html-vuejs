<template>
    <div>   
        <div class="d-flex">
            <span>
                {{ companyValue.percentage }}
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
    
</style>