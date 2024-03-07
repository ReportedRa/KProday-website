import { defineStore } from "pinia";

export const useStore = defineStore('store', {
    state: () => ({
        gameID: "counter-strike-2", 
        search: "",
        option: "",
        productCards: [
            { productImage: "/src/assets/products/cs2product.svg", productTitle: "Counter Strike 2", productCategory: [ {id: 0, name: "Аккаунты", category: "accounts"},{id: 1, name: "Скины", category: "skins"},{id: 2, name: "Буст", category: "boost"},{id: 3, name: "Обучение", category: "training"},{id: 4, name: "Прочее", category: "others"},], productID: "counter-strike-2"},
            { productImage: "/src/assets/products/dota2product.svg", productTitle: "Dota 2", productCategory: [ {id: 0, name: "Аккаунты", category: "accounts"},{id: 1, name: "Скины", category: "skins"},{id: 2, name: "Буст", category: "boost"},{id: 3, name: "Обучение", category: "training"},{id: 4, name: "Прочее", category: "others"},], productID: "dota-2"},
            { productImage: "/src/assets/products/pubgproduct.svg", productTitle: "PUBG", productCategory: [ {id: 0, name: "Аккаунты", category: "accounts"},{id: 1, name: "Скины", category: "skins"},{id: 2, name: "Буст", category: "boost"},{id: 3, name: "Обучение", category: "training"},{id: 4, name: "Прочее", category: "others"},], productID: "pubg"},
            { productImage: "/src/assets/products/brawlproduct.svg", productTitle: "Brawl Stars", productCategory: [ {id: 0, name: "Аккаунты", category: "accounts"},{id: 1, name: "Скины", category: "skins"},{id: 2, name: "Буст", category: "boost"},{id: 3, name: "Обучение", category: "training"},{id: 4, name: "Прочее", category: "others"},], productID: "brawl-stars"},
        ],
        game: ["counter-strike-2", "dota-2", "pubg", "brawl-stars"],
        
    }),
    getters: {
        searchFilter() {
            let s = this.search
            return this.productCards.filter(card => {
                return card.productTitle.toLowerCase().includes(s.toLowerCase())
            })
        },
        gameIndex() {
            return this.game.indexOf(this.gameID)
        },
    },
    actions: {
        gameGetID(ID) {
            this.gameID = ID
        },
        gameGetCategory(option) {
            this.option = option
        }
    }
})