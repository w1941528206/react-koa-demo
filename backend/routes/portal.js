const router = require('koa-router')();
const portalApiController = require('../controller/api');

router.all('', portalApiController.misp);

module.exports = router.routes();