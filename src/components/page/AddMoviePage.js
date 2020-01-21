import React, { Component } from 'react';
import {connect} from 'react-redux';
import AddMovieForm from '../AddMovieForm';
import {onAddMovie} from '../../actions/addMovie'
import {
    Container,
    Header,
    Divider
  } from 'semantic-ui-react'


class AddMoviePage extends Component {
    componentDidUpdate(prevProps, prevState) {
        
        this.props.addMovie.done && this.props.history.push('/movies');
    }
    
    
    render() {
        
        return (
            <div>
                <Container text style={{ marginTop: '7em' }}>
                    <Header as='h1'>Add Movie</Header>
                    <Divider/>
                    <AddMovieForm onAddMovie={this.props.onAddMovie} addMovie={this.props.addMovie}/>
                </Container>
            
            </div>
        );
    }
}


const mapPropsToState=({addMovie})=>
{
    return {
        addMovie
    };
}

const mapDispatchToState={
    onAddMovie
}

export default connect(mapPropsToState,mapDispatchToState)(AddMoviePage);
