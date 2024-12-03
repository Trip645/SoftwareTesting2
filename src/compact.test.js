import compact from "./compact";

test("removes falsey values", () => {
  expect(compact([0, 1, false, 2, "", 3])).toEqual([1, 2, 3]);
});
