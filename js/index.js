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

// Données stockées en dur
const books = [];

function getAjax() {
    if (window.XMLHttpRequest) {
        return new XMLHttpRequest();
    } else {
        return new ActiveXObject("Microsoft.XMLHTTP");
    }
}

function sendRequest(url) {
    let xhr = getAjax();
    xhr.responseType = "json";

    xhr.onreadystatechange = function() {
        if (xhr.readystate === 4 && xhr.status === 200) {
            //             const json = JSON.parse(xhr.response);
            console.log();

        }
        console.log(xhr);
    };

    xhr.open("GET", url, true /* ou false pour définir synchrone ou asynchrone*/ );
    xhr.send();
}

sendRequest("./books.json");

// Code principale
if (books.length > 0) {
    tableTag.style.display = "table";

    for (let book of books) {
        const row = createBookRow(book);
        render(bodyTableTag, row);
    }
};