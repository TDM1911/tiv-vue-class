<template>
    <hr>
    <label>{{ title }}</label>
    <div>
        <ul v-for="goal in goals" :key="goal.id">
            <slot v-if="goal.completed == status" :item="goal.value"></slot>
        </ul>
    </div>
</template>

<script>
export default {
    props: ['title', 'data', 'status'],
    data() {
        return {
            goals: this.data,
        };
    },

    methods: {}
};
</script>

<style>
.box {
    border: 1px solid black;
    padding: 10px 10px 10px 10px;
    margin: 5px 5px 5px 5px;
}

label, input[type=text] {
  margin-bottom: 0.5rem;
  display: block;
  width: 100%;
}

label {
  font-weight: bold;
}

ul {
  list-style: none;
  margin: 1rem 0;
  padding: 0;
}

.error {
  color: red;
  font-size: 10px;
}
</style>
