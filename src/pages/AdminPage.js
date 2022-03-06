import React from 'react';
import { NavLink } from "react-router-dom";

const Admin = (props) => {
    return ( 
        <div class="container-fluid bg-dark p-0">
        <div class="row justify-content-center align-items-center">
            <div class="col-md-2 text-white text-center logo">
                <h4>Red Informatica</h4>
            </div>
            <div class="col-md-8 text-white text-center">
                <h5>Sistema de Administracion</h5>
            </div>
            <div class="col-md-2 text-white text-center">
                <p class="nombreUusuario mt-2">Nombre Usuario</p>
            </div>
        </div>
    </div>
        );
 }

export default Admin;