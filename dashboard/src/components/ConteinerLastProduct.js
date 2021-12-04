import React from "react";

function ConteinerLastProduct () {
    return (
        <div className="conteiner-last-product">
            <div className="">
                <div className="">Último Producto cargado</div>
            </div>
            <div className="">
                {/* <div className="">Nombre del producto</div> */}
            </div>
            <div className="">
                <div className="">
                    <img className="image" src="/img/productImage/<%= data.product_shop.product.images[0].img %> "/>
                {/* Imagen del producto */}
                </div>
                <div className="">
                {/* <div className="">Descripción</div> */}
                <a className="button-detail" href="/products/detail/{id del producto}">Ver detalle</a>
                </div>
            </div>
        </div>
    )
}

export default ConteinerLastProduct