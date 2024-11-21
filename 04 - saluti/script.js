/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const name = 'Mario';


// Dichiara la funzione qui.
function saluta(name) {
    return `Ciao ${name}`;
}

// Invoca la funzione qui e stampa il risultato in console
const nome = 'Mario';
const risultato = saluta(nome);
console.log(risultato); 


//Risultato atteso se si passa 'Mario': // ciao Mario