const express= require("express");
const server = express();
const cors = require("cors");
const helmet = require("helmet");

const authRouter = require("./auth/auth-router");
const usersRouter = require("./users/user.router");

server.use(express.json());
server.use(cors());
server.use(helmet());


server.use("/api/auth", authRouter);
server.use("/api/users", usersRouter);


server.get("/", (req, res) => {
    res.status(200).json({ api: "up" });
});

module.exports =server;