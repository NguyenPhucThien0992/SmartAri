import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import {
  getAlarmSensor2,
  updateAlarmSensor2
} from "./../../actions/alarmActions";
import InputGroup from "../common/InputGroup";

class AlarmRule2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      HighTem_sensor2: null,
      HighHumid_sensor2: null,
      HighCar_sensor2: null,
      LowTem_sensor2: null,
      LowHumid_sensor2: null,
      LowCar_sensor2: null
    };
  }
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  UNSAFE_componentWillMount() {
    this.props.getAlarmSensor2();
  }
  onSubmit = e => {
    e.preventDefault();
    var data = {
      HighTem: this.state.HighTem_sensor2,
      HighHumid: this.state.HighHumid_sensor2,
      HighCar: this.state.HighCar_sensor2,
      LowTem: this.state.LowTem_sensor2,
      LowHumid: this.state.LowHumid_sensor2,
      LowCar: this.state.LowCar_sensor2
    };
    this.props.updateAlarmSensor2(data);
  };
  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.get_AlarmSensor2) {
      var sensor2_data = nextProps.get_AlarmSensor2.data;
      var Items = sensor2_data["Items"];
      var Payload = Items[0]["Payload"];

      this.setState({
        HighTem_sensor2: Payload.HighTem,
        HighHumid_sensor2: Payload.HighHumid,
        HighCar_sensor2: Payload.HighCar,
        LowTem_sensor2: Payload.LowTem,
        LowHumid_sensor2: Payload.LowHumid,
        LowCar_sensor2: Payload.LowCar
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
                      <label>High safe threshold</label>
                      <InputGroup
                        placeholder="High Temperature"
                        name="HighTem_sensor2"
                        value={this.state.HighTem_sensor2}
                        onChange={this.onChange}
                        type="number"
                      ></InputGroup>
                    </div>
                    <div class="form-group col-6">
                      <label>Low safe threshold</label>
                      <InputGroup
                        placeholder="Low Temperature"
                        name="LowTem_sensor2"
                        value={this.state.LowTem_sensor2}
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
                      <label>High safe threshold</label>
                      <InputGroup
                        placeholder="High Humidity"
                        name="HighHumid_sensor2"
                        value={this.state.HighHumid_sensor2}
                        onChange={this.onChange}
                        type="number"
                      ></InputGroup>
                    </div>
                    <div class="form-group col-6">
                      <label>Low safe threshold</label>
                      <InputGroup
                        placeholder="Low Humidity"
                        name="LowHumid_sensor2"
                        value={this.state.LowHumid_sensor2}
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
                      <label>High safe threshold</label>
                      <InputGroup
                        placeholder="High Carbonic"
                        name="HighCar_sensor2"
                        value={this.state.HighCar_sensor2}
                        onChange={this.onChange}
                        type="number"
                      ></InputGroup>
                    </div>
                    <div class="form-group col-6">
                      <label>Low safe threshold</label>
                      <InputGroup
                        placeholder="Low Carbonic"
                        name="LowCar_sensor2"
                        value={this.state.LowCar_sensor2}
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
    get_AlarmSensor2: state.alarm.alarm_sensor2
  };
};

export default connect(mapState, {
  updateAlarmSensor2,
  getAlarmSensor2
})(AlarmRule2);
