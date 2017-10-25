// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import AtComponents from 'at-ui'
import 'at-ui-style'
import _ from 'underscore'
import App from './App'

Vue.use(Vuex)
Vue.use(AtComponents)
Vue.config.productionTip = false

const todoModule = {
    state: {
        todos: [],
        nextTodoId: 1
    },
    getters: {
        doneTodos: state => {
            return state.todos.filter(todo => todo.done)
        },
        doneTodosCount: (state, getters) => {
            return getters.doneTodos.length
        }
    },
    actions: {
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
    },
    mutations: {
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
}

const store = new Vuex.Store(todoModule)

/* eslint-disable no-new */
new Vue({
    el: '#app',
    store,
    template: '<App/>',
    components: { App }
})
