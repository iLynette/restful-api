const express = require('express');

const app = express();

//routes
app.get('/', (req, res) => {
  res.send('Iam awesome!');
});
app.get('/posts', (req, res) => {
  res.send('This is a post!');
});

//how to listen
app.listen(3000);