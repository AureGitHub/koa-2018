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
    this.body = item;
};

var update = exports.update = function *update(){
     var body = yield parse(this);
    var item = yield platform.tiposUser.update(this.params.pisoId,body.descripcion);
    this.body = item;
};


var getAll = exports.getAll = function *getAll(){    
    var items = yield platform.tiposUser.getAll();
    this.body = items;
};

exports.register = function(router){
    router.get('/tiposUser/:tiposUserId', show);
    router.get('/tiposUser/', getAll);
    router.post('/tiposUser', create);     
    router.post('/tiposUser/:tiposUserId', update);
    router.delete('/tiposUser/:tiposUserId', destroy);
};