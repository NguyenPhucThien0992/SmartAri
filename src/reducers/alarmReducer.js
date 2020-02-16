import {
  UPDATE_ALARM,
  GET_ALARM_SENSOR1,
  GET_ALARM_SENSOR2,
  UPDATE_ALARM_SENSOR1,
  UPDATE_ALARM_SENSOR2
} from "./../actions/type";

const initialState = {
  alarm: null,
  alarm_sensor1: null,
  alarm_sensor2: null,
  update_sensor1: null,
  update_sensor2: null,
  initial: 23
};

export default function(state = initialState, action) {
  switch (action.type) {
    case UPDATE_ALARM:
      return {
        ...state,
        alarm: action.payload
      };
    case GET_ALARM_SENSOR1:
      return {
        ...state,
        alarm_sensor1: action.payload
      };
    case GET_ALARM_SENSOR2:
      return {
        ...state,
        alarm_sensor2: action.payload
      };
    case UPDATE_ALARM_SENSOR1:
      return {
        ...state
      };
    case UPDATE_ALARM_SENSOR2:
      return {
        ...state
      };
    default:
      return state;
  }
}
