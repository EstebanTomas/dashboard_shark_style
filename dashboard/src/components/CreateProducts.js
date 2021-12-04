import React from "react";

function CreateProducts () {
    return (
        <div className="create-products">
            {/* Agregar la referencia con la etiqueta <a> */}
            <h4><a class="link" href="/administration/products/create">Crear producto</a></h4>
            <div className="">
                <div className="">Agrega un Producto</div>
            </div>
        </div>
    );
}

export default CreateProducts;