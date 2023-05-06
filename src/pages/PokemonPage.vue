<template>
    <div v-if="!pokemon" class="loading-spiner"></div>
    <div v-else class="container-app">
        <h1>Quien es este Pokemon ?</h1>
        <!-- img -->
        <PokemonPicture :pokemonId="pokemon.id" :showPokemon="showPokemon" />
        <!-- Opciones -->
        <PokemonOptions :pokemons="pokemonArr" @selection="checkAnswer" />
 
        <template v-if="showAnswer">
            <h2>{{ message }}</h2>
        </template>
    </div>
</template>

<script>
import PokemonPicture from '@/components/PokemonPicture'
import PokemonOptions from '@/components/PokemonOptions'

import getPokemonOptions from '@/helpers/getPokemonOptions';

export default {
    name: 'PokemonPage',
    components: {
        PokemonPicture,
        PokemonOptions,
    },
    data() {
        return {
            pokemonArr: [],
            pokemon: null,
            showPokemon: false,
            showAnswer: false,
            message: ''
        }
    },
    methods: {
        newGame() {
            this.message = ''
            this.showPokemon = false
            this.showAnswer = false
            this.pokemon= null
            this.mixPokemonsArray()
        },
        async mixPokemonsArray() {
            this.pokemonArr = await getPokemonOptions()

            const rndInt = Math.floor(Math.random() * this.pokemonArr.length)
            this.pokemon = this.pokemonArr[rndInt]

        },
        checkAnswer(pokemonId) {
            this.showAnswer = true
            if (pokemonId === this.pokemon.id) {
                this.showPokemon = true
                this.showAnswer = true
                setTimeout(() => {
                    this.newGame()
                }, 2000)
                this.message = `Correcto: El pokemon es ${this.pokemon.name}`
            } else {
                setTimeout(() => {
                    this.newGame()
                },700)
                this.message = `Incorrecto: El pokemon es ${this.pokemon.name}`
            }

        }
    },
    mounted() {
        this.mixPokemonsArray()
    }
}
</script>

<style scoped>
.container-app{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    gap: 20px;
    /* transform: scale(1); */
}
.loading-spiner {
    border: 8px solid #f3f3f3;
    /* Light grey */
    border-top: 8px solid #3498db;
    /* Blue */
    border-radius: 50%;
    width: 50px;
    height: 50px;
    animation: spin 2s linear infinite;
    margin: 0 auto;
    margin-top: 50px;
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}
</style>