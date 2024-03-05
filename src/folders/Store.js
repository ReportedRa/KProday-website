import { defineStore } from "pinia";

export const useStore = defineStore('store', {
    state: () => ({
        gameID: '', 
        search: "",
        productCards: [
            { productImage: "/src/assets/products/cs2product.svg", productTitle: "Counter Strike 2", productCategory: ["Аккаунты", "Скины", "Буст", "Обучение", "Прочее"], productID: "counter-strike-2" },
            { productImage: "/src/assets/products/dota2product.svg", productTitle: "Dota 2", productCategory: ["Аккаунты", "Скины", "Буст", "Обучение", "Прочее"], productID: "dota-2" },
            { productImage: "/src/assets/products/pubgproduct.svg", productTitle: "PUBG", productCategory: ["Аккаунты", "Скины", "Буст", "Обучение", "Прочее"], productID: "pubg" },
            { productImage: "/src/assets/products/brawlproduct.svg", productTitle: "Brawl Stars", productCategory: ["Аккаунты", "Скины", "Буст", "Обучение", "Прочее"], productID: "brawl-stars" },
        ],
        games: ["Counter Strike 2", "Dota 2", "PUBG", "Brawl Stars"],
    }),
    getters: {
        searchFilter() {
            let s = this.search
            return this.productCards.filter(card => {
                return card.productTitle.toLowerCase().includes(s.toLowerCase())
                
            })
        },
    },
    actions: {
        gameGetID(ID) {
            this.gameID = ID
            console.log(this.gameID)
        }
    }
})