<template>
  <PokemonPage />
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import PokemonPage from './pages/PokemonPage'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    PokemonPage
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
  height: 100vh;
  background-color: red;
}
</style>
