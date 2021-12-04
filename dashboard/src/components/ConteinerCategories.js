import React, { Component } from 'react';
import Category from './Category';

class ConteinerCategories extends Component {
    constructor() {
        super()
        this.state = {
            categoriesList: []
        }
    }

    componentDidMount() {
        fetch('api/products')
            .then(respuesta => {
                return respuesta.json()
            })
            .then(data => {
                // console.log(genres)
                this.setState({ categoriesList: data.meta.countByCategory })
            })
            .catch(error => console.log(error))
    }

    render () {
        return (
            <div className="conteiner-categories">
                <div className="">
                    <div className="">
                        Total de Categorias
                    </div>
                    <div className="">
                        {/* total de las categorias */}
                    </div>
                </div>
                <div className="">
                    {this.state.categoriesList.map((category, index) => {
                    { var key = Object.entries(category) }
                        return <Category category={key[0][0]} count={key[0][1]} />
                    })}
                </div>
            </div>
        )
    }
}

export default ConteinerCategories;