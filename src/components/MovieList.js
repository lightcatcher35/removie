import React from 'react';
import MovieItem from './MovieItem';
import {Warn} from './infos';
import { Grid} from 'semantic-ui-react'
import HashLoader from "react-spinners/HashLoader";
import PropTypes from 'prop-types';

const MovieList = ({movies,onDeleteMovie}) => {
    const movieDiv=(
        <Grid columns={3} divided >
        {
            movies.movieList.map(movie=>
                {
                    return(<MovieItem key={movie.id} movie={movie} onDeleteMovie={onDeleteMovie} />)
                })
        }  
        </Grid>
    );
    const loader=(
        <Grid centered>
            <Grid.Column width={2}>
                <HashLoader></HashLoader>
            </Grid.Column>
        </Grid>
    );
    
    return (
        
        <div>
                

            
            {
                movies.fetching?loader:null
            } 
            {
                movies.fetched?movieDiv:null
            } 
            {
                movies.error?<Warn title={movies.error}/>:null
            } 
                        
        </div>
    );
}
MovieItem.propTypes = {
    movie:PropTypes.shape({}).isRequired,
    onDeleteMovie:PropTypes.func.isRequired
};
export default MovieList;