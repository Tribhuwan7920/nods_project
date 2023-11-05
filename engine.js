const express = require("express");
const path = require("path")
const app = express()
const port = process.env.port || 3000;

app.use(express.static(path.join(__dirname,"/static")));

app.get("/", (req, res) => {
    res.send("tribhuwan sharma")
})

app.get("/about", (req, res) => {
    res.send("this is a about page ")
});

app.get("/contact", (req, res) => {
    const contact_path = path.join(__dirname, "/template/contact.html")
    console.log(contact_path);
    res.sendFile(contact_path)
});


app.listen(port, () => {
    console.log(port)
    console.log(`starting server at http://localhost:${port}`)
})