<script>
export default {
    data() {
        return {
            gameImage: "/src/assets/game-products/cs2back.svg",
            gameName: "Counter Strike 2",
            gameLogo: "/src/assets/game-products/cs2logo.svg",
        }
    }
}
</script>

<template>
    <div class="cont-top-game">
        <div class="top-game-arrow">
            <img src="../assets/arrowBack.svg" alt="">
        </div>
        <div class="top-game-a">
            <router-link to="/">На главную</router-link>
        </div>
    </div>
    <div class="cont-game-img">
        <div class="game-img">
            <img :src="gameImage" alt="">
        </div>
    </div>
    <div class="cont-game-info">
        <div class="game-logo">
            <img class="game-logo-img" :src="gameLogo" alt="">
        </div>
        <div class="game-name">
            <span>{{ gameName }}</span>
        </div>
    </div>
</template>

<style>
.cont-top-game {
    display: flex;
    align-items: center;
    padding: 20px 94px;
}

.top-game-arrow {
    display: flex;
    padding-right: 10px;
}

.top-game-a a {
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 18px;
    text-align: center;
    color: #fff;
}

.cont-game-img {
    display: flex;
    justify-content: center;
    padding: 0px 94px;
}

.game-img {
    width: 100%;
}

.game-img img {
    width: 100%;
    height: 100%;
}

.cont-game-info {
    display: flex;
    padding: 30px 94px;
    align-items: center;

}

.game-logo {
    display: flex;
}

.game-logo img {
    width: 100%;
    height: 100%;
}

.game-name {
    padding-left: 15px;
}

.game-name span {
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 36px;
    text-align: center;
    color: #fff;
}
</style>