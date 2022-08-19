<template>
    <label for="goal">Goal</label>
    <input type="text"
        id="goal"
        v-model="enteredValue"
        @keyup.enter="addGoal"/>
    <hr>
    <p class="error" v-text="error"></p>
    <div style="text-align: center;">
        <h3>Your todo list</h3>
    </div>
    <div>
        <ul v-if="goals.length">
            <goal-item
                v-for="goal in goals"
                :key="goal.id"
                :goal="goal.value"
                :index="goal.id"
                @remove="removeGoal"
                @toggle="toggleGoal"
                @edit="editGoal"></goal-item>
        </ul>
        <label v-else class="box">You have no goal</label>
    </div>
    <goal-sorter :data="goals"></goal-sorter>
</template>

<script>
import GoalItem from './GoalItem.vue';
import GoalSorter from './GoalSorter.vue';

export default {
    components: {
        GoalItem,
        GoalSorter,
    },

    data() {
        return {
            goals: [],
            enteredValue: '',
            error: '',
            index: 0,
        };
    },

    methods: {
        addGoal() {
            if (!this.enteredValue) {
                this.error = 'Goal is required';
                return;
            }
            this.error = '';
            this.goals.push({
                'value': this.enteredValue,
                'id': this.index,
                'completed': false,
            });
            this.index++;
            this.enteredValue = '';
        },
        removeGoal(index) {
            for (var i = this.goals.length - 1; i >= 0; i--) {
                if (this.goals[i].id == index) {
                    this.goals.splice(i, 1);
                    break;
                }
            }
        },
        toggleGoal(index) {
            for (var i = this.goals.length - 1; i >= 0; i--) {
                if (this.goals[i].id == index) {
                    this.goals[i].completed = !this.goals[i].completed;
                    break;
                }
            }
        },
        editGoal(index, text) {
            for (var i = this.goals.length - 1; i >= 0; i--) {
                if (this.goals[i].id == index) {
                    this.goals[i].value = text;
                    break;
                }
            }
        }
    }
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
