import { createServer } from "http";



const server = createServer((req, res) => {
    /* 
        console.log(req.method);
        console.log("this is the headers:", req.headers);
        console.log("this is the url:", req.url); 
        
    */
    console.log("this is request.url value:: ", req.url);
    res.setHeader("Content-Type", "text/html");
    res.write(`<html>`);
    res.write(`<title>My Node Server</title>`);
    res.write(`<body>`);

    if (req.url === "/") {

        res.write(`<h1>Hello Node Js!</h1>`);
    } else if (req.url === "/products") {
        res.write("<h1>Checkout Our Products.</h1>");
    } else {
        res.write("<h2>Like Share and Subscribe.</h2>");
    }



    res.write(`</body>`);
    res.write(`</html>`);
    res.end();


});



const PORT = 3000;
server.listen(PORT, "127.0.0.1", () => {
    console.log(`Server is listening http://127.0.0.1:${PORT}`);
});