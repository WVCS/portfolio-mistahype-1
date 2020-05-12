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

var onclickImg = function(){
    // Get the modal
var modal = document.getElementById("mod");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("mem");
var modalImg = document.getElementById("mem");
var captionText = document.getElementById("RM");
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}