(function(){
    c1 = document.getElementById("slide1");
    c2 = document.getElementById("slide2");
    $ = c1.getContext("2d");
    $$ = c2.getContext("2d");
    
    var i = 1; 
    var r = 0; 
    
  img = new Image();
    
  img.src =  "https://i.ibb.co/VMV5nHP/slideshow.png" + new Date().getTime();
  
  img.onload = function() {
      $.drawImage(img,0,0,320,240,0,0,320,240);
      $$.drawImage(img,0,240,320,240,9999,0,320,240);
  };
    
  var t = setInterval(function() {
      var one = (i - 1) * 240;
      if (i == 1 || i == 2)
        var two = i * 240;
        else
        two = 0;
    
      $.drawImage(img,0,one,320,240,0,0,320,240);
      c2.width = c2.width;
      $$.beginPath();
      $$.arc(160, 120, r, 0, Math.PI * 2, false);
      $$.clip();
      $$.drawImage(img,0,two,320,240,0,0,320,240);
    
      r = r + 2;
      if (r > 200) {
        r = 0;
        i++;
      }
      if (i > 3) i = 1;
    }, 40);
  })();