$(document).ready(function() {

  // CREATE CANVAS ELEMENTS
  ///Questions 
  // done! 1. array system/ timing of caller functions on click
  // done! 2. timing of saving the images/displaying the image once the data has been sent to the server
  
  // 4. problems with displaying data on data-view page
  // done! 5. animation on loading p

  
  var nameVarz = [];
  var oColor = [];
  var position = [];
  var positionX = [];
  var positionY = [];
  var negPos = [];
  var nameInt = [];
  var incr = [];
  var name;
  var space;
  var firstLett;
  var secondLett;
  var color = ['rgb(252, 110, 110)',
                'rgb(40, 231, 93)',
                'rgb(49, 146, 255)',
                'rgb(255, 195, 250)',
                'rgb(28, 23, 103)',
                'rgb(255, 0, 0)',
                'rgb(255, 102, 0)',
                'rgb(255, 240, 0)',
                'rgb(96, 214, 196)',
                'rgb(50, 60, 103)',
                'rgb(88, 64, 73)',
                'rgb(206, 180, 190)',
                'rgb(243, 255, 162)'];


  var c = document.getElementById('img-generation');
  var ctx = c.getContext('2d');
  var cw = c.width;
  var ch = c.height;
  var comp = ctx.globalCompositeOperation;
  // var width1 = cw * 0.4;
  // var width2 = cw / 2;
  // var width3 = cw * 0.75;
  // var height1 = ch * 0.4;
  // var height2 = ch / 2;
  // var height3 = ch * 0.75;



  //random images array
  var pic1 = new Image();
  var pic2 = new Image();
  var pic3 = new Image();
  // var pic4 = new Image();
  var randomImages = ["images/pic1.jpg", 
                      "images/pic2.jpg",
                      "images/pic3.jpg",
                      "images/pic4.jpg",
                      "images/pic5.jpg", 
                      "images/pic6.jpg",
                      "images/pic7.jpg",
                      "images/pic8.jpg",
                      "images/pic9.jpg", 
                      "images/pic10.jpg",
                      "images/pic11.jpg",
                      "images/pic12.jpg",
                      "images/pic13.jpg", 
                      "images/pic14.jpg",
                      "images/pic15.jpg",
                      "images/pic16.jpg",
                      "images/pic17.jpg", 
                      "images/pic18.jpg",
                      "images/pic19.jpg",
                      "images/pic20.jpg",
                      "images/pic21.jpg", 
                      "images/pic22.jpg",
                      "images/pic23.jpg",
                      "images/pic24.jpg",
                      "images/pic25.jpg", 
                      "images/pic26.jpg"];

  var extraImg = ["images/red-stump.jpg",
                  "images/red-stump-2.jpg",
                  "images/weeds.jpg",
                  "images/stump-2.jpg",
                  "images/stump-3.jpg", 
                  "images/cement.jpg",
                  "images/concrete-2.jpg",
                  "images/concrete-3.jpg",
                  "images/costarica-1.jpg",
                  "images/costarica-2.jpg",
                  "images/costarica-3.jpg",
                  "images/costarica-4.jpg",
                  "images/crop.jpg",
                  "images/root.jpg",
                  "images/seashells.jpg",
                  "images/timp-1.jpg",
                  "images/timp-2.jpg",
                  "images/timp-3.jpg",
                  "images/timp-4.jpg",
                  "images/timp-5.jpg",
                  "images/timp-6.jpg"];

  var grids = ["images/grid-lg.png",
               "images/grid-md.png",
               "images/grid-sm.png",
               "images/grid-xl.png",
               "images/grid-xxl.png"];

  var composite = ["source-over",
                   "lighter",
                   "lighten",
                   "darken",
                   "multiply",
                   "screen",
                   "overlay"];

////////////////////////////////////////////////////////////

  // PSEUDORANDOM FUNCTION

  function pseudoRandom(callback) {

      // PRELIMINARY STEPS

      // GET VALUES OF NAME 
      name = document.getElementById('fullname').value;

      // ALERT IF NOTHING IS ENTERED

      // CREATE EMPTY ARRAY WITH CONVERTED LETTERS
      var nl = name.length;
      var total = 0;
      
      // FOR LOOP
      for (var i = 0; i < nl; i++) { 
        nameInt.push(name.charCodeAt(i));
        total += nameInt[i];
      }

      //VARIABLES

      space = nameInt.indexOf(32);
      firstLett = nameInt[0];
      secondLett = nameInt[space + 1];
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
      var xpos1 = 36 * flnum;
      var xpos2 = 36 * slnum;
      var ypos1 = 20 * flnum;
      var ypos2 = 20 * slnum;
      var sum = flnum + slnum;
      var xlss1 = xpos1 * 0.75;
      var xlss2 = xpos2 * 0.75;
      var ylss1 = ypos1 * 0.75;
      var ylss2 = ypos2 * 0.75;
      var xmr1 = xpos1 * 1.25;
      var xmr2 = xpos2 * 1.25;
      var ymr1 = ypos1 * 1.25;
      var ymr2 = ypos2 * 1.25;
      

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
                'rgba(28, 23, 103, ' + opacity + ')',
                'rgba(255, 0, 0, ' + opacity + ')',
                'rgba(255, 102, 0, ' + opacity + ')',
                'rgba(255, 240, 0, ' + opacity + ')',
                'rgba(96, 214, 196, ' + opacity + ')',
                'rgba(50, 60, 103, ' + opacity + ')',
                'rgba(88, 64, 73, ' + opacity + ')',
                'rgba(206, 180, 190, ' + opacity + ')',
                'rgba(243, 255, 162, ' + opacity + ')'];

      oColor.push(colors[0], colors[1], colors[2], colors[3], colors[4], colors[5], colors[6], colors[7], colors[8], colors[9], colors[10], colors[11], colors[12]);

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

      nameVarz.push(flnum, slnum, firstLett, secondLett, nl, firstLeng, secLeng, flhund, slhund, halfFlhund, halfSlhund, altFl1, altSl1, altFl2, altSl2, opacity, avg, total, dupe, sum);
      positionX.push(xpos1, xpos2, xlss1, xlss2, xmr1, xmr2);
      positionY.push(ypos1, ypos2, ylss1, ylss2, ymr1, ymr2);
      position.push(xpos1, ypos1, xpos2, ypos2, xlss1, ylss1, xlss2, ylss2, xmr1, ymr1, xmr2, ymr2);
      negPos.push(xpos1 * -1, xpos1, ypos1 * -1, ypos1, xpos2 * -1, xpos2, ypos2 * -1, ypos2, xlss1 * -1, xlss1, ylss1 * -1, ylss1, xlss2 * -1, xlss2, ylss2 * -1, ylss2, xmr1 * -1, xmr1, ymr1 * -1, ymr1, xmr2 * -1, xmr2, ymr2 * -1, ymr2);

      var incr1 = nameVarz[0] * 0.01;
      var incr2 = nameVarz[0] * 0.1;
      var incr3 = nameVarz[0];
      var incr4 = nameVarz[0] * 10;
      var incr5 = nameVarz[0] * 100;
      incr.push(incr1, incr2, incr3, incr4, incr5);
      // window.console.log(incr);
    ///////////////////////////////////////////////////////

      (function() {
        var index1 = parseInt( nameVarz[17] % steps.length );
        var index2 = parseInt( nameVarz[1] % nextSteps.length );
        var index3 = parseInt( nameVarz[0] % nextSteps2.length );
        var allFns = steps[index1].concat(nextSteps[index2]).concat(nextSteps2[index3]);
        
        caller(allFns);
        // caller(nextSteps[nameVarz[2] % nextSteps.length]);
        // caller(nextSteps2[nameVarz[3] % nextSteps2.length]);
        // setTimeout(function() {
        //   caller(nextSteps[nameVarz[2] % nextSteps.length]);
        // }, 1000);

        // setTimeout(function() {
        //   caller(nextSteps2[nameVarz[3] % nextSteps2.length]);
        // }, 1200);
      }());

      window.console.log(nameVarz);
      window.console.log(nameInt);

      setTimeout(function() {
        callback();
      }, 6000);


    
  }

//////////////////////////////////////////////////////////////
    
  // FUNCTIONS
    var imgChoice;

    //////// Initial Function
    function caller(array) {
      if(array[0] === array.length-1) {
        return;
      }
        

      array[++array[0]](array);
    }

    // function caller2(array) {
    //   array[1] (array);
    // }

    //////// Background Function

    function bkg (array) {

      ///////find img choice

      if (nameVarz[17] >= 1050 && nameVarz[0] >= 13) {
        imgChoice = randomImages[nameVarz[0] % randomImages.length];
      } else if (nameVarz[17] <= 1049 && nameVarz[0] <= 12){
        imgChoice = extraImg[nameVarz[0] % extraImg.length];
      } else if (nameVarz[17] <= 1049 && nameVarz[0] >= 13){
        imgChoice = randomImages[nameVarz[1] % randomImages.length];
      } else if (nameVarz[17] >= 1050 && nameVarz[0] <= 12){
        imgChoice = extraImg[nameVarz[1] % extraImg.length];
      } else {
        imgChoice = extraImg[nameVarz[3] % extraImg.length];
      }

      pic1.onload = function() {
        ctx.drawImage(pic1, 0, 0);
        caller(array);
      };

      pic1.src = imgChoice;
    }

    //////// Layer Function

    function layer (array, r1, r2, r3, r4, r5) {

      var widthCh = [250,
                   500,
                   750,
                   1000,
                   900];

      var heightCh = [250,
                     500,
                     750,
                     1000,
                     900];

      var img = extraImg[nameVarz[r1] % extraImg.length];
      var width = widthCh[nameInt[r2] % widthCh.length];
      var height = heightCh[nameInt[r3] % widthCh.length];

      /////function

      function picture (p1, p2) {
        pic2.onload = function() {
          var blend = composite[nameVarz[r4] % composite.length];
          comp = blend;
          ctx.drawImage(pic2, p1, p2, width, height);
          caller(array);
        };

        pic2.src = img;
      }

      /////conditions
      if (nameVarz[5] >= 8 && nameVarz[6] >= 8) {
        picture(positionX[nameVarz[r5] % positionX.length], positionY[nameVarz[r5] % positionY.length]);
      } else if (nameVarz[5] >= 8 && nameVarz[6] <= 8) {
        picture(positionX[nameVarz[r5] % positionX.length] * -1, positionY[nameVarz[r5] % positionY.length]);
      } else if (nameVarz[5] <= 7 && nameVarz[6] <= 7) {
        picture(positionX[nameVarz[r5] % positionX.length] * -1, positionY[nameVarz[r5] % positionY.length] * -1);
      } else if (nameVarz[5] <= 8 && nameVarz[6] >= 8) {
        picture(positionX[nameVarz[r5] % positionX.length], positionY[nameVarz[r5] % positionY.length] * -1);
      } else {
        //// ADD SOMETHING DIFFERENT HERE
        rectangle();
        window.alert('i didnt work!!');
      }
    }

    function layer1 (array) {
      layer(array, 4, 3, 4, 0, 5);
    }

    function layer2 (array) {
      layer(array, 3, 2, 1, 4, 2);
    }

    function layer3 (array) {
      layer(array, 2, 5, 3, 5, 2);
    }

    //////// Grid Function

    function gridz (array, p1, p2, p3) {
      pic3.onload = function() {
        var blend = composite[nameInt[p1] % composite.length];
        comp = blend;
        ctx.drawImage(pic3, positionX[nameVarz[p2] % positionX.length], positionY[nameVarz[p3] % positionY.length]);
        caller(array);
        
      };

      pic3.src = grids[nameVarz[6] % grids.length];
    }

    function gridz1(array) {
      gridz(array, 1, 6, 5);
    }

    function gridz2(array) {
      gridz(array, 0, 5, 4);
    }

    function gridz3(array) {
      gridz(array, 2, 2, 3);
    }



    ///////// Rectangle Function

    function rectangle (array, p1, p2, p3, p4, p5, p6) {
      var blend = composite[nameVarz[p1] % composite.length];
      comp = blend;
      window.console.log(blend);
      ctx.fillStyle = color[p2];
      ctx.fillRect(position[nameInt[p3] % position.length], position[nameInt[p4] % position.length], position[nameInt[p5] % position.length], position[nameInt[p6] % position.length]);
      caller(array);

    } 

    function rectangle1(array) {
      rectangle(array, 1, nameVarz[0] % color.length, 0, 1, 2, 3);
    } 

    function rectangle2(array) {
      rectangle(array, 2, nameInt[space + 2], 1, 2, 3, 2);
    } 

    function rectangle3(array) {
      rectangle(array, 3, nameInt[space - 2], 2, 1, 2, 4);
    } 

    ////////// Clear Rectangle Function

    function clearRect(array) {
      var blend = composite[nameVarz[2] % composite.length];
      comp = blend;
      ctx.clearRect(position[1], position[2], position[3], position[0]);
      caller(array);
    }

    ////////// Stroked Rectangle Function

    function strokeRect(array, p1, p2, p3, p4, p5, p6) {
      var blend = composite[nameInt[p1] % composite.length];
      comp = blend;
      ctx.strokeStyle = color[nameVarz[p2] % color.length];
      ctx.strokeRect(position[p3], position[p4], position[p5], position[p6]);

      caller(array);
    }

    function strokeRect1(array) {
      strokeRect(array, 4, 2, 2, 3, 0, 1);
    }

    function strokeRect2(array) {
      strokeRect(array, 3, 4, 1, 4, 1, 2);
    }

    function strokeRect3(array) {
      strokeRect(array, 5, 3, 3, 2, 2, 3);
    }

    ///////////// Change Color Function

    function changeColor(array) {

      
      function scheme(p1, p2, p3, p4, p5, p6) {
        var imgData = ctx.getImageData(p1, p2, p3, p4);
        var data = imgData.data;
        
        function invert() {
          for (var i = 0; i < data.length; i += 4) {
            data[i]     = 255 - data[i];     // red
            data[i + 1] = 255 - data[i + 1]; // green
            data[i + 2] = 255 - data[i + 2]; // blue
          }
          ctx.putImageData(imgData, p5, p6);
        }

        invert();
        caller(array);

      }

      if (nameVarz[19] <= 12) {
        scheme(position[0], position[0], position[nameVarz[1] % position.length], position[nameVarz[1] % position.length], position[nameVarz[0] % position.length], position[nameVarz[0] % position.length]);
      } else if (nameVarz[19] > 12 && nameVarz[19] <= 24) {
        scheme(position[0], position[1], position[nameVarz[1] % position.length], position[nameVarz[0] % position.length], position[0], position[0]);
      } else if (nameVarz[19] > 24 && nameVarz[19] <= 38) {
        scheme(position[1], position[0], position[nameVarz[0] % position.length], position[nameVarz[1] % position.length], position[nameVarz[0] % position.length], position[nameVarz[1] % position.length]);
      } else if (nameVarz[19] > 38) {
        scheme(position[0], position[nameVarz[0] % position.length], position[nameVarz[1] % position.length], position[nameVarz[1] % position.length], position[nameVarz[1] % position.length], position[nameVarz[1] % position.length]);
      }
    }

    ////////// Draw a rectangle with a shadow 

    function rectangleShad (array, p1, p2, p3, p4, p5, p6, p7) {
        var blend = composite[nameVarz[p1] % composite.length];
        comp = blend;
        ctx.shadowBlur = 20;
        ctx.shadowColor = color[nameVarz[p2] % color.length];
        ctx.fillStyle = color[nameVarz[p3] % color.length];
        ctx.fillRect(position[nameVarz[p4] % position.length], position[nameVarz[p5] % position.length], position[nameVarz[p6] % position.length], position[nameVarz[p7] % position.length]);

        caller(array);
    } 

    function rectangleShad1(array) {
      rectangleShad(array, 17, 3, 3, 2, 0, 2, 1);
    }

    function rectangleShad2(array) {
      rectangleShad(array, 16, 5, 2, 1, 0, 3, 3);
    }

    function rectangleShad3(array) {
      rectangleShad(array, 15, 5, 4, 5, 1, 3, 5);
    }

    //////// Cut and Paste from a different image

    function cutPaste(array) {

      var blend = composite[nameVarz[15] % composite.length];
      comp = blend;

      /////find img choice

      if (nameVarz[17] <= 700) {
        imgChoice = randomImages[nameInt[2] % randomImages.length];
      } else if (nameVarz[17] > 700 && nameVarz[17] <= 850) {
        imgChoice = extraImg[nameInt[2] % extraImg.length];
      } else if (nameVarz[17] > 850 && nameVarz[17] <= 1000) {
        imgChoice = randomImages[nameInt[3] % randomImages.length];
      } else if (nameVarz[17] > 1000) {
        imgChoice = extraImg[nameInt[3] % extraImg.length];
      } else {
        imgChoice = extraImg[nameInt[0] % extraImg.length];
      }

      function paste (p1, p2, p3, p4, p5, p6) {
        var i;
        var coord = [position[nameVarz[3] % position.length], 
                     position[nameVarz[4] % position.length],
                     position[nameVarz[3] % position.length] * 2,
                     position[nameVarz[4] % position.length] * 2,
                     position[nameVarz[3] % position.length] * -1,
                     position[nameVarz[4] % position.length] * -1,
                     position[nameVarz[3] % position.length] * -2,
                     position[nameVarz[4] % position.length] * -2];

        pic3.onload = function() {

          var xcor = coord[nameVarz[5] % coord.length];
          var ycor = coord[nameVarz[6] % coord.length];

          function draw() {
            ctx.drawImage(pic3, p1, p2, p3, p4, xcor, ycor, p5, p6);
          }

          draw();

          for (i = 2; i < nameVarz[5]; i++) {
            ctx.drawImage(pic3, p1, p2, p3, p4, (i * xcor * incr[1]), (i * ycor * incr[1]), p5, p6);
          }
          
          caller(array);
        };
      }

      paste(position[nameVarz[2] % position.length], position[nameVarz[2] % position.length], position[nameVarz[2] % position.length], position[nameVarz[2] % position.length], position[nameVarz[2] % position.length], position[nameVarz[2] % position.length]);

      pic3.src = imgChoice;
    }

    ////////// Cut and Paste from canvas

    function cutPasteOrig(array) {
      function paste (p1, p2, p3, p4, p5, p6) {
        var i;
        var coord = [position[nameVarz[4] % position.length], 
                     position[nameVarz[5] % position.length],
                     position[nameVarz[4] % position.length] * 2,
                     position[nameVarz[5] % position.length] * 2,
                     position[nameVarz[4] % position.length] * -1,
                     position[nameVarz[5] % position.length] * -1,
                     position[nameVarz[4] % position.length] * -2,
                     position[nameVarz[5] % position.length] * -2];

        var xcor = coord[nameVarz[6] % coord.length];
        var ycor = coord[nameVarz[7] % coord.length];

        function draw() {
          ctx.drawImage(ctx.canvas, p1, p2, p3, p4, xcor, ycor, p5, p6);
        }

        draw();

        for (i = 2; i < nameVarz[5]; i++) {
          ctx.drawImage(ctx.canvas, p1, p2, p3, p4, (i * xcor * incr[1]), (i * ycor * incr[1]), p5, p6);
        }
        
        caller(array);
      }

      var blend = composite[nameVarz[2] % composite.length];
      comp = blend;
      paste(position[nameVarz[3] % position.length], position[nameVarz[4] % position.length], position[nameVarz[5] % position.length], position[nameVarz[2] % position.length], position[nameVarz[3] % position.length], position[nameVarz[4] % position.length]);

    }

    function gradient(array, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14, p15) {
      var stops = [0,
                   nameVarz[p1],
                   0,
                   nameVarz[p2],
                   0];
      var fades = ["#fff",
                   color[nameVarz[p3] % color.length],
                   "#fff",
                   color[nameVarz[p4] % color.length]];

      var blend = composite[nameVarz[p5] % composite.length];
      comp = blend;

      var grd=ctx.createLinearGradient(stops[nameVarz[p6] % stops.length], stops[nameVarz[p7] % stops.length], stops[nameVarz[p8] % stops.length], stops[nameVarz[p9] % stops.length]);
      grd.addColorStop(0, color[nameVarz[p10] % color.length]);
      grd.addColorStop(1, fades[nameVarz[p11] % fades.length]);

      ctx.fillStyle=grd;
      ctx.fillRect(position[nameVarz[p12] % position.length], position[nameVarz[p13] % position.length], negPos[nameVarz[p14] % negPos.length], negPos[nameVarz[p15] % negPos.length]);
      
      caller(array);

    }

    function gradient1(array) {
      gradient(array, 11, 12, 0, 1, 1, 0, 1, 3, 4, 0, 3, 7, 7, 7, 8);
    }

    function gradient2(array) {
      gradient(array, 11, 14, 0, 1, 0, 1, 2, 1, 5, 1, 2, 5, 6, 8, 7);
    }

    function gradient3(array) {
      gradient(array, 10, 13, 1, 0, 1, 2, 1, 5, 3, 1, 6, 5, 2, 1, 3);
    }

    function overlay(array) {
      var blend = composite[nameVarz[2] % composite.length];
      comp = blend;
      var covers = [cw,
                    ch,
                    cw / 2,
                    ch / 2,
                    cw / 4,
                    ch / 4,
                    cw * 0.75,
                    ch * 0.75,
                    cw / 5,
                    ch / 5];

      ctx.fillStyle = oColor[2];
      ctx.fillRect(covers[nameVarz[17] % covers.length], covers[nameVarz[17] % covers.length], covers[nameVarz[17] % covers.length], covers[nameVarz[17] % covers.length]);
      // window.console.log('overlay');
      caller(array);

    }

    var fns1 = [0, bkg, layer1];
    var fns2 = [0, bkg, layer2, overlay, changeColor, ];
    var fns3 = [0, bkg, layer3, changeColor, ];

    var fns4 = [0, bkg, rectangle1];
    var fns5 = [0, bkg, overlay, changeColor, rectangle2];
    var fns6 = [0, bkg, changeColor, rectangle3];

    var fns7 = [0, bkg, changeColor, overlay, rectangleShad1];
    var fns8 = [0, bkg, rectangleShad2];
    var fns9 = [0, bkg, rectangleShad3, changeColor];

    var fns10 = [0, bkg, gradient1, overlay, changeColor];
    var fns11 = [0, bkg, changeColor, gradient2];
    var fns12 = [0, bkg, gradient3, changeColor];

    ////////////

    var fnz1 = [layer1, rectangle1, changeColor, cutPaste, gradient1];
    var fnz2 = [layer2, rectangle2, cutPasteOrig, gradient3];
    var fnz3 = [layer3, changeColor, rectangle3, cutPaste, gradient2];

    var fnz4 = [layer1, overlay, changeColor, rectangleShad1, cutPasteOrig, gradient2];
    var fnz5 = [layer2, changeColor, rectangleShad3, cutPaste, gradient1];
    var fnz6 = [layer3, changeColor, overlay, rectangleShad2, overlay, cutPasteOrig, gradient3];

    var fnz7 = [rectangleShad1, gradient3, layer3, cutPasteOrig];
    var fnz8 = [rectangleShad3, gradient2, layer2, cutPaste];
    var fnz9 = [rectangleShad2, overlay, gradient1, layer1, cutPaste];

    var fnz10 = [gradient2, layer2, rectangle1, changeColor, cutPasteOrig];
    var fnz11 = [gradient3, overlay, layer3, rectangle2, changeColor, cutPaste];
    var fnz12 = [gradient1, changeColor, layer1, rectangle3, cutPasteOrig];

    ///////////

    var funz1 = [gridz1, strokeRect2, changeColor, overlay, cutPaste, gradient1];
    var funz2 = [gridz2, strokeRect1, overlay, changeColor, cutPasteOrig, gradient3];
    var funz3 = [gridz3, overlay, strokeRect3, changeColor, cutPaste, gradient2];

    var funz4 = [clearRect, layer1, gridz1, cutPasteOrig, strokeRect1];
    var funz5 = [clearRect, layer2, gridz3, cutPaste, strokeRect2];
    var funz6 = [clearRect, layer3, gridz2, overlay, cutPasteOrig, strokeRect3];

    var funz7 = [rectangleShad1, overlay, changeColor, gradient3, gridz2, cutPasteOrig];
    var funz8 = [rectangleShad3, gradient2, overlay, changeColor, gridz1, cutPaste];
    var funz9 = [rectangleShad2, gradient1, gridz3, changeColor, cutPaste];

    var funz10 = [gradient2, clearRect, rectangle1, changeColor, gridz3];
    var funz11 = [gradient3, changeColor, clearRect, overlay, rectangle2, gridz2];
    var funz12 = [changeColor, gradient1, overlay, clearRect, rectangle3, gridz1];

    //////////
    
    var steps = [fns1, fns2, fns3, fns4, fns5, fns6, fns7, fns8, fns9, fns10, fns11, fns12];
    var nextSteps = [fnz1, fnz2, fnz3, fnz4, fnz5, fnz6, fnz7, fnz8, fnz9, fnz10, fnz11, fnz12];
    var nextSteps2 = [funz1, funz2, funz3, funz4, funz5, funz6, funz7, funz8, funz9, funz10, funz11, funz12];

    // function funct1(array) {
    //   caller(nextSteps[nameVarz[17] % nextSteps.length]);
    //   caller(array);
    // }

    // function funct2(array) {
    //   caller(steps[nameVarz[2] % steps.length]);
    //   caller(array);
    // }

    // function funct3(array) {
    //   caller(steps[nameVarz[1] % steps.length]);
    //   caller(array);
    // }

    // var finalFunct1 = [funct1, funct2, funct3];
    // var finalFunct2 = [funct1, funct3, funct2];

    // var ending = [finalFunct1, finalFunct2];

/////////////////////////////////////////////////////////////////

    var flash;
    function opaChange() {
      flash = setInterval(oFlash, 650);
    }

    function oFlash() {
      var opaElem = document.getElementById('load-text');
      opaElem.style.opacity = opaElem.style.opacity === "0" ? "1" : "0";
    }

    function saveImage() {
      var picData = c.toDataURL("image/jpeg", 1.0);
      var dataUrl = name.replace(/\s+/g, '') + picData;
      var newData = dataUrl.indexOf('data');
      var newerData = dataUrl.substring(newData);
      // window.console.log(newerData + 'im new');
      window.console.log(dataUrl);
      // window.console.log(dataUrl);
      $.post("http://localhost:3000/save", dataUrl);
      // $.post("http://localhost:3000/data-save", dataUrl);
      $.post("http://localhost:3000/data-save", newerData);
      // $.post("http://localhost:3000/data-save", nameVarz);

      
      $('.loading').css('opacity', '0');
      setTimeout(function() {
        $('.img-wrapper').css('display', 'block');
        setTimeout(function() {
          $('.img-canvas').css('opacity', '1');
          setTimeout(function() {
            $('.reload').css('opacity', '1');
            $('.successful').css('opacity', '1');
          }, 500);
        }, 200);
      }, 600);
      
      // 
    }



    // function showImage () {
    //   $('.img-wrapper').css('display', 'block');
    // }

  $('.submit').click(function() {
    // event.preventDefault();
    // $('#new-img').css('opacity', '1');
    // $('#new-img').css('display', 'block');
    if ($("#fullname").val().length < 2) {
        window.alert('Please enter a valid name longer than 1 letter');
        return false;
    }

    $('.form_body').css('opacity', '0');
    
    $('.loading-div').css('display', 'block');
    setTimeout(function() {
      $('.loading').css('opacity', '1');
      opaChange();
      $('.form_body').css('display', 'none');
    }, 500);
    
    
    pseudoRandom(saveImage);
    
    // setTimeout(function() {$('.img-wrapper').css('display', 'block'); }, 1000);
  });

  
  
});



