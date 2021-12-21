const app = Vue.createApp({
    data() {
        return {
            cart: [],
            premium: true,
            reviews:[]
        }
    },
    methods: {
        updateCart(event){
            this.cart.push(event);
            console.log(this.cart);
        },
        showCart(){
            console.log(this.cart);
        },
        addReview(review){
            this.reviews.push(review);
            console.log(this.reviews);
        }
    }
})
