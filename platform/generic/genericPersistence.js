var db = require('../db');

exports.getAll = function *(tabla){
    
    var all = yield db.sequelize[tabla].findAll();
    
    return all;
}

exports.get = function *(tabla,id){
    var id = Number(id);
    var item = yield db.sequelize[tabla].find(Number(id));
    return item;
};

exports.create = function *(tabla, obj){
    var newItem = yield db.sequelize[tabla].create(obj);
    return newItem;
}


exports.update = function *(tabla,id, obj){
    var id = Number(id);
    var item = yield db.sequelize[tabla].find(Number(id));
    if(item){        
        yield item.update(obj);    
        return item;
    }
    return null;
}

exports.destroy = function *(tabla,id){
    var id = Number(id);
    var item = yield db.sequelize[tabla].find(Number(id));
    if(item){        
        yield item.destroy();    
    }
    
    return item;
}





