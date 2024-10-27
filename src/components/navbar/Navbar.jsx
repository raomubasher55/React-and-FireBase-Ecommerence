import React, { useState } from 'react'
import SearchBar from '../searchbar/SearchBar'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { logEvent } from 'firebase/analytics';
import { analytics } from '../../firebase/firebaseCongif';

const Navbar = () => {
    const [isCategoriesDropdownVisible, setCategoriesDropdownVisible] = useState(false);
    const [isAccountDropdownVisible, setAccountDropdownVisible] = useState(false);

    const user = JSON.parse(localStorage.getItem('users'));

    const navigate = useNavigate();


    const toggleCategoriesDropdown = () => {
        setCategoriesDropdownVisible(!isCategoriesDropdownVisible);
        logEvent(analytics, 'categories_dropdown_toggle', {
            visible: !isCategoriesDropdownVisible,
        });
    };

    const toggleAccountDropdown = () => {
        setAccountDropdownVisible(!isAccountDropdownVisible);
        logEvent(analytics, 'account_dropdown_toggle', {
            visible: !isAccountDropdownVisible,
        });
    };

    const handleOnLogout = async () => {
        localStorage.clear('users');
        logEvent(analytics, 'logout', {
            user_id: user?.id,
        });
        navigate('/');
    };

    const cartItems = useSelector((state) => state.cart);

    return (
        <>
            <div>
                <nav className="flex flex-col md:flex-row items-center justify-between py-4 px-12 border-b border-border fixed bg-white w-full z-10">
                    <div className="text-3xl font-bold mb-4 md:mb-0 md:mr-4">CoveCart</div>
                    <div>
                        <SearchBar />
                    </div>
                    <div className="flex items-center space-x-4">
                        <div className="flex items-center md:hidden">
                            <button id="menu-toggle" className="block text-primary hover:text-primary">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                                </svg>
                            </button>
                        </div>
                        <div className="hidden md:flex items-center font-semibold space-x-12">
                            <Link to="/" className="hover:text-primary">Home</Link>
                            <div className="relative category">
                                <button
                                    id="mega-menu-dropdown-button"
                                    onClick={toggleCategoriesDropdown}
                                    className="flex items-center justify-between w-full py-2 px-3 font-medium text-gray-900 border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                                >
                                    Categories
                                    <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 1 4 4 4-4" />
                                    </svg>
                                </button>
                                {isCategoriesDropdownVisible && (
                                    <div id="mega-menu-dropdown" className="absolute z-10  w-64  text-sm bg-white border border-gray-100 rounded-lg shadow-md dark:border-gray-700 md:grid-cols-3 dark:bg-gray-700">
                                        <div className="p-4 pb-0 text-gray-900 md:pb-4 dark:text-white">
                                            <ul className="space-y-4" aria-labelledby="mega-menu-dropdown-button">
                                                <li>
                                                    <Link to="/categories" className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500">
                                                        All Categories
                                                    </Link>
                                                </li>
                                                {/* {categories.map((category, index) => ( */}
                                                <li >
                                                    {/* <Link to={`/category/${category.slug}`} className="text-gray-500   dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500">
                                                            category name
                                                        </Link> */}
                                                </li>
                                                {/* ))} */}
                                            </ul>
                                        </div>
                                    </div>
                                )}
                            </div>
                            {/* <Badge count={cart?.cart?.length}>
                                <Link to="/cart" className="block py-2 px-4 hover:bg-gray-200 text-md">Cart</Link>
                            </Badge> */}
                            <div className="relative">
                                <button
                                    id="dropdownDelayButton"
                                    onClick={toggleAccountDropdown}
                                    className="font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
                                    type="button"
                                >
                                    My Account
                                    <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 1 4 4 4-4" />
                                    </svg>
                                </button>
                                {isAccountDropdownVisible && (
                                    <div id="dropdownDelay" className="absolute z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                                        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDelayButton">
                                            <li>
                                                <Link to={`${user.role === 'admin' ? '/admin-dashboard' : '/user-dashboard'}`} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</Link>
                                            </li>
                                            {user && <li>
                                                <Link onClick={handleOnLogout} to="/login" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Logout</Link>
                                            </li>}
                                            <li>
                                                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                                            </li>

                                        </ul>
                                    </div>
                                )}
                            </div>
                            <Link to={'/cart'} >Cart ({cartItems.length})</Link>
                            {!user && <div>
                                <button className='bg-blue-500 py-1  px-3 text-white rounded-lg'>Login</button>
                            </div>}
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Navbar
