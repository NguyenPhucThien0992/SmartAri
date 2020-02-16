const express = require("express");
const router = express.Router();
const topic = "$aws/things/Gateway_1/shadow/update";
const moment = require("moment");

router.get("/fan1-control-on", (req, res) => {
  var dateTime = moment().format("YYYY-MM-DD, HH:mm:ss");
  var timestamp = moment().unix();
  var data = {
    state: {
      desired: {
        short_addr: "0x0000",
        ext_addr: "08:AE:1A:8C:43:88",
        date_time: dateTime,
        smart_objects: {
          timestamp: timestamp,
          values: [
            {
              objectId: 3348,
              instanceId: 0,
              resourceId: 5547,
              datatype: "Integer",
              value: 1
            },
            {
              objectId: 3348,
              instanceId: 0,
              resourceId: 5750,
              datatype: "String",
              value: "open"
            }
          ]
        }
      }
    }
  };
  run();
  async function run() {
    const device = await req.app.get("device");
    device.publish(topic, JSON.stringify(data));
    res.json({ mes: dateTime, mes2: timestamp });
  }
});
router.get("/fan1-control-off", (req, res) => {
  var dateTime = moment().format("YYYY-MM-DD, HH:mm:ss");
  var timestamp = moment().unix();
  var data = {
    state: {
      desired: {
        short_addr: "0x0000",
        ext_addr: "08:AE:1A:8C:43:88",
        date_time: dateTime,
        smart_objects: {
          timestamp: timestamp,
          values: [
            {
              objectId: 3348,
              instanceId: 0,
              resourceId: 5547,
              datatype: "Integer",
              value: 1
            },
            {
              objectId: 3348,
              instanceId: 0,
              resourceId: 5750,
              datatype: "String",
              value: "close"
            }
          ]
        }
      }
    }
  };
  run();
  async function run() {
    const device = await req.app.get("device");
    device.publish(topic, JSON.stringify(data));
    res.json({ mes: dateTime, mes2: timestamp });
  }
});
router.get("/humid-control-on", (req, res) => {
  var dateTime = moment().format("YYYY-MM-DD, HH:mm:ss");
  var timestamp = moment().unix();
  var data = {
    state: {
      desired: {
        short_addr: "0x0000",
        ext_addr: "03:BD:FB:7F:A3:7B",
        date_time: dateTime,
        smart_objects: {
          timestamp: timestamp,
          values: [
            {
              objectId: 3348,
              instanceId: 0,
              resourceId: 5547,
              datatype: "Integer",
              value: 2
            },
            {
              objectId: 3348,
              instanceId: 0,
              resourceId: 5750,
              datatype: "String",
              value: "open"
            }
          ]
        }
      }
    }
  };
  run();
  async function run() {
    const device = await req.app.get("device");
    device.publish(topic, JSON.stringify(data));
    res.json({ mes: dateTime, mes2: timestamp });
  }
});
router.get("/humid-control-off", (req, res) => {
  var dateTime = moment().format("YYYY-MM-DD, HH:mm:ss");
  var timestamp = moment().unix();
  var data = {
    state: {
      desired: {
        short_addr: "0x0000",
        ext_addr: "03:BD:FB:7F:A3:7B",
        date_time: dateTime,
        smart_objects: {
          timestamp: timestamp,
          values: [
            {
              objectId: 3348,
              instanceId: 0,
              resourceId: 5547,
              datatype: "Integer",
              value: 2
            },
            {
              objectId: 3348,
              instanceId: 0,
              resourceId: 5750,
              datatype: "String",
              value: "close"
            }
          ]
        }
      }
    }
  };
  run();
  async function run() {
    const device = await req.app.get("device");
    device.publish(topic, JSON.stringify(data));
    res.json({ mes: dateTime, mes2: timestamp });
  }
});
router.get("/car-control-on", (req, res) => {
  var dateTime = moment().format("YYYY-MM-DD, HH:mm:ss");
  var timestamp = moment().unix();
  var data = {
    state: {
      desired: {
        short_addr: "0x0000",
        ext_addr: "03:BD:FB:7F:A3:7B",
        date_time: dateTime,
        smart_objects: {
          timestamp: timestamp,
          values: [
            {
              objectId: 3348,
              instanceId: 0,
              resourceId: 5547,
              datatype: "Integer",
              value: 3
            },
            {
              objectId: 3348,
              instanceId: 0,
              resourceId: 5750,
              datatype: "String",
              value: "open"
            }
          ]
        }
      }
    }
  };
  run();
  async function run() {
    const device = await req.app.get("device");
    device.publish(topic, JSON.stringify(data));
    res.json({ mes: dateTime, mes2: timestamp });
  }
});
router.get("/car-control-off", (req, res) => {
  var dateTime = moment().format("YYYY-MM-DD, HH:mm:ss");
  var timestamp = moment().unix();
  var data = {
    state: {
      desired: {
        short_addr: "0x0000",
        ext_addr: "03:BD:FB:7F:A3:7B",
        date_time: dateTime,
        smart_objects: {
          timestamp: timestamp,
          values: [
            {
              objectId: 3348,
              instanceId: 0,
              resourceId: 5547,
              datatype: "Integer",
              value: 3
            },
            {
              objectId: 3348,
              instanceId: 0,
              resourceId: 5750,
              datatype: "String",
              value: "close"
            }
          ]
        }
      }
    }
  };
  run();
  async function run() {
    const device = await req.app.get("device");
    device.publish(topic, JSON.stringify(data));
    res.json({ mes: dateTime, mes2: timestamp });
  }
});

router.put("/fan-control", (req, res) => {
  var carValue, humidValue;
  var fanValue = req.body.fan;
  // var dateTime = moment().format("YYYY-MM-DD, HH:mm:ss");
  // var timestamp = moment().unix();
  // var data = {
  //   state: {
  //     desired: {
  //       short_addr: "0x0000",
  //       ext_addr: "03:BD:FB:7F:A3:7B",
  //       date_time: dateTime,
  //       smart_objects: {
  //         timestamp: timestamp,
  //         values: [
  //           {
  //             objectId: 3348,
  //             instanceId: 0,
  //             resourceId: 5547,
  //             datatype: "Integer",
  //             value: 12
  //           },
  //           {
  //             objectId: 3348,
  //             instanceId: 0,
  //             resourceId: 5750,
  //             datatype: "String",
  //             value: "open"
  //           }
  //         ]
  //       }
  //     }
  //   }
  // };
  Control.findOne({}, {}).then(control => {
    if (control) {
      var controlObject = control.toObject();
      var controlData = controlObject["control"];
      var arrControlData = Object.values(controlData)[0];
      carValue = arrControlData["car"];
      humidValue = arrControlData["humid"];
    }
    var fanData = {
      fan: fanValue,
      car: carValue,
      humid: humidValue
    };
    control.control = fanData;
    control.save();
    res.json({ mes: fanValue });
  });

  // var dateTime = moment().format("YYYY-MM-DD, HH:mm:ss");
  // var timestamp = moment().unix();
  // var data = {
  //   state: {
  //     desired: {
  //       short_addr: "0x0000",
  //       ext_addr: "03:BD:FB:7F:A3:7B",
  //       date_time: dateTime,
  //       smart_objects: {
  //         timestamp: timestamp,
  //         values: [
  //           {
  //             objectId: 3348,
  //             instanceId: 0,
  //             resourceId: 5547,
  //             datatype: "Integer",
  //             value: 12
  //           },
  //           {
  //             objectId: 3348,
  //             instanceId: 0,
  //             resourceId: 5750,
  //             datatype: "String",
  //             value: "open"
  //           }
  //         ]
  //       }
  //     }
  //   }
  // };
  // run();
  // async function run() {
  //   const device = await req.app.get("device");
  //   device.publish(topic, JSON.stringify(data));
  //   res.json({ mes: dateTime, mes2: timestamp });
  // }
});
router.post("/manual", (req, res) => {
  var dateTime = moment().format("YYYY-MM-DD, HH:mm:ss");
  var timestamp = moment().unix();
  var data = {
    state: {
      desired: {
        short_addr: "0x0000",
        ext_addr: "03:BD:FB:7F:A3:7B",
        date_time: dateTime,
        smart_objects: {
          timestamp: timestamp,
          values: [
            {
              objectId: 3348,
              instanceId: 0,
              resourceId: 5547,
              datatype: "Integer",
              value: 12
            },
            {
              objectId: 3348,
              instanceId: 0,
              resourceId: 5750,
              datatype: "String",
              value: "open"
            }
          ]
        }
      }
    }
  };
  run();
  async function run() {
    const device = await req.app.get("device");
    device.publish(topic, JSON.stringify(data));
    res.json({ mes: dateTime, mes2: timestamp });
  }
});
module.exports = router;
