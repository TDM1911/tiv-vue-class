<template>
    <goal-section :data="goals" :status="true" title="Completed task">
        <template #default="props">
            <h1 style="background: green"><b>{{ props.item }}</b></h1>
        </template>
    </goal-section>
</template>

<script type="text/javascript">

import GoalSection from './GoalSection.vue';

export default {
    components: {
        GoalSection,
    },

    props: ['data'],

    data() {
        return {
            goals: this.data,
        };
    },
}
</script>
