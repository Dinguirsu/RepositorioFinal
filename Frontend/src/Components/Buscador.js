import Axios from 'axios';
import React, {Component} from 'react';
import Buscadorcmp from './Buscadorcmp';
 
class Buscador extends Component {


    render(){    
        return(
            <div className="app container">
                <div className="jumbotron">
                    <p className="lead text-center">GALERIA DE IMAGENES</p>

                    <Buscadorcmp/>
                </div>
            </div>
        );
    }
}

export default Buscador;