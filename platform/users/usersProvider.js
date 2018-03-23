var usersPersistence = require('./usersPersistence');

exports.getUser = function *(id){
    if(!id){
        throw new Error("id must be specified");
    }

    return yield usersPersistence.getUser(id);
};

exports.destroyUser = function *(id){
    if(!id){
        throw new Error("id must be specified");
    }

    return yield usersPersistence.destroyUser(id);
}

exports.createUser = function *(name){
    if(!name){
        throw new Error("name must be specified");
    }

    return yield usersPersistence.createUser(name);
}

exports.getAll = function *(){    
    return yield usersPersistence.getAll();
};