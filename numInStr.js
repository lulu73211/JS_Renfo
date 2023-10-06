function numInStr(arr) {
    let result = [];

    arr.forEach(str => {
        // Je me suis permis d'utiliser un regex avec un ensemble préconçus pour me faciliter le code (sources : https://www.lucaswillems.com/fr/articles/25/tutoriel-pour-maitriser-les-expressions-regulieres)
        // /d permetant de représenter l'interval [0-9]
        if (/\d/.test(str)) {
            result.push(str);
        }
    });

    return result;
}

// Exemples d'utilisation:
console.log(numInStr(["1a", "a", "2b", "b"]));
console.log(numInStr(["abc", "abc10"]));
console.log(numInStr(["abc", "ab10c", "a10bc", "bcd"]));
console.log(numInStr(["this is a test", "test1"]));