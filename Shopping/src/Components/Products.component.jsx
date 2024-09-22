import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addBasket } from '../Redux/Actions/index.actions';
import PropTypes from 'prop-types';

const Product = (props) => {
    const handleAddToBasket = (product) => {

        const isProductInBasket = props.basket.some(item => item.id === product.id);

        if (!isProductInBasket) {
            props.addBasket(product);
        } else {
            alert('Bu ürün zaten sepette mevcut!');
        }
    };

    return (
        <div>
            <h2>
                <span>Alınacaklar Listem</span>
                <Link className='link' to="/basket">Faturam &#10095;</Link>
            </h2>
            {
                props.productList.map((product) => (
                    <div className='product' key={product.id}>
                        <img src={product.image} alt={product.name} />
                        <div>
                            <h4>{product.name}</h4>
                            <p>{product.price} &#8378;</p>
                            <button onClick={() => handleAddToBasket(product)}>Sepete Ekle</button>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}

Product.propTypes = {
    productList: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired
    })).isRequired,
    addBasket: PropTypes.func.isRequired,
    basket: PropTypes.array.isRequired, // sepetteki ürünleri almak için
};

const mapStateToProps = (state) => {
    return {
        productList: state.productList,
        basket: state.basket, // sepetteki ürünleri state'ten al
    };
}

const ConnectedProduct = connect(mapStateToProps, { addBasket })(Product);
export default ConnectedProduct;
