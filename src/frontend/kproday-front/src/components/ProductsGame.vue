<script>
import { useStore } from '../folders/Store'
import axios from 'axios'

export default {
    data() {
        return {
            productArray: [],
            category: this.store.option,
            product_id: null
        }
    },
    methods: {
        async updateCategory() {
            if (this.store.option) {
                try {
                    const id = this.$route.params.id;
                    const category = this.store.option;
                    const res = await axios.get(`http://localhost:5001/api/game/${id}/${category}`).then((res) => {
                        this.productArray = res.data
                        console.log(res.data)
                    })
                } catch (e) {
                    console.log(e);
                }
            }
            else {
                try {
                    const id = this.$route.params.id;
                    const res = await axios.get(`http://localhost:5001/api/products/${id}`).then((res) => {
                        this.productArray = res.data
                        console.log(res.data)
                    })
                } catch (e) {
                    console.log(e);
                }
            }
        },
        async addToCart(id) {
            const user_id = this.store.user_id
            const product_id = id
            console.log(user_id, product_id)
            if (user_id == null) {
                console.log('Пользователь не авторизован')
            }
            else {
                try {
                    const res = await axios.post(`http://localhost:5001/api/user/cart/add`, {
                    user_id: user_id,
                    product_id: product_id
                    }).then(res => {
                    console.log(res.data)
                    })
                }
                catch (error){
                    console.log(error)
                }
            }
        },
    },
    mounted() {
        this.updateCategory()
    },
    setup() {
        let store = useStore()
        return { store }
    },
    watch: {
        'store.option': {
            handler() {
                this.updateCategory()
            }
        }
    }
}
</script>

<template>
    <div class="cont-game-products" v-if="this.productArray.length">
        <div class="product" v-for="product in this.productArray">
            <div class="product-img">
                <img :src="product.product_img" alt="">
            </div>
            <div class="cont-cost-cart">
                <div class="product-cost">
                    <span>{{ product.product_cost }} ₽</span>
                </div>
                <div class="product-cart">
                    <a href="#" @click="addToCart(product.product_id)"><img class="cart-img" src="../assets/game-products/addtocart/addToCart.svg" alt=""></a>
                </div>
            </div>
            <div class="product-description">
                <a href="#">{{ product.product_description }}</a>
            </div>
        </div>
    </div>
    <div v-else class="null">
        <p>Ничего не найдено</p>
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

.null {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 100px 0px;
    width: 100%;
    font-size: 30px;
    color: white;
}

.cont-cost-cart {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.cart-img {
    width: 46px;
    height: 41px;
}

.product-img img {
    width: 97%;
}

.product-cost {
    padding-top: 5px;
    padding-left: 4px;
}

.product-cost span {
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 24px;
    text-align: center;
    color: #5dff94;
    padding-left: 5px;
}

.product-description {
    padding-left: 8px;
}

.product-description a {
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 22px;
    text-align: center;
    color: #fff;
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