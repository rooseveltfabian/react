import React, {Component} from 'react';

class MiPostVista extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div>
                <h1>POSTS</h1>
               {
                   this.props.posts.map((post) => (
                  <div className='contendor'>      
                    <h4>{post.title}</h4>   
                    <p>{post.body}</p>
                   </div>
                   ))
               }                 
            </div>
        )
    };
}

export default MiPostVista;