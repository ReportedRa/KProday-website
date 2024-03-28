import { defineStore } from "pinia";
import axios from 'axios'

export const useStore = defineStore('store', {
    state: () => ({
        gameID: "", 
        nickname: "",
        email: "",
        balance: "",
        search: "",
        cardProduct: [],
        option: "",
        game: ["counter-strike-2", "dota-2", "pubg", "brawl-stars"],
        isType: true,
        isShow: false,
        isLoggedIn: "", 
        user_id: null,
        isShowCart: false
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
        ifNull(){
            if(this.isLoggedIn == "") {
                this.isLoggedIn = localStorage.getItem("isLogged")
                this.nickname = localStorage.getItem("nickname")
                this.email = localStorage.getItem("email")
                this.balance = localStorage.getItem("balance")
                this.user_id = localStorage.getItem("user_id")
                return (this.isLoggedIn, this.nickname)
            }
            else if(localStorage.getItem("isLogged") == null) {
                this.isLoggedIn = 'false'
                return this.isLoggedIn
            }
            if(this.user_id == null) {
                this.user_id = localStorage.getItem("user_id")
                return this.user_id
            }
        }
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

