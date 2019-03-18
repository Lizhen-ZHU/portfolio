var options = {
  strings: [ 'I am an User Experience Designer', 'I am an Interaction Designer ', 'Imbuing empathy and perspective through experience and interaction design'],
  typeSpeed: 50,
  startDelay: 500,
  backSpeed: 20,
  backDelay: 900,
  loop: false,
  showCursor: false,
  cursorChar: "|",
}
ityped.init('#typewords', options);



 $( ".text" ).click(function() {
$(".text").fadeToggle("fast");
$("#bg-colors").fadeToggle("fast");
 });

 $( "#bg-video" ).click(function() {
$(".text").fadeToggle("fast");
$("#bg-colors").fadeToggle("fast");
 });
