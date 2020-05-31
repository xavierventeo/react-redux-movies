import React from 'react';
import Genres from './Genres';

class Controls extends React.Component {
    constructor(props) {
        super(props); 
    }

    render() {
        return <div>Hello movies<Genres/></div>;
    }
}
export default Controls;