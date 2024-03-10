<script>
import { useStore } from '../folders/Store'
export default {
    setup() {
        let store = useStore()
        return { store }
    },
    data() {
        return {
            accounts: [
                { productGame: "counter-strike-2", productImg: "/src/assets/game-products/cs2products/cs2account1.svg", productCost: "1050 ₽", productDescription: "Аккаунт кс 2 с праймом" },
                { productGame: "dota-2", productImg: "/src/assets/game-products/cs2products/cs2account1.svg", productCost: "200 ₽", productDescription: "Дота 2 с баном за овер" },
                { productGame: "counter-strike-2", productImg: "/src/assets/game-products/cs2products/cs2account1.svg", productCost: "950 ₽", productDescription: "Аккаунт кс 2 без прайма со скинами" },
                { productGame: "dota-2", productImg: "/src/assets/game-products/cs2products/cs2account1.svg", productCost: "1750 ₽", productDescription: "Аккаунт с 1745 ммр" },
                { productGame: "counter-strike-2", productImg: "/src/assets/game-products/cs2products/cs2account1.svg", productCost: "12050 ₽", productDescription: "Аккаунт кс 2 с праймом и ножом" },],

            skins: [
                { productGame: "counter-strike-2", productImg: "/src/assets/game-products/cs2products/cs2account1.svg", productCost: "500 ₽", productDescription: "АК-47 Сланец" },
                { productGame: "dota-2", productImg: "/src/assets/game-products/cs2products/cs2account1.svg", productCost: "5000 ₽", productDescription: "Аркана на пуджа" },]
        }
    },
    computed: {
        myArray() {
            return this[this.store.option]
        },
        gameFilter() {
            let o = this.store.gameID
            try {
                return this.myArray.filter(product => {
                    return product.productGame.toLowerCase().includes(o.toLowerCase())
                })
            } catch (e) {
                console.log(e)
            }

        },
    }
}
</script>

<template>
    <div class="cont-game-products">
        <div class="product" v-for="product in gameFilter">
            <div class="product-img">
                <img :src="product.productImg" alt="">
            </div>
            <div class="product-cost">
                <span>{{ product.productCost }}</span>
            </div>
            <div class="product-description">
                <a href="#">{{ product.productDescription }}</a>
            </div>
        </div>
    </div>
</template>

<style>
.cont-game-products {
    display: flex;
    padding: 30px 89px;
    justify-content: flex-start;
    flex-wrap: wrap;
}

.product {
    display: flex;
    flex-direction: column;
    width: 25%;

}

.product-img img {
    width: 97%;
}

.product-cost {
    padding-top: 5px;
}

.product-cost span {
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 24px;
    text-align: center;
    color: #5dff94;
    padding-left: 5px;
}

.product-description a {
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 22px;
    text-align: center;
    color: #fff;
    padding-left: 7px;
    text-decoration: none;
}

.product-description a:hover {
    color: #a2f5bd;
}

@media (max-width: 1628px) {
    .product {
        width: 33%;
        max-width: 600px;
    }

    .cont-game-products {
        padding: 30px 72px 30px 87px;
    }
}

@media (max-width: 1447px) {
    .product {
        width: 50%;
        max-width: 632px;
    }

    .cont-game-products {
        padding: 20px 84px 50px 84px;
    }
}
</style>