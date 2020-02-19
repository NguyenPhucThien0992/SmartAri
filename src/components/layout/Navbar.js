import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logoutUser } from "./../../actions/authActions";
import { clearCurrentProfile } from "./../../actions/profileAction";

class Navbar extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.clearCurrentProfile();
    this.props.logoutUser();
  };
  render() {
    return (
      <Fragment>
        <nav className="main-header navbar navbar-expand navbar-white navbar-light">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" data-widget="pushmenu" href="#">
                <i className="fas fa-bars"></i>
              </a>
            </li>
          </ul>
        </nav>
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
          <Link to="/home" className="brand-link">
            <span className="brand-text font-weight-light">
              Smart Ariculture
            </span>
          </Link>

          <div className="sidebar">
            <nav className="mt-2">
              <ul
                className="nav nav-pills nav-sidebar flex-column"
                data-widget="treeview"
                role="menu"
                data-accordion="false"
              >
                <li className="nav-item">
                  <Link to="/alarm" className="nav-link">
                    <i className="nav-icon fas fa-th"></i>Cảnh báo
                  </Link>
                </li>

                <li className="nav-item has-treeview">
                  <Link to="" className="nav-link mainlink">
                    <i className="nav-icon fas fa-table"></i>
                    <p>
                      Nhà nấm Thanh Tâm
                      <i className="fas fa-angle-left right"></i>
                    </p>
                  </Link>
                  <ul className="nav nav-treeview">
                    <li className="nav-item">
                      <Link to="/nha-nam-bao-ngu" className="nav-link">
                        <i className="far fa-circle nav-icon"></i>
                        <p>Nhà Nấm Bào Ngư</p>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/nha-nam-moi-den" className="nav-link">
                        <i className="far fa-circle nav-icon"></i>
                        <p>Nhà Nấm Mối Đen</p>
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
        </aside>
      </Fragment>
    );
  }
}

Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapState = state => ({ auth: state.auth });

export default connect(mapState, { logoutUser, clearCurrentProfile })(Navbar);
