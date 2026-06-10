import'dotenv/config';
import http from "http";
import { Server } from "socket.io";
import app from './src/app';
import connectDB  from './src/config/db';



connectDB();


const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

import socketHandler from "./src/socket/socket.js";

socketHandler(io);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`server is runnning on port ${PORT}`)
})


