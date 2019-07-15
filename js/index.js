const bodyTableTag = document.querySelector('tbody');
const tableTag = document.querySelector('table');

// Structure HTML
function createBookRow({ title, author, price, available }) {
    // const title = b.title;
    // const author = b.author;
    // const price = b.price;

    // const { title, author, price } = b;

    return `
    <tr class="table-${available ? 'success' : 'danger'}">
    <td>${title}</td>
    <td>${author}</td>
    <td>${price} €</td>
    </tr>
    `;
};

// Gestion de l'affichage
function render(parentTag, content) {
    parentTag.innerHTML += content;
};

// Données stockées en dur
const books = [{
        title: "Il était une fois",
        author: "Moi Meme",
        price: 14.99,
        available: true
    },
    {
        title: "Il était deux fois",
        author: "Meme Moi",
        price: 10.99,
        available: true
    },
    {
        title: "La fin des Haricots",
        author: "Bob Léponge",
        price: 1.99,
        available: false
    },
];

// Code principale
if (books.length > 0) {
    tableTag.style.display = "table";

    for (let book of books) {
        const row = createBookRow(book);
        render(bodyTableTag, row);
    }
};