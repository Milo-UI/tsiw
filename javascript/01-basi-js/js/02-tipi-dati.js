/*
    JavaScript usa più tipi di dato:
    - Number:       numeri di tutti i tipi
    - String:       serie di caratteri tra apici ('hello world', "milo@mail.it")
    - Boolean:      sono un valore speciale che indica vero o falso (true o false)
    - Null:         lo utilizziamo per indicare esplicitamente che una variabile non ha un valore
    - Undefined:    come null, ma per variabili non ancora definite e viene assegnato da browser
    - Object:       strutture di dati complesse con più proprietà e funzioni (Array, Dates, Literals...)

    Una variabile può contenere qualsiasi tipo di dato e in JS non siamo obbligati a specificare di che tipo di dato si tratti. Possiamo anche sovrascrivere il valore di una variabile con un diverso tipo di dato.
    JavaScript è un linguaggio debolmente tipizzato, cioè conosce benissimo i tipi di dato, ma non siamo obbligati a dichiararli
*/
let nomeDocente = 'Milo'; // string
let cognomeDocente = 'Spandre';
let etaDocente = 34; // number
let nomeCorso = 'Tecnico Interfacce Grafiche';
let materia = 'JavaScript';
let presenza = true; // boolean

// Quando in dubbio sul tipo di un dato, possiamo utilizzare l'operatore typeof seguito dalla variabile di cui vogliamo conoscere il tipo
console.log(typeof presenza);
console.log(typeof PI);
console.log(typeof nomeDocente);

console.log("Ciao, mi chiamo " + nomeDocente + " " + cognomeDocente + " ho " + etaDocente + " anni. Insegno " + materia + " nel corso '" + nomeCorso + "' e oggi sono " + presenza);
