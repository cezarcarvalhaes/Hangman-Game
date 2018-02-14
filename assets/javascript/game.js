$(document).ready (function() {

    var word = [
    "wookie", "jedi", "milleniumfalcon", "ewok", "lightsaber", "padawan", "force","blastcannon",
    "stormtrooper","sith","darthvader","darthmaul","darthsidious","countdooku","obiwankenobi",
    "xwing", "rebelallicance","lukeskywalker","princessleia","hansolo","generalgrievous",
    "tiefighter","deathstar","chewbacca","clonewars","alderaan","coruscant","dagobah","tatooine",
    "endor","geonosis","cloudcity", "carbonite","palpatine","queenamidala", "naboo", "quigonjin",
    ];

    var winText = document.getElementById("wins");
    var lettersGuessed = document.getElementById("letters");
    var answerArray = [];

    //Fires up when 'Enter' key is pressed
    $(document).keypress(function(event){
        var keycode = (event.keyCode ? event.keyCode : event.which);
        if(keycode == '13'){
            //Delete anything in #word
            $("#word").empty();
            //Delete anything in #letters
            $("#letters").empty();
            //Choose random word from array
            var randomWord = word[Math.floor(Math.random() * word.length)];
            console.log(randomWord); //just checking here

            //Create a for loop that displays '-' for length of word.
            for (var i = 0; i < randomWord.length; i++) {
                answerArray[i] = "_";
              }
            $("#word").html(answerArray);
            
            //Prints user input to 'letters guessed:'
            document.onkeyup = function(event) {
                var userKey = event.key;
                if (userKey !== "Enter") {
                    lettersGuessed.textContent += event.key + " ";
                    // Update #word with guessed letter
                    for (var j = 0; j < word.length; j++) {
                        if (randomWord[j] === userKey) {
                        answerArray[j] = userKey;
                        };
                    };
                    $("#word").html(answerArray);
                };
            };

             //When #word = randomWord, alert You Win!
            if ($("#word") == $(randomWord)) {
            alert ("You win!");
            var x = parseInt(document.getElementById("wins").textContent);
            winText.textContent = x + 1;
            };
        }
    });



});