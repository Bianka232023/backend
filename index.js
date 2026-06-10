import Server from "./server/server.js";
import colors from 'colors';
import dotenv from 'dotenv';
dotenv.cconfig();

const server = new Server();

server.listen();
