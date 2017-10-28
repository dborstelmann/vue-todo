import _ from 'underscore'

export default {
    addTodo (state, todo) {
        state.todos.push({...todo, id: state.nextTodoId})
    },
    editTodo (state, { todo, newText }) {
        todo.text = newText
    },
    removeTodo (state, todo) {
        state.todos = _.reject(state.todos, (t) => t.id === todo.id)
    },
    toggleDone (state, todo) {
        todo.done = !todo.done
    },
    incrementId (state) {
        state.nextTodoId++
    }
}
