/* 
    ES1 Scrivi una funzione javascript che accetti due argomenti, una stringa e una lettera. La funzione conterà il numero di occorrenze della specifica lettera nella stringa

    Es2 Scrivi una funzione javascript che accetta un “argomento” e ritorna il tipo di dato: oggetto, funzione, stringa, numero, undefined.

    Es3 Scrivi una funzione javascript che accetta una stringa come parametro e trova la parola più lunga all’interno della frase. Es (mi chiamo Massimiliano -> Massimiliano).

    Es4 Scrivi un programma che accetta (da finestra) un numero come input e inserisce un dash (-) tra due numeri pari. Es ( 823486 -> 8-234-8-6 )

    Es5 Scrivi una funzione javascript che rimuova gli elementi duplicati da un array.

    Es6 Dati due array, calcolare la somma degli elementi presenti nello stesso indice. Esempio:
    array1 = [1,0,2,4,6]
    array2 = [0,4,5,8,7]
    Output = [1,4,7,12,13]

    Es7 Scrivi una funzione che stampa a console tutti i numeri interi di un dato intervallo. Per i multipli di 3 stamperà *Zoom! mentre per i multipli di 5 stamperà *Boom!. Controlla anche il caso in cui il numero è divisibile sia per 3 che per 5.
*/

/* ---------------------------------- ES 1 ---------------------------------- */
function contaOccorrenze(stringa, lettera) {
    if (lettera.length !== 1) {
        return "Devi fornire una sola lettera."
    }

    // Soluzione con ciclo for
    let conteggio = 0;

    for (let i = 0; i < stringa.length; i++) {
        // Incrementa il conteggio se il carattere corrente è uguale alla lettera
        if (stringa[i] === lettera) {
            conteggio++;
        };
    }

    return `La lettera ${lettera} si ripete ${conteggio} volte nella stringa "${stringa}."`;

    // Soluzione con il metodo split
    // let parti = stringa.split(lettera);
    // console.log(parti);
    // return parti.length - 1; 
};

let risultato = contaOccorrenze("banana", 'an');
console.log(risultato);

/* ---------------------------------- ES 2 ---------------------------------- */
function trovaTipoDato(dato) {
    // Controllo se il dato è null
    if (dato === null) {
        return `Questo dato è di tipo null`;
    }
    
    // Usa typeof per determinare il tipo
    let tipo = typeof dato;

    return `Questo dato è di tipo ${tipo}`;
};

console.log(trovaTipoDato(42));
console.log(trovaTipoDato('Ciao'));
console.log(trovaTipoDato({}));
console.log(trovaTipoDato([]));
console.log(trovaTipoDato(null));
console.log(trovaTipoDato(undefined));
console.log(trovaTipoDato(true));
console.log(trovaTipoDato(trovaTipoDato));

/* ---------------------------------- ES 3 ---------------------------------- */
function trovaParolaPiuLunga(frase) {
    // Divido la frase in parole
    let parole = frase.split(' ');

    let parolaMax = '';

    for (let i = 0; i < parole.length; i++) {
        // Controllo se la lunghezza della parola corrente è maggiore della parolaMax, se lo è sovrascrivo il valore di parolaMax
        if (parole[i].length > parolaMax.length) {
            parolaMax = parole[i];
        }
    }

    return parolaMax;
};

let parolaLunga = trovaParolaPiuLunga('mi chiamo Massimiliano');
console.log(`La parola più lunga nella frase è "${parolaLunga}"`);

/* ---------------------------------- ES 4 ---------------------------------- */
function inserisciDash(numero) {
    // Converto il numero in stringa
    let numeroStr = numero.toString();
    let risultato = '';

    for (let i = 0; i < numeroStr.length; i++) {
        risultato += numeroStr[i];

        // Controllo se il carattere corrente e quello successivo sono numeri pari
        if (i < numeroStr.length - 1 && numeroStr[i] % 2 === 0 && numeroStr[i + 1] % 2 === 0) {
            risultato += '-';
        }
    }

    return risultato
};

let numeroSuddiviso = inserisciDash(823486);
console.log(numeroSuddiviso);

/* ---------------------------------- ES 5 ---------------------------------- */
function rimuoviDuplicati(array) {
    // Creo un nuovo array per memorizzare i valori unici
    let senzaDuplicati = [];

    for (let i = 0; i < array.length; i++) {
        // Controllo se l'elemento non è già presente nel nuovo array
        if (!senzaDuplicati.includes(array[i])) {
            senzaDuplicati.push(array[i]); // Aggiungo l'elemento se non è duplicato
        }
    }

    return senzaDuplicati;
};

let arrayOriginale = [1, 2, 2, 3, 4, 4, 5, 5, 5, 6, 7];
let arraySenzaDuplicati = rimuoviDuplicati(arrayOriginale);
console.log(arraySenzaDuplicati);

/* ---------------------------------- ES 6 ---------------------------------- */
function sommaArray(array1, array2) {
    // Creo un nuovo array per il risultato
    let somme = [];

    let lunghezza = Math.min(array1.length, array2.length);

    for (let i = 0; i < lunghezza; i++) {
        somme.push(array1[i] + array2[i]);
    }

    return somme;
}

let array1 = [1,0,2,4,6];
let array2 = [0,4,5,8,7];
let arraySommati = sommaArray(array1, array2);
console.log(Math);
console.log(arraySommati);

/* ------------------------ generare numeri randomici ----------------------- */
const random = Math.random();

// Math.random() genera ogni volta che lo chiamiamo un numero randomico compresto tra 0 e 1
console.log(random);

// Per generare un numero randomico compreso tra 1 e 100:
console.log(Math.floor(Math.random() * 100));
/* ------------------------ generare numeri randomici ----------------------- */

/* ---------------------------------- ES 7 ---------------------------------- */
function stampaZoomBoom(inizio, fine) {
    for (let i = inizio; i <= fine; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("*ZoomBoom!");
        } else if (i % 3 === 0) {
            console.log("*Zoom!");
        } else if (i % 5 === 0) {
            console.log("*Boom!");
        } else {
            console.log(i);
        }
    }
};

stampaZoomBoom(1, 15);