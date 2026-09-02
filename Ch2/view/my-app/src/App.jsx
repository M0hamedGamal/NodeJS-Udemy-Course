import {Route, Routes} from "react-router";
import Nav from "./nav/Nav.jsx";
import AddProduct from "./admin/AddProduct.jsx";
import Shop from "./admin/Shop.jsx";

function App() {
    return (<>
        <Nav/>
        <Routes>
            <Route path="/admin/shop" element={<Shop/>}/>
            <Route path="/admin/add-product" element={<AddProduct/>}/>
        </Routes>
    </>)
}

export default App
