import React, { Component } from "react";
import UserService from "../services/user.service";
import Carrousel from './Carrousel';
import './home.component.css'

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ""
    };
  }

  componentDidMount() {
    UserService.getPublicContent().then(
      response => {
        this.setState({
          content: response.data
        });
      },
      error => {
        this.setState({
          content:
            (error.response && error.response.data) ||
            error.message ||
            error.toString()
        });
      }
    );
  }

  render() {
    return (
      <div className="container">
        <header className="jumbotron">
          <h3>Welcome on Wild Circus web-app<br />You can navigate on our site with the left-side navbar,<br />or register and then login to get all our content<br/>as a user membership</h3>
          <Carrousel />
          <p style={{ textAlign: 'center' }}>{this.state.content}</p>
          </header>
      </div>
    );
  }
}
