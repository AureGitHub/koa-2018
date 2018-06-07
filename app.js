var app = require('koa')();
var middleware = require('./lib/middleware');
var db = require('./platform/db');
var services = require('./services');
var co = require('co');
var platform = require('./platform');

app.use(middleware.favicon());
app.use(middleware.logger());
app.use(middleware.responseTime());
app.use(middleware.compress());

app.use(middleware.mount('/v1', services.v1));


/*
http://localhost:3000/v1/users/
*/


co(function *(){
    var connection = yield db.sequelize.client.sync();
    if(connection){
       
        // var newTipoAdmin = yield db.sequelize.TipoUser.create({descripcion : 'admin'});
        // var newTipoNormal = yield db.sequelize.TipoUser.create({descripcion : 'normal'});

        //  var user = yield platform.users.get(1);
        //  var piso = yield platform.pisos.get(2);

        //  yield platform.pisos.update(piso.id, 'Calle Argueso');

         //var pisoUser =yield platform.pisosUser.get(1);

        

        //  yield user.setPisoUsers([pisoUser]);
        //  yield piso.setPisoUsers([pisoUser]);
         
        // var newNormal = yield db.sequelize.User.create({ name: 'Normal', email : 'a@a.es', password:'pass'  });

        // var nuevo = yield platform.tiposUser.destroy(3);
        // var nuevo = yield platform.tiposUser.destroy(4);

          var all = yield platform.users.getAll();

          all.forEach(function(element) {
              console.log(element.name);
          }, this);


    //     var newUser = yield db.sequelize.User.find(1);
    //     var newNormal = yield db.sequelize.User.find(2);

    //     var newTipoAdmin = yield db.sequelize.TipoUser.find(1);
    //     var newTipoNormal = yield db.sequelize.TipoUser.find(2);
        
    //    newUser.setTipoUser(newTipoAdmin);
    //    newNormal.setTipoUser(newTipoNormal);

// var tasks = yield {
//     post: db.sequelize.Post.find(1),
//     user: db.sequelize.User.find(1)
// };

// yield tasks.user.setPosts([tasks.post]);
        app.listen(3000);
        console.log('connected to database and listening on port 3000');
    }
})();