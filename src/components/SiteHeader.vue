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
                    <a href="#"><img src="../assets/shoppingbag.svg" alt=""></a>
                </div>
                <div class="user-img">
                    <a href="#"><img src="../assets/userprofile.svg" alt=""></a>
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
