require('dotenv').config();

const path = require('path');
const express = require('express')

const server = require('./api/server.js');

const port = process.env.PORT || 5000;

server.use(express.static(path.join(__dirname, 'client/dist')))

server.listen(port, () => console.log(`\n** server up on port ${port} **\n`));




