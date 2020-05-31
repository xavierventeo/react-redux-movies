import React, {Component} from 'react';
import { connect } from 'react-redux';
import { showGenresAction } from '../actions/genresAction';


class Genres extends Component {
    constructor(props) {
        super(props); 
    }

    componentDidMount() {
        //Aquí hacer llamada al action
        this.props.showGenres();
    }   

    render() {
        return (
            <div>
                { (this.props.genres).map( (genre) => (
                    <div>{genre.name}</div> 
                ))}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    genres: state.genres,
});
    
const mapDispatchToProps = (dispatch) => ({
    showGenres : () => showGenresAction(dispatch)
});

const connectedGenres = connect(mapStateToProps, mapDispatchToProps)(Genres);

export default connectedGenres;
  