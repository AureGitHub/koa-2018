var platform = require('../../platform'),
    parse = require('co-body');

var show = exports.show = function *show(){
    var item = yield platform.pisosUser.get(this.params.pisoUserId);
    if(!item){
        return this.throw(404, 'No item found');
    }

    this.body = item;
};


var destroy = exports.destroy = function *destroy(){
    var item = yield platform.pisosUser.destroy(this.params.pisoUserId);
    if(!item){
        return this.throw(404, 'No item found');
    }

    this.body = {Borrado: true, item : item};
};


var create = exports.create = function *create(){
    var body = yield parse(this);
    var item = yield platform.pisosUser.create(body.pisoId, body.userId);
    this.body = item;
};




var getAll = exports.getAll = function *getAll(){    
    var items = yield platform.pisosUser.getAll();
    this.body = items;
};

exports.register = function(router){
    router.get('/pisosUsers/:pisoUserId', show);
    router.get('/pisosUsers/', getAll);
    router.post('/pisosUsers', create);         
    router.delete('/pisosUsers/:pisoUserId', destroy);
};