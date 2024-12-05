export function sum(numbers: number[]): number {
    return numbers.reduce((number, sum) => sum + number, 0);
}