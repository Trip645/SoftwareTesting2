import words from "./words";

describe("words", () => {
  test("should split string into words", () => {
    expect(words("fred, barney, & pebbles")).toEqual([
      "fred",
      "barney",
      "pebbles",
    ]);
  });
});
