import {
  CONTROL_MANUAL,
  GET_CONTROL,
  FAN_CONTROL,
  SEN1_FAN1_CONTROL_ON,
  SEN1_FAN1_CONTROL_OFF,
  SEN1_FAN2_CONTROL_ON,
  SEN1_FAN2_CONTROL_OFF,
  SEN1_HUM1_CONTROL_ON,
  SEN1_HUM1_CONTROL_OFF,
  SEN1_HUM2_CONTROL_ON,
  SEN1_HUM2_CONTROL_OFF,
  SEN1_SHOCKTEM1_CONTROL_ON,
  SEN1_SHOCKTEM1_CONTROL_OFF,
  SEN1_SHOCKTEM2_CONTROL_ON,
  SEN1_SHOCKTEM2_CONTROL_OFF,
  SEN1_LIGHT1_CONTROL_ON,
  SEN1_LIGHT1_CONTROL_OFF,
  SEN1_LIGHT2_CONTROL_ON,
  SEN1_LIGHT2_CONTROL_OFF,
  SEN1_ROOF1_CONTROL_ON,
  SEN1_ROOF1_CONTROL_OFF,
  SEN1_ROOF2_CONTROL_ON,
  SEN1_ROOF2_CONTROL_OFF,
  SEN1_FANCO1_CONTROL_ON,
  SEN1_FANCO1_CONTROL_OFF,
  SEN1_FANCO2_CONTROL_ON,
  SEN1_FANCO2_CONTROL_OFF,
  SEN2_FAN1_CONTROL_ON,
  SEN2_FAN1_CONTROL_OFF,
  SEN2_FAN2_CONTROL_ON,
  SEN2_FAN2_CONTROL_OFF,
  SEN2_HUM1_CONTROL_ON,
  SEN2_HUM1_CONTROL_OFF,
  SEN2_HUM2_CONTROL_ON,
  SEN2_HUM2_CONTROL_OFF,
  SEN2_SHOCKTEM1_CONTROL_ON,
  SEN2_SHOCKTEM1_CONTROL_OFF,
  SEN2_SHOCKTEM2_CONTROL_ON,
  SEN2_SHOCKTEM2_CONTROL_OFF,
  SEN2_LIGHT1_CONTROL_ON,
  SEN2_LIGHT1_CONTROL_OFF,
  SEN2_LIGHT2_CONTROL_ON,
  SEN2_LIGHT2_CONTROL_OFF,
  SEN2_ROOF1_CONTROL_ON,
  SEN2_ROOF1_CONTROL_OFF,
  SEN2_ROOF2_CONTROL_ON,
  SEN2_ROOF2_CONTROL_OFF,
  SEN2_FANCO1_CONTROL_ON,
  SEN2_FANCO1_CONTROL_OFF,
  SEN2_FANCO2_CONTROL_ON,
  SEN2_FANCO2_CONTROL_OFF
} from "../actions/type";
import axios from "axios";
const host = process.env.REACT_APP_HOST_API;

export const controlManual = () => {
  return dispatch => {
    axios.post(`${host}/api/control/manual`).then(res => {
      dispatch({
        type: CONTROL_MANUAL,
        payload: res
      });
    });
  };
};

export const getControl = () => {
  return dispatch => {
    axios.get(`${host}/api/control/get-control`).then(res => {
      dispatch({
        type: GET_CONTROL,
        payload: res
      });
    });
  };
};

export const fanControl = () => {
  return dispatch => {
    axios
      .put(`${host}/api/control/fan-control`)
      .then(res => {
        dispatch({ type: FAN_CONTROL, payload: res });
      })
      .catch(err => console.log("err", err));
  };
};
// Fan 1 On
export const sen1Fan1ControlOn = () => {
  return dispatch => {
    axios
      .get(`${host}/api/control/sen1-fan1-control-on`)
      .then(res => {
        dispatch({ type: SEN1_FAN1_CONTROL_ON, payload: res });
      })
      .catch(err => console.log("err", err));
  };
};

//Fan 1 Off
export const sen1Fan1ControlOff = () => {
  return dispatch => {
    axios
      .get(`${host}/api/control/sen1-fan1-control-off`)
      .then(res => {
        dispatch({ type: SEN1_FAN1_CONTROL_OFF, payload: res });
      })
      .catch(err => console.log("err", err));
  };
};

// fan 2 On
export const sen1fan2ControlOn = () => {
  return dispatch => {
    axios
      .get(`${host}/api/control/sen1-fan2-control-on`)
      .then(res => {
        dispatch({ type: SEN1_FAN2_CONTROL_ON, payload: res });
      })
      .catch(err => console.log("err", err));
  };
};

// Fan 2 off
export const sen1fan2ControlOff = () => {
  return dispatch => {
    axios
      .get(`${host}/api/control/sen1-fan2-control-off`)
      .then(res => {
        dispatch({ type: SEN1_FAN2_CONTROL_OFF, payload: res });
      })
      .catch(err => console.log("err", err));
  };
};

// Humid 1 on
export const sen1Humid1ControlOn = () => {
  return dispatch => {
    axios
      .get(`${host}/api/control/sen1-humid1-control-on`)
      .then(res => {
        dispatch({ type: SEN1_HUM1_CONTROL_ON, payload: res });
      })
      .catch(err => console.log("err", err));
  };
};

// Humid 1 off
export const sen1Humid1ControlOff = () => {
  return dispatch => {
    axios
      .get(`${host}/api/control/sen1-humid1-control-off`)
      .then(res => {
        dispatch({ type: SEN1_HUM1_CONTROL_OFF, payload: res });
      })
      .catch(err => console.log("err", err));
  };
};

// Shock 1 on
export const sen1Humid2ControlOn = () => {
  return dispatch => {
    axios
      .get(`${host}/api/control/sen1-humid2-control-on`)
      .then(res => {
        dispatch({ type: SEN1_HUM2_CONTROL_ON, payload: res });
      })
      .catch(err => console.log("err", err));
  };
};

// Humid 2 off
export const sen1Humid2ControlOff = () => {
  return dispatch => {
    axios
      .get(`${host}/api/control/sen1-humid2-control-off`)
      .then(res => {
        dispatch({ type: SEN1_HUM2_CONTROL_OFF, payload: res });
      })
      .catch(err => console.log("err", err));
  };
};

// Shock 1 on
export const sen1ShockTem1ControlOn = () => {
  return dispatch => {
    axios
      .get(`${host}/api/control/sen1-shocktem1-control-on`)
      .then(res => {
        dispatch({ type: SEN1_SHOCKTEM1_CONTROL_ON, payload: res });
      })
      .catch(err => console.log("err", err));
  };
};

// Shock 1 off
export const sen1ShockTem1ControlOff = () => {
  return dispatch => {
    axios
      .get(`${host}/api/control/sen1-shocktem1-control-off`)
      .then(res => {
        dispatch({ type: SEN1_SHOCKTEM1_CONTROL_OFF, payload: res });
      })
      .catch(err => console.log("err", err));
  };
};

// Shock 2 on
export const sen1ShockTem2ControlOn = () => {
  return dispatch => {
    axios
      .get(`${host}/api/control/sen1-shocktem2-control-on`)
      .then(res => {
        dispatch({ type: SEN1_SHOCKTEM2_CONTROL_ON, payload: res });
      })
      .catch(err => console.log("err", err));
  };
};

// Shock 2 off
export const sen1ShockTem2ControlOff = () => {
  return dispatch => {
    axios
      .get(`${host}/api/control/sen1-shocktem2-control-off`)
      .then(res => {
        dispatch({ type: SEN1_SHOCKTEM2_CONTROL_OFF, payload: res });
      })
      .catch(err => console.log("err", err));
  };
};

// ligh1  on
export const sen1Light1ControlOn = () => {
  return dispatch => {
    axios
      .get(`${host}/api/control/sen1-light1-control-on`)
      .then(res => {
        dispatch({ type: SEN1_LIGHT1_CONTROL_ON, payload: res });
      })
      .catch(err => console.log("err", err));
  };
};

// ligh 1 off
export const sen1Light1ControlOff = () => {
  return dispatch => {
    axios
      .get(`${host}/api/control/sen1-light1-control-off`)
      .then(res => {
        dispatch({ type: SEN1_LIGHT1_CONTROL_OFF, payload: res });
      })
      .catch(err => console.log("err", err));
  };
};

// ligh 2 on
export const sen1Light2ControlOn = () => {
  return dispatch => {
    axios
      .get(`${host}/api/control/sen1-light2-control-on`)
      .then(res => {
        dispatch({ type: SEN1_LIGHT2_CONTROL_ON, payload: res });
      })
      .catch(err => console.log("err", err));
  };
};

// ligh 2 off
export const sen1Light2ControlOff = () => {
  return dispatch => {
    axios
      .get(`${host}/api/control/sen1-light2-control-off`)
      .then(res => {
        dispatch({ type: SEN1_LIGHT2_CONTROL_OFF, payload: res });
      })
      .catch(err => console.log("err", err));
  };
};

// roof 1 on
export const sen1Roof1ControlOn = () => {
  return dispatch => {
    axios
      .get(`${host}/api/control/sen1-roof1-control-on`)
      .then(res => {
        dispatch({ type: SEN1_ROOF1_CONTROL_ON, payload: res });
      })
      .catch(err => console.log("err", err));
  };
};
// roof 1 off
export const sen1Roof1ControlOff = () => {
  return dispatch => {
    axios
      .get(`${host}/api/control/sen1-roof1-control-off`)
      .then(res => {
        dispatch({ type: SEN1_ROOF1_CONTROL_OFF, payload: res });
      })
      .catch(err => console.log("err", err));
  };
};

// roof 2 on
export const sen1Roof2ControlOn = () => {
  return dispatch => {
    axios
      .get(`${host}/api/control/sen1-roof2-control-on`)
      .then(res => {
        dispatch({ type: SEN1_ROOF2_CONTROL_ON, payload: res });
      })
      .catch(err => console.log("err", err));
  };
};
// roof 2 off
export const sen1Roof2ControlOff = () => {
  return dispatch => {
    axios
      .get(`${host}/api/control/sen1-roof2-control-off`)
      .then(res => {
        dispatch({ type: SEN1_ROOF2_CONTROL_OFF, payload: res });
      })
      .catch(err => console.log("err", err));
  };
};
// Fan CO 1 on
export const sen1FanCO1ControlOn = () => {
  return dispatch => {
    axios
      .get(`${host}/api/control/sen1-fanCO1-control-on`)
      .then(res => {
        dispatch({ type: SEN1_FANCO1_CONTROL_ON, payload: res });
      })
      .catch(err => console.log("err", err));
  };
};
// fan CO1 off
export const sen1FanCO1ControlOff = () => {
  return dispatch => {
    axios
      .get(`${host}/api/control/sen1-fanCO1-control-off`)
      .then(res => {
        dispatch({ type: SEN1_FANCO1_CONTROL_OFF, payload: res });
      })
      .catch(err => console.log("err", err));
  };
};

// Fan CO 2 on
export const sen1FanCO2ControlOn = () => {
  return dispatch => {
    axios
      .get(`${host}/api/control/sen1-fanCO2-control-on`)
      .then(res => {
        dispatch({ type: SEN1_FANCO2_CONTROL_ON, payload: res });
      })
      .catch(err => console.log("err", err));
  };
};
// fan CO2 off
export const sen1FanCO2ControlOff = () => {
  return dispatch => {
    axios
      .get(`${host}/api/control/sen1-fanCO2-control-off`)
      .then(res => {
        dispatch({ type: SEN1_FANCO2_CONTROL_OFF, payload: res });
      })
      .catch(err => console.log("err", err));
  };
};

//  =====================================================================
//  ====================    Sensor 2                  ======================
//  =====================================================================
// Fan 1 On
export const sen2Fan1ControlOn = () => {
  return dispatch => {
    axios
      .get(`${host}/api/control/sen2-fan1-control-on`)
      .then(res => {
        dispatch({ type: SEN2_FAN1_CONTROL_ON, payload: res });
      })
      .catch(err => console.log("err", err));
  };
};

//Fan 1 Off
export const sen2Fan1ControlOff = () => {
  return dispatch => {
    axios
      .get(`${host}/api/control/sen2-fan1-control-off`)
      .then(res => {
        dispatch({ type: SEN2_FAN1_CONTROL_OFF, payload: res });
      })
      .catch(err => console.log("err", err));
  };
};

// fan 2 On
export const sen2fan2ControlOn = () => {
  return dispatch => {
    axios
      .get(`${host}/api/control/sen2-fan2-control-on`)
      .then(res => {
        dispatch({ type: SEN2_FAN2_CONTROL_ON, payload: res });
      })
      .catch(err => console.log("err", err));
  };
};

// Fan 2 off
export const sen2fan2ControlOff = () => {
  return dispatch => {
    axios
      .get(`${host}/api/control/sen2-fan2-control-off`)
      .then(res => {
        dispatch({ type: SEN2_FAN2_CONTROL_OFF, payload: res });
      })
      .catch(err => console.log("err", err));
  };
};

// Humid 1 on
export const sen2Humid1ControlOn = () => {
  return dispatch => {
    axios
      .get(`${host}/api/control/sen2-humid1-control-on`)
      .then(res => {
        dispatch({ type: SEN2_HUM1_CONTROL_ON, payload: res });
      })
      .catch(err => console.log("err", err));
  };
};

// Humid 1 off
export const sen2Humid1ControlOff = () => {
  return dispatch => {
    axios
      .get(`${host}/api/control/sen2-humid1-control-off`)
      .then(res => {
        dispatch({ type: SEN2_HUM1_CONTROL_OFF, payload: res });
      })
      .catch(err => console.log("err", err));
  };
};

// Shock 1 on
export const sen2Humid2ControlOn = () => {
  return dispatch => {
    axios
      .get(`${host}/api/control/sen2-humid2-control-on`)
      .then(res => {
        dispatch({ type: SEN2_HUM2_CONTROL_ON, payload: res });
      })
      .catch(err => console.log("err", err));
  };
};

// Humid 2 off
export const sen2Humid2ControlOff = () => {
  return dispatch => {
    axios
      .get(`${host}/api/control/sen2-humid2-control-off`)
      .then(res => {
        dispatch({ type: SEN2_HUM2_CONTROL_OFF, payload: res });
      })
      .catch(err => console.log("err", err));
  };
};

// Shock 1 on
export const sen2ShockTem1ControlOn = () => {
  return dispatch => {
    axios
      .get(`${host}/api/control/sen2-shocktem1-control-on`)
      .then(res => {
        dispatch({ type: SEN2_SHOCKTEM1_CONTROL_ON, payload: res });
      })
      .catch(err => console.log("err", err));
  };
};

// Shock 1 off
export const sen2ShockTem1ControlOff = () => {
  return dispatch => {
    axios
      .get(`${host}/api/control/sen2-shocktem1-control-off`)
      .then(res => {
        dispatch({ type: SEN2_SHOCKTEM1_CONTROL_OFF, payload: res });
      })
      .catch(err => console.log("err", err));
  };
};

// Shock 2 on
export const sen2ShockTem2ControlOn = () => {
  return dispatch => {
    axios
      .get(`${host}/api/control/sen2-shocktem2-control-on`)
      .then(res => {
        dispatch({ type: SEN2_SHOCKTEM2_CONTROL_ON, payload: res });
      })
      .catch(err => console.log("err", err));
  };
};

// Shock 2 off
export const sen2ShockTem2ControlOff = () => {
  return dispatch => {
    axios
      .get(`${host}/api/control/sen2-shocktem2-control-off`)
      .then(res => {
        dispatch({ type: SEN2_SHOCKTEM2_CONTROL_OFF, payload: res });
      })
      .catch(err => console.log("err", err));
  };
};

// ligh1  on
export const sen2Light1ControlOn = () => {
  return dispatch => {
    axios
      .get(`${host}/api/control/sen2-light1-control-on`)
      .then(res => {
        dispatch({ type: SEN2_LIGHT1_CONTROL_ON, payload: res });
      })
      .catch(err => console.log("err", err));
  };
};

// ligh 1 off
export const sen2Light1ControlOff = () => {
  return dispatch => {
    axios
      .get(`${host}/api/control/sen2-light1-control-off`)
      .then(res => {
        dispatch({ type: SEN2_LIGHT1_CONTROL_OFF, payload: res });
      })
      .catch(err => console.log("err", err));
  };
};

// ligh 2 on
export const sen2Light2ControlOn = () => {
  return dispatch => {
    axios
      .get(`${host}/api/control/sen2-light2-control-on`)
      .then(res => {
        dispatch({ type: SEN2_LIGHT2_CONTROL_ON, payload: res });
      })
      .catch(err => console.log("err", err));
  };
};

// ligh 2 off
export const sen2Light2ControlOff = () => {
  return dispatch => {
    axios
      .get(`${host}/api/control/sen2-light2-control-off`)
      .then(res => {
        dispatch({ type: SEN2_LIGHT2_CONTROL_OFF, payload: res });
      })
      .catch(err => console.log("err", err));
  };
};

// roof 1 on
export const sen2Roof1ControlOn = () => {
  return dispatch => {
    axios
      .get(`${host}/api/control/sen2-roof1-control-on`)
      .then(res => {
        dispatch({ type: SEN2_ROOF1_CONTROL_ON, payload: res });
      })
      .catch(err => console.log("err", err));
  };
};
// roof 1 off
export const sen2Roof1ControlOff = () => {
  return dispatch => {
    axios
      .get(`${host}/api/control/sen2-roof1-control-off`)
      .then(res => {
        dispatch({ type: SEN2_ROOF1_CONTROL_OFF, payload: res });
      })
      .catch(err => console.log("err", err));
  };
};

// roof 2 on
export const sen2Roof2ControlOn = () => {
  return dispatch => {
    axios
      .get(`${host}/api/control/sen2-roof2-control-on`)
      .then(res => {
        dispatch({ type: SEN2_ROOF2_CONTROL_ON, payload: res });
      })
      .catch(err => console.log("err", err));
  };
};
// roof 2 off
export const sen2Roof2ControlOff = () => {
  return dispatch => {
    axios
      .get(`${host}/api/control/sen2-roof2-control-off`)
      .then(res => {
        dispatch({ type: SEN2_ROOF2_CONTROL_OFF, payload: res });
      })
      .catch(err => console.log("err", err));
  };
};
// Fan CO 1 on
export const sen2FanCO1ControlOn = () => {
  return dispatch => {
    axios
      .get(`${host}/api/control/sen2-fanCO1-control-on`)
      .then(res => {
        dispatch({ type: SEN2_FANCO1_CONTROL_ON, payload: res });
      })
      .catch(err => console.log("err", err));
  };
};
// fan CO1 off
export const sen2FanCO1ControlOff = () => {
  return dispatch => {
    axios
      .get(`${host}/api/control/sen2-fanCO1-control-off`)
      .then(res => {
        dispatch({ type: SEN2_FANCO1_CONTROL_OFF, payload: res });
      })
      .catch(err => console.log("err", err));
  };
};

// Fan CO 2 on
export const sen2FanCO2ControlOn = () => {
  return dispatch => {
    axios
      .get(`${host}/api/control/sen2-fanCO2-control-on`)
      .then(res => {
        dispatch({ type: SEN2_FANCO2_CONTROL_ON, payload: res });
      })
      .catch(err => console.log("err", err));
  };
};
// fan CO2 off
export const sen2FanCO2ControlOff = () => {
  return dispatch => {
    axios
      .get(`${host}/api/control/sen2-fanCO2-control-off`)
      .then(res => {
        dispatch({ type: SEN2_FANCO2_CONTROL_OFF, payload: res });
      })
      .catch(err => console.log("err", err));
  };
};
