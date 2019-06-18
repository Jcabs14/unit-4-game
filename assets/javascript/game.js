$(document).ready(function() {

//our variables

var randomResult = "";
var wins = 0;
var losses = 0;
var ourTotal = 0;

//set random number range
var min = 19;
var max = 120;
randomResult = Math.floor(Math.random() * (max - min)) + min;

//random number show begining of game
function getRandomNumber(){
console.log(randomResult);
document.querySelector(".total").innerHTML = randomResult;
}

//update wins and losses
function updateWinsAndLosses() {
    document.querySelector(".winsAndLoss").innerHTML = "Wins: " + wins + " " + "Losses: " + losses;
}


//Create 4 crystals we can click on
for (var i=0; i < 4; i++ )
{
    var randomNumber = Math.floor(Math.random() * 12);
    console.log(randomNumber);
    var crystal = $("<img>");
    crystal.addClass("crystal");
    crystal.attr("src", "https://picsum.photos/id/237/200/300");
    crystal.attr("data-Value", randomNumber);
    $(".crystalsArea").append(crystal);
}

//each crystal will have a random number we can click on to add to our total score
$(".crystal").on("click", function(event)
{
    // Determining the crystal's value requires us to extract the value from the data attribute.
    // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
    var crystalValue = ($(this).attr("data-Value"));

// Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter

    crystalValue = parseInt(crystalValue);
    ourTotal += crystalValue;
    document.querySelector(".score").innerHTML = ourTotal;
    console.log(ourTotal);
});

updateWinsAndLosses();
getRandomNumber(); 
});



//if our score matches random number we will win and 

//if it goes over we will lose.

//that will add to our win counter and lose counter

//new random number will show for new total