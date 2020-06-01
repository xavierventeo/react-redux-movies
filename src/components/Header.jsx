import React, {Component} from 'react';
import './Header.css';
import Controls from './Controls' 

class Header extends Component {

    render() {
        return (
            <header className="header">
                <Controls/>
            </header>
        );
    }
}

export default Header;



