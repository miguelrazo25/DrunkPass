import React from 'react';
import "./Landing.css";
const axios=require('axios');




class Landing extends React.Component {

constructor(props){
    super(props);
    this.state={name:"",email:"",dob:""}
}

inputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
    console.log(event.target.value)
}

handleSubmit =()=>{



    axios.post('/user', {
        name: '',
        email: ''
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
}
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
              <label>
                Name:
                <input type="text" name="name" />
              </label><br/>
              <label>
                Email:
                <input type="text" name="email"  />
              </label><br/>
              <label>
                DOB:
                <input type="date" value={this.state.dob} onChange={this.inputChange} name="dob"/>
                </label>
              <br/>             
              <input type="submit" value="Submit" />
            </form>
          );
    }
}

export default Landing;