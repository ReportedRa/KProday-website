const {Game} = require('../models/mainModel.js')

class mainController {
    async postNewGame(req, res) {
        const {game_id, game_title, game_image, game_logo, game_background, game_category, category_id} = req.body
        try {
            const newGame = await Game.create({game_id, game_title, game_image, game_logo, game_background, game_category, category_id})
        res.json(newGame)
        } catch (error) {
            res.status(400).json({error: error.message})
        }
        
    }
    async getMainGames(req, res) {
        try {
            const mainGame = await Game.findAll();
        res.json(mainGame);
        } catch (error) {
            res.status(400).json({error: error.message})
        }
        
    } 
    async getCategory(req, res) {
        const id = req.params.id;
        
        if (id) {
            try {
                const categories = await Game.findAll({
                    attributes: ['game_category', 'category_id'],
                    where: {
                        game_id: id
                    }
                });
                res.json(categories);
            } catch (error) {
                res.status(400).json({error: error.message})
            }
        } else {
            res.status(404).json({ error: 'Game not found' });
        }
    }
    
}

module.exports = new mainController()