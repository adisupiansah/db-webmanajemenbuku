const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

// Middleware to ensure ID is always an integer
server.use((req, res, next) => {
  if ((req.method === 'POST' || req.method === 'PUT') && req.body.id) {
    req.body.id = parseInt(req.body.id, 10);
  }
  next();
});

server.use(middlewares);
server.use(router);

server.listen(3000, () => {
  console.log('JSON Server is running on port 3000');
});
