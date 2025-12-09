const addForm = document.querySelector('.add');
const lista = document.querySelector('.todos');
const searchForm = document.querySelector('.search');

const generaTemplate = todo => {
    const html = `
        <li class="list-group-item d-flex justify-content-between align-items-center">
            <span>${todo}</span>
            <i class="fa-regular fa-trash-can delete"></i>
        </li>`;

    lista.innerHTML += html;
}

addForm.addEventListener('submit', e => {
    e.preventDefault();

    // Uso il metodo trim() per rimuovere gli spazi bianchi a inizio e fine di una stringa
    let todo = addForm.addTask.value.trim();

    // Se todo.length è un intero restituisce true, se invece è 0 restituisce false
    if (todo.length) {
        generaTemplate(todo);

        // Questo metodo resetta tutti i campi di input di un form
        addForm.reset();
    }
})

lista.addEventListener('click', e => {
    e.stopPropagation();

    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
    }
})

const filtraTodos = query => {
    // console.log(query);
    // console.log(Array.from(lista.children));

    Array.from(lista.children)
        .filter(todo => !todo.textContent.toLowerCase().includes(query))
        .forEach(todo => todo.classList.add('d-none'));

    Array.from(lista.children)
        .filter(todo => todo.textContent.toLowerCase().includes(query))
        .forEach(todo => todo.classList.remove('d-none'));
};

searchForm.addEventListener('keyup', () => {
    const query = searchForm.search.value.trim().toLowerCase();
    filtraTodos(query);
})

searchForm.addEventListener('submit', e => {
    e.preventDefault();
    searchForm.reset();
})