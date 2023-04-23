import {BrowserRouter, Route, Routes, Switch} from 'react-router-dom';

import Home from './paginas/Home/index.js';
import Sobre from './paginas/Sobre';

import NotFound from './paginas/NotFound';
import Cadastro from './paginas/Cadastro';
import Login from './paginas/Login';
import Principal from './paginas/Principal/index.js';


const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact={true} path="/" element={<Home/>} />
                <Route exact={true} path="/sobre" element={<Sobre/>} />
                <Route exact={true} path="/cadastro" element={<Cadastro/>} />
                <Route exact={true} path="/login" element={<Login/>} />
                <Route exact={true} path="/principal" element={<Principal/>} />
                <Route exact={true} path="*" element={<NotFound/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;