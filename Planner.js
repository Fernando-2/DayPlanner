var currentDay = document.querySelector("#currentDay")
var currentTime = moment().format('H')
currentDay = moment().format('MMMM Do YYYY')
var Save = document.querySelector(".saveBtn")
var nineAm = document.querySelector("#nineAm")
var tenAm = document.querySelector("#tenAm")
var elevenAm = document.querySelector("#elevenAm")
var twelve = document.querySelector("#twelvePm")
var thirteen = document.querySelector("#thirteen")
var fourTeen = document.querySelector("#fourteen")
var fifteen = document.querySelector("#fifteen")
var sixTeen = document.querySelector("#sixteen")
var sevenTeen = document.querySelector("#seventeen")
var eighteen = document.querySelector("#eighteen")
var nineTeen = document.querySelector("#nineteen")
var twenty = document.querySelector("#twenty")
var twentyOne = document.querySelector("#twenty-one")
var tardis = document.querySelector(".tardis")
nineAm = moment().format()
tenAm = moment().hour(10).minute(0)
elevenAm = moment().hour(11).minute(0)
twelve = moment().hour(12).minute(0)
thirteen = moment().hour(13).minute(0)
fourTeen = moment().hour(14).minute(0)
fifteen = moment().hour(15).minute(0)
sixTeen= moment().hour(16).minute(0)
sevenTeen = moment().hour(17).minute(0)
eighteen = moment().hour(18).minute(0)
nineTeen = moment().hour(19).minute(0)
twenty = moment().hour(20).minute(0)
twentyOne = moment().hour(21).minute(0)

$("#currentDay").text(currentDay)
console.log(twenty);
$(".tardis").each(function(){
    if( tardis < currentTime){
      tardis.classList.add('past');
    }if( tardis > currentTime){
       tardis.classList.add('future');
    }if( tardis === currentTime){
        tardis.classList.add('present');
    }
   Save.addEventListener('click', function(event){
        event.preventDefault();
    localStorage.setItem(".tardis",tardis.value)


   })
})
