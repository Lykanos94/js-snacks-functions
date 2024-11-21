/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
function findSpecificVowels(str) {
    const specificVowels = 'ai'; 
    let foundVowels = [];

    for (let char of str) {
        if (specificVowels.includes(char)) {
            foundVowels.push(char);
        }
    }

    return foundVowels; 
}

// Invoca la funzione qui e stampa il risultato in console
const Letter = 'javascript';
const result = findSpecificVowels(word);
console.log(result);


//Risultato atteso se si passa 'javascript': 3 (a, a, i)