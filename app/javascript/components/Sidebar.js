import React from "react"
import PropTypes from "prop-types"
import Logo from "images/logo.svg"
import Avatar from "images/avatars/profiles/avatar-1.jpg"

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

            {/* User (xs) */}
            <div className="navbar-user d-md-none">

              {/* Dropdown */}
              <div className="dropdown">  
          
                {/* Toggle */}
                <a href="#" id="sidebarIcon" className="dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <div className="avatar avatar-sm avatar-online">
                    <img src={Avatar} className="avatar-img rounded-circle" alt="..." />
                  </div>
                </a>

                {/* Menu */}
                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="sidebarIcon">
                  <a href="profile-posts.html" className="dropdown-item">Profile</a>
                  <a href="settings.html" className="dropdown-item">Settings</a>
                  <hr className="dropdown-divider" />
                  <a href="/login" className="dropdown-item">Logout</a>
                </div>

              </div>

            </div>

            {/* Collapse */}
            <div className="collapse navbar-collapse" id="sidebarCollapse">

              {/* Form */}
              <form className="mt-4 mb-3 d-md-none">
                <div className="input-group input-group-rounded input-group-merge">
                  <input type="search" className="form-control form-control-rounded form-control-prepended" placeholder="Search" aria-label="Search" />
                  <div className="input-group-prepend">
                    <div className="input-group-text">
                      <span className="fe fe-search"></span>
                    </div>
                  </div>
                </div>
              </form>

              {/* Navigation */}
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" href="#sidebarDashboards" data-toggle="collapse" role="button" aria-expanded="true" aria-controls="sidebarDashboards">
                    <i className="fe fe-home"></i> Dashboards
                  </a>
                  <div className="collapse show" id="sidebarDashboards">
                    <ul className="nav nav-sm flex-column">
                      <li className="nav-item">
                        <a href="index.html" className="nav-link active">
                          Default
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="dashboard-alt.html" className="nav-link active">
                          Alternative
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>

            </div>

          </div>
        </nav>
      </React.Fragment>
    );
  }
}

Sidebar.propTypes = {
  mode: PropTypes.oneOf(['default', 'collapse'])
}

export default Sidebar
