var app = require('koa')();
var middleware = require('./lib/middleware');
var db = require('./platform/db');
//var services = require('./services');
var co = require('co');

app.use(middleware.favicon());
app.use(middleware.logger());
app.use(middleware.responseTime());
app.use(middleware.compress());

//app.use(middleware.mount('/v1', services.v1));

co(function *(){
    var connection = yield db.sequelize.client.sync();
    if(connection){
        /*
        var newUser = yield db.sequelize.User.create({ name: 'Aure' });
        if(newUser){
            console.log('creado user ' + newUser.id);
        }

        var tasks = yield {
            post: db.sequelize.Post.create({ title: 'title' }),
            user: db.sequelize.User.find(newUser.id)
        };
    
        var user = tasks.user;
        var post = tasks.post;
    
        if(user && post){
            yield user.setPosts([post]);
            console.log('creado post ' );
        }

*/

var tasks = yield {
    post: db.sequelize.Post.find(1),
    user: db.sequelize.User.find(1)
};

yield tasks.user.setPosts([tasks.post]);
        app.listen(3000);
        console.log('connected to database and listening on port 3000');
    }
})();