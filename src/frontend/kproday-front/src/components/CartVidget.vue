<script>
import {useStore} from '../folders/Store'

export default {
    data(){
        return {
        }
    },
    methods: {
        closeCart() {
            this.store.isShowCart = !this.store.isShowCart
        }
    },
    setup(){
        const store = useStore()
        return {store}
    }
}

</script>

<template>
    <div class="cart-cont" v-show="this.store.isShowCart">
        <div class="cart">
            <div class="cart-close">
                <button @click="closeCart()">X</button>
            </div>
        <div class="cart-title">
            <p>Корзина</p>
        </div>
        <div class="cart-products">
            <div class="cart-product">
                <div class="cart-img">
                    <a href="#"><img src="../assets/cartdelete.svg" alt=""></a>
                </div>
                <div class="cart-cost">
                    <p>1050 P</p>
                </div>
                <div class="cart-dash">
                    <p>-</p>
                </div>
                <div class="cart-description">
                    <p>Аккаунт кс2 с чем то</p>
                </div>
            </div>
            <div class="cart-product">
                <div class="cart-img">
                    <a href="#"><img src="../assets/cartdelete.svg" alt=""></a>
                </div>
                <div class="cart-cost">
                    <p>1050 P</p>
                </div>
                <div class="cart-dash">
                    <p>-</p>
                </div>
                <div class="cart-description">
                    <p>Аккаунт кс2 с чем то</p>
                </div>
            </div>
        </div>
        <div class="cart-buy">
            <button class="buy-button"><span>Купить</span></button>
        </div>
    </div>
    </div>
</template>

<style>
.cart-cont{
    display: flex;
    justify-content: flex-end;
    z-index: 1;
    position: fixed;
    width: 100%;
}
.cart {
    display: flex;
    flex-direction: column;
    background-color: #25232D;
    width: 30%;
    border-bottom-left-radius: 15px;
}
.cart-title {
    display: flex;
    color: white;
    padding: 0px 30px;
    padding-bottom: 20px;
    justify-content: center;
    border-bottom: 1px solid #363637;
}
.cart-title p {
    font-family: var(--second-family);
    font-weight: 700;
    font-size: 40px;
    text-align: center;
    color: #fff;
}
.cart-products {
    padding: 10px 17px;
    display: flex;
    flex-direction: column;
}
.cart-close {
    display: flex;
    justify-content: end;
}
.cart-close button {
    color: red;
    background: #25232d;
    border: none;
    border: 1px solid red;
    border-radius: 70px;
    padding: 5px;
    width: 25px;
    vertical-align: middle;
    cursor: pointer;
    margin-right: 30px;
    margin-top: 30px
}
.cart-img {
    display: flex;
    padding-right: 10px;
}
.cart-img img{
    width: 100%;
    height: 100%;
}
.cart-product {
    display: flex;
    justify-content: center;
    align-items: center;
}
.cart-description p{
    font-family: var(--second-family);
    font-weight: 300;
    font-size: 20px;
    text-align: center;
    color: #fff;
}
.cart-dash {
    padding: 0px 10px;
}
.cart-dash p{
    font-family: var(--second-family);
    font-weight: 300;
    font-size: 20px;
    text-align: center;
    color: #fff;
}
.cart-cost p {
    font-family: var(--third-family);
    font-weight: 400;
    font-size: 20px;
    text-align: center;
    color: #5dff94;
}
.cart-buy {
    border-top: 1px solid #363637;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 0px;
}
.buy-button {
    border: 1px solid #5dff94;
    border-radius: 15px;
    padding: 12px 47px;
    background-color: #25232d;
    cursor: pointer;
}
.buy-button span {
    font-family: var(--second-family);
    font-weight: 700;
    font-size: 24px;
    text-align: center;
    color: #5dff94;
}
</style>