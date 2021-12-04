import React from 'react';

function SmallCard(props) {
    return (
        <div className="small-card">
            <div className="name-card">
                {props.name}
            </div>
            <div className="amount-card">
                {props.description}
            </div>
        </div>
    );
}

export default SmallCard;