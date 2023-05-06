<template>
  <h3>Pokemon Picture</h3>
  <div class="pokemon-container">
    <img class="hidden-pokemon" :src="imgSrc" alt="Pokemon">
    <img v-if="showPokemon" class="fade-in" :src="imgSrc" alt="Pokemon">
  </div>
</template>

<script>
export default {
  name: 'PokemonPicture',
  props: {
    pokemonId: {
      type: Number,
      required: true
    },
    showPokemon: {
      type: Boolean,
      required: true,
      default: false
    }
  },
  computed: {
    imgSrc() {
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonId}.svg`
    }
  }
}
</script>

<style scoped>
.pokemon-container {
  height: 200px;
  animation: float 3s ease-in-out infinite;
}

img {
  height: 200px;
  position: absolute;
  width: 100vw;
  margin-top: 30px;
  margin-left: -50vw;
  user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;


}

.hidden-pokemon {
  filter: brightness(0);
}

@keyframes float{
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-40px);
  }
  100% {
    transform: translateY(0px);
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .image-container {
    width: 50%;
  }
}

@media (min-width: 1025px) {
  .image-container {
    width: 30%;
  }
}
</style>