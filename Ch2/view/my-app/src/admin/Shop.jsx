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
                {products.map((product) => (
                    <div key={product.id}>{product.title}</div>
                ))}
            </h1>
        </>
    )
}

export default Shop;