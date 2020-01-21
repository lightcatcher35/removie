import React, { Component } from 'react';
import {connect} from 'react-redux';
import UpdateMovieForm from '../UpdateMovieForm';
import {onGetMovie} from '../../actions/movies'
import {onUpdateMovie} from '../../actions/updateMovie';
import {
    Container,
    Header,
    Divider
  } from 'semantic-ui-react'


class UpdateMoviePage extends Component {
    state={
        movie:{
            id:"",
            title:"",
            type:"",
            cover:""

        }
    }
    


    componentDidMount() {
        
        
        if(this.props.getMovie===undefined){
            
            this.props.onGetMovie(this.props.match.params.id);
            
        }
    }
    componentDidUpdate(prevProps, prevState) {
        
        this.props.done && this.props.history.push('/movies');
    }

    
    render() {
        
        return (
            <div>
                <Container text style={{ marginTop: '7em' }}>
                    <Header as='h1'>Update Movie</Header>
                    <Divider/>
                    
                    <UpdateMovieForm 
                        movie={this.props.getMovie===undefined?this.props.movie:this.props.getMovie}
                        onUpdateMovie={this.props.onUpdateMovie}
                        progressing={this.props.progressing}
                        done={this.props.done}
                        deleteMovie={this.deleteMovie}/>
                </Container>
            
            </div>
        );
    }
}


const mapPropsToState=({movies},props)=>
{
    return {
        progressing:movies.progressing,
        done:movies.done,
        movie:Array.isArray(movies.movie)?movies.movie[0]:"",
        getMovie:movies.movieList.find(item=>item.id===props.match.params.id)
    };
}

const mapDispatchToState={
    onGetMovie,
    onUpdateMovie
}

export default connect(mapPropsToState,mapDispatchToState)(UpdateMoviePage);
