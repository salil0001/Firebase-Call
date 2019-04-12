import React, { Component } from 'react'
import './Signin.css';
export default class SignUp extends Component {
    state={
        email:"",
        password1:"",
        firstname:"",
        lastname:""
    
    }
    Handlesubmit=(e)=>
    {
        e.preventDefault();
        // console.log(this.state);
    }
    HandleChange=(e)=>
    {
        this.setState({
            [e.target.id]:e.target.value
        })

    }

    render() {
        return (
            <div className="col-md-6 offset-4 col-sm-12 col-lg-5 formdimensions">
                <form onSubmit={this.Handlesubmit}>
                   
                    <div className="form-group">
                        <label>First Name</label>
                        <input type="text" required  className="form-control" id="firstname" placeholder="First Name" onChange={this.HandleChange} />
                    </div>
                   
                    <div className="form-group">
                        <label>Last Name</label>
                        <input type="text" required  className="form-control" id="lastname" placeholder="Last Name" onChange={this.HandleChange} />
                    </div>
                    <div className="form-group">
                        <label >Email address</label>
                        <input type="email" required className="form-control" id="email" onChange={this.HandleChange} aria-describedby="emailHelp" placeholder="Enter email" />
                         </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" required  className="form-control" id="password1" placeholder="Password" onChange={this.HandleChange} />
                    </div>
                   
                    <button>Submit</button>
                </form>

            </div>
        )
    }
}
