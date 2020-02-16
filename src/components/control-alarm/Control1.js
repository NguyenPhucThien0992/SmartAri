import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { fan1ControlOn, fan1ControlOff } from "./../../actions/controlActions";
class Control1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // fan1: "On", //1
      // fan1_status: true,
      fan2: "On", //2
      fan2_status: true,
      machineHumid1: "On", //3
      machineHumid1_status: true,
      machineHumid2: "On", //4
      machineHumid2_status: true,
      shockTemperature1: "On", //5
      shockTemperature1_status: true,
      shockTemperature2: "On", //6
      shockTemperature2_status: true,
      light1: "On", //7
      light1_status: true,
      light2: "On", //8
      light2_status: true,
      roof1: "On", //9
      roof1_status: true,
      roof2: "On", //10
      roof2_status: true,
      fanCO1: "On", //11
      fanC01_status: true,
      fanCO2: "On", //12
      fanCO2_status: true,
      testing: "On",
      testing_status: true
    };
  }
  componentDidMount() {
    if (localStorage) {
      if (localStorage.getItem("fan1")) {
        var tmp1 = JSON.parse(localStorage.getItem("fan1"));

        this.setState({
          fan1: tmp1.fan1,
          fan1_status: tmp1.fan1_status
        });
      }
      if (localStorage.getItem("fan2")) {
        var tmp2 = JSON.parse(localStorage.getItem("fan2"));
        this.setState({
          fan2: tmp2.fan2,
          fan2_status: tmp2.fan2_status
        });
      }
      if (localStorage.getItem("machineHumid1")) {
        var tmp3 = JSON.parse(localStorage.getItem("machineHumid1"));
        this.setState({
          machineHumid1: tmp3.machineHumid1,
          machineHumid1_status: tmp3.machineHumid1_status
        });
      }
      if (localStorage.getItem("machineHumid2")) {
        var tmp4 = JSON.parse(localStorage.getItem("machineHumid2"));
        this.setState({
          machineHumid2: tmp4.machineHumid2,
          machineHumid2_status: tmp4.machineHumid2_status
        });
      }
      if (localStorage.getItem("shockTemperature1")) {
        var tmp5 = JSON.parse(localStorage.getItem("shockTemperature1"));
        this.setState({
          shockTemperature1: tmp5.shockTemperature1,
          shockTemperature1_status: tmp5.shockTemperature1_status
        });
      }
      if (localStorage.getItem("shockTemperature2")) {
        var tmp6 = JSON.parse(localStorage.getItem("shockTemperature2"));
        this.setState({
          shockTemperature2: tmp6.shockTemperature2,
          shockTemperature2_status: tmp6.shockTemperature2_status
        });
      }
      if (localStorage.getItem("light1")) {
        var tmp7 = JSON.parse(localStorage.getItem("light1"));
        this.setState({
          light1: tmp7.light1,
          light1_status: tmp7.light1_status
        });
      }
      if (localStorage.getItem("light2")) {
        var tmp8 = JSON.parse(localStorage.getItem("light2"));
        this.setState({
          light2: tmp8.light2,
          light2_status: tmp8.light2_status
        });
      }
      if (localStorage.getItem("roof1")) {
        var tmp9 = JSON.parse(localStorage.getItem("roof1"));
        this.setState({
          roof1: tmp9.roof1,
          roof1_status: tmp9.roof1_status
        });
      }
      if (localStorage.getItem("roof2")) {
        var tmp10 = JSON.parse(localStorage.getItem("roof2"));
        this.setState({
          roof2: tmp10.roof2,
          roof2_status: tmp10.roof2_status
        });
      }
      if (localStorage.getItem("fanCO1")) {
        var tmp11 = JSON.parse(localStorage.getItem("fanCO1"));
        this.setState({
          fanCO1: tmp11.fanCO1,
          fanCO1_status: tmp11.fanCO1_status
        });
      }
      if (localStorage.getItem("fanCO2")) {
        var tmp12 = JSON.parse(localStorage.getItem("fanCO2"));
        this.setState({
          fanCO2: tmp12.fanCO2,
          fanCO2_status: tmp12.fanCO2_status
        });
      }
    }
  }

  setStatefan1 = () => {
    if (this.state.fan1 === "On") {
      var tmp = "Off";
    } else if (this.state.fan1 === "Off") {
      var tmp = "On";
    }
    this.setState({
      fan1: tmp,
      fan1_status: !this.state.fan1_status
    });

    var data = {
      fan1: this.state.fan1,
      fan1_status: this.state.fan1_status
    };
    localStorage.setItem("fan1", JSON.stringify(data));
  };
  callPublishFan1 = () => {
    var tmp = localStorage.setItem("fan1");
    if (tmp.fan1 === "Off") {
      console.log("off");
    } else {
      console.log("on");
    }
  };
  onClickFan1 = async () => {
    // var fam1Data = localStorage.getItem("fan1");
    if (this.state.fan1 === "On") {
      var tmp = "Off";
    } else if (this.state.fan1 === "Off") {
      var tmp = "On";
    }
    this.setState({
      fan1: tmp,
      fan1_status: !this.state.fan1_status
    });

    var data = {
      fan1: this.state.fan1,
      fan1_status: this.state.fan1_status
    };
    localStorage.setItem("fan1", JSON.stringify(data));
  };
  onClickFan2 = () => {
    if (this.state.fan1 === "On") {
      var tmp = "Off";
      this.props.fan1ControlOff();
    } else if (this.state.fan1 === "Off") {
      var tmp = "On";
      this.props.fan1ControlOn();
    }
    this.setState({
      fan1: tmp,
      fan1_status: !this.state.fan1_status
    });

    var data = {
      fan1: this.state.fan1,
      fan1_status: this.state.fan1_status
    };
    localStorage.setItem("fan1", JSON.stringify(data));
  };
  onClick2 = () => {
    if (this.state.testing === "On") {
      var tmp = "Off";
    } else if (this.state.testing === "Off") {
      var tmp = "On";
    }
    this.setState({
      testing: tmp,
      testing_status: !this.state.testing_status
    });

    var data = {
      testing: this.state.testing,
      testing_status: this.state.testing_status
    };
    localStorage.setItem("testing", JSON.stringify(data));
  };

  onClick = (name, status) => {
    console.log(name, status);

    if (this.state.name === "On") {
      console.log("state name");
      var tmp = "Off";
    } else if (this.state.name === "Off") {
      var tmp = "On";
    }
    this.setState({
      name: tmp,
      status: !this.state.status
    });

    var data = {
      name: this.state.name,
      status: this.state.status
    };
    localStorage.setItem(`${name}`, JSON.stringify(data));
  };
  render() {
    return (
      <Fragment>
        <div class="col-md-3 col-sm-3 col-3">
          <div class="card card-success">
            <div class="card-header">
              <h3 class="card-title">Quạt 1</h3>
            </div>

            <div class="card-body">
              <button
                className="btn btn-primary btn-sm"
                onClick={this.onClickFan1}
              >
                {this.state.fan1}
              </button>
              <button onClick={this.props.fan1ControlOn}>On</button>
              <button onClick={this.props.fan1ControlOff}>Off</button>
            </div>
          </div>
        </div>
        <div class="col-md-3 col-sm-3 col-3">
          <div class="card card-success">
            <div class="card-header">
              <h3 class="card-title">Quạt 2</h3>
            </div>

            <div class="card-body">
              <button
                className="btn btn-primary btn-sm"
                onClick={this.onClickFan2}
              >
                {this.state.fan2}
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
export default connect(null, { fan1ControlOn, fan1ControlOff })(Control1);
