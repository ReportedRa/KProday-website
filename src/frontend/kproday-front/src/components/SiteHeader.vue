<script>
import { useStore } from '../folders/Store'
export default {
    setup() {
        const store = useStore();
        return { store }
    },
    data() {
        return {
            isLoggedIn: this.store.isLoggedIn,
            isShow: this.store.isShow,
        }
    },
    methods: {
        openModal() {
            this.store.isShow = !this.store.isShow
        },
        openCart(){
            this.store.isShowCart = !this.store.isShowCart
        },
        logOut() {
            this.store.isLoggedIn = !this.store.isLoggedIn
            localStorage.removeItem("isLogged")
            localStorage.removeItem("nickname")
            localStorage.removeItem("email")
            localStorage.removeItem("balance")
        }
    }
}

</script>

<template>
    <header>
        <div class="cont-header">
            <div class="cont-name">
                <span class="name">KP<span class="next-name">roday</span></span>
            </div>
            <div class="cont-nav">
                <nav class="nav">
                    <a class="nav-a" href="#">Правила</a>
                    <a class="nav-a" href="#">Помощь</a>
                    <a class="nav-a" href="#">Отзывы</a>
                    <a class="nav-a" href="#">О компании</a>
                </nav>
            </div>
            <div class="cont-search">
                <div class="search-img">
                    <img src="../assets/search.svg" alt="">
                </div>
                <div>
                    <input v-model="store.search" type="text" class="search-input" placeholder="Поиск...">
                </div>
            </div>
            <div class="cont-user">
                <div class="user-img">
                    <a href="#" @click="openCart()"><img src="../assets/shoppingbag.svg" alt=""></a>
                </div>
                <div class="user-img">
                    <a href="#"><img src="../assets/userprofile.svg" alt=""></a>
                </div>
                <div class="dropdown" v-if="this.store.isLoggedIn == 'true'">
                    <button class="dropbtn"><img src="../assets/dropdown_menu.svg" alt=""></button>
                    <div class="dropdown-content">
                        <p class="nickname">{{this.store.nickname}}</p>
                        <a href="http://localhost:5173/user/profile">Профиль</a>
                        <a @click="logOut()" href="#">Выйти</a>
                    </div>
                </div>
                <div class="dropdown" v-if="this.store.isLoggedIn == 'false' || this.store.isLoggedIn == ''">
                    <button class="dropbtn"><img src="../assets/dropdown_menu.svg" alt=""></button>
                    <div class="dropdown-content">
                        <a @click="openModal()" href="#">Войти</a>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<style>
.cont-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #131217;
    padding: 25px 94px;
    border-bottom: 1px solid #363637;
}

.dropbtn {
    color: white;
    font-size: 16px;
    border: none;
    cursor: pointer;
    background-color: #131217;
    width: 25px;
    height: 42px;
}

.dropdown {
    position: relative;
    display: inline-block;
    width: 25px;
}

.dropdown-content {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
    right: 0;
    top: 40px;
}

.nickname {
    text-align: center;
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    font-size: 16px;
    font-family: Arial, Helvetica, sans-serif
}

.dropdown-content a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
}

.dropdown-content a:hover {
    background-color: #f1f1f1;
}

.dropdown:hover .dropdown-content {
    display: block;
}

.name {
    font-family: var(--second-family);
    font-weight: 400;
    font-size: 41px;
    text-align: center;
    color: #5dff94;
}

.next-name {
    color: #fff;
}

.nav-a {
    border-radius: 15px;
    padding: 10px 20px;
    text-decoration: none;
    font-family: var(--font-family);
    font-weight: 400;
    font-size: clamp(1rem, 0.8149rem + 0.2584vw, 1.125rem);
    color: #fff;
}

.nav-a:hover {
    color: #a4fdc2;
}



.cont-search {
    border-radius: 15px;
    padding: 10px 0px 10px 7px;
    background: #131217;
    display: flex;
    justify-content: flex-start;
    align-items: center;
}

.search-input {
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 20px;
    color: #d1d1d1;
    background-color: #131217;
    border: 0px;

}

.search-img {
    background: #131217;
    padding-right: 10px;
    padding-top: 3px;
}

.cont-user {
    display: flex;
    align-items: center;
    gap: 10px;
}

.user-img {
    width: 42px;
    height: 42px;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
