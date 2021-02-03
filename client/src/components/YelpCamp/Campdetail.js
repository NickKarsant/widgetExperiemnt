import React from 'react';


const Campdetail = (camp) => {


  return (
  <div className="container">
    <div className="row">
      <div className="col-xs-3 col-sm-3 col-md-3">
        <p className="lead">YelpCamp</p>
        <div className="list-group">
          <li className="list-group-item active"><a href="#first" data-toggle="tab" id="tab">General</a></li>
          <li className="list-group-item"><a href="#second" data-toggle="tab" id="tab">Map</a></li>
          <li className="list-group-item"><a href="#third" data-toggle="tab" id="tab">Picture</a></li>
        
        </div>
      </div>
      <div className="col-md-9 col-sm-9 col-xs-9">
        <div className="thumbnail">
          <img className="img-responsive" src={camp.camp.image} />
          <div className="caption-full">
            <h4 className="pull-right"> {`${camp.camp.price} dollars/night`} </h4>
            <p>
              <em>Submitted By </em>
            </p>
              <a className="btn btn-warning" href={`{/yelcamp/%7B/campgrounds/${camp.camp._id}/edit}`}>Edit</a>
              <form id="deleteform" action={`{/yelcamp/%7B/campgrounds/${camp.camp._id}?_method=DELETE}`} method="POST">
                <button className="btn btn-danger">Delete</button>
              </form>
          </div> 
        </div>
        <div className="well">
          <div className="text-right">
            <a className=" btn btn-success" href={`{/yelcamp/%7B/campgrounds/${camp.camp._id}/comments/new}`}>Add New Comment</a>
          </div>
              <div className="row">
                <div className="col-md-12">
                  <strong> username </strong>
                  <span className="pull-right"> 10 days ago </span>
                  <p> 
                  </p>
                    <a className="btn btn-xs btn-warning" href={`{/yelcamp/%7B/campgrounds/${camp.camp._id}/comments/${comment._id}/edit}`}>Edit</a>
                    <form id="deleteform" action={`{/yelcamp/%7B/campgrounds/${camp.camp._id}/comments/${comment._id}/?_method=DELETE}`} method="POST">
                      <button className="btn btn-xs btn-danger">Delete</button>
                    </form>

                </div>
              </div>

        </div>
      </div>
      <a className="btn btn-primary" href="/yelpcamp/campgrounds">Go Back</a>
    </div>
  </div>

  )
}


export default Campdetail;