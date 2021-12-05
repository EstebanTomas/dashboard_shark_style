import React from 'react';

function SmallCard(props) {
    return (
        <div className="small-card border border-radius background-celeste">
            <div className="name-card azul-oscuro">
                {props.title}
            </div>
            <div className="amount-card azul-oscuro bold">
                {props.amount}
            </div>
        </div>
    );
}

export default SmallCard;