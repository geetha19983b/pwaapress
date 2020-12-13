import Dashboard from './components/Dashboard.vue'
import DashboardIndex from './components/DashboardIndexDb.vue';
const lazyAbout = () => import('./components/About.vue')

export const routes = [
  {path: '', component: Dashboard},
 // {path: '/dashboard', component: Dashboard},
 {path: '/dashboard', component: DashboardIndex},
  {path: '/about', component: lazyAbout}
];