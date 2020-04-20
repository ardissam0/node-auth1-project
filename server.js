const express = require('express');

const registerRouter = require('./auth/registerRouter');
const loginRouter = require('./auth/loginRouter');
const userRouter = require('./users/userRouter');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
  res.send({server: 'up'});
});

server.use('/api/register', registerRouter);
server.use('/api/login', loginRouter);
server.use('/api/users', userRouter);

module.exports = server;