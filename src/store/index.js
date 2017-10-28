import actions from './actions'
import mutations from './mutations'

export default {
    state: {
        todos: [],
        nextTodoId: 1
    },
    actions: actions,
    mutations: mutations
}
