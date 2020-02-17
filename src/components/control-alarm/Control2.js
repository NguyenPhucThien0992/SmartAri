import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import {
  sen2Fan1ControlOn,
  sen2Fan1ControlOff,
  sen2fan2ControlOn,
  sen2fan2ControlOff,
  sen2Humid1ControlOn,
  sen2Humid1ControlOff,
  sen2Humid2ControlOn,
  sen2Humid2ControlOff,
  sen2ShockTem1ControlOn,
  sen2ShockTem1ControlOff,
  sen2ShockTem2ControlOn,
  sen2ShockTem2ControlOff,
  sen2Light1ControlOn,
  sen2Light1ControlOff,
  sen2Light2ControlOn,
  sen2Light2ControlOff,
  sen2Roof1ControlOn,
  sen2Roof1ControlOff,
  sen2Roof2ControlOn,
  sen2Roof2ControlOff,
  sen2FanCO1ControlOn,
  sen2FanCO1ControlOff,
  sen2FanCO2ControlOn,
  sen2FanCO2ControlOff
} from "./../../actions/controlActions";
const Off = "Off";
const On = "On";
const onStatus = true;
const offStatus = false;
var data;

class Control2 extends Component {
  UNSAFE_componentWillMount() {
    if (localStorage) {
      // Set state for fan1 incase local storage have not fan1
      if (localStorage.getItem("sen2fan1")) {
        var tmpsen2fan1 = JSON.parse(localStorage.getItem("sen2fan1"));

        this.setState({
          sen2fan1: tmpsen2fan1.sen2fan1,
          sen2fan1_status: tmpsen2fan1.sen2fan1_status
        });
      } else if (!localStorage.getItem("sen2fan1")) {
        this.setState({
          sen2fan1: Off,
          sen2fan1_status: offStatus
        });
      }
      // Set state for fan2 incase local storage have not fan2
      if (localStorage.getItem("sen2fan2")) {
        var tmpsen2fan2 = JSON.parse(localStorage.getItem("sen2fan2"));

        this.setState({
          sen2fan2: tmpsen2fan2.sen2fan2,
          sen2fan2_status: tmpsen2fan2.sen2fan2_status
        });
      } else if (!localStorage.getItem("sen2fan2")) {
        this.setState({
          sen2fan2: Off,
          sen2fan2_status: offStatus
        });
      }
      // Set state for humid1 incase local storage have not humid1
      if (localStorage.getItem("sen2humid1")) {
        var tmpsen2humid1 = JSON.parse(localStorage.getItem("sen2humid1"));

        this.setState({
          sen2humid1: tmpsen2humid1.sen2humid1,
          sen2humid1_status: tmpsen2humid1.sen2humid1_status
        });
      } else if (!localStorage.getItem("sen2humid1")) {
        this.setState({
          sen2humid1: Off,
          sen2humid1_status: offStatus
        });
      }
      // Set state for humid2 incase local storage have not humid2
      if (localStorage.getItem("sen2humid2")) {
        var tmpsen2humid2 = JSON.parse(localStorage.getItem("sen2humid2"));

        this.setState({
          sen2humid2: tmpsen2humid2.sen2humid2,
          sen2humid2_status: tmpsen2humid2.sen2humid2_status
        });
      } else if (!localStorage.getItem("sen2humid2")) {
        this.setState({
          sen2humid2: Off,
          sen2humid2_status: offStatus
        });
      }
      // Set state for shock tem 1 incase local storage have not shock tem 1
      if (localStorage.getItem("sen2shocktem1")) {
        var tmpsen2shocktem1 = JSON.parse(
          localStorage.getItem("sen2shocktem1")
        );

        this.setState({
          sen2shocktem1: tmpsen2shocktem1.sen2shocktem1,
          sen2shocktem1_status: tmpsen2shocktem1.sen2shocktem1_status
        });
      } else if (!localStorage.getItem("sen2shocktem1")) {
        this.setState({
          sen2shocktem1: Off,
          sen2shocktem1_status: offStatus
        });
      }
      // Set state for shock tem 2 incase local storage have not shock tem 2
      if (localStorage.getItem("sen2shocktem2")) {
        var tmpsen2shocktem2 = JSON.parse(
          localStorage.getItem("sen2shocktem2")
        );

        this.setState({
          sen2shocktem2: tmpsen2shocktem2.sen2shocktem2,
          sen2shocktem2_status: tmpsen2shocktem2.sen2shocktem2_status
        });
      } else if (!localStorage.getItem("sen2shocktem2")) {
        this.setState({
          sen2shocktem2: Off,
          sen2shocktem2_status: offStatus
        });
      }

      // Set state for light 1 incase local storage have not light 1
      if (localStorage.getItem("sen2light1")) {
        var tmpsen2light1 = JSON.parse(localStorage.getItem("sen2light1"));

        this.setState({
          sen2light1: tmpsen2light1.sen2light1,
          sen2light1_status: tmpsen2light1.sen2light1_status
        });
      } else if (!localStorage.getItem("sen2light1")) {
        this.setState({
          sen2light1: Off,
          sen2light1_status: offStatus
        });
      }
      // Set state for light 1 incase local storage have not light 1
      if (localStorage.getItem("sen2light2")) {
        var tmpsen2light2 = JSON.parse(localStorage.getItem("sen2light2"));

        this.setState({
          sen2light2: tmpsen2light2.sen2light2,
          sen2light2_status: tmpsen2light2.sen2light2_status
        });
      } else if (!localStorage.getItem("sen2light2")) {
        this.setState({
          sen2light2: Off,
          sen2light2_status: offStatus
        });
      }
      // Set state for roof 1 incase local storage have not roof 1
      if (localStorage.getItem("sen2roof1")) {
        var tmpsen2roof1 = JSON.parse(localStorage.getItem("sen2roof1"));

        this.setState({
          sen2roof1: tmpsen2roof1.sen2roof1,
          sen2roof1_status: tmpsen2roof1.sen2roof1_status
        });
      } else if (!localStorage.getItem("sen2roof1")) {
        this.setState({
          sen2roof1: Off,
          sen2roof1_status: offStatus
        });
      }
      // Set state for roof 2 incase local storage have not roof 2
      if (localStorage.getItem("sen2roof2")) {
        var tmpsen2roof2 = JSON.parse(localStorage.getItem("sen2roof2"));

        this.setState({
          sen2roof2: tmpsen2roof2.sen2roof2,
          sen2roof2_status: tmpsen2roof2.sen2roof2_status
        });
      } else if (!localStorage.getItem("sen2roof2")) {
        this.setState({
          sen2roof2: Off,
          sen2roof2_status: offStatus
        });
      }
      // Set state for fan CO 1 incase local storage have not fan CO 1
      if (localStorage.getItem("sen2fanCo1")) {
        var tmpsen2fanCo1 = JSON.parse(localStorage.getItem("sen2fanCo1"));

        this.setState({
          sen2fanCo1: tmpsen2fanCo1.sen2fanCo1,
          sen2fanCo1_status: tmpsen2fanCo1.sen2fanCo1_status
        });
      } else if (!localStorage.getItem("sen2fanCo1")) {
        this.setState({
          sen2fanCo1: Off,
          sen2fanCo1_status: offStatus
        });
      }
      // Set state for fan CO 2 incase local storage have not fan CO 2
      if (localStorage.getItem("sen2fanCo2")) {
        var tmpsen2fanCo2 = JSON.parse(localStorage.getItem("sen2fanCo2"));

        this.setState({
          sen2fanCo2: tmpsen2fanCo2.sen2fanCo2,
          sen2fanCo2_status: tmpsen2fanCo2.sen2fanCo2_status
        });
      } else if (!localStorage.getItem("sen2fanCo2")) {
        this.setState({
          sen2fanCo2: Off,
          sen2fanCo2_status: offStatus
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
        sen2fan1: On,
        sen2fan1_status: onStatus
      };
      localStorage.setItem("sen2fan1", JSON.stringify(data));
      this.props.sen2Fan1ControlOn();
      this.setState({
        sen2fan1: On,
        sen2fan1_status: onStatus
      });
    } else {
      // exist local storage for fan 1
      var localStorageData = JSON.parse(localStorage.getItem("sen2fan1"));
      if (localStorageData && localStorageData.sen2fan1 === On) {
        this.props.sen2Fan1ControlOff();
        data = {
          sen2fan1: Off,
          sen2fan1_status: offStatus
        };
        localStorage.setItem("sen2fan1", JSON.stringify(data));
        this.setState({
          sen2fan1: Off,
          sen2fan1_status: offStatus
        });
      } else if (localStorageData && localStorageData.sen2fan1 === Off) {
        this.props.sen2Fan1ControlOn();
        data = {
          sen2fan1: On,
          sen2fan1_status: onStatus
        };
        localStorage.setItem("sen2fan1", JSON.stringify(data));
        this.setState({
          sen2fan1: On,
          sen2fan1_status: onStatus
        });
      }
    }
  };
  onClickFan2 = () => {
    // fan2 is not store at local storage,now fan1 OFf and false
    // so we chang to ON and true
    if (!localStorage.getItem("sen2fan2")) {
      // Off status => call On function
      data = {
        sen2fan2: On,
        sen2fan2_status: onStatus
      };
      localStorage.setItem("sen2fan2", JSON.stringify(data));
      this.props.sen2fan2ControlOn();
      this.setState({
        sen2fan2: On,
        sen2fan2_status: onStatus
      });
    } else {
      // exist local storage for fan 1
      var localStorageData = JSON.parse(localStorage.getItem("sen2fan2"));
      if (localStorageData && localStorageData.sen2fan2 === On) {
        this.props.sen2fan2ControlOff();
        data = {
          sen2fan2: Off,
          sen2fan2_status: offStatus
        };
        localStorage.setItem("sen2fan2", JSON.stringify(data));
        this.setState({
          sen2fan2: Off,
          sen2fan2_status: offStatus
        });
      } else if (localStorageData && localStorageData.sen2fan2 === Off) {
        this.props.sen2fan2ControlOn();
        data = {
          sen2fan2: On,
          sen2fan2_status: onStatus
        };
        localStorage.setItem("sen2fan2", JSON.stringify(data));
        this.setState({
          sen2fan2: On,
          sen2fan2_status: onStatus
        });
      }
    }
  };
  onClickHumid1 = () => {
    if (!localStorage.getItem("sen2humid1")) {
      // Off status => call On function
      data = {
        sen2humid1: On,
        sen2humid1_status: onStatus
      };
      localStorage.setItem("sen2humid1", JSON.stringify(data));
      this.props.sen2Humid1ControlOn();
      this.setState({
        sen2humid1: On,
        sen2humid1_status: onStatus
      });
    } else {
      // exist local storage for humid 1
      var localStorageData = JSON.parse(localStorage.getItem("sen2humid1"));
      if (localStorageData && localStorageData.sen2humid1 === On) {
        this.props.sen2Humid1ControlOff();
        data = {
          sen2humid1: Off,
          sen2humid1_status: offStatus
        };
        localStorage.setItem("sen2humid1", JSON.stringify(data));
        this.setState({
          sen2humid1: Off,
          sen2humid1_status: offStatus
        });
      } else if (localStorageData && localStorageData.sen2humid1 === Off) {
        this.props.sen2Humid1ControlOn();
        data = {
          sen2humid1: On,
          sen2humid1_status: onStatus
        };
        localStorage.setItem("sen2humid1", JSON.stringify(data));
        this.setState({
          sen2humid1: On,
          sen2humid1_status: onStatus
        });
      }
    }
  };
  onClickHumid2 = () => {
    if (!localStorage.getItem("sen2humid2")) {
      // Off status => call On function
      data = {
        sen2humid2: On,
        sen2humid2_status: onStatus
      };
      localStorage.setItem("sen2humid2", JSON.stringify(data));
      this.props.sen2Humid2ControlOn();
      this.setState({
        sen2humid2: On,
        sen2humid2_status: onStatus
      });
    } else {
      // exist local storage for sen2humid2
      var localStorageData = JSON.parse(localStorage.getItem("sen2humid2"));
      if (localStorageData && localStorageData.sen2humid2 === On) {
        this.props.sen2Humid2ControlOff();
        data = {
          sen2humid2: Off,
          sen2humid2_status: offStatus
        };
        localStorage.setItem("sen2humid2", JSON.stringify(data));
        this.setState({
          sen2humid2: Off,
          sen2humid2_status: offStatus
        });
      } else if (localStorageData && localStorageData.sen2humid2 === Off) {
        this.props.sen2Humid2ControlOn();
        data = {
          sen2humid2: On,
          sen2humid2_status: onStatus
        };
        localStorage.setItem("sen2humid2", JSON.stringify(data));
        this.setState({
          sen2humid2: On,
          sen2humid2_status: onStatus
        });
      }
    }
  };

  onClickShockTem1 = () => {
    if (!localStorage.getItem("sen2shocktem1")) {
      // Off status => call On function
      data = {
        sen2shocktem1: On,
        sen2shocktem1_status: onStatus
      };
      localStorage.setItem("sen2shocktem1", JSON.stringify(data));
      this.props.sen2ShockTem1ControlOn();
      this.setState({
        sen2shocktem1: On,
        sen2shocktem1_status: onStatus
      });
    } else {
      // exist local storage for sen2shocktem1
      var localStorageData = JSON.parse(localStorage.getItem("sen2shocktem1"));
      if (localStorageData && localStorageData.sen2shocktem1 === On) {
        this.props.sen2ShockTem1ControlOff();
        data = {
          sen2shocktem1: Off,
          sen2shocktem1_status: offStatus
        };
        localStorage.setItem("sen2shocktem1", JSON.stringify(data));
        this.setState({
          sen2shocktem1: Off,
          sen2shocktem1_status: offStatus
        });
      } else if (localStorageData && localStorageData.sen2shocktem1 === Off) {
        this.props.sen2ShockTem1ControlOn();
        data = {
          sen2shocktem1: On,
          sen2shocktem1_status: onStatus
        };
        localStorage.setItem("sen2shocktem1", JSON.stringify(data));
        this.setState({
          sen2shocktem1: On,
          ssen2shocktem1_status: onStatus
        });
      }
    }
  };
  onClickShockTem2 = () => {
    if (!localStorage.getItem("sen2shocktem2")) {
      // Off status => call On function
      data = {
        sen2shocktem2: On,
        sen2shocktem2_status: onStatus
      };
      localStorage.setItem("sen2shocktem2", JSON.stringify(data));
      this.props.sen2ShockTem2ControlOn();
      this.setState({
        sen2shocktem2: On,
        sen2shocktem2_status: onStatus
      });
    } else {
      // exist local storage for shocktem1
      var localStorageData = JSON.parse(localStorage.getItem("sen2shocktem2"));
      if (localStorageData && localStorageData.sen2shocktem2 === On) {
        this.props.sen2ShockTem2ControlOff();
        data = {
          sen2shocktem2: Off,
          sen2shocktem2_status: offStatus
        };
        localStorage.setItem("sen2shocktem2", JSON.stringify(data));
        this.setState({
          sen2shocktem2: Off,
          sen2shocktem2_status: offStatus
        });
      } else if (localStorageData && localStorageData.sen2shocktem2 === Off) {
        this.props.sen2ShockTem2ControlOn();
        data = {
          sen2shocktem2: On,
          sen2shocktem2_status: onStatus
        };
        localStorage.setItem("sen2shocktem2", JSON.stringify(data));
        this.setState({
          sen2shocktem2: On,
          sen2shocktem2_status: onStatus
        });
      }
    }
  };

  onClickLight1 = () => {
    if (!localStorage.getItem("sen2light1")) {
      // Off status => call On function
      data = {
        sen2light1: On,
        sen2light1_status: onStatus
      };
      localStorage.setItem("sen2light1", JSON.stringify(data));
      this.props.sen2Light1ControlOn();
      this.setState({
        sen2light1: On,
        sen2light1_status: onStatus
      });
    } else {
      // exist local storage for shocktem1
      var localStorageData = JSON.parse(localStorage.getItem("sen2light1"));
      if (localStorageData && localStorageData.sen2light1 === On) {
        this.props.sen2Light1ControlOff();
        data = {
          sen2light1: Off,
          sen2light1_status: offStatus
        };
        localStorage.setItem("sen2light1", JSON.stringify(data));
        this.setState({
          sen2light1: Off,
          sen2light1_status: offStatus
        });
      } else if (localStorageData && localStorageData.sen2light1 === Off) {
        this.props.sen2Light1ControlOn();
        data = {
          sen2light1: On,
          sen2light1_status: onStatus
        };
        localStorage.setItem("sen2light1", JSON.stringify(data));
        this.setState({
          sen2light1: On,
          sen2light1_status: onStatus
        });
      }
    }
  };
  onClickLight2 = () => {
    if (!localStorage.getItem("sen2light2")) {
      // Off status => call On function
      data = {
        sen2light2: On,
        sen2light2_status: onStatus
      };
      localStorage.setItem("sen2light2", JSON.stringify(data));
      this.props.sen2Light2ControlOn();
      this.setState({
        sen2light2: On,
        sen2light2_status: onStatus
      });
    } else {
      // exist local storage for shocktem1
      var localStorageData = JSON.parse(localStorage.getItem("sen2light2"));
      if (localStorageData && localStorageData.sen2light2 === On) {
        this.props.sen2Light2ControlOff();
        data = {
          sen2light2: Off,
          sen2light2_status: offStatus
        };
        localStorage.setItem("sen2light2", JSON.stringify(data));
        this.setState({
          sen2light2: Off,
          sen2light2_status: offStatus
        });
      } else if (localStorageData && localStorageData.sen2light2 === Off) {
        this.props.sen2Light2ControlOn();
        data = {
          sen2light2: On,
          sen2light2_status: onStatus
        };
        localStorage.setItem("sen2light2", JSON.stringify(data));
        this.setState({
          sen2light2: On,
          sen2light2_status: onStatus
        });
      }
    }
  };
  onClickRoof1 = () => {
    if (!localStorage.getItem("sen2roof1")) {
      // Off status => call On function
      data = {
        sen2roof1: On,
        sen2roof1_status: onStatus
      };
      localStorage.setItem("sen2roof1", JSON.stringify(data));
      this.props.sen2Roof1ControlOn();
      this.setState({
        sen2roof1: On,
        sen2roof1_status: onStatus
      });
    } else {
      // exist local storage for shocktem1
      var localStorageData = JSON.parse(localStorage.getItem("sen2roof1"));
      if (localStorageData && localStorageData.sen2roof1 === On) {
        this.props.sen2Roof1ControlOff();
        data = {
          sen2roof1: Off,
          sen2roof1_status: offStatus
        };
        localStorage.setItem("sen2roof1", JSON.stringify(data));
        this.setState({
          sen2roof1: Off,
          sen2roof1_status: offStatus
        });
      } else if (localStorageData && localStorageData.sen2roof1 === Off) {
        this.props.sen2Roof1ControlOn();
        data = {
          sen2roof1: On,
          sen2roof1_status: onStatus
        };
        localStorage.setItem("sen2roof1", JSON.stringify(data));
        this.setState({
          sen2roof1: On,
          sen2roof1_status: onStatus
        });
      }
    }
  };

  onClickRoof2 = () => {
    if (!localStorage.getItem("sen2roof2")) {
      // Off status => call On function
      data = {
        sen2roof2: On,
        sen2roof2_status: onStatus
      };
      localStorage.setItem("sen2roof2", JSON.stringify(data));
      this.props.sen2Roof2ControlOn();
      this.setState({
        sen2roof2: On,
        sen2roof2_status: onStatus
      });
    } else {
      // exist local storage for shocktem2
      var localStorageData = JSON.parse(localStorage.getItem("sen2roof2"));
      if (localStorageData && localStorageData.sen2roof2 === On) {
        this.props.sen2Roof2ControlOff();
        data = {
          sen2roof2: Off,
          sen2roof2_status: offStatus
        };
        localStorage.setItem("sen2roof2", JSON.stringify(data));
        this.setState({
          sen2roof2: Off,
          sen2roof2_status: offStatus
        });
      } else if (localStorageData && localStorageData.sen2roof2 === Off) {
        this.props.sen2Roof2ControlOn();
        data = {
          sen2roof2: On,
          sen2roof2_status: onStatus
        };
        localStorage.setItem("sen2roof2", JSON.stringify(data));
        this.setState({
          sen2roof2: On,
          sen2roof2_status: onStatus
        });
      }
    }
  };
  onClickFanCO1 = () => {
    if (!localStorage.getItem("sen2fanCo1")) {
      // Off status => call On function
      data = {
        sen2fanCo1: On,
        sen2fanCo1_status: onStatus
      };
      localStorage.setItem("sen2fanCo1", JSON.stringify(data));
      this.props.sen2FanCO1ControlOn();
      this.setState({
        sen2fanCo1: On,
        sen2fanCo1_status: onStatus
      });
    } else {
      // exist local storage for shocktem2
      var localStorageData = JSON.parse(localStorage.getItem("sen2fanCo1"));
      if (localStorageData && localStorageData.sen2fanCo1 === On) {
        this.props.sen2FanCO1ControlOff();
        data = {
          sen2fanCo1: Off,
          sen2fanCo1_status: offStatus
        };
        localStorage.setItem("sen2fanCo1", JSON.stringify(data));
        this.setState({
          sen2fanCo1: Off,
          sen2fanCo1_status: offStatus
        });
      } else if (localStorageData && localStorageData.sen2fanCo1 === Off) {
        this.props.sen2FanCO1ControlOn();
        data = {
          sen2fanCo1: On,
          sen2fanCo1_status: onStatus
        };
        localStorage.setItem("sen2fanCo1", JSON.stringify(data));
        this.setState({
          sen2fanCo1: On,
          sen2fanCo1_status: onStatus
        });
      }
    }
  };
  onClickFanCO2 = () => {
    if (!localStorage.getItem("sen2fanCo2")) {
      // Off status => call On function
      data = {
        sen2fanCo2: On,
        sen2fanCo2_status: onStatus
      };
      localStorage.setItem("sen2fanCo2", JSON.stringify(data));
      this.props.sen2FanCO2ControlOn();
      this.setState({
        sen2fanCo2: On,
        sen2fanCo2_status: onStatus
      });
    } else {
      // exist local storage for shocktem2
      var localStorageData = JSON.parse(localStorage.getItem("sen2fanCo2"));
      if (localStorageData && localStorageData.sen2fanCo2 === On) {
        this.props.sen2FanCO2ControlOff();
        data = {
          sen2fanCo2: Off,
          sen2fanCo2_status: offStatus
        };
        localStorage.setItem("sen2fanCo2", JSON.stringify(data));
        this.setState({
          sen2fanCo2: Off,
          sen2fanCo2_status: offStatus
        });
      } else if (localStorageData && localStorageData.sen2fanCo2 === Off) {
        this.props.sen2FanCO2ControlOn();
        data = {
          sen2fanCo2: On,
          sen2fanCo2_status: onStatus
        };
        localStorage.setItem("sen2fanCo2", JSON.stringify(data));
        this.setState({
          sen2fanCo2: On,
          sen2fanCo2_status: onStatus
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
                {this.state.sen2fan1}
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
                {this.state.sen2fan2}
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
                {this.state.sen2humid1}
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
                {this.state.sen2humid2}
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
                {this.state.sen2shocktem1}
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
                {this.state.sen2shocktem2}
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
                {this.state.sen2light1}
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
                {this.state.sen2light2}
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
                {this.state.sen2roof1}
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
                {this.state.sen2roof2}
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
                {this.state.sen2fanCo1}
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
                {this.state.sen2fanCo2}
              </button>
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
  sen2fan2ControlOn,
  sen2fan2ControlOff,
  sen2Humid1ControlOn,
  sen2Humid1ControlOff,
  sen2Humid2ControlOn,
  sen2Humid2ControlOff,
  sen2ShockTem1ControlOn,
  sen2ShockTem1ControlOff,
  sen2ShockTem2ControlOn,
  sen2ShockTem2ControlOff,
  sen2Light1ControlOn,
  sen2Light1ControlOff,
  sen2Light2ControlOn,
  sen2Light2ControlOff,
  sen2Roof1ControlOn,
  sen2Roof1ControlOff,
  sen2Roof2ControlOn,
  sen2Roof2ControlOff,
  sen2FanCO1ControlOn,
  sen2FanCO1ControlOff,
  sen2FanCO2ControlOn,
  sen2FanCO2ControlOff
})(Control2);
