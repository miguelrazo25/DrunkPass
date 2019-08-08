import React from "react";
import "./Landing.css";
import { Redirect } from "react-router-dom";
import Header from "../header/Header";



const axios = require("axios");
const moment = require("moment");

class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      dob: "",
      ageErr: false,
      routeToGame: false
    };
  }

  inputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();

    this.validateDob()
      .then(() => {
        axios
          .post("/users", {
            name: this.state.name,
            email: this.state.email,
            dob: this.state.dob
          })
          .then(response => {
            window.localStorage.setItem('userId', response.data._id);
            window.localStorage.setItem('username', this.state.name);
            window.localStorage.setItem('userscore', 0);
            this.setState({ routeToGame: true });
          })
          .catch(function (error) {
            console.log(error);
          });
      })
      .catch(err => {
        this.setState({ ageErr: true });
      });
  };

  validateDob() {
    return new Promise((resolve, reject) => {
      const birthday = moment(this.state.dob);
      const age = moment().diff(birthday, "years");
      if (age >= 21) {
        resolve(true);
      } else {
        reject("You must be 21 or older to access this page.");
      }
    });
  }

  render() {
    if (this.state.routeToGame) {
      return <Redirect to="/game" />;
    }

    return (
      <div>
        <Header />
        <form onSubmit={this.handleSubmit} className="contaner">
          <label>
            Name:
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Your Name"
              onChange={this.inputChange}
            />
          </label>
          <br />
          <label>
            Email:
            <input
              type="text"
              name="email"
              className="form-control"
              placeholder="Your email"
              onChange={this.inputChange}
            />
          </label>
          <br />
          <label>
            Date Of Birth:
            <input
              type="date"
              name="dob"
              className="form-control"
              value={this.state.dob}
              onChange={this.inputChange}
            />
            {this.state.ageErr ? <div><h3>You must be 21 or older!</h3></div> : ""}
          </label>

          <br />
          <input type="submit" value="Submit" />
        </form>
        <img src="/images/drunk1.jpg" width="50%"  />
        <img src="/images/drunk2.jpg" width="50%" />
      </div>
    );
  }
}
export default Landing;
