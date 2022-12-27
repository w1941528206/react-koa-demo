const Koa = require('koa');
const views = require('koa-views');
const json = require('koa-json');
const onerror = require('koa-onerror');
const bodyParser = require('koa-bodyparser');
const logger = require('koa-logger');
const cors = require('@koa/cors');
const path = require('path');

const router = require('./routes');

const app = new Koa();

onerror(app);

app.use(logger());

app.use(
  cors({
    credentials: true
  })
);

app.use(
  bodyParser({
    enableTypes: ['json', 'form', 'text']
  })
);

app.use(json());

app.use(
  require('koa-static')(path.join(__dirname, '../public'), {
    index: 'none' // index.html
  })
);

app.use(
  views(path.join(__dirname, "../public"), {
    extension: "html"
  })
);

app.use(router.routes());

module.exports = app;
