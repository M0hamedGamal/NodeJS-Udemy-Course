import { NavLink } from "react-router";

const Nav = () => {
    return (
        <nav className='flex items-center justify-center w-full gap-8 bg-blue-100 py-2 mb-15'>
            <NavLink to="/admin/shop" className={({isActive}) => (
                `text-3xl font-bold ${isActive ? 'text-blue-500': 'text-black'} hover:text-gray-700`
            )} end>
                Shop
            </NavLink>
            <NavLink to="/admin/add-product" className={({isActive}) => (
                `text-3xl font-bold ${isActive ? 'text-blue-500': 'text-black'} hover:text-gray-700`
            )} end>
                Add Product
            </NavLink>
        </nav>
    );
}

export default Nav