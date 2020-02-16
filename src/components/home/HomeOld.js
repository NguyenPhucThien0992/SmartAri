// import React, { Component, Fragment } from "react";
// import { connect } from "react-redux";
// import { getData, initialDevice, getAlarm } from "../../actions/HomeAction";
// import { Link } from "react-router-dom";
// import InputGroup from "../common/InputGroup";
// import SelectListGroup from "../common/SelectListGroup";
// import "./../../style/Home.css";
// import { updateAlarm } from "../../actions/alarmActions";
// import {
//   getControl,
//   fan1ControlOn,
//   // fanControlOn,
//   fanControlOff,
//   humidControlOn,
//   humidControlOff,
//   carControlOn,
//   carControlOff
// } from "../../actions/controlActions";

// class HomeOld extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       conditionType: "temperature",
//       highThreshold: "",
//       lowThreshold: "",
//       checkedValue: false
//     };
//   }
//   fanControlOn = () => {
//     this.props.fanControlOn();
//   };
//   fanControlOff = () => {
//     this.props.fanControlOff();
//   };
//   humidControlOn = () => {
//     this.props.humidControlOn();
//   };
//   humidControlOff = () => {
//     this.props.humidControlOff();
//   };

//   carControlOn = () => {
//     this.props.carControlOn();
//   };
//   carControlOff = () => {
//     this.props.carControlOff();
//   };
//   onFanButtonChange = e => {
//     var fanValue = {
//       fan: e.target.value
//     };
//     this.props.fan1Control(fanValue);
//     // this.setState({ fanCheckedValue: e.target.value });
//   };
//   onFanClickToggle = event => {
//     event.preventDefault();
//     var fanCheckValue = event.target.checked;
//     var dataFanCheck = {
//       fan: false
//     };
//     this.props.fan1Control(dataFanCheck);
//     this.setState({ checkedValue: event.target.checked });
//   };
//   UNSAFE_componentWillReceiveProps(nextProps) {
//     if (nextProps.control) {
//       var { control } = nextProps;

//       var control1 = control["data"];
//       console.log("control1", control1);
//       var control2 = control1["control"];
//       var control3 = Object.values(control2)[0];

//       var fanValue = control3["fan"];
//       var humValue = control3["humid"];
//       var carValue = control3["car"];
//       this.setState({
//         fanCheckValue: fanValue
//       });
//     }
//   }

//   componentWillMount() {
//     this.props.initialDevice();
//     this.props.getData();
//     this.props.getAlarm();
//     this.props.getControl();
//   }

//   componentDidMount() {
//     this.interval = setInterval(() => {
//       this.props.getData();
//       this.props.getAlarm();
//     }, 4000);
//   }
//   onChange = e => {
//     this.setState({
//       [e.target.name]: e.target.value
//     });
//   };
//   onSubmit = e => {
//     e.preventDefault();
//     var newTem, newHumid, newCarbonic, alarmData;

//     if (this.state.conditionType === "temperature") {
//       newTem = {
//         highTem: this.state.highThreshold,
//         lowTem: this.state.lowThreshold
//       };
//       newHumid = {
//         highHumid: null,
//         lowHumid: null
//       };
//       newCarbonic = {
//         highCar: null,
//         lowCar: null
//       };
//     } else if (this.state.conditionType === "humidity") {
//       newTem = {
//         highTem: null,
//         lowTem: null
//       };
//       newHumid = {
//         highHumid: this.state.highThreshold,
//         lowHumid: this.state.lowThreshold
//       };
//       newCarbonic = {
//         highCar: null,
//         lowCar: null
//       };
//     } else if (this.state.conditionType === "carbonic") {
//       newTem = {
//         highTem: null,
//         lowTem: null
//       };
//       newHumid = {
//         highHumid: null,
//         lowHumid: null
//       };
//       newCarbonic = {
//         highCar: this.state.highThreshold,
//         lowCar: this.state.lowThreshold
//       };
//     }
//     var alarmData = {
//       temperature: newTem,
//       humidity: newHumid,
//       carbonic: newCarbonic
//     };

//     this.props.updateAlarm(alarmData, this.props.history);
//     this.props.history.push("/alarm");
//   };
//   render() {
//     console.log("thienten111111111");
//     const { datas } = this.props;
//     var renderItem;
//     var temperatureValue = null,
//       humidValue = null,
//       carbonicValue = null;
//     if (datas && datas !== null && datas !== undefined) {
//       Object.keys(datas).forEach((key, index) => {
//         console.log("datas", datas);
//         if (key === "data") {
//           var tmpdata = datas["data"];

//           Object.keys(tmpdata).forEach((key, index) => {
//             if (key === "data") {
//               var result = tmpdata["data"];

//               Object.keys(result).forEach((key, index) => {
//                 if (key === "state") {
//                   var state = result["state"];
//                   console.log("state", state);
//                   Object.keys(state).forEach((key, index) => {
//                     if (key === "reported") {
//                       var reported = state["reported"];
//                       console.log("reported", reported);
//                       Object.keys(reported).forEach((key, index) => {
//                         if (key === "smart_objects") {
//                           var smart_objects = reported["smart_objects"];
//                           console.log("smart_objects", smart_objects);
//                           var temperature, humid, carbonic;
//                           temperature = Object.values(smart_objects)[0];
//                           console.log("temperature", temperature);
//                           Object.keys(temperature).forEach((key, index) => {
//                             if (key === "values") {
//                               var temperatureValue3 = temperature["values"];
//                               var temperatureValue2 = temperatureValue3[0];
//                               temperatureValue = temperatureValue2["value"];
//                             }
//                           });
//                           humid = Object.values(smart_objects)[1];
//                           Object.keys(humid).forEach((key, index) => {
//                             if (key === "values") {
//                               var humidValue3 = humid["values"];
//                               var humidValue2 = humidValue3[0];
//                               humidValue = humidValue2["value"];
//                             }
//                           });
//                           carbonic = Object.values(smart_objects)[2];

//                           Object.keys(carbonic).forEach((key, index) => {
//                             if (key === "values") {
//                               var carbonicValue3 = carbonic["values"];
//                               var carbonicValue2 = carbonicValue3[0];
//                               carbonicValue = carbonicValue2["value"];
//                             }
//                           });

//                           return (renderItem = (
//                             <Fragment>
//                               <div className="row">
//                                 <div className="col-4">
//                                   <div className="card card-body bg-light mb-3">
//                                     <div className="row">
//                                       <div className="col-4">
//                                         <img
//                                           src="https://png.pngtree.com/png-clipart/20190619/original/pngtree-vector-humidity-icon-png-image_4002850.jpg"
//                                           alt=""
//                                         />
//                                       </div>
//                                       <div className="col-lg-4 col-md-4 col-4">
//                                         <h5>Temperature</h5>
//                                         <p>
//                                           {temperatureValue
//                                             ? temperatureValue
//                                             : null}
//                                           <span>
//                                             <sup>o</sup>C
//                                           </span>
//                                         </p>
//                                       </div>
//                                     </div>
//                                   </div>
//                                 </div>

//                                 <div className="col-4">
//                                   <div className="card card-body bg-light mb-3">
//                                     <div className="row">
//                                       <div className="col-4">
//                                         <img
//                                           src="https://png.pngtree.com/png-clipart/20190619/original/pngtree-vector-humidity-icon-png-image_4002850.jpg"
//                                           alt=""
//                                         />
//                                       </div>
//                                       <div className="col-lg-4 col-md-4 col-4">
//                                         <h5>HUMIDITY</h5>
//                                         <p>
//                                           {humidValue ? humidValue : null}
//                                           <span>%</span>
//                                         </p>
//                                       </div>
//                                     </div>
//                                   </div>
//                                 </div>
//                                 <div className="col-4">
//                                   <div className="card card-body bg-light mb-3">
//                                     <div className="row">
//                                       <div className="col-4">
//                                         <img
//                                           src="https://png.pngtree.com/png-vector/20190720/ourlarge/pngtree-sun-icon-for-your-project-png-image_1552456.jpg"
//                                           alt=""
//                                         />
//                                       </div>
//                                       <div className="col-lg-4 col-md-4 col-4">
//                                         <h5>HUMIDITY</h5>
//                                         <p>
//                                           {carbonicValue ? carbonicValue : null}
//                                           <span>%</span>
//                                         </p>
//                                       </div>
//                                     </div>
//                                   </div>
//                                 </div>
//                               </div>
//                             </Fragment>
//                           ));
//                         }
//                       });
//                     }
//                   });
//                 }
//               });
//             }
//           });
//         }
//       });
//     }

//     //////////////////////////////////
//     //// Alarm

//     const { alarms } = this.props;
//     var renderalarm;
//     if (alarms && alarms !== null && alarms !== undefined) {
//       Object.keys(alarms).forEach((key, index) => {
//         if (key === "data") {
//           var tmpdata = alarms["data"];
//           Object.keys(tmpdata).forEach((key, index) => {
//             if (key === "alarm") {
//               var alarmData = tmpdata["alarm"];
//               Object.keys(alarmData).forEach((key, index) => {
//                 var alarm = alarmData[0];

//                 var temManual,
//                   humidManual,
//                   carManual,
//                   highTem,
//                   lowTem,
//                   highHumid,
//                   lowHumid,
//                   highCar,
//                   lowCar;
//                 temManual = alarm["temperature"];
//                 humidManual = alarm["humidity"];
//                 carManual = alarm["carbonic"];
//                 highTem = parseFloat(temManual["highTem"]);
//                 lowTem = parseFloat(temManual["lowTem"]);
//                 highHumid = parseFloat(humidManual["highHumid"]);
//                 lowHumid = parseFloat(humidManual["lowHumid"]);
//                 highCar = parseFloat(carManual["highCar"]);
//                 lowCar = parseFloat(carManual["lowCar"]);

//                 return (renderalarm = (
//                   <div>
//                     {temperatureValue < lowTem || temperatureValue > highTem ? (
//                       <div>
//                         <span>Nhiet do</span>
//                         <p style={{ color: "red" }}>
//                           Giá trị ngưỡng : {lowTem} - {highTem}
//                         </p>
//                         <p>Giá trị vượt ngưỡng: {temperatureValue}</p>
//                       </div>
//                     ) : (
//                       <div>
//                         <span>Nhiet do</span>{" "}
//                         <p style={{ color: "green" }}>Ok: {temperatureValue}</p>
//                       </div>
//                     )}

//                     {humidValue < lowHumid || humidValue > highHumid ? (
//                       <div>
//                         <span>Do am</span>
//                         <p style={{ color: "red" }}>
//                           Giá trị ngưỡng : {lowHumid} - {highHumid}
//                         </p>
//                         <p>Giá trị vượt ngưỡng: {humidValue}</p>
//                       </div>
//                     ) : (
//                       <div>
//                         <span>Do am</span>{" "}
//                         <p style={{ color: "green" }}>Ok {humidValue}</p>
//                       </div>
//                     )}

//                     {carbonicValue < lowCar || carbonicValue > highCar ? (
//                       <div>
//                         <span>Carbonic</span>
//                         <p style={{ color: "red" }}>
//                           Giá trị ngưỡng : {lowCar} - {highCar}
//                         </p>
//                         <p>Giá trị vượt ngưỡng: {carbonicValue}</p>
//                       </div>
//                     ) : (
//                       <div>
//                         <span>Carbonic</span>
//                         <p style={{ color: "green" }}>OK: {carbonicValue}</p>
//                       </div>
//                     )}
//                   </div>
//                 ));
//               });
//             }
//           });
//         }
//       });
//     }
//     var options = [
//       { label: "Temperature", value: "temperature" },
//       { label: "Humidity", value: "humidity" },
//       { label: "Carbonic", value: "carbonic" }
//     ];
//     return (
//       <Fragment>
//         <div className="page-breadcrumb">
//           <div className="row">
//             <div className="col-12 d-flex no-block align-items-center">
//               <h4 className="page-title">
//                 <i class="fas fa-home"></i>Sensor node 1
//               </h4>
//             </div>
//           </div>
//         </div>
//         <div class="homecard card">
//           <ul class="nav nav-tabs" role="tablist">
//             <li class="nav-item">
//               <a
//                 class="nav-link active"
//                 data-toggle="tab"
//                 href="#warningAndScore"
//                 role="tab"
//               >
//                 <span class="hidden-sm-up"></span>
//                 <span class="hidden-xs-down">
//                   <i class="fas fa-exclamation-circle"></i> Cảnh báo và thông số
//                 </span>
//               </a>
//             </li>
//             <li class="nav-item">
//               <a class="nav-link" data-toggle="tab" href="#profile" role="tab">
//                 <span class="hidden-sm-up"></span>
//                 <span class="hidden-xs-down">
//                   <i class="fas fa-exchange-alt"></i>Điều khiển và cấu hình
//                 </span>
//               </a>
//             </li>
//           </ul>

//           <div className="tab-content tabcontent-border">
//             <div
//               className="tab-pane active"
//               id="warningAndScore"
//               role="tabpanel"
//             >
//               <div className="card text-white mb-3 card-warning">
//                 <div className="card-header bg-warning-home">
//                   <i class="fas fa-exclamation-triangle"></i> Trạng thái và cảnh
//                   báo
//                 </div>
//                 <div className="card-body border-card-warning">
//                   <p className="card-text">Al1</p>
//                   <p className="card-text">Al2</p>
//                   <p className="card-text">Al3</p>
//                 </div>
//               </div>

//               <div className="row">
//                 <div className="card text-white mb-3 card-warning col-6">
//                   <div className="card-header bg-warning-home">
//                     <i class="fas fa-thermometer-three-quarters"></i> Nhiệt độ
//                     phòng
//                   </div>
//                   <div className="card-body border-card-warning">
//                     <div className="row">
//                       <img
//                         src="../../../assets/images/temperature.png"
//                         alt=""
//                         className="img-tem-item"
//                       />
//                       <div className="p-tem-item">
//                         <span>
//                           {temperatureValue} <sup>o</sup> C
//                         </span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="card text-white mb-3 card-warning col-6">
//                   <div className="card-header bg-warning-home">
//                     <i class="fas fa-thermometer-three-quarters"></i> Độ ẩm
//                   </div>
//                   <div className="card-body border-card-warning">
//                     <div className="row">
//                       <img
//                         src="../../../assets/images/temperature.png"
//                         alt=""
//                         className="img-tem-item"
//                       />
//                       <div className="p-tem-item">
//                         <span>{humidValue} %</span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="row">
//                 <div className="card text-white mb-3 card-warning col-6">
//                   <div className="card-header bg-warning-home">
//                     <i class="fas fa-thermometer-three-quarters"></i> Carbonic
//                   </div>
//                   <div className="card-body border-card-warning">
//                     <div className="row">
//                       <img
//                         src="../../../assets/images/temperature.png"
//                         alt=""
//                         className="img-tem-item"
//                       />
//                       <div className="p-tem-item">
//                         <span>{carbonicValue} ppm</span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="tab-pane  p-20" id="profile" role="tabpanel">
//               {/* control and config */}
//               <div className="row">
//                 <div className="card text-white mb-3 card-warning col-6">
//                   <div className="card-header bg-warning-home">
//                     <i class="fas fa-thermometer-three-quarters"></i> Điều khiển
//                   </div>
//                   <div className="card-body border-card-warning">
//                     <div className="row">
//                       <div className="col-3">
//                         <div className="p-10 text-black text-center control-bg-item">
//                           <h5 className="m-b-0 m-t-5">Quạt</h5>
//                           {/* <button onClick={this.fanControlOn}>On</button> */}
//                           <button onClick={this.fanControlOff}>OFf</button>
//                           {/* <input
//                             type="checkbox"
//                             id="fan"
//                             // ref="fan_check"
//                             checked={this.state.fanCheckValue}
//                             onClick={this.onFanClickToggle}
//                           /> */}
//                           <div class="switchToggle ">
//                             {/* <input
//                               type="checkbox"
//                               id="fan"
//                               ref="fan_check"
//                               checked={this.state.checkedValue}
//                               onClick={this.onClickToggle}
//                             /> */}
//                             <label
//                               for="switch1"
//                               style={{ textAlign: "center" }}
//                             >
//                               Toggle
//                             </label>
//                           </div>
//                         </div>
//                       </div>
//                       <div className="col-3">
//                         <div className="p-10 text-black text-center control-bg-item">
//                           <h5 className="m-b-0 m-t-5">CO2</h5>
//                           <button onClick={this.carControlOn}>On</button>
//                           <button onClick={this.carControlOff}>OFf</button>
//                         </div>
//                       </div>
//                       <div className="col-3">
//                         <div className="p-10 text-black text-center control-bg-item">
//                           <h5 className="m-b-0 m-t-5">Humid</h5>
//                           <button onClick={this.humidControlOn}>On</button>
//                           <button onClick={this.humidControlOff}>OFf</button>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 {/* Control */}
//                 <div className="card text-white mb-3 card-warning col-6">
//                   <div className="card-header bg-warning-home">
//                     <i class="fas fa-thermometer-three-quarters"></i> Mức cảnh
//                     báo
//                   </div>
//                   <div className="card-body border-card-warning">
//                     <form onSubmit={this.onSubmit}>
//                       {/*  Condition Type */}
//                       <label htmlFor="conditionType" className="control-label">
//                         Condition Type
//                       </label>
//                       <SelectListGroup
//                         placeholder="Condition Type"
//                         name="conditionType"
//                         value={this.state.conditionType}
//                         onChange={this.onChange}
//                         // error={errors.status}
//                         options={options}
//                         // info="Please chose condition type"
//                       ></SelectListGroup>
//                       <label htmlFor="highThreshold" className="control-label">
//                         High Threshold
//                       </label>
//                       <InputGroup
//                         type="number"
//                         placeholder="High Threshold"
//                         name="highThreshold"
//                         value={this.state.highThreshold}
//                         onChange={this.onChange}
//                         // error={errors.twitter}
//                       ></InputGroup>
//                       <label htmlFor="lowThreshold" className="control-label">
//                         Low Threshold
//                       </label>
//                       <InputGroup
//                         type="number"
//                         placeholder="Low Threshold"
//                         name="lowThreshold"
//                         value={this.state.lowThreshold}
//                         onChange={this.onChange}
//                         // error={errors.twitter}
//                       ></InputGroup>
//                       <input
//                         type="submit"
//                         className="btn btn-info btn-block mt-4 col-4 offset-4"
//                       />
//                     </form>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </Fragment>
//     );
//   }
// }

// const mapState = state => {
//   return {
//     datas: state.home.data,
//     alarms: state.home.alarm,
//     control: state.control.control
//   };
// };
// export default connect(mapState, {
//   getData,
//   initialDevice,
//   getAlarm,
//   updateAlarm,
//   getControl,
//   fan1ControlOn,
//   // fanControlOn,
//   fanControlOff,
//   humidControlOn,
//   humidControlOff,
//   carControlOn,
//   carControlOff
// })(HomeOld);

import React, { Component } from "react";

export default class HomeOld extends Component {
  render() {
    return <div>asdas</div>;
  }
}
