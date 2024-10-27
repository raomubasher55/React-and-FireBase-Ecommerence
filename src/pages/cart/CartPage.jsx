import React, { useEffect, useState } from 'react'
import Layout from '../../components/layout/Layout'
import { BiTrash } from 'react-icons/bi'
import img from '../../assets/bag_3.png'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, decrementQuantity, deleteFromCart, incrementQuantity } from '../../redux/cartSlice'
import { toast } from 'react-toastify'
import { useMyContext } from '../../context/MyContext'
import BuyNowModal from '../../components/buyNowModal/BuyNowModal'
import { addDoc, collection, Timestamp } from 'firebase/firestore'
import { fireDB, analytics, logEvent } from '../../firebase/firebaseCongif'
import { Navigate } from 'react-router-dom'

const CartPage = () => {
    const { user } = useMyContext();
    const [addressInfo, setAddressInfo] = useState({
        name: '',
        address: '',
        pincode: '',
        mobileNumber: '',
        time:  Timestamp.now().toDate().toISOString(),
        date: new Date().toLocaleString(
            'en-US',
            {
                month: 'short',
                day: '2-digit',
                year: 'numeric',
            }
        )
    });

    const buyNowFunction = () => {
        if (addressInfo.name === '' || addressInfo.address === '', addressInfo.mobileNumber === "", addressInfo.pincode === '') {
            toast.error('Please fill all the details')
        }

        const orderInfo = {
            cartItems,
            addressInfo,
            email: user.email,
            userid: user.uid,
            status: 'confirmed',
            user,
            time: Timestamp.now(),
            date: new Date().toLocaleString(
                'en-US',
                {
                    month: 'short',
                    day: '2-digit',
                    year: 'numeric',
                }
            )
        }

        try {
            const orderRef = collection(fireDB, 'order');
            addDoc(orderRef, orderInfo);
            logEvent(analytics, 'order_placed', {
                order_id: `${user.uid}-${Timestamp.now().seconds}`,
                total_amount: cartTotal,
                item_count: cartItems.length,
                address: addressInfo,
            });
            setAddressInfo({
                name: '',
                address: '',
                pincode: '',
                mobileNumber: '',
            })
            toast.success('Order placed successfully')
        } catch (error) {
            console.log(error);
        }

    }

    const cartItems = useSelector((state) => state.cart);
    const dispatch = useDispatch();


    //delete from cart function
    const deleteCart = (item) => {
        dispatch(deleteFromCart(item));
        logEvent(analytics, 'remove_from_cart', {
            item_name: item.title,
            item_id: item.id,
            price: item.price,
            quantity: item.quantity,
        });
        toast.success('Delete cart')
    }

    const handleIncrement = (id) => {
        dispatch(incrementQuantity(id));
    }

    const handleDecrement = (id) => {
        dispatch(decrementQuantity(id));
    }

    //cart item total
    const cartItemTotal = cartItems.map(item => item.quantity).reduce((preValue, currValue) => preValue + currValue, 0);
    const cartTotal = cartItems.map((item => item.price * item.quantity)).reduce((preValue, currValue) => preValue + currValue, 0)


    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems])

    return (
        <Layout>
            {/* <div className="container mx-auto px-4 max-w-7xl lg:px-0 pt-12"> */}
            <div className="mx-auto max-w-2xl py-8 lg:max-w-7xl pt-20">
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Shopping Cart
                    </h1>
                    <form className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
                        <section aria-labelledby="cart-heading" className="rounded-lg bg-white lg:col-span-8">
                            <h2 id="cart-heading" className="sr-only">
                                Items in your shopping cart
                            </h2>
                            <ul role="list" className="divide-y divide-gray-200">
                                {cartItems.length > 0 ?
                                    cartItems.map((item, index) => (
                                        <div key={index} className="">
                                            <li className="flex py-6 sm:py-6 ">
                                                <div className="flex-shrink-0">
                                                    <img
                                                        src={item.productImageUrl}
                                                        alt="img"
                                                        className="sm:h-38 sm:w-38 h-24 w-24 rounded-md object-contain object-center"
                                                    />
                                                </div>

                                                <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                                                    <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                                                        <div>
                                                            <div className="flex justify-between">
                                                                <h3 className="text-sm">
                                                                    <div className="font-semibold text-black">
                                                                        {item.title}
                                                                    </div>
                                                                </h3>
                                                            </div>
                                                            <div className="mt-1 flex text-sm">
                                                                <p className="text-sm text-gray-500">{item.category}</p>
                                                            </div>
                                                            <div className="mt-1 flex items-end">
                                                                <p className="text-sm font-medium text-gray-600">
                                                                    {item.price}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <div className="mb-2 flex">
                                                <div className="min-w-24 flex">
                                                    <button onClick={() => handleDecrement(item.id)} type="button" className="h-7 w-7" >
                                                        -
                                                    </button>
                                                    <input
                                                        type="text"
                                                        className="mx-1 h-7 w-9 rounded-md border text-center"
                                                        value={item.quantity}
                                                        onChange={() => { }}
                                                    />
                                                    <button onClick={() => handleIncrement(item.id)} type="button" className="flex h-7 w-7 items-center justify-center">
                                                        +
                                                    </button>
                                                </div>
                                                <div className="ml-6 flex text-sm">
                                                    <button onClick={() => deleteCart(item)} type="button" className="flex items-center space-x-1 px-2 py-1 pl-0">
                                                        <BiTrash size={12} className="text-red-500" />
                                                        <span className="text-xs font-medium text-red-500">Remove</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                    :
                                    <h1>No Item</h1>
                                }
                            </ul>
                        </section>


                        <section
                            aria-labelledby="summary-heading"
                            className="mt-16 mr-12 rounded-md bg-white lg:col-span-4 lg:mt-0 lg:p-0"
                        >
                            <h2
                                id="summary-heading"
                                className=" border-b border-gray-200 px-4 py-3 text-lg font-medium text-gray-900 sm:p-4"
                            >
                                Price Details
                            </h2>
                            <div>
                                <dl className=" space-y-1 px-2 py-4">
                                    <div className="flex items-center justify-between">
                                        <dt className="text-sm text-gray-800">Price ({cartItemTotal}) items</dt>
                                        <dd className="text-sm font-medium text-gray-900">₹ {cartTotal}</dd>
                                    </div>
                                    <div className="flex items-center justify-between py-4">
                                        <dt className="flex text-sm text-gray-800">
                                            <span>Delivery Charges</span>
                                        </dt>
                                        <dd className="text-sm font-medium text-green-700">Free</dd>
                                    </div>
                                    <div className="flex items-center justify-between border-y border-dashed py-4 ">
                                        <dt className="text-base font-medium text-gray-900">Total Amount</dt>
                                        <dd className="text-base font-medium text-gray-900">PKR {cartTotal}</dd>
                                    </div>
                                </dl>
                                <div className="px-2 pb-4 font-medium text-green-700">
                                    <div className="flex gap-4 mb-6">
                                        {user
                                            ? <BuyNowModal
                                                addressInfo={addressInfo}
                                                setAddressInfo={setAddressInfo}
                                                buyNowFunction={buyNowFunction}
                                            /> : <Navigate to={'/login'} />
                                        }
                                    </div>
                                </div>
                            </div>
                        </section>
                    </form>
                </div>

    


        </Layout>
    )
}

export default CartPage
