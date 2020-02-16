import {
  CONTROL_MANUAL,
  GET_CONTROL,
  FAN_CONTROL,
  FAN1_CONTROL_ON,
  FAN1_CONTROL_OFF,
  HUMID_CONTROL_ON,
  HUMID_CONTROL_OFF,
  CAR_CONTROL_ON,
  CAR_CONTROL_OFF
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

export const fan1ControlOn = () => {
  return dispatch => {
    axios
      .get(`${host}/api/control/fan1-control-on`)
      .then(res => {
        dispatch({ type: FAN1_CONTROL_ON, payload: res });
      })
      .catch(err => console.log("err", err));
  };
};

export const fan1ControlOff = () => {
  return dispatch => {
    axios
      .get(`${host}/api/control/fan1-control-off`)
      .then(res => {
        dispatch({ type: FAN1_CONTROL_OFF, payload: res });
      })
      .catch(err => console.log("err", err));
  };
};

export const humidControlOn = () => {
  return dispatch => {
    axios
      .get(`${host}/api/control/humid-control-on`)
      .then(res => {
        dispatch({ type: HUMID_CONTROL_ON, payload: res });
      })
      .catch(err => console.log("err", err));
  };
};
export const humidControlOff = () => {
  return dispatch => {
    axios
      .get(`${host}/api/control/humid-control-off`)
      .then(res => {
        dispatch({ type: HUMID_CONTROL_OFF, payload: res });
      })
      .catch(err => console.log("err", err));
  };
};
export const carControlOn = () => {
  return dispatch => {
    axios
      .get(`${host}/api/control/car-control-on`)
      .then(res => {
        dispatch({ type: CAR_CONTROL_ON, payload: res });
      })
      .catch(err => console.log("err", err));
  };
};

export const carControlOff = () => {
  return dispatch => {
    axios
      .get(`${host}/api/control/car-control-off`)
      .then(res => {
        dispatch({ type: CAR_CONTROL_OFF, payload: res });
      })
      .catch(err => console.log("err", err));
  };
};
