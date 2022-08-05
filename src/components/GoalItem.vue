<template>
    <li class="space-between" @click="toggleGoal" :class="{'bg-complete': isCompleted}">
        <input class="pl-1" type="checkbox" name="completed" v-model="isCompleted">
        <span class="pl-1">{{ goal }}</span>
        <span class="pl-1 pr-1"><button @click="removeGoal"> X </button></span>
    </li>
</template>

<script>
export default {
    data() {
        return {
            isCompleted: false,
        };
    },

    methods: {
        toggleGoal() {
            this.isCompleted = !this.isCompleted;
        },
        removeGoal() {
            this.$emit('remove', this.index);
        }
    },

    props: {
        goal: String,
        index: Number,
    }
};
</script>

<style type="text/css">
.bg-complete {
    background-color: lime;
    text-decoration-color: white;
}

.pl-1 {
    padding-left: 10px;
}

.pr-1 {
    padding-right: 10px;
}

li {
  margin: 1rem 0;
  padding: 1rem;
  border: 1px solid #ccc;
}

.space-between {
  display: flex;
  justify-content: space-between;
}
</style>
