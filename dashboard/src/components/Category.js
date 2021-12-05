import React from 'react';

function Category(props) {
    return (
        <div className="category border border-radius background-dark">
            <div className="name-category gris-claro">{props.name}</div>
            <div className="amount-category gris-claro bold">{props.amount}</div>
        </div>
    );
}

export default Category;