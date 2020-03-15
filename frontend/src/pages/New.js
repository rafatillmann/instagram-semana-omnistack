import React, { Component } from 'react';
import api from '../services/Api.js'

import "./New.css";

class New extends Component {
    state ={
        author: '',
        place: '',
        description: '',
        hashtags: '',
        image: null
    };

    handleSubmit = async e => {
        e.preventDefault();

        const data = new FormData();

        data.append('author', this.state.author);
        data.append('place', this.state.place);
        data.append('description', this.state.description);
        data.append('hashtags', this.state.hashtags);
        data.append('image', this.state.image);
        
        await api.post('posts', data);

        this.props.history.push('/');
    }

    handleImageChange = e => {
        this.setState({ image: e.target.files[0]});
    }

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value});
    }

    render() {
        return (
            <section id="form">
                <form id="new-post" onSubmit={this.handleSubmit}>

                    <span>Name</span>
                    <input type="text"
                        name="author"
                        onChange={this.handleChange}
                        value={this.state.author} />

                    <span>Location</span>
                    <input type="text"
                        name="place"
                        onChange={this.handleChange}
                        value={this.state.place} />

                    <span>Description</span>
                    <input type="text"
                        name="description"
                        onChange={this.handleChange}
                        value={this.state.description} />

                    <span>Hagstags</span>
                    <input type="text"
                        name="hashtags"
                        onChange={this.handleChange}
                        value={this.state.hashtags} />

                    <span>Upload your image</span>
                    <input type="file"
                        name="image" 
                        onChange={this.handleImageChange}/>

                    <button type="submit"> Share </button>
                </form>
            </section>
        );
    }
}

export default New;