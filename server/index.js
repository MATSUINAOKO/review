const setUpServer = require("./server");
const PORT = process.env.PORT || 3000;
// const database = require("./knex");
const server = setUpServer();
server.listen(PORT, () =>
  console.log(`listening on port : http://localhost:${PORT}`)
);
