import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router";
import axios from "axios";

function ProductDetails(props) {
    const navigate = useNavigate();
    const [product, setProduct] = useState({});
    const params = useParams();
    const productId = params.id

    useEffect(() => {
        const fetchProduct = async () => {
            const response = await axios.get(`http://localhost:8000/products/${productId}`);
            const prod = response.data.product;
            setProduct(prod);
        }

        fetchProduct()
    }, []);

    const handleAddToCart = async (product) => {
        try {
            await axios.post(`http://localhost:8000/cart`, {
                product
            })

            navigate('/cart')
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <div className='flex items-center justify-center m-8'>
            <div className='flex flex-col items-center justify-center space-y-4'>
                <h1 className='text-white text-7xl font-bold py-4'>{product.title}</h1>
                <img src={product.imageUrl} alt="Product" className='w-1/2'/>
                <h2 className='text-2xl text-gray-400 font-bold'>${product.price}</h2>
                <h2 className='text-2xl text-gray-400 font-bold'>{product.description || '...'}</h2>
                <button className='text-3xl font-medium text-white bg-[#008a63]/50 rounded-xl shadow-2xl
                             cursor-pointer mt-8 px-8 py-4 hover:shadow-none hover:bg-[#008a63]
                             transition-all duration-300 w-full'
                        onClick={() => handleAddToCart(product)}>
                    Add To Cart
                </button>
            </div>
        </div>
    );
}

export default ProductDetails;