import { defineStore } from "pinia";
import axios from 'axios'

export const useStore = defineStore('store', {
    state: () => ({
        gameID: "", 
        search: "",
        cardProduct: [],
        option: "",
        game: ["counter-strike-2", "dota-2", "pubg", "brawl-stars"],
    }),
    getters: {
        searchFilter() {
            let s = this.search
            return this.cardProduct.filter(card => {
                return card.game_title.toLowerCase().includes(s.toLowerCase())
            })
        },
        async getMainGames() {
            if (this.cardProduct.length == 0) {
                try {
                    const res = await axios.get('http://localhost:5001/api/main').then((res) => {
                        this.cardProduct = res.data
                    })
                } catch (e) {
                    console.log(e)
                }
            }
        },
        gameIndex() {
            let index = this.cardProduct.findIndex(obj => obj.game_id === this.gameID);
            return index; 
        },
        
    },
    actions: {
        gameGetID(ID) {
            this.gameID = ID
            localStorage.setItem("gameID", this.gameID)
        },
        gameGetCategory(option) {
            this.option = option
        },
        nullCategory() {
            this.option = null
        }
    }
})

