import React, { Component } from "react";
import AuthService from "../services/auth.service";

export default class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: AuthService.getCurrentUser(),
      tickets: []
    };
  }

  const makeResa = (e) => {
    e.preventDefault();
    axios // envoi ds la bdd
        .get(`https://wildcircus2back.herokuapp.com/resas`)
        .then(res => {
            if (res.err) {
                alert(res.err);
            } else {
              res => {this.setState(tickets = res.json)};
            }
        });
};

  render() {
    const { currentUser, tickets } = this.state;
    console.log(tickets)

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
