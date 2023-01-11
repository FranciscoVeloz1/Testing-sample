const api = require("./api");

describe("Muchos testings", () => {
  test("API 1", async () => {
    const res = await api(1);
    expect(res.id).toBe(1);
  });

  test("API 2", async () => {
    const res = await api(2);
    expect(res.id).toBe(2);
  });

  test("API 10", async () => {
    const res = await api(10);
    expect(res.id).toBe(10);
  });
});
