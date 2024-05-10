import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import LoginView from "@/views/user/LoginView.vue";
import JoinView from "@/views/user/JoinView.vue";
import FindPwdView from "@/views/user/FindPwdView.vue";
import ProfileView from "@/views/user/ProfileView.vue";
import MakePlanView from "@/views/plan/MakePlanView.vue";
import MyPlanView from "@/views/plan/MyPlanView.vue";
import ArticleListView from "@/views/board/ArticleListView.vue";
import WriteArticleView from "@/views/board/WriteArticleView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
    {
      path: "/join",
      name: "join",
      component: JoinView,
    },
    {
      path: "/findpwd",
      name: "findpwd",
      component: FindPwdView,
    },
    {
      path: "/profile",
      name: "profile",
      component: ProfileView,
    },
    {
      path: "/makeplan",
      name: "makeplan",
      component: MakePlanView,
    },
    {
      path: "/myplan",
      name: "myplan",
      component: MyPlanView,
    },
    {
      path: "/board",
      name: "board",
      component: ArticleListView,
    },
    {
      path: "/write",
      name: "write",
      component: WriteArticleView,
    },
  ],
});

export default router;