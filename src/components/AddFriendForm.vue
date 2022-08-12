<template>
  <form>
    <h2>Add Form</h2>
    <div>
      <label>Name</label>
      <input type="text" v-model="name">
    </div>
    <div>
      <label>Phone</label>
      <input type="tel" v-model="phone">
    </div>
    <div>
      <label>E-Mail</label>
      <input type="email" v-model="email">
    </div>
    <div>
      <input type="checkbox" v-model="favorite">
      <span>Is favorite</span>
    </div>
    <button @click="createNew" type="button">
      Add new friend
    </button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      phone: null,
      favorite: false,
      email: null,
      name: null,
    };
  },
  methods: {
    createNew() {
      this.$emit('create-new-friend', {
        id: Math.random().toString(36).substr(2, 9),
        name: this.name,
        phone: this.phone,
        email: this.email,
        favorite: this.favorite,
      });
    }
  },

  emits: {
    'create-new-friend': function (friend) {
      if (friend.phone && friend.email && friend.name) {
        return true;
      }
      return false;
    }
  },

  props: {
    //
  },
};
</script>
