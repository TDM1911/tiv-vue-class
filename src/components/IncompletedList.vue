<template>
    <goal-section :data="goals" :status="false" title="Incompleted task">
        <template #default="props">
            <h1 style="background: yellow"><b>{{ props.item }}</b></h1>
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
