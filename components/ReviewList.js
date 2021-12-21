app.component('review-list',{
    props:{
        reviews: { /* Remember. Documentation. */
            type: Array,
            required: true
        }
    },
    template:
    /*html*/
    `
    <div v-if='reviews.length' class="review-container">
    <h3>Reviews:</h3>
        <ul>
        <li v-for="(review, index) in reviews" :key="index">
            {{ review.name }} gave this {{ review.rating }} stars
            <br/>
            "{{ review.review }}"
            <br/>
        </li>
        </ul>
    </div>
    `
})