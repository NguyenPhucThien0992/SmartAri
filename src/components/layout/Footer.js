import React, { Component } from "react";
import "./../../style/Footer.css";

export default class Footer extends Component {
  render() {
    return (
      <footer className="bg-dark text-white mt-5 p-4 text-center footer">
        Copyright &copy; {new Date().getFullYear()} Smart Culture
      </footer>
    );
  }
}
