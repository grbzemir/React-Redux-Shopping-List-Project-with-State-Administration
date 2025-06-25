import React from 'react'
import { Link } from 'react-router-dom'

const Card = () => {
    return (
        <div>
            <h2>
                <Link to='/'>&#10094; Alınacaklar Listem</Link>{''}
                <span>Faturam</span>
            </h2>
        </div>
    )
}

export default Card
