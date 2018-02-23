export class Car {

    constructor(public manufacturer: string) {

    }

    public visit(inspector: string) {
        console.log(`${this.manufacturer} visited by inspector ${inspector}`);
    }
}
