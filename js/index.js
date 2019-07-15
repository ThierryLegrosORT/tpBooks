const bodyTableTag = document.querySelector('tbody');
const tableTag = document.querySelector('table');

function createBookRow(title, author, price) {
    return `
    <tr>
    <td>${title}</td>
    <td>${author}</td>
    <td>${price} €</td>
    </tr>
    `;
}

function render(parentTag, content) {
    parentTag.innerHTML += content;
}

const books = [{
        title: "Il était une fois",
        author: "Moi Meme",
        price: 14.99,
        avaible: true
    },
    {
        title: "Il était deux fois",
        author: "Meme Moi",
        price: 10.99,
        avaible: true
    },
    {
        title: "La fin des Haricots",
        author: "Bob Léponge",
        price: 1.99,
        avaible: false
    },
];

if (books.length > 0) {
    tableTag.style.display = "table";

    for (let book of books) {
        const row = createBookRow(
            book.title,
            book.author,
            book.price
        );
        render(bodyTableTag, row);
    }
}