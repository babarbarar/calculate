import { sum } from "../src/Math";
import { multiply } from "../src/Math";

test("Should sum 2 + 2", function () {
    const result = sum(2, 2);
    expect(result).toBe(4);
});

test("Should multiply 5 * 2", function () {
    const result = multiply(5, 2);
    expect(result).toBe(10);
});

test("Should multiply 67 * 8", function () {
    const result = multiply(67, 8);
    expect(result).toBe(536);
});