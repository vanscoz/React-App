import React, {Component} from 'react';
import { Link } from "react-router-dom";
import "../../estilos/estilos.css";

class Sobre extends Component{
    constructor(props){
      super(props);
    }

    render(){
      return(
        <div>
            <h1>Sobre</h1>
            <p>Tecnologias Para Desenvolvimento Web (11100010566_20231_02)</p>
            <p>Somativa 2</p>
            <p>Vanessa Scoz Braga</p>
            <p>React para o JavaScript</p>
            <Link to="/"><button>Página Inicial</button></Link>
        </div>
      )
    }
}

export default Sobre;