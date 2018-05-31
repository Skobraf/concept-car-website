var button = document.getElementById("menu");
var ulright = document.getElementById("sidebar")
var x = true;
button.addEventListener("click", function(){
  
  if (x) {
    ulright.style.transform = "translateX(0)";
    x = false;
  }
  else {
    ulright.style.transform = "translateX(-100vw)";
    x = true;
  }
});