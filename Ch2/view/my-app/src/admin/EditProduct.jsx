import React, {useEffect, useId, useState} from 'react'
import {useNavigate, useParams} from "react-router";
import axios from "axios";

const EditProduct = (props) => {
    const [product, setProduct] = useState({})
    const navigate = useNavigate()
    const params = useParams()
    const productId = params.id

    useEffect(() => {
        getProduct()
    }, [])


    const getProduct = async () => {
        try {
            const response = await axios.get(`http://localhost:8000/admin/get-product/${productId}`)
            setProduct(response.data)
        } catch (e) {
            console.log(e)
        }
    }

    const addProduct = async () => {
        // try {
        //     const response = await axios.get(`http://localhost:8000/admin/get-product/${productId}`)
        //     setProduct(response.data)
        // } catch (e) {
        //     console.log(e)
        // }
    }
    return (

        <div className='flex items-center justify-center m-8'>
            <div className='flex flex-col items-center justify-center space-y-4 w-fit'>
                <input type={"text"} placeholder='Add Product'
                       className='text-2xl border-4 border-blue-500 outline-none rounded-lg py-4 px-2 w-100'
                       value={product.title}
                       onChange={(e) => setProduct({...product, title: e.target.value})}
                />
                <input type={"text"} placeholder='Image URL'
                       className='text-2xl border-4 border-blue-500 outline-none rounded-lg py-4 px-2 w-100'
                       value={product.imageUrl}
                       onChange={(e) => setProduct({...product, imageUrl: e.target.value})}
                />
                <input type={"number"} placeholder='Price'
                       className='text-2xl border-4 border-blue-500 outline-none rounded-lg py-4 px-2 w-100'
                       value={product.price}
                       onChange={(e) => setProduct({...product, price: e.target.value})}
                />

                <textarea placeholder='Description' rows={5}
                          className='text-2xl border-4 border-blue-500 outline-none rounded-lg py-4 px-2 w-100'
                          value={product.description}
                          onChange={(e) => setProduct({...product, description: e.target.value})}
                />
                <button onClick={addProduct}
                        className='text-3xl font-medium text-white bg-blue-500 rounded-xl shadow-2xl
                             cursor-pointer mt-4 px-8 py-4 hover:shadow-none hover:bg-blue-400
                             transition-all duration-300 w-100'>
                    Update Product
                </button>
            </div>
        </div>
    )
}

export default EditProduct
