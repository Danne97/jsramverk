<template>
  <main>
    <Nav />
    <h2>Week 2</h2>
    <div>
      <p>
        <strong>
          Länk till <a href="https://github.com/Danne97/jsramverk">github</a>
        </strong>
      </p>
      <br />
      <p>
        Många webbplatser använder sig utav olika typer utav formulär där det
        ibland kan vara svårt att veta vad som ska fyllas i och vilka krav som
        finns. Därför ville jag att mitt formulär skulle vara tydlig och att
        användaren direkt vet vad som ska fyllas i vart. Sedan ville jag även
        att färgerna skulle passa in för temat som jag har. Vilket är vitt,
        blått och svart.
      </p>
    </div>
  </main>
</template>

<script>
import Nav from "../Nav.vue";

export default {
  name: "Report2",
  components: {
    Nav
  }
};
</script>
