"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_proxy_middleware_1 = require("http-proxy-middleware");
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
const proxy = 'http://51.159.115.233:3128'; // replace with your proxy server
app.use('/', (0, http_proxy_middleware_1.createProxyMiddleware)({
    target: 'https://api.coingecko.com',
    changeOrigin: true,
    router: {
        'api.coingecko.com': proxy
    }
}));
app.listen(port);
