import {
  CONTROL_MANUAL,
  GET_CONTROL,
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
    case SEN1_COOLPART_CONTROL_ON:
      return { ...state };
    case SEN1_COOLPART_CONTROL_OFF:
      return { ...state };
    case SEN1_MISTING_CONTROL_ON:
      return { ...state };
    case SEN1_MISTING_CONTROL_OFF:
      return { ...state };
    case SEN1_LIGHT_CONTROL_ON:
      return { ...state };
    case SEN1_LIGHT_CONTROL_OFF:
      return { ...state };
    case SEN1_FAN1_CONTROL_ON:
      return { ...state };
    case SEN1_FAN1_CONTROL_OFF:
      return { ...state };
    case SEN1_FAN2_CONTROL_ON:
      return { ...state };
    case SEN1_FAN2_CONTROL_OFF:
      return { ...state };
    case SEN2_FAN1_CONTROL_ON:
      return { ...state };
    case SEN2_FAN1_CONTROL_OFF:
      return { ...state };
    case SEN2_LIGHT_CONTROL_ON:
      return { ...state };
    case SEN2_LIGHT_CONTROL_OFF:
      return { ...state };
    case SEN2_MISTING_CONTROL_ON:
      return { ...state };
    case SEN2_MISTING_CONTROL_OFF:
      return { ...state };
    case SEN2_COOLPART_CONTROL_ON:
      return { ...state };
    case SEN2_COOLPART_CONTROL_OFF:
      return { ...state };
    case SEN2_FAN2_CONTROL_ON:
      return { ...state };
    case SEN2_FAN2_CONTROL_OFF:
      return { ...state };
    default:
      return state;
  }
}
