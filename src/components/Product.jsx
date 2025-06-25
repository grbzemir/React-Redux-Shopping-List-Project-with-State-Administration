import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { addBasket } from '../Redux/actions/Actions';

const Product = (props) => {
    // console.log(props.ProductsList);
    return (
        <div>
            <h2>
                <span>Alınacaklar Listem</span>
                <Link to='/basket'>Faturam &#10095;</Link>{''}
            </h2>
            {
                props.ProductsList.map((product, index) => {
                    return (
                        <div className='product' key={index}>
                            <img src={product.image} alt={product.name} />
                            <div>
                                <h4>{product.name}</h4>
                                <p>{product.price} ₺</p>
                                <button onClick={() => props.addBasket(product)}>Sepete Ekle</button>
                            </div>
                        </div>
                    );
                })
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        ProductsList: state.ProductsList,
        Basket: state.Basket
    }
}

export default connect(mapStateToProps, { addBasket })(Product) 
