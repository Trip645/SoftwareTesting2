import ceil from "../src/ceil.js";

describe("ceil", () => {
  test("properly rounds up with two decimals accuracy", () => {
    expect(ceil(6.004, 2)).toBe(6.01);
  });
});
