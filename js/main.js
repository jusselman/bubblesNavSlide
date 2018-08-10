var navbar = document.getElementsByTagName('nav')[0];
var myLis = document.getElementsByTagName('li')

window.addEventListener("scroll", function() {
  navbar.style.top = 0;
  navbar.style.position = 'fixed';

  for(var i =0; i <myLis.length; i++) {
    let activeLi = myLis[i];
    let timer = i;
    setTimeout(function() {
      activeLi.style.bottom = 0;
    }, 300 * timer)
  }

})

// RIPPLE EFFECT //
var posX = 0;
var posY = 0;


$('section').mousemove(function(e) {
  console.log(e.pageX, e.pageY);
  posX = e.pageX - 20;
  posY = e.pageY - 20;
})

$('section').click(function() {
  $('section').append(
    "<div class='circle' style='left: " + posX + "px; top: " + posY + "px'></div>"
  )
setTimeout(function() {
  $("section .circle").remove();
}, 1500)
})


// var myVar = document.getElementByTagName("li");
//
// for(var i = 0; i < myVar.length; i++) {
//   my[i].addEventListener('mouseover', function () {
//     this.target.style.color = "white";
//     this.target.style.backgroundColor = "red"
//   })
// }
// [{}]
