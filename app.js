Vue.createApp({
    data() {
        return {
            goals: [],
            enteredValue: '',
            error: '',
        };
    },
    methods: {
        addGoal() {
            if (!this.enteredValue) {
                this.error = 'Goal is required.';
                return;
            }
            this.error = '';
            this.goals.push(this.enteredValue);
            this.enteredValue = '';
        },

        removeGoal(index) {
            let confirmed = confirm("Do you wish to delete this goal?");
            if (!confirmed) {
                return;
            }
            this.goals.splice(index, 1);
        },

        clearAllGoal() {
            if (this.goals.length == 0) {
                alert('No goal found.');
                return;
            }
            let confirmed = confirm("Do you wish to delete ALL goal?");
            if (!confirmed) {
                return;
            }
            this.goals = [];
        }
    }
}).mount('#app');
