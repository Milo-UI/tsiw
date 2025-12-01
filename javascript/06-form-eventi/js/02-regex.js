/*
    Spesso JS viene usato per validare i form, ovvero per assicurarci che l'utente scriva informazioni nella maniera giusta o del tipo corretto all'interno degli input.

    es.: vogliamo che l'utente inserisca uno username che abbia dai 6 ai 10 caratter, che questi siano solo lettere e numeri, quindi niente spazi e niente caratteri speciali.

    Per controllare che l'utente segua il pattern che vogliamo, possiamo controllare quello che scrive con una regular expression o REGEX.

    https://regex101.com/
*/
let username = 'milooo';
const pattern = /^[a-z]{6,}$/;

// Usiamo il metodo test() su un pattern per vedere se matcha la nostra REGEX e ci restituirà true o false
// let result = pattern.test(username);
// console.log(result);

// if (result) {
//     console.log('Hai passato il test della REGEX');
// } else {
//     console.log('Non hai passato il test della REGEX');
// }

// Altro metodo
let result = username.search(pattern);
console.log(result); // Ci restituisce un intero che indica la posizione del pattern cercato