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
.dsd  span{
    font-size: 1.5rem;
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
    margin-bottom: 15px;
    width: 200px;
    padding: 8px 0;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

li:hover {
    background-color: rgba(18, 99, 248, 0.9);
}

.options-container {
    display: flex;
    justify-content: center;
}
</style>