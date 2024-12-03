import toInteger from "./toInteger";

test("properly converts value to an integer", () => {
  expect(toInteger(3.2)).toBe(3);
});
