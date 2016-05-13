var express=require("express"),bodyParser=require("body-parser"),app=express(),path=require("path"),fs=require("fs"),winston=require("winston");winston.add(winston.transports.File,{filename:"winston.log"}),winston.info("Logging"),app.use(express["static"]("public")),app.use(bodyParser.urlencoded({limit:"10mb",extended:!0})),app.get("/",function(n,o){o.sendFile("index.html"),winston.info("GET - /")}),app.get("/grid",function(n,o,e){o.sendFile("grid.html",{root:path.join(__dirname,"public")}),winston.info("GET - /grid")}),app.get("/loop",function(n,o,e){o.sendFile("lg-view.html",{root:path.join(__dirname,"public")}),winston.info("GET - /loop")}),app.get("/show",function(n,o,e){o.sendFile("new-show.html",{root:path.join(__dirname,"public")}),winston.info("GET - /show-2")}),app.get("/group",function(n,o,e){o.sendFile("group.html",{root:path.join(__dirname,"public")}),winston.info("GET - /group")}),app.get("/info",function(n,o,e){o.sendFile("info.html",{root:path.join(__dirname,"public")}),winston.info("GET - /info")}),app.get("/images",function(n,o,e){winston.info("GET - /images"),fs.readdir("public/new-images",function(n,e){n&&console.log(n),console.log(e),o.send(e)})}),app.post("/save",function(n,o,e){function i(n){n?console.log("broken"):console.log("yay")}winston.info("POST - /save"),winston.info("starting save");var s="";n.on("data",function(n){s+=n}),n.on("end",function(){var n=s.indexOf("data"),o=s.slice(0,n),e=s.toString().indexOf(",")+1,i=new Buffer(s.substring(e),"base64");winston.info("Writing: "+o),fs.writeFile("public/new-images/"+o+".jpg",i,function(n){n?winston.info("Error: "+n):winston.info("Success: Saved "+o)})}),o.send("Done")}),app.post("/sand",function(n,o,e){function i(n){n?console.log("broken"):console.log("yay")}var s="";n.on("data",function(n){s+=n}),n.on("end",function(){var n=s.indexOf("-"),o=s.slice(0,n),e=new Date,i=e.toUTCString();i=i.replace(/\s+/g,"-"),o=i+"-"+o,o=o.replace(",","");var t=s.toString().indexOf(",")+1,a=new Buffer(s.substring(t),"base64");fs.writeFile("public/gray-sand/"+o+".jpg",a,function(n){n?winston.info("Error: "+n):winston.info("Success: Saved "+o)})}),o.send("Done")}),app.post("/shapes",function(n,o,e){var i=Math.floor(50*Math.random()+1);fs.readdir("public/shapes",function(n,e){n&&console.log(n),fs.readFile(path.join(__dirname,"public")+"/shapes/"+e[i%e.length],"base64",function(n,e){o.send("data:image/png;base64,"+e)})})}),app.post("/web-performance",function(n,o,e){});var server=app.listen(3e3,function(){var n=server.address().address,o=server.address().port;console.log("Example app listening at http://%s:%s",n,o)});