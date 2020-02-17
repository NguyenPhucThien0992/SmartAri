import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import {
  sen1Fan1ControlOn,
  sen1Fan1ControlOff,
  sen1fan2ControlOn,
  sen1fan2ControlOff,
  sen1Humid1ControlOn,
  sen1Humid1ControlOff,
  sen1Humid2ControlOn,
  sen1Humid2ControlOff,
  sen1ShockTem1ControlOn,
  sen1ShockTem1ControlOff,
  sen1ShockTem2ControlOn,
  sen1ShockTem2ControlOff,
  sen1Light1ControlOn,
  sen1Light1ControlOff,
  sen1Light2ControlOn,
  sen1Light2ControlOff,
  sen1Roof1ControlOn,
  sen1Roof1ControlOff,
  sen1Roof2ControlOn,
  sen1Roof2ControlOff,
  sen1FanCO1ControlOn,
  sen1FanCO1ControlOff,
  sen1FanCO2ControlOn,
  sen1FanCO2ControlOff
} from "./../../actions/controlActions";
const Off = "Off";
const On = "On";
const onStatus = true;
const offStatus = false;
var data;

class Control1 extends Component {
  UNSAFE_componentWillMount() {
    if (localStorage) {
      // Set state for fan1 incase local storage have not fan1
      if (localStorage.getItem("sen1fan1")) {
        var tmpsen1fan1 = JSON.parse(localStorage.getItem("sen1fan1"));

        this.setState({
          sen1fan1: tmpsen1fan1.sen1fan1,
          sen1fan1_status: tmpsen1fan1.sen1fan1_status
        });
      } else if (!localStorage.getItem("sen1fan1")) {
        this.setState({
          sen1fan1: Off,
          sen1fan1_status: offStatus
        });
      }
      // Set state for fan2 incase local storage have not fan2
      if (localStorage.getItem("sen1fan2")) {
        var tmpsen1fan2 = JSON.parse(localStorage.getItem("sen1fan2"));

        this.setState({
          sen1fan2: tmpsen1fan2.sen1fan2,
          sen1fan2_status: tmpsen1fan2.sen1fan2_status
        });
      } else if (!localStorage.getItem("sen1fan2")) {
        this.setState({
          sen1fan2: Off,
          sen1fan2_status: offStatus
        });
      }
      // Set state for humid1 incase local storage have not humid1
      if (localStorage.getItem("sen1humid1")) {
        var tmpsen1humid1 = JSON.parse(localStorage.getItem("sen1humid1"));

        this.setState({
          sen1humid1: tmpsen1humid1.sen1humid1,
          sen1humid1_status: tmpsen1humid1.sen1humid1_status
        });
      } else if (!localStorage.getItem("sen1humid1")) {
        this.setState({
          sen1humid1: Off,
          sen1humid1_status: offStatus
        });
      }
      // Set state for humid2 incase local storage have not humid2
      if (localStorage.getItem("sen1humid2")) {
        var tmpsen1humid2 = JSON.parse(localStorage.getItem("sen1humid2"));

        this.setState({
          sen1humid2: tmpsen1humid2.sen1humid2,
          sen1humid2_status: tmpsen1humid2.sen1humid2_status
        });
      } else if (!localStorage.getItem("sen1humid2")) {
        this.setState({
          sen1humid2: Off,
          sen1humid2_status: offStatus
        });
      }
      // Set state for shock tem 1 incase local storage have not shock tem 1
      if (localStorage.getItem("sen1shocktem1")) {
        var tmpsen1shocktem1 = JSON.parse(
          localStorage.getItem("sen1shocktem1")
        );

        this.setState({
          sen1shocktem1: tmpsen1shocktem1.sen1shocktem1,
          sen1shocktem1_status: tmpsen1shocktem1.sen1shocktem1_status
        });
      } else if (!localStorage.getItem("sen1shocktem1")) {
        this.setState({
          sen1shocktem1: Off,
          sen1shocktem1_status: offStatus
        });
      }
      // Set state for shock tem 2 incase local storage have not shock tem 2
      if (localStorage.getItem("sen1shocktem2")) {
        var tmpsen1shocktem2 = JSON.parse(
          localStorage.getItem("sen1shocktem2")
        );

        this.setState({
          sen1shocktem2: tmpsen1shocktem2.sen1shocktem2,
          sen1shocktem2_status: tmpsen1shocktem2.sen1shocktem2_status
        });
      } else if (!localStorage.getItem("sen1shocktem2")) {
        this.setState({
          sen1shocktem2: Off,
          sen1shocktem2_status: offStatus
        });
      }

      // Set state for light 1 incase local storage have not light 1
      if (localStorage.getItem("sen1light1")) {
        var tmpsen1light1 = JSON.parse(localStorage.getItem("sen1light1"));

        this.setState({
          sen1light1: tmpsen1light1.sen1light1,
          sen1light1_status: tmpsen1light1.sen1light1_status
        });
      } else if (!localStorage.getItem("sen1light1")) {
        this.setState({
          sen1light1: Off,
          sen1light1_status: offStatus
        });
      }
      // Set state for light 1 incase local storage have not light 1
      if (localStorage.getItem("sen1light2")) {
        var tmpsen1light2 = JSON.parse(localStorage.getItem("sen1light2"));

        this.setState({
          sen1light2: tmpsen1light2.sen1light2,
          sen1light2_status: tmpsen1light2.sen1light2_status
        });
      } else if (!localStorage.getItem("sen1light2")) {
        this.setState({
          sen1light2: Off,
          sen1light2_status: offStatus
        });
      }
      // Set state for roof 1 incase local storage have not roof 1
      if (localStorage.getItem("sen1roof1")) {
        var tmpsen1roof1 = JSON.parse(localStorage.getItem("sen1roof1"));

        this.setState({
          sen1roof1: tmpsen1roof1.sen1roof1,
          sen1roof1_status: tmpsen1roof1.sen1roof1_status
        });
      } else if (!localStorage.getItem("sen1roof1")) {
        this.setState({
          sen1roof1: Off,
          sen1roof1_status: offStatus
        });
      }
      // Set state for roof 2 incase local storage have not roof 2
      if (localStorage.getItem("sen1roof2")) {
        var tmpsen1roof2 = JSON.parse(localStorage.getItem("sen1roof2"));

        this.setState({
          sen1roof2: tmpsen1roof2.sen1roof2,
          sen1roof2_status: tmpsen1roof2.sen1roof2_status
        });
      } else if (!localStorage.getItem("sen1roof2")) {
        this.setState({
          sen1roof2: Off,
          sen1roof2_status: offStatus
        });
      }
      // Set state for fan CO 1 incase local storage have not fan CO 1
      if (localStorage.getItem("sen1fanCo1")) {
        var tmpsen1fanCo1 = JSON.parse(localStorage.getItem("sen1fanCo1"));

        this.setState({
          sen1fanCo1: tmpsen1fanCo1.sen1fanCo1,
          sen1fanCo1_status: tmpsen1fanCo1.sen1fanCo1_status
        });
      } else if (!localStorage.getItem("sen1fanCo1")) {
        this.setState({
          sen1fanCo1: Off,
          sen1fanCo1_status: offStatus
        });
      }
      // Set state for fan CO 2 incase local storage have not fan CO 2
      if (localStorage.getItem("sen1fanCo2")) {
        var tmpsen1fanCo2 = JSON.parse(localStorage.getItem("sen1fanCo2"));

        this.setState({
          sen1fanCo2: tmpsen1fanCo2.sen1fanCo2,
          sen1fanCo2_status: tmpsen1fanCo2.sen1fanCo2_status
        });
      } else if (!localStorage.getItem("sen1fanCo2")) {
        this.setState({
          sen1fanCo2: Off,
          sen1fanCo2_status: offStatus
        });
      }
    }
  }
  onClickFan1 = () => {
    // fan1 is not store at local storage,now fan1 OFf and false
    // so we chang to ON and true
    if (!localStorage.getItem("sen1fan1")) {
      // Off status => call On function
      data = {
        sen1fan1: On,
        sen1fan1_status: onStatus
      };
      localStorage.setItem("sen1fan1", JSON.stringify(data));
      this.props.sen1Fan1ControlOn();
      this.setState({
        sen1fan1: On,
        sen1fan1_status: onStatus
      });
    } else {
      // exist local storage for fan 1
      var localStorageData = JSON.parse(localStorage.getItem("sen1fan1"));
      if (localStorageData && localStorageData.sen1fan1 === On) {
        this.props.sen1Fan1ControlOff();
        data = {
          sen1fan1: Off,
          sen1fan1_status: offStatus
        };
        localStorage.setItem("sen1fan1", JSON.stringify(data));
        this.setState({
          sen1fan1: Off,
          sen1fan1_status: offStatus
        });
      } else if (localStorageData && localStorageData.sen1fan1 === Off) {
        this.props.sen1Fan1ControlOn();
        data = {
          sen1fan1: On,
          sen1fan1_status: onStatus
        };
        localStorage.setItem("sen1fan1", JSON.stringify(data));
        this.setState({
          sen1fan1: On,
          sen1fan1_status: onStatus
        });
      }
    }
  };
  onClickFan2 = () => {
    // fan2 is not store at local storage,now fan1 OFf and false
    // so we chang to ON and true
    if (!localStorage.getItem("sen1fan2")) {
      // Off status => call On function
      data = {
        sen1fan2: On,
        sen1fan2_status: onStatus
      };
      localStorage.setItem("sen1fan2", JSON.stringify(data));
      this.props.sen1fan2ControlOn();
      this.setState({
        sen1fan2: On,
        sen1fan2_status: onStatus
      });
    } else {
      // exist local storage for fan 1
      var localStorageData = JSON.parse(localStorage.getItem("sen1fan2"));
      if (localStorageData && localStorageData.sen1fan2 === On) {
        this.props.sen1fan2ControlOff();
        data = {
          sen1fan2: Off,
          sen1fan2_status: offStatus
        };
        localStorage.setItem("sen1fan2", JSON.stringify(data));
        this.setState({
          sen1fan2: Off,
          sen1fan2_status: offStatus
        });
      } else if (localStorageData && localStorageData.sen1fan2 === Off) {
        this.props.sen1fan2ControlOn();
        data = {
          sen1fan2: On,
          sen1fan2_status: onStatus
        };
        localStorage.setItem("sen1fan2", JSON.stringify(data));
        this.setState({
          sen1fan2: On,
          sen1fan2_status: onStatus
        });
      }
    }
  };
  onClickHumid1 = () => {
    if (!localStorage.getItem("sen1humid1")) {
      // Off status => call On function
      data = {
        sen1humid1: On,
        sen1humid1_status: onStatus
      };
      localStorage.setItem("sen1humid1", JSON.stringify(data));
      this.props.sen1Humid1ControlOn();
      this.setState({
        sen1humid1: On,
        sen1humid1_status: onStatus
      });
    } else {
      // exist local storage for humid 1
      var localStorageData = JSON.parse(localStorage.getItem("sen1humid1"));
      if (localStorageData && localStorageData.sen1humid1 === On) {
        this.props.sen1Humid1ControlOff();
        data = {
          sen1humid1: Off,
          sen1humid1_status: offStatus
        };
        localStorage.setItem("sen1humid1", JSON.stringify(data));
        this.setState({
          sen1humid1: Off,
          sen1humid1_status: offStatus
        });
      } else if (localStorageData && localStorageData.sen1humid1 === Off) {
        this.props.sen1Humid1ControlOn();
        data = {
          sen1humid1: On,
          sen1humid1_status: onStatus
        };
        localStorage.setItem("sen1humid1", JSON.stringify(data));
        this.setState({
          sen1humid1: On,
          sen1humid1_status: onStatus
        });
      }
    }
  };
  onClickHumid2 = () => {
    if (!localStorage.getItem("sen1humid2")) {
      // Off status => call On function
      data = {
        sen1humid2: On,
        sen1humid2_status: onStatus
      };
      localStorage.setItem("sen1humid2", JSON.stringify(data));
      this.props.sen1Humid2ControlOn();
      this.setState({
        sen1humid2: On,
        sen1humid2_status: onStatus
      });
    } else {
      // exist local storage for sen1humid2
      var localStorageData = JSON.parse(localStorage.getItem("sen1humid2"));
      if (localStorageData && localStorageData.sen1humid2 === On) {
        this.props.sen1Humid2ControlOff();
        data = {
          sen1humid2: Off,
          sen1humid2_status: offStatus
        };
        localStorage.setItem("sen1humid2", JSON.stringify(data));
        this.setState({
          sen1humid2: Off,
          sen1humid2_status: offStatus
        });
      } else if (localStorageData && localStorageData.sen1humid2 === Off) {
        this.props.sen1Humid2ControlOn();
        data = {
          sen1humid2: On,
          sen1humid2_status: onStatus
        };
        localStorage.setItem("sen1humid2", JSON.stringify(data));
        this.setState({
          sen1humid2: On,
          sen1humid2_status: onStatus
        });
      }
    }
  };

  onClickShockTem1 = () => {
    if (!localStorage.getItem("sen1shocktem1")) {
      // Off status => call On function
      data = {
        sen1shocktem1: On,
        sen1shocktem1_status: onStatus
      };
      localStorage.setItem("sen1shocktem1", JSON.stringify(data));
      this.props.sen1ShockTem1ControlOn();
      this.setState({
        sen1shocktem1: On,
        sen1shocktem1_status: onStatus
      });
    } else {
      // exist local storage for sen1shocktem1
      var localStorageData = JSON.parse(localStorage.getItem("sen1shocktem1"));
      if (localStorageData && localStorageData.sen1shocktem1 === On) {
        this.props.sen1ShockTem1ControlOff();
        data = {
          sen1shocktem1: Off,
          sen1shocktem1_status: offStatus
        };
        localStorage.setItem("sen1shocktem1", JSON.stringify(data));
        this.setState({
          sen1shocktem1: Off,
          sen1shocktem1_status: offStatus
        });
      } else if (localStorageData && localStorageData.sen1shocktem1 === Off) {
        this.props.sen1ShockTem1ControlOn();
        data = {
          sen1shocktem1: On,
          sen1shocktem1_status: onStatus
        };
        localStorage.setItem("sen1shocktem1", JSON.stringify(data));
        this.setState({
          sen1shocktem1: On,
          ssen1shocktem1_status: onStatus
        });
      }
    }
  };
  onClickShockTem2 = () => {
    if (!localStorage.getItem("sen1shocktem2")) {
      // Off status => call On function
      data = {
        sen1shocktem2: On,
        sen1shocktem2_status: onStatus
      };
      localStorage.setItem("sen1shocktem2", JSON.stringify(data));
      this.props.sen1ShockTem2ControlOn();
      this.setState({
        sen1shocktem2: On,
        sen1shocktem2_status: onStatus
      });
    } else {
      // exist local storage for shocktem1
      var localStorageData = JSON.parse(localStorage.getItem("sen1shocktem2"));
      if (localStorageData && localStorageData.sen1shocktem2 === On) {
        this.props.sen1ShockTem2ControlOff();
        data = {
          sen1shocktem2: Off,
          sen1shocktem2_status: offStatus
        };
        localStorage.setItem("sen1shocktem2", JSON.stringify(data));
        this.setState({
          sen1shocktem2: Off,
          sen1shocktem2_status: offStatus
        });
      } else if (localStorageData && localStorageData.sen1shocktem2 === Off) {
        this.props.sen1ShockTem2ControlOn();
        data = {
          sen1shocktem2: On,
          sen1shocktem2_status: onStatus
        };
        localStorage.setItem("sen1shocktem2", JSON.stringify(data));
        this.setState({
          sen1shocktem2: On,
          sen1shocktem2_status: onStatus
        });
      }
    }
  };

  onClickLight1 = () => {
    if (!localStorage.getItem("sen1light1")) {
      // Off status => call On function
      data = {
        sen1light1: On,
        sen1light1_status: onStatus
      };
      localStorage.setItem("sen1light1", JSON.stringify(data));
      this.props.sen1Light1ControlOn();
      this.setState({
        sen1light1: On,
        sen1light1_status: onStatus
      });
    } else {
      // exist local storage for shocktem1
      var localStorageData = JSON.parse(localStorage.getItem("sen1light1"));
      if (localStorageData && localStorageData.sen1light1 === On) {
        this.props.sen1Light1ControlOff();
        data = {
          sen1light1: Off,
          sen1light1_status: offStatus
        };
        localStorage.setItem("sen1light1", JSON.stringify(data));
        this.setState({
          sen1light1: Off,
          sen1light1_status: offStatus
        });
      } else if (localStorageData && localStorageData.sen1light1 === Off) {
        this.props.sen1Light1ControlOn();
        data = {
          sen1light1: On,
          sen1light1_status: onStatus
        };
        localStorage.setItem("sen1light1", JSON.stringify(data));
        this.setState({
          sen1light1: On,
          sen1light1_status: onStatus
        });
      }
    }
  };
  onClickLight2 = () => {
    if (!localStorage.getItem("sen1light2")) {
      // Off status => call On function
      data = {
        sen1light2: On,
        sen1light2_status: onStatus
      };
      localStorage.setItem("sen1light2", JSON.stringify(data));
      this.props.sen1Light2ControlOn();
      this.setState({
        sen1light2: On,
        sen1light2_status: onStatus
      });
    } else {
      // exist local storage for shocktem1
      var localStorageData = JSON.parse(localStorage.getItem("sen1light2"));
      if (localStorageData && localStorageData.sen1light2 === On) {
        this.props.sen1Light2ControlOff();
        data = {
          sen1light2: Off,
          sen1light2_status: offStatus
        };
        localStorage.setItem("sen1light2", JSON.stringify(data));
        this.setState({
          sen1light2: Off,
          sen1light2_status: offStatus
        });
      } else if (localStorageData && localStorageData.sen1light2 === Off) {
        this.props.sen1Light2ControlOn();
        data = {
          sen1light2: On,
          sen1light2_status: onStatus
        };
        localStorage.setItem("sen1light2", JSON.stringify(data));
        this.setState({
          sen1light2: On,
          sen1light2_status: onStatus
        });
      }
    }
  };
  onClickRoof1 = () => {
    if (!localStorage.getItem("sen1roof1")) {
      // Off status => call On function
      data = {
        sen1roof1: On,
        sen1roof1_status: onStatus
      };
      localStorage.setItem("sen1roof1", JSON.stringify(data));
      this.props.sen1Roof1ControlOn();
      this.setState({
        sen1roof1: On,
        sen1roof1_status: onStatus
      });
    } else {
      // exist local storage for shocktem1
      var localStorageData = JSON.parse(localStorage.getItem("sen1roof1"));
      if (localStorageData && localStorageData.sen1roof1 === On) {
        this.props.sen1Roof1ControlOff();
        data = {
          sen1roof1: Off,
          sen1roof1_status: offStatus
        };
        localStorage.setItem("sen1roof1", JSON.stringify(data));
        this.setState({
          sen1roof1: Off,
          sen1roof1_status: offStatus
        });
      } else if (localStorageData && localStorageData.sen1roof1 === Off) {
        this.props.sen1Roof1ControlOn();
        data = {
          sen1roof1: On,
          sen1roof1_status: onStatus
        };
        localStorage.setItem("sen1roof1", JSON.stringify(data));
        this.setState({
          sen1roof1: On,
          sen1roof1_status: onStatus
        });
      }
    }
  };

  onClickRoof2 = () => {
    if (!localStorage.getItem("sen1roof2")) {
      // Off status => call On function
      data = {
        sen1roof2: On,
        sen1roof2_status: onStatus
      };
      localStorage.setItem("sen1roof2", JSON.stringify(data));
      this.props.sen1Roof2ControlOn();
      this.setState({
        sen1roof2: On,
        sen1roof2_status: onStatus
      });
    } else {
      // exist local storage for shocktem2
      var localStorageData = JSON.parse(localStorage.getItem("sen1roof2"));
      if (localStorageData && localStorageData.sen1roof2 === On) {
        this.props.sen1Roof2ControlOff();
        data = {
          sen1roof2: Off,
          sen1roof2_status: offStatus
        };
        localStorage.setItem("sen1roof2", JSON.stringify(data));
        this.setState({
          sen1roof2: Off,
          sen1roof2_status: offStatus
        });
      } else if (localStorageData && localStorageData.sen1roof2 === Off) {
        this.props.sen1Roof2ControlOn();
        data = {
          sen1roof2: On,
          sen1roof2_status: onStatus
        };
        localStorage.setItem("sen1roof2", JSON.stringify(data));
        this.setState({
          sen1roof2: On,
          sen1roof2_status: onStatus
        });
      }
    }
  };
  onClickFanCO1 = () => {
    if (!localStorage.getItem("sen1fanCo1")) {
      // Off status => call On function
      data = {
        sen1fanCo1: On,
        sen1fanCo1_status: onStatus
      };
      localStorage.setItem("sen1fanCo1", JSON.stringify(data));
      this.props.sen1FanCO1ControlOn();
      this.setState({
        sen1fanCo1: On,
        sen1fanCo1_status: onStatus
      });
    } else {
      // exist local storage for shocktem2
      var localStorageData = JSON.parse(localStorage.getItem("sen1fanCo1"));
      if (localStorageData && localStorageData.sen1fanCo1 === On) {
        this.props.sen1FanCO1ControlOff();
        data = {
          sen1fanCo1: Off,
          sen1fanCo1_status: offStatus
        };
        localStorage.setItem("sen1fanCo1", JSON.stringify(data));
        this.setState({
          sen1fanCo1: Off,
          sen1fanCo1_status: offStatus
        });
      } else if (localStorageData && localStorageData.sen1fanCo1 === Off) {
        this.props.sen1FanCO1ControlOn();
        data = {
          sen1fanCo1: On,
          sen1fanCo1_status: onStatus
        };
        localStorage.setItem("sen1fanCo1", JSON.stringify(data));
        this.setState({
          sen1fanCo1: On,
          sen1fanCo1_status: onStatus
        });
      }
    }
  };
  onClickFanCO2 = () => {
    if (!localStorage.getItem("sen1fanCo2")) {
      // Off status => call On function
      data = {
        sen1fanCo2: On,
        sen1fanCo2_status: onStatus
      };
      localStorage.setItem("sen1fanCo2", JSON.stringify(data));
      this.props.sen1FanCO2ControlOn();
      this.setState({
        sen1fanCo2: On,
        sen1fanCo2_status: onStatus
      });
    } else {
      // exist local storage for shocktem2
      var localStorageData = JSON.parse(localStorage.getItem("sen1fanCo2"));
      if (localStorageData && localStorageData.sen1fanCo2 === On) {
        this.props.sen1FanCO2ControlOff();
        data = {
          sen1fanCo2: Off,
          sen1fanCo2_status: offStatus
        };
        localStorage.setItem("sen1fanCo2", JSON.stringify(data));
        this.setState({
          sen1fanCo2: Off,
          sen1fanCo2_status: offStatus
        });
      } else if (localStorageData && localStorageData.sen1fanCo2 === Off) {
        this.props.sen1FanCO2ControlOn();
        data = {
          sen1fanCo2: On,
          sen1fanCo2_status: onStatus
        };
        localStorage.setItem("sen1fanCo2", JSON.stringify(data));
        this.setState({
          sen1fanCo2: On,
          sen1fanCo2_status: onStatus
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
                className="btn btn-primary btn-sm"
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
                className="btn btn-primary btn-sm"
                onClick={this.onClickFan2}
              >
                {this.state.sen1fan2}
              </button>
            </div>
          </div>
        </div>
        <div class="col-md-4 col-6">
          <div class="card card-success">
            <div class="card-header">
              <h3 class="card-title">Máy tạo độ ẩm 1</h3>
            </div>

            <div class="card-body">
              <button
                className="btn btn-primary btn-sm"
                onClick={this.onClickHumid1}
              >
                {this.state.sen1humid1}
              </button>
            </div>
          </div>
        </div>
        <div class="col-md-4 col-6">
          <div class="card card-success">
            <div class="card-header">
              <h3 class="card-title">Máy tạo độ ẩm 2</h3>
            </div>

            <div class="card-body">
              <button
                className="btn btn-primary btn-sm"
                onClick={this.onClickHumid2}
              >
                {this.state.sen1humid2}
              </button>
            </div>
          </div>
        </div>
        <div class="col-md-4 col-6">
          <div class="card card-success">
            <div class="card-header">
              <h3 class="card-title">Shock Nhiệt 1</h3>
            </div>

            <div class="card-body">
              <button
                className="btn btn-primary btn-sm"
                onClick={this.onClickShockTem1}
              >
                {this.state.sen1shocktem1}
              </button>
            </div>
          </div>
        </div>
        <div class="col-md-4 col-6">
          <div class="card card-success">
            <div class="card-header">
              <h3 class="card-title">Shock Nhiệt 2</h3>
            </div>

            <div class="card-body">
              <button
                className="btn btn-primary btn-sm"
                onClick={this.onClickShockTem2}
              >
                {this.state.sen1shocktem2}
              </button>
            </div>
          </div>
        </div>
        <div class="col-md-4 col-6">
          <div class="card card-success">
            <div class="card-header">
              <h3 class="card-title">Đèn số 1</h3>
            </div>

            <div class="card-body">
              <button
                className="btn btn-primary btn-sm"
                onClick={this.onClickLight1}
              >
                {this.state.sen1light1}
              </button>
            </div>
          </div>
        </div>
        <div class="col-md-4 col-6">
          <div class="card card-success">
            <div class="card-header">
              <h3 class="card-title">Đèn số 2</h3>
            </div>

            <div class="card-body">
              <button
                className="btn btn-primary btn-sm"
                onClick={this.onClickLight2}
              >
                {this.state.sen1light2}
              </button>
            </div>
          </div>
        </div>
        <div class="col-md-4 col-6">
          <div class="card card-success">
            <div class="card-header">
              <h3 class="card-title">Tưới mái 1</h3>
            </div>

            <div class="card-body">
              <button
                className="btn btn-primary btn-sm"
                onClick={this.onClickRoof1}
              >
                {this.state.sen1roof1}
              </button>
            </div>
          </div>
        </div>
        <div class="col-md-4 col-6">
          <div class="card card-success">
            <div class="card-header">
              <h3 class="card-title">Tưới mái 2</h3>
            </div>

            <div class="card-body">
              <button
                className="btn btn-primary btn-sm"
                onClick={this.onClickRoof2}
              >
                {this.state.sen1roof2}
              </button>
            </div>
          </div>
        </div>
        <div class="col-md-4 col-6">
          <div class="card card-success">
            <div class="card-header">
              <h3 class="card-title">Quạt CO2 1</h3>
            </div>

            <div class="card-body">
              <button
                className="btn btn-primary btn-sm"
                onClick={this.onClickFanCO1}
              >
                {this.state.sen1fanCo1}
              </button>
            </div>
          </div>
        </div>
        <div class="col-md-4 col-6">
          <div class="card card-success">
            <div class="card-header">
              <h3 class="card-title">Quạt CO2 2</h3>
            </div>

            <div class="card-body">
              <button
                className="btn btn-primary btn-sm"
                onClick={this.onClickFanCO2}
              >
                {this.state.sen1fanCo2}
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
  sen1Fan1ControlOn,
  sen1Fan1ControlOff,
  sen1fan2ControlOn,
  sen1fan2ControlOff,
  sen1Humid1ControlOn,
  sen1Humid1ControlOff,
  sen1Humid2ControlOn,
  sen1Humid2ControlOff,
  sen1ShockTem1ControlOn,
  sen1ShockTem1ControlOff,
  sen1ShockTem2ControlOn,
  sen1ShockTem2ControlOff,
  sen1Light1ControlOn,
  sen1Light1ControlOff,
  sen1Light2ControlOn,
  sen1Light2ControlOff,
  sen1Roof1ControlOn,
  sen1Roof1ControlOff,
  sen1Roof2ControlOn,
  sen1Roof2ControlOff,
  sen1FanCO1ControlOn,
  sen1FanCO1ControlOff,
  sen1FanCO2ControlOn,
  sen1FanCO2ControlOff
})(Control1);
