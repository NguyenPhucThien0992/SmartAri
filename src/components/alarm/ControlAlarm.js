import React, { Component } from "react";
import { connect } from "react-redux";
import InputGroup from "../common/InputGroup";
import {
  updateAlarmSensor1,
  getAlarmSensor1
} from "./../../actions/alarmActions";

class ControlAlarm extends Component {
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
  componentDidMount() {
    this.props.getAlarmSensor1();
  }

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
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <label for="HighTem">High Temperature</label>
          <InputGroup
            placeholder="High Temperature"
            name="HighTem_sensor1"
            value={this.state.HighTem_sensor1}
            onChange={this.onChange}
            type="number"
          ></InputGroup>
          <label for="HighTem">High Humidity</label>
          <InputGroup
            placeholder="High Humidity"
            name="HighHumid_sensor1"
            value={this.state.HighHumid_sensor1}
            onChange={this.onChange}
            type="number"
          ></InputGroup>

          <label for="HighTem">High Carbonic</label>
          <InputGroup
            placeholder="High Carbonic"
            name="HighCar_sensor1"
            value={this.state.HighCar_sensor1}
            onChange={this.onChange}
            type="number"
          ></InputGroup>

          <label for="HighTem">Low Temperature</label>
          <InputGroup
            placeholder="Low Temperature"
            name="LowTem_sensor1"
            value={this.state.LowTem_sensor1}
            onChange={this.onChange}
            type="number"
          ></InputGroup>

          <label for="HighTem">Low Humidity</label>
          <InputGroup
            placeholder="Low Humidity"
            name="LowHumid_sensor1"
            value={this.state.LowHumid_sensor1}
            onChange={this.onChange}
            type="number"
          ></InputGroup>

          <label for="HighTem">Low Carbonic</label>
          <InputGroup
            placeholder="Low Carbonic"
            name="LowCar_sensor1"
            value={this.state.LowCar_sensor1}
            onChange={this.onChange}
            type="number"
          ></InputGroup>
          <input
            type="submit"
            value="Submit"
            className="btn btn-info btn-large mt-4"
          />
        </form>
      </div>
    );
  }
}

const mapState = state => {
  return {
    get_AlarmSensor1: state.alarm.alarm_sensor1
  };
};

export default connect(mapState, { updateAlarmSensor1, getAlarmSensor1 })(
  ControlAlarm
);
