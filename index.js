var express = require("express")

const app = express()

app.get("/",(req,res)=>{

	res.send("Hello From Test-App")

}).listen(3000);

console.log("Listening To PORT 3000");
