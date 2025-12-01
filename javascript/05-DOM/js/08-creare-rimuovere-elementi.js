/* ---------------------- Rimuovere un elemento dal DOM --------------------- */
const todoList = document.querySelector('.lista');

// Rimuovo l'intera lista dal DOM
// todoList.remove();

// Se invece volessi rimuovere un list item al click:
const listItems = document.querySelectorAll('.lista li');

listItems.forEach(item => {
    item.addEventListener('click', event => {
        event.target.remove();
    });
});

/* --------------------- Aggiungere un elemento nel DOM --------------------- */
const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
    // Aggiungiamo un nuovo item alla lista passandoglielo con gli operatori studiati
    // todoList.innerHTML += `<li>Nuovo item</li>`;

    // Creiamo un nuovo elemento privo di contenuto testuale, specificando di che tipo di elemento si tratta ('li')
    const li = document.createElement('li');

    // Aggiungiamo del testo all'interno del nuovo elemento
    li.textContent = 'Nuova cosa da fare';

    // Inseriamo l'elemento nel DOM "appendendolo" o "prependendolo" al genitore
    todoList.append(li); // lo aggiunge al fondo
    // todoList.prepend(li); // lo aggiunge all'inizio
});