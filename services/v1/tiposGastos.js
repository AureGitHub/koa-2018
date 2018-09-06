var platform = require('../../platform'),
    parse = require('co-body');

var show = exports.show = function *show(){
    var item = yield platform.tipoGasto.get(this.params.tipoGastoId);
    if(!item){
        return this.throw(404, 'No item found');
    }

    this.body = item;
};


var destroy = exports.destroy = function *destroy(){
    var item = yield platform.tipoGasto.destroy(this.params.tipoGastoId);
    if(!item){
        return this.throw(404, 'No item found');
    }

    this.body = {Borrado: true, item : item};
};


var create = exports.create = function *create(){
    var body = yield parse(this);
    var item = yield platform.tipoGasto.create(body.descripcion);
    this.body = item;
};

var update = exports.update = function *update(){
     var body = yield parse(this);
    var item = yield platform.tipoGasto.update(this.params.tipoGastoId,body.descripcion);
    this.body = item;
};


var getAll = exports.getAll = function *getAll(){    
    var items = yield platform.tipoGasto.getAll();
    this.body = items;
};

/*http://localhost:3001/v1/tiposGastos/*/
exports.register = function(router){
    router.get('/tiposGastos/:tipoGastoId', show);
    router.get('/tiposGastos/', getAll);
    router.post('/tiposGastos', create);     
    router.post('/tiposGastos/:tipoGastoId', update);
    router.delete('/tiposGastos/:tipoGastoId', destroy);
};