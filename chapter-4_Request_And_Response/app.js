import { createServer } from "http";

const server = createServer((req, res) => {
    res.setHeader("Content-Type", "text/html");

    let content = "";
    let statusCode = 200;

    switch (req.url) {
        case "/":
            content = "<h1>Hello Node Js!</h1>";
            break;

        case "/products":
            content = "<h1>Checkout Our Products.</h1>";
            break;

        default:
            content = "<h2>Like Share and Subscribe.</h2>";
            statusCode = 404;
            break;
    }

    res.statusCode = statusCode;




    res.end(`
        <html>
        <head>
       <title>My Node Server</title>
        <head>
        <body>
        ${content}
        </body>
        </html>
        `);


});



const PORT = 3000;
server.listen(PORT, "127.0.0.1", () => {
    console.log(`Server is listening http://127.0.0.1:${PORT}`);
});