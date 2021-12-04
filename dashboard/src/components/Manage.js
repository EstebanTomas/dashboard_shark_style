import React from 'react';
import CreateProducts from './CreateProducts';
import ConteinerProducts from './ConteinerProducts';

function Manage() {
    return (
        <div className="manage">
            <CreateProducts />
            <ConteinerProducts />
        </div>
    );
}

export default Manage;