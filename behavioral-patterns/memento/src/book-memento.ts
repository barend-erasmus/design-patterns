import { Book } from './book';

export class BookMemento {

    private savedBook: Book = null;

    constructor() {

    }

    public restore(): Book {
        return this.savedBook;
    }

    public save(book: Book): void {
        this.savedBook = book.clone();
    }
}
