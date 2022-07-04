<template>
    <div>
        <h5 class="stylized-title-list-footer"> {{ option.title }} </h5>
        <ul class="stylized-link-list-footer">
            <li v-for="(option, i) in option.links" :key="i">
                <a href="#">
                    <i class="fa-solid fa-angle-right"></i>
                    {{ option }}
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'FooterLinkStyles',
    props: {
        option: {
            type: Array,
            required: true
        },
    }

}
</script>

<style lang="scss" scoped>
.stylized-link-list-footer {
    list-style: none;
    padding: 0;

    li {
        padding: .3rem 0;
        display: flex;
        align-items: center;

        a {
            i {
                padding-right: .3rem;
            }

            text-decoration: none;
            color: var(--text-color-secondary);
            font-size: .8rem;
            transition: color .1s ease-in-out;

            &:hover {
                color: var(--primary-color);
            }
        }
    }
}

.stylized-title-list-footer {
    color: white;
    font-weight: 500;
}
</style>