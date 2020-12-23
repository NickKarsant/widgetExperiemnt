import React from "react";

const Register = () => {
  return (
    <div className="ui container">
      <div className="ui one column stackable center aligned page grid">
        <div className="column twelve wide">
          <h2>Sign Up</h2>
          <div className="form">
            <form action="/register" method="POST">
              <div className="form-group">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Username"
                  name="username"
                />
              </div>

              <div className="form-group">
                <input
                  className="form-control"
                  type="password"
                  placeholder="Password"
                  name="password"
                />
              </div>

              <div className="form-group">
                <button className="btn btn-lg btn-primary btn-block">
                  Submit!
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <a href="/yelpcamp/campgrounds" className="ui green button">
        Back
      </a>
    </div>
  );
};

export default Register;
