import React, {Component} from 'react';
import './Header.css';
import Controls from './Controls' 
import Genres from './Genres' 

class Header extends Component {

    render() {
        return (
            <header className="header">
                <Controls/>
                <Genres/>
            </header>
        );
    }
}

export default Header;



