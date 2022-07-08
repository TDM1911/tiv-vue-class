const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      lastname: '',
      firstname: '',
      confirmedName: '',
      // fullname: '',
    };
  },

  watch: {
    counter(value) {
      if (value > 50) {
        const obj = this;
        setTimeout(function () {
          obj.counter = 0;
        }, 2000);
      }
    }
    // update using watcher
    // firstname(value) {
    //   this.fullname = '';
    //   if (value && this.lastname) {
    //     this.fullname = value + ' ' + this.lastname;
    //   }
    // },
    // lastname(value) {
    //   this.fullname = '';
    //   if (value && this.firstname) {
    //     this.fullname = this.firstname + ' ' + value;
    //   }
    // },
  },

  computed: {
    // update using computed
    fullname() {
      if (this.firstname && this.lastname) {
        return this.firstname + ' ' + this.lastname;
      } else {
        return '';
      }
    },
  },

  methods: {
    setName(event, lastName) {
      this.name = event.target.value + ' ' + lastName;
    },
    confirmInput() {
      this.confirmedName = this.name;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    submitForm() {
      alert('Submitted!');
    },
    resetInput() {
      this.firstname = '';
      this.lastname = '';
      this.confirmedName = '';
      this.counter = 0;
    }
  }
});

app.mount('#events');
