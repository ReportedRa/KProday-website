import db from '../db.js'

export const getMainGames = (result) => {
    db.query('SELECT (gameID, gameTitle, gameImage) FROM games', results => {
        console.log(results)
        result(results)
    })
}

export const getPageGames = (id, result) => {
    db.query('SELECT (productImg, productCost, productDescription) FROM products WHERE gameID = ?', [id], results => {
        console.log(results)
        result(results)
    })
}

export const getCategory = (id, result) => {
    db.query('SELECT category FROM gameCategory WHERE gameID = ?',  [id], results => {
        console.log(results)
        result(results)
    })
}

export const getTopGameInfo = (id, result) => {
    db.query('SELECT (gameTitle, gameLogo, gameBackground) FROM games WHERE gameID = ?', [id], results => {
        console.log(results)
        result(results)
    })
}

export const postNewGame = (gameID, gameTitle, gameImage, gameLogo, gameBackground, result) => {
    db.query('INSERT INTO games (gameID, gameTitle, gameImage, gameLogo, gameBackground) values ($1, $2, $3, $4, $5) RETURNING *', [gameID, gameTitle, gameImage, gameLogo, gameBackground], results => {
        console.log(results)
        
    })
}