import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/pages/HomePage.vue';
import CitiesPage from "@/pages/CitiesPage.vue";
import CityDetails from "@/components/CityDetails.vue";
import CityQuiz from "@/pages/CityQuiz.vue";
const routes = [
    { path: '/', name: 'Home', component: HomePage },
    { path: '/cities', name: 'Cities', component: CitiesPage },
    { path: "/city/:id", component: CityDetails },
    { path: '/city/:id/quiz', name: 'CityQuiz', component: CityQuiz }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
