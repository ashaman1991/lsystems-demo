const express = require('express');
const path = require('path');

const server = express();
try {
  const serverPath = path.join(__dirname, '/build');
  server.use(express.static(serverPath));
  server.listen(process.env.PORT || 3000);
} catch (error) {
  console.error(error);
}
