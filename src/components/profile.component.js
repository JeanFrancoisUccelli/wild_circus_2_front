import React, { Component } from "react";
import AuthService from "../services/auth.service";

export default class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: AuthService.getCurrentUser()
    };
  }

  render() {
    const { currentUser } = this.state;

    return (
      <div className="container">
        {/* <header className="jumbotron"> */}
        <h4>
          Hello <strong>{currentUser.username}</strong> here's your profile
        </h4>

        <p>
          Your <strong>Email:</strong> {currentUser.email}
        </p>
        <p>Your 
          <strong>Authorities:</strong> in our site:
          <p>
            {currentUser.roles &&
              currentUser.roles.map((role, index) => (
                <p key={index}>{role}</p>
              ))}
          </p>
        </p>
      </div>
    );
  }
}
