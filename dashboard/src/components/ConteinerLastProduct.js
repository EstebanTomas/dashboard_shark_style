import React from "react";

function ConteinerLastProduct () {
    return (
        <div className="conteiner-last-product">
            <div className="title-last-product">
                <div className="">Último Producto cargado</div>
            </div>
            <div className="info-last-product">
                <div className="name-last-product">Remera en oferta</div>
                <div className="subconteiner-info-last-product">
                    <div className="half-conteiner-image">
                        <img className="image" src="/img/productImage/"/>
                    {/* Imagen del producto */}
                    </div>
                    <div className="half-conteiner-description">
                    {/* <div className="">Descripción</div> */}
                    <a className="button-detail" href="http://localhost:3030/products/detail/">Ver detalle</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ConteinerLastProduct