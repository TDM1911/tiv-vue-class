<template>
    <li class="space-between" :class="{'bg-complete': isCompleted}">
        <input @click="toggleGoal" class="pl-1" type="checkbox" name="completed" v-model="isCompleted">
        <span class="pl-1" v-if="!isEditing">{{ goalText }}</span>
        <input type=text class="pl-1" v-model="goalText" v-else/>
        <span class="pl-1 pr-1"><button @click="removeGoal"> X </button></span>
        <span class="pl-1 pr-1"><button @click="edit"> Edit </button></span>
    </li>
</template>

<script>
export default {
    data() {
        return {
            isCompleted: false,
            isEditing: false,
            goalText: this.goal,
        };
    },

    methods: {
        toggleGoal() {
            this.$emit('toggle', this.index);
        },
        removeGoal() {
            this.$emit('remove', this.index);
        },
        edit() {
            this.isEditing = !this.isEditing;
            if (this.isEditing == false) {
                this.$emit('edit', this.index, this.goalText);
            }
        },
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
