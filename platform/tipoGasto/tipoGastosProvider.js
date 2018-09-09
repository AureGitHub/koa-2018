var tipoGenericPersistence = require('../generic');

var tabla = 'TipoGasto';

exports.getAll = function *(){    
    return yield tipoGenericPersistence.getAll(tabla);
};

exports.get = function *(id){
    if(!id){
        throw new Error("id must be specified");
    }

    return yield tipoGenericPersistence.get(tabla,id);
};

exports.create = function *(descripcion){
    if(!descripcion){
        throw new Error("descripcion must be specified");
    }

    return yield tipoGenericPersistence.create(tabla,{descripcion});
}


exports.update = function *(id,descripcion){

    if(!id){
        throw new Error("id must be specified");
    }

    if(!descripcion){
        throw new Error("descripcion must be specified");
    }

    return yield tipoGenericPersistence.update(tabla,id,{descripcion});
}

exports.destroy = function *(id){
    if(!id){
        throw new Error("id must be specified");
    }

    return yield tipoGenericPersistence.destroy(tabla,id);
}


