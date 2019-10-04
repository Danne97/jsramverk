<template>
  <div id="app" class="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style>
@import url("https://rsms.me/inter/inter-ui.css");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html {
  font-size: 100%;
  font-family: "Inter UI", sans-serif;
  background-image: url("https://source.unsplash.com/a0z94OLZcuQ");
  min-height: 100%;
  min-width: 1024px;
  width: 100%;
  height: auto;
  position: fixed;
  top: 0;
  left: 0;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

body {
  overflow-y: scroll;
}

.app {
  width: 62em;
  margin: 0 auto;
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 2em 6em 8em;
  background-color: #f5f5f5;
  border-top: 4px solid #f5f5f5;
  color: black;
}
h1 {
  font-size: 4em;
  font-weight: 100;
}
h2 {
  font-size: 3em;
  font-weight: 100;
}
p {
  font-size: 1em;
  font-weight: normal;
}
</style>
