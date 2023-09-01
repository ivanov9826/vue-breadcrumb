import { createRouter, createWebHistory } from "vue-router";

import HelloWorldVue from "./src/components/HelloWorld.vue";

import Teams from "./src/components/Teams/Teams.vue";
import LowerTeam from "./src/components/Teams/LowerTeam.vue";
import HigherTeam from "./src/components/Teams/HigherTeams.vue";

import Users from "./src/components/Users/Users.vue";
import LowerUsers from "./src/components/Users/LowerUsers.vue";
import HigherUsers from "./src/components/Users/HigherUsers.vue";

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
