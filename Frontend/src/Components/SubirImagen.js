import React, {Component} from 'react';
import {useState} from 'react';
import Axios from 'axios';
import {Redirect} from 'react-router-dom';
import '../Publics/styless.css';
    
//class Submit extends Component {

    //render(){
const Subir = () => {

        const [form, setForm] = useState({
            title:'',
            description:''
          });

        const onChange = (e)=>{
            const  {name, value} = e.target;
            setForm({
              ...form, //spread Operator 
              [name] : value,
            });
        }


        const onSubir = (e)=>{
            const { title, description} = form;
            Axios.post('routes/index/subido',
            {title, description}
            ).then(result=>{
                console.log(result)
            }).catch((err)=>{
                console.log(err);
            })
        }
        
        return( 
        
            <div className="maincito">
                <form className="formcito" action="/" enctype="multipart/form-data" method="POST">   

                    <input className="inputcito" type="text" placeholder="Nombre de la Foto" autocomplete="off" onpaste="return false" value={form.title} onChange={onChange}/>
                    
                    <input className="inputcito" type="text" placeholder="Descripcion" autocomplete="off" onpaste="return false" value={form.description} onChange={onChange}/>
                
                    <input type="file" name="imagen"className="inputcito" />    
            

                    <button  onclick={onSubir}  id="boton" className="botoncito" id="boton" type="submit">Subir Foto</button>

                </form>
            </div>
        )
    
    
}
export default Subir;