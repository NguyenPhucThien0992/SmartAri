const express = require("express");
const router = express.Router();
const moment = require("moment");

// Update alarm for sensor 1
router.post("/update-alarm-sensor1", (req, res) => {
  run();
  async function run() {
    console.log("datattadtatd", req.body.HighTem);
    const docClient = await req.app.get("docClient");
    var table = "alarm";

    var HighTem = parseInt(req.body.HighTem);
    var LowTem = parseInt(req.body.LowTem);
    var HighHumid = parseInt(req.body.HighHumid);
    var LowHumid = parseInt(req.body.LowHumid);
    var HighCar = parseInt(req.body.HighCar);
    var LowCar = parseInt(req.body.LowCar);
    var timestamp = moment().unix();

    var params = {
      TableName: table,
      Key: {
        index: 1
      },
      UpdateExpression:
        "set TimeIndex =:r, Payload.HighTem =:ht, Payload.HighHumid =:hh, Payload.HighCar =:hc, Payload.LowTem =:lt, Payload.LowHumid =:lh, Payload.LowCar =:lc",
      ExpressionAttributeValues: {
        ":r": timestamp,
        ":ht": HighTem,
        ":hh": HighHumid,
        ":hc": HighCar,
        ":lt": LowTem,
        ":lh": LowHumid,
        ":lc": LowCar
      },
      ReturnValues: "UPDATED_NEW"
    };
    await docClient.update(params, function(err, data) {
      if (err) {
        res.json(err);
      } else {
        res.json({ data });
      }
    });
  }
});

// Update alarm sensor 2
router.post("/update-alarm-sensor2", (req, res) => {
  run();
  async function run() {
    const docClient = await req.app.get("docClient");
    var table = "alarm";
    var HighTem = parseInt(req.body.HighTem);
    var LowTem = parseInt(req.body.LowTem);
    var HighHumid = parseInt(req.body.HighHumid);
    var LowHumid = parseInt(req.body.LowHumid);
    var HighCar = parseInt(req.body.HighCar);
    var LowCar = parseInt(req.body.LowCar);
    var timestamp = moment().unix();

    var params = {
      TableName: table,
      Key: {
        index: 2
      },
      UpdateExpression:
        "set TimeIndex =:r, Payload.HighTem =:ht, Payload.HighHumid =:hh, Payload.HighCar =:hc, Payload.LowTem =:lt, Payload.LowHumid =:lh, Payload.LowCar =:lc",
      ExpressionAttributeValues: {
        ":r": timestamp,
        ":ht": HighTem,
        ":hh": HighHumid,
        ":hc": HighCar,
        ":lt": LowTem,
        ":lh": LowHumid,
        ":lc": LowCar
      },
      ReturnValues: "UPDATED_NEW"
    };
    await docClient.update(params, function(err, data) {
      if (err) {
        res.json(err);
      } else {
        res.json({ data });
      }
    });
  }
});

// Create alarm for sensor 1
router.post("/create-alarm-sensor1", (req, res) => {
  run();
  async function run() {
    const docClient = await req.app.get("docClient");
    var table = "alarm";
    var timestamp = moment().unix();
    var Payload = {
      HighTem: 10,
      HighHumid: 10,
      HighCar: 10,
      LowTem: 10,
      LowHumid: 10,
      lowCar: 10
    };

    var params = {
      TableName: table,
      Item: {
        index: 1,
        TimeIndex: timestamp,
        Payload: Payload
      }
    };

    docClient.put(params, function(err, data) {
      if (err) {
        console.error(
          "Unable to add item. Error JSON:",
          JSON.stringify(err, null, 2)
        );
        res.json({ err });
      } else {
        console.log("Added item:", JSON.stringify(data, null, 2));
        res.json({ data });
      }
    });
  }
});

// Create alarm for sensor 2
router.post("/create-alarm-sensor2", (req, res) => {
  run();
  async function run() {
    const docClient = await req.app.get("docClient");
    var table = "alarm";
    var timestamp = moment().unix();
    var Payload = {
      HighTem: 10,
      HighHumid: 10,
      HighCar: 10,
      LowTem: 10,
      LowHumid: 10,
      lowCar: 10
    };

    var params = {
      TableName: table,
      Item: {
        index: 2,
        TimeIndex: timestamp,
        Payload: Payload
      }
    };

    console.log("Adding a new item...");
    docClient.put(params, function(err, data) {
      if (err) {
        console.error(
          "Unable to add item. Error JSON:",
          JSON.stringify(err, null, 2)
        );
        res.json({ err });
      } else {
        console.log("Added item:", JSON.stringify(data, null, 2));
        res.json({ data });
      }
    });
  }
});
// Get alart sensor 1
router.get("/get-alarm-sensor1", (req, res) => {
  run();
  async function run() {
    const docClient = await req.app.get("docClient");
    var table = "alarm";

    var params = {
      TableName: table,
      KeyConditionExpression: "#index = :in",
      ExpressionAttributeNames: {
        "#index": "index"
      },
      ExpressionAttributeValues: {
        ":in": 1
      }
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

// Get alart sensor 2
router.get("/get-alarm-sensor2", (req, res) => {
  run();
  async function run() {
    const docClient = await req.app.get("docClient");
    var table = "alarm";

    var params = {
      TableName: table,
      KeyConditionExpression: "#index = :in",
      ExpressionAttributeNames: {
        "#index": "index"
      },
      ExpressionAttributeValues: {
        ":in": 2
      }
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
module.exports = router;
