const express = require('express');
const morgan = require("morgan");
// Constants


// App
const app = express();
app.use(morgan("dev"));

app.get('/', (req, res) => {
  res.send('Welcome to SCA Cloud School Application');
});

const port = 5000;
app.listen(port, () => {
  console.log(`the  server is running on port ${port}`);
});