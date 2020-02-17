const express = require("express");
const router = express.Router();
const topic = "$aws/things/Gateway_1/shadow/update";
const moment = require("moment");

//Fan 1 On
router.get("/sen1-fan1-control-on", (req, res) => {
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

// Fan1 Off
router.get("/sen1-fan1-control-off", (req, res) => {
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

router.get("/sen1-fan2-control-on", (req, res) => {
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

// Fan2 OFf
router.get("/sen1-fan2-control-off", (req, res) => {
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

// Humidity machine 1 on
router.get("/sen1-humid1-control-on", (req, res) => {
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

// Humidity machine 1 off
router.get("/sen1-humid1-control-off", (req, res) => {
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

// Humidity machine 2 on
router.get("/sen1-humid2-control-on", (req, res) => {
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
              value: 4
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

// Humidity machine 1 off
router.get("/sen1-humid2-control-off", (req, res) => {
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
              value: 4
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

// Shock temperature machine 1 on
router.get("/sen1-shocktem1-control-on", (req, res) => {
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
              value: 5
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

// shocktem1 machine 1 off
router.get("/sen1-shocktem1-control-off", (req, res) => {
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
              value: 5
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

// Shock temperature machine 2 on
router.get("/sen1-shocktem2-control-on", (req, res) => {
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
              value: 6
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

// shocktem2 machine 2 off
router.get("/sen1-shocktem2-control-off", (req, res) => {
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
              value: 6
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
// light 1 on
router.get("/sen1-light1-control-on", (req, res) => {
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
              value: 7
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

// light 1 off
router.get("/sen1-light1-control-off", (req, res) => {
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
              value: 7
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

// light 2 on
router.get("/sen1-light2-control-on", (req, res) => {
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
              value: 8
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

// light 2 off
router.get("/sen1-light2-control-off", (req, res) => {
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
              value: 8
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

// roof 1  on
router.get("/sen1-roof1-control-on", (req, res) => {
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
              value: 9
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
// roof 1  off
router.get("/sen1-roof1-control-off", (req, res) => {
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
              value: 9
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
// roof2 on
router.get("/sen1-roof2-control-on", (req, res) => {
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
              value: 10
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
// roof 2  off
router.get("/sen1-roof2-control-off", (req, res) => {
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
              value: 10
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
// FanCO1  on
router.get("/sen1-fanCO1-control-on", (req, res) => {
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
              value: 11
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
// fanCO1  off
router.get("/sen1-fanCO1-control-off", (req, res) => {
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
              value: 11
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

// FanCO2  on
router.get("/sen1-fanCO2-control-on", (req, res) => {
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
// fanCO1  off
router.get("/sen1-fanCO2-control-off", (req, res) => {
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
              value: 12
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

//  =====================================================================
//  ====================    Sensor 2                  ======================
//  =====================================================================
//Fan 1 On
router.get("/sen2-fan1-control-on", (req, res) => {
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
              value: 13
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

// Fan1 Off
router.get("/sen2-fan1-control-off", (req, res) => {
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
              value: 13
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

router.get("/sen2-fan2-control-on", (req, res) => {
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
              value: 14
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

// Fan2 OFf
router.get("/sen2-fan2-control-off", (req, res) => {
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
              value: 14
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

// Humidity machine 1 on
router.get("/sen2-humid1-control-on", (req, res) => {
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
              value: 15
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

// Humidity machine 1 off
router.get("/sen2-humid1-control-off", (req, res) => {
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
              value: 15
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

// Humidity machine 2 on
router.get("/sen2-humid2-control-on", (req, res) => {
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
              value: 16
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

// Humidity machine 1 off
router.get("/sen2-humid2-control-off", (req, res) => {
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
              value: 16
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

// Shock temperature machine 1 on
router.get("/sen2-shocktem1-control-on", (req, res) => {
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
              value: 17
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

// shocktem1 machine 1 off
router.get("/sen2-shocktem1-control-off", (req, res) => {
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
              value: 17
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

// Shock temperature machine 2 on
router.get("/sen2-shocktem2-control-on", (req, res) => {
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
              value: 18
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

// shocktem2 machine 2 off
router.get("/sen2-shocktem2-control-off", (req, res) => {
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
              value: 18
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
// light 1 on
router.get("/sen2-light1-control-on", (req, res) => {
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
              value: 19
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

// light 1 off
router.get("/sen2-light1-control-off", (req, res) => {
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
              value: 19
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

// light 2 on
router.get("/sen2-light2-control-on", (req, res) => {
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
              value: 20
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

// light 2 off
router.get("/sen2-light2-control-off", (req, res) => {
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
              value: 20
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

// roof 1  on
router.get("/sen2-roof1-control-on", (req, res) => {
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
              value: 21
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
// roof 1  off
router.get("/sen2-roof1-control-off", (req, res) => {
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
              value: 21
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
// roof2 on
router.get("/sen2-roof2-control-on", (req, res) => {
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
              value: 22
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
// roof 2  off
router.get("/sen2-roof2-control-off", (req, res) => {
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
              value: 22
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
// FanCO1  on
router.get("/sen2-fanCO1-control-on", (req, res) => {
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
              value: 23
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
// fanCO1  off
router.get("/sen2-fanCO1-control-off", (req, res) => {
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
              value: 23
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

// FanCO2  on
router.get("/sen2-fanCO2-control-on", (req, res) => {
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
              value: 24
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
// fanCO1  off
router.get("/sen2-fanCO2-control-off", (req, res) => {
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
              value: 24
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

module.exports = router;
