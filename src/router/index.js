import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Projects from '../views/Projects.vue'
import People from "../views/People.vue";
import Member from "../views/Member.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
  { path: "/projects", component: Projects },
  { path: "/people", component: People },
  // { path: '/people/:id', component: Member, name: 'Member', props: true },
  {
  path: '/member/:id',
  name: 'Member',
  component: () => import('../views/Member.vue')
},
{
  path: '/edit/:id?',
  name: 'EditProfile',
  component: () => import('../views/EditProfile.vue'),
  meta: { requiresAuth: true }
}
];

const router = createRouter({
  history: createWebHistory('/clinical-deterioration/'),
  routes,
})

export default router
