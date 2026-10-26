import {Route, Routes} from "react-router";
import Nav from "./nav/Nav.jsx";
import AddProduct from "./admin/AddProduct.jsx";
import ProductList from "./shop/ProductList.jsx";
import ErrorNotFound from "./error/ErrorNotFound.jsx";
import AdminProducts from "./admin/AdminProducts.jsx";
import Cart from "./shop/Cart.jsx";
import Orders from "./shop/Orders.jsx";
import EditProduct from "./admin/EditProduct.jsx";
import Products from "./shop/Products.jsx";
import ProductDetails from "./shop/ProductDetails.jsx";

function App() {
    return (<>
        <Nav/>
        <Routes>
            <Route path="/shop" element={<ProductList/>}/>
            <Route path="/products" element={<Products/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/orders" element={<Orders/>}/>
            <Route path="/admin/add-product" element={<AddProduct/>}/>
            <Route path="/details-product/:id" element={<ProductDetails/>}/>
            <Route path="/admin/edit-product/:id" element={<EditProduct/>}/>
            <Route path="/admin/products" element={<AdminProducts/>}/>
            <Route path="*" element={<ErrorNotFound/>}/>

        </Routes>
    </>)
}

export default App
