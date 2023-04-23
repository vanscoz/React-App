
import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import firebase from '../../../../../src/Firebase.js';
import "../../estilos/estilos.css";

class Cadastro extends Component{
    constructor(props){
      super(props);
      this.state = {
        email:"",
        senha:"",
        nome: "",
        sobrenome: "",
        dataNascimento:""
      }
      
      this.gravar = this.gravar.bind(this);
    }
    
    async gravar(){
        
        await firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.senha).then(async(retorno) => 
        {
          await firebase.firestore().collection("usuario").doc(retorno.user.uid).set({
            nome: this.state.nome,
            sobrenome: this.state.sobrenome,
            dataNascimento: this.state.dataNascimento
          }).then(data => alert('Cadastro efetuado com sucesso!\nAcesse a página de login' ))
          
        })
    /*
      await firebase.firestore().collection("usuario").add({
            email: this.state.email,
            senha: this.state.senha,
            nome: this.state.nome,
            sobrenome: this.state.sobrenome,
            dataNascimento: this.state.dataNascimento
        })             
*/
    }

    render(){
      return(
        <div>
            <h1>Pagina de Cadastro</h1>
            <input type='email' placeholder='E-mail' onChange={ (e) => this.setState({email: e.target.value })}/>
            <br/>
            <input type='password' placeholder='Senha' onChange={ (e) => this.setState({senha: e.target.value })}/>
            <br/>
            <input type='text' placeholder='Nome' onChange={ (e) => this.setState({nome: e.target.value })}/>
            <br/>
            <input type='text' placeholder='Sobrenome' onChange={ (e) => this.setState({ sobrenome: e.target.value})}/>
            <br/>
            <input type='date' placeholder='Data de Nascimento' onChange={ (e) => this.setState({ dataNascimento: e.target.value})}/>
            <br/>
            <Link to="../Login"><button>Login</button></Link>
            <button onClick={this.gravar}>Gravar</button>
            <Link to="/"><button>Home</button></Link>
        </div>
      )
    }
}

export default Cadastro;