<template>
  <div class="app">
    <section>
      <img
        src="./vue.svg"
        alt="Vue"
      >
      <h1>{{ greeting }}</h1>
      <button v-on:click="say('what')">Say what</button>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      greeting: 'Hello Vue!'
    }
  },
  methods: {
    say: function (message) {
      alert(message)
    }
  }
}
</script>

<style>
  h1 {
    font-size: 2em;
    color: #42b983;
    text-align: center;
  }

  img {
    height: 100px;
    width: auto;
    margin: 0 auto;
    display: block;
  }
</style>
