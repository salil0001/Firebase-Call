import React, { Component } from 'react'
import './Signin.css';
import {googleLogin} from './auth';

export default class SignIn extends Component {
    state = {
        email: "",
        password1: ""

    }
    Handlesubmit = (e) => {
        e.preventDefault();
        // console.log(this.state);
    }
    HandleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })

    }

    render() {
        return (
            <div className="col-md-6 offset-4 col-sm-12 col-lg-5 formdimensions">
                <form onSubmit={this.Handlesubmit}>
                    <div className="form-group">
                        <label >Email address</label>
                        <input type="email" required className="form-control" id="email" onChange={this.HandleChange} aria-describedby="emailHelp" placeholder="Enter email" />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" required className="form-control" id="password1" placeholder="Password" onChange={this.HandleChange} />
                    </div>
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label">Remember Me</label>
                    </div>
                    <button>Submit</button>
                </form>
                <div>
                    <button onClick={googleLogin}>Login with Google</button>
                 
                </div>

            </div>
        )
    }
}
