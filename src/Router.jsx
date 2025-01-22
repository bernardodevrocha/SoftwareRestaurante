import React from 'react';
import Home from './pages/Home/index';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Relatorios from './pages/Relatorios';
import Pedidos from './pages/Pedidos';

const AppRouter=()=> {
    return(
        <Router>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/relatorios' element={<Relatorios/>}/>
                <Route path='/pedidos' element={<Pedidos/>}/>
            </Routes>
        </Router>
    )
}

export default AppRouter;