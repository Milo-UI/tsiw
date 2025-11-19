/*
    Le funzioni in JavaScript sono blocchi di codice riutilizzabili che possono essere eseguiti quando vengono chiamati tutte le volte che vogliamo, senza dovver scrivere di nuovo lo stesso codice.

    Per dichiarare una funzione usiamo:
        - parola chiave function
        - nome della funzione
        - una lista di parametri tra parentesi tonde e separati da virgole
        - il blocco di codice da eseguire contenuto tra parentesi graffe (corpo della funzione)
    
    function nomeFunzione(parametro1, parametro2) {
        corpo della funzione
    }

    Per convenzione, si nominano le funzioni con dei verbi, così da far capire subito cosa fanno.
*/
function saluta() {
    console.log('Ciao!');
}

// Per eseguire una funzione basta chiamarla utilizzando il suo nome seguito da parentesi tonde, nelle quali si passeranno eventuali argomenti se necessari
saluta();
saluta();
saluta();
saluta();

// Possiamo anche salvare una funzione all'interno di una variabile e richiamarla in una maniera molto simile (function expression). In questo caso la funzione sarà anonima, perché sarà la variabile ad assegnarle il nome
const parla = function() {
    console.log('Sto parlando');
};

// La richiamiamo alla stessa maniera
parla();
parla();
parla();