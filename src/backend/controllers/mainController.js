const {Game} = require('../models/mainModel.js')

class mainController {
    async postNewGame(req, res) {
        const {game_id, game_title, game_image, game_logo, game_background, game_category, category_id} = req.body
        const newGame = await Game.create({game_id, game_title, game_image, game_logo, game_background, game_category, category_id})
        res.json(newGame)
    }
    async getMainGames(req, res) {
        const mainGame = await Game.findAll();
        res.json(mainGame);
    } 
    async getCategory(req, res) {
        const gameIDs = {
            'counter-strike-2': 'counter-strike-2',
            'dota-2': 'dota-2',
            'pubg': 'pubg',
            'brawl-stars': 'brawl-stars'
        };
    
        const id = req.params.id;
        const gameID = gameIDs[id];
    
        if (gameID) {
            const categories = await Game.findAll({
                attributes: ['game_category', 'category_id'],
                where: {
                    game_id: gameID
                }
            });
            res.json(categories);
        } else {
            res.status(404).json({ error: 'Game not found' });
        }
    }
    
}

module.exports = new mainController()