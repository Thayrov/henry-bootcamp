const {server} = require('./server.js');

server.listen(3001, 'localhost', () => {
  console.log('Server listening on port 3001');
});
