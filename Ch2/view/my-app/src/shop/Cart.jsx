import React, {useEffect, useState} from 'react';
import axios from "axios";

function Cart(props) {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        getCart()
    }, [])

    const getCart = async () => {
        try {
            const response = await axios.get('http://localhost:5000/cart');

            setCart(response.data)
        } catch (e) {
            console.log(e)
        }
    }

    const deleteProductFromCart = async (id) => {
        const response = await axios.delete(`http://localhost:5000/cart/${id}`)
        console.log(response)

        getCart()
    }

    if (!cart.length) {
        return <>
            <h1>There's No Product To Show.</h1>
        </>
    }

    return (
        <>
            <ul>{
                cart.map((item) => (
                    <li key={item.product.id}>{
                        item.product.title
                    } ({item.qty})
                        <button className='text-3xl font-medium text-white bg-red-500 rounded-xl shadow-2xl
                             cursor-pointer mt-8 px-8 py-4 hover:shadow-none hover:bg-red-400
                             transition-all duration-300 w-full'
                                onClick={() => deleteProductFromCart(item.product.id)}>
                            Delete
                        </button>
                    </li>
                ))
            }</ul>
        </>
    );
}

export default Cart;