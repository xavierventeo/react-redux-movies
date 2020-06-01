import React, {Component} from 'react';


class MovieDetail extends Component {
   
    render() {
        console.log(this.props.match.params.id);
        return (
        <div>Movie Detail {this.props.match.params.id}</div>
        );
    }
}

export default MovieDetail;
