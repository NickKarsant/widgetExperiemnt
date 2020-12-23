import React from 'react'
import './css/landing.css';

const Landing = () => {

  return (
    <>
    <div id="landing-header">
      <h1>Welcome to YelpCamp!</h1>
      <a href="/campgrounds" class="btn btn-lg btn-success">View All Campgrounds</a>
    </div>
    
    <ul className="slideshow">
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
    </>

  )
}



  export default Landing;