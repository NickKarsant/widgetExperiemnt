import React, { useState, useEffect } from "react";
import Nav from "../Nav";

const Homepage = () => {
  const [campsitesData, setCampsitesData] = useState("");

  const getAllCampgrounds = () => {
    fetch("http://localhost:9000/index")
      .then(res => res.json())
      .then(res => console.log(JSON.stringify(res)))
      .then(res => console.log('the reponse: ' + res))
      .then(res => setCampsitesData(res));
  };


  useEffect(() => {
    getAllCampgrounds();
  }, []);



  return (
    <div className="ui container">
      <Nav />

      <header className="jumbotron">
        <h1>
          <i className="fas fa-campground"></i> Welcome to YelpCamp
        </h1>
        <p>View our handpicked campgrounds from all over the world!</p>
        <p>
          <a
            className="btn btn-primary btn-large"
            href="/yelpcamp/campgrounds/new"
          >
            Add New Campground
          </a>
        </p>
      </header>

      {campsitesData}
      

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
