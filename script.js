let imgs = [];
var urlRegex = /^https?:\/\/.*\/.*\.(png|gif|webp|jpeg|jpg)\??.*$/gmi;
$(".submt").click(function() {
    var pics = $(".pic-url").val();
    imgs.push(pics);
  console.log(pics);
      
      if (pics = pics.match(urlRegex)) {
        
        $(".images").append('<div class="box"><div class="imgBox"><img src="' + pics + '" ></div></div>');
        
      }
  
  else {
     $(".invalid").text("Invalid Input");
  }
   
    
});

