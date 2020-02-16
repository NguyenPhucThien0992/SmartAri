import React, { Component, Fragment } from "react";
import "./../../style/MushRoom1.css";
import { connect } from "react-redux";
import { getDataSensor2 } from "./../../actions/HomeAction";
import AlarmRule2 from "./../control-alarm/AlarmRule2";

class MushRoom2 extends Component {
  UNSAFE_componentWillMount() {
    this.props.getDataSensor2();
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.props.getDataSensor2();
    }, 3000);
  }

  render() {
    const { sensor2 } = this.props;

    if (sensor2 && sensor2 !== null && sensor2 !== undefined) {
      var CarbonicValue = parseFloat(sensor2[0]["value"][0]["value"]);
      var TemperatureValue = parseFloat(sensor2[1]["value"][0]["value"]);
      var HumidityValue = parseFloat(sensor2[2]["value"][0]["value"]);
    }
    return (
      <Fragment>
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0 text-dark">
                  <i class="fas fa-home titleTab"></i>Nhà nấm mối đen
                </h1>
              </div>
            </div>
          </div>
        </div>
        <section className="content">
          <div className="container-fluid">
            <ul className="nav nav-tabs">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  data-toggle="tab"
                  href="#warning"
                >
                  <i className="fas fa-exclamation-circle titleTab"></i> Cảnh
                  báo và thông số
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" data-toggle="tab" href="#control">
                  <i className="fas fa-exchange-alt titleTab"></i>Điều khiển và
                  cấu hình
                </a>
              </li>
            </ul>

            <div className="tab-content">
              <div id="warning" className="container tab-pane active">
                <div className="col-12 statusandwarning">
                  <div className="card card-success">
                    <div className="card-header statusinfo">
                      <i className="fas fa-exclamation-triangle fontawsome"></i>
                      Trạng thái và cảnh báo
                    </div>

                    <div className="card-body">
                      <div className="row">
                        <div className="col-4">
                          <p className="statusinfo">
                            <i className="fas fa-exclamation-circle fontawsome"></i>
                            Cảnh báo nhiệt độ
                          </p>
                        </div>
                        <div className="col-4">
                          <p className="statusinfo">
                            <i className="fas fa-exclamation-circle fontawsome"></i>
                            Cảnh báo độ ẩm
                          </p>
                        </div>
                        <div className="col-4">
                          <p className="statusinfo">
                            <i className="fas fa-exclamation-circle fontawsome"></i>
                            Cảnh báo CO2
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 infomation">
                  <div className="row">
                    <div className="col-md-4 col-sm-6 col-4">
                      <div className="info-box bg-gradient-success">
                        <span className="info-box-icon">
                          <i className="fas fa-thermometer-half"></i>
                        </span>

                        <div className="info-box-content">
                          <span className="info-box-text">Nhiệt độ</span>
                          <span className="info-box-number">
                            {TemperatureValue}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-4 col-sm-6 col-4">
                      <div className="info-box bg-gradient-warning">
                        <span className="info-box-icon">
                          <i className="fas fa-cloud-rain"></i>
                        </span>

                        <div className="info-box-content">
                          <span className="info-box-text">Độ ẩm</span>
                          <span className="info-box-number">
                            {HumidityValue}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-4 col-sm-6 col-4">
                      <div className="info-box bg-gradient-info">
                        <span className="info-box-icon">
                          <i className="fas fa-water"></i>
                        </span>

                        <div className="info-box-content">
                          <span className="info-box-text">CO2</span>
                          <span className="info-box-number">
                            {CarbonicValue}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*  Control and Config */}
              <div id="control" className="container tab-pane fade">
                <div className="col-12 statusandwarning">
                  <div className="card card-success">
                    <div className="card-header statusinfo">
                      <i class="fas fa-desktop titleTab"></i>
                      Điều khiển
                    </div>

                    <div className="card-body">
                      <div className="row">
                        <div className="col-4">sfdsf</div>
                        <div className="col-4">asdfsf</div>
                        <div className="col-4">sdf</div>
                      </div>
                    </div>
                  </div>
                  {/* End Control */}
                  {/* Start Modify Tem, humid, Car */}
                  <AlarmRule2></AlarmRule2>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}
const mapState = state => {
  return {
    sensor2: state.home.sensor2
  };
};

export default connect(mapState, {
  getDataSensor2
})(MushRoom2);
