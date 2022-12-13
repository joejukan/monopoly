const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app){
  app.use(
    '/api',
    createProxyMiddleware({
      target: `http://localhost:${process.env.API_PORT}`,
      changeOrigin: true,
    })
  );
};
