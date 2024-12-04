import slice from "../slice.js";

describe("slice", () => {
  test("should return a slice of an array", () => {
    const array = [1, 2, 3, 4];
    expect(slice(array, 1, 3)).toEqual([2, 3]);
  });
});
