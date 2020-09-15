<template>
  <main>
    <Nav />
    <h2>Week 1</h2>
    <div>
      <p>
        <strong>
          Länk till <a href="https://github.com/Danne97/jsramverk">github</a>
        </strong>
      </p>
      <br>
      <p>Project setup:<br>
         npm install<br>
         <br>
         Compiles and hot-reloads for development:<br>
         npm run serve<br>
         <br>
         Compiles and minifies for production:<br>
         npm run build<br>
         <br>
         Run your tests:<br>
         npm run test<br>
         <br>
         Lints and fixes files:<br>
         npm run lint
      </p>
    </div>
  </main>
</template>

<script>
import Nav from "../Nav.vue";

export default {
  name: "Report1",
  components: {
    Nav
  }
};
</script>
