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

            navigate('/admin/shop')
        } catch (e) {
            console.log(e)
        }
    }
    return (

    <div className='flex flex-col items-center justify-center space-y-4'>
        <input type={"text"} name={'product'} placeholder='Add Product'
               onChange={(e) => setProduct({title: e.target.value})}
               className='border-4 border-orange-300 outline-none rounded-lg py-4 px-2 w-80'/>
        <button onClick={addProduct}
                className='text-white font-black border-4 border-blue-400 hover:border-blue-300
                 bg-blue-400 hover:bg-blue-300  rounded-lg px-10 py-4 cursor-pointer w-80'>
            Add Product
        </button>
    </div>
    )
}

export default AddProduct
