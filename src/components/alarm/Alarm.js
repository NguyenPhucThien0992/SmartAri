import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { updateAlarm } from "./../../actions/alarmActions";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import { getDataSensor1, getDataSensor2 } from "./../../actions/HomeAction";
import { getAlarmSensor1, getAlarmSensor2 } from "./../../actions/alarmActions";
import "./../../style/Alarm.css";

class Alarm extends Component {
  constructor(props) {
    super(props);
  }
  UNSAFE_componentWillMount() {
    this.props.getDataSensor1();
    this.props.getDataSensor2();
    this.props.getAlarmSensor1();
    this.props.getAlarmSensor2();
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.props.getDataSensor1();
      this.props.getDataSensor2();
      this.props.getAlarmSensor1();
      this.props.getAlarmSensor2();
    }, 4000);
  }
  render() {
    const { sensor1 } = this.props;
    if (sensor1 && sensor1 !== null && sensor1 !== undefined) {
      //temperature
      var temperature_sen1 = sensor1[1];
      var temperatureValue3_sen1 = temperature_sen1["value"];
      var temperatureValue2_sen1 = temperatureValue3_sen1[0];
      var temperatureValue_sen1 = parseFloat(temperatureValue2_sen1["value"]);
      //humid
      var humid_sen1 = sensor1[2];
      var humidValue3_sen1 = humid_sen1["value"];
      var humidValue2_sen1 = humidValue3_sen1[0];
      var humidValue_sen1 = parseFloat(humidValue2_sen1["value"]);
      //carbonic
      var carbonic_sen1 = sensor1[0];
      var carbonicValue3_sen1 = carbonic_sen1["value"];
      var carbonicValue2_sen1 = carbonicValue3_sen1[0];
      var carbonicValue_sen1 = parseFloat(carbonicValue2_sen1["value"]);
      //==================== Alarm =================
      const { alarm_sensor1 } = this.props;
      var renderTem_sen1, renderHumid_sen1, renderCar_sen1;
      if (
        alarm_sensor1 &&
        alarm_sensor1 !== null &&
        alarm_sensor1 !== undefined
      ) {
        var alarmRaw_sen1 = alarm_sensor1["data"];
        var alarmData_sen1 = alarmRaw_sen1["Items"];
        var alarm_sen1 = alarmData_sen1[0];
        var alarmPayload_sen1 = alarm_sen1["Payload"];
        var highTem_sen1 = parseFloat(alarmPayload_sen1["HighTem"]);
        var lowTem_sen1 = parseFloat(alarmPayload_sen1["LowTem"]);
        var highHumid_sen1 = parseFloat(alarmPayload_sen1["HighHumid"]);
        var lowHumid_sen1 = parseFloat(alarmPayload_sen1["LowHumid"]);
        var highCar_sen1 = parseFloat(alarmPayload_sen1["HighCar"]);
        var lowCar_sen1 = parseFloat(alarmPayload_sen1["LowCar"]);
        if (
          temperatureValue_sen1 < lowTem_sen1 ||
          temperatureValue_sen1 > highTem_sen1
        ) {
          renderTem_sen1 = (
            <tr className="overThreshold">
              <th scope="row">1</th>
              <td>Nhà nấm bào ngư</td>
              <td>Cảnh báo nhiệt độ</td>
              <td>
                Quá ngưỡng. <br />
                Nhiệt độ hiện tại là : {temperatureValue_sen1}
                <br />
                Ngưỡng cho phép : {lowTem_sen1} - {highTem_sen1}
              </td>
            </tr>
          );
        } else {
          renderTem_sen1 = (
            <tr className="normalThreshold">
              <th scope="row">1</th>
              <td>Nhà nấm bào ngư</td>
              <td>Cảnh báo nhiệt độ</td>
              <td>Hoạt động bình thường</td>
            </tr>
          );
        }
        if (
          humidValue_sen1 < lowHumid_sen1 ||
          humidValue_sen1 > highHumid_sen1
        ) {
          renderHumid_sen1 = (
            <tr className="overThreshold">
              <th scope="row">2</th>
              <td>Nhà nấm bào ngư</td>
              <td>Cảnh báo độ ẩm</td>
              <td>
                Quá ngưỡng. <br />
                Độ ẩm hiện tại là : {humidValue_sen1}
                <br />
                Ngưỡng cho phép : {lowHumid_sen1} - {highHumid_sen1}
              </td>
            </tr>
          );
        } else {
          renderHumid_sen1 = (
            <tr className="normalThreshold">
              <th scope="row">2</th>
              <td>Nhà nấm bào ngư</td>
              <td>Cảnh báo độ ẩm</td>
              <td>Hoạt động bình thường</td>
            </tr>
          );
        }
        if (
          carbonicValue_sen1 < lowCar_sen1 ||
          carbonicValue_sen1 > highCar_sen1
        ) {
          renderCar_sen1 = (
            <tr className="overThreshold">
              <th scope="row">3</th>
              <td>Nhà nấm bào ngư</td>
              <td>Cảnh báo carbonic</td>
              <td>
                Quá ngưỡng. <br />
                Carbonic hiện tại là : {carbonicValue_sen1}
                <br />
                Ngưỡng cho phép : {lowCar_sen1} - {highCar_sen1}
              </td>
            </tr>
          );
        } else {
          renderCar_sen1 = (
            <tr className="normalThreshold">
              <th scope="row">3</th>
              <td>Nhà nấm bào ngư</td>
              <td>Cảnh báo carbobic</td>
              <td>Hoạt động bình thường</td>
            </tr>
          );
        }
      }
    }

    // <------------------------- SENSOR 2 ------------------------------>
    // ------------------------------------------------------------------
    const { sensor2 } = this.props;
    if (sensor2 && sensor2 !== null && sensor2 !== undefined) {
      //temperature
      var temperature_sen2 = sensor2[1];
      var temperatureValue3_sen2 = temperature_sen2["value"];
      var temperatureValue2_sen2 = temperatureValue3_sen2[0];
      var temperatureValue_sen2 = parseFloat(temperatureValue2_sen2["value"]);
      //humid
      var humid_sen2 = sensor2[2];
      var humidValue3_sen2 = humid_sen2["value"];
      var humidValue2_sen2 = humidValue3_sen2[0];
      var humidValue_sen2 = parseFloat(humidValue2_sen2["value"]);
      //carbonic
      var carbonic_sen2 = sensor2[0];
      var carbonicValue3_sen2 = carbonic_sen2["value"];
      var carbonicValue2_sen2 = carbonicValue3_sen2[0];
      var carbonicValue_sen2 = parseFloat(carbonicValue2_sen2["value"]);
      //==================== Alarm =================
      const { alarm_sensor2 } = this.props;
      var renderTem_sen2, renderHumid_sen2, renderCar_sen2;
      if (
        alarm_sensor2 &&
        alarm_sensor2 !== null &&
        alarm_sensor2 !== undefined
      ) {
        var alarmRaw_sen2 = alarm_sensor2["data"];
        var alarmData_sen2 = alarmRaw_sen2["Items"];
        var alarm_sen2 = alarmData_sen2[0];
        var alarmPayload_sen2 = alarm_sen2["Payload"];
        var highTem_sen2 = parseFloat(alarmPayload_sen2["HighTem"]);
        var lowTem_sen2 = parseFloat(alarmPayload_sen2["LowTem"]);
        var highHumid_sen2 = parseFloat(alarmPayload_sen2["HighHumid"]);
        var lowHumid_sen2 = parseFloat(alarmPayload_sen2["LowHumid"]);
        var highCar_sen2 = parseFloat(alarmPayload_sen2["HighCar"]);
        var lowCar_sen2 = parseFloat(alarmPayload_sen2["LowCar"]);

        if (
          temperatureValue_sen2 < lowTem_sen2 ||
          temperatureValue_sen2 > highTem_sen2
        ) {
          renderTem_sen2 = (
            <tr className="overThreshold">
              <th scope="row">4</th>
              <td>Nhà nấm mối đen</td>
              <td>Cảnh báo nhiệt độ</td>
              <td>
                Quá ngưỡng. <br />
                Nhiệt độ hiện tại là : {temperatureValue_sen2}
                <br />
                Ngưỡng cho phép : {lowTem_sen2} - {highTem_sen2}
              </td>
            </tr>
          );
        } else {
          renderTem_sen2 = (
            <tr className="normalThreshold">
              <th scope="row">4</th>
              <td>Nhà nấm mối đen</td>
              <td>Cảnh báo nhiệt độ</td>
              <td>Hoạt động bình thường</td>
            </tr>
          );
        }
        if (
          humidValue_sen2 < lowHumid_sen2 ||
          humidValue_sen2 > highHumid_sen2
        ) {
          renderHumid_sen2 = (
            <tr className="overThreshold">
              <th scope="row">5</th>
              <td>Nhà nấm mối đen</td>
              <td>Cảnh báo độ ẩm</td>
              <td>
                Quá ngưỡng. <br />
                Độ ẩm hiện tại là : {humidValue_sen2}
                <br />
                Ngưỡng cho phép : {lowHumid_sen2} - {highHumid_sen2}
              </td>
            </tr>
          );
        } else {
          renderHumid_sen2 = (
            <tr className="normalThreshold">
              <th scope="row">5</th>
              <td>Nhà nấm mối đen</td>
              <td>Cảnh báo độ ẩm</td>
              <td>Hoạt động bình thường</td>
            </tr>
          );
        }
        if (
          carbonicValue_sen2 < lowCar_sen2 ||
          carbonicValue_sen2 > highCar_sen2
        ) {
          renderCar_sen2 = (
            <tr className="overThreshold">
              <th scope="row">6</th>
              <td>Nhà nấm mối đen</td>
              <td>Cảnh báo carbonic</td>
              <td>
                Quá ngưỡng. <br />
                Carbonic hiện tại là : {carbonicValue_sen2}
                <br />
                Ngưỡng cho phép : {lowCar_sen2} - {highCar_sen2}
              </td>
            </tr>
          );
        } else {
          renderCar_sen2 = (
            <tr className="normalThreshold">
              <th scope="row">6</th>
              <td>Nhà nấm mối đen</td>
              <td>Cảnh báo carbobic</td>
              <td>Hoạt động bình thường</td>
            </tr>
          );
        }
      }
    }
    return (
      <Fragment>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">
              <i className="fas fa-exclamation-circle"></i> Cảnh báo hệ thống
            </h5>
          </div>
          <table className="table">
            <thead>
              <tr style={{ backgroundColor: "#27a9e3" }}>
                <th scope="col">#</th>
                <th>Tên nhà nấm</th>
                <th scope="col">Loại cảnh báo</th>
                <th scope="col">Nội dung cảnh báo</th>
                <th>Thời gian cảnh báo</th>
                {/* <th scope="col">Handle</th> */}
              </tr>
            </thead>
            <tbody>
              {renderTem_sen1}
              {renderHumid_sen1}
              {renderCar_sen1}
              {renderTem_sen2}
              {renderHumid_sen2}
              {renderCar_sen2}
            </tbody>
          </table>
        </div>
      </Fragment>
    );
  }
}

const mapState = state => {
  return {
    sensor1: state.home.sensor1,
    sensor2: state.home.sensor2,
    alarm_sensor1: state.alarm.alarm_sensor1,
    alarm_sensor2: state.alarm.alarm_sensor2
  };
};
export default connect(mapState, {
  getDataSensor1,
  getDataSensor2,
  getAlarmSensor1,
  getAlarmSensor2
})(withRouter(Alarm));
