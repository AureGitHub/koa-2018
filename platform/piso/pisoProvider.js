var tipoGenericPersistence = require('../generic');

var tabla = 'Piso';

exports.getAll = function *(){    
    return yield tipoGenericPersistence.getAll(tabla);
};

exports.get = function *(id){
    if(!id){
        throw new Error("id must be specified");
    }

    return yield tipoGenericPersistence.get(tabla,id);
};

exports.update =  function *(id,direccion){
    if(!id){
        throw new Error("id must be specified");
    }

    return yield tipoGenericPersistence.update(tabla,id,{direccion});
    

}

exports.create = function *(direccion){
    if(!direccion){
        throw new Error("direccion must be specified");
    }

    return yield tipoGenericPersistence.create(tabla,{direccion});
}


exports.destroy = function *(id){
    if(!id){
        throw new Error("id must be specified");
    }

    return yield tipoGenericPersistence.destroy(tabla,id);
}


