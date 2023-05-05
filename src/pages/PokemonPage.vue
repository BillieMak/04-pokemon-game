<template>
    <h1>Quien es este Pokemon</h1>
    <!-- img -->
    <PokemonPicture />
    <!-- Opciones -->
    <PokemonOptions />
</template>

<script>
import PokemonPicture from '@/components/PokemonPicture'
import PokemonOptions from '@/components/PokemonOptions'

export default {
    name: 'PokemonPage',
    components: {
        PokemonPicture,
        PokemonOptions
    }
}
</script>