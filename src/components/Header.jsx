import React, {Component} from 'react';
import Genres from './Genres'
 

class Header extends Component {

    render() {
        return (
            <header>
                <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light">
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse header" id="navbarTogglerDemo01">
                        <div>
                            <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                                <li class="nav-item">
                                    <a class="nav-link" onclick="getPopularMovies()">Películas Populares<span class="sr-only">(current)</span></a>
                                </li>
                            </ul>        
                        </div>
                        <div class="search">
                            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" id="search"/>
                            <button class="btn btn-outline-success my-2 my-sm-0" onclick="getFindMovies()">Buscar&nbsp;Películas</button>
                        </div>
                    </div>
                </nav>   

                <nav>
                    <Genres/>
                </nav> 
            </header>
        );
    }
}

export default Header;



