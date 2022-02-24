const sequelize = require("sequelize");

class SessionController {
  async store(req, res) {
    // const reqBody = req.body;
    // const user = sequelize.fin;
    console.log("entrou aqui");
    return res.status(200);
  }
}

module.exports = new SessionController();
