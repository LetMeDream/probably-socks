app.component('my-details',{
    template:
    /* html */
    `
    <ul>
        <li v-for="detail in details">{{ detail }}</li>
    </ul>
    `,
    data() {
        return {
            details: ['50% cotton', '30% wool', '20% polyester']
        }
    }
})