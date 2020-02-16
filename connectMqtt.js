const mqtt = require("async-mqtt");
var topic = "/a1FEAzZxsBd/dev1/user/update";
var awsIot = require("aws-iot-device-sdk");
const path = require("path");
var awsIot = require("aws-iot-device-sdk");

async function connectMqtt() {
  const device = await awsIot.device({
    keyPath: path.join(__dirname, "keys", "user1.private.key"),
    certPath: path.join(__dirname, "keys", "user1.cert.pem"),
    caPath: path.join(__dirname, "keys", "root-CA.crt"),
    clientId: "MyConnect",
    host: "a2o6k29646ympr-ats.iot.us-west-2.amazonaws.com"
  });

  return device;
}

module.exports = {
  connectMqtt
};
