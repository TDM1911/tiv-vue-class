const app = Vue.createApp({
    data() {
        return {
            courseGoal: [
                'Git gud!',
                'SHAW!',
            ],
            vueLink: 'https://vuejs.org/',
            error: '',
        };
    },

    methods: {
        goalRandomizer() {
            const randomNumber = Math.random();
            if (randomNumber < 0.5) {
                return this.courseGoal[0];
            } else {
                return this.courseGoal[1];
            }
        },
    },
});

app.mount('#user-goal');
