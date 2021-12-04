import React from 'react';
import SmallCard from './SmallCard';

function ConteinerTopCard() {
    let products = {
        title: "Productos",
        amount: 44
    }
    let users = {
        title: "Usuarios",
        amount: 2
    }    
    let cart = {
        title: "Productos en Carrito",
        amount: 4
    }
    let allData = [products, users, cart]

    return (
        <div className="conteiner-top-card">
            {allData.map((data, i) => {
                return <SmallCard {...data} key={i} />
            })}
        </div>
    )
}

export default ConteinerTopCard;