import React from 'react';

class Controls extends React.Component {
    constructor(props) {
        super(props); 
    }

    render() {
        return (
            <div className="nav-principal">
                <div>
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" onClick="getPopularMovies()">Películas Populares</a>
                        </li>
                    </ul>        
                </div>
                <div className="search">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" id="search"/>
                    <button className="btn btn-outline-success" onClick="getFindMovies()">Buscar&nbsp;Películas</button>
                </div>
            </div>            
        );
    }
}
export default Controls;