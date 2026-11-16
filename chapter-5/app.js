import http from "node:http";
import { userRequestHandler } from "./user.js";

const server = http.createServer(userRequestHandler);

const PORT = 3000;


server.listen(PORT, () => {
    console.log("Server is running on PORT:", PORT);
});