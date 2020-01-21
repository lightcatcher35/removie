import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { Card, Image, GridColumn,Button,Icon, Divider} from 'semantic-ui-react'
import PropTypes from 'prop-types';

class MovieItem extends Component {
    onDeleteMovie=()=>
    {

        this.props.onDeleteMovie(this.props.movie.id);

    }
    render() {
        return (
            <GridColumn>
        <Card>
            <Image src={this.props.movie.cover} wrapped ui={false} />
            <Card.Content>
            <Card.Header>{this.props.movie.title}</Card.Header>
            <Card.Meta>
                <span className='date'>{this.props.movie.type}</span>
            </Card.Meta>
            
            <Divider/>
                <Button animated as={Link} to={`/movies/update/${this.props.movie.id}`} >
                    <Button.Content visible>Update</Button.Content>
                    <Button.Content hidden>
                        <Icon name='arrow right' />
                    </Button.Content>
                </Button>
                <Button animated='vertical' onClick={this.onDeleteMovie}>
                    <Button.Content hidden>Delete</Button.Content>
                    <Button.Content visible>
                        <Icon name='trash' />
                    </Button.Content>
                </Button>
            </Card.Content>
        </Card></GridColumn>
        );
    }
}

MovieItem.propTypes = {
    movie:PropTypes.shape({
        id:PropTypes.string.isRequired,
        title:PropTypes.string.isRequired,
        cover:PropTypes.string.isRequired,
        type:PropTypes.string.isRequired
    }),
    onDeleteMovie:PropTypes.func.isRequired
};



export default MovieItem;

