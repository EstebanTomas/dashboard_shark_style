import React from "react";

function Product (props) {
    return (
        <div>
            <ul class="administrator-options">
                <li class="id">
                    {props.id}
                </li>
                <li class="text">
                    {props.name}
                </li>
                <li class="edit">
                    <a href="/administration/products/edit/<%= products.id %>"><i class="fas fa-edit"></i></a>
                </li>
                <li class="delete">
                    <form action="/administration/products/delete/<%= products.id %>?_method=DELETE" method="POST">
                        <button id="button-delete" type="submit"><i class="fas fa-trash-alt"></i></button>
                    </form>
                </li>
            </ul>
        </div>
    );
}

export default Product;