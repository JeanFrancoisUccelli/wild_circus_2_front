import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import WCLogo from "./assets/pictures/WCLogo.png";
import "./App.css";

import AuthService from "./services/auth.service";

import Login from "./components/login.component";
import Register from "./components/register.component";
import Home from "./components/home.component";
import Profile from "./components/profile.component";
import BoardUser from "./components/board-user.component";
import BoardModerator from "./components/board-moderator.component";
import BoardAdmin from "./components/board-admin.component";
import AboutUs from "./components/AboutUs";
import Mapping from "./components/Mapping";
import Perf from "./components/Perf";
import Prices from "./components/Prices";
import Basket from "./components/Basket";
import Resa from "./components/Resa";
import MovieCarousel from './components/artists/Artist';

class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
    };
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user,
        showModeratorBoard: user.roles.includes("ROLE_MODERATOR"),
        showAdminBoard: user.roles.includes("ROLE_ADMIN"),
      });
    }
  }

  logOut() {
    AuthService.logout();
  }

  render() {
    const { currentUser, showModeratorBoard, showAdminBoard } = this.state;

    return (
      <Router>
        <nav class="navbar navbar-expand-lg navbar-dark" id="bd-navbar">
          <Link to={currentUser ? "/user" : "/"} className="navbar-brand">
            <img src={WCLogo} className="logo" alt="logo" />
          </Link>

          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
              {/* <li className="nav-item">
                <Link to={"/Home"} className="nav-link">
                  Home
                </Link>
              </li> */}

              {showModeratorBoard && (
                <li className="nav-item">
                  <Link to={"/mod"} className="nav-link">
                    Moderator Board
                  </Link>
                </li>
              )}

              {showAdminBoard && (
                <li className="nav-item">
                  <Link to={"/admin"} className="nav-link">
                    Admin Board
                  </Link>
                </li>
              )}

              {currentUser && (
                <li className="nav-item">
                  <Link to={"/user"} className="nav-link">
                    Landing Page
                  </Link>
                </li>
              )}
              <li className="nav-item">
                <Link to={"/artists/Artist"} className="nav-link">
                  Artists
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/Perf"} className="nav-link">
                  Perf
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/Prices"} className="nav-link">
                  Prices
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/AboutUs"} className="nav-link">
                  About Us
                </Link>
              </li>
            </ul>

            {currentUser ? (
              <div className="navbar-nav mr-0">
                <li className="nav-item">
                  <Link to={"/Resa"} className="nav-link">
                    Resa
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/Mapping"} className="nav-link">
                    Map
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/profile"} className="nav-link">
                    {currentUser.username}
                  </Link>
                </li>
                <li className="nav-item">
                  <a href="/login" className="nav-link" onClick={this.logOut}>
                    LogOut
                  </a>
                </li>
              </div>
            ) : (
              <div className="navbar-nav mr-0">
                <li className="nav-item">
                  <Link to={"/login"} className="nav-link">
                    Login
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to={"/register"} className="nav-link">
                    Sign Up
                  </Link>
                </li>
              </div>
            )}
          </div>
        </nav>

        <div className="container mt-3" id="container">
          <Switch>
            <Route exact path={["/", "/home"]} component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/profile" component={Profile} />
            <Route path="/user" component={BoardUser} />{" "}
            <Route path="/perf" component={Perf} />
            <Route path="/artists/Artist" component={MovieCarousel} />
            <Route path="/prices" component={Prices} />
            <Route path="/basket" component={Basket} />
            <Route path="/resa" component={Resa} />
            <Route path="/mapping" component={Mapping} />
            <Route path="/aboutus" component={AboutUs} />
            <Route path="/mod" component={BoardModerator} />
            <Route path="/admin" component={BoardAdmin} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
