import fs from "node:fs";


const writeCSVFile = (filePath, data) => {

    const row = `\n${data.username},${data.gender}`;

    fs.appendFileSync(filePath, row);
};


export const userRequestHandler = (req, res) => {


    res.setHeader("Content-Type", "text/html");

    let content = "";
    if (req.url === "/") {
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
    } else if (req.url.toLowerCase() === "/submit-details" && req.method === "POST") {

        let body = [];

        req.on("data", (chunk) => {

            body.push(chunk);
        });


        req.on("end", () => {

            const parsedBody = Buffer.concat(body).toString();

            const fullBody = new URLSearchParams(parsedBody);

            const data = Object.fromEntries(fullBody);
  
           
            fs.writeFileSync("user.txt", JSON.stringify(data));
            
            // To write csv file
            writeCSVFile("data.csv",data)
        });



        res.statusCode = 302;
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
};