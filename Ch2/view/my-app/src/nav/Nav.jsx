import { NavLink } from "react-router";

const Nav = () => {
    return (
        <nav className='flex items-center justify-center w-full gap-8 bg-white py-8'>
            <NavLink to="/shop" className={({isActive}) => (
                `text-3xl ${isActive ? 'text-blue-500 font-bold': 'text-black'} hover:text-blue-400`
            )} end>
                Shop
            </NavLink>
            <NavLink to="/cart" className={({isActive}) => (
                `text-3xl ${isActive ? 'text-blue-500 font-bold': 'text-black'} hover:text-blue-400`
            )} end>
                Cart
            </NavLink>
            <NavLink to="/admin/add-product" className={({isActive}) => (
                `text-3xl ${isActive ? 'text-blue-500 font-bold': 'text-black'} hover:text-blue-400`
            )} end>
                Add Product
            </NavLink>
            <NavLink to="/admin/products" className={({isActive}) => (
                `text-3xl ${isActive ? 'text-blue-500 font-bold': 'text-black'} hover:text-blue-400`
            )} end>
                Admin Products
            </NavLink>
        </nav>
    );
}

export default Nav