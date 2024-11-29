import { Library, Book, BookStatus } from '../src/library';
import { describe, expect, test } from '@jest/globals';

describe('Library', () => {
    let library: Library;
    let book: Book;

    beforeEach(() => {
        library = new Library([]);
        book = new Book("1984", "George Orwell", 1949);
    });

    test('should add a book to the library', () => {
        library.addBook(book);

        expect(library.books).toContainEqual(book);
    });

    test('should find a book by title', () => {
    library.addBook(book);

    const foundBook = library.findBook("1984");
    expect(foundBook).toEqual(book);
  });

  test('should format book details as a tuple', () => {
    const formatted = book.formatBook();

    expect(formatted).toEqual(["1984", "George Orwell", 1949]);
  });
});
