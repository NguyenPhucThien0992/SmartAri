import React, { Component } from "react";
import { connect } from "react-redux";
import Moment from "react-moment";
import { deleteEducation } from "../../actions/profileAction";

class Experience extends Component {
  onDeleteClick = id => {
    this.props.deleteEducation(id);
  };

  render() {
    const education = this.props.education.map(edu => (
      <tr key={edu._id}>
        <td>{edu.school}</td>
        <td>{edu.degree}</td>
        <td>
          {<Moment format="YYYY/MM/DD">{edu.from.trim()}</Moment>} -
          {<Moment format="YYYY/MM/DD">{edu.to.trim()}</Moment>}
        </td>
        <td>
          <button
            onClick={() => this.onDeleteClick(edu._id)}
            className="btn btn-danger"
          >
            Delete
          </button>
        </td>
      </tr>
    ));
    return (
      <div className="">
        <h4 className="mb-4">Education Credential</h4>
        <table className="table">
          <thead>
            <tr>
              <th>School</th>
              <th>Degree</th>
              <th>Years</th>
              <th></th>
            </tr>
            {education}
          </thead>
        </table>
      </div>
    );
  }
}

export default connect(null, { deleteEducation })(Experience);
