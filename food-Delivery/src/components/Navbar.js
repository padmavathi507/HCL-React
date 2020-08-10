import React, { Component } from 'react';
import Register from './Register';
import Login from './Login';

import Restaurants from './Restaurants';
import RestaurantItems from './RestaurantItems';


import {
    BrowserRouter as Router,
    Route,
    NavLink
} from 'react-router-dom';


class Navbar extends Component {

    render() {
        return (
            <Router>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <NavLink className="navbar-brand" to="/Home" activeClassName="active"><b>Food-App</b></NavLink>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarColor01">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/Restaurants" activeClassName="active"><i className="fas fa-hotel"></i>
                                    <span className="ml-2">Restaurants</span></NavLink>
                            </li>


                            <li className="nav-item">
                                <NavLink className="nav-link" to="/Login" activeClassName="active"><i className="fas fa-user"></i>
                                    <span className="ml-2">Login </span></NavLink>

                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/Register" activeClassName="active"><i className="fas fa-user-plus"></i>
                                    <span className="ml-2">Sign up</span></NavLink>
                            </li>
                            
                        </ul>
                        <form class="form-inline my-2 my-lg-0">
                            <input class="form-control mr-sm-2" type="text" placeholder="Search"/>
                                <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
                        </form>
                        </div>
                    </nav>
                    <Route exact path="/Restaurants" component={Restaurants} />

                    <Route exact path="/Login" component={Login} />
                    <Route exact path="/Register" component={Register} />
                    <Route exact path="/restaurants/menu/:restaurantId" component={RestaurantItems} />
                    
                    
                    
            </Router>
        );
    }
}

export default Navbar;