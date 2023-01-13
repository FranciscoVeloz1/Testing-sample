const api = async (body) => {
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/`, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.parse(body),
    });
    return await res.json();
  } catch (error) {
    return "error";
  }
};

describe("Muchos testings", () => {
  test("API 1", async () => {
    const res = await api({ username: "Francisco", password: "Hello" });
    expect(res.status).toBe(200);
  });

  test("API 2", async () => {
    const res = await api({ username: "Francisco2", password: "Hello2" });
    expect(res.status).toBe(200);
  });

  test("API 10", async () => {
    const res = await api({ username: "Francisco3", password: "Hello3" });
    expect(res.status).toBe(200);
  });
});
