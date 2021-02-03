import React, { useEffect } from "react";
import "./css/nav.css";

const Nav = () => {

  const burger = document.getElementById("burger");
  function toggleBurger() {
    // Toggle between adding / removing the opened-nav class from the menu
    
    // burger.classList.toggle("opened-nav");
  }

  // We get all the a elements with class "nav-item", and attach a click
  // listener to them which removes the opened-nav class from burger element.
  const theLinks = document.querySelectorAll(".nav-item");
  theLinks.forEach(link =>
    link.addEventListener("click", () => {
      burger.classList.remove("opened-nav");
    })
  );

  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="/yelpcamp">YelpCamp</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText"
    aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>


  <a class='nav-item' href="/yelpcamp/campgrounds"> <i class="fas fa-home"></i> Home </a>

  <div class="collapse navbar-collapse" id="navbarText">
    <ul class="nav navbar-nav ml-auto">
      <li class="nav-item">
        <a class="nav-link" href="/yelpcamp/auth/login"><span><i class="fas fa-sign-in-alt"></i></span>Login</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/yelpcamp/auth/register"><span><i class="fas fa-user-plus"></i></span>
          Register</a>
      </li>
      <li class="nav-item">
        <a class="inactive" href="#"> Signed in as <i class="fas fa-user"></i> currentUser.username</a>
      </li>
      <li class="nav-item">
        <a class="nav=link" href="/yelpcamp/auth/logout">Log Out <i class="fas fa-sign-out-alt"></i></a>
      </li>
    </ul>
    
  </div>
</nav>
  );
};

export default Nav;
