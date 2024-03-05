<script>
import TopGame from './TopGame.vue'
import OptionsGame from './OptionsGame.vue'
import ProductsGame from './ProductsGame.vue'
export default {
    data() {
        return {
            gameProduct: [
                { productCategory: "account", productImg: "/src/assets/game-products/cs2products/cs2account1.svg", productCost: "1050 ₽", productDescription: "Аккаунт кс 2 с праймом" },
                { productCategory: "account", productImg: "/src/assets/game-products/cs2products/cs2account1.svg", productCost: "1250 ₽", productDescription: "Аккаунт кс 2 без прайма" },
                { productCategory: "account", productImg: "/src/assets/game-products/cs2products/cs2account1.svg", productCost: "950 ₽", productDescription: "Аккаунт кс 2 без прайма со скинами" },
                { productCategory: "account", productImg: "/src/assets/game-products/cs2products/cs2account1.svg", productCost: "1750 ₽", productDescription: "Аккаунт кс 2 с праймом и скинами" },
                { productCategory: "account", productImg: "/src/assets/game-products/cs2products/cs2account1.svg", productCost: "12050 ₽", productDescription: "Аккаунт кс 2 с праймом и ножом" },
            ],
        };
    },
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