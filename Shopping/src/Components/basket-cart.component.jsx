import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBasket, addBasket } from '../Redux/Actions/index.actions';
import { useEffect } from 'react';

const BasketCart = (props) => {
    const totalPrice = props.basket.reduce((acc, product) => acc + product.price, 0);

    useEffect(() => {
        const storedBasket = JSON.parse(localStorage.getItem('basket'));
        if (storedBasket) {
            storedBasket.forEach(product => {
                props.addBasket(product);
            });
        }
    }, []);

    return (
        <div>
            <h2>
                <Link className='link' to='/'>Alınacaklar Listem &#10094;</Link>
                <span>Faturam</span>
            </h2>
            {
                props.basket.map((product) => (
                    <div className='product' key={product.id}>
                        <img src={product.image} alt={product.name} />
                        <div>
                            <h4>{product.name}</h4>
                            <p>{product.price} &#8378;</p>
                            <button onClick={() => props.removeBasket(product.id)}>Sepetten Çıkar</button>
                        </div>
                    </div>
                ))
            }
            <h3>
                Toplam Sepet Tutarı: {totalPrice.toFixed(2)} &#8378;
            </h3>
        </div>
    );
}

BasketCart.propTypes = {
    basket: PropTypes.array.isRequired,
    removeBasket: PropTypes.func.isRequired,
    addBasket: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
    return {
        basket: state.basket,
    };
}

const mapDispatchToProps = {
    removeBasket,
    addBasket,
};

const ConnectedBasketCart = connect(mapStateToProps, mapDispatchToProps)(BasketCart);
export default ConnectedBasketCart;
