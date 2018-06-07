var platform = require('../../platform'),
    parse = require('co-body');

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

var loginN = exports.loginN = function *loginN(){    
     var body = yield parse(this);     
    var user = yield platform.users.loginN(body.email,body.password);

    if (user) {
        let userRet = {};
        userRet.name = user.email;
        userRet.perfil = 1;
        userRet.token = "AuthRouter.OnlygenToken(userFind)";
      
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
    router.post('/loginN', loginN);
    router.get('/users/:userId', show);
    router.get('/users/', getAll);
    router.post('/users', create);     
    router.post('/users/:userId', update);
    router.delete('/users/:userId', destroy);
};