var express=require("express"),bodyParser=require("body-parser"),app=express(),path=require("path"),fs=require("fs"),winston=require("winston");winston.add(winston.transports.File,{filename:"winston.log"}),winston.info("Logging"),app.use(express["static"]("public")),app.use(bodyParser.urlencoded({limit:"10mb",extended:!0})),app.get("/",function(n,i){i.sendFile("index.html"),winston.info("GET - /")}),app.get("/grid",function(n,i,o){i.sendFile("grid.html",{root:path.join(__dirname,"public")}),winston.info("GET - /grid")}),app.get("/loop",function(n,i,o){i.sendFile("lg-view.html",{root:path.join(__dirname,"public")}),winston.info("GET - /loop")}),app.get("/show",function(n,i,o){i.sendFile("new-show.html",{root:path.join(__dirname,"public")}),winston.info("GET - /show-2")}),app.get("/group",function(n,i,o){i.sendFile("group.html",{root:path.join(__dirname,"public")}),winston.info("GET - /group")}),app.get("/info",function(n,i,o){i.sendFile("info.html",{root:path.join(__dirname,"public")}),winston.info("GET - /info")}),app.get("/images",function(n,i,o){winston.info("GET - /images"),fs.readdir("public/new-images",function(n,o){n&&console.log(n),console.log(o),i.send(o)})}),app.post("/save",function(n,i,o){function e(n){n?console.log("broken"):console.log("yay")}winston.info("POST - /save"),winston.info("starting save");var s="";n.on("data",function(n){s+=n}),n.on("end",function(){var n=s.indexOf("data"),i=s.slice(0,n),o=s.toString().indexOf(",")+1,e=new Buffer(s.substring(o),"base64");winston.info("Writing: "+i),fs.writeFile("public/new-images/"+i+".jpg",e,function(n){n?winston.info("Error: "+n):winston.info("Success: Saved "+i)})}),i.send("Done")}),app.post("/sand",function(n,i,o){function e(n){n?console.log("broken"):console.log("yay")}winston.info("POST - /save"),winston.info("starting save");var s="";n.on("data",function(n){s+=n}),n.on("end",function(){var n=s.indexOf("data"),i=s.slice(0,n),o=s.toString().indexOf(",")+1,e=new Buffer(s.substring(o),"base64");winston.info("Writing: "+i),fs.writeFile("public/new-images/"+i+".jpg",e,function(n){n?winston.info("Error: "+n):winston.info("Success: Saved "+i)})}),i.send("Done"+imgName)});var server=app.listen(3e3,function(){var n=server.address().address,i=server.address().port;console.log("Example app listening at http://%s:%s",n,i)});