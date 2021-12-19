const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            path: './assets/images/socks_blue.jpg',
            inStock: true,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants:[
                {id:69, color: 'green'},
                {id:420, color: 'blue'}
            ]
        }
    }
}).mount('#app')
