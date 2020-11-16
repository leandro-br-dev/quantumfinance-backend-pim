const express = require('express'),
  sequelize = require('./server/models'),
  routes = require('./server/routes'),
  cors = require('cors');

const port = process.env.PORT || 3003, //porta padrão Node.JS
  app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.listen(port);

console.log(`Escutando a porta: ${port}`);
