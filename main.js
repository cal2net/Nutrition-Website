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
  for (i = 1; i < li.length; i++) {
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

// mobile navbar dropdown btn
function menu() {
  console.log('show menu');
  document.getElementById('exit-btn').style.cssText = 'display: block !important';
  document.getElementById('men-btn').style.cssText = 'display: none !important';
  var links = document.getElementById('nav-links');
  links.style.cssText = 'background-color: #222; position: absolute; right: 0; top: 0; width: 85%; height: 100vh;';
  var link = document.getElementsByClassName('nav-link');
  var i;
  for (i=0; i < link.length; i++) {
  link[i].style.cssText = 'display: block !important; color: #ffff; margin-inline: 30px; padding: 8px; margin-top: 20px; border-radius: 8px; margin-bottom: 20px;';
  link[i].innerHTML = icons[i] + ' ' +strings[i];
  console.log('link added');
  }
  sb_close()
}

function exit() {
  console.log('exit');
  let links = document.getElementsByClassName('nav-link');
  document.getElementById('nav-links').style.cssText = 'background-color: #ff;';
  for(var i=0;i<links.length;i++) {
    links[i].style.cssText = 'display: none !important; color: #333;';
  }
  document.getElementById('exit-btn').style.cssText = 'display: none !important';
  document.getElementById('men-btn').style.cssText = 'display: block !important';
}

function sb_open() {
  console.log("sidebar open")
  exit()
  document.getElementById('sidebar').style.cssText = 'display: block !important;'
}

function sb_close() {
  console.log('sidebar close')
  document.getElementById('sidebar').style.cssText = ''
}

// Hey Jack I'm gonna leave some of the diet equations right here
// lbs / 2.205 * 0.8 (this is for how much protein they should be getting to maintain, for every 2.2 lbs they should get 0.8g)
// lbs / 2.205 * 0.8 (this is for how much protein they should be getting to gain muscle, for every 2.2lbs they should get 0.8g )
// ---------------------------------------------------------------------------------------------------------------------
// 13.397(lbs / 2.205) + 4.799(ft * 30.48) - 5.677(age) + 88.362 "maintain weight calorie equation"
// [13.397(lbs / 2.205) + 4.799(ft * 30.48) - 5.677(age) + 88.362] + 700 or 1000 based on how fast they wanna gain weight
// [13.397(lbs / 2.205) + 4.799(ft * 30.48) - 5.677(age) + 88.362] - 700 or 1000 based on how fast they wanna lose weight
// for the equation above it tells you how many calories to maintain weight,
function lbsToProtein(lbs, weightGoal, cm, age, excercise) {
  var kgs = lbs / 2.205;
  var calorieIntake;
  var proteinGrams;
  switch (weightGoal) {
    case 1: //maintain
      calorieIntake = (kgs * 13.397) + (cm * 4.799) - (age * 5.677) + 88.362 + excercise;
      proteinGrams = kgs * 0.8;
      break;
    case 2: //gain
      calorieIntake = ((kgs * 13.397) + (cm * 4.799) - (age * 5.677) + 88.362) + 700 + excercise;
      proteinGrams = kgs * 1.35;
      break;
    case 3: //lose
    calorieIntake = (((kgs * 13.397) + (cm * 4.799) - (age * 5.677) + 88.362) - 700) + excercise;
      proteinGrams = kgs * 0.8;
      break;
  }
  var calorieIntake = Math.round(calorieIntake);
  var proteinGrams = Math.round(proteinGrams);
    
 //changed this to 2.55 for now until you add maintaining too
  console.log("Protein: "+proteinGrams+"g");
  console.log('Calorie Intake: '+calorieIntake+'cal', (typeof calorieIntake));
  return [proteinGrams, calorieIntake];
  
}

function ftTocm(height) {
  console.log(height)
  var ft = height.split("'");
  //console.log(ft[0], ft[1]);
  var cm = ((parseInt(ft[0]) * 12) + parseInt(ft[1])) * 2.54;
  console.log("cm", cm);
  return cm;
}

function submit() {
  var lbs = parseFloat(document.getElementById('lbs-input').value);
  var age = document.getElementById('age-input').value;
  var height = document.getElementById('height-input').value;
  var fat = document.getElementById('fat-input').value;
  var goal_input = document.getElementById('select');
  var excercise_input = document.getElementById('excercise');
  var excercise = excercise_input.value;
  var weightGoal = goal_input.value;
  console.log("weight", lbs);
  console.log("age", age);
  console.log("height", height);
  console.log("fat", fat);
  console.log("Goal:", weightGoal);
  console.log("excercise", excercise)

  var info = lbsToProtein(lbs, parseInt(weightGoal), ftTocm(height), parseInt(age), parseInt(excercise));
  document.getElementById('protein').innerHTML = +info[0]+ ' grams';
  document.getElementById('calories').innerHTML = +info[1]+ ' calories';
  document.getElementById('form').style.cssText = 'display: none;';
  document.getElementById('results').style.cssText = 'display: block !important;';
}