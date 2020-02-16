import {
  UPDATE_ALARM,
  INITIAL_DEVICE,
  GET_ALARM_SENSOR1,
  GET_ALARM_SENSOR2,
  UPDATE_ALARM_SENSOR1,
  UPDATE_ALARM_SENSOR2
} from "../actions/type";
import axios from "axios";

const host = process.env.REACT_APP_HOST_API;

export const initialDevice = () => {
  return dispatch => {
    axios.get(`${host}/api/home/initial`).then(res => {
      dispatch({
        type: INITIAL_DEVICE
      });
    });
  };
};

export const updateAlarm = (alarmData, history) => {
  return dispatch => {
    axios
      .put(`${host}/api/alarm/update-alarm`, alarmData)
      .then(res => {
        dispatch({
          type: UPDATE_ALARM,
          payload: res
        });
      })
      .catch(err => console.log("err", err));
  };
};

export const getAlarmSensor1 = () => {
  return dispatch => {
    axios.get(`${host}/api/alarm/get-alarm-sensor1`).then(res => {
      dispatch({
        type: GET_ALARM_SENSOR1,
        payload: res.data
      });
    });
  };
};

export const getAlarmSensor2 = () => {
  return dispatch => {
    axios.get(`${host}/api/alarm/get-alarm-sensor2`).then(res => {
      dispatch({
        type: GET_ALARM_SENSOR2,
        payload: res.data
      });
    });
  };
};

export const updateAlarmSensor1 = alarmData => {
  return dispatch => {
    axios.post(`${host}/pi/alarm/update-alarm-sensor1`, alarmData).then(res => {
      dispatch({
        type: UPDATE_ALARM_SENSOR1
      });
    });
  };
};

export const updateAlarmSensor2 = alarmData => {
  return dispatch => {
    axios
      .post(`${host}/api/alarm/update-alarm-sensor2`, alarmData)
      .then(res => {
        dispatch({
          type: UPDATE_ALARM_SENSOR2
        });
      });
  };
};
