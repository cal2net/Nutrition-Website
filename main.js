console.log("ready")

function prev_slide() {
let slides = []
var slide = document.getElementsByClassName("plan-link")
console.log("slides:", slide.length)
for (i=0; i < slide.length-1;) {
  slide[i].style.display = "none"
  i++
  console.log(i)
}
for (i=0; i < slide.length;) {
  i++
  slide[i].style.display = "inline-block"
}
}

function next_slide() {

}