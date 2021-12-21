const app = Vue.createApp({
    data() {
        return {
            cart: 0,
            premium: false
        }
    },
    methods: {
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
})
