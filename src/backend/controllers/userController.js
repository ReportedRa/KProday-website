const {User} = require('../models/userModel.js')

class userController {
    async createNewUser(req, res) {
        const {nickname, email, password} = req.body
        try {
            const newUser = await User.create({nickname, email, password})
            res.status(200).json(newUser)
        } catch (error) {
            res.status(400).json({error: error.message})
        }
    }
    async getAllUsers(req, res) {
        try {
            const users = await User.findAll();
            if (users.length > 0) {
                res.json(users);
            } else {
                res.status(404).json({ error: "No users found" });
            }
            
        } catch (error) {
            res.status(400).json({error: error.message})
        }
    }
    async getOneUser(req, res) {
        const email = req.body.email;
        try {
            const user = await User.findAll({
                where: {
                    email: email
                }
            });
            if (user.length > 0) {
                res.json(user);
            } else {
                res.status(404).json({ error: "Пользователь с таким email не найден" });
            }
        } catch (error) {
            res.status(400).json({error: error.message})
        }
    }
    async getUserAndCheckPassword(req, res) {
        const {email, password} = req.body;
        try {
            const users = await User.findAll({
                where: {
                    email: email
                }
            });
            if (users.length > 0) {
                const user = users[0];
                if(user.password == password) {
                    const response = {
                        message: "Успешный вход",
                        isLoggedIn: 'true',
                        user: {
                            nickname: user.nickname,
                            email: user.email,
                            balance: user.balance,
                            user_id: user.user_id
                        }
                    }
                    res.json(response);
                } else {
                    res.status(401).json({error: "Неверный пароль"});
                }
            }
            else {
                res.status(404).json({error: "Пользователь не найден"});
            }
        } catch (error) {
            res.status(400).json({error: error.message})
        }
    }
    async updatePassword(req, res) {
        const email = req.body.email;
        const oldPassword = req.body.oldPassword;
        const newPassword = req.body.newPassword;
    
        try {
            const user = await User.findOne({ where: { email } });
    
            if (!user) {
                return res.status(404).json({ message: 'Пользователь не найден' });
            }
            if (user.password !== oldPassword) {
                return res.status(401).json({ message: 'Неверный старый пароль' });
            }
            user.password = newPassword;
            await user.save();
    
            res.json({ message: 'Пароль успешно обновлен' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Ошибка при обновлении пароля' });
        }
    }
}

module.exports = new userController()