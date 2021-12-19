/* First, lets create our Vue App */
const app = Vue.createApp({
    data: function(){
        return{
            product: 'Socks',
            description: 'Socks depiction'
        }
    }
}).mount('#app')