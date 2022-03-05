import React from "react";
import Beneficios from "../components/Beneficios";
import OfertasFecha from "../components/OfertasFecha";
import Linea from "../components/Linea";
import Ofertasimpresiones from "../components/layout/impresiones/OfertasImpresiones";
import Preciosimpresiones from "../components/layout/impresiones/Preciosimpresiones";
import Serviciosimpresion from "../components/layout/impresiones/Serviciosimpresion";
const Impresiones = (props) => {
    return (
        <div>            
            <OfertasFecha/>            
            <Linea/>    
            <Ofertasimpresiones/>
            <Preciosimpresiones/>
            <Serviciosimpresion/>
            <Linea/>
            <Beneficios/>
        </div>    )
}

export default Impresiones;