import React from "react";

const Homepage = () => {
  return (

    <div className="ui container">
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="/yelpcamp">YelpCamp</a>
          </div>
      
          <div className="collapse navbar-collapse">
            <ul className="nav navbar-nav navbar-right">
              <li><a href="/yelpcamp/login">Login</a></li>
              <li><a href="/yelpcamp/register">Register</a></li>
              {/* <li> <a href="#"> Signed in as currentUser.username</a></li> */}
              {/* <li><a href="/logout">Log Out</a></li> */}
            </ul>
          </div>
        </div>
      </nav>

      <header className="jumbotron">
        <h1>
          <i className="fas fa-campground"></i> Welcome to YelpCamp
        </h1>
        <p>View our handpicked campgrounds from all over the world!</p>
        <p>
          <a className="btn btn-primary btn-large" href="/campgrounds/new">
            Add New Campground
          </a>
        </p>
      </header>

      {/* <div className="row text-center" style={{display: "flex", flexWrap: "wrap"}}>
        <div className="col-md-3 col-sm-6">
          <div className="thumbnail">
            <img src="" />
            <div className="caption">
              <h4> campground Name </h4>
            </div>
            <p>
              <a
                className="btn btn-primary"
                href="/campgrounds/<%= campground._id %>"
              >
                More Info
              </a>
            </p>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Homepage;
