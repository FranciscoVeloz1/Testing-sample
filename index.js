const api = require("./api");

async function main() {
  const res = await api();
  console.log(res.id);
}

main();
