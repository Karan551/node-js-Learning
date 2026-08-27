import { createServer } from "node:http";

const server = createServer((req, res) => {
    console.log("Hello World! NODE is start");
});

const PORT = 3000;
server.listen(PORT,"127.0.0.1",()=>{
    console.log(`Server is listening on http://127.0.0.1:${PORT}`);
});