import React from 'react';
import { connect } from 'react-redux';
import { Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap';
import { getPopularMoviesAction, getSearchMoviesAction } from '../actions/moviesAction';
import Genres from './Genres' 


class Controls extends React.Component {
    searchMovies() {
        let fieldSearchCriteria = document.getElementById("search").value.trim();
        if (fieldSearchCriteria) {
            this.props.getSearchMovies(fieldSearchCriteria);
        }
        document.getElementById("search").value = "";
    }

    render() {
        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/">Movies</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="" onClick={() => this.props.getPopularMovies()}>Top 10 Películas Populares</Nav.Link>
                        <Genres/>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" id="search"/>
                        <Button variant="outline-success" onClick={() => this.searchMovies()}>Buscar&nbsp;Películas</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    getPopularMovies : () => getPopularMoviesAction(dispatch),
    getSearchMovies : (searchCriteria) => getSearchMoviesAction(dispatch, searchCriteria)
});

  const connectedControls = connect(null, mapDispatchToProps)(Controls);

export default connectedControls;
  