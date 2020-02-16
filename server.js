var express = require("express");

const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const cors = require("cors");
const users = require("./api/users");
const home = require("./api/home");
const alarm = require("./api/alarm");
const control = require("./api/control");
const connectMqtt = require("./connectMqtt").connectMqtt;
const connectDynamoDb = require("./connectDynamoDb").connectDynamoDb;

var app = express();
//Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const db = require("./config/key").mongoURI;

mongoose.connect(db).then(() => {
  console.log("Mongo db connected");
});
//Passport middleware
app.use(passport.initialize());
//Passport Config
require("./config/passport")(passport);

//CORS
app.use(cors({ origin: true }));
// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   res.header(
//     "Access-Control-Allow-Methods",
//     "GET,PUT,POST,DELETE,PATCH,OPTIONS"
//   );
//   next();
// });

//Use Routes

app.use("/api/users", users);
app.use("/api/home", home);
app.use("/api/alarm", alarm);
app.use("/api/control", control);

// ================================================
//==================== connect mqtt==========
//=================================================

const device = run();
app.set("device", device);
async function run() {
  const device = await connectMqtt();
  device.on("connect", (req, res) => {
    device.subscribe("$aws/things/Gateway_1/shadow/update/accepted", () => {
      console.log(" da sup rai");
    });
  });

  return device;
}

//================================================
//===================== End connect mqtt ====
//================================================

// ================================================
//==================== connect Dynamo db ==========
//=================================================

const docClient = dynanoDb();
app.set("docClient", docClient);

async function dynanoDb() {
  var docClient = await connectDynamoDb();
  return docClient;
}
//================================================
//===================== End connect Dynamo db=====
//================================================

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
