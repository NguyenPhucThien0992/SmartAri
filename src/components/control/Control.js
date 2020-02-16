import React, { Component } from "react";
import { connect } from "react-redux";
import { controlManual } from "./../../actions/controlActions";
import InputGroup from "../common/InputGroup";

class Control extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fan1: "close"
    };
  }
  onClick = e => {
    this.props.controlManual();
  };
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  render() {
    return (
      <div className="custom-control custom-switch">
        {/* <input
            name="checkbox"
            type="checkbox"
            class="custom-control-input"
            id="customSwitches"
            onChange={this.onChange()}
          /> */}
        <InputGroup
          type="checkbox"
          placeholder="High Threshold"
          name="fan1"
          value={this.state.highThreshold}
          onChange={this.onChange}
          // error={errors.twitter}
        ></InputGroup>
        <label className="custom-control-label" for="customSwitches">
          Toggle this switch element
        </label>
      </div>
    );
  }
}

export default connect(null, { controlManual })(Control);
