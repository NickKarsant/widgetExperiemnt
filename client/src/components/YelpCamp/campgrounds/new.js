import React from "react";
import Nav from "../Nav";

const New = () => {
  return (
    <div className="ui container">
      <Nav />
      <div className="ui one column stackable center aligned page grid">
        <div className="column twelve wide">
          <h2>Add a Campground</h2>
          <div className="form">
            <form action="/campgrounds" method="POST">
              <div className="form-group">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Name"
                  name="name"
                />
              </div>

              <div className="form-group">
                <input
                  className="form-control"
                  type="number"
                  placeholder="Price"
                  name="price"
                  min="0.01"
                  step="0.01"
                />
              </div>

              <div className="form-group">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Image url"
                  name="image"
                />
              </div>

              <div className="form-group">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Description"
                  name="description"
                />
              </div>

              <div className="form-group">
                <button className="btn btn-lg btn-primary btn-block">
                  Submit!
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
            <a href="/yelpcamp/campgrounds" className="ui green button">
              Homepage
            </a>
    </div>
  );
};

export default New;