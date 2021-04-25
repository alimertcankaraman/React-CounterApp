import React, { Component } from "react";

class NavBar extends Component {
  render() {
    return (
      <nav class="navbar navbar-light bg-primary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Navbar{" "}
            <span className="badge badge-pill badge-secondary">
              {this.props.totalCounters}
            </span>
          </a>
        </div>
      </nav>
    );
  }
}

export default NavBar;
