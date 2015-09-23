$(document).ready(function() {

  // PSEUDORANDOM FUNCTION

  function pseudoRandom () {

    ////////////////////////////////////////////////////////

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
      
      // FOR LOOP
      for (var i = 0; i < nl; i++) { 
        nameInt.push(name.charCodeAt(i));
      }

      var space = nameInt.indexOf(32);
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

      window.console.log(flhund);
      window.console.log(slhund);
      window.console.log(halfFlhund);
      window.console.log(halfSlhund);
      window.console.log(altFl1);
      window.console.log(altSl1);
      window.console.log(altFl2);
      window.console.log(altSl2);

    ////////////////////////////////////////////////////////

      // VARIABLES

      //CREATE CANVAS ELEMENTS
      
      var opacity;

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


      var c = document.getElementById('img-generation');
      var ctx = c.getContext('2d');
      var cw = c.width;
      var ch = c.height;
      var colors = ['rgba(252, 110, 110, ' + opacity + ')',
                    'rgba(40, 231, 93, ' + opacity + ')',
                    'rgba(49, 146, 255, ' + opacity + ')',
                    'rgba(255, 195, 250, ' + opacity + ')',
                    'rgba(28, 23, 103, ' + opacity + ')'];

      
      
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
      

    ////////////////////////////////////////////////////////

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

      function pixels() {
        var imgData = ctx.getImageData(0, 0, 100, 100);
        // var data = imgData.data;
        ctx.putImageData(imgData, 200, 200);
      }

      var fns1 = [bkg, rectangle, pixels];

      // CREATE OBJECT TO HOLD DATA

      var finalObj = {
        name: name,
        nl: nl,
        val: nameInt,
        lastN: secondLett,
        firstL: firstLeng,
        secL: secLeng,
        flhund: flhund,
        slhund: slhund,
        halfFlhund: halfFlhund,
        halfSlhund: halfSlhund
      };

      window.console.log(finalObj.name);
      window.console.log(finalObj.nl);
      window.console.log(finalObj.val);
      window.console.log(finalObj.lastN);
      window.console.log(finalObj.firstL);
      window.console.log(finalObj.secL);




    

    ///////////////////////////////////////////////////////

      // SWITCH STATEMENT

      var firstLett = nameInt[0];

      switch (firstLett) {

        case 97:
        case 110:
        case 65:
        case 78:
          
          window.console.log('97 || 110 || 65 || 78');
          break;

        case 98:
        case 111:
        case 66:
        case 79:
          
          window.console.log('98  || 111 || 66 || 79');
          break;

        case 99:
        case 112:
        case 67:
        case 80:
          
          window.console.log('99 || 112 || 67 || 80');
          break;

        case 100:
        case 113:
        case 68:
        case 81:
          
          window.console.log('100 || 113 || 68 || 81');
          break;

        case 101:
        case 114:
        case 69:
        case 82:
          
          window.console.log('101 || 114 || 69 || 82');
          break;

        case 102:
        case 115:
        case 70:
        case 83:
          
          window.console.log('102 || 115 || 70 || 83');
          break;

        case 103:
        case 116:
        case 71:
        case 84:
          
          window.console.log('103 || 116 || 71 || 84');
          break;

        case 104:
        case 117:
        case 72:
        case 85:
          
          window.console.log('104 || 117 || 72 || 85');
          break;

        case 105:
        case 118:
        case 73:
        case 86:
          
          window.console.log('105 || 118 || 73 || 86');
          break;

        case 106:
        case 119:
        case 74:
        case 87:
          
          window.console.log('106 || 119 || 74 || 87');
          break;

        case 107:
        case 120:
        case 75:
        case 88:
          window.console.log('107 || 120 || 75 || 88');
          break;

        case 108:
        case 121:
        case 76:
        case 89:
          
          window.console.log('108 || 121 || 76 || 89');
          break;

        case 109:
        case 122:
        case 77:
        case 90:

          if (nameInt[1] < 105) {
            fns1[0](pic1, extraImg[2], 0, 0);
            if (name.length > 2) {
              ctx.globalCompositeOperation=composite[3];
              fns1[1](colors[nl % colors.length], nameInt[3] * 2, nameInt[4] * 4, cw * 0.25, ch * 0.96);
            }

            if (name.length > 5) {
              fns1[0](pic2, grids[2], 100, 100);
            }

            if (name.length > 8) {
              ctx.globalCompositeOperation=composite[2];
              fns1[2](200, 650, 800, 700);
              fns1[1](colors[nl * 2 % colors.length], cw * 0.25, ch * 0.65, cw * 0.4, ch * 0.50);
            }

            if (name.length > 11) {
              ctx.globalCompositeOperation=composite[0];
              fns1[2](200, 350, 600, 700);
              fns1[1](colors[nl * 2 % colors.length], cw * 0.75, ch * 0.65, cw * 0.20, ch * 0.30);
            }

            if (name.length > 13) {
              fns1[0](pic3, extraImg[2], cw * 0.75, ch * 0.85);
            }
          }

          if (nameInt[1] >= 105 && nameInt[1] < 114) {
            fns1[0](pic1, extraImg[0], 0, 0);
            if (name.length > 2) {
              ctx.globalCompositeOperation=composite[1];
              // fns1[1](colors[nl % colors.length], nameInt[2] * 2, nameInt[3] * 4, cw * 0.75, ch * 0.56);
            }

            if (name.length > 5) {
              fns1[0](pic2, randomImages[1], 100, 100);
            }

            if (name.length > 8) {
              ctx.globalCompositeOperation=composite[1];
              // fns1[2](200, 350, 600, 700);
              // fns1[1](colors[nl * 2 % colors.length], cw * 0.75, ch * 0.65, cw * 0.20, ch * 0.30);
            }

            if (name.length > 11) {
              ctx.globalCompositeOperation=composite[1];
              // fns1[2](200, 350, 600, 700);
              // fns1[1](colors[nl * 2 % colors.length], cw * 0.75, ch * 0.65, cw * 0.20, ch * 0.30);
              // fns1[3]();
            }

            if (name.length > 13) {
              fns1[0](pic3, grids[1], cw * 0.75, ch * 0.85);
            }
          }

          if (nameInt[1] >= 114) {
            if (name.length > 2) {
              ctx.globalCompositeOperation=composite[5];
              fns1[1](colors[nl % colors.length], nameInt[6] * 2, nameInt[3] * 4, cw * 0.75, ch * 0.56);
            }

            if (name.length > 5) {
              fns1[0](pic2, randomImages[3], 100, 100);
            }

            if (name.length > 8) {
              ctx.globalCompositeOperation=composite[4];
              fns1[2](200, 350, 300, 100);
              fns1[1](colors[nl * 2 % colors.length], cw * 0.75, ch * 0.65, cw * 0.20, ch * 0.30);
            }

            if (name.length > 11) {
              ctx.globalCompositeOperation=composite[1];
              fns1[2](200, 350, 600, 700);
              fns1[1](colors[nl * 2 % colors.length], cw * 0.75, ch * 0.65, cw * 0.20, ch * 0.30);
            }

            if (name.length > 13) {
              fns1[0](pic3, grids[4], cw * 0.75, ch * 0.85);
            }
          }

          // fns1[0](randomImages[2], cw / 2.4, ch / 1.5);
          window.console.log('109 || 122 || 77 || 90');
          break;

        default:
          
          break;

      }

      var dataUrl = c.toDataURL("image/jpeg", 1.0);
      window.console.log(dataUrl);
      // localStorage.setItem(name, dataUrl);
      // $.post("save-image.js", dataUrl);


    
  }



  $('.submit').click(function() {
    event.preventDefault();
    // $('#new-img').css('opacity', '1');
    // $('#new-img').css('display', 'block');
    $('.form_body').css('opacity', '0');
    $('.form_body').css('opacity', '0');
    pseudoRandom();
    setTimeout(function() {$('.img-wrapper').css('display', 'block'); }, 1000);
  });

  $('.name').focus(function() {
    $('.submit').css({'margin-top': '75px', 'opacity': '1', 'visibility': 'visible'});
  });

  $('.name').focusout(function() {
    $('.submit').css({'margin-top': '85px', 'opacity': '0', 'visibility': 'hidden'});
  }); 

  
});

// var fns = [
//   function() { color it blue },
//   function() { color it red },
//   function() { color it green }
// ]
// fns[name.length % fns.length]()


