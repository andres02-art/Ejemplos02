// Este archivo nos otorga el server local.
'use strict';

const express = require('express');
const redirectToHTTPS = require('express-http-to-https').redirectToHTTPS;

/**
 * Starts the Express server.
 *
 * @return {ExpressServer} instance of the Express server.
 */
function startServer() {
  const app = express();

  app.use(redirectToHTTPS([/localhost:(\d{4})/], [], 301));

  app.use((req, resp, next) => {
    const now = new Date();
    const time = `${now.toLocaleDateString()} - ${now.toLocaleTimeString()}`;
    const path = `"${req.method} ${req.path}"`;
    const m = `${req.ip} - ${time} - ${path}`;
    console.log(m);
    next();
  });

  app.use(express.static('public'));

  return app.listen('8000', () => {
    console.log('Local DevServer Started on port 8000...');
  });
}

startServer();