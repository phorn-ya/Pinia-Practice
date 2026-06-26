import { createRouter, createWebHistory } from 'vue-router'

import CounterView from './views/CounterView'
import UserView from './views/UserView'
import TodoView from './views/TodoView'
import CartView from './views/CartView'
import ThemeView from './views/ThemeView'

const routes = [
    {
        path: '/',
        redirect: '/counter'
    },
    {
        path: '/counter',
        name: 'Counter',
        component: CounterView
    },
    {
        path: '/user',
        name: 'User',
        component: UserView
    },
    {
        path: '/todo',
        name: 'Todo',
        component: TodoView
    },
    {
        path: '/cart',
        name: 'Cart',
        component: CartView
    },
    {
        path: '/theme',
        name: 'Theme',
        component: ThemeView
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router