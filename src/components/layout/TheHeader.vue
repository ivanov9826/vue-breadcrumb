<template>
  <header>
    <nav>
      <ul>
        <li class="breadcrumb-menu" v-for="crumb in setCrumbs" :key="crumb">
          <RouterLink :to="selectedCrumb(crumb)">
            {{ crumb }}
          </RouterLink>
        </li>
      </ul>
      <ul>
        <li>
          <RouterLink to="/">Home</RouterLink>
        </li>
        <li>
          <RouterLink to="/teams">Teams</RouterLink>
        </li>
        <li>
          <RouterLink to="/users">Users</RouterLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import { RouterLink } from "vue-router";

export default {
  emits: ["set-page"],
  props: ["crumbs"],
  computed: {
    setCrumbs() {
      const defaultRoute = ["Home"];
      if (this.crumbs.length === 1) {
        return defaultRoute;
      } else {
        const currentCrumbs = this.crumbs.split("/").slice(1);
        const result = [defaultRoute[0], ...currentCrumbs];
        return result;
      }
    },
  },
  methods: {
    selectedCrumb(crumb) {
      const splittedCrumbs = this.crumbs.split("/").slice(1);
      const clickedIndex = splittedCrumbs.indexOf(crumb) + 1;
      const result = "/" + splittedCrumbs.slice(0, clickedIndex).join("/");
      // this.$router.push(result);
      return result;
    },
  },
  components: { RouterLink },
};
</script>

<style scoped>
header {
  width: 100%;
  height: 5rem;
  background-color: #818181;
  position: absolute;
  top: 0;
}

nav {
  height: 100%;
  display: flex;
  justify-content: space-between;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

li {
  margin: 0 2rem;
}

button {
  font: inherit;
  background: transparent;
  border: 1px solid transparent;
  cursor: pointer;
  color: white;
  padding: 0.5rem 1.5rem;
  display: inline-block;
}

a:hover,
a:active {
  color: #63f713;
  border-color: #63f713;
  background-color: #363636;
}

.breadcrumb-menu {
  margin: 0;
}

a {
  padding: 8px;
  color: white;
}
</style>
