
//SELECT DESTINATION BUTTONS
let selectBtns=document.querySelectorAll('.selBtn');
let selectForm=document.querySelectorAll('.selectForm');
let btnsSelectBackground=document.querySelectorAll('.btns')
let iconChandgesDestinationSelector=document.querySelector('.fa-exchange')

//background
selectBtns[0].addEventListener('click',background);
function background() {
  btnsSelectBackground[0].classList.add("active");
    btnsSelectBackground[1].classList.remove("active")
}
selectBtns[1].addEventListener('click',background1);
function background1() {
  btnsSelectBackground[1].classList.add("active");
    btnsSelectBackground[0].classList.remove("active")
}

//displays block/none
for (let i = 0; i < selectBtns.length; i++) {
  selectBtns[i].addEventListener('click', showDestinations);
}

function showDestinations(e) {
  for (let i = 0; i < selectForm.length; i++) {
selectForm[i].style.display="none";
  }
  if (e instanceof Event) {
    e.preventDefault();
    let id = `#${this.getAttribute('href')}`;
    document.querySelector(id).style.display = 'block';

  } else {
    document.querySelector(e).style.display = 'block';
  }
}


// X from input FIELD CLEAR value
let searchDestinationsInput=document.querySelectorAll('.fa-times');
let inputField=document.querySelectorAll('.search .input input');
for (let i = 0; i < searchDestinationsInput.length; i++) {
  searchDestinationsInput[i].addEventListener('click',clearValue)
  function clearValue(e) {
inputField[i].value=''
  }
}

/**CALENDAR DATE*/
let date=document.querySelectorAll('.dateCalendar');
let calendar = document.querySelector('.calendar')
for (let i = 0; i < date.length; i++) {
  $( function() {
     $( date[i] ).datepicker();
   } );
}

/**END CALENDAR*/


/**TIME*/
//Pick up TimeHour
let timePickUp=document.querySelectorAll('.hours')[0];
  let h;
for (let i = 0; i < 24; i++) {
if(i<=9){
  h=0
}else{
  h="";
}

$(timePickUp).append('<option value='+h+i+'>'+h+i+' h</option>');
}
//Pick up TimeMinutes
let minutePickUp=document.querySelectorAll('.minutes')[0];
  let m;
for (let i = 0; i < 60; i+=5) {
if(i<=9){
  m=0
}else{
  m="";
}

$(minutePickUp).append('<option value='+m+i+'>'+m+i+' min</option>');
}




//Time of landing
let timeOfLanding=document.querySelectorAll('.hours')[1];
let h1;
for (let i = 0; i < 24; i++) {
  if(i<=9){
    h1=0
  }else{
    h1="";
  }
$(timeOfLanding).append('<option value='+h1+i+'>'+h1+i+' h</option>');
}

//time of landing MINUTES
let minutePickUp1=document.querySelectorAll('.minutes')[1];
  let m1;
for (let i = 0; i < 60; i+=5) {
if(i<=9){
  m1=0
}else{
  m1="";
}

$(minutePickUp1).append('<option value='+m+i+'>'+m+i+' min</option>');
}

/**END TIME*/



/**PASSENGERS*/
//passenger to air
let passengersToAir=document.querySelectorAll('.passengers')[0];
selected='';
for (let i = 1; i < 101; i++) {
if(i==2){
  selected='selected'
}else{
    selected=''
}
$(passengersToAir).append('<option value='+i+' '+ selected+'>'+i+'</option>');
}

//passenger from air
let passengersFromAir=document.querySelectorAll('.passengers')[1];
selected1='';
for (let i = 1; i < 101; i++) {
if(i==2){
  selected1='selected'
}else{
    selected1=''
}
$(passengersFromAir).append('<option value='+i+' '+ selected1+'>'+i+'</option>');
}

//passenger to air Sultclasses
let suitcasesToAir=document.querySelectorAll('.suitcases')[0];
selected3='';
for (let i = 1; i < 101; i++) {
if(i==2){
  selected3='selected'
}else{
    selected3=''
}
$(suitcasesToAir).append('<option value='+i+' '+ selected3+'>'+i+'</option>');
}

//passenger from air Sultclasses
let suitcasesFromAir=document.querySelectorAll('.suitcases')[1];
selected4='';
for (let i = 1; i < 101; i++) {
if(i==2){
  selected4='selected'
}else{
    selected4=''
}
$(suitcasesFromAir).append('<option value='+i+' '+ selected4+'>'+i+'</option>');
}




/*IF checked TRUE -->display block return trip*/

function bookingToAir() {
  let checkBox=document.querySelector('#bookToAir');
  let returnTrip=document.querySelector('.returnTrip');

  //mediaquery
  let display=''
  function mediaToAir(x) {
    if (x.matches) { // If media query matches
      display=returnTrip.style.display = "block";
    } else {
    display=returnTrip.style.display = "flex";
    }
  }

  var x = window.matchMedia("(max-width: 768px)")
  mediaToAir(x)
  x.addListener(mediaToAir)
  //end media query


if (checkBox.checked == true){
display

} else {
returnTrip.style.display = "none";
}
}


//BOOKING from air
function bookingFromAir() {
  let checkBox1=document.querySelector('#bookFromAir');
  let returnTrip1=document.querySelectorAll('.returnTrip')[1];

  //mediaquery
  let display1=''
  function mediaFromAir(x1) {
    if (x1.matches) { // If media query matches
      display1=returnTrip1.style.display = "block";
    } else {
    display1=returnTrip1.style.display = "flex";
    }
  }

  var x1 = window.matchMedia("(max-width: 768px)")
  mediaFromAir(x1)
  x1.addListener(mediaFromAir)
  //end media query


if (checkBox1.checked == true){
display1

} else {
returnTrip1.style.display = "none";
}
}

//return trip time of landing To AIROPORT
let timeOfLandingToAir=document.querySelectorAll('.hours')[2];
let h2;
for (let i = 0; i < 24; i++) {
  if(i<=9){
    h2=0
  }else{
    h2="";
  }
$(timeOfLandingToAir).append('<option value='+h2+i+'>'+h2+i+' h</option>');
}

//return trip time of landing From AIROPORT
let timeOfLandingFromAir=document.querySelectorAll('.hours')[3];
let h3;
for (let i = 0; i < 24; i++) {
  if(i<=9){
    h3=0
  }else{
    h3="";
  }
$(timeOfLandingFromAir).append('<option value='+h3+i+'>'+h3+i+' h</option>');
}

//return trip minutes To Airport
let returnMinutePickUpTo=document.querySelectorAll('.minutes')[2];
  let m2;
for (let i = 0; i < 60; i+=5) {
if(i<=9){
  m2=0
}else{
  m2="";
}

$(returnMinutePickUpTo).append('<option value='+m2+i+'>'+m2+i+' min</option>');
}

//return trip minutes From Airport
let returnMinutePickUpFrom=document.querySelectorAll('.minutes')[3];
  let m3;
for (let i = 0; i < 60; i+=5) {
if(i<=9){
  m3=0
}else{
  m3="";
}

$(returnMinutePickUpFrom).append('<option value='+m3+i+'>'+m3+i+' min</option>');
}



//validate FORM
let submitForm = document.querySelector('#submitForm');
document.addEventListener('click',sbmtForm);
let inputsAll=document.querySelectorAll('input');
for (var i = 0; i < inputsAll.length; i++) {
function sbmtForm(e) {

}
}
