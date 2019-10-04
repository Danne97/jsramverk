<template>
  <nav>
    <ul>
      <li><router-link to="/">Me</router-link></li>
      <li><router-link to="/form">Form</router-link></li>
      <li><router-link to="/reports/week">Reports</router-link></li>
    </ul>
    <br />
  </nav>
</template>

<script>
export default {
  name: "Me",
  props: {}
};
</script>
