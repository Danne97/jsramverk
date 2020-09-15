<template>
<main>
    <Nav />
    <h1>Daniel</h1>
    <p>{{ text1 }}</p><br>
    <p><img src="https://source.unsplash.com/5oZ9uVx7buc" width="500" alt="hockey"></p><br>
    <p>{{ text2 }}</p>
</main>
</template>

<script>
import Nav from './Nav.vue'

export default {
    name: 'Me',
    props: { },
    components: {
        Nav,
    },
    data() {
        return {
            text1: "Hej! Mitt namn är Daniel, jag är 23 år gammal i skrivande stund. Jag är född och uppvuxen i Täby, en kommun som ligger en mil norr om stockholm. Täby centrum var känt som nordens största handelsplats men nu är det mall of scandinavia.",
            text2: "Jag har ett stort teknikintresse där datorspel och programmering är favoriter. Jag är även ett stort hockeyfan och hejar på Djurgården. Jag har följt Djurgården hockey sedan jag var liten och följer alla matcher på tv. Jag åker även in till hovet och ser några matcher på plats varje år."
        }
    }
}
</script>
