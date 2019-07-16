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

function getBooks() {
    if (window.localStorage.getItem("books")) {
        try {
            books = JSON.parse(localStorage.getItem("books"));
        } catch (e) {
            return [];
        }
    }
    return [];
}

// if (localStorage.getItem("books")) {
//     books = JSON.parse(localStorage.getItem("books"));
//     buildTable();
// }


// Vérifier si le nombre de livres récupérés N'EST PAS le même que celui stocké en local (books.length)
// Si c'est le cas il faut reconstruire l'interface graphique (avec mise à jour de l'objet local)
// Sinon il faut:
// Parcourir les livres à dispositions un par un
// Récupérer le livre correspondant depuis la liste récupérée
// Vérifier si au moins un prix ou une disponibilité est différente
// Si oui, reconstruire l'interface graphique
// Si non, ne rien faire

fetch("./books.json")
    .then(function(response) {
        response.json().then(function(booksJSON) {
            saveData(booksJSON);

            if (books.length !== booksJSON.length) {
                books = booksJSON;
                buildTable();
            } else { // même nombre de livres
                for (let book of books) {
                    const bookJSON = booksJSON.filter(function(item) {
                        return item.title === book.title && item.author === book.author;
                    })[0];

                    if (bookJSON.available !== book.available || bookJSON.price !== book.price) {
                        books = booksJSON;
                        buildTable();
                        break;
                    }
                }
            }
        });
    })
    .catch(function(error) {
        console.log(error);
    });


// Code principale
function buildTable() {

    if (books.length > 0) {
        tableTag.style.display = "table";
        bodyTableTag.innerHTML = "";

        for (let book of books) {
            const row = createBookRow(book);
            render(bodyTableTag, row);
        }
    };
}

function saveData(data) {
    if (window.localStorage) {
        localStorage.setItem("books", JSON.stringify(data));
    }
}

// const books = JSON.parse(localStorage.getItem("books"));