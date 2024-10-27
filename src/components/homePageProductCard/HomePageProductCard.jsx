import React, { useEffect } from 'react'
import img from '../../assets/bag_1.png'
import { useNavigate } from 'react-router-dom'
import { useMyContext } from '../../context/MyContext';
import Loader from '../loader/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, deleteFromCart } from '../../redux/cartSlice';
import { toast } from 'react-toastify';
import { logEvent } from 'firebase/analytics';
import { analytics } from '../../firebase/firebaseCongif';

const HomePageProductCard = () => {
    const navigate = useNavigate();
    const { getAllProducts, loading } = useMyContext();

    const cartItems = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    //add to cart function
    const addCart = (item) => {
        dispatch(addToCart(item));
        logEvent(analytics, 'add_to_cart', {
            item_name: item.title,
            item_id: item.id,
            price: item.price,
            quantity: item.quantity,
          });
        toast.success('Added to Cart')
    }
    
    //delete from cart function
    const deleteCart = (item)=>{
        dispatch(deleteFromCart(item));
        logEvent(analytics, 'remove_from_cart', {
            item_name: item.title,
            item_id: item.id,
            price: item.price,
            quantity: item.quantity,
          });
        toast.success('Delete cart')
    }

    useEffect(() => {
        localStorage.setItem('cart' , JSON.stringify(cartItems));   
    }, [cartItems])
    

    return (
        <>
            <div className="mt-10">
                {/* Heading  */}
                <div className="">
                    <h1 className=" text-center mb-5 text-2xl font-semibold">Bestselling Products</h1>
                </div>

                {/* main 1 */}
                <section className="text-gray-600 body-font">

                    <div className="container px-5 py-5 mx-auto">

                        <div className="flex justify-center">
                            {loading && <Loader />}
                        </div>
                        {/* main 3  */}
                        <div className="flex flex-wrap -m-4">
                            {getAllProducts && getAllProducts.slice(0, 8).map((item, index) => (
                                <div key={index} onClick={() => navigate(`/product-info/${item.id}`)} className="p-4 w-full md:w-1/4">
                                    <div className="h-full border border-gray-300 rounded-xl overflow-hidden shadow-md cursor-pointer">
                                        <img
                                            className="lg:h-80 h-96 w-full"
                                            src={item.productImageUrl}
                                            alt="img"
                                        />
                                        <div className="p-6">
                                            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                                                E-Pakistan
                                            </h2>
                                            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                                {item.title.substring(0, 25)}
                                            </h1>
                                            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                                {item.price}
                                            </h1>

                                            <div className="flex justify-center">
                                                {cartItems.some((p)=> p.id === item.id)
                                                ?
                                                <button
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        deleteCart(item);
                                                    }}
                                                    className="bg-red-700 hover:bg-pink-600 w-full text-white py-[4px] rounded-lg font-bold"
                                                >
                                                    Delete to Cart
                                                </button>
                                                : 
                                                <button
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        addCart(item);
                                                    }}
                                                    className="bg-red-700 hover:bg-pink-600 w-full text-white py-[4px] rounded-lg font-bold"
                                                >
                                                    Add to Cart
                                                </button>
                                                }

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </section>
            </div>
        </>
    )
}

export default HomePageProductCard
