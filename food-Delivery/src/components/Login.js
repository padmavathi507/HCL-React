import React, { Component } from 'react';
import axios from 'axios';

import User from '../model/User';

class Login extends Component {

    user: User

    constructor() {
        super()
        this.user = new User()
        this.state = {
            user: this.user
        }
    }

    handleSubmit(event) {
        event.preventDefault()
        axios.request({
            url: "http://localhost:8080/user/signin",
            method: "post",
            auth: {
                username: this.state.user.userMobile,
                password: this.state.user.userPassword
            }
        }).then(res => {
            console.log(res.data)
        })
    }

    handlePhoneChange(event) {
        this.user.userMobile = event.target.value
        this.setState({
            user: this.user
        })
    }

    handlePasswordChange(event) {
        this.user.userPassword = event.target.value
        this.setState({
            user: this.user
        })
    }

    render() {

        return (

            <div className="container">
                <div className="jumbotron py-3">
                    <p className="h4 text-center">Login</p>
                </div>

                <form onSubmit={(event) => this.handleSubmit(event)}>

                    <fieldset>
                        <div className="form-group">
                            <label>Phone Number</label>
                            <input type="text" className="form-control" placeholder="Enter Phone Number" value={this.state.user.userMobile} onChange={(event) => this.handlePhoneChange(event)} />

                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control" placeholder="Password" value={this.state.user.userPassword} onChange={(event) => this.handlePasswordChange(event)} />
                        </div>

                        <button type="submit" className="btn btn-primary" >Login</button>
                    </fieldset>
                </form>
            </div>

        );

    }

}

export default Login;