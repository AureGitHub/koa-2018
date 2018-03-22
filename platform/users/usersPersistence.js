var db = require('../db');

exports.getUser = function *(id){
    var id = Number(id);
    var user = yield db.sequelize.User.find(Number(id));
    return user;
};

exports.createUser = function *(name){
    var newUser = yield db.sequelize.User.create({ name: name });
    return newUser;
}

exports.destroyUser = function *(id){
    var id = Number(id);
    var user = yield db.sequelize.User.find(Number(id));
    if(user){
        var name = user.name;
        yield user.destroy();    
    }
    
    return user;
}