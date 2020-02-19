import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import {
  sen2Fan1ControlOn,
  sen2Fan1ControlOff,
  sen2LightControlOn,
  sen2LightControlOff,
  sen2MistingControlOn,
  sen2MistingControlOff,
  sen2CoolpartControlOn,
  sen2CoolpartControlOff,
  sen2Fan2ControlOn,
  sen2Fan2ControlOff
} from "./../../actions/controlActions";
const Off = "Tắt";
const On = "Bật";
var data;

class Control2 extends Component {
  UNSAFE_componentWillMount() {
    if (localStorage) {
      // fan 1
      if (localStorage.getItem("sen2fan1")) {
        var tmpsen2fan1 = JSON.parse(localStorage.getItem("sen2fan1"));

        this.setState({
          sen2fan1: tmpsen2fan1.sen2fan1
        });
      } else if (!localStorage.getItem("sen2fan1")) {
        this.setState({
          sen2fan1: Off
        });
      }
      // light
      if (localStorage.getItem("sen2light")) {
        var tmpsen2light = JSON.parse(localStorage.getItem("sen2light"));

        this.setState({
          sen2light: tmpsen2light.sen2light
        });
      } else if (!localStorage.getItem("sen2light")) {
        this.setState({
          sen2light: Off
        });
      }
      // misting
      if (localStorage.getItem("sen2misting")) {
        var tmpsen2misting = JSON.parse(localStorage.getItem("sen2misting"));

        this.setState({
          sen2misting: tmpsen2misting.sen2misting
        });
      } else if (!localStorage.getItem("sen2misting")) {
        this.setState({
          sen2misting: Off
        });
      }
      // coolpart
      if (localStorage.getItem("sen2coolpart")) {
        var tmpsen2coolpart = JSON.parse(localStorage.getItem("sen2coolpart"));

        this.setState({
          sen2coolpart: tmpsen2coolpart.sen2coolpart
        });
      } else if (!localStorage.getItem("sen2coolpart")) {
        this.setState({
          sen2coolpart: Off
        });
      }
      // fan 2
      if (localStorage.getItem("sen2fan2")) {
        var tmpsen2fan2 = JSON.parse(localStorage.getItem("sen2fan2"));

        this.setState({
          sen2fan2: tmpsen2fan2.sen2fan2
        });
      } else if (!localStorage.getItem("sen2fan2")) {
        this.setState({
          sen2fan2: Off
        });
      }
    }
  }
  onClickFan1 = () => {
    // fan1 is not store at local storage,now fan1 OFf and false
    // so we chang to ON and true
    if (!localStorage.getItem("sen2fan1")) {
      // Off status => call On function
      data = {
        sen2fan1: On
      };
      localStorage.setItem("sen2fan1", JSON.stringify(data));
      this.props.sen2Fan1ControlOn();
      this.setState({
        sen2fan1: On
      });
    } else {
      // exist local storage for fan 1
      var localStorageData = JSON.parse(localStorage.getItem("sen2fan1"));
      if (localStorageData && localStorageData.sen2fan1 === On) {
        this.props.sen2Fan1ControlOff();
        data = {
          sen2fan1: Off
        };
        localStorage.setItem("sen2fan1", JSON.stringify(data));
        this.setState({
          sen2fan1: Off
        });
      } else if (localStorageData && localStorageData.sen2fan1 === Off) {
        this.props.sen2Fan1ControlOn();
        data = {
          sen2fan1: On
        };
        localStorage.setItem("sen2fan1", JSON.stringify(data));
        this.setState({
          sen2fan1: On
        });
      }
    }
  };

  onClickLight = () => {
    // fan1 is not store at local storage,now fan1 OFf and false
    // so we chang to ON and true
    if (!localStorage.getItem("sen2light")) {
      // Off status => call On function
      data = {
        sen2light: On
      };
      localStorage.setItem("sen2light", JSON.stringify(data));
      this.props.sen2LightControlOn();
      this.setState({
        sen2light: On
      });
    } else {
      // exist local storage for fan 1
      var localStorageData = JSON.parse(localStorage.getItem("sen2light"));
      if (localStorageData && localStorageData.sen2light === On) {
        this.props.sen2LightControlOff();
        data = {
          sen2light: Off
        };
        localStorage.setItem("sen2light", JSON.stringify(data));
        this.setState({
          sen2light: Off
        });
      } else if (localStorageData && localStorageData.sen2light === Off) {
        this.props.sen2LightControlOn();
        data = {
          sen2light: On
        };
        localStorage.setItem("sen2light", JSON.stringify(data));
        this.setState({
          sen2light: On
        });
      }
    }
  };
  onClickMisting = () => {
    // fan1 is not store at local storage,now fan1 OFf and false
    // so we chang to ON and true
    if (!localStorage.getItem("sen2misting")) {
      // Off status => call On function
      data = {
        sen2misting: On
      };
      localStorage.setItem("sen2misting", JSON.stringify(data));
      this.props.sen2MistingControlOn();
      this.setState({
        sen2misting: On
      });
    } else {
      // exist local storage for fan 1
      var localStorageData = JSON.parse(localStorage.getItem("sen2misting"));
      if (localStorageData && localStorageData.sen2misting === On) {
        this.props.sen2MistingControlOff();
        data = {
          sen2misting: Off
        };
        localStorage.setItem("sen2misting", JSON.stringify(data));
        this.setState({
          sen2misting: Off
        });
      } else if (localStorageData && localStorageData.sen2misting === Off) {
        this.props.sen2MistingControlOn();
        data = {
          sen2misting: On
        };
        localStorage.setItem("sen2misting", JSON.stringify(data));
        this.setState({
          sen2misting: On
        });
      }
    }
  };
  onClickCoolpart = () => {
    // fan1 is not store at local storage,now fan1 OFf and false
    // so we chang to ON and true
    if (!localStorage.getItem("sen2coolpart")) {
      // Off status => call On function
      data = {
        sen2coolpart: On
      };
      localStorage.setItem("sen2coolpart", JSON.stringify(data));
      this.props.sen2CoolpartControlOn();
      this.setState({
        sen2coolpart: On
      });
    } else {
      // exist local storage for fan 1
      var localStorageData = JSON.parse(localStorage.getItem("sen2coolpart"));
      if (localStorageData && localStorageData.sen2coolpart === On) {
        this.props.sen2CoolpartControlOff();
        data = {
          sen2coolpart: Off
        };
        localStorage.setItem("sen2coolpart", JSON.stringify(data));
        this.setState({
          sen2coolpart: Off
        });
      } else if (localStorageData && localStorageData.sen2coolpart === Off) {
        this.props.sen2CoolpartControlOn();
        data = {
          sen2coolpart: On
        };
        localStorage.setItem("sen2coolpart", JSON.stringify(data));
        this.setState({
          sen2coolpart: On
        });
      }
    }
  };
  onClickFan2 = () => {
    // fan1 is not store at local storage,now fan1 OFf and false
    // so we chang to ON and true
    if (!localStorage.getItem("sen2fan2")) {
      // Off status => call On function
      data = {
        sen2fan2: On
      };
      localStorage.setItem("sen2fan2", JSON.stringify(data));
      this.props.sen2Fan2ControlOn();
      this.setState({
        sen2fan2: On
      });
    } else {
      // exist local storage for fan 1
      var localStorageData = JSON.parse(localStorage.getItem("sen2fan2"));
      if (localStorageData && localStorageData.sen2fan2 === On) {
        this.props.sen2Fan2ControlOff();
        data = {
          sen2fan2: Off
        };
        localStorage.setItem("sen2fan2", JSON.stringify(data));
        this.setState({
          sen2fan2: Off
        });
      } else if (localStorageData && localStorageData.sen2fan2 === Off) {
        this.props.sen2Fan2ControlOn();
        data = {
          sen2fan2: On
        };
        localStorage.setItem("sen2fan2", JSON.stringify(data));
        this.setState({
          sen2fan2: On
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
              <h3 class="card-title">Quạt 1</h3>
            </div>

            <div class="card-body">
              <button
                className="btn btn-primary btn-lg"
                onClick={this.onClickFan1}
              >
                {this.state.sen2fan1}
              </button>
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
                {this.state.sen2light}
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
                {this.state.sen2misting}
              </button>
            </div>
          </div>
        </div>
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
                {this.state.sen2coolpart}
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
                {this.state.sen2fan2}
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
      </Fragment>
    );
  }
}
export default connect(null, {
  sen2Fan1ControlOn,
  sen2Fan1ControlOff,
  sen2LightControlOn,
  sen2LightControlOff,
  sen2MistingControlOn,
  sen2MistingControlOff,
  sen2CoolpartControlOn,
  sen2CoolpartControlOff,
  sen2Fan2ControlOn,
  sen2Fan2ControlOff
})(Control2);
