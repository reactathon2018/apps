import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (

            <div className="container-fluid">
                <div className="row">
                    <div className="banner-job">
                        <div className="banner-overlay"></div>
                        <div className="container text-center">
                            <h1 className="title">The Easiest Way to Get Your New Job</h1>
                            <h3>We have jobs vacancies right now</h3>
                            <div className="banner-form">
                                <form action="#">
                                    <input type="text" className="form-control" placeholder="Type your key word" />
                                    <div className="dropdown category-dropdown">
                                        <a data-toggle="dropdown" href="#"><span className="change-text">Job Location</span> <i className="fa fa-angle-down"></i></a>
                                        <ul className="dropdown-menu category-change">
                                            <li><a href="#">Location 1</a></li>
                                            <li><a href="#">Location 2</a></li>
                                            <li><a href="#">Location 3</a></li>
                                        </ul>
                                    </div>
                                    <button type="submit" className="btn btn-primary" value="Search">Search</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default Header;