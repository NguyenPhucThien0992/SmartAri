import {
  CONTROL_MANUAL,
  GET_CONTROL,
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
    case SEN1_FAN1_CONTROL_ON:
      return { ...state };
    case SEN1_FAN1_CONTROL_OFF:
      return { ...state };
    case SEN1_FAN2_CONTROL_ON:
      return { ...state };
    case SEN1_FAN2_CONTROL_OFF:
      return { ...state };
    case SEN1_HUM1_CONTROL_ON:
      return { ...state };
    case SEN1_HUM1_CONTROL_OFF:
      return { ...state };
    case SEN1_HUM2_CONTROL_ON:
      return { ...state };
    case SEN1_HUM2_CONTROL_OFF:
      return { ...state };
    case SEN1_SHOCKTEM1_CONTROL_ON:
      return { ...state };
    case SEN1_SHOCKTEM1_CONTROL_OFF:
      return { ...state };
    case SEN1_SHOCKTEM2_CONTROL_ON:
      return { ...state };
    case SEN1_SHOCKTEM2_CONTROL_OFF:
      return { ...state };
    case SEN1_LIGHT1_CONTROL_ON:
      return { ...state };
    case SEN1_LIGHT1_CONTROL_OFF:
      return { ...state };
    case SEN1_LIGHT2_CONTROL_ON:
      return { ...state };
    case SEN1_LIGHT2_CONTROL_OFF:
      return { ...state };
    case SEN1_ROOF1_CONTROL_ON:
      return { ...state };
    case SEN1_ROOF1_CONTROL_OFF:
      return { ...state };
    case SEN1_ROOF2_CONTROL_ON:
      return { ...state };
    case SEN1_ROOF2_CONTROL_OFF:
      return { ...state };
    case SEN1_FANCO1_CONTROL_ON:
      return { ...state };
    case SEN1_FANCO1_CONTROL_OFF:
      return { ...state };
    case SEN1_FANCO2_CONTROL_ON:
      return { ...state };
    case SEN1_FANCO2_CONTROL_OFF:
      return { ...state };
    case SEN2_FAN1_CONTROL_ON:
      return { ...state };
    case SEN2_FAN1_CONTROL_OFF:
      return { ...state };
    case SEN2_FAN2_CONTROL_ON:
      return { ...state };
    case SEN2_FAN2_CONTROL_OFF:
      return { ...state };
    case SEN2_HUM1_CONTROL_ON:
      return { ...state };
    case SEN2_HUM1_CONTROL_OFF:
      return { ...state };
    case SEN2_HUM2_CONTROL_ON:
      return { ...state };
    case SEN2_HUM2_CONTROL_OFF:
      return { ...state };
    case SEN2_SHOCKTEM1_CONTROL_ON:
      return { ...state };
    case SEN2_SHOCKTEM1_CONTROL_OFF:
      return { ...state };
    case SEN2_SHOCKTEM2_CONTROL_ON:
      return { ...state };
    case SEN2_SHOCKTEM2_CONTROL_OFF:
      return { ...state };
    case SEN2_LIGHT1_CONTROL_ON:
      return { ...state };
    case SEN2_LIGHT1_CONTROL_OFF:
      return { ...state };
    case SEN2_LIGHT2_CONTROL_ON:
      return { ...state };
    case SEN2_LIGHT2_CONTROL_OFF:
      return { ...state };
    case SEN2_ROOF1_CONTROL_ON:
      return { ...state };
    case SEN2_ROOF1_CONTROL_OFF:
      return { ...state };
    case SEN2_ROOF2_CONTROL_ON:
      return { ...state };
    case SEN2_ROOF2_CONTROL_OFF:
      return { ...state };
    case SEN2_FANCO1_CONTROL_ON:
      return { ...state };
    case SEN2_FANCO1_CONTROL_OFF:
      return { ...state };
    case SEN2_FANCO2_CONTROL_ON:
      return { ...state };
    case SEN2_FANCO2_CONTROL_OFF:
      return { ...state };
    default:
      return state;
  }
}
