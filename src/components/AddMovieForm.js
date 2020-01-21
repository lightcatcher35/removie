import React, { Component } from 'react';
import { Button, Form ,Image,Divider} from 'semantic-ui-react'

class AddMovieForm extends Component {
    
    state={
        title:"",
        type:"",
        cover:"",
        errors:""
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
            this.props.onAddMovie(this.state);
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
                <Form onSubmit={this.onSubmitForm} loading={!!this.props.addMovie.fetching}>
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


AddMovieForm.propTypes = {
    
};


export default AddMovieForm;
