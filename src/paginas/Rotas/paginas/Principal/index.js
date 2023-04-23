import React, { Component } from "react";
import firebase from '../../../../../src/Firebase.js';


class Principal extends Component{
    constructor(props){
        super(props);
        this.state ={
            nome:"",
            sobrenome:"",
            dataNascimento:""

        }
    }

    async componentDidMount(){

        firebase.auth().onAuthStateChanged(async (usuario) => {
            if (usuario) {
                var uid = usuario.uid
                console.log(uid)
                await firebase.firestore().collection("usuario").doc(uid).get()
                .then((retorno)=>
                {
                    this.setState({
                        nome: retorno.data().nome,
                        sobrenome : retorno.data().sobrenome,
                        dataNascimento : retorno.data().dataNascimento
                    })
                })
                  

            }
        })

    }

    render(){
        return(
            <div>
                <h1>Logado com sucesso!</h1>
                Nome: {this.state.nome}<br/>
                Sobrenome: {this.state.sobrenome}<br/>
                Data Nascimento: {this.state.dataNascimento}
            </div>
        )
    }
}


export default Principal