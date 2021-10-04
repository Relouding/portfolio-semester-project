var modal = document.getElementById("modal-id");

function clickScreenshot() {

var img = document.getElementById("id-image");
var modalImg = document.getElementById("image-id");

img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
};

window.addEventListener("click", function (img) {
    if (img.target.id == "modal-id") {
      modal.style.display = "none";
    }
  });
}

clickScreenshot();