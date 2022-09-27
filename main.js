console.log("ready")

function next_slide() {
var slide = document.getElementsByClassName("plan-link")
let visible = 3 // visible slides
let invisible = slide.length - visible 
console.log("slides:", slide.length)
for (i=0; i < slide.length;) {
  slide[i].style.display = "none"
  i++
}
for (i=0; i < slide.length;) {
  console.log("added:", i + invisible)
  slide[i + invisible].style.display = "inline-block"
  i++
  
}
}

function prev_slide() {
  var slide = document.getElementsByClassName("plan-link")
  let visible = 3 // visible slides
  let invisible = slide.length - visible 
  console.log("slides:", slide.length)
  for (i=0; i < slide.length;) {
    slide[i].style.display = "none"
    i++
  }
  for (i=0; i < slide.length - invisible;) {
    console.log("added:", i)
    slide[i].style.display = "inline-block"
    i++
  }
}

//search function

function myFunction() {
  // Declare variables
  console.log('searching')
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('myInput');
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName('a');
  headers = ul.getElementsByClassName('side-header')
  console.log(li.length)

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i];
    txtValue = a.textContent || a.innerText;
    console.log(a.innerHTML, "innerhtml")
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}