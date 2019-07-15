const bodyTableTag = document.querySelector('tbody');
const tableTag = document.querySelector('table');

// Structure HTML
function createBookRow({ title, author, price, available }) {

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

// Données
let books = [];

fetch("https://api.myjson.com/bins/j6fnf")
    .then(function(data) {
        // console.log(data.json());
        data.json().then(function(booksJSON) {
            // console.log(books);
            books = booksJSON;

            buildTable();
        });
    })
    .catch(function(error) {
        console.log(error);
    });


// Code principale
function buildTable() {

    if (books.length > 0) {
        tableTag.style.display = "table";

        for (let book of books) {
            const row = createBookRow(book);
            render(bodyTableTag, row);
        }
    };
}