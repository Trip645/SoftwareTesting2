import chunk from "./chunk";

describe("chunk function", () => {
  test("should return chunked array", () => {
    const array = [1, 2, 3, 4];
    expect(chunk(array, 2)).toEqual([
      [1, 2],
      [3, 4],
    ]);
  });
});
