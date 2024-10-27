import React, { useEffect } from 'react'
import Layout from '../../components/layout/Layout'
import { useNavigate, useParams } from 'react-router-dom'
import { useMyContext } from '../../context/MyContext'
import ProductCard from '../../components/ProductCard/ProductCard'
import Loader from '../../components/loader/Loader'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, deleteFromCart } from '../../redux/cartSlice'
import { toast } from 'react-toastify'
import { logEvent } from 'firebase/analytics'
import { analytics } from '../../firebase/firebaseCongif'

const CategoryPage = () => {
    const { getAllProducts, loading } = useMyContext();
    const navigate = useNavigate();
    const { categoryname } = useParams();

    //filter product
    const filterProduct = getAllProducts.filter((obj) => obj.category.includes(categoryname));


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
        <Layout>
            <div className="pt-16 text-2xl font-bold text-center">
                {categoryname}
            </div>
            <div className="flex justify-center">
                <div className='flex justify-center items-center'>
                    {loading && <div className='' > <Loader /> </div>}
                </div>
                {filterProduct.length > 0 ?
                    filterProduct.map((item, index) => (
                        <div key={index} className="mt-10">
                            <div onClick={() => navigate(`/product-info/${item.id}`)} className="p-4 w-full ">
                                <div className="h-full border border-gray-300 rounded-xl overflow-hidden shadow-md cursor-pointer">
                                    <img

                                        className="lg:h-80  h-96 w-full"
                                        src={item.productImageUrl}
                                        alt="img"
                                    />
                                    <div className="p-6">
                                        <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                                            E-Pakistan
                                        </h2>
                                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                            {item.title}
                                        </h1>
                                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                            {item.price}
                                        </h1>
                                        <div className="flex justify-center ">
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
                        </div>
                    ))
                    :
                    <div className="font-bold text-xl mt-12">
                     No {categoryname} product Found
                    </div>
                }
            </div>
        </Layout>
    )
}

export default CategoryPage
