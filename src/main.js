import { createApp } from 'vue'
import App from './App.vue'
import GoalList from './components/GoalList.vue';
import GoalItem from './components/GoalItem.vue';

const app = createApp(App);

app.component('goal-list', GoalList);
app.component('goal-item', GoalItem);

app.mount('#app');
