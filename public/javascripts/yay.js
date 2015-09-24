$(document).ready(function() {

  // CREATE CANVAS ELEMENTS

  var opacity;
  var nameVarz = [];

  var c = document.getElementById('img-generation');
  var ctx = c.getContext('2d');
  var cw = c.width;
  var ch = c.height;
  var colors = ['rgba(252, 110, 110, ' + opacity + ')',
                'rgba(40, 231, 93, ' + opacity + ')',
                'rgba(49, 146, 255, ' + opacity + ')',
                'rgba(255, 195, 250, ' + opacity + ')',
                'rgba(28, 23, 103, ' + opacity + ')'];

  window.console.log(colors);

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

  var composite = ["lighten",
                   "darken",
                   "multiply",
                   "screen",
                   "xor",
                   "destination-over",
                   "overlay"];

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

      nameVarz.push(firstLett, secondLett, firstLeng, secLeng, flhund, slhund, halfFlhund, halfSlhund, altFl1, altSl1, altFl2, altSl2, opacity, avg, total, dupe);
      
    ///////////////////////////////////////////////////////

      // function thisisit() {
      //   fns1[0](pic1, extraImg)
      // }
      
      if (nameInt[1] >= 105 && nameInt[1] < 114) {
        fns1[0](pic1, extraImg[0], 0, 0);
        if (name.length > 2) {
          ctx.globalCompositeOperation=composite[1];
          // fns1[1](colors[nl % colors.length], nameInt[2] * 2, nameInt[3] * 4, cw * 0.75, ch * 0.56);
        }

        if (name.length > 5) {
          fns1[0](pic2, randomImages[1], 100, 100);

        }
      }

      
      
      // var dataUrl = c.toDataURL("image/jpeg", 1.0);
      // window.console.log(dataUrl);
      // localStorage.setItem(name, dataUrl);
      // $.post("save-image.js", dataUrl);

      if (name.length > 130) {
          fns1[0](pic3, grids[1], cw * 0.75, ch * 0.85);
        }

      window.console.log(nameVarz);

      setTimeout(function() {
        callback();
      }, 1000);


    
  }

//////////////////////////////////////////////////////////////
    
  // FUNCTIONS

    //F1 - 

    function bkg (imgObj, image, x, y) {

      imgObj.onload = function() {
        ctx.drawImage(imgObj, x, y);
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

    function cutPaste() {

    }

    function blur() {

    }

    function pixels() {   
      var imgData = ctx.getImageData(0, 0, cw, ch);
      var data = imgData.data;
      window.console.log( data);
      ctx.putImageData(imgData, -100, 200);
    }

    var fns1 = [bkg, rectangle, pixels, cutPaste, blur];

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



