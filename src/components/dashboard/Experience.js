import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Moment from "react-moment";
import { deleteExperience } from "../../actions/profileAction";

class Experience extends Component {
  onDeleteClick = id => {
    this.props.deleteExperience(id);
  };

  render() {
    const experience = this.props.experience.map(exp => (
      <tr key={exp._id}>
        <td>{exp.company}</td>
        <td>{exp.title}</td>
        <td>
          {<Moment format="YYYY/MM/DD">{exp.from.trim()}</Moment>} -
          {<Moment format="YYYY/MM/DD">{exp.to.trim()}</Moment>}
        </td>
        <td>
          <button
            onClick={() => this.onDeleteClick(exp._id)}
            className="btn btn-danger"
          >
            Delete
          </button>
        </td>
      </tr>
    ));
    return (
      <div className="">
        <h4 className="mb-4">Experience Credential</h4>
        <table className="table">
          <thead>
            <tr>
              <th>Company</th>
              <th>Title</th>
              <th>Years</th>
              <th></th>
            </tr>
            {experience}
          </thead>
        </table>
      </div>
    );
  }
}

const mapState = state => {
  return {};
};
export default connect(null, { deleteExperience })(Experience);
