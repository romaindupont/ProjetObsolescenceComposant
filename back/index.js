const express = require('express');
const app = express();
const cors = require('cors');

const obsoRouter = require('./routers/obso');

app.use(express.json());
app.use(cors());
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,PATCH,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
  next();
});

app.get('/', (req, res) => {
  res.send('hello world');
});

app.use('/', obsoRouter);


// Error middleware
app.use((err, req, res, next) => {
  if (err.name === 'UnauthorizedError') {
    console.log('<< 401 UNAUTHORIZED - Invalid Token');
    res.status(401).send('Invalid token');
  }
});
app.listen(process.env.PORT || 5000, () => {
  console.log(`App running on port`);
})
