import React from 'react';

function SmallCard(props) {
    return (
        <div className="small-card">
            <div className="name-card">
                {props.title}
            </div>
            <div className="amount-card">
                {props.amount}
            </div>
        </div>
    );
}

export default SmallCard;