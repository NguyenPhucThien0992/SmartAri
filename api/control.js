const express = require("express");
const router = express.Router();
const topic = "$aws/things/Gateway_1/shadow/update";
const moment = require("moment");

// Cool part On
router.get("/sen1-coolpart-control-on", (req, res) => {
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
//  Cool part off
router.get("/sen1-coolpart-control-off", (req, res) => {
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

// misting On
router.get("/sen1-misting-control-on", (req, res) => {
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
//  Misting off
router.get("/sen1-misting-control-off", (req, res) => {
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

// Light On
router.get("/sen1-light-control-on", (req, res) => {
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
// Light off
router.get("/sen1-light-control-off", (req, res) => {
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
// Fan1 On
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
// Fan1 off
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
// Fan2 On
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
// Fan2 off
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

//  =====================================================================
//  ====================    Sensor 2                  ======================
//  =====================================================================
// Fan1 On
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
// Fan1 off
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

// Light On
router.get("/sen2-light-control-on", (req, res) => {
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
// Light off
router.get("/sen2-light-control-off", (req, res) => {
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

// Misting On
router.get("/sen2-misting-control-on", (req, res) => {
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
// Misting off
router.get("/sen2-misting-control-off", (req, res) => {
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

// Coolpart On
router.get("/sen2-coolpart-control-on", (req, res) => {
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
// Coolpart off
router.get("/sen2-coolpart-control-off", (req, res) => {
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

// Fan2 On
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
// Fan2 off
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

module.exports = router;
