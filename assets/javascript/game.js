$(document).ready(function () {

    //our variables

    var randomResult = "";
    var wins = 0;
    var losses = 0;
    var ourTotal = 0;

    //set random number range
    var min = 19;
    var max = 120;
    randomResult = Math.floor(Math.random() * (max - min)) + min;


    //sound for crystal
    var selectSound = new Audio("assets/sound/8bitSelection.wav");

    //sound for winning
    var winSound = new Audio("assets/sound/win.wav");

    //sound for losing
    var loseSound = new Audio("assets/sound/lose.wav");

    //sound for music
    var musicSound = new Audio("assets/sound/music.wav");

    //random number show begining of game
    function getRandomNumber() {
        document.querySelector(".total").innerHTML = "Please match this number: " + randomResult;
    }

    //update wins and losses
    function updateWinsAndLosses() {
        document.querySelector(".winsAndLoss").innerHTML = "Wins: " + wins + " " + "Losses: " + losses;
    }

    function restartGame() {
        randomResult = Math.floor(Math.random() * (max - min)) + min;
        getRandomNumber();
        updateWinsAndLosses();
    }

    $("#start").on("click", function(event){
        musicSound.play();
    })

    $("#stop").on("click", function(event){
        musicSound.pause();
    });



    //Create 4 crystals we can click on
    function createCrystals() {
        for (var i = 0; i < 4; i++) {
            var imgArray = ["assets/images/deadpool.jpg", "assets/images/magneto.jpg", "assets/images/venom.jpg", "assets/images/wolverine.jpg"];
            var randomNumber = Math.floor(Math.random() * 11) + 1;
            console.log(randomNumber);
            var crystal = $("<img>");
            crystal.addClass("crystal");
            crystal.attr("src", imgArray[i]);
            crystal.attr("data-Value", randomNumber);
            $(".crystalsArea").append(crystal);
        }
    }


    //each crystal will have a random number we can click on to add to our total score
    $(document).on("click", ".crystal", function (event) {
        // Determining the crystal's value requires us to extract the value from the data attribute.
        // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
        var crystalValue = ($(this).attr("data-Value"));

        // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter
        crystalValue = parseInt(crystalValue);
        ourTotal += crystalValue;
        document.querySelector(".score").innerHTML = ourTotal;

        selectSound.play();

        if (ourTotal === randomResult) {
            ourTotal = 0;
            winSound.play();
            alert("You're A WINNER!");
            wins++;
            restartGame();
            $(".crystalsArea").empty();
            createCrystals();

        }

        else if (ourTotal > randomResult) {
            ourTotal = 0;
            loseSound.play();
            alert("You lose bub try again!");
            losses++;
            restartGame();
            $(".crystalsArea").empty();
            createCrystals();

        }

    });

    createCrystals();
    updateWinsAndLosses();
    getRandomNumber();

});



//if our score matches random number we will win and 

//if it goes over we will lose.

//that will add to our win counter and lose counter

//new random number will show for new total