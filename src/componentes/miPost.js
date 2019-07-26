import React, { Component } from 'react';
import MiPostVista from './miPostVista';

class MiPost extends Component {
    constructor(props){
        super(props);
    }
    state = {
        posts:[]
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then((data) => {
            this.setState({ posts: data });
        })
        .catch(console.log)
    }
    render() {
        return (  
            <MiPostVista posts={this.state.posts} />
        )
    }
}

export default MiPost;