import React, { Component } from 'react';
import {connect} from 'react-redux';
import MovieList from '../MovieList';
import {fetchMovies,deleteMovie} from '../../actions/movies';
import {
    Container,
    Header,
    Divider,
    Confirm
  } from 'semantic-ui-react'

class MoviesPage extends Component {
    state=
    {
        confirmOpen: false,
        deleteId:null
    }

    
    onDeleteMovie = (id) =>{

        this.setState({ confirmOpen: true,deleteId:id})
    }
    onConfirmDelete=()=>
    {

        this.props.deleteMovie(this.state.deleteId);
        this.setState({ confirmOpen: false })

    }
    onConfirmClose = () => this.setState({ confirmOpen: false })


    componentDidMount() {
        
        this.props.fetchMovies();
    }
    
    render() {
        return (
            <Container text style={{ marginTop: '7em' }}>
                <Header as='h1'>Movies</Header>
                <Divider/>
                <div>
                    <Confirm
                    open={this.state.confirmOpen}
                    onCancel={this.onConfirmClose}
                    onConfirm={this.onConfirmDelete}
                    />
                </div>
                <MovieList movies={this.props.movies} onDeleteMovie={this.onDeleteMovie}/>
            </Container>
        );
    }
}


const mapStateToProps=state=>{
    return state;
}

const mapDispatchToProps=
{
    fetchMovies,
    deleteMovie
}

export default connect(mapStateToProps,mapDispatchToProps)(MoviesPage);
