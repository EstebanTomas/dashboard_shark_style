import React from 'react';
import ConteinerTopCard from './ConteinerTopCard';
import ConteinerLastProduct from './ConteinerLastProduct';
import ConteinerCategories from './ConteinerCategories';

function Statistics() {
    return (
        <div className="statistics">
            <ConteinerTopCard />
            <div className="subconteiner-statistics">
                <ConteinerLastProduct />
                <ConteinerCategories />
            </div>
        </div>
    );
}

export default Statistics;