$(document).ready (function() {

    var word = [
    "wookie", "jedi", "milleniumfalcon", "ewok", "lightsaber", "padawan", "force","blastcannon",
    "stormtrooper","sith","darthvader","darthmaul","darthsidious","countdooku","obiwankenobi",
    "xwing", "rebelalliance","lukeskywalker","princessleia","hansolo","generalgrievous",
    "tiefighter","deathstar","chewbacca","clonewars","alderaan","coruscant","dagobah","tatooine",
    "endor","geonosis","cloudcity", "carbonite","palpatine","queenamidala", "naboo", "quigonjin",
    ];

    var winText = document.getElementById("wins");
    var lettersGuessed = document.getElementById("letters");
    var remaining = document.getElementById("guesses-remaining");

    //Fires up when 'Enter' key is pressed
    $(document).keypress(function(event){
        var keycode = (event.keyCode ? event.keyCode : event.which);
        if(keycode == '13'){
            //Delete anything in #word and #letters
            $("#word").empty();
            $("#letters").empty();
            var answerArray = [];
            //Resets guesses remaining
            $("#guesses-remaining").html("7");
            //Reset starting image
            $("#left-pane img").attr("src","assets/images/useforce.gif");

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
                if (userKey !== "Enter" && userKey !== "Shift" && userKey !=="Backspace") {
                    lettersGuessed.textContent += event.key + " ";
                    // Update #word with guessed letter
                    for (var j = 0; j < randomWord.length; j++) {
                        if (randomWord[j] === userKey) {
                        answerArray[j] = userKey;
                        };
                    };
                    $("#word").html(answerArray);
                    var answer = answerArray.join("");

                    //Update Guesses remaining each time a letter is wrong
                    if (!answerArray.includes(userKey)) {
                    var y = parseInt(document.getElementById("guesses-remaining").textContent);
                    remaining.textContent = y - 1;};
                    
                    //When #guesses-remaining = 0, alert You Lose!
                    if (document.getElementById("guesses-remaining").textContent== 0) {
                    alert ("You Lose! Press 'Enter' to play again!");
                    $("#left-pane img").attr("src","assets/images/star_wars_fail.jpg");
                };
                };
                //When #word = randomWord, alert You Win!
                if (randomWord == answer) {
                alert ("You win! Press 'Enter' to play again!");
                var x = parseInt(document.getElementById("wins").textContent);
                winText.textContent = x + 1;
                $("#left-pane img").attr("src","assets/images/nailed-it.jpg");
                };
            };
        }
    });



});