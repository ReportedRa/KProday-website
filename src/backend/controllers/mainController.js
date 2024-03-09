import {getMainGames, getPageGames, getCategory, getTopGameInfo, postNewGame} from '../models/mainModel.js'

export const newGame = (req, res) => {
    const data = req.body
    postNewGame(data, results => {
        res.json(results)
    })
}

export const mainGames = (req, res) => {
    getMainGames(results => {
        res.json(results)
    })
}

export const pageGames = (req, res) => {
    getPageGames(req.params.id, results => {
        res.json(results)
    })
}

export const category = (req, res) => {
    getCategory(req.params.id, results => {
        res.json(results)
    })
}

export const topGame = (req, res) => {
    getTopGameInfo(req.params.id, results => {
        res.json(results)
    })
}