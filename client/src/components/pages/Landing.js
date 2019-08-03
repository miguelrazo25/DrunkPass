import React from "react";
import "./Landing.css";
import Header from "../header/Header"
const axios = require("axios");
const moment = require("moment");

class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", email: "", dob: "", ageErr: false };
  }

  inputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
    console.log(event.target.value);
  };

  handleSubmit = (event) => {
    event.preventDefault();

    this.validateDob()
      .then(() => {
        axios
          .post("/user", {
            name: this.state.name,
            email: this.state.email,
            dob: this.state.dob
          })
          .then(function(response) {
            console.log(response);
          })
          .catch(function(error) {
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
      const age = moment().diff(birthday, 'years');
      if (age >= 21) {
        resolve(true);
      } else {
        reject("You must be 21 or older to access this page.")
      }
    });
  }

  render() {
    return (
      <div>
      <Header/>
        <form onSubmit={this.handleSubmit} className="contaner">
          <label>
            Name:
            <input type="text" name="name" className="form-control" placeholder="Your Name"/>
          </label>
          <br />
          <label>
            Email:
            <input type="text" name="email" className="form-control" placeholder="Your email"/>
          </label>
          <br />
          <label>
            DOB:
            <input
              type="date"
              name="dob"
              className="form-control"
              value={this.state.dob}
              onChange={this.inputChange}
            />
          {this.state.ageErr ? <div>You must be 21 or older!</div> : ""}
          </label>

          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
export default Landing;
