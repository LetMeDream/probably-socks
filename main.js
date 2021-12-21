const app = Vue.createApp({
    data() {
        return {
            cart: [],
            premium: true
        }
    },
    methods: {
        updateCart(event){
            this.cart.push(event);
            console.log(this.cart);
        },
        showCart(){
            console.log(this.cart);
        }
    }
})
