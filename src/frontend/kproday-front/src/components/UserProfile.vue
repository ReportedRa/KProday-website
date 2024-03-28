<script>
import {useStore} from '../folders/Store'
import axios from 'axios'

export default {
    data(){
        return {
            oldPassword: "",
            newPassword: "",
            message: ""
        }
    },
    setup() {
        const store = useStore()
        return {store}
    },
    mounted() {
        this.store.nickname = localStorage.getItem("nickname")
        this.store.email = localStorage.getItem("email")
        this.store.balance = localStorage.getItem("balance")
    },
    methods: {
        async updatePasswordUser() {
            try {
                const res = await axios.post('http://localhost:5001/api/user/update-password', {
                email: this.store.email,
                oldPassword: this.oldPassword,
                newPassword: this.newPassword
            })
            this.message = res.data.message
            console.log(res.data.message)
            }
            catch (error){
                console.log(error)
                this.message = "Ошибка при обновлении пароля"
            }
        }
    }
}
</script>

<template>
    <main>
        <aside class="cont-user-main">
            <div class="cont">
                <div class="kproday">
                    <span class="name">KP<span class="next-name">roday</span></span>
                </div>
                <div class="cont-user-nav">
                    <nav class="nav-cont-a">
                        <a href="#">Профиль</a>
                        <a href="#">Добавить товар</a>
                        <a href="#">История покупок</a>
                        <a href="#">Тех. поддержка</a>
                    </nav>
                </div>
            </div>
        </aside>
        <div class="cont-profile-main">
            <div class="cont-profile">
                <div class="profile-header">
                    <img class="profile-header-img" src="" alt="">
                    <p>{{this.store.nickname}}</p>
                </div>
                <div class="profile-settings">
                    <div class="profile-info">
                        <div class="info">
                            <p>Никнейм</p>
                            <input disabled type="text" :placeholder="this.store.nickname">
                        </div>
                        <div class="info">
                            <p>Email</p>
                            <input disabled type="text" :placeholder="this.store.email">
                        </div>
                        <div class="info">
                            <p>Баланс</p>
                            <input disabled type="text" :placeholder="this.store.balance">
                        </div>
                    </div>
                    <div class="profile-password">
                        <div class="password">
                            <p>Старый пароль</p>
                            <input v-model="oldPassword" type="text" placeholder="Введите старый пароль">
                        </div>
                        <div class="password">
                            <p>Новый пароль</p>
                            <input v-model="newPassword" type="text" placeholder="Введите новый пароль">
                        </div>
                        <p class="error-mes" v-if="this.message">{{message}}</p>
                        <div class="cont-button">
                            <button @click.prevent="updatePasswordUser()" class="password-button">Изменить пароль</button>
                        </div>
                    </div>
                </div>
                <p class="p">История покупок</p>
                <div class="cont-history">
                        <div class="history">
                            <img src="../assets/game-products/cs2products/cs2account1.svg" alt="">
                            <p class="history-cost">1050p</p>
                            <p class="history-description">Аккаунт кс 2 с праймом</p>
                        </div>
                        <div class="history">
                            <img src="../assets/game-products/cs2products/cs2account1.svg" alt="">
                            <p class="history-cost">1050p</p>
                            <p class="history-description">Аккаунт кс 2 с праймом</p>
                        </div>
                        <div class="history">
                            <img src="../assets/game-products/cs2products/cs2account1.svg" alt="">
                            <p class="history-cost">1050p</p>
                            <p class="history-description">Аккаунт кс 2 с праймом</p>
                        </div>
                        <div class="history">
                            <img src="../assets/game-products/cs2products/cs2account1.svg" alt="">
                            <p class="history-cost">1050p</p>
                            <p class="history-description">Аккаунт кс 2 с праймом</p>
                        </div>
                </div>
            </div>
        </div>
    </main>
</template>

<style>
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

main {
    display: flex;
}

.cont-user-main {
    display: flex;
    flex-direction: column;
    border-right: 2px solid #17171a;
    padding: 50px 60px;
    height: 100%;
    width: 200px;
    justify-content: space-between;
}

.kproday {
    padding-bottom: 40px;
}

.cont-user-nav {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    height: 100%;
}

.nav-cont-a {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
}

.nav-cont-a a {
    font-family: var(--second-family);
    font-weight: 400;
    font-size: 20px;
    color: #fff;
    text-decoration: none;
    width: 100%;
    text-align: left;
}

.nav-cont-a a:hover {
    color: #5dff94;
}

.nav-text {
    font-family: var(--second-family);
    font-weight: 400;
    font-size: 18px;
    color: rgba(255, 255, 255, 0.7);
    text-decoration: none;
}

.cont-profile {
    padding: 50px 100px;
    display: flex;
    flex-direction: column;
    gap: 50px;
}

.profile-header {
    display: flex;
    align-items: flex-start;
    gap: 20px;
}

.profile-header p {
    font-family: var(--second-family);
    font-weight: 400;
    font-size: 20px;
    text-align: center;
    color: #686868;
}

.profile-header-img {
    width: 120px;
    height: 120px;
    border-radius: 100%;
    fill: #d9d9d9;
}

.profile-settings {
    display: flex;
    justify-content: space-between;
    align-items: space-between;
    height: 194px
}

.profile-password {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 50%;
}

.profile-info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 40%;
}

.profile-info p {
    font-family: var(--second-family);
    font-weight: 400;
    font-size: 20px;
    color: #fff;
}

.info {
    display: flex;
    justify-content: space-between;
    height: 100%;
    align-items: center;
}

.info input {
    margin-left: 20px;
    background: #383543;
    border-radius: 10px;
    border: none;
    padding: 10px 20px;
    height: 26px;
    width: 55%;
}

.profile-password p {
    font-family: var(--second-family);
    font-weight: 400;
    font-size: 20px;
    color: #fff;
}

.password {
    display: flex;
    justify-content: space-between;
    height: 100%;
    align-items: center;
}

.password input {
    margin-left: 20px;
    background: #383543;
    border-radius: 10px;
    border: none;
    padding: 10px 20px;
    height: 26px;
    width: 100%;
    width: 45%;
    color: #898888;
    font-size: 16px;
}

.cont-button {
    display: flex;
    justify-content: flex-end;
}

.password-button {
    border: 1px solid #5dff94;
    border-radius: 15px;
    padding: 10px 25px 10px 25px;
    background-color: #131217;
    font-family: var(--second-family);
    font-weight: 400;
    font-size: 18px;
    text-align: center;
    color: #5dff94;
    margin: 10px 0px;
    transition: all 0.1s;
}

.password-button:hover {
    opacity: 50%;
}

.cont-history {
    display: grid;
    height: 100%;
    width: 100%;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(1, 1fr);
    gap: 20px
}

.p {
    font-family: var(--second-family);
    font-weight: 400;
    font-size: 20px;
    color: #fff;
}

.history {
    width:200px;
    
}

.history img {
    width: 200px;
}

.history-description {
    font-family: var(--second-family);
    font-weight: 400;
    font-size: 20px;
    color: #fff;
}

.cont {
    width: 100%;
    height: 100%;
}

.history-cost {
    font-family: var(--third-family);
    font-weight: 400;
    font-size: 18px;
    color: #5dff94;
}

input::placeholder {
    font-family: var(--second-family);
    font-weight: 400;
    font-size: 14px;
    color: #8a8989;
}

.error-mes {
    font-family: var(--second-family);
    font-weight: 400;
    font-size: 16px;
    text-align: center;
    color: #686868;
}
</style>