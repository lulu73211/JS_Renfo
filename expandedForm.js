function expandedForm(n) {
    const strNum = n.toString();
    let result = [];

    // On parcourt chaque chiffre du nombre et on sépare à l'aide de split.
    strNum.split('').forEach((digit, i) => {
        // On ajoute la valeur développée à la liste si le chiffre n'est pas '0'.
        if (digit !== '0') {
            // On ajoute la valeur développée dans le tableau via push
            result.push(digit + '0'.repeat(strNum.length - i - 1));
        }
    });

    return result.join(' + ');
}

console.log(expandedForm(70304));
console.log(expandedForm(1037903));
console.log(expandedForm(802539));
