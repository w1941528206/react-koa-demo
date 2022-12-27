const router = require('koa-router')();
const compose = require('koa-compose');
const path = require('path');
const fs = require('mz/fs');

// const auth = require('./auth');

router.get(
  '/',
  compose([
    async (ctx) => {
      const data = await fs.readFile(
        path.join(__dirname, '../../public/index.html')
      );
      ctx.body = data.toString();
    }
  ])
);

module.exports = router;
