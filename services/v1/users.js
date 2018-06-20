var platform = require('../../platform'),
    parse = require('co-body');

var token=require('../token');
    


var show = exports.show = function *show(){
    var user = yield platform.users.get(this.params.userId);
    if(!user){
        return this.throw(404, 'No user found');
    }

    this.body = user;
};





var destroy = exports.destroy = function *destroy(){
    var user = yield platform.users.destroy(this.params.userId);
    if(!user){
        return this.throw(404, 'No user found');
    }

    this.body = {Borrado: true, user : user};
};


var create = exports.create = function *create(){
    var body = yield parse(this);
    var user = yield platform.users.create(body.name,body.email,body.password);
    this.body = user;
};

var update = exports.update = function *update(){
    var body = yield parse(this);     
    var item = yield platform.users.update(this.params.userId,body.name,
                                            body.email,body.password,
                                        body.tipoUserId);
                                        
    this.body = item;
    
};

var getAll = exports.getAll = function *getAll(){    
    var users = yield platform.users.getAll();
    this.body = users;
};

var login = exports.login = function *login(){    
     var body = yield parse(this);     
    var user = yield platform.users.loginN(body.email,body.password);

    if (user) {
        let userRet = {};
        userRet.name = user.name;
        userRet.email = user.email;
        userRet.perfil = user.TipoUserId;
        userRet.minSession = token.minSession;
        userRet.token = token.OnlygenToken(userRet);
      
        this.body = { 
            data : userRet
        };
    }
    else {
        this.body = {
            data: null
        };
    }
   
};


exports.register = function(router){
    router.post('/login', login);
    router.get('/users/:userId', show);
    router.get('/users', getAll);
    router.post('/users', create);     
    router.post('/users/:userId', update);
    router.delete('/users/:userId', destroy);
};