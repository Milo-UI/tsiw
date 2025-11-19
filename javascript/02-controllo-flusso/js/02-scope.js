/*
    Lo scope (o ambito) si riferisce alla visibilità delle variabili e delle funzioni in diverse parti del codice
*/
// Si parla di variabili GLOBALI quando dichiarate al di fuori di qualsiasi funzione o blocco di codice circoscritto e sono accessibili da qualsiasi parte del codice
let age = 30;

if (true) {
    console.log(`Dentro al blocco: ${age}`); // accessibile all'interno di un blocco di codice
}

console.log(`Fuori dal blocco: ${age}`); // accessibile all'esterno di blocchi di codice

// Si parla di variabili LOCALI quando queste vengono dichiarate all'interno di un blocco di codice (come un ciclo o un if statement o una funzione)
if (true) {
    let varLocale = 'Sono una variabile locale';
    console.log(`Dentro al blocco: ${varLocale}`); // accessibile dentro al blocco in cui è dichiarata
}

// console.log(`Fuori dal blocco: ${varLocale}`); // non accessibile fuori dal blocco in cui è dichiarata

let email = 'mail@mail.it';
console.log(email);

// let email = 'altra@mail.it'; // let non ci permette di dichiarare due variabili con lo stesso nome se si trovano nello stesso scope

if (true) {
    let email = 'ennesima@mail.it'; // Lo scope di questa variabile rimane all'interno del blocco di codice dell'if, non ci restituisce errore perché non può essere usata all'esterno
    console.log(email);
}

/*
    L'operatore ternario è un modo conciso per scrivere una condizione che restituisce uno dei due valori in base a una valutazione booleana. Viene usato come alternativa compatta all'istruzione if-else, ma solo quando si hanno due opzioni.
*/
let eta = 24;
let stato = (eta >= 18) ? "Maggiorenne" : "Minorenne";
console.log(stato);