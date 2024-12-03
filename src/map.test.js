import map from "./map";

describe("map", () => {
  test("should return an array of the same length", () => {
    const array = [1, 2, 3, 4];
    expect(map(array, (x) => x)).toHaveLength(array.length);
  });
});
