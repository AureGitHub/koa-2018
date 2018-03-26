var tipoGenericPersistence = require('../generic');

var tabla = 'PisoUser';

exports.getAll = function *(){    
    return yield tipoGenericPersistence.getAll(tabla);
};

exports.get = function *(id){
    if(!id){
        throw new Error("id must be specified");
    }

    return yield tipoGenericPersistence.get(tabla,id);
};

exports.create = function *(pisoId, userId){

    var pisoUser = yield tipoGenericPersistence.create(tabla,null);

     var user = yield  tipoGenericPersistence.get('User',userId);         
     var piso = yield  tipoGenericPersistence.get('Piso',pisoId);     

     yield user.setPisoUsers([pisoUser]);
     yield piso.setPisoUsers([pisoUser]);

    return pisoUser;
}


exports.destroy = function *(id){
    if(!id){
        throw new Error("id must be specified");
    }

    return yield tipoGenericPersistence.destroy(tabla,id);
}


