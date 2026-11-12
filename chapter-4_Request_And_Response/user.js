import { createServer } from "node:http";
import fs from "fs";

const server = createServer((req, res) => {
    const { url, method } = req;
    res.setHeader("Content-Type", "text/html");

    let content = "";
    if (url === "/") {
        content = `
<h1>Enter Your Details:: </h1>
<form action="/submit-details" method="POST">
<input type="text" name="username" placeholder="Enter your name"><br>
<label for="male">Male</label>
<input type="radio" id="male" name="gender" value="male" />
<label for="female">Female</label>
<input type="radio" id="female" name="gender" value="female" />
<br><input type="submit" value="Submit">
</form>
        `;
    } else if (url.toLowerCase() === "/submit-details" && method === "POST") {
        res.statusCode = 302;
        const headers = "Name,Gender\n";
        fs.writeFileSync("data.csv", headers);
        
        // Add a new row data
        fs.appendFileSync("data.csv", "Ganesh,Male");
        res.setHeader("Location", "/");


    } else {
        content = "<h2>Like Share & Subscribe</h2>";
    }

    res.end(`
        <html>
        <head>
       <title>User Details </title>
        <head>
        <body>
        ${content}
        </body>
        </html>
        `);
});


const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running on PORT:${PORT}`);
});