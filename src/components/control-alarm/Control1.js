import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import {
  sen1CoolpartControlOn,
  sen1CoolpartControlOff,
  sen1MistingControlOn,
  sen1MistingControlOff,
  sen1LightControlOn,
  sen1LightControlOff,
  sen1Fan1ControlOn,
  sen1Fan1ControlOff,
  sen1Fan2ControlOn,
  sen1Fan2ControlOff
} from "./../../actions/controlActions";
const Off = "Tắt";
const On = "Bật";
var data;

class Control1 extends Component {
  UNSAFE_componentWillMount() {
    if (localStorage) {
      // cool part
      if (localStorage.getItem("sen1coolpart")) {
        var tmpsen1coolpart = JSON.parse(localStorage.getItem("sen1coolpart"));

        this.setState({
          sen1coolpart: tmpsen1coolpart.sen1coolpart
        });
      } else if (!localStorage.getItem("sen1coolpart")) {
        this.setState({
          sen1coolpart: Off
        });
      }
      // misting
      if (localStorage.getItem("sen1misting")) {
        var tmpsen1misting = JSON.parse(localStorage.getItem("sen1misting"));

        this.setState({
          sen1misting: tmpsen1misting.sen1misting
        });
      } else if (!localStorage.getItem("sen1misting")) {
        this.setState({
          sen1misting: Off
        });
      }
      // Light
      if (localStorage.getItem("sen1light")) {
        var tmpsen1light = JSON.parse(localStorage.getItem("sen1light"));

        this.setState({
          sen1light: tmpsen1light.sen1light
        });
      } else if (!localStorage.getItem("sen1light")) {
        this.setState({
          sen1light: Off
        });
      }
      // Fan 1
      if (localStorage.getItem("sen1fan1")) {
        var tmpsen1fan1 = JSON.parse(localStorage.getItem("sen1fan1"));

        this.setState({
          sen1fan1: tmpsen1fan1.sen1fan1
        });
      } else if (!localStorage.getItem("sen1fan1")) {
        this.setState({
          sen1fan1: Off
        });
      }
      // Fan 2
      if (localStorage.getItem("sen1fan2")) {
        var tmpsen1fan2 = JSON.parse(localStorage.getItem("sen1fan2"));

        this.setState({
          sen1fan2: tmpsen1fan2.sen1fan2
        });
      } else if (!localStorage.getItem("sen1fan2")) {
        this.setState({
          sen1fan2: Off
        });
      }
    }
  }

  onClickCoolpart = () => {
    // fan1 is not store at local storage,now fan1 OFf and false
    // so we chang to ON and true
    if (!localStorage.getItem("sen1coolpart")) {
      // Off status => call On function
      data = {
        sen1coolpart: On
      };
      localStorage.setItem("sen1coolpart", JSON.stringify(data));
      this.props.sen1CoolpartControlOn();
      this.setState({
        sen1coolpart: On
      });
    } else {
      // exist local storage for fan 1
      var localStorageData = JSON.parse(localStorage.getItem("sen1coolpart"));
      if (localStorageData && localStorageData.sen1coolpart === On) {
        this.props.sen1CoolpartControlOff();
        data = {
          sen1coolpart: Off
        };
        localStorage.setItem("sen1coolpart", JSON.stringify(data));
        this.setState({
          sen1coolpart: Off
        });
      } else if (localStorageData && localStorageData.sen1coolpart === Off) {
        this.props.sen1CoolpartControlOn();
        data = {
          sen1coolpart: On
        };
        localStorage.setItem("sen1coolpart", JSON.stringify(data));
        this.setState({
          sen1coolpart: On
        });
      }
    }
  };
  // Misting
  onClickMisting = () => {
    // fan1 is not store at local storage,now fan1 OFf and false
    // so we chang to ON and true
    if (!localStorage.getItem("sen1misting")) {
      // Off status => call On function
      data = {
        sen1misting: On
      };
      localStorage.setItem("sen1misting", JSON.stringify(data));
      this.props.sen1MistingControlOn();
      this.setState({
        sen1misting: On
      });
    } else {
      // exist local storage for fan 1
      var localStorageData = JSON.parse(localStorage.getItem("sen1misting"));
      if (localStorageData && localStorageData.sen1misting === On) {
        this.props.sen1MistingControlOff();
        data = {
          sen1misting: Off
        };
        localStorage.setItem("sen1misting", JSON.stringify(data));
        this.setState({
          sen1misting: Off
        });
      } else if (localStorageData && localStorageData.sen1misting === Off) {
        this.props.sen1MistingControlOn();
        data = {
          sen1misting: On
        };
        localStorage.setItem("sen1misting", JSON.stringify(data));
        this.setState({
          sen1misting: On
        });
      }
    }
  };

  // Light
  onClickLight = () => {
    // so we chang to ON and true
    if (!localStorage.getItem("sen1light")) {
      // Off status => call On function
      data = {
        sen1light: On
      };
      localStorage.setItem("sen1light", JSON.stringify(data));
      this.props.sen1LightControlOn();
      this.setState({
        sen1light: On
      });
    } else {
      // exist local storage for fan 1
      var localStorageData = JSON.parse(localStorage.getItem("sen1light"));
      if (localStorageData && localStorageData.sen1light === On) {
        this.props.sen1LightControlOff();
        data = {
          sen1light: Off
        };
        localStorage.setItem("sen1light", JSON.stringify(data));
        this.setState({
          sen1light: Off
        });
      } else if (localStorageData && localStorageData.sen1light === Off) {
        this.props.sen1LightControlOn();
        data = {
          sen1light: On
        };
        localStorage.setItem("sen1light", JSON.stringify(data));
        this.setState({
          sen1light: On
        });
      }
    }
  };

  // Fan 1
  onClickFan1 = () => {
    // so we chang to ON and true
    if (!localStorage.getItem("sen1fan1")) {
      // Off status => call On function
      data = {
        sen1fan1: On
      };
      localStorage.setItem("sen1fan1", JSON.stringify(data));
      this.props.sen1Fan1ControlOn();
      this.setState({
        sen1fan1: On
      });
    } else {
      // exist local storage for fan 1
      var localStorageData = JSON.parse(localStorage.getItem("sen1fan1"));
      if (localStorageData && localStorageData.sen1fan1 === On) {
        this.props.sen1Fan1ControlOff();
        data = {
          sen1fan1: Off
        };
        localStorage.setItem("sen1fan1", JSON.stringify(data));
        this.setState({
          sen1fan1: Off
        });
      } else if (localStorageData && localStorageData.sen1fan1 === Off) {
        this.props.sen1Fan1ControlOn();
        data = {
          sen1fan1: On
        };
        localStorage.setItem("sen1fan1", JSON.stringify(data));
        this.setState({
          sen1fan1: On
        });
      }
    }
  };
  // Fan 2
  onClickFan2 = () => {
    // so we chang to ON and true
    if (!localStorage.getItem("sen1fan2")) {
      // Off status => call On function
      data = {
        sen1fan2: On
      };
      localStorage.setItem("sen1fan2", JSON.stringify(data));
      this.props.sen1Fan2ControlOn();
      this.setState({
        sen1fan2: On
      });
    } else {
      // exist local storage for fan 1
      var localStorageData = JSON.parse(localStorage.getItem("sen1fan2"));
      if (localStorageData && localStorageData.sen1fan2 === On) {
        this.props.sen1Fan2ControlOff();
        data = {
          sen1fan2: Off
        };
        localStorage.setItem("sen1fan2", JSON.stringify(data));
        this.setState({
          sen1fan2: Off
        });
      } else if (localStorageData && localStorageData.sen1fan2 === Off) {
        this.props.sen1Fan2ControlOn();
        data = {
          sen1fan2: On
        };
        localStorage.setItem("sen1fan2", JSON.stringify(data));
        this.setState({
          sen1fan2: On
        });
      }
    }
  };
  render() {
    return (
      <Fragment>
        <div class="col-md-4 col-6">
          <div class="card card-success">
            <div class="card-header">
              <h3 class="card-title">Cool part</h3>
            </div>

            <div class="card-body">
              <button
                className="btn btn-primary btn-lg"
                onClick={this.onClickCoolpart}
              >
                {this.state.sen1coolpart}
              </button>
            </div>
          </div>
        </div>
        <div class="col-md-4 col-6">
          <div class="card card-success">
            <div class="card-header">
              <h3 class="card-title">Phun sương</h3>
            </div>

            <div class="card-body">
              <button
                className="btn btn-primary btn-lg"
                onClick={this.onClickMisting}
              >
                {this.state.sen1misting}
              </button>
            </div>
          </div>
        </div>
        <div class="col-md-4 col-6">
          <div class="card card-success">
            <div class="card-header">
              <h3 class="card-title">T.B.D</h3>
            </div>

            <div class="card-body">
              <button className="btn btn-primary btn-lg">T.B.D</button>
            </div>
          </div>
        </div>
        <div class="col-md-4 col-6">
          <div class="card card-success">
            <div class="card-header">
              <h3 class="card-title">Đèn</h3>
            </div>

            <div class="card-body">
              <button
                className="btn btn-primary btn-lg"
                onClick={this.onClickLight}
              >
                {this.state.sen1light}
              </button>
            </div>
          </div>
        </div>
        <div class="col-md-4 col-6">
          <div class="card card-success">
            <div class="card-header">
              <h3 class="card-title">Quạt 1</h3>
            </div>

            <div class="card-body">
              <button
                className="btn btn-primary btn-lg"
                onClick={this.onClickFan1}
              >
                {this.state.sen1fan1}
              </button>
            </div>
          </div>
        </div>
        <div class="col-md-4 col-6">
          <div class="card card-success">
            <div class="card-header">
              <h3 class="card-title">Quạt 2</h3>
            </div>

            <div class="card-body">
              <button
                className="btn btn-primary btn-lg"
                onClick={this.onClickFan2}
              >
                {this.state.sen1fan2}
              </button>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

// const mapState = state => {
//   return {};
// };
export default connect(null, {
  sen1CoolpartControlOn,
  sen1CoolpartControlOff,
  sen1MistingControlOn,
  sen1MistingControlOff,
  sen1LightControlOn,
  sen1LightControlOff,
  sen1Fan1ControlOn,
  sen1Fan1ControlOff,
  sen1Fan2ControlOn,
  sen1Fan2ControlOff
})(Control1);
