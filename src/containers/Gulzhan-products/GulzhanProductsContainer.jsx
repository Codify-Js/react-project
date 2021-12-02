import { render } from '@testing-library/react'
import React from 'react'
import { productsList } from '../../Mock/mockProducts'
import './GulzhanProductsContainer.css'

export default class GulzhanProductsContainer extends React.Component{
    constructor(props){
        super(props)

        this.state={
            productsList: productsList(),
            counter: 0,
        } 

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick = () =>{
        this.setState(state =>({
            counter: state.counter + 1
        }))
        
    }
    render() {
    return (
        <div>
        <div>
            <span className="products-header">Products by Gulzhan</span>
            <div>Counter: {this.state.counter}</div>
            <button className="products-counter-btn" onClick={this.handleClick}>COUNT PRODUCTS</button>
            {this.state.productsList.map(product=><div className="product" key={product.id}>{product.title}</div>)}
        </div>
        </div>
    )
}
}

