<template>
    <div class="todos">
        <ul v-for="todo in todos">
            <li>{{todo.text}}</li>
        </ul>
        <at-input @keyup.enter.native="addTodo" placeholder="New todo..."></at-input>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'Todos',
    computed: mapState([
        'todos'
    ]),
    methods: {
        addTodo (e) {
            var text = e.target.value
            if (text.trim()) {
                this.$store.dispatch('addTodo', {
                    text: e.target.value,
                    done: false
                })
            }
            e.target.value = ''
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
