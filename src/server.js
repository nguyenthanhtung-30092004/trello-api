import express from "express";

const app = express();
const hostname = "localhost";
const port = 5071;
app.get("/", (req, res) => {
  res.send(`<h1>Hello Word Nodejs</h1>`);
});

app.listen(port, hostname, () => {
  console.log(
    `Hello Nguyen Thanh Tung, I'm running server at http://${hostname}:${port}/`,
  );
});
