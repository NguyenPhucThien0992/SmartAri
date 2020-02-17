import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import {
  getAlarmSensor1,
  updateAlarmSensor1
} from "./../../actions/alarmActions";
import InputGroup from "../common/InputGroup";
import "./../../style/AlarmRule.css";
class AlarmRule1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      HighTem_sensor1: null,
      HighHumid_sensor1: null,
      HighCar_sensor1: null,
      LowTem_sensor1: null,
      LowHumid_sensor1: null,
      LowCar_sensor1: null
    };
  }
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  UNSAFE_componentWillMount() {
    this.props.getAlarmSensor1();
  }
  onSubmit = e => {
    e.preventDefault();
    var data = {
      HighTem: this.state.HighTem_sensor1,
      HighHumid: this.state.HighHumid_sensor1,
      HighCar: this.state.HighCar_sensor1,
      LowTem: this.state.LowTem_sensor1,
      LowHumid: this.state.LowHumid_sensor1,
      LowCar: this.state.LowCar_sensor1
    };
    this.props.updateAlarmSensor1(data);
  };
  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.get_AlarmSensor1) {
      var sensor1_data = nextProps.get_AlarmSensor1.data;
      var Items = sensor1_data["Items"];
      var Payload = Items[0]["Payload"];

      this.setState({
        HighTem_sensor1: Payload.HighTem,
        HighHumid_sensor1: Payload.HighHumid,
        HighCar_sensor1: Payload.HighCar,
        LowTem_sensor1: Payload.LowTem,
        LowHumid_sensor1: Payload.LowHumid,
        LowCar_sensor1: Payload.LowCar
      });
    }
  }
  render() {
    return (
      <Fragment>
        <div className="card card-success">
          <div className="card-header statusinfo">
            <i class="fas fa-desktop titleTab"></i>
            Alarm rule
          </div>

          <div className="card-body">
            <div className="row">
              <div className="col-12">
                {/* form */}

                <form role="form" onSubmit={this.onSubmit}>
                  <h3>Nhiệt độ</h3>
                  <div class="row">
                    <div class="form-group col-6">
                      <label>Cao nhất</label>
                      <InputGroup
                        placeholder="High Temperature"
                        name="HighTem_sensor1"
                        value={this.state.HighTem_sensor1}
                        onChange={this.onChange}
                        type="number"
                      ></InputGroup>
                    </div>
                    <div class="form-group col-6">
                      <label>Thấp nhất</label>
                      <InputGroup
                        placeholder="Low Temperature"
                        name="LowTem_sensor1"
                        value={this.state.LowTem_sensor1}
                        onChange={this.onChange}
                        type="number"
                      ></InputGroup>
                    </div>
                  </div>
                  {/* End nhiet do */}
                  {/* Start do am */}
                  <h3>Độ ẩm</h3>
                  <div class="row">
                    <div class="form-group col-6">
                      <label>Cao nhất</label>
                      <InputGroup
                        placeholder="High Humidity"
                        name="HighHumid_sensor1"
                        value={this.state.HighHumid_sensor1}
                        onChange={this.onChange}
                        type="number"
                      ></InputGroup>
                    </div>
                    <div class="form-group col-6">
                      <label>Thấp nhất</label>
                      <InputGroup
                        placeholder="Low Humidity"
                        name="LowHumid_sensor1"
                        value={this.state.LowHumid_sensor1}
                        onChange={this.onChange}
                        type="number"
                      ></InputGroup>
                    </div>
                  </div>
                  {/* End Do am */}
                  {/* Start carbonic */}
                  <h3>Carbonic</h3>
                  <div class="row">
                    <div class="form-group col-6">
                      <label>Cao nhất</label>
                      <InputGroup
                        placeholder="High Carbonic"
                        name="HighCar_sensor1"
                        value={this.state.HighCar_sensor1}
                        onChange={this.onChange}
                        type="number"
                      ></InputGroup>
                    </div>
                    <div class="form-group col-6">
                      <label>Thấp nhất</label>
                      <InputGroup
                        placeholder="Low Carbonic"
                        name="LowCar_sensor1"
                        value={this.state.LowCar_sensor1}
                        onChange={this.onChange}
                        type="number"
                      ></InputGroup>
                    </div>
                  </div>
                  {/* End Carbonic */}
                  <input
                    type="submit"
                    value="Submit"
                    className="btn btn-info btn-large mt-4"
                  />
                </form>

                {/* end Form */}
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
const mapState = state => {
  return {
    get_AlarmSensor1: state.alarm.alarm_sensor1
  };
};

export default connect(mapState, {
  updateAlarmSensor1,
  getAlarmSensor1
})(AlarmRule1);
