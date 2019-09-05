import React from "react"
import PropTypes from "prop-types"
import Logo from "images/logo.svg"

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'default'
    }
  }
  render () {
    return (
      <React.Fragment>
        <nav className="navbar navbar-vertical fixed-left navbar-expand-md navbar-light" id="sidebar">
          <div className="container-fluid">
            {/* Toggler */}
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#sidebarCollapse" aria-controls="sidebarCollapse" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            {/* Brand */}
            <a className="navbar-brand" href="/">
              <img src={Logo} className="navbar-brand-img mx-auto" alt="..." />
            </a>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default Sidebar
