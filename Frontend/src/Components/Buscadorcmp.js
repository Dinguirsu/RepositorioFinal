import React, {Component} from 'react';



class Buscadorcmp extends Component {
    render(){

        return(
        <form>
            <div className="row">
            

                    <div className="form-group col-md-8">
                        <input type="text" className="form-control form-control-lg" 
                        placeholder="Busca tu Imagen Puedes buscar como: Perros , Futbol , etc" />
                    </div>

                    <div className="form-group col-md-4">
                        <input type="submit" className=" btn btn-lg btn-danger btn-block" value="BUSCAR" />
                    </div>
            </div>
        </form>
        );

        
    }

}

export default Buscadorcmp;