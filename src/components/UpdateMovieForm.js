import React, { Component } from 'react';
import { Button, Form ,Image,Divider} from 'semantic-ui-react'

class UpdateMovieForm extends Component {
    
    state={
        id:this.props.movie?this.props.movie.id:'',
        title:this.props.movie?this.props.movie.title:'',
        type:this.props.movie?this.props.movie.type:'',
        cover:this.props.movie?this.props.movie.cover:'',
        errors:""
    }
    componentWillReceiveProps(nextProps) {
        
        if(nextProps.movie)
        {
            this.setState({
                id:nextProps.movie.id,
                title:nextProps.movie.title,
                type:nextProps.movie.type,
                cover:nextProps.movie.cover,
                errors:""
            })

        } 
    }
    
    handleChance=(e)=>
    {
        this.setState({
            [e.target.name]:e.target.value
        })
        if(e.target.name==="cover")
        {

        }
    }
    onSubmitForm=(e)=>
    {
        const errors=this.validate();
        this.setState({errors});

        if(Object.keys(errors).length===0)
        {
            //console.log(this.state);
            this.props.onUpdateMovie(this.state);
        }

    }
    validate=()=>
    {
        const errors={};
        if(!this.state.title) errors.title="Can't be blank.";
        if(!this.state.type) errors.type="Can't be blank.";
        if(!this.state.cover) errors.cover="Can't be blank.";
        return errors;
    }
    
    
    render() {

        const {title,type,cover,errors}=this.state;
        return (
            <div>
                <Form onSubmit={this.onSubmitForm} loading={this.props.progressing}>
                    <Form.Field error={!!errors.title}>
                        <label>Title</label>
                        <input name="title" value={title} onChange={this.handleChance} placeholder='Title' />
                    </Form.Field>
                    <Form.Field error={!!errors.type}>
                        <label>Film Type</label>
                        <input name="type" value={type} onChange={this.handleChance}  placeholder='Film Type' />
                    </Form.Field>
                    <Divider/>
                    <Form.Field>
                        <Image src={cover} size='small' wrapped />
                    </Form.Field>
                    <Form.Field error={!!errors.cover}>
                        <label >Cover URL</label>
                        <input name="cover" value={cover} onChange={this.handleChance}  placeholder='Cover URL' />
                    </Form.Field>
                    

                    <Button primary type='submit'>Submit</Button>
                    <Button type='button'>Cancel</Button>
                </Form> 
            </div>
        );
    }
}


UpdateMovieForm.propTypes = {
    
};


export default UpdateMovieForm;
