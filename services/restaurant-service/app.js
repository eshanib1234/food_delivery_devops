const express = require('express');
const path = require('path');
const app = express();
const port = 3002;

app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
  console.log(`Restaurant service listening at http://localhost:${port}`);
});
