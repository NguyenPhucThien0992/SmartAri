const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateRegister(data) {
  data.username = !isEmpty(data.username) ? data.username : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  if (!Validator.isLength(data.username, { min: 2, max: 30 })) {
    errors.username = "User phải nằm trong đoạn 2 đến 30 kí tự";
  }
  if (Validator.isEmpty(data.username)) {
    errors.username = "Trường username không được để trống!";
  }
};

module.exports = function validateRegisterInput(data) {
  let errors = {};

  data.name = !isEmpty(data.name) ? data.name : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.password2 = !isEmpty(data.password2) ? data.password2 : "";

  if (!Validator.isLength(data.name, { min: 2, max: 30 })) {
    errors.name = "Name must be between 2 and 30 characters";
  }

  if (Validator.isEmpty(data.name)) {
    errors.name = "Name field is required!";
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required!";
  }

  if (!Validator.isEmail(data.email)) {
    errors.email = "Email field is invalid!";
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = "password field is required!";
  }

  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = "Password must be  at least 6 character";
  }

  if (Validator.isEmpty(data.password2)) {
    errors.password2 = "Confirm Password field is required!";
  }

  if (!Validator.equals(data.password, data.password2)) {
    errors.password2 = "Password  must match";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
