<template>
  <main>
    <Nav />
    <h1>Form</h1>
    <p>
      <strong>
        Vi behöver dina uppgifter för att förbättra din visstelse på våran
        hemsida och anpassa den efter vad vi tror att du vill se!
      </strong>
    </p>
    <br />
    <div class="container">
      <form id="regForm" action="">
        <label for="name">Name</label>
        <input type="text" name="name" required />

        <label for="birthdate">Birthdate</label>
        <input type="date" name="birthdate" required />

        <label for="email">Email</label>
        <input type="email" name="email" required />

        <label for="password">Password</label>
        <input type="password" name="password" required />

        <input type="submit" value="Register" />
      </form>
    </div>
  </main>
</template>

<script>
import Nav from "./Nav.vue";

export default {
  name: "Me",
  props: {},
  components: {
    Nav
  }
};
</script>

<style>
input[type="text"],
input[type="date"],
input[type="email"],
input[type="password"] {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
}

input[type="submit"] {
  background-color: #3333ff;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type="submit"]:hover {
  background-color: #0000b3;
}
</style>
