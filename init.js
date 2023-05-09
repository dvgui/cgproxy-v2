import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';

const app = express();


const port = process.env.PORT || 3000;

const proxy = 'http://51.159.115.233:3128'; // replace with your proxy server

app.use('/', createProxyMiddleware({
  target: 'https://api.coingecko.com',
  changeOrigin: true,
  pathRewrite: {
    '^/api': ''
  },
  router: {
    'api.coingecko.com': proxy
  }
}));

app.listen(port);