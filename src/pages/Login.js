import React from "react";
import axios from 'axios';

import "../styles/Login.css";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e) {
        e.preventDefault();
        const { username, password } = this.state;
        axios.get('http://localhost:8080/users/login',{params: {username: username,password: password}})
            .then(res => {
                if(res.data==='')
                {
                    alert("Invalid Username");
                }
                else
                {
                    if(res.data)
                    {
                        window.location.href="/"
                    }
                    else
                    {
                        alert("Invalid Password")
                    }
                }
            })
            .catch((error) => {
                console.log(error);
            })

    }
    render() {
        return (
            <div className="main">
                <form onSubmit={this.handleSubmit}>
                    <p className="sign" align="center">Log In</p>

                    <div className="un">
                        <label>Username</label>
                        <input
                            type="text"

                            className="form-control"
                            placeholder="Enter username"
                            onChange={(e) => this.setState({ username: e.target.value })}
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
                        <button type="submit" className="btn btn-primary">
                            Login
                        </button>
                    </div>

                </form>
            </div>
        );
    }
}
export default Login;