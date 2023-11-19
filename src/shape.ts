namespace Shapes {
    export class Circle {
        constructor(private radius: number) {}

        calculateArea(): number {
            return Math.PI * this.radius ** 2;
        }
    }
}
