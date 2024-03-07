<script>
import { useStore } from '../folders/Store'
export default {
    setup() {
        const store = useStore();
        return { store }
    },
}
</script>

<template>
    <div class="cont-game-options">
        <div class="cont-game-option" v-for="option in store.productCards[store.gameIndex].productCategory">
            <div class="game-option">
                <router-link @click="store.gameGetCategory(option.category)"
                    :to="{ name: 'category', params: { category: option.category } }">{{
                        option.name
                    }}</router-link>
            </div>
        </div>
    </div>
</template>

<style>
.cont-game-options {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0px 94px;
    gap: 48px;
    border-bottom: 1px solid #363637;
    border-top: 1px solid #363637;
}

.game-option {
    padding: 20px 0px;
}

.game-option a {
    font-family: var(--font-family);
    font-weight: 400;
    font-size: clamp(1.25rem, 0.4637rem + 0.9677vw, 1.625rem);
    text-align: center;
    color: #8a898b;
    text-decoration: none;
    padding: 10px 40px;
    border-radius: 15px;
}

.game-option a:hover {
    background-color: #181824;
}

.game-a-clicked {
    background-color: #181824;
}


@media (max-width: 1628px) {
    .cont-game-options {
        gap: 40px;
    }
}

@media (max-width: 1447px) {
    .cont-game-options {
        gap: 1vw;
    }
}
</style>