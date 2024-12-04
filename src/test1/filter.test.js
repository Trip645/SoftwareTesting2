import filter from "../filter";

describe("filter", () => {
  test("properly filters array based on predicate", () => {
    const users = [
      { user: "barney", active: true },
      { user: "fred", active: false },
    ];
    expect(filter(users, ({ active }) => active)).toEqual([users[0]]);
  });
});
