import Shape from './shape';

export default class Square extends Shape {
    constructor(e) {
        super();
        this.e = e;
    }

    setE(e) {
        this.e = e;

        return this;
    }

    getE() {
        return this.e;
    }

    perimeter() {
        return e * 4;
    }

    area() {
        return e * e;
    }

    draw() {
        let result = '';

        for (let i = 0; i < this.e; i++) {
            for (let i = 0; i < this.e; i++) {
                result += '* ';
            }

            result += '\n';
        }

        return result;
    }
};
