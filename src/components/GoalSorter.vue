<template>
    <h1>PART ONE</h1>
    <goal-section :data="goals" :status="true" title="Completed task">
        <template #default="props">
            <h1 style="background: green"><b>{{ props.item }}</b></h1>
        </template>
    </goal-section>
    <goal-section :data="goals" :status="false" title="Incompleted task">
        <template #default="props">
            <h4 style="background: yellow">{{ props.item }}</h4>
        </template>
    </goal-section>
    <hr>
    <h1>PART TWO</h1>
    <button @click="switchTab('incompleted-list')">Incompleted List</button>
    <button @click="switchTab('completed-list')">Completed List</button>
    <component :is="tab" :data="goals"></component>
</template>

<script type="text/javascript">

import GoalSection from './GoalSection.vue';
import IncompletedList from './IncompletedList.vue';
import CompletedList from './CompletedList.vue';

export default {
    components: {
        GoalSection,
        CompletedList,
        IncompletedList,
    },

    props: ['data'],

    data() {
        return {
            goals: this.data,
            tab: 'incompleted-list',
        };
    },

    methods: {
        switchTab(tab) {
            this.tab = tab;
        }
    }
}
</script>
