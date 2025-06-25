import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Product from './Product'
import { clearBasket, removeBasket } from '../Redux/actions/Actions'

const Card = (props) => {
    // console.log(props.Basket);

    const totalPrice = props.Basket.reduce((total, Product) => {
        return total + Product.price;
    }, 0);
    return (
        <div>
            <h2>
                <Link to="/">&#10094; Alınacaklar Listem</Link>{' '}
                <span>Faturam</span>
            </h2>
            {props.Basket.map((product) => (
                <div className="product" key={product.id}>
                    <img src={product.image} alt={product.name} />
                    <div>
                        <h4>{product.name}</h4>
                        <p>{product.price} ₺</p>
                        <button onClick={() => props.removeBasket(product.id)}>Sepetten Çıkar</button>
                    </div>
                </div>
            ))}
            <h3>Toplam Sepet Tutarı: {totalPrice.toFixed(2)} ₺</h3>
            <button onClick={props.clearBasket}>Sepeti Temizle</button>
        </div>
    );
};

const mapStateToProps = (state) => ({
    Basket: state.Basket
});

export default connect(mapStateToProps, { removeBasket, clearBasket })(Card);