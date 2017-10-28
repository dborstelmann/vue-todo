export default {
    addTodo ({ commit }, todo) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                commit('addTodo', todo)
                commit('incrementId')
                resolve()
            }, 1)
        })
    },
    editTodo ({ commit }, { todo, newText }) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                commit('editTodo', { todo, newText })
                resolve()
            }, 1)
        })
    },
    removeTodo ({ commit }, todo) {
        commit('removeTodo', todo)
    },
    toggleDone ({ commit }, todo) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                commit('toggleDone', todo)
                resolve(todo)
            }, 1)
        })
    }
}
