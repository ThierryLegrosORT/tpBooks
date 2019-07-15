const bodyTableTag = document.querySelector('tbody');
const tableTag = document.querySelector('table');

function createBookRow() {
    return `
    <tr>
    <td>Il était une fois</td>
    <td>Moi Meme</td>
    <td>14.99 €</td>
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