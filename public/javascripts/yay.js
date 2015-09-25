$(document).ready(function() {

  // CREATE CANVAS ELEMENTS

  
  var nameVarz = [];

  var c = document.getElementById('img-generation');
  var ctx = c.getContext('2d');
  var cw = c.width;
  var ch = c.height;

  //random images array
  var pic1 = new Image();
  var pic2 = new Image();
  var pic3 = new Image();
  // var pic4 = new Image();
  var randomImages = ["images/pic1.jpg", 
                      "images/pic2.jpg",
                      "images/pic3.jpg",
                      "images/pic4.jpg",
                      "images/pic1.jpg", 
                      "images/pic2.jpg",
                      "images/pic3.jpg",
                      "images/pic4.jpg",
                      "images/pic1.jpg", 
                      "images/pic2.jpg",
                      "images/pic3.jpg",
                      "images/pic4.jpg",
                      "images/pic1.jpg", 
                      "images/pic2.jpg",
                      "images/pic3.jpg",
                      "images/pic4.jpg",
                      "images/pic1.jpg", 
                      "images/pic2.jpg",
                      "images/pic3.jpg",
                      "images/pic4.jpg",
                      "images/pic1.jpg", 
                      "images/pic2.jpg",
                      "images/pic3.jpg",
                      "images/pic4.jpg",
                      "images/pic1.jpg", 
                      "images/pic2.jpg",
                      "images/pic1.jpg", 
                      "images/pic2.jpg",
                      "images/pic3.jpg",
                      "images/pic4.jpg",
                      "images/pic1.jpg", 
                      "images/pic2.jpg",
                      "images/pic3.jpg",
                      "images/pic4.jpg",
                      "images/pic1.jpg", 
                      "images/pic2.jpg",
                      "images/pic3.jpg",
                      "images/pic4.jpg",
                      "images/pic1.jpg", 
                      "images/pic2.jpg",
                      "images/pic3.jpg",
                      "images/pic4.jpg",
                      "images/pic1.jpg", 
                      "images/pic2.jpg",
                      "images/pic3.jpg",
                      "images/pic4.jpg",
                      "images/pic1.jpg", 
                      "images/pic2.jpg",
                      "images/pic3.jpg",
                      "images/pic4.jpg",
                      "images/pic1.jpg", 
                      "images/pic2.jpg"];

  var extraImg = ["images/red-stump.jpg",
                  "images/red-stump-2.jpg",
                  "images/weeds.jpg",
                  "images/stump-2.jpg",
                  "images/stump-3.jpg", 
                  "images/cement.jpg",
                  "images/concrete-2.jpg",
                  "images/concrete-3.jpg",
                  "images/red-stump.jpg",
                  "images/red-stump-2.jpg",
                  "images/weeds.jpg",
                  "images/stump-2.jpg",
                  "images/stump-3.jpg", 
                  "images/cement.jpg",
                  "images/concrete-2.jpg",
                  "images/concrete-3.jpg",
                  "images/red-stump.jpg",
                  "images/red-stump-2.jpg",
                  "images/weeds.jpg",
                  "images/stump-2.jpg",
                  "images/stump-3.jpg", 
                  "images/cement.jpg",
                  "images/concrete-2.jpg",
                  "images/concrete-3.jpg",
                  "images/cement.jpg",
                  "images/stump-3.jpg",
                  "images/red-stump.jpg",
                  "images/red-stump-2.jpg",
                  "images/weeds.jpg",
                  "images/stump-2.jpg",
                  "images/stump-3.jpg", 
                  "images/cement.jpg",
                  "images/concrete-2.jpg",
                  "images/concrete-3.jpg",
                  "images/red-stump.jpg",
                  "images/red-stump-2.jpg",
                  "images/weeds.jpg",
                  "images/stump-2.jpg",
                  "images/stump-3.jpg", 
                  "images/cement.jpg",
                  "images/concrete-2.jpg",
                  "images/concrete-3.jpg",
                  "images/red-stump.jpg",
                  "images/red-stump-2.jpg",
                  "images/weeds.jpg",
                  "images/stump-2.jpg",
                  "images/stump-3.jpg", 
                  "images/cement.jpg",
                  "images/concrete-2.jpg",
                  "images/concrete-3.jpg",
                  "images/cement.jpg",
                  "images/stump-3.jpg"];

  var grids = ["images/grid-lg.png",
               "images/grid-md.png",
               "images/grid-sm.png",
               "images/grid-xl.png",
               "images/grid-xxl.png"];

  // var composite = ["source-over",
  //                  "lighter",
  //                  "lighten",
  //                  "darken",
  //                  "multiply",
  //                  "screen",
  //                  "overlay"];

////////////////////////////////////////////////////////////

  // PSEUDORANDOM FUNCTION

  function pseudoRandom(callback) {

      // PRELIMINARY STEPS

      // GET VALUES OF NAME 
      var name = document.getElementById('fullname').value;

      // ALERT IF NOTHING IS ENTERED
      if (name.length < 2) {
        window.alert('Please enter a valid name longer than 1 letter');
        return;
      } 

      // RESET FORM WHEN SUBMITTED
      document.getElementById('form').reset();

      // CREATE EMPTY ARRAY WITH CONVERTED LETTERS
      var nameInt = [];
      var nl = name.length;
      var total = 0;
      
      // FOR LOOP
      for (var i = 0; i < nl; i++) { 
        nameInt.push(name.charCodeAt(i));
        total += nameInt[i];
      }

      //VARIABLES

      var space = nameInt.indexOf(32);
      var firstLett = nameInt[0];
      var secondLett = nameInt[space + 1];
      var flnum = firstLett - 65;
      var slnum = secondLett - 65;
      var firstLeng = space;
      var secLeng = (nl - space) - 1;
      var flhund = firstLeng * 100;
      var slhund = secLeng * 100;
      var halfFlhund = flhund / 2;
      var halfSlhund = slhund / 2;
      var altFl1 = flhund * 0.25;
      var altSl1 = slhund * 0.25;
      var altFl2 = flhund * 0.75;
      var altSl2 = slhund * 0.75;
      var avg = total / nl;
      var dupe;
      // var comp = ctx.globalCompositeOperation;

    ////////////////////////////////////////////////////////

      // Define opacity variable

      (function() {
        if (nameInt[1] < 103) {
          opacity = 0.25;
        }
        if (nameInt[1] >= 103 && nameInt [1] < 107) {
          opacity = 0.5;
        }
        if (nameInt[1] >= 107 && nameInt [1] < 112) {
          opacity = 0.75;
        }
        if (nameInt[1] >= 112 && nameInt [1] < 117) {
          opacity = 0.85;
        }
        if (nameInt[1] >= 117) {
          opacity = 1;
        }
        return;

      }());

      var opacity;
      var colors = ['rgba(252, 110, 110, ' + opacity + ')',
                'rgba(40, 231, 93, ' + opacity + ')',
                'rgba(49, 146, 255, ' + opacity + ')',
                'rgba(255, 195, 250, ' + opacity + ')',
                'rgba(28, 23, 103, ' + opacity + ')'];

      window.console.log(colors);

      // Check to see if there are duplicates

      (function() {
        var counts = [];
        for(var i = 0; i <= nameInt.length; i++) {
            if(counts[nameInt[i]] === undefined) {
                counts[nameInt[i]] = 1;
            } else {
                dupe = false;
            }
        }
        dupe = true;
      }());

      // variable array

      nameVarz.push(flnum, slnum, firstLett, secondLett, firstLeng, secLeng, flhund, slhund, halfFlhund, halfSlhund, altFl1, altSl1, altFl2, altSl2, opacity, avg, total, dupe);
      
    ///////////////////////////////////////////////////////

      (function() {
        bkg(pic1, extraImg[flnum], 0, 0);
        
        // // comp=composite[5];
        layer(pic2, randomImages[flnum], 100, 100, 500, 335);

        setTimeout(function() {
          changeColor();
        }, 1000);
        // comp=composite[5];
        // cutPaste(pic3, extraImg[slnum], 100, 100, 200, 300, 100, 200, 200, 300);
        // comp=composite[5];
        // // cutPasteOrig(200, 200, 250, 350, 200, 300, 250, 350);

        // rectangleShad(colors[1], 200, 300, 200, 300);
        // gradient();
      }());

      
      
      // var dataUrl = c.toDataURL("image/jpeg", 1.0);
      // window.console.log(dataUrl);
      // localStorage.setItem(name, dataUrl);
      // $.post("save-image.js", dataUrl);

      if (name.length > 130) {
          fns1[0](pic3, grids[1], cw * 0.75, ch * 0.85);
        }

      window.console.log(nameVarz);
      window.console.log(nameInt);

      setTimeout(function() {
        callback();
      }, 1000);


    
  }

//////////////////////////////////////////////////////////////
    
  // FUNCTIONS

    //F1 

    function bkg (imgObj, image, x, y) {

      imgObj.onload = function() {
        ctx.drawImage(imgObj, x, y);
      };

      imgObj.src = image;
      
    }

    function layer (imgObj, image, x, y, width, height) {

      imgObj.onload = function() {
        ctx.drawImage(imgObj, x, y, width, height);
      };

      imgObj.src = image;
    }

    //F2 - first name length = width, last name length = height, add '00' (etc.) on to the end
    //F2 - color = value of second letter
    //F2 - x = cw - length of something etc.
    function rectangle (color, x, y, width, height) {
        ctx.fillStyle = color;
        ctx.fillRect(x, y, width, height);

    } 

    // function rec () {
    //     ctx.fillStyle = 'red';
    //     ctx.fillRect(100, 100, 200, 200);

    // } 

    function clearRect() {
      ctx.clearRect(20, 20, 100, 100);
    }

    function strokeRect() {
      ctx.strokeStyle = "green";
      ctx.strokeRect(200, 200, 200, 200);
    }

    // function pattern() {
    //   var imgData = ctx.getImageData(0, 0, cw, ch);
    //   var data = imgData.data;
    //   ctx.createPattern(data);
    // }

    function changeColor() {
      var imgData = ctx.getImageData(0, 0, cw, ch);
      var data = imgData.data;
      window.console.log(data);

      function invert() {
        for (var i = 0; i < data.length; i += 4) {
          data[i]     = 255 - data[i];     // red
          data[i + 1] = 255 - data[i + 1]; // green
          data[i + 2] = 255 - data[i + 2]; // blue
        }
        ctx.putImageData(imgData, 0, 0);
      }

      invert();
    }

    ////how to apply to only one?????
    function rectangleShad (color, x, y, width, height) {
        ctx.shadowBlur = 20;
        ctx.shadowColor = "black";
        ctx.fillStyle = color;
        ctx.fillRect(x, y, width, height);
    } 

    function cutPaste(imgObj, image, sx, sy, swidth, sheight, dx, dy, dwidth, dheight) {
      imgObj.onload = function() {
        ctx.drawImage(imgObj, sx, sy, swidth, sheight, dx, dy, dwidth, dheight);
      };

      imgObj.src = image;
    }

    ////??????????????????
    function cutPasteOrig(sx, sy, swidth, sheight, dx, dy, dwidth, dheight) {
      ctx.drawImage(ctx.canvas, sx, sy, swidth, sheight, dx, dy, dwidth, dheight);
    }

    function gradient() {
      var grd=ctx.createLinearGradient(0,0,170,0);
      grd.addColorStop(0,"black");
      grd.addColorStop(1,"white");

      ctx.fillStyle=grd;
      ctx.fillRect(20,20,150,100);

    }

    function overlay(color, width, height) {
      ctx.fillStyle = color;
      ctx.fillRect(0, 0, width, height);
    }

    function transform() {

    }

    function pixels() {   
      var imgData = ctx.getImageData(0, 0, cw, ch);
      var data = imgData.data;
      window.console.log( data);
      ctx.putImageData(imgData, 0, 0);
    }

    var fns1 = [bkg, layer, rectangle, clearRect, strokeRect, rectangleShad, pixels, cutPaste, cutPasteOrig, gradient, overlay, transform];

    // CREATE OBJECT TO HOLD DATA

    // var finalObj = {
    //   name: name,
    //   nl: nl,
    //   val: nameInt,
    //   lastN: secondLett,
    //   firstL: firstLeng,
    //   secL: secLeng,
    //   flhund: flhund,
    //   slhund: slhund,
    //   halfFlhund: halfFlhund,
    //   halfSlhund: halfSlhund
    // };

/////////////////////////////////////////////////////////////////

    

  $('.submit').click(function() {
    event.preventDefault();
    // $('#new-img').css('opacity', '1');
    // $('#new-img').css('display', 'block');
    $('.form_body').css('opacity', '0');
    $('.form_body').css('opacity', '0');
    pseudoRandom(pixels);
    setTimeout(function() {$('.img-wrapper').css('display', 'block'); }, 1000);
  });

  
  
});



