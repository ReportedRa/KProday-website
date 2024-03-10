<script>
import TopGame from './TopGame.vue'
import OptionsGame from './OptionsGame.vue'
import ProductsGame from './ProductsGame.vue'
export default {
    components: {
        TopGame,
        OptionsGame,
        ProductsGame,
    },
}
</script>

<template>
    <main>
        <div class="cont-game">
            <top-game></top-game>
            <options-game></options-game>
            <products-game></products-game>
        </div>
    </main>
</template>

<style></style>