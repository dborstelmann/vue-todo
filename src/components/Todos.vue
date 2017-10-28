<template>
    <div class="todo-wrapper">
        <div class="todos">
            <div
                v-for="todo in todos"
                class="todo row at-row"
                :key="todo.id"
            >
                <at-input
                    class="edit-todo todo-input"
                    placeholder="...press enter to remove"
                    size="large"
                    :value="todo.text"
                    :disabled="todo.done ? 'disabled': null"
                    @keyup.enter.native="editTodo(todo, $event)"
                />
                <!-- @blur="editTodo(todo, $event)" -->
                <at-button
                    class="action-button"
                    type="primary"
                    icon="icon-check"
                    size="large"
                    circle
                    :hollow="!todo.done ? 'hollow': null"
                    @click="toggleDone(todo)"
                />
                <at-button
                    class="action-button"
                    type="error"
                    icon="icon-x"
                    size="large"
                    circle
                    hollow
                    @click="removeTodo(todo)"
                />
            </div>
            <div class="todo row at-row">
                <at-input
                    class="new-todo todo-input"
                    placeholder="New todo..."
                    size="large"
                    @keyup.enter.native="addTodo"
                />
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'Todos',
    created () {
        this.$store.dispatch('fetchTodos')
    },
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
                }).then(() => {
                    this.$Message.info('Task added')
                }, () => {
                    this.$Message.error('Server error')
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
                }).then(() => {
                    this.$Message.info('Task edited')
                })
            } else {
                this.removeTodo(todo)
            }
        },
        removeTodo (todo) {
            this.$store.dispatch('removeTodo', todo).then(() => {
                this.$Message.warning('Task removed')
            })
        },
        toggleDone (todo) {
            this.$store.dispatch('toggleDone', todo).then((newTodo) => {
                newTodo.done ? this.$Message.success('Task completed :)') : this.$Message.error('Task undone :(')
            })
        }
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

            .action-button {
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
