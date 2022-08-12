<template>
  <li>
    <h2>{{ friend.name }} {{ isFavorite == '1' ? "(Favorite)": "" }}</h2>
    <button @click="toggleDetails">{{ detailsAreVisible ? 'Hide' : 'Show' }} Details</button>
    <button @click="toggleFavorite">Toggle Favorite</button>
    <button @click="deleteFriend">Delete Friend</button>
    <ul v-if="detailsAreVisible">
      <li>
        <strong>Phone:</strong>
        {{ friend.phone }}
      </li>
      <li>
        <strong>Email:</strong>
        {{ friend.email }}
      </li>
    </ul>
  </li>
</template>

<script>
export default {
  data() {
    return {
      detailsAreVisible: false,
      friend: {
        id: this.id,
        name: this.username,
        phone: this.phoneNumber,
        email: this.emailAddress,
      },
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },

    toggleFavorite() {
      this.$emit('toggle-favorite', this.id);
    },

    deleteFriend() {
      this.$emit('delete', this.id)
    }
  },

  emits: {
    'toggle-favorite': function (id) {
      if (id) {
        return true;
      }
      console.warn('id is missing.');
      return false;
    },
    'delete': function (id) {
      if (id) {
        return true;
      }
      console.warn('id is missing.');
      return false;
    }
  },

  props: {
    id: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    emailAddress: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: [String, Number],
      required: false,
      default: 'N/A',
    },
    isFavorite: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
};
</script>
