const Koa = require('koa');
const body = require('koa-body');
const koaLogger = require('koa-logger');

// Middleware propios
const logger = require('logger');
const filmRouter = require('routes/film.router');

const app = new Koa();

app.use(body());

if (process.env.NODE_ENV === 'dev') {
    app.use(koaLogger());
}

app.use(filmRouter.routes());


app.listen(3000, function (err) {
    if (err) {
        logger.error('Error listening in port 3000', err);
        process.exit(1);
    }
    logger.info('Koa server listening in port 3000');
});