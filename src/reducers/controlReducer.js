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
} from "./../actions/type";
import isEmpty from "../validation/is-empty";

const initialState = {
  control: null
};
export default function(state = initialState, action) {
  switch (action.type) {
    case CONTROL_MANUAL:
      console.log("res", action.payload);
      return state;
    case GET_CONTROL:
      return {
        ...state,
        control: action.payload
      };
    case FAN_CONTROL:
      return {
        ...state
      };
    case FAN1_CONTROL_ON:
      return { ...state };
    case FAN1_CONTROL_OFF:
      return { ...state };
    case HUMID_CONTROL_ON:
      return { ...state };
    case HUMID_CONTROL_OFF:
      return { ...state };
    case CAR_CONTROL_ON:
      return { ...state };
    case CAR_CONTROL_OFF:
      return { ...state };
    default:
      return state;
  }
}
