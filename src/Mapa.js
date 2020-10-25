import React, { Component } from 'react';
import mapa from './mapa.svg'

class Mapa extends React.Component{
    render(){
        return(
            <div> 
                
                <img src={mapa} width="100%" height="1000vh" />

            </div>
        )
    }
}

export default Mapa;