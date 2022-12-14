const path = require('path')
const express = require('express')
const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app){
  if (process.env.NODE_ENV === 'development') {
    app.use(
      '/api',
      createProxyMiddleware({
        target: `http://localhost:${process.env.API_PORT}`,
        changeOrigin: true,
      })
    );
    app.use(
      '/images',
      express.static(path.join(process.cwd(), 'src', 'images'))
    )
  }
};
