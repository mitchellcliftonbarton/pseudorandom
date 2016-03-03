var express=require("express"),app=express(),path=require("path"),fs=require("fs"),winston=require("winston");winston.add(winston.transports.File,{filename:"winston.log"}),winston.info("Logging"),app.use(express["static"]("public")),app.get("/",function(n,i){i.sendFile("index.html"),winston.info("GET - /")}),app.get("/grid",function(n,i,e){i.sendFile("grid.html",{root:path.join(__dirname,"public")}),winston.info("GET - /grid")}),app.get("/loop",function(n,i,e){i.sendFile("lg-view.html",{root:path.join(__dirname,"public")}),winston.info("GET - /loop")}),app.get("/show",function(n,i,e){i.sendFile("new-show.html",{root:path.join(__dirname,"public")}),winston.info("GET - /show-2")}),app.get("/images",function(n,i,e){winston.info("GET - /images"),fs.readdir("public/new-images",function(n,e){n&&console.log(n),console.log(e),i.send(e)})}),app.post("/save",function(n,i,e){function o(n){n?console.log("broken"):console.log("yay")}winston.info("POST - /save"),winston.info("starting save");var s="";n.on("data",function(n){s+=n}),n.on("end",function(){var n=s.indexOf("data"),i=s.slice(0,n),e=s.toString().indexOf(",")+1,o=new Buffer(s.substring(e),"base64");winston.info("Writing: "+i),fs.writeFile("public/new-images/"+i+".jpg",o,function(n){n?winston.info("Error: "+n):winston.info("Success: Saved "+i)})}),i.send("Done")});var server=app.listen(3e3,function(){var n=server.address().address,i=server.address().port;console.log("Example app listening at http://%s:%s",n,i)});