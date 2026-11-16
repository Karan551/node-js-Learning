import { sum } from "./sum.js";


export const requestHandler = (req, res) => {
    const { url, method } = req;

    res.setHeader("Content-Type", "text/html");

    let content = "";

    if (url === "/") {

        content = `<h1>Welcome to Calculator</h1>
                    <br/>
                    <a href="/calculator"> Go To Calculator</a>
                        `;
    }
    else if (url.toLowerCase() === "/calculator") {
        content = `
            <h1>Simple Calculator:: </h1>
            <form action="/calculate-result" method="POST">
            <input type="number" name="firstNumber" placeholder="Enter First number: ">
            <br>
            <br>
            <input type="number" name="secondNumber" placeholder="Enter Second number: ">
            <br><input type="submit" value="Sum">
            </form>`;
    }


    else if (url.toLowerCase() === "/calculate-result" && method === "POST") {
        content = `<h1>Result</h1>`;
        console.log("this is content:: ", content);

        const body = [];

        req.on("data", (chunk) => body.push(chunk));


        req.on("end", () => {

            const parseBody = Buffer.concat(body).toString();
            const fullBody = new URLSearchParams(parseBody);

            const rawData = Object.fromEntries(fullBody);

            const result = sum(rawData.firstNumber, rawData.secondNumber);
            console.log("the result is :: ", result);
            content = `<h1>Sum of ${rawData.firstNumber} and ${rawData.secondNumber} is = ${result}</h1>`;

            console.log("content::", content);
            res.setHeader("content-Type", "text/html");
            res.write(content);
            res.end();


            
        });


        return;
    } else {

        content = "<h1>404 Sorry Page not found</h1>";

    }






    res.end(`
        <html>
        <head>
       <title>Simple Calculator </title>
        <head>
        <body>
        ${content}
        </body>
        </html>
        `);
}

