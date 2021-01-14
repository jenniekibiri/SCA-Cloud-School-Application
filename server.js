const express = require('express');
const morgan = require("morgan");
// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.use(morgan("dev"));

app.get('/', (req, res) => {
  res.send('Hello World');
});

const port = 5000;
app.listen(port, () => {
  console.log(`the  server is running on port ${port}`);
});