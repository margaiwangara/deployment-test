const express = require('express');

const app = express();

app.use(express.json());

app.get('/', function(req, res) {
  res.send('Hello World');
});

const PORT = parseInt(process.env.PORT || 5000, 10);

app.listen(PORT, () => console.log(`App running on port ${PORT}`));
