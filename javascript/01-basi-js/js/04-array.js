/*
    Gli array ci permettono di memorizzare una collezione di valori correlati fra loro.
    Sono oggetti 0-based.

    - Le parentesi quadre indicano l'inizio e la fine dell'array
    - Ogni elemento è separato da virgole
*/
let studenti = ['Agamennone', 'Achille', 'Patroclo', 'Elena', 'Ettore'];

console.log(studenti);

// Si può estrarre un singolo elemento specifico utilizzando la bracket notation, andando a richiamare l'indice dell'elemento
let primoStudente = studenti[0];
let terzoStudente = studenti[2];

console.log(primoStudente, terzoStudente);

/* ---------------------------- Proprietà length ---------------------------- */
// Possiamo risalire alla lunghezza di un array, ovvero al numero di elementi al suo interno, tramite la proprietà length
let numeroStudenti = studenti.length;
console.log(numeroStudenti);

/* -------------------------------------------------------------------------- */
/*                             Metodi degli array                             */
/* -------------------------------------------------------------------------- */

/* ---------------------------- Cambiare elementi --------------------------- */
// Si può usare la bracket notation per cambiare il valore di un elemento
studenti[1] = 'Cassandra';
console.log(studenti);

/* --------------------------- Aggiungere elementi -------------------------- */
// Possiamo aggiungere elementi alla FINE di un array
studenti.push('Odisseo', 'Paride');
console.log(studenti);

// Possiamo aggiungere elementi all'INIZIO di un array
studenti.unshift('Aiace');
console.log(studenti);

/* --------------------------- Rimuovere elementi --------------------------- */
// Rimuovere l'ULTIMO elemento di un array
studenti.pop();
console.log(studenti);

// Rimuovere il PRIMO elemento di un array
studenti.shift();
console.log(studenti);

/* ---------------------------------- join ---------------------------------- */
// Prende gli elementi di un array e li unisce all'interno di una stringa separati dal carattere o caratteri che gli passiamo tra parentesi tonde
let allStudenti = studenti.join(', ');
console.log(allStudenti);

/* --------------------------------- indexOf -------------------------------- */
// Come per le stringhe, possiamo risalire all'indice di un elemento
console.log(studenti.indexOf('Cassandra'));

/* --------------------------------- concat --------------------------------- */
// Prende un array e ne concatena un altro
let studentiAggiornato = studenti.concat(['Circe', 'Penelope']);
console.log(studentiAggiornato);

/* -------------------------------------------------------------------------- */
/*                                  Esercizio                                 */
/* -------------------------------------------------------------------------- */
/*
    Scontrino della spesa:

    - Creare due array
        - Il primo contiene la lista dei prodotti da comprare
        - Il secondo i prezzi dei prodotti
    - Stampare in console il secondo elemento dell'array e il suo prezzo
    
    - Popolare lo scontrino che sarà un UL con id scontrino con un list item per ogni prodotto e il suo costo

    - Costruire un elemento P nel quale verrà stampato il subtotale, cioè il totale senza iva

    - Costruire un elemento P nel quale verrà stampata l'iva (22%)

    - Calcolare il totale dei prezzi compreso di iva e scriverlo nel paragrafo con id totale

    MINIMO 8 prodotti
*/
let user = 'Milo';

let prodotti = ['Pane', 'Nutella', 'Biscotti', 'Pasta', 'Carne', 'Insalata', 'Birra', 'Farina'];
let prezzi = [1.80, 5.66, 2.00, 0.75, 12, 0.90, 2.45, 1];

console.log(prodotti[1], prezzi[1]);

let elHScontrino = document.getElementById('heading-scontrino');
let elScontrino = document.getElementById('scontrino');
let elSubtotale = document.getElementById('subtotale');
let elIva = document.getElementById('iva');
let elTotale = document.getElementById('totale');
let elBtnTema = document.getElementById('tema');
let elBody = document.getElementById('body');

let subtotale = 0;

elHScontrino.innerHTML = `Scontrino di ${user}`;

for (let i = 0; i < prodotti.length; i++) {    
    elScontrino.innerHTML += `<li><span class="prodotto">${prodotti[i]}</span> <span class="prezzo">${prezzi[i].toFixed(2)}€</span></li>`;

    subtotale += prezzi[i];
}

elSubtotale.innerHTML = `<strong>Subtotale:</strong> ${subtotale}€`;

let iva = subtotale * 0.22;
elIva.innerHTML = `<strong>Iva (22%):</strong> ${iva.toFixed(2)}€`;

let totale = subtotale + iva;
elTotale.innerHTML = `<strong>Totale:</strong> ${totale.toFixed(2)}€`;

elBtnTema.addEventListener('click', () => {
    if (elBody.getAttribute('data-bs-theme') === 'dark') {
        elBody.setAttribute('data-bs-theme', 'light');
    } else {
        elBody.setAttribute('data-bs-theme', 'dark');
    }

    let iconaSole = elBtnTema.querySelector('.lucide-sun');
    let iconaLuna = elBtnTema.querySelector('.lucide-moon');

    iconaLuna.classList.toggle('d-none');
    iconaSole.classList.toggle('d-none');
});