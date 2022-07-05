const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      step: 1,
      username: 'ManhTD',
    };
  },

  methods: {
    add(step) {
      this.counter = this.counter + parseInt(step);
    },

    subtract(step) {
      this.counter = this.counter - parseInt(step);
    },

    setStep(event) {
      this.step = parseInt(event.target.value);
    },

    setName(event) {
      this.username = event.target.value;
    },
  }
});

app.mount('#events');
