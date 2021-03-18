function smoothScroll() {
    var element = document.querySelector(".profile");
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function smoothScroll1() {
    var element = document.querySelector(".projects");
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function smoothScroll2() {
    var element = document.querySelector(".contact");
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function smoothScroll3() {
  var element = document.querySelector(".about");
  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function smoothScroll4() {
  var element = document.querySelector(".skills");
  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

const overlay = document.querySelectorAll(".overlay");
const overlayText = document.querySelectorAll(".overlay p");

for (const item of overlay) {
  item.addEventListener("mouseover", function(){
    item.style.backgroundColor = "rgb(" + 250 + "," + 128 + "," + 114 + "," + 0.7 + ")";
        item.querySelector("p").style.opacity = 1;
    
  })
  
  item.addEventListener("mouseleave", function(){
    item.style.backgroundColor = "rgb(" + 250 + "," + 128 + "," + 114 + "," + 0 + ")";
    item.querySelector("p").style.opacity = 0;
  })
}



