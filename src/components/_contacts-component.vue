<template>
    <div>
        <a href="#">
            <span class="fa-stack">
                <i class="fa-solid fa-circle fa-stack-2x text-light"></i>
                <i :class="contact.icon + ' ' + 'fa-stack-1x fa-inverse text-primary'"></i>
            </span>
            <span class="contact-value">{{ contact.value }}</span>
        </a>
    </div>
</template>

<script>
export default {
    name: 'contactsComponent',
    props: {
        contact: {
            type: Object,
            required: true
        }
    },
}
</script>

<style lang="scss" scoped>
    a {
        text-decoration: none;
    }

</style>