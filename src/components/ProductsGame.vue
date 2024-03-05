<script>
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
        }
    },
}
</script>

<template>
    <div class="cont-game-products">
        <div class="product" v-for="product in gameProduct">
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