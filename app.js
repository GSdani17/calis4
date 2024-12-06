const express = require("express");
const path = require("path");
const app = express();


app.get("/",(req,res) => {
// res.sendFile("D:/Proyecto_Node.js/index.html");
// res.send("Hellon world");
res.sendFile(path.join(__dirname,"/index.html"));
});
app.listen(3000,() =>{

console.log("serverlistening  runing on portggg",3000)
});
