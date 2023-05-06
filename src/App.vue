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
  color: rgb(241, 241, 241);
  /* margin-top: 60px; */
  height: 100vh;
  background-image: linear-gradient(285deg, rgba(57, 57, 57, 0.04) 0%, rgba(57, 57, 57, 0.04) 25%,rgba(126, 126, 126, 0.04) 25%, rgba(126, 126, 126, 0.04) 50%,rgba(80, 80, 80, 0.04) 50%, rgba(80, 80, 80, 0.04) 75%,rgba(117, 117, 117, 0.04) 75%, rgba(117, 117, 117, 0.04) 100%),linear-gradient(333deg, rgba(26, 26, 26, 0.04) 0%, rgba(26, 26, 26, 0.04) 25%,rgba(154, 154, 154, 0.04) 25%, rgba(154, 154, 154, 0.04) 50%,rgba(218, 218, 218, 0.04) 50%, rgba(218, 218, 218, 0.04) 75%,rgba(91, 91, 91, 0.04) 75%, rgba(91, 91, 91, 0.04) 100%),linear-gradient(45deg, rgba(14, 14, 14, 0.04) 0%, rgba(14, 14, 14, 0.04) 25%,rgba(216, 216, 216, 0.04) 25%, rgba(216, 216, 216, 0.04) 50%,rgba(44, 44, 44, 0.04) 50%, rgba(44, 44, 44, 0.04) 75%,rgba(111, 111, 111, 0.04) 75%, rgba(111, 111, 111, 0.04) 100%),linear-gradient(251deg, rgba(27, 27, 27, 0.04) 0%, rgba(27, 27, 27, 0.04) 25%,rgba(107, 107, 107, 0.04) 25%, rgba(107, 107, 107, 0.04) 50%,rgba(167, 167, 167, 0.04) 50%, rgba(167, 167, 167, 0.04) 75%,rgba(34, 34, 34, 0.04) 75%, rgba(34, 34, 34, 0.04) 100%),linear-gradient(63deg, rgba(114, 114, 114, 0.04) 0%, rgba(114, 114, 114, 0.04) 25%,rgba(16, 16, 16, 0.04) 25%, rgba(16, 16, 16, 0.04) 50%,rgba(190, 190, 190, 0.04) 50%, rgba(190, 190, 190, 0.04) 75%,rgba(159, 159, 159, 0.04) 75%, rgba(159, 159, 159, 0.04) 100%),linear-gradient(90deg, rgb(44, 69, 142),rgb(133, 17, 234));
  }
</style>
