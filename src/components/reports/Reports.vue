<template>
  <main>
    <Nav />
    <h1>Reports</h1>
    <nav>
      <ul>
        <li><router-link to="/reports/week/1">Week 1</router-link></li>
        <li><router-link to="/reports/week/2">Week 2</router-link></li>
      </ul>
    </nav>
  </main>
</template>

<script>
import Nav from "../Nav.vue";

export default {
  name: "Reports",
  components: {
    Nav
  }
};
</script>
