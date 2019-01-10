class Animal {
    x: number = 142;
    y: number;
    ar: {
        num1: number,
        num2: string[]
    }
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    bark() :void {
        console.log("gau gau")
    }

    bark2(a: Animal) {

    }
}

let cat = new Animal("tr", 1)