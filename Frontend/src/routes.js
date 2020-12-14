import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Buscador from './Components/Buscador';

const Routes = () =>{
    return(
        <Switch>
            <Route exact path='/' component={Buscador}/>
        </Switch>
    );
}

