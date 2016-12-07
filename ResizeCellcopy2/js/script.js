// //$(document).ready(function(backgroundColor);
// 	 $(window).resize(backgroundColor);
// 	  function backgroundColor(){
// 	  	var larghezza = $(document).height(900);}

// var oldHeight=window.innerHeight

 
//   var hue1 = 'rgb(' + (Math.floor(Math.random() * 256 )) + ',' + (Math.floor(Math.random() * 256 )) + ',' +(Math.floor(Math.random() * 256 )) + ')'; 
//   var hue2 = 'rgb(' + (Math.floor(Math.random() * 256 )) + ',' + (Math.floor(Math.random() * 256 )) + ',' +(Math.floor(Math.random() * 256 )) + ')'; 
//   var judge = true;
//   var kb=0;


//   $(".container").resize(function(){
//     if (judge == true) {
//       $(this).animate({backgroundColor: hue1}, "600");
//       // kb++;
//       judge = false;
//     }else {
//       $(this).animate({backgroundColor: hue2}, "600");
//       // kb=1;
//       judge = true;
//     }


//   });


//get width and height of window
var oldHeight = window.innerHeight;


//call this function everytime page size changes (will get called a lot)
$(window).resize(function () {
   
   //measure width and height after page change
   var newHeight = window.innerHeight;
   
   //same thing with height
   //opens window every 200 pixels
   if (newHeight!=oldHeight) {
       
       var hue=(newHeight/2000)*180;

      $(".container").css("filter","hue-rotate("+hue+"deg)");
       
      oldHeight=newHeight;
       
   }  
});