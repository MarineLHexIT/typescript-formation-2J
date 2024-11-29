enum BookStatus {
    Available = 0,
    Borrowed
}

class Book {
    public title: string;
    public author: string;
    public year: number;
    public status: BookStatus;

    public constructor(title: string, author: string, year: number) {
        this.title = title;
        this.author = author;
        this.year = year;
        this.status = BookStatus.Available;
    }

    public formatBook(): [string, string, number] {
        return [this.title, this.author, this.year];
    }
}

class Library {
    public books: Array<Book>;

    public constructor(books: Array<Book> = []) {
        this.books = books;
    }

    public addBook(book: Book): void {
        this.books.push(book);
    }

    public findBook(query: string): Book | undefined {
        return this.books.find(
            (book: Book) => book.title.toLowerCase().trim() === query.toLowerCase().trim()
        );
    }
}

export {
    BookStatus,
    Book,
    Library
};
