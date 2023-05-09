import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';

const app = express();


const port = process.env.PORT || 3000;

const proxy = 'http://51.159.115.233:3128'; // replace with your proxy server

const handler = createProxyMiddleware({
  target: 'https://api.coingecko.com',
  changeOrigin: true,
  router: {
    'api.coingecko.com': proxy
  }
});

app.use('/', handler);


app.listen(port);