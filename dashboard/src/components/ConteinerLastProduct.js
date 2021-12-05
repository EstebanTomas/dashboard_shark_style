import React, { useState, useEffect } from "react";

function ConteinerLastProduct () {
    const [product, setProduct] = useState ([]);

    useEffect(() => {
        fetch('/api/products')
        .then( response => response.json())
        .then( data => {
            let idLastProduct = data.products.pop();
            fetch( `/api/products/${idLastProduct.id}`)
            .then( response => response.json())
            .then( data => {
                setProduct(data.product);
            })
            .catch(error => console.error(error))
            })
        .catch(error => console.error(error))
    }, [])    

    return (
        <div className="conteiner-last-product">
            <div className="border-last-product">
                <div className="title-last-product">
                    <div className="">Último Producto cargado</div>
                </div>
                <div className="info-last-product">
                    <div className="half-conteiner-image">
                        <img className="image" src={product.image}/>
                    </div>
                    <div className="half-conteiner-description">
                        <div className="name-last-product">{product.name}</div>
                        <div className="name-last-product">{product.description}</div>
                        <a className="button-detail" href={product.detail}>Ver detalle</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ConteinerLastProduct