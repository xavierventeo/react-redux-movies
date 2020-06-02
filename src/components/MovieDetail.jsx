import React, {Component} from 'react';
import { Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap';

class MovieDetail extends Component {
   
    render() {
        console.log(this.props.match.params.id);
        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/">	← Ir a la página principal</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
            </Navbar>       
        );
    }
}

export default MovieDetail;
