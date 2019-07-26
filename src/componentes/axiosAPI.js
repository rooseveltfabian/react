import React, { Component } from 'react';
import axios from 'axios';

class AxiosAPI extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log('entro al mount');
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(function (response) {
                // handle success
                console.log(response);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });

            axios.get('http://env-2385246.jelastic.saveincloud.net/clientes')
            .then(function (response) {
                // handle success
                console.log(response);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    }
    render(){
        return (<div><p>Axios</p></div>)
    }
}

export default AxiosAPI;