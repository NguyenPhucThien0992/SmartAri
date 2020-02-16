const express = require("express");
const router = express.Router();

router.get("/get-data-sensor1", (req, res) => {
  run();
  async function run() {
    const docClient = await req.app.get("docClient");
    var table = "sensor_update";
    var ext_addr = "D6:7D:B1:C6:AB:7B".toLowerCase();
    var params = {
      TableName: table,
      KeyConditionExpression: "#ext = :ext_addr",
      ExpressionAttributeNames: {
        "#ext": "ext_addr"
      },
      ExpressionAttributeValues: {
        ":ext_addr": ext_addr
      },
      ScanIndexForward: false,
      Limit: 1
    };

    await docClient.query(params, function(err, data) {
      if (err) {
        // console.error("Unable to query. Error:", JSON.stringify(err, null, 2));
        res.json({ err });
      } else {
        res.json({ data });
        // console.log("Query succeeded.");
        // data.Items.forEach(function(item) {
        //   console.log("item", item);
        // });
      }
    });
  }
});

// Get data from sensor 1: 08:ae:1a:8c:43:88
router.get("/get-data-sensor2", (req, res) => {
  run();
  async function run() {
    const docClient = await req.app.get("docClient");
    var table = "sensor_update";
    var ext_addr = "A3:B9:F4:B2:C7:90".toLowerCase();
    var params = {
      TableName: table,
      KeyConditionExpression: "#ext = :ext_addr",
      ExpressionAttributeNames: {
        "#ext": "ext_addr"
      },
      ExpressionAttributeValues: {
        ":ext_addr": ext_addr
      },
      ScanIndexForward: false,
      Limit: 1
    };

    await docClient.query(params, function(err, data) {
      if (err) {
        res.json({ err });
      } else {
        res.json({ data });
      }
    });
  }
});

router.get("/testing", (req, res) => {
  res.json({ mes: "sdssddsd" });
});

module.exports = router;
