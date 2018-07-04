import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class Menu extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            links: [
                { path: "/leaderBoard", text: "Leader Board", isActive: false },
            ],
        }
    }

    handleClick(i) {
        const links = this.state.links.slice();
        for (const j in links) {
            links[j].isActive = i === j;
        }
        this.setState({ links: links });
    }

    render() {
        const user = this.props.user ? this.props.user.toJS() : null;
        const isAutenticated = this.props.isAutenticated;
        return (
            <Navbar style={{
                background: 'rgb(60, 66, 82)', borderRadius: 'unset', color: '#b9b8b8', border: 'none',
                boxShadow: '0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)',
                marginBottom: '0', marginLeft: '0', zIndex: '5'
            }}>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/">
                            Gamify
                            </Link>
                    </Navbar.Brand>
                </Navbar.Header>
                {
                    (isAutenticated) ?
                        <Navbar.Collapse>
                            <Nav>
                                <NavItem style={{ color: '#b9b8b8' }} eventKey={1}>
                                    <Link to="/leaderBoard">
                                        LeaderBoard
                                        </Link>
                                </NavItem>
                            </Nav>

                            {
                                (user.role && user.role === "SA") &&

                                <Nav>
                                    <NavItem style={{ color: '#b9b8b8' }} eventKey={1}>
                                        <Link to="/admin">
                                            Admin
                                            </Link>
                                    </NavItem>
                                </Nav>
                            }
                            <Nav pullRight>
                                <NavItem style={{ color: '#b9b8b8' }} eventKey={1}>
                                    My Profile
                                </NavItem>
                            </Nav>
                            <Nav>
                                <NavItem style={{ color: '#b9b8b8' }} eventKey={1}>
                                    <Link to="/dashboard">
                                        Dashboard
                                    </Link>
                                </NavItem>
                            </Nav>
                        </Navbar.Collapse> :
                        <Navbar.Collapse>

                            <Nav>
                                <NavItem style={{ color: '#b9b8b8' }} eventKey={1}>
                                    <Link to="leaderBoard">
                                        LeaderBoard
                                        </Link>
                                </NavItem>
                            </Nav>

                            <Nav pullRight>
                                <NavItem onClick={() => this.props.showSignInMenu()} style={{ color: '#b9b8b8' }} eventKey={1}>
                                    Sign In
                            </NavItem>
                            </Nav>
                            <Nav pullRight>
                                <NavItem onClick={() => this.props.showSignUpMenu()} style={{ color: '#b9b8b8' }} eventKey={1}>
                                    Sign Up
                            </NavItem>
                            </Nav>
                        </Navbar.Collapse>
                }
            </Navbar>
        )
    }
} 