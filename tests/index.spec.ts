import app from "../src/index";

describe("app test", () => {
  test("main should be defined", () => {
    expect(app.main).toBeDefined();
  });
});
