import React from "react";
import './css/nav.css'

const Nav = () => {
  const burgerMenu = document.getElementById("burger");
  function toggleBurger() {
    // Toggle between adding / removing the opened-nav class from the menu
    // burgerMenu.classList.toggle("opened-nav");
  }

  // We get all the a elements with class "nav-item", and attach a click
  // listener to them which removes the opened-nav class from burger element.
  const theLinks = document.querySelectorAll(".nav-item");
  theLinks.forEach(link =>
    link.addEventListener("click", () => {
      burgerMenu.classList.remove("opened-nav");
    })
  );

  return (
    <nav className="navbar navbar-default ">
      <div className="container-fluid">
        <div className="navbar-header">
          <a className="navbar-brand" href="/yelpcamp">
            YelpCamp
          </a>
          <button id="burger" onClick={toggleBurger(this)} class="btn btn-sm navbar-toggle collapsed">
            <div class="bar1"></div>
            <div class="bar2"></div>
            <div class="bar3"></div>
          </button>
        </div>

        <div className="collapse navbar-collapse">
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="/yelpcamp/login" class="nav-item">
                Login
              </a>
            </li>
            <li>
              <a href="/yelpcamp/register" class="nav-item">
                Register
              </a>
            </li>

            {/* <li> <a href="#"> Signed in as <%=currentUser.username%></a></li>
            <li><a href="/logout">Log Out</a></li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
