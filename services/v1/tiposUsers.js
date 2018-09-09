var platform = require('../../platform'),
    parse = require('co-body');

var show = exports.show = function *show(){
    var item = yield platform.tiposUser.get(this.params.tiposUserId);
    if(!item){
        return this.throw(404, 'No item found');
    }

    this.body = item;
};


var destroy = exports.destroy = function *destroy(){
    var item = yield platform.tiposUser.destroy(this.params.tiposUserId);
    if(!item){
        return this.throw(404, 'No item found');
    }

    this.body = {Borrado: true, item : item};
};


var create = exports.create = function *create(){
    var body = yield parse(this);
    var item = yield platform.tiposUser.create(body.descripcion);
    this.body = { 
        data : item
    };
};

var update = exports.update = function *update(){
     var body = yield parse(this);
    var item = yield platform.tiposUser.update(this.params.tiposUserId,body.descripcion);
    this.body = item;
};


var getAll = exports.getAll = function *getAll(){    
    var items = yield platform.tiposUser.getAll();
    this.body = { 
        data : items
    };
};

exports.register = function(router){
    router.get('/tiposUsers/:tiposUserId', show);
    router.get('/tiposUsers/', getAll);
    router.post('/tiposUsers', create);     
    router.put('/tiposUsers/:tiposUserId', update);
    router.delete('/tiposUsers/:tiposUserId', destroy);
};