import React, { useState, useEffect } from 'react';
import SmallCard from './SmallCard';

function ConteinerTopCard() {
    const [products, setProducts] = useState ([]);
    const [users, setUsers] = useState ([]);
    const [product_shop, setProductShop] = useState ([]);

    useEffect(() => {
        fetch( '/api/products')
        .then( response => response.json())
        .then( data => {
            setProducts(data.meta.count);
        })
        .catch(error => console.error(error))
    }, [])

    useEffect(() => {
        fetch( '/api/users')
        .then( response => response.json())
        .then( data => {
            setUsers(data.meta.count);
        })
        .catch(error => console.error(error))
    }, [])

    useEffect(() => {
        fetch( '/api/products_shop')
        .then( response => response.json())
        .then( data => {
            setProductShop(data.meta.count);
        })
        .catch(error => console.error(error))
    }, [])

    let allData = [ 
        {
            title: "Total de Productos",
            amount: products
        }, {
            title: "Productos en el Carrito",
            amount: product_shop
        }, {
            title: "Total de Usuarios",
            amount: users
        }
    ]

    return (
        <div className="conteiner-top-card">
            {allData.map((data, i) => {
                return <SmallCard {...data} key={i} />
            })}
        </div>
    )
}

export default ConteinerTopCard;