import React, {useEffect, useId, useState} from 'react'
import {useNavigate} from "react-router";
import axios from "axios";

const AddProduct = (props) => {
    const [product, setProduct] = useState({})
    const navigate = useNavigate()
    const id = useId()
    const addProduct = async () => {
        try {
            const response = await axios.post('http://localhost:8000/admin/add-product', {
                product: {
                    id,
                    title: product.title,
                }
            })

            navigate('/shop')
        } catch (e) {
            console.log(e)
        }
    }
    return (

        <div className='flex items-center justify-center space-y-4  m-8'>
            <div className='flex flex-col items-center justify-center w-fit'>
                <input type={"text"} name={'product'} placeholder='Add Product'
                       onChange={(e) => setProduct({title: e.target.value})}
                       className='text-2xl border-4 border-blue-500 outline-none rounded-lg py-4 px-2 w-100'/>
                <button onClick={addProduct}
                        className='text-3xl font-medium text-white bg-blue-500 rounded-xl shadow-2xl
                             cursor-pointer mt-4 px-8 py-4 hover:shadow-none hover:bg-blue-400
                             transition-all duration-300 w-100'>
                    Add Product
                </button>
            </div>
        </div>
    )
}

export default AddProduct
