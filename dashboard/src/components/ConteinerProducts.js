import React, { useState, useEffect } from "react";
import Product from "./Product";

function ConteinerProducts () {
    const [products, setProducts] = useState([]);
	
	useEffect(() => {
        fetch('api/products')
        .then(response => response.json())
        .then(products => {
            console.log(products)
            setProducts({ products })
        })
        .catch(error => console.log(error))
	}, [])
    
    return (
        <div className="">
            <section>
                <article class="bar-conteiner">
                    <nav>
                        <ul class="identification-bar">
                            <li>Id</li>
                            <li>Nombre</li>
                            <li>Editar</li>
                            <li>Eliminar</li>
                        </ul>
                    </nav>
                </article>
                <article>
                    {products.map( (data, i) => {
                        return <Product {...data} key={i}/>
                    })
                    }
                </article>
            </section>
        </div>
    );
}

export default ConteinerProducts;