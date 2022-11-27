import React from "react";

import '../styles/Register.css'

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email:"",
      contact:"",
      password: "",

    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    const { username,email,contact, password } = this.state;
    //console.log(username,email,contact, password);
    const result=fetch('http://localhost:8080/users/register', {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        
      },
      body: JSON.stringify({
        username,
        email,
        contact,
        password,
      }),
    })
      .then((res) => res.json())
    
        console.log(result);
        window.location.href="/"
      
  }
  render() {
    return (
        <div className="main">
        <p className="sign" align="center">Sign Up</p>
      <form className="form1" onSubmit={this.handleSubmit}>
        

        <div className="un">
          <label>Username</label>
          <input
            type="text"

            className="form-control"
            placeholder="Enter username"
            onChange={(e) => this.setState({ username: e.target.value })}
          />
        </div>
        <div className="email">
          <label>Email-Address</label>
          <input
            type="email"

            className="form-control"
            placeholder="Enter Email"
            onChange={(e) => this.setState({ email: e.target.value })}
          />
        </div>
        <div className="conc">
          <label>contact</label>
          <input
            type="number"

            className="form-control"
            placeholder="Enter number"
            onChange={(e) => this.setState({ contact: e.target.value })}
          />
        </div>

        <div className="pass">
          <label>Password</label>
          <input
            type="password"
       
            className="form-control"
            placeholder="Enter password"
            onChange={(e) => this.setState({ password: e.target.value })}
          />
        </div>

        
        <div className="d-grid">
          <button type="submit" className="btn btn-primary" >
            Register
          </button>
        </div>
       
      </form></div>
    );
  }
}
export default Register;