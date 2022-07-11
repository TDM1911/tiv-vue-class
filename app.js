const app = Vue.createApp({
    data() {
        return {
            boxes: [],
        };
    },

    computed: {
        boxA() {
            return {
                demo: true,
                active: this.boxes['A'],
            };
        },
    },

    methods: {
        boxSelected(box) {
            this.boxes[box] = !this.boxes[box];
        },
    },
});

app.mount('#styling');
