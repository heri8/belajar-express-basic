const express = require("express");
const app = express();
const port = 3000;

app.set("views", "./views");
app.set("view engine", "ejs");

// mengirim parameter
app.get("/", (req, res) => {
    const buah = [
        {name: 'apel'},
        {name: 'pisang'},
        {name: 'melon'},
        {name: 'mangga'},
]
  res.render("index", { name: "heri setiawan", umur: 24, buah: buah });
});

// get parameter dari url langsung
app.get("/:name", (req, res) => res.send(`Nama saya: ${req.params.name}`));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
