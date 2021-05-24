let imgs = [];


$(".submt").click(function() {
    var pics = $(".pic-url").val();
    imgs.push(pics);
      var urlRegex = /((http|https)\:\/\/)?[a-zA-Z0-9\.\/\?\:@\-_=#]+\.([a-zA-Z0-9\&\.\/\?\:@\-_=#])*/;
      if (pics = pics.match(urlRegex)) {
        
        $(".images").append('<div class="box"><div class="imgBox"><img src="' + pics + '" ></div> </div>');
        
      }
  
  else {
     $(".invalid").text("Invalid Input");
  }
   
    
});
