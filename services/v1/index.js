var Router = require('koa-router');
var router = new Router();

require('./users').register(router);
require('./pisos').register(router);
require('./pisosUsers').register(router);
require('./tiposUsers').register(router);

module.exports = router.middleware();
