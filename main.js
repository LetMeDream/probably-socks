const app = Vue.createApp({
    data() {
        return {
            cart:0,
            product: 'Socks',
            brand: 'Vue Mastery',
            /* image: './assets/images/socks_blue.jpg', */
            /* inStock: false, */
            selectedVariant: 0,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
              { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 5 },
              { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0 },
            ]
        }
    },
    computed:{
        title(){
            return this.brand + ' ' + this.product
        },
        image(){
            return this.variants[this.selectedVariant].image
        },
        inStock(){
            return this.variants[this.selectedVariant].quantity
        }
    }
    ,
    methods: {
        add(){
            this.cart += 1;
            this.variants[this.selectedVariant].quantity -= 1;
            this.variants[this.selectedVariant].quantity == 0 ? alert('out of stock!') : '';
        },
        updateVariant(index) {
            this.selectedVariant = index;
        }
    }
}).mount('#app')
