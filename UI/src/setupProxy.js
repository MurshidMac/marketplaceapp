const proxy = require('http-proxy-middleware');
module.exports = function(app) {
  app.use(
    '/api',
    proxy({
      target: 'https://ahsan-market.herokuapp.com',
      // target: 'http://localhost:3002',
      headers: {
        "Connection": "keep-alive"
      },
      changeOrigin: true,
    })
  );
};