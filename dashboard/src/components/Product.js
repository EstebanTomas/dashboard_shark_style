import React from "react";

function Product (props) {
    return (
        <div className="product">
            <ul className="administrator-product">
                <li className="id-product">
                    {props.id}
                </li>
                <li className="text-product">
                    {props.name}
                </li>
                <li className="edit-product">
                    <a href="http://localhost:3030/administration/products/edit/">
                        <i id="icon-edit-product" class="fas fa-edit"></i>
                    </a>
                </li>
                <li className="delete-product">
                    <form action="http://localhost:3030/administration/products/delete/?_method=DELETE" method="POST">
                        <button id="button-delete" type="submit"><i class="fas fa-trash-alt"></i></button>
                    </form>
                </li>
            </ul>
        </div>
    );
}

export default Product;