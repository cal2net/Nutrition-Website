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
  li = ul.getElementsByTagName('div');
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

let icons = ['<i class="fa-solid fa-house"></i>','<i class="fa-solid fa-graduation-cap"></i>','<i class="fa-solid fa-note-sticky"></i>','<i class="fa-solid fa-user-group"></i>']
let strings = ['Home','Learn','Plans','Community'];

function menu() {
  console.log('show menu');
  document.getElementById('exit-btn').style.cssText = 'display: block !important';
  document.getElementById('men-btn').style.cssText = 'display: none !important';
  var links = document.getElementById('nav-links');
  links.style.cssText = 'background-color: white;';
  var link = document.getElementsByClassName('nav-link');
  var i;
  for (i=0; i < link.length; i++) {
  link[i].style.cssText = 'display: block !important; color: black;';
  link[i].innerHTML = icons[i] + ' ' +strings[i];
  console.log('link added');
  }
}

function exit() {
  console.log('exit');
  let links = document.getElementsByClassName('nav-link');
  document.getElementById('nav-links').style.cssText = 'background-color: #ff;';
  for(var i=0;i<links.length;i++) {
    links[i].style.cssText = 'display: none !important; color: black;';
  }
  document.getElementById('exit-btn').style.cssText = 'display: none !important';
  document.getElementById('men-btn').style.cssText = 'display: block !important';
}