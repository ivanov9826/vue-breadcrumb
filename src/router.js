import { createRouter, createWebHistory } from "vue-router";

import HelloWorldVue from "./components/HelloWorld.vue";

import Teams from "./components/Teams/Teams.vue";
import LowerTeam from "./components/Teams/LowerTeam.vue";
import HigherTeam from "./components/Teams/HigherTeams.vue";

import Users from "./components/Users/Users.vue";
import LowerUsers from "./components/Users/LowerUsers.vue";
import HigherUsers from "./components/Users/HigherUsers.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: HelloWorldVue },
    {
      path: "/teams",
      component: Teams,
      props: true,
      children: [
        {
          path: "lower-teams",
          component: LowerTeam,
          children: [{ path: "higher-teams", component: HigherTeam }],
        },
      ],
    },
    {
      path: "/users",
      component: Users,
      props: true,
      children: [
        {
          path: "lower-users",
          component: LowerUsers,
          children: [{ path: "higher-users", component: HigherUsers }],
        },
      ],
    },
  ],
});

export default router;
