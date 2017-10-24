<template>
    <div class="todo-wrapper">
        <div class="todos">
            <div v-for="todo in todos" class="todo row at-row" :key="todo.id">
                <!-- <span class="todo-text">{{todo.text}}</span> -->
                <at-input @keyup.enter.native="editTodo(todo, $event)" size="large" :value="todo.text" class="edit-todo todo-input" :disabled="todo.done ? 'disabled': null" placeholder="...press enter to remove"></at-input>
                <at-button @click="toggleDone(todo)" class="medium-large" type="primary" icon="icon-check" circle size="large" :hollow="!todo.done ? 'hollow': null"></at-button>
                <at-button @click="removeTodo(todo)" class="medium-large" type="error" icon="icon-x" circle size="large" hollow></at-button>
            </div>
            <div class="todo row at-row">
                <at-input size="large" class="new-todo todo-input" @keyup.enter.native="addTodo" placeholder="New todo..."></at-input>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

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
        },
        editTodo (todo, e) {
            var text = e.target.value
            if (text.trim()) {
                this.$store.dispatch('editTodo', {
                    todo,
                    newText: text
                })
            } else {
                this.removeTodo(todo)
            }
        },
        removeTodo (todo) {
            this.$store.dispatch('removeTodo', todo)
        },
        ...mapActions([
            'toggleDone'
        ])
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>

.todo-wrapper {
    padding: 10vh 10vw;
    .todos {
        .todo {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            margin-bottom: 10px;

            .medium-large {
                width: 36px;
                height: 36px;
                margin-left: 10px;
            }

            .todo-input {
                flex-grow: 3;
            }
        }
    }
}

</style>
