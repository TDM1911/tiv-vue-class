<template>
    <ul v-for="goal in goals" :key="goal.id">
        <li>
            <slot :item="goal.content" another="...">
            </slot>
        </li>
    </ul>
</template>

<script type="text/javascript">
    export default {
        data() {
            return {
                goals: [
                    {
                        'id': 1,
                        'content': 'Tran Dao Manh',
                    },
                    {
                        'id': 2,
                        'content': 'Tran Van Phong',
                    },
                    {
                        'id': 3,
                        'content': 'Tran Duc Minh',
                    },
                ],
            };
        },

        mounted() {
            //
        },
    }
</script>

<style type="text/css" scoped>
</style>
