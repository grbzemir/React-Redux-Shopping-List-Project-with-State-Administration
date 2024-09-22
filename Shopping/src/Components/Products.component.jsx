import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { addBasket } from '../Redux/Actions/index.actions'
import PropTypes from 'prop-types'

const Product = (props) => {
    console.log(props.productList);
    return (
        <div>
            <h2>
                <span>Alınacaklar Listem</span>
                <Link className='link' to="/basket">Faturam &#10095;</Link>
            </h2>
            {
                props.productList.map((product) =>
                (
                    <div className='product' key={product.id}>
                        <img src={product.image} alt={product.name} />
                        <div>
                            <h4>{product.name}</h4>
                            <p>{product.price} &#8378;</p>
                            <button onClick={() => props.addBasket(product)}>Sepete Ekle</button>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

Product.propTypes = {
    productList: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired
    })).isRequired,
    addBasket: PropTypes.func.isRequired
};


const mapStateToProps = (state) => {
    return {
        productList: state.productList,
    }
}

const ConnectedProduct = connect(mapStateToProps, { addBasket })(Product);
export default ConnectedProduct;
