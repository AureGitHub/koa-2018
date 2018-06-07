var db = require('../db');
var tipoGenericPersistence = require('../generic');
var tabla = 'User';


exports.getAll = function *(){    
    return yield tipoGenericPersistence.getAll(tabla);   
};

exports.get = function *(id){
    if(!id){
        throw new Error("id must be specified");
    }

    return yield tipoGenericPersistence.get(tabla, id);    
};

exports.loginN = function *(name,email,password){
    if(!name){
        throw new Error("name must be specified");
    }

    if(!email){
        throw new Error("email must be specified");
    }

    if(!password){
        throw new Error("password must be specified");
    }

    var where ={
        email : email,
        password : password
    };

     var user = yield db.sequelize[tabla].findOne({where : where});
    return user;    
};


exports.create = function *(name,email,password){
    if(!name){
        throw new Error("name must be specified");
    }

    if(!email){
        throw new Error("email must be specified");
    }

    if(!password){
        throw new Error("password must be specified");
    }

     return yield tipoGenericPersistence.create(tabla,{name,email,password});
    
}

exports.update = function *(id,name,email,password, tipoUserId){
     if(!id){
        throw new Error("id must be specified");
    }
    // if(!name){
    //     throw new Error("name must be specified");
    // }

    // if(!email){
    //     throw new Error("email must be specified");
    // }

    // if(!password){
    //     throw new Error("password must be specified");
    // }

     var userUpdate= yield tipoGenericPersistence.update(tabla,id,{name,email,password});

     var tipoUser = yield tipoGenericPersistence.get('TipoUser',tipoUserId); 

     userUpdate.setTipoUser(tipoUser);
     return userUpdate;
}


exports.destroy = function *(id){
    if(!id){
        throw new Error("id must be specified");
    }

    return yield tipoGenericPersistence.destroy(tabla,id);
}



