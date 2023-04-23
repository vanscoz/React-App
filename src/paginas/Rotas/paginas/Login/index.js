
import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import firebase from '../../../../../src/Firebase.js';
import "../../estilos/estilos.css";

class Login extends Component{
    constructor(props){
      super(props);
      this.state = {
        email:"",
        senha:"",
      }
      this.acessar = this.acessar.bind(this);
    }

    async acessar(){

        await firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.senha)
        .then(()=>{
            window.location.href="./Principal";

        })
        .catch((erro)=>{
            console.log(erro)
            alert("Usuário ou senha inválidos, tente novamente")
        })

        }
    


    render(){
      return(
        <div>
            <h1>Login</h1>
            <input type='email' placeholder='Email' onChange={ (e) => this.setState({email: e.target.value })}/>
            <br/>
            <input type='password' placeholder='Senha' onChange={ (e) => this.setState({senha: e.target.value })}/>
            <br/>
            <Link to="/"><button>Home</button></Link>
            <button onClick={this.acessar}>Logar</button>
        </div>
      )
    }
}

export default Login;