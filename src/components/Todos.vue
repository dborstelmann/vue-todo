<template>
    <div class="todos">
        <h1>{{ msg }}</h1>
    </div>
</template>

<script>
export default {
    name: 'Todos',
    data () {
        return {
            msg: 'Todo with Vue!'
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
    font-weight: normal;
}
</style>
