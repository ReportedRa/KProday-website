<script></script>

<template>
    <main>
        <aside class="cont-user">
            <div class="cont">
                <div class="kproday">
                    <span class="name">KP<span class="next-name">roday</span></span>
                </div>
                <div class="cont-nav">
                    <nav class="nav">
                        <a href="#">Профиль</a>
                        <a href="#">Добавить товар</a>
                        <a href="#">История покупок</a>
                    </nav>
                </div>
            </div>
            <a href="#" class="nav-text">Техническая поддержка</a>
        </aside>
        <div class="cont-profile-main">
            <div class="cont-profile">
                <div class="profile-header">
                    <img class="profile-header-img" src="" alt="">
                    <p>Aboba</p>
                </div>
                <div class="profile-settings">
                    <div class="profile-info">
                        <div class="info">
                            <p>Никнейм</p>
                            <input disabled type="text" placeholder="Aboba">
                        </div>
                        <div class="info">
                            <p>Email</p>
                            <input disabled type="text" placeholder="aboba@mail.ru">
                        </div>
                        <div class="info">
                            <p>Телефон</p>
                            <input disabled type="text" placeholder="8(954)123-45-68">
                        </div>
                    </div>
                    <div class="profile-password">
                        <div class="password">
                            <p>Старый пароль</p>
                            <input type="text" placeholder="Введите старый пароль">
                        </div>
                        <div class="password">
                            <p>Новый пароль</p>
                            <input type="text" placeholder="Введите новый пароль">
                        </div>
                        <div class="cont-button">
                            <button class="password-button">Изменить пароль</button>
                        </div>
                    </div>
                </div>
                <div class="cont-history">
                    <p>История покупок</p>
                    <div class="history-info">
                        <div class="history">
                            <img src="" alt="">
                            <p class="history-description">1050p</p>
                            <p class="history-cost">Аккаунт кс 2 с праймом</p>
                        </div>
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
    height: 100%;
}

.cont-user {
    display: flex;
    flex-direction: column;
    border-right: 2px solid #17171a;
    padding: 50px 60px;
    height: 820px;
    width: 322px;
    justify-content: space-between;
}

.kproday {
    padding-bottom: 40px;
}

.cont-nav {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 100%;
}

.nav {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
}

.nav a {
    font-family: var(--second-family);
    font-weight: 400;
    font-size: 26px;
    color: #fff;
    text-decoration: none;
}

.nav-text {
    font-family: var(--second-family);
    font-weight: 400;
    font-size: 18px;
    color: rgba(255, 255, 255, 0.7);
    text-decoration: none;
}

.cont-profile-main {
    width: 100%;
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
    width: 40%;
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
    width: 65%;
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
    width: 50%;
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
</style>