import React from "react";
import Beneficios from "../components/Beneficios";
import OfertasFecha from "../components/OfertasFecha";
import Linea from "../components/Linea";
import Producto from "../components/layout/Producto";
import OfertasFechaSmall from "../components/OfertasFechaSmall";
import productos from "../productos";

// importo el arvhivo "productos.js" para simular una consulta que carga los productos.
// un sub array de productos simulando que es una seleccion de productos destacados       
const filtered = productos.filter(function(element){
 return element.id <= 3;
   });
  
console.log(filtered);
const Home = (props) => {
    return (
        <div>
            <OfertasFecha />
            <Linea />
            <div className="container">
                <div className="col-md-12">
                    <div className="row justify-content-center my-1">
                       { productos.map(producto => {                           
                                return <div className='col-md-3 mb-4'>
                                    <Producto producto={producto} />
                        </div>
                        })}                      
                                           
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-md-10 promo-img my-3">
                        <img className="img-fluid" src="./images/banner-l.jpg" alt="Card image cap" />
                    </div>
                </div>
            </div>            
            <div className="container">
                <div className="col-md-12 text-center">
                <h3>PRODUCTOS DESTACADOS</h3>
                    <div className="row justify-content-center my-4">                    
                    { filtered.map(producto => {                           
                                return <div className='col-md-3 mb-4'>
                                    <Producto producto={producto} />
                        </div>
                        })}    
                    </div>
                </div>
            </div>
            <OfertasFechaSmall />            
            <Beneficios />
            <Linea/>
            <div className="container">
                <div className="row">
                    <div className="col-md-10 promo-img my-4">
                        <img className="img-fluid" src="./images/laptops-en-oferta.jpg" alt="Card image cap" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;