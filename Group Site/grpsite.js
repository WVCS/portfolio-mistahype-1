var onclickdisc = function(){

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function(){
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    } 
});
}
}

var onclickImg1 = function(){
    
var modal = document.getElementById("mod");

var img = document.getElementById("nj");
var modalImg = document.getElementById("nj");
var captionText = document.getElementById("RM");
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}



var onCloseModal1 = function() {
  var modal = document.getElementById("mod");
  var span = document.getElementsByClassName("close")[0];
  modal.style.display = "none";
}

var onclickImg2 = function(){
  
var modal = document.getElementById("mod2");

var img = document.getElementById("sj");
var modalImg = document.getElementById("sj");
var captionText = document.getElementById("J");
modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}



var onCloseModal2 = function() {
var modal = document.getElementById("mod2");
var span = document.getElementsByClassName("close")[0];
modal.style.display = "none";
}

var onclickImg3 = function(){
 
var modal = document.getElementById("mod3");

var img = document.getElementById("yg");
var modalImg = document.getElementById("yg");
var captionText = document.getElementById("SG");
modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}



var onCloseModal3 = function() {
var modal = document.getElementById("mod3");
var span = document.getElementsByClassName("close")[0];
modal.style.display = "none";
}

var onclickImg4 = function(){
var modal = document.getElementById("mod4");

var img = document.getElementById("hs");
var modalImg = document.getElementById("hs");
var captionText = document.getElementById("JH");
modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}


var onCloseModal4 = function() {
var modal = document.getElementById("mod4");
var span = document.getElementsByClassName("close")[0];
modal.style.display = "none";
}

var onclickImg5 = function(){
  
var modal = document.getElementById("mod5");


var img = document.getElementById("jm");
var modalImg = document.getElementById("jm");
var captionText = document.getElementById("JM");
modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}





var onCloseModal5 = function() {
var modal = document.getElementById("mod5");
var span = document.getElementsByClassName("close")[0];
modal.style.display = "none";
}

var onclickImg6 = function(){
 
var modal = document.getElementById("mod6");

var img = document.getElementById("th");
var modalImg = document.getElementById("th");
var captionText = document.getElementById("V");
modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}



var onCloseModal6 = function() {
var modal = document.getElementById("mod6");
var span = document.getElementsByClassName("close")[0];
modal.style.display = "none";
}

var onclickImg7 = function(){
  
var modal = document.getElementById("mod7");

var img = document.getElementById("jk");
var modalImg = document.getElementById("jk");
var captionText = document.getElementById("JK");
modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}


var onCloseModal7 = function() {
var modal = document.getElementById("mod7");
var span = document.getElementsByClassName("close")[0];
modal.style.display = "none";
}
