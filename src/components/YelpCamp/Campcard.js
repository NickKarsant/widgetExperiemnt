import React from 'react';

const Campcard = (camp) => {

  return (
  
    <div className="five wide column text-center" style={{display: "flex", flexWrap: "wrap"}}>
        <div>
          
          <div className="thumbnail">
            <img src={camp.camp.image}/> 
            <div className="caption">
              <h4> {camp.camp.name} </h4>
            </div>
            <p>
              <a className="btn btn-primary" href={`{/campgrounds/${camp.camp._id}`}>More Info</a>
            </p>
  
          </div>
        </div> 
    </div>
  
  
  )
}

export default Campcard;