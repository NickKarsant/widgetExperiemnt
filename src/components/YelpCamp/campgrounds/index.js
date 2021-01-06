import React, { useState, useEffect } from "react";
import ReactDOM from 'react-dom';
import Nav from "../Nav";
import Camplist from "../Camplist";

const Homepage = () => {
  const [campsitesData, setCampsitesData] = useState([]);

  const getCampData = async () => {
    const response = await fetch("http://localhost:9000/index");

    if (response.ok) {
      var campData = await response.json();
    }
    return campData;
  };


  useEffect(() => {
    getCampData().then(function(results) {
      setCampsitesData(results)
    })
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
      <div className="ui grid" id="cardlist">
        <Camplist camps={campsitesData}/>
      </div>
    </div>
  );
};

export default Homepage;
