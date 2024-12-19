export class DivideByZeroError extends Error {
    constructor() {
        super("Can’t divide by zero");
    }
}

export function divide(a: number, b: number): number {

    // if (b === 0) {
    //     throw new DivideByZeroError();
    // }

    return a / b;
}

// ----
try {
    const c = divide(10, 5); // 2
    const d = divide(10, 0); // Infinity !
}
// @ts-ignore
catch(e: DivideByZeroError) {
    console.log("You can’t divide by zero, oups");
}