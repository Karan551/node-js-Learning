import { createServer } from "node:http";


const server = createServer((req, res) => {
    const { url } = req;
    res.setHeader("Content-Type", "text/html");
    let content = "";
    let statusCode = 200;
    switch (url) {
        case "/home":
            content = "<h1>Welcome To Home</h1>";
            break;
        case "/men":
            content = "<h1>Welcome To Men</h1>";
            break;
        case "/women":
            content = "<h1>Welcome To Women</h1>";
            break;
        case "/kids":
            content = "<h1>Welcome To Kids</h1>";
            break;
        case "/cart":
            content = "<h1>Welcome To Cart</h1>";
            break;

        default:
            content = "<h1>Page Not found</h1>";
            statusCode = 400;
            break;
    }

    res.statusCode = statusCode;
    res.end(`
        <html>
        <head>
       <title>Myntra</title>
        <head>
        <body>
        <nav>
        <ul>
        <li><a href="/home">Home</a></li>
        <li><a href="/men">Men</a></li>
        <li><a href="/women">Women</a></li>
        <li><a href="/kids">Kids</a></li>
        <li><a href="/cart">Cart</a></li>
        
        </ul>
        </nav>

        ${content}

        </body>
        </html>
        `);

});

const PORT = 3000;
server.listen(PORT, () => {
    console.log("Server is running on PORT:", PORT);
});

// DONE: