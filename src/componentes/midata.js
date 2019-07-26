import React, {Component} from 'react';
import { Table } from 'reactstrap';
import axios from 'axios';

class Midata extends Component{
    constructor(props){
        super(props);
    }
    state = {
        miData:[]
    }

    componentDidMount(){
        console.log('entro a mi data');
        axios.get('http://env-2385246.jelastic.saveincloud.net/clientes')
            .then( (response)=> {
                // handle success
                this.setState({miData: response.data})
                console.log(response);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    }

    render(){
        return(
            <h2>TEXTO</h2>
        );
    }
}
export default Midata;