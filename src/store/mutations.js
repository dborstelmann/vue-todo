import _ from 'underscore'

export default {
    fetchTodos (state, todos) {
        state.todos = todos
    },
    addTodo (state, todo) {
        state.todos.push(todo)
    },
    editTodo (state, { todo, updatedTodo }) {
        todo.text = updatedTodo.text
    },
    removeTodo (state, todo) {
        state.todos = _.reject(state.todos, (t) => t.id === todo.id)
    },
    toggleDone (state, todo) {
        todo.done = !todo.done
    }
}
