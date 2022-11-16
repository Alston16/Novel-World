import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import logo from '../images/icon.png'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class NavBar extends React.Component {
    constructor(props) {
        super(props);

        this.search=React.createRef()
    }
    redirect = () => {
        window.location.href = "/novel?name=" + this.search.current.value
    }
    render() {
        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">
                        <img
                            src={logo}
                            width="35"
                            height="35"
                            className="d-inline-block align-top"
                            alt="logo"
                        />
                        Novel World
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto" />
                        <Form className="d-flex">
                            <input type={"search"} ref={this.search} placeholder={"Search"} style={{marginRight:"10px",borderRadius:"10px"}}/>
                            <Button variant="outline-success" onClick={this.redirect}>Search</Button>
                        </Form>

                        <Nav>
                            <Nav.Link href="/login">Login</Nav.Link>
                            <Nav.Link eventKey={2} href="/register">
                                Register
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }
}
export default NavBar;