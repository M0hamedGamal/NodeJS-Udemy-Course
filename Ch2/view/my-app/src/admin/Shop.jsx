import React, {useEffect, useState} from 'react';
import axios from "axios";

const Shop = (props) => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        const getShop = async () => {
            try {
                const response = await axios.get('http://localhost:8000/admin/get-products');

                setProducts(response.data.products)
            } catch (e) {
                console.log(e)
            }
        }

        getShop()
    }, [])
    return (
        <>
            <h1 className="text-7xl text-black font-bold underline">
                <div className='grid grid-cols-3 justify-center gap-8 m-8'>
                    {products.map((product) => (
                        <div className=' flex flex-col justify-center items-center border-4 border-blue-200 rounded-lg shadow-2xl p-8 pt-2' key={product.id}>
                            <h2 className='text-3xl'>{product.title}</h2>
                            <img src="/Product.jpg" alt="Product" className='w-1/2 mt-8'/>
                            <h2 className='text-2xl'>2.99$</h2>
                            <button className='text-xl border-4 border-blue-500 rounded-xl shadow-2xl
                             cursor-pointer no-underline mt-8 px-8 py-4
                             hover:shadow-none hover:bg-blue-400 hover:text-white transition-all duration-300'>Add To Cart</button>
                        </div>
                    ))}
                </div>
            </h1>
        </>
    )
}

export default Shop;