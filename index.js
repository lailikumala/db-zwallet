const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const userRoute = require("./src/Routes/Users");
const authRoute = require("./src/Routes/Auth");
const transferRoute = require("./src/Routes/Transfer")
const topupRoute = require("./src/Routes/Topup")
const pinRoute = require("./src/Routes/ChangePin")
const phoneRoute = require("./src/Routes/ChangePhone")
const photoRoute = require("./src/Routes/ChangePhoto")
const cors = require("cors");
const { static } = require("express");
require('dotenv').config()

//cors config
app.use(cors())

//image
app.use(express.static('public/images'))

//midleware
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.get("/", (request, response) => {
  response.send("hello world");
});

//Route
app.use('/api/auth', authRoute)
app.use('/api/users', userRoute)
app.use('/api/transfer', transferRoute)
app.use('/api/topup', topupRoute)
app.use('/api/change_pin', pinRoute)
app.use('/api/change_phone', phoneRoute)
app.use('/api/change_photo', photoRoute)

//socket io
// const server = require("http").createServer(app);
// const io = require("socket.io")(server);
// const db = require('./src/Helpers/db');

// io.on("connection", (socket) => {
//   console.log("user connect");
//   socket.on("init-user", (id) => {
//     // console.log("result from init-user", id);
//     if (id) {
//       socket.join(id);
//       console.log("From id: ", id);
//       db.query(
//         `SELECT balance FROM users WHERE id=${id}`,
//         (err, res) => {
//           console.log(res, "test");
//           io.to(id).emit("get-data", res[0].balance);
//         }
//       );
//     }
//   });
//   // disconnect
//     socket.on("disconnect", () => {
//     console.log("User disconnect");
//   });
// });

app.listen(process.env.DEFAULT_PORT, () => {
  console.log(`server running on port ${process.env.DEFAULT_PORT}`);
});
