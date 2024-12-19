import { divide } from "../src/divide";

describe("divide", () => {

    test("two positive numbers", () => {

        expect(divide(10, 5)).toBe(10/5);
        expect(divide(5, 5)).toBe(5/5);
        expect(divide(7, 5)).toBe(7/5);
    })

    test("two negative numbers", () => {

        expect(divide(-10, -5)).toBe(-10/-5);
        expect(divide(-5, -5)).toBe(-5/-5);
        expect(divide(-12, -5)).toBe(-12/-5);
    })

    test("by zero", () => {
        expect(() => {
            divide(10, 0)
        }).toThrow("Can’t divide by zero");
    });
})