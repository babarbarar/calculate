import { sum } from "../src/Math";
import { multiply } from "../src/Math";

test("Should sum 2 + 2", function () {
    const result = sum(2, 2);
    expect(result).toBe(4);
});

test("Should sum 5 * 2", function () {
    const result = multiply(5, 2);
    expect(result).toBe(10);
});