import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Home extends Component {
  render() {
    return (
      <div>
        <Link to="/patreon">Login with Patreon</Link>
      </div>
    );
  }
}
