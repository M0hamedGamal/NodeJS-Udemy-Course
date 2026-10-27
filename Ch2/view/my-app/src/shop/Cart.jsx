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
    const deleteProduct = async (id) => {
        try {
            const response = await axios.delete(`http://localhost:5000/cart/${id}`)
            await getCart()
        } catch (e) {
            console.log(e)

        }
    }

    if (!cart.length) {
        return <>
            <h1 className='text-4xl font-bold m-8'>No Orders found.</h1>
        </>
    }

    return (
        <>
            <div className='flex flex-col gap-8 m-8'>
                {cart.map((ct) => (
                    <div
                        className='flex justify-between items-center border-4 border-blue-500 rounded-xl shadow-2xl p-6 h-50'
                        key={ct.product.id}>
                        <div className='flex justify-center items-center h-50'>
                            <img src={ct.product.imageUrl} alt="Product"
                                 className=' border-y-4 border-blue-500 max-h-full'/>
                            <div className="flex flex-col justify-center items-center gap-2">
                                <h1 className='text-4xl font-bold'>{ct.product.title}</h1>
                                <div className="flex justify-center items-center gap-2">
                                    <h2 className='text-2xl text-gray-400 font-bold'>{ct.product.description || '...'}</h2>
                                    <h2 className='text-2xl text-gray-400 font-bold'>${ct.product.price}</h2>
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-center items-center gap-4 min-w-40'>
                            <h1 className='text-4xl font-bold'>({ct.qty})</h1>
                            <button className='text-xl font-medium text-white bg-blue-500 rounded-xl shadow-2xl
                             cursor-pointer px-5 py-4 hover:shadow-none hover:bg-blue-400
                             transition-all duration-300 min-w-40'
                                    onClick={() => {
                                    }}>
                                Checkout
                            </button>
                            <button className='text-xl font-medium text-white bg-red-500 rounded-xl shadow-2xl
                             cursor-pointer px-5 py-4 hover:shadow-none hover:bg-red-400
                             transition-all duration-300 min-w-40'
                                    onClick={() => deleteProduct(ct.product.id)}>
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Cart;