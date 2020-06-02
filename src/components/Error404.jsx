import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';


class Error404 extends Component {

    render() {
        return (
            <Container fluid>
                <h1>Error 404 - Página no encontrada</h1> <Link to="/">Ir a la página principal</Link>
            </Container>
        );
    }
}

export default Error404;



