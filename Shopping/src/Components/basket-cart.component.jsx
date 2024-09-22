import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

const BasketCart = (props) => {
    console.log(props.basket);
    const totalPrice = props.basket.reduce((acc, product) => acc + product.price, 0);
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
                        </div>
                    </div>
                ))
            }
            <h3>
                Toplam Sepet Tutarı: {totalPrice.toFixed(2)} &#8378;
            </h3>
        </div>
    )
}

BasketCart.propTypes = {
    basket: PropTypes.array.isRequired,
}

const mapStateToProps = (state) => {
    return {
        basket: state.basket,
    }
}


const ConnectedProduct = connect(mapStateToProps)(BasketCart);
export default ConnectedProduct;
