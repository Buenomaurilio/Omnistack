const User = require('../models/User');


module.exports = {
  async store(req, res){
     const { email } = req.body;

     let user = await User.findOne({ email });
    if(!user){
     ser = await User.create({ email });
    }    
     return res.json(user);
  }
};









// index = listagem de sessões
// show = listar uma única sessão
// store = criar uma sessão
// update = alterra uma sessão
// destroy = remover/deletar sessão