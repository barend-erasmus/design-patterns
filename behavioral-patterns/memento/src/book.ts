export class Book {
    constructor(
        public contents: string,
        public title: string,
    ) {

    }

    public clone(): Book {
        return new Book(this.contents, this.title);
    }

    public toString(): string {
        return `${this.title} - ${this.contents}`;
    }
}
