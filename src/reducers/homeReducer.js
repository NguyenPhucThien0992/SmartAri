import {
  GET_DATA,
  GET_ALARM,
  GET_DATA_SENSOR1,
  GET_DATA_SENSOR2,
  TESTING2
} from "./../actions/type";

const initialState = {
  data: null,
  alarm: null,
  sensor1: null,
  sensor2: null,
  testing: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_DATA:
      return { ...state, data: action.payload };
    case GET_ALARM:
      return {
        ...state,
        alarm: action.payload
      };
    case GET_DATA_SENSOR1:
      return {
        ...state,
        sensor1: action.payload
      };
    case GET_DATA_SENSOR2:
      return {
        ...state,
        sensor2: action.payload
      };
    case TESTING2:
      return {
        ...state,
        testing: action.payload
      };
    default:
      return state;
  }
}
