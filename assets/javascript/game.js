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

//Fires up when a key is pressed
    document.onkeyup = function(event) {
        //var doNotDisplay = ['Enter','Shift','Control','Alt','Meta','CapsLock',',','.','/',';','[','],','1','2','3','4','5','6','7','8','9','0'];
        var guesses = [];
        lettersGuessed.textContent += event.key + " ";
        var userText = event.key;
        guesses.push(userText);
       // var unique = userText.filter(function(item, i, ar){ return ar.indexOf(item) === i; });
        
        //if(userText != doNotDisplay) {
        //lettersGuessed = userText;
        //};
    //Picks random Star Wars word from word array
        var randomWord = word[Math.floor(Math.random() * word.length)];
        console.log(randomWord);
    };

});