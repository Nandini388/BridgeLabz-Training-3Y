class Book {
    constructor(title, author, ISBN, isIssued) {
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this.isIssued = isIssued;
    }

    issueBook() {
        if (!this.isIssued) {
            this.isIssued = true;
            console.log(this.title + " issued successfully");
        }
        else {
            console.log("Book is already issued");
        }
    }

    returnBook() {
        this.isIssued = false;
        console.log(this.title + " returned successfully");
    }
}

let books = [
    new Book("Java", "James", "101", false),
    new Book("Python", "Guido", "102", false),
    new Book("HTML", "Tim", "103", true)
];

function showBooks() {
    let available = books.filter(book => !book.isIssued);

    available.forEach(book => {
        console.log(book.title, book.author, book.ISBN);
    });
}

function issueBook() {
    let isbn = prompt("Enter ISBN:");

    let book = books.find(b => b.ISBN === isbn);

    if (book) {
        book.issueBook();
    }
    else {
        console.log("Book not found");
    }
}

showBooks();