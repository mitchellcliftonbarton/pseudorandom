$(document).ready(function() {

  // CREATE CANVAS ELEMENTS

  
  var nameVarz = [];
  var oColor = [];
  var position = [];
  var nameInt = [];
  var incr = [];
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

      oColor.push(colors[0], colors[1], colors[2], colors[3], colors[4]);

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
      position.push(xpos1, ypos1, xpos2, ypos2, xlss1, ylss1, xlss2, ylss2, xmr1, ymr1, xmr2, ymr2);

      var incr1 = nameVarz[0] * 0.01;
      var incr2 = nameVarz[0] * 0.1;
      var incr3 = nameVarz[0];
      var incr4 = nameVarz[0] * 10;
      var incr5 = nameVarz[0] * 100;
      incr.push(incr1, incr2, incr3, incr4, incr5);
      window.console.log(incr);
    ///////////////////////////////////////////////////////

      (function() {
        if (nameVarz[0] < 6 && nameVarz[1] < 6) {
          caller(steps[0]);
        }

        if (nameVarz[0] >= 6 && nameVarz[0] <= 12 && nameVarz[1] >= 6 && nameVarz[1] <= 12) {
          caller(steps[1]);
        }

        if (nameVarz[0] >= 13 && nameVarz[0] <= 19 && nameVarz[1] >= 13 && nameVarz[1] <= 19) {
          caller(steps[2]);
        }

        if (nameVarz[0] >= 20 && nameVarz[0] <= 26 && nameVarz[1] >= 20 && nameVarz[1] <= 26) {
          caller(steps[3]);
        }

        ////

        if (nameVarz[0] < 6 && nameVarz[1] >= 6 && nameVarz[1] <= 12) {
          caller(steps[4]);
        }

        if (nameVarz[0] < 6 && nameVarz[1] >= 13 && nameVarz[1] <= 19) {
          caller(nextSteps[0]);
        }

        if (nameVarz[0] < 6 && nameVarz[1] >= 20 && nameVarz[1] <= 26) {
          caller(nextSteps[1]);
        }

        ////

        if (nameVarz[0] >= 6 && nameVarz[0] <= 12 && nameVarz[1] < 6) {
          caller(nextSteps[2]);
        }

        if (nameVarz[0] >= 6 && nameVarz[0] <= 12 && nameVarz[1] >= 13 && nameVarz[1] <= 19) {
          caller(nextSteps[3]);
        }

        if (nameVarz[0] >= 6 && nameVarz[0] <= 12 && nameVarz[1] >= 20 && nameVarz[1] <= 26) {
          caller(nextSteps[4]);
        }

        /////

        if (nameVarz[0] >= 13 && nameVarz[0] <= 19 && nameVarz[1] < 6) {
          caller(steps[0]);
        }

        if (nameVarz[0] >= 13 && nameVarz[0] <= 19 && nameVarz[1] >= 6 && nameVarz[1] <= 12) {
          caller(steps[1]);
        }

        if (nameVarz[0] >= 13 && nameVarz[0] <= 19 && nameVarz[1] >= 20 && nameVarz[1] <= 26) {
          caller(steps[2]);
        }

        /////

        if (nameVarz[0] >= 20 && nameVarz[0] <= 26 && nameVarz[1] < 6) {
          caller(nextSteps[0]);
        }

        if (nameVarz[0] >= 20 && nameVarz[0] <= 26 && nameVarz[1] >= 6 && nameVarz[1] <= 12) {
          caller(nextSteps[2]);
        }

        if (nameVarz[0] >= 20 && nameVarz[0] <= 26 && nameVarz[1] >= 13 && nameVarz[1] <= 19) {
          caller(nextSteps[2]);
        }
      }());

      window.console.log(nameVarz);
      window.console.log(nameInt);
      window.console.log(position);

      setTimeout(function() {
        callback();
      }, 1000);


    
  }

//////////////////////////////////////////////////////////////
    
  // FUNCTIONS
    var imgChoice;

    //////// Initial Function
    function caller(array) {
      array[1] (array);
    }

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
        array[++array[0]](array);
        
      };

      pic1.src = imgChoice;
    }

    //////// Layer Function

    function layer (array) {

      var width;
      var height;

      ///////find img choice

      if (nameVarz[4] >= 11 && nameVarz[0] >= 13) {
        imgChoice = randomImages[nameVarz[0] % randomImages.length];
      } else if (nameVarz[4] <= 10 && nameVarz[0] <= 12){
        imgChoice = extraImg[nameVarz[0] % extraImg.length];
      } else if (nameVarz[4] <= 10 && nameVarz[0] >= 13){
        imgChoice = randomImages[nameVarz[1] % randomImages.length];
      } else if (nameVarz[4] >= 11 && nameVarz[0] <= 12){
        imgChoice = extraImg[nameVarz[1] % extraImg.length];
      } else {
        imgChoice = extraImg[nameVarz[3] % extraImg.length];
      }

      //////// find width

      if (nameVarz[0] >= 11 && nameVarz[1] >= 13) {
        width = 250;
      } else if (nameVarz[0] <= 10 && nameVarz[1] <= 12){
        width = 500;
      } else if (nameVarz[0] <= 10 && nameVarz[1] >= 13){
        width = 750;
      } else if (nameVarz[0] >= 11 && nameVarz[1] <= 12){
        width = 1000;
      } else {
        width = 900;
      }

      /////find height

      if (nameVarz[4] >= 11 && nameVarz[1] >= 13) {
        height = 250;
      } else if (nameVarz[4] <= 10 && nameVarz[1] <= 12){
        height = 500;
      } else if (nameVarz[4] <= 10 && nameVarz[1] >= 13){
        height = 750;
      } else if (nameVarz[4] >= 11 && nameVarz[1] <= 12){
        height = 1000;
      } else {
        height = 900;
      }

      /////function

      function picture (p1, p2) {
        pic2.onload = function() {
          ctx.drawImage(pic2, p1, p2, width, height);
          array[++array[0]](array);
        };

        pic2.src = imgChoice;
      }

      /////conditions

      if (nameVarz[5] >= 8 && nameVarz[6] >= 8) {

        picture(position[nameVarz[5] % position.length], position[nameVarz[5] % position.length]);
      } else if (nameVarz[5] >= 8 && nameVarz[6] <= 8) {

        picture(position[nameVarz[5] % position.length] * -1, position[nameVarz[5] % position.length]);
      } else if (nameVarz[5] <= 7 && nameVarz[6] <= 7) {

        picture(position[nameVarz[5] % position.length] * -1, position[nameVarz[5] % position.length] * -1);
      } else if (nameVarz[5] <= 8 && nameVarz[6] >= 8) {

        picture(position[nameVarz[5] % position.length], position[nameVarz[5] % position.length] * -1);
      } else {
        //// ADD SOMETHING DIFFERENT HERE
        rectangle();
        window.alert.log('i didnt work!!');
      }
    }

    //////// Grid Function

    function gridz (array) {
      pic3.onload = function() {
        ctx.drawImage(pic3, position[nameVarz[6] % position.length], position[nameVarz[5] % position.length]);
        array[++array[0]](array);
        
      };

      pic3.src = grids[nameVarz[6] % grids.length];
    }

    //F2 - first name length = width, last name length = height, add '00' (etc.) on to the end
    //F2 - color = value of second letter
    //F2 - x = cw - length of something etc.
    function rectangle (array) {
      ctx.fillStyle = color[nameVarz[0] % color.length];
      ctx.fillRect(position[nameInt[0] % position.length], position[nameInt[1] % position.length], position[nameInt[2] % position.length], position[nameInt[3] % position.length]);
      array[++array[0]](array);
      

      // if (nameVarz[17] <= 700) {

        

      // } else if (nameVarz[17] > 700 && nameVarz[17] <= 850) {

        

      // } else if (nameVarz[17] > 850 && nameVarz[17] <= 1000) {

        

      // } else if (nameVarz[17] > 1000) {

        

      // } else {

        

      // }

    } 

    function clearRect(array) {
      ctx.clearRect(position[1], position[2], position[3], position[0]);
      array[++array[0]](array);
    }

    function strokeRect(array) {
      ctx.strokeStyle = color[nameVarz[2] % color.length];
      ctx.strokeRect(position[2], position[3], position[0], position[1]);

      array[++array[0]](array);
    }

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

        array[++array[0]](array);
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

    ////how to apply to only one?????
    function rectangleShad (array) {
        ctx.shadowBlur = 20;
        ctx.shadowColor = color[nameVarz[3] % color.length];
        ctx.fillStyle = color[nameVarz[3]];
        ctx.fillRect(position[nameVarz[2]], position[nameVarz[0]], position[nameVarz[2]], position[nameVarz[1]]);

        array[++array[0]](array);
    } 

    //add for loop
    function cutPaste(array) {

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
        pic3.onload = function() {
          for (var i = 0; i < nameVarz[5]; i++) {
            ctx.drawImage(pic3, p1, p2, p3, p4, (i * incr[nameVarz[1] % incr.length]) * 0.1, (i * incr[nameVarz[1] % incr.length]) * 0.1, p5, p6);
            window.console.log('im working');
          }
          
          array[++array[0]](array);
        };
      }

      paste(300, 300, 300, 300, 300, 300);

      // pic3.onload = function() {
      //   for (var i = 0; i < nameVarz[5]; i++) {
      //     ctx.drawImage(pic3, 100, 100, 200, 200, (i * 250) * 0.1, (i * 250) * 0.1, 200, 200);
      //   }
        
      //   array[++array[0]](array);
      // };



      pic3.src = imgChoice;
    }

    ////?????????????????? add for loop
    function cutPasteOrig(array) {
      ctx.drawImage(ctx.canvas, 100, 100, 200, 200, 250, 250, 200, 200);
      array[++array[0]](array);
    }

    function gradient() {
      var grd=ctx.createLinearGradient(0,0,170,0);
      grd.addColorStop(0, color[nameVarz[0] % color.length]);
      grd.addColorStop(1, "white");

      ctx.fillStyle=grd;
      ctx.fillRect(position[1],position[1],150,100);

    }

    function overlay() {
      ctx.fillStyle = color[2];
      ctx.fillRect(0, 0, cw, ch);

    }

    // function transform() {

    // }

    function pixels() {   
      var imgData = ctx.getImageData(0, 0, cw, ch);
      // var data = imgData.data;
      ctx.putImageData(imgData, 0, 0);
    }

    var fns1 = [1, bkg, rectangle, clearRect, layer, gradient];
    var fns2 = [1, bkg, layer, rectangleShad, gradient, cutPaste];
    var fns3 = [1, bkg, layer, changeColor, gradient, rectangle];
    var fns4 = [1, bkg, changeColor, overlay, layer, rectangle, rectangle];
    var fns5 = [1, bkg, strokeRect, layer, cutPasteOrig, rectangle];

    var fnz1 = [1, bkg, layer, rectangle, gridz, clearRect, gradient];
    var fnz2 = [1, bkg, layer, rectangleShad, rectangle, cutPaste];
    var fnz3 = [1, bkg, layer, cutPaste, gridz, changeColor, gradient, rectangle, overlay];
    var fnz4 = [1, bkg, layer, changeColor, rectangle];
    var fnz5 = [1, bkg, layer, cutPasteOrig, rectangle, changeColor];
    
    var steps = [fns1, fns2, fns3, fns4, fns5];
    var nextSteps = [fnz1, fnz2, fnz3, fnz4, fnz5];

/////////////////////////////////////////////////////////////////

    

  $('.submit').click(function() {
    event.preventDefault();
    // $('#new-img').css('opacity', '1');
    // $('#new-img').css('display', 'block');
    $('.form_body').css('opacity', '0');
    $('.form_body').css('opacity', '0');
    pseudoRandom(pixels);
    var dataUrl = c.toDataURL("image/jpeg", 1.0);
    window.console.log(dataUrl);
    // localStorage.setItem(name, dataUrl);
    // $.post("localhost:3001", dataUrl);
    setTimeout(function() {$('.img-wrapper').css('display', 'block'); }, 1000);
  });

  
  
});



