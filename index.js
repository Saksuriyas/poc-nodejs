const server = require("./app");
const PORT = process.PORT || 9080;

server.listen(PORT, () => {
  console.log("server listen on port " + PORT);
});
