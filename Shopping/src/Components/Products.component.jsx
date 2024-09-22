import { Link } from 'react-router-dom'

const Product = () => {
    return (
        <div>
            <h2>
                <span>Alınacaklar Listem</span><Link to="/basket">Faturam &#10095;</Link>
            </h2>
        </div>
    )
}
export default Product