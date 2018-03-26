var platform = require('../../platform'),
    parse = require('co-body');

var show = exports.show = function *show(){
    var item = yield platform.pisos.get(this.params.pisoId);
    if(!item){
        return this.throw(404, 'No item found');
    }

    this.body = item;
};


var destroy = exports.destroy = function *destroy(){
    var item = yield platform.pisos.destroy(this.params.pisoId);
    if(!item){
        return this.throw(404, 'No item found');
    }

    this.body = {Borrado: true, item : item};
};


var create = exports.create = function *create(){
    var body = yield parse(this);
    var item = yield platform.pisos.create(body.direccion);
    this.body = item;
};

var update = exports.update = function *update(){
     var body = yield parse(this);
    var item = yield platform.pisos.update(this.params.pisoId,body.direccion);
    this.body = item;
};


var getAll = exports.getAll = function *getAll(){    
    var items = yield platform.pisos.getAll();
    this.body = items;
};

exports.register = function(router){
    router.get('/pisos/:pisoId', show);
    router.get('/pisos/', getAll);
    router.post('/pisos', create);     
    router.post('/pisos/:pisoId', update);
    router.delete('/pisos/:pisoId', destroy);
};