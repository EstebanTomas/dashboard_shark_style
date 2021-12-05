import React, { useEffect, useState} from "react";
import Product from "./Product";

function ConteinerProducts () {

    const [products, setProducts] = useState ([]);

    useEffect(() => {
        fetch( '/api/products')
        .then( response => response.json())
        .then( data => {
            setProducts(data.products);
        })
        .catch(error => console.error(error))
    }, [])

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
                {products.map( (data, i) => {
                    return <Product {...data} key={i}/>
                })
                }
            </article>
        </div>
    );
}

export default ConteinerProducts;