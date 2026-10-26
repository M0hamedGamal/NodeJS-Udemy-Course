import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useNavigate} from "react-router";

const Products = (props) => {
    const [products, setProducts] = useState([])
    const navigate = useNavigate();

    useEffect(() => {
        const getShop = async () => {
            try {
                const response = await axios.get('http://localhost:5000/products');

                setProducts(response.data.products)
            } catch (e) {
                console.log(e)
            }
        }

        getShop()
    }, [])


    const handleAddToCart = async (product) => {
        try {
            await axios.post(`http://localhost:5000/cart`, {
                product
            })

            navigate('/cart')
        } catch (e) {
            console.log(e)
        }
    }


    const navigateToEditProduct = (id) => {
        navigate(`/details-product/${id}`);
    }

    if (!products.length) {
        return <h1 className='text-4xl font-bold m-8'>No products found.</h1>;
    }

    return (
        <>
            <div className='grid grid-cols-3 justify-center gap-8 m-8'>
                {products.map((product) => (
                    <div
                        className=' flex flex-col justify-center items-center border-4 border-blue-500 rounded-xl shadow-2xl p-6'
                        key={product.id}>
                        <h1 className='text-4xl font-bold'>{product.title}</h1>
                        <img src={product.imageUrl} alt="Product" className='w-1/2'/>
                        <h2 className='text-2xl text-gray-400 font-bold'>${product.price}</h2>
                        <h2 className='text-2xl text-gray-400 font-bold'>{product.description || '...'}</h2>
                        <div className='flex justify-center items-center gap-4 w-full'>
                            <button className='text-3xl font-medium text-white bg-blue-500 rounded-xl shadow-2xl
                             cursor-pointer mt-8 px-8 py-4 hover:shadow-none hover:bg-blue-400
                             transition-all duration-300 w-full'
                                    onClick={() => navigateToEditProduct(product.id)}>
                                Details
                            </button>
                            <button className='text-3xl font-medium text-white bg-[#008a63]/50 rounded-xl shadow-2xl
                             cursor-pointer mt-8 px-8 py-4 hover:shadow-none hover:bg-[#008a63]
                             transition-all duration-300 w-full'
                                    onClick={() => handleAddToCart(product)}>
                                Add To Cart
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Products;