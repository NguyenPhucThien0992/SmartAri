import { GET_ERRORS, SET_CURRENT_USER } from "./type";
import axios from "axios";
import setAuthToken from "./../ultils/setAuthtoken";
import jwt_decode from "jwt-decode";
const host = process.env.REACT_APP_HOST_API;
//Register
export const registerUser = (userData, history) => {
  return dispatch => {
    axios
      .post(`${host}/api/users/register`, userData)
      .then(res => {
        // console.log("res", res);
        // console.log("result", res.data);
        history.push("/login");
      })
      .catch(err =>
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data
        })
      );
  };
};

//Login  - get user token

export const loginUser = userData => {
  return dispatch => {
    axios
      .post(`${host}/api/users/login`, userData)
      .then(res => {
        //Save to local storage
        const { token } = res.data;

        // Set token to local storage
        //convert json to string
        localStorage.setItem("jwtToken", token);
        // Set token to Auth header
        setAuthToken(token);
        // Decode token to get user data
        const decoded = jwt_decode(token);
        //Set current user
        dispatch(setCurrentUser(decoded));
      })
      .catch(err => {
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data
        });
      });
  };
};

// Set logged in user
export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};

//Log user out

export const logoutUser = () => {
  return dispatch => {
    //Remove token from localStorage
    localStorage.removeItem("jwtToken");
    //Remove auth header for future request
    // Truyền vào false để nó nhảy vào trường hợp false số 2 của setAuthToken để nó tự độnng xoá header ở đó
    setAuthToken(false);
    // Set current user to {empty object} which will set isAuthenticated to false
    dispatch(setCurrentUser({}));
  };
};
