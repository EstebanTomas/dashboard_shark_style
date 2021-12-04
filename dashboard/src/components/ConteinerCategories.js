import React  from 'react';
import Category from './Category';

function ConteinerCategories () {
    let remeras = {
        name: "Remeras",
        amount: 8
    }
    let musculosas = {
        name: "Musculosas",
        amount: 4
    }
    let pantalones = {
        name: "Pantalones Largos",
        amount: 6
    }
    let shorts = {
        name: "Shorts",
        amount: 6
    }
    let calzas = {
        name: "Calzas Termicas",
        amount: 4
    }
    let camperas = {
        name: "Camperas",
        amount: 8
    }
    let buzos = {
        name: "Buzos",
        amount: 4
    }
    let conjuntos = {
        name: "Conjuntos",
        amount: 4
    }

    let allData = [remeras, musculosas, pantalones, shorts, calzas, camperas, buzos, conjuntos]

    return (
        <div className="conteiner-categories">
            <div className="title-categories">
                <div className="">
                    Total de Categorias
                </div>
                <div className="">
                    8
                </div>
            </div>
            <div className="subconteiner-categories">
                {allData.map((data, i) => {
                    return <Category {...data} key={i} />
                })}
            </div>
        </div>
    )
}

export default ConteinerCategories;