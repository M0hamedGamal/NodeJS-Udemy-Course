import {Route, Routes} from "react-router";
import Nav from "./nav/Nav.jsx";
import AddProduct from "./admin/AddProduct.jsx";
import ProductList from "./shop/ProductList.jsx";
import ErrorNotFound from "./error/Error.jsx";
import Products from "./admin/Products.jsx";
import Cart from "./shop/Cart.jsx";

function App() {
    return (<>
        <Nav/>
        <Routes>
            <Route path="/shop" element={<ProductList/>}/>
            {/*<Route path="/products" element={<Products/>}/>*/}
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/admin/add-product" element={<AddProduct/>}/>
            <Route path="/admin/products" element={<Products/>}/>
            <Route path="*" element={<ErrorNotFound/>}/>

        </Routes>
    </>)
}

export default App
