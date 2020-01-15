<template>
  <div class="app" id="root">
    <section>
    </section>
    <footer class="main">
      <div>
        <h1>{{ greeting }}</h1>
      </div>
      <div>
        <button v-on:click="say('what')">Say what</button>
      </div>
      <div>
        Hello footer
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      greeting: 'Hello Footer!'
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
  .app {
    width: 100%;
    height: 100%;
    background: white;
    padding: 0;
  }
</style>
