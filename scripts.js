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

for (const item of overlay) {
  item.addEventListener("mouseover", function(){
    item.style.opacity = 0.7;
    document.querySelector(".overlay p").style.opacity = 1;
  })
  
  item.addEventListener("mouseleave", function(){
    item.style.opacity = 0;
    document.querySelector(".overlay p").style.opacity = 0;
  })
}

