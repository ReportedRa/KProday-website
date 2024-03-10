<script>
import { useStore } from '../folders/Store'
import axios from 'axios'
export default {
    data() {
        return {
            gameCategories: [],
            categoryIds: []
        }
    },
    setup() {
        const store = useStore();
        return { store }
    },
    async created() {
        if (this.gameCategories.length == 0) {
            try {
                const id = this.$route.params.id;
                const res = await axios.get(`http://localhost:5001/api/game/${id}`);
                this.gameCategories = res.data[0].game_category;
                this.categoryIds = res.data[0].category_id;
            } catch (e) {
                console.log(e);
            }
        }
    }
}
</script>

<template>
    <div class="cont-game-options" v-if="gameCategories.length">
        <div class="cont-game-option" v-for="(category, index) in gameCategories">
            <div class="game-option">
                <router-link @click="store.gameGetCategory(categoryIds[index])"
                    :to="{ name: 'category', params: { category: categoryIds[index] } }">{{
                        category
                    }}</router-link>
            </div>
        </div>
    </div>
    <div v-else class="loading">
        <p>Loading...</p>
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

.loading {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    height: 400px;
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