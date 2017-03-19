const http = require('http');
const app = require('./app');
const db = require('./db');

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '3000';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */

db.connect('mongodb://localhost:27017/ang2express', function(err){
  if (err){
    console.log('Unable to connect to Mongo');
    process.exit(1);
  } else {
    server.listen(port, () => console.log(`API running on localhost:${port}`));
  }
});

