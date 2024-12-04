import drop from "../drop.js";

describe("drop", () => {
  test("should return an array with the first element removed", () => {
    const array = [1, 2, 3, 4];
    expect(drop(array)).toEqual([2, 3, 4]);
  });
});
