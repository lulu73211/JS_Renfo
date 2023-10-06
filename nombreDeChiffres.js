function numOfDigits(n) {
    return Math.abs(n).toString().length;  // On convertit le nombre en chaîne et on retourne sa longueur
}

console.log(numOfDigits(1000));
console.log(numOfDigits(12));
console.log(numOfDigits(1305981031));
console.log(numOfDigits(0));
