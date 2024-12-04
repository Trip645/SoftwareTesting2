import add from "../add";

describe("add", () => {
  test("properly adds two numbers", () => {
    expect(add(6, 4)).toBe(10);
  });
});
