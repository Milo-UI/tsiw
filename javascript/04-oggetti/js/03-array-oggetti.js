/*
    Negli array possiamo salvare valori di tutti i tipi, quindi possiamo anche creare array di oggetti.

    Quando otteniamo dati da un database, nella maggior parte dei casi riceveremo array di oggetti. Per esempio, se richiediamo a un database una lista di film, questo ci restituirà un array di oggetti film che avranno le loro proprietà (titolo, durata, anno, attori, regista, ecc.)
*/
let user = {
    nome: 'Mario',
    eta: 30,
    email: 'mario@idraulico.it',
    paese: 'Italia',
    posts: [
        {
            title: 'Perché saltare in testa ai goomba?',
            likes: 30
        }, 
        {
            title: 'Come salvare una principessa in 10 passi!',
            likes: 50
        }
    ],

    // metodi
    login: function() {
        console.log("L'utente è loggato");
    },
    logout: function() {
        console.log("L'utente non è loggato");
    },
    stampaPost() {
        console.log('Questo utente ha scritto i seguenti post:');
        this.posts.forEach(post => {
            console.log(`Titolo: "${post.title}" - ${post.likes} likes`);
        });
    }
};

user.stampaPost();

/* -------------------------------- Esercizio ------------------------------- */
/*
    Progettare l'array di oggetti canzone, ognuna con le proprietà titolo, band e anno. Fare inserire una nuova canzone all'utente attraverso un prompt. Visualizzare il nuovo oggetto costruito.
*/
let canzoni = [
    {
        titolo: 'Stairway to Heaven',
        band: 'Led Zeppelin',
        anno: '1971'
    },
    {
        titolo: 'Wish You Were Here',
        band: 'Pink Floyd',
        anno: '1975'
    }
];

console.log(canzoni);

canzoni.push({
    titolo: prompt('Titolo canzone'),
    band: prompt('Band canzone'),
    anno: prompt('Anno canzone')
});

console.log(canzoni);
console.log(canzoni[canzoni.length - 1]);