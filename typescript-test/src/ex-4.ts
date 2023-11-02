// DIN UPPGIFT: Skapa en egen sammansatt typ Book som beskriver en bok. Byt ut any mot passande typer.
// Kompilera TS-koden och se att den fortfarande fungerar som den ska. / 2 poäng

type Book = {
  title: string;
  pages: number;
  authors: string[];
  price: number;
};

const books: Book[] = [
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

const describeBook = (book: Book): void => {
  console.log(
    `The book "${book.title}" has ${book.pages} pages and costs $${book.price}.`
  );
  console.log("Authors:");
  book.authors.forEach((author: string) => {
    console.log(`- ${author}`);
  });
};

books.forEach((book) => {
  describeBook(book);
});
