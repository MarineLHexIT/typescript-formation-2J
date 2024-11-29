function sum1(a, b) {
    return a + b;
}

const sum2 = function (a, b) {
    return a + b;
};

const sum3 = (a, b) => {
    return a + b;
};

function sum(a: number, b: number):number;
function sum(a: string, b: string):number;
function sum(a: any, b: any):number {
    return a + b;
}
