import capitalize from "../capitalize";

describe("capitalize", () => {
  test("properly capitalizes first character of a string", () => {
    expect(capitalize("fred")).toBe("Fred");
  });
});
