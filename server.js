const http = require("http");

const mongodb = require("mongodb");
let db;
const connectionString =
  "mongodb+srv://islomkhurramov:PyL0CpyKA3FcuDcz@cluster0.favewjz.mongodb.net/Reja";

mongodb.connect(
  connectionString,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err, client) => {
    if (err) console.log("ERROR");
    else {
      console.log("MongoDB connection successed");
      module.exports = client;
      const app = require("./app");
      const server = http.createServer(app);
      let PORT = 3000;
      server.listen(PORT, function () {
        console.log(
          `The server is running successfully on port: ${PORT}, http://localhost:${PORT}`
        );
      });
    }
  }
);
