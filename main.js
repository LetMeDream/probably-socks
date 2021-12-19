const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            path: './assets/images/socks_blue.jpg',
            inventory: 12
        }
    }
}).mount('#app')
