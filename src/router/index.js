import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter)

const Home = () => import("../views/home/Home")
const Category = () => import("../views/category/Category")
const Cat = () => import("../views/cat/Cat")
const Profile = () => import("../views/profile/Profile")

export  default new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/category',
      component: Category
    },
    {
      path: '/cat',
      component: Cat
    },
    {
      path: '/profile',
      component: Profile
    }
  ],
  mode: 'history'
})
