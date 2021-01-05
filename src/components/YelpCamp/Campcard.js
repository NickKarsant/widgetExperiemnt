import React from 'react';

// const Campcard = (props) => {
class Campcard extends React.Component {
  constructor(props){
    super(props);
    this.state = {camps: props}
  }



  render() {
    return (
    
      <div className="row text-center" style={{display: "flex", flexWrap: "wrap"}}>
        {/* <%campgrounds.forEach(function(campground){ %> */}
          <div className="col-md-3 col-sm-6">
            
            <div className="thumbnail">
              <img src="<%= campground.image %>"/> 
              <div className="caption">
                <h4> campground Name </h4>
              </div>
              <p>
                <a className="btn btn-primary" href="/campgrounds/<%= campground._id %>">More Info</a>
              </p>
    
            </div>
          </div> 
        {/* <% }); %> */}
      </div>
    
    
    )
  }
}

export default Campcard;