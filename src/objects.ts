// don't change this interface
export interface Book {
  title: string;
  author: string | string[];
  publishedYear: number;
  genre: string;
  pageCount?: number;
  ISBN?: string;
}

/**
 * `createBook` function:
 * - Accepts four parameters:
 *    - `title` (string)
 *    - `author` (string)
 *    - `publishedYear` (number)
 *    - `genre` (string)
 * - Returns a new `Book` object with these properties.
 */
export function createBook(
  title: string,
  author: string,
  publishedYear: number,
  genre: string
): Book {
  const book: Book = {
    title: title,
    author: author,
    publishedYear: publishedYear,
    genre: genre,
  };

  return book;
}

// DO NOT CHANGE THE LINE OF CODE BELOW (you can use it for testing your code)
const book = createBook(
  "Hitchhiker's Guide to The Galaxy",
  "Douglas Adams",
  1965,
  "Sci-Fi"
);

/**
 * `printBookTitleAndYear` function:
 * - Accepts a `book` parameter of type `Book`.
 * - Returns the book’s title with its publish year separated by a space.
 * - Access the book title using dot-notation and access the publish year using bracket-notation.
 */
export function printBookTitleAndYear(book: Book): string {
  return `${book.title} ${book["publishedYear"]}`;
}

/**
 * `addPageCount` function:
 * - Accepts a `book` parameter of type `Book`.
 * - Accepts a `pageCount` parameter of type `number`.
 * - Adds the `pageCount` property to the book object (modifies the same object).
 * - Returns the updated book.
 */
export function addPageCount(book: Book, pageCount: number): Book {
  book.pageCount = pageCount;
  return book;
}

/**
 * `addISBN` function:
 * - Accepts a `book` parameter of type `Book`.
 * - Accepts an `isbn` parameter of type `string`.
 * - Adds the `ISBN` property to the book object (modifies the same object).
 * - Returns the updated book.
 */
export function addISBN(book: Book, isbn: string): Book {
  book.ISBN = isbn;
  return book;
}

/**
 * `updatePublishedYear` function:
 * - Accepts a `book` parameter of type `Book`.
 * - Accepts a `newYear` parameter of type `number`.
 * - Updates the `publishedYear` property on the same book object.
 * - Returns the updated book.
 */
export function updatePublishedYear(book: Book, newYear: number): Book {
  book.publishedYear = newYear;
  return book;
}

/**
 * `addSecondAuthor` function:
 * - Accepts a `book` parameter of type `Book`.
 * - Accepts an `additionalAuthor` parameter of type `string`.
 * - Turns the `author` property into an array of two authors
 *   OR adds to the existing array of authors.
 */
export function addSecondAuthor(
  book: Book,
  additionalAuthor: string
): Book {
  if (Array.isArray(book.author)) {
    book.author = [...book.author, additionalAuthor];
  } else {
    book.author = [book.author, additionalAuthor];
  }

  return book;
}
