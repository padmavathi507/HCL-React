import React, { Component } from 'react';

import User from '../model/User';


class Register extends Component {

    user: User

    

    userPasswordRef
    userRetypePasswordRef
    userMobileRef
    userAddressRef
    userPincodeRef


    constructor() {
        super();
        this.user = new User()
        this.state = {
            user: this.user,
            
            userNameError: false,
            userEmailError: false,
            userPasswordError: false,
            lengthError: false,
            userRetypePasswordError: false,
            matchError: false,
            userMobileError: false,
            phoneLengthError: false,
            userAddressError: false,
            userPincodeError: false,
            submitFlag: false,
            disabledFlag: true,

        }
    }

    handleSubmit(event) {
        this.setState({
            submitFlag: true
        })
        event.preventDefault();

    }
    
    handleuserNameChange(event) {
        // this.user.email = this.emailRef.value

        this.user.userName = event.target.value
        this.setState({
            user: this.user,
            userNameError: (this.user.userName === "") ? true : false,
            disabledFlag: (this.user.userId === "" || this.user.userName === "" || this.user.userEmail === "" || this.user.userPassword === "" || this.state.userRetypePassword === "" || this.state.userMobile === "" || this.state.userAddress === "" || this.state.userPincode === "") ? true : false
        })
    }
    handleuserEmailChange(event) {
        // this.user.email = this.emailRef.value

        this.user.userEmail = event.target.value
        this.setState({
            user: this.user,
            userEmailError: (this.user.userEmail === "") ? true : false,
            disabledFlag: (this.user.userId === "" || this.user.userName === "" || this.user.userEmail === "" || this.user.userPassword === "" || this.state.userRetypePassword === "" || this.state.userMobile === "" || this.state.userAddress === "" || this.state.userPincode === "") ? true : false
        })
    }


    handleuserPasswordChange() {
        this.user.userPassword = this.userPasswordRef.value
        this.setState({
            user: this.user,
            userPasswordError: (this.user.userPassword === "") ? true : false,
            lengthError: (this.user.userPassword <= 6) ? true : false,
            disabledFlag: (this.user.userId === "" || this.user.userName === "" || this.user.userEmail === "" || this.user.userPassword === "" || this.state.userRetypePassword === "" || this.state.userMobile === "" || this.state.userAddress === "" || this.state.userPincode === "") ? true : false
        })
    }
    handleuserRetypePasswordChange() {
        this.user.userRetypePassword = this.userRetypePasswordRef.value
        this.setState({
            user: this.user,
            userRetypePasswordError: (this.user.userRetypePassword === "") ? true : false,
            matchError: (this.user.userRetypePassword !== this.user.userPassword) ? true : false,
            disabledFlag: (this.user.userId === "" || this.user.userName === "" || this.user.userEmail === "" || this.user.userPassword === "" || this.state.userRetypePassword === "" || this.state.userMobile === "" || this.state.userAddress === "" || this.state.userPincode === "") ? true : false
        })
    }

    handleuserMobileChange() {
        this.user.userMobile = this.userMobileRef.value
        this.setState({
            user: this.user,
            userMobileError: (this.user.userMobile === "") ? true : false,
            phoneLengthError: (this.user.userMobile.length < 10) ? true : false,
            disabledFlag: (this.user.userId === "" || this.user.userName === "" || this.user.userEmail === "" || this.user.userPassword === "" || this.state.userRetypePassword === "" || this.state.userMobile === "" || this.state.userAddress === "" || this.state.userPincode === "") ? true : false
        })
    }
    handleuserAddressChange() {
        this.user.userAddress = this.userAddressRef.value
        this.setState({
            user: this.user,
            userAddressError: (this.user.userAddress === "") ? true : false,

            disabledFlag: (this.user.userId === "" || this.user.userName === "" || this.user.userEmail === "" || this.user.userPassword === "" || this.state.userRetypePassword === "" || this.state.userMobile === "" || this.state.userAddress === "" || this.state.userPincode === "") ? true : false
        })
    }
    handleuserPincodeChange() {
        this.user.userPincode = this.userPincodeRef.value
        this.setState({
            user: this.user,
            userPincodeError: (this.user.userPincode === "") ? true : false,

            disabledFlag: (this.user.userId === "" || this.user.userName === "" || this.user.userEmail === "" || this.user.userPassword === "" || this.state.userRetypePassword === "" || this.state.userMobile === "" || this.state.userAddress === "" || this.state.userPincode === "") ? true : false
        })
    }



    render() {
        return (
            <div className="container">
                <div className="jumbotron py-3 my-4">
                    <p className="display-4 text-center mb-0">Sign Up Form</p>
                </div>
                <form onSubmit={(event) => this.handleSubmit(event)}>

                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" className="form-control" placeholder="Enter name" value={this.state.user.userName} onChange={(event) => this.handleuserNameChange(event)} />
                        {/* ref={(input) => this.emailRef = input} */}
                        {
                            (this.state.userNameError) ?
                                <div className="alert alert-danger" role="alert">
                                    name can't be empty
 </div> : null
                        }
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="text" className="form-control" placeholder="Enter email" value={this.state.user.userEmail} onChange={(event) => this.handleuserEmailChange(event)} />
                            {/* ref={(input) => this.emailRef = input} */}
                            {
                                (this.state.userEmailError) ?
                                    <div className="alert alert-danger" role="alert">
                                        Email can't be empty
 </div> : null
                            }

                        </div>
                        <div className="form-group">
                            <label >Password</label>
                            <input type="password" className="form-control" placeholder="Password" ref={(input) => this.userPasswordRef = input} value={this.state.user.userPassword} onChange={() => this.handleuserPasswordChange()} />
                            {
                                (this.state.userPasswordError) ?
                                    <div className="alert alert-danger" role="alert">
                                        Password can't be empty
                 </div> : (this.state.lengthError) ?
                                        <div className="alert alert-danger" role="alert">
                                            Password must should be greater than 6
                   </div> : null
                            }
                        </div>
                        <div className="form-group">
                            <label >Re-Type Password</label>
                            <input type="password" className="form-control" placeholder="Password" ref={(input) => this.userRetypePasswordRef = input} value={this.state.user.userRetypePassword} onChange={() => this.handleuserRetypePasswordChange()} />
                            {
                                (this.state.userRetypePasswordError) ?
                                    <div className="alert alert-danger" role="alert">
                                        Retype Password can't be empty
                  </div> : (this.state.matchError) ?
                                        <div className="alert alert-danger" role="alert">
                                            Retype password must should be match the password
                    </div> : null
                            }
                        </div>
                       
                        <div className="form-group">
                            <label >Mobile</label>
                            <input type="text" className="form-control" placeholder="Enter Phone Number" ref={(input) => this.userMobileRef = input} value={this.state.user.userMobile} onChange={() => this.handleuserMobileChange()} />
                            {
                                (this.state.userMobileError) ?
                                    <div className="alert alert-danger" role="alert">
                                        phoneNumber can't be empty
                 </div> : (this.state.phoneLengthError) ?
                                        <div className="alert alert-danger" role="alert">
                                            phoneNumber must shouldbe 10 digits

                 </div> : null
                            }
                        </div>

                        <div className="form-group">
                            <label >Address</label>
                            <input type="text" className="form-control" placeholder="Enter address" ref={(input) => this.userAddressRef = input} value={this.state.user.userAddress} onChange={() => this.handleuserAddressChange()} />
                            {
                                (this.state.userAddressError) ?
                                    <div className="alert alert-danger" role="alert">
                                        address can't be empty
                  
                    </div> : null
                            }

                        </div>
                        <div className="form-group">
                            <label >Pincode</label>
                            <input type="text" className="form-control" placeholder="Enter pincode" ref={(input) => this.userPincodeRef = input} value={this.state.user.userPincode} onChange={() => this.handleuserPincodeChange()} />
                            {
                                (this.state.userPincodeError) ?
                                    <div className="alert alert-danger" role="alert">
                                        Pincode can't be empty
                  
                    </div> : null
                            }

                        </div>

                       

                        <button className="btn btn-primary" type="submit" disabled={this.state.disabledFlag}>Submit</button>

                </form>
                   
                

             </div>
        );
    }
}

export default Register;