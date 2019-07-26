import React from 'react';
import { Link } from 'react-router-dom';

function Navegacion(){
    return(
        <nav>
            <ul>
                <Link to='/'> <li>Inicio</li> </Link>
                <Link to='/'> <li>Tierra</li> </Link>
                <Link to='/espacio'> <li>Espacio</li> </Link>
                <Link to='/midata'> <li>Mi Data</li> </Link>
            </ul>
        </nav>
    );
}

export default Navegacion;