import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getDataSensor1, getDataSensor2 } from "./../../actions/HomeAction";
import "./../../style/Home.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      conditionType: "temperature",
      highThreshold: "",
      lowThreshold: "",
      checkedValue: false
    };
  }

  UNSAFE_componentWillMount() {
    this.props.getDataSensor1();
    this.props.getDataSensor2();
  }
  componentDidMount() {
    this.interval = setInterval(() => {
      this.props.getDataSensor1();
      this.props.getDataSensor2();
    }, 3000);
  }
  render() {
    const { sensor1, sensor2 } = this.props;
    if (sensor1 && sensor1 !== null && sensor1 !== undefined) {
      // Carbonic
      var carDataSen1 = Object.values(sensor1)[0];
      var carValueSen1 = carDataSen1["value"];
      var carElementSen1 = Object.values(carValueSen1)[0];
      var carbonicSen1 = carElementSen1["value"];

      // Temperature
      var temDataSen1 = Object.values(sensor1)[1];
      var temValueSen1 = temDataSen1["value"];
      var temElementSen1 = Object.values(temValueSen1)[0];
      var temperatureSen1 = temElementSen1["value"];

      // humidity
      var humidDataSen1 = Object.values(sensor1)[1];
      var humidValueSen1 = humidDataSen1["value"];
      var humidElementSen1 = Object.values(humidValueSen1)[0];
      var humiditySen1 = humidElementSen1["value"];
    }

    if (sensor2 && sensor2 !== null && sensor2 !== undefined) {
      // Carbonic
      var carDataSen2 = Object.values(sensor2)[0];
      var carValueSen2 = carDataSen2["value"];
      var carElementSen2 = Object.values(carValueSen2)[0];
      var carbonicSen2 = carElementSen2["value"];

      // Temperature
      var temDataSen2 = Object.values(sensor2)[1];
      var temValueSen2 = temDataSen2["value"];
      var temElementSen2 = Object.values(temValueSen2)[0];
      var temperatureSen2 = temElementSen2["value"];

      // humidity
      var humidDataSen2 = Object.values(sensor2)[2];
      var humidValueSen2 = humidDataSen2["value"];
      var humidElementSen2 = Object.values(humidValueSen2)[0];
      var humiditySen2 = humidElementSen2["value"];
    }
    console.log("Sensor1", sensor1);
    console.log("Sensor2", sensor2);
    return (
      <Fragment>
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0 text-dark">Nhà nấm Thanh Tâm</h1>
              </div>
            </div>
          </div>
        </div>

        <section className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="small-box bg-info">
                  <div className="inner">
                    <h3>Nhà nấm bào ngư</h3>
                    <div className="row">
                      <div className="col-6">
                        <div className="row">
                          <div className="col-6 subtitle">
                            <span>Nhiệt độ</span>
                          </div>
                          <div className="col-6 subcontent">
                            <i className="fas fa-thermometer-half"></i>
                            <span className="titleValue">
                              {temperatureSen1}
                            </span>
                            <span>
                              <sup>o</sup>C
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="row">
                          <div className="col-6 subtitle">
                            <span>Độ ẩm</span>
                          </div>
                          <div className="col-6 subcontent">
                            <i className="fas fa-cloud-rain"></i>
                            <span className="titleValue">
                              {temperatureSen1}
                            </span>
                            <span>%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-6">
                        <div className="row">
                          <div className="col-6 subtitle">
                            <span>CO2</span>
                          </div>
                          <div className="col-6 subcontent">
                            <i className="fas fa-water"></i>
                            <span className="titleValue">{carbonicSen1}</span>
                            <span>ppm</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <Link to="/nha-nam-bao-ngu" className="small-box-footer">
                    Xem chi tiết...
                    <i className="fas fa-arrow-circle-right"></i>
                  </Link>
                </div>
              </div>
              {/* End nhà bấm bào ngư 1  */}
              <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="small-box bg-warning">
                  <div className="inner">
                    <h3>Nhà nấm mối đen</h3>
                    <div className="row">
                      <div className="col-6">
                        <div className="row">
                          <div className="col-6 subtitle">
                            <span>Nhiệt độ</span>
                          </div>
                          <div className="col-6 subcontent">
                            <i className="fas fa-thermometer-half"></i>
                            <span className="titleValue">
                              {temperatureSen2}
                            </span>
                            <span>
                              <sup>o</sup>C
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="row">
                          <div className="col-6 subtitle">
                            <span>Độ ẩm</span>
                          </div>
                          <div className="col-6 subcontent">
                            <i className="fas fa-cloud-rain"></i>
                            <span className="titleValue">{humiditySen2}</span>
                            <span>%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-6">
                        <div className="row">
                          <div className="col-6 subtitle">
                            <span>CO2</span>
                          </div>
                          <div className="col-6 subcontent">
                            <i className="fas fa-water"></i>
                            <span className="titleValue">{carbonicSen2}</span>
                            <span>ppm</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <Link to="/nha-nam-moi-den" className="small-box-footer">
                    Xem chi tiết...{" "}
                    <i className="fas fa-arrow-circle-right"></i>
                  </Link>
                </div>
              </div>
              {/* End nhà nấm mối đen  */}
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}
const mapState = state => {
  return {
    sensor1: state.home.sensor1,
    sensor2: state.home.sensor2
  };
};
export default connect(mapState, {
  getDataSensor1,
  getDataSensor2
})(Home);
