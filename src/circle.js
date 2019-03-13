import Shape from './shape';

export default class Circle extends Shape {
    constructor(r) {
        super();
        this.r = r;
    }

    setR(r) {
        this.r = r;

        return this;
    }

    getR() {
        return this.r;
    }

    perimeter() {
        return 2 * Math.PI * this.r;
    }

    area() {
        return Math.PI * Math.pow(this.r, 2);
    }

    draw() {
        return 'Can\'t';
    }
};