<script>
import { useStore } from '../folders/Store'

export default {
    data() {
        return {

        }
    },
    setup() {
        const store = useStore();
        return { store }
    }
}
</script>

<template>
    <div class="cont-products">
        <div class="cont-for-products">
            <div class="product" v-for="card in store.searchFilter">
                <div class="product-img">
                    <img :src="card.productImage" alt="" class="">
                </div>
                <div class="product-title">
                    <router-link @click="store.gameGetID(card.productID)"
                        :to="{ name: 'game', params: { id: card.productID } }">{{
                            card.productTitle
                        }}</router-link>
                </div>
                <div class="product-categories">
                    <a href="#" v-for="category in card.productCategory">{{ category }}</a>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.cont-products {
    padding: 20px 91px 50px 95px;
    display: flex;
}

.product {
    padding-bottom: 20px;
    flex-grow: 0;
    width: 25%;
}

.cont-for-products {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    width: 100%;
}

.product-img {
    display: flex;
    justify-content: center;
}

.product-img img {
    width: 97%;
    height: 100%;
}

.product-title {
    padding: 10px 0px 0px 3px;
}

.product-title a {
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 23px;
    text-align: center;
    color: #fff;
    text-decoration: none;
}

.product-title a:hover {
    color: #b6f8b6;
}

.product-categories {
    display: flex;
    flex-wrap: wrap;
    padding: 2px 0px 0px 3px;
}

.product-categories span,
a {
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 14px;
    text-align: center;
    color: #fff;
    padding: 3px 3px;
}

.product-categories a:hover {
    color: #b6f8b6;
}

@media (max-width: 1628px) {
    .product {
        width: 33%;
        max-width: 600px;
    }

    .cont-products {
        padding: 20px 72px 50px 87px;
    }
}

@media (max-width: 1447px) {
    .product {
        width: 50%;
        max-width: 632px;
    }

    .cont-products {
        padding: 20px 84px 50px 84px;
    }
}
</style>