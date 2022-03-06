import React from "react";
import Card from 'react-bootstrap/Card';
import '../../styles/components/Layout/producto.css';



export default function Producto({producto}) {   
    console.log(producto);
    return <div> 
            <Card style={{ width: '18em' }}>
                    <Card.Img variant="top" src={producto.imagen} />
                    <Card.Body>
                        <Card.Title>Card Title {producto.nombre} </Card.Title>
                        <Card.Text>                            
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <div className="d-flex flex-column">
                            <div>
                                <div className="izquierda">
                                    <strong>{producto.precio}</strong>
                                </div>
                                <div className="derecha">
                                    <li class="derecha"><i class="fa fa-fw fa-cart-plus fa-lg" ></i></li>
                                </div>
                            </div>
                            <div className="observacion text-center my-2">
                                Entrega inmediata
                            </div>
                            <div className="my-2">
                                <hr />
                                <i className="p-1 fa fa-fw fa-brands fa-solid fa-star iconoProducto"></i>
                                <i className="p-1 fa fa-fw fa-brands fa-solid fa-star iconoProducto"></i>
                                <i className="p-1 fa fa-fw fa-brands fa-solid fa-star iconoProducto"></i>
                                <i className="p-1 fa fa-fw fa-brands fa-solid fa-star iconoProducto"></i>
                                <i className="p-1 fa fa-fw fa-brands fa-solid fa-star iconoProducto"></i>

                            
                            </div>
                        </div>
                    </Card.Body>
                </Card>
      
    </div>       
    
}

