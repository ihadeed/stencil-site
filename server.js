const express = require('express');
const { join } = require('path');
const { createRenderer } = require('@stencil/core');
const { readFile } = require('fs');

const app = express();
const port = 3030;

const renderer = createRenderer({
  rootDir: join(__dirname, './'),
  buildDir: join(__dirname, './www/build/'),
  namespace: 'app',
  logLevel: 'debug'
});

app.use('/', express.static('www/'));

app.get('/*', (req, res) => {

  console.log(`serve: ${req.url}`);

  const filePath = join(__dirname, 'www/index.html');

  readFile(filePath, 'utf-8', (err, html) => {

    if (err) {
      console.error(err);
      res.send(err);
      return;
    }

    // Render the initial app content through Stencil
    renderer.hydrateToString({
      html,
      req,
      config: {}
    }).then(results => {
      res.send(results.html);
    })
  });

});

app.listen(port, () => console.log(`Server started at http://localhost:${ port }`));