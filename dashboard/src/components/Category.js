import React from 'react';

function Category(props) {
    return (
        <div className="category">
            <div className="name-category">Hola</div>
            <div className="name-category">{props.name}</div>
            <div className="amount-category">{props.amount}</div>
        </div>
    );
}

export default Category;