<template>
    <div class="options-container">
        <ul>
            <li v-for="pokemon in pokemons" 
            :key="pokemon.id" 
            @click="$emit('selection', pokemon.id)">
            {{ pokemon.name }}
            </li>
        </ul>
    </div>
    <!-- <Button label="cuchi" class="dsd" severity="warning" raised icon="pi pi-plus-circle" iconPos="right" size="small" /> -->
</template>
<script>

import Button from 'primevue/button'

export default {
    name: 'PokemonOptions',
    props: {
        pokemons: {
            type: Array,
            required: true
        },
    },
    emits: ['selection'],
    components: {
        Button
    },
}

</script>

<style scoped>
.options-container{
    margin-top: 20px;
}
ul {
    list-style-type: none;
}

li {
    /* background-color: white; */
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    cursor: pointer;
    color: white;
    background-color: rgb(76, 135, 246);
    margin-bottom: 25px;
    width: 200px;
    padding: 10px 0;
    box-shadow: 0 0 10px 6px rgba(0, 0, 0, 0.2);
    text-transform: capitalize;
    font-size: 16px;
    font-weight: bold;
}

li:hover {
    background-color: rgba(18, 99, 248, 0.9);
}
li:active {
    transform: scale(0.9);
}

.options-container {
    display: flex;
    justify-content: center;
}
</style>