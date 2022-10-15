window.onscroll = function() {stick()};

var header = document.getElementById("nav");
var navbar = document.getElementById("navbar");
var storyBlock = document.getElementById("sec2");
var timelineBlock = document.getElementById("sec3");
var surpriseBlock = document.getElementById("sec4");

var sticky = header.offsetTop;
var scroll = window.pageYOffset;

function stick() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
    if (window.pageYOffset < 70){
      header.style.height = "100px" - scroll;
    }
    else {
      header.style.height = "30px";
    }
    navbar.classList.add("rearrange");
    storyBlock.classList.remove("storyBlockMargin");
    timelineBlock.classList.remove("timelineBlockMargin");
    surpriseBlock.classList.remove("surpriseBlockMargin");
    
  } else {
    header.classList.remove("sticky");
    header.style.height = "100px";
    navbar.classList.remove("rearrange");
    storyBlock.classList.add("storyBlockMargin");
    timelineBlock.classList.add("timelineBlockMargin");
    surpriseBlock.classList.add("surpriseBlockMargin");
  }
}