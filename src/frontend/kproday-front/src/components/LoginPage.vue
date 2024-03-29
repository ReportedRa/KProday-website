<script>
import { useStore } from '../folders/Store'
import axios from 'axios'
export default {
    setup() {
        const store = useStore()
        return { store }
    },
    data() {
        return {
            nickname: "",
            emailRegister: "",
            passwordRegister: "",
            confirmPassword: "",
            email: "",
            password: "",
            message: "",
        }
    },
    computed: {
        checkPassword() {
            return this.passwordRegister !== this.confirmPassword;
        },
        showCheckPasswordError() {
            return this.checkPassword && (this.passwordRegister !== '' && this.confirmPassword !== '');
        },
    },
    mounted() {
        const logged = localStorage.getItem("isLogged");
        if (logged == true) {
            this.store.isLoggedIn = logged;
            this.store.nickname = localStorage.getItem("nickname");
            this.store.email = localStorage.getItem("email");
        }
    },
    methods: {
        closeModal() {
            this.store.isShow = !this.store.isShow
        },
        changeModalType() {
            this.store.isType = !this.store.isType
        },
        async createUser() {
            if (this.checkPassword) {
                return
            }
            try {
                const response = await axios.post('http://localhost:5001/api/user', {
                    nickname: this.nickname,
                    email: this.email,
                    password: this.passwordRegister
                });
                console.log(response.data);
            } catch (error) {
                console.error(error);
            }

        },
        async login() {
            try {
                const res = await axios.post('http://localhost:5001/api/login', {
                    email: this.email,
                    password: this.password
                }).then((res) => {
                    if (res.data.isLoggedIn) {
                        this.store.isLoggedIn = res.data.isLoggedIn
                        this.message = res.data.message
                        this.store.nickname = res.data.user.nickname
                        localStorage.setItem("isLogged", res.data.isLoggedIn)
                        localStorage.setItem("nickname", res.data.user.nickname)
                        localStorage.setItem("email", res.data.user.email)
                        localStorage.setItem("balance", res.data.user.balance)
                        localStorage.setItem("user_id", res.data.user.user_id)
                        console.log(res.data)
                        alert(res.data.message)
                        this.closeModal()
                        this.email = ""
                        this.password = ""
                    } else {
                        this.errorMessage = res.data.error
                    }
                })
            } catch (error) {
                if (error.res) {
                    this.errorMessage = error.res.data.error
                } else {
                    console.error(error);
                }
            }
        }
    }
}
</script>

<template>
    <div v-show="this.store.isShow" class="modal-main" @click.self="closeModal()">
        <div v-if="this.store.isType == false" class="modal-register">
            <div class="modal-close">
                <button @click="closeModal()">X</button>
            </div>
            <div class="modal-title">
                <p>Регистрация</p>
            </div>
            <div class="modal-input">
                <input v-model="nickname" type="text" placeholder="Введите никнейм">
                <input v-model="emailRegister" type="email" placeholder="Введите почту">
                <input v-model="passwordRegister" type="password" placeholder="Введите пароль">
                <input v-model="confirmPassword" type="password" placeholder="Подтвердите пароль">
            </div>
            <p v-if="showCheckPasswordError" class="error">Пароли не совпадают</p>
            <div class="modal-button">
                <button :disabled="checkPassword" @click="createUser()">Зарегистироваться</button>
            </div>
            <div class="modal-text">
                <p>Уже есть аккаунт?</p>
                <a @click="changeModalType()" href="#">Войти</a>
            </div>
        </div>
        <div v-show="this.store.isShow" v-else class="modal-login">
            <div class="modal-close">
                <button @click="closeModal">X</button>
            </div>
            <div class="modal-title">
                <p>Вход</p>
            </div>
            <div class="modal-input">
                <input v-model="email" type="email" placeholder="Введите почту">
                <input v-model="password" type="password" placeholder="Введите пароль">
            </div>
            <div class="modal-button">
                <button @click="login()">Войти</button>
            </div>
            <div class="modal-text">
                <p>Нет аккаунта?</p>
                <a @click="changeModalType()" href="#">Зарегистироваться</a>
            </div>
        </div>
    </div>
</template>

<style>
.modal-main {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.5);
}

.modal-register {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #25232d;
    border-radius: 15px;
    padding: 30px;
}

.modal-login {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #25232d;
    border-radius: 15px;
    padding: 30px;
}

.modal-close {
    display: flex;
    justify-content: flex-end;
    width: 100%;
    padding-right: 10px;
}

.modal-close button {
    color: red;
    background: #25232d;
    border: none;
    border: 1px solid red;
    border-radius: 70px;
    padding: 5px;
    width: 25px;
    vertical-align: middle;
    cursor: pointer;
}

.modal-close button:hover {
    opacity: 50%;
}

.modal-title p {
    font-family: var(--second-family);
    font-weight: 400;
    font-size: 25px;
    text-align: center;
    color: #fff;
    padding-bottom: 20px;
}

.modal-input {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 10px;
}

.modal-input input {
    background: #383543;
    border-radius: 9px;
    width: 380px;
    height: 50px;
    border: none;
    padding-left: 10px;
    color: #898888;
    font-size: 16px;
}

.modal-input input::placeholder {
    font-family: var(--second-family);
    font-weight: 400;
    font-size: 16px;
    color: #686868;
}

.modal-button button {
    border: 1px solid #5dff94;
    border-radius: 15px;
    padding: 10px 25px 10px 25px;
    background: #25232d;
    font-family: var(--second-family);
    font-weight: 400;
    font-size: 18px;
    text-align: center;
    color: #5dff94;
    margin: 10px 0px;
    transition: all 0.1s;
}

.modal-button:hover {
    opacity: 50%;
}

.modal-text {
    display: flex;
    align-items: center;
}

.modal-text a {
    font-family: var(--second-family);
    font-weight: 400;
    font-size: 16px;
    text-align: center;
    color: #5dff94;
    text-decoration: none;
}

.modal-text p {
    font-family: var(--second-family);
    font-weight: 400;
    font-size: 16px;
    text-align: center;
    color: #686868;
}

.modal-text a:hover {
    text-decoration: underline;
}

.error {
    font-family: var(--second-family);
    font-weight: 400;
    font-size: 16px;
    text-align: center;
    color: #686868;
}
</style>