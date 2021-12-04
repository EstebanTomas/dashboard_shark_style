import React from "react";
import Product from "./Product";

function ConteinerProducts () {
    let allData = [
        {
            id: 1,
            name: "Remera Rosa"
        },
        {
            id: 2,
            name: "Remera Naranja"
        },
        {
            id: 3,
            name: "Pantalones Nike"
        },
        {
            id: 4,
            name: "Campera Adidas"
        },
        {
            id: 5,
            name: "Short Ottom"
        },
        {
            id: 6,
            name: "Musculosa de Oferta"
        },
        {
            id: 7,
            name: "Calzas para entrenar"
        },
        {
            id: 8,
            name: "Buzo Negro Oscuro"
        },
    ]

    return (
        <div className="conteiner-products">
            <article className="subconteiner-nav">
                <nav>
                    <ul className="ul-products">
                        <li className="li-products">Id</li>
                        <li className="li-products">Nombre</li>
                        <li className="li-products">Editar</li>
                        <li className="li-products">Eliminar</li>
                    </ul>
                </nav>
            </article>
            <article>
                {allData.map( (data, i) => {
                    return <Product {...data} key={i}/>
                })
                }
            </article>
        </div>
    );
}

export default ConteinerProducts;