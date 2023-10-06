function sentenceSearcher(text, word) {
    // On n'utilise pas le var mais seulement les const et let
    const sentences = text.split('.');
    let foundSentence = '';  
    
    sentences.forEach(sentence => {
        
        if (!foundSentence && sentence.toLowerCase().includes(word.toLowerCase())) {
            foundSentence = sentence.trim() + '.'; //On concat le mot recher avec un point final
        }
    });

    return foundSentence; 
}

const text = "I have a cat. I have a mat. Things are going swell.";
console.log(sentenceSearcher(text, "have"));
console.log(sentenceSearcher(text, "MAT"));
console.log(sentenceSearcher(text, "things"));
console.log(sentenceSearcher(text, "flat"));

// La fonction sentenceSearcher n'est pas sensible à la casse
