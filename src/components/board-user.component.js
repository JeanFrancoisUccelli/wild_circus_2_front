import React, { Component } from "react";

import UserService from "../services/user.service";

export default class BoardUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ""
    };
  }

  componentDidMount() {
    UserService.getUserBoard().then(
      response => {
        this.setState({
          content: response.data
        });
      },
      error => {
        this.setState({
          content:
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString()
        });
      }
    );
  }

  render() {
    return (
      <div className="container">
    
         
          <h3>Wild Circus is here for you,<br/>make your choice below</h3>
 

        <div class="row">
          <div class="col-sm-3">
            <div class="card">
              <img
                class="card-img-top img-fluid"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQkvVwT-n3z8UMnA1esM1C3CTuBLEBRzSBP3g&usqp=CAU"
                alt=""
              />
              <div class="card-body"><br />
                <h5 class="card-title">The Artist</h5>
                <p class="card-text">Learn more about our famous artists !</p>
                <a  class="btn btn-primary" href="/artists/Artist">Go to artists page</a>
              </div>
            </div>
          </div>
          <div class="col-sm-3">
            <div class="card">
              <img
                class="card-img-top img-fluid"
                src="https://res.cloudinary.com/dcmfiobqe/image/upload/v1576741860/CCBB_Landingpage/WildCodeSchool/the-magician_va8obt.jpg"
                alt="Magician and his assistant"
              />
              <div class="card-body">
                <h5 class="card-title">Incredible shows</h5>
                <p class="card-text">
                  Our shows are breathtaking</p>
                <a href="/Perf" class="btn btn-primary">Go to Perf page</a>
              </div>
            </div>
          </div>
        
          <div class="col-sm-3">
            <div class="card">
              <img
                class="card-img-top img-fluid"
                src="https://ysfair.com/fair/images/graphics/tickets.png"
                alt=""
              />
              <div class="card-body">
                <h5 class="card-title">Our prices</h5>
                <p class="card-text">Not so expensive, take a look</p>
                <a href="/Prices" class="btn btn-primary">Go to Prices page</a>
              </div>
            </div>
          </div>
          <div class="col-sm-3">
            <div class="card">
              <img
                class="card-img-top img-fluid"
                src="https://www.nationalgeographic.com/content/dam/ngdotcom/rights-exempt/maps/world-classic-2018-banner-clip-72.adapt.1900.1.jpg"
                alt=""
              />
              <div class="card-body"><br />
                <h5 class="card-title">Find us !</h5>
                <p></p>
                <p class="card-text">See on a map where you could find us</p>
                <a href="Mapping" class="btn btn-primary">Go to Map page</a>
              </div>
            </div>
          </div>
        </div>




      </div>
    );
  }
}
