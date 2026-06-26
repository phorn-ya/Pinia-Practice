import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
    state: () => ({
        products: [
            { id: 1, name: 'Laptop', price: 1200 },
            { id: 2, name: 'Mouse', price: 25 },
            { id: 3, name: 'Keyboard', price: 70 },
        ],
        cart: []
    }),

    getters: {
        totalItems: (state) => state.cart.length,
        totalPrice: (state) => state.cart.reduce((sum, item) => sum + item.price, 0)
    },

    actions: {
        addToCart(product) {
            this.cart.push(product)
        },

        removeFromCart(id) {
            this.cart = this.cart.filter(item => item.id !== id)
        },

        clearCart() {
            this.cart = []
        }
    }
})