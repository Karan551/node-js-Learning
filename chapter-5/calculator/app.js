import http from "node:http";
import {requestHandler} from "./handler.js"

const server = http.createServer(requestHandler)

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on PORT:${PORT}`);
})

