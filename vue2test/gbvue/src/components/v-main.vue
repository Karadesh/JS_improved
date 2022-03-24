<template>
    <div class="v-main">
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
    </div>
</template>

<script>

export default {
    name: 'v-main',
    props: {

    },
    data() {
        return {
            title: 'Main'
        }
    },
    computed: {

    },
    methods: {

    },
    watch: {

    },
    mounted() {

    }
}
</script>

<style>
    .v-main {
        max-width: 900px;
        margin: 0 auto;
    }
</style>
