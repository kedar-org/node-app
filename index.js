const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send("Hello, This app and infrastructure is created from Backstage.io. Hurray!!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
