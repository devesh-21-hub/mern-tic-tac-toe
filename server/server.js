// ${} can take real variable
const express = require("express");
const path = require("path");
const cors = require("cors");
const app = express();
app.use(cors());
app.set("views", __dirname + "../client/build"); // general config
app.set("view engine", "html");
const http = require("http").createServer(app);
const publicDirectoryPath = path.join(__dirname, "../client/build");

app.use(express.static(publicDirectoryPath));

const router = require("./router");
//Using router as middleware

const io = require("socket.io")(http, cors());

//connection is a built in keyword

io.on("connection", (socket) => {
  console.log("New client is connected!");
  socket.emit("welcome", "Hello there welcome!");
  socket.on("join", ({ name, room }) => {
    console.log(name, room);
  });

  //socket.emit("join", "Hello there welcome!");

  socket.on("disconnect", () => {
    console.log("A user disconnected");
  });
});

app.use(router);

http.listen(process.env.PORT || 3500, function (req, res) {
  console.log("HTTP server is running on port 3500");
});
