import React, {useEffect, useState} from 'react';
import axios from "axios";

function Cart(props) {
    const [cart, setCart] = useState([]);
    useEffect(() => {
        const getCart = async () => {
            try {
                const response = await axios.get('http://localhost:5000/cart');

                setCart(response.data)
            } catch (e) {
                console.log(e)
            }
        }

        getCart()
    }, [])
    return (
        <ul>{
            cart.map((item) => (
                <li key={item.product.id}>{
                    item.product.title
                } ({item.qty})</li>
            ))
        }</ul>
    );
}

export default Cart;