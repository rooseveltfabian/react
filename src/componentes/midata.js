import React, { Component } from 'react';
import { Table } from 'reactstrap';
import axios from 'axios';

class Midata extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        miData: []
    }

    componentDidMount() {
        console.log('entro a mi data');
        axios.get('http://env-2385246.jelastic.saveincloud.net/clientes')
            .then((response) => {
                // handle success
                this.setState({ miData: response.data })
                console.log(response);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    }

    render() {
        return (
            <div>
                <Table dark hover>
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Documento</th>
                            <th scope="col">Profesion</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.miData.map((dato) => (
                                <tr>
                                    <th scope="row">{dato.id}</th>
                                    <td>{dato.nombres}</td>
                                    <td>{dato.documento}</td>
                                    <td>{dato.profesion}</td>
                                </tr>

                            ))
                        

                        }


                    </tbody>
                </Table>
            </div>
        );
    }
}
export default Midata;