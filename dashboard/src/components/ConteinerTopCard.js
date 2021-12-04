import React, { useState, useEffect } from 'react';
import SmallCard from './SmallCard';

function ConteinerTopCard() {
    const [products, setProducts] = useState([]);
	
	useEffect(() => {
        fetch('api/products')
        .then(response => response.json())
        .then(products => {
            console.log(products)
            setProducts({ products })
        })
        .catch(error => console.log(error))
	}, [])

    return (
        <div className="conteiner-top-card">
            <div>Hola Mundo</div>
            {products.length > 0 && products.map((product, i) => {
                return <SmallCard {...product} key={i} />
            })}
        </div>


        //     <div className="small-card">
        //         <div className="name-card">
        //         </div>
        //         <div className="amount-card">
        //             {/* {props.amount} */}
        //         </div>
        //     </div>
        //     <div className="small-card">
        //         <div className="name-card">
        //             {/* {props.title} */}
        //         </div>
        //         <div className="amount-card">
        //             {/* {props.amount} */}
        //         </div>
        //     </div>
        //     <div className="small-card">
        //         <div className="name-card">
        //             {/* {props.title} */}
        //         </div>
        //         <div className="amount-card">
        //             {/* {props.amount} */}
        //         </div>
        //     </div>
    )
}

export default ConteinerTopCard;