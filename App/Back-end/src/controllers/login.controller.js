const LoginServices = require('../services/login.services');

const login = async (req, res) => {
    const {cpf, senha} = req.body;

    try {
        const logar = await LoginServices.login(cpf, senha);
        res.json(logar);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

module.exports = {login};