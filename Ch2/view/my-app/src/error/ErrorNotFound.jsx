import {useNavigate} from "react-router";
import React from "react";

const ErrorNotFound = () => {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate("/shop");
    };

    return (
        <div className="flex flex-col items-center justify-center vh-90 p-5">
            <img
                src={"/assets/404.png"}
                alt="Error"
            />
            <h2 className=" text-7xl text-[#C90B14] font-bold mt-3 ml-4">
                PAGE NOT FOUND
            </h2>
            <button className='text-3xl font-medium text-white bg-blue-500 rounded-xl shadow-2xl
                             cursor-pointer mt-8 px-8 py-4 hover:shadow-none hover:bg-blue-400
                              transition-all duration-300'
                    onClick={handleClick}
            >
                Continue Shopping
            </button>
        </div>
    );
};

export default ErrorNotFound;
