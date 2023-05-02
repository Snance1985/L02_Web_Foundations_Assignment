function arrayFilter(sentence) {
    let wordsInSentence = sentence.split(" ");
    let output = "";
    let wordsArray = [];
    for (var i = 0; i < wordsInSentence.length; i++) {
        if (wordsInSentence[i].length > 3) {
            output += wordsInSentence[i] + " ";
            wordsArray.push(output);
        }
    }
    console.log(wordsArray.join(" "));
    
    return wordsArray.join(" ");
}

arrayFilter("London is a big city in the United Kingdom");
