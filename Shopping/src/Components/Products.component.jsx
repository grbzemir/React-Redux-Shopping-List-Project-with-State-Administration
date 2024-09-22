import { Link } from 'react-router-dom'

const Product = () => {
    return (
        <div>
            <h1>
                <span>Alınacaklar Listem</span><Link to="/basket">Faturam &#10095;</Link>
            </h1>
        </div>
    )
}
export default Product