import React, {Component} from 'react';
import {useState} from 'react';
import Axios from 'axios';
import {Redirect} from 'react-router-dom';
import '../Publics/styless.css';
    
class Submit extends Component {

    componentDidMount(){
        Axios.post('http://localhost:3000/subido/')
        .then(result=>{
            console.log(result)
        }).catch(console.log)
    }

    render(){
        
        return( 
        
       <div className="maincito">
            <form className="formcito" action="/" enctype="multipart/form-data" method="POST">   

                <input className="inputcito" type="text" placeholder="Nombre de la Foto" autocomplete="off" onpaste="return false" />
                
                <input className="inputcito" type="text" placeholder="Descripcion" autocomplete="off" onpaste="return false"/>
              
                <input type="file" name="imagen"className="inputcito" />    
           

                <button  onclick='componentDidMount'  id="boton" className="botoncito" id="boton" type="submit">Subir Foto</button>

            </form>
         </div>
        )
    }
    
} 
export default Submit;