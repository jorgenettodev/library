const myLibrary = [];

function Book(title, author, pages, readStatus) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;

    this.info = function() {
        return `${this.title} by ${this.author}, ${this.pages} pages. Reading status: ${this.readStatus}.`;
    };

    this.status = function() {
        return `Reading status: ${readStatus}`;
    }
};

function addBookToLibrary(book) {
    myLibrary.push(book);
}

// create some books to test it.
function testBooks() {
    let book1 = new Book('O Cavaleiro preso na armadura','Robert Fisher', 62, 'already read');
    // add book1 to library
    addBookToLibrary(book1);

    let book2 = new Book('The war of the worlds', 'H. G. Wells', 450, 'reading')
    addBookToLibrary(book2);


}

// show all books in the myLibrary array.
function showAllBooks() {
    // loop through the array and console.log all books
    for (const key in myLibrary) {
        console.log(`Book name: ${myLibrary[key].info()}`);
    }
}

// btn add book to grid
const btnAddBook = document.querySelector('#btn__add');
btnAddBook.addEventListener('click', (e) => {
    console.log('clicked');
});

// books__grid
const booksGrid = document.querySelector('.books__grid');



function createBook(book) {

    // Receives a book as parameter, create a card and appends to the books__grid
    

    let newBook = document.createElement('div');
    newBook.classList.add('book__card');


    const bookTitle = document.createElement('h2')
    bookTitle.classList.add('book__title');
    bookTitle.innerText = book.title;

    const bookAuthor = document.createElement('p')
    bookAuthor.classList.add('book__author');
    bookAuthor.innerText = book.author;

    const bookPages = document.createElement('p')
    bookPages.classList.add('book__pages');
    bookPages.innerText = `${book.pages} pages`;

    

    // book buttons

    const btnReadStatus = document.createElement('button');
    btnReadStatus.innerText = book.readStatus;
    btnReadStatus.classList.add('btn__readStatus');
    btnReadStatus.classList.add('btn');


    const btnDeleteBook = document.createElement('button');
    btnDeleteBook.classList.add('btn');
    btnDeleteBook.classList.add('btn__delete');
    btnDeleteBook.innerText = 'delete';

    
    newBook.appendChild(bookTitle);
    newBook.appendChild(bookAuthor);
    newBook.appendChild(bookPages);
    newBook.appendChild(btnReadStatus);
    newBook.appendChild(btnDeleteBook);

    booksGrid.appendChild(newBook);

    
}

// Create example books and adds to myLibrary array
testBooks();

// Takes the example books, create cards and appends to the books__grid.
for (key in myLibrary) {
    createBook(myLibrary[key]);
}
