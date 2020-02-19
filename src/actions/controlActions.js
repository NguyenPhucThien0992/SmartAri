import {
  CONTROL_MANUAL,
  GET_CONTROL,
  FAN_CONTROL,
  SEN1_COOLPART_CONTROL_ON,
  SEN1_COOLPART_CONTROL_OFF,
  SEN1_MISTING_CONTROL_ON,
  SEN1_MISTING_CONTROL_OFF,
  SEN1_LIGHT_CONTROL_ON,
  SEN1_LIGHT_CONTROL_OFF,
  SEN1_FAN1_CONTROL_ON,
  SEN1_FAN1_CONTROL_OFF,
  SEN1_FAN2_CONTROL_ON,
  SEN1_FAN2_CONTROL_OFF,
  SEN2_FAN1_CONTROL_ON,
  SEN2_FAN1_CONTROL_OFF,
  SEN2_LIGHT_CONTROL_ON,
  SEN2_LIGHT_CONTROL_OFF,
  SEN2_MISTING_CONTROL_ON,
  SEN2_MISTING_CONTROL_OFF,
  SEN2_COOLPART_CONTROL_ON,
  SEN2_COOLPART_CONTROL_OFF,
  SEN2_FAN2_CONTROL_ON,
  SEN2_FAN2_CONTROL_OFF
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
// Cool part On
export const sen1CoolpartControlOn = () => {
  return dispatch => {
    axios
      .get(`${host}/api/control/sen1-coolpart-control-on`)
      .then(res => {
        dispatch({ type: SEN1_COOLPART_CONTROL_ON, payload: res });
      })
      .catch(err => console.log("err", err));
  };
};

//Cool part Off
export const sen1CoolpartControlOff = () => {
  return dispatch => {
    axios
      .get(`${host}/api/control/sen1-coolpart-control-off`)
      .then(res => {
        dispatch({ type: SEN1_COOLPART_CONTROL_OFF, payload: res });
      })
      .catch(err => console.log("err", err));
  };
};

// Misting On
export const sen1MistingControlOn = () => {
  return dispatch => {
    axios
      .get(`${host}/api/control/sen1-misting-control-on`)
      .then(res => {
        dispatch({ type: SEN1_MISTING_CONTROL_ON, payload: res });
      })
      .catch(err => console.log("err", err));
  };
};

// Misting  Off
export const sen1MistingControlOff = () => {
  return dispatch => {
    axios
      .get(`${host}/api/control/sen1-misting-control-off`)
      .then(res => {
        dispatch({ type: SEN1_MISTING_CONTROL_OFF, payload: res });
      })
      .catch(err => console.log("err", err));
  };
};

// Light On
export const sen1LightControlOn = () => {
  return dispatch => {
    axios
      .get(`${host}/api/control/sen1-light-control-on`)
      .then(res => {
        dispatch({ type: SEN1_LIGHT_CONTROL_ON, payload: res });
      })
      .catch(err => console.log("err", err));
  };
};

// Light  Off
export const sen1LightControlOff = () => {
  return dispatch => {
    axios
      .get(`${host}/api/control/sen1-light-control-off`)
      .then(res => {
        dispatch({ type: SEN1_LIGHT_CONTROL_ON, payload: res });
      })
      .catch(err => console.log("err", err));
  };
};

// Fan1 On
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

// Fan2  Off
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

// Fan1 On
export const sen1Fan2ControlOn = () => {
  return dispatch => {
    axios
      .get(`${host}/api/control/sen1-fan2-control-on`)
      .then(res => {
        dispatch({ type: SEN1_FAN2_CONTROL_ON, payload: res });
      })
      .catch(err => console.log("err", err));
  };
};

// Fan2  Off
export const sen1Fan2ControlOff = () => {
  return dispatch => {
    axios
      .get(`${host}/api/control/sen1-fan2-control-off`)
      .then(res => {
        dispatch({ type: SEN1_FAN2_CONTROL_OFF, payload: res });
      })
      .catch(err => console.log("err", err));
  };
};
//=====================================================================
//=============================== Sensor 2 ==============================
//======================================================================// Fan1 On
// Fan1  On
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

// Fan1  Off
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

// Light  On
export const sen2LightControlOn = () => {
  return dispatch => {
    axios
      .get(`${host}/api/control/sen2-light-control-on`)
      .then(res => {
        dispatch({ type: SEN2_LIGHT_CONTROL_ON, payload: res });
      })
      .catch(err => console.log("err", err));
  };
};

// Light  Off
export const sen2LightControlOff = () => {
  return dispatch => {
    axios
      .get(`${host}/api/control/sen2-light-control-off`)
      .then(res => {
        dispatch({ type: SEN2_LIGHT_CONTROL_OFF, payload: res });
      })
      .catch(err => console.log("err", err));
  };
};

// Misting  On
export const sen2MistingControlOn = () => {
  return dispatch => {
    axios
      .get(`${host}/api/control/sen2-misting-control-on`)
      .then(res => {
        dispatch({ type: SEN2_MISTING_CONTROL_ON, payload: res });
      })
      .catch(err => console.log("err", err));
  };
};

// Misting  Off
export const sen2MistingControlOff = () => {
  return dispatch => {
    axios
      .get(`${host}/api/control/sen2-misting-control-off`)
      .then(res => {
        dispatch({ type: SEN2_MISTING_CONTROL_OFF, payload: res });
      })
      .catch(err => console.log("err", err));
  };
};
// Coolpart  On
export const sen2CoolpartControlOn = () => {
  return dispatch => {
    axios
      .get(`${host}/api/control/sen2-coolpart-control-on`)
      .then(res => {
        dispatch({ type: SEN2_COOLPART_CONTROL_ON, payload: res });
      })
      .catch(err => console.log("err", err));
  };
};

// Coolpart  Off
export const sen2CoolpartControlOff = () => {
  return dispatch => {
    axios
      .get(`${host}/api/control/sen2-coolpart-control-off`)
      .then(res => {
        dispatch({ type: SEN2_COOLPART_CONTROL_OFF, payload: res });
      })
      .catch(err => console.log("err", err));
  };
};

// Fan2  On
export const sen2Fan2ControlOn = () => {
  return dispatch => {
    axios
      .get(`${host}/api/control/sen2-fan2-control-on`)
      .then(res => {
        dispatch({ type: SEN2_FAN2_CONTROL_ON, payload: res });
      })
      .catch(err => console.log("err", err));
  };
};

// Fan2  Off
export const sen2Fan2ControlOff = () => {
  return dispatch => {
    axios
      .get(`${host}/api/control/sen2-fan2-control-off`)
      .then(res => {
        dispatch({ type: SEN2_FAN2_CONTROL_OFF, payload: res });
      })
      .catch(err => console.log("err", err));
  };
};
