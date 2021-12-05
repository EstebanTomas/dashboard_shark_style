import React, { useState, useEffect } from 'react';
import Category from './Category';

function ConteinerCategories () {

    const [categories, setCategories] = useState ([]);

    useEffect(() => {
        fetch( '/api/products')
        .then( response => response.json())
        .then( data => {
            setCategories(data.meta.countByCategory);
        })
        .catch(error => console.error(error))
    }, [])

    return (
        <div className="conteiner-categories">
            <div className="border-categories border border-radius background-white">
                <div className="title-categories background border-radius">
                    <div className="">
                        Total de Categorias
                    </div>
                    <div className="bold">
                        {categories.length}
                    </div>
                </div>
                <div className="subconteiner-categories">
                    {categories.map((data, i) => {
                        return <Category {...data} key={i} />
                    })}
                </div>
            </div>
        </div>
    )
}

export default ConteinerCategories;