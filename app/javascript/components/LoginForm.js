import React from "react"
import PropTypes from "prop-types"
class LoginForm extends React.Component {
  render () {
    return (
      <React.Fragment>
        <form>
          <div className="form-group">
            <label>Email Address</label>
            <input type="email" className="form-control" placeholder="name@address.com" />
          </div>

          <div className="form-group">
            <div className="row">
              <div className="col">
                <label>Password</label>
              </div>
              <div className="col-auto">
                <a href="password-reset-illustration.html" className="form-text small text-muted">
                  Forgot password?
                </a>
              </div>
            </div>
            <div className="input-group input-group-merge">
              <input type="password" className="form-control form-control-appended" placeholder="Enter your password" />
              <div className="input-group-append">
                <span className="input-group-text">
                  <i className="fe fe-eye"></i>
                </span>
              </div>
            </div>
          </div>

          <button className="btn btn-lg btn-block btn-primary mb-3">
            Sign in
          </button>
        </form>
      </React.Fragment>
    );
  }
}

export default LoginForm
