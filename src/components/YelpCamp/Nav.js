import React from 'react';


const Nav = () => {


  return(
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <a className="navbar-brand" href="/yelpcamp">YelpCamp</a>
        </div>
    
        <div className="collapse navbar-collapse">
          <ul className="nav navbar-nav navbar-right">
            <li><a href="/yelpcamp/login">Login</a></li>
            <li><a href="/yelpcamp/register">Register</a></li>

            {/* <li> <a href="#"> Signed in as <%=currentUser.username%></a></li>
            <li><a href="/logout">Log Out</a></li> */}
          </ul>
        </div>
      </div>
    </nav>


  );
}

export default Nav;