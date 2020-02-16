import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import homeReducer from "./homeReducer";
import alarmReducer from "./alarmReducer";
import controlReducer from "./controlReducer";

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  home: homeReducer,
  alarm: alarmReducer,
  control: controlReducer
});
