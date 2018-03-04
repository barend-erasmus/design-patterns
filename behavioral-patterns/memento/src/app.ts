import { Book } from './book';
import { BookMemento } from './book-memento';

let book: Book = new Book('Foo Bar', 'Hello World');

const bookMemento = new BookMemento();

bookMemento.save(book);

console.log(book.toString());

book.title = 'Hello World | 101';

console.log(book.toString());

book = bookMemento.restore();

console.log(book.toString());
