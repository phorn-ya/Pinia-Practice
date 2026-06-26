import { defineStore } from 'pinia'

export const useTodoStore = defineStore('todo', {
    state: () => ({
        todos: []
    }),

    getters: {
        completedTodos: (state) =>
            state.todos.filter(todo => todo.completed),

        pendingTodos: (state) =>
            state.todos.filter(todo => !todo.completed),

        totalTodos: (state) =>
            state.todos.length
    },

    actions: {
        addTodo(title) {
            this.todos.push({
                id: Date.now(),
                title,
                completed: false
            })
        },

        deleteTodo(id) {
            this.todos = this.todos.filter(todo => todo.id !== id)
        },

        toggleTodo(id) {
            const todo = this.todos.find(todo => todo.id === id)
            if (todo) todo.completed = !todo.completed
        }
    }
})