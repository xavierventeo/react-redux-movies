import React, {Component} from 'react';
import Controls from './Controls' 
import MoviesList from './MoviesList' 
import { Container } from 'react-bootstrap';

class Header extends Component {

    render() {
        return (
            <div key="main" id="main">
                <Controls/>
                <MoviesList/>
            </div>
        );
    }
}

export default Header;



