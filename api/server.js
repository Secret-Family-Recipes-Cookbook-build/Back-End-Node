const express= require("express");

const cors = require("cors");
const helmet = require("helmet");
const session = require('express-sessions');

const authRouter = require("./auth/auth-router");
const usersRouter = require("./users/user.router");

const server = express();


server.use(express.json());
server.use(cors());
server.use(helmet());


server.use("/api/auth", authRouter);
server.use("/api/users", usersRouter);


server.get("/", (req, res) => {
    if (req.headers.cookie === 'cookie=cookie') {
        // res.set('Set-Cookie', 'local=local')
        res.json('welcome back, nice to see you again')
    } else {
         res.set('Set-Cookie', 'cookie=cookie')
    res.status(200).json('I do not know you, here is a cookie');
    }
});

module.exports =server;