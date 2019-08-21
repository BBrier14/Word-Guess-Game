// Make a list of words that the user will have to guess
var wordList = ["blackbeard","kraken","deep","pirate"];

// Make a way for the computer to randomize the word
var word = wordList[Math.floor(math.random() * wordList.length)];

// Make an array of the answers with a loop that will match the same amount of letters as the answer
var answerArray = []
for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_";
}

// Make a variable that accounts for the remaining letters in the answer
var lettersLeft = word.length;