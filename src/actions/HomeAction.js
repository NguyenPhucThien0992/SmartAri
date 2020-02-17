import {
  GET_DATA,
  INITIAL_DEVICE,
  GET_ALARM,
  GET_DATA_SENSOR1,
  GET_DATA_SENSOR2
} from "../actions/type";
import axios from "axios";
const host = process.env.REACT_APP_HOST_API;

export const initialDevice = () => {
  return dispatch => {
    axios.get("/api/home/initial").then(res => {
      dispatch({
        type: INITIAL_DEVICE
      });
    });
  };
};
export const getData = () => {
  return dispatch => {
    axios
      .get("/api/home/getdata")
      .then(res => {
        dispatch({
          type: GET_DATA,
          payload: res
        });
      })
      .catch(err => console.log("err", err));
  };
};

export const getAlarm = () => {
  return dispatch => {
    axios
      .get("api/alarm/getAlarm")
      .then(res => {
        dispatch({
          type: GET_ALARM,
          payload: res
        });
      })
      .catch(err => console.log("err", err));
  };
};

export const getDataSensor1 = () => {
  return dispatch => {
    axios.get(`${host}/api/home/get-data-sensor1`).then(res => {
      if (res && res !== null && res !== undefined) {
        var data = res["data"];
        var data2 = data["data"];
        var item = data2["Items"];
        var value = Object.values(item)[0];
        var payload = value["payload"];
        var state = payload["state"];
        var reported = state["reported"];
        var smartObjects = reported["smart_objects"];
      }
      dispatch({
        type: GET_DATA_SENSOR1,
        payload: smartObjects
      });
    });
  };
};

export const getDataSensor2 = () => {
  return dispatch => {
    axios.get(`${host}/api/home/get-data-sensor2`).then(res => {
      if (res && res !== null && res !== undefined) {
        var data = res["data"];
        var data2 = data["data"];
        var item = data2["Items"];
        var value = Object.values(item)[0];
        var payload = value["payload"];
        var state = payload["state"];
        var reported = state["reported"];
        var smartObjects = reported["smart_objects"];
      }
      dispatch({
        type: GET_DATA_SENSOR2,
        payload: smartObjects
      });
    });
  };
};
