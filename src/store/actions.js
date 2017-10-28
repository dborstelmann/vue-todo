import Vue from 'vue'
const graphURL = 'https://graphql-todo.herokuapp.com/'

export default {
    fetchTodos ({ commit }) {
        return new Promise((resolve, reject) => {
            Vue.http.post(
                graphURL,
                {
                    query: `
                        query {
                            todos {
                                id
                                text
                                done
                            }
                        }
                    `
                }
            ).then(response => {
                commit('fetchTodos', response.body.data.todos)
                resolve()
            }, response => {
                reject(response)
            })
        })
    },
    addTodo ({ commit }, todo) {
        return new Promise((resolve, reject) => {
            Vue.http.post(
                graphURL,
                {
                    query: `
                        mutation {
                            add (text: "${todo.text}") {
                                id
                                text
                                done
                            }
                        }
                    `
                }
            ).then(response => {
                commit('addTodo', response.body.data.add)
                resolve()
            }, response => {
                reject(response)
            })
        })
    },
    editTodo ({ commit }, { todo, newText }) {
        return new Promise((resolve, reject) => {
            Vue.http.post(
                graphURL,
                {
                    query: `
                        mutation {
                            edit (id: "${todo.id}", text: "${newText}") {
                                id
                                text
                                done
                            }
                        }
                    `
                }
            ).then(response => {
                commit('editTodo', { todo, updatedTodo: response.body.data.edit })
                resolve()
            }, response => {
                reject(response)
            })
        })
    },
    removeTodo ({ commit }, todo) {
        return new Promise((resolve, reject) => {
            Vue.http.post(
                graphURL,
                {
                    query: `
                        mutation {
                            remove (id: "${todo.id}") {
                                id
                                text
                                done
                            }
                        }
                    `
                }
            ).then(response => {
                commit('removeTodo', todo)
                resolve()
            }, response => {
                reject(response)
            })
        })
    },
    toggleDone ({ commit }, todo) {
        return new Promise((resolve, reject) => {
            Vue.http.post(
                graphURL,
                {
                    query: `
                        mutation {
                            toggle (id: "${todo.id}") {
                                id
                                text
                                done
                            }
                        }
                    `
                }
            ).then(response => {
                commit('toggleDone', todo)
                resolve(todo)
            }, response => {
                reject(response)
            })
        })
    }
}
