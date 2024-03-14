<script>
import { useStore } from '../folders/Store';
import { onMounted } from 'vue';

export default {
    setup() {
        let store = useStore()
        onMounted(() => {
            const storageValue = localStorage.getItem("gameID")
            if (storageValue) {
                store.gameID = storageValue
            }
            else {
                const query = this.$route.params.id;
                if (query) {
                    store.gameID = query
                    localStorage.setItem("gameID", query)
                }
            }
        })
        return { store }
    },
}
</script>

<template>
    <div class="cont-top-game">
        <div class="top-game-arrow">
            <img src="../assets/arrowBack.svg" alt="">
        </div>
        <div class="top-game-a">
            <router-link @click="store.nullCategory" to="/">На главную</router-link>
        </div>
    </div>
    <div class="cont-game-img" v-if="store.gameIndex != -1 && store.gameID != null">
        <div class="game-img">
            <img :src="store.cardProduct[store.gameIndex].game_background" alt="">
        </div>
    </div>
    <div class="cont-game-info" v-if="store.gameIndex != -1 && store.gameID != null">
        <div class="game-logo">
            <img class="game-logo-img" :src="store.cardProduct[store.gameIndex].game_logo" alt="">
        </div>
        <div class="game-name" v-if="store.gameIndex != -1 && store.gameID != null">
            <span>{{ store.cardProduct[store.gameIndex].game_title }}</span>
        </div>
    </div>
    <div class="null" v-else>
        <p>Loading...</p>
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