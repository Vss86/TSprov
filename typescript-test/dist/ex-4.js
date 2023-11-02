// DIN UPPGIFT: Skapa en egen sammansatt typ Book som beskriver en bok. Byt ut any mot passande typer.
// Kompilera TS-koden och se att den fortfarande fungerar som den ska. / 2 poäng
var books = [
    {
        title: "Lord of the Rings",
        pages: 9250,
        authors: ["J. R. R. Tolkien"],
        price: 899,
    },
    {
        title: "Sample Book 2",
        pages: 224,
        authors: ["William Golding"],
        price: 149,
    }
];
var describeBook = function (book) {
    console.log("The book \"".concat(book.title, "\" has ").concat(book.pages, " pages and costs $").concat(book.price, "."));
    console.log("Authors:");
    book.authors.forEach(function (author) {
        console.log("- ".concat(author));
    });
};
books.forEach(function (book) {
    describeBook(book);
});
