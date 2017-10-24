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
            // setTimeout(() => {
            commit('addTodo', todo)
            commit('incrementId')
            // }, 1000)
        },
        editTodo ({ commit }, { todo, newText }) {
            commit('editTodo', { todo, newText })
        },
        removeTodo ({ commit }, todo) {
            commit('removeTodo', todo)
        },
        toggleDone ({ commit }, todo) {
            commit('toggleDone', todo)
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
