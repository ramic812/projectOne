 
var slideImg=document.getElementById("slideImg");

var images = new Array(
  "images/1.jpg",
  "images/2.jpg",
  "images/3.jpg"
);
var len = images.length;
var i=0;

 function slider(){
  if(i>len-1){
    i=0;
  }
/* 
   slideImg.style.backgroundImage='url('+images[i]+')';  */
slideImg.src= images[i];
  i++;
  setTimeout('slider()',3000);
  
} 
window.addEventListener('scroll',reveal);

function reveal(){
  var reveals=document.querySelectorAll('.reveal');

  for(var i =0;i<reveals.length;i++){
    var windowheight=window.innerHeight;
    var revealtop=reveals[i].getBoundingClientRect().top;
    var revealpoint=150;

    if(revealtop < windowheight -revealpoint){
      reveals[i].classList.add('active');
    }
    else{
      reveals[i].classList.remove('active');
    }
  }
}